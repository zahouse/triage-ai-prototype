export type Language = "en" | "es" | "fr" | "de";

export interface Translations {
  // Header
  headerTitle: string;
  dataCollection: string;
  on: string;
  off: string;

  // Chat
  chatPlaceholder: string;
  chatEmptyState: string;
  send: string;
  listening: string;

  // Confidence levels
  confidenceLow: string;
  confidenceMedium: string;
  confidenceHigh: string;

  // Message actions
  showReasoning: string;
  hideReasoning: string;
  viewVersions: string;
  speakResponse: string;
  stopSpeaking: string;
  flagIssue: string;
  edit: string;
  save: string;
  cancel: string;

  // Settings
  settingsTitle: string;
  settingsDescription: string;
  visualSettings: string;
  darkMode: string;
  darkModeDesc: string;
  largeFonts: string;
  largeFontsDesc: string;

  audioSettings: string;
  textToSpeech: string;
  textToSpeechDesc: string;
  voiceInput: string;
  voiceInputDesc: string;

  contentSettings: string;
  screenReaderMode: string;
  screenReaderModeDesc: string;
  simpleEnglish: string;
  simpleEnglishDesc: string;
  strictScope: string;
  strictScopeDesc: string;

  languageSettings: string;
  interfaceLanguage: string;

  privacySettings: string;
  privacyMode: string;
  privacyModeDesc: string;

  close: string;

  // Privacy Badge
  privacyModeActive: string;
  standardMode: string;
  privacyModeTooltip: string;
  standardModeTooltip: string;
  dataCollectionOn: string;
  dataCollectionOff: string;
  dataCollectionOnTooltip: string;
  dataCollectionOffTooltip: string;
  howDataIsUsed: string;

  // Consent Modal
  consentTitle: string;
  consentDescription: string;
  consentDataCollection: string;
  consentDataCollectionDesc: string;
  consentPrivacy: string;
  consentPrivacyDesc: string;
  consentChoose: string;
  consentAllowData: string;
  consentDecline: string;

  // Consent Modal - Detailed Content
  yourPrivacyMatters: string;
  yourPrivacyMattersDesc: string;
  whatWeCollectTitle: string;
  conversationHistory: string;
  interactionPatterns: string;
  accessibilityPreferences: string;
  yourRights: string;
  changePreferencesAnytime: string;
  dataEncrypted: string;
  requestDeletion: string;
  importantNotice: string;
  importantNoticeDesc: string;
  readPrivacyPolicy: string;

  // Privacy Policy
  privacyPolicyTitle: string;
  privacyOverview: string;
  dataCollectionTitle: string;
  dataCollectionContent: string;
  privacyModeTitle: string;
  privacyModeContent: string;
  dataSecurityTitle: string;
  dataSecurityContent: string;
  yourRightsTitle: string;
  yourRightsContent: string;
  viewPrivacyPolicy: string;

  // Privacy Policy Modal - Detailed
  privacyPolicySubtitle: string;
  currentPrivacySettings: string;
  enabled: string;
  disabled: string;
  whatWeCollect: string;
  whenDataCollectionEnabled: string;
  conversationTranscripts: string;
  conversationTranscriptsDesc: string;
  anonymizedUsage: string;
  anonymizedUsageDesc: string;
  feedbackData: string;
  feedbackDataDesc: string;
  technicalData: string;
  technicalDataDesc: string;
  whenPrivacyModeEnabled: string;
  noConversationStorage: string;
  noConversationStorageDesc: string;
  minimalAnalytics: string;
  minimalAnalyticsDesc: string;
  sessionBased: string;
  sessionBasedDesc: string;
  howWeUseData: string;
  improvingAccuracy: string;
  improvingAccuracyDesc: string;
  detectingBias: string;
  detectingBiasDesc: string;
  accessibilityImprovements: string;
  accessibilityImprovementsDesc: string;
  safetyAndSecurity: string;
  safetyAndSecurityDesc: string;
  howWeProtect: string;
  encryption: string;
  encryptionDesc: string;
  anonymization: string;
  anonymizationDesc: string;
  accessControl: string;
  accessControlDesc: string;
  retentionLimits: string;
  retentionLimitsDesc: string;
  noThirdParty: string;
  noThirdPartyDesc: string;
  yourPrivacyRights: string;
  accessRight: string;
  accessRightDesc: string;
  deletionRight: string;
  deletionRightDesc: string;
  correctionRight: string;
  correctionRightDesc: string;
  optOutRight: string;
  optOutRightDesc: string;
  exportRight: string;
  exportRightDesc: string;
  importantNotes: string;
  medicalDisclaimer: string;
  medicalDisclaimerDesc: string;
  hipaaCompliance: string;
  hipaaComplianceDesc: string;
  emergencyServices: string;
  emergencyServicesDesc: string;
  privacyContact: string;
  lastUpdated: string;

  // Revision Review
  reviewChangesTitle: string;
  reviewChangesDesc: string;
  originalVersion: string;
  currentVersion: string;
  versionHistory: string;

  // Error/Bias Panel
  biasAlertTitle: string;
  biasAlertDesc: string;
  detectedIssues: string;
  aiResponseClarification: string;
  suggestedActions: string;
  reframeNeutrality: string;
  simplifyLanguage: string;
  translateLocalize: string;
  dismiss: string;
  hideDetails: string;
  showMoreDetails: string;
  potentialIssuesDetected: string;
  culturalBias: string;
  culturalBiasDesc: string;
  trainingDataLimitation: string;
  trainingDataLimitationDesc: string;
  demographicBias: string;
  demographicBiasDesc: string;
  severityHigh: string;
  severityMedium: string;
  severityLow: string;
  whatThisMeans: string;
  whatThisMeansDesc: string;
  transparencyNotice: string;

  // Toast messages
  toastDataCollectionOn: string;
  toastDataCollectionOff: string;
  toastReframing: string;
  toastReframingSuccess: string;
  toastSimplifying: string;
  toastSimplifyingSuccess: string;
  toastTranslating: string;
  toastTranslatingSuccess: string;

  // Medical Disclaimer
  medicalDisclaimer: string;

  // Font Size Controls
  fontSizeLabel: string;
  decreaseFontSize: string;
  increaseFontSize: string;
  resetFontSize: string;
  currentFontSize: string;

  // Privacy Mode Banner
  privacyModeActiveBanner: string;

  // Clinician Review Banner
  aiGeneratedGuidance: string;
  aiGeneratedGuidanceDesc: string;
  continueButton: string;
  askClinicianAnyway: string;
  clinicianReviewRecommended: string;
  awaitingReview: string;
  reviewed: string;
  reviewPending: string;
  preliminarySuggestion: string;
  reviewedBy: string;
  requestPriorityReview: string;
  clinicianConsultationNeeded: string;
  notConfidentEnough: string;
  requiresProfessionalExpertise: string;
  sendToClinician: string;

  // Confidence Meter
  highConfidence: string;
  mediumConfidence: string;
  lowConfidence: string;
  unknown: string;
  highConfidenceHedge: string;
  mediumConfidenceHedge: string;
  lowConfidenceHedge: string;
  unknownConfidenceHedge: string;
  whatIsConfidence: string;
  confidenceExplanation: string;
  confidenceAriaHigh: string;
  confidenceAriaMedium: string;
  confidenceAriaLow: string;
  confidenceAriaUnknown: string;
  whatDoesConfidenceMean: string;
  confidenceLevel: string;

  // Reasoning Panel
  whyThisAnswer: string;
  aiReasoning: string;
  simpleEnglish: string;
  reasoningFooter: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Header
    headerTitle: "TRAI General Triage Assistant",
    dataCollection: "Data collection",
    on: "on",
    off: "off",

    // Chat
    chatPlaceholder:
      "Ask a medical question or describe your symptoms...",
    chatEmptyState:
      "Enter your question below and I will do my best to help.",
    send: "Send",
    listening: "Listening...",

    // Confidence levels
    confidenceLow: "Low",
    confidenceMedium: "Medium",
    confidenceHigh: "High",

    // Message actions
    showReasoning: "Show Reasoning",
    hideReasoning: "Hide Reasoning",
    viewVersions: "View Versions",
    speakResponse: "Speak response",
    stopSpeaking: "Stop speaking",
    flagIssue: "Flag potential issue",
    edit: "Edit",
    save: "Save",
    cancel: "Cancel",

    // Settings
    settingsTitle: "Accessibility & Settings",
    settingsDescription:
      "Configure your accessibility and system settings here.",
    visualSettings: "Visual Settings",
    darkMode: "Dark Mode",
    darkModeDesc: "Increases contrast for better visibility",
    largeFonts: "Large Fonts",
    largeFontsDesc: "Enlarges all text for easier reading",

    audioSettings: "Audio Settings",
    textToSpeech: "Text-to-Speech",
    textToSpeechDesc: "Reads AI responses aloud",
    voiceInput: "Voice Input",
    voiceInputDesc: "Enables voice commands and dictation",

    contentSettings: "Content Settings",
    screenReaderMode: "Screen Reader Mode",
    screenReaderModeDesc:
      "Optimizes interface for screen readers",
    simpleEnglish: "Simple English Mode",
    simpleEnglishDesc: "Uses simpler language in responses",
    strictScope: "Stick to Request Only",
    strictScopeDesc: "AI answers only what you ask",

    languageSettings: "Language & Localization",
    interfaceLanguage: "Interface Language",

    privacySettings: "Privacy Settings",
    privacyMode: "Privacy Mode",
    privacyModeDesc: "Disables all data collection",

    close: "Close",

