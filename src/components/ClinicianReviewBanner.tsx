import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Clock, UserCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useTranslations, type Language } from '../utils/translations';

interface ClinicianReviewBannerProps {
  confidence: 'low' | 'medium' | 'high';
  onAskClinician?: () => void;
  onContinue?: () => void;
  onSendToClinician?: () => void;
  reviewStatus?: 'pending' | 'reviewed' | 'none';
  reviewedBy?: string;
  reviewTimestamp?: Date;
  language: Language;
}

export function ClinicianReviewBanner({
  confidence,
  onAskClinician,
  onContinue,
  onSendToClinician,
  reviewStatus = 'none',
  reviewedBy,
  reviewTimestamp,
  language,
}: ClinicianReviewBannerProps) {
  const t = useTranslations(language);
  
  // High confidence case
  if (confidence === 'high') {
    return (
      <Card className="p-4 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">{t.aiGeneratedGuidance}</h4>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                {t.aiGeneratedGuidanceDesc}
              </p>
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <Button
              onClick={onContinue}
              className="bg-green-600 hover:bg-green-700"
            >
              {t.continueButton}
            </Button>
            <Button
              variant="outline"
              onClick={onAskClinician}
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              {t.askClinicianAnyway}
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  // Medium confidence case
  if (confidence === 'medium') {
    return (
      <Card className="p-4 bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">{t.clinicianReviewRecommended}</h4>
                <Badge variant="outline" className="bg-amber-100 dark:bg-amber-900 border-amber-300 dark:border-amber-700">
                  🟡 {reviewStatus === 'pending' ? t.awaitingReview : reviewStatus === 'reviewed' ? t.reviewed : t.reviewPending}
                </Badge>
              </div>
              <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                {t.preliminarySuggestion}
              </p>
              {reviewStatus === 'reviewed' && reviewedBy && (
                <div className="flex items-center gap-2 mt-2 text-sm text-amber-600 dark:text-amber-400">
                  <UserCheck className="h-4 w-4" />
                  <span>{t.reviewedBy} {reviewedBy}</span>
                  {reviewTimestamp && (
                    <span className="text-xs">
                      • {reviewTimestamp.toLocaleTimeString()}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
          {reviewStatus !== 'reviewed' && (
            <Button
              onClick={onAskClinician}
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 shrink-0"
            >
              {t.requestPriorityReview}
            </Button>
          )}
        </div>
      </Card>
    );
  }

  // Low confidence case
  if (confidence === 'low') {
    return (
      <Card className="p-4 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-semibold text-red-900 dark:text-red-100">{t.clinicianConsultationNeeded}</h4>
              <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                {t.notConfidentEnough}
              </p>
              <p className="text-sm text-red-600 dark:text-red-400 mt-2 font-medium">
                {t.requiresProfessionalExpertise}
              </p>
            </div>
          </div>
          <Button
            onClick={onSendToClinician}
            className="bg-red-600 hover:bg-red-700 shrink-0"
          >
            {t.sendToClinician}
          </Button>
        </div>
      </Card>
    );
  }

  return null;
}