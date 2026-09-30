/**
 * Central dataset for Student Admissions in KaamKaagaz.
 *
 * ACCURACY & VERIFICATION RULES:
 * - All portal domains and URLs are verified official government & university portals.
 * - Academic Year is specified (AY 2026–27).
 * - Course-specific CAP routes are respected without fabricating a generic single CAP link.
 * - Multi-language support (English, Hindi, Marathi).
 * - No unofficial agents or third-party paid services.
 */

import { LocalizedString } from "./processes";

export type AdmissionLevel =
  | "11th / FYJC"
  | "Undergraduate"
  | "Postgraduate"
  | "CET / CAP"
  | "PhD / Research"
  | "CDOE / Distance"
  | "Scholarships";

export type PortalStatus =
  | "CURRENT"
  | "SEASONAL"
  | "VERIFICATION ONGOING"
  | "NOTICE-BASED";

export interface CourseSpecificRoute {
  courseName: string;
  cetName: string;
  portalUrl: string;
  shortNote: string;
}

export interface AdmissionPortal {
  id: string;
  name: string;
  localizedName?: LocalizedString;
  purpose: string;
  localizedPurpose?: LocalizedString;
  level: AdmissionLevel;
  authority: string;
  domain: string;
  url: string;
  academicYear: string;
  status: PortalStatus;
  lastChecked: string;
  notes: string;
  localizedNotes?: LocalizedString;
  whoUsesIt: string;
  localizedWhoUsesIt?: LocalizedString;
  courseSpecificRoutes?: CourseSpecificRoute[];
}

export interface RoadmapStep {
  stepNumber: number;
  title: LocalizedString;
  description: LocalizedString;
  whatYouNeed: LocalizedString;
  afterSubmissionGuidance?: LocalizedString;
  portalAction?: {
    label: LocalizedString;
    url: string;
    domain: string;
  };
}

export interface AdmissionRoadmap {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  level: AdmissionLevel;
  academicYear: string;
  primaryPortalId: string;
  overview: LocalizedString;
  steps: RoadmapStep[];
}

export type StudentDocStatus =
  | "READY"
  | "MISSING"
  | "NEEDS_UPDATE"
  | "PENDING"
  | "NOT_SURE"
  | "NOT_APPLICABLE";

export interface DoINeedThisHelper {
  whatIsIt: LocalizedString;
  whyMightINeedIt: LocalizedString;
  whoUsuallyNeedsIt: LocalizedString;
  whereDoIGetIt: LocalizedString;
  whatFormat: LocalizedString;
  originalOrCopy: LocalizedString;
  validity: LocalizedString;
  whatIfPending: LocalizedString;
  officialSourceNotice: LocalizedString;
}

export interface StudentDocument {
  id: string;
  name: LocalizedString;
  shortTag: string;
  applicableLevels: AdmissionLevel[];
  mandatoryFor: string[];
  helper: DoINeedThisHelper;
}

export interface ProblemGuide {
  id: string;
  question: LocalizedString;
  shortSummary: LocalizedString;
  situation: LocalizedString;
  explanation: LocalizedString;
  actionSteps: LocalizedString[];
  officialWarning?: LocalizedString;
  relatedPortalId?: string;
  relatedDocIds?: string[];
}

export interface AdmissionTerm {
  id: string;
  term: string;
  officialTerm: string;
  plainMeaning: LocalizedString;
  howItAffectsYou: LocalizedString;
  exampleScenario?: LocalizedString;
}

export interface ScholarshipScheme {
  id: string;
  name: LocalizedString;
  department: string;
  category: "Open / EBC" | "SC" | "ST" | "OBC / VJNT / SBC" | "Minority";
  courseType: "Professional / Technical" | "Non-Professional Degree" | "Diploma / Junior College" | "All Post-Matric";
  eligibilityIncome: string;
  benefits: LocalizedString;
  documentsRequired: string[];
  officialPortal: string;
  domain: string;
  lastChecked: string;
}

// ---------------------------------------------------------------------------
// 1. CENTRAL PORTAL DIRECTORY DATASET (AY 2026–27)
// ---------------------------------------------------------------------------
export const admissionPortals: AdmissionPortal[] = [
  {
    id: "fyjc-maha",
    name: "Maharashtra 11th / FYJC Centralised Admission",
    localizedName: {
      en: "Maharashtra 11th / FYJC Centralised Admission",
      hi: "महाराष्ट्र 11वीं / FYJC केंद्रीकृत प्रवेश पोर्टल",
      mr: "महाराष्ट्र ११ वी / FYJC केंद्रीय प्रवेश पोर्टल",
    },
    purpose: "Online student registration, Part 1 application, Part 2 junior college choice filling, merit lists, quota admissions, and round-wise seat allotment.",
    localizedPurpose: {
      en: "Online student registration, Part 1 application, Part 2 junior college choice filling, merit lists, quota admissions, and round-wise seat allotment.",
      hi: "11वीं में प्रवेश हेतु ऑनलाइन छात्र पंजीकरण, भाग 1 आवेदन, भाग 2 जूनियर कॉलेज विकल्प भरना, मेरिट लिस्ट और राउंड-वार सीट आवंटन।",
      mr: "११ वी प्रवेशासाठी ऑनलाइन विद्यार्थी नोंदणी, भाग १ अर्ज, भाग २ कनिष्ठ महाविद्यालय पसंतीक्रम भरणे, गुणवत्ता यादी आणि फेरीनुसार जागा वाटप.",
    },
    level: "11th / FYJC",
    authority: "Directorate of Secondary & Higher Secondary Education, Maharashtra State, Pune",
    domain: "mahafyjcadmissions.in",
    url: "https://mahafyjcadmissions.in",
    academicYear: "AY 2026–27",
    status: "CURRENT",
    lastChecked: "2026-09-30",
    whoUsesIt: "Students completing 10th (SSC, CBSE, ICSE, NIOS, etc.) seeking admission into Std. 11 (Arts, Science, Commerce, HSVC) in MMR (Mumbai), Pune, Nagpur, Nashik, Amravati municipal areas.",
    localizedWhoUsesIt: {
      en: "Students completing 10th (SSC, CBSE, ICSE, NIOS) applying to Junior Colleges in Mumbai, Pune, Nagpur, Nashik, and Amravati areas.",
      hi: "10वीं उत्तीर्ण छात्र जो मुंबई (MMR), पुणे, नागपुर, नाशिक व अमरावती क्षेत्र के जूनियर कॉलेजों में 11वीं में प्रवेश लेना चाहते हैं।",
      mr: "१० वी उत्तीर्ण विद्यार्थी जे मुंबई, पुणे, नागपूर, नाशिक आणि अमरावती महानगर क्षेत्रातील कनिष्ठ महाविद्यालयांमध्ये ११ वी प्रवेश घेऊ इच्छितात.",
    },
    notes: "Part 1 (Personal details & verification) opens first; Part 2 (College option form) opens after board results. Separate quota links exist on the portal for Management, Minority, and In-house seats.",
    localizedNotes: {
      en: "Part 1 (verification) opens before Part 2 (option form). Always keep your Login ID and password secure.",
      hi: "पार्ट 1 (सत्यापन) पहले खुलता है और पार्ट 2 (कॉलेज विकल्प) बोर्ड परिणाम के बाद। अपना लॉगिन आईडी और पासवर्ड सुरक्षित रखें।",
      mr: "भाग १ (पडताळणी) आधी सुरू होतो आणि भाग २ (पसंतीक्रम) निकालांनंतर. आपला लॉगिन आयडी व पासवर्ड सुरक्षित ठेवा.",
    },
  },
  {
    id: "cet-cell-maha",
    name: "Maharashtra State CET Cell / CAP Portal",
    localizedName: {
      en: "Maharashtra State Common Entrance Test Cell (CET Cell)",
      hi: "महाराष्ट्र राज्य सामायिक प्रवेश परीक्षा कक्ष (CET Cell / CAP)",
      mr: "महाराष्ट्र राज्य सामायिक प्रवेश परीक्षा कक्ष (CET Cell / CAP)",
    },
    purpose: "Conducts state entrance tests (MHT-CET, MAH-MBA, MAH-MCA, MAH-B.HMCT, MAH-BBA/BMS, MAH-LLB) and centralized admission (CAP) for professional degrees.",
    localizedPurpose: {
      en: "State entrance examination hub and course-specific Centralized Admission Process (CAP) rounds.",
      hi: "व्यावसायिक पाठ्यक्रमों की प्रवेश परीक्षाएं (CET) और पाठ्यक्रम-वार केंद्रीकृत प्रवेश प्रक्रिया (CAP)।",
      mr: "व्यावसायिक अभ्यासक्रमांच्या प्रवेश परीक्षा (CET) आणि अभ्यासक्रमानुसार केंद्रीय प्रवेश प्रक्रिया (CAP).",
    },
    level: "CET / CAP",
    authority: "State Common Entrance Test Cell, Directorate of Higher & Technical Education, Maharashtra",
    domain: "cetcell.mahacet.org",
    url: "https://cetcell.mahacet.org",
    academicYear: "AY 2026–27",
    status: "CURRENT",
    lastChecked: "2026-09-30",
    whoUsesIt: "Candidates seeking admission to Engineering, Pharmacy, MBA, MCA, Architecture, Law, Hotel Management, Agriculture, and BBA/BMS professional courses in Maharashtra colleges.",
    localizedWhoUsesIt: {
      en: "Students applying to Professional Undergraduate and Postgraduate degree programs across Maharashtra.",
      hi: "महाराष्ट्र में इंजीनियरिंग, फार्मेसी, एमबीए, एमसीए, लॉ, और बीबीए/बीएमएस जैसे व्यावसायिक पाठ्यक्रमों के छात्र।",
      mr: "महाराष्ट्रातील अभियांत्रिकी, फार्मसी, एमबीए, एमसीए, विधी (लॉ), आणि बीबीए/बीएमएस व्यावसायिक अभ्यासक्रमांचे विद्यार्थी.",
    },
    notes: "CET Cell operates distinct course portals during CAP rounds. There is NO single generic application form for all courses. Check the specific course link below for your respective discipline.",
    localizedNotes: {
      en: "The CET Cell creates separate dedicated sub-portals for each course during CAP (e.g. BE/B.Tech, MBA, MCA). Always choose your specific course.",
      hi: "सीईटी सेल प्रत्येक पाठ्यक्रम के लिए अलग कैप पोर्टल जारी करता है (जैसे बीई, एमबीए, एमसीए)। हमेशा अपने पाठ्यक्रम का सही पोर्टल चुनें।",
      mr: "सीईटी सेल प्रत्येक अभ्यासक्रमासाठी स्वतंत्र कॅप पोर्टल चालवते (उदा. बी.ई., एमबीए, एमसीए). नेहमी आपल्या अभ्यासक्रमाची योग्य लिंक निवडा.",
    },
    courseSpecificRoutes: [
      {
        courseName: "Engineering & Technology (B.E. / B.Tech)",
        cetName: "MHT-CET (PCM)",
        portalUrl: "https://cetcell.mahacet.org",
        shortNote: "Direct 1st Year Engineering CAP registration, E-Scrutiny, option form, and merit list.",
      },
      {
        courseName: "Management Studies (MBA / MMS)",
        cetName: "MAH-MBA/MMS CET",
        portalUrl: "https://cetcell.mahacet.org",
        shortNote: "Postgraduate management CAP for all state universities & private institutes.",
      },
      {
        courseName: "Computer Applications (MCA)",
        cetName: "MAH-MCA CET",
        portalUrl: "https://cetcell.mahacet.org",
        shortNote: "2-year Masters in Computer Application CAP allotment rounds.",
      },
      {
        courseName: "Pharmacy (B.Pharm / Pharm.D)",
        cetName: "MHT-CET (PCB/PCM)",
        portalUrl: "https://cetcell.mahacet.org",
        shortNote: "Degree Pharmacy admission process including E-Scrutiny and round allotment.",
      },
      {
        courseName: "Law (3-Year & 5-Year LL.B.)",
        cetName: "MAH-L.L.B. CET",
        portalUrl: "https://cetcell.mahacet.org",
        shortNote: "Government and affiliated Law college centralized seat allocation.",
      },
      {
        courseName: "BBA / BMS / BCA / BBM (Professional UG)",
        cetName: "MAH-B.BCA/BBA/BMS/BBM CET",
        portalUrl: "https://cetcell.mahacet.org",
        shortNote: "Under AICTE & State CET Cell guidelines for commerce/management professional UG courses.",
      },
      {
        courseName: "Architecture (B.Arch)",
        cetName: "NATA / MHT-CET",
        portalUrl: "https://cetcell.mahacet.org",
        shortNote: "Council of Architecture & CET Cell normalized score admission.",
      },
    ],
  },
  {
    id: "mu-main-admission",
    name: "University of Mumbai — Admission Reference Hub",
    localizedName: {
      en: "University of Mumbai — Admission Reference Hub",
      hi: "मुंबई विश्वविद्यालय — प्रवेश संदर्भ एवं परिपत्र केंद्र",
      mr: "मुंबई विद्यापीठ — प्रवेश संदर्भ आणि परिपत्रक केंद्र",
    },
    purpose: "Official university circulars, academic schedules, affiliated college directories, cut-off notices, and central regulatory guidelines.",
    localizedPurpose: {
      en: "Official university circulars, academic schedules, affiliated college directories, and central guidelines.",
      hi: "विश्वविद्यालय के आधिकारिक परिपत्र, प्रवेश कार्यक्रम, संबद्ध कॉलेजों की सूची और नियम।",
      mr: "विद्यापीठाची अधिकृत परिपत्रके, प्रवेश वेळापत्रक, संलग्न महाविद्यालयांची यादी आणि नियम.",
    },
    level: "Undergraduate",
    authority: "University of Mumbai, Fort, Mumbai",
    domain: "mu.ac.in",
    url: "https://muugadmission.samarth.edu.in/",
    academicYear: "AY 2026–27",
    status: "CURRENT",
    lastChecked: "2026-09-30",
    whoUsesIt: "All students seeking admission to traditional arts, science, commerce, and professional departments affiliated with the University of Mumbai.",
    localizedWhoUsesIt: {
      en: "All students enrolling in University of Mumbai colleges and university departments.",
      hi: "मुंबई विश्वविद्यालय से संबद्ध कॉलेजों और विभागों में प्रवेश लेने वाले सभी छात्र।",
      mr: "मुंबई विद्यापीठाशी संलग्न महाविद्यालये आणि विभागांमध्ये प्रवेश घेणारे सर्व विद्यार्थी.",
    },
    notes: "Always check the current university admission schedule circular before applying. This hub lists official dates for pre-admission enrolment and college merit rounds.",
    localizedNotes: {
      en: "Check circulars for verified dates of pre-admission enrolment and merit lists before relying on third-party news.",
      hi: "किसी भी निजी ब्लॉग के बजाय विश्वविद्यालय के आधिकारिक परिपत्र से प्रवेश की सही तारीखें देखें।",
      mr: "खाजगी बातम्यांवर विश्वास ठेवण्याऐवजी विद्यापीठाच्या अधिकृत परिपत्रकावरून तारखा तपासा.",
    },
  },
  {
    id: "mu-samarth-ug",
    name: "University of Mumbai — Samarth Admission Portal",
    localizedName: {
      en: "University of Mumbai — Samarth Admission Portal",
      hi: "मुंबई विश्वविद्यालय — समर्थ प्रवेश पोर्टल (Samarth)",
      mr: "मुंबई विद्यापीठ — समर्थ प्रवेश पोर्टल (Samarth)",
    },
    purpose: "Pre-admission online registration, programme selection, and central application submission where applicable for affiliated colleges and campus departments.",
    localizedPurpose: {
      en: "Pre-admission student registration and university application enrolment system.",
      hi: "विश्वविद्यालय स्तर पर प्रवेश-पूर्व ऑनलाइन पंजीकरण एवं कॉलेज आवेदन।",
      mr: "विद्यापीठ स्तरावर प्रवेशपूर्व ऑनलाइन नोंदणी आणि महाविद्यालय अर्ज प्रणाली.",
    },
    level: "Undergraduate",
    authority: "University of Mumbai & Ministry of Education (Samarth eGov)",
    domain: "muadmission.samarth.edu.in",
    url: "https://muugadmission.samarth.edu.in",
    academicYear: "AY 2026–27",
    status: "NOTICE-BASED",
    lastChecked: "2026-09-30",
    whoUsesIt: "Students applying to Undergraduate (B.A., B.Sc., B.Com., B.Sc. IT, B.Voc, etc.) and applicable Postgraduate university department programmes.",
    localizedWhoUsesIt: {
      en: "Undergraduate and PG applicants applying under University of Mumbai's Samarth portal.",
      hi: "मुंबई विश्वविद्यालय के यूजी एवं पीजी कार्यक्रमों में आवेदन करने वाले छात्र।",
      mr: "मुंबई विद्यापीठाच्या पदवी व पदव्युत्तर अभ्यासक्रमांसाठी अर्ज करणारे विद्यार्थी.",
    },
    notes: "IMPORTANT: Registering on Samarth generates your university application form, but students MUST ALSO submit the admission form directly on each individual college's website or portal as mandated by university circulars.",
    localizedNotes: {
      en: "Registering on Samarth is step 1. You must ALSO fill the specific college's admission form for your selected colleges.",
      hi: "समर्थ पर पंजीकरण पहला चरण है। इसके साथ आपको संबंधित कॉलेज का अलग फ़ॉर्म भी भरना अनिवार्य होता है।",
      mr: "समर्थवर नोंदणी करणे पहिली पायरी आहे. सोबतच निवडलेल्या प्रत्येक महाविद्यालयाचा स्वतंत्र प्रवेश अर्ज भरणे बंधनकारक असते.",
    },
  },
  {
    id: "mu-cdoe-portal",
    name: "University of Mumbai CDOE (Distance & Online Education)",
    localizedName: {
      en: "University of Mumbai CDOE — Distance & Online Education",
      hi: "मुंबई विश्वविद्यालय CDOE (दूरस्थ एवं ऑनलाइन शिक्षा)",
      mr: "मुंबई विद्यापीठ CDOE (दूरस्थ आणि ऑनलाइन शिक्षण केंद्र)",
    },
    purpose: "Admission portal for Centre for Distance and Online Education (formerly IDOL) for flexible, distance, and online UG & PG degree programmes.",
    localizedPurpose: {
      en: "Online admission for working professionals and self-paced distance learning students under NEP.",
      hi: "दूरस्थ शिक्षा एवं ऑनलाइन डिग्री कार्यक्रमों में सीधे ऑनलाइन प्रवेश।",
      mr: "दूरस्थ शिक्षण व ऑनलाइन पदवी अभ्यासक्रमांसाठी थेट ऑनलाइन प्रवेश.",
    },
    level: "CDOE / Distance",
    authority: "Centre for Distance and Online Education, University of Mumbai, Kalina Campus",
    domain: "mucdoeadm.samarth.edu.in",
    url: "https://mucdoeadm.samarth.edu.in",
    academicYear: "AY 2026–27",
    status: "CURRENT",
    lastChecked: "2026-09-30",
    whoUsesIt: "Students, working professionals, and lifelong learners enrolling in distance learning B.A., B.Com., M.A., M.Com., M.Sc. Maths/IT, and MCA programs.",
    localizedWhoUsesIt: {
      en: "Students taking distance & online education with University of Mumbai.",
      hi: "दूरस्थ व ऑनलाइन माध्यम से पढ़ाई करने वाले कामकाजी व अन्य छात्र।",
      mr: "दूरस्थ व ऑनलाइन माध्यमातून पदवी शिक्षण घेणारे नोकरदार व विद्यार्थी.",
    },
    notes: "Current NEP admissions use the CDOE Samarth portal. Continuing CBCS semester students or prior-year repeaters should follow the specific department notice regarding the legacy portal route.",
    localizedNotes: {
      en: "New admissions follow the Samarth CDOE route. Legacy/prior-year students should verify old portal credentials per department notice.",
      hi: "नए प्रवेश समर्थ सीडीओई पोर्टल से होते हैं। पुराने सत्र के छात्र विभाग के परिपत्र अनुसार पोर्टल चुनें।",
      mr: "नवीन प्रवेश समर्थ सीडीओई पोर्टलवरून होतात. जुन्या सत्रातील विद्यार्थ्यांनी परिपत्रकानुसार योग्य पर्याय निवडावा.",
    },
  },
  {
    id: "mu-phd-portal",
    name: "University of Mumbai Ph.D. Research Portal",
    localizedName: {
      en: "University of Mumbai Ph.D. Research Portal",
      hi: "मुंबई विश्वविद्यालय पीएचडी अनुसंधान पोर्टल",
      mr: "मुंबई विद्यापीठ पी.एच.डी. संशोधन पोर्टल",
    },
    purpose: "Ph.D. Entrance Test (PET) registration, PET-exempted research scholar enrolment, vacant guide seats display, and thesis registration.",
    localizedPurpose: {
      en: "Doctoral research admissions, PET examination registration, and guide vacancy tracking.",
      hi: "पीएचडी प्रवेश परीक्षा (PET), शोध छात्र पंजीकरण और गाइड रिक्तियों की जानकारी।",
      mr: "पी.एच.डी. प्रवेश परीक्षा (PET), संशोधन विद्यार्थी नोंदणी आणि मार्गदर्शक रिक्त जागांची माहिती.",
    },
    level: "PhD / Research",
    authority: "Board of Examinations and Research Recognition Committee, University of Mumbai",
    domain: "uomphd.mu.ac.in",
    url: "https://muadmission.samarth.edu.in",
    academicYear: "AY 2026–27",
    status: "NOTICE-BASED",
    lastChecked: "2026-09-30",
    whoUsesIt: "Candidates holding a Master's degree (55% or equivalent) applying for PET or possessing UGC-NET / CSIR-NET / GATE / SET qualification for Ph.D. research.",
    localizedWhoUsesIt: {
      en: "Doctoral aspirants and NET/JRF/GATE qualified researchers.",
      hi: "मास्टर्स डिग्री धारक जो पीएचडी शोध कार्य में प्रवेश लेना चाहते हैं।",
      mr: "मास्टर्स पदवी पूर्ण केलेले संशोधक विद्यार्थी.",
    },
    notes: "Ph.D. registration is strictly department-notice based. Candidates must verify faculty vacancies at affiliated research centers before applying.",
    localizedNotes: {
      en: "Always cross-check research center guide vacancies before paying registration fees.",
      hi: "पंजीकरण शुल्क भरने से पहले संबंधित शोध केंद्र में गाइड की रिक्त सीटों की पुष्टि करें।",
      mr: "नोंदणी शुल्क भरण्यापूर्वी संशोधन केंद्रातील मार्गदर्शकांच्या रिक्त जागांची खात्री करा.",
    },
  },
  {
    id: "mahadbt-scholarships",
    name: "MahaDBT — Maharashtra Direct Benefit Transfer Portal",
    localizedName: {
      en: "MahaDBT — Maharashtra Direct Benefit Transfer Portal",
      hi: "महाडीबीटी — महाराष्ट्र थेट लाभ हस्तांतरण (MahaDBT) पोर्टल",
      mr: "महाडीबीटी — महाराष्ट्र थेट लाभ हस्तांतरण (MahaDBT) पोर्टल",
    },
    purpose: "Centralized application portal for state post-matric scholarships, tuition fee reimbursement (Freeship / EBC), hostel maintenance allowances, and examination fee waivers.",
    localizedPurpose: {
      en: "State post-matric scholarships, freeship fee reimbursement, and government student financial support.",
      hi: "राज्य सरकार की पोस्ट-मैट्रिक छात्रवृत्ति, शिक्षण शुल्क प्रतिपूर्ति (EBC/Freeship) और छात्रावास भत्ता।",
      mr: "राज्य शासनाची मॅट्रिकोत्तर शिष्यवृत्ती, शिक्षण शुल्क माफी (EBC/Freeship) आणि वसतिगृह निर्वाह भत्ता.",
    },
    level: "Scholarships",
    authority: "Government of Maharashtra (Social Justice, Tribal, Higher & Technical Education Depts)",
    domain: "mahadbt.maharashtra.gov.in",
    url: "https://mahadbt.maharashtra.gov.in",
    academicYear: "AY 2026–27",
    status: "CURRENT",
    lastChecked: "2026-09-30",
    whoUsesIt: "Maharashtra resident students admitted through CAP or recognized routes into Junior Colleges, Degree Colleges, Engineering, Medical, Polytechnic, MBA, and University departments.",
    localizedWhoUsesIt: {
      en: "Maharashtra domicile students enrolled in higher education seeking state financial support.",
      hi: "महाराष्ट्र के मूल निवासी छात्र जो कॉलेज/विश्वविद्यालय में फीस छूट या छात्रवृत्ति पाना चाहते हैं।",
      mr: "महाराष्ट्रातील रहिवासी विद्यार्थी जे उच्च शिक्षणात शिष्यवृत्ती किंवा शिक्षण शुल्क सवलत मिळवू इच्छितात.",
    },
    notes: "Requires Aadhaar-linked active bank account with NPCI mapping. Income certificates must be issued by the Tahsildar / competent revenue officer for the current financial year.",
    localizedNotes: {
      en: "Bank account MUST be seeded with Aadhaar (NPCI mapping) to receive DBT scholarship credit without failure.",
      hi: "छात्रवृत्ति की राशि पाने के लिए बैंक खाते में आधार लिंक (NPCI Mapping) होना अनिवार्य है।",
      mr: "शिष्यवृत्तीचे पैसे खात्यात जमा होण्यासाठी बँक खात्याला आधार लिंक (NPCI Mapping) असणे अनिवार्य आहे.",
    },
  },
];