    // Privacy Badge
    privacyModeActive: "Privacy Mode",
    standardMode: "Standard Mode",
    privacyModeTooltip:
      "Privacy mode active: Conversations are not stored and data collection is disabled.",
    standardModeTooltip:
      "Standard mode: Conversations may be stored to improve your experience.",
    dataCollectionOn: "Data Collection On",
    dataCollectionOff: "Data Collection Off",
    dataCollectionOnTooltip:
      "Click to disable data collection. Anonymized data is currently collected to improve AI responses and safety features.",
    dataCollectionOffTooltip:
      "Click to enable data collection. No data is currently being collected from your conversations.",
    howDataIsUsed: "How your data is used",

    // Consent Modal
    consentTitle: "Welcome to TRAI",
    consentDescription:
      "Transparent & Responsible AI for Medical Triage",
    consentDataCollection: "Data Collection",
    consentDataCollectionDesc:
      "We collect anonymized conversation data to improve AI responses and detect potential biases.",
    consentPrivacy: "Your Privacy",
    consentPrivacyDesc:
      "You can disable data collection anytime. No personally identifiable information is stored without your consent.",
    consentChoose: "Choose your privacy preference:",
    consentAllowData: "Allow Data Collection",
    consentDecline: "Decline Data Collection",

    // Consent Modal - Detailed Content
    yourPrivacyMatters: "Your Privacy Matters",
    yourPrivacyMattersDesc:
      "We value your privacy and want to ensure you have control over your data.",
    whatWeCollectTitle: "What We Collect",
    conversationHistory: "Conversation history:",
    interactionPatterns: "Interaction patterns:",
    accessibilityPreferences: "Accessibility preferences:",
    yourRights: "Your Rights",
    changePreferencesAnytime:
      "You can change your preferences anytime through the settings panel.",
    dataEncrypted: "All data is encrypted for your protection.",
    requestDeletion: "Request data deletion at any time.",
    importantNotice: "Important Notice",
    importantNoticeDesc:
      "By using TRAI, you agree to our Privacy Policy and Terms of Service.",
    readPrivacyPolicy: "Read Privacy Policy",

    // Privacy Policy
    privacyPolicyTitle: "Privacy & Data Policy",
    privacyOverview:
      "This medical AI assistant prioritizes your privacy and data security.",
    dataCollectionTitle: "Data Collection",
    dataCollectionContent:
      "When enabled, we collect anonymized conversation logs to improve AI responses, detect biases, and enhance the system. No personally identifiable health information (PHI) is stored permanently.",
    privacyModeTitle: "Privacy Mode",
    privacyModeContent:
      "When enabled, no conversation data is collected or stored. All interactions are processed in real-time and immediately discarded.",
    dataSecurityTitle: "Data Security",
    dataSecurityContent:
      "All data is encrypted in transit and at rest. Access is restricted to authorized personnel only. We comply with HIPAA and GDPR regulations.",
    yourRightsTitle: "Your Rights",
    yourRightsContent:
      "You can request data deletion, export your data, or opt-out of collection at any time through the settings panel.",
    viewPrivacyPolicy: "View Privacy Policy",

    // Privacy Policy Modal - Detailed
    privacyPolicySubtitle:
      "Understand how TRAI handles your data and protects your privacy",
    currentPrivacySettings: "Your Current Privacy Settings",
    enabled: "ENABLED",
    disabled: "DISABLED",
    whatWeCollect: "What Data We Collect",
    whenDataCollectionEnabled:
      "When Data Collection is Enabled:",
    conversationTranscripts: "Conversation transcripts:",
    conversationTranscriptsDesc:
      "Your questions and AI responses to improve accuracy and safety",
    anonymizedUsage: "Anonymized usage patterns:",
    anonymizedUsageDesc:
      "How you interact with features (e.g., voice input, accessibility settings)",
    feedbackData: "Feedback data:",
    feedbackDataDesc:
      "Edits, bias reports, and clinician review requests",
    technicalData: "Technical data:",
    technicalDataDesc:
      "Browser type, error logs, and performance metrics",
    whenPrivacyModeEnabled: "When Privacy Mode is Enabled:",
    noConversationStorage: "No conversation storage:",
    noConversationStorageDesc:
      "Your messages are processed but not saved",
    minimalAnalytics: "Minimal analytics:",
    minimalAnalyticsDesc:
      "Only essential error reporting for system stability",
    sessionBased: "Session-based only:",
    sessionBasedDesc:
      "Data is cleared when you close the browser",
    howWeUseData: "How We Use Your Data",
    improvingAccuracy: "Improving AI Accuracy",
    improvingAccuracyDesc:
      "We analyze conversation patterns to identify areas where the AI provides inaccurate or incomplete responses, helping us fine-tune the model for better medical triage assistance.",
    detectingBias: "Detecting Bias & Limitations",
    detectingBiasDesc:
      "Your interactions help us identify cultural, demographic, or other biases in AI responses, enabling us to build fairer and more inclusive systems.",
    accessibilityImprovements: "Accessibility Improvements",
    accessibilityImprovementsDesc:
      "Usage data from accessibility features (voice input, screen reader mode, etc.) helps us understand and improve the experience for users with disabilities.",
    safetyAndSecurity: "Safety & Security",
    safetyAndSecurityDesc:
      "We monitor for harmful content, attempted misuse, and security threats to protect all users and maintain system integrity.",
    howWeProtect: "How We Protect Your Data",
    encryption: "Encryption:",
    encryptionDesc:
      "All data is encrypted in transit (HTTPS) and at rest",
    anonymization: "Anonymization:",
    anonymizationDesc:
      "Personal identifiers are removed before analysis",
    accessControl: "Access Control:",
    accessControlDesc:
      "Strict role-based access to data systems",
    retentionLimits: "Retention Limits:",
    retentionLimitsDesc:
      "Conversation data is automatically deleted after 90 days (unless required for active investigations)",
    noThirdParty: "No Third-Party Sales:",
    noThirdPartyDesc:
      "We never sell your data to advertisers or third parties",
    yourPrivacyRights: "Your Privacy Rights",
    accessRight: "Access:",
    accessRightDesc: "Request a copy of your stored data",
    deletionRight: "Deletion:",
    deletionRightDesc:
      "Request deletion of your conversation history",
    correctionRight: "Correction:",
    correctionRightDesc:
      "Request correction of inaccurate data",
    optOutRight: "Opt-Out:",
    optOutRightDesc:
      "Disable data collection at any time via Privacy Mode",
    exportRight: "Export:",
    exportRightDesc: "Download your data in a portable format",
    importantNotes: "Important Notes",
    medicalDisclaimer: "Medical Disclaimer:",
    medicalDisclaimerDesc:
      "TRAI is a triage assistant, not a replacement for professional medical advice. Conversations may be reviewed by clinicians if you request human oversight.",
    hipaaCompliance: "HIPAA Compliance:",
    hipaaComplianceDesc:
      "This prototype is not currently HIPAA-compliant. Do not share sensitive personal health information (PHI) such as full names, dates of birth, or medical record numbers.",
    emergencyServices: "Emergency Services:",
    emergencyServicesDesc:
      "For medical emergencies, always call your local emergency number (e.g., 911 in the US). Do not rely on TRAI for urgent care.",
    privacyContact: "Questions or concerns about privacy?",
    lastUpdated: "Last updated: December 10, 2024",

    // Revision Review
    reviewChangesTitle: "Review Changes",
    reviewChangesDesc:
      "Review and compare different versions of the AI response.",
    originalVersion: "Original Version",
    currentVersion: "Current Version",
    versionHistory: "Version History",

    // Error/Bias Panel
    biasAlertTitle: "AI Limitation or Bias Detection Alert",
    biasAlertDesc: "AI limitation or bias detection alert",
    detectedIssues: "Detected Issues",
    aiResponseClarification:
      "About the AI's response: The system has detected potential issues with how the AI answered your question.",
    suggestedActions: "Suggested Actions",
    reframeNeutrality: "Reframe for Neutrality",
    simplifyLanguage: "Simplify Language",
    translateLocalize: "Translate & Localize",
    dismiss: "Dismiss",
    hideDetails: "Hide Details",
    showMoreDetails: "Show More Details",
    potentialIssuesDetected: "Potential Issues Detected:",
    culturalBias: "Cultural Bias",
    culturalBiasDesc:
      "Response may reflect Western or English-speaking perspectives",
    trainingDataLimitation: "Training Data Limitation",
    trainingDataLimitationDesc:
      "Information may be outdated or incomplete",
    demographicBias: "Demographic Bias",
    demographicBiasDesc:
      "Response might not consider diverse demographics",
    severityHigh: "high",
    severityMedium: "medium",
    severityLow: "low",
    whatThisMeans: "What this means:",
    whatThisMeansDesc:
      "AI responses are based on training data that may not represent all perspectives or be completely current. This doesn't mean the information is wrong, but it's good to be aware of these limitations when making important decisions.",
    transparencyNotice:
      "This AI system aims to be helpful, harmless, and honest. When potential biases are detected, we show this notice to promote transparency and critical thinking.",

    // Toast messages
    toastDataCollectionOn:
      "Data collection enabled. Anonymized data will be collected to improve AI responses.",
    toastDataCollectionOff:
      "Data collection disabled. No conversation data will be stored.",
    toastReframing: "Reframing response for neutrality...",
    toastReframingSuccess: "Response reframed successfully",
    toastSimplifying: "Simplifying language...",
    toastSimplifyingSuccess: "Language simplified successfully",
    toastTranslating: "Preparing translation options...",
    toastTranslatingSuccess: "Response localized successfully",

    // (Medical disclaimer label + description are defined earlier in the Privacy Policy section)

    // Font Size Controls
    fontSizeLabel: "Font Size",
    decreaseFontSize: "Decrease Font Size",
    increaseFontSize: "Increase Font Size",
    resetFontSize: "Reset Font Size",
    currentFontSize: "Current Font Size",

    // Privacy Mode Banner
    privacyModeActiveBanner:
      "Privacy Mode is active. No data is being collected.",

