/**
 * Central dataset for KaamKaagaz.
 *
 * ACCURACY RULES
 * - officialNotes may only contain statements verified from official sources.
 * - Format & preparation details reflect official portal instructions (Protean/UTIITSL, Passport Seva, Aaple Sarkar).
 * - Everything in explanation / purpose is plain-language civic guidance.
 */

export interface LocalizedString {
  en: string;
  hi: string;
  mr: string;
}

export interface LocalizedList {
  en: string[];
  hi: string[];
  mr: string[];
}

export interface DocumentFormatAndPrep {
  submission: LocalizedString;
  selfAttestation: LocalizedString;
  digitalCopy: LocalizedString;
  fileFormat: LocalizedString;
  validityOrRecentness?: LocalizedString;
  whatIfMissing?: LocalizedString;
  importantNotes?: LocalizedString;
}

export interface DocumentRequirement {
  id: string;
  name: string;
  shortDescription: string;
  explanation: string;
  purpose?: string;
  examples: string[];
  officialNotes?: string;
  situationIds?: string[];
  formatAndPreparation?: DocumentFormatAndPrep;
  localized?: {
    name: LocalizedString;
    shortDescription: LocalizedString;
    explanation: LocalizedString;
    purpose?: LocalizedString;
    examples: LocalizedList;
  };
}

export interface OfficialSource {
  name: string;
  url: string;
  more?: { name: string; url: string }[];
}

export interface Situation {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  applicableDocIds?: string[];
  notes?: LocalizedString;
}

export interface FeeItem {
  item: LocalizedString;
  amount: string;
  verifiedSource: string;
}

export interface CommonMistake {
  mistake: LocalizedString;
  howToAvoid: LocalizedString;
}

export interface FAQ {
  question: LocalizedString;
  answer: LocalizedString;
}

export interface ProcessStep {
  title: string;
  description: string;
  localized?: {
    title: LocalizedString;
    description: LocalizedString;
  };
}

export interface Process {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  keywords?: string[];
  localizedTitle?: LocalizedString;
  localizedCategory?: LocalizedString;
  localizedDescription?: LocalizedString;
  scopeNote?: string;
  localizedScopeNote?: LocalizedString;
  examplesConfirmedOfficial: boolean;
  lastChecked: string;
  whoCanApply?: LocalizedString;
  eligibility?: LocalizedList;
  situations?: Situation[];
  documents: DocumentRequirement[];
  steps: ProcessStep[];
  fees?: FeeItem[];
  timelines?: {
    overall: LocalizedString;
    details: LocalizedString;
  };
  commonMistakes?: CommonMistake[];
  faqs?: FAQ[];
  officialSource: OfficialSource;
}

