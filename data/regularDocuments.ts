import type { Process } from "./processes";

export const regularProcesses: Process[] = [
  // -------------------------------------------------------------------------
  // 1. AADHAAR CARD
  // -------------------------------------------------------------------------
  {
    id: "aadhaar",
    slug: "aadhaar-card",
    title: "Aadhaar Card",
    category: "Identity & Resident",
    description: "A 12-digit unique identity number issued by UIDAI, serving as nationwide proof of identity and residence for all Indian citizens and residents.",
    localizedTitle: {
      en: "Aadhaar Card",
      hi: "आधार कार्ड (Aadhaar Card)",
      mr: "आधार कार्ड (Aadhaar Card)",
    },
    localizedCategory: {
      en: "Identity & Resident",
      hi: "पहचान व निवास (Identity & Resident)",
      mr: "ओळख आणि निवास (Identity & Resident)",
    },
    localizedDescription: {
      en: "A 12-digit unique identity number issued by UIDAI, serving as nationwide proof of identity and residence for all Indian citizens and residents.",
      hi: "भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI) द्वारा जारी 12 अंकों की विशिष्ट पहचान संख्या, जो पूरे भारत में पहचान और पते का सार्वभौमिक प्रमाण है।",
      mr: "UIDAI तर्फे दिली जाणारी १२ अंकी विशिष्ट ओळख संख्या, जी संपूर्ण भारतात ओळख आणि पत्त्याचा अधिकृत पुरावा म्हणून ग्राह्य धरली जाते.",
    },
    keywords: [
      "aadhaar", "aadhar", "uidai", "myaadhaar", "uid", "eid", "biometrics", "enrolment",
      "आधार", "आधार कार्ड", "यूआईडीएआई", "बायोमेट्रिक",
      "आधार", "आधार कार्ड", "नोंदणी", "बायोमेट्रिक्स"
    ],
    scopeNote: "Covers individual residents of India applying for fresh enrolment or updating demographic/biometric details under UIDAI regulations.",
    localizedScopeNote: {
      en: "Covers fresh enrolment (free) and updates for Indian residents under official UIDAI guidelines. Minors require parental authentication.",
      hi: "यह मार्गदर्शिका UIDAI के आधिकारिक नियमों के तहत नए नामांकन (निःशुल्क) और विवरण अपडेट करने के लिए है।",
      mr: "ही मार्गदर्शिका UIDAI च्या अधिकृत नियमांनुसार नवीन नोंदणी (मोफत) आणि माहिती दुरुस्तीसाठी आहे.",
    },
    examplesConfirmedOfficial: true,
    lastChecked: "2026-10-01",
    whoCanApply: {
      en: "Any individual residing in India for 182 days or more in the preceding 12 months, including newborns and minors.",
      hi: "भारत में पिछले 12 महीनों में 182 दिन या उससे अधिक समय से रहने वाला कोई भी व्यक्ति, जिसमें नवजात शिशु और नाबालिग शामिल हैं।",
      mr: "मागील १२ महिन्यांत १८२ दिवस किंवा त्याहून अधिक काळ भारतात वास्तव्यास असणारा कोणताही व्यक्ती, ज्यात लहान मुलांचाही समावेश आहे.",
    },
    eligibility: {
      en: [
        "Must be a resident of India (Indian citizen or foreigner with valid resident visa).",
        "Individual must not already possess an active Aadhaar number (multiple enrolments lead to rejection).",
        "Must provide valid supporting documents for Identity, Address, and Date of Birth.",
      ],
      hi: [
        "भारत का निवासी होना चाहिए (भारतीय नागरिक या वैध निवासी वीज़ा धारक)।",
        "आवेदक के पास पहले से कोई आधार नंबर नहीं होना चाहिए (दोबारा नामांकन करने पर आवेदन खारिज हो जाता है)।",
        "पहचान, पता और जन्मतिथि के वैध सहायक दस्तावेज़ प्रस्तुत करने होंगे।",
      ],
      mr: [
        "भारताचा रहिवासी असणे आवश्यक आहे.",
        "अर्जदाराकडे आधीपासून दुसरा आधार क्रमांक नसावा (दुबार नोंदणी केल्यास अर्ज बाद ठरतो).",
        "ओळख, पत्ता आणि जन्मतारखेचा वैध पुरावा सादर करणे बंधनकारक आहे.",
      ],
    },
    situations: [
      {
        id: "fresh-enrolment",
        name: {
          en: "Fresh Enrolment (Adult 18+)",
          hi: "नया आधार नामांकन (वयस्क 18+)",
          mr: "नवीन आधार नोंदणी (वय १८+)",
        },
        description: {
          en: "First-time Aadhaar application for an individual aged 18 or above.",
          hi: "18 वर्ष या उससे अधिक आयु के व्यक्ति का पहली बार आधार पंजीकरण।",
          mr: "१८ वर्षे किंवा त्याहून अधिक वयाच्या व्यक्तीची पहिली आधार नोंदणी.",
        },
        applicableDocIds: ["identity-proof", "address-proof", "date-of-birth-proof"],
        notes: {
          en: "Fresh enrolment is completely free at all authorized Aadhaar Seva Kendras. Both iris, 10 fingerprints, and photo are captured.",
          hi: "नए आधार का पंजीकरण सभी अधिकृत आधार सेवा केंद्रों पर बिल्कुल निःशुल्क है। दोनों आँखों की पुतलियाँ, 10 उंगलियाँ और फोटो ली जाती है।",
          mr: "नवीन आधार नोंदणी कोणत्याही अधिकृत आधार केंद्रावर पूर्णपणे मोफत असते. दोन्ही डोळे, १० बोटे आणि छायाचित्र घेतले जाते.",
        },
      },
      {
        id: "baal-aadhaar",
        name: {
          en: "Baal Aadhaar (Children Under 5 Years)",
          hi: "बाल आधार (5 वर्ष से कम उम्र के बच्चे)",
          mr: "बाल आधार (५ वर्षांखालील मुले)",
        },
        description: {
          en: "Blue Aadhaar card issued for infants and children below 5 years.",
          hi: "5 वर्ष से कम आयु के शिशुओं और बच्चों के लिए जारी किया जाने वाला नीला आधार कार्ड।",
          mr: "५ वर्षांखालील लहान मुलांसाठी दिला जाणारा निळा आधार कार्ड.",
        },
        applicableDocIds: ["child-birth-certificate", "parent-aadhaar-proof"],
        notes: {
          en: "No biometrics (fingerprints/iris) are taken for children under 5. It is linked to parent's Aadhaar and requires mandatory update at age 5.",
          hi: "5 वर्ष से कम उम्र के बच्चों के बायोमेट्रिक नहीं लिए जाते। यह माता-पिता के आधार से लिंक होता है और 5 वर्ष की उम्र में बायोमेट्रिक अपडेट अनिवार्य होता है।",
          mr: "५ वर्षांखालील मुलांचे बायोमेट्रिक्स घेतले जात नाहीत. हे पालकांच्या आधारशी जोडलेले असते आणि वयाच्या ५ व्या वर्षी बायोमेट्रिक अपडेट करणे अनिवार्य असते.",
        },
      },
      {
        id: "mandatory-biometric-update",
        name: {
          en: "Mandatory Biometric Update (Ages 5 and 15)",
          hi: "अनिवार्य बायोमेट्रिक अपडेट (उम्र 5 और 15 वर्ष)",
          mr: "अनिवार्य बायोमेट्रिक अपडेट (वय ५ आणि १५ वर्षे)",
        },
        description: {
          en: "Compulsory refresh of fingerprints, iris, and facial photograph upon turning 5 and 15 years old.",
          hi: "5 और 15 वर्ष की आयु पूरी होने पर उंगलियों के निशान, पुतलियों और चेहरे के फोटो का अनिवार्य नवीनीकरण।",
          mr: "वय ५ आणि १५ वर्षे पूर्ण झाल्यावर बोटांचे ठसे, डोळे आणि चेहऱ्याचे छायाचित्र अपडेट करणे बंधनकारक असते.",
        },
        applicableDocIds: ["existing-aadhaar-copy", "school-id-or-birth"],
        notes: {
          en: "This update is 100% free of charge at all authorized Aadhaar centres under government mandate.",
          hi: "सरकारी नियमानुसार 5 और 15 वर्ष की उम्र में यह बायोमेट्रिक अपडेट आधार केंद्रों पर पूरी तरह मुफ़्त है।",
          mr: "शासकीय नियमानुसार ५ आणि १५ वर्षे वयातील हे बायोमेट्रिक अपडेट सर्व आधार केंद्रांवर पूर्णपणे मोफत केले जाते.",
        },
      },
      {
        id: "demographic-update",
        name: {
          en: "Demographic Update (Address / Mobile / Name)",
          hi: "विवरण अपडेट (पता / मोबाइल / नाम सुधार)",
          mr: "माहिती बदल (पत्ता / मोबाईल / नाव दुरुस्ती)",
        },
        description: {
          en: "Updating current residential address, linking active mobile number, or correcting spelling in name.",
          hi: "वर्तमान आवासीय पता बदलना, नया मोबाइल नंबर जोड़ना या नाम की वर्तनी में सुधार करना।",
          mr: "सध्याचा पत्ता बदलणे, चालू मोबाईल नंबर जोडणे किंवा नावातील स्पेलिंग दुरुस्त करणे.",
        },
        applicableDocIds: ["address-proof", "identity-proof"],
        notes: {
          en: "Address can be updated online via myAadhaar portal (₹50 fee). Mobile number linkage strictly requires physical visit to an Aadhaar Kendra.",
          hi: "पता myAadhaar पोर्टल पर ऑनलाइन बदला जा सकता है (₹50 शुल्क)। मोबाइल नंबर लिंक करवाने के लिए आधार केंद्र जाना अनिवार्य है।",
          mr: "पत्ता myAadhaar पोर्टलवरून ऑनलाइन बदलता येतो (₹५० शुल्क). मोबाईल नंबर लिंक करण्यासाठी आधार केंद्रावर प्रत्यक्ष जाणे अनिवार्य आहे.",
        },
      },
    ],
    documents: [
      {
        id: "identity-proof",
        name: "Proof of Identity (PoI)",
        shortDescription: "An official government-issued photo identity document bearing applicant's full name.",
        explanation: "Confirms your legal identity. The document must display your photograph and full name clearly as per official UIDAI list of valid documents.",
        purpose: "Ensures no proxy or ghost enrolments occur in the national identity database.",
        examples: [
          "Passport (Indian)",
          "PAN Card / e-PAN",
          "Voter Identity Card (EPIC)",
          "Driving Licence",
          "Ration Card / PDS Card bearing applicant photo",
          "Service Photo ID Card issued by Central / State Govt / PSU",
        ],
        officialNotes: "The name on the identity proof must match the enrolment form exactly letter-for-letter.",
        formatAndPreparation: {
          submission: {
            en: "Original document brought to the Aadhaar Kendra for instant scanning and handed back immediately.",
            hi: "मूल प्रति (Original) आधार केंद्र पर ले जाएं, जिसे स्कैन करके तुरंत वापस कर दिया जाता है।",
            mr: "मूळ कागदपत्र आधार केंद्रावर स्कॅन करण्यासाठी नेणे आवश्यक आहे, स्कॅन करून लगेच परत केले जाते.",
          },
          selfAttestation: {
            en: "Original document required for in-person scanning; photocopies are not retained.",
            hi: "मूल दस्तावेज़ से ही स्कैनिंग होती है; फोटोकॉपी जमा नहीं रखी जाती।",
            mr: "मूळ कागदपत्रावरूनच स्कॅनिंग केले जाते; झेरॉक्स प्रत ठेवून घेतली जात नाही.",
          },
          digitalCopy: {
            en: "Accepted online on myAadhaar portal as clear color PDF or JPEG under 2MB.",
            hi: "myAadhaar पोर्टल पर 2MB से कम साइज़ की स्पष्ट रंगीन PDF या JPEG मान्य है।",
            mr: "myAadhaar पोर्टलवर २MB पेक्षा कमी आकाराची रंगीत PDF किंवा JPEG ग्राह्य धरली जाते.",
          },
          fileFormat: {
            en: "Physical original at Kendra, or color PDF / JPEG / PNG online.",
            hi: "केंद्र पर भौतिक मूल दस्तावेज़, या ऑनलाइन रंगीन PDF / JPEG / PNG।",
            mr: "केंद्रावर प्रत्यक्ष मूळ कागदपत्र, किंवा ऑनलाइन रंगीत PDF / JPEG / PNG.",
          },
          validityOrRecentness: {
            en: "Must be currently valid and not expired (for DL, Passport).",
            hi: "दस्तावेज़ वैध होना चाहिए और उसकी समय-सीमा समाप्त (Expired) नहीं होनी चाहिए।",
            mr: "कागदपत्र वैध असावे आणि त्याची मुदत संपलेली नसावी (उदा. पासपोर्ट, ड्रायव्हिंग लायसन्स).",
          },
          whatIfMissing: {
            en: "If you have no standard ID proof, you can use UIDAI Standard Certificate signed by a Gazetted Officer / Tehsildar / Village Panchayat Head.",
            hi: "यदि कोई मानक पहचान पत्र नहीं है, तो राजपत्रित अधिकारी (Gazetted Officer) या तहसीलदार द्वारा हस्ताक्षरित UIDAI मानक प्रमाण पत्र उपयोग कर सकते हैं।",
            mr: "कोणताही मानक पुरावा नसल्यास, वर्ग-१ राजपत्रित अधिकारी किंवा तहसीलदारांच्या स्वाक्षरीचा UIDAI मानक दाखला वापरता येतो.",
          },
          importantNotes: {
            en: "Laminated documents where text is obscured will be rejected by the operator scanner.",
            hi: "धुंधले या लैमिनेटेड दस्तावेज़ जिनमें लिखावट स्पष्ट न हो, ऑपरेटर द्वारा अस्वीकार कर दिए जाएंगे।",
            mr: "अस्पष्ट किंवा खराब झालेले कागदपत्र स्कॅनरद्वारे नाकारले जाऊ शकते.",
          },
        },
      },
      {
        id: "address-proof",
        name: "Proof of Address (PoA)",
        shortDescription: "An official document proving your current residential address.",
        explanation: "Establishes where you reside. The Aadhaar letter will be dispatched by India Post to this exact physical address.",
        purpose: "To associate your biometric identity with your verified residential location.",
        examples: [
          "Electricity Bill (not older than 3 months)",
          "Water Bill (not older than 3 months)",
          "Bank Statement / Passbook with photo & branch stamp (not older than 3 months)",
          "Valid Registered Rent Agreement",
          "Voter ID Card",
          "Indian Passport",
        ],
        officialNotes: "Utility bills must not be older than 3 months from the date of application.",
        formatAndPreparation: {
          submission: {
            en: "Original bill / passbook for scanning at Kendra, or uploaded on myAadhaar.",
            hi: "केंद्र पर स्कैनिंग हेतु मूल बिल या पासबुक, अथवा myAadhaar पर अपलोड।",
            mr: "केंद्रावर स्कॅनिंगसाठी मूळ बिल किंवा पासबुक, किंवा myAadhaar वर अपलोड.",
          },
          selfAttestation: {
            en: "Self-attested copy required if uploading online.",
            hi: "ऑनलाइन अपलोड करते समय स्व-हस्ताक्षरित प्रति आवश्यक है।",
            mr: "ऑनलाइन अपलोड करताना स्वतःची स्वाक्षरी असलेली प्रत आवश्यक आहे.",
          },
          digitalCopy: {
            en: "Original digital e-bill PDF downloaded from official electricity/water utility portal is accepted.",
            hi: "बिजली/पानी बोर्ड के आधिकारिक पोर्टल से डाउनलोड की गई मूल e-bill PDF मान्य है।",
            mr: "महावितरण किंवा पाणीपुरवठा विभागाच्या अधिकृत पोर्टलवरून डाऊनलोड केलेले मूळ e-bill PDF ग्राह्य धरले जाते.",
          },
          fileFormat: {
            en: "Color PDF or JPG under 2MB.",
            hi: "2MB से कम साइज़ की रंगीन PDF या JPG।",
            mr: "२MB पेक्षा कमी आकाराची रंगीत PDF किंवा JPG.",
          },
          validityOrRecentness: {
            en: "Utility bills and bank statements must be less than 90 days old.",
            hi: "यूटिलिटी बिल और बैंक स्टेटमेंट 90 दिन से अधिक पुराने नहीं होने चाहिए।",
            mr: "लाईट बिल आणि बँक स्टेटमेंट ९० दिवसांपेक्षा जुने नसावे.",
          },
          whatIfMissing: {
            en: "Family members residing together can use Head of Family (HoF) based address update via Aadhaar OTP authorization.",
            hi: "परिवार के मुखिया (HoF) के आधार और ओटीपी सहमति द्वारा परिवार के अन्य सदस्य पता अपडेट कर सकते हैं।",
            mr: "कुटुंबप्रमुखाच्या (HoF) संमतीने आणि आधार ओटीपीद्वारे कुटुंबातील इतर सदस्यांचा पत्ता अपडेट करता येतो.",
          },
        },
      },
      {
        id: "date-of-birth-proof",
        name: "Proof of Date of Birth (DoB)",
        shortDescription: "A document verifying your exact day, month, and year of birth.",
        explanation: "Ensures your birth date is officially recorded as 'Verified' rather than 'Declared' in UIDAI records.",
        purpose: "Prevents age-disputes in school admissions, competitive exams, and pension entitlements.",
        examples: [
          "Birth Certificate issued by Registrar of Births and Deaths / Municipal Corporation",
          "SSLC / 10th Standard Board Passing Certificate showing Date of Birth",
          "Passport",
          "PAN Card",
          "Mark sheet issued by recognized Board or University",
        ],
        officialNotes: "Date of birth can be updated in Aadhaar ONLY ONCE in a lifetime. Ensure it matches your school records.",
        formatAndPreparation: {
          submission: {
            en: "Original certificate for in-person optical scanning at Kendra.",
            hi: "केंद्र पर स्कैनिंग हेतु मूल प्रमाण पत्र प्रस्तुत करें।",
            mr: "केंद्रावर स्कॅनिंगसाठी मूळ दाखला सादर करावा लागतो.",
          },
          selfAttestation: {
            en: "Original scanned; no paper retained.",
            hi: "मूल प्रति से स्कैन होता है; कोई कागज़ जमा नहीं रखा जाता।",
            mr: "मूळ कागदपत्रावरून स्कॅनिंग होते; कागद जमा करून घेतला जात नाही.",
          },
          digitalCopy: {
            en: "Original digital certificate with digital signature / QR code from civil registration authority.",
            hi: "नगर निगम या जन्म रजिस्ट्रार द्वारा जारी डिजिटल हस्ताक्षरित प्रमाण पत्र मान्य है।",
            mr: "महानगरपालिका किंवा जन्म नोंदणी अधिकाऱ्यांचा डिजिटल स्वाक्षरी असलेला दाखला ग्राह्य धरला जातो.",
          },
          fileFormat: {
            en: "PDF or JPEG under 2MB.",
            hi: "2MB से कम की PDF या JPEG।",
            mr: "२MB पेक्षा कमी आकाराची PDF किंवा JPEG.",
          },
          validityOrRecentness: {
            en: "Permanent validity. Must contain exact day, month, and year.",
            hi: "स्थायी वैधता। दिन, माह और वर्ष स्पष्ट होना आवश्यक है।",
            mr: "कायमस्वरूपी वैध. तारीख, महिना आणि वर्ष स्पष्ट असणे आवश्यक आहे.",
          },
          whatIfMissing: {
            en: "Without proof of DoB, date of birth will be marked as 'Declared/Approximate', which may be rejected for passport or college admissions.",
            hi: "जन्म प्रमाण के बिना जन्मतिथि केवल 'घोषित' मानी जाएगी, जिससे पासपोर्ट या कॉलेज प्रवेश में समस्या हो सकती है।",
            mr: "जन्माच्या पुराव्याशिवाय जन्मतारीख फक्त 'अंदाजे' मानली जाईल, ज्यामुळे पासपोर्ट किंवा कॉलेज प्रवेशात अडचण येऊ शकते.",
          },
        },
      },
      {
        id: "child-birth-certificate",
        name: "Child's Birth Certificate (For Baal Aadhaar)",
        shortDescription: "Official birth certificate of the child issued by Municipal Corporation or Panchayat.",
        explanation: "Mandatory for enrolling infants and children below 5 years under the Baal Aadhaar program.",
        purpose: "Links the child's identity legally with biological parents before biometric capture.",
        examples: [
          "Birth Certificate issued by Municipal Corporation / Nagar Palika / Gram Panchayat",
          "Discharge card / Birth slip issued by Government Hospital (temporary)",
        ],
        formatAndPreparation: {
          submission: {
            en: "Original birth certificate along with child present in person for photo.",
            hi: "बच्चे की उपस्थिति और फोटो के साथ मूल जन्म प्रमाण पत्र।",
            mr: "लहान मुलाच्या उपस्थितीसह आणि छायाचित्रासह मूळ जन्माचा दाखला.",
          },
          selfAttestation: {
            en: "Parent signs the enrolment slip on behalf of the minor.",
            hi: "माता या पिता नाबालिग की ओर से फॉर्म पर हस्ताक्षर करते हैं।",
            mr: "पालक अल्पवयीन मुलाच्या वतीने स्वाक्षरी करतात.",
          },
          digitalCopy: {
            en: "Color scanned copy of original birth certificate.",
            hi: "मूल जन्म प्रमाण पत्र की रंगीन स्कैन प्रति।",
            mr: "मूळ जन्म दाखल्याची रंगीत स्कॅन प्रत.",
          },
          fileFormat: {
            en: "PDF or JPEG.",
            hi: "PDF या JPEG।",
            mr: "PDF किंवा JPEG.",
          },
        },
      },
      {
        id: "parent-aadhaar-proof",
        name: "Parent's Aadhaar & Biometric Consent",
        shortDescription: "Active Aadhaar card and live biometric authentication of either mother or father.",
        explanation: "Children below 5 do not give fingerprints; their Aadhaar is digitally tied to their parent's Aadhaar UID.",
        purpose: "To prevent child trafficking and establish legal parentage.",
        examples: [
          "Father's original Aadhaar Card with biometric authentication",
          "Mother's original Aadhaar Card with biometric authentication",
        ],
        formatAndPreparation: {
          submission: {
            en: "The parent whose Aadhaar is linked must be physically present at the centre to authenticate via fingerprint/iris.",
            hi: "जिस माता/पिता का आधार लिंक होना है, उन्हें बायोमेट्रिक प्रमाणीकरण के लिए केंद्र पर व्यक्तिगत रूप से उपस्थित होना होगा।",
            mr: "ज्या पालकांचे आधार जोडायचे आहे, त्यांना अंगठ्याचा ठसा देण्यासाठी केंद्रावर प्रत्यक्ष उपस्थित राहावे लागते.",
          },
          selfAttestation: {
            en: "Authenticated digitally via fingerprint scanner.",
            hi: "फिंगरप्रिंट स्कैनर द्वारा डिजिटल प्रमाणीकरण।",
            mr: "बायोमेट्रिक स्कॅनरद्वारे डिजिटल पडताळणी.",
          },
          digitalCopy: {
            en: "Parent Aadhaar UID number entered into the UIDAI software.",
            hi: "सॉफ़्टवेयर में माता/पिता का आधार नंबर दर्ज किया जाता है।",
            mr: "प्रणालीमध्ये पालकांचा आधार क्रमांक नोंदवला जातो.",
          },
          fileFormat: {
            en: "Live biometric scan.",
            hi: "लाइव बायोमेट्रिक स्कैन।",
            mr: "प्रत्यक्ष बायोमेट्रिक स्कॅन.",
          },
        },
      },
      {
        id: "existing-aadhaar-copy",
        name: "Existing Aadhaar Letter / Card / Number",
        shortDescription: "Your current 12-digit Aadhaar number or physical card copy.",
        explanation: "Required to look up your existing record in the Central Identities Data Repository (CIDR).",
        purpose: "Ensures updates are applied strictly to your existing profile.",
        examples: [
          "Physical Aadhaar Card / e-Aadhaar PDF",
          "Aadhaar PVC Card",
          "12-digit Aadhaar number with active registered mobile number for OTP",
        ],
        formatAndPreparation: {
          submission: {
            en: "Aadhaar number provided on update form.",
            hi: "अपडेट फॉर्म पर 12 अंकों का आधार नंबर दर्ज करें।",
            mr: "अर्जावर १२ अंकी आधार क्रमांक नमूद करावा.",
          },
          selfAttestation: {
            en: "Not required; validated via OTP or biometrics.",
            hi: "आवश्यक नहीं; ओटीपी या बायोमेट्रिक्स से जांच होती है।",
            mr: "गरज नाही; ओटीपी किंवा बायोमेट्रिक्सने खात्री केली जाते.",
          },
          digitalCopy: {
            en: "e-Aadhaar PDF downloaded from myAadhaar.",
            hi: "myAadhaar से डाउनलोड की गई e-Aadhaar PDF।",
            mr: "myAadhaar वरून डाऊनलोड केलेली e-Aadhaar PDF.",
          },
          fileFormat: {
            en: "PDF or numeric 12 digits.",
            hi: "PDF या 12 अंकों की संख्या।",
            mr: "PDF किंवा १२ अंकी क्रमांक.",
          },
        },
      },
      {
        id: "school-id-or-birth",
        name: "School ID / Birth Certificate (for 5/15 Mandatory Update)",
        shortDescription: "Proof of age confirming the child has attained 5 or 15 years.",
        explanation: "Carried during mandatory biometric refresh at age 5 and 15 to confirm age milestone.",
        purpose: "Validates eligibility for the free mandatory biometric update window.",
        examples: [
          "School Identity Card with photo and Date of Birth",
          "Birth Certificate",
          "School Bonafide Certificate",
        ],
        formatAndPreparation: {
          submission: {
            en: "Original school ID or certificate for verification at the centre.",
            hi: "केंद्र पर सत्यापन हेतु मूल स्कूल आईडी या प्रमाण पत्र।",
            mr: "केंद्रावर पडताळणीसाठी मूळ शाळा ओळखपत्र किंवा बोनाफाईड.",
          },
          selfAttestation: {
            en: "Parent or student self-attests.",
            hi: "माता-पिता या छात्र के हस्ताक्षर।",
            mr: "विद्यार्थी किंवा पालकांची स्वाक्षरी.",
          },
          digitalCopy: {
            en: "Scanned copy.",
            hi: "स्कैन प्रति।",
            mr: "स्कॅन प्रत.",
          },
          fileFormat: {
            en: "Physical original.",
            hi: "मूल भौतिक प्रति।",
            mr: "मूळ प्रत.",
          },
        },
      },
    ],
    steps: [
      {
        title: "Locate Centre & Book Appointment",
        description: "Visit appointments.uidai.gov.in or myaadhaar.uidai.gov.in to book a time slot at your nearest Aadhaar Seva Kendra (ASK) or bank/post office branch to skip waiting lines.",
        localized: {
          title: {
            en: "Locate Centre & Book Appointment",
            hi: "आधार केंद्र खोजें और अप्वाइंटमेंट बुक करें",
            mr: "आधार केंद्र शोधा आणि अपॉइंटमेंट बुक करा",
          },
          description: {
            en: "Visit appointments.uidai.gov.in or myaadhaar.uidai.gov.in to book a time slot at your nearest Aadhaar Seva Kendra (ASK) or authorized bank/post office branch.",
            hi: "भीड़ से बचने के लिए appointments.uidai.gov.in या myaadhaar.uidai.gov.in पर जाकर नजदीकी आधार सेवा केंद्र में अपनी सुविधानुसार समय स्लॉट बुक करें।",
            mr: "रांगेत उभे राहणे टाळण्यासाठी appointments.uidai.gov.in किंवा myaadhaar.uidai.gov.in वर जाऊन जवळच्या अधिकृत आधार केंद्रावर वेळ आरक्षित करा.",
          },
        },
      },
      {
        title: "Fill Enrolment Form & Submit Original Documents",
        description: "Fill the standard enrolment/update form (Form 1 for adults, Form 2 for children). Present original proof of identity, address, and date of birth to the verifier.",
        localized: {
          title: {
            en: "Fill Enrolment Form & Submit Original Documents",
            hi: "नामांकन फॉर्म भरें और मूल दस्तावेज़ प्रस्तुत करें",
            mr: "नोंदणी अर्ज भरा आणि मूळ कागदपत्रे सादर करा",
          },
          description: {
            en: "Fill the standard enrolment/update form. Present original proof of identity, address, and date of birth to the verifier at the counter.",
            hi: "मानक नामांकन फॉर्म भरें और काउंटर पर सत्यापन अधिकारी को मूल पहचान, पता और जन्म प्रमाण पत्र दिखाएं।",
            mr: "नोंदणी अर्ज भरा आणि काउंटरवर तपासणी अधिकाऱ्याकडे मूळ ओळख, पत्ता आणि जन्माचा दाखला सादर करा.",
          },
        },
      },
      {
        title: "Biometric Capture & Data Verification",
        description: "The operator captures all 10 fingerprints, dual iris scan, and a live webcam photo. You will review all entered details on a dual monitor screen before final submission.",
        localized: {
          title: {
            en: "Biometric Capture & Data Verification",
            hi: "बायोमेट्रिक डेटा और जानकारी की पुष्टि",
            mr: "बायोमेट्रिक्स नोंदणी आणि माहितीची खात्री",
          },
          description: {
            en: "The operator captures all 10 fingerprints, dual iris scan, and live photograph. Carefully verify your name and address on the customer-facing monitor before confirmation.",
            hi: "ऑपरेटर 10 उंगलियों के निशान, आँखों की पुतलियाँ और फोटो लेगा। मॉनिटर स्क्रीन पर अपने नाम की स्पेलिंग और पते की अच्छी तरह जांच कर लें।",
            mr: "ऑपरेटर १० बोटांचे ठसे, डोळ्यांचे स्कॅन आणि थेट छायाचित्र घेईल. सबमिट करण्यापूर्वी स्क्रीनवर स्वतःचे नाव आणि पत्ता काळजीपूर्वक तपासून घ्या.",
          },
        },
      },
      {
        title: "Collect Acknowledgement Slip & Track Status",
        description: "Collect your printed Enrolment Slip containing the 28-digit Enrolment ID (EID) and timestamp. Use this EID on myaadhaar.uidai.gov.in to check status and download e-Aadhaar.",
        localized: {
          title: {
            en: "Collect Acknowledgement Slip & Track Status",
            hi: "पावती (Slip) प्राप्त करें और स्टेटस ट्रैक करें",
            mr: "नोंदणी पावती घ्या आणि स्थिती तपासा",
          },
          description: {
            en: "Receive your printed acknowledgement slip containing the 28-digit Enrolment ID (EID). Use this EID to track status online and download e-Aadhaar once generated.",
            hi: "28 अंकों वाली नामांकन पहचान (EID) वाली पावती लें। इसके माध्यम से myaadhaar.uidai.gov.in पर स्टेटस जांचें और तैयार होने पर e-Aadhaar डाउनलोड करें।",
            mr: "२८ अंकी नोंदणी क्रमांक (EID) असलेली पावती सांभाळून ठेवा. myaadhaar.uidai.gov.in वरून स्थिती तपासा आणि आधार तयार झाल्यावर e-Aadhaar डाऊनलोड करा.",
          },
        },
      },
    ],
    fees: [
      {
        item: {
          en: "Fresh Enrolment (All Citizens & Children)",
          hi: "नया आधार पंजीकरण (सभी नागरिक व बच्चे)",
          mr: "नवीन आधार नोंदणी (सर्व नागरिक व मुले)",
        },
        amount: "₹0 (Free)",
        verifiedSource: "UIDAI Official Schedule of Charges (Circular No. 1/2023)",
      },
      {
        item: {
          en: "Mandatory Biometric Update (Ages 5 and 15)",
          hi: "अनिवार्य बायोमेट्रिक अपडेट (उम्र 5 और 15 वर्ष)",
          mr: "अनिवार्य बायोमेट्रिक अपडेट (वय ५ आणि १५ वर्षे)",
        },
        amount: "₹0 (Free)",
        verifiedSource: "UIDAI Official Circular",
      },
      {
        item: {
          en: "Demographic Update (Address, Mobile, Name, Email) at Kendra",
          hi: "आधार केंद्र पर विवरण अपडेट (पता, मोबाइल, नाम, ईमेल)",
          mr: "केंद्रावर माहिती दुरुस्ती (पत्ता, मोबाईल, नाव, ईमेल)",
        },
        amount: "₹50",
        verifiedSource: "UIDAI Official Schedule of Charges",
      },
      {
        item: {
          en: "Address Update Online via myAadhaar Portal",
          hi: "myAadhaar पोर्टल पर ऑनलाइन पता अपडेट",
          mr: "myAadhaar पोर्टलवरून ऑनलाइन पत्ता दुरुस्ती",
        },
        amount: "₹50",
        verifiedSource: "myAadhaar Self Service Portal",
      },
      {
        item: {
          en: "Biometric Update for Adults (Photo, Fingerprints, Iris)",
          hi: "वयस्कों के लिए बायोमेट्रिक अपडेट (फोटो, फिंगरप्रिंट)",
          mr: "मोठ्या व्यक्तींसाठी बायोमेट्रिक अपडेट (फोटो, बोटांचे ठसे)",
        },
        amount: "₹100",
        verifiedSource: "UIDAI Official Schedule of Charges",
      },
    ],
    timelines: {
      overall: {
        en: "15 to 30 working days for generation; e-Aadhaar available online immediately upon approval.",
        hi: "15 से 30 कार्य दिवस; स्वीकृति मिलते ही e-Aadhaar तुरंत ऑनलाइन डाउनलोड किया जा सकता है।",
        mr: "१५ ते ३० दिवस; मान्यता मिळताच e-Aadhaar लगेच ऑनलाइन डाऊनलोड करता येते.",
      },
      details: {
        en: "Physical PVC / letter delivery by India Post takes an additional 1 to 2 weeks after generation. e-Aadhaar PDF is legally valid everywhere under IT Act 2000.",
        hi: "डाक द्वारा भौतिक पत्र पहुंचने में 1 से 2 सप्ताह अतिरिक्त लगते हैं। आईटी एक्ट 2000 के तहत e-Aadhaar का प्रिंटआउट हर जगह 100% मान्य है।",
        mr: "टपालाने छापील आधार कार्ड मिळण्यास १ ते २ आठवडे लागतात. माहिती तंत्रज्ञान कायद्यानुसार e-Aadhaar ची प्रिंट सर्वत्र अधिकृत मानली जाते.",
      },
    },
    commonMistakes: [
      {
        mistake: {
          en: "Allowing name spelling mismatch between Aadhaar and 10th marksheet or PAN card.",
          hi: "आधार और 10वीं की मार्कशीट या पैन कार्ड के नाम में वर्तनी (Spelling) का अंतर होना।",
          mr: "आधार आणि १०वी चे गुणपत्रक किंवा पॅन कार्ड यांवरील नावाच्या स्पेलिंगमध्ये तफावत असणे.",
        },
        howToAvoid: {
          en: "Ensure your full name matches your educational certificates letter-for-letter before confirming the operator screen.",
          hi: "ऑपरेटर की स्क्रीन कन्फर्म करने से पहले सुनिश्चित करें कि आपका नाम 10वीं के प्रमाण पत्र से पूरी तरह मेल खाता है।",
          mr: "ऑपरेटरची स्क्रीन निश्चित करण्यापूर्वी आपले नाव शैक्षणिक प्रमाणपत्राप्रमाणे तंतोतंत जुळत असल्याची खात्री करा.",
        },
      },
      {
        mistake: {
          en: "Not registering or updating your active mobile number in Aadhaar.",
          hi: "आधार में चालू मोबाइल नंबर लिंक न करवाना या पुराना नंबर बंद हो जाना।",
          mr: "आधार कार्डला चालू मोबाईल नंबर लिंक न करणे किंवा जुना नंबर बंद असणे.",
        },
        howToAvoid: {
          en: "Always keep your active mobile number linked. All OTPs for passport, admissions, PAN, and DigiLocker require registered mobile OTP.",
          hi: "हमेशा अपना चालू मोबाइल नंबर लिंक रखें। पासपोर्ट, कॉलेज प्रवेश, पैन और डिजिलॉकर के सभी ओटीपी इसी नंबर पर आते हैं।",
          mr: "नेहमी स्वतःचा चालू मोबाईल नंबर लिंक ठेवा. पासपोर्ट, कॉलेज प्रवेश, पॅन आणि डिजिलॉकरचे सर्व ओटीपी याच क्रमांकावर येतात.",
        },
      },
      {
        mistake: {
          en: "Submitting utility bills or bank passbooks older than 3 months as proof of address.",
          hi: "पते के प्रमाण के रूप में 3 महीने से अधिक पुराना बिजली का बिल या बैंक स्टेटमेंट लगाना।",
          mr: "पत्त्याचा पुरावा म्हणून ३ महिन्यांपेक्षा जुने लाईट बिल किंवा बँक स्टेटमेंट जोडणे.",
        },
        howToAvoid: {
          en: "UIDAI strictly rejects utility bills older than 90 days. Obtain a fresh electricity bill or recent stamped bank passbook print.",
          hi: "UIDAI 90 दिन से पुराने बिल स्वीकार नहीं करता। हाल ही का बिजली बिल या मुहर लगा बैंक स्टेटमेंट ही उपयोग करें।",
          mr: "UIDAI ९० दिवसांपेक्षा जुने बिल नाकारते. चालू महिन्यातील वीज बिल किंवा शिक्का मारलेले बँक पासबुक वापरा.",
        },
      },
      {
        mistake: {
          en: "Skipping the mandatory biometric update when a child reaches age 5 and age 15.",
          hi: "बच्चे के 5 और 15 वर्ष की उम्र पूरी होने पर अनिवार्य बायोमेट्रिक अपडेट न कराना।",
          mr: "मुलाचे वय ५ आणि १५ वर्षे पूर्ण झाल्यावर अनिवार्य बायोमेट्रिक अपडेट न करणे.",
        },
        howToAvoid: {
          en: "Biometrics change as children grow. If missed, child's Aadhaar gets deactivated, causing delays in 10th board registration and college admissions.",
          hi: "यदि यह अपडेट छूट जाए तो आधार निष्क्रिय हो सकता है, जिससे 10वीं बोर्ड परीक्षा पंजीकरण और कॉलेज एडमिशन में रुकावट आ सकती है।",
          mr: "हे अपडेट न केल्यास आधार कार्ड निष्क्रिय होऊ शकते, ज्यामुळे १०वी बोर्ड परीक्षा अर्ज आणि कॉलेज प्रवेशात अडचण येऊ शकते.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "Is e-Aadhaar downloaded from the internet legally valid like the physical card?",
          hi: "क्या इंटरनेट से डाउनलोड किया गया e-Aadhaar सामान्य कार्ड की तरह पूरी तरह मान्य है?",
          mr: "इंटरनेटवरून डाऊनलोड केलेले e-Aadhaar प्रत्यक्ष कार्डप्रमाणेच सर्वत्र ग्राह्य धरले जाते का?",
        },
        answer: {
          en: "Yes. Under Section 4(3) of the Aadhaar Act, 2016, an e-Aadhaar PDF downloaded from myaadhaar.uidai.gov.in is legally equivalent to the printed physical Aadhaar letter for all official purposes.",
          hi: "हाँ। आधार अधिनियम 2016 की धारा 4(3) के अनुसार myaadhaar.uidai.gov.in से डाउनलोड किया गया e-Aadhaar सभी सरकारी और निजी कार्यों के लिए 100% वैध है।",
          mr: "होय. आधार कायदा २०१६ च्या कलम ४(३) नुसार myaadhaar वरून डाऊनलोड केलेले e-Aadhaar सर्व शासकीय व खाजगी कामांसाठी कायदेशीरदृष्ट्या पूर्णपणे वैध आहे.",
        },
      },
      {
        question: {
          en: "What is Masked Aadhaar and where should it be used?",
          hi: "मास्क्ड आधार (Masked Aadhaar) क्या है और इसका उपयोग कहाँ करना चाहिए?",
          mr: "मास्क्ड आधार (Masked Aadhaar) म्हणजे काय आणि ते कुठे वापरावे?",
        },
        answer: {
          en: "Masked Aadhaar hides the first 8 digits of your Aadhaar number and shows only the last 4 digits (e.g. XXXX-XXXX-1234). It is recommended for privacy when sharing copies with hotels, private companies, or security desks.",
          hi: "मास्क्ड आधार में पहले 8 अंक छिप जाते हैं और केवल अंतिम 4 अंक दिखाई देते हैं। होटल, निजी कंपनियों या सुरक्षा जांच में गोपनीयता बनाए रखने के लिए इसका उपयोग करें।",
          mr: "मास्क्ड आधारमध्ये पहिले ८ आकडे लपवले जातात आणि फक्त शेवटचे ४ आकडे दिसतात. हॉटेल, खाजगी कंपन्या किंवा ओळख पटवण्यासाठी सुरक्षिततेच्या दृष्टीने याचा वापर करावा.",
        },
      },
      {
        question: {
          en: "Can I update my mobile number online without visiting an Aadhaar Kendra?",
          hi: "क्या मैं बिना आधार केंद्र जाए ऑनलाइन अपना मोबाइल नंबर अपडेट कर सकता हूँ?",
          mr: "आधार केंद्रावर न जाता घरबसल्या मोबाईल नंबर ऑनलाइन अपडेट करता येतो का?",
        },
        answer: {
          en: "No. Mobile number updates require mandatory in-person biometric authentication (fingerprint/iris) at an authorized Aadhaar centre to prevent unauthorized account takeovers.",
          hi: "नहीं। सुरक्षा कारणों और धोखाधड़ी रोकने के लिए मोबाइल नंबर लिंक कराने हेतु आधार केंद्र जाकर फिंगरप्रिंट प्रमाणीकरण कराना अनिवार्य है।",
          mr: "नाही. सुरक्षेच्या कारणास्तव आणि फसवणूक टाळण्यासाठी मोबाईल नंबर जोडण्यासाठी आधार केंद्रावर जाऊन बायोमेट्रिक पडताळणी करणे बंधनकारक आहे.",
        },
      },
      {
        question: {
          en: "How many times can name, date of birth, and gender be changed in Aadhaar?",
          hi: "आधार में नाम, जन्मतिथि और लिंग कितनी बार बदला जा सकता है?",
          mr: "आधार कार्डमध्ये नाव, जन्मतारीख आणि लिंग किती वेळा बदलता येते?",
        },
        answer: {
          en: "Under UIDAI policy: Name can be updated twice in a lifetime; Date of Birth can be updated only ONCE in a lifetime; Gender can be updated only ONCE. Address can be updated multiple times with valid proof.",
          hi: "UIDAI नियमों के अनुसार: नाम जीवन में केवल 2 बार बदला जा सकता है; जन्मतिथि केवल 1 बार; लिंग केवल 1 बार। पते में वैध प्रमाण के साथ कई बार बदलाव हो सकता है।",
          mr: "UIDAI नियमांनुसार: नाव आयुष्यात फक्त २ वेळा बदलता येते; जन्मतारीख फक्त १ वेळा; लिंग फक्त १ वेळा. पत्ता वैध पुराव्यानिशी कितीही वेळा बदलता येतो.",
        },
      },
    ],
    officialSource: {
      name: "Unique Identification Authority of India (UIDAI)",
      url: "https://uidai.gov.in/",
      more: [
        { name: "myAadhaar Citizen Portal", url: "https://myaadhaar.uidai.gov.in/" },
        { name: "Book an Appointment at Aadhaar Seva Kendra", url: "https://appointments.uidai.gov.in/" },
        { name: "UIDAI Standard List of Acceptable Supporting Documents", url: "https://uidai.gov.in/images/commdoc/valid_documents_list.pdf" },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // 2. BIRTH CERTIFICATE
  // -------------------------------------------------------------------------
  {
    id: "birth-certificate",
    slug: "birth-certificate",
    title: "Birth Certificate",
    category: "Vital Records",
    description: "The primary legal record of a person's birth, issued by the Municipal Corporation, Nagar Palika, or Gram Panchayat under the Registration of Births and Deaths Act, 1969.",
    localizedTitle: {
      en: "Birth Certificate",
      hi: "जन्म प्रमाण पत्र (Birth Certificate)",
      mr: "जन्माचा दाखला (Birth Certificate)",
    },
    localizedCategory: {
      en: "Vital Records",
      hi: "नागरिक पंजीकरण (Vital Records)",
      mr: "नागरी नोंदणी (Vital Records)",
    },
    localizedDescription: {
      en: "The primary legal record of a person's birth, issued by the Municipal Corporation, Nagar Palika, or Gram Panchayat under the Registration of Births and Deaths Act, 1969.",
      hi: "जन्म और मृत्यु पंजीकरण अधिनियम, 1969 के तहत नगर निगम, नगर पालिका या ग्राम पंचायत द्वारा जारी जन्म का सबसे प्राथमिक कानूनी और नागरिक प्रमाण।",
      mr: "जन्म आणि मृत्यू नोंदणी कायदा, १९६९ अंतर्गत महानगरपालिका, नगरपालिका किंवा ग्रामपंचायतीमार्फत दिला जाणारा जन्माचा मुख्य अधिकृत दाखला.",
    },
    keywords: [
      "birth", "birth certificate", "crs", "civil registration", "nagar nigam", "panchayat", "dob",
      "जन्म", "जन्म प्रमाण पत्र", "नगर निगम", "नगर पालिका", "ग्राम पंचायत", "सीआरएस",
      "जन्म", "जन्माचा दाखला", "जन्म नोंदणी", "महानगरपालिका", "ग्रामपंचायत", "सीआरएस"
    ],
    scopeNote: "Covers registration of births occurring in India under the Civil Registration System (CRS) and state urban/rural local bodies.",
    localizedScopeNote: {
      en: "Covers timely registration (within 21 days) and delayed registration procedures under the RBD Act, 1969.",
      hi: "यह मार्गदर्शिका जन्म के 21 दिनों के भीतर समयबद्ध पंजीकरण तथा विलंबित पंजीकरण की आधिकारिक प्रक्रिया को समझाती है।",
      mr: "ही मार्गदर्शिका जन्मानंतर २१ दिवसांच्या आतील वेळेत नोंदणी आणि उशिरा नोंदणीच्या कायदेशीर पद्धती स्पष्ट करते.",
    },
    examplesConfirmedOfficial: true,
    lastChecked: "2026-10-01",
    whoCanApply: {
      en: "Parents of the child, legal guardians, or an adult applicant requiring a certified extract of their own registered birth.",
      hi: "बच्चे के माता-पिता, कानूनी अभिभावक, या स्वयं वयस्क नागरिक जिसे अपने जन्म प्रमाण पत्र की प्रमाणित प्रति चाहिए।",
      mr: "मुलाचे आई-वडील, कायदेशीर पालक किंवा स्वतः प्रौढ नागरिक ज्यांना स्वतःच्या जन्माच्या नोंदीचा अधिकृत दाखला हवा आहे.",
    },
    eligibility: {
      en: [
        "Birth must have occurred within the territorial jurisdiction of the local registrar (hospital area, municipality, or gram panchayat).",
        "Registration within 21 days of birth is standard and free of late fee.",
        "Delayed registration (beyond 21 days up to 1 year, or beyond 1 year) requires specific magistrate permission.",
      ],
      hi: [
        "जन्म स्थानीय रजिस्ट्रार के अधिकार क्षेत्र (अस्पताल, नगर निगम या ग्राम पंचायत सीमा) में हुआ होना चाहिए।",
        "जन्म के 21 दिनों के भीतर पंजीकरण निःशुल्क और सामान्य प्रक्रिया से होता है।",
        "21 दिन से अधिक विलंब होने पर नियमानुसार अतिरिक्त अनुमति और विलंब शुल्क आवश्यक होता है।",
      ],
      mr: [
        "जन्म स्थानिक निबंधकांच्या कार्यक्षेत्रात (रुग्णालय, पालिका किंवा ग्रामपंचायत हद्दीत) झालेला असावा.",
        "जन्मापासून २१ दिवसांच्या आत नोंदणी करणे विनामूल्य असते.",
        "२१ दिवसांनंतर किंवा १ वर्षानंतर उशिरा नोंदणीसाठी दंडाधिकारी परवानगी आवश्यक असते.",
      ],
    },
    situations: [
      {
        id: "timely-institutional",
        name: {
          en: "Institutional Birth (Hospital / within 21 Days)",
          hi: "अस्पताल में जन्म (21 दिनों के भीतर)",
          mr: "रुग्णालयातील जन्म (२१ दिवसांच्या आत)",
        },
        description: {
          en: "Birth occurred in a government or private hospital and reported within statutory 21-day window.",
          hi: "सरकारी या निजी अस्पताल में जन्म हुआ और 21 दिनों की निर्धारित अवधि में अस्पताल द्वारा सूचना भेजी गई।",
          mr: "शासकीय किंवा खाजगी रुग्णालयात जन्म झाला असून २१ दिवसांत रुग्णालयामार्फत नोंदणी झाली.",
        },
        applicableDocIds: ["hospital-discharge-slip", "parents-identity-proof", "parents-marriage-proof"],
        notes: {
          en: "Hospitals submit Form 1 (Birth Report) directly to the municipal or panchayat health department. Parents simply collect or download the certificate.",
          hi: "अस्पताल सीधे स्थानीय नगर निगम या पंचायत को फॉर्म 1 भेजता है। माता-पिता को केवल आवश्यक पहचान पत्र देकर प्रमाण पत्र प्राप्त करना होता है।",
          mr: "रुग्णालय थेट पालिका किंवा ग्रामपंचायतीकडे फॉर्म १ पाठवते. पालकांनी फक्त ओळखपत्र दाखवून दाखला घ्यायचा असतो.",
        },
      },
      {
        id: "delayed-registration",
        name: {
          en: "Delayed Registration (After 21 Days or After 1 Year)",
          hi: "विलंबित पंजीकरण (21 दिन या 1 वर्ष के बाद)",
          mr: "उशिरा नोंदणी (२१ दिवस किंवा १ वर्षानंतर)",
        },
        description: {
          en: "Birth was not reported within 21 days, requiring payment of late fees and magistrate authorization.",
          hi: "समय पर सूचना न देने के कारण 21 दिनों से 1 वर्ष के बीच या 1 वर्ष से अधिक समय बाद कराया जाने वाला पंजीकरण।",
          mr: "वेळेत नोंद न झाल्यामुळे २१ दिवसांनंतर किंवा १ वर्षापेक्षा जास्त विलंबाने केली जाणारी नोंदणी.",
        },
        applicableDocIds: ["hospital-discharge-slip", "parents-identity-proof", "affidavit-delayed-birth", "non-availability-certificate"],
        notes: {
          en: "Registration between 21 and 30 days requires late fee; between 30 days and 1 year requires District Registrar / Tehsildar permission; beyond 1 year requires order from Sub-Divisional Magistrate (SDM) or Executive Magistrate.",
          hi: "21 से 30 दिन में मामूली लेट फीस; 30 दिन से 1 वर्ष में तहसीलदार की अनुमति; 1 वर्ष बाद एसडीएम (SDM) का आदेश अनिवार्य है।",
          mr: "२१ ते ३० दिवसांत विलंब शुल्क; ३० दिवस ते १ वर्षात तहसीलदारांची परवानगी; १ वर्षानंतर उपविभागीय दंडाधिकारी (SDM) यांचा आदेश आवश्यक असतो.",
        },
      },
      {
        id: "name-inclusion",
        name: {
          en: "Child Name Inclusion in Existing Certificate",
          hi: "पहले से जारी प्रमाण पत्र में बच्चे का नाम जुड़वाना",
          mr: "आधी घेतलेल्या दाखल्यात बाळाचे नाव समाविष्ट करणे",
        },
        description: {
          en: "Adding the child's formal given name to a birth certificate that was originally issued unnamed.",
          hi: "उस जन्म प्रमाण पत्र में नाम जुड़वाना जो जन्म के समय बिना नाम के जारी किया गया था।",
          mr: "जन्माच्या वेळी नाव न नोंदवता घेतलेल्या दाखल्यावर बाळाचे अधिकृत नाव नोंदवणे.",
        },
        applicableDocIds: ["unnamed-birth-certificate", "parents-identity-proof", "school-id-or-bonafide"],
        notes: {
          en: "Child's name can be added free within 1 year of registration. Up to 15 years, it can be added by parents via application to the Registrar.",
          hi: "पंजीकरण के 1 वर्ष के भीतर नाम निःशुल्क जोड़ा जा सकता है। 15 वर्ष की आयु तक माता-पिता आवेदन देकर नाम जुड़वा सकते हैं।",
          mr: "नोंदणीपासून १ वर्षाच्या आत नाव विनामूल्य जोडता येते. १५ वर्षांपर्यंत पालकांच्या अर्जाद्वारे नाव समाविष्ट करता येते.",
        },
      },
    ],
    documents: [
      {
        id: "hospital-discharge-slip",
        name: "Hospital Birth Report / Discharge Summary",
        shortDescription: "Form 1 intimation or discharge card issued by hospital confirming date, time, and sex of child.",
        explanation: "Primary clinical evidence of birth detailing maternal name, child sex, date, and place of delivery.",
        purpose: "Proves that the birth took place at the stated facility on the recorded timestamp.",
        examples: [
          "Hospital Discharge Summary with mother's full name and delivery details",
          "Institutional Birth Report (Form 1) signed by Medical Officer",
          "Maternity Home Case Sheet copy certified by hospital superintendent",
        ],
        formatAndPreparation: {
          submission: {
            en: "Original discharge card brought to Municipal Ward / Gram Panchayat health office.",
            hi: "मूल डिस्चार्ज कार्ड स्थानीय नगर निगम वार्ड या ग्राम पंचायत कार्यालय में प्रस्तुत करें।",
            mr: "मूळ डिस्चार्ज कार्ड स्थानिक पालिका वॉर्ड किंवा ग्रामपंचायत कार्यालयात सादर करावे.",
          },
          selfAttestation: {
            en: "Hospital stamp and doctor's signature must be clearly visible.",
            hi: "अस्पताल की मुहर और डॉक्टर के हस्ताक्षर स्पष्ट होने चाहिए।",
            mr: "रुग्णालयाचा शिक्का आणि डॉक्टरांची स्वाक्षरी स्पष्ट असावी.",
          },
          digitalCopy: {
            en: "Scanned color copy for municipal online portal upload.",
            hi: "नगर निगम पोर्टल पर अपलोड करने हेतु रंगीन स्कैन।",
            mr: "पालिकेच्या पोर्टलवर अपलोड करण्यासाठी रंगीन स्कॅन.",
          },
          fileFormat: {
            en: "PDF or JPEG under 2MB.",
            hi: "2MB से कम की PDF या JPEG।",
            mr: "२MB पेक्षा कमी आकाराची PDF किंवा JPEG.",
          },
        },
      },
      {
        id: "parents-identity-proof",
        name: "Parents' Identity & Address Proofs",
        shortDescription: "Government photo IDs and residential address proof of both mother and father.",
        explanation: "Confirms parentage and exact residential address for recording in the register of births.",
        purpose: "Ensures accurate recording of parental names on the permanent civil record.",
        examples: [
          "Aadhaar Cards of both parents",
          "Voter ID Cards of parents",
          "Passports of parents",
        ],
        formatAndPreparation: {
          submission: {
            en: "Self-attested photocopies along with originals for verification.",
            hi: "स्व-हस्ताक्षरित फोटोकॉपी और सत्यापन हेतु मूल प्रतियाँ।",
            mr: "स्वाक्षरी केलेल्या झेरॉक्स प्रती आणि तपासणीसाठी मूळ कागदपत्रे.",
          },
          selfAttestation: {
            en: "Signed by the respective parent.",
            hi: "संबंधित माता या पिता द्वारा हस्ताक्षरित।",
            mr: "संबंधित आई किंवा वडिलांची स्वाक्षरी.",
          },
          digitalCopy: {
            en: "Color scanned copies.",
            hi: "रंगीन स्कैन प्रतियां।",
            mr: "रंगीत स्कॅन प्रती.",
          },
          fileFormat: {
            en: "PDF or JPEG.",
            hi: "PDF या JPEG।",
            mr: "PDF किंवा JPEG.",
          },
        },
      },
      {
        id: "parents-marriage-proof",
        name: "Parents' Marriage Certificate / Joint Declaration",
        shortDescription: "Marriage registration certificate or joint parentage declaration.",
        explanation: "Verifies the marital relationship and lawful parentage of the newborn.",
        purpose: "Establishes correct maternal and paternal lineage in the civil register.",
        examples: [
          "Marriage Registration Certificate issued by Registrar of Marriages",
          "Joint declaration form signed by both parents (if certificate not yet issued)",
        ],
        formatAndPreparation: {
          submission: {
            en: "Original or self-attested copy.",
            hi: "मूल या स्व-हस्ताक्षरित प्रति।",
            mr: "मूळ किंवा स्वाक्षरी केलेली प्रत.",
          },
          selfAttestation: {
            en: "Signed by parents.",
            hi: "माता-पिता द्वारा हस्ताक्षरित।",
            mr: "पालकांची स्वाक्षरी.",
          },
          digitalCopy: {
            en: "PDF scan.",
            hi: "PDF स्कैन।",
            mr: "PDF स्कॅन.",
          },
          fileFormat: {
            en: "PDF under 2MB.",
            hi: "2MB से कम PDF।",
            mr: "२MB पेक्षा कमी PDF.",
          },
        },
      },
      {
        id: "affidavit-delayed-birth",
        name: "Affidavit for Delayed Registration & SDM Order",
        shortDescription: "Notarized affidavit stating reason for delay, plus Magistrate order if delay exceeds 1 year.",
        explanation: "Required under Section 13(3) of RBD Act for recording births that were omitted from civil registers for over 1 year.",
        purpose: "Prevents fraudulent creation of fake birth records for citizenship or age manipulation.",
        examples: [
          "Notarized affidavit on ₹100 stamp paper affirming date, place, and parents of birth",
          "Order from Sub-Divisional Magistrate (SDM) or Executive Magistrate directing entry",
        ],
        formatAndPreparation: {
          submission: {
            en: "Original stamped affidavit and original signed Magistrate order.",
            hi: "मूल नोटरीकृत शपथ पत्र और मजिस्ट्रेट का मूल आदेश।",
            mr: "मूळ प्रतिज्ञापत्र आणि दंडाधिकाऱ्यांचा मूळ आदेश.",
          },
          selfAttestation: {
            en: "Notarized by public notary and signed by magistrate.",
            hi: "नोटरी पब्लिक और मजिस्ट्रेट द्वारा हस्ताक्षरित।",
            mr: "नोटरी आणि दंडाधिकाऱ्यांची स्वाक्षरी आवश्यक.",
          },
          digitalCopy: {
            en: "High-resolution scanned PDF.",
            hi: "उच्च गुणवत्ता स्कैन PDF।",
            mr: "स्पष्ट स्कॅन केलेली PDF.",
          },
          fileFormat: {
            en: "PDF.",
            hi: "PDF।",
            mr: "PDF.",
          },
        },
      },
      {
        id: "non-availability-certificate",
        name: "Non-Availability Certificate (Form 10)",
        shortDescription: "Official certificate issued by Registrar stating no record exists in birth register for that year.",
        explanation: "Issued under Section 17 of RBD Act confirming that a search was conducted and the birth was found unrecorded.",
        purpose: "Prerequisite document before filing for an SDM order for delayed birth registration.",
        examples: [
          "Form 10 Non-Availability Certificate signed by Municipal / Panchayat Health Officer",
        ],
        formatAndPreparation: {
          submission: {
            en: "Original Form 10 issued by local registrar.",
            hi: "स्थानीय रजिस्ट्रार द्वारा जारी मूल फॉर्म 10।",
            mr: "स्थानिक निबंधकांनी दिलेला मूळ फॉर्म १०.",
          },
          selfAttestation: {
            en: "Signed and sealed by Registrar.",
            hi: "रजिस्ट्रार के हस्ताक्षर और मुहर।",
            mr: "निबंधकांचा शिक्का व स्वाक्षरी.",
          },
          digitalCopy: {
            en: "Scanned PDF.",
            hi: "स्कैन PDF।",
            mr: "स्कॅन PDF.",
          },
          fileFormat: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
        },
      },
      {
        id: "unnamed-birth-certificate",
        name: "Original Unnamed Birth Certificate",
        shortDescription: "The previously issued birth extract that contains parental names but blank child name.",
        explanation: "Required to endorse the child's newly chosen legal name onto the General Register entry.",
        purpose: "Provides the registration number and volume reference for updating the birth record.",
        examples: [
          "Previously issued Birth Certificate with 'Baby of [Mother]' or blank name field",
        ],
        formatAndPreparation: {
          submission: {
            en: "Original certificate to be surrendered or endorsed.",
            hi: "मूल प्रमाण पत्र जिसे अद्यतन (endorse) किया जाना है।",
            mr: "मूळ दाखला ज्यावर नाव समाविष्ट करायचे आहे.",
          },
          selfAttestation: {
            en: "Parent signatures on application form.",
            hi: "आवेदन पत्र पर माता-पिता के हस्ताक्षर।",
            mr: "अर्जावर पालकांची स्वाक्षरी.",
          },
          digitalCopy: {
            en: "Scanned copy.",
            hi: "स्कैन प्रति।",
            mr: "स्कॅन प्रत.",
          },
          fileFormat: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
        },
      },
      {
        id: "school-id-or-bonafide",
        name: "School Bonafide Certificate / ID of Child",
        shortDescription: "School certificate showing the child's name, parents' names, and date of birth.",
        explanation: "Corroborating proof showing the child has consistently used this exact name in school.",
        purpose: "Confirms that the name being added to the civil register matches educational records.",
        examples: [
          "School Bonafide Certificate on official letterhead",
          "School Identity Card with photo",
        ],
        formatAndPreparation: {
          submission: {
            en: "Original or school-attested copy.",
            hi: "मूल या स्कूल द्वारा प्रमाणित प्रति।",
            mr: "मूळ किंवा शाळेने प्रमाणित केलेली प्रत.",
          },
          selfAttestation: {
            en: "Signed by School Principal.",
            hi: "प्रधानाचार्य द्वारा हस्ताक्षरित।",
            mr: "मुख्याध्यापकांची स्वाक्षरी.",
          },
          digitalCopy: {
            en: "PDF scan.",
            hi: "PDF स्कैन।",
            mr: "PDF स्कॅन.",
          },
          fileFormat: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
        },
      },
    ],
    steps: [
      {
        title: "Hospital Intimation or Local Office Application",
        description: "For hospital births within 21 days, the hospital sends Form 1 directly to the municipal health department. For home births or delayed entries, parents submit an application at the local ward office or on Aaple Sarkar / state portal.",
        localized: {
          title: {
            en: "Hospital Intimation or Local Office Application",
            hi: "अस्पताल की सूचना या स्थानीय कार्यालय में आवेदन",
            mr: "रुग्णालयाची नोंद किंवा स्थानिक कार्यालयात अर्ज",
          },
          description: {
            en: "Hospital births within 21 days are forwarded directly to the municipal health officer. For home births, apply directly at the municipal ward / panchayat office.",
            hi: "अस्पताल में हुए जन्म की सूचना 21 दिन के भीतर अस्पताल सीधे नगर निगम को भेजता है। घर पर हुए जन्म के लिए सीधे वार्ड कार्यालय में आवेदन करें।",
            mr: "रुग्णालयातील जन्माची माहिती २१ दिवसांत रुग्णालय पालिकेकडे पाठवते. घरी झालेल्या जन्मासाठी थेट स्थानिक वॉर्ड किंवा ग्रामपंचायतीत अर्ज करावा लागतो.",
          },
        },
      },
      {
        title: "Document Verification & Verification in Register",
        description: "The Registrar of Births & Deaths verifies parent IDs, hospital discharge summary, and registers the entry into the official Birth Register.",
        localized: {
          title: {
            en: "Document Verification & Verification in Register",
            hi: "दस्तावेज़ सत्यापन और रजिस्टर में प्रविष्टि",
            mr: "कागदपत्रांची पडताळणी आणि नोंदवहीत नोंद",
          },
          description: {
            en: "Registrar verifies parental identity, hospital delivery records, and enters the child's details into the civil register.",
            hi: "रजिस्ट्रार माता-पिता के पहचान पत्र और अस्पताल के रिकॉर्ड की पुष्टि करके जन्म रजिस्टर में प्रविष्टि दर्ज करता है।",
            mr: "निबंधक पालकांची ओळखपत्रे आणि रुग्णालयाचा दाखला तपासून जन्म नोंदवहीत बाळाची अधिकृत नोंद करतात.",
          },
        },
      },
      {
        title: "Child Name Inclusion & Fee Payment",
        description: "Specify the formal legal name of the child. Pay statutory fees (free within 21 days; nominal late fees if delayed).",
        localized: {
          title: {
            en: "Child Name Inclusion & Fee Payment",
            hi: "बच्चे का नाम दर्ज करना और शुल्क भुगतान",
            mr: "बाळाचे नाव नोंदवणे आणि शुल्क भरणे",
          },
          description: {
            en: "Provide the official given name for the child. Pay any applicable statutory late fee through the municipal counter or portal.",
            hi: "बच्चे का विधिवत कानूनी नाम दर्ज कराएं। 21 दिन के बाद लगने वाला मामूली विलंब शुल्क जमा करें।",
            mr: "बाळाचे अधिकृत नाव नोंदवा. २१ दिवसांनंतर लागू होणारे शासकीय विलंब शुल्क पालिकेत किंवा ऑनलाइन जमा करा.",
          },
        },
      },
      {
        title: "Download Digitally Signed Birth Certificate",
        description: "Download the digitally signed birth certificate with official QR code from crsorgi.gov.in or municipal/Aaple Sarkar portal, or collect a stamped physical extract.",
        localized: {
          title: {
            en: "Download Digitally Signed Birth Certificate",
            hi: "डिजिटल हस्ताक्षरित जन्म प्रमाण पत्र प्राप्त करें",
            mr: "डिजिटल स्वाक्षरी असलेला दाखला डाऊनलोड करा",
          },
          description: {
            en: "Download the official certificate featuring QR code and digital seal from CRS / state portal, or collect physical stamped certificate from the ward counter.",
            hi: "आधिकारिक पोर्टल से क्यूआर कोड और डिजिटल हस्ताक्षर वाला प्रमाण पत्र डाउनलोड करें, या वार्ड कार्यालय से मुहर लगी प्रति प्राप्त करें।",
            mr: "अधिकृत पोर्टलवरून क्यूआर कोड आणि डिजिटल सही असलेला दाखला डाऊनलोड करा, किंवा वॉर्ड कार्यालयातून छापील प्रत मिळवा.",
          },
        },
      },
    ],
    fees: [
      {
        item: {
          en: "Registration within 21 Days of Birth",
          hi: "जन्म के 21 दिनों के भीतर पंजीकरण",
          mr: "जन्मापासून २१ दिवसांच्या आत नोंदणी",
        },
        amount: "₹0 (Free)",
        verifiedSource: "Registration of Births and Deaths Act, 1969",
      },
      {
        item: {
          en: "Registration between 21 and 30 Days (Late Fee)",
          hi: "21 से 30 दिनों के भीतर विलंब शुल्क",
          mr: "२१ ते ३० दिवसांतील विलंब शुल्क",
        },
        amount: "₹2 to ₹10",
        verifiedSource: "State Civil Registration Rules",
      },
      {
        item: {
          en: "Registration between 30 Days and 1 Year (Tehsildar Permission)",
          hi: "30 दिन से 1 वर्ष के बीच (तहसीलदार अनुमति शुल्क)",
          mr: "३० दिवस ते १ वर्षातील शुल्क (तहसीलदार परवानगी)",
        },
        amount: "₹5 to ₹20",
        verifiedSource: "RBD Rules Section 13(2)",
      },
      {
        item: {
          en: "Registration beyond 1 Year (SDM / Magistrate Order)",
          hi: "1 वर्ष से अधिक विलंब (एसडीएम कोर्ट ऑर्डर शुल्क)",
          mr: "१ वर्षापेक्षा जास्त विलंब (SDM दंडाधिकारी आदेश)",
        },
        amount: "₹20 to ₹50 statutory fee + Court stamp",
        verifiedSource: "RBD Rules Section 13(3)",
      },
      {
        item: {
          en: "Certified Extra Copy of Birth Certificate",
          hi: "जन्म प्रमाण पत्र की अतिरिक्त प्रमाणित प्रति",
          mr: "दाखल्याची अतिरिक्त अधिकृत प्रत",
        },
        amount: "₹10 to ₹50 per copy",
        verifiedSource: "Municipal Schedule of Service Fees",
      },
    ],
    timelines: {
      overall: {
        en: "7 to 14 working days for timely registration; 21 to 45 days for delayed magistrate-order registrations.",
        hi: "समय पर पंजीकरण के लिए 7 से 14 कार्य दिवस; मजिस्ट्रेट आदेश वाले मामलों में 21 से 45 दिन।",
        mr: "वेळेत नोंदणीसाठी ७ ते १४ दिवस; दंडाधिकारी आदेश प्रकरणांत २१ ते ४५ दिवस लागतात.",
      },
      details: {
        en: "Hospital birth records sent within 21 days are entered quickly. For births older than 1 year, SDM hearing and police/talathi verification add 3-4 weeks.",
        hi: "21 दिन के भीतर अस्पताल से भेजी गई सूचनाएं तेजी से दर्ज होती हैं। 1 वर्ष से पुराने मामलों में एसडीएम जांच के कारण समय अधिक लगता है।",
        mr: "२१ दिवसांतील रुग्णालयाची नोंद लवकर होते. १ वर्षापेक्षा जुन्या प्रकरणात चौकशीमुळे अधिक वेळ लागतो.",
      },
    },
    commonMistakes: [
      {
        mistake: {
          en: "Taking the birth certificate without adding the child's formal legal name and leaving it as 'Baby of [Mother]'.",
          hi: "बच्चे का नाम जुड़वाए बिना प्रमाण पत्र ले लेना, जिस पर केवल 'Baby of' लिखा रह जाता है।",
          mr: "बाळाचे नाव न नोंदवता फक्त 'Baby of' लिहिलेला दाखला घेऊन ठेवणे.",
        },
        howToAvoid: {
          en: "Ensure you officially add the child's given name within 1 year. Passports, school admissions, and visas reject unnamed birth certificates.",
          hi: "जन्म के 1 वर्ष के भीतर बच्चे का नाम अनिवार्य रूप से जुड़वा लें। बिना नाम वाला प्रमाण पत्र पासपोर्ट या स्कूल एडमिशन में अमान्य होता है।",
          mr: "जन्मानंतर १ वर्षाच्या आत बाळाचे अधिकृत नाव नक्की नोंदवा. नाव नसलेला दाखला पासपोर्ट किंवा शालेय प्रवेशासाठी चालत नाही.",
        },
      },
      {
        mistake: {
          en: "Name spelling discrepancy between hospital records and parents' Aadhaar cards.",
          hi: "अस्पताल के रिकॉर्ड और माता-पिता के आधार कार्ड में नाम की स्पेलिंग अलग होना।",
          mr: "रुग्णालयातील नोंद आणि पालकांच्या आधार कार्डावरील नावाच्या स्पेलिंगमध्ये तफावत असणे.",
        },
        howToAvoid: {
          en: "Provide identical spellings to the hospital admission desk as printed on your government IDs.",
          hi: "अस्पताल में भर्ती होते समय वही नाम और स्पेलिंग लिखवाएं जो आपके आधार या वोटर आईडी पर दर्ज है।",
          mr: "रुग्णालयात नाव नोंदवताना आधार कार्डाप्रमाणेच अचूक स्पेलिंग द्या.",
        },
      },
      {
        mistake: {
          en: "Failing to apply for delayed registration through SDM when birth was not registered within 1 year.",
          hi: "1 वर्ष से अधिक समय बीत जाने पर एसडीएम के समक्ष विलंबित पंजीकरण की कानूनी प्रक्रिया न करना।",
          mr: "१ वर्ष उलटून गेल्यावर दंडाधिकाऱ्यांमार्फत कायदेशीर नोंदणी न करणे.",
        },
        howToAvoid: {
          en: "First obtain a Form 10 Non-Availability Certificate from the local registrar, then file an application with affidavit to the Sub-Divisional Magistrate (SDM).",
          hi: "पहले स्थानीय रजिस्ट्रार से फॉर्म 10 (Non-Availability) प्राप्त करें, फिर एसडीएम के पास शपथ पत्र के साथ आवेदन प्रस्तुत करें।",
          mr: "प्रथम निबंधकांकडून फॉर्म १० (अनुपलब्धता दाखला) घ्या आणि नंतर उपविभागीय दंडाधिकाऱ्यांकडे प्रतिज्ञापत्रासह अर्ज करा.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "Is a Birth Certificate mandatory for obtaining an Indian Passport?",
          hi: "क्या भारतीय पासपोर्ट बनवाने के लिए जन्म प्रमाण पत्र अनिवार्य है?",
          mr: "भारतीय पासपोर्ट काढण्यासाठी जन्माचा दाखला अनिवार्य आहे का?",
        },
        answer: {
          en: "For applicants born on or after 26/01/1989, a Birth Certificate issued by a recognized Registrar of Births is standard proof of Date of Birth. Following the 2016 Passport Rules amendment, 10th marksheet, PAN, or Aadhaar are also accepted, but a Birth Certificate remains the most authoritative proof.",
          hi: "26/01/1989 को या उसके बाद जन्मे नागरिकों के लिए जन्म प्रमाण पत्र सबसे प्रामाणिक जन्मतिथि प्रमाण है। 2016 के संशोधन के बाद 10वीं की मार्कशीट, पैन या आधार भी मान्य हैं, परंतु जन्म प्रमाण पत्र सर्वोपरि है।",
          mr: "२६/०१/१९८९ रोजी किंवा त्यानंतर जन्मलेल्या नागरिकांसाठी जन्माचा दाखला हा सर्वात भक्कम पुरावा आहे. २०१६ च्या नियमांनुसार १०वी बोर्ड प्रमाणपत्र, पॅन किंवा आधारही चालते, परंतु जन्माचा दाखला असणे सर्वात उत्तम.",
        },
      },
      {
        question: {
          en: "Can I correct a spelling mistake in my or my child's birth certificate?",
          hi: "क्या जन्म प्रमाण पत्र में नाम की स्पेलिंग की गलती सुधारी जा सकती है?",
          mr: "जन्माच्या दाखल्यातील स्पेलिंगची चूक दुरुस्त करता येते का?",
        },
        answer: {
          en: "Yes. Under Section 15 of the RBD Act, clerical or typographical errors can be corrected by the Registrar upon submitting school records, parent IDs, and a supporting affidavit.",
          hi: "हाँ। धारा 15 के तहत क्लर्कियल गलतियों को स्कूल रिकॉर्ड, माता-पिता के पहचान पत्र और शपथ पत्र प्रस्तुत करके रजिस्ट्रार द्वारा सुधारा जा सकता है।",
          mr: "होय. कलम १५ नुसार शाळा दाखला, पालकांची ओळखपत्रे आणि प्रतिज्ञापत्र सादर करून निबंधकांकडून स्पेलिंग दुरुस्त करून घेता येते.",
        },
      },
      {
        question: {
          en: "Where do I get a birth certificate if the birth took place at home rather than a hospital?",
          hi: "यदि जन्म अस्पताल की जगह घर पर हुआ हो तो जन्म प्रमाण पत्र कैसे बनवाएं?",
          mr: "जन्म रुग्णालयात न होता घरी झाला असल्यास दाखला कसा मिळवावा?",
        },
        answer: {
          en: "For home births, the head of the household must inform the local Municipal Ward Health Officer or Village Panchayat Secretary within 21 days with proof of residence and parent identities.",
          hi: "घर पर जन्म होने की स्थिति में, परिवार के मुखिया को 21 दिनों के भीतर स्थानीय नगर निगम वार्ड या ग्राम पंचायत सचिव को सूचित कर पंजीकरण कराना होता है।",
          mr: "घरी जन्म झाल्यास, कुटुंबप्रमुखाने २१ दिवसांच्या आत स्थानिक पालिका वॉर्ड किंवा ग्रामपंचायत कार्यालयात पुराव्यांसह अर्ज करून नोंद करावी लागते.",
        },
      },
    ],
    officialSource: {
      name: "Civil Registration System (Office of the Registrar General of India)",
      url: "https://crsorgi.gov.in/",
      more: [
        { name: "Aaple Sarkar Birth Services (Maharashtra)", url: "https://aaplesarkar.mahaonline.gov.in/" },
        { name: "National Portal of India — Birth Certificate Guide", url: "https://www.india.gov.in/service/apply-birth-certificate" },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // 3. DOMICILE / RESIDENCE CERTIFICATE
  // -------------------------------------------------------------------------
  {
    id: "domicile-certificate",
    slug: "domicile-certificate",
    title: "Domicile / Residence Certificate",
    category: "Certificates (Maharashtra)",
    description: "An official certificate issued by the Revenue Department (Tahsildar / SDO) certifying that a person has resided in Maharashtra for at least 15 continuous years, essential for FYJC, CET CAP, MPSC, and state quota seats.",
    localizedTitle: {
      en: "Domicile / Residence Certificate (Maharashtra)",
      hi: "अधिवास / निवास प्रमाण पत्र (Domicile Certificate)",
      mr: "अधिवास व रहिवासी दाखला (Domicile Certificate)",
    },
    localizedCategory: {
      en: "Certificates (Maharashtra)",
      hi: "सरकारी प्रमाण पत्र (महाराष्ट्र)",
      mr: "शासकीय दाखले (महाराष्ट्र)",
    },
    localizedDescription: {
      en: "An official certificate issued by the Revenue Department (Tahsildar / SDO) certifying that a person has resided in Maharashtra for at least 15 continuous years, essential for FYJC, CET CAP, MPSC, and state quota seats.",
      hi: "महाराष्ट्र शासन के राजस्व विभाग द्वारा जारी प्रमाण पत्र जो प्रमाणित करता है कि व्यक्ति कम से कम 15 वर्षों से महाराष्ट्र का स्थायी निवासी है। यह कॉलेज प्रवेश और सरकारी नौकरियों में 85% राज्य कोटे के लिए अनिवार्य है।",
      mr: "महाराष्ट्र शासनाच्या महसूल विभागामार्फत (तहसीलदार / उपविभागीय अधिकारी) दिला जाणारा दाखला, जो व्यक्तीचे महाराष्ट्रात सलग १५ वर्षे वास्तव्य असल्याचे सिद्ध करतो. इयत्ता ११वी, सीईटी कॅप आणि शासकीय नोकऱ्यांसाठी अत्यंत आवश्यक.",
    },
    keywords: [
      "domicile", "domicile certificate", "residence", "maharashtra domicile", "aaple sarkar", "tahsildar", "cap quota", "15 years residence",
      "डोमिसाइल", "अधिवास", "निवास प्रमाण पत्र", "महाराष्ट्र डोमिसाइल", "तहसीलदार", "आपले सरकार",
      "अधिवास दाखला", "डोमिसाइल", "रहिवासी दाखला", "१५ वर्षे वास्तव्य", "तहसीलदार", "आपले सरकार"
    ],
    scopeNote: "Issued strictly under the Maharashtra Right to Public Services Act (RTS) by the Revenue Department through the official Aaple Sarkar portal.",
    localizedScopeNote: {
      en: "Covers Maharashtra State. Requires proof of continuous 15 years residence in Maharashtra. Holding simultaneous domicile in another state is illegal.",
      hi: "केवल महाराष्ट्र राज्य के लिए। कम से कम 15 वर्षों के निरंतर निवास का प्रमाण आवश्यक है। एक साथ दो राज्यों का डोमिसाइल रखना गैरकानूनी है।",
      mr: "फक्त महाराष्ट्र राज्यासाठी. महाराष्ट्रात सलग १५ वर्षे वास्तव्याचा पुरावा आवश्यक असतो. एकाच वेळी दोन राज्यांचा डोमिसाइल बाळगणे कायद्याने गुन्हा आहे.",
    },
    examplesConfirmedOfficial: true,
    lastChecked: "2026-10-01",
    whoCanApply: {
      en: "Any citizen who has resided in Maharashtra continuously for a minimum period of 15 years, or their dependent children.",
      hi: "कोई भी नागरिक जो कम से कम 15 वर्षों से लगातार महाराष्ट्र में रह रहा हो, या उनके आश्रित बच्चे।",
      mr: "महाराष्ट्रात सलग किमान १५ वर्षे वास्तव्यास असणारा कोणताही नागरिक किंवा त्यांची मुले.",
    },
    eligibility: {
      en: [
        "Continuous physical residence in the State of Maharashtra for not less than 15 years.",
        "Schooling or higher education completed in Maharashtra, OR employment in Maharashtra.",
        "Applicant must not hold a Domicile Certificate of any other Indian State.",
      ],
      hi: [
        "महाराष्ट्र राज्य में कम से कम 15 वर्षों का निरंतर भौतिक निवास।",
        "महाराष्ट्र में स्कूली शिक्षा या रोजगार का वैध प्रमाण।",
        "आवेदक के पास किसी अन्य राज्य का डोमिसाइल प्रमाण पत्र नहीं होना चाहिए।",
      ],
      mr: [
        "महाराष्ट्र राज्यात सलग किमान १५ वर्षे प्रत्यक्ष वास्तव्य असणे आवश्यक.",
        "महाराष्ट्रातील शालेय शिक्षण किंवा नोकरी/व्यवसायाचा पुरावा.",
        "अर्जदाराकडे इतर कोणत्याही राज्याचा डोमिसाइल दाखला नसावा.",
      ],
    },
    situations: [
      {
        id: "resident-15-years",
        name: {
          en: "Adult Resident (15+ Years Continuous Stay)",
          hi: "वयस्क स्थायी निवासी (15+ वर्ष निरंतर निवास)",
          mr: "प्रौढ रहिवासी (सलग १५+ वर्षे वास्तव्य)",
        },
        description: {
          en: "General applicant aged 18 or above who has lived in Maharashtra for 15 consecutive years.",
          hi: "18 वर्ष या उससे अधिक आयु का नागरिक जो पिछले 15 वर्षों से लगातार महाराष्ट्र में रह रहा हो।",
          mr: "१८ वर्षे किंवा त्याहून अधिक वयाचा नागरिक जो मागील १५ वर्षे सलग महाराष्ट्रात राहतो आहे.",
        },
        applicableDocIds: ["residence-chain-proof", "identity-proof", "birth-or-school-proof", "domicile-affidavit", "photograph"],
        notes: {
          en: "Provide a chain of residence proofs (such as school certificates, old ration cards, or registered rent agreements) covering the full 15-year period.",
          hi: "पूरे 15 वर्षों की अवधि दर्शाने वाले निवास प्रमाणों की श्रृंखला (जैसे स्कूल दाखिला, पुराना राशन कार्ड, या बिजली बिल) संलग्न करें।",
          mr: "संपूर्ण १५ वर्षांचा कालावधी सिद्ध करणारी कागदपत्रे (उदा. जुने रेशन कार्ड, वीज बिल, शाळा सोडल्याचा दाखला) जोडणे आवश्यक आहे.",
        },
      },
      {
        id: "student-admissions",
        name: {
          en: "Student for FYJC / CET CAP State Quota",
          hi: "छात्र (11वीं FYJC / MHT-CET राज्य कोटे के लिए)",
          mr: "विद्यार्थी (११वी प्रवेश / एमएचटी-सीईटी राज्य कोटा)",
        },
        description: {
          en: "Students applying for Maharashtra State Candidature (Type A) in engineering, medical, law, or 11th admissions.",
          hi: "इंजीनियरिंग, मेडिकल, लॉ या 11वीं कक्षा में 85% महाराष्ट्र राज्य कोटे के लिए आवेदन करने वाले छात्र।",
          mr: "अभियांत्रिकी, वैद्यकीय किंवा ११वी प्रवेशात ८५% महाराष्ट्र राज्य कोट्याचा लाभ घेण्यासाठी आवश्यक अर्ज.",
        },
        applicableDocIds: ["student-school-lc", "father-domicile-proof", "residence-chain-proof", "domicile-affidavit", "photograph"],
        notes: {
          en: "If the student is a minor or has not completed 15 years individually, father's/mother's 15-year Domicile Certificate combined with the student's Maharashtra birth/school proof qualifies them.",
          hi: "नाबालिग छात्र के मामले में माता या पिता का 15 वर्षीय डोमिसाइल प्रमाण पत्र और छात्र का महाराष्ट्र में स्कूल का दाखिला मान्य होता है।",
          mr: "अल्पवयीन विद्यार्थ्यांच्या बाबतीत वडिलांचा डोमिसाइल दाखला आणि विद्यार्थ्याचा शाळा सोडल्याचा दाखला ग्राह्य धरला जातो.",
        },
      },
      {
        id: "govt-servant-deputation",
        name: {
          en: "Child of Central / Maharashtra Govt Employee",
          hi: "केंद्र / महाराष्ट्र सरकार कर्मचारी के बच्चे",
          mr: "शासकीय कर्मचाऱ्यांची मुले",
        },
        description: {
          en: "Wards of government employees posted or transferred within Maharashtra.",
          hi: "महाराष्ट्र में कार्यरत या स्थानांतरित केंद्र अथवा राज्य सरकार के कर्मचारियों के आश्रित।",
          mr: "महाराष्ट्रात सेवेत असणाऱ्या शासकीय कर्मचाऱ्यांची मुले.",
        },
        applicableDocIds: ["service-posting-certificate", "identity-proof", "birth-or-school-proof", "domicile-affidavit", "photograph"],
        notes: {
          en: "Submit the official posting and joining letter certified by the Head of Department confirming Maharashtra posting.",
          hi: "विभागाध्यक्ष द्वारा प्रमाणित सेवा और पदस्थापना (Posting) आदेश संलग्न करें।",
          mr: "विभागप्रमुखांनी प्रमाणित केलेले बदली व पदस्थापना आदेश पत्र सादर करावे.",
        },
      },
    ],
    documents: [
      {
        id: "residence-chain-proof",
        name: "Proof of 15 Years Continuous Residence",
        shortDescription: "A chain of verifiable documents proving continuous stay in Maharashtra for at least 15 years.",
        explanation: "The core requirement under Maharashtra Government rules. Submitting only 1 or 2 recent years is strictly rejected; you must show evidence spanning 15 years.",
        purpose: "Proves that the applicant meets the statutory 15-year residential threshold for state entitlements.",
        examples: [
          "School Leaving Certificate(s) showing minimum 10 to 12 years of primary/secondary schooling in Maharashtra",
          "Ration Card of the family spanning 15 years or electricity bills of residential premises",
          "Property Tax / House Tax receipts or registered Rent Agreements over 15 years",
          "Father's / Mother's Domicile Certificate issued by Tahsildar in Maharashtra",
        ],
        officialNotes: "School Leaving Certificate showing birth in Maharashtra and 10+ years schooling is the strongest single piece of evidence.",
        formatAndPreparation: {
          submission: {
            en: "Color scanned documents uploaded on Aaple Sarkar portal.",
            hi: "आपले सरकार पोर्टल पर रंगीन स्कैन दस्तावेज अपलोड करें।",
            mr: "आपले सरकार पोर्टलवर रंगीत स्कॅन कागदपत्रे अपलोड करावीत.",
          },
          selfAttestation: {
            en: "Self-attested photocopies of all historical proofs.",
            hi: "सभी ऐतिहासिक प्रमाणों पर आवेदक के स्व-हस्ताक्षर।",
            mr: "सर्व पुराव्यांवर स्वतःची स्वाक्षरी असणे आवश्यक.",
          },
          digitalCopy: {
            en: "PDF files under 2MB each.",
            hi: "2MB से कम साइज की PDF फाइलें।",
            mr: "२MB पेक्षा कमी आकाराच्या PDF फाईल्स.",
          },
          fileFormat: {
            en: "PDF or JPEG.",
            hi: "PDF या JPEG।",
            mr: "PDF किंवा JPEG.",
          },
          validityOrRecentness: {
            en: "Historical span covering 15 years continuously.",
            hi: "15 वर्षों की निरंतर अवधि दर्शाने वाले साक्ष्य।",
            mr: "सलग १५ वर्षांचा कालावधी दर्शवणारे पुरावे.",
          },
          whatIfMissing: {
            en: "If electricity bills are missing for all 15 years, combine school leaving certificates, father's employment record, and a registered society maintenance letter.",
            hi: "यदि सभी वर्षों के बिल न हों, तो स्कूल के दाखिले, पिता की नौकरी का रिकॉर्ड और हाउसिंग सोसाइटी का पत्र मिलाकर प्रस्तुत करें।",
            mr: "सगळी बिले नसल्यास, शाळेचा दाखला, वडिलांच्या नोकरीचा पुरावा आणि सोसायटीचे प्रमाणपत्र एकत्र जोडावे.",
          },
        },
      },
      {
        id: "identity-proof",
        name: "Proof of Identity (PoI)",
        shortDescription: "Government-issued photo identification.",
        explanation: "Confirms the applicant's official identity and photograph.",
        purpose: "Ensures the applicant identity corresponds with the person claiming domicile.",
        examples: [
          "Aadhaar Card",
          "Voter ID (EPIC)",
          "Indian Passport",
          "PAN Card",
          "Driving Licence",
        ],
        formatAndPreparation: {
          submission: {
            en: "Scanned copy uploaded to Aaple Sarkar.",
            hi: "पोर्टल पर स्कैन प्रति अपलोड करें।",
            mr: "पोर्टलवर स्कॅन प्रत अपलोड करावी.",
          },
          selfAttestation: {
            en: "Self-attested by applicant.",
            hi: "आवेदक द्वारा हस्ताक्षरित।",
            mr: "अर्जदाराची स्वाक्षरी.",
          },
          digitalCopy: {
            en: "Color scan under 2MB.",
            hi: "2MB से कम रंगीन स्कैन।",
            mr: "२MB पेक्षा कमी रंगीत स्कॅन.",
          },
          fileFormat: {
            en: "PDF or JPEG.",
            hi: "PDF किंवा JPEG.",
            mr: "PDF किंवा JPEG.",
          },
        },
      },
      {
        id: "birth-or-school-proof",
        name: "Proof of Age & Birth (LC or Birth Certificate)",
        shortDescription: "School Leaving Certificate or Birth Certificate showing birth place in Maharashtra.",
        explanation: "Confirms date of birth and whether the applicant was born in the state of Maharashtra.",
        purpose: "Establishes birth origin and baseline entry into the state.",
        examples: [
          "School Leaving Certificate (LC) / Transfer Certificate (TC)",
          "Birth Certificate issued by Municipal Corporation / Gram Panchayat",
        ],
        formatAndPreparation: {
          submission: {
            en: "Clear color scan of original Leaving Certificate or Birth Certificate.",
            hi: "मूल स्कूल दाखिले (LC) या जन्म प्रमाण पत्र की स्पष्ट रंगीन स्कैन प्रति।",
            mr: "शाळा सोडल्याचा मूळ दाखला किंवा जन्माच्या दाखल्याची रंगीत स्कॅन प्रत.",
          },
          selfAttestation: {
            en: "Self-attested copy.",
            hi: "स्व-हस्ताक्षरित प्रति।",
            mr: "स्वतःची स्वाक्षरी असलेली प्रत.",
          },
          digitalCopy: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
          fileFormat: {
            en: "PDF under 2MB.",
            hi: "2MB से कम PDF।",
            mr: "२MB पेक्षा कमी PDF.",
          },
        },
      },
      {
        id: "domicile-affidavit",
        name: "Affidavit & Self-Declaration for Domicile",
        shortDescription: "Standard declaration on stamp paper affirming continuous residence and holding no other state domicile.",
        explanation: "Sworn legal declaration that the applicant has resided in Maharashtra for 15 years and has not applied for or obtained domicile in any other state.",
        purpose: "Prevents illegal dual-domicile fraud across multiple states for reservation quotas.",
        examples: [
          "Prescribed Self-Declaration Form downloaded from Aaple Sarkar, signed by applicant/parent",
          "Affidavit on ₹100 Court Stamp Paper attested by Notary Public or Executive Magistrate",
        ],
        formatAndPreparation: {
          submission: {
            en: "Signed and notarized affidavit uploaded as PDF.",
            hi: "हस्ताक्षरित और नोटरीकृत शपथ पत्र PDF में अपलोड करें।",
            mr: "स्वाक्षरी केलेले आणि नोटरी केलेले प्रतिज्ञापत्र PDF मध्ये अपलोड करावे.",
          },
          selfAttestation: {
            en: "Notarized by public notary.",
            hi: "पब्लिक नोटरी द्वारा मुहर व हस्ताक्षर।",
            mr: "नोटरी पब्लिकचा शिक्का व सही.",
          },
          digitalCopy: {
            en: "PDF scan.",
            hi: "PDF स्कैन।",
            mr: "PDF स्कॅन.",
          },
          fileFormat: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
        },
      },
      {
        id: "photograph",
        name: "Applicant Passport Photograph",
        shortDescription: "Recent colored passport-size photograph.",
        explanation: "Printed on the final digital Domicile Certificate issued by the Tahsildar.",
        purpose: "Visual identity verification on the issued barcode certificate.",
        examples: [
          "Recent passport photo with white background (160x212 px, 5KB to 20KB JPEG)",
        ],
        formatAndPreparation: {
          submission: {
            en: "Uploaded on portal per Aaple Sarkar image specifications.",
            hi: "आपले सरकार पोर्टल के नियमों के अनुसार 5KB से 20KB के बीच JPEG अपलोड करें।",
            mr: "५KB ते २०KB दरम्यान रंगीत फोटो पोर्टलवर अपलोड करावा.",
          },
          selfAttestation: {
            en: "Not applicable.",
            hi: "लागू नहीं।",
            mr: "लागू नाही.",
          },
          digitalCopy: {
            en: "JPEG.",
            hi: "JPEG.",
            mr: "JPEG.",
          },
          fileFormat: {
            en: "JPEG (160x212 px, 5KB - 20KB).",
            hi: "JPEG (5KB - 20KB).",
            mr: "JPEG (५KB - २०KB).",
          },
        },
      },
      {
        id: "student-school-lc",
        name: "Student's School Leaving Certificate (LC)",
        shortDescription: "LC showing school attended in Maharashtra.",
        explanation: "Indicates the child's academic record in Maharashtra.",
        purpose: "Proves continuous education within the state.",
        examples: [
          "10th Standard School Leaving Certificate from Maharashtra State Board / CBSE / ICSE school",
        ],
        formatAndPreparation: {
          submission: {
            en: "Uploaded on portal.",
            hi: "पोर्टल पर अपलोड।",
            mr: "पोर्टलवर अपलोड.",
          },
          selfAttestation: {
            en: "Self-attested.",
            hi: "स्व-हस्ताक्षरित।",
            mr: "स्वाक्षरी केलेली.",
          },
          digitalCopy: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
          fileFormat: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
        },
      },
      {
        id: "father-domicile-proof",
        name: "Father's Domicile Certificate",
        shortDescription: "Existing Maharashtra Domicile Certificate of the student's father.",
        explanation: "Provides the anchor 15-year residency proof for dependent school-going children.",
        purpose: "Directly qualifies minor students under State Type A candidature.",
        examples: [
          "Father's Domicile Certificate issued by Tahsildar / Executive Magistrate in Maharashtra",
        ],
        formatAndPreparation: {
          submission: {
            en: "Color scan of father's certificate.",
            hi: "पिता के प्रमाण पत्र की रंगीन स्कैन प्रति।",
            mr: "वडिलांच्या दाखल्याची रंगीत स्कॅन प्रत.",
          },
          selfAttestation: {
            en: "Father signs.",
            hi: "पिता के हस्ताक्षर।",
            mr: "वडिलांची स्वाक्षरी.",
          },
          digitalCopy: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
          fileFormat: {
            en: "PDF under 2MB.",
            hi: "2MB से कम PDF।",
            mr: "२MB पेक्षा कमी PDF.",
          },
        },
      },
      {
        id: "service-posting-certificate",
        name: "Government Posting & Joining Order",
        shortDescription: "Official office order verifying current posting in Maharashtra.",
        explanation: "For government employees transferred to Maharashtra.",
        purpose: "Exempts 15-year stay under specific government service service rules.",
        examples: [
          "Transfer / Posting Order signed by competent appointing authority",
        ],
        formatAndPreparation: {
          submission: {
            en: "Official copy with departmental seal.",
            hi: "विभागीय मुहर युक्त सरकारी आदेश की प्रति।",
            mr: "विभागीय शिक्का असलेले अधिकृत बदली आदेश पत्र.",
          },
          selfAttestation: {
            en: "Countersigned by employee.",
            hi: "कर्मचारी द्वारा हस्ताक्षरित।",
            mr: "कर्मचाऱ्याची स्वाक्षरी.",
          },
          digitalCopy: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
          fileFormat: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
        },
      },
    ],
    steps: [
      {
        title: "Register on Aaple Sarkar Portal",
        description: "Visit aaplesarkar.mahaonline.gov.in and create your citizen profile with Aadhaar verification and mobile OTP. Select Revenue Department from the services directory.",
        localized: {
          title: {
            en: "Register on Aaple Sarkar Portal",
            hi: "आपले सरकार पोर्टल पर पंजीकरण करें",
            mr: "आपले सरकार पोर्टलवर नोंदणी करा",
          },
          description: {
            en: "Log in to aaplesarkar.mahaonline.gov.in, select Revenue Department, and choose 'Age, Nationality and Domicile Certificate'.",
            hi: "aaplesarkar.mahaonline.gov.in पर जाएं, राजस्व विभाग चुनें और 'आयु, राष्ट्रीयता एवं अधिवास प्रमाण पत्र' सेवा पर क्लिक करें।",
            mr: "aaplesarkar.mahaonline.gov.in वर लॉग इन करा, महसूल विभाग निवडा आणि 'वय, राष्ट्रीयत्व व अधिवास दाखला' सेवेवर क्लिक करा.",
          },
        },
      },
      {
        title: "Fill Application & Upload 15-Year Chain Documents",
        description: "Enter your full details, place of birth, and residency addresses. Upload clear scanned copies of identity, 15-year residence chain proofs, and signed affidavit.",
        localized: {
          title: {
            en: "Fill Application & Upload 15-Year Chain Documents",
            hi: "आवेदन पत्र भरें और 15 वर्षीय निवास साक्ष्य अपलोड करें",
            mr: "अर्ज भरा आणि १५ वर्षांचे वास्तव्याचे पुरावे अपलोड करा",
          },
          description: {
            en: "Fill in applicant details, upload identity proof, 15-year residential evidence chain, photograph, and self-declaration affidavit.",
            hi: "अपनी पूरी जानकारी भरें, पहचान प्रमाण, 15 वर्षों के निवास प्रमाण, फोटो और हस्ताक्षरित शपथ पत्र अपलोड करें।",
            mr: "संपूर्ण माहिती भरा, ओळखपत्र, १५ वर्षांचे वास्तव्याचे पुरावे, फोटो आणि प्रतिज्ञापत्र अपलोड करा.",
          },
        },
      },
      {
        title: "Pay RTS Statutory Fee & Note Application ID",
        description: "Pay the online statutory fee of ₹33.60 via UPI, Net Banking, or Debit Card. Keep your 15-digit Application Tracking ID for status monitoring.",
        localized: {
          title: {
            en: "Pay RTS Statutory Fee & Note Application ID",
            hi: "सरकारी शुल्क का भुगतान करें और आवेदन क्रमांक नोट करें",
            mr: "शासकीय शुल्क भरा आणि अर्ज क्रमांक जपून ठेवा",
          },
          description: {
            en: "Pay ₹33.60 statutory fee online. Note down your unique Application ID to track processing status under the Right to Services (RTS) Act.",
            hi: "ऑनलाइन ₹33.60 शुल्क का भुगतान करें और लोकसेवा हक्क (RTS) के तहत ट्रैकिंग के लिए आवेदन क्रमांक सुरक्षित रखें।",
            mr: "ऑनलाइन ₹३३.६० शासकीय शुल्क भरा आणि लोकसेवा हक्क कायद्यांतर्गत ट्रॅक करण्यासाठी अर्ज क्रमांक नोंदवून ठेवा.",
          },
        },
      },
      {
        title: "Talathi Inquiry, Tahsildar Approval & Download",
        description: "The application is scrutinized by the Circle Officer / Talathi. Upon Tahsildar digital signature approval, download your verified certificate with QR code directly from the portal.",
        localized: {
          title: {
            en: "Talathi Inquiry, Tahsildar Approval & Download",
            hi: "सत्यापन, तहसीलदार स्वीकृति और डाउनलोड",
            mr: "तलाठी चौकशी, तहसीलदार स्वाक्षरी आणि दाखला डाऊनलोड",
          },
          description: {
            en: "Within statutory 15 days, upon approval, download your digitally signed Domicile Certificate with QR code and barcode. No physical visit required.",
            hi: "15 दिनों के भीतर तहसीलदार की डिजिटल स्वीकृति मिलने के बाद पोर्टल से सीधे बारकोड और क्यूआर कोड युक्त प्रमाण पत्र डाउनलोड करें।",
            mr: "१५ दिवसांच्या आत तहसीलदारांची डिजिटल स्वाक्षरी झाल्यानंतर बारकोड आणि क्यूआर कोड असलेला अधिकृत दाखला पोर्टलवरून डाऊनलोड करा.",
          },
        },
      },
    ],
    fees: [
      {
        item: {
          en: "Online Application Fee via Aaple Sarkar RTS Portal",
          hi: "आपले सरकार पोर्टल पर ऑनलाइन सेवा शुल्क",
          mr: "आपले सरकार पोर्टलवरील ऑनलाइन सेवा शुल्क",
        },
        amount: "₹33.60",
        verifiedSource: "Maharashtra Right to Public Services Commission Schedule",
      },
      {
        item: {
          en: "Application via Maha e-Seva Kendra / CSC (Assisted Mode)",
          hi: "महा ई-सेवा केंद्र / सीएससी द्वारा सहायता प्राप्त शुल्क",
          mr: "महा ई-सेवा केंद्र / आपले सरकार केंद्र सेवा शुल्क",
        },
        amount: "₹50 to ₹100",
        verifiedSource: "District Collectorate Gazette for CSC Centers",
      },
    ],
    timelines: {
      overall: {
        en: "15 working days statutory limit under Maharashtra Right to Public Services Act (RTS).",
        hi: "महाराष्ट्र लोकसेवा हक्क अधिनियम (RTS) के तहत 15 कार्य दिवस की वैधानिक समय-सीमा।",
        mr: "महाराष्ट्र लोकसेवा हक्क कायद्यानुसार (RTS) १५ कामकाजाचे दिवस.",
      },
      details: {
        en: "If the certificate is not issued or rejected within 15 working days, citizens have the legal right to file a First Appeal before the Sub-Divisional Officer (SDO) directly on Aaple Sarkar.",
        hi: "यदि 15 दिनों में प्रमाण पत्र जारी नहीं होता, तो नागरिक पोर्टल पर सीधे अनुविभागीय अधिकारी (SDO) के समक्ष प्रथम अपील (First Appeal) दर्ज कर सकते हैं।",
        mr: "१५ दिवसांत दाखला न मिळाल्यास नागरिकांना थेट पोर्टलवरून उपविभागीय अधिकाऱ्यांकडे (SDO) प्रथम अपील करण्याचा कायदेशीर अधिकार आहे.",
      },
    },
    commonMistakes: [
      {
        mistake: {
          en: "Submitting only current year electricity bill or rent agreement instead of a continuous 15-year chain.",
          hi: "केवल वर्तमान वर्ष का बिजली बिल या रेंट एग्रीमेंट लगाना, जिससे 15 वर्षों का निवास सिद्ध नहीं होता।",
          mr: "फक्त चालू वर्षाचे लाईट बिल किंवा भाडेकरार जोडणे, ज्यामुळे १५ वर्षांचे वास्तव्य सिद्ध होत नाही.",
        },
        howToAvoid: {
          en: "Always provide documentation proving you were residing in Maharashtra 15 years ago and continuously until the present day (e.g. school admission date 15 years prior).",
          hi: "हमेशा ऐसे प्रमाण लगाएं जो 15 वर्ष पूर्व से लेकर वर्तमान तक निरंतर निवास साबित करें (जैसे 15 वर्ष पुराना स्कूल का दाखिला)।",
          mr: "नेहमी असे पुरावे जोडा जे १५ वर्षांपूर्वीपासून आजपर्यंत सलग वास्तव्य सिद्ध करतील (उदा. शाळेतील १५ वर्षांपूर्वीची नोंद).",
        },
      },
      {
        mistake: {
          en: "Holding or applying for a Domicile Certificate in two different states.",
          hi: "एक साथ दो अलग-अलग राज्यों का डोमिसाइल प्रमाण पत्र रखना या आवेदन करना।",
          mr: "एकाच वेळी दोन वेगवेगळ्या राज्यांचा डोमिसाइल दाखला घेणे किंवा अर्ज करणे.",
        },
        howToAvoid: {
          en: "Under Indian law, a citizen can have only ONE domicile at any given time. Surrender any previous state domicile before claiming Maharashtra domicile; dual domicile leads to cancellation of college admission and legal penalty.",
          hi: "भारतीय कानून में एक व्यक्ति का एक समय में केवल एक ही डोमिसाइल हो सकता है। दो राज्यों का लाभ लेने पर कॉलेज प्रवेश रद्द और कानूनी कार्रवाई हो सकती है।",
          mr: "कायद्यानुसार एका वेळी एकाच राज्याचा डोमिसाइल बाळगता येतो. दोन राज्यांचा लाभ घेतल्यास प्रवेश रद्द होऊन कायदेशीर कारवाई होऊ शकते.",
        },
      },
      {
        mistake: {
          en: "Confusing Domicile Certificate with Nationality or Voter ID.",
          hi: "डोमिसाइल सर्टिफिकेट को वोटर आईडी या साधारण निवास प्रमाण समझना।",
          mr: "डोमिसाइल दाखल्याला मतदार ओळखपत्र किंवा सामान्य रहिवासी पुरावा समजणे.",
        },
        howToAvoid: {
          en: "A Voter ID or Aadhaar only proves present residence. For state quotas and educational reservation, a formal Tahsildar-issued Domicile Certificate is mandatory.",
          hi: "वोटर आईडी केवल वर्तमान पता सिद्ध करता है। कॉलेज में राज्य कोटे की सीट पाने के लिए तहसीलदार द्वारा जारी मूल डोमिसाइल सर्टिफिकेट ही अनिवार्य है।",
          mr: "मतदार ओळखपत्र फक्त सध्याचा पत्ता दाखवते. कॉलेजमधील ८५% राज्य कोट्यासाठी तहसीलदारांचा अधिकृत डोमिसाइल दाखलाच लागतो.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "Is a Maharashtra Domicile Certificate valid for a lifetime?",
          hi: "क्या महाराष्ट्र का डोमिसाइल प्रमाण पत्र जीवनभर (Lifetime) मान्य होता है?",
          mr: "महाराष्ट्राचा डोमिसाइल दाखला आयुष्यभरासाठी (Lifetime) वैध असतो का?",
        },
        answer: {
          en: "Yes. A Domicile Certificate issued by the competent Revenue Authority has lifetime validity and does not expire, provided the holder does not permanently acquire domicile in another state.",
          hi: "हाँ। राजस्व अधिकारी द्वारा जारी अधिवास (Domicile) प्रमाण पत्र आजीवन वैध रहता है और इसकी कोई समाप्ति तिथि नहीं होती, जब तक कि आवेदक किसी अन्य राज्य का डोमिसाइल न ले ले।",
          mr: "होय. महसूल विभागामार्फत मिळालेला डोमिसाइल दाखला आयुष्यभरासाठी वैध असतो, जोपर्यंत व्यक्ती दुसऱ्या राज्याचा डोमिसाइल घेत नाही.",
        },
      },
      {
        question: {
          en: "Can a student born outside Maharashtra get a Maharashtra Domicile Certificate?",
          hi: "क्या महाराष्ट्र के बाहर जन्मा छात्र महाराष्ट्र डोमिसाइल प्राप्त कर सकता है?",
          mr: "महाराष्ट्राबाहेर जन्म झालेला विद्यार्थी महाराष्ट्राचा डोमिसाइल दाखला मिळवू शकतो का?",
        },
        answer: {
          en: "Yes, provided the student or applicant has continuously resided in Maharashtra for not less than 15 years and provides valid proof (e.g. 15 years of schooling, parent employment, and residential proofs).",
          hi: "हाँ, यदि छात्र या आवेदक कम से कम 15 वर्षों से लगातार महाराष्ट्र में रह रहा हो और उसके पास 15 वर्षों की स्कूली शिक्षा व निवास का वैध प्रमाण हो।",
          mr: "होय, जर विद्यार्थ्याने महाराष्ट्रात सलग किमान १५ वर्षे वास्तव्य केले असेल आणि त्याचे १५ वर्षांच्या शालेय शिक्षणाचे व वास्तव्याचे पुरावे असतील.",
        },
      },
      {
        question: {
          en: "What is the difference between Domicile Certificate and Residence Certificate?",
          hi: "डोमिसाइल सर्टिफिकेट (Domicile) और रेजिडेंस सर्टिफिकेट (Residence) में क्या अंतर है?",
          mr: "डोमिसाइल दाखला (Domicile) आणि रहिवासी दाखला (Residence) यामध्ये काय फरक आहे?",
        },
        answer: {
          en: "In Maharashtra, the official Revenue Department issues a combined certificate titled 'Age, Nationality and Domicile Certificate'. A simple residence certificate or electricity bill only proves temporary stay; Domicile proves permanent 15-year legal belongingness to the state.",
          hi: "महाराष्ट्र में राजस्व विभाग 'आयु, राष्ट्रीयता एवं अधिवास प्रमाण पत्र' जारी करता है। साधारण निवास प्रमाण केवल मौजूदा पते की पुष्टि करता है, जबकि डोमिसाइल राज्य में 15 वर्षों के स्थायी जुड़ाव को प्रमाणित करता है।",
          mr: "महाराष्ट्रात महसूल विभाग 'वय, राष्ट्रीयत्व व अधिवास दाखला' एकत्र देतो. साधे रहिवासी प्रमाणपत्र फक्त तात्पुरता पत्ता दाखवते, तर डोमिसाइल १५ वर्षांचे सलग वास्तव्य सिद्ध करते.",
        },
      },
    ],
    officialSource: {
      name: "Aaple Sarkar, Government of Maharashtra",
      url: "https://aaplesarkar.mahaonline.gov.in/",
      more: [
        { name: "Track Domicile Application Status (RTS)", url: "https://aaplesarkar.mahaonline.gov.in/en/TrackApplication" },
        { name: "Verify Digital Certificate via Barcode", url: "https://aaplesarkar.mahaonline.gov.in/en/VerifyCertificate" },
        { name: "Maharashtra Right to Public Services Commission", url: "https://aaplesarkar.mahaonline.gov.in/en/RTS" },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // 4. CASTE CERTIFICATE
  // -------------------------------------------------------------------------
  {
    id: "caste-certificate",
    slug: "caste-certificate",
    title: "Caste Certificate",
    category: "Certificates (Maharashtra)",
    description: "An official certificate issued by the Sub-Divisional Officer (SDO) / Deputy Collector verifying that an individual belongs to a recognized SC, ST, VJ, NT, OBC, or SBC community in Maharashtra.",
    localizedTitle: {
      en: "Caste Certificate (Maharashtra)",
      hi: "जाति प्रमाण पत्र (Caste Certificate - महाराष्ट्र)",
      mr: "जातीचा दाखला (Caste Certificate - महाराष्ट्र)",
    },
    localizedCategory: {
      en: "Certificates (Maharashtra)",
      hi: "सरकारी प्रमाण पत्र (महाराष्ट्र)",
      mr: "शासकीय दाखले (महाराष्ट्र)",
    },
    localizedDescription: {
      en: "An official certificate issued by the Sub-Divisional Officer (SDO) / Deputy Collector verifying that an individual belongs to a recognized SC, ST, VJ, NT, OBC, or SBC community in Maharashtra.",
      hi: "महाराष्ट्र के उपविभागीय अधिकारी (SDO) द्वारा जारी अधिकृत प्रमाण पत्र जो यह सत्यापित करता है कि आवेदक महाराष्ट्र की मान्यता प्राप्त अनुसूचित जाति (SC), जनजाति (ST), विमुक्त जाति (VJ), घुमंतू जनजाति (NT), अन्य पिछड़ा वर्ग (OBC) या विशेष पिछड़ा वर्ग (SBC) से संबंधित है।",
      mr: "महाराष्ट्र शासनाच्या उपविभागीय अधिकारी (SDO) / उप जिल्हाधिकाऱ्यांमार्फत दिला जाणारा अधिकृत दाखला, जो व्यक्ती महाराष्ट्रातील मान्यताप्राप्त अनुसूचित जाती (SC), जमाती (ST), विमुक्त जाती (VJ), भटक्या जमाती (NT), इतर मागासवर्ग (OBC) किंवा विशेष मागास प्रवर्गातील (SBC) असल्याचे सिद्ध करतो.",
    },
    keywords: [
      "caste", "caste certificate", "sc", "st", "obc", "vjnt", "sbc", "aaple sarkar", "sdo", "maharashtra", "reservation",
      "जाति", "जाति प्रमाण पत्र", "एससी", "एसटी", "ओबीसी", "वीजेएनटी", "आरक्षण", "आपले सरकार",
      "जात", "जातीचा दाखला", "मागासवर्ग", "आरक्षण", "आपले सरकार", "एसडीओ", "उपविभागीय अधिकारी"
    ],
    scopeNote: "Issued strictly based on paternal lineage (father's bloodline) under the Maharashtra Scheduled Castes, Scheduled Tribes, De-notified Tribes, Nomadic Tribes, Other Backward Classes and Special Backward Category (Regulation of Issuance and Verification of) Caste Certificate Act, 2000.",
    localizedScopeNote: {
      en: "Maternal lineage is strictly rejected under Maharashtra law. Deemed date proofs (1950 for SC/ST, 1961 for VJNT, 1967 for OBC) must trace to father's ancestors.",
      hi: "महाराष्ट्र कानून के तहत ननिहाल (माता के पक्ष) के दस्तावेज़ स्वीकार नहीं किए जाते। केवल पिता/दादा के पक्ष के मानक वर्ष (SC/ST: 1950, VJNT: 1961, OBC: 1967) के साक्ष्य ही मान्य हैं।",
      mr: "महाराष्ट्रात आईकडील पुरावे कायद्याने ग्राह्य धरले जात नाहीत. फक्त वडिलांकडील वंशावळीचे मानक दिनांकाचे पुरावे (SC/ST: १९५०, VJNT: १९६१, OBC: १९६७) लागतात.",
    },
    examplesConfirmedOfficial: true,
    lastChecked: "2026-10-01",
    whoCanApply: {
      en: "Any citizen whose father / paternal ancestors resided in Maharashtra prior to the applicable deemed date and belong to a notified category in Maharashtra.",
      hi: "कोई भी नागरिक जिसके पिता या पैतृक पूर्वज संबंधित मानक तिथि से पूर्व महाराष्ट्र में रह रहे थे और महाराष्ट्र की अधिसूचित जाति सूची में शामिल हैं।",
      mr: "ज्यांचे वडील किंवा आजोबा संबंधित मानक तारखेपूर्वीपासून महाराष्ट्रात वास्तव्यास होते आणि त्या प्रवर्गात मोडतात.",
    },
    eligibility: {
      en: [
        "Paternal ancestors must belong to a community notified as SC, ST, VJ, NT, OBC, or SBC in the State of Maharashtra.",
        "Must establish continuous family residence in Maharashtra prior to the category deemed date: SC/ST (10 August 1950), VJ/NT (21 November 1961), OBC/SBC (13 October 1967).",
        "Maternal side (mother's side) records cannot be used under Maharashtra law.",
      ],
      hi: [
        "पैतृक परिवार महाराष्ट्र की अधिसूचित आरक्षित श्रेणी से संबंधित होना चाहिए।",
        "मानक वर्ष का पैतृक साक्ष्य अनिवार्य है: SC/ST हेतु 10 अगस्त 1950; VJ/NT हेतु 21 नवंबर 1961; OBC/SBC हेतु 13 अक्टूबर 1967।",
        "केवल पिता के रक्त संबंधियों (चाचा, दादा, पिता) के प्रमाण पत्र ही मान्य हैं।",
      ],
      mr: [
        "वडिलांचे घराणे महाराष्ट्रातील अधिसूचित आरक्षित प्रवर्गातील असणे आवश्यक.",
        "प्रवर्गानुसार मानक दिनांकाचा पुरावा बंधनकारक: SC/ST साठी १० ऑगस्ट १९५०; VJ/NT साठी २१ नोव्हेंबर १९६१; OBC/SBC साठी १३ ऑक्टोबर १९६७.",
        "फक्त वडिलांच्या रक्ताच्या नातेवाईकांचे (वडील, आजोबा, चुलते) पुरावे चालतात.",
      ],
    },
    situations: [
      {
        id: "sc-st-category",
        name: {
          en: "Scheduled Caste (SC) / Scheduled Tribe (ST)",
          hi: "अनुसूचित जाति (SC) / अनुसूचित जनजाति (ST)",
          mr: "अनुसूचित जाती (SC) / अनुसूचित जमाती (ST)",
        },
        description: {
          en: "Deemed date proof required in Maharashtra on or before 10th August 1950.",
          hi: "10 अगस्त 1950 या उससे पूर्व का महाराष्ट्र में पैतृक निवास और जाति प्रमाण आवश्यक।",
          mr: "१० ऑगस्ट १९५० किंवा त्यापूर्वीचा महाराष्ट्रातील वास्तव्य व जातीचा पुरावा आवश्यक.",
        },
        applicableDocIds: ["applicant-school-lc", "paternal-caste-evidence", "deemed-date-1950-proof", "genealogy-vanshavali", "photograph"],
        notes: {
          en: "Submit grandfather's/father's primary school register extract, birth extract (Kotwal Panji), or revenue land records dating back to 1950.",
          hi: "दादा या परदादा का 1950 से पूर्व का स्कूल का दाखिला, जन्म-मृत्यु रजिस्टर (कोटवाल पंजी) या जमीन का रिकॉर्ड प्रस्तुत करें।",
          mr: "आजोबा किंवा पणजोबांची १९५० पूर्वीची शाळा नोंद, जन्म नोंद (कोटवाल नोंदवही) किंवा महसूल नोंद सादर करावी.",
        },
      },
      {
        id: "vj-nt-category",
        name: {
          en: "Vimukta Jati (VJ) / Nomadic Tribes (NT)",
          hi: "विमुक्त जाति (VJ) / घुमंतू जनजाति (NT)",
          mr: "विमुक्त जाती (VJ) / भटक्या जमाती (NT)",
        },
        description: {
          en: "Deemed date proof required in Maharashtra on or before 21st November 1961.",
          hi: "21 नवंबर 1961 या उससे पूर्व का महाराष्ट्र में पैतृक जाति व निवास प्रमाण।",
          mr: "२१ नोव्हेंबर १९६१ किंवा त्यापूर्वीचा महाराष्ट्रातील पुरावा आवश्यक.",
        },
        applicableDocIds: ["applicant-school-lc", "paternal-caste-evidence", "deemed-date-1961-proof", "genealogy-vanshavali", "photograph"],
        notes: {
          en: "Provide paternal blood relation's school register, birth extract, or 1961 census records.",
          hi: "पिता या दादा का 1961 से पूर्व का स्कूल रिकॉर्ड या ग्राम पंचायत का जन्म रिकॉर्ड संलग्न करें।",
          mr: "वडिलांचा किंवा आजोबांचा १९६१ पूर्वीचा शाळा दाखला किंवा जन्म नोंद आवश्यक.",
        },
      },
      {
        id: "obc-sbc-category",
        name: {
          en: "Other Backward Class (OBC) / SBC Category",
          hi: "अन्य पिछड़ा वर्ग (OBC) / विशेष पिछड़ा वर्ग (SBC)",
          mr: "इतर मागासवर्ग (OBC) / विशेष मागास प्रवर्ग (SBC)",
        },
        description: {
          en: "Deemed date proof required in Maharashtra on or before 13th October 1967.",
          hi: "13 अक्टूबर 1967 या उससे पूर्व का महाराष्ट्र में पैतृक जाति व निवास प्रमाण।",
          mr: "१३ ऑक्टोबर १९६७ किंवा त्यापूर्वीचा महाराष्ट्रातील पुरावा आवश्यक.",
        },
        applicableDocIds: ["applicant-school-lc", "paternal-caste-evidence", "deemed-date-1967-proof", "genealogy-vanshavali", "photograph"],
        notes: {
          en: "School Leaving Certificate of father or paternal uncle showing caste as recorded before 13 October 1967.",
          hi: "पिता या सगे चाचा का 13 अक्टूबर 1967 से पूर्व का स्कूल का दाखिला जिसमें जाति दर्ज हो।",
          mr: "वडील किंवा सख्ख्या चुलत्यांचा १३ ऑक्टोबर १९६७ पूर्वीचा शाळा सोडल्याचा दाखला ज्यावर जात नोंदवलेली आहे.",
        },
      },
    ],
    documents: [
      {
        id: "applicant-school-lc",
        name: "Applicant's School Leaving Certificate (LC)",
        shortDescription: "Original School Leaving Certificate showing applicant's caste and religion as entered in General Register.",
        explanation: "Indicates the caste entry recorded at the time of primary school admission.",
        purpose: "Verifies how the applicant was recorded in formal school records.",
        examples: [
          "Primary or Secondary School Leaving Certificate (TC / LC)",
          "General Register (GR) Extract certified by Headmaster",
        ],
        formatAndPreparation: {
          submission: {
            en: "Color scanned copy uploaded on Aaple Sarkar.",
            hi: "आपले सरकार पोर्टल पर रंगीन स्कैन अपलोड करें।",
            mr: "आपले सरकार पोर्टलवर रंगीत स्कॅन अपलोड करावी.",
          },
          selfAttestation: {
            en: "Self-attested.",
            hi: "स्व-हस्ताक्षरित।",
            mr: "स्वतःची स्वाक्षरी.",
          },
          digitalCopy: {
            en: "PDF under 2MB.",
            hi: "2MB से कम PDF।",
            mr: "२MB पेक्षा कमी PDF.",
          },
          fileFormat: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
        },
      },
      {
        id: "paternal-caste-evidence",
        name: "Father's / Paternal Relative's Caste Certificate & LC",
        shortDescription: "School Leaving Certificate, Caste Certificate, or Birth Register of father, brother, or paternal uncle.",
        explanation: "Establishes that the paternal bloodline officially holds this caste in Maharashtra.",
        purpose: "Crucial proof under Maharashtra lineage law.",
        examples: [
          "Father's School Leaving Certificate showing caste entry",
          "Real brother's or paternal uncle's Caste Certificate",
          "Paternal grandfather's school / death record",
        ],
        officialNotes: "Maternal relatives (mama, nana, mother) are strictly inadmissible for caste claim in Maharashtra.",
        formatAndPreparation: {
          submission: {
            en: "Color scanned copy uploaded to portal.",
            hi: "पोर्टल पर रंगीन स्कैन अपलोड करें।",
            mr: "पोर्टलवर रंगीत स्कॅन प्रत जोडावी.",
          },
          selfAttestation: {
            en: "Self-attested by applicant/father.",
            hi: "आवेदक या पिता द्वारा हस्ताक्षरित।",
            mr: "अर्जदार किंवा वडिलांची स्वाक्षरी.",
          },
          digitalCopy: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
          fileFormat: {
            en: "PDF under 2MB.",
            hi: "2MB से कम PDF।",
            mr: "२MB पेक्षा कमी PDF.",
          },
        },
      },
      {
        id: "deemed-date-1950-proof",
        name: "Pre-1950 Proof of Ancestor (for SC / ST)",
        shortDescription: "Document dated on or before 10 August 1950 showing paternal ancestor living in Maharashtra with caste recorded.",
        explanation: "Statutory deemed date requirement for Scheduled Castes and Scheduled Tribes.",
        purpose: "Confirms indigenous belongingness prior to Constitution (Scheduled Castes) Order, 1950.",
        examples: [
          "School admission / leaving register of grandfather before 10 Aug 1950",
          "Birth / Death register extract (Kotwal Panji / Village Form 14) from 1950 or prior",
          "Land revenue extract (Satbara / Ferfar) showing ancestor name prior to 1950",
        ],
        formatAndPreparation: {
          submission: {
            en: "Certified extract obtained from District Archives / Tehsildar Record Room.",
            hi: "जिला अभिलेखागार (Archives) या तहसील रिकॉर्ड रूम से प्राप्त प्रमाणित नकल।",
            mr: "जिल्हा अभिलेखागार किंवा तहसील रेकॉर्ड रूममधून घेतलेली अधिकृत प्रमाणित प्रत.",
          },
          selfAttestation: {
            en: "Certified by issuing officer.",
            hi: "संबंधित अधिकारी द्वारा प्रमाणित।",
            mr: "सक्षम अधिकाऱ्यांचा सही-शिक्या.",
          },
          digitalCopy: {
            en: "High-resolution PDF scan.",
            hi: "स्पष्ट PDF स्कैन।",
            mr: "स्पष्ट PDF स्कॅन.",
          },
          fileFormat: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
        },
      },
      {
        id: "deemed-date-1961-proof",
        name: "Pre-1961 Proof of Ancestor (for VJ / NT)",
        shortDescription: "Document dated on or before 21 November 1961 showing paternal ancestor in Maharashtra with caste recorded.",
        explanation: "Statutory deemed date for Vimukta Jati and Nomadic Tribes in Maharashtra.",
        purpose: "Proves residence and caste status on the cutoff date.",
        examples: [
          "Primary School General Register extract of father / grandfather before 21 Nov 1961",
          "Village Birth / Death Extract (Kotwal Register) before 1961",
        ],
        formatAndPreparation: {
          submission: {
            en: "Certified copy.",
            hi: "प्रमाणित नकल।",
            mr: "प्रमाणित प्रत.",
          },
          selfAttestation: {
            en: "Self-attested.",
            hi: "स्व-हस्ताक्षरित।",
            mr: "स्वाक्षरी केलेली.",
          },
          digitalCopy: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
          fileFormat: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
        },
      },
      {
        id: "deemed-date-1967-proof",
        name: "Pre-1967 Proof of Ancestor (for OBC / SBC)",
        shortDescription: "Document dated on or before 13 October 1967 showing paternal ancestor in Maharashtra with caste recorded.",
        explanation: "Statutory deemed date for Other Backward Classes (OBC) and Special Backward Classes (SBC).",
        purpose: "Proves paternal caste entry before the 1967 notification.",
        examples: [
          "School Leaving Certificate of father or uncle issued / enrolled before 13 Oct 1967",
          "Birth extract of father / aunt / uncle from municipal/panchayat register before 1967",
        ],
        formatAndPreparation: {
          submission: {
            en: "Certified copy of school GR or municipal birth extract.",
            hi: "स्कूल जीआर या नगर पालिका जन्म रजिस्टर की प्रमाणित नकल।",
            mr: "शाळा जीआर किंवा पालिका जन्म नोंदीची प्रमाणित प्रत.",
          },
          selfAttestation: {
            en: "Self-attested.",
            hi: "स्व-हस्ताक्षरित।",
            mr: "स्वाक्षरी केलेली.",
          },
          digitalCopy: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
          fileFormat: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
        },
      },
      {
        id: "genealogy-vanshavali",
        name: "Genealogical Family Tree Affidavit (Vanshavali)",
        shortDescription: "Affidavit detailing the paternal family tree linking applicant directly to the ancestor whose pre-deemed date record is submitted.",
        explanation: "Shows step-by-step bloodline connection: Great-Grandfather -> Grandfather -> Father -> Applicant.",
        purpose: "Ensures the pre-deemed date document legitimately belongs to the applicant's biological family.",
        examples: [
          "Affidavit on ₹100 Stamp Paper sworn before Notary / Executive Magistrate with complete family tree",
        ],
        formatAndPreparation: {
          submission: {
            en: "Original notarized affidavit uploaded as PDF.",
            hi: "मूल नोटरीकृत शपथ पत्र PDF में अपलोड करें।",
            mr: "मूळ नोटरी केलेले वंशावळीचे प्रतिज्ञापत्र PDF मध्ये अपलोड करावे.",
          },
          selfAttestation: {
            en: "Signed by applicant / father and notarized.",
            hi: "आवेदक या पिता के हस्ताक्षर और नोटरी मुहर।",
            mr: "अर्जदार किंवा वडिलांची स्वाक्षरी आणि नोटरी शिक्का.",
          },
          digitalCopy: {
            en: "PDF scan.",
            hi: "PDF स्कैन।",
            mr: "PDF स्कॅन.",
          },
          fileFormat: {
            en: "PDF under 2MB.",
            hi: "2MB से कम PDF।",
            mr: "२MB पेक्षा कमी PDF.",
          },
        },
      },
      {
        id: "photograph",
        name: "Applicant Photograph",
        shortDescription: "Recent colored passport photo.",
        explanation: "Printed on the digital certificate.",
        purpose: "Official identity matching.",
        examples: [
          "Recent photo with clear background (160x212 px, 5KB to 20KB JPEG)",
        ],
        formatAndPreparation: {
          submission: {
            en: "Uploaded on portal.",
            hi: "पोर्टल पर अपलोड।",
            mr: "पोर्टलवर अपलोड.",
          },
          selfAttestation: {
            en: "Not applicable.",
            hi: "लागू नहीं।",
            mr: "लागू नाही.",
          },
          digitalCopy: {
            en: "JPEG.",
            hi: "JPEG.",
            mr: "JPEG.",
          },
          fileFormat: {
            en: "JPEG (5KB - 20KB).",
            hi: "JPEG.",
            mr: "JPEG.",
          },
        },
      },
    ],
    steps: [
      {
        title: "Gather Paternal Pre-Deemed Date Documents",
        description: "Obtain certified extracts of father's or grandfather's school records, Kotwal register, or land records dating before the cutoff date (1950 / 1961 / 1967). Prepare the Vanshavali affidavit.",
        localized: {
          title: {
            en: "Gather Paternal Pre-Deemed Date Documents",
            hi: "पैतृक मानक तिथि के दस्तावेज़ और वंशावली तैयार करें",
            mr: "वडिलांकडील मानक दिनांकाचे पुरावे व वंशावळ तयार करा",
          },
          description: {
            en: "Retrieve certified copies of grandfather's or father's pre-deemed date school or birth extract from the Tehsil/Archives. Draft the Vanshavali (genealogy) affidavit.",
            hi: "तहसील या स्कूल से पिता/दादा के मानक वर्ष के पुराने प्रमाण पत्र निकालें और ₹100 के स्टाम्प पेपर पर वंशावली शपथ पत्र बनवाएं।",
            mr: "तहसील किंवा शाळेतून वडील/आजोबांचे जुने शाळा दाखले किंवा जन्म नोंदी काढा आणि १०० रुपयांच्या स्टॅम्पवर वंशावळीचे प्रतिज्ञापत्र तयार करा.",
          },
        },
      },
      {
        title: "Apply Online on Aaple Sarkar Portal",
        description: "Log in to aaplesarkar.mahaonline.gov.in, select Revenue Department or Social Justice Department, and choose 'Caste Certificate'. Fill applicant details and category.",
        localized: {
          title: {
            en: "Apply Online on Aaple Sarkar Portal",
            hi: "आपले सरकार पोर्टल पर ऑनलाइन आवेदन करें",
            mr: "आपले सरकार पोर्टलवर ऑनलाइन अर्ज भरा",
          },
          description: {
            en: "Select 'Caste Certificate' on Aaple Sarkar. Enter personal details, sub-caste name, and upload all paternal proofs and Vanshavali affidavit.",
            hi: "पोर्टल पर 'जाति प्रमाण पत्र' चुनें। अपनी उप-जाति का नाम भरें, पैतृक प्रमाण, वंशावली शपथ पत्र और फोटो अपलोड करें।",
            mr: "पोर्टलवर 'जातीचा दाखला' निवडा. स्वतःची पोटजात, माहिती भरा आणि वडिलांचे पुरावे, वंशावळ प्रतिज्ञापत्र व फोटो अपलोड करा.",
          },
        },
      },
      {
        title: "Pay RTS Statutory Fee & Scrutiny",
        description: "Pay the ₹33.60 online fee. The application is routed to the local Talathi and Circle Officer for field inquiry and genealogy verification.",
        localized: {
          title: {
            en: "Pay RTS Statutory Fee & Scrutiny",
            hi: "सरकारी शुल्क भरें और तलाठी जांच",
            mr: "शासकीय शुल्क भरा आणि तलाठी पडताळणी",
          },
          description: {
            en: "Pay ₹33.60 online fee. Circle Officer / Talathi conducts field verification to confirm family lineage and community status.",
            hi: "₹33.60 ऑनलाइन शुल्क का भुगतान करें। संबंधित सर्कल ऑफिसर या तलाठी पैतृक वंशावली और जाति की पुष्टि हेतु जांच करता है।",
            mr: "₹३३.६० ऑनलाइन फी भरा. मंडळ अधिकारी किंवा तलाठी वंशावळीची आणि स्थानिक चौकशी करून अहवाल सादर करतात.",
          },
        },
      },
      {
        title: "Sub-Divisional Officer (SDO) Approval & Download",
        description: "The Sub-Divisional Officer (SDO) / Deputy Collector reviews the report and approves the digital certificate. Download the barcode-verified certificate from the portal.",
        localized: {
          title: {
            en: "Sub-Divisional Officer (SDO) Approval & Download",
            hi: "एसडीओ (SDO) स्वीकृति और डिजिटल डाउनलोड",
            mr: "उपविभागीय अधिकारी (SDO) मंजुरी आणि डाऊनलोड",
          },
          description: {
            en: "Upon approval by the Sub-Divisional Officer within statutory 45 days, download your official Caste Certificate with digital signature and QR code.",
            hi: "45 दिनों की वैधानिक अवधि में उपविभागीय अधिकारी (SDO) द्वारा स्वीकृति मिलने पर पोर्टल से बारकोड और डिजिटल हस्ताक्षर वाला प्रमाण पत्र डाउनलोड करें।",
            mr: "४५ दिवसांच्या आत उपविभागीय अधिकाऱ्यांची (SDO) मंजुरी मिळाल्यावर पोर्टलवरून डिजिटल स्वाक्षरी असलेला अधिकृत जातीचा दाखला डाऊनलोड करा.",
          },
        },
      },
    ],
    fees: [
      {
        item: {
          en: "Online Application Fee on Aaple Sarkar (RTS)",
          hi: "आपले सरकार पोर्टल पर ऑनलाइन शुल्क",
          mr: "आपले सरकार पोर्टलवरील ऑनलाइन सेवा शुल्क",
        },
        amount: "₹33.60",
        verifiedSource: "Maharashtra Right to Public Services Commission",
      },
      {
        item: {
          en: "Assisted Application via Maha e-Seva Kendra / CSC",
          hi: "महा ई-सेवा केंद्र सहायता शुल्क",
          mr: "महा ई-सेवा केंद्र सेवा शुल्क",
        },
        amount: "₹50 to ₹100",
        verifiedSource: "District Collectorate Gazette",
      },
    ],
    timelines: {
      overall: {
        en: "45 working days statutory limit under Maharashtra Right to Public Services Act (RTS).",
        hi: "महाराष्ट्र लोकसेवा हक्क अधिनियम (RTS) के तहत 45 कार्य दिवस की वैधानिक समय-सीमा।",
        mr: "महाराष्ट्र लोकसेवा हक्क कायद्यानुसार ४५ कामकाजाचे दिवस.",
      },
      details: {
        en: "If the SDO does not decide the application within 45 days, you can file a First Appeal before the Additional Collector directly on Aaple Sarkar.",
        hi: "यदि 45 दिनों में निर्णय नहीं होता, तो आवेदक पोर्टल पर सीधे अपर जिलाधिकारी (Additional Collector) के समक्ष प्रथम अपील कर सकते हैं।",
        mr: "४५ दिवसांत निर्णय न झाल्यास नागरिकांना थेट अप्पर जिल्हाधिकाऱ्यांकडे प्रथम अपील करण्याचा अधिकार आहे.",
      },
    },
    commonMistakes: [
      {
        mistake: {
          en: "Submitting mother's or maternal relatives' documents to support caste claim.",
          hi: "माता या ननिहाल (मामा/नाना) के दस्तावेज़ लगाकर जाति प्रमाण पत्र के लिए आवेदन करना।",
          mr: "आईकडील किंवा आजोळचे (मामा/नाना) पुरावे जोडून जातीच्या दाखल्यासाठी अर्ज करणे.",
        },
        howToAvoid: {
          en: "Maharashtra law strictly bars maternal evidence for caste determination. You MUST provide documents strictly from father's paternal side.",
          hi: "महाराष्ट्र कानून के तहत ननिहाल का प्रमाण पत्र तुरंत खारिज कर दिया जाता है। केवल पिता के सगे भाइयों या दादा के दस्तावेज़ ही प्रस्तुत करें।",
          mr: "महाराष्ट्रात आईकडील पुरावे कायद्याने थेट बाद केले जातात. केवळ वडिलांच्या रक्ताच्या नातेवाईकांचेच पुरावे द्यावेत.",
        },
      },
      {
        mistake: {
          en: "Confusing Caste Certificate with Caste Validity Certificate.",
          hi: "जाति प्रमाण पत्र (Caste Certificate) और जाति वैधता प्रमाण पत्र (Caste Validity) को एक ही समझना।",
          mr: "जातीचा दाखला (Caste Certificate) आणि जात पडताळणी प्रमाणपत्र (Caste Validity) एकच समजणे.",
        },
        howToAvoid: {
          en: "A Caste Certificate only claims you belong to a caste. For professional admissions (CAP / Medical / Engineering) and scholarships, you must also obtain a separate Caste Validity Certificate (CVC) issued by the Divisional Scrutiny Committee.",
          hi: "जाति प्रमाण पत्र केवल आपकी जाति बताता है। इंजीनियरिंग/मेडिकल कॉलेज एडमिशन में सीट पक्की करने के लिए अलग से 'Caste Validity Certificate' लेना अनिवार्य है।",
          mr: "जातीचा दाखला फक्त जात दर्शवतो. इंजिनिअरिंग किंवा मेडिकल प्रवेशासाठी जात पडताळणी समितीकडून वेगळे 'जात पडताळणी प्रमाणपत्र' (Caste Validity) घेणे बंधनकारक असते.",
        },
      },
      {
        mistake: {
          en: "Not preparing a proper genealogical tree (Vanshavali) linking applicant to ancestor.",
          hi: "पुराने पूर्वज से अपना सीधा संबंध दर्शाने वाली स्पष्ट वंशावली न बनाना।",
          mr: "जुन्या पूर्वजांशी थेट नाते दाखवणारी सविस्तर वंशावळ न जोडणे.",
        },
        howToAvoid: {
          en: "Clearly draw the family tree on a stamp paper showing: [Ancestor name] -> [Grandfather] -> [Father] -> [Applicant], signed before a Notary.",
          hi: "स्टाम्प पेपर पर परदादा से लेकर अपना नाम तक स्पष्ट वंशावली चित्र बनाएं और नोटरी करवाएं।",
          mr: "स्टॅम्प पेपरवर पणजोबा, आजोबा, वडील आणि स्वतःचे नाव असलेली स्पष्ट वंशावळ तयार करून नोटरी करून जोडावी.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "Does a Caste Certificate issued in Maharashtra ever expire?",
          hi: "क्या महाराष्ट्र में जारी जाति प्रमाण पत्र कभी एक्सपायर होता है?",
          mr: "महाराष्ट्रात मिळालेला जातीचा दाखला कधी कालबाह्य (Expire) होतो का?",
        },
        answer: {
          en: "No. A Caste Certificate is a permanent lifetime document and never expires. (Note: Non-Creamy Layer Certificate for OBC/VJNT has an expiry date of 31st March, but the Caste Certificate itself is permanent).",
          hi: "नहीं। जाति प्रमाण पत्र जीवनभर मान्य रहता है और कभी समाप्त नहीं होता। (ध्यान दें: ओबीसी के लिए नॉन-क्रीमी लेयर प्रमाण पत्र की वैधता 1 या 3 साल होती है, परंतु जाति प्रमाण पत्र आजीवन वैध होता है)।",
          mr: "नाही. जातीचा दाखला हा आयुष्यभरासाठी असतो आणि तो कधीही एक्सपायर होत नाही. (टीप: नॉन-क्रिमिलेअर प्रमाणपत्राची मुदत ३१ मार्चला संपते, पण जातीचा दाखला कायम वैध असतो).",
        },
      },
      {
        question: {
          en: "Can a person with a Caste Certificate from another state transfer it to Maharashtra?",
          hi: "क्या दूसरे राज्य का जाति प्रमाण पत्र महाराष्ट्र में मान्य या ट्रांसफर हो सकता है?",
          mr: "दुसऱ्या राज्यातील जातीचा दाखला महाराष्ट्रात ट्रान्सफर करता येतो का?",
        },
        answer: {
          en: "No. Reservation benefits under State Quotas and Government Jobs are state-specific. If your ancestors were not residing in Maharashtra before the deemed cutoff date, you are treated as General / OMS in Maharashtra.",
          hi: "नहीं। राज्य कोटे के तहत आरक्षण राज्य-विशिष्ट होता है। यदि आपके पूर्वज मानक वर्ष से पूर्व महाराष्ट्र में नहीं रहते थे, तो महाराष्ट्र में आपको सामान्य श्रेणी (Open / OMS) माना जाएगा।",
          mr: "नाही. राज्य कोट्यातील आरक्षण त्या त्या राज्यापुरते मर्यादित असते. मानक दिनांकापूर्वी वास्तव्य नसल्यास महाराष्ट्रात खुल्या प्रवर्गात (Open) मानले जाते.",
        },
      },
      {
        question: {
          en: "What should I do if my father has no school certificate with caste entry?",
          hi: "यदि मेरे पिता के पास जाति लिखा हुआ कोई स्कूल प्रमाण पत्र न हो तो क्या करें?",
          mr: "माझ्या वडिलांकडे जात नोंद असलेला कोणताही शाळा दाखला नसल्यास काय करावे?",
        },
        answer: {
          en: "Apply to the Tehsil Record Room or District Archives for the ancestral Village Birth/Death Register extract (Kotwal Panji) or Land Revenue Records (Form 14 / Ferfar) of your grandfather or paternal grand-uncles.",
          hi: "तहसील रिकॉर्ड रूम या जिला अभिलेखागार से अपने दादा या परदादा का पुराना जन्म-मृत्यु रजिस्टर (कोटवाल पंजी) या जमीन का सरकारी रिकॉर्ड निकालें।",
          mr: "तहसील रेकॉर्ड रूममधून आजोबा किंवा पणजोबांची जुनी गाव जन्म नोंद (कोटवाल नोंदवही) किंवा जमिनीचे फेरफार उतारे काढून सादर करावेत.",
        },
      },
    ],
    officialSource: {
      name: "Aaple Sarkar, Government of Maharashtra",
      url: "https://aaplesarkar.mahaonline.gov.in/",
      more: [
        { name: "Social Justice and Special Assistance Department", url: "https://sjsa.maharashtra.gov.in/" },
        { name: "Tribal Development Department (for ST Certificates)", url: "https://tribal.maharashtra.gov.in/" },
        { name: "CCVIS Caste Certificate Verification System", url: "https://ccvis.maharashtra.gov.in/" },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // 5. LEAVING CERTIFICATE / TRANSFER CERTIFICATE
  // -------------------------------------------------------------------------
  {
    id: "leaving-certificate",
    slug: "leaving-certificate",
    title: "Leaving Certificate / Transfer Certificate",
    category: "Educational Records",
    description: "The primary academic certificate issued by an institution's Headmaster or Principal certifying a student's completion of study, General Register (GR) records, date of birth, religion, caste, and conduct.",
    localizedTitle: {
      en: "Leaving Certificate / Transfer Certificate (LC / TC)",
      hi: "शालांत / स्थानांतरण प्रमाण पत्र (Leaving / Transfer Certificate)",
      mr: "शाळा सोडल्याचा दाखला / ट्रान्सफर सर्टिफिकेट (LC / TC)",
    },
    localizedCategory: {
      en: "Educational Records",
      hi: "शैक्षणिक अभिलेख (Educational Records)",
      mr: "शैक्षणिक कागदपत्रे (Educational Records)",
    },
    localizedDescription: {
      en: "The primary academic certificate issued by an institution's Headmaster or Principal certifying a student's completion of study, General Register (GR) records, date of birth, religion, caste, and conduct.",
      hi: "स्कूल या कॉलेज के प्रधानाचार्य द्वारा जारी किया जाने वाला प्राथमिक शैक्षणिक प्रमाण पत्र, जो पढ़ाई पूरी करने या स्कूल छोड़ने, जनरल रजिस्टर (GR) विवरण, जन्मतिथि, धर्म, जाति और आचरण को प्रमाणित करता है।",
      mr: "शाळेचे मुख्याध्यापक किंवा प्राचार्य यांच्या स्वाक्षरीने दिला जाणारा मुख्य शैक्षणिक दाखला, जो शिक्षण पूर्ण केल्याची, जनरल रजिस्टर (GR) मधील जन्मतारीख, जात, धर्म आणि वर्तणुकीची अधिकृत नोंद प्रमाणित करतो.",
    },
    keywords: [
      "leaving certificate", "school leaving", "tc", "transfer certificate", "lc", "school lc", "gr number", "general register",
      "टीसी", "एलसी", "स्कूल लीविंग", "स्थानांतरण प्रमाण पत्र", "शालांत प्रमाण पत्र",
      "शाळा सोडल्याचा दाखला", "एलसी", "टीसी", "ट्रान्सफर सर्टिफिकेट", "दाखला"
    ],
    scopeNote: "Issued by recognized schools, junior colleges, and degree colleges under State Education Department regulations and Secondary School Code.",
    localizedScopeNote: {
      en: "Covers passing out of 10th / 12th, inter-school transfer, and issuance of duplicate LC in case of loss under Maharashtra Secondary School Code.",
      hi: "यह मार्गदर्शिका 10वीं/12वीं पास होने के बाद सामान्य दाखिला, स्कूल ट्रांसफर और मूल प्रति गुम होने पर डुप्लीकेट एलसी प्राप्त करने की प्रक्रिया समझाती है।",
      mr: "ही मार्गदर्शिका १०वी/१२वी उत्तीर्ण झाल्यानंतर मिळणारा नियमित दाखला, शाळा बदल आणि मूळ दाखला हरवल्यास डुप्लीकेट दाखला मिळवण्याची पद्धत स्पष्ट करते.",
    },
    examplesConfirmedOfficial: true,
    lastChecked: "2026-10-01",
    whoCanApply: {
      en: "Students completing schooling, withdrawing from school, or seeking higher secondary / college admission.",
      hi: "पढ़ाई पूरी करने वाले, अन्य स्कूल में ट्रांसफर लेने वाले छात्र, या उनके अभिभावक।",
      mr: "शिक्षण पूर्ण करणारे विद्यार्थी, शाळा बदलणारे किंवा पुढील कॉलेज प्रवेशासाठी दाखला मागणारे पालक/विद्यार्थी.",
    },
    eligibility: {
      en: [
        "Student must be lawfully enrolled in the school / college with a valid General Register (GR) number.",
        "All institutional fee dues, library books, and laboratory equipment must be cleared.",
        "Parents / guardians must submit a written application stating reason for leaving.",
      ],
      hi: [
        "छात्र स्कूल में पंजीकृत होना चाहिए और उसका जनरल रजिस्टर (GR) नंबर होना चाहिए।",
        "स्कूल के सभी बकाया शुल्क, लाइब्रेरी की किताबें और लैब का सामान जमा होना चाहिए।",
        "अभिभावक द्वारा स्कूल छोड़ने का कारण बताते हुए लिखित आवेदन प्रस्तुत करना होगा।",
      ],
      mr: [
        "विद्यार्थ्याची शाळेच्या जनरल रजिस्टरमध्ये (GR No.) अधिकृत नोंद असावी.",
        "शाळेची सर्व फी, वाचनालयाची पुस्तके आणि प्रयोगशाळेची थकबाकी भरलेली असावी.",
        "पालकांनी शाळा सोडण्याचे कारण नमूद करणारा लेखी अर्ज देणे आवश्यक आहे.",
      ],
    },
    situations: [
      {
        id: "passing-out-10th-12th",
        name: {
          en: "School Completion (Passing 10th SSC or 12th HSC)",
          hi: "शिक्षा पूर्ण (10वीं बोर्ड या 12वीं पास होने पर)",
          mr: "शिक्षण पूर्ण (१०वी किंवा १२वी उत्तीर्ण झाल्यानंतर)",
        },
        description: {
          en: "Standard LC issued upon passing board examinations for admission into Junior College (FYJC) or Degree College.",
          hi: "10वीं बोर्ड पास करके 11वीं (FYJC) में या 12वीं पास करके डिग्री कॉलेज में प्रवेश के लिए आवश्यक दाखिला।",
          mr: "१०वी उत्तीर्ण होऊन ११वीत (FYJC) किंवा १२वी उत्तीर्ण होऊन पदवी कॉलेजमध्ये प्रवेश घेण्यासाठी लागणारा मूळ दाखला.",
        },
        applicableDocIds: ["written-application", "clearance-nodues-slip", "board-hallticket-or-marksheet"],
        notes: {
          en: "Collect your original LC along with board marksheet and passing certificate. Always keep multiple attested photocopies and digital scans before submitting the original to the next college.",
          hi: "मार्कशीट के साथ मूल एलसी प्राप्त करें। अगले कॉलेज में जमा करने से पहले इसकी कई सत्यापित प्रतियां और रंगीन स्कैन संभालकर रखें।",
          mr: "गुणपत्रकासोबत मूळ दाखला घ्या. पुढील कॉलेजमध्ये जमा करण्यापूर्वी त्याच्या अनेक झेरॉक्स आणि स्कॅन कॉपी स्वतःकडे जपून ठेवा.",
        },
      },
      {
        id: "inter-school-transfer",
        name: {
          en: "Mid-Term Transfer / Relocation to Another School",
          hi: "बीच सत्र में ट्रांसफर / अन्य स्कूल या शहर में प्रवेश",
          mr: "शाळा बदल / दुसऱ्या शहरात किंवा शाळेत बदली",
        },
        description: {
          en: "Transfer Certificate (TC) required when moving to a different school or district due to parent relocation.",
          hi: "माता-पिता के तबादले या स्थान परिवर्तन के कारण दूसरे स्कूल में दाखिला लेने हेतु।",
          mr: "पालकांची बदली किंवा स्थलांतरामुळे दुसऱ्या शाळेत प्रवेश घेण्यासाठी लागणारा ट्रान्सफर सर्टिफिकेट.",
        },
        applicableDocIds: ["written-application", "clearance-nodues-slip", "parent-transfer-order"],
        notes: {
          en: "If transferring to a school in another state or changing education boards (e.g. State Board to CBSE), the LC must be countersigned by the Education Inspector (EI) / Block Education Officer (BEO).",
          hi: "यदि दूसरे राज्य या दूसरे बोर्ड (जैसे स्टेट बोर्ड से सीबीएसई) में जा रहे हैं, तो शिक्षा निरीक्षक (Education Inspector) के हस्ताक्षर (Countersignature) अनिवार्य हैं।",
          mr: "दुसऱ्या राज्यात किंवा दुसऱ्या बोर्डात (उदा. स्टेट बोर्ड ते CBSE) जाताना शिक्षण निरीक्षकांची (Education Inspector) स्वाक्षरी आवश्यक असते.",
        },
      },
      {
        id: "duplicate-lc-lost",
        name: {
          en: "Duplicate LC (Lost or Damaged Original)",
          hi: "डुप्लीकेट एलसी (मूल प्रमाण पत्र खोने या खराब होने पर)",
          mr: "डुप्लीकेट दाखला (मूळ दाखला हरवल्यास किंवा खराब झाल्यास)",
        },
        description: {
          en: "Applying for a certified second copy (Duplicate LC) from school archives when the original has been lost or destroyed.",
          hi: "मूल दाखिला गुम हो जाने पर स्कूल के पुराने रिकॉर्ड से डुप्लीकेट प्रति प्राप्त करना।",
          mr: "मूळ दाखला हरवल्यास शाळेच्या दप्तरावरून दुसरी अधिकृत प्रत (Duplicate LC) मिळवणे.",
        },
        applicableDocIds: ["written-application", "police-ncr-report", "notarized-loss-affidavit"],
        notes: {
          en: "Schools issue a Duplicate LC marked clearly with 'DUPLICATE'. It requires a police complaint (NCR) and a notarized affidavit explaining how the original was lost.",
          hi: "डुप्लीकेट एलसी पर स्पष्ट रूप से 'DUPLICATE' की मुहर होती है। इसके लिए पुलिस शिकायत (NCR) और नोटरीकृत शपथ पत्र अनिवार्य है।",
          mr: "डुप्लीकेट दाखल्यावर 'DUPLICATE' असा शिक्का असतो. यासाठी पोलीस तक्रार पावती (NCR) आणि नोटरी केलेले प्रतिज्ञापत्र आवश्यक असते.",
        },
      },
    ],
    documents: [
      {
        id: "written-application",
        name: "Application Letter to School Principal",
        shortDescription: "Formal letter signed by student and parent requesting issuance of Leaving Certificate.",
        explanation: "States the reason for leaving (e.g. higher education, relocation) and details student name, class, division, and General Register (GR) number.",
        purpose: "Initiates the official administrative withdrawal process in the school General Register.",
        examples: [
          "Written application on plain paper signed by parent/guardian stating student's roll number and admission year",
        ],
        formatAndPreparation: {
          submission: {
            en: "Submitted physically at school administrative office.",
            hi: "स्कूल कार्यालय में भौतिक रूप से जमा करें।",
            mr: "शाळेच्या कार्यालयात प्रत्यक्ष जमा करावा.",
          },
          selfAttestation: {
            en: "Signed by parent and student.",
            hi: "माता-पिता और छात्र के हस्ताक्षर।",
            mr: "पालक आणि विद्यार्थ्याची स्वाक्षरी.",
          },
          digitalCopy: {
            en: "Keep a photo copy of received application with school stamp as acknowledgement.",
            hi: "स्कूल की मुहर लगी पावती प्रति संभालकर रखें।",
            mr: "शाळेचा शिक्का असलेली पोचपावती स्वतःकडे ठेवावी.",
          },
          fileFormat: {
            en: "Physical signed letter.",
            hi: "हस्ताक्षरित पत्र।",
            mr: "स्वाक्षरी केलेले पत्र.",
          },
        },
      },
      {
        id: "clearance-nodues-slip",
        name: "School Clearance / No-Dues Certificate",
        shortDescription: "Internal slip signed by librarian, laboratory in-charge, and fee cashier confirming zero outstanding dues.",
        explanation: "Ensures the student has returned all library books, uniforms/sports gear, and cleared all fee arrears.",
        purpose: "Standard administrative clearance before school releases official records.",
        examples: [
          "Printed No-Dues Slip provided by school office with signatures of class teacher, librarian, and accounts office",
        ],
        formatAndPreparation: {
          submission: {
            en: "Submitted along with leaving application.",
            hi: "आवेदन पत्र के साथ संलग्न करें।",
            mr: "अर्जासोबत जोडून द्यावे.",
          },
          selfAttestation: {
            en: "Signed by school department heads.",
            hi: "संबंधित स्कूल विभागों के हस्ताक्षर।",
            mr: "संबंधित विभागप्रमुखांच्या स्वाक्षऱ्या.",
          },
          digitalCopy: {
            en: "Physical paper.",
            hi: "कागजी प्रति।",
            mr: "कागदी प्रत.",
          },
          fileFormat: {
            en: "Physical form.",
            hi: "फॉर्म।",
            mr: "फॉर्म.",
          },
        },
      },
      {
        id: "board-hallticket-or-marksheet",
        name: "Board Exam Marksheet / Hall Ticket Copy",
        shortDescription: "Copy of 10th SSC or 12th HSC marksheet or hall ticket confirming exam completion.",
        explanation: "Matches board exam seat number and passing credentials with school records.",
        purpose: "Ensures result remarks (Passed / Appeared) are correctly printed on the Leaving Certificate.",
        examples: [
          "Original board marksheet or internet result printout",
          "Board exam hall ticket with candidate seat number",
        ],
        formatAndPreparation: {
          submission: {
            en: "Photocopy submitted to administrative clerk.",
            hi: "फोटोकॉपी कार्यालय में जमा करें।",
            mr: "झेरॉक्स प्रत कार्यालयात जमा करावी.",
          },
          selfAttestation: {
            en: "Self-attested.",
            hi: "स्व-हस्ताक्षरित।",
            mr: "स्वाक्षरी केलेली.",
          },
          digitalCopy: {
            en: "Scanned copy or DigiLocker marksheet.",
            hi: "स्कैन प्रति या डिजिलॉकर मार्कशीट।",
            mr: "स्कॅन प्रत किंवा डिजिलॉकर गुणपत्रक.",
          },
          fileFormat: {
            en: "PDF or physical copy.",
            hi: "PDF या फोटोकॉपी।",
            mr: "PDF किंवा प्रत.",
          },
        },
      },
      {
        id: "police-ncr-report",
        name: "Police Complaint (NCR) for Lost Original LC",
        shortDescription: "Police Non-Cognizable Report (NCR) or missing document certificate.",
        explanation: "Required under Secondary School Code to document that the original certificate was genuinely lost and not fraudulently submitted elsewhere.",
        purpose: "Prevents illegal dual enrollment in multiple colleges.",
        examples: [
          "Police NCR certificate from local police station or online police lost report portal",
        ],
        formatAndPreparation: {
          submission: {
            en: "Original police NCR slip submitted with Duplicate LC application.",
            hi: "डुप्लीकेट एलसी आवेदन के साथ पुलिस रिपोर्ट की मूल प्रति लगाएं।",
            mr: "डुप्लीकेट दाखल्याच्या अर्जासोबत मूळ पोलीस तक्रार पावती जोडावी.",
          },
          selfAttestation: {
            en: "Signed and stamped by Police Sub-Inspector / Station In-charge.",
            hi: "पुलिस अधिकारी के हस्ताक्षर व मुहर।",
            mr: "पोलीस ठाण्याचा शिक्का व स्वाक्षरी.",
          },
          digitalCopy: {
            en: "PDF scan of police report.",
            hi: "पुलिस रिपोर्ट का स्कैन।",
            mr: "पोलीस अहवालाचे स्कॅन.",
          },
          fileFormat: {
            en: "Physical original or digital police portal PDF.",
            hi: "मूल प्रति या डिजिटल PDF।",
            mr: "मूळ प्रत किंवा डिजिटल PDF.",
          },
        },
      },
      {
        id: "notarized-loss-affidavit",
        name: "Notarized Affidavit for Duplicate LC",
        shortDescription: "Sworn affidavit on stamp paper explaining how the original LC was lost.",
        explanation: "Legal undertaking affirming that the original LC was misplaced, has not been used to take admission elsewhere, and will be surrendered if found.",
        purpose: "Legal safeguard against dual-admission fraud.",
        examples: [
          "Affidavit on ₹100 stamp paper attested by Notary Public",
        ],
        formatAndPreparation: {
          submission: {
            en: "Original stamped affidavit submitted to Principal.",
            hi: "मूल नोटरीकृत शपथ पत्र प्रधानाचार्य को सौंपें।",
            mr: "मूळ नोटरी केलेले प्रतिज्ञापत्र मुख्याध्यापकांना सादर करावे.",
          },
          selfAttestation: {
            en: "Signed by parent and student before Notary Public.",
            hi: "नोटरी के समक्ष छात्र और माता-पिता के हस्ताक्षर।",
            mr: "पालक आणि विद्यार्थ्याची नोटरीसमोर स्वाक्षरी.",
          },
          digitalCopy: {
            en: "PDF scan.",
            hi: "PDF स्कैन।",
            mr: "PDF स्कॅन.",
          },
          fileFormat: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
        },
      },
      {
        id: "parent-transfer-order",
        name: "Parent's Job Transfer Order / Proof of Relocation",
        shortDescription: "Official letter confirming parent's relocation to another city or state.",
        explanation: "Explains mid-session withdrawal from school.",
        purpose: "Provides valid justification for mid-year student transfer.",
        examples: [
          "Employer transfer order on company letterhead",
          "New residential rent agreement in destination city",
        ],
        formatAndPreparation: {
          submission: {
            en: "Photocopy submitted with application.",
            hi: "आवेदन के साथ फोटोकॉपी संलग्न करें।",
            mr: "अर्जासोबत प्रत जोडावी.",
          },
          selfAttestation: {
            en: "Signed by parent.",
            hi: "माता-पिता के हस्ताक्षर।",
            mr: "पालकांची स्वाक्षरी.",
          },
          digitalCopy: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
          fileFormat: {
            en: "PDF.",
            hi: "PDF.",
            mr: "PDF.",
          },
        },
      },
    ],
    steps: [
      {
        title: "Clear Dues & Obtain No-Dues Slip",
        description: "Visit school accounts, library, and science laboratory desks to clear any pending books, equipment, or fees and obtain their signatures on the clearance slip.",
        localized: {
          title: {
            en: "Clear Dues & Obtain No-Dues Slip",
            hi: "बकाया शुल्क व किताबें जमा कर क्लीयरेंस स्लिप लें",
            mr: "थकबाकी भरा आणि ना-हरकत (No-Dues) पावती मिळवा",
          },
          description: {
            en: "Settle all pending tuition fees and return library books to receive the signed clearance slip from the school office.",
            hi: "स्कूल की सभी बकाया फीस भरें, लाइब्रेरी की किताबें वापस करें और कार्यालय से नो-ड्यूज स्लिप प्राप्त करें।",
            mr: "शाळेची सर्व फी भरा, वाचनालयाची पुस्तके जमा करा आणि कार्यालयातून स्वाक्षरी केलेली नो-ड्यूज पावती मिळवा.",
          },
        },
      },
      {
        title: "Submit Written Application with General Register Details",
        description: "Submit your written application signed by parent stating student name, class, admission year, and General Register (GR) number to the administrative desk.",
        localized: {
          title: {
            en: "Submit Written Application with General Register Details",
            hi: "लिखित आवेदन और जीआर विवरण जमा करें",
            mr: "लेखी अर्ज आणि जीआर तपशील जमा करा",
          },
          description: {
            en: "Hand over the application letter to the school head clerk. The clerk cross-references entries with the school's permanent General Register (GR).",
            hi: "स्कूल लिपिक को आवेदन पत्र सौंपें। लिपिक स्कूल के स्थायी जनरल रजिस्टर (GR) से विवरण का मिलान करेगा।",
            mr: "शाळेच्या मुख्य लिपिकाकडे अर्ज जमा करा. लिपिक शाळेच्या मूळ जनरल रजिस्टरमधील (GR) नोंदी पडताळेल.",
          },
        },
      },
      {
        title: "Verification of Name, Caste, and Date of Birth Entries",
        description: "Carefully inspect the draft certificate before signing the register: verify exact spellings of student name, father name, mother name, caste entry, and date of birth in words and figures.",
        localized: {
          title: {
            en: "Verification of Name, Caste, and Date of Birth Entries",
            hi: "नाम, जाति और जन्मतिथि की प्रविष्टियों की जांच करें",
            mr: "नाव, जात आणि जन्मतारखेच्या नोंदी तपासा",
          },
          description: {
            en: "Thoroughly check student name, mother's name, caste, and date of birth on the draft LC before final signing. Once issued, corrections require a cumbersome gazette process.",
            hi: "दाखिला लेने से पहले ड्राफ्ट पर अपना नाम, माता का नाम, जाति और जन्मतिथि की स्पेलिंग ध्यान से जांच लें। एक बार जारी होने के बाद सुधार अत्यंत कठिन होता है।",
            mr: "दाखल्यावर स्वतःचे नाव, आईचे नाव, जात आणि जन्मतारीख अचूक असल्याची नीट खात्री करा. एकदा दाखला दिला की बदल करणे अतिशय किचकट असते.",
          },
        },
      },
      {
        title: "Principal Signature & Education Inspector Countersignature",
        description: "The Principal signs and seals the certificate. If transferring to another state or non-state board, submit to the District Education Inspector (EI) office for mandatory countersignature.",
        localized: {
          title: {
            en: "Principal Signature & Education Inspector Countersignature",
            hi: "प्रधानाचार्य के हस्ताक्षर व शिक्षा निरीक्षक का प्रतिहस्ताक्षर",
            mr: "मुख्याध्यापकांची स्वाक्षरी आणि शिक्षण निरीक्षकांचा शिक्का",
          },
          description: {
            en: "Collect your stamped LC signed by the Principal. If shifting boards or states, obtain countersignature from the local Education Inspector.",
            hi: "प्रधानाचार्य द्वारा हस्ताक्षरित मूल दाखिला प्राप्त करें। यदि दूसरे राज्य या बोर्ड में जा रहे हैं, तो जिला शिक्षा निरीक्षक से काउंटर-साइन करवाएं।",
            mr: "मुख्याध्यापकांची स्वाक्षरी असलेला मूळ दाखला घ्या. दुसऱ्या राज्यात किंवा बोर्डात जात असल्यास शिक्षण निरीक्षकांकडून (EI) प्रतिस्वाक्षरी घ्या.",
          },
        },
      },
    ],
    fees: [
      {
        item: {
          en: "Original Leaving Certificate upon Completion of Study",
          hi: "पढ़ाई पूरी करने पर मूल शालांत प्रमाण पत्र",
          mr: "शिक्षण पूर्ण झाल्यावर मूळ शाळा सोडल्याचा दाखला",
        },
        amount: "₹0 (Free / Nominal ₹20 to ₹50)",
        verifiedSource: "Maharashtra Secondary School Code",
      },
      {
        item: {
          en: "Duplicate Leaving Certificate (in case of loss)",
          hi: "डुप्लीकेट शालांत प्रमाण पत्र (मूल खो जाने पर)",
          mr: "डुप्लीकेट शाळा सोडल्याचा दाखला (मूळ हरवल्यास)",
        },
        amount: "₹50 to ₹200",
        verifiedSource: "School Management / Education Department Norms",
      },
    ],
    timelines: {
      overall: {
        en: "3 to 7 working days from application submission.",
        hi: "आवेदन जमा करने के 3 से 7 कार्य दिवस।",
        mr: "अर्ज सादर केल्यापासून ३ ते ७ कामकाजाचे दिवस.",
      },
      details: {
        en: "During peak board result season (May-June), schools process bulk LCs within 3 to 5 days. For old alumni records from archives, it may take up to 10 to 14 days.",
        hi: "बोर्ड रिजल्ट के समय (मई-जून) स्कूल 3 से 5 दिनों में एलसी जारी करते हैं। पुराने अभिलेखों में 10 से 14 दिन लग सकते हैं।",
        mr: "बोर्ड निकालाच्या काळात (मे-जून) ३ ते ५ दिवसांत दाखले दिले जातात. जुन्या नोंदी शोधण्यासाठी १० ते १४ दिवस लागू शकतात.",
      },
    },
    commonMistakes: [
      {
        mistake: {
          en: "Accepting the LC without verifying that student's name, mother's name, caste, and date of birth match 10th marksheet.",
          hi: "एलसी लेते समय यह जांच न करना कि नाम, माता का नाम, जाति और जन्मतिथि 10वीं की मार्कशीट से मेल खाती है या नहीं।",
          mr: "दाखला घेताना नाव, आईचे नाव, जात आणि जन्मतारीख १०वी च्या गुणपत्रकाशी जुळते की नाही हे न तपासणे.",
        },
        howToAvoid: {
          en: "Compare the draft LC letter-for-letter before taking delivery. Once a student leaves school, Secondary School Code strictly forbids the Headmaster from making alterations without a Magistrate order.",
          hi: "दाखिला हाथ में लेने से पहले एक-एक अक्षर का मिलान करें। स्कूल छोड़ने के बाद मुख्याध्यापक सीधे रजिस्टर में सुधार नहीं कर सकते।",
          mr: "दाखला स्वीकारण्यापूर्वी एका-एका अक्षराची पडताळणी करा. शाळा सोडल्यानंतर मुख्याध्यापकांना थेट दुरुस्ती करण्याचे अधिकार नसतात.",
        },
      },
      {
        mistake: {
          en: "Surrendering the only original Leaving Certificate to a college without keeping certified copies.",
          hi: "मूल एलसी की फोटोकॉपी या स्कैन रखे बिना उसे कॉलेज में सीधे जमा कर देना।",
          mr: "मूळ दाखल्याची कोणतीही प्रत न ठेवता थेट कॉलेजमध्ये मूळ प्रत जमा करून टाकणे.",
        },
        howToAvoid: {
          en: "Colleges permanently retain original school LCs upon admission. Always create at least 10 attested photocopies and high-resolution color scans before handing it over.",
          hi: "कॉलेज एडमिशन के समय मूल एलसी हमेशा के लिए जमा रख लेते हैं। जमा करने से पहले कम से कम 10 सत्यापित प्रतियां और रंगीन स्कैन जरूर सुरक्षित रख लें।",
          mr: "कॉलेज प्रवेशाच्या वेळी मूळ दाखला कायमचा जमा करून घेतात. त्यामुळे आधीच किमान १० साक्षांकित प्रती आणि रंगीत स्कॅन नक्की काढून ठेवा.",
        },
      },
      {
        mistake: {
          en: "Forgetting to get the Education Inspector countersignature when moving to an interstate school or ICSE/CBSE board.",
          hi: "दूसरे राज्य या बोर्ड में ट्रांसफर लेते समय शिक्षा निरीक्षक (Education Inspector) के प्रतिहस्ताक्षर करवाना भूल जाना।",
          mr: "दुसऱ्या राज्यात किंवा सीबीएसई बोर्डात जाताना शिक्षण निरीक्षकांची (EI) स्वाक्षरी घेण्यास विसरणे.",
        },
        howToAvoid: {
          en: "Interstate schools and national boards strictly require the LC to be endorsed by the Education Inspector of the district. Verify this requirement beforehand.",
          hi: "दूसरे राज्य के स्कूल बिना शिक्षा निरीक्षक के हस्ताक्षर के दाखिला नहीं देते। स्कूल से एलसी लेते ही शिक्षा विभाग से काउंटर-साइन अवश्य करवा लें।",
          mr: "दुसऱ्या राज्यातील शाळा शिक्षण निरीक्षकांच्या शिक्क्याशिवाय प्रवेश देत नाहीत. शाळा सोडतानाच हा शिक्का मारून घ्यावा.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "Does a college return my original school Leaving Certificate after admission?",
          hi: "क्या कॉलेज में एडमिशन लेने के बाद स्कूल का मूल एलसी वापस मिलता है?",
          mr: "कॉलेज प्रवेशानंतर शाळेचा मूळ दाखला परत मिळतो का?",
        },
        answer: {
          en: "No. Under university and board rules, the admitting college permanently cancels and retains your original school Leaving Certificate to prevent duplicate admissions across multiple colleges. When you eventually graduate or leave that college, they issue you a new College Transfer Certificate (TC).",
          hi: "नहीं। बोर्ड और विश्वविद्यालय के नियमों के अनुसार कॉलेज मूल स्कूल एलसी को स्थायी रूप से अपनी फाइल में जमा रख लेता है ताकि दोहरे प्रवेश रोके जा सकें। जब आप वह कॉलेज छोड़ेंगे तो वे अपना कॉलेज ट्रांसफर सर्टिफिकेट (TC) देंगे।",
          mr: "नाही. दुबार प्रवेश रोखण्यासाठी कॉलेज मूळ शाळा दाखला कायमचा जमा करून घेते. जेव्हा तुम्ही ते कॉलेज सोडाल, तेव्हा कॉलेज स्वतःचा नवीन कॉलेज ट्रान्सफर दाखला (TC) देते.",
        },
      },
      {
        question: {
          en: "What should I do if my caste is wrongly entered or omitted on my Leaving Certificate?",
          hi: "यदि मेरे एलसी में जाति गलत दर्ज हो गई हो या छूट गई हो तो क्या करें?",
          mr: "माझ्या शाळा सोडल्याच्या दाखल्यावर जात चुकीची नोंदली गेली असल्यास काय करावे?",
        },
        answer: {
          en: "If you have already left school, the Headmaster cannot change General Register entries directly. You must submit an application with primary school admission records to the Education Officer / Sub-Divisional Magistrate for an official correction order.",
          hi: "यदि आप स्कूल छोड़ चुके हैं, तो मुख्याध्यापक सीधे बदलाव नहीं कर सकते। आपको मूल प्राथमिक रिकॉर्ड के साथ शिक्षा अधिकारी या एसडीएम के समक्ष संशोधन आदेश के लिए आवेदन करना होगा।",
          mr: "शाळा सोडलेली असल्यास मुख्याध्यापक थेट बदल करू शकत नाहीत. यासाठी शिक्षणाधिकारी किंवा उपविभागीय दंडाधिकाऱ्यांकडे पुराव्यासह दुरुस्ती आदेशासाठी अर्ज करावा लागतो.",
        },
      },
      {
        question: {
          en: "What is the difference between a Leaving Certificate (LC), Transfer Certificate (TC), and Migration Certificate?",
          hi: "लीविंग सर्टिफिकेट (LC), ट्रांसफर सर्टिफिकेट (TC) और माइग्रेशन सर्टिफिकेट (Migration) में क्या अंतर है?",
          mr: "लीव्हिंग सर्टिफिकेट (LC), ट्रान्सफर सर्टिफिकेट (TC) आणि मायग्रेशन सर्टिफिकेट (Migration) यात काय फरक आहे?",
        },
        answer: {
          en: "A Leaving Certificate (LC) is issued by Maharashtra state board schools upon completing secondary education; a Transfer Certificate (TC) is issued by colleges or CBSE/ICSE schools when changing institutions; a Migration Certificate is issued by the Education Board or University when switching from one Board/University to another (e.g. from Maharashtra Board to an interstate university).",
          hi: "स्कूल स्तर पर पढ़ाई पूरी करने पर एलसी (LC) मिलता है; कॉलेज बदलने पर टीसी (TC) मिलता है; तथा एक बोर्ड या यूनिवर्सिटी छोड़कर दूसरी यूनिवर्सिटी में जाने पर माइग्रेशन सर्टिफिकेट (Migration Certificate) की आवश्यकता होती है।",
          mr: "शाळा सोडताना एलसी (LC) मिळतो; कॉलेज बदलताना टीसी (TC) दिला जातो; आणि एका विद्यापीठातून किंवा बोर्डातून दुसऱ्या विद्यापीठात जाताना मायग्रेशन सर्टिफिकेट (स्थलांतर प्रमाणपत्र) लागते.",
        },
      },
    ],
    officialSource: {
      name: "Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)",
      url: "https://mahahsscboard.in/",
      more: [
        { name: "Maharashtra School Education & Sports Department", url: "https://education.maharashtra.gov.in/" },
        { name: "Secondary School Code Regulations", url: "https://www.education.maharashtra.gov.in/school-code" },
      ],
    },
  },
];