    // Clinician Review Banner
    aiGeneratedGuidance: "AI-Generated Guidance",
    aiGeneratedGuidanceDesc:
      "This response is based on established clinical guidelines and TRAI has high confidence in this answer.",
    continueButton: "Continue",
    askClinicianAnyway: "Ask a Clinician Anyway",
    clinicianReviewRecommended: "Clinician Review Recommended",
    awaitingReview: "Awaiting Review",
    reviewed: "Reviewed",
    reviewPending: "Review Pending",
    preliminarySuggestion:
      "TRAI has provided a preliminary suggestion, but a clinician will review this before finalizing the recommendation.",
    reviewedBy: "Reviewed by",
    requestPriorityReview: "Request Priority Review",
    clinicianConsultationNeeded:
      "Clinician Consultation Needed",
    notConfidentEnough:
      "I'm not confident enough to provide guidance on this matter. I recommend speaking with a qualified clinician for proper assessment.",
    requiresProfessionalExpertise:
      "This question requires professional medical expertise.",
    sendToClinician: "Send to Clinician",

    // Confidence Meter
    highConfidence: "High Confidence",
    mediumConfidence: "Medium Confidence",
    lowConfidence: "Low Confidence",
    unknown: "Unknown",
    highConfidenceHedge:
      "I'm quite confident about this answer.",
    mediumConfidenceHedge:
      "This answer seems reasonable, but you may want to verify.",
    lowConfidenceHedge:
      "I'm not very sure about this. Please double-check this information.",
    unknownConfidenceHedge: "Confidence level unknown.",
    whatIsConfidence: "What is Confidence?",
    confidenceExplanation:
      "Confidence measures how certain TRAI is about its response based on available clinical guidelines, data quality, and response clarity. Higher confidence means the answer is well-supported by established medical literature.",
    confidenceAriaHigh: "High confidence response",
    confidenceAriaMedium: "Medium confidence response",
    confidenceAriaLow: "Low confidence response",
    confidenceAriaUnknown: "Unknown confidence level",
    whatDoesConfidenceMean: "What does confidence mean?",
    confidenceLevel: "Confidence level",

