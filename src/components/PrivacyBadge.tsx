import React from 'react';
import { Shield, Lock, Eye, EyeOff } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import { useTranslations, type Language } from '../utils/translations';

interface PrivacyBadgeProps {
  privacyMode: boolean;
  dataCollection: boolean;
  onTogglePrivacy?: () => void;
  onToggleDataCollection?: () => void;
  onViewPrivacyPolicy?: () => void;
  language: Language;
}

export function PrivacyBadge({
  privacyMode,
  dataCollection,
  onTogglePrivacy,
  onToggleDataCollection,
  onViewPrivacyPolicy,
  language,
}: PrivacyBadgeProps) {
  const t = useTranslations(language);
  
  return (
    <div className="flex items-center gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge
              variant={privacyMode ? 'default' : 'outline'}
              className={`flex items-center gap-1.5 cursor-pointer ${
                privacyMode
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
              onClick={onTogglePrivacy}
            >
              {privacyMode ? (
                <>
                  <EyeOff className="h-3 w-3" />
                  <span>{t.privacyModeActive}</span>
                </>
              ) : (
                <>
                  <Shield className="h-3 w-3" />
                  <span>{t.standardMode}</span>
                </>
              )}
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-xs">
              {privacyMode
                ? t.privacyModeTooltip
                : t.standardModeTooltip}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge
              variant="outline"
              className={`flex items-center gap-1.5 cursor-pointer ${
                dataCollection
                  ? 'border-blue-300 hover:bg-blue-50'
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
              onClick={onToggleDataCollection}
            >
              {dataCollection ? (
                <>
                  <Eye className="h-3 w-3 text-blue-600" />
                  <span className="text-blue-600">{t.dataCollectionOn}</span>
                </>
              ) : (
                <>
                  <Lock className="h-3 w-3 text-gray-600" />
                  <span className="text-gray-600">{t.dataCollectionOff}</span>
                </>
              )}
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-xs">
              {dataCollection
                ? t.dataCollectionOnTooltip
                : t.dataCollectionOffTooltip}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Button
        variant="ghost"
        size="sm"
        onClick={onViewPrivacyPolicy}
        className="text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50"
      >
        {t.howDataIsUsed}
      </Button>
    </div>
  );
}