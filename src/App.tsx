import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './components/ui/dialog';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';
import { ChatScreen } from './components/ChatScreen';
import { AccessibilitySettings } from './components/AccessibilitySettings';
import { RevisionReview } from './components/RevisionReview';
import { ErrorBiasPanel } from './components/ErrorBiasPanel';
import { ConsentModal } from './components/ConsentModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { TranslateDialog } from './components/TranslateDialog';
import { useTranslations, type Language } from './utils/translations';

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

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'chat' | 'settings' | 'revision'>('chat');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [revisionOpen, setRevisionOpen] = useState(false);
  const [biasAlertOpen, setBiasAlertOpen] = useState(false);
  const [translateDialogOpen, setTranslateDialogOpen] = useState(false);
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const [biasMessage, setBiasMessage] = useState('');
  const [biasMessageId, setBiasMessageId] = useState<string | null>(null);
  const [messageUpdateRequest, setMessageUpdateRequest] = useState<{ id: string; updates: Partial<Message> } | null>(null);
  const [revisionMessage, setRevisionMessage] = useState<Message | null>(null);
  const [consentGiven, setConsentGiven] = useState(false);
  const [dataCollection, setDataCollection] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const [accessibilitySettings, setAccessibilitySettings] = useState({
    highContrast: false,
    largeFonts: false,
    screenReaderMode: false,
    simpleEnglish: false,
    ttsEnabled: true,
    voiceInputEnabled: true,
    strictScope: false,
    language: 'en' as Language,
    privacyMode: false,
    fontSize: 100,
  });

  const t = useTranslations(accessibilitySettings.language);

  const handleSettingChange = (key: string, value: boolean | string) => {
    setAccessibilitySettings(prev => ({
      ...prev,
      [key]: value
    }));

    // Sync privacyMode with dataCollection
    if (key === 'privacyMode') {
      setDataCollection(!(value as boolean));
    }

    // Apply high contrast immediately
    if (key === 'highContrast') {
      document.documentElement.classList.toggle('dark', value as boolean);
    }

    // Apply large fonts immediately
    if (key === 'largeFonts') {
      document.documentElement.classList.toggle('large-fonts', value as boolean);
    }
  };

  const handleOpenSettings = () => {
    setSettingsOpen(true);
  };

  const handleOpenRevision = (message: Message) => {
    setRevisionMessage(message);
    setRevisionOpen(true);
  };

  const handleShowBiasAlert = (message: string, messageId: string) => {
    setBiasMessage(message);
    setBiasMessageId(messageId);
    setBiasAlertOpen(true);
  };

  const handleBiasReframe = async () => {
    if (!biasMessageId) return;
    
    toast.info(t.toastReframing);
    setBiasAlertOpen(false);
    
    // Trigger a message update via custom event
    window.dispatchEvent(new CustomEvent('updateMessage', {
      detail: {
        messageId: biasMessageId,
        transform: (content: string) => `**Reframed for neutrality:**\n\n${content}\n\n*Note: This response has been adjusted to reduce potential biases and present a more balanced perspective.*`
      }
    }));
    
    setTimeout(() => {
      toast.success(t.toastReframingSuccess);
    }, 1000);
  };

  const handleBiasTranslate = () => {
    // Open the translate dialog
    setBiasAlertOpen(false);
    setTranslateDialogOpen(true);
  };

  const handleTranslateToLanguage = async (targetLanguage: Language) => {
    if (!biasMessageId) return;
    
    const languageNames = {
      en: 'English',
      es: 'Spanish',
      fr: 'French',
      de: 'German'
    };
    
    toast.info(`Translating to ${languageNames[targetLanguage]}...`);
    
    // Trigger a message update via custom event
    window.dispatchEvent(new CustomEvent('updateMessage', {
      detail: {
        messageId: biasMessageId,
        transform: (content: string) => `**Translated to ${languageNames[targetLanguage]}:**\n\n${content}\n\n*Note: This content is being displayed in ${languageNames[targetLanguage]}. For actual AI translation, this would use a translation API.*`
      }
    }));
    
    setTimeout(() => {
      toast.success(`Content translated to ${languageNames[targetLanguage]}`);
    }, 1000);
  };

  return (
    <div className={`min-h-screen ${accessibilitySettings.highContrast ? 'dark' : ''}`}>
      {/* Main Chat Interface */}
      <ChatScreen
        onOpenSettings={handleOpenSettings}
        onOpenRevision={handleOpenRevision}
        onShowBiasAlert={handleShowBiasAlert}
        onViewPrivacyPolicy={() => setPrivacyPolicyOpen(true)}
        accessibilitySettings={accessibilitySettings}
        dataCollection={dataCollection}
        language={accessibilitySettings.language}
        onToggleDataCollection={(value) => {
          setDataCollection(value);
          setAccessibilitySettings(prev => ({
            ...prev,
            privacyMode: !value
          }));
          toast.info(
            value 
              ? t.toastDataCollectionOn
              : t.toastDataCollectionOff
          );
        }}
        onUpdateAccessibilitySetting={(key, value) => {
          handleSettingChange(key, value);
        }}
      />

      {/* Accessibility Settings Dialog */}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t.settingsTitle}</DialogTitle>
            <DialogDescription>{t.settingsDescription}</DialogDescription>
          </DialogHeader>
          <AccessibilitySettings
            settings={accessibilitySettings}
            onSettingChange={handleSettingChange}
            onClose={() => setSettingsOpen(false)}
            language={accessibilitySettings.language}
          />
        </DialogContent>
      </Dialog>

      {/* Revision Review Dialog */}
      <Dialog open={revisionOpen} onOpenChange={setRevisionOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t.reviewChangesTitle}</DialogTitle>
            <DialogDescription>{t.reviewChangesDesc}</DialogDescription>
          </DialogHeader>
          {revisionMessage && (
            <RevisionReview
              message={revisionMessage}
              onClose={() => setRevisionOpen(false)}
              language={accessibilitySettings.language}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Bias/Error Alert Dialog */}
      <Dialog open={biasAlertOpen} onOpenChange={setBiasAlertOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">{t.biasAlertTitle}</DialogTitle>
            <DialogDescription className="sr-only">{t.biasAlertDesc}</DialogDescription>
          </DialogHeader>
          <ErrorBiasPanel
            message={biasMessage}
            onReframe={handleBiasReframe}
            onTranslate={handleBiasTranslate}
            language={accessibilitySettings.language}
          />
        </DialogContent>
      </Dialog>

      {/* Translate Dialog */}
      <TranslateDialog
        open={translateDialogOpen}
        onClose={() => setTranslateDialogOpen(false)}
        language={accessibilitySettings.language}
        onTranslate={handleTranslateToLanguage}
      />

      {/* Toast Notifications */}
      <Toaster />

      {/* Consent Modal */}
      <ConsentModal
        open={!consentGiven}
        onConsent={(collectData) => {
          setDataCollection(collectData);
          setAccessibilitySettings(prev => ({
            ...prev,
            privacyMode: !collectData
          }));
          setConsentGiven(true);
        }}
        language={accessibilitySettings.language}
        onLanguageChange={(newLanguage) => {
          setAccessibilitySettings(prev => ({
            ...prev,
            language: newLanguage
          }));
        }}
        fontSize={accessibilitySettings.fontSize}
        onFontSizeChange={(newSize) => {
          setAccessibilitySettings(prev => ({
            ...prev,
            fontSize: newSize
          }));
        }}
      />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        open={privacyPolicyOpen}
        onClose={() => setPrivacyPolicyOpen(false)}
        privacyMode={accessibilitySettings.privacyMode}
        dataCollection={dataCollection}
        language={accessibilitySettings.language}
      />
    </div>
  );
}