    // Reasoning Panel
    whyThisAnswer: "Why this answer?",
    aiReasoning: "AI Reasoning",
    reasoningFooter:
      "This explanation shows how I arrived at my answer. If something doesn't make sense, you can edit my response or ask me to explain differently.",
  },

  es: {
    // Header
    headerTitle: "Asistente de Triaje General TRAI",
    dataCollection: "Recopilación de datos",
    on: "activada",
    off: "desactivada",

    // Chat
    chatPlaceholder:
      "Haga una pregunta médica o describa sus síntomas...",
    chatEmptyState:
      "Ingrese su pregunta a continuación y haré mi mejor esfuerzo para ayudarle.",
    send: "Enviar",
    listening: "Escuchando...",

    // Confidence levels
    confidenceLow: "Baja",
    confidenceMedium: "Media",
    confidenceHigh: "Alta",

    // Message actions
    showReasoning: "Mostrar Razonamiento",
    hideReasoning: "Ocultar Razonamiento",
    viewVersions: "Ver Versiones",
    speakResponse: "Leer respuesta",
    stopSpeaking: "Detener lectura",
    flagIssue: "Marcar problema potencial",
    edit: "Editar",
    save: "Guardar",
    cancel: "Cancelar",

    // Settings
    settingsTitle: "Accesibilidad y Configuración",
    settingsDescription:
      "Configure su accesibilidad y configuración del sistema aquí.",
    visualSettings: "Configuración Visual",
    darkMode: "Modo Oscuro",
    darkModeDesc: "Aumenta el contraste para mejor visibilidad",
    largeFonts: "Fuentes Grandes",
    largeFontsDesc:
      "Agranda todo el texto para facilitar la lectura",

    audioSettings: "Configuración de Audio",
    textToSpeech: "Texto a Voz",
    textToSpeechDesc: "Lee las respuestas de IA en voz alta",
    voiceInput: "Entrada de Voz",
    voiceInputDesc: "Habilita comandos de voz y dictado",

    contentSettings: "Configuración de Contenido",
    screenReaderMode: "Modo Lector de Pantalla",
    screenReaderModeDesc:
      "Optimiza la interfaz para lectores de pantalla",
    simpleEnglish: "Modo Español Simple",
    simpleEnglishDesc:
      "Usa lenguaje más simple en las respuestas",
    strictScope: "Solo Responder lo Solicitado",
    strictScopeDesc: "IA responde solo lo que pregunta",

    languageSettings: "Idioma y Localización",
    interfaceLanguage: "Idioma de Interfaz",

    privacySettings: "Configuración de Privacidad",
    privacyMode: "Modo Privacidad",
    privacyModeDesc: "Desactiva toda recopilación de datos",

    close: "Cerrar",

    // Privacy Badge
    privacyModeActive: "Modo Privacidad",
    standardMode: "Modo Estándar",
    privacyModeTooltip:
      "Modo privacidad activo: Las conversaciones no se almacenan y la recopilación de datos está deshabilitada.",
    standardModeTooltip:
      "Modo estándar: Las conversaciones pueden almacenarse para mejorar su experiencia.",
    dataCollectionOn: "Recopilación de Datos Activada",
    dataCollectionOff: "Recopilación de Datos Desactivada",
    dataCollectionOnTooltip:
      "Haga clic para desactivar la recopilación de datos. Los datos anonimizados se recopilan actualmente para mejorar las respuestas de IA y las características de seguridad.",
    dataCollectionOffTooltip:
      "Haga clic para activar la recopilación de datos. Actualmente no se recopilan datos de sus conversaciones.",
    howDataIsUsed: "Cómo se usan sus datos",

    // Consent Modal
    consentTitle: "Bienvenido a TRAI",
    consentDescription:
      "IA Transparente y Responsable para Triaje Médico",
    consentDataCollection: "Recopilación de Datos",
    consentDataCollectionDesc:
      "Recopilamos datos de conversación anonimizados para mejorar las respuestas de IA y detectar posibles sesgos.",
    consentPrivacy: "Su Privacidad",
    consentPrivacyDesc:
      "Puede desactivar la recopilación de datos en cualquier momento. No se almacena información personal identificable sin su consentimiento.",
    consentChoose: "Elija su preferencia de privacidad:",
    consentAllowData: "Permitir Recopilación de Datos",
    consentDecline: "Rechazar Recopilación de Datos",

    // Consent Modal - Detailed Content
    yourPrivacyMatters: "Su Privacidad Importa",
    yourPrivacyMattersDesc:
      "Valoramos su privacidad y queremos asegurarnos de que tenga control sobre sus datos.",
    whatWeCollectTitle: "Qué Recopilamos",
    conversationHistory: "Historial de conversaciones:",
    interactionPatterns: "Patrones de interacción:",
    accessibilityPreferences: "Preferencias de accesibilidad:",
    yourRights: "Sus Derechos",
    changePreferencesAnytime:
      "Puede cambiar sus preferencias en cualquier momento a través del panel de configuración.",
    dataEncrypted:
      "Todos los datos están cifrados para su protección.",
    requestDeletion:
      "Solicite la eliminación de datos en cualquier momento.",
    importantNotice: "Aviso Importante",
    importantNoticeDesc:
      "Al usar TRAI, acepta nuestra Política de Privacidad y Términos de Servicio.",
    readPrivacyPolicy: "Leer Política de Privacidad",

    // Privacy Policy
    privacyPolicyTitle: "Política de Privacidad y Datos",
    privacyOverview:
      "Este asistente de IA médica prioriza su privacidad y seguridad de datos.",
    dataCollectionTitle: "Recopilación de Datos",
    dataCollectionContent:
      "Cuando está habilitado, recopilamos registros de conversación anonimizados para mejorar las respuestas de IA, detectar sesgos y mejorar el sistema. No se almacena permanentemente información de salud personal identificable (PHI).",
    privacyModeTitle: "Modo Privacidad",
    privacyModeContent:
      "Cuando está habilitado, no se recopilan ni almacenan datos de conversación. Todas las interacciones se procesan en tiempo real y se descartan inmediatamente.",
    dataSecurityTitle: "Seguridad de Datos",
    dataSecurityContent:
      "Todos los datos están encriptados en tránsito y en reposo. El acceso está restringido solo al personal autorizado. Cumplimos con las regulaciones HIPAA y GDPR.",
    yourRightsTitle: "Sus Derechos",
    yourRightsContent:
      "Puede solicitar la eliminación de datos, exportar sus datos u optar por no participar en la recopilación en cualquier momento a través del panel de configuración.",
    viewPrivacyPolicy: "Ver Política de Privacidad",

    // Privacy Policy Modal - Detailed
    privacyPolicySubtitle:
      "Comprenda cómo TRAI maneja sus datos y protege su privacidad",
    currentPrivacySettings:
      "Su Configuración de Privacidad Actual",
    enabled: "HABILITADO",
    disabled: "DESHABILITADO",
    whatWeCollect: "Qué Datos Recopilamos",
    whenDataCollectionEnabled:
      "Cuando la Recopilación de Datos está Habilitada:",
    conversationTranscripts: "Transcripciones de conversación:",
    conversationTranscriptsDesc:
      "Sus preguntas y respuestas de IA para mejorar la precisión y seguridad",
    anonymizedUsage: "Patrones de uso anonimizados:",
    anonymizedUsageDesc:
      "Cómo interactúa con las características (p. ej., entrada de voz, configuración de accesibilidad)",
    feedbackData: "Datos de retroalimentación:",
    feedbackDataDesc:
      "Ediciones, informes de sesgo y solicitudes de revisión de clínicos",
    technicalData: "Datos técnicos:",
    technicalDataDesc:
      "Tipo de navegador, registros de errores y métricas de rendimiento",
    whenPrivacyModeEnabled:
      "Cuando el Modo Privacidad está Habilitado:",
    noConversationStorage:
      "Sin almacenamiento de conversaciones:",
    noConversationStorageDesc:
      "Sus mensajes se procesan pero no se guardan",
    minimalAnalytics: "Analíticas mínimas:",
    minimalAnalyticsDesc:
      "Solo informes de errores esenciales para la estabilidad del sistema",
    sessionBased: "Solo basado en sesión:",
    sessionBasedDesc:
      "Los datos se borran cuando cierra el navegador",
    howWeUseData: "Cómo Usamos Sus Datos",
    improvingAccuracy: "Mejorando la Precisión de IA",
    improvingAccuracyDesc:
      "Analizamos patrones de conversación para identificar áreas donde la IA proporciona respuestas inexactas o incompletas, ayudándonos a ajustar el modelo para una mejor asistencia de triaje médico.",
    detectingBias: "Detectando Sesgos y Limitaciones",
    detectingBiasDesc:
      "Sus interacciones nos ayudan a identificar sesgos culturales, demográficos u otros en las respuestas de IA, permitiéndonos construir sistemas más justos e inclusivos.",
    accessibilityImprovements: "Mejoras de Accesibilidad",
    accessibilityImprovementsDesc:
      "Los datos de uso de características de accesibilidad (entrada de voz, modo de lector de pantalla, etc.) nos ayudan a comprender y mejorar la experiencia para usuarios con discapacidades.",
    safetyAndSecurity: "Seguridad y Protección",
    safetyAndSecurityDesc:
      "Monitoreamos contenido dañino, intentos de mal uso y amenazas de seguridad para proteger a todos los usuarios y mantener la integridad del sistema.",
    howWeProtect: "Cómo Protegemos Sus Datos",
    encryption: "Encriptación:",
    encryptionDesc:
      "Todos los datos están encriptados en tránsito (HTTPS) y en reposo",
    anonymization: "Anonimización:",
    anonymizationDesc:
      "Los identificadores personales se eliminan antes del análisis",
    accessControl: "Control de Acceso:",
    accessControlDesc:
      "Acceso estricto basado en roles a los sistemas de datos",
    retentionLimits: "Límites de Retención:",
    retentionLimitsDesc:
      "Los datos de conversación se eliminan automáticamente después de 90 días (a menos que sean requeridos para investigaciones activas)",
    noThirdParty: "Sin Ventas a Terceros:",
    noThirdPartyDesc:
      "Nunca vendemos sus datos a anunciantes o terceros",
    yourPrivacyRights: "Sus Derechos de Privacidad",
    accessRight: "Acceso:",
    accessRightDesc:
      "Solicite una copia de sus datos almacenados",
    deletionRight: "Eliminación:",
    deletionRightDesc:
      "Solicite la eliminación de su historial de conversaciones",
    correctionRight: "Corrección:",
    correctionRightDesc:
      "Solicite la corrección de datos inexactos",
    optOutRight: "Exclusión:",
    optOutRightDesc:
      "Desactive la recopilación de datos en cualquier momento a través del Modo Privacidad",
    exportRight: "Exportación:",
    exportRightDesc:
      "Descargue sus datos en un formato portable",
    importantNotes: "Notas Importantes",
    medicalDisclaimer: "Descargo de Responsabilidad Médica:",
    medicalDisclaimerDesc:
      "TRAI es un asistente de triaje, no un reemplazo para el consejo médico profesional. Las conversaciones pueden ser revisadas por clínicos si solicita supervisión humana.",
    hipaaCompliance: "Cumplimiento de HIPAA:",
    hipaaComplianceDesc:
      "Este prototipo actualmente no cumple con HIPAA. No comparte información de salud personal sensible (PHI) como nombres completos, fechas de nacimiento o números de registro médico.",
    emergencyServices: "Servicios de Emergencia:",
    emergencyServicesDesc:
      "Para emergencias médicas, siempre llame a su número de emergencia local (por ejemplo, 911 en EE.UU.). No confíe en TRAI para atención de urgencia.",
    privacyContact:
      "¿Preguntas o inquietudes sobre privacidad?",
    lastUpdated:
      "Última actualización: 10 de diciembre de 2024",

    // Revision Review
    reviewChangesTitle: "Revisar Cambios",
    reviewChangesDesc:
      "Revise y compare diferentes versiones de la respuesta de IA.",
    originalVersion: "Versión Original",
    currentVersion: "Versión Actual",
    versionHistory: "Historial de Versiones",

    // Error/Bias Panel
    biasAlertTitle: "Alerta de Limitación o Sesgo de IA",
    biasAlertDesc: "Alerta de limitación o sesgo de IA",
    detectedIssues: "Problemas Detectados",
    aiResponseClarification:
      "Sobre la respuesta de la IA: El sistema ha detectado posibles problemas con la forma en que la IA respondió a su pregunta.",
    suggestedActions: "Acciones Sugeridas",
    reframeNeutrality: "Reformular para Neutralidad",
    simplifyLanguage: "Simplificar Lenguaje",
    translateLocalize: "Traducir y Localizar",
    dismiss: "Descartar",
    hideDetails: "Ocultar Detalles",
    showMoreDetails: "Mostrar Más Detalles",
    potentialIssuesDetected: "Posibles Problemas Detectados:",
    culturalBias: "Sesgo Cultural",
    culturalBiasDesc:
      "La respuesta puede reflejar perspectivas occidentales o de habla inglesa",
    trainingDataLimitation:
      "Limitación de Datos de Entrenamiento",
    trainingDataLimitationDesc:
      "La información puede estar desactualizada o incompleta",
    demographicBias: "Sesgo Demográfico",
    demographicBiasDesc:
      "La respuesta podría no considerar demografías diversas",
    severityHigh: "alta",
    severityMedium: "media",
    severityLow: "baja",
    whatThisMeans: "Lo que esto significa:",
    whatThisMeansDesc:
      "Las respuestas de IA se basan en datos de entrenamiento que pueden no representar todas las perspectivas o estar completamente actualizados. Esto no significa que la información sea incorrecta, pero es bueno ser consciente de estas limitaciones al tomar decisiones importantes.",
    transparencyNotice:
      "Este sistema de IA tiene como objetivo ser útil, inofensivo y honesto. Cuando se detectan posibles sesgos, mostramos este aviso para promover la transparencia y el pensamiento crítico.",

    // Toast messages
    toastDataCollectionOn:
      "Recopilación de datos habilitada. Se recopilarán datos anonimizados para mejorar las respuestas de IA.",
    toastDataCollectionOff:
      "Recopilación de datos deshabilitada. No se almacenarán datos de conversación.",
    toastReframing:
      "Reformulando respuesta para neutralidad...",
    toastReframingSuccess: "Respuesta reformulada con éxito",
    toastSimplifying: "Simplificando lenguaje...",
    toastSimplifyingSuccess: "Lenguaje simplificado con éxito",
    toastTranslating: "Preparando opciones de traducción...",
    toastTranslatingSuccess: "Respuesta localizada con éxito",

    // Font Size Controls
    fontSizeLabel: "Tamaño de Fuente",
    decreaseFontSize: "Reducir Tamaño de Fuente",
    increaseFontSize: "Aumentar Tamaño de Fuente",
    resetFontSize: "Restablecer Tamaño de Fuente",
    currentFontSize: "Tamaño de Fuente Actual",

    // Privacy Mode Banner
    privacyModeActiveBanner:
      "El Modo Privacidad está activo. No se están recopilando datos.",

    // Clinician Review Banner
    aiGeneratedGuidance: "Orientación Generada por IA",
    aiGeneratedGuidanceDesc:
      "Esta respuesta se basa en directrices clínicas establecidas y TRAI tiene alta confianza en esta respuesta.",
    continueButton: "Continuar",
    askClinicianAnyway: "Consultar a un Médico de Todos Modos",
    clinicianReviewRecommended: "Revisión Médica Recomendada",
    awaitingReview: "En Espera de Revisión",
    reviewed: "Revisado",
    reviewPending: "Revisión Pendiente",
    preliminarySuggestion:
      "TRAI ha proporcionado una sugerencia preliminar, pero un médico revisará esto antes de finalizar la recomendación.",
    reviewedBy: "Revisado por",
    requestPriorityReview: "Solicitar Revisión Prioritaria",
    clinicianConsultationNeeded: "Consulta Médica Necesaria",
    notConfidentEnough:
      "No tengo suficiente confianza para proporcionar orientación sobre este asunto. Recomiendo hablar con un médico calificado para una evaluación adecuada.",
    requiresProfessionalExpertise:
      "Esta pregunta requiere experiencia médica profesional.",
    sendToClinician: "Enviar al Médico",

    // Confidence Meter
    highConfidence: "Alta Confianza",
    mediumConfidence: "Confianza Media",
    lowConfidence: "Baja Confianza",
    unknown: "Desconocido",
    highConfidenceHedge:
      "Estoy bastante seguro de esta respuesta.",
    mediumConfidenceHedge:
      "Esta respuesta parece razonable, pero es posible que desee verificar.",
    lowConfidenceHedge:
      "No estoy muy seguro de esto. Por favor, verifique esta información.",
    unknownConfidenceHedge: "Nivel de confianza desconocido.",
    whatIsConfidence: "¿Qué es la Confianza?",
    confidenceExplanation:
      "La confianza mide qué tan seguro está TRAI sobre su respuesta basándose en las directrices clínicas disponibles, la calidad de los datos y la claridad de la respuesta. Una mayor confianza significa que la respuesta está bien respaldada por la literatura médica establecida.",
    confidenceAriaHigh: "Respuesta de alta confianza",
    confidenceAriaMedium: "Respuesta de confianza media",
    confidenceAriaLow: "Respuesta de baja confianza",
    confidenceAriaUnknown: "Nivel de confianza desconocido",
    whatDoesConfidenceMean: "¿Qué significa la confianza?",
    confidenceLevel: "Nivel de confianza",

    // Reasoning Panel
    whyThisAnswer: "¿Por qué esta respuesta?",
    aiReasoning: "Razonamiento de IA",
    reasoningFooter:
      "Esta explicación muestra cómo llegué a mi respuesta. Si algo no tiene sentido, puede editar mi respuesta o pedirme que lo explique de manera diferente.",
  },

  fr: {
    // Header
    headerTitle: "Assistant de Triage Général TRAI",
    dataCollection: "Collecte de données",
    on: "activée",
    off: "désactivée",

    // Chat
    chatPlaceholder:
      "Posez une question médicale ou décrivez vos symptômes...",
    chatEmptyState:
      "Entrez votre question ci-dessous et je ferai de mon mieux pour vous aider.",
    send: "Envoyer",
    listening: "Écoute...",

    // Confidence levels
    confidenceLow: "Faible",
    confidenceMedium: "Moyenne",
    confidenceHigh: "Élevée",

    // Message actions
    showReasoning: "Afficher le Raisonnement",
    hideReasoning: "Masquer le Raisonnement",
    viewVersions: "Voir les Versions",
    speakResponse: "Lire la réponse",
    stopSpeaking: "Arrêter la lecture",
    flagIssue: "Signaler un problème potentiel",
    edit: "Modifier",
    save: "Sauvegarder",
    cancel: "Annuler",

    // Settings
    settingsTitle: "Accessibilité et Paramètres",
    settingsDescription:
      "Configurez votre accessibilité et les paramètres système ici.",
    visualSettings: "Paramètres Visuels",
    darkMode: "Mode Sombre",
    darkModeDesc:
      "Augmente le contraste pour une meilleure visibilité",
    largeFonts: "Grandes Polices",
    largeFontsDesc:
      "Agrandit tout le texte pour faciliter la lecture",

    audioSettings: "Paramètres Audio",
    textToSpeech: "Synthèse Vocale",
    textToSpeechDesc: "Lit les réponses IA à haute voix",
    voiceInput: "Entrée Vocale",
    voiceInputDesc: "Active les commandes vocales et la dictée",

    contentSettings: "Paramètres de Contenu",
    screenReaderMode: "Mode Lecteur d'Écran",
    screenReaderModeDesc:
      "Optimise l'interface pour les lecteurs d'écran",
    simpleEnglish: "Mode Français Simple",
    simpleEnglishDesc:
      "Utilise un langage plus simple dans les réponses",
    strictScope: "Répondre Uniquement à la Demande",
    strictScopeDesc:
      "L'IA répond seulement à ce que vous demandez",

    languageSettings: "Langue et Localisation",
    interfaceLanguage: "Langue de l'Interface",

    privacySettings: "Paramètres de Confidentialité",
    privacyMode: "Mode Confidentialité",
    privacyModeDesc: "Désactive toute collecte de données",

    close: "Fermer",

    // Privacy Badge
    privacyModeActive: "Mode Confidentialité",
    standardMode: "Mode Standard",
    privacyModeTooltip:
      "Mode confidentialité actif : Les conversations ne sont pas stockées et la collecte de données est désactivée.",
    standardModeTooltip:
      "Mode standard : Les conversations peuvent être stockées pour améliorer votre expérience.",
    dataCollectionOn: "Collecte de Données Activée",
    dataCollectionOff: "Collecte de Données Désactivée",
    dataCollectionOnTooltip:
      "Cliquez pour désactiver la collecte de données. Les données anonymisées sont actuellement collectées pour améliorer les réponses IA et les fonctionnalités de sécurité.",
    dataCollectionOffTooltip:
      "Cliquez pour activer la collecte de données. Aucune donnée n'est actuellement collectée à partir de vos conversations.",
    howDataIsUsed: "Comment vos données sont utilisées",

    // Consent Modal
    consentTitle: "Bienvenue sur TRAI",
    consentDescription:
      "IA Transparente et Responsable pour le Triage Médical",
    consentDataCollection: "Collecte de Données",
    consentDataCollectionDesc:
      "Nous collectons des données de conversation anonymisées pour améliorer les réponses IA et détecter les biais potentiels.",
    consentPrivacy: "Votre Confidentialité",
    consentPrivacyDesc:
      "Vous pouvez désactiver la collecte de données à tout moment. Aucune information personnelle identifiable n'est stockée sans votre consentement.",
    consentChoose:
      "Choisissez votre préférence de confidentialité :",
    consentAllowData: "Autoriser la Collecte de Données",
    consentDecline: "Refuser la Collecte de Données",

    // Consent Modal - Detailed Content
    yourPrivacyMatters: "Votre Confidentialité Importe",
    yourPrivacyMattersDesc:
      "Nous valorisons votre confidentialité et souhaitons vous assurer que vous avez le contrôle de vos données.",
    whatWeCollectTitle: "Ce que Nous Collectons",
    conversationHistory: "Historique des conversations :",
    interactionPatterns: "Modèles d'interaction :",
    accessibilityPreferences: "Préférences d'accessibilité :",
    yourRights: "Vos Droits",
    changePreferencesAnytime:
      "Vous pouvez modifier vos préférences à tout moment via le panneau de paramètres.",
    dataEncrypted:
      "Toutes les données sont cryptées pour votre protection.",
    requestDeletion:
      "Demandez la suppression des données à tout moment.",
    importantNotice: "Avis Important",
    importantNoticeDesc:
      "En utilisant TRAI, vous acceptez notre Politique de Confidentialité et nos Conditions d'Utilisation.",
    readPrivacyPolicy: "Lire la Politique de Confidentialité",

    // Privacy Policy
    privacyPolicyTitle:
      "Politique de Confidentialité et de Données",
    privacyOverview:
      "Cet assistant IA médical priorise votre confidentialité et la sécurité de vos données.",
    dataCollectionTitle: "Collecte de Données",
    dataCollectionContent:
      "Lorsqu'elle est activée, nous collectons des journaux de conversation anonymisés pour améliorer les réponses IA, détecter les biais et améliorer le système. Aucune information de santé personnelle identifiable (PHI) n'est stockée de manière permanente.",
    privacyModeTitle: "Mode Confidentialité",
    privacyModeContent:
      "Lorsqu'il est activé, aucune donnée de conversation n'est collectée ou stockée. Toutes les interactions sont traitées en temps réel et immédiatement supprimées.",
    dataSecurityTitle: "Sécurité des Données",
    dataSecurityContent:
      "Toutes les données sont cryptées en transit et au repos. L'accès est restreint au personnel autorisé uniquement. Nous nous conformons aux réglementations HIPAA et RGPD.",
    yourRightsTitle: "Vos Droits",
    yourRightsContent:
      "Vous pouvez demander la suppression de données, exporter vos données ou refuser la collecte à tout moment via le panneau de paramètres.",
    viewPrivacyPolicy: "Voir la Politique de Confidentialité",

    // Privacy Policy Modal - Detailed
    privacyPolicySubtitle:
      "Comprenez comment TRAI gère vos données et protège votre confidentialité",
    currentPrivacySettings:
      "Vos Paramètres de Confidentialité Actuels",
    enabled: "ACTIVÉ",
    disabled: "DÉSACTIVÉ",
    whatWeCollect: "Quelles Données Nous Collectons",
    whenDataCollectionEnabled:
      "Lorsque la Collecte de Données est Activée :",
    conversationTranscripts:
      "Transcriptions de conversations :",
    conversationTranscriptsDesc:
      "Vos questions et réponses IA pour améliorer la précision et la sécurité",
    anonymizedUsage: "Modèles d'utilisation anonymisés :",
    anonymizedUsageDesc:
      "Comment vous interagissez avec les fonctionnalités (p. ex., entrée vocale, paramètres d'accessibilité)",
    feedbackData: "Données de feedback :",
    feedbackDataDesc:
      "Modifications, signalements de biais et demandes de révision par des cliniciens",
    technicalData: "Données techniques :",
    technicalDataDesc:
      "Type de navigateur, journaux d'erreurs et métriques de performance",
    whenPrivacyModeEnabled:
      "Lorsque le Mode Confidentialité est Activé :",
    noConversationStorage: "Aucun stockage de conversations :",
    noConversationStorageDesc:
      "Vos messages sont traités mais non sauvegardés",
    minimalAnalytics: "Analyses minimales :",
    minimalAnalyticsDesc:
      "Uniquement les rapports d'erreur essentiels pour la stabilité du système",
    sessionBased: "Basé sur la session uniquement :",
    sessionBasedDesc:
      "Les données sont effacées lorsque vous fermez le navigateur",
    howWeUseData: "Comment Nous Utilisons Vos Données",
    improvingAccuracy: "Amélioration de la Précision de l'IA",
    improvingAccuracyDesc:
      "Nous analysons les modèles de conversation pour identifier les domaines où l'IA fournit des réponses inexactes ou incomplètes, nous aidant à affiner le modèle pour une meilleure assistance au triage médical.",
    detectingBias: "Détection des Biais et Limitations",
    detectingBiasDesc:
      "Vos interactions nous aident à identifier les biais culturels, démographiques ou autres dans les réponses IA, nous permettant de construire des systèmes plus équitables et inclusifs.",
    accessibilityImprovements:
      "Améliorations de l'Accessibilité",
    accessibilityImprovementsDesc:
      "Les données d'utilisation des fonctionnalités d'accessibilité (entrée vocale, mode lecteur d'écran, etc.) nous aident à comprendre et améliorer l'expérience pour les utilisateurs handicapés.",
    safetyAndSecurity: "Sécurité et Protection",
    safetyAndSecurityDesc:
      "Nous surveillons les contenus nuisibles, les tentatives de mauvaise utilisation et les menaces de sécurité pour protéger tous les utilisateurs et maintenir l'intégrité du système.",
    howWeProtect: "Comment Nous Protégeons Vos Données",
    encryption: "Cryptage :",
    encryptionDesc:
      "Toutes les données sont cryptées en transit (HTTPS) et au repos",
    anonymization: "Anonymisation :",
    anonymizationDesc:
      "Les identifiants personnels sont supprimés avant l'analyse",
    accessControl: "Contrôle d'Accès :",
    accessControlDesc:
      "Accès strict basé sur les rôles aux systèmes de données",
    retentionLimits: "Limites de Conservation :",
    retentionLimitsDesc:
      "Les données de conversation sont automatiquement supprimées après 90 jours (sauf si nécessaires pour des enquêtes actives)",
    noThirdParty: "Aucune Vente à des Tiers :",
    noThirdPartyDesc:
      "Nous ne vendons jamais vos données à des annonceurs ou à des tiers",
    yourPrivacyRights: "Vos Droits de Confidentialité",
    accessRight: "Accès :",
    accessRightDesc:
      "Demandez une copie de vos données stockées",
    deletionRight: "Suppression :",
    deletionRightDesc:
      "Demandez la suppression de votre historique de conversations",
    correctionRight: "Correction :",
    correctionRightDesc:
      "Demandez la correction de données inexactes",
    optOutRight: "Exclusion :",
    optOutRightDesc:
      "Désactivez la collecte de données à tout moment via le Mode Confidentialité",
    exportRight: "Export :",
    exportRightDesc:
      "Téléchargez vos données dans un format portable",
    importantNotes: "Notes Importantes",
    medicalDisclaimer: "Avertissement Médical :",
    medicalDisclaimerDesc:
      "TRAI est un assistant de triage, pas un remplacement pour des conseils médicaux professionnels. Les conversations peuvent être examinées par des cliniciens si vous demandez une supervision humaine.",
    hipaaCompliance: "Conformité HIPAA :",
    hipaaComplianceDesc:
      "Ce prototype n'est actuellement pas conforme à la HIPAA. Ne partagez pas d'informations de santé personnelles sensibles (PHI) telles que les noms complets, dates de naissance ou numéros de dossier médical.",
    emergencyServices: "Services d'Urgence :",
    emergencyServicesDesc:
      "Pour les urgences médicales, appelez toujours votre numéro d'urgence local (par ex., le 15 en France). Ne comptez pas sur TRAI pour les soins urgents.",
    privacyContact:
      "Des questions ou préoccupations concernant la confidentialité ?",
    lastUpdated: "Dernière mise à jour : 10 décembre 2024",

    // Revision Review
    reviewChangesTitle: "Examiner les Modifications",
    reviewChangesDesc:
      "Examinez et comparez différentes versions de la réponse IA.",
    originalVersion: "Version Originale",
    currentVersion: "Version Actuelle",
    versionHistory: "Historique des Versions",

    // Error/Bias Panel
    biasAlertTitle: "Alerte de Limitation ou de Biais de l'IA",
    biasAlertDesc: "Alerte de limitation ou de biais de l'IA",
    detectedIssues: "Problèmes Détectés",
    aiResponseClarification:
      "À propos de la réponse de l'IA : Le système a détecté des problèmes potentiels dans la façon dont l'IA a répondu à votre question.",
    suggestedActions: "Actions Suggérées",
    reframeNeutrality: "Reformuler pour la Neutralité",
    simplifyLanguage: "Simplifier le Langage",
    translateLocalize: "Traduire et Localiser",
    dismiss: "Ignorer",
    hideDetails: "Masquer les Détails",
    showMoreDetails: "Afficher Plus de Détails",
    potentialIssuesDetected: "Problèmes Potentiels Détectés :",
    culturalBias: "Biais Culturel",
    culturalBiasDesc:
      "La réponse peut refléter des perspectives occidentales ou anglophones",
    trainingDataLimitation:
      "Limitation des Données d'Entraînement",
    trainingDataLimitationDesc:
      "Les informations peuvent être obsolètes ou incomplètes",
    demographicBias: "Biais Démographique",
    demographicBiasDesc:
      "La réponse pourrait ne pas considérer diverses démographies",
    severityHigh: "élevée",
    severityMedium: "moyenne",
    severityLow: "faible",
    whatThisMeans: "Ce que cela signifie :",
    whatThisMeansDesc:
      "Les réponses de l'IA sont basées sur des données d'entraînement qui peuvent ne pas représenter toutes les perspectives ou être complètement à jour. Cela ne signifie pas que les informations sont fausses, mais il est bon d'être conscient de ces limitations lors de la prise de décisions importantes.",
    transparencyNotice:
      "Ce système d'IA vise à être utile, inoffensif et honnête. Lorsque des biais potentiels sont détectés, nous affichons cet avis pour promouvoir la transparence et la pensée critique.",

    // Toast messages
    toastDataCollectionOn:
      "Collecte de données activée. Des données anonymisées seront collectées pour améliorer les réponses IA.",
    toastDataCollectionOff:
      "Collecte de données désactivée. Aucune donnée de conversation ne sera stockée.",
    toastReframing:
      "Reformulation de la réponse pour la neutralité...",
    toastReframingSuccess: "Réponse reformulée avec succès",
    toastSimplifying: "Simplification du langage...",
    toastSimplifyingSuccess: "Langage simplifié avec succès",
    toastTranslating:
      "Préparation des options de traduction...",
    toastTranslatingSuccess: "Réponse localisée avec succès",

    // Font Size Controls
    fontSizeLabel: "Taille de Police",
    decreaseFontSize: "Réduire la Taille de Police",
    increaseFontSize: "Augmenter la Taille de Police",
    resetFontSize: "Réinitialiser la Taille de Police",
    currentFontSize: "Taille de Police Actuelle",

    // Privacy Mode Banner
    privacyModeActiveBanner:
      "Le Mode Confidentialité est actif. Aucune donnée n'est recueillie.",

    // Clinician Review Banner
    aiGeneratedGuidance: "Conseils Générés par IA",
    aiGeneratedGuidanceDesc:
      "Cette réponse est basée sur des directives cliniques établies et TRAI a une grande confiance en cette réponse.",
    continueButton: "Continuer",
    askClinicianAnyway: "Demander à un Médecin Quand Même",
    clinicianReviewRecommended: "Révision Médicale Recommandée",
    awaitingReview: "En Attente de Révision",
    reviewed: "Révisé",
    reviewPending: "Révision en Attente",
    preliminarySuggestion:
      "TRAI a fourni une suggestion préliminaire, mais un médecin examinera cela avant de finaliser la recommandation.",
    reviewedBy: "Révisé par",
    requestPriorityReview: "Demander une Révision Prioritaire",
    clinicianConsultationNeeded:
      "Consultation Médicale Nécessaire",
    notConfidentEnough:
      "Je ne suis pas assez confiant pour fournir des conseils sur cette question. Je recommande de parler avec un médecin qualifié pour une évaluation appropriée.",
    requiresProfessionalExpertise:
      "Cette question nécessite une expertise médicale professionnelle.",
    sendToClinician: "Envoyer au Médecin",

    // Confidence Meter
    highConfidence: "Haute Confiance",
    mediumConfidence: "Confiance Moyenne",
    lowConfidence: "Faible Confiance",
    unknown: "Inconnu",
    highConfidenceHedge:
      "Je suis assez confiant à propos de cette réponse.",
    mediumConfidenceHedge:
      "Cette réponse semble raisonnable, mais vous voudrez peut-être vérifier.",
    lowConfidenceHedge:
      "Je ne suis pas très sûr de cela. Veuillez vérifier cette information.",
    unknownConfidenceHedge: "Niveau de confiance inconnu.",
    whatIsConfidence: "Qu'est-ce que la Confiance?",
    confidenceExplanation:
      "La confiance mesure la certitude de TRAI concernant sa réponse en fonction des directives cliniques disponibles, de la qualité des données et de la clarté de la réponse. Une confiance plus élevée signifie que la réponse est bien soutenue par la littérature médicale établie.",
    confidenceAriaHigh: "Réponse à haute confiance",
    confidenceAriaMedium: "Réponse à confiance moyenne",
    confidenceAriaLow: "Réponse à faible confiance",
    confidenceAriaUnknown: "Niveau de confiance inconnu",
    whatDoesConfidenceMean: "Que signifie la confiance?",
    confidenceLevel: "Niveau de confiance",

    // Reasoning Panel
    whyThisAnswer: "Pourquoi cette réponse?",
    aiReasoning: "Raisonnement de l'IA",
    reasoningFooter:
      "Cette explication montre comment je suis arrivé à ma réponse. Si quelque chose n'a pas de sens, vous pouvez modifier ma réponse ou me demander d'expliquer différemment.",
  },

  de: {
    // Header
    headerTitle: "TRAI Allgemeiner Triage-Assistent",
    dataCollection: "Datenerfassung",
    on: "an",
    off: "aus",

    // Chat
    chatPlaceholder:
      "Stellen Sie eine medizinische Frage oder beschreiben Sie Ihre Symptome...",
    chatEmptyState:
      "Geben Sie unten Ihre Frage ein und ich werde mein Bestes tun, um Ihnen zu helfen.",
    send: "Senden",
    listening: "Hört zu...",

    // Confidence levels
    confidenceLow: "Niedrig",
    confidenceMedium: "Mittel",
    confidenceHigh: "Hoch",

    // Message actions
    showReasoning: "Begründung Anzeigen",
    hideReasoning: "Begründung Ausblenden",
    viewVersions: "Versionen Anzeigen",
    speakResponse: "Antwort vorlesen",
    stopSpeaking: "Vorlesen stoppen",
    flagIssue: "Potenzielles Problem markieren",
    edit: "Bearbeiten",
    save: "Speichern",
    cancel: "Abbrechen",

    // Settings
    settingsTitle: "Barrierefreiheit & Einstellungen",
    settingsDescription:
      "Konfigurieren Sie hier Ihre Barrierefreiheit und Systemeinstellungen.",
    visualSettings: "Visuelle Einstellungen",
    darkMode: "Dunkler Modus",
    darkModeDesc:
      "Erhöht den Kontrast für bessere Sichtbarkeit",
    largeFonts: "Große Schriftarten",
    largeFontsDesc:
      "Vergrößert den gesamten Text für einfacheres Lesen",

    audioSettings: "Audio-Einstellungen",
    textToSpeech: "Text-zu-Sprache",
    textToSpeechDesc: "Liest KI-Antworten laut vor",
    voiceInput: "Spracheingabe",
    voiceInputDesc: "Aktiviert Sprachbefehle und Diktat",

    contentSettings: "Inhaltseinstellungen",
    screenReaderMode: "Bildschirmleser-Modus",
    screenReaderModeDesc:
      "Optimiert die Oberfläche für Bildschirmleser",
    simpleEnglish: "Einfacher Deutsch-Modus",
    simpleEnglishDesc:
      "Verwendet einfachere Sprache in Antworten",
    strictScope: "Nur auf Anfrage Antworten",
    strictScopeDesc: "KI antwortet nur auf das, was Sie fragen",

    languageSettings: "Sprache & Lokalisierung",
    interfaceLanguage: "Oberflächensprache",

    privacySettings: "Datenschutzeinstellungen",
    privacyMode: "Datenschutzmodus",
    privacyModeDesc: "Deaktiviert alle Datenerfassung",

    close: "Schließen",

    // Privacy Badge
    privacyModeActive: "Datenschutzmodus",
    standardMode: "Standardmodus",
    privacyModeTooltip:
      "Datenschutzmodus aktiv: Gespräche werden nicht gespeichert und die Datenerfassung ist deaktiviert.",
    standardModeTooltip:
      "Standardmodus: Gespräche können gespeichert werden, um Ihre Erfahrung zu verbessern.",
    dataCollectionOn: "Datenerfassung Aktiv",
    dataCollectionOff: "Datenerfassung Inaktiv",
    dataCollectionOnTooltip:
      "Klicken Sie, um die Datenerfassung zu deaktivieren. Anonymisierte Daten werden derzeit gesammelt, um KI-Antworten und Sicherheitsfunktionen zu verbessern.",
    dataCollectionOffTooltip:
      "Klicken Sie, um die Datenerfassung zu aktivieren. Es werden derzeit keine Daten aus Ihren Gesprächen gesammelt.",
    howDataIsUsed: "Wie Ihre Daten verwendet werden",

    // Consent Modal
    consentTitle: "Willkommen bei TRAI",
    consentDescription:
      "Transparente & Verantwortungsvolle KI für Medizinische Triage",
    consentDataCollection: "Datenerfassung",
    consentDataCollectionDesc:
      "Wir sammeln anonymisierte Gesprächsdaten, um KI-Antworten zu verbessern und potenzielle Vorurteile zu erkennen.",
    consentPrivacy: "Ihre Privatsphäre",
    consentPrivacyDesc:
      "Sie können die Datenerfassung jederzeit deaktivieren. Ohne Ihre Zustimmung werden keine persönlich identifizierbaren Informationen gespeichert.",
    consentChoose: "Wählen Sie Ihre Datenschutzpräferenz:",
    consentAllowData: "Datenerfassung Zulassen",
    consentDecline: "Datenerfassung Ablehnen",

    // Consent Modal - Detailed Content
    yourPrivacyMatters: "Ihre Privatsphäre Ist Wichtig",
    yourPrivacyMattersDesc:
      "Wir schätzen Ihre Privatsphäre und möchten sicherstellen, dass Sie Kontrolle über Ihre Daten haben.",
    whatWeCollectTitle: "Was Wir Sammeln",
    conversationHistory: "Gesprächsgeschichte:",
    interactionPatterns: "Interaktionsmuster:",
    accessibilityPreferences: "Barrierefreiheitspräferenzen:",
    yourRights: "Ihre Rechte",
    changePreferencesAnytime:
      "Sie können Ihre Präferenzen jederzeit über das Einstellungspanel ändern.",
    dataEncrypted:
      "Alle Daten sind verschlüsselt für Ihre Sicherheit.",
    requestDeletion:
      "Fordern Sie die Löschung von Daten jederzeit an.",
    importantNotice: "Wichtiger Hinweis",
    importantNoticeDesc:
      "Indem Sie TRAI verwenden, stimmen Sie unseren Datenschutzrichtlinien und Nutzungsbedingungen zu.",
    readPrivacyPolicy: "Datenschutzrichtlinie lesen",

    // Privacy Policy
    privacyPolicyTitle: "Datenschutz- und Datenrichtlinie",
    privacyOverview:
      "Dieser medizinische KI-Assistent priorisiert Ihre Privatsphäre und Datensicherheit.",
    dataCollectionTitle: "Datenerfassung",
    dataCollectionContent:
      "Wenn aktiviert, sammeln wir anonymisierte Gesprächsprotokolle, um KI-Antworten zu verbessern, Vorurteile zu erkennen und das System zu verbessern. Keine persönlich identifizierbaren Gesundheitsinformationen (PHI) werden dauerhaft gespeichert.",
    privacyModeTitle: "Datenschutzmodus",
    privacyModeContent:
      "Wenn aktiviert, werden keine Gesprächsdaten gesammelt oder gespeichert. Alle Interaktionen werden in Echtzeit verarbeitet und sofort verworfen.",
    dataSecurityTitle: "Datensicherheit",
    dataSecurityContent:
      "Alle Daten werden während der Übertragung und im Ruhezustand verschlüsselt. Der Zugriff ist nur auf autorisiertes Personal beschränkt. Wir entsprechen den HIPAA- und DSGVO-Vorschriften.",
    yourRightsTitle: "Ihre Rechte",
    yourRightsContent:
      "Sie können jederzeit die Löschung von Daten, den Export Ihrer Daten oder die Ablehnung der Erfassung über das Einstellungspanel beantragen.",
    viewPrivacyPolicy: "Datenschutzrichtlinie Ansehen",

    // Privacy Policy Modal - Detailed
    privacyPolicySubtitle:
      "Verstehen Sie, wie TRAI Ihre Daten verarbeitet und Ihre Privatsphäre schützt",
    currentPrivacySettings:
      "Ihre Aktuellen Datenschutzeinstellungen",
    enabled: "AKTIVIERT",
    disabled: "DEAKTIVIERT",
    whatWeCollect: "Welche Daten Wir Sammeln",
    whenDataCollectionEnabled:
      "Wenn Datenerfassung Aktiviert ist:",
    conversationTranscripts: "Gesprächsprotokolle:",
    conversationTranscriptsDesc:
      "Ihre Fragen und KI-Antworten zur Verbesserung von Genauigkeit und Sicherheit",
    anonymizedUsage: "Anonymisierte Nutzungsmuster:",
    anonymizedUsageDesc:
      "Wie Sie mit Funktionen interagieren (z. B. Spracheingabe, Barrierefreiheitseinstellungen)",
    feedbackData: "Feedback-Daten:",
    feedbackDataDesc:
      "Bearbeitungen, Vorurteilsmeldungen und Anfragen zur Überprüfung durch Kliniker",
    technicalData: "Technische Daten:",
    technicalDataDesc:
      "Browsertyp, Fehlerprotokolle und Leistungsmetriken",
    whenPrivacyModeEnabled:
      "Wenn Datenschutzmodus Aktiviert ist:",
    noConversationStorage: "Keine Gesprächsspeicherung:",
    noConversationStorageDesc:
      "Ihre Nachrichten werden verarbeitet, aber nicht gespeichert",
    minimalAnalytics: "Minimale Analysen:",
    minimalAnalyticsDesc:
      "Nur wesentliche Fehlerberichte für Systemstabilität",
    sessionBased: "Nur sitzungsbasiert:",
    sessionBasedDesc:
      "Daten werden gelöscht, wenn Sie den Browser schließen",
    howWeUseData: "Wie Wir Ihre Daten Verwenden",
    improvingAccuracy: "Verbesserung der KI-Genauigkeit",
    improvingAccuracyDesc:
      "Wir analysieren Gesprächsmuster, um Bereiche zu identifizieren, in denen die KI ungenaue oder unvollständige Antworten gibt, und helfen uns, das Modell für bessere medizinische Triage-Unterstützung zu optimieren.",
    detectingBias:
      "Erkennung von Vorurteilen und Einschränkungen",
    detectingBiasDesc:
      "Ihre Interaktionen helfen uns, kulturelle, demografische oder andere Vorurteile in KI-Antworten zu identifizieren und ermöglichen es uns, gerechtere und inklusivere Systeme aufzubauen.",
    accessibilityImprovements:
      "Verbesserungen der Barrierefreiheit",
    accessibilityImprovementsDesc:
      "Nutzungsdaten von Barrierefreiheitsfunktionen (Spracheingabe, Bildschirmleser-Modus usw.) helfen uns, die Erfahrung für Benutzer mit Behinderungen zu verstehen und zu verbessern.",
    safetyAndSecurity: "Sicherheit und Schutz",
    safetyAndSecurityDesc:
      "Wir überwachen schädliche Inhalte, Missbrauchsversuche und Sicherheitsbedrohungen, um alle Benutzer zu schützen und die Systemintegrität aufrechtzuerhalten.",
    howWeProtect: "Wie Wir Ihre Daten Schützen",
    encryption: "Verschlüsselung:",
    encryptionDesc:
      "Alle Daten werden während der Übertragung (HTTPS) und im Ruhezustand verschlüsselt",
    anonymization: "Anonymisierung:",
    anonymizationDesc:
      "Persönliche Identifikatoren werden vor der Analyse entfernt",
    accessControl: "Zugriffskontrolle:",
    accessControlDesc:
      "Strenger rollenbasierter Zugriff auf Datensysteme",
    retentionLimits: "Aufbewahrungsfristen:",
    retentionLimitsDesc:
      "Gesprächsdaten werden automatisch nach 90 Tagen gelöscht (es sei denn, sie werden für aktive Untersuchungen benötigt)",
    noThirdParty: "Keine Verkäufe an Dritte:",
    noThirdPartyDesc:
      "Wir verkaufen Ihre Daten niemals an Werbetreibende oder Dritte",
    yourPrivacyRights: "Ihre Datenschutzrechte",
    accessRight: "Zugriff:",
    accessRightDesc:
      "Fordern Sie eine Kopie Ihrer gespeicherten Daten an",
    deletionRight: "Löschung:",
    deletionRightDesc:
      "Fordern Sie die Löschung Ihrer Gesprächshistorie an",
    correctionRight: "Korrektur:",
    correctionRightDesc:
      "Fordern Sie die Korrektur ungenauer Daten an",
    optOutRight: "Opt-Out:",
    optOutRightDesc:
      "Deaktivieren Sie die Datenerfassung jederzeit über den Datenschutzmodus",
    exportRight: "Export:",
    exportRightDesc:
      "Laden Sie Ihre Daten in einem portablen Format herunter",
    importantNotes: "Wichtige Hinweise",
    medicalDisclaimer: "Medizinischer Haftungsausschluss:",
    medicalDisclaimerDesc:
      "TRAI ist ein Triage-Assistent, kein Ersatz für professionelle medizinische Beratung. Gespräche können von Klinikern überprüft werden, wenn Sie menschliche Aufsicht anfordern.",
    hipaaCompliance: "HIPAA-Konformität:",
    hipaaComplianceDesc:
      "Dieser Prototyp ist derzeit nicht HIPAA-konform. Teilen Sie keine sensiblen persönlichen Gesundheitsinformationen (PHI) wie vollständige Namen, Geburtsdaten oder Krankenakten-Nummern.",
    emergencyServices: "Notfalldienste:",
    emergencyServicesDesc:
      "Rufen Sie bei medizinischen Notfällen immer Ihre örtliche Notrufnummer an (z. B. 112 in Deutschland). Verlassen Sie sich nicht auf TRAI für dringende Versorgung.",
    privacyContact: "Fragen oder Bedenken zum Datenschutz?",
    lastUpdated: "Zuletzt aktualisiert: 10. Dezember 2024",

    // Revision Review
    reviewChangesTitle: "Änderungen Überprüfen",
    reviewChangesDesc:
      "Überprüfen und vergleichen Sie verschiedene Versionen der KI-Antwort.",
    originalVersion: "Originalversion",
    currentVersion: "Aktuelle Version",
    versionHistory: "Versionsverlauf",

    // Error/Bias Panel
    biasAlertTitle: "KI-Einschränkungs- oder Vorurteilswarnung",
    biasAlertDesc: "KI-Einschränkungs- oder Vorurteilswarnung",
    detectedIssues: "Erkannte Probleme",
    aiResponseClarification:
      "Über die Antwort der KI: Das System hat potenzielle Probleme mit der Art und Weise erkannt, wie die KI Ihre Frage beantwortet hat.",
    suggestedActions: "Vorgeschlagene Aktionen",
    reframeNeutrality: "Für Neutralität Umformulieren",
    simplifyLanguage: "Sprache Vereinfachen",
    translateLocalize: "Übersetzen & Lokalisieren",
    dismiss: "Verwerfen",
    hideDetails: "Details Ausblenden",
    showMoreDetails: "Weitere Details Anzeigen",
    potentialIssuesDetected: "Mögliche Probleme Erkannt:",
    culturalBias: "Kulturelle Voreingenommenheit",
    culturalBiasDesc:
      "Die Antwort kann westliche oder englischsprachige Perspektiven widerspiegeln",
    trainingDataLimitation: "Trainingsdaten-Einschränkung",
    trainingDataLimitationDesc:
      "Informationen könnten veraltet oder unvollständig sein",
    demographicBias: "Demografische Voreingenommenheit",
    demographicBiasDesc:
      "Die Antwort berücksichtigt möglicherweise keine vielfältigen Demografien",
    severityHigh: "hoch",
    severityMedium: "mittel",
    severityLow: "niedrig",
    whatThisMeans: "Was das bedeutet:",
    whatThisMeansDesc:
      "KI-Antworten basieren auf Trainingsdaten, die möglicherweise nicht alle Perspektiven repräsentieren oder vollständig aktuell sind. Das bedeutet nicht, dass die Informationen falsch sind, aber es ist gut, sich dieser Einschränkungen bei wichtigen Entscheidungen bewusst zu sein.",
    transparencyNotice:
      "Dieses KI-System zielt darauf ab, hilfreich, harmlos und ehrlich zu sein. Wenn potenzielle Voreingenommenheiten erkannt werden, zeigen wir diesen Hinweis an, um Transparenz und kritisches Denken zu fördern.",

    // Toast messages
    toastDataCollectionOn:
      "Datenerfassung aktiviert. Anonymisierte Daten werden gesammelt, um KI-Antworten zu verbessern.",
    toastDataCollectionOff:
      "Datenerfassung deaktiviert. Keine Gesprächsdaten werden gespeichert.",
    toastReframing:
      "Antwort wird für Neutralität umformuliert...",
    toastReframingSuccess: "Antwort erfolgreich umformuliert",
    toastSimplifying: "Sprache wird vereinfacht...",
    toastSimplifyingSuccess: "Sprache erfolgreich vereinfacht",
    toastTranslating:
      "Übersetzungsoptionen werden vorbereitet...",
    toastTranslatingSuccess: "Antwort erfolgreich lokalisiert",

    // Font Size Controls
    fontSizeLabel: "Schriftgröße",
    decreaseFontSize: "Schriftgröße verringern",
    increaseFontSize: "Schriftgröße erhöhen",
    resetFontSize: "Schriftgröße zurücksetzen",
    currentFontSize: "Aktuelle Schriftgröße",

    // Privacy Mode Banner
    privacyModeActiveBanner:
      "Der Datenschutzmodus ist aktiv. Es werden keine Daten gesammelt.",

    // Clinician Review Banner
    aiGeneratedGuidance: "KI-Generierte Anleitung",
    aiGeneratedGuidanceDesc:
      "Diese Antwort basiert auf etablierten klinischen Richtlinien und TRAI hat hohes Vertrauen in diese Antwort.",
    continueButton: "Fortsetzen",
    askClinicianAnyway: "Trotzdem einen Arzt Fragen",
    clinicianReviewRecommended:
      "Ärztliche Überprüfung Empfohlen",
    awaitingReview: "Warten auf Überprüfung",
    reviewed: "Überprüft",
    reviewPending: "Überprüfung Ausstehend",
    preliminarySuggestion:
      "TRAI hat einen vorläufigen Vorschlag bereitgestellt, aber ein Arzt wird dies überprüfen, bevor die Empfehlung finalisiert wird.",
    reviewedBy: "Überprüft von",
    requestPriorityReview: "Prioritätsüberprüfung Anfordern",
    clinicianConsultationNeeded:
      "Ärztliche Konsultation Erforderlich",
    notConfidentEnough:
      "Ich bin nicht zuversichtlich genug, um Anleitung zu dieser Angelegenheit zu geben. Ich empfehle, mit einem qualifizierten Arzt für eine angemessene Beurteilung zu sprechen.",
    requiresProfessionalExpertise:
      "Diese Frage erfordert professionelle medizinische Expertise.",
    sendToClinician: "An Arzt Senden",

    // Confidence Meter
    highConfidence: "Hohes Vertrauen",
    mediumConfidence: "Mittleres Vertrauen",
    lowConfidence: "Niedriges Vertrauen",
    unknown: "Unbekannt",
    highConfidenceHedge:
      "Ich bin ziemlich zuversichtlich bei dieser Antwort.",
    mediumConfidenceHedge:
      "Diese Antwort scheint vernünftig, aber Sie möchten vielleicht überprüfen.",
    lowConfidenceHedge:
      "Ich bin mir nicht sehr sicher. Bitte überprüfen Sie diese Information.",
    unknownConfidenceHedge: "Vertrauensniveau unbekannt.",
    whatIsConfidence: "Was ist Vertrauen?",
    confidenceExplanation:
      "Das Vertrauen misst, wie sicher TRAI über seine Antwort ist, basierend auf verfügbaren klinischen Richtlinien, Datenqualität und Klarheit der Antwort. Höheres Vertrauen bedeutet, dass die Antwort durch etablierte medizinische Literatur gut unterstützt wird.",
    confidenceAriaHigh: "Antwort mit hohem Vertrauen",
    confidenceAriaMedium: "Antwort mit mittlerem Vertrauen",
    confidenceAriaLow: "Antwort mit niedrigem Vertrauen",
    confidenceAriaUnknown: "Unbekanntes Vertrauensniveau",
    whatDoesConfidenceMean: "Was bedeutet Vertrauen?",
    confidenceLevel: "Vertrauensniveau",

    // Reasoning Panel
    whyThisAnswer: "Warum diese Antwort?",
    aiReasoning: "KI-Begründung",
    reasoningFooter:
      "Diese Erklärung zeigt, wie ich zu meiner Antwort gekommen bin. Wenn etwas keinen Sinn ergibt, können Sie meine Antwort bearbeiten oder mich bitten, es anders zu erklären.",
  },
};

export function useTranslations(
  language: Language,
): Translations {
  return translations[language] || translations.en;
}