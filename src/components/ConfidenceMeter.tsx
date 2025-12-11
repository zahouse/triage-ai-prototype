import React from 'react';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { AlertTriangle, CheckCircle, HelpCircle, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import { useTranslations, type Language } from '../utils/translations';

interface ConfidenceMeterProps {
  confidence?: 'low' | 'medium' | 'high';
  language: Language;
}

export function ConfidenceMeter({ confidence = 'medium', language }: ConfidenceMeterProps) {
  const t = useTranslations(language);
  
  const getConfidenceData = (level: string) => {
    switch (level) {
      case 'high':
        return {
          percentage: 85,
          color: 'bg-green-500',
          variant: 'secondary' as const,
          icon: CheckCircle,
          text: t.highConfidence,
          hedging: t.highConfidenceHedge,
          ariaLabel: t.confidenceAriaHigh
        };
      case 'medium':
        return {
          percentage: 60,
          color: 'bg-yellow-500',
          variant: 'outline' as const,
          icon: HelpCircle,
          text: t.mediumConfidence,
          hedging: t.mediumConfidenceHedge,
          ariaLabel: t.confidenceAriaMedium
        };
      case 'low':
        return {
          percentage: 30,
          color: 'bg-red-500',
          variant: 'destructive' as const,
          icon: AlertTriangle,
          text: t.lowConfidence,
          hedging: t.lowConfidenceHedge,
          ariaLabel: t.confidenceAriaLow
        };
      default:
        return {
          percentage: 60,
          color: 'bg-gray-500',
          variant: 'outline' as const,
          icon: HelpCircle,
          text: t.unknown,
          hedging: t.unknownConfidenceHedge,
          ariaLabel: t.confidenceAriaUnknown
        };
    }
  };

  const confidenceData = getConfidenceData(confidence);
  const Icon = confidenceData.icon;

  return (
    <div className="flex items-center gap-3" role="region" aria-label={confidenceData.ariaLabel}>
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4" aria-hidden="true" />
        <Badge variant={confidenceData.variant} className="px-3 py-1">
          {confidenceData.text}
        </Badge>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 p-1" aria-label={t.whatDoesConfidenceMean}>
                <Info className="h-3.5 w-3.5 text-muted-foreground" />
              </button>
            </TooltipTrigger>
            <TooltipContent className="max-w-sm">
              <p className="font-semibold mb-1">{t.whatIsConfidence}</p>
              <p className="text-sm">
                {t.confidenceExplanation}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="flex items-center gap-2">
        <Progress 
          value={confidenceData.percentage} 
          className="w-16 h-2"
          aria-label={`${t.confidenceLevel}: ${confidenceData.percentage}%`}
        />
        <span className="text-sm text-muted-foreground" aria-live="polite">
          {confidenceData.percentage}%
        </span>
      </div>
      
      <p className="text-sm text-muted-foreground max-w-md" aria-live="polite">
        {confidenceData.hedging}
      </p>
    </div>
  );
}