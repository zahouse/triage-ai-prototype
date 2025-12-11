import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Shield, Eye, Lock, AlertCircle, Languages, Type } from 'lucide-react';
import { useTranslations, type Language } from '../utils/translations';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';

interface ConsentModalProps {
  open: boolean;
  onConsent: (collectData: boolean) => void;
  language: Language;
  onLanguageChange?: (language: Language) => void;
  fontSize?: number;
  onFontSizeChange?: (size: number) => void;
}

export function ConsentModal({ open, onConsent, language, onLanguageChange, fontSize = 100, onFontSizeChange }: ConsentModalProps) {
  const t = useTranslations(language);
  
  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent 
        className="max-w-2xl max-h-[90vh] flex flex-col overflow-hidden [&>button]:hidden" 
        onPointerDownOutside={(e) => e.preventDefault()}
        style={{ fontSize: `${fontSize}%` }}
      >
        <DialogHeader className="shrink-0">
          <div className="space-y-3">
            <div>
              <DialogTitle className="text-2xl">{t.consentTitle}</DialogTitle>
              <DialogDescription>
                {t.consentDescription}
              </DialogDescription>
            </div>
            
            <div className="flex items-center gap-3 flex-wrap">
              {/* Font Size Control */}
              {onFontSizeChange && (
                <div className="flex items-center gap-2">
                  <Type className="h-4 w-4 text-muted-foreground" />
                  <div className="w-24">
                    <Slider
                      value={[fontSize]}
                      onValueChange={([value]) => onFontSizeChange(value)}
                      min={80}
                      max={150}
                      step={10}
                      className="cursor-pointer"
                      aria-label="Font size"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-8">{fontSize}%</span>
                </div>
              )}
              
              {/* Language Selector */}
              {onLanguageChange && (
                <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4 text-muted-foreground" />
                  <Select onValueChange={onLanguageChange} value={language}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">🇺🇸 English</SelectItem>
                      <SelectItem value="es">🇪🇸 Español</SelectItem>
                      <SelectItem value="fr">🇫🇷 Français</SelectItem>
                      <SelectItem value="de">🇩🇪 Deutsch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 py-4 overflow-y-auto flex-1 pr-2">{/* Scrollable content area */}
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100">{t.yourPrivacyMatters}</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                  {t.yourPrivacyMattersDesc}
                </p>
              </div>
            </div>
          </div>

          <Card className="p-4">
            <h4 className="font-semibold mb-3">{t.whatWeCollectTitle}:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Eye className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <span>{t.conversationHistory} {t.conversationTranscriptsDesc}</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <span>{t.interactionPatterns} {t.anonymizedUsageDesc}</span>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <span>{t.accessibilityPreferences} {t.accessibilityImprovementsDesc}</span>
              </li>
            </ul>
          </Card>

          <Card className="p-4">
            <h4 className="font-semibold mb-3">{t.yourRights}:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>{t.changePreferencesAnytime}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>{t.dataEncrypted}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>{t.requestDeletion}</span>
              </li>
            </ul>
          </Card>

          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">{t.importantNotice}</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                  {t.medicalDisclaimerDesc}
                </p>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2 shrink-0">
          <Button
            variant="outline"
            onClick={() => onConsent(false)}
            className="w-full sm:w-auto"
          >
            {t.consentDecline}
          </Button>
          <Button
            onClick={() => onConsent(true)}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
          >
            {t.consentAllowData}
          </Button>
        </DialogFooter>

        <div className="text-center shrink-0">
          <a
            href="#"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              // Open privacy policy in a new tab or modal
              console.log('Opening privacy policy...');
            }}
          >
            {t.readPrivacyPolicy}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}