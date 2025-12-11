import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Languages } from 'lucide-react';
import type { Language } from '../utils/translations';

interface TranslateDialogProps {
  open: boolean;
  onClose: () => void;
  onTranslate: (language: Language) => void;
  language: Language;
}

const languageOptions: { value: Language; label: string; flag: string }[] = [
  { value: 'en', label: 'English', flag: '🇺🇸' },
  { value: 'es', label: 'Español', flag: '🇪🇸' },
  { value: 'fr', label: 'Français', flag: '🇫🇷' },
  { value: 'de', label: 'Deutsch', flag: '🇩🇪' },
];

export function TranslateDialog({ open, onClose, onTranslate, language }: TranslateDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Languages className="h-5 w-5" />
            Select Translation Language
          </DialogTitle>
          <DialogDescription>
            Choose a language to translate the bias alert content
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 py-4">
          {languageOptions.map((lang) => (
            <Button
              key={lang.value}
              variant="outline"
              className="justify-start h-auto py-4 px-4 text-left"
              onClick={() => {
                onTranslate(lang.value);
                onClose();
              }}
            >
              <span className="text-2xl mr-3">{lang.flag}</span>
              <div>
                <div className="font-medium">{lang.label}</div>
                <div className="text-xs text-muted-foreground">
                  Translate to {lang.label}
                </div>
              </div>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}