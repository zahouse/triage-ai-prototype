import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Plus, Minus, RotateCcw } from 'lucide-react';
import { useTranslations, type Language } from '../utils/translations';

interface FontSizeControlsProps {
  language: Language;
}

export function FontSizeControls({ language }: FontSizeControlsProps) {
  const t = useTranslations(language);
  const [fontSize, setFontSize] = useState(16);
  const minSize = 12;
  const maxSize = 24;
  const defaultSize = 16;

  useEffect(() => {
    document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
  }, [fontSize]);

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, maxSize));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, minSize));
  };

  const resetFontSize = () => {
    setFontSize(defaultSize);
  };

  return (
    <div className="flex items-center gap-2" role="group" aria-label={t.fontSizeLabel}>
      <span className="text-sm text-muted-foreground">{t.fontSizeLabel}:</span>
      
      <Button
        variant="outline"
        size="sm"
        onClick={decreaseFontSize}
        disabled={fontSize <= minSize}
        aria-label={t.decreaseFontSize}
        className="h-8 w-8 p-0"
      >
        <Minus className="h-3 w-3" />
      </Button>
      
      <span 
        className="text-sm min-w-[3ch] text-center" 
        aria-live="polite"
        aria-label={`${t.currentFontSize}: ${fontSize} pixels`}
      >
        {fontSize}px
      </span>
      
      <Button
        variant="outline"
        size="sm"
        onClick={increaseFontSize}
        disabled={fontSize >= maxSize}
        aria-label={t.increaseFontSize}
        className="h-8 w-8 p-0"
      >
        <Plus className="h-3 w-3" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={resetFontSize}
        disabled={fontSize === defaultSize}
        aria-label={t.resetFontSize}
        className="h-8 w-8 p-0"
      >
        <RotateCcw className="h-3 w-3" />
      </Button>
    </div>
  );
}