import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ChevronDown, ChevronRight, Brain } from 'lucide-react';
import { useTranslations, type Language } from '../utils/translations';

interface ReasoningPanelProps {
  reasoning: string;
  simpleEnglish: boolean;
  language: Language;
}

export function ReasoningPanel({ reasoning, simpleEnglish, language }: ReasoningPanelProps) {
  const t = useTranslations(language);
  const [isOpen, setIsOpen] = useState(false);

  const simplifyText = (text: string) => {
    if (!simpleEnglish) return text;
    
    // Simple text simplification logic
    return text
      .replace(/utilized/g, 'used')
      .replace(/demonstrate/g, 'show')
      .replace(/consequently/g, 'so')
      .replace(/furthermore/g, 'also')
      .replace(/nevertheless/g, 'but')
      .replace(/subsequently/g, 'then')
      .replace(/approximately/g, 'about')
      .replace(/indicates/g, 'shows')
      .replace(/significant/g, 'important')
      .replace(/obtain/g, 'get');
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button 
          variant="ghost" 
          className="flex items-center gap-2 p-2 h-auto"
          aria-expanded={isOpen}
          aria-controls="reasoning-content"
        >
          {isOpen ? (
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          ) : (
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          )}
          <Brain className="h-4 w-4" aria-hidden="true" />
          <span>{t.whyThisAnswer}</span>
        </Button>
      </CollapsibleTrigger>
      
      <CollapsibleContent 
        id="reasoning-content"
        className="mt-2"
      >
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-blue-500" aria-hidden="true" />
                <h4 className="font-medium">{t.aiReasoning}</h4>
                {simpleEnglish && (
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    {t.simpleEnglish}
                  </span>
                )}
              </div>
              
              <div className="text-sm leading-relaxed">
                {simplifyText(reasoning)}
              </div>
              
              <div className="pt-2 border-t">
                <p className="text-xs text-muted-foreground">
                  {t.reasoningFooter}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  );
}