export const processes: Process[] = [
  {
    id: "pan",
    slug: "pan-card",
    title: "PAN Card",
    category: "Identity & Tax",
    description: "A 10-digit Permanent Account Number issued by the Income Tax Department, essential for banking, investments, and filing taxes.",
    localizedTitle: {
      en: "PAN Card",
      hi: "पैन कार्ड (PAN Card)",
      mr: "पॅन कार्ड (PAN Card)",
    },
    localizedCategory: {
      en: "Identity & Tax",
      hi: "पहचान व कर (Identity & Tax)",
      mr: "ओळख आणि कर (Identity & Tax)",
    },
    localizedDescription: {
      en: "A 10-digit Permanent Account Number issued by the Income Tax Department, essential for banking, investments, and filing taxes.",
      hi: "आयकर विभाग द्वारा जारी 10 अंकों का स्थायी खाता संख्या, जो बैंक खाता खोलने, लेन-देन और टैक्स के लिए अनिवार्य है।",
      mr: "प्राप्तीकर खात्यातर्फे दिले जाणारे 10 अंकी पर्मनंट अकाउंट नंबर, जे बँक खाते उघडण्यासाठी आणि आर्थिक व्यवहारांसाठी आवश्यक असते.",
    },
    keywords: [
      "pan", "pan card", "permanent account number", "tax", "income tax", "49a", "protean", "nsdl", "utiitsl",
      "पैन", "पैन कार्ड", "टैक्स", "आयकर", "फॉर्म 49ए",
      "पॅन", "पॅन कार्ड", "प्राप्तीकर", "फॉर्म ४९ए"
    ],
    scopeNote: "This guide covers an individual who is an Indian citizen (Form 49A). Non-resident Indians and corporate entities have different forms.",
    localizedScopeNote: {
      en: "This guide covers an individual who is an Indian citizen applying under Form 49A. Minors can apply through a parent/guardian.",
      hi: "यह मार्गदर्शिका भारतीय नागरिक (फॉर्म 49A) के व्यक्तिगत आवेदन के लिए है। नाबालिगों के लिए माता-पिता प्रतिनिधि बन सकते हैं।",
      mr: "ही मार्गदर्शिका भारतीय नागरिकांसाठी (फॉर्म 49A) आहे. अल्पवयीन मुलांसाठी पालक प्रतिनिधी म्हणून अर्ज करू शकतात.",
    },
    examplesConfirmedOfficial: true,
    lastChecked: "2026-09-30",
    whoCanApply: {
      en: "Any Indian citizen of any age. Minors can apply through parents/guardians.",
      hi: "कोई भी भारतीय नागरिक। नाबालिगों के लिए माता-पिता या अभिभावक आवेदन कर सकते हैं।",
      mr: "कोणताही भारतीय नागरिक. अल्पवयीन मुलांसाठी त्यांचे पालक अर्ज करू शकतात.",
    },
    eligibility: {
      en: [
        "Must be an Indian citizen or resident.",
        "Individual must not already hold an active PAN card (holding more than one PAN is illegal under Section 272B).",
      ],
      hi: [
        "भारत का नागरिक या निवासी होना चाहिए।",
        "आवेदक के पास पहले से कोई सक्रिय पैन कार्ड नहीं होना चाहिए (दो पैन रखना क़ानूनन अपराध है)।",
      ],
      mr: [
        "भारतीय नागरिक असणे आवश्यक आहे.",
        "अर्जदाराकडे आधीपासून दुसरा पॅन कार्ड नसावा (दोन पॅन कार्ड बाळगणे कायद्याने गुन्हा आहे).",
      ],
    },
    situations: [
      {
        id: "new-adult",
        name: {
          en: "New PAN Card (Adult)",
          hi: "नया पैन कार्ड (वयस्क 18+)",
          mr: "नवीन पॅन कार्ड (वय 18+)",
        },
        description: {
          en: "First-time application for an Indian citizen aged 18 or above.",
          hi: "18 वर्ष या उससे अधिक आयु के भारतीय नागरिक का पहली बार आवेदन।",
          mr: "18 वर्षे किंवा त्याहून अधिक वयाच्या भारतीय नागरिकाचा पहिला अर्ज.",
        },
        applicableDocIds: ["identity-proof", "address-proof", "date-of-birth-proof", "photograph"],
        notes: {
          en: "If Aadhaar has your updated phone number, you can complete the entire application online paperlessly via Aadhaar OTP (e-KYC).",
          hi: "यदि आधार से मोबाइल नंबर लिंक है, तो आप ओटीपी (e-KYC) द्वारा बिना कोई कागज़ भेजे पूरा आवेदन ऑनलाइन कर सकते हैं।",
          mr: "जर आधार कार्डला मोबाईल नंबर जोडलेला असेल, तर तुम्ही ओटीपीद्वारे संपूर्ण अर्ज कागदपत्रांशिवाय ऑनलाइन करू शकता.",
        },
      },
      {
        id: "new-minor",
        name: {
          en: "Minor PAN Card (Under 18)",
          hi: "नाबालिग का पैन कार्ड (18 से कम)",
          mr: "अल्पवयीन मुलांचे पॅन कार्ड (वय 18 पेक्षा कमी)",
        },
        description: {
          en: "Application for children or minors below 18 years of age.",
          hi: "18 वर्ष से कम उम्र के बच्चों के लिए आवेदन।",
          mr: "18 वर्षांखालील मुलांसाठी आवश्यक असणारा अर्ज.",
        },
        applicableDocIds: ["identity-proof", "address-proof", "date-of-birth-proof", "representative-proof", "photograph"],
        notes: {
          en: "A parent or guardian signs as representative assessee. The minor's photograph is not printed on the minor PAN; only signature of parent appears.",
          hi: "माता-पिता प्रतिनिधि के रूप में हस्ताक्षर करते हैं। नाबालिग के पैन कार्ड पर फोटो की जगह केवल हस्ताक्षर आते हैं।",
          mr: "पालक प्रतिनिधी म्हणून स्वाक्षरी करतात. अल्पवयीन पॅन कार्डवर फोटो छापला जात नाही.",
        },
      },
      {
        id: "reprint-correction",
        name: {
          en: "Correction / Reprint in Existing PAN",
          hi: "पैन में सुधार / खोया हुआ कार्ड दोबारा पाना",
          mr: "पॅनमध्ये दुरुस्ती / हरवलेले कार्ड पुन्हा मिळवणे",
        },
        description: {
          en: "Updating name, DOB, address, or re-ordering a lost/damaged physical card.",
          hi: "नाम, जन्मतिथि या पते में सुधार करना या गुम हो चुका कार्ड फिर से मंगवाना।",
          mr: "नाव, जन्मतारीख किंवा पत्ता दुरुस्त करणे किंवा हरवलेले कार्ड पुन्हा मागवणे.",
        },
        applicableDocIds: ["identity-proof", "address-proof", "date-of-birth-proof", "photograph"],
        notes: {
          en: "Submit proof of PAN (copy of existing PAN card or FIR/allotment letter) along with proof for the change requested.",
          hi: "पुराने पैन कार्ड की कॉपी या अलॉटमेंट लेटर और जिस जानकारी को बदलना है उसका वैध प्रमाण साथ लगाएं।",
          mr: "जुन्या पॅन कार्डची प्रत आणि ज्या माहितीमध्ये बदल करायचा आहे त्याचा पुरावा सोबत जोडावा लागतो.",
        },
      },
    ],
    documents: [
      {
        id: "identity-proof",
        name: "Identity proof",
        shortDescription: "A document that officially proves who you are.",
        explanation: "An identity proof confirms that you are the real individual making the application. It must bear your full name exactly as filled on the form.",
        purpose: "So the Income Tax Department can verify your identity and prevent duplicate or fraudulent records.",
        examples: [
          "Aadhaar card issued by UIDAI",
          "Voter Identity Card (EPIC)",
          "Driving Licence",
          "Passport",
          "Arm's Licence",
          "Photo ID card issued by Central/State Government or PSU",
        ],
        officialNotes: "The name on your identity proof must match the name on your application letter-for-letter (Protean/UTIITSL instructions).",
        formatAndPreparation: {
          submission: {
            en: "Original for verification (if physical), or self-attested photocopy, or digital e-KYC via Aadhaar OTP.",
            hi: "सत्यापन के लिए मूल प्रति (ऑफ़लाइन होने पर), या स्व-हस्ताक्षरित फोटोकॉपी, अथवा आधार OTP द्वारा पेपरलेस।",
            mr: "पडताळणीसाठी मूळ प्रत, किंवा स्वाक्षरी केलेली छायाप्रत, किंवा आधार ओटीपीद्वारे डिजिटल.",
          },
          selfAttestation: {
            en: "Mandatory on photocopy if submitting physical application acknowledgment.",
            hi: "यदि डाक द्वारा कागज़ात भेज रहे हैं, तो फोटोकॉपी पर हस्ताक्षर (स्व-प्रमाणन) अनिवार्य है।",
            mr: "जर कागदपत्रे टपालाने पाठवत असाल, तर झेरॉक्सवर स्वतःची स्वाक्षरी असणे बंधनकारक आहे.",
          },
          digitalCopy: {
            en: "Accepted online via Aadhaar paperless mode or clear scanned upload.",
            hi: "ऑनलाइन आवेदन में आधार e-KYC या साफ़ स्कैन कॉपी स्वीकार्य है।",
            mr: "ऑनलाइन अर्जामध्ये आधार e-KYC किंवा स्पष्ट स्कॅन प्रत स्वीकारली जाते.",
          },
          fileFormat: {
            en: "PDF or JPEG (200-300 DPI, file size under 2 MB if uploading).",
            hi: "PDF या JPEG (200-300 DPI, फ़ाइल साइज़ 2 MB से कम)।",
            mr: "PDF किंवा JPEG (200-300 DPI, फाइल आकार 2 MB पेक्षा कमी).",
          },
          validityOrRecentness: {
            en: "Must be currently valid and not expired at the time of submission.",
            hi: "आवेदन के समय दस्तावेज़ वैध होना चाहिए और उसकी मियाद समाप्त नहीं होनी चाहिए।",
            mr: "अर्ज करताना कागदपत्राची वैधता संपलेली नसावी.",
          },
          whatIfMissing: {
            en: "If you lack Aadhaar or Voter ID, an official Certificate of Identity signed by a Gazetted Officer, MP, or MLA on the prescribed Annexure-A format is officially accepted.",
            hi: "यदि आधार या वोटर आईडी नहीं है, तो राजपत्रित अधिकारी (Gazetted Officer), सांसद या विधायक द्वारा हस्ताक्षरित पहचान प्रमाण पत्र (Annexure-A) मान्य है।",
            mr: "आधार किंवा मतदार ओळखपत्र नसल्यास, राजपत्रित अधिकारी किंवा आमदाराने दिलेले ओळख प्रमाणपत्र (Annexure-A) चालते.",
          },
          importantNotes: {
            en: "Ensure initials or spelling in the name match your Aadhaar record. Even a single letter mismatch will pause processing.",
            hi: "सुनिश्चित करें कि नाम की स्पेलिंग आधार के रिकॉर्ड से अक्षरशः मिलती हो। एक अक्षर का भी अंतर आवेदन रोक सकता है।",
            mr: "नावाचे स्पेलिंग आधार कार्डाशी तंतोतंत जुळत असल्याची खात्री करा.",
          },
        },
        localized: {
          name: {
            en: "Identity proof",
            hi: "पहचान प्रमाण (Identity proof)",
            mr: "ओळखीचा पुरावा (Identity proof)",
          },
          shortDescription: {
            en: "A document that officially proves who you are.",
            hi: "एक आधिकारिक दस्तावेज़ जिससे आपकी पहचान सिद्ध होती है।",
            mr: "तुमची खरी ओळख सिद्ध करणारे अधिकृत कागदपत्र.",
          },
          explanation: {
            en: "An identity proof confirms that you are the real individual making the application. It must bear your full name exactly as filled on the form.",
            hi: "पहचान प्रमाण यह पुष्टि करता है कि आप वही वास्तविक व्यक्ति हैं जो आवेदन कर रहे हैं। इस पर आपका नाम आवेदन से पूरी तरह मेल खाना चाहिए।",
            mr: "ओळखीचा पुरावा हे सिद्ध करतो की अर्ज करणारी व्यक्ती खरी आहे. यावरील नाव अर्जातील नावाशी जुळले पाहिजे.",
          },
          purpose: {
            en: "So the Income Tax Department can confirm the application belongs to a real person and prevent identity duplication.",
            hi: "ताकि आयकर विभाग यह सुनिश्चित कर सके कि आवेदन किसी असली व्यक्ति का है और गलत नाम से कोई कार्ड न बने।",
            mr: "प्राप्तीकर खात्याला अर्जदाराची खरी ओळख पडताळता यावी यासाठी.",
          },
          examples: {
            en: [
              "Aadhaar card issued by UIDAI",
              "Voter Identity Card (EPIC)",
              "Driving Licence",
              "Passport",
              "Photo ID card issued by Central/State Government or PSU",
            ],
            hi: [
              "यूआईडीएआई (UIDAI) द्वारा जारी आधार कार्ड",
              "मतदाता पहचान पत्र (वोटर आईडी)",
              "ड्राइविंग लाइसेंस",
              "पासपोर्ट",
              "केंद्र/राज्य सरकार द्वारा जारी फोटो पहचान पत्र",
            ],
            mr: [
              "आधार कार्ड (UIDAI द्वारे जारी)",
              "मतदार ओळखपत्र (Voter ID)",
              "वाहन चालक परवाना (Driving Licence)",
              "पासपोर्ट",
              "शासकीय फोटो ओळखपत्र",
            ],
          },
        },
      },
      {
        id: "address-proof",
        name: "Address proof",
        shortDescription: "A document showing where your physical PAN card will be delivered.",
        explanation: "An address proof shows your current residential location. The physical PAN card and any official tax intimations will be dispatched to this address.",
        purpose: "So your PAN card and any communication from the department reaches your hands safely.",
        examples: [
          "Aadhaar card",
          "Voter Identity Card",
          "Driving Licence",
          "Passport",
          "Electricity bill (not older than 3 months)",
          "Water bill (not older than 3 months)",
          "Bank account statement or passbook showing address and recent transaction (within 3 months)",
          "Consumer gas connection card or piped gas bill (not older than 3 months)",
          "Latest property tax assessment order",
        ],
        officialNotes: "Utility bills and bank statements must not be older than 3 months from the date of application (Protean instructions).",
        formatAndPreparation: {
          submission: {
            en: "Original for verification (if physical), or self-attested photocopy, or digital e-KYC.",
            hi: "स्व-हस्ताक्षरित फोटोकॉपी या ऑनलाइन आधार e-KYC।",
            mr: "स्वाक्षरी केलेली छायाप्रत किंवा ऑनलाइन आधार e-KYC.",
          },
          selfAttestation: {
            en: "Required on photocopy for physical application.",
            hi: "फोटोकॉपी पर स्वयं हस्ताक्षर करना अनिवार्य है।",
            mr: "छायाप्रतीवर स्वतःची स्वाक्षरी करणे आवश्यक आहे.",
          },
          digitalCopy: {
            en: "Accepted online via Aadhaar paperless submission.",
            hi: "आधार आधारित पेपरलेस सबमिशन में डिजिटल कॉपी मान्य है।",
            mr: "आधार आधारित ऑनलाइन सबमिशनमध्ये डिजिटल प्रत मान्य आहे.",
          },
          fileFormat: {
            en: "PDF or JPEG (under 2 MB, clear address readable).",
            hi: "PDF या JPEG (साफ़ पठनीय, 2 MB से कम)।",
            mr: "PDF किंवा JPEG (स्पष्ट वाचता येईल अशी, 2 MB पेक्षा कमी).",
          },
          validityOrRecentness: {
            en: "Utility bills (electricity, water, gas) and bank statements must be less than 3 months old.",
            hi: "बिजली, पानी, गैस का बिल या बैंक स्टेटमेंट 3 महीने से अधिक पुराना नहीं होना चाहिए।",
            mr: "वीज बिल, पाणी बिल किंवा बँक पासबुक ३ महिन्यांपेक्षा जुने नसावे.",
          },
          whatIfMissing: {
            en: "If you live in rented accommodation, an official certificate of address signed by a Gazetted Officer, MP, MLA, or Municipal Councillor on Annexure-B can be used.",
            hi: "यदि किराए पर रहते हैं और अपने नाम का बिल नहीं है, तो पार्षद, विधायक या राजपत्रित अधिकारी द्वारा Annexure-B पर हस्ताक्षरित प्रमाण पत्र मान्य है।",
            mr: "स्वतःच्या नावाचा पत्ता पुरावा नसल्यास नगरसेवक किंवा राजपत्रित अधिकाऱ्याचे पत्ता प्रमाणपत्र (Annexure-B) चालते.",
          },
          importantNotes: {
            en: "Provide a complete PIN code. Incorrect PIN codes delay postal delivery by India Post.",
            hi: "पिन कोड सही लिखें। गलत पिन कोड से स्पीड पोस्ट की डिलीवरी अटक जाती है।",
            mr: "पिन कोड अचूक टाका, अन्यथा स्पीड पोस्टने कार्ड मिळण्यास उशीर होतो.",
          },
        },
        localized: {
          name: {
            en: "Address proof",
            hi: "पते का प्रमाण (Address proof)",
            mr: "पत्त्याचा पुरावा (Address proof)",
          },
          shortDescription: {
            en: "A document showing where your physical PAN card will be delivered.",
            hi: "एक दस्तावेज़ जो यह बताता है कि आपका पैन कार्ड किस पते पर भेजा जाएगा।",
            mr: "तुमचा पॅन कार्ड पोस्टाने कोणत्या पत्त्यावर पाठवायचा याचा पुरावा.",
          },
          explanation: {
            en: "An address proof shows your current residential location. The physical PAN card will be dispatched here.",
            hi: "पते का प्रमाण यह साबित करता है कि आप वर्तमान में कहाँ रहते हैं। आपका भौतिक पैन कार्ड इसी पते पर डाक द्वारा भेजा जाएगा।",
            mr: "पत्त्याचा पुरावा तुम्ही सध्या कुठे राहता हे दर्शवतो. तुमचे छापील पॅन कार्ड याच पत्त्यावर पोस्टाने पाठवले जाते.",
          },
          purpose: {
            en: "So your PAN card and postal letters arrive at the correct address.",
            hi: "ताकि आपका पैन कार्ड सही डाक पते पर सुरक्षित पहुँच सके।",
            mr: "पॅन कार्ड आणि अधिकृत पत्रव्यवहार योग्य पत्त्यावर सुरक्षित पोहोचण्यासाठी.",
          },
          examples: {
            en: [
              "Aadhaar card",
              "Voter ID card",
              "Driving Licence",
              "Passport",
              "Electricity bill (within last 3 months)",
              "Bank passbook with recent transaction (within last 3 months)",
            ],
            hi: [
              "आधार कार्ड",
              "मतदाता पहचान पत्र (वोटर आईडी)",
              "ड्राइविंग लाइसेंस",
              "पासपोर्ट",
              "बिजली का बिल (3 महीने से पुराना न हो)",
              "बैंक पासबुक / स्टेटमेंट (हालिया 3 महीने का)",
            ],
            mr: [
              "आधार कार्ड",
              "मतदार ओळखपत्र",
              "वाहन चालक परवाना",
              "पासपोर्ट",
              "वीज बिल (गेल्या ३ महिन्यांतील)",
              "बँक पासबुक (गेल्या ३ महिन्यांतील नोंदीसह)",
            ],
          },
        },
      },
      {
        id: "date-of-birth-proof",
        name: "Date of birth proof",
        shortDescription: "An official record confirming your exact birth date.",
        explanation: "A date of birth proof confirms your day, month, and year of birth. This date is permanently linked with your PAN record and verified against government registers.",
        purpose: "To register your exact birth date in the tax system and avoid duplicate records.",
        examples: [
          "Aadhaar card showing full DD/MM/YYYY date of birth",
          "Birth certificate issued by Municipal Authority or Registrar of Births and Deaths",
          "Matriculation (10th standard) certificate or marksheet showing date of birth",
          "Passport",
          "Driving Licence",
          "Pension payment order",
        ],
        officialNotes: "If using Aadhaar, ensure your Aadhaar card shows full DD/MM/YYYY format, not just birth year (Protean guidelines).",
        formatAndPreparation: {
          submission: {
            en: "Original for verification (if physical), or self-attested photocopy, or digital e-KYC.",
            hi: "स्व-हस्ताक्षरित फोटोकॉपी या ऑनलाइन e-KYC।",
            mr: "स्वाक्षरी केलेली प्रत किंवा ऑनलाइन e-KYC.",
          },
          selfAttestation: {
            en: "Required on photocopy.",
            hi: "फोटोकॉपी पर हस्ताक्षर आवश्यक है।",
            mr: "छायाप्रतीवर सही आवश्यक आहे.",
          },
          digitalCopy: {
            en: "Accepted.",
            hi: "स्वीकार्य है।",
            mr: "स्वीकार्य आहे.",
          },
          fileFormat: {
            en: "PDF or JPEG (under 2 MB).",
            hi: "PDF या JPEG (2 MB से कम)।",
            mr: "PDF किंवा JPEG (2 MB पेक्षा कमी).",
          },
          validityOrRecentness: {
            en: "The birth date must explicitly match the day, month, and year entered on the application form.",
            hi: "दिन, माह और वर्ष आवेदन पत्र से पूर्णतः मेल खाना चाहिए।",
            mr: "तारीख, महिना आणि वर्ष अर्जातील माहितीशी तंतोतंत जुळले पाहिजे.",
          },
          whatIfMissing: {
            en: "If you don't have a birth certificate, 10th marksheet or Aadhaar showing full date of birth is the most common alternative.",
            hi: "यदि जन्म प्रमाण पत्र नहीं है, तो 10वीं की मार्कशीट या आधार कार्ड सबसे सुलभ विकल्प है।",
            mr: "जन्म दाखला नसल्यास १० वी चे गुणपत्रक किंवा आधार कार्ड सहज वापरता येते.",
          },
          importantNotes: {
            en: "Old Aadhaar cards showing only year of birth (e.g. 'Birth Year: 1995') must be updated online first on UIDAI portal before using for PAN.",
            hi: "जिन पुराने आधार कार्डों पर केवल जन्म का साल लिखा है, उन्हें पहले UIDAI पोर्टल से अपडेट करा लें।",
            mr: "ज्या जुन्या आधार कार्डवर फक्त जन्मवर्ष आहे, ते आधी UIDAI वर जाऊन पूर्ण तारखेसह अपडेट करा.",
          },
        },
        localized: {
          name: {
            en: "Date of birth proof",
            hi: "जन्मतिथि का प्रमाण (Date of birth proof)",
            mr: "जन्मतारखेचा पुरावा (Date of birth proof)",
          },
          shortDescription: {
            en: "An official record confirming your exact birth date.",
            hi: "एक आधिकारिक अभिलेख जो आपकी जन्म की सही तारीख सिद्ध करता है।",
            mr: "तुमची अचूक जन्मतारीख सिद्ध करणारा अधिकृत पुरावा.",
          },
          explanation: {
            en: "A date of birth proof confirms your exact day, month, and year of birth.",
            hi: "जन्मतिथि का प्रमाण यह प्रमाणित करता है कि आपका जन्म किस दिन, महीने और वर्ष में हुआ था।",
            mr: "जन्मतारखेचा पुरावा तुमच्या जन्माचा दिवस, महिना आणि वर्ष अधिकृतपणे प्रमाणित करतो.",
          },
          purpose: {
            en: "So the date of birth printed on your PAN matches government records.",
            hi: "ताकि आपके पैन कार्ड पर दर्ज जन्मतिथि आधिकारिक रिकॉर्ड से मेल खाए।",
            mr: "पॅन कार्डवरील जन्मतारीख शासकीय नोंदींशी जुळवून घेण्यासाठी.",
          },
          examples: {
            en: [
              "Aadhaar card showing full DD/MM/YYYY date of birth",
              "Birth certificate from Municipal Authority",
              "10th standard certificate / marksheet showing birth date",
              "Passport",
              "Driving Licence",
            ],
            hi: [
              "आधार कार्ड (जिसमें पूरी जन्मतिथि DD/MM/YYYY लिखी हो)",
              "नगर निगम या पंचायत द्वारा जारी जन्म प्रमाण पत्र",
              "10वीं की मार्कशीट या सनद (जिसमें जन्मतिथि दर्ज हो)",
              "पासपोर्ट",
              "ड्राइविंग लाइसेंस",
            ],
            mr: [
              "आधार कार्ड (संपूर्ण जन्मतारीख DD/MM/YYYY असलेले)",
              "नगरपालिका/ग्रामपंचायतीचा जन्म दाखला",
              "१० वी ची गुणपत्रिका (जन्मतारीख नोंद असलेली)",
              "पासपोर्ट",
              "ड्रायव्हिंग लायसन्स",
            ],
          },
        },
      },
      {
        id: "photograph",
        name: "Photograph (2 copies)",
        shortDescription: "Recent passport-size colour photos of the applicant.",
        explanation: "Two identical, recent passport-size colour photographs taken against a light background with a clear front view of your face.",
        purpose: "Printed directly onto your physical PAN card for identification.",
        examples: [
          "Recent colour photo (3.5 cm x 2.5 cm)",
          "Light/white background, front facing, neutral expression",
        ],
        officialNotes: "In online paperless Aadhaar e-KYC mode, the photograph from your Aadhaar record is used automatically; no separate physical photo upload is needed (Protean).",
        formatAndPreparation: {
          submission: {
            en: "If applying paperless via Aadhaar e-KYC: Aadhaar photo is used automatically. If uploading scans: upload JPEG. If physical postal: paste 2 photos on form.",
            hi: "आधार e-KYC मोड में आधार का फोटो स्वतः लग जाता है। स्कैन अपलोड में JPEG अपलोड करें। डाक द्वारा भेजने पर फ़ॉर्म पर 2 फ़ोटो चिपकाएं।",
            mr: "आधार e-KYC मध्ये आधारवरील फोटो आपोआप येतो. ऑनलाइन स्कॅनसाठी JPEG अपलोड करा. पोस्टाने पाठवताना २ फोटो अर्जावर चिकटवा.",
          },
          selfAttestation: {
            en: "For physical forms, sign across the left photograph so signature is half on photo and half on paper. Do not sign across the face on the right photograph.",
            hi: "भौतिक फ़ॉर्म पर बाएं फ़ोटो पर तिरछा हस्ताक्षर करें (आधा फ़ोटो पर, आधा कागज़ पर)। दाएं फ़ोटो पर हस्ताक्षर न करें।",
            mr: "छापील अर्जावर डाव्या फोटोवर तिरपी सही करा (अर्धी फोटोवर, अर्धी कागदावर). उजव्या फोटोवर सही करू नका.",
          },
          digitalCopy: {
            en: "Accepted (JPEG format, 200 DPI, size 20 KB to 50 KB).",
            hi: "स्वीकार्य (JPEG, 200 DPI, 20 KB से 50 KB साइज़)।",
            mr: "स्वीकार्य (JPEG, 200 DPI, 20 KB ते 50 KB).",
          },
          fileFormat: {
            en: "JPEG / JPG (3.5 x 2.5 cm dimensions).",
            hi: "JPEG / JPG (3.5 x 2.5 सेमी)।",
            mr: "JPEG / JPG (३.५ x २.५ सेमी).",
          },
          validityOrRecentness: {
            en: "Must be taken within the last 6 months.",
            hi: "फ़ोटो पिछले 6 महीने के भीतर खींची गई होनी चाहिए।",
            mr: "फोटो मागील ६ महिन्यांच्या आतील असावा.",
          },
          whatIfMissing: {
            en: "Visit any nearby photo studio or digital centre to get 2 standard passport photos clicked with a white background.",
            hi: "किसी भी नज़दीकी फ़ोटो स्टूडियो से सफ़ेद बैकग्राउंड वाली पासपोर्ट फ़ोटो खिंचवाएं।",
            mr: "जवळच्या फोटो स्टुडिओमध्ये जाऊन पांढऱ्या बॅकग्राउंडवर पासपोर्ट फोटो काढून घ्या.",
          },
          importantNotes: {
            en: "Avoid sunglasses, tinted glasses, caps, or shadows on the face.",
            hi: "धूप का चश्मा, टोपी या चेहरे पर परछाई नहीं होनी चाहिए।",
            mr: "काळा चष्मा, टोपी किंवा चेहऱ्यावर सावली नसावी.",
          },
        },
        localized: {
          name: {
            en: "Photograph (2 copies)",
            hi: "पासपोर्ट साइज़ फ़ोटो (2 प्रतियां)",
            mr: "पासपोर्ट आकाराचे फोटो (२ प्रती)",
          },
          shortDescription: {
            en: "Recent passport-size colour photos of the applicant.",
            hi: "आवेदक की हाल ही में खींची गई पासपोर्ट साइज़ रंगीन फ़ोटो।",
            mr: "अर्जदाराचे नुकतेच काढलेले पासपोर्ट आकाराचे रंगीत फोटो.",
          },
          explanation: {
            en: "Recent passport-size photo with a white or light background.",
            hi: "हल्के या सफ़ेद बैकग्राउंड पर खींची गई ताज़ा रंगीन फ़ोटो।",
            mr: "हलक्या किंवा पांढऱ्या पार्श्वभूमीवर काढलेला नवीन रंगीत फोटो.",
          },
          purpose: {
            en: "It is printed onto your physical PAN card and stored in the tax database.",
            hi: "यह आपके पैन कार्ड पर छपती है और आपकी पहचान का मुख्य माध्यम बनती है।",
            mr: "हा फोटो तुमच्या पॅन कार्डवर छापला जातो.",
          },
          examples: {
            en: ["Recent passport-size colour photograph (3.5 cm x 2.5 cm)"],
            hi: ["हालिया पासपोर्ट साइज़ रंगीन फ़ोटो (3.5 x 2.5 सेमी)"],
            mr: ["नुकताच काढलेला रंगीत पासपोर्ट फोटो (३.५ x २.५ सेमी)"],
          },
        },
      },
      {
        id: "representative-proof",
        name: "Representative Assessee Proof (for Minors only)",
        shortDescription: "Parent or legal guardian's ID and address proof.",
        explanation: "When an application is made on behalf of a minor (under 18 years), the parent or legal guardian acts as representative assessee and provides their documents.",
        purpose: "Because a minor cannot legally sign contracts or tax documents alone.",
        situationIds: ["new-minor"],
        examples: [
          "Parent's Aadhaar Card",
          "Parent's Voter ID or Passport",
          "Legal guardianship court certificate (if guardian)",
        ],
        officialNotes: "In case of minor applicants, documents of representative assessee must be provided (Protean Rule 114).",
        formatAndPreparation: {
          submission: {
            en: "Self-attested copy of parent/guardian's ID and address proof.",
            hi: "माता-पिता/अभिभावक के पहचान व पते के प्रमाण की स्व-हस्ताक्षरित प्रति।",
            mr: "पालकांच्या ओळख आणि पत्त्याच्या पुराव्याची स्वाक्षरी केलेली प्रत.",
          },
          selfAttestation: {
            en: "Signed by parent or legal guardian.",
            hi: "माता-पिता या अभिभावक द्वारा हस्ताक्षरित।",
            mr: "पालकांची स्वाक्षरी आवश्यक.",
          },
          digitalCopy: {
            en: "Accepted.",
            hi: "स्वीकार्य।",
            mr: "स्वीकार्य.",
          },
          fileFormat: {
            en: "PDF or JPEG.",
            hi: "PDF या JPEG।",
            mr: "PDF किंवा JPEG.",
          },
          validityOrRecentness: {
            en: "Valid government-issued proof of parent.",
            hi: "माता-पिता का वैध सरकारी प्रमाण पत्र।",
            mr: "पालकांचा वैध शासकीय पुरावा.",
          },
        },
        localized: {
          name: {
            en: "Representative Assessee Proof (Minor)",
            hi: "अभिभावक का प्रमाण पत्र (नाबालिग हेतु)",
            mr: "पालक प्रतिनिधीचा पुरावा (अल्पवयीन मुलांसाठी)",
          },
          shortDescription: {
            en: "Parent or legal guardian's ID and address proof.",
            hi: "माता-पिता या क़ानूनी अभिभावक के पहचान और पते का दस्तावेज़।",
            mr: "पालकांचे ओळखपत्र आणि पत्त्याचा पुरावा.",
          },
          explanation: {
            en: "Required when applying for someone below 18 years old.",
            hi: "18 वर्ष से कम उम्र के बच्चों के पैन कार्ड के लिए माता-पिता के दस्तावेज़ लगते हैं।",
            mr: "१८ वर्षांखालील मुलांच्या पॅन कार्डसाठी पालकांचे पुरावे जोडावे लागतात.",
          },
          purpose: {
            en: "Minors cannot legally sign tax declarations on their own.",
            hi: "नाबालिग स्वयं क़ानूनी घोषणापत्र पर हस्ताक्षर नहीं कर सकते।",
            mr: "अल्पवयीन व्यक्ती स्वतः स्वाक्षरी करू शकत नाही म्हणून पालकांची स्वाक्षरी लागते.",
          },
          examples: {
            en: ["Parent's Aadhaar card", "Parent's Voter ID", "Parent's Passport"],
            hi: ["माता-पिता का आधार कार्ड", "माता-पिता का वोटर आईडी", "माता-पिता का पासपोर्ट"],
            mr: ["पालकांचे आधार कार्ड", "पालकांचे मतदार ओळखपत्र", "पालकांचा पासपोर्ट"],
          },
        },
      },
    ],
    steps: [
      {
        title: "Online Application (Form 49A)",
        description: "Visit official Protean or UTIITSL portal and fill Form 49A for an Indian Citizen.",
        localized: {
          title: {
            en: "Online Application (Form 49A)",
            hi: "ऑनलाइन आवेदन (फॉर्म 49A)",
            mr: "ऑनलाइन अर्ज (फॉर्म 49A)",
          },
          description: {
            en: "Visit the official Protean or UTIITSL portal and fill Form 49A for an Indian Citizen. Choose whether you want a physical card or e-PAN.",
            hi: "अधिकृत Protean या UTIITSL पोर्टल पर जाएं और भारतीय नागरिक के लिए फॉर्म 49A भरें। चुनें कि आपको भौतिक कार्ड चाहिए या केवल e-PAN।",
            mr: "अधिकृत Protean किंवा UTIITSL पोर्टलवर जाऊन भारतीय नागरिकासाठी फॉर्म 49A भरा. छापील कार्ड हवे की फक्त e-PAN ते निवडा.",
          },
        },
      },
      {
        title: "Document Verification Mode",
        description: "Choose Paperless (Aadhaar OTP), Scanned Upload (e-Sign), or Physical Courier.",
        localized: {
          title: {
            en: "Document Verification Mode",
            hi: "दस्तावेज़ सत्यापन का तरीका चुनें",
            mr: "कागदपत्र पडताळणी पद्धत निवडा",
          },
          description: {
            en: "If your mobile is linked with Aadhaar, pick 'Submit digitally through e-KYC & e-Sign' for instant paperless process without mailing papers.",
            hi: "यदि आधार से मोबाइल लिंक है, तो 'e-KYC & e-Sign' चुनें। इसमें डाक से कोई कागज़ नहीं भेजना पड़ता।",
            mr: "जर आधारला मोबाईल लिंक असेल, तर 'e-KYC & e-Sign' निवडा. यामुळे टपालाने कागदपत्रे पाठवण्याची गरज पडत नाही.",
          },
        },
      },
      {
        title: "Fee Payment",
        description: "Pay the official statutory fee (₹107 for physical card dispatch within India).",
        localized: {
          title: {
            en: "Fee Payment",
            hi: "सरकारी शुल्क का भुगतान",
            mr: "सरकारी शुल्काचा भरणा",
          },
          description: {
            en: "Pay ₹107 securely via Net Banking, UPI, or Debit/Credit card. Note down your 15-digit Acknowledgement Number.",
            hi: "नेट बैंकिंग, यूपीआई या कार्ड से ₹107 का भुगतान करें। 15 अंकों की पावती संख्या (Acknowledgement Number) सुरक्षित रखें।",
            mr: "नेट बँकिंग, यूपीआय किंवा कार्डद्वारे ₹107 चा भरणा करा. 15 अंकी पोचपावती क्रमांक लिहून ठेवा.",
          },
        },
      },
      {
        title: "Allotment & Delivery",
        description: "PAN is generated. e-PAN arrives by email in 2-3 days; physical card delivered by Speed Post in 10-15 days.",
        localized: {
          title: {
            en: "Allotment & Delivery",
            hi: "पैन नंबर आवंटन व डिलीवरी",
            mr: "पॅन नंबर वाटप आणि वितरण",
          },
          description: {
            en: "Income Tax Department allots your PAN. Digital e-PAN is emailed within 48 hours; physical plastic card arrives via Speed Post in 10-15 working days.",
            hi: "आयकर विभाग द्वारा पैन नंबर जारी किया जाता है। e-PAN 48 घंटे में ईमेल पर मिलता है और प्लास्टिक कार्ड 10-15 दिनों में स्पीड पोस्ट से घर पहुंचता है।",
            mr: "प्राप्तीकर खात्याकडून पॅन जारी होतो. e-PAN 48 तासांत ईमेलवर येतो आणि छापील कार्ड १०-१५ दिवसांत स्पीड पोस्टाने घरी पोहोचते.",
          },
        },
      },
    ],
    fees: [
      {
        item: {
          en: "Physical Card + e-PAN (Dispatch to Indian address)",
          hi: "प्लास्टिक कार्ड + ई-पैन (भारत में डाक द्वारा डिलीवरी)",
          mr: "छापील कार्ड + ई-पॅन (भारतातील पत्त्यावर टपाल वितरण)",
        },
        amount: "₹107.00",
        verifiedSource: "Income Tax Department & Protean Official Fee Schedule (includes GST).",
      },
      {
        item: {
          en: "Digital e-PAN only (No physical plastic card, sent by email)",
          hi: "केवल डिजिटल ई-पैन (घर पर कोई प्लास्टिक कार्ड नहीं, ईमेल पर PDF)",
          mr: "फक्त डिजिटल ई-पॅन (छापील कार्ड नाही, ईमेलवर PDF)",
        },
        amount: "₹72.00",
        verifiedSource: "Protean / UTIITSL official fee schedule.",
      },
      {
        item: {
          en: "Physical Card dispatch to Foreign / Overseas address",
          hi: "विदेश के पते पर प्लास्टिक कार्ड की डिलीवरी",
          mr: "परदेशातील पत्त्यावर छापील कार्ड वितरण",
        },
        amount: "₹1,017.00",
        verifiedSource: "Protean official fee schedule.",
      },
    ],
    timelines: {
      overall: {
        en: "e-PAN: 24 to 72 hours. Physical card: 10 to 15 working days via Speed Post.",
        hi: "ई-पैन: 24 से 72 घंटे में ईमेल पर। प्लास्टिक कार्ड: 10 से 15 कार्यदिवस में स्पीड पोस्ट द्वारा।",
        mr: "ई-पॅन: २४ ते ७२ तासांत ईमेलवर. छापील कार्ड: १० ते १५ कामकाजाच्या दिवसांत स्पीड पोस्टाने.",
      },
      details: {
        en: "Processing is fastest when applied through Aadhaar OTP paperless mode. Physical document verification can take up to 20 days.",
        hi: "आधार ओटीपी से आवेदन करने पर प्रक्रिया सबसे तेज़ होती है। कागज़ी आवेदन में 20 दिन तक लग सकते हैं।",
        mr: "आधार ओटीपीद्वारे प्रक्रिया सर्वांत जलद होते. टपालाने कागदपत्रे पाठवल्यास २० दिवसांपर्यंत वेळ लागू शकतो.",
      },
    },
    commonMistakes: [
      {
        mistake: {
          en: "Name spelling mismatch between Aadhaar and application",
          hi: "आधार और आवेदन में नाम की स्पेलिंग का अंतर",
          mr: "आधार कार्ड आणि अर्जातील नावाच्या स्पेलिंगमध्ये फरक असणे",
        },
        howToAvoid: {
          en: "Ensure your first name, middle name, and surname match your Aadhaar card character-for-character. If your Aadhaar has mistakes, update Aadhaar first.",
          hi: "प्रथम नाम, मध्य नाम और उपनाम की स्पेलिंग आधार से अक्षरशः मिलाएं। यदि आधार में गलती है, तो पहले आधार सुधरवाएं।",
          mr: "नाव, वडिलांचे नाव आणि आडनाव आधार कार्डाप्रमाणेच लिहा. आधारमध्ये चूक असल्यास आधी आधार दुरुस्त करा.",
        },
      },
      {
        mistake: {
          en: "Signing across the face on the photograph",
          hi: "फ़ोटो पर चेहरे के ऊपर हस्ताक्षर कर देना",
          mr: "फोटोवरील चेहऱ्यावरच सही करणे",
        },
        howToAvoid: {
          en: "On physical forms, sign across the left box and photo so the signature doesn't obscure your facial features. On the right photo, do not sign at all.",
          hi: "कागज़ी फ़ॉर्म पर केवल बाएं फ़ोटो पर तिरछा हस्ताक्षर करें जिससे चेहरा न ढके। दाएं फ़ोटो पर कोई हस्ताक्षर न करें।",
          mr: "कागदी अर्जावर फक्त डाव्या बाजूच्या फोटोवर तिरपी सही करा जेणेकरून चेहरा झाकला जाणार नाही.",
        },
      },
      {
        mistake: {
          en: "Applying for a second PAN card when already possessing one",
          hi: "पहले से पैन कार्ड होते हुए दूसरा नया पैन कार्ड बनवाना",
          mr: "आधीपासून पॅन कार्ड असताना दुसरा नवीन पॅन काढणे",
        },
        howToAvoid: {
          en: "Holding more than one PAN is an offence under Section 272B of Income Tax Act punishable with a ₹10,000 fine. If your old card is lost, use the 'Reprint / Correction' service instead of applying new.",
          hi: "दो पैन कार्ड रखना धारा 272B के तहत दंडनीय है जिसमें ₹10,000 जुर्माना हो सकता है। खो जाने पर हमेशा 'Reprint' का विकल्प चुनें, नया कार्ड न बनवाएं।",
          mr: "दोन पॅन कार्ड बाळगल्यास कलम 272B अंतर्गत ₹10,000 दंड होऊ शकतो. कार्ड हरवल्यास 'Reprint' अर्ज करा, नवीन काढू नका.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "Is the digital e-PAN legally valid everywhere?",
          hi: "क्या डिजिटल e-PAN हर जगह मान्य है?",
          mr: "डिजिटल e-PAN सर्वत्र कायदेशीररीत्या वैध आहे का?",
        },
        answer: {
          en: "Yes. Under Rule 114 of Income Tax Rules, an e-PAN containing a QR code is 100% legally valid for all banking, government, and KYC purposes just like a physical card.",
          hi: "हाँ। आयकर नियम 114 के अनुसार क्यूआर कोड वाला e-PAN बैंकों, सरकारी कामों और वित्तीय लेन-देन में भौतिक कार्ड की तरह ही पूर्णतः मान्य है।",
          mr: "होय. आयकर नियम 114 नुसार QR कोड असलेला e-PAN बँक, शासकीय कामे आणि सर्व KYC साठी छापील कार्डाइतकाच पूर्णपणे वैध आहे.",
        },
      },
      {
        question: {
          en: "Can I get a PAN card without Aadhaar?",
          hi: "क्या बिना आधार कार्ड के पैन कार्ड बन सकता है?",
          mr: "आधार कार्डाशिवाय पॅन कार्ड काढता येते का?",
        },
        answer: {
          en: "For Indian resident individuals, quoting Aadhaar is legally mandatory under Section 139AA of Income Tax Act. If you do not have Aadhaar, you must first enroll for Aadhaar or obtain an Aadhaar Enrolment ID.",
          hi: "भारतीय निवासियों के लिए धारा 139AA के तहत आधार देना क़ानूनी रूप से अनिवार्य है। यदि आधार नहीं है, तो पहले आधार नामांकन कराना आवश्यक है।",
          mr: "भारतीय नागरिकांसाठी आयकर कायदा कलम 139AA नुसार आधार देणे अनिवार्य आहे. आधार नसल्यास आधी आधार नोंदणी करावी लागेल.",
        },
      },
    ],
    officialSource: {
      name: "Income Tax Department, Government of India",
      url: "https://www.incometax.gov.in",
      more: [
        { name: "Protean (NSDL) Official Online PAN Portal", url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" },
        { name: "UTIITSL Official PAN Application Portal", url: "https://www.pan.utiitsl.com/PAN/" },
        { name: "Protean: Official Guidelines & Rules for Form 49A", url: "https://tin.tin.nsdl.com/pan/cr_imp_instruction.html" },
      ],
    },
  },
  {
    id: "passport",
    slug: "passport",
    title: "Passport",
    category: "Travel & Identity",
    description: "An Indian Ordinary Passport issued by the Ministry of External Affairs for international travel and authoritative proof of citizenship.",
    localizedTitle: {
      en: "Passport",
      hi: "पासपोर्ट (Indian Passport)",
      mr: "पासपोर्ट (Indian Passport)",
    },
    localizedCategory: {
      en: "Travel & Identity",
      hi: "यात्रा व नागरिकता पहचान (Travel & Identity)",
      mr: "प्रवास आणि नागरिकत्व ओळख (Travel & Identity)",
    },
    localizedDescription: {
      en: "An Indian Ordinary Passport issued by the Ministry of External Affairs for international travel and authoritative proof of citizenship.",
      hi: "विदेश मंत्रालय द्वारा जारी भारतीय पासपोर्ट, जो अंतरराष्ट्रीय यात्रा और नागरिकता की सबसे मजबूत आधिकारिक पहचान है।",
      mr: "परराष्ट्र व्यवहार मंत्रालयातर्फे दिला जाणारा भारतीय पासपोर्ट, जो आंतरराष्ट्रीय प्रवास आणि नागरिकत्वाचा सर्वोच्च अधिकृत पुरावा आहे.",
    },
    keywords: [
      "passport", "travel", "visa", "abroad", "passport seva", "psk", "rpo", "tatkal", "tatkaal", "mea",
      "पासपोर्ट", "पासपोर्ट सेवा", "विदेश यात्रा", "तत्काल", "वीज़ा",
      "पासपोर्ट", "पासपोर्ट सेवा केंद्र", "परदेश प्रवास", "तत्काळ", "व्हिसा"
    ],
    scopeNote: "Required documents vary based on your situation (e.g. Fresh vs Reissue, Adult vs Minor, or Tatkaal). You must carry original documents to the Passport Seva Kendra (PSK).",
    localizedScopeNote: {
      en: "Required documents vary depending on your situation (Fresh, Re-issue, Minor, or Tatkaal). Original documents must be physically shown at the Passport Seva Kendra (PSK) appointment.",
      hi: "आपकी स्थिति (नया, नवीनीकरण, नाबालिग या तत्काल) के अनुसार आवश्यक दस्तावेज़ बदलते हैं। पीएसके (PSK) अपॉइंटमेंट में मूल दस्तावेज़ साथ ले जाना अनिवार्य है।",
      mr: "तुमच्या परिस्थितीनुसार (नवीन, नूतनीकरण, अल्पवयीन किंवा तत्काळ) कागदपत्रांमध्ये बदल होतो. पासपोर्ट सेवा केंद्रातील (PSK) भेटीच्या वेळी सर्व मूळ कागदपत्रे दाखवणे बंधनकारक असते.",
    },
    examplesConfirmedOfficial: true,
    lastChecked: "2026-09-30",
    whoCanApply: {
      en: "All Indian citizens by birth, descent, or registration.",
      hi: "जन्म, वंश या पंजीकरण से कोई भी भारतीय नागरिक।",
      mr: "जन्माने किंवा नोंदणीने कोणताही भारतीय नागरिक.",
    },
    eligibility: {
      en: [
        "Must be a citizen of India.",
        "Must not have adverse police/criminal court orders barring overseas travel.",
        "Must provide accurate current residential address where applicant has stayed for the past 1 year.",
      ],
      hi: [
        "भारत का नागरिक होना आवश्यक है।",
        "विदेश यात्रा पर रोक लगाने वाला कोई आपराधिक या अदालती आदेश नहीं होना चाहिए।",
        "वर्तमान पते की सही जानकारी देनी होगी जहाँ आप पिछले 1 वर्ष से रह रहे हैं।",
      ],
      mr: [
        "भारताचा नागरिक असणे आवश्यक आहे.",
        "परदेश प्रवासावर बंदी घालणारा कोणताही न्यायालयीन किंवा पोलीस आदेश नसावा.",
        "सध्याच्या पत्त्याची अचूक माहिती देणे आवश्यक आहे जिथे तुम्ही मागील १ वर्ष वास्तव्य करत आहात.",
      ],
    },
    situations: [
      {
        id: "fresh-adult",
        name: {
          en: "Fresh Passport (Adult 18+)",
          hi: "नया पासपोर्ट (वयस्क 18+)",
          mr: "नवीन पासपोर्ट (वय 18+)",
        },
        description: {
          en: "Applying for your very first Indian passport.",
          hi: "पहली बार भारतीय पासपोर्ट के लिए आवेदन।",
          mr: "पहिल्यांदाच भारतीय पासपोर्टसाठी अर्ज करत असल्यास.",
        },
        applicableDocIds: ["address-proof", "date-of-birth-proof", "non-ecr-proof"],
        notes: {
          en: "Normal appointment requires Proof of Present Address, Proof of Date of Birth, and 10th certificate (for Non-ECR status).",
          hi: "सामान्य अपॉइंटमेंट के लिए वर्तमान पते का प्रमाण, जन्मतिथि का प्रमाण और 10वीं की सनद (Non-ECR के लिए) ज़रूरी है।",
          mr: "सर्वसाधारण भेटीसाठी पत्त्याचा पुरावा, जन्मतारखेचा पुरावा आणि १० वी चे प्रमाणपत्र (Non-ECR साठी) आवश्यक असते.",
        },
      },
      {
        id: "reissue-renewal",
        name: {
          en: "Re-issue / Renewal (Expired or Pages Full)",
          hi: "पासपोर्ट नवीनीकरण (अवधि समाप्त या पन्ने भर जाना)",
          mr: "पासपोर्ट नूतनीकरण (मुदत संपली किंवा पाने भरली)",
        },
        description: {
          en: "When your existing passport has expired, is about to expire within 1 year, or pages are exhausted.",
          hi: "जब पुराने पासपोर्ट की मियाद खत्म हो गई हो या 1 वर्ष में खत्म होने वाली हो, या पन्ने भर गए हों।",
          mr: "जेव्हा जुन्या पासपोर्टची मुदत संपली असेल किंवा संपत आली असेल, अथवा पाने संपली असतील.",
        },
        applicableDocIds: ["old-passport-copy", "address-proof"],
        notes: {
          en: "You must carry your original old passport along with self-attested photocopies of its first two and last two pages.",
          hi: "पुराना मूल पासपोर्ट और उसके पहले व अंतिम दो पन्नों की स्व-हस्ताक्षरित फोटोकॉपी साथ ले जाना अनिवार्य है।",
          mr: "मूळ जुना पासपोर्ट आणि त्याच्या पहिल्या व शेवटच्या दोन पानांची स्वाक्षरी केलेली प्रत सोबत नेणे आवश्यक आहे.",
        },
      },
      {
        id: "minor",
        name: {
          en: "Minor Passport (Under 18)",
          hi: "नाबालिग का पासपोर्ट (18 वर्ष से कम)",
          mr: "अल्पवयीन मुलांचा पासपोर्ट (वय 18 पेक्षा कमी)",
        },
        description: {
          en: "Issued with 5-year validity or until the minor turns 18.",
          hi: "5 वर्ष की वैधता या बच्चे के 18 वर्ष का होने तक जारी किया जाता है।",
          mr: "५ वर्षांची वैधता किंवा मुलाचे वय १८ वर्षे होईपर्यंत वैध असतो.",
        },
        applicableDocIds: ["date-of-birth-proof", "address-proof", "parents-passport-annexure"],
        notes: {
          en: "Both parents must give consent (Annexure D). If parents have passports, spouse name must be endorsed in both.",
          hi: "माता-पिता दोनों की सहमति (Annexure D) अनिवार्य है। यदि माता-पिता के पास पासपोर्ट हैं तो दोनों में पति/पत्नी का नाम दर्ज होना चाहिए।",
          mr: "दोन्ही पालकांची संमती (Annexure D) बंधनकारक आहे. पालकांच्या पासपोर्टमध्ये एकमेकांचे नाव नोंदवलेले असावे.",
        },
      },
      {
        id: "tatkaal",
        name: {
          en: "Tatkaal Passport (Urgent)",
          hi: "तत्काल पासपोर्ट (अत्यावश्यक यात्रा हेतु)",
          mr: "तत्काळ पासपोर्ट (तातडीच्या प्रवासासाठी)",
        },
        description: {
          en: "Fast-track processing dispatched within 1-3 working days without prior police verification.",
          hi: "1-3 कार्यदिवसों में बिना पूर्व पुलिस सत्यापन के शीघ्र डिस्पैच की विशेष सुविधा।",
          mr: "पोलीस पडताळणीपूर्वीच १-३ दिवसांत जलद गतीने पासपोर्ट मिळवण्याची विशेष सुविधा.",
        },
        applicableDocIds: ["address-proof", "date-of-birth-proof", "non-ecr-proof", "tatkaal-annexure"],
        notes: {
          en: "Requires at least 3 verified identity documents from the MEA specified list (e.g. Aadhaar, Voter ID, PAN, Bank Passbook, Service ID).",
          hi: "विदेश मंत्रालय की सूची में से कम से कम 3 सत्यापित दस्तावेज़ (जैसे आधार, वोटर आईडी, पैन कार्ड, बैंक पासबुक आदि) प्रस्तुत करने होते हैं।",
          mr: "परराष्ट्र मंत्रालयाच्या यादीतील किमान ३ पडताळणीयोग्य कागदपत्रे (आधार, पॅन, बँक पासबुक इ.) दाखवावी लागतात.",
        },
      },
    ],
    documents: [
      {
        id: "address-proof",
        name: "Proof of present address",
        shortDescription: "Official document showing where you currently reside.",
        explanation: "Proof of where you currently live. The local police station having jurisdiction over this address will conduct physical verification.",
        purpose: "Ensures the applicant genuinely resides at the stated jurisdiction and facilitates safe postal delivery.",
        examples: [
          "Aadhaar card with current address",
          "Voter Identity Card (EPIC)",
          "Electricity bill (last 2 months)",
          "Water bill (last 2 months)",
          "Telephone / Landline / Broadband bill (last 2 months)",
          "Active bank account passbook with applicant's photo (Scheduled Public/Private Indian Bank)",
          "Registered Rent Agreement (registered under the Registration Act 1908)",
          "Spouse's passport copy (if current address matches)",
        ],
        officialNotes: "Address proof must be in the applicant's own name, or in spouse's/parents' name with proof of relationship (Passport Seva guidelines).",
        formatAndPreparation: {
          submission: {
            en: "Original document mandatory at PSK appointment counter + 1 self-attested photocopy.",
            hi: "पीएसके काउंटर पर मूल दस्तावेज़ अनिवार्य + 1 स्व-हस्ताक्षरित फोटोकॉपी।",
            mr: "पासपोर्ट सेवा केंद्रात मूळ कागदपत्र दाखवणे अनिवार्य + १ स्वाक्षरी केलेली प्रत.",
          },
          selfAttestation: {
            en: "Mandatory: sign your full name across all submitted photocopies.",
            hi: "अनिवार्य: सभी फोटोकॉपी पर अपने पूरे हस्ताक्षर करें।",
            mr: "बंधनकारक: सर्व झेरॉक्स प्रतींवर स्वतःची स्वाक्षरी करा.",
          },
          digitalCopy: {
            en: "Upload scan while filling online form on passportindia.gov.in (PDF format, under 1 MB).",
            hi: "ऑनलाइन फ़ॉर्म भरते समय PDF अपलोड करें (1 MB से कम)।",
            mr: "ऑनलाइन अर्ज भरताना PDF स्कॅन अपलोड करा (1 MB पेक्षा कमी).",
          },
          fileFormat: {
            en: "Original hard copy at PSK + clear A4 photocopy.",
            hi: "पीएसके पर मूल कॉपी + साफ़ A4 फोटोकॉपी।",
            mr: "केंद्रावर मूळ प्रत + स्पष्ट A4 झेरॉक्स.",
          },
          validityOrRecentness: {
            en: "Utility bills must be recent (past 2 months). Rent agreements must be registered (not merely notarized).",
            hi: "बिजली/पानी बिल 2 महीने के भीतर का होना चाहिए। रेंट एग्रीमेंट रजिस्टर्ड होना चाहिए, सादा नोटरी नहीं।",
            mr: "वीज/पाणी बिल मागील २ महिन्यांतील असावे. भाडेकरार नोंदणीकृत (Registered) असावा, साधा नोटरी चालत नाही.",
          },
          whatIfMissing: {
            en: "If you live in rented accommodation without utility bills, a registered rent agreement or bank passbook with your current address is accepted.",
            hi: "यदि किराए पर रहते हैं, तो रजिस्टर्ड रेंट एग्रीमेंट या वर्तमान पते वाली बैंक पासबुक मान्य है।",
            mr: "स्वतःचे घर नसल्यास नोंदणीकृत भाडेकरार किंवा सध्याच्या पत्त्याचे बँक पासबुक वापरता येते.",
          },
          importantNotes: {
            en: "You must mention all addresses where you have resided in the past 1 full year. Concealing an address can result in impounding or penalty.",
            hi: "पिछले 1 वर्ष में आप जहाँ-जहाँ रहे हैं, उन सभी पतों की जानकारी दें। कोई पता छुपाने पर जुर्माना हो सकता है।",
            mr: "मागील १ वर्षात ज्या पत्त्यांवर वास्तव्य केले आहे त्या सर्वांची नोंद करा, अन्यथा अर्ज फेटाळला जाऊ शकतो.",
          },
        },
        localized: {
          name: {
            en: "Proof of present address",
            hi: "वर्तमान पते का प्रमाण (Present Address Proof)",
            mr: "सध्याच्या पत्त्याचा पुरावा (Present Address Proof)",
          },
          shortDescription: {
            en: "Official document showing where you currently reside.",
            hi: "एक आधिकारिक दस्तावेज़ जिससे पता चलता है कि आप वर्तमान में कहाँ रह रहे हैं।",
            mr: "तुम्ही सध्या कुठे वास्तव्यास आहात हे दर्शवणारा अधिकृत पुरावा.",
          },
          explanation: {
            en: "A document showing your present living address. Police verification takes place at this address.",
            hi: "यह दस्तावेज़ साबित करता है कि आप वर्तमान में किस पते पर रहते हैं। पुलिस सत्यापन इसी पते पर आकर किया जाता है।",
            mr: "हा पुरावा तुम्ही सध्या कुठे राहता हे दर्शवतो. याच पत्त्यावर पोलीस पडताळणी केली जाते.",
          },
          purpose: {
            en: "To verify residency and ensure the passport is dispatched to the correct applicant.",
            hi: "आवेदक के वास्तविक निवास की पुष्टि करना और सुरक्षित पासपोर्ट डिलीवरी सुनिश्चित करना।",
            mr: "अर्जदाराच्या वास्तव्याची खात्री करून पासपोर्ट सुरक्षितपणे वितरित करण्यासाठी.",
          },
          examples: {
            en: [
              "Aadhaar card with current address",
              "Voter ID card (EPIC)",
              "Electricity bill (last 2 months)",
              "Water bill (last 2 months)",
              "Bank passbook with photo from a Scheduled Bank",
              "Registered Rent Agreement",
            ],
            hi: [
              "वर्तमान पते वाला आधार कार्ड",
              "मतदाता पहचान पत्र (वोटर आईडी)",
              "बिजली का बिल (हालिया 2 महीने का)",
              "पानी का बिल (हालिया 2 महीने का)",
              "फोटोयुक्त बैंक पासबुक (शेड्यूल्ड बैंक)",
              "रजिस्टर्ड रेंट एग्रीमेंट (पंजीकृत किरायानामा)",
            ],
            mr: [
              "सध्याचा पत्ता असलेले आधार कार्ड",
              "मतदार ओळखपत्र",
              "वीज बिल (मागील २ महिन्यांतील)",
              "पाणी बिल (मागील २ महिन्यांतील)",
              "फोटो असलेले बँक पासबुक (अधिकृत बँक)",
              "नोंदणीकृत भाडेकरार",
            ],
          },
        },
      },
      {
        id: "date-of-birth-proof",
        name: "Proof of date of birth",
        shortDescription: "Authoritative document stating your exact date and place of birth.",
        explanation: "Establishes your legal date and place of birth. As per revised Passport Rules, multiple official records are now accepted.",
        purpose: "Ensures accurate identification and establishes Indian nationality criteria under the Citizenship Act.",
        examples: [
          "Birth Certificate issued by Municipal Authority or Registrar of Births and Deaths",
          "School leaving certificate / Transfer certificate showing date of birth",
          "Matriculation certificate issued by recognized educational board",
          "PAN Card issued by Income Tax Department",
          "Aadhaar Card issued by UIDAI",
          "Driving Licence",
          "Service record book (for government servants)",
        ],
        officialNotes: "Birth certificate issued by the Registrar of Births & Deaths or Municipal Corporation is the preferred authoritative document (MEA Rules).",
        formatAndPreparation: {
          submission: {
            en: "Original document mandatory at PSK appointment + 1 self-attested photocopy.",
            hi: "मूल दस्तावेज़ पीएसके में ले जाना अनिवार्य + 1 स्व-हस्ताक्षरित फोटोकॉपी।",
            mr: "मूळ कागदपत्र केंद्रावर नेणे अनिवार्य + १ स्वाक्षरी केलेली प्रत.",
          },
          selfAttestation: {
            en: "Required on photocopy.",
            hi: "फोटोकॉपी पर हस्ताक्षर अनिवार्य है।",
            mr: "झेरॉक्सवर स्वाक्षरी आवश्यक आहे.",
          },
          digitalCopy: {
            en: "Accepted for portal upload (PDF under 1 MB).",
            hi: "पोर्टल अपलोड के लिए मान्य (PDF 1 MB से कम)।",
            mr: "पोर्टलवर अपलोड करण्यासाठी मान्य (PDF 1 MB पेक्षा कमी).",
          },
          fileFormat: {
            en: "Original hard copy at PSK + clear photocopy.",
            hi: "मूल दस्तावेज़ + स्पष्ट फोटोकॉपी।",
            mr: "मूळ प्रत + स्पष्ट झेरॉक्स प्रत.",
          },
          validityOrRecentness: {
            en: "Date and place of birth must be clearly legible and match your application form exactly.",
            hi: "जन्मतिथि और जन्मस्थान स्पष्ट लिखा होना चाहिए और फ़ॉर्म से पूरी तरह मिलना चाहिए।",
            mr: "जन्मतारीख आणि जन्मठिकाण स्पष्टपणे वाचता आले पाहिजे आणि अर्जाशी जुळले पाहिजे.",
          },
          whatIfMissing: {
            en: "If you don't possess a municipal birth certificate, your 10th School Leaving Certificate (TC), Aadhaar card, or PAN card can be used.",
            hi: "यदि जन्म प्रमाण पत्र नहीं है, तो 10वीं का स्कूल छोड़ने का प्रमाण पत्र (TC), आधार कार्ड या पैन कार्ड का उपयोग किया जा सकता है।",
            mr: "जन्म दाखला नसल्यास १० वी ची शाळा सोडल्याचा दाखला (TC), आधार कार्ड किंवा पॅन कार्ड वापरता येते.",
          },
          importantNotes: {
            en: "Ensure spelling of applicant's name and parents' names matches between your birth proof and education certificates.",
            hi: "सुनिश्चित करें कि आपके नाम और माता-पिता के नाम की स्पेलिंग जन्म प्रमाण और शैक्षिक प्रमाणपत्रों में समान हो।",
            mr: "अर्जदाराचे आणि पालकांचे नाव शैक्षणिक प्रमाणपत्रांशी जुळत असल्याची खात्री करा.",
          },
        },
        localized: {
          name: {
            en: "Proof of date of birth",
            hi: "जन्मतिथि का प्रमाण (Proof of Date of Birth)",
            mr: "जन्मतारखेचा पुरावा (Proof of Date of Birth)",
          },
          shortDescription: {
            en: "Authoritative document stating your exact date and place of birth.",
            hi: "एक आधिकारिक दस्तावेज़ जिससे आपकी सही जन्मतिथि और जन्मस्थान प्रमाणित होता है।",
            mr: "तुमची जन्मतारीख आणि जन्मस्थान सिद्ध करणारे अधिकृत कागदपत्र.",
          },
          explanation: {
            en: "An official record of your birth date and place.",
            hi: "आपके जन्म की तारीख और स्थान का प्रमाणित अभिलेख।",
            mr: "तुमच्या जन्मतारीख आणि जन्मठिकाणाची अधिकृत नोंद.",
          },
          purpose: {
            en: "Printed inside the passport booklet to verify your legal age and identity.",
            hi: "पासपोर्ट बुकलेट में आपकी कानूनी उम्र और राष्ट्रीयता दर्ज करने हेतु।",
            mr: "पासपोर्ट पुस्तिकेत तुमची कायदेशीर जन्मतारीख नोंदवण्यासाठी.",
          },
          examples: {
            en: [
              "Birth Certificate from Municipal Corporation / Gram Panchayat",
              "10th standard pass certificate / School Leaving Certificate",
              "Aadhaar card",
              "PAN card",
              "Driving Licence",
            ],
            hi: [
              "नगर निगम / ग्राम पंचायत द्वारा जारी जन्म प्रमाण पत्र",
              "10वीं की सनद / स्कूल छोड़ने का प्रमाण पत्र (TC)",
              "आधार कार्ड",
              "पैन कार्ड",
              "ड्राइविंग लाइसेंस",
            ],
            mr: [
              "नगरपालिका / ग्रामपंचायतीचा जन्म दाखला",
              "१० वी चे बोर्ड प्रमाणपत्र / शाळा सोडल्याचा दाखला (TC)",
              "आधार कार्ड",
              "पॅन कार्ड",
              "वाहन चालक परवाना",
            ],
          },
        },
      },
      {
        id: "non-ecr-proof",
        name: "Non-ECR (Emigration Check Not Required) Proof",
        shortDescription: "Qualifying educational or tax proof to avoid emigration airport check.",
        explanation: "Having a Non-ECR status means you do not need immigration clearance before traveling to certain 18 designated countries for work. If eligible, your passport will not carry an 'ECR' stamp.",
        purpose: "Facilitates hassle-free international travel without needing Protector of Emigrants clearance.",
        examples: [
          "Matriculation (10th standard) or higher degree certificate",
          "Assessment order showing income tax payment (last 1 year) or Form 16",
          "Persons aged 50 years and above (Aadhaar or birth proof serves as proof)",
          "Children below 18 years of age",
          "Holders of official or diplomatic passports",
        ],
        officialNotes: "If an applicant passes 10th standard, the matriculation certificate is sufficient proof for Non-ECR status (Passport Seva Document Advisor).",
        formatAndPreparation: {
          submission: {
            en: "Original degree/matriculation marksheet or certificate at PSK counter + 1 self-attested photocopy.",
            hi: "10वीं की मूल अंकतालिका/सनद पीएसके में ले जाना अनिवार्य + 1 स्व-हस्ताक्षरित फोटोकॉपी।",
            mr: "१० वी चे मूळ गुणपत्रक/प्रमाणपत्र केंद्रावर नेणे अनिवार्य + १ स्वाक्षरी केलेली प्रत.",
          },
          selfAttestation: {
            en: "Required on photocopy.",
            hi: "फोटोकॉपी पर हस्ताक्षर अनिवार्य है।",
            mr: "झेरॉक्सवर सही आवश्यक आहे.",
          },
          digitalCopy: {
            en: "Upload PDF during application.",
            hi: "आवेदन के दौरान PDF अपलोड करें।",
            mr: "अर्जासोबत PDF अपलोड करा.",
          },
          fileFormat: {
            en: "Original certificate from recognized board (CBSE/ICSE/State Board) + A4 photocopy.",
            hi: "मान्यता प्राप्त बोर्ड से मूल प्रमाणपत्र + A4 फोटोकॉपी।",
            mr: "मान्यताप्राप्त बोर्डाचे मूळ प्रमाणपत्र + A4 झेरॉक्स प्रत.",
          },
          validityOrRecentness: {
            en: "Permanent document.",
            hi: "स्थायी दस्तावेज़।",
            mr: "कायमस्वरूपी कागदपत्र.",
          },
          whatIfMissing: {
            en: "If you have not completed 10th standard, you will receive an 'ECR' passport unless you are an income tax payer, hold an approved vocational degree, or are aged 50+.",
            hi: "यदि 10वीं पास नहीं हैं, तो 'ECR' पासपोर्ट जारी होगा, जब तक कि आप टैक्सपेयर न हों या आपकी उम्र 50 वर्ष से अधिक न हो।",
            mr: "१० वी उत्तीर्ण नसल्यास 'ECR' पासपोर्ट मिळतो; परंतु आयकर भरत असल्यास किंवा वय ५० पेक्षा जास्त असल्यास Non-ECR मिळू शकतो.",
          },
          importantNotes: {
            en: "Original certificate must be from a recognized government school education board.",
            hi: "प्रमाणपत्र किसी मान्यता प्राप्त शिक्षा बोर्ड द्वारा जारी होना चाहिए।",
            mr: "प्रमाणपत्र अधिकृत मान्यताप्राप्त शिक्षण मंडळाचे असणे आवश्यक आहे.",
          },
        },
        localized: {
          name: {
            en: "Non-ECR Proof (10th pass / Tax)",
            hi: "नॉन-ईसीआर प्रमाण (10वीं पास / टैक्स)",
            mr: "नॉन-ईसीआर पुरावा (१० वी उत्तीर्ण / करदाता)",
          },
          shortDescription: {
            en: "Qualifying educational or tax proof to avoid emigration airport check.",
            hi: "हवाई अड्डे पर इमिग्रेशन जांच से छूट पाने के लिए 10वीं या टैक्स का प्रमाण।",
            mr: "विमानतळावर इमिग्रेशन तपासणीपासून सवलत मिळवण्यासाठी १० वी किंवा कर भरल्याचा पुरावा.",
          },
          explanation: {
            en: "Qualifying proof so your passport does not get an ECR stamp.",
            hi: "यह प्रमाण पत्र आपके पासपोर्ट को इमिग्रेशन चेक की पाबंदी से मुक्त करता है।",
            mr: "हा पुरावा तुमच्या पासपोर्टला इमिग्रेशन तपासणीच्या निर्बंधातून मुक्त करतो.",
          },
          purpose: {
            en: "Allows traveling abroad for work or tourism without additional emigration clearances.",
            hi: "बिना किसी रुकावट के विदेश यात्रा करने की सुविधा प्रदान करता है।",
            mr: "परदेश प्रवासादरम्यान कोणतीही अडचण येऊ नये यासाठी.",
          },
          examples: {
            en: [
              "10th standard (Matriculation) pass certificate",
              "Higher secondary (12th) or college degree certificate",
              "Income tax assessment order (proof of paying income tax)",
            ],
            hi: [
              "10वीं पास की सनद (Matriculation Certificate)",
              "12वीं या कॉलेज डिग्री का मूल प्रमाणपत्र",
              "आयकर निर्धारण आदेश (टैक्स भरने का प्रमाण)",
            ],
            mr: [
              "१० वी उत्तीर्ण प्रमाणपत्र (Matriculation)",
              "पदवी किंवा उच्च शिक्षणाचे प्रमाणपत्र",
              "आयकर भरल्याचा अधिकृत पुरावा",
            ],
          },
        },
      },
      {
        id: "old-passport-copy",
        name: "Original Old Passport (for Reissue only)",
        shortDescription: "Your existing passport booklet for physical verification and cancellation.",
        explanation: "Required when applying for renewal, extension, or replacement of an expired or full passport. The old passport is cancelled and safely returned to you with the new one.",
        purpose: "To verify your travel history, transfer active visas, and prevent duplicate passport issuance.",
        situationIds: ["reissue-renewal"],
        examples: [
          "Original old passport booklet",
          "Self-attested photocopy of first 2 pages (photo page)",
          "Self-attested photocopy of last 2 pages (address & parents page)",
          "Photocopy of Non-ECR page / Validity extension page (if applicable)",
        ],
        officialNotes: "Old passport must be produced in original. Any valid visas stamped inside remain valid and will not be cancelled (Passport Seva FAQ).",
        formatAndPreparation: {
          submission: {
            en: "Original passport booklet must be physically handed over at PSK counter + self-attested copies of first and last 2 pages.",
            hi: "मूल पासपोर्ट पीएसके काउंटर पर जमा करना होगा + प्रथम व अंतिम 2 पृष्ठों की स्व-हस्ताक्षरित प्रत।",
            mr: "मूळ जुना पासपोर्ट केंद्रावर दाखवणे अनिवार्य + पहिल्या व शेवटच्या दोन पानांची स्वाक्षरी केलेली प्रत.",
          },
          selfAttestation: {
            en: "Mandatory on all photocopies.",
            hi: "सभी फोटोकॉपी पर हस्ताक्षर अनिवार्य।",
            mr: "सर्व झेरॉक्सवर स्वाक्षरी बंधनकारक.",
          },
          digitalCopy: {
            en: "Upload first two and last two pages as single PDF.",
            hi: "पहले दो और अंतिम दो पन्नों की एक PDF बनाकर अपलोड करें।",
            mr: "पहिली दोन आणि शेवटची दोन पाने एकाच PDF मध्ये अपलोड करा.",
          },
          fileFormat: {
            en: "Physical booklet + A4 photocopies.",
            hi: "मूल बुकलेट + A4 फोटोकॉपी।",
            mr: "मूळ पुस्तिका + A4 झेरॉक्स.",
          },
          validityOrRecentness: {
            en: "Can be submitted within 1 year before expiry or any time after expiry.",
            hi: "समाप्ति से 1 वर्ष पहले या समाप्त होने के बाद कभी भी जमा किया जा सकता है।",
            mr: "मुदत संपण्याच्या १ वर्ष आधी किंवा मुदत संपल्यानंतर कधीही अर्ज करू शकता.",
          },
          whatIfMissing: {
            en: "If the old passport is lost or stolen, you cannot use normal re-issue; you must file a Police FIR / Lost Report and apply under the 'Lost Passport' category.",
            hi: "यदि पुराना पासपोर्ट खो गया है, तो सामान्य री-इश्यू नहीं होगा; पुलिस FIR करवाकर 'Lost Passport' श्रेणी में आवेदन करना होगा।",
            mr: "जुना पासपोर्ट हरवला असल्यास पोलिसांत तक्रार (FIR) नोंदवून 'Lost Passport' अंतर्गत अर्ज करावा लागतो.",
          },
        },
        localized: {
          name: {
            en: "Old Passport (for Re-issue)",
            hi: "पुराना मूल पासपोर्ट (नवीनीकरण हेतु)",
            mr: "जुना मूळ पासपोर्ट (नूतनीकरणासाठी)",
          },
          shortDescription: {
            en: "Your existing passport booklet for physical verification and cancellation.",
            hi: "आपका मौजूदा पुराना पासपोर्ट जो सत्यापन के बाद रद्द करके वापस लौटाया जाएगा।",
            mr: "पडताळणी आणि रद्दीकरणासाठी लागणारा तुमचा सध्याचा पासपोर्ट.",
          },
          explanation: {
            en: "Original old passport booklet and self-attested photocopies of first and last 2 pages.",
            hi: "पुराना मूल पासपोर्ट और उसके पहले व अंतिम दो पन्नों की स्व-हस्ताक्षरित फोटोकॉपी।",
            mr: "मूळ जुना पासपोर्ट आणि पहिल्या व शेवटच्या दोन पानांची स्वाक्षरी केलेली प्रत.",
          },
          purpose: {
            en: "To verify your identity and invalidate old booklet while preserving valid visas.",
            hi: "पुराने पासपोर्ट को आधिकारिक तौर पर रद्द करने और मौजूदा वीज़ा सुरक्षित रखने के लिए।",
            mr: "जुना पासपोर्ट रद्द करून त्यातील वैध व्हिसा सुरक्षित ठेवण्यासाठी.",
          },
          examples: {
            en: ["Original passport booklet + self-attested copies of first and last two pages"],
            hi: ["मूल पासपोर्ट बुकलेट + प्रथम व अंतिम 2 पन्नों की स्व-हस्ताक्षरित प्रत"],
            mr: ["मूळ पासपोर्ट पुस्तिका + पहिल्या व शेवटच्या दोन पानांची स्वाक्षरी केलेली प्रत"],
          },
        },
      },
    ],
    steps: [
      {
        title: "Online Registration & Form Filing",
        description: "Register on official passportindia.gov.in portal and complete the online passport application.",
        localized: {
          title: {
            en: "Online Registration & Form Filing",
            hi: "ऑनलाइन पंजीकरण व फ़ॉर्म भरना",
            mr: "ऑनलाइन नोंदणी आणि अर्ज भरणे",
          },
          description: {
            en: "Create an account on the official portal (passportindia.gov.in). Fill applicant details, address history of the past 1 year, and family particulars accurately.",
            hi: "अधिकृत पोर्टल (passportindia.gov.in) पर खाता बनाएं। पिछले 1 वर्ष के निवास पते और पारिवारिक विवरण सही-सही भरें।",
            mr: "अधिकृत संकेतस्थळावर (passportindia.gov.in) खाते तयार करा. मागील १ वर्षातील पत्ता आणि वैयक्तिक माहिती काळजीपूर्वक भरा.",
          },
        },
      },
      {
        title: "Appointment Booking & Fee Payment",
        description: "Pay the official statutory fee (₹1,500 normal) online and choose your nearest PSK or POPSK appointment slot.",
        localized: {
          title: {
            en: "Appointment Booking & Fee Payment",
            hi: "अपॉइंटमेंट बुकिंग व शुल्क भुगतान",
            mr: "अपॉइंटमेंट बुकिंग आणि शुल्क भरणे",
          },
          description: {
            en: "Pay the official fee online via SBI e-Pay, Net Banking, or UPI. Book an appointment slot at your nearest Passport Seva Kendra (PSK) or Post Office PSK (POPSK).",
            hi: "ऑनलाइन ₹1,500 का सरकारी शुल्क भरें और अपने नज़दीकी पासपोर्ट सेवा केंद्र (PSK) पर सुविधाजनक तारीख व समय की अपॉइंटमेंट बुक करें।",
            mr: "अधिकृत ₹1,500 सरकारी शुल्क ऑनलाइन भरा आणि जवळच्या पासपोर्ट सेवा केंद्रात (PSK) सोयीची तारीख व वेळ निवडून भेट निश्चित करा.",
          },
        },
      },
      {
        title: "Visit Passport Seva Kendra (PSK)",
        description: "Attend your appointment with all original documents + 1 set of self-attested photocopies.",
        localized: {
          title: {
            en: "Visit Passport Seva Kendra (PSK)",
            hi: "पासपोर्ट सेवा केंद्र (PSK) पर उपस्थित होना",
            mr: "पासपोर्ट सेवा केंद्रात (PSK) उपस्थित राहणे",
          },
          description: {
            en: "Arrive 15 minutes before slot with Appointment Slip and all ORIGINALS. Digital biometric photograph and fingerprints are captured right at the counter.",
            hi: "अपॉइंटमेंट समय से 15 मिनट पहले सभी मूल दस्तावेज़ों के साथ पहुंचें। काउंटर पर ही आपकी डिजिटल फ़ोटो और फिंगरप्रिंट लिए जाएंगे (अलग से फ़ोटो नहीं ले जाना पड़ता)।",
            mr: "ठरलेल्या वेळेच्या १५ मिनिटे आधी मूळ कागदपत्रांसह हजर राहा. केंद्रावरच तुमचा डिजिटल फोटो आणि बोटांचे ठसे घेतले जातात.",
          },
        },
      },
      {
        title: "Police Verification & Speed Post Delivery",
        description: "Local police station conducts physical verification; passport is printed and dispatched via Speed Post.",
        localized: {
          title: {
            en: "Police Verification & Speed Post Delivery",
            hi: "पुलिस सत्यापन व स्पीड पोस्ट डिलीवरी",
            mr: "पोलीस पडताळणी आणि स्पीड पोस्ट वितरण",
          },
          description: {
            en: "An officer from your local police station will verify your address. Once police clear, your passport is printed at the India Security Press and delivered by India Post Speed Post.",
            hi: "स्थानीय पुलिस स्टेशन के अधिकारी आपके पते पर आकर सत्यापन करेंगे। पुलिस क्लीयरेंस के बाद पासपोर्ट छपकर स्पीड पोस्ट से घर पहुंचता है।",
            mr: "स्थानिक पोलीस ठाण्याकडून पत्त्याची पडताळणी केली जाते. पडताळणी पूर्ण झाल्यावर पासपोर्ट छापून स्पीड पोस्टाने घरपोच दिला जातो.",
          },
        },
      },
    ],
    fees: [
      {
        item: {
          en: "Fresh / Re-issue Normal (36 pages, 10-year validity, Adult)",
          hi: "नया / री-इश्यू सामान्य (36 पृष्ठ, 10 वर्ष वैधता, वयस्क)",
          mr: "नवीन / नूतनीकरण सामान्य (३६ पाने, १० वर्षे वैधता, प्रौढ)",
        },
        amount: "₹1,500.00",
        verifiedSource: "Ministry of External Affairs Official Fee Structure (Passport Rules).",
      },
      {
        item: {
          en: "Fresh / Re-issue Jumbo (60 pages, 10-year validity, Adult)",
          hi: "जंबो पासपोर्ट (60 पृष्ठ, 10 वर्ष वैधता, वयस्क)",
          mr: "जम्बो पासपोर्ट (६० पाने, १० वर्षे वैधता, प्रौढ)",
        },
        amount: "₹2,000.00",
        verifiedSource: "Passport Seva official schedule.",
      },
      {
        item: {
          en: "Minor Passport (36 pages, 5-year validity or until age 18)",
          hi: "नाबालिग का पासपोर्ट (36 पृष्ठ, 5 वर्ष या 18 वर्ष की आयु तक)",
          mr: "अल्पवयीन मुलांचा पासपोर्ट (३६ पाने, ५ वर्षे किंवा वय १८ होईपर्यंत)",
        },
        amount: "₹1,000.00",
        verifiedSource: "Passport Seva official schedule.",
      },
      {
        item: {
          en: "Tatkaal Scheme Extra Fee (in addition to normal fee)",
          hi: "तत्काल योजना अतिरिक्त शुल्क (सामान्य शुल्क के अतिरिक्त)",
          mr: "तत्काळ योजना अतिरिक्त शुल्क (सामान्य शुल्काव्यतिरिक्त)",
        },
        amount: "+ ₹2,000.00",
        verifiedSource: "Passport Rules 1980 / MEA Official Schedule.",
      },
    ],
    timelines: {
      overall: {
        en: "Normal: 15 to 30 days (including police verification). Tatkaal: 1 to 3 days for dispatch.",
        hi: "सामान्य: 15 से 30 दिन (पुलिस सत्यापन सहित)। तत्काल: 1 से 3 कार्यदिवस में डिस्पैच।",
        mr: "सामान्य: १५ ते ३० दिवस (पोलीस पडताळणीसह). तत्काळ: १ ते ३ दिवसांत रवाना.",
      },
      details: {
        en: "Processing starts immediately after PSK appointment. Police verification timeline depends on your local police station jurisdiction.",
        hi: "पीएसके विजिट के बाद प्रक्रिया तुरंत शुरू होती है। पुलिस सत्यापन का समय आपके स्थानीय थाने पर निर्भर करता है।",
        mr: "केंद्रावरील भेटीनंतर लगेच प्रक्रिया सुरू होते. पोलीस पडताळणी स्थानिक ठाण्याच्या कार्यपद्धतीवर अवलंबून असते.",
      },
    },
    commonMistakes: [
      {
        mistake: {
          en: "Not bringing original documents to the PSK appointment",
          hi: "पीएसके अपॉइंटमेंट पर मूल दस्तावेज़ साथ न ले जाना",
          mr: "केंद्रावरील भेटीच्या वेळी मूळ कागदपत्रे सोबत न नेणे",
        },
        howToAvoid: {
          en: "Every document submitted as a photocopy must have its original physical copy presented at the counter. Entry and processing will be rejected without originals.",
          hi: "जिन कागज़ात की फोटोकॉपी दे रहे हैं, उन सबका मूल दस्तावेज़ साथ लेकर जाएं। बिना मूल प्रतियों के आवेदन स्वीकार नहीं किया जाता।",
          mr: "ज्या कागदपत्रांची झेरॉक्स जोडली आहे त्या सर्वांची मूळ प्रत दाखवणे बंधनकारक आहे, अन्यथा प्रक्रिया थांबवली जाते.",
        },
      },
      {
        mistake: {
          en: "Concealing previous addresses lived in during the past 1 year",
          hi: "पिछले 1 वर्ष में रहे किसी पते की जानकारी छुपाना",
          mr: "मागील १ वर्षात वास्तव्य केलेल्या पत्त्यांची माहिती लपवणे",
        },
        howToAvoid: {
          en: "If you moved within the last 12 months, list both your previous and current addresses. Hiding a previous stay address can lead to adverse police reports and heavy penalties.",
          hi: "यदि पिछले 12 महीनों में आपने घर बदला है, तो पुराने और नए दोनों पतों का उल्लेख करें। पता छुपाने पर पुलिस वेरिफिकेशन फेल हो सकता है।",
          mr: "गेल्या १२ महिन्यांत घर बदलले असल्यास जुन्या आणि नवीन दोन्ही पत्त्यांची नोंद करा. माहिती लपवल्यास दंड होऊ शकतो.",
        },
      },
      {
        mistake: {
          en: "Falling for fake passport portals and unauthorized touts",
          hi: "फर्जी पासपोर्ट वेबसाइटों और अनधिकृत दलालों के झांसे में आना",
          mr: "बनावट पासपोर्ट संकेतस्थळे आणि अनधिकृत दलालांना बळी पडणे",
        },
        howToAvoid: {
          en: "The only official website of the Government of India is passportindia.gov.in. Never make payments on third-party .org, .com, or .in imitation portals.",
          hi: "भारत सरकार का एकमात्र आधिकारिक पोर्टल केवल passportindia.gov.in है। किसी अन्य निजी साइट पर पैसे न दें।",
          mr: "भारत सरकारचे एकमेव अधिकृत संकेतस्थळ फक्त passportindia.gov.in हेच आहे. इतर कोणत्याही बनावट संकेतस्थळावर पैसे भरू नका.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "Do I need to carry passport photos to the PSK?",
          hi: "क्या पीएसके जाते समय पासपोर्ट फोटो ले जाना ज़रूरी है?",
          mr: "पासपोर्ट सेवा केंद्रात जाताना फोटो सोबत नेण्याची गरज आहे का?",
        },
        answer: {
          en: "No for adults and children above 4 years: a live digital photograph is captured at the PSK counter. Only for infants below 4 years, parents must bring a recent 4.5 x 3.5 cm color photo with a plain white background.",
          hi: "वयस्कों और 4 वर्ष से बड़े बच्चों के लिए नहीं; पीएसके काउंटर पर ही डिजिटल फोटो खींची जाती है। केवल 4 वर्ष से छोटे शिशुओं के लिए सफ़ेद बैकग्राउंड वाला फोटो ले जाना होता है।",
          mr: "प्रौढ आणि ४ वर्षांपेक्षा मोठ्या मुलांसाठी फोटो नेण्याची गरज नाही; केंद्रावरच थेट फोटो काढला जातो. फक्त ४ वर्षांखालील बालकांसाठी पांढऱ्या पार्श्वभूमीचा फोटो न्यावा लागतो.",
        },
      },
      {
        question: {
          en: "Can I track the status of my passport application?",
          hi: "क्या मैं अपने पासपोर्ट आवेदन की स्थिति ट्रैक कर सकता हूँ?",
          mr: "मी माझ्या पासपोर्ट अर्जाची सद्यस्थिती तपासू शकतो का?",
        },
        answer: {
          en: "Yes. Use your 15-character File Number on passportindia.gov.in or the official mPassport Seva app to track every stage from police verification to dispatch.",
          hi: "हाँ। पीएसके से मिली 15 अक्षरों वाली फ़ाइल संख्या से आप passportindia.gov.in पर या mPassport Seva ऐप पर हर चरण की स्थिति लाइव देख सकते हैं।",
          mr: "होय. पावतीवरील १५ अंकी फाइल क्रमांकाचा वापर करून तुम्ही संकेतस्थळावर किंवा mPassport Seva ॲपवर अर्जाचा मागोवा घेऊ शकता.",
        },
      },
    ],
    officialSource: {
      name: "Passport Seva, Ministry of External Affairs",
      url: "https://www.passportindia.gov.in",
      more: [
        { name: "Official Document Advisor for Fresh Passport", url: "https://www.passportindia.gov.in/AppOnlineProject/docAdvisor/attachmentAdvFreshInp" },
        { name: "Official Fee Calculator", url: "https://www.passportindia.gov.in/AppOnlineProject/fee/feeInput" },
        { name: "Locate Passport Seva Kendra (PSK / POPSK)", url: "https://www.passportindia.gov.in/AppOnlineProject/locatePSK/locatePreInp" },
      ],
    },
  },
  {
    id: "income-certificate",
    slug: "income-certificate",
    title: "Income Certificate",
    category: "Certificates (Maharashtra)",
    description: "An official state certificate certifying a household's annual income, issued by the Revenue Department for scholarships, fee waivers, and welfare benefits.",
    localizedTitle: {
      en: "Income Certificate (Maharashtra)",
      hi: "आय प्रमाण पत्र (महाराष्ट्र - Aaple Sarkar)",
      mr: "उत्पन्नाचा दाखला (महाराष्ट्र - आपले सरकार)",
    },
    localizedCategory: {
      en: "Certificates (Maharashtra)",
      hi: "सरकारी प्रमाण पत्र (महाराष्ट्र)",
      mr: "शासकीय दाखले (महाराष्ट्र)",
    },
    localizedDescription: {
      en: "An official state certificate certifying a household's annual income, issued by the Revenue Department for scholarships, fee waivers, and welfare benefits.",
      hi: "महाराष्ट्र शासन के राजस्व विभाग द्वारा जारी आय प्रमाण पत्र, जो छात्रवृत्ति, शैक्षणिक शुल्क छूट और सरकारी योजनाओं के लिए आवश्यक है।",
      mr: "महाराष्ट्र शासनाच्या महसूल विभागामार्फत दिला जाणारा कौटुंबिक उत्पन्नाचा दाखला, जो शिष्यवृत्ती, फी सवलत आणि शासकीय योजनांसाठी आवश्यक असतो.",
    },
    keywords: [
      "income", "income certificate", "scholarship", "aaple sarkar", "mahaonline", "tahsildar", "maharashtra", "rts",
      "आय प्रमाण पत्र", "इनकम सर्टिफिकेट", "छात्रवृत्ति", "तहसीलदार", "आपले सरकार", "महाराष्ट्र",
      "उत्पन्नाचा दाखला", "उत्पन्न प्रमाणपत्र", "शिष्यवृत्ती", "तहसीलदार", "आपले सरकार", "महाऑनलाईन"
    ],
    scopeNote: "This guide specifically covers Maharashtra state through the official Aaple Sarkar portal. Requirements in other states vary under their respective state portals.",
    localizedScopeNote: {
      en: "This guide covers Maharashtra state via the official Aaple Sarkar portal. Issued under the Maharashtra Right to Public Services Act (RTS).",
      hi: "यह मार्गदर्शिका केवल महाराष्ट्र राज्य के 'आपले सरकार' पोर्टल के लिए है। यह सेवा महाराष्ट्र लोकसेवा हक्क अधिनियम (RTS) के तहत आती है।",
      mr: "ही मार्गदर्शिका फक्त महाराष्ट्र राज्यातील 'आपले सरकार' पोर्टलसाठी आहे. हा दाखला महाराष्ट्र लोकसेवा हक्क अधिनियमांतर्गत (RTS) १५ दिवसांत मिळतो.",
    },
    examplesConfirmedOfficial: true,
    lastChecked: "2026-09-30",
    whoCanApply: {
      en: "Any resident of Maharashtra needing income certification for family or educational purposes.",
      hi: "महाराष्ट्र का कोई भी निवासी जिसे पारिवारिक या शैक्षणिक कारणों से आय प्रमाण की आवश्यकता है।",
      mr: "महाराष्ट्रातील कोणताही रहिवासी ज्याला शैक्षणिक किंवा शासकीय कामांसाठी उत्पन्नाच्या पुराव्याची गरज आहे.",
    },
    eligibility: {
      en: [
        "Must be a permanent or long-term resident of Maharashtra.",
        "Must provide legitimate source of annual family income (salaried, business, agricultural, or daily wage).",
        "Declared income must cover all earning members of the family.",
      ],
      hi: [
        "महाराष्ट्र राज्य का निवासी होना चाहिए।",
        "परिवार की कुल वार्षिक आय का वैध प्रमाण प्रस्तुत करना होगा।",
        "घोषित आय में परिवार के सभी कमाने वाले सदस्यों की आय शामिल होनी चाहिए।",
      ],
      mr: [
        "महाराष्ट्र राज्याचा रहिवासी असणे आवश्यक आहे.",
        "कुटुंबातील सर्व मिळवत्या व्यक्तींचे एकत्रित वार्षिक उत्पन्न दर्शवणे आवश्यक आहे.",
        "उत्पन्नाच्या स्रोताचा अधिकृत पुरावा असणे गरजेचे आहे.",
      ],
    },
    situations: [
      {
        id: "salaried",
        name: {
          en: "Salaried Employee (Private / Govt)",
          hi: "नौकरीपेशा (सरकारी / निजी कर्मचारी)",
          mr: "नोकरदार व्यक्ती (शासकीय / खाजगी)",
        },
        description: {
          en: "For employees receiving monthly salaries.",
          hi: "मासिक वेतन पाने वाले कर्मचारियों के लिए।",
          mr: "मासिक वेतन मिळणाऱ्या कर्मचाऱ्यांसाठी.",
        },
        applicableDocIds: ["identity-proof", "address-proof", "income-proof", "photograph", "self-declaration"],
        notes: {
          en: "Submit Form 16 or Salary Slips for the last 12 months certified by your employer.",
          hi: "नियोक्ता द्वारा प्रमाणित पिछले 12 महीनों का फॉर्म 16 या वेतन पर्ची (सैलरी स्लिप) संलग्न करें।",
          mr: "मालकाने प्रमाणित केलेले मागील १२ महिन्यांचे फॉर्म १६ किंवा सॅलरी स्लिप जोडणे आवश्यक आहे.",
        },
      },
      {
        id: "farmer",
        name: {
          en: "Farmer / Agriculturalist",
          hi: "किसान / कृषि श्रमिक",
          mr: "शेतकरी / शेतमजूर",
        },
        description: {
          en: "For families whose primary income is from agriculture.",
          hi: "जिन परिवारों की मुख्य आय खेती से होती है।",
          mr: "शेती हेच उत्पन्नाचे मुख्य साधन असणाऱ्या कुटुंबांसाठी.",
        },
        applicableDocIds: ["identity-proof", "address-proof", "satbara-proof", "photograph", "self-declaration"],
        notes: {
          en: "Submit 7/12 (Satbara) extract, 8-A extract, and Talathi income inspection report.",
          hi: "तलाठी की आय रिपोर्ट के साथ 7/12 और 8-अ का उतारा संलग्न करें।",
          mr: "तलाठ्याचा उत्पन्नाचा अहवाल तसेच ७/१२ आणि ८-अ उतारा जोडणे आवश्यक आहे.",
        },
      },
      {
        id: "student-scholarship",
        name: {
          en: "Student for Scholarship / Fee Waiver",
          hi: "विद्यार्थी - छात्रवृत्ति व फ़ीस माफ़ी हेतु",
          mr: "विद्यार्थी - शिष्यवृत्ती / फी सवलत",
        },
        description: {
          en: "Required for MahaDBT scholarships and college admissions.",
          hi: "महाडीबीटी छात्रवृत्ति और कॉलेज प्रवेश में रियायत के लिए।",
          mr: "महाडीबीटी शिष्यवृत्ती आणि शैक्षणिक प्रवेशासाठी लागणारा दाखला.",
        },
        applicableDocIds: ["identity-proof", "address-proof", "income-proof", "photograph", "self-declaration"],
        notes: {
          en: "Income certificate must be issued in the name of the father / head of family, with student mentioned as beneficiary.",
          hi: "आय प्रमाण पत्र परिवार के मुखिया (पिता/अभिभावक) के नाम पर बनता है और छात्र का नाम लाभार्थी में आता है।",
          mr: "उत्पन्नाचा दाखला कुटुंबप्रमुखाच्या (वडिलांच्या) नावे निघतो आणि त्यावर विद्यार्थ्याचा उल्लेख असतो.",
        },
      },
    ],
    documents: [
      {
        id: "identity-proof",
        name: "Identity proof",
        shortDescription: "A valid government ID proving the applicant's identity.",
        explanation: "Confirms the identity of the head of family / applicant applying for the income certificate on Aaple Sarkar.",
        purpose: "Ensures the certificate is issued to a legitimate resident of the state.",
        examples: [
          "Aadhaar card",
          "Voter Identity Card (EPIC)",
          "Passport",
          "Driving Licence",
          "PAN Card",
          "Government / Semi-Government Photo ID Card",
        ],
        officialNotes: "Aadhaar Card is preferred for single-click Aadhaar authentication on Aaple Sarkar (MahaOnline).",
        formatAndPreparation: {
          submission: {
            en: "Digital upload on Aaple Sarkar portal (PDF or JPEG format, size between 75 KB and 256 KB).",
            hi: "आपले सरकार पोर्टल पर डिजिटल अपलोड (PDF या JPEG, 75 KB से 256 KB साइज़)।",
            mr: "आपले सरकार पोर्टलवर डिजिटल अपलोड (PDF किंवा JPEG, ७५ KB ते २५६ KB आकार).",
          },
          selfAttestation: {
            en: "Self-attested signature on the uploaded scan copy.",
            hi: "अपलोड की जाने वाली स्कैन कॉपी पर अपने हस्ताक्षर करें।",
            mr: "स्कॅन केलेल्या प्रतीवर स्वतःची स्वाक्षरी असणे आवश्यक आहे.",
          },
          digitalCopy: {
            en: "Entirely digital: no physical visit required if documents are clear.",
            hi: "पूरी तरह डिजिटल: दस्तावेज़ साफ़ होने पर कार्यालय जाने की आवश्यकता नहीं।",
            mr: "संपूर्ण ऑनलाइन: कागदपत्रे स्पष्ट असल्यास कार्यालयात जाण्याची गरज नाही.",
          },
          fileFormat: {
            en: "PDF or JPEG (resolution 100-150 DPI, 75 KB to 256 KB).",
            hi: "PDF या JPEG (75 KB से 256 KB)।",
            mr: "PDF किंवा JPEG (७५ KB ते २५६ KB).",
          },
          validityOrRecentness: {
            en: "Must be a valid and active government-issued ID.",
            hi: "दस्तावेज़ वैध और सक्रिय होना चाहिए।",
            mr: "सक्रिय आणि वैध अधिकृत ओळखपत्र.",
          },
          whatIfMissing: {
            en: "Any one of Aadhaar, Voter ID, PAN card, or Driving Licence is accepted.",
            hi: "आधार, वोटर आईडी, पैन कार्ड या ड्राइविंग लाइसेंस में से कोई भी एक चलेगा।",
            mr: "आधार, मतदान कार्ड, पॅन किंवा वाहन परवाना यांपैकी कोणताही एक चालेल.",
          },
        },
        localized: {
          name: {
            en: "Identity proof",
            hi: "पहचान का प्रमाण (Identity Proof)",
            mr: "ओळखीचा पुरावा (Identity Proof)",
          },
          shortDescription: {
            en: "A valid government ID proving the applicant's identity.",
            hi: "आवेदक की पहचान सिद्ध करने वाला सरकारी दस्तावेज़।",
            mr: "अर्जदाराची ओळख सिद्ध करणारे शासकीय ओळखपत्र.",
          },
          explanation: {
            en: "A document with your name that shows you are the person applying.",
            hi: "एक आधिकारिक दस्तावेज़ जिससे सिद्ध होता है कि आप ही आवेदन कर रहे हैं।",
            mr: "अर्ज करणारी व्यक्ती तुम्हीच आहात हे सिद्ध करणारा पुरावा.",
          },
          purpose: {
            en: "So the Tahsildar / Revenue office can confirm who is asking for the certificate.",
            hi: "ताकि तहसील कार्यालय आवेदक की वास्तविक पहचान की पुष्टि कर सके।",
            mr: "तहसील कार्यालयाला अर्जदाराची ओळख पडताळता यावी यासाठी.",
          },
          examples: {
            en: ["Aadhaar Card", "Voter ID Card", "Driving Licence", "PAN Card", "Passport"],
            hi: ["आधार कार्ड", "मतदाता पहचान पत्र (वोटर आईडी)", "ड्राइविंग लाइसेंस", "पैन कार्ड", "पासपोर्ट"],
            mr: ["आधार कार्ड", "मतदार ओळखपत्र", "वाहन चालक परवाना", "पॅन कार्ड", "पासपोर्ट"],
          },
        },
      },
      {
        id: "address-proof",
        name: "Address proof",
        shortDescription: "A document showing you live within the local Tehsildar's jurisdiction.",
        explanation: "Proves your residence in the specific taluka/district of Maharashtra so the concerned Talathi and Tehsildar can review your case.",
        purpose: "Allocates the application to the correct local Revenue authority.",
        examples: [
          "Ration Card (showing family members)",
          "Electricity bill (recent)",
          "Water bill",
          "Property Tax receipt",
          "7/12 extract or Land Revenue receipt",
          "Driving Licence",
          "Voter ID card",
        ],
        officialNotes: "Ration card is strongly recommended as address proof because it also verifies family members for household income calculation (Revenue Dept).",
        formatAndPreparation: {
          submission: {
            en: "Digital upload on Aaple Sarkar portal (PDF or JPEG, 75 KB to 256 KB).",
            hi: "पोर्टल पर डिजिटल स्कैन अपलोड करें (75 KB से 256 KB)।",
            mr: "पोर्टलवर डिजिटल स्कॅन अपलोड करा (७५ KB ते २५६ KB).",
          },
          selfAttestation: {
            en: "Self-attested scan copy.",
            hi: "स्कैन कॉपी पर स्वयं हस्ताक्षर करें।",
            mr: "प्रतीवर स्वतःची सही असणे आवश्यक.",
          },
          digitalCopy: {
            en: "Accepted.",
            hi: "स्वीकार्य।",
            mr: "स्वीकार्य.",
          },
          fileFormat: {
            en: "PDF or JPEG.",
            hi: "PDF या JPEG।",
            mr: "PDF किंवा JPEG.",
          },
          validityOrRecentness: {
            en: "Utility bills should be within the last 3 months.",
            hi: "बिजली या पानी का बिल 3 महीने से अधिक पुराना न हो।",
            mr: "वीज किंवा पाणी बिल मागील ३ महिन्यांतील असावे.",
          },
          whatIfMissing: {
            en: "If you do not have a Ration Card, electricity bill or property tax receipt along with a residential affidavit is accepted.",
            hi: "यदि राशन कार्ड नहीं है, तो बिजली का बिल या नगर पालिका टैक्स रसीद मान्य है।",
            mr: "रेशन कार्ड नसल्यास वीज बिल किंवा घरपट्टी पावती चालते.",
          },
        },
        localized: {
          name: {
            en: "Address proof",
            hi: "पते का प्रमाण (Address Proof)",
            mr: "पत्त्याचा पुरावा (Address Proof)",
          },
          shortDescription: {
            en: "A document showing you live within the local Tehsildar's jurisdiction.",
            hi: "प्रमाण जिससे सिद्ध हो कि आप संबंधित तहसील क्षेत्र में रहते हैं।",
            mr: "तुम्ही संबंधित तालुक्यात वास्तव्यास असल्याचा अधिकृत पुरावा.",
          },
          explanation: {
            en: "A document showing the residential address where you currently live in Maharashtra.",
            hi: "एक दस्तावेज़ जिससे प्रमाणित होता है कि आप महाराष्ट्र में कहाँ रहते हैं।",
            mr: "तुम्ही सध्या महाराष्ट्रात ज्या पत्त्यावर राहता तो दर्शवणारा पुरावा.",
          },
          purpose: {
            en: "So the application is routed to your local Talathi / Tehsildar office for verification.",
            hi: "ताकि आवेदन आपके स्थानीय तलाठी/तहसीलदार कार्यालय को सत्यापन हेतु भेजा जा सके।",
            mr: "अर्ज योग्य तलाठी आणि तहसील कार्यालयाकडे तपासणीसाठी जाण्यासाठी.",
          },
          examples: {
            en: ["Ration Card", "Electricity bill", "Property tax receipt", "Water bill", "Voter ID"],
            hi: ["राशन कार्ड (परिवार सूची सहित)", "बिजली का बिल", "प्रॉपर्टी टैक्स रसीद", "वोटर आईडी"],
            mr: ["रेशन कार्ड", "वीज बिल", "घरपट्टी पावती", "पाणी बिल", "मतदार ओळखपत्र"],
          },
        },
      },
      {
        id: "income-proof",
        name: "Proof of Income",
        shortDescription: "Authoritative papers documenting household earnings over the past year.",
        explanation: "Documents establishing the actual earnings of the family for the financial year. The exact document depends on your occupation.",
        purpose: "The Tehsildar issues a legally binding financial figure that must be backed by evidence.",
        examples: [
          "Form 16 / Salary Certificate issued by employer (for salaried)",
          "Income Tax Return (ITR-V) acknowledgement (for businessmen/professionals)",
          "Talathi Income Inquiry Report / Ahwal (for farmers & rural residents)",
          "Certificate of Income from local Gram Sevak / Ward Officer",
          "Affidavit of declared income on ₹100 stamp paper (for daily wage / informal workers)",
        ],
        officialNotes: "Income proof must account for all income sources across the household (Aaple Sarkar User Manual).",
        formatAndPreparation: {
          submission: {
            en: "Upload scanned copy on portal (PDF/JPEG, 75 KB to 256 KB).",
            hi: "पोर्टल पर स्कैन अपलोड करें (PDF/JPEG, 75 KB से 256 KB)।",
            mr: "पोर्टलवर स्कॅन प्रत अपलोड करा (PDF/JPEG, ७५ KB ते २५६ KB).",
          },
          selfAttestation: {
            en: "Self-attested by applicant.",
            hi: "आवेदक द्वारा हस्ताक्षरित।",
            mr: "अर्जदाराची स्वाक्षरी.",
          },
          digitalCopy: {
            en: "Accepted.",
            hi: "स्वीकार्य।",
            mr: "स्वीकार्य.",
          },
          fileFormat: {
            en: "PDF or JPEG (clear legible text).",
            hi: "PDF या JPEG।",
            mr: "PDF किंवा JPEG.",
          },
          validityOrRecentness: {
            en: "Must be for the immediately preceding financial year.",
            hi: "तत्काल पिछले वित्तीय वर्ष का होना चाहिए।",
            mr: "लगेचच संपलेल्या आर्थिक वर्षाचे असणे आवश्यक आहे.",
          },
          whatIfMissing: {
            en: "If working in informal or unorganized sector without salary slips, an income affidavit on ₹100 stamp paper attested by an Executive Magistrate or Notary is officially acceptable.",
            hi: "असंगठित क्षेत्र या मजदूरी के मामले में ₹100 के स्टैंप पेपर पर नोटरीकृत हलफ़नामा (Affidavit) मान्य होता है।",
            mr: "असंघटित क्षेत्रातील कामगारांसाठी १०० रुपयांच्या स्टॅम्प पेपरवरील प्रतिज्ञापत्र (Affidavit) ग्राह्य धरले जाते.",
          },
        },
        localized: {
          name: {
            en: "Proof of Income",
            hi: "आय का प्रमाण (Income Proof)",
            mr: "उत्पन्नाचा पुरावा (Income Proof)",
          },
          shortDescription: {
            en: "Authoritative papers documenting household earnings over the past year.",
            hi: "पारिवारिक आय सिद्ध करने वाले आधिकारिक दस्तावेज़।",
            mr: "कुटुंबाचे वार्षिक उत्पन्न सिद्ध करणारी अधिकृत कागदपत्रे.",
          },
          explanation: {
            en: "Papers proving how much the household earned over the financial year.",
            hi: "दस्तावेज़ जो यह दर्शाते हैं कि परिवार ने पूरे वर्ष में कितनी कमाई की।",
            mr: "कुटुंबाने आर्थिक वर्षात किती कमाई केली हे दर्शवणारे कागदपत्र.",
          },
          purpose: {
            en: "The income certificate specifies an exact rupee figure, requiring documentary proof.",
            hi: "प्रमाण पत्र में एक निश्चित राशि लिखी जाती है, जिसके लिए दस्तावेज़ी साक्ष्य अनिवार्य है।",
            mr: "दाखल्यावर उत्पन्नाचा आकडा नमूद करण्यासाठी कागदोपत्री पुरावा लागतो.",
          },
          examples: {
            en: [
              "Form 16 or Salary Slip (Salaried)",
              "Income Tax Return acknowledgment (Business / Self-employed)",
              "Talathi verification report (Farmers / Rural)",
              "Income affidavit on stamp paper (Daily wage / Informal)",
            ],
            hi: [
              "फॉर्म 16 या सैलरी स्लिप (नौकरीपेशा)",
              "आयकर रिटर्न - ITR (व्यापारी/स्व-रोजगार)",
              "तलाठी पंचनामा / रिपोर्ट (किसान/ग्रामीण)",
              "स्टैंप पेपर पर आय घोषणा हलफ़नामा (असंगठित मजदूर)",
            ],
            mr: [
              "फॉर्म १६ किंवा सॅलरी स्लिप (नोकरदार)",
              "आयकर विवरणपत्र - ITR (व्यापारी)",
              "तलाठी उत्पन्न अहवाल (शेतकरी/ग्रामीण)",
              "प्रतिज्ञापत्र / इन्कम ॲफिडेव्हिट (शेतमजूर/असंघटित)",
            ],
          },
        },
      },
      {
        id: "satbara-proof",
        name: "7/12 & 8-A Extract (for Farmers)",
        shortDescription: "Official land revenue records for agricultural income assessment.",
        explanation: "Shows agricultural land holding and crop details so the Talathi can estimate agricultural earnings.",
        purpose: "Required by the Revenue Department to verify agricultural earnings.",
        situationIds: ["farmer"],
        examples: [
          "Digitally signed 7/12 (Satbara) extract from Mahabhumi portal",
          "8-A extract showing landholding khata",
          "Talathi crop inspection entry (Pik Pahani)",
        ],
        officialNotes: "Digital 7/12 extracts with QR code from mahabhumi.gov.in are accepted directly (Govt of Maharashtra GR).",
        formatAndPreparation: {
          submission: {
            en: "Upload scanned copy or digital PDF on portal.",
            hi: "डिजिटल 7/12 की PDF पोर्टल पर अपलोड करें।",
            mr: "पोर्टलवर डिजिटल ७/१२ PDF अपलोड करा.",
          },
          selfAttestation: {
            en: "Signed by landowner.",
            hi: "भूस्वामी द्वारा हस्ताक्षरित।",
            mr: "जमीन मालकाची स्वाक्षरी.",
          },
          digitalCopy: {
            en: "Digitally signed Mahabhumi PDF accepted.",
            hi: "महाभूमि से डाउनलोड डिजिटल 7/12 सीधे मान्य है।",
            mr: "महाभूमीवरील डिजिटल सही असलेला ७/१२ ग्राह्य धरला जातो.",
          },
          fileFormat: {
            en: "PDF or JPEG (under 256 KB).",
            hi: "PDF या JPEG (256 KB से कम)।",
            mr: "PDF किंवा JPEG (२५६ KB पेक्षा कमी).",
          },
          validityOrRecentness: {
            en: "Extract should be recent (current financial year).",
            hi: "उतारा चालू वर्ष का होना चाहिए।",
            mr: "उतारा चालू वर्षाचा असावा.",
          },
        },
        localized: {
          name: {
            en: "7/12 & 8-A Extract (Farmers)",
            hi: "7/12 और 8-अ का उतारा (किसानों हेतु)",
            mr: "७/१२ आणि ८-अ उतारा (शेतकऱ्यांसाठी)",
          },
          shortDescription: {
            en: "Official land revenue records for agricultural income assessment.",
            hi: "कृषि आय के मूल्यांकन के लिए भूमि अभिलेख।",
            mr: "शेतीच्या उत्पन्नाच्या मोजणीसाठी जमिनीचा महसूल दाखला.",
          },
          explanation: {
            en: "Agricultural land records proving farming income.",
            hi: "खेती की ज़मीन और फ़सल का आधिकारिक सरकारी रिकॉर्ड।",
            mr: "शेतीची जमीन आणि पिकांची शासकीय नोंद.",
          },
          purpose: {
            en: "Used by the Revenue Department to assess annual crop income.",
            hi: "कृषि आय का सही आकलन करने के लिए।",
            mr: "शेतीतून मिळणाऱ्या वार्षिक उत्पन्नाचा अंदाज लावण्यासाठी.",
          },
          examples: {
            en: ["Digitally signed 7/12 extract", "8-A extract"],
            hi: ["डिजिटल हस्ताक्षरित 7/12 उतारा", "8-अ उतारा"],
            mr: ["डिजिटल स्वाक्षरीचा ७/१२ उतारा", "८-अ उतारा"],
          },
        },
      },
      {
        id: "self-declaration",
        name: "Self-Declaration Form",
        shortDescription: "Prescribed declaration form confirming family members and income.",
        explanation: "A standard declaration form mandated under the Maharashtra Right to Services Act, signed by the applicant declaring that all details provided are true.",
        purpose: "Legal declaration making the applicant legally liable for correct information.",
        examples: [
          "Standard Aaple Sarkar Self-Declaration format (downloadable from portal)",
        ],
        officialNotes: "Self-declaration format is available in the Aaple Sarkar portal document section.",
        formatAndPreparation: {
          submission: {
            en: "Download template, print, fill, sign, and upload scan.",
            hi: "फ़ॉर्मेट डाउनलोड करें, भरें, हस्ताक्षर करें और स्कैन अपलोड करें।",
            mr: "नमुना डाउनलोड करून माहिती भरा, स्वाक्षरी करा आणि स्कॅन अपलोड करा.",
          },
          selfAttestation: {
            en: "Applicant's signature mandatory.",
            hi: "आवेदक के हस्ताक्षर अनिवार्य।",
            mr: "अर्जदाराची स्वाक्षरी बंधनकारक.",
          },
          digitalCopy: {
            en: "Upload scan as PDF or JPEG (75 KB to 256 KB).",
            hi: "स्कैन PDF या JPEG अपलोड करें।",
            mr: "स्कॅन प्रत PDF किंवा JPEG मध्ये अपलोड करा.",
          },
          fileFormat: {
            en: "PDF or JPEG.",
            hi: "PDF या JPEG।",
            mr: "PDF किंवा JPEG.",
          },
          validityOrRecentness: {
            en: "Filled during application.",
            hi: "आवेदन के समय भरा गया।",
            mr: "अर्जाच्या वेळी भरलेले.",
          },
        },
        localized: {
          name: {
            en: "Self-Declaration Form",
            hi: "स्व-घोषणा पत्र (Self-Declaration Form)",
            mr: "स्वयंघोषणा पत्र (Self-Declaration Form)",
          },
          shortDescription: {
            en: "Prescribed declaration form confirming family members and income.",
            hi: "नियत प्रारूप में आय व परिवार के सदस्यों का स्व-घोषणा पत्र।",
            mr: "कुटुंबाची माहिती आणि उत्पन्न जाहीर करणारे विहित नमुन्यातील स्वयंघोषणा पत्र.",
          },
          explanation: {
            en: "A standard legal declaration signed by the head of the family.",
            hi: "परिवार के मुखिया द्वारा हस्ताक्षरित क़ानूनी घोषणा पत्र।",
            mr: "कुटुंबप्रमुखाने स्वाक्षरी केलेले कायदेशीर प्रतिज्ञापत्र.",
          },
          purpose: {
            en: "Binds the applicant to truthfulness under penalty of law.",
            hi: "आवेदक को क़ानूनी रूप से सत्य जानकारी देने के लिए बाध्य करता है।",
            mr: "माहिती खरी असल्याचे कायदेशीर हमीपत्र म्हणून.",
          },
          examples: {
            en: ["Prescribed Aaple Sarkar Self-Declaration template"],
            hi: ["आपले सरकार निर्धारित स्व-घोषणा प्रारूप"],
            mr: ["आपले सरकार संकेतस्थळावरील विहित स्वयंघोषणा नमुना"],
          },
        },
      },
      {
        id: "photograph",
        name: "Applicant Photograph",
        shortDescription: "Recent passport-size photo of the applicant.",
        explanation: "Recent photo of the applicant, attached to the certificate and stamped with digital authentication.",
        purpose: "Embedded directly into the issued digital income certificate.",
        examples: ["Recent passport-size photo (size 5 KB to 20 KB, 100 DPI JPEG)"],
        officialNotes: "Aaple Sarkar portal strictly restricts photo uploads to width 160px, height 200-212px, file size 5 KB to 20 KB in JPEG format.",
        formatAndPreparation: {
          submission: {
            en: "Digital upload on Aaple Sarkar portal profile.",
            hi: "पोर्टल प्रोफ़ाइल में डिजिटल अपलोड।",
            mr: "पोर्टलवरील प्रोफाईलमध्ये डिजिटल अपलोड.",
          },
          selfAttestation: {
            en: "Not required on photograph.",
            hi: "फ़ोटो पर हस्ताक्षर की आवश्यकता नहीं।",
            mr: "फोटोवर स्वाक्षरीची गरज नाही.",
          },
          digitalCopy: {
            en: "Required (JPEG format, 5 KB to 20 KB only).",
            hi: "अनिवार्य (केवल JPEG, 5 KB से 20 KB)।",
            mr: "अनिवार्य (केवळ JPEG, ५ KB ते २० KB).",
          },
          fileFormat: {
            en: "JPEG (dimensions: width 160px, height 200px to 212px).",
            hi: "JPEG (चौड़ाई 160px, ऊंचाई 200-212px)।",
            mr: "JPEG (रुंदी १६०px, उंची २००-२१२px).",
          },
          validityOrRecentness: {
            en: "Taken within the last 6 months.",
            hi: "पिछले 6 महीने में खींची गई हो।",
            mr: "मागील ६ महिन्यांतील असावा.",
          },
          importantNotes: {
            en: "Check file size strictly: the portal will display an error if the photo is larger than 20 KB.",
            hi: "साइज़ का विशेष ध्यान रखें: 20 KB से बड़ी फ़ोटो होने पर पोर्टल एरर दिखाता है।",
            mr: "आकाराची काळजी घ्या: फोटो २० KB पेक्षा मोठा असल्यास पोर्टलवर एरर येतो.",
          },
        },
        localized: {
          name: {
            en: "Applicant Photograph",
            hi: "आवेदक का फोटो (Photograph)",
            mr: "अर्जदाराचा फोटो (Photograph)",
          },
          shortDescription: {
            en: "Recent passport-size photo of the applicant.",
            hi: "आवेदक की हाल ही में खींची गई पासपोर्ट साइज़ फोटो।",
            mr: "अर्जदाराचा नुकताच काढलेला पासपोर्ट आकाराचा फोटो.",
          },
          explanation: {
            en: "A clear passport-size photo of the applicant.",
            hi: "आवेदक का साफ़ पासपोर्ट साइज़ फोटो।",
            mr: "अर्जदाराचा स्पष्ट पासपोर्ट आकाराचा फोटो.",
          },
          purpose: {
            en: "Printed directly onto the digitally issued certificate.",
            hi: "डिजिटल प्रमाण पत्र पर मुद्रित किया जाता है।",
            mr: "डिजिटल प्रमाणपत्रावर छापण्यासाठी वापरला जातो.",
          },
          examples: {
            en: ["Recent passport-size photograph (5 KB to 20 KB)"],
            hi: ["हालिया पासपोर्ट साइज़ फोटो (5 से 20 KB)"],
            mr: ["नुकताच काढलेला पासपोर्ट फोटो (५ ते २० KB)"],
          },
        },
      },
    ],
    steps: [
      {
        title: "Registration on Aaple Sarkar",
        description: "Register with your mobile number on aaplesarkar.mahaonline.gov.in and create your citizen profile.",
        localized: {
          title: {
            en: "Registration on Aaple Sarkar",
            hi: "आपले सरकार पोर्टल पर पंजीकरण",
            mr: "आपले सरकार पोर्टलवर नोंदणी",
          },
          description: {
            en: "Create an account on aaplesarkar.mahaonline.gov.in using mobile OTP verification. Upload your profile photo and save basic address details.",
            hi: "aaplesarkar.mahaonline.gov.in पर मोबाइल ओटीपी से नागरिक खाता बनाएं। प्रोफ़ाइल फ़ोटो और पता सेव करें।",
            mr: "aaplesarkar.mahaonline.gov.in वर मोबाईल ओटीपीने खाते तयार करा. प्रोफाईल फोटो आणि पत्ता जतन करा.",
          },
        },
      },
      {
        title: "Select Revenue Department & Income Certificate",
        description: "Navigate to Revenue Department -> Revenue Services -> Income Certificate.",
        localized: {
          title: {
            en: "Select Revenue Department & Income Certificate",
            hi: "राजस्व विभाग व आय प्रमाण पत्र का चयन",
            mr: "महसूल विभाग आणि उत्पन्नाचा दाखला निवडा",
          },
          description: {
            en: "Choose whether you need a 1-year or 3-year certificate. Fill in family details, sources of income, and beneficiary particulars.",
            hi: "चुनें कि 1 वर्ष या 3 वर्ष का प्रमाण पत्र चाहिए। परिवार के सभी सदस्यों का विवरण, आय के साधन और लाभार्थी का नाम भरें।",
            mr: "१ वर्ष किंवा ३ वर्षांचा दाखला हवा आहे ते निवडा. कुटुंबाची माहिती, उत्पन्नाचे स्रोत आणि ज्याच्यासाठी दाखला हवा त्याचे नाव भरा.",
          },
        },
      },
      {
        title: "Upload Scanned Documents & Pay Fee",
        description: "Attach self-attested scans (75-256 KB) and pay the ₹33.60 statutory portal fee.",
        localized: {
          title: {
            en: "Upload Scanned Documents & Pay Fee",
            hi: "दस्तावेज़ अपलोड करें व ₹33.60 का भुगतान करें",
            mr: "कागदपत्रे अपलोड करा आणि ₹३३.६० शुल्क भरा",
          },
          description: {
            en: "Attach identity proof, address proof, income proof, and self-declaration. Pay ₹33.60 via UPI or Net Banking and receive your Application ID.",
            hi: "पहचान, पता, आय का प्रमाण और स्व-घोषणा पत्र संलग्न करें। UPI या नेट बैंकिंग से ₹33.60 का शुल्क दें और एप्लिकेशन आईडी सुरक्षित रखें।",
            mr: "ओळख, पत्ता, उत्पन्नाचा पुरावा आणि स्वयंघोषणा पत्र जोडा. UPI किंवा नेट बँकिंगने ₹३३.६० भरा आणि अर्ज क्रमांक जपून ठेवा.",
          },
        },
      },
      {
        title: "Tehsildar Review & Digital Certificate Download",
        description: "The Talathi / Tehsildar reviews the application within 15 days; download your barcode-enabled certificate.",
        localized: {
          title: {
            en: "Tehsildar Review & Digital Certificate Download",
            hi: "सत्यापन व डिजिटल प्रमाण पत्र डाउनलोड",
            mr: "पडताळणी आणि डिजिटल दाखला डाऊनलोड",
          },
          description: {
            en: "The Talathi and Tehsildar verify documents under the Right to Services (RTS) Act. Once signed, download the digitally signed certificate with QR code from your dashboard.",
            hi: "तहसीलदार कार्यालय 15 दिनों में आवेदन का सत्यापन करता है। मंज़ूर होते ही क्यूआर कोड वाला डिजिटल प्रमाण पत्र सीधे पोर्टल से डाउनलोड करें।",
            mr: "लोकसेवा हक्क अधिनियमानुसार १५ दिवसांत तहसीलदार पडताळणी करतात. दाखला मंजूर झाल्यावर थेट पोर्टलवरून QR कोड असलेला डिजिटल दाखला डाऊनलोड करा.",
          },
        },
      },
    ],
    fees: [
      {
        item: {
          en: "Government Portal & Processing Fee (Aaple Sarkar RTS Service)",
          hi: "शासकीय पोर्टल व सेवा शुल्क (आपले सरकार)",
          mr: "शासकीय पोर्टल आणि प्रक्रिया शुल्क (आपले सरकार)",
        },
        amount: "₹33.60",
        verifiedSource: "Maharashtra Right to Public Services Act (RTS) Notification & MahaOnline portal charges.",
      },
    ],
    timelines: {
      overall: {
        en: "15 working days statutory limit under Maharashtra Right to Public Services Act (RTS).",
        hi: "महाराष्ट्र लोकसेवा हक्क अधिनियम (RTS) के तहत 15 कार्यदिवस की वैधानिक समय सीमा।",
        mr: "महाराष्ट्र लोकसेवा हक्क अधिनियमांतर्गत (RTS) १५ कामकाजाचे दिवस.",
      },
      details: {
        en: "Track daily progress using your Application ID on Aaple Sarkar. If delayed beyond 15 days, you can file a First Appeal online.",
        hi: "आपले सरकार पर एप्लिकेशन आईडी से स्थिति ट्रैक करें। 15 दिन से अधिक देरी होने पर पोर्टल पर ही प्रथम अपील दर्ज कर सकते हैं।",
        mr: "पोर्टलवर अर्ज क्रमांकाने दररोज सद्यस्थिती तपासा. १५ दिवसांत न मिळाल्यास ऑनलाइन पहिली अपील दाखल करता येते.",
      },
    },
    commonMistakes: [
      {
        mistake: {
          en: "Uploading photos larger than 20 KB",
          hi: "20 KB से बड़ी फोटो अपलोड करना",
          mr: "२० KB पेक्षा मोठा फोटो अपलोड करणे",
        },
        howToAvoid: {
          en: "The Aaple Sarkar portal has a strict 5 KB - 20 KB limit. Resize your photo before uploading to avoid form submission failure.",
          hi: "आपले सरकार पर 5 KB से 20 KB तक की ही फोटो स्वीकार की जाती है। अपलोड से पहले फोटो रीसाइज़ कर लें।",
          mr: "पोर्टलवर ५ ते २० KB मधीलच फोटो स्वीकारला जातो. अपलोड करण्यापूर्वी फोटोचा आकार तपासून घ्या.",
        },
      },
      {
        mistake: {
          en: "Declaring only one person's income instead of entire household",
          hi: "केवल एक व्यक्ति की आय लिखना और परिवार के अन्य कमाने वालों को छोड़ना",
          mr: "कुटुंबातील एकाच व्यक्तीचे उत्पन्न दाखवून इतर मिळवत्या व्यक्तींची माहिती न देणे",
        },
        howToAvoid: {
          en: "Income certificates certify household income. If both father and mother earn, declare the combined total to match ration card records.",
          hi: "आय प्रमाण पत्र पूरे परिवार का बनता है। यदि माता और पिता दोनों कमाते हैं, तो दोनों की आय जोड़कर लिखें।",
          mr: "उत्पन्नाचा दाखला संपूर्ण कुटुंबासाठी असतो. आई-वडील दोघेही कमावत असल्यास दोघांचे एकत्रित उत्पन्न नमूद करा.",
        },
      },
      {
        mistake: {
          en: "Visiting the Tehsil office unnecessarily when applying online",
          hi: "ऑनलाइन आवेदन के बाद भी अनावश्यक रूप से तहसील दफ्तर के चक्कर काटना",
          mr: "ऑनलाइन अर्ज केल्यानंतरही विनाकारण तहसील कचेरीत फेऱ्या मारणे",
        },
        howToAvoid: {
          en: "Certificates under Aaple Sarkar are digitally signed and carry a verifiable 2D barcode. No physical stamp or visit is required unless an inquiry notice is issued.",
          hi: "पोर्टल से जारी प्रमाण पत्र डिजिटल हस्ताक्षर युक्त होते हैं। इस पर किसी मुहर की ज़रूरत नहीं होती और न ही दफ्तर जाने की।",
          mr: "हा दाखला डिजिटल स्वाक्षरीने दिला जातो. त्यावर प्रत्यक्ष सही-शिक्क्याची गरज नसते, त्यामुळे तहसील कार्यालयात जाण्याची आवश्यकता नाही.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "Is the digitally downloaded certificate legally valid without a physical rubber stamp?",
          hi: "क्या बिना रबर स्टाम्प के डिजिटल डाउनलोड किया गया प्रमाण पत्र मान्य है?",
          mr: "रबरी शिक्क्याशिवाय डाऊनलोड केलेला डिजिटल दाखला कायदेशीररीत्या ग्राह्य आहे का?",
        },
        answer: {
          en: "Yes, 100%. Under Information Technology Act 2000 and Maharashtra Govt circulars, certificates bearing digital signatures and barcodes have complete legal validity everywhere, including college admissions and government recruitments.",
          hi: "हाँ, पूरी तरह मान्य है। आईटी अधिनियम 2000 और महाराष्ट्र सरकार के परिपत्रों के अनुसार डिजिटल हस्ताक्षर और बारकोड वाला प्रमाण पत्र सभी कॉलेज प्रवेश और सरकारी नौकरियों में मान्य है।",
          mr: "होय, १००% ग्राह्य आहे. माहिती तंत्रज्ञान कायदा २००० नुसार बारकोड आणि डिजिटल स्वाक्षरी असलेला दाखला सर्व महाविद्यालये आणि शासकीय कामांसाठी पूर्णपणे वैध आहे.",
        },
      },
      {
        question: {
          en: "What is the validity period of an Income Certificate in Maharashtra?",
          hi: "महाराष्ट्र में आय प्रमाण पत्र की वैधता कितने समय की होती है?",
          mr: "महाराष्ट्रात उत्पन्नाच्या दाखल्याची मुदत किती असते?",
        },
        answer: {
          en: "A 1-year income certificate is valid for the financial year in which it was issued (ending 31st March). If you applied for a 3-year certificate, it is valid for 3 consecutive financial years.",
          hi: "1 वर्ष का प्रमाण पत्र उस वित्तीय वर्ष की 31 मार्च तक मान्य होता है। 3 वर्ष का प्रमाण पत्र लगातार 3 वित्तीय वर्षों के लिए मान्य होता है।",
          mr: "१ वर्षाचा दाखला चालू आर्थिक वर्षाच्या ३१ मार्चपर्यंत वैध असतो. ३ वर्षांसाठी घेतलेला दाखला पुढील ३ आर्थिक वर्षांसाठी चालतो.",
        },
      },
    ],
    officialSource: {
      name: "Aaple Sarkar, Government of Maharashtra",
      url: "https://aaplesarkar.mahaonline.gov.in/",
      more: [
        { name: "Track Application Status (Aaple Sarkar RTS)", url: "https://aaplesarkar.mahaonline.gov.in/en/TrackApplication" },
        { name: "Verify Digital Certificate via Barcode", url: "https://aaplesarkar.mahaonline.gov.in/en/VerifyCertificate" },
        { name: "Maharashtra Right to Public Services Commission", url: "https://aaplesarkar.mahaonline.gov.in/en/RTS" },
      ],
    },
  },
];

export function getProcess(slug: string): Process | undefined {
  return processes.find((p) => p.slug === slug);
}

export function getDocument(process: Process, documentId: string): DocumentRequirement | undefined {
  return process.documents.find((d) => d.id === documentId);
}
