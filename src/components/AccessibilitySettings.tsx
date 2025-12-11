import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Eye, Volume2, Globe, Shield } from 'lucide-react';
import { useTranslations, type Language } from '../utils/translations';

interface AccessibilitySettingsProps {
  settings: {
    highContrast: boolean;
    largeFonts: boolean;
    screenReaderMode: boolean;
    simpleEnglish: boolean;
    ttsEnabled: boolean;
    voiceInputEnabled: boolean;
    strictScope: boolean;
    language: string;
    privacyMode: boolean;
  };
  onSettingChange: (key: string, value: boolean | string) => void;
  onClose: () => void;
  language: Language;
}

export function AccessibilitySettings({ settings, onSettingChange, onClose, language }: AccessibilitySettingsProps) {
  const t = useTranslations(language);

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Privacy Mode Indicator */}
      {settings.privacyMode && (
        <div className="bg-orange-100 dark:bg-orange-900 border border-orange-300 dark:border-orange-700 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="font-medium text-orange-800 dark:text-orange-200">
              {t.privacyModeActiveBanner}
            </span>
          </div>
        </div>
      )}

      {/* Quick Accessibility Toggles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            {t.visualSettings}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <label className="font-medium">{t.darkMode}</label>
                <p className="text-sm text-muted-foreground">
                  {t.darkModeDesc}
                </p>
              </div>
              <Switch
                checked={settings.highContrast}
                onCheckedChange={(checked) => onSettingChange('highContrast', checked)}
                aria-label="Toggle dark mode"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <label className="font-medium">{t.largeFonts}</label>
                <p className="text-sm text-muted-foreground">
                  {t.largeFontsDesc}
                </p>
              </div>
              <Switch
                checked={settings.largeFonts}
                onCheckedChange={(checked) => onSettingChange('largeFonts', checked)}
                aria-label="Toggle large fonts"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <label className="font-medium">{t.screenReaderMode}</label>
                <p className="text-sm text-muted-foreground">
                  {t.screenReaderModeDesc}
                </p>
              </div>
              <Switch
                checked={settings.screenReaderMode}
                onCheckedChange={(checked) => onSettingChange('screenReaderMode', checked)}
                aria-label="Toggle screen reader optimization"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <label className="font-medium">{t.simpleEnglish}</label>
                <p className="text-sm text-muted-foreground">
                  {t.simpleEnglishDesc}
                </p>
              </div>
              <Switch
                checked={settings.simpleEnglish}
                onCheckedChange={(checked) => onSettingChange('simpleEnglish', checked)}
                aria-label="Toggle simple English mode"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Voice & Input Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Volume2 className="h-5 w-5" />
            {t.audioSettings}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <label className="font-medium">{t.textToSpeech}</label>
              <p className="text-sm text-muted-foreground">
                {t.textToSpeechDesc}
              </p>
            </div>
            <Switch
              checked={settings.ttsEnabled}
              onCheckedChange={(checked) => onSettingChange('ttsEnabled', checked)}
              aria-label="Toggle text-to-speech"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <label className="font-medium">{t.voiceInput}</label>
              <p className="text-sm text-muted-foreground">
                {t.voiceInputDesc}
              </p>
            </div>
            <Switch
              checked={settings.voiceInputEnabled}
              onCheckedChange={(checked) => onSettingChange('voiceInputEnabled', checked)}
              aria-label="Toggle voice input"
            />
          </div>
        </CardContent>
      </Card>

      {/* Language & Localization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            {t.languageSettings}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="font-medium">{t.interfaceLanguage}</label>
            <Select 
              value={settings.language} 
              onValueChange={(value) => onSettingChange('language', value)}
            >
              <SelectTrigger aria-label="Select interface language">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Privacy Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            {t.privacySettings}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <label className="font-medium">{t.privacyMode}</label>
              <p className="text-sm text-muted-foreground">
                {t.privacyModeDesc}
              </p>
            </div>
            <Switch
              checked={settings.privacyMode}
              onCheckedChange={(checked) => onSettingChange('privacyMode', checked)}
              aria-label="Toggle privacy mode"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <label className="font-medium">{t.strictScope}</label>
              <p className="text-sm text-muted-foreground">
                {t.strictScopeDesc}
              </p>
            </div>
            <Switch
              checked={settings.strictScope}
              onCheckedChange={(checked) => onSettingChange('strictScope', checked)}
              aria-label="Toggle strict scope mode"
            />
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-2 justify-end">
        <Button onClick={onClose}>
          {t.close}
        </Button>
      </div>
    </div>
  );
}