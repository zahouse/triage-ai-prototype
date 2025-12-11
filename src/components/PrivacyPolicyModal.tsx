import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { Card, CardContent } from './ui/card';
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle } from 'lucide-react';
import { Separator } from './ui/separator';
import { useTranslations, type Language } from '../utils/translations';

interface PrivacyPolicyModalProps {
  open: boolean;
  onClose: () => void;
  privacyMode: boolean;
  dataCollection: boolean;
  language: Language;
}

export function PrivacyPolicyModal({
  open,
  onClose,
  privacyMode,
  dataCollection,
  language,
}: PrivacyPolicyModalProps) {
  const t = useTranslations(language);
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            {t.privacyPolicyTitle}
          </DialogTitle>
          <DialogDescription>
            {t.privacyPolicySubtitle}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[70vh] pr-4">
          <div className="space-y-6">
            {/* Current Status */}
            <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  {t.currentPrivacySettings}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-800 dark:text-blue-200">{t.privacyMode}:</span>
                    <span className={`font-semibold ${privacyMode ? 'text-blue-600' : 'text-gray-600'}`}>
                      {privacyMode ? t.enabled : t.disabled}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-800 dark:text-blue-200">{t.dataCollection}:</span>
                    <span className={`font-semibold ${dataCollection ? 'text-blue-600' : 'text-gray-600'}`}>
                      {dataCollection ? t.enabled : t.disabled}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What Data We Collect */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Database className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold">{t.whatWeCollect}</h3>
              </div>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">{t.whenDataCollectionEnabled}</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>{t.conversationTranscripts}</strong> {t.conversationTranscriptsDesc}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>{t.anonymizedUsage}</strong> {t.anonymizedUsageDesc}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>{t.feedbackData}</strong> {t.feedbackDataDesc}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>{t.technicalData}</strong> {t.technicalDataDesc}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">{t.whenPrivacyModeEnabled}</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span><strong>{t.noConversationStorage}</strong> {t.noConversationStorageDesc}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span><strong>{t.minimalAnalytics}</strong> {t.minimalAnalyticsDesc}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span><strong>{t.sessionBased}</strong> {t.sessionBasedDesc}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            {/* How We Use Your Data */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Eye className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold">{t.howWeUseData}</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">{t.improvingAccuracy}</h4>
                    <p>
                      {t.improvingAccuracyDesc}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">{t.detectingBias}</h4>
                    <p>
                      {t.detectingBiasDesc}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">{t.accessibilityImprovements}</h4>
                    <p>
                      {t.accessibilityImprovementsDesc}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">{t.safetyAndSecurity}</h4>
                    <p>
                      {t.safetyAndSecurityDesc}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            {/* Data Protection */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Lock className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold">{t.howWeProtect}</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
                        <span><strong>{t.encryption}</strong> {t.encryptionDesc}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
                        <span><strong>{t.anonymization}</strong> {t.anonymizationDesc}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
                        <span><strong>{t.accessControl}</strong> {t.accessControlDesc}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
                        <span><strong>{t.retentionLimits}</strong> {t.retentionLimitsDesc}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
                        <span><strong>{t.noThirdParty}</strong> {t.noThirdPartyDesc}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            {/* Your Rights */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <UserCheck className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold">{t.yourPrivacyRights}</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>{t.accessRight}</strong> {t.accessRightDesc}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>{t.deletionRight}</strong> {t.deletionRightDesc}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>{t.correctionRight}</strong> {t.correctionRightDesc}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>{t.optOutRight}</strong> {t.optOutRightDesc}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>{t.exportRight}</strong> {t.exportRightDesc}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            {/* Important Notes */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <h3 className="font-semibold">{t.importantNotes}</h3>
              </div>
              
              <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950">
                <CardContent className="pt-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>{t.medicalDisclaimer}</strong> {t.medicalDisclaimerDesc}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>{t.hipaaCompliance}</strong> {t.hipaaComplianceDesc}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>{t.emergencyServices}</strong> {t.emergencyServicesDesc}
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact */}
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>
                <strong>{t.privacyContact}</strong><br />
                <a href="mailto:privacy@trai.example.com" className="text-blue-600 hover:underline">privacy@trai.example.com</a>
              </p>
              <p className="mt-2 text-xs">
                {t.lastUpdated}
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}