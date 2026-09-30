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
    allServices: string;
    checklist: string;
    selectLanguage: string;
    skipToContent: string;
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
  };
  officialSource: {
    title: string;
    explanationNote: string;
    lastReviewed: string;
    verifyNotice: string;
    openInNewTab: string;
  };
  notFound: {
    title: string;
    message: string;
    backButton: string;
  };
}
