import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { ConfidenceMeter } from './ConfidenceMeter';
import { ReasoningPanel } from './ReasoningPanel';
import { FontSizeControls } from './FontSizeControls';
import { MessageBubble } from './MessageBubble';
import { PrivacyBadge } from './PrivacyBadge';
import { VoiceInputIndicator } from './VoiceInputIndicator';
import { ClinicianReviewBanner } from './ClinicianReviewBanner';
import { Mic, Send, Settings, History, Shield, Loader2 } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { toast } from 'sonner@2.0.3';
import { useTranslations, type Language } from '../utils/translations';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  confidence?: 'low' | 'medium' | 'high';
  reasoning?: string;
  timestamp: Date;
  versions?: string[];
  isEdited?: boolean;
}

interface ChatScreenProps {
  onOpenSettings: () => void;
  onOpenRevision: (message: Message) => void;
  onShowBiasAlert: (message: string, messageId: string) => void;
  onViewPrivacyPolicy: () => void;
  onUpdateMessage?: (messageId: string, updates: Partial<Message>) => void;
  accessibilitySettings: {
    highContrast: boolean;
    largeFonts: boolean;
    screenReaderMode: boolean;
    simpleEnglish: boolean;
    ttsEnabled: boolean;
    voiceInputEnabled: boolean;
    strictScope: boolean;
    language: Language;
  };
  dataCollection: boolean;
  onToggleDataCollection: (value: boolean) => void;
  onUpdateAccessibilitySetting?: (key: string, value: boolean) => void;
  language: Language;
}

