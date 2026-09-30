export type Language = "en" | "hi" | "mr";

export interface LocaleTranslations {
  brand: {
    name: string;
    tagline: string;
    subTagline: string;
    disclaimer: string;
    notGovWarning: string;
  };
  nav: {
    home: string;
    services: string;
    allServices: string;
    admissions: string;
    checklist: string;
    howItWorks: string;
    selectLanguage: string;
    skipToContent: string;
    onThisPage: string;
    startHere: string;
    quickAccess: string;
    officialPortals: string;
    journeyStatus: string;
  };
  journey: {
    situation: string;
    eligibility: string;
    documents: string;
    checklist: string;
    apply: string;
  };
  contextRail: {
    trustGuaranteeTitle: string;
    trustGuaranteeDesc: string;
    readyToApply: string;
    continueChecklist: string;
    viewAllServices: string;
    allDocsReady: string;
    docsRemaining: string;
    openOfficialPortal: string;
    jumpToSection: string;
  };
  connectionArea: {
    title: string;
    subtitle: string;
    officialPortalsTitle: string;
    officialPortalsSubtitle: string;
    civicTrustTitle: string;
    civicTrustSubtitle: string;
    needAssistanceTitle: string;
    needAssistanceSubtitle: string;
  };
  home: {
    heroQuestion: string;
    searchPlaceholder: string;
    popularKaam: string;
    results: string;
    popularServices: string;
    noResults: string;
    noResultsHint: string;
    showAllServices: string;
    needHelpQuestion: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  process: {
    documentsRequired: string;
    stepsTitle: string;
    officialInfo: string;
    scopeNoteTitle: string;
    whoCanApply: string;
    eligibility: string;
    situationsTitle: string;
    allSituations: string;
    feesTitle: string;
    timelinesTitle: string;
    commonMistakesTitle: string;
    faqsTitle: string;
    readyCount: string;
    openChecklist: string;
    nextStepPrompt: string;
    allDocsReady: string;
    startApplication: string;
    viewDetails: string;
    whatDoesThisMean: string;
    backToProcess: string;
  };
  document: {
    whatIsIt: string;
    whyNeeded: string;
    whyNeededDisclaimer: string;
    commonExamples: string;
    examplesNotice: string;
    formatAndPrep: string;
    submission: string;
    selfAttestation: string;
    digitalCopy: string;
    fileFormat: string;
    validityRecentness: string;
    whatIfMissing: string;
    importantOfficialNotes: string;
    requirementsVaryWarning: string;
    markReady: string;
    markReadyUndo: string;
    backTo: string;
  };
  checklist: {
    title: string;
    completed: string;
    done: string;
    nothingTicked: string;
    startWith: string;
    next: string;
    allReady: string;
    savedLocallyNotice: string;
    clearTicks: string;
    clearConfirm: string;
    continueApplication: string;
    selectServiceToView: string;
  };
  officialSource: {
    title: string;
    explanationNote: string;
    lastReviewed: string;
    verifyNotice: string;
    openInNewTab: string;
  };
  legal: {
    privacyTitle: string;
    termsTitle: string;
    disclaimerTitle: string;
    securityTitle: string;
    cookiesTitle: string;
    accessibilityTitle: string;
    independentNotice: string;
  };
  notFound: {
    title: string;
    message: string;
    backButton: string;
  };
}