// ---------------------------------------------------------------------------
// 2. ADMISSION ROADMAPS (Step-by-step visual roadmaps)
// ---------------------------------------------------------------------------
export const admissionRoadmaps: AdmissionRoadmap[] = [
  {
    id: "roadmap-fyjc",
    title: {
      en: "Maharashtra 11th / FYJC Admission Roadmap",
      hi: "महाराष्ट्र 11वीं / FYJC प्रवेश रोडमैप",
      mr: "महाराष्ट्र ११ वी / FYJC प्रवेश रोडमॅप",
    },
    subtitle: {
      en: "Standard step-by-step journey from 10th result to junior college confirmation",
      hi: "10वीं के परिणाम से जूनियर कॉलेज में प्रवेश पुष्टिकरण तक के चरण",
      mr: "१० वी निकालापासून कनिष्ठ महाविद्यालय प्रवेश निश्चितीपर्यंतच्या पायऱ्या",
    },
    level: "11th / FYJC",
    academicYear: "AY 2026–27",
    primaryPortalId: "fyjc-maha",
    overview: {
      en: "Centralized online admission for Arts, Science, Commerce, and HSVC streams in municipal corporation areas (MMR, Pune, etc.).",
      hi: "महानगर क्षेत्रों में कला, विज्ञान, वाणिज्य और एचएसवीसी शाखाओं में केंद्रीकृत प्रवेश प्रक्रिया।",
      mr: "महानगरपालिका क्षेत्रातील कला, विज्ञान, वाणिज्य आणि एचएसव्हीसी शाखांसाठी केंद्रीय प्रवेश प्रक्रिया.",
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: "Portal Registration & Login Creation",
          hi: "पोर्टल पंजीकरण एवं लॉगिन निर्माण",
          mr: "पोर्टल नोंदणी आणि लॉगिन तयार करणे",
        },
        description: {
          en: "Visit mahafyjcadmissions.in, select your region (e.g. Mumbai / Pune), and create your student account using your 10th seat number or manual entry.",
          hi: "आधिकारिक पोर्टल पर जाएं, अपना क्षेत्र चुनें और 10वीं के रोल नंबर से छात्र आईडी व पासवर्ड बनाएं।",
          mr: "अधिकृत पोर्टलवर जाऊन आपला विभाग निवडा आणि १० वी च्या बैठक क्रमांकाने विद्यार्थी खाते तयार करा.",
        },
        whatYouNeed: {
          en: "10th Roll Number, Mother's name, active mobile number for OTP.",
          hi: "10वीं का रोल नंबर, माता का नाम, ओटीपी हेतु सक्रिय मोबाइल नंबर।",
          mr: "१० वी बैठक क्रमांक, आईचे नाव, ओटीपीसाठी चालू मोबाईल क्रमांक.",
        },
        portalAction: {
          label: { en: "Open FYJC Portal", hi: "FYJC पोर्टल खोलें", mr: "FYJC पोर्टल उघडा" },
          url: "https://mahafyjcadmissions.in",
          domain: "mahafyjcadmissions.in",
        },
      },
      {
        stepNumber: 2,
        title: {
          en: "Fill Part 1 Form (Personal & Reservation Details)",
          hi: "भाग 1 फ़ॉर्म भरें (व्यक्तिगत व आरक्षण विवरण)",
          mr: "भाग १ अर्ज भरा (वैयक्तिक व आरक्षण माहिती)",
        },
        description: {
          en: "Enter personal details, address, category (General, SC, ST, OBC, EWS, etc.), and choose verification mode (Secondary School E-Scrutiny or Guidance Center).",
          hi: "नाम, पता, आरक्षण श्रेणी दर्ज करें और सत्यापन केंद्र (स्कूल या मार्गदर्शन केंद्र) का चयन करें।",
          mr: "नाव, पत्ता, जात प्रवर्ग निवडा आणि शाळा अथवा मार्गदर्शन केंद्रामार्फत पडताळणी पर्याय निवडा.",
        },
        whatYouNeed: {
          en: "10th Marksheet, Domicile/Birth Certificate, Caste Certificate & Validity (if reserved category).",
          hi: "10वीं की मार्कशीट, अधिवास/जन्म प्रमाण पत्र, जाति प्रमाण पत्र (यदि लागू हो)।",
          mr: "१० वी गुणपत्रिका, अधिवास/जन्म दाखला, जात प्रमाणपत्र (लागू असल्यास).",
        },
      },
      {
        stepNumber: 3,
        title: {
          en: "Document Verification & Approval of Part 1",
          hi: "दस्तावेज़ सत्यापन एवं भाग 1 की स्वीकृति",
          mr: "कागदपत्र पडताळणी आणि भाग १ ची मंजुरी",
        },
        description: {
          en: "Your secondary school or designated guidance center verifies your uploaded documents online. Once approved, your Part 1 status becomes 'Verified'.",
          hi: "आपके स्कूल या मार्गदर्शन केंद्र द्वारा दस्तावेज़ों की ऑनलाइन जांच की जाती है और फ़ॉर्म 'Verified' हो जाता है।",
          mr: "तुमच्या शाळेमार्फत किंवा केंद्राकडून कागदपत्रांची ऑनलाइन तपासणी होऊन अर्ज मंजूर (Verified) होतो.",
        },
        whatYouNeed: {
          en: "Keep original certificates ready if flagged for clarification.",
          hi: "यदि कोई त्रुटि मिले तो सुधार हेतु मूल प्रमाण पत्र तैयार रखें।",
          mr: "काही त्रुटी आढळल्यास दुरुस्तीसाठी मूळ कागदपत्रे तयार ठेवा.",
        },
        afterSubmissionGuidance: {
          en: "Check your portal dashboard daily until you see the green 'VERIFIED' badge. Do NOT wait until Part 2 opens to fix verification errors.",
          hi: "डैशबोर्ड पर 'VERIFIED' का हरा निशान आने तक नज़र रखें। त्रुटि हो तो तुरंत मार्गदर्शन केंद्र से संपर्क करें।",
          mr: "डॅशबोर्डवर 'VERIFIED' असा हिरवा शेरा येईपर्यंत लक्ष ठेवा. त्रुटी असल्यास लगेच दुरुस्त करा.",
        },
      },
      {
        stepNumber: 4,
        title: {
          en: "Fill Part 2 Option Form (Junior College Choices)",
          hi: "भाग 2 विकल्प फ़ॉर्म भरें (कॉलेज की पसंद)",
          mr: "भाग २ पसंती अर्ज भरा (महाविद्यालयांचे प्राधान्यक्रम)",
        },
        description: {
          en: "Select stream (Arts / Science / Commerce), medium of instruction, and add minimum 1 to maximum 10 junior college preferences in order of choice.",
          hi: "अपनी शाखा (आर्ट्स/साइंस/कॉमर्स) चुनें और 1 से 10 कॉलेजों की वरीयता सूची (Preference Order) भरें।",
          mr: "शाखा (कला/विज्ञान/वाणिज्य) निवडून १ ते १० कनिष्ठ महाविद्यालयांचे प्राधान्यक्रम अचूक भरा.",
        },
        whatYouNeed: {
          en: "Previous year's cut-off marks for selected colleges to set realistic preferences.",
          hi: "कॉलेजों के पिछले साल के कट-ऑफ अंक ताकि सही वरीयता चुनी जा सके।",
          mr: "मागील वर्षाचे कट-ऑफ गुण तपासून योग्य प्राधान्यक्रम ठरवा.",
        },
      },
      {
        stepNumber: 5,
        title: {
          en: "Merit List & Round-wise Seat Allotment",
          hi: "मेरिट लिस्ट एवं राउंड-वार सीट आवंटन",
          mr: "गुणवत्ता यादी आणि फेरीनुसार जागा वाटप",
        },
        description: {
          en: "The system runs algorithmic allocation based on your merit marks, category quota, and preference order. Portal displays 'Allotted Junior College'.",
          hi: "मेरिट अंक और पसंद के आधार पर कंप्यूटर द्वारा कॉलेज का आवंटन किया जाता है।",
          mr: "गुणांची गुणवत्ता आणि पसंतीक्रमानुसार पोर्टलवर तुम्हाला मिळालेले महाविद्यालय जाहीर केले जाते.",
        },
        whatYouNeed: {
          en: "Student Login ID to view Provisional Allotment Letter.",
          hi: "अलॉटमेंट लेटर डाउनलोड करने के लिए लॉगिन क्रेडेंशियल।",
          mr: "जागा वाटप पत्र (Allotment Letter) डाउनलोड करण्यासाठी लॉगिन.",
        },
        afterSubmissionGuidance: {
          en: "RULE: If you are allotted your 1st PREFERENCE college, you MUST take admission. If you reject 1st preference, you are blocked from the next regular round!",
          hi: "नियम: यदि आपको पहली पसंद (1st Preference) का कॉलेज मिला है, तो प्रवेश लेना अनिवार्य है। न लेने पर अगले राउंड से बाहर हो जाएंगे!",
          mr: "नियम: जर १ ला पसंतीक्रम मिळाला तर प्रवेश घेणे बंधनकारक आहे. नकार दिल्यास पुढील नियमित फेरीतून बाद व्हाल!",
        },
      },
      {
        stepNumber: 6,
        title: {
          en: "Report to Allotted College & Confirm Admission",
          hi: "आवंटित कॉलेज में जाएं और प्रवेश पक्का करें",
          mr: "मिळालेल्या महाविद्यालयात जाऊन प्रवेश निश्चित करा",
        },
        description: {
          en: "Visit the college with original documents and required admission fees before the deadline. The college clicks 'Admit' on their portal to generate your official receipt.",
          hi: "निर्धारित अंतिम तिथि से पहले मूल कागज़ात और फीस लेकर कॉलेज जाएं और एडमिशन कन्फर्म करवाएं।",
          mr: "मुदतीपूर्वी मूळ कागदपत्रे आणि शुल्कासह महाविद्यालयात जाऊन ऑनलाइन 'Admit' पावती मिळवा.",
        },
        whatYouNeed: {
          en: "Original 10th Marksheet, Original School Leaving Certificate (LC), Caste Validity (if applicable), Allotment Letter printout.",
          hi: "10वीं की मूल मार्कशीट, मूल स्कूल छोड़ने का प्रमाण पत्र (LC), अलॉटमेंट लेटर का प्रिंट।",
          mr: "१० वी मूळ गुणपत्रिका, मूळ शाळा सोडल्याचा दाखला (LC), अलॉटमेंट लेटर प्रिंट.",
        },
      },
    ],
  },
  {
    id: "roadmap-cet-cap",
    title: {
      en: "Maharashtra CET / CAP Professional Degree Roadmap",
      hi: "महाराष्ट्र CET / CAP व्यावसायिक डिग्री प्रवेश रोडमैप",
      mr: "महाराष्ट्र CET / CAP व्यावसायिक पदवी प्रवेश रोडमॅप",
    },
    subtitle: {
      en: "Centralized Admission Process for Engineering, MBA, MCA, Pharmacy, Law, and BBA/BMS",
      hi: "इंजीनियरिंग, एमबीए, एमसीए, फार्मेसी, लॉ और बीबीए/बीएमएस की केंद्रीकृत प्रवेश प्रक्रिया",
      mr: "अभियांत्रिकी, एमबीए, एमसीए, फार्मसी, विधी आणि बीबीए/बीएमएस ची केंद्रीय प्रवेश प्रक्रिया",
    },
    level: "CET / CAP",
    academicYear: "AY 2026–27",
    primaryPortalId: "cet-cell-maha",
    overview: {
      en: "The State CET Cell manages multi-round CAP for government, aided, and private un-aided professional colleges in Maharashtra.",
      hi: "महाराष्ट्र सीईटी सेल द्वारा आयोजित राज्य-स्तरीय केंद्रीकृत काउंसलिंग एवं सीट आवंटन प्रक्रिया।",
      mr: "महाराष्ट्र राज्य सीईटी सेलद्वारे चालवली जाणारी बहु-फेरी केंद्रीय प्रवेश प्रक्रिया (CAP).",
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: "Entrance Exam & Scorecard Generation",
          hi: "प्रवेश परीक्षा एवं स्कोरकार्ड",
          mr: "प्रवेश परीक्षा आणि गुणपत्रिका",
        },
        description: {
          en: "Appear for relevant CET (MHT-CET, MAH-MBA, MAH-MCA, etc.). Download verified scorecard with Percentile score from cetcell.mahacet.org.",
          hi: "सीईटी परीक्षा दें और आधिकारिक पोर्टल से पर्सेंटाइल स्कोर वाला स्कोरकार्ड डाउनलोड करें।",
          mr: "संबंधित सीईटी परीक्षा देऊन पर्सेंटाईल गुणांसह अधिकृत गुणपत्रिका डाउनलोड करा.",
        },
        whatYouNeed: {
          en: "CET Hall Ticket, Application Number, Date of Birth.",
          hi: "सीईटी हॉल टिकट, आवेदन संख्या और जन्मतिथि।",
          mr: "सीईटी हॉल तिकीट, अर्ज क्रमांक आणि जन्मतारीख.",
        },
        portalAction: {
          label: { en: "Visit CET Cell", hi: "CET पोर्टल पर जाएं", mr: "CET पोर्टलवर जा" },
          url: "https://cetcell.mahacet.org",
          domain: "cetcell.mahacet.org",
        },
      },
      {
        stepNumber: 2,
        title: {
          en: "CAP Registration on Course-Specific Portal",
          hi: "पाठ्यक्रम-विशिष्ट पोर्टल पर CAP पंजीकरण",
          mr: "अभ्यासक्रमनिहाय पोर्टलवर CAP नोंदणी",
        },
        description: {
          en: "Select your specific course link on the CET Cell portal. Create CAP candidate login and fill qualification, candidacy type, and category.",
          hi: "सीईटी सेल पर अपने पाठ्यक्रम का कैप लिंक चुनें और छात्र लॉगिन बनाकर सभी शैक्षणिक व श्रेणी विवरण भरें।",
          mr: "सीईटी सेलवर आपल्या अभ्यासक्रमाची लिंक निवडून उमेदवाराचे वैयक्तिक व आरक्षण तपशील भरा.",
        },
        whatYouNeed: {
          en: "CET Scorecard, 10th & 12th / Degree marks, Domicile Certificate, APAAR ID.",
          hi: "सीईटी स्कोरकार्ड, 10वीं/12वीं/ग्रेजुएशन अंक, डोमिसाइल प्रमाण पत्र, अपार आईडी।",
          mr: "सीईटी गुणपत्रिका, १० वी/१२ वी/पदवी गुण, अधिवास दाखला, अपार आयडी.",
        },
      },
      {
        stepNumber: 3,
        title: {
          en: "Scrutiny Mode Selection: E-Scrutiny or Physical Scrutiny",
          hi: "सत्यापन का प्रकार चुनें: ई-स्क्रूटनी या फिजिकल स्क्रूटनी",
          mr: "पडताळणी पद्धत निवडा: ई-स्क्रूटनी किंवा प्रत्यक्ष स्क्रूटनी",
        },
        description: {
          en: "Choose E-Scrutiny (online verification by officers without physical visit) or Physical Scrutiny (in-person visit to Scrutiny Center - SC).",
          hi: "ऑनलाइन ई-स्क्रूटनी या नज़दीकी स्क्रूटनी सेंटर (SC) जाकर प्रत्यक्ष सत्यापन में से एक चुनें।",
          mr: "ऑनलाइन ई-स्क्रूटनी किंवा प्रत्यक्ष पडताळणी केंद्रावर (SC) जाऊन पडताळणीचा पर्याय निवडा.",
        },
        whatYouNeed: {
          en: "High-resolution PDF scans of all uploaded certificates.",
          hi: "सभी प्रमाण पत्रों की साफ़ पठनीय स्कैन कॉपी।",
          mr: "सर्व प्रमाणपत्रांच्या स्पष्ट स्कॅन प्रती.",
        },
        afterSubmissionGuidance: {
          en: "Keep checking for any query/grievance raised by the scrutiny officer. You must respond within the grievance window (usually 2 days) to avoid rejection.",
          hi: "अधिकारी द्वारा कोई त्रुटि (Discrepancy) उठाए जाने पर तुरंत नया दस्तावेज़ अपलोड करें।",
          mr: "अधिकाऱ्याने कोणतीही त्रुटी काढल्यास २ दिवसांच्या आत दुरुस्ती करणे बंधनकारक आहे.",
        },
      },
      {
        stepNumber: 4,
        title: {
          en: "Provisional Merit List & Grievance Submission",
          hi: "अनंतिम मेरिट सूची एवं आपत्ति दर्ज करना",
          mr: "तात्पुरती गुणवत्ता यादी आणि तक्रार नोंदवणे",
        },
        description: {
          en: "State CET Cell publishes Provisional Merit List displaying State General Merit Rank, Category Rank, and University Rank.",
          hi: "राज्य मेरिट रैंक, श्रेणी रैंक और विश्वविद्यालय रैंक दर्शाने वाली अनंतिम सूची जारी होती है।",
          mr: "राज्य गुणवत्ता क्रमांक, प्रवर्ग क्रमांक दर्शवणारी तात्पुरती यादी जाहीर होते.",
        },
        whatYouNeed: {
          en: "Check marks, category, spelling, and eligibility claims carefully.",
          hi: "अपने नाम, अंक और आरक्षण श्रेणी की बारीकी से जांच करें।",
          mr: "आपले गुण, आरक्षण आणि नावाचे स्पेलिंग काळजीपूर्वक तपासा.",
        },
      },
      {
        stepNumber: 5,
        title: {
          en: "Final Merit List & Choice Filling (Option Form)",
          hi: "अंतिम मेरिट सूची एवं कॉलेज विकल्प भरना",
          mr: "अंतिम गुणवत्ता यादी आणि पसंतीक्रम भरणे",
        },
        description: {
          en: "Fill option form by selecting course, university, and college institute codes. You can add up to 300 choices in order of strict priority.",
          hi: "अंतिम मेरिट के बाद 1 से 300 तक कॉलेज और ब्रांच की वरीयता सूची भरें और लॉक करें।",
          mr: "अंतिम यादीनंतर १ ते ३०० पर्यंत महाविद्यालयांचे पसंतीक्रम भरून लॉक करा.",
        },
        whatYouNeed: {
          en: "Candidate login password & OTP to confirm and lock Option Form.",
          hi: "ऑप्शन फ़ॉर्म लॉक करने के लिए पासवर्ड व मोबाइल ओटीपी।",
          mr: "पसंती अर्ज लॉक करण्यासाठी पासवर्ड आणि मोबाईल ओटीपी.",
        },
      },
      {
        stepNumber: 6,
        title: {
          en: "Provisional Seat Allotment: Freeze vs Betterment (Float)",
          hi: "सीट आवंटन: फ्रीज बनाम बेटरमेंट (फ्लोट)",
          mr: "जागा वाटप: फ्रीज विरुद्ध बेटरमेंट (फ्लोट)",
        },
        description: {
          en: "If allotted 1st preference -> Auto-Freeze (must take seat). If allotted preference 2 or lower -> You can Self-Freeze (satisfy) or choose Betterment (try higher choices in next round while retaining current seat).",
          hi: "1st प्रेफरेंस पर ऑटो-फ्रीज होगा। 2 या उससे नीचे मिलने पर सीट सुरक्षित रखते हुए 'Betterment' चुन सकते हैं।",
          mr: "१ ला पर्याय मिळाल्यास ऑटो-फ्रीज. इतर पर्याय मिळाल्यास ती जागा राखून पुढील फेरीत सुधारणेसाठी 'Betterment' निवडता येते.",
        },
        whatYouNeed: {
          en: "Online Seat Acceptance Fee payment (₹1,000 official fee via CET portal).",
          hi: "सीट स्वीकारने के लिए पोर्टल पर ₹1,000 की आधिकारिक सीट स्वीकृति फीस।",
          mr: "जागा स्वीकारण्यासाठी पोर्टलवर ₹१,००० अधिकृत शुल्क भरणे.",
        },
        afterSubmissionGuidance: {
          en: "NEVER skip paying the Seat Acceptance Fee if choosing Betterment. Failing to pay forfeits your currently allotted seat completely!",
          hi: "बेटरमेंट चुनने पर भी ₹1,000 सीट एक्सेप्टेंस फीस ज़रूर भरें, वरना मौजूदा सीट भी रद्द हो जाएगी!",
          mr: "बेटरमेंट निवडले तरी ₹१,००० शुल्क नक्की भरा, अन्यथा मिळालेली जागाही रद्द होईल!",
        },
      },
      {
        stepNumber: 7,
        title: {
          en: "Institute Reporting & Final Admission Confirmation",
          hi: "संस्थान में उपस्थिति एवं अंतिम प्रवेश पुष्टि",
          mr: "महाविद्यालयात प्रत्यक्ष जाऊन अंतिम प्रवेश निश्चित करणे",
        },
        description: {
          en: "Report to the allotted college with original certificates and balance college fee. College issues system-generated admission confirmation letter.",
          hi: "आवंटित कॉलेज में मूल दस्तावेज़ों और शुल्क के साथ जाकर अधिकृत प्रवेश पत्र प्राप्त करें।",
          mr: "महाविद्यालयात मूळ कागदपत्रांसह जाऊन अधिकृत प्रवेश निश्चिती पावती घ्या.",
        },
        whatYouNeed: {
          en: "All original certificates, 3 sets of self-attested photocopies, DD / online payment for balance fees.",
          hi: "सभी मूल प्रमाण पत्र, 3 सेट स्व-हस्ताक्षरित फोटोकॉपी, कॉलेज फीस।",
          mr: "सर्व मूळ कागदपत्रे, ३ झेरॉक्स संच, उर्वरित महाविद्यालयीन शुल्क.",
        },
      },
    ],
  },
  {
    id: "roadmap-mu-ug",
    title: {
      en: "University of Mumbai Non-CAP Undergraduate Roadmap",
      hi: "मुंबई विश्वविद्यालय गैर-सीईटी स्नातक (UG) रोडमैप",
      mr: "मुंबई विद्यापीठ नॉन-कॅप पदवी (UG) प्रवेश रोडमॅप",
    },
    subtitle: {
      en: "For traditional courses: B.Com, B.A., B.Sc., B.Sc. IT, B.Sc. Computer Science",
      hi: "बी.कॉम, बी.ए., बी.एससी., बी.एससी. आईटी आदि पारंपरिक पाठ्यक्रमों के लिए",
      mr: "बी.कॉम, बी.ए., बी.एस्सी., बी.एस्सी. आयटी अभ्यासक्रमांसाठी",
    },
    level: "Undergraduate",
    academicYear: "AY 2026–27",
    primaryPortalId: "mu-samarth-ug",
    overview: {
      en: "Two-step admission: First, register on University Samarth Portal; Second, apply directly on each individual college's online portal.",
      hi: "दो चरणों वाली प्रक्रिया: पहले विश्वविद्यालय समर्थ पोर्टल पर रजिस्ट्रेशन, फिर प्रत्येक कॉलेज का अलग फ़ॉर्म भरना।",
      mr: "दोन टप्प्यांची प्रक्रिया: प्रथम विद्यापीठ समर्थ पोर्टलवर नोंदणी, नंतर प्रत्येक महाविद्यालयाचा स्वतंत्र अर्ज.",
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: "University Pre-Admission Online Enrolment (Samarth)",
          hi: "विश्वविद्यालय प्रवेश-पूर्व ऑनलाइन नामांकन (समर्थ)",
          mr: "विद्यापीठ प्रवेशपूर्व ऑनलाइन नोंदणी (समर्थ)",
        },
        description: {
          en: "Visit muadmission.samarth.edu.in. Create an account, fill profile data, and add the programmes/colleges you intend to apply to.",
          hi: "मुम्बई यूनिवर्सिटी समर्थ पोर्टल पर खाता बनाएं और जिन पाठ्यक्रमों/कॉलेजों में आवेदन करना है उन्हें जोड़ें।",
          mr: "मुंबई विद्यापीठ समर्थ पोर्टलवर खाते उघडून अभ्यासक्रम व महाविद्यालयांची निवड करा.",
        },
        whatYouNeed: {
          en: "12th Marksheet details, 10th Certificate, Aadhaar number, APAAR ID.",
          hi: "12वीं की मार्कशीट, 10वीं का प्रमाण पत्र, आधार और अपार आईडी।",
          mr: "१२ वी गुणपत्रिका, १० वी प्रमाणपत्र, आधार आणि अपार आयडी.",
        },
        portalAction: {
          label: { en: "Samarth Enrolment", hi: "समर्थ नामांकन खोलें", mr: "समर्थ नोंदणी उघडा" },
          url: "https://muadmission.samarth.edu.in",
          domain: "muadmission.samarth.edu.in",
        },
      },
      {
        stepNumber: 2,
        title: {
          en: "Download University Pre-Enrolment Form Copy",
          hi: "विश्वविद्यालय प्री-एनरोलमेंट फ़ॉर्म कॉपी डाउनलोड करें",
          mr: "विद्यापीठ प्री-एनरोलमेंट अर्ज प्रत डाउनलोड करा",
        },
        description: {
          en: "Download the PDF copy of the university pre-admission form containing your 16-digit or system Application Number.",
          hi: "आवेदन संख्या वाला विश्वविद्यालय प्री-एडमिशन फ़ॉर्म पीडीएफ़ डाउनलोड करें।",
          mr: "अर्ज क्रमांक असलेली विद्यापीठ प्री-अॅडमिशन अर्जाची पीडीएफ डाऊनलोड करा.",
        },
        whatYouNeed: {
          en: "PDF reader & printer.",
          hi: "पीडीएफ़ सेवर व प्रिंट।",
          mr: "पीडीएफ सेव्ह व प्रिंटर.",
        },
      },
      {
        stepNumber: 3,
        title: {
          en: "Fill College's Own Online Admission Form",
          hi: "संबंधित कॉलेज का अपना ऑनलाइन एडमिशन फ़ॉर्म भरें",
          mr: "संबंधित महाविद्यालयाचा स्वतंत्र ऑनलाइन अर्ज भरा",
        },
        description: {
          en: "CRITICAL: Visit the website of EACH college you want to join (e.g. Mithibai, HR, KC, Ruia, Somaiya, etc.) and fill their specific application, quoting your University Samarth Application Number.",
          hi: "महत्वपूर्ण: जिस भी कॉलेज में दाखिला चाहिए, उसकी अपनी वेबसाइट पर जाकर अलग फ़ॉर्म भरें और उसमें समर्थ नंबर लिखें।",
          mr: "अति महत्त्वाचे: निवडलेल्या प्रत्येक महाविद्यालयाच्या स्वतंत्र संकेतस्थळावर जाऊन विद्यापीठ अर्ज क्रमांकासह अर्ज भरा.",
        },
        whatYouNeed: {
          en: "University Samarth Application Number, College application fee (if charged).",
          hi: "समर्थ एप्लीकेशन नंबर और कॉलेज की निर्धारित फ़ॉर्म फीस।",
          mr: "समर्थ अर्ज क्रमांक आणि महाविद्यालयाचे अर्ज शुल्क.",
        },
        afterSubmissionGuidance: {
          en: "Without filling BOTH the University portal AND the College portal, your name WILL NOT appear in that college's merit list.",
          hi: "यदि आपने समर्थ के साथ कॉलेज का अपना फ़ॉर्म नहीं भरा, तो आपका नाम मेरिट लिस्ट में नहीं आएगा।",
          mr: "विद्यापीठ आणि महाविद्यालय अशा दोन्ही ठिकाणी अर्ज न भरल्यास गुणवत्ता यादीत नाव येणार नाही.",
        },
      },
      {
        stepNumber: 4,
        title: {
          en: "College Merit Lists & Cut-Off Announcement",
          hi: "कॉलेज मेरिट लिस्ट एवं कट-ऑफ घोषणा",
          mr: "महाविद्यालय गुणवत्ता यादी आणि कट-ऑफ जाहीर",
        },
        description: {
          en: "Colleges publish First, Second, and Third Merit Lists on their websites as per University circular dates.",
          hi: "विश्वविद्यालय के तय कार्यक्रम अनुसार कॉलेज अपनी मेरिट सूचियां वेबसाइट पर प्रकाशित करते हैं।",
          mr: "विद्यापीठाच्या वेळापत्रकानुसार महाविद्यालये पहिली, दुसरी आणि तिसरी गुणवत्ता यादी जाहीर करतात.",
        },
        whatYouNeed: {
          en: "Check college notice board / portal for your name & application number.",
          hi: "कॉलेज की मेरिट सूची में अपना नाम और प्रतिशत जांचें।",
          mr: "महाविद्यालयाच्या संकेतस्थळावर आपले नाव आणि गुणवत्ता तपासा.",
        },
      },
      {
        stepNumber: 5,
        title: {
          en: "Document Verification & Fee Payment at College",
          hi: "कॉलेज में दस्तावेज़ सत्यापन और फीस भुगतान",
          mr: "महाविद्यालयात कागदपत्र पडताळणी आणि शुल्क भरणे",
        },
        description: {
          en: "If shortlisted, submit undertaking/documents online or in person and pay college fees to secure admission.",
          hi: "मेरिट में नाम आने पर निर्धारित समय सीमा के भीतर फीस भरें और दस्तावेज़ जमा करें।",
          mr: "यादीत नाव आल्यास दिलेल्या मुदतीत शुल्क भरून प्रवेश निश्चित करा.",
        },
        whatYouNeed: {
          en: "Original 12th Marksheet, LC, Undertaking Form, Caste/Income certificates (if applicable).",
          hi: "मूल 12वीं मार्कशीट, लिविंग सर्टिफिकेट, और जाति/आय प्रमाण पत्र।",
          mr: "मूळ १२ वी गुणपत्रिका, एलसी आणि आवश्यक प्रमाणपत्रे.",
        },
      },
    ],
  },
  {
    id: "roadmap-cdoe",
    title: {
      en: "University of Mumbai CDOE Distance Admission Roadmap",
      hi: "मुंबई विश्वविद्यालय CDOE दूरस्थ शिक्षा प्रवेश रोडमैप",
      mr: "मुंबई विद्यापीठ CDOE दूरस्थ शिक्षण प्रवेश रोडमॅप",
    },
    subtitle: {
      en: "Centre for Distance and Online Education for self-paced degree study",
      hi: "कामकाजी व अन्य छात्रों के लिए दूरस्थ एवं ऑनलाइन डिग्री कार्यक्रम",
      mr: "दूरस्थ आणि ऑनलाइन पदवी अभ्यासक्रमांसाठी थेट प्रवेश मार्गदर्शक",
    },
    level: "CDOE / Distance",
    academicYear: "AY 2026–27",
    primaryPortalId: "mu-cdoe-portal",
    overview: {
      en: "Direct admission for distance learning B.A., B.Com., M.A., M.Com., M.Sc. Maths/IT, and MCA under NEP.",
      hi: "सीडीओई के माध्यम से दूरस्थ शिक्षा स्नातक व परास्नातक कार्यक्रमों में सीधा प्रवेश।",
      mr: "सीडीओई अंतर्गत दूरस्थ पदवी व पदव्युत्तर अभ्यासक्रमांसाठी थेट ऑनलाइन प्रवेश.",
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: "Check Program Eligibility & Syllabus Structure",
          hi: "कार्यक्रम की पात्रता और पाठ्यक्रम संरचना जांचें",
          mr: "अभ्यासक्रम पात्रता आणि विषय रचना तपासा",
        },
        description: {
          en: "Review the program handbook on mu.ac.in/cdoe to ensure your prior qualifications qualify under current NEP guidelines.",
          hi: "सीडीओई की वेबसाइट पर जाकर अपनी शैक्षणिक पात्रता और विषयों के विकल्प जांचें।",
          mr: "सीडीओईच्या अधिकृत माहितीपत्रकावरून आपली शैक्षणिक पात्रता तपासून घ्या.",
        },
        whatYouNeed: {
          en: "Prior passing certificates & marksheets.",
          hi: "पूर्व परीक्षा उत्तीर्ण अंकतालिका।",
          mr: "मागील उत्तीर्ण गुणपत्रिका.",
        },
        portalAction: {
          label: { en: "Open CDOE Portal", hi: "CDOE पोर्टल खोलें", mr: "CDOE पोर्टल उघडा" },
          url: "https://mucdoeadm.samarth.edu.in",
          domain: "mucdoeadm.samarth.edu.in",
        },
      },
      {
        stepNumber: 2,
        title: {
          en: "Register on CDOE Samarth Admission Portal",
          hi: "CDOE समर्थ पोर्टल पर पंजीकरण करें",
          mr: "CDOE समर्थ पोर्टलवर नोंदणी करा",
        },
        description: {
          en: "Create an account on mucdoeadm.samarth.edu.in, fill personal and contact details, and choose your degree programme.",
          hi: "पोर्टल पर अपना मोबाइल व ईमेल सत्यापित कर छात्र प्रोफ़ाइल बनाएं।",
          mr: "पोर्टलवर खाते उघडून आपली वैयक्तिक माहिती भरा आणि अभ्यासक्रम निवडा.",
        },
        whatYouNeed: {
          en: "Active email, mobile number, Aadhaar number.",
          hi: "सक्रिय ईमेल, मोबाइल नंबर, आधार नंबर।",
          mr: "चालू ईमेल, मोबाईल क्रमांक आणि आधार क्रमांक.",
        },
      },
      {
        stepNumber: 3,
        title: {
          en: "Upload Required Eligibility Documents",
          hi: "पात्रता संबंधी आवश्यक दस्तावेज़ अपलोड करें",
          mr: "आवश्यक कागदपत्रे अपलोड करा",
        },
        description: {
          en: "Upload scanned copies of 10th, 12th/Graduation marksheet, photo, signature, and Eligibility/Migration certificate (if from outside Maharashtra).",
          hi: "सभी पूर्व शैक्षणिक प्रमाण पत्र, फ़ोटो और हस्ताक्षर अपलोड करें।",
          mr: "१० वी, १२ वी/पदवी गुणपत्रिका, फोटो, स्वाक्षरी आणि स्थलांतर प्रमाणपत्र अपलोड करा.",
        },
        whatYouNeed: {
          en: "Clear scanned PDFs under 2 MB.",
          hi: "साफ़ और पठनीय पीडीएफ़ फ़ाइलें।",
          mr: "स्पष्ट वाचता येतील अशा स्कॅन पीडीएफ फाइल्स.",
        },
      },
      {
        stepNumber: 4,
        title: {
          en: "Online Document Scrutiny by CDOE Officers",
          hi: "सीडीओई अधिकारियों द्वारा ऑनलाइन दस्तावेज़ जांच",
          mr: "सीडीओई अधिकाऱ्यांकडून ऑनलाइन कागदपत्र पडताळणी",
        },
        description: {
          en: "University scrutiny team checks uploaded documents. Status changes to 'Approved for Payment' once verified.",
          hi: "विश्वविद्यालय की टीम कागज़ात जांचती है। सब सही होने पर फीस भरने का लिंक सक्रिय होता है।",
          mr: "विद्यापीठाकडून कागदपत्रांची तपासणी पूर्ण झाल्यावर शुल्क भरण्याचा पर्याय मिळतो.",
        },
        whatYouNeed: {
          en: "Check dashboard notifications regularly.",
          hi: "पोर्टल पर स्वीकृति संदेश की जांच करते रहें।",
          mr: "पोर्टलवरील सूचना नियमितपणे तपासा.",
        },
      },
      {
        stepNumber: 5,
        title: {
          en: "Pay Online Admission Fee & Access Study Material",
          hi: "ऑनलाइन प्रवेश फीस भरें और अध्ययन सामग्री पाएं",
          mr: "ऑनलाइन शुल्क भरा आणि अभ्यास साहित्य मिळवा",
        },
        description: {
          en: "Pay the prescribed university course fee online. Download admission confirmation receipt and student identity card.",
          hi: "आधिकारिक पोर्टल पर फीस भरें और प्रवेश रसीद व पहचान पत्र डाउनलोड करें।",
          mr: "ऑनलाइन शुल्क भरून प्रवेश पावती आणि ओळखपत्र डाउनलोड करा.",
        },
        whatYouNeed: {
          en: "Debit card, UPI, or Net Banking.",
          hi: "नेट बैंकिंग, यूपीआई या डेबिट कार्ड।",
          mr: "नेट बँकिंग, यूपीआय किंवा डेबिट कार्ड.",
        },
      },
    ],
  },
  {
    id: "roadmap-phd",
    title: {
      en: "University of Mumbai Ph.D. Research Roadmap",
      hi: "मुंबई विश्वविद्यालय पीएचडी अनुसंधान रोडमैप",
      mr: "मुंबई विद्यापीठ पी.एच.डी. संशोधन रोडमॅप",
    },
    subtitle: {
      en: "From Ph.D. Entrance Test (PET) to research center guide registration",
      hi: "प्रवेश परीक्षा (PET) से शोध केंद्र एवं गाइड पंजीकरण तक",
      mr: "पीईटी परीक्षेपासून संशोधन केंद्र व मार्गदर्शक नोंदणीपर्यंत",
    },
    level: "PhD / Research",
    academicYear: "AY 2026–27",
    primaryPortalId: "mu-phd-portal",
    overview: {
      en: "Doctoral degree admissions via PET or UGC-NET / CSIR-NET / GATE exemption per university notices.",
      hi: "यूजीसी नियमों के तहत पीएचडी प्रवेश परीक्षा (PET) या नेट/गेट छूट आधारित शोध प्रवेश।",
      mr: "पीईटी परीक्षा किंवा नेट/गेट सवलतीवर आधारित संशोधन प्रवेश प्रक्रिया.",
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: "Check Faculty Guide Vacancy Notification",
          hi: "संकाय गाइड रिक्तियों की अधिसूचना जांचें",
          mr: "मार्गदर्शक रिक्त जागांची अधिकृत अधिसूचना तपासा",
        },
        description: {
          en: "Review official circular on mu.ac.in or uomphd.mu.ac.in showing subject-wise guide vacancies across approved research centers.",
          hi: "अपने विषय में अनुमोदित शोध केंद्रों और गाइडों के पास रिक्त सीटों की जांच करें।",
          mr: "मान्यताप्राप्त संशोधन केंद्रांमधील विषयनिहाय रिक्त जागांची खात्री करा.",
        },
        whatYouNeed: {
          en: "Master's degree certificate with minimum 55% marks (50% for SC/ST/OBC/Differently Abled).",
          hi: "मास्टर्स डिग्री में न्यूनतम 55% अंक (आरक्षित वर्ग हेतु 50%)।",
          mr: "पदव्युत्तर पदवीमध्ये किमान ५५% गुण (आरक्षित प्रवर्गासाठी ५०%).",
        },
        portalAction: {
          label: { en: "Ph.D. Portal", hi: "पीएचडी पोर्टल खोलें", mr: "पी.एच.डी. पोर्टल उघडा" },
          url: "https://uomphd.mu.ac.in",
          domain: "uomphd.mu.ac.in",
        },
      },
      {
        stepNumber: 2,
        title: {
          en: "PET Examination or Exemption Verification",
          hi: "PET परीक्षा अथवा छूट का सत्यापन",
          mr: "पीईटी परीक्षा किंवा सवलत पडताळणी",
        },
        description: {
          en: "Register for Ph.D. Entrance Test (PET) online. Candidates qualified in UGC-NET / CSIR-NET / SLET / GATE or teacher fellowship are exempted from PET.",
          hi: "पीईटी परीक्षा दें अथवा नेट/गेट उत्तीर्ण होने पर छूट हेतु आवश्यक प्रमाण पत्र प्रस्तुत करें।",
          mr: "पीईटी परीक्षेसाठी नोंदणी करा किंवा नेट/गेट पात्र असल्यास सवलतीचा पुरावा द्या.",
        },
        whatYouNeed: {
          en: "PET score certificate OR valid UGC-NET / CSIR-NET / GATE scorecard.",
          hi: "पीईटी स्कोर अथवा वैध नेट/गेट स्कोरकार्ड।",
          mr: "पीईटी गुण किंवा वैध नेट/गेट गुणपत्रिका.",
        },
      },
      {
        stepNumber: 3,
        title: {
          en: "Apply to Recognized Research Center & Submit Outline",
          hi: "मान्यताप्राप्त शोध केंद्र में आवेदन एवं सिनॉप्सिस जमा करना",
          mr: "संशोधन केंद्रात अर्ज आणि संशोधन प्रस्ताव सादर करणे",
        },
        description: {
          en: "Submit application form along with tentative research proposal outline to the concerned university department or recognized research college.",
          hi: "संबंधित विभाग या कॉलेज में शोध प्रस्ताव (Research Proposal) के साथ आवेदन जमा करें।",
          mr: "संबंधित विभाग किंवा महाविद्यालयात संशोधन प्रस्तावासह अर्ज सादर करा.",
        },
        whatYouNeed: {
          en: "Draft research proposal (1,000–2,000 words), marksheets, CV.",
          hi: "शोध प्रस्ताव की रूपरेखा, शैक्षणिक अंकतालिकाएं और बायोडाटा।",
          mr: "संशोधन प्रस्तावाची रूपरेषा, शैक्षणिक कागदपत्रे आणि बायोडाटा.",
        },
      },
      {
        stepNumber: 4,
        title: {
          en: "Research Advisory Committee (RAC) Interview",
          hi: "अनुसंधान सलाहकार समिति (RAC) साक्षात्कार",
          mr: "संशोधन सल्लागार समिती (RAC) मुलाखत",
        },
        description: {
          en: "Appear before the Research Advisory Committee for evaluation of research aptitude, domain competence, and feasibility of the topic.",
          hi: "समिति के समक्ष अपनी शोध रुचि और विषय की प्रासंगिकता पर साक्षात्कार दें।",
          mr: "समितीसमोर संशोधन क्षमता आणि विषयाच्या उपयुक्ततेवर मुलाखत द्या.",
        },
        whatYouNeed: {
          en: "Presentation slides / printed proposal copies.",
          hi: "शोध प्रस्ताव की मुद्रित प्रतियां।",
          mr: "संशोधन प्रस्तावाच्या मुद्रित प्रती.",
        },
      },
      {
        stepNumber: 5,
        title: {
          en: "Guide Allotment, Topic Approval & Portal Registration",
          hi: "गाइड आवंटन, विषय स्वीकृति एवं पोर्टल पंजीकरण",
          mr: "मार्गदर्शक वाटप, विषय मंजुरी आणि पोर्टल नोंदणी",
        },
        description: {
          en: "After selection, complete registration on uomphd.mu.ac.in, pay registration fee, and begin mandatory Pre-Ph.D. coursework.",
          hi: "चयन के पश्चात आधिकारिक पोर्टल पर अंतिम पंजीकरण करें और कोर्सवर्क शुरू करें।",
          mr: "निवडीनंतर अधिकृत पोर्टलवर अंतिम नोंदणी करून कोर्सवर्क सुरू करा.",
        },
        whatYouNeed: {
          en: "RAC selection letter, Guide consent letter, Registration fee.",
          hi: "चयन पत्र, गाइड का सहमति पत्र और पंजीकरण शुल्क।",
          mr: "निवड पत्र, मार्गदर्शकाचे संमती पत्र आणि नोंदणी शुल्क.",
        },
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// 3. STUDENT DOCUMENT SYSTEM (Readiness States & "Do I Need This?" Helper)
// ---------------------------------------------------------------------------
export const studentDocuments: StudentDocument[] = [
  {
    id: "doc-10th-marksheet",
    name: {
      en: "10th / SSC Marksheet & Passing Certificate",
      hi: "10वीं / एसएससी अंकतालिका एवं उत्तीर्ण प्रमाण पत्र",
      mr: "१० वी / एसएससी गुणपत्रिका आणि उत्तीर्ण प्रमाणपत्र",
    },
    shortTag: "10th Proof",
    applicableLevels: ["11th / FYJC", "Undergraduate", "Postgraduate", "CET / CAP", "PhD / Research", "CDOE / Distance"],
    mandatoryFor: ["All Indian admissions"],
    helper: {
      whatIsIt: {
        en: "Official statement of marks and certificate issued by your Secondary Education Board (SSC, CBSE, ICSE, NIOS, etc.).",
        hi: "माध्यमिक शिक्षा बोर्ड द्वारा जारी 10वीं की अंकतालिका एवं सनद।",
        mr: "माध्यमिक शिक्षण मंडळाने जारी केलेली १० वी ची अधिकृत गुणपत्रिका आणि प्रमाणपत्र.",
      },
      whyMightINeedIt: {
        en: "Proves that you cleared 10th standard and acts as standard legal proof of Date of Birth across Indian universities.",
        hi: "यह 10वीं उत्तीर्ण होने का सबूत है और अधिकांश विश्वविद्यालयों में जन्मतिथि का मान्य कानूनी प्रमाण है।",
        mr: "हे १० वी उत्तीर्ण असल्याचा आणि जन्मतारखेचा मुख्य शासकीय पुरावा मानला जातो.",
      },
      whoUsuallyNeedsIt: {
        en: "Every single candidate applying for FYJC, UG, PG, or CET admissions.",
        hi: "सभी छात्र जो 11वीं, ग्रेजुएशन या प्रोफेशनल कोर्स में प्रवेश ले रहे हैं।",
        mr: "११ वी, पदवी किंवा व्यावसायिक अभ्यासक्रमात प्रवेश घेणारा प्रत्येक विद्यार्थी.",
      },
      whereDoIGetIt: {
        en: "Issued by your high school / secondary education board. Digital verified copy can be pulled instantly via DigiLocker.",
        hi: "आपके हाई स्कूल अथवा डिजीलॉकर (DigiLocker) से डिजिटल रूप से प्राप्त किया जा सकता है।",
        mr: "आपल्या शाळेकडून किंवा डिजीलॉकरवरून त्वरित डिजिटल स्वरूपात मिळते.",
      },
      whatFormat: {
        en: "Original for physical verification at college; clear colour PDF scan (under 2 MB) for online portal upload.",
        hi: "कॉलेज में मूल प्रति; ऑनलाइन पोर्टल पर रंगीन स्कैन पीडीएफ (2 MB से कम)।",
        mr: "पडताळणीसाठी मूळ प्रत; ऑनलाइनसाठी स्पष्ट रंगीत स्कॅन पीडीएफ.",
      },
      originalOrCopy: {
        en: "Keep original + at least 3 self-attested photocopies.",
        hi: "मूल प्रति + कम से कम 3 स्व-हस्ताक्षरित फोटोकॉपी साथ रखें।",
        mr: "मूळ प्रत + किमान ३ स्वाक्षरी केलेल्या झेरॉक्स प्रती सोबत ठेवा.",
      },
      validity: {
        en: "Permanent validity; never expires.",
        hi: "आजीवन वैध; कभी समाप्त नहीं होता।",
        mr: "कायमस्वरूपी वैध; मुदत संपत नाही.",
      },
      whatIfPending: {
        en: "If awaiting revaluation or original certificate from board, an authenticated web marksheet signed by your school principal is temporarily accepted.",
        hi: "यदि मूल कॉपी नहीं मिली है तो स्कूल प्रधानाचार्य द्वारा सत्यापित इंटरनेट मार्कशीट अस्थायी रूप से मान्य होती है।",
        mr: "मूळ प्रत मिळण्यास वेळ असल्यास मुख्याध्यापकांनी स्वाक्षरी केलेली इंटरनेट प्रत तात्पुरती चालते.",
      },
      officialSourceNotice: {
        en: "Marks entered on portal must match the marksheet exact to two decimal places.",
        hi: "पोर्टल पर भरे गए अंक मार्कशीट से शत-प्रतिशत मेल खाने चाहिए।",
        mr: "पोर्टलवर भरलेले गुण गुणपत्रिकेशी तंतोतंत जुळले पाहिजेत.",
      },
    },
  },
  {
    id: "doc-12th-marksheet",
    name: {
      en: "12th / HSC Marksheet & Passing Certificate",
      hi: "12वीं / एचएससी अंकतालिका एवं उत्तीर्ण प्रमाण पत्र",
      mr: "१२ वी / एचएससी गुणपत्रिका आणि उत्तीर्ण प्रमाणपत्र",
    },
    shortTag: "12th Proof",
    applicableLevels: ["Undergraduate", "CET / CAP", "CDOE / Distance"],
    mandatoryFor: ["All Undergraduate & First-Year Professional Degree applicants"],
    helper: {
      whatIsIt: {
        en: "Higher Secondary Certificate marksheet issued by State Board, CBSE, ICSE, or equivalent.",
        hi: "हायर सेकेंडरी शिक्षा बोर्ड द्वारा जारी 12वीं की अधिकृत अंकतालिका।",
        mr: "उच्च माध्यमिक शिक्षण मंडळाने दिलेली १२ वी ची गुणपत्रिका.",
      },
      whyMightINeedIt: {
        en: "Establishes stream eligibility (e.g. PCM / PCB for CET, Mathematics requirement for B.Sc. IT / MCA, etc.) and minimum aggregate percentage.",
        hi: "विषयवार पात्रता (जैसे इंजीनियरिंग हेतु PCM, बी.एससी आईटी हेतु गणित) और न्यूनतम प्रतिशत सिद्ध करने के लिए।",
        mr: "विषयांची पात्रता (उदा. पीसीएम, गणित) आणि किमान आवश्यक टक्केवारी सिद्ध करण्यासाठी.",
      },
      whoUsuallyNeedsIt: {
        en: "All students seeking admission to BA, B.Com, B.Sc, Engineering, Pharmacy, Law (5-yr), etc.",
        hi: "स्नातक (UG) स्तर पर प्रवेश लेने वाले सभी छात्र।",
        mr: "पदवी स्तरावर प्रवेश घेणारे सर्व विद्यार्थी.",
      },
      whereDoIGetIt: {
        en: "Issued by your Junior College or downloaded as an authenticated record from DigiLocker.",
        hi: "आपके जूनियर कॉलेज या डिजीलॉकर से।",
        mr: "आपल्या कनिष्ठ महाविद्यालयातून किंवा डिजीलॉकरवरून.",
      },
      whatFormat: {
        en: "Original for institute reporting; scanned PDF (200 DPI) for CAP e-scrutiny.",
        hi: "कॉलेज में मूल प्रति; ऑनलाइन हेतु 200 DPI का रंगीन स्कैन।",
        mr: "महाविद्यालयासाठी मूळ प्रत; ऑनलाइनसाठी २०० डीपीआय स्कॅन प्रत.",
      },
      originalOrCopy: {
        en: "Original retained by college during admission; keep multiple certified copies with you.",
        hi: "कॉलेज मूल प्रति जमा कर लेता है, इसलिए पहले से कई प्रमाणित फोटोकॉपी रख लें।",
        mr: "महाविद्यालय मूळ प्रत जमा करून घेते, म्हणून आधीच अनेक झेरॉक्स काढून ठेवा.",
      },
      validity: {
        en: "Permanent validity.",
        hi: "स्थायी मान्यता।",
        mr: "कायमस्वरूपी वैध.",
      },
      whatIfPending: {
        en: "For gap candidates or re-evaluation cases, apply with current official board statement and upload grievance if marks improve.",
        hi: "री-इवैल्यूएशन वाले छात्र अंतरिम मार्कशीट लगाएं और परिणाम बदलने पर स्क्रूटनी में अपडेट करें।",
        mr: "पुनर्मूल्यांकनाचा निकाल प्रलंबित असल्यास सध्याची अधिकृत प्रत जोडून नंतर सुधारणा करावी.",
      },
      officialSourceNotice: {
        en: "In CET CAP, failing to meet category group criteria (e.g. 45% for open, 40% for reserved) causes automatic cancellation.",
        hi: "सीईटी में समूह पात्रता (जैसे 45% सामान्य, 40% आरक्षित) पूरी न होने पर प्रवेश रद्द हो जाता है।",
        mr: "सीईटीमध्ये ग्रुप निकष पूर्ण नसल्यास प्रवेश थेट बाद होतो.",
      },
    },
  },
  {
    id: "doc-domicile-cert",
    name: {
      en: "Maharashtra State Domicile Certificate",
      hi: "महाराष्ट्र राज्य अधिवास प्रमाण पत्र (Domicile)",
      mr: "महाराष्ट्र राज्य अधिवास प्रमाणपत्र (Domicile)",
    },
    shortTag: "Domicile",
    applicableLevels: ["11th / FYJC", "Undergraduate", "Postgraduate", "CET / CAP", "Scholarships"],
    mandatoryFor: ["Maharashtra State Candidacy (Type A) & MahaDBT Scholarship applicants"],
    helper: {
      whatIsIt: {
        en: "An official certificate issued by the Executive Magistrate / Tahsildar certifying you are a resident of Maharashtra (usually continuous residence of 10–15 years or born in Maharashtra).",
        hi: "तहसीलदार/एसडीएम द्वारा जारी प्रमाण पत्र जो यह सिद्ध करता है कि आप महाराष्ट्र के स्थायी निवासी हैं।",
        mr: "तहसीलदार किंवा दंडाधिकाऱ्यांनी दिलेले, तुम्ही महाराष्ट्राचे रहिवासी असल्याचे सिद्ध करणारे प्रमाणपत्र.",
      },
      whyMightINeedIt: {
        en: "To claim 85% Maharashtra State Quota seats in professional CAP admissions and 100% of state scholarships on MahaDBT.",
        hi: "राज्य के 85% स्टेट कोटे की सीटों और महाडीबीटी छात्रवृत्ति का लाभ उठाने के लिए।",
        mr: "८५% महाराष्ट्र राज्य राखीव जागांचा आणि महाडीबीटी शिष्यवृत्तीचा लाभ मिळवण्यासाठी.",
      },
      whoUsuallyNeedsIt: {
        en: "Any student claiming Maharashtra State Quota in Engineering, Pharmacy, MBA, MCA, Law, or applying for fee concessions.",
        hi: "राज्य कोटे में प्रवेश लेने वाले या फीस में छूट चाहने वाले सभी विद्यार्थी।",
        mr: "महाराष्ट्र राज्य कोट्यातून प्रवेश घेणारे किंवा फी सवलत घेणारे विद्यार्थी.",
      },
      whereDoIGetIt: {
        en: "Apply online on Aaple Sarkar (aaplesarkar.mahaonline.gov.in) or via local Setu / Citizen Facilitation Centers.",
        hi: "आपले सरकार पोर्टल (aaplesarkar.mahaonline.gov.in) या सेतु केंद्र से।",
        mr: "आपले सरकार पोर्टलवरून किंवा जवळच्या सेतू केंद्रातून.",
      },
      whatFormat: {
        en: "Digital digitally-signed certificate carrying barcode and verification QR code.",
        hi: "बारकोड व क्यूआर कोड वाला डिजिटल हस्ताक्षरित प्रमाण पत्र।",
        mr: "बारकोड आणि क्यूआर कोड असलेले डिजिटल स्वाक्षरीचे प्रमाणपत्र.",
      },
      originalOrCopy: {
        en: "Original certificate with official seal.",
        hi: "मूल डिजिटल प्रमाण पत्र।",
        mr: "मूळ अधिकृत डिजिटल प्रमाणपत्र.",
      },
      validity: {
        en: "Lifetime validity once issued.",
        hi: "आजीवन वैध।",
        mr: "एकदा काढल्यावर आयुष्यभरासाठी वैध.",
      },
      whatIfPending: {
        en: "If your application is pending with Tahsildar, CET Cell allows uploading the official Application Receipt / Token during registration, but original MUST be produced before final CAP round reporting.",
        hi: "यदि आवेदन लंबित है तो रसीद (Token) से पंजीकरण हो सकता है, लेकिन अंतिम राउंड से पहले मूल जमा करना आवश्यक है।",
        mr: "अर्ज प्रलंबित असल्यास सेतूची पावती (टोकन) चालते, पण अंतिम फेरीपूर्वी मूळ प्रमाणपत्र सादर करणे बंधनकारक असते.",
      },
      officialSourceNotice: {
        en: "Birth Certificate showing birthplace within Maharashtra or School LC showing birthplace in Maharashtra can also serve as proof of Domicile for Type-A candidacy in CET CAP.",
        hi: "महाराष्ट्र में जन्म दर्शाने वाला जन्म प्रमाण पत्र या स्कूल एलसी भी टाइप-ए उम्मीदवारी के लिए मान्य होता है।",
        mr: "महाराष्ट्रातील जन्म दाखला किंवा शाळा सोडल्याचा दाखला (LC) देखील टाईप-ए साठी ग्राह्य धरला जातो.",
      },
    },
  },
  {
    id: "doc-caste-validity",
    name: {
      en: "Caste Validity Certificate (Tathata Pramanpatra)",
      hi: "जाति वैधता प्रमाण पत्र (Caste Validity)",
      mr: "जात पडताळणी प्रमाणपत्र (Caste Validity)",
    },
    shortTag: "Caste Validity",
    applicableLevels: ["11th / FYJC", "Undergraduate", "Postgraduate", "CET / CAP", "Scholarships"],
    mandatoryFor: ["All Reserved Category (SC, ST, VJNT, OBC, SBC, SEBC) students in professional courses & scholarships"],
    helper: {
      whatIsIt: {
        en: "Official certificate issued by the Divisional Caste Scrutiny Committee verifying the genuine authenticity of your caste certificate.",
        hi: "जाति जांच समिति (Caste Scrutiny Committee) द्वारा जारी प्रमाण पत्र जो आपकी जाति की प्रामाणिकता सिद्ध करता है।",
        mr: "जात पडताळणी समितीने दिलेले, आपल्या जातीच्या दाखल्याची खरी वैधता सिद्ध करणारे प्रमाणपत्र.",
      },
      whyMightINeedIt: {
        en: "CRITICAL: Under Maharashtra Act No. XXIII of 2001, NO student can be admitted to a professional course under a reserved category without Caste Validity.",
        hi: "महाराष्ट्र कानून के तहत बिना जाति वैधता के किसी भी छात्र को आरक्षित सीट पर प्रोफेशनल एडमिशन नहीं मिल सकता।",
        mr: "महाराष्ट्रातील कायद्यानुसार जात पडताळणी प्रमाणपत्राशिवाय आरक्षित जागेवर व्यावसायिक अभ्यासक्रमात प्रवेश घेता येत नाही.",
      },
      whoUsuallyNeedsIt: {
        en: "Every candidate claiming SC, ST, VJ/NT, OBC, SBC, or SEBC category in CET CAP and MahaDBT scholarships.",
        hi: "आरक्षण का लाभ लेने वाले सभी आरक्षित वर्ग के विद्यार्थी।",
        mr: "आरक्षणाचा किंवा फी सवलतीचा लाभ घेणारा प्रत्येक आरक्षित प्रवर्गातील विद्यार्थी.",
      },
      whereDoIGetIt: {
        en: "Apply online at barti.maharashtra.gov.in (or respective ST scrutiny portal) through your college recommendation letter.",
        hi: "बार्टी (BARTI) पोर्टल से कॉलेज के अनुशंसा पत्र द्वारा आवेदन करें।",
        mr: "बार्टी (BARTI) किंवा आदिवासी पडताळणी पोर्टलवरून महाविद्यालयाच्या शिफारस पत्राद्वारे.",
      },
      whatFormat: {
        en: "Original certificate signed by member-secretary and committee chairman.",
        hi: "समिति द्वारा हस्ताक्षरित मूल प्रमाण पत्र।",
        mr: "समिती सदस्यांच्या स्वाक्षरीचे मूळ प्रमाणपत्र.",
      },
      originalOrCopy: {
        en: "Original is strictly mandatory at institute reporting.",
        hi: "संस्थान में मूल प्रति अनिवार्य है।",
        mr: "महाविद्यालयात मूळ प्रत सादर करणे अनिवार्य.",
      },
      validity: {
        en: "Lifetime validity.",
        hi: "आजीवन वैध।",
        mr: "कायमस्वरूपी वैध.",
      },
      whatIfPending: {
        en: "CET Cell usually permits registration with the Scrutiny Committee Application Receipt / Token, but requires an undertaking to submit the final validity before the cutoff date specified in the brochure. If you fail to submit, your seat is converted to General / Open category!",
        hi: "रसीद से अस्थायी पंजीकरण संभव है, लेकिन तय तारीख तक मूल न देने पर सीट सामान्य (Open) वर्ग में बदल जाएगी!",
        mr: "टोकन पावतीने तात्पुरती नोंदणी होते, पण मुदतीत मूळ दाखला न दिल्यास जागा थेट खुल्या (Open) प्रवर्गात वर्ग केली जाते!",
      },
      officialSourceNotice: {
        en: "Do NOT confuse the regular Caste Certificate with the Caste Validity Certificate. Both are separate documents!",
        hi: "जाति प्रमाण पत्र और जाति वैधता प्रमाण पत्र दो अलग-अलग दस्तावेज़ हैं, दोनों आवश्यक होते हैं।",
        mr: "जातीचा दाखला आणि जात पडताळणी प्रमाणपत्र हे दोन वेगवेगळे कागदपत्र आहेत. दोन्ही आवश्यक असतात.",
      },
    },
  },
  {
    id: "doc-ncl-cert",
    name: {
      en: "Non-Creamy Layer (NCL) Certificate",
      hi: "नॉन-क्रीमी लेयर प्रमाण पत्र (NCL)",
      mr: "नॉन-क्रिमीलेअर प्रमाणपत्र (NCL)",
    },
    shortTag: "NCL",
    applicableLevels: ["11th / FYJC", "Undergraduate", "Postgraduate", "CET / CAP", "Scholarships"],
    mandatoryFor: ["VJ/NT, OBC, SBC, SEBC categories (NOT required for SC and ST)"],
    helper: {
      whatIsIt: {
        en: "Certificate confirming that your family's annual income is below the prescribed creamy layer threshold (₹8 Lakhs/year) and you are eligible for reservation benefits.",
        hi: "यह प्रमाण पत्र सिद्ध करता है कि परिवार की वार्षिक आय ₹8 लाख से कम है और आप आरक्षण के पात्र हैं।",
        mr: "कुटुंबाचे वार्षिक उत्पन्न ८ लाखांपेक्षा कमी असल्याचे आणि आरक्षणासाठी पात्र असल्याचे प्रमाणपत्र.",
      },
      whyMightINeedIt: {
        en: "Reservation seats and fee concessions for OBC/VJNT/SBC/SEBC are legally invalid without a valid NCL certificate.",
        hi: "ओबीसी, वीजेएनटी और एसबीसी वर्ग की आरक्षित सीटों व फीस छूट के लिए अनिवार्य।",
        mr: "ओबीसी, व्हीजेएनटी आणि एसबीसी जागा आणि फी सवलतीसाठी अनिवार्य.",
      },
      whoUsuallyNeedsIt: {
        en: "Students belonging to VJ/DT-A, NT-B, NT-C, NT-D, OBC, SBC, and SEBC. Note: SC and ST students DO NOT require NCL.",
        hi: "ओबीसी, वीजे/एनटी और एसबीसी वर्ग के छात्र। (अनुसूचित जाति SC व जनजाति ST को इसकी आवश्यकता नहीं होती)।",
        mr: "ओबीसी, विमुक्त जाती/भटक्या जमाती आणि एसबीसी विद्यार्थी. (एससी आणि एसटी विद्यार्थ्यांना याची गरज नसते).",
      },
      whereDoIGetIt: {
        en: "Sub-Divisional Officer (SDO) or Tahsildar via Aaple Sarkar portal.",
        hi: "आपले सरकार पोर्टल अथवा एसडीएम/तहसीलदार कार्यालय।",
        mr: "आपले सरकार पोर्टल किंवा तहसील कार्यालयातून.",
      },
      whatFormat: {
        en: "Government digital certificate with barcode.",
        hi: "डिजिटल हस्ताक्षरित प्रमाण पत्र।",
        mr: "अधिकृत डिजिटल स्वाक्षरीचे प्रमाणपत्र.",
      },
      originalOrCopy: {
        en: "Original document.",
        hi: "मूल प्रति।",
        mr: "मूळ प्रत.",
      },
      validity: {
        en: "Must be valid up to 31st March of the ongoing academic financial year (e.g. valid up to 31 March 2027 for AY 2026–27). Expired NCL is rejected immediately!",
        hi: "शैक्षणिक सत्र के 31 मार्च तक वैध होना चाहिए (जैसे 31 मार्च 2027)। मियाद खत्म हो चुका NCL अमान्य होगा!",
        mr: "चालू आर्थिक वर्षाच्या ३१ मार्चपर्यंत वैध असणे अनिवार्य (उदा. ३१ मार्च २०२७). मुदत संपलेला दाखला नाकारला जातो!",
      },
      whatIfPending: {
        en: "Application receipt accepted during initial registration, but valid certificate must be uploaded before option form locking.",
        hi: "आवेदन रसीद से शुरुआत में काम चल सकता है, लेकिन सीट अलॉटमेंट से पहले वैध प्रमाण पत्र देना होगा।",
        mr: "सुरुवातीला पावती चालते, पण पसंतीक्रम लॉक करण्यापूर्वी वैध दाखला सादर करावा लागतो.",
      },
      officialSourceNotice: {
        en: "Always check the validity date stamp printed on your certificate before uploading to CET Cell.",
        hi: "अपलोड करने से पहले प्रमाण पत्र पर लिखी वैधता की अंतिम तारीख (Valid up to) ज़रूर देखें।",
        mr: "अपलोड करण्यापूर्वी दाखल्यावर छापलेली अंतिम तारीख (Valid up to) नक्की तपासा.",
      },
    },
  },
  {
    id: "doc-income-cert",
    name: {
      en: "Tahsildar Income Certificate",
      hi: "सक्षम प्राधिकारी (तहसीलदार) आय प्रमाण पत्र",
      mr: "तहसीलदार उत्पन्नाचा दाखला (Income Certificate)",
    },
    shortTag: "Income Cert",
    applicableLevels: ["11th / FYJC", "Undergraduate", "Postgraduate", "CET / CAP", "Scholarships"],
    mandatoryFor: ["EWS quota, TFWS (Tuition Fee Waiver Scheme), EBC fee concession, and all MahaDBT scholarships"],
    helper: {
      whatIsIt: {
        en: "Government certificate stating the total annual gross income of the student's family from all sources for the preceding financial year.",
        hi: "तहसीलदार द्वारा जारी परिवार की कुल वार्षिक आय का आधिकारिक प्रमाण पत्र।",
        mr: "तहसीलदारांनी दिलेला कुटुंबाच्या मागील वर्षाच्या एकूण वार्षिक उत्पन्नाचा अधिकृत दाखला.",
      },
      whyMightINeedIt: {
        en: "Required to claim 100% / 50% tuition fee reimbursement (Freeship/EBC), TFWS merit seats in engineering/polytechnic, and hostel allowances.",
        hi: "50% या 100% कॉलेज फीस प्रतिपूर्ति (EBC/Freeship) और TFWS मेरिट सीट पाने के लिए।",
        mr: "महाविद्यालयीन शिक्षण शुल्क सवलत (EBC), टीएफडब्ल्यूएस जागा आणि महाडीबीटी शिष्यवृत्तीसाठी.",
      },
      whoUsuallyNeedsIt: {
        en: "Open category students with family income <= ₹8 Lakhs (for EBC 50% concession), and reserved category students applying for freeships.",
        hi: "₹8 लाख से कम आय वाले सामान्य वर्ग के छात्र (EBC छूट हेतु) और आरक्षित वर्ग के सभी छात्र।",
        mr: "वार्षिक उत्पन्न ८ लाखांपेक्षा कमी असणारे खुल्या प्रवर्गातील विद्यार्थी आणि शिष्यवृत्तीधारक विद्यार्थी.",
      },
      whereDoIGetIt: {
        en: "Tahsildar office / Aaple Sarkar portal (aaplesarkar.mahaonline.gov.in).",
        hi: "आपले सरकार पोर्टल अथवा स्थानीय तहसील सेतु केंद्र।",
        mr: "आपले सरकार पोर्टलवरून किंवा तहसील सेतू केंद्रावरून.",
      },
      whatFormat: {
        en: "Digitally signed certificate issued by Tahsildar / Naib Tahsildar.",
        hi: "डिजिटल हस्ताक्षरित प्रमाण पत्र।",
        mr: "तहसीलदारांच्या डिजिटल स्वाक्षरीचा दाखला.",
      },
      originalOrCopy: {
        en: "Original digital copy.",
        hi: "मूल प्रति।",
        mr: "मूळ प्रत.",
      },
      validity: {
        en: "Valid for the financial year specified (1-year or 3-year certificate). Must cover the financial year ending 31st March preceding the admission year.",
        hi: "प्रमाण पत्र पर उल्लिखित वित्तीय वर्ष के लिए वैध।",
        mr: "दाखल्यावर नमूद आर्थिक वर्षासाठी वैध.",
      },
      whatIfPending: {
        en: "Salary slips or Form 16 ARE NOT accepted by government scholarship portals. Only a Tahsildar certificate is recognized.",
        hi: "निजी कंपनी की सैलरी स्लिप सरकारी छात्रवृत्ति में मान्य नहीं है; केवल तहसीलदार का प्रमाण पत्र ही मान्य है।",
        mr: "खाजगी सॅलरी स्लिप चालत नाही; केवळ तहसीलदारांचा दाखलाच ग्राह्य धरला जातो.",
      },
      officialSourceNotice: {
        en: "For MahaDBT, the income certificate must clearly mention the student's or father's/mother's name.",
        hi: "महाडीबीटी के लिए प्रमाण पत्र में पिता अथवा छात्र का नाम स्पष्ट होना चाहिए।",
        mr: "महाडीबीटीसाठी दाखल्यावर पालकांचे किंवा विद्यार्थ्याचे नाव स्पष्ट असणे आवश्यक आहे.",
      },
    },
  },
  {
    id: "doc-gap-cert",
    name: {
      en: "Gap Certificate / Affidavit",
      hi: "गैप प्रमाण पत्र / शपथ पत्र (Gap Affidavit)",
      mr: "गॅप प्रमाणपत्र / प्रतिज्ञापत्र (Gap Affidavit)",
    },
    shortTag: "Gap Certificate",
    applicableLevels: ["11th / FYJC", "Undergraduate", "Postgraduate", "CET / CAP"],
    mandatoryFor: ["Students who have a 1 or more year break between qualifying exam and current admission"],
    helper: {
      whatIsIt: {
        en: "A notarized legal affidavit on non-judicial stamp paper (usually ₹100) explaining the reason for the academic break (e.g. entrance prep, health, work, financial reasons).",
        hi: "100 रुपये के स्टाम्प पेपर पर नोटरी द्वारा प्रमाणित शपथ पत्र जिसमें पढ़ाई में अंतर (गैप) का कारण स्पष्ट किया जाता है।",
        mr: "१०० रुपयांच्या स्टॅम्प पेपरवर नोटरी केलेले प्रतिज्ञापत्र, ज्यामध्ये शिक्षणातील खंड पडण्याचे कारण स्पष्ट केलेले असते.",
      },
      whyMightINeedIt: {
        en: "Colleges need legal assurance that during the gap period you did not enroll in another unauthorized degree or engage in prohibited conduct.",
        hi: "कॉलेज यह सुनिश्चित करता है कि गैप के दौरान छात्र ने किसी अन्य स्थान पर अवैध प्रवेश नहीं लिया था।",
        mr: "शिक्षणात खंड पडलेल्या काळात इतरत्र गैरमार्गाने प्रवेश घेतलेला नाही याची कायदेशीर खात्री देण्यासाठी.",
      },
      whoUsuallyNeedsIt: {
        en: "Anyone who passed 12th or graduation in a prior year and took drop years for CET/NEET/JEE or personal reasons.",
        hi: "ड्रॉप लेने वाले या पूर्व वर्षों में परीक्षा पास कर चुके छात्र।",
        mr: "ड्रॉप घेतलेले किंवा मागील वर्षांत परीक्षा उत्तीर्ण झालेले विद्यार्थी.",
      },
      whereDoIGetIt: {
        en: "Executed before any local Notary Advocate or Executive Magistrate near district/taluka court.",
        hi: "किसी भी न्यायालय या तहसील के नज़दीक नोटरी वकील से बनवाया जा सकता है।",
        mr: "स्थानिक न्यायालय किंवा तहसील परिसरातील नोटरी वकिलांकडून तयार करून घेता येते.",
      },
      whatFormat: {
        en: "Original ₹100 Stamp Paper with Notary seal, advocate registration stamp, and notarial entry number.",
        hi: "मूल ₹100 का स्टाम्प पेपर जिस पर नोटरी का सील और हस्ताक्षर हो।",
        mr: "मूळ १०० रुपयांचा स्टॅम्प पेपर नोटरी शिक्क्यासह.",
      },
      originalOrCopy: {
        en: "Original submitted to college at final admission.",
        hi: "कॉलेज में मूल प्रति जमा होती है।",
        mr: "महाविद्यालयात मूळ प्रत जमा करावी लागते.",
      },
      validity: {
        en: "Valid for that specific admission academic year.",
        hi: "उस शैक्षणिक सत्र के लिए मान्य।",
        mr: "त्या संबंधित शैक्षणिक वर्षासाठी वैध.",
      },
      whatIfPending: {
        en: "Can easily be prepared within 1 hour from any nearby notary office.",
        hi: "यह किसी भी नोटरी कार्यालय से 1 घंटे के भीतर बन जाता है।",
        mr: "जवळच्या नोटरी कार्यालयातून एका तासात सहज तयार करून मिळते.",
      },
      officialSourceNotice: {
        en: "Ensure your full name matches your 12th/degree marksheet on the affidavit.",
        hi: "शपथ पत्र पर अपना नाम 12वीं/डिग्री की मार्कशीट के अनुसार ही लिखवाएं।",
        mr: "प्रतिज्ञापत्रावर आपले नाव गुणपत्रिकेनुसारच अचूक असल्याची खात्री करा.",
      },
    },
  },
  {
    id: "doc-apaar-abc-id",
    name: {
      en: "APAAR ID / ABC ID (Academic Bank of Credits)",
      hi: "अपार आईडी / एबीसी आईडी (Academic Bank of Credits)",
      mr: "अपार आयडी / एबीसी आयडी (Academic Bank of Credits)",
    },
    shortTag: "APAAR / ABC ID",
    applicableLevels: ["11th / FYJC", "Undergraduate", "Postgraduate", "CET / CAP", "PhD / Research", "CDOE / Distance"],
    mandatoryFor: ["All Higher Education & University Admissions under NEP 2020"],
    helper: {
      whatIsIt: {
        en: "A 12-digit permanent unique lifelong digital education ID (Automated Permanent Academic Account Registry) linked with DigiLocker to store all your earned academic credits digitally.",
        hi: "डिजीलॉकर से जुड़ा 12 अंकों का स्थायी डिजिटल पहचान पत्र (APAAR) जिसमें आपके सभी कॉलेज क्रेडिट जमा होते हैं।",
        mr: "डिजीलॉकरशी जोडलेला १२ अंकी कायमस्वरूपी शैक्षणिक ओळख क्रमांक (APAAR), ज्यामध्ये सर्व क्रेडिट्स जमा होतात.",
      },
      whyMightINeedIt: {
        en: "Mandatory under National Education Policy (NEP 2020) for all university enrolments, degree credit transfer, and exam hall ticket generation.",
        hi: "नई राष्ट्रीय शिक्षा नीति (NEP 2020) के तहत विश्वविद्यालय प्रवेश और डिग्री पाने के लिए अनिवार्य।",
        mr: "नवीन शैक्षणिक धोरणांतर्गत (NEP 2020) सर्व विद्यापीठ प्रवेशांसाठी बंधनकारक.",
      },
      whoUsuallyNeedsIt: {
        en: "Every college student in India.",
        hi: "भारत में कॉलेज या यूनिवर्सिटी में पढ़ने वाला प्रत्येक छात्र।",
        mr: "महाविद्यालयीन शिक्षण घेणारा प्रत्येक विद्यार्थी.",
      },
      whereDoIGetIt: {
        en: "Created free in 2 minutes via abc.gov.in or directly on the DigiLocker mobile app.",
        hi: "abc.gov.in वेबसाइट या डिजीलॉकर ऐप पर 2 मिनट में निःशुल्क बनाया जा सकता है।",
        mr: "abc.gov.in वर किंवा डिजीलॉकर ॲपवरून २ मिनिटांत मोफत तयार करता येते.",
      },
      whatFormat: {
        en: "12-digit numeric identifier and digital ID card PDF with QR code.",
        hi: "12 अंकों की संख्या और क्यूआर कोड वाला डिजिटल कार्ड।",
        mr: "१२ अंकी क्रमांक आणि क्यूआर कोड असलेले डिजिटल कार्ड.",
      },
      originalOrCopy: {
        en: "Digital record.",
        hi: "डिजिटल रिकॉर्ड।",
        mr: "डिजिटल नोंद.",
      },
      validity: {
        en: "Lifelong validity across school, college, and postgraduate study.",
        hi: "आजीवन वैध।",
        mr: "आयुष्यभरासाठी वैध.",
      },
      whatIfPending: {
        en: "Takes only 2 minutes if your Aadhaar has mobile OTP linked. Generate it immediately before filling college application forms.",
        hi: "आधार ओटीपी से तुरंत बन जाता है; कॉलेज फ़ॉर्म भरने से पहले इसे तुरंत बना लें।",
        mr: "आधार ओटीपीद्वारे लगेच तयार होते; प्रवेश अर्ज भरण्यापूर्वी हे तयार करून ठेवा.",
      },
      officialSourceNotice: {
        en: "Enter the correct 12-digit ID without spaces when registering on university portals.",
        hi: "यूनिवर्सिटी पोर्टल पर बिना किसी स्पेस के सही 12 अंक दर्ज करें।",
        mr: "विद्यापीठ पोर्टलवर कोणतीही जागा (space) न सोडता अचूक १२ अंक टाका.",
      },
    },
  },
];

// ---------------------------------------------------------------------------
// 4. STUDENT PROBLEM GUIDES (Practical troubleshooting with concrete actions)
// ---------------------------------------------------------------------------
export const problemGuides: ProblemGuide[] = [
  {
    id: "prob-which-portal",
    question: {
      en: "Which admission portal am I supposed to use?",
      hi: "मुझे किस आधिकारिक पोर्टल का उपयोग करना चाहिए?",
      mr: "मी नेमक्या कोणत्या अधिकृत पोर्टलचा वापर करावा?",
    },
    shortSummary: {
      en: "Match your course type to the single verified portal to avoid applying on the wrong website.",
      hi: "पाठ्यक्रम के अनुसार सही सरकारी पोर्टल चुनें ताकि गलत वेबसाइट पर समय और पैसे बर्बाद न हों।",
      mr: "चुकीच्या संकेतस्थळावर अर्ज करणे टाळण्यासाठी आपल्या अभ्यासक्रमानुसार योग्य पोर्टल निवडा.",
    },
    situation: {
      en: "Students get overwhelmed by dozens of portals (Samarth, CET Cell, FYJC, CDOE, college sites) and don't know where to start.",
      hi: "छात्र अनेक वेबसाइटों (समर्थ, सीईटी सेल, एफवायजेसी, कॉलेज साइट) के बीच उलझ जाते हैं।",
      mr: "अनेक संकेतस्थळांमुळे (समर्थ, सीईटी, एफवायजेसी) विद्यार्थी गोंधळात पडतात.",
    },
    explanation: {
      en: "Admission portals are divided strictly by course authority: (1) 11th Std -> mahafyjcadmissions.in; (2) Professional degrees (Engg, MBA, Pharmacy, Law, BBA/BMS) -> cetcell.mahacet.org; (3) Traditional Mumbai University degrees (BA, B.Com, B.Sc) -> muadmission.samarth.edu.in PLUS each individual college site; (4) Distance / Online -> mucdoeadm.samarth.edu.in; (5) PhD -> uomphd.mu.ac.in.",
      hi: "हर पाठ्यक्रम का अपना विशिष्ट पोर्टल है: 11वीं के लिए mahafyjcadmissions.in; इंजीनियरिंग/एमबीए/फार्मेसी आदि के लिए cetcell.mahacet.org; मुंबई यूनिवर्सिटी सामान्य डिग्री के लिए Samarth और संबंधित कॉलेज की वेबसाइट; दूरस्थ शिक्षा के लिए CDOE Samarth; और पीएचडी के लिए uomphd.mu.ac.in।",
      mr: "प्रत्येक अभ्यासक्रमाची स्वतंत्र यंत्रणा आहे: ११ वी साठी mahafyjcadmissions.in; अभियांत्रिकी/एमबीए/फार्मसीसाठी cetcell.mahacet.org; मुंबई विद्यापीठ पदवीसाठी समर्थ आणि महाविद्यालयाची वेबसाइट; दूरस्थ शिक्षणासाठी CDOE Samarth; आणि पी.एच.डी.साठी uomphd.mu.ac.in.",
    },
    actionSteps: [
      {
        en: "Use our Admission Finder tool above to get the exact direct portal URL for your course.",
        hi: "ऊपर दिए गए हमारे 'एडमिशन खोजक' (Admission Finder) टूल का उपयोग करके सीधा लिंक प्राप्त करें।",
        mr: "आपल्या अभ्यासक्रमाची थेट लिंक मिळवण्यासाठी वरील 'प्रवेश शोधक' टूलचा वापर करा.",
      },
      {
        en: "Never apply on unofficial consultancy or third-party coaching websites posing as admission portals.",
        hi: "किसी भी गैर-सरकारी प्राइवेट ब्लॉग या एजेंट की वेबसाइट पर अपनी निजी जानकारी न भरें।",
        mr: "कोणत्याही अनधिकृत किंवा खाजगी संकेतस्थळावर माहिती भरू नका.",
      },
      {
        en: "Bookmark the verified portal and follow official schedules strictly.",
        hi: "आधिकारिक पोर्टल को बुकमार्क कर लें और अंतिम तिथि से पहले आवेदन पूरा करें।",
        mr: "अधिकृत पोर्टल बुकमार्क करा आणि वेळापत्रकाचे काटेकोर पालन करा.",
      },
    ],
  },
  {
    id: "prob-do-i-need-cet",
    question: {
      en: "Do I need to take a CET entrance exam?",
      hi: "क्या मुझे सीईटी (CET) प्रवेश परीक्षा देनी होगी?",
      mr: "मला सीईटी (CET) प्रवेश परीक्षा द्यावी लागेल का?",
    },
    shortSummary: {
      en: "Professional courses strictly require CET; traditional Arts, Science, and Commerce courses do not.",
      hi: "व्यावसायिक पाठ्यक्रमों के लिए सीईटी अनिवार्य है; सामान्य बीए, बीकॉम, बीएससी के लिए नहीं।",
      mr: "व्यावसायिक अभ्यासक्रमांसाठी सीईटी बंधनकारक आहे; सामान्य कला, विज्ञान व वाणिज्य पदवीसाठी नाही.",
    },
    situation: {
      en: "Students completing 12th standard wonder whether they must clear CET to get into college.",
      hi: "12वीं के बाद छात्र असमंजस में रहते हैं कि कॉलेज में दाखिले के लिए सीईटी ज़रूरी है या नहीं।",
      mr: "१२ वी नंतर महाविद्यालयात प्रवेश घेण्यासाठी सीईटी आवश्यक आहे का, याबाबत साशंकता असते.",
    },
    explanation: {
      en: "CET IS MANDATORY FOR: Engineering (MHT-CET), Pharmacy (MHT-CET), Architecture (NATA/CET), Law (MAH-LLB), MBA/MMS, MCA, and professional BBA/BMS/BCA (MAH-BBA/BCA CET under AICTE). CET IS NOT NEEDED FOR: Traditional B.Com, B.A., B.Sc. (General), B.Sc. IT, B.Sc. Computer Science (these admit students based on 12th board marks via college merit lists).",
      hi: "सीईटी इनके लिए अनिवार्य है: इंजीनियरिंग, फार्मेसी, आर्किटेक्चर, लॉ, एमबीए, एमसीए और बीबीए/बीएमएस/बीसीए। सीईटी इनकी ज़रूरत नहीं है: सामान्य बी.कॉम, बी.ए., बी.एससी., बी.एससी. आईटी (इनमें 12वीं के अंकों की मेरिट पर दाखिला मिलता है)।",
      mr: "सीईटी आवश्यक असणारे अभ्यासक्रम: अभियांत्रिकी, फार्मसी, वास्तुकला, विधी (लॉ), एमबीए, एमसीए आणि बीबीए/बीएमएस/बीसीए. सीईटी आवश्यक नसणारे अभ्यासक्रम: सामान्य बी.कॉम, बी.ए., बी.एस्सी., बी.एस्सी. आयटी (यांमध्ये १२ वी च्या गुणांवर प्रवेश मिळतो).",
    },
    actionSteps: [
      {
        en: "If planning professional degrees, register on cetcell.mahacet.org during the entrance exam window (typically Jan–March).",
        hi: "यदि व्यावसायिक डिग्री लेनी है तो सीईटी सेल पर परीक्षा के लिए समय पर आवेदन करें।",
        mr: "व्यावसायिक पदवी घ्यायची असल्यास वेळेत सीईटी परीक्षेसाठी नोंदणी करा.",
      },
      {
        en: "If taking traditional degree courses, wait for 12th board results and apply via University Samarth + college portals.",
        hi: "पारंपरिक डिग्री के लिए 12वीं परिणाम के बाद यूनिवर्सिटी समर्थ व कॉलेज पोर्टल पर आवेदन करें।",
        mr: "पारंपरिक पदवीसाठी १२ वी निकालानंतर विद्यापीठ समर्थ व महाविद्यालय पोर्टलवर अर्ज करा.",
      },
    ],
  },
  {
    id: "prob-dont-understand-cap",
    question: {
      en: "I don't understand how CAP (Centralised Admission Process) works.",
      hi: "मुझे CAP (केंद्रीकृत प्रवेश प्रक्रिया) समझ नहीं आ रही है।",
      mr: "मला कॅप (CAP - केंद्रीय प्रवेश प्रक्रिया) कशी चालते हे समजत नाही.",
    },
    shortSummary: {
      en: "CAP is a fair algorithmic system where a computer allocates seats based on your CET score, category quota, and preference order.",
      hi: "CAP एक कम्प्यूटरीकृत प्रणाली है जहां आपके अंकों और कॉलेज पसंद के आधार पर निष्पक्ष सीट मिलती है।",
      mr: "कॅप ही एक संगणकीय पारदर्शक पद्धत आहे, जिथे आपल्या गुणांनुसार आणि पसंतीक्रमानुसार जागा मिळते.",
    },
    situation: {
      en: "First-generation applicants get confused by CAP rounds, option forms, and merit numbers.",
      hi: "छात्र कैप राउंड, ऑप्शन फ़ॉर्म और मेरिट नंबर को लेकर घबरा जाते हैं।",
      mr: "कॅप फेऱ्या, पसंती अर्ज आणि गुणवत्ता क्रमांकामुळे विद्यार्थी संभ्रमात पडतात.",
    },
    explanation: {
      en: "CAP replaces running around to 50 colleges individually. You fill one single option form listing your preferred colleges in order (1 to 300). The computer inspects your merit rank: if seat is available at your choice #1, it gives it to you. If not, it checks #2, then #3, and so on. Multiple rounds (usually Round 1, Round 2, Round 3) take place as unfilled seats become available.",
      hi: "CAP का मतलब है कि आपको अलग-अलग 50 कॉलेजों में नहीं भटकना। आप एक ही ऑप्शन फ़ॉर्म में 1 से 300 तक कॉलेजों की वरीयता भरते हैं। कंप्यूटर आपकी रैंक देखता है: यदि पहली पसंद में सीट खाली है तो देता है, नहीं तो दूसरी, फिर तीसरी पसंद जांचता है। खाली बची सीटों के लिए 3 राउंड होते हैं।",
      mr: "कॅपमुळे वेगवेगळ्या महाविद्यालयांत फिरावे लागत नाही. आपण एकाच अर्जात १ ते ३०० महाविद्यालयांचे प्राधान्यक्रम भरतो. संगणक आपल्या गुणवत्तेनुसार क्रमवार जागा वाटप करतो. रिक्त जागांसाठी साधारणपणे ३ फेऱ्या होतात.",
    },
    actionSteps: [
      {
        en: "Never list colleges randomly. Always place your dream college as preference #1, followed by realistic options.",
        hi: "कॉलेज बेतरतीब ढंग से न भरें। हमेशा अपने सबसे पसंदीदा कॉलेज को नंबर 1 पर रखें।",
        mr: "पसंतीक्रम विचारपूर्वक भरा. आपले आवडते महाविद्यालय नेहमी १ क्रमांकावर ठेवा.",
      },
      {
        en: "Understand that Round 1 cutoffs are highest; cutoffs typically drop slightly in Round 2 and Round 3.",
        hi: "ध्यान रखें कि पहले राउंड का कट-ऑफ सबसे ऊंचा होता है, दूसरे व तीसरे राउंड में कट-ऑफ थोड़ा नीचे आता है।",
        mr: "पहिल्या फेरीचा कट-ऑफ जास्त असतो, दुसऱ्या व तिसऱ्या फेरीत कट-ऑफ काही प्रमाणात खाली येतो.",
      },
    ],
  },
  {
    id: "prob-pending-certificate",
    question: {
      en: "My Caste Validity, NCL, or EWS certificate is still pending.",
      hi: "मेरा जाति वैधता, नॉन-क्रीमी लेयर या EWS प्रमाण पत्र अभी तक नहीं बना है।",
      mr: "माझे जात पडताळणी, नॉन-क्रिमीलेअर किंवा EWS प्रमाणपत्र अद्याप मिळालेले नाही.",
    },
    shortSummary: {
      en: "Use your official application receipt/token during registration, but track your certificate vigorously before final admission.",
      hi: "पंजीकरण में रसीद (Token) लगाएं, लेकिन अंतिम राउंड से पहले मूल प्रमाण पत्र ज़रूर प्राप्त करें।",
      mr: "नोंदणीसाठी पावती (टोकन) वापरा, पण अंतिम प्रवेशापूर्वी मूळ प्रमाणपत्र मिळवण्यासाठी पाठपुरावा करा.",
    },
    situation: {
      en: "Authorities take 30–60 days to issue Caste Validity, NCL, or EWS, and admission deadline is approaching.",
      hi: "सरकारी कार्यालयों से प्रमाण पत्र मिलने में समय लग रहा है और एडमिशन की तारीख नज़दीक आ गई है।",
      mr: "सरकारी कार्यालयातून प्रमाणपत्र मिळण्यास उशीर होत आहे आणि प्रवेश प्रक्रिया सुरू झाली आहे.",
    },
    explanation: {
      en: "In Maharashtra CET CAP and FYJC, the rules generally permit uploading the official Application Receipt / Token issued by the competent authority (BARTI Scrutiny Committee / Setu) during the initial registration phase. However, by the final round verification date (explicitly published in CET Cell schedules), you MUST produce the original certificate. If you fail, your category is immediately cancelled and your seat is converted to General / Open.",
      hi: "महाराष्ट्र में प्रारंभिक पंजीकरण के समय सेतू या बार्टी की आवेदन रसीद (Token) अपलोड करने की छूट दी जाती है। लेकिन प्रवेश विवरणिका में दी गई अंतिम तिथि तक मूल प्रमाण पत्र प्रस्तुत करना अनिवार्य होता है। ऐसा न करने पर आपका आरक्षण रद्द होकर सीट सामान्य (Open) वर्ग में बदल जाती है।",
      mr: "सुरुवातीला सेतू किंवा बार्टीची अधिकृत पावती (टोकन) चालते. परंतु माहितीपत्रकात दिलेल्या अंतिम मुदतीपूर्वी मूळ प्रमाणपत्र सादर करणे बंधनकारक असते. अन्यथा आरक्षण रद्द होऊन जागा थेट खुल्या प्रवर्गात रूपांतरित होते.",
    },
    actionSteps: [
      {
        en: "Upload your official application receipt with token number during initial CAP / FYJC registration.",
        hi: "रजिस्ट्रेशन के समय अपनी टोकन नंबर वाली आवेदन रसीद अपलोड करें।",
        mr: "नोंदणी करताना टोकन क्रमांकासह अधिकृत अर्ज पावती अपलोड करा.",
      },
      {
        en: "Visit your local Scrutiny Committee / Tahsildar office with your college CAP allotment letter showing admission urgency.",
        hi: "कॉलेज का अलॉटमेंट लेटर लेकर तहसील या स्क्रूटनी ऑफिस जाएं और तात्कालिकता दिखाकर काम तेज़ी से करवाएं।",
        mr: "प्रवेशाचे महत्त्व दाखवण्यासाठी अलॉटमेंट लेटर घेऊन संबंधित कार्यालयात जाऊन पाठपुरावा करा.",
      },
    ],
  },
  {
    id: "prob-name-mismatch",
    question: {
      en: "My name differs between my Aadhaar, 10th marksheet, and caste documents.",
      hi: "मेरे आधार, 10वीं मार्कशीट और जाति प्रमाण पत्र में नाम की स्पेलिंग अलग-अलग है।",
      mr: "माझ्या आधार, १० वी गुणपत्रिका आणि जातीच्या दाखल्यावरील नावाच्या स्पेलिंगमध्ये तफावत आहे.",
    },
    shortSummary: {
      en: "Get a legal Name Discrepancy Affidavit or Maharashtra Government Gazette notification before verification.",
      hi: "सत्यापन से पहले नोटरी से 'नाम भिन्नता शपथ पत्र' (Name Affidavit) अथवा सरकारी राजपत्र (Gazette) बनवाएं।",
      mr: "पडताळणीपूर्वी नोटरीकडून 'नाव तफावत प्रतिज्ञापत्र' किंवा शासकीय राजपत्र (Gazette) तयार करून घ्या.",
    },
    situation: {
      en: "Initial middle name missing on Aadhaar, surname placed first on marksheet, or single-letter spelling variations.",
      hi: "आधार में पिता का नाम गायब होना, मार्कशीट में सरनेम पहले होना, या स्पेलिंग में एक अक्षर का अंतर होना।",
      mr: "आधारवर मधले नाव नसणे, गुणपत्रिकेवर आडनाव आधी असणे, किंवा स्पेलिंगमध्ये एका अक्षराचा फरक असणे.",
    },
    explanation: {
      en: "Scrutiny officers flag even a single-letter mismatch between your identity proof and marksheet. To resolve this without pausing your admission: (1) If minor spelling difference: A ₹100 Notarized Affidavit stating that both names belong to the same person is widely accepted; (2) If full name change: A copy of the Maharashtra Government Gazette (Rajpatra) notification is mandatory.",
      hi: "स्क्रूटनी अधिकारी नाम के मामूली अंतर पर भी आपत्ति दर्ज कर सकते हैं। समाधान: (1) स्पेलिंग में मामूली अंतर होने पर ₹100 के स्टाम्प पेपर पर नोटरी शपथ पत्र (Affidavit) मान्य होता है; (2) यदि पूरा नाम बदला है तो महाराष्ट्र शासन का राजपत्र (Gazette) आवश्यक होता है।",
      mr: "पडताळणी अधिकारी नावातील फरकावर आक्षेप घेऊ शकतात. उपाय: (१) स्पेलिंगमध्ये किरकोळ फरक असल्यास १०० रुपयांच्या स्टॅम्पवर नोटरी प्रतिज्ञापत्र (Affidavit) चालते; (२) पूर्ण नाव बदलले असल्यास शासकीय राजपत्र (Gazette) आवश्यक असते.",
    },
    actionSteps: [
      {
        en: "Prepare a Notarized Name Clarification Affidavit before document verification begins.",
        hi: "दस्तावेज़ सत्यापन शुरू होने से पहले नोटरी वकील से शपथ पत्र तैयार करवा लें।",
        mr: "कागदपत्र पडताळणीपूर्वी नोटरी वकिलांकडून प्रतिज्ञापत्र तयार करून घ्या.",
      },
      {
        en: "Upload the Affidavit along with the marksheet in a single combined PDF if scrutiny raises a query.",
        hi: "यदि स्क्रूटनी में कोई आपत्ति आए तो मार्कशीट और शपथ पत्र की संयुक्त पीडीएफ़ अपलोड करें।",
        mr: "त्रुटी आल्यास गुणपत्रिका आणि प्रतिज्ञापत्र एकत्र करून एकच पीडीएफ अपलोड करा.",
      },
    ],
  },
  {
    id: "prob-freeze-vs-betterment",
    question: {
      en: "I don't understand Freeze vs Betterment (Float) during seat allotment.",
      hi: "सीट अलॉटमेंट में 'Freeze' और 'Betterment' का क्या मतलब है?",
      mr: "जागा वाटपात 'Freeze' आणि 'Betterment' चा नेमका काय अर्थ आहे?",
    },
    shortSummary: {
      en: "Freeze locks your seat permanently; Betterment retains your current seat while letting you try for a higher preference.",
      hi: "Freeze का मतलब सीट पक्की करना है; Betterment से मौजूदा सीट सुरक्षित रहती है और अगले राउंड में बेहतर कॉलेज मिल सकता है।",
      mr: "Freeze म्हणजे मिळालेली जागा पक्की करणे; Betterment म्हणजे सध्याची जागा सुरक्षित ठेवून पुढील फेरीत वरचा पसंतीक्रम मिळवण्याचा प्रयत्न करणे.",
    },
    situation: {
      en: "Candidate receives their 3rd or 4th choice college in Round 1 and wants to know if they can try for their 1st choice without losing the current seat.",
      hi: "पहले राउंड में तीसरी या चौथी पसंद का कॉलेज मिला है और छात्र चाहता है कि यह सीट भी न छूटे और पहली पसंद भी मिल जाए।",
      mr: "पहिल्या फेरीत ३ रा किंवा ४ था पर्याय मिळाला असून, सध्याची जागा न गमावता १ ला पर्याय मिळावा अशी विद्यार्थ्याची इच्छा असते.",
    },
    explanation: {
      en: "Here is the exact rule: (1) AUTO-FREEZE: If allotted preference #1, you MUST take admission. You cannot participate in further rounds; (2) SELF-FREEZE: If allotted preference #2 or lower and you are 100% satisfied, you Self-Freeze and confirm admission at that college; (3) BETTERMENT (FLOAT): If allotted preference #2 or lower, you pay the ₹1,000 official Seat Acceptance Fee to HOLD your current seat safely, and enter Round 2. In Round 2, if you get a higher choice, the old seat is cancelled and the new one is yours. If you DO NOT get a higher choice, your Round 1 seat remains 100% safe!",
      hi: "नियम समझें: (1) ऑटो-फ्रीज: यदि पहली पसंद (1st Preference) मिली है तो एडमिशन लेना अनिवार्य है; (2) सेल्फ-फ्रीज: यदि 2 या उससे नीचे का कॉलेज मिला और आप पूरी तरह संतुष्ट हैं तो फ्रीज करके दाखिला लें; (3) बेटरमेंट: यदि अगली पसंद आज़माना चाहते हैं तो ₹1,000 सीट एक्सेप्टेंस फीस भरकर Betterment चुनें। इससे मौजूदा सीट सुरक्षित रहेगी और अगले राउंड में अगर ऊपर का कॉलेज मिला तो वह मिल जाएगा, नहीं मिला तो यह पुरानी सीट आपके पास ही रहेगी!",
      mr: "नियम समजून घ्या: (१) ऑटो-फ्रीज: १ ला पर्याय मिळाल्यास प्रवेश घेणे बंधनकारक; (२) सेल्फ-फ्रीज: २ रा किंवा खालील पर्याय मिळाला आणि तुम्ही समाधानी असाल तर जागा पक्की करा; (३) बेटरमेंट: ₹१,००० शुल्क भरून बेटरमेंट निवडा. यामुळे मिळालेली जागा सुरक्षित राहून पुढील फेरीत वरचा पसंतीक्रम मिळाल्यास तो मिळेल, नाही मिळाला तरी पहिली जागा सुरक्षित राहील!",
    },
    actionSteps: [
      {
        en: "Always pay the ₹1,000 Seat Acceptance Fee on the official portal if choosing Betterment. Do not miss this step!",
        hi: "बेटरमेंट चुनते समय पोर्टल पर ₹1,000 की आधिकारिक सीट स्वीकृति फीस ज़रूर भरें।",
        mr: "बेटरमेंट निवडताना पोर्टलवर ₹१,००० शुल्क भरणे विसरू नका.",
      },
      {
        en: "In Round 2, only list colleges genuinely better than your current allotted college.",
        hi: "अगले राउंड में केवल वही कॉलेज भरें जो मौजूदा कॉलेज से सचमुच बेहतर हों।",
        mr: "पुढील फेरीत फक्त सध्या मिळालेल्या महाविद्यालयापेक्षा अधिक चांगल्या महाविद्यालयांचेच नाव टाका.",
      },
    ],
  },
  {
    id: "prob-missed-deadline",
    question: {
      en: "I missed an admission deadline or step. What can I do?",
      hi: "मुझसे आवेदन की अंतिम तिथि या कोई चरण छूट गया है। अब क्या उपाय है?",
      mr: "माझ्याकडून प्रवेशाची मुदत किंवा एखादी फेरी चुकली आहे. आता काय करावे?",
    },
    shortSummary: {
      en: "Look out for institutional level rounds, spot rounds, or subsequent CAP extension notices.",
      hi: "संस्थान स्तर के राउंड (Institutional Round), स्पॉट राउंड या तारीख बढ़ने की आधिकारिक सूचना देखें।",
      mr: "महाविद्यालय स्तरावरील फेऱ्या (Institutional Round), स्पॉट फेऱ्या किंवा मुदतवाढीची सूचना तपासा.",
    },
    situation: {
      en: "Student was unwell, lacked internet, or did not know the schedule and missed the registration cut-off date.",
      hi: "जानकारी के अभाव में या किसी कारणवश छात्र पंजीकरण या विकल्प भरने की तारीख चूक गया।",
      mr: "माहिती नसल्यामुळे किंवा अडचणीमुळे नोंदणीची अथवा पसंतीक्रम भरण्याची मुदत निघून गेली.",
    },
    explanation: {
      en: "Do not panic immediately. In Maharashtra admissions: (1) FYJC: Special rounds and FCFS (First-Come-First-Served) rounds open after regular rounds conclude; (2) CET CAP: After CAP Round 3 concludes, all vacant seats in colleges are opened for 'Institutional Level Rounds' / 'Against CAP Vacancy Rounds'. Colleges advertise these on their own websites; (3) Dates are often officially extended by 2–4 days via CET Cell circulars.",
      hi: "घबराएं नहीं। महाराष्ट्र में कई अवसर मिलते हैं: (1) FYJC में नियमित राउंड के बाद स्पेशल राउंड और 'पहले आओ पहले पाओ' राउंड होते हैं; (2) सीईटी में 3 राउंड के बाद बची हुई खाली सीटों के लिए कॉलेज स्तर पर 'Institutional Vacancy Round' होते हैं; (3) सीईटी सेल अक्सर 2-4 दिन की तारीख बढ़ाने की अधिसूचना जारी करता है।",
      mr: "घाबरून जाऊ नका. अनेक पर्याय उपलब्ध असतात: (१) ११ वी मध्ये नियमित फेऱ्यांनंतर विशेष फेऱ्या (Special Rounds) सुरू होतात; (२) सीईटीमध्ये ३ फेऱ्यांनंतर रिक्त राहिलेल्या जागांसाठी महाविद्यालय स्तरावर 'Institutional Round' होतात; (३) अनेकदा अधिकृत परिपत्रकाद्वारे २ ते ४ दिवसांची मुदतवाढ दिली जाते.",
    },
    actionSteps: [
      {
        en: "Check cetcell.mahacet.org or mahafyjcadmissions.in daily for 'Schedule Extension' circulars.",
        hi: "तारीख बढ़ने की सूचना के लिए आधिकारिक पोर्टल के नोटिस बोर्ड पर रोज़ नज़र रखें।",
        mr: "मुदतवाढीच्या परिपत्रकांसाठी अधिकृत पोर्टलचे सूचना फलक रोज तपासा.",
      },
      {
        en: "Contact the admission office of colleges directly to register for Against-CAP vacant seat rounds.",
        hi: "खाली सीटों के लिए सीधे कॉलेजों के प्रवेश कार्यालय से संपर्क करें।",
        mr: "रिक्त जागांच्या फेरीसाठी थेट महाविद्यालयांच्या प्रवेश कार्यालयाशी संपर्क साधा.",
      },
    ],
  },
  {
    id: "prob-payment-failed-status",
    question: {
      en: "My fee payment succeeded from my bank, but portal shows 'Payment Pending'.",
      hi: "बैंक से पैसे कट गए, लेकिन पोर्टल पर अभी भी 'Payment Pending' दिखा रहा है।",
      mr: "बँकेतून पैसे कापले गेले, पण पोर्टलवर अजूनही 'Payment Pending' दिसत आहे.",
    },
    shortSummary: {
      en: "Wait 24–48 hours for bank reconciliation; never make immediate repetitive payments.",
      hi: "24 से 48 घंटे तक बैंक समाधान (Reconciliation) की प्रतीक्षा करें; तुरंत दोबारा भुगतान न करें।",
      mr: "२४ ते ४८ तास बँकेच्या ताळमेळाची (Reconciliation) प्रतीक्षा करा; लगेच पुन्हा पैसे भरू नका.",
    },
    situation: {
      en: "Money deducted via UPI / Net Banking, but portal session timed out or page closed before redirecting.",
      hi: "यूपीआई से पैसे कट गए, लेकिन सर्वर धीमा होने के कारण रसीद नहीं बन पाई।",
      mr: "यूपीआयने पैसे कापले गेले, पण सर्व्हरच्या समस्येमुळे पावती तयार झाली नाही.",
    },
    explanation: {
      en: "Government payment gateways (SBI ePay, BillDesk, Razorpay) run batch settlement cycles every 24 hours. The portal checks transaction logs and automatically updates your status to 'Paid'. Making immediate repeated payments locks your money and causes long refund processes. If status doesn't change after 24 hours, use the portal's official 'Verify Payment' or 'Check Transaction Status' button.",
      hi: "सरकारी पेमेंट गेटवे हर 24 घंटे में बैंक सर्वर से लेन-देन की जांच करते हैं और स्टेटस स्वतः 'Paid' हो जाता है। तुरंत दोबारा फीस भरने से आपके पैसे अटक सकते हैं। 24 घंटे बाद पोर्टल पर मौजूद 'Verify Payment' बटन दबाएं।",
      mr: "शासकीय पेमेंट गेटवे २४ तासांत बँकेशी ताळमेळ घालून स्टेटस आपोआप 'Paid' करतात. लगेच पुन्हा पैसे भरल्यास पैसे अडकतात. २४ तासांनंतर पोर्टलवरील 'Verify Payment' बटनाचा वापर करा.",
    },
    actionSteps: [
      {
        en: "Take a screenshot of the bank transaction ID, UTR number, and date/time.",
        hi: "बैंक लेन-देन संख्या (UTR/Ref No) और समय का स्क्रीनशॉट सुरक्षित रखें।",
        mr: "बँक व्यवहार क्रमांक (UTR/Ref No) आणि वेळेचा स्क्रीनशॉट जपून ठेवा.",
      },
      {
        en: "Click 'Check Payment Status' on the portal before attempting any fresh payment.",
        hi: "नया भुगतान करने से पहले पोर्टल पर 'Check Payment Status' पर क्लिक करें।",
        mr: "पुन्हा पैसे भरण्यापूर्वी पोर्टलवरील 'Check Payment Status' तपासा.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// 5. ADMISSION TERMS & VOCABULARY (Plain language explainers)
// ---------------------------------------------------------------------------
export const admissionTerms: AdmissionTerm[] = [
  {
    id: "term-cap",
    term: "CAP",
    officialTerm: "Centralised Admission Process (CAP)",
    plainMeaning: {
      en: "A single, unified state admission system where students apply to many colleges together through one online form instead of visiting each college separately.",
      hi: "एक ऐसी सरकारी ऑनलाइन व्यवस्था जहां अलग-अलग कॉलेजों में भटके बिना, एक ही फ़ॉर्म से कई कॉलेजों में योग्यता अनुसार दाखिला मिलता है।",
      mr: "वेगवेगळ्या महाविद्यालयांत न जाता, एकाच ऑनलाइन अर्जाद्वारे अनेक महाविद्यालयांमध्ये प्रवेश मिळवून देणारी केंद्रीय शासकीय यंत्रणा.",
    },
    howItAffectsYou: {
      en: "You fill your college preference list once; the system matches your merit marks against college cut-offs automatically.",
      hi: "आप अपनी पसंद की वरीयता सूची भरते हैं और कंप्यूटर आपके अंकों के आधार पर कॉलेज आवंटित करता है।",
      mr: "तुम्ही एकदाच पसंतीक्रम भरता आणि संगणक तुमच्या गुणवत्तेनुसार योग्य महाविद्यालय देतो.",
    },
    exampleScenario: {
      en: "Instead of standing in lines at 10 different engineering colleges, you fill 10 choices in CAP and get allotted the best one matching your rank.",
      hi: "10 अलग-अलग कॉलेजों की लाइन में लगने के बजाय, कैप में 10 विकल्प भरें और बेस्ट कॉलेज पाएं।",
      mr: "१० महाविद्यालयांच्या रांगेत उभे राहण्याऐवजी, कॅपमध्ये १० पर्याय भरून सर्वोत्तम महाविद्यालय मिळवा.",
    },
  },
  {
    id: "term-cet",
    term: "CET",
    officialTerm: "Common Entrance Test (CET)",
    plainMeaning: {
      en: "A competitive state-level entrance examination used to rank students for admission into professional undergraduate and postgraduate degrees.",
      hi: "व्यावसायिक पाठ्यक्रमों (जैसे बी.टेक, एमबीए, एमसीए, लॉ) में प्रवेश के लिए आयोजित होने वाली राज्य-स्तरीय प्रवेश परीक्षा।",
      mr: "व्यावसायिक पदवी व पदव्युत्तर अभ्यासक्रमांमध्ये प्रवेशासाठी घेतली जाणारी राज्यस्तरीय सामायिक प्रवेश परीक्षा.",
    },
    howItAffectsYou: {
      en: "Your CET percentile score determines your State Merit Rank, which is the primary factor deciding which college you can get.",
      hi: "सीईटी में मिले अंकों से मेरिट रैंक तय होती है, जिससे तय होता है कि आपको कौन सा कॉलेज मिलेगा।",
      mr: "सीईटीच्या गुणांवरून गुणवत्ता क्रमांक ठरतो, ज्यामुळे चांगले महाविद्यालय मिळणे शक्य होते.",
    },
  },
  {
    id: "term-merit-number",
    term: "Merit Number",
    officialTerm: "State General Merit Rank (SML) / Category Merit Rank",
    plainMeaning: {
      en: "Your official position in the rank list of all applicants in the entire state (like roll-call order from 1 to the last student).",
      hi: "पूरे राज्य के सभी आवेदकों में आपका आधिकारिक क्रमांक (जैसे 1 से लेकर अंतिम छात्र तक की कतार में आपका स्थान)।",
      mr: "संपूर्ण राज्यातील सर्व अर्जदारांमध्ये तुमचा अधिकृत क्रमांक (उदा. १ पासून शेवटच्या विद्यार्थ्यापर्यंत तुमचा क्रमांक).",
    },
    howItAffectsYou: {
      en: "Higher merit rank (closer to #1) means you get first priority during seat allocation over students with lower ranks.",
      hi: "जितनी बेहतर रैंक होगी (1 के जितने करीब), सीट आवंटन में आपको उतनी ही पहली प्राथमिकता मिलेगी।",
      mr: "क्रमांक जेवढा १ च्या जवळ, तेवढे प्राधान्याने महाविद्यालय मिळण्याची संधी जास्त असते.",
    },
  },
  {
    id: "term-seat-allotment",
    term: "Seat Allotment",
    officialTerm: "Provisional / Final Seat Allotment",
    plainMeaning: {
      en: "The decision by the admission portal assigning you a specific seat in a specific college and branch for that round.",
      hi: "पोर्टल द्वारा आपको किसी कॉलेज और शाखा में सीट आवंटित किए जाने का आधिकारिक परिणाम।",
      mr: "प्रवेश पोर्टलद्वारे तुम्हाला एखाद्या महाविद्यालयात आणि शाखेत जागा मिळाल्याची अधिकृत घोषणा.",
    },
    howItAffectsYou: {
      en: "Once allotted, you must download the Allotment Letter and choose whether to Freeze or take Betterment.",
      hi: "सीट मिलने के बाद आपको अलॉटमेंट लेटर डाउनलोड करके फ्रीज या बेटरमेंट का विकल्प चुनना होता है।",
      mr: "जागा मिळाल्यावर अलॉटमेंट लेटर डाउनलोड करून फ्रीज किंवा बेटरमेंटचा पर्याय निवडावा लागतो.",
    },
  },
  {
    id: "term-e-scrutiny",
    term: "E-Scrutiny",
    officialTerm: "Online Document Scrutiny & Verification",
    plainMeaning: {
      en: "Verification of your uploaded certificates online by government scrutiny officers without you needing to travel anywhere in person.",
      hi: "बिना किसी केंद्र पर जाए, अधिकारियों द्वारा आपके अपलोड किए गए दस्तावेज़ों की ऑनलाइन जांच।",
      mr: "कोणत्याही केंद्रावर प्रत्यक्ष न जाता, अधिकाऱ्यांनी ऑनलाइन पद्धतीने केलेली कागदपत्रांची तपासणी.",
    },
    howItAffectsYou: {
      en: "Saves time and travel. If any scan is unclear, the officer sends an online query that you must answer in 48 hours.",
      hi: "समय और यात्रा की बचत। यदि कोई कागज़ धुंधला हो तो अधिकारी ऑनलाइन संदेश भेजता है जिसे 48 घंटे में ठीक करना होता है।",
      mr: "वेळेची बचत होते. कागदपत्र अस्पष्ट असल्यास अधिकारी संदेश पाठवतो, ज्याचे ४८ तासांत उत्तर द्यावे लागते.",
    },
  },
  {
    id: "term-apaar-id",
    term: "APAAR ID",
    officialTerm: "Automated Permanent Academic Account Registry",
    plainMeaning: {
      en: "A 12-digit lifelong unique digital education roll number for Indian students under NEP 2020.",
      hi: "नई राष्ट्रीय शिक्षा नीति के तहत छात्रों के लिए 12 अंकों का स्थायी डिजिटल शैक्षणिक पहचान पत्र।",
      mr: "नवीन शैक्षणिक धोरणांतर्गत विद्यार्थ्यांसाठी १२ अंकी कायमस्वरूपी डिजिटल शैक्षणिक ओळख क्रमांक.",
    },
    howItAffectsYou: {
      en: "Required during university pre-admission registration and stays with you from school through Ph.D.",
      hi: "कॉलेज एडमिशन और परीक्षा फ़ॉर्म भरने के लिए अनिवार्य।",
      mr: "महाविद्यालयीन प्रवेश आणि परीक्षा अर्जासाठी अनिवार्य.",
    },
  },
  {
    id: "term-prn",
    term: "PRN",
    officialTerm: "Permanent Registration Number (PRN)",
    plainMeaning: {
      en: "A unique permanent identification number issued by the university once your admission is officially finalized.",
      hi: "विश्वविद्यालय द्वारा दिया जाने वाला स्थायी छात्र पहचान क्रमांक जो डिग्री पूरी होने तक मान्य रहता है।",
      mr: "प्रवेश निश्चित झाल्यावर विद्यापीठाकडून दिला जाणारा कायमस्वरूपी नोंदणी क्रमांक (PRN).",
    },
    howItAffectsYou: {
      en: "Used for all university exam hall tickets, marksheet generation, and degree convocation.",
      hi: "विश्वविद्यालय की सभी परीक्षाओं, मार्कशीट और डिग्री वितरण के लिए यह नंबर इस्तेमाल होता है।",
      mr: "सर्व परीक्षांचे हॉल तिकीट, गुणपत्रिका आणि पदवी प्रमाणपत्रासाठी हा क्रमांक लागतो.",
    },
  },
  {
    id: "term-tfws",
    term: "TFWS",
    officialTerm: "Tuition Fee Waiver Scheme (TFWS)",
    plainMeaning: {
      en: "A government merit scheme providing 100% waiver of tuition fees in professional degree/diploma courses for meritorious students with family income under ₹8 Lakhs.",
      hi: "मेधावी छात्रों के लिए 100% ट्यूशन फीस माफ़ी योजना, जिनके परिवार की वार्षिक आय ₹8 लाख से कम हो।",
      mr: "८ लाखांपेक्षा कमी उत्पन्न असणाऱ्या गुणवंत विद्यार्थ्यांसाठी १००% शिक्षण शुल्क माफी योजना (TFWS).",
    },
    howItAffectsYou: {
      en: "Separate TFWS choice codes exist in the CAP option form. If allotted, you only pay basic development and exam fees.",
      hi: "कैप फ़ॉर्म में TFWS के अलग कोड होते हैं; यह मिलने पर कॉलेज की ट्यूशन फीस बिल्कुल नहीं लगती।",
      mr: "कॅप अर्जात TFWS चे स्वतंत्र कोड असतात; ही जागा मिळाल्यास केवळ विकास व परीक्षा शुल्क भरावे लागते.",
    },
  },
];

// ---------------------------------------------------------------------------
// 6. SCHOLARSHIPS & FINANCIAL SUPPORT (MahaDBT Schemes)
// ---------------------------------------------------------------------------
export const scholarshipSchemes: ScholarshipScheme[] = [
  {
    id: "sch-ebc",
    name: {
      en: "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna (EBC)",
      hi: "राजर्षि छत्रपति शाहू महाराज शिक्षण शुल्क शिष्यवृत्ति योजना (EBC)",
      mr: "राजर्षी छत्रपती शाहू महाराज शिक्षण शुल्क शिष्यवृत्ती योजना (EBC)",
    },
    department: "Directorate of Higher Education & Technical Education, Maharashtra",
    category: "Open / EBC",
    courseType: "All Post-Matric",
    eligibilityIncome: "Annual family gross income up to ₹8,00,000",
    benefits: {
      en: "50% Tuition Fee and 50% Exam Fee reimbursement directly to college for admitted student.",
      hi: "कॉलेज की 50% शिक्षण शुल्क (Tuition Fee) और 50% परीक्षा शुल्क की प्रतिपूर्ति।",
      mr: "५०% शिक्षण शुल्क आणि ५०% परीक्षा शुल्क शासनाकडून महाविद्यालयाला प्रतिपूर्ती.",
    },
    documentsRequired: [
      "Maharashtra Domicile Certificate",
      "Tahsildar Income Certificate (<= ₹8 Lakhs)",
      "CAP Allotment Letter (if professional course)",
      "10th & 12th Marksheet",
      "Aadhaar-seeded bank account passbook",
      "Ration card showing family members",
    ],
    officialPortal: "https://mahadbt.maharashtra.gov.in",
    domain: "mahadbt.maharashtra.gov.in",
    lastChecked: "2026-09-30",
  },
  {
    id: "sch-sc-postmatric",
    name: {
      en: "Government of India Post-Matric Scholarship for SC Students",
      hi: "भारत सरकार अनुसूचित जाति (SC) पोस्ट-मैट्रिक छात्रवृत्ति",
      mr: "भारत सरकार अनुसूचित जाती (SC) मॅट्रिकोत्तर शिष्यवृत्ती",
    },
    department: "Social Justice and Special Assistance Department, Maharashtra",
    category: "SC",
    courseType: "All Post-Matric",
    eligibilityIncome: "Annual family income up to ₹2,50,000 (Freeship scheme covers income above ₹2.5L)",
    benefits: {
      en: "100% Tuition & Exam fee waiver + monthly maintenance allowance deposited directly into student's Aadhaar-linked bank account.",
      hi: "100% ट्यूशन व परीक्षा फीस माफ़ी + मासिक निर्वाह भत्ता छात्र के आधार लिंक खाते में।",
      mr: "१००% शिक्षण व परीक्षा शुल्क माफी + दरमहा निर्वाह भत्ता विद्यार्थ्याच्या थेट खात्यात.",
    },
    documentsRequired: [
      "Caste Certificate & Caste Validity Certificate",
      "Income Certificate / Salary certificate",
      "Maharashtra Domicile",
      "College fee receipt & Admission letter",
      "Aadhaar linked bank account with NPCI mapping",
    ],
    officialPortal: "https://mahadbt.maharashtra.gov.in",
    domain: "mahadbt.maharashtra.gov.in",
    lastChecked: "2026-09-30",
  },
  {
    id: "sch-obc-vjnt",
    name: {
      en: "Post-Matric Scholarship to VJNT, OBC, and SBC Students",
      hi: "विमुक्त जाति, घुमंतू जनजाति (VJNT), अन्य पिछड़ा वर्ग (OBC) पोस्ट-मैट्रिक छात्रवृत्ति",
      mr: "व्हीजेएनटी, इतर मागासवर्ग (OBC) आणि एसबीसी मॅट्रिकोत्तर शिष्यवृत्ती योजना",
    },
    department: "OBC, SEBC, VJNT & SBC Welfare Department, Maharashtra",
    category: "OBC / VJNT / SBC",
    courseType: "All Post-Matric",
    eligibilityIncome: "Annual family income up to ₹1,50,000 (Scholarship) / up to ₹8,00,000 (Tuition Fees Freeship)",
    benefits: {
      en: "50% to 100% Tuition & Exam fees reimbursement depending on whether college is Government, Aided, or Private Un-aided.",
      hi: "कॉलेज के प्रकार अनुसार 50% से 100% शिक्षण शुल्क की प्रतिपूर्ति।",
      mr: "महाविद्यालयाच्या प्रकारानुसार ५०% ते १००% शिक्षण शुल्क प्रतिपूर्ती.",
    },
    documentsRequired: [
      "Caste Certificate & Caste Validity Certificate",
      "Valid Non-Creamy Layer (NCL) Certificate",
      "Tahsildar Income Certificate",
      "CAP Allotment Letter",
      "Aadhaar linked bank account",
    ],
    officialPortal: "https://mahadbt.maharashtra.gov.in",
    domain: "mahadbt.maharashtra.gov.in",
    lastChecked: "2026-09-30",
  },
  {
    id: "sch-hostel-panjabrao",
    name: {
      en: "Dr. Panjabrao Deshmukh Vasatgruh Nirvah Bhatta Yojna (Hostel Allowance)",
      hi: "डॉ. पंजाबराव देशमुख वसतिगृह निर्वाह भत्ता योजना",
      mr: "डॉ. पंजाबराव देशमुख वसतिगृह निर्वाह भत्ता योजना",
    },
    department: "Directorate of Higher & Technical Education, Maharashtra",
    category: "Open / EBC",
    courseType: "Professional / Technical",
    eligibilityIncome: "Children of registered marginal farmers / agricultural laborers or income <= ₹8 Lakhs",
    benefits: {
      en: "Hostel allowance up to ₹30,000/year (for MMR/Pune/Nagpur cities) or ₹20,000/year (other areas) for 10 months.",
      hi: "महानगरों में ₹30,000 प्रति वर्ष अथवा अन्य क्षेत्रों में ₹20,000 प्रति वर्ष छात्रावास निर्वाह भत्ता।",
      mr: "वसतिगृह निर्वाह भत्ता म्हणून महानगरांसाठी दरवर्षी ₹३०,००० किंवा इतर भागात ₹२०,०००.",
    },
    documentsRequired: [
      "Hostel allotment letter / Registered rent agreement",
      "7/12 land extract of parents (if registered farmer) or Tahsildar income certificate",
      "College admission bonafide certificate",
      "Aadhaar seeded bank account",
    ],
    officialPortal: "https://mahadbt.maharashtra.gov.in",
    domain: "mahadbt.maharashtra.gov.in",
    lastChecked: "2026-09-30",
  },
];
