import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { AlertTriangle, RefreshCw, Languages } from 'lucide-react';
import { useTranslations, type Language } from '../utils/translations';

interface ErrorBiasPanelProps {
  message: string;
  onReframe: () => void;
  onTranslate: () => void;
  language: Language;
}

export function ErrorBiasPanel({ 
  message, 
  onReframe, 
  onTranslate, 
  language 
}: ErrorBiasPanelProps) {
  const t = useTranslations(language);
  const [isExpanded, setIsExpanded] = useState(false);

  const biasTypes = [
    {
      type: t.culturalBias,
      description: t.culturalBiasDesc,
      severity: 'medium' as const
    },
    {
      type: t.trainingDataLimitation,
      description: t.trainingDataLimitationDesc,
      severity: 'low' as const
    },
    {
      type: t.demographicBias,
      description: t.demographicBiasDesc,
      severity: 'medium' as const
    }
  ];

  const getSeverityText = (severity: 'high' | 'medium' | 'low') => {
    switch (severity) {
      case 'high': return t.severityHigh;
      case 'medium': return t.severityMedium;
      case 'low': return t.severityLow;
    }
  };

  return (
    <Card className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-orange-600" />
          <CardTitle className="text-orange-800 dark:text-orange-200">
            {t.detectedIssues}
          </CardTitle>
        </div>
        <p className="text-sm text-orange-700 dark:text-orange-300 mt-2">
          <span className="font-bold text-base">{t.aiResponseClarification.split(':')[0]}:</span>{' '}
          {t.aiResponseClarification.split(':').slice(1).join(':')}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <Alert className="border-orange-300 dark:border-orange-700">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-orange-800 dark:text-orange-200">
            {message}
          </AlertDescription>
        </Alert>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h4 className="font-medium text-orange-800 dark:text-orange-200">
            {t.suggestedActions}
          </h4>
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onReframe}
              className="flex items-center gap-2 border-orange-300 text-orange-700 hover:bg-orange-100 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-900"
            >
              <RefreshCw className="h-4 w-4" />
              {t.reframeNeutrality}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={onTranslate}
              className="flex items-center gap-2 border-orange-300 text-orange-700 hover:bg-orange-100 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-900"
            >
              <Languages className="h-4 w-4" />
              {t.translateLocalize}
            </Button>
          </div>
        </div>

        <Separator className="bg-orange-200 dark:bg-orange-800" />

        {/* Detailed Information */}
        <div className="space-y-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-orange-700 dark:text-orange-300 p-0 h-auto"
          >
            {isExpanded ? t.hideDetails : t.showMoreDetails}
          </Button>

          {isExpanded && (
            <div className="space-y-3">
              <h5 className="font-medium text-orange-800 dark:text-orange-200">
                {t.potentialIssuesDetected}
              </h5>
              
              <div className="space-y-2">
                {biasTypes.map((bias, index) => (
                  <div key={index} className="flex items-start justify-between p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-orange-800 dark:text-orange-200">
                          {bias.type}
                        </span>
                        <Badge 
                          variant={bias.severity === 'high' ? 'destructive' : 'outline'}
                          className="text-xs"
                        >
                          {getSeverityText(bias.severity)}
                        </Badge>
                      </div>
                      <p className="text-sm text-orange-700 dark:text-orange-300">
                        {bias.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <h6 className="font-medium text-orange-800 dark:text-orange-200 mb-2">
                  {t.whatThisMeans}
                </h6>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  {t.whatThisMeansDesc}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Educational Note */}
        <div className="text-xs text-orange-600 dark:text-orange-400">
          <p>
            {t.transparencyNotice}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}