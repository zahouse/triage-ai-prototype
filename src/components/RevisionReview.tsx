import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { ArrowLeft, ArrowRight, Lightbulb, ThumbsUp, ThumbsDown } from 'lucide-react';
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

interface RevisionReviewProps {
  message: Message;
  onClose: () => void;
  language: Language;
}

export function RevisionReview({ message, onClose, language }: RevisionReviewProps) {
  const t = useTranslations(language);
  const [selectedVersion, setSelectedVersion] = useState<'ai' | 'user' | 'merge'>('user');
  const [trustFeedback, setTrustFeedback] = useState<'yes' | 'no' | null>(null);

  const originalVersion = message.versions?.[message.versions.length - 1] || '';
  const userVersion = message.content;

  // Simple diff highlighting function
  const highlightDifferences = (original: string, revised: string) => {
    const originalWords = original.split(' ');
    const revisedWords = revised.split(' ');
    const maxLength = Math.max(originalWords.length, revisedWords.length);
    
    const differences = [];
    for (let i = 0; i < maxLength; i++) {
      const originalWord = originalWords[i] || '';
      const revisedWord = revisedWords[i] || '';
      
      if (originalWord !== revisedWord) {
        differences.push({
          type: 'change',
          original: originalWord,
          revised: revisedWord,
          index: i
        });
      }
    }
    
    return differences;
  };

  const differences = highlightDifferences(originalVersion, userVersion);

  const handleApplyRevision = () => {
    // In a real app, this would update the message
    console.log(`Applied revision: ${selectedVersion}`);
    onClose();
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={onClose}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Chat
        </Button>
        <h2>Review Changes</h2>
      </div>

      {/* Side-by-side comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Original AI Response */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Original AI Response
              <Badge variant="outline">AI Generated</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="leading-relaxed">{originalVersion}</p>
              </div>
              
              {message.confidence && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Confidence:</span>
                  <Badge variant={message.confidence === 'high' ? 'secondary' : 
                                 message.confidence === 'medium' ? 'outline' : 'destructive'}>
                    {message.confidence}
                  </Badge>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* User-Corrected Version */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Your Corrected Version
              <Badge variant="secondary">User Edited</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border-l-4 border-l-blue-500">
                <p className="leading-relaxed">{userVersion}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Differences Highlight */}
      {differences.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              What Changed?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Here are the main differences between the original AI response and your corrected version:
              </p>
              
              <div className="space-y-2">
                {differences.slice(0, 5).map((diff, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-blue-500" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm line-through text-red-600 dark:text-red-400">
                          {diff.original}
                        </span>
                        <span className="text-sm">→</span>
                        <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                          {diff.revised}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {differences.length > 5 && (
                  <p className="text-sm text-muted-foreground">
                    ...and {differences.length - 5} more changes
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Version Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Choose Final Version</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedVersion} onValueChange={setSelectedVersion}>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ai" id="ai-version" />
                <Label htmlFor="ai-version">Keep the original AI response</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="user" id="user-version" />
                <Label htmlFor="user-version">Use my corrected version</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="merge" id="merge-version" />
                <Label htmlFor="merge-version">Merge both versions (let AI suggest a combination)</Label>
              </div>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Trust Feedback */}
      <Card>
        <CardHeader>
          <CardTitle>Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>Did this explanation help you trust the AI more?</p>
            
            <div className="flex gap-3">
              <Button
                variant={trustFeedback === 'yes' ? 'default' : 'outline'}
                onClick={() => setTrustFeedback('yes')}
                className="flex items-center gap-2"
              >
                <ThumbsUp className="h-4 w-4" />
                Yes, it helped
              </Button>
              
              <Button
                variant={trustFeedback === 'no' ? 'default' : 'outline'}
                onClick={() => setTrustFeedback('no')}
                className="flex items-center gap-2"
              >
                <ThumbsDown className="h-4 w-4" />
                No, still unclear
              </Button>
            </div>
            
            {trustFeedback === 'no' && (
              <p className="text-sm text-muted-foreground mt-2">
                Thank you for the feedback. We'll work on making AI explanations clearer.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-end">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleApplyRevision}>
          Apply Changes
        </Button>
      </div>
    </div>
  );
}