export function ChatScreen({ 
  onOpenSettings, 
  onOpenRevision, 
  onShowBiasAlert,
  onViewPrivacyPolicy,
  onUpdateMessage,
  accessibilitySettings,
  dataCollection,
  onToggleDataCollection,
  language,
  onUpdateAccessibilitySetting
}: ChatScreenProps) {
  const t = useTranslations(language);
  
  const [messages, setMessages] = useState<Message[]>([]);
  
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [recognition, setRecognition] = useState<any>(null);
  const [isBraveBrowser, setIsBraveBrowser] = useState(false);
  const [continuedMessages, setContinuedMessages] = useState<Set<string>>(new Set());

  // Detect Brave browser
  useEffect(() => {
    const detectBrave = async () => {
      if ((navigator as any).brave && await (navigator as any).brave.isBrave()) {
        setIsBraveBrowser(true);
        toast.info('Brave browser detected. Voice features may require additional permissions.', {
          duration: 5000,
        });
      }
    };
    detectBrave();
  }, []);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onstart = () => {
        setIsListening(true);
        setIsTranscribing(true);
        toast.success('Voice input activated');
      };

      recognitionInstance.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }

        if (finalTranscript) {
          setInputValue(prev => prev + ' ' + finalTranscript);
          setTranscription(finalTranscript);
        } else {
          setTranscription(interimTranscript);
        }
      };

      recognitionInstance.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        setIsTranscribing(false);
        
        // Provide specific error messages
        if (event.error === 'not-allowed') {
          toast.error('Microphone access denied. Please allow microphone access in your browser settings.');
        } else if (event.error === 'no-speech') {
          toast.error('No speech detected. Please try again.');
        } else if (event.error === 'audio-capture') {
          toast.error('No microphone found. Please check your audio devices.');
        } else if (event.error === 'network') {
          toast.error('Network error occurred. Please check your connection.');
        } else {
          toast.error(`Voice input error: ${event.error}`);
        }
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
        setIsTranscribing(false);
        setTranscription('');
      };

      setRecognition(recognitionInstance);
    }
  }, []);

  // Listen for message update events from App.tsx
  useEffect(() => {
    const handleMessageUpdate = (event: any) => {
      const { messageId, transform } = event.detail;
      
      setMessages(prev => prev.map(msg => {
        if (msg.id === messageId) {
          const newContent = transform(msg.content);
          return {
            ...msg,
            content: newContent,
            isEdited: true,
            versions: [...(msg.versions || []), msg.content]
          };
        }
        return msg;
      }));
    };

    window.addEventListener('updateMessage', handleMessageUpdate);
    return () => window.removeEventListener('updateMessage', handleMessageUpdate);
  }, []);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Call the Supabase Edge Function
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-3443125a/chat`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            messages: messages.concat(userMessage),
            settings: accessibilitySettings,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API call failed:', errorData);
        throw new Error(errorData.error || 'Failed to get AI response');
      }

      const data = await response.json();

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: data.content,
        isUser: false,
        confidence: data.confidence,
        reasoning: data.reasoning,
        timestamp: new Date(),
        versions: [],
      };

      setMessages(prev => [...prev, aiResponse]);

      // Show bias alert if detected
      if (data.biasDetected) {
        onShowBiasAlert(data.biasMessage, aiResponse.id);
      }

    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(`Failed to get AI response: ${error.message}`);
      
      // Add error message to chat
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error processing your request. Please try again.',
        isUser: false,
        confidence: 'low',
        reasoning: 'An error occurred while communicating with the AI service.',
        timestamp: new Date(),
        versions: [],
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTTSToggle = (messageId: string) => {
    const message = messages.find(m => m.id === messageId);
    if (message && accessibilitySettings.ttsEnabled) {
      // Check if speech synthesis is available
      if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        
        // Create a new speech utterance
        const utterance = new SpeechSynthesisUtterance(message.content);
        utterance.lang = 'en-US';
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        
        utterance.onstart = () => {
          toast.success('Reading message aloud');
        };
        
        utterance.onerror = (event) => {
          console.error('Speech synthesis error:', event);
          toast.error('Failed to read message');
        };
        
        utterance.onend = () => {
          console.log('Finished reading message');
        };
        
        // Speak the message
        window.speechSynthesis.speak(utterance);
      } else {
        toast.error('Text-to-speech not supported in your browser');
      }
    }
  };

  const handleVoiceInput = () => {
    if (recognition) {
      if (isListening) {
        recognition.stop();
      } else {
        // Start recognition directly - browser will handle permissions
        try {
          recognition.start();
        } catch (error) {
          console.error('Recognition start error:', error);
          if (isBraveBrowser) {
            toast.error('Brave blocks speech recognition by default. Please use Chrome, Edge, or Firefox for voice features.', {
              duration: 6000,
            });
          } else {
            toast.error('Could not start voice input. Please check your browser permissions.', {
              duration: 4000,
            });
          }
        }
      }
    } else {
      if (isBraveBrowser) {
        toast.error('Brave browser blocks Web Speech API by default. For voice features, please use Chrome, Edge, or Firefox.', {
          duration: 8000,
        });
      } else {
        toast.error('Speech recognition is not supported in your browser. Please use Chrome, Edge, or Safari.', {
          duration: 4000,
        });
      }
    }
  };

  return (
    <div className={`flex flex-col h-screen ${accessibilitySettings.highContrast ? 'bg-black text-white' : 'bg-background'}`}>
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b bg-background backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <h1>{t.headerTitle}</h1>
          <FontSizeControls language={language} />
        </div>
        
        <div className="flex items-center gap-4">
          <PrivacyBadge
            privacyMode={!dataCollection}
            dataCollection={dataCollection}
            onTogglePrivacy={() => onToggleDataCollection(!dataCollection)}
            onToggleDataCollection={() => onToggleDataCollection(!dataCollection)}
            onViewPrivacyPolicy={onViewPrivacyPolicy}
            language={language}
          />
          
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={onOpenSettings}
                  aria-label="Open accessibility settings"
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t.settingsTitle}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* Chat Area */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4 max-w-4xl mx-auto">
          <VoiceInputIndicator
            isListening={isListening}
            isTranscribing={isTranscribing}
            transcription={transcription}
            onStop={() => setIsListening(false)}
            onPlayback={() => console.log('Playing back audio...')}
            onViewAsText={() => console.log('Viewing transcription as text...')}
          />
          
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-[60vh]">
              <h2 className="text-3xl text-muted-foreground">{t.chatEmptyState}</h2>
            </div>
          ) : (
            messages.map((message) => (
              <div key={message.id} className="space-y-2">
                <MessageBubble
                  message={message}
                  onTTSToggle={() => handleTTSToggle(message.id)}
                  accessibilitySettings={accessibilitySettings}
                />
                
                {!message.isUser && (
                  <>
                    {!continuedMessages.has(message.id) && (
                      <div className="ml-4">
                        <ClinicianReviewBanner
                          confidence={message.confidence || 'medium'}
                          onAskClinician={() => toast.info('Clinician consultation requested')}
                          onContinue={() => {
                            setContinuedMessages(prev => new Set(prev).add(message.id));
                          }}
                          onSendToClinician={() => toast.info('Forwarding to clinician...')}
                          reviewStatus="none"
                          language={accessibilitySettings.language}
                        />
                      </div>
                    )}
                    
                    <div className="flex items-center gap-4 ml-4">
                      <ConfidenceMeter 
                        confidence={message.confidence} 
                        language={accessibilitySettings.language}
                      />
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {/* Handle version history */}}
                        aria-label="View response history"
                      >
                        <History className="h-4 w-4 mr-2" />
                        History ({(message.versions?.length || 0) + 1})
                      </Button>
                    </div>
                    
                    {message.reasoning && (
                      <div className="ml-4">
                        <ReasoningPanel 
                          reasoning={message.reasoning}
                          simpleEnglish={accessibilitySettings.simpleEnglish}
                          language={accessibilitySettings.language}
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="sticky bottom-0 z-10 p-4 border-t bg-background backdrop-blur-sm">
        <div className="flex gap-2 max-w-4xl mx-auto">
          <div className="flex-1 relative">
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t.chatPlaceholder}
              className="resize-none min-h-[60px]"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              aria-label="Message input"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            {accessibilitySettings.voiceInputEnabled && (
              <Button
                variant={isListening ? "destructive" : "outline"}
                size="icon"
                onClick={handleVoiceInput}
                aria-label={isListening ? "Stop voice input" : "Start voice input"}
              >
                <Mic className="h-4 w-4" />
              </Button>
            )}
            
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              aria-label="Send message"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        
        {/* Medical Disclaimer */}
        <div className="px-4 pb-3 text-center">
          <p className="text-xs text-muted-foreground">
            <strong>{t.medicalDisclaimer}</strong> {t.medicalDisclaimerDesc}
          </p>
        </div>
      </div>
    </div>
  );
}