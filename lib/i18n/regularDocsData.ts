
// Mapping of doc translations by process slug and doc id
export const docTranslations: Record<
  string,
  Record<
    string,
    {
      name: { en: string; hi: string; mr: string };
      shortDescription: { en: string; hi: string; mr: string };
      explanation: { en: string; hi: string; mr: string };
      purpose?: { en: string; hi: string; mr: string };
      examples: { en: string[]; hi: string[]; mr: string[] };
    }
  >
> = {
  "aadhaar-card": {
    "identity-proof": {
      name: {
        en: "Proof of Identity (PoI)",
        hi: "पहचान प्रमाण (PoI)",
        mr: "ओळखीचा पुरावा (PoI)",
      },
      shortDescription: {
        en: "An official government-issued photo identity document bearing applicant's full name.",
        hi: "आवेदक के पूरे नाम और फोटो वाला आधिकारिक सरकारी पहचान दस्तावेज़।",
        mr: "अर्जदाराचे पूर्ण नाव आणि फोटो असलेले अधिकृत शासकीय ओळखपत्र.",
      },
      explanation: {
        en: "Confirms your legal identity. The document must display your photograph and full name clearly as per official UIDAI list of valid documents.",
        hi: "यह आपकी कानूनी पहचान की पुष्टि करता है। UIDAI के नियमों के अनुसार दस्तावेज़ पर आपका फोटो और पूरा नाम स्पष्ट होना चाहिए।",
        mr: "ही तुमची खरी ओळख सिद्ध करते. UIDAI नियमांनुसार कागदपत्रावर तुमचा फोटो आणि पूर्ण नाव स्पष्ट असणे आवश्यक आहे.",
      },
      purpose: {
        en: "Ensures no proxy or ghost enrolments occur in the national identity database.",
        hi: "राष्ट्रीय पहचान डेटाबेस में किसी भी फर्जी या दोहरे नामांकन को रोकने के लिए।",
        mr: "राष्ट्रीय ओळख डेटाबेसमध्ये बनावट किंवा चुकीची नोंदणी रोखण्यासाठी.",
      },
      examples: {
        en: [
          "Passport (Indian)",
          "PAN Card / e-PAN",
          "Voter Identity Card (EPIC)",
          "Driving Licence",
          "Ration Card / PDS Card bearing applicant photo",
          "Service Photo ID Card issued by Central / State Govt / PSU",
        ],
        hi: [
          "भारतीय पासपोर्ट",
          "पैन कार्ड / ई-पैन",
          "मतदाता पहचान पत्र (वोटर आईडी)",
          "ड्राइविंग लाइसेंस",
          "फोटो युक्त राशन कार्ड",
          "केंद्र/राज्य सरकार या पीएसयू द्वारा जारी सेवा पहचान पत्र",
        ],
        mr: [
          "भारतीय पासपोर्ट",
          "पॅन कार्ड / ई-पॅन",
          "मतदार ओळखपत्र (EPIC)",
          "वाहन चालक परवाना (ड्रायव्हिंग लायसन्स)",
          "फोटो असलेले रेशन कार्ड",
          "शासकीय ओळखपत्र",
        ],
      },
    },
    "address-proof": {
      name: {
        en: "Proof of Address (PoA)",
        hi: "पते का प्रमाण (PoA)",
        mr: "पत्त्याचा पुरावा (PoA)",
      },
      shortDescription: {
        en: "An official document proving your current residential address.",
        hi: "आपके वर्तमान आवासीय पते को प्रमाणित करने वाला आधिकारिक दस्तावेज़।",
        mr: "तुमच्या सध्याच्या रहिवासी पत्त्याचा अधिकृत पुरावा.",
      },
      explanation: {
        en: "Establishes where you reside. The Aadhaar letter will be dispatched by India Post to this exact physical address.",
        hi: "यह पुष्टि करता है कि आप कहाँ रहते हैं। आपका आधार पत्र डाक विभाग द्वारा इसी पते पर भेजा जाएगा।",
        mr: "तुम्ही कुठे राहता हे यावरून निश्चित होते. टपालाने पाठवले जाणारे आधार कार्ड याच पत्त्यावर येईल.",
      },
      purpose: {
        en: "To associate your biometric identity with your verified residential location.",
        hi: "आपकी बायोमेट्रिक पहचान को आपके सत्यापित निवास स्थान से जोड़ने के लिए।",
        mr: "तुमच्या बायोमेट्रिक ओळखीला सत्यापित रहिवासी पत्त्याशी जोडण्यासाठी.",
      },
      examples: {
        en: [
          "Electricity Bill (not older than 3 months)",
          "Water Bill (not older than 3 months)",
          "Bank Statement / Passbook with photo & branch stamp (not older than 3 months)",
          "Valid Registered Rent Agreement",
          "Voter ID Card",
          "Indian Passport",
        ],
        hi: [
          "बिजली का बिल (3 महीने से अधिक पुराना नहीं)",
          "पानी का बिल (3 महीने से अधिक पुराना नहीं)",
          "बैंक पासबुक/स्टेटमेंट फोटो और बैंक मुहर सहित (3 महीने के भीतर)",
          "पंजीकृत रेंट एग्रीमेंट",
          "मतदाता पहचान पत्र",
          "भारतीय पासपोर्ट",
        ],
        mr: [
          "लाईट बिल (३ महिन्यांपेक्षा जुने नसावे)",
          "पाणी बिल (३ महिन्यांपेक्षा जुने नसावे)",
          "बँक पासबुक / स्टेटमेंट (३ महिन्यांच्या आतील, शिक्क्यासह)",
          "नोंदणीकृत भाडेकरार",
          "मतदार ओळखपत्र",
          "भारतीय पासपोर्ट",
        ],
      },
    },
    "date-of-birth-proof": {
      name: {
        en: "Proof of Date of Birth (DoB)",
        hi: "जन्मतिथि का प्रमाण (DoB)",
        mr: "जन्मतारखेचा पुरावा (DoB)",
      },
      shortDescription: {
        en: "A document verifying your exact day, month, and year of birth.",
        hi: "आपके जन्म के सही दिन, महीने और वर्ष को प्रमाणित करने वाला दस्तावेज़।",
        mr: "तुमचा अचूक जन्म दिवस, महिना आणि वर्ष सिद्ध करणारे कागदपत्र.",
      },
      explanation: {
        en: "Ensures your birth date is officially recorded as 'Verified' rather than 'Declared' in UIDAI records.",
        hi: "यह सुनिश्चित करता है कि आधार रिकॉर्ड में आपकी जन्मतिथि 'घोषित' के बजाय 'सत्यापित' दर्ज हो।",
        mr: "आधार नोंदवहीत तुमची जन्मतारीख केवळ 'नोंदवलेली' न राहता 'पडताळलेली' म्हणून नोंदवली जाते.",
      },
      purpose: {
        en: "Prevents age-disputes in school admissions, competitive exams, and pension entitlements.",
        hi: "स्कूल प्रवेश, प्रतियोगी परीक्षाओं और पेंशन योजनाओं में उम्र संबंधी विवादों से बचने के लिए।",
        mr: "शाळा प्रवेश, स्पर्धा परीक्षा आणि शासकीय लाभांमध्ये वयाची अडचण येऊ नये म्हणून.",
      },
      examples: {
        en: [
          "Birth Certificate issued by Registrar of Births and Deaths / Municipal Corporation",
          "Passport (Indian)",
          "SSLC / 10th Standard Marksheet / School Leaving Certificate showing full DoB",
          "PAN Card",
        ],
        hi: [
          "नगर निगम या जन्म-मृत्यु रजिस्ट्रार द्वारा जारी जन्म प्रमाण पत्र",
          "भारतीय पासपोर्ट",
          "10वीं की अंकतालिका / स्कूल लीविंग सर्टिफिकेट जिसमें पूरी जन्मतिथि दर्ज हो",
          "पैन कार्ड",
        ],
        mr: [
          "महानगरपालिका किंवा निबंधकांनी दिलेला जन्म दाखला",
          "भारतीय पासपोर्ट",
          "१० वी गुणपत्रिका किंवा शाळा सोडल्याचा दाखला (पूर्ण जन्मतारीख असलेला)",
          "पॅन कार्ड",
        ],
      },
    },
    "child-birth-certificate": {
      name: {
        en: "Child's Birth Certificate (For Baal Aadhaar)",
        hi: "बच्चे का जन्म प्रमाण पत्र (बाल आधार हेतु)",
        mr: "बालकाचा जन्म दाखला (बाल आधारसाठी)",
      },
      shortDescription: {
        en: "Mandatory official civil registration certificate for enroling children below 5 years.",
        hi: "5 वर्ष से कम उम्र के बच्चों के बाल आधार नामांकन के लिए अनिवार्य नागरिक जन्म प्रमाण पत्र।",
        mr: "५ वर्षांखालील मुलांच्या बाल आधार नोंदणीसाठी बंधनकारक असलेला अधिकृत जन्म दाखला.",
      },
      explanation: {
        en: "For children under 5 years, biometrics (fingerprints and iris) are not captured. Baal Aadhaar is linked directly to parent's biometrics using child's birth certificate.",
        hi: "5 वर्ष से कम उम्र के बच्चों के बायोमेट्रिक्स नहीं लिए जाते। बाल आधार बच्चे के जन्म प्रमाण पत्र के आधार पर माता-पिता के बायोमेट्रिक्स से जोड़ा जाता है।",
        mr: "५ वर्षांखालील मुलांचे बायोमेट्रिक्स घेतले जात नाहीत. बाल आधार थेट पालकांच्या बायोमेट्रिक्सशी आणि जन्म दाखल्याशी जोडले जाते.",
      },
      purpose: {
        en: "Official identity establishment for infants and toddlers without biometric capture.",
        hi: "शिशुओं और छोटे बच्चों की बिना बायोमेट्रिक के आधिकारिक पहचान दर्ज करने के लिए।",
        mr: "लहान मुलांची बायोमेट्रिक्सविना अधिकृत ओळख प्रस्थापित करण्यासाठी.",
      },
      examples: {
        en: [
          "Civil Birth Certificate from Municipal Corporation / Gram Panchayat",
          "Discharge card / Birth slip from government hospital (temporary proof)",
        ],
        hi: [
          "नगर निगम / नगर पालिका या ग्राम पंचायत द्वारा जारी जन्म प्रमाण पत्र",
          "सरकारी अस्पताल का डिस्चार्ज कार्ड / जन्म पर्ची",
        ],
        mr: [
          "महानगरपालिका किंवा ग्रामपंचायतीचा अधिकृत जन्म दाखला",
          "शासकीय रुग्णालयाचे डिस्चार्ज कार्ड",
        ],
      },
    },
    "parent-aadhaar-proof": {
      name: {
        en: "Parent's Aadhaar & Biometric Consent",
        hi: "माता/पिता का आधार व बायोमेट्रिक सहमति",
        mr: "पालकांचे आधार व बायोमेट्रिक संमती",
      },
      shortDescription: {
        en: "Aadhaar card of either mother or father who authenticates in-person for minor's enrolment.",
        hi: "माता या पिता में से किसी एक का आधार कार्ड, जो नाबालिग के नामांकन के समय बायोमेट्रिक प्रमाणीकरण देते हैं।",
        mr: "अल्पवयीन मुलाच्या नोंदणीसाठी प्रत्यक्ष हजर राहून बायोमेट्रिक संमती देणाऱ्या पालकांचे आधार कार्ड.",
      },
      explanation: {
        en: "Minors under 18 cannot independently authenticate legal consent. One parent must be physically present with their active Aadhaar to give biometric consent.",
        hi: "18 वर्ष से कम उम्र के नाबालिग स्वयं कानूनी सहमति नहीं दे सकते। माता या पिता में से किसी एक को अपने आधार के साथ उपस्थित होना अनिवार्य है।",
        mr: "१८ वर्षांखालील मुलांच्या वतीने पालकांची उपस्थिती आणि आधार बायोमेट्रिक पडताळणी आवश्यक असते.",
      },
      purpose: {
        en: "Links child's enrolment to verified biological or legal parent.",
        hi: "बच्चे के नामांकन को उसके वास्तविक माता-पिता या कानूनी अभिभावक से जोड़ने के लिए।",
        mr: "मुलाच्या नोंदीला पालकांच्या कायदेशीर ओळखीशी जोडण्यासाठी.",
      },
      examples: {
        en: [
          "Mother's Aadhaar Card (physical card or mAadhaar digital verification)",
          "Father's Aadhaar Card",
          "Legal Guardian's Aadhaar Card with court guardianship decree",
        ],
        hi: [
          "माता का आधार कार्ड",
          "पिता का आधार कार्ड",
          "कानूनी अभिभावक का आधार कार्ड और न्यायालय आदेश",
        ],
        mr: [
          "आईचे आधार कार्ड",
          "वडिलांचे आधार कार्ड",
          "कायदेशीर पालकांचे आधार कार्ड व न्यायालयाचा आदेश",
        ],
      },
    },
    "existing-aadhaar-copy": {
      name: {
        en: "Existing Aadhaar Letter / Card / Number",
        hi: "मौजूदा आधार पत्र / कार्ड / 12-अंकीय नंबर",
        mr: "सध्याचे आधार पत्र / कार्ड / १२-अंकी क्रमांक",
      },
      shortDescription: {
        en: "Your 12-digit Aadhaar number or printout of existing e-Aadhaar when applying for updates.",
        hi: "आधार में सुधार या अपडेट करवाते समय आपका 12 अंकों का आधार नंबर या मौजूदा ई-आधार कॉपी।",
        mr: "माहिती दुरुस्त करताना आवश्यक असणारा १२-अंकी आधार क्रमांक किंवा ई-आधार प्रत.",
      },
      explanation: {
        en: "When updating phone, address, or biometrics, you must present your existing Aadhaar number to verify and fetch the existing central record.",
        hi: "मोबाइल नंबर, पता या बायोमेट्रिक्स अपडेट करते समय पुराने रिकॉर्ड को खोजने और सत्यापित करने के लिए इसकी आवश्यकता होती है।",
        mr: "मोबाईल नंबर, पत्ता किंवा बायोमेट्रिक्स दुरुस्त करताना मूळ माहिती शोधण्यासाठी आवश्यक.",
      },
      purpose: {
        en: "Locates your unique 12-digit record in CIDR to apply modifications.",
        hi: "सीआईडीआर (CIDR) में आपके रिकॉर्ड को ढूंढकर बदलाव दर्ज करने के लिए।",
        mr: "डेटाबेसमधील जुनी नोंद शोधून त्यात आवश्यक दुरुस्ती करण्यासाठी.",
      },
      examples: {
        en: [
          "Physical Aadhaar PVC Card",
          "Original Aadhaar letter dispatched by post",
          "Downloaded password-protected e-Aadhaar PDF",
          "12-digit Aadhaar number with active mobile for OTP",
        ],
        hi: [
          "आधार पीवीसी कार्ड (PVC Card)",
          "डाक से आया मूल आधार पत्र",
          "डाउनलोड किया गया ई-आधार (e-Aadhaar PDF)",
          "12 अंकों का आधार नंबर (ओटीपी हेतु मोबाइल सहित)",
        ],
        mr: [
          "आधार पीव्हीसी कार्ड",
          "टपालाने आलेले मूळ आधार पत्र",
          "डाऊनलोड केलेले ई-आधार",
          "ओटीपीसाठी चालू मोबाईलसह १२-अंकी आधार क्रमांक",
        ],
      },
    },
    "school-id-or-birth": {
      name: {
        en: "School ID / Birth Certificate (for 5/15 Mandatory Update)",
        hi: "स्कूल पहचान पत्र / जन्म प्रमाण पत्र (अनिवार्य बायोमेट्रिक अपडेट हेतु)",
        mr: "शाळा ओळखपत्र / जन्म दाखला (५ व १५ वर्षांच्या अनिवार्य अपडेटसाठी)",
      },
      shortDescription: {
        en: "Supporting student proof when updating mandatory biometrics at age 5 or age 15.",
        hi: "5 वर्ष या 15 वर्ष की आयु पूर्ण होने पर अनिवार्य बायोमेट्रिक अपडेट के लिए छात्र का सहायक प्रमाण।",
        mr: "वयाच्या ५ व्या व १५ व्या वर्षी अनिवार्य बायोमेट्रिक अपडेटसाठी लागणारा शाळेचा किंवा जन्माचा पुरावा.",
      },
      explanation: {
        en: "UIDAI mandates updating photo, ten fingerprints, and both iris scans free of cost when a child turns 5 and 15 years old.",
        hi: "UIDAI के नियमानुसार बच्चे के 5 वर्ष और 15 वर्ष का होने पर फोटो, दसों उंगलियों और पुतलियों का बायोमेट्रिक अपडेट निःशुल्क कराना अनिवार्य है।",
        mr: "मुलाचे वय ५ आणि १५ वर्षे पूर्ण झाल्यावर फोटो, १० बोटांचे ठसे आणि डोळ्यांचे स्कॅन मोफत अपडेट करणे बंधनकारक आहे.",
      },
      purpose: {
        en: "Transitions child's facial and fingerprint geometry into fully adult biometric data.",
        hi: "बच्चे के बचपन के बायोमेट्रिक्स को वयस्क बायोमेट्रिक्स में बदलने के लिए।",
        mr: "मुलांच्या बदलत्या शरीराचे अद्ययावत बायोमेट्रिक्स प्रणालीमध्ये नोंदवण्यासाठी.",
      },
      examples: {
        en: [
          "School Identity Card with photo issued by recognized school",
          "Birth Certificate of child",
          "School Bonafide Certificate with photo & principal sign",
        ],
        hi: [
          "मान्यता प्राप्त स्कूल का फोटो पहचान पत्र",
          "बच्चे का जन्म प्रमाण पत्र",
          "स्कूल का बोनाफाइड सर्टिफिकेट (प्रधानाचार्य के हस्ताक्षर सहित)",
        ],
        mr: [
          "शाळेचे अधिकृत फोटो ओळखपत्र",
          "जन्म दाखला",
          "मुख्याध्यापकांच्या स्वाक्षरीचा बोनाफाईड दाखला",
        ],
      },
    },
  },
  "birth-certificate": {
    "hospital-discharge-slip": {
      name: {
        en: "Hospital Birth Report / Discharge Summary",
        hi: "अस्पताल की जन्म रिपोर्ट / डिस्चार्ज समरी",
        mr: "रुग्णालयाचा जन्म अहवाल / डिस्चार्ज समरी",
      },
      shortDescription: {
        en: "Medical proof issued by hospital/maternity clinic confirming live birth, date, time, and parents.",
        hi: "अस्पताल द्वारा जारी मेडिकल पर्ची जिसमें जन्म की तारीख, समय, वजन और माता-पिता का नाम दर्ज होता है।",
        mr: "रुग्णालयाने दिलेला जन्माचा अधिकृत अहवाल ज्यात तारीख, वेळ आणि पालकांची नावे असतात.",
      },
      explanation: {
        en: "Primary clinical record of birth. Government and private hospitals submit Form 1 (Birth Report) directly to the local Municipal Registrar within 21 days.",
        hi: "जन्म का प्राथमिक चिकित्सा प्रमाण। अस्पताल 21 दिनों के भीतर फॉर्म 1 नगर निगम रजिस्ट्रार को सीधे भेजते हैं।",
        mr: "जन्माचा प्राथमिक वैद्यकीय पुरावा. रुग्णालये २१ दिवसांच्या आत हा अहवाल निबंधकांकडे पाठवतात.",
      },
      purpose: {
        en: "Authenticates institutional birth facts before civil registration entry.",
        hi: "नागरिक पंजीकरण रजिस्टर में दर्ज करने से पहले जन्म के तथ्यों की पुष्टि के लिए।",
        mr: "नोंदवहीत जन्माची अधिकृत नोंद करण्यापूर्वी तथ्यांची खात्री करण्यासाठी.",
      },
      examples: {
        en: [
          "Hospital Discharge Card / Maternity Summary",
          "Form 1 (Birth Report) copy given by hospital to parents",
          "Vaccination card / Immunization record from government maternity centre",
        ],
        hi: [
          "अस्पताल डिस्चार्ज कार्ड / प्रसूति समरी",
          "अस्पताल द्वारा दी गई फॉर्म 1 (बर्थ रिपोर्ट) की प्रति",
          "सरकारी प्रसूति केंद्र का टीकाकरण कार्ड",
        ],
        mr: [
          "रुग्णालय डिस्चार्ज कार्ड / प्रसूती अहवाल",
          "रुग्णालयाने दिलेली फॉर्म १ ची प्रत",
          "शासकीय लसीकरण कार्ड",
        ],
      },
    },
    "parents-identity-proof": {
      name: {
        en: "Parents' Identity & Address Proofs",
        hi: "माता-पिता के पहचान व पते का प्रमाण",
        mr: "पालकांच्या ओळखीचा व पत्त्याचा पुरावा",
      },
      shortDescription: {
        en: "Aadhaar, Voter ID, or Passports of both mother and father.",
        hi: "माता और पिता दोनों के आधार कार्ड, वोटर आईडी या पासपोर्ट।",
        mr: "आई आणि वडील दोघांचे आधार कार्ड, मतदार ओळखपत्र किंवा पासपोर्ट.",
      },
      explanation: {
        en: "Verifies the accurate spelling of parents' names and permanent address to be printed on child's birth certificate.",
        hi: "जन्म प्रमाण पत्र पर छपने वाले माता-पिता के नाम और स्थायी पते की सही स्पेलिंग सुनिश्चित करता है।",
        mr: "जन्म दाखल्यावर छापल्या जाणाऱ्या पालकांच्या नावाचे अचूक स्पेलिंग आणि पत्ता तपासण्यासाठी.",
      },
      purpose: {
        en: "Ensures legal parentage and correct child-parent lineage records in civil registry.",
        hi: "नागरिक रजिस्टर में बच्चे के माता-पिता की कानूनी जानकारी सही दर्ज करने के लिए।",
        mr: "नोंदवहीत पालकांची अचूक माहिती नोंदवण्यासाठी.",
      },
      examples: {
        en: [
          "Mother's Aadhaar Card & Father's Aadhaar Card",
          "Voter ID Cards of both parents",
          "Indian Passports of parents",
        ],
        hi: [
          "माता और पिता दोनों का आधार कार्ड",
          "माता-पिता के वोटर पहचान पत्र",
          "माता-पिता के भारतीय पासपोर्ट",
        ],
        mr: [
          "आई आणि वडील दोघांचे आधार कार्ड",
          "दोघांचे मतदार ओळखपत्र",
          "पालकांचे पासपोर्ट",
        ],
      },
    },
    "parents-marriage-proof": {
      name: {
        en: "Parents' Marriage Certificate / Joint Declaration",
        hi: "माता-पिता का विवाह प्रमाण पत्र / संयुक्त घोषणापत्र",
        mr: "पालकांचा विवाह दाखला / संयुक्त हमीपत्र",
      },
      shortDescription: {
        en: "Official marriage registration certificate or joint signed declaration by parents.",
        hi: "विवाह पंजीकरण प्रमाण पत्र या माता-पिता द्वारा संयुक्त रूप से हस्ताक्षरित स्व-घोषणा।",
        mr: "अधिकृत विवाह नोंदणी दाखला किंवा पालकांनी दिलेले स्वाक्षरीसह संयुक्त हमीपत्र.",
      },
      explanation: {
        en: "Required when there is a difference in mother's maiden surname, or to confirm marital parentage for institutional birth records.",
        hi: "विवाह पूर्व और विवाह पश्चात के उपनाम में अंतर होने पर या कानूनी पुष्टि के लिए आवश्यक।",
        mr: "लग्नानंतर आईच्या आडनावात बदल झाला असल्यास किंवा कायदेशीर खात्रीसाठी आवश्यक.",
      },
      purpose: {
        en: "Resolves surname discrepancies between mother's hospital records and father's documentation.",
        hi: "अस्पताल के रिकॉर्ड और पिता के दस्तावेज़ों में उपनाम के अंतर को स्पष्ट करने के लिए।",
        mr: "कागदपत्रांमधील आडनावाचा फरक दूर करण्यासाठी.",
      },
      examples: {
        en: [
          "Marriage Registration Certificate issued by Registrar of Marriages",
          "Joint declaration on plain paper signed by both parents",
          "Passport showing spouse name",
        ],
        hi: [
          "विवाह रजिस्ट्रार द्वारा जारी विवाह प्रमाण पत्र",
          "दोनों माता-पिता द्वारा हस्ताक्षरित संयुक्त घोषणापत्र",
          "पति/पत्नी के नाम वाला पासपोर्ट",
        ],
        mr: [
          "विवाह नोंदणी दाखला",
          "पालकांनी दिलेले संयुक्त घोषणापत्र",
          "जोडीदाराचे नाव असलेला पासपोर्ट",
        ],
      },
    },
    "affidavit-delayed-birth": {
      name: {
        en: "Affidavit for Delayed Registration & SDM Order",
        hi: "विलंबित जन्म पंजीकरण शपथ पत्र व एसडीएम आदेश",
        mr: "उशिरा जन्म नोंदणीचे प्रतिज्ञापत्र व प्रांताधिकारी आदेश",
      },
      shortDescription: {
        en: "Mandatory magistrate order and notarized affidavit if registering after 1 year of birth.",
        hi: "जन्म के 1 वर्ष बाद पंजीकरण कराने पर आवश्यक नोटरीकृत शपथ पत्र और एसडीएम/कार्यकारी मजिस्ट्रेट का आदेश।",
        mr: "जन्मानंतर १ वर्षाने नोंदणी करताना लागणारे नोटरी प्रतिज्ञापत्र आणि प्रांताधिकारी (SDM) आदेश.",
      },
      explanation: {
        en: "Under Section 13(3) of Registration of Births and Deaths Act, registrations delayed beyond 1 year strictly require an order from a Sub-Divisional Magistrate (SDM) after police inquiry.",
        hi: "जन्म और मृत्यु पंजीकरण अधिनियम की धारा 13(3) के तहत 1 वर्ष के बाद पंजीकरण केवल एसडीएम या प्रथम श्रेणी मजिस्ट्रेट के आदेश से ही हो सकता है।",
        mr: "जन्म व मृत्यू नोंदणी कायद्यानुसार १ वर्षापेक्षा उशीर झाल्यास प्रांताधिकाऱ्यांच्या चौकशीनंतरच आदेश मिळतो.",
      },
      purpose: {
        en: "Prevents fraudulent creation of fake citizen identities and backdated birth records.",
        hi: "फर्जी पहचान या पिछली तारीख से अवैध जन्म प्रमाण पत्र बनवाने से रोकने के लिए।",
        mr: "बनावट जन्म दाखले तयार होण्याला आळा घालण्यासाठी.",
      },
      examples: {
        en: [
          "Notarized delayed registration affidavit on ₹100 stamp paper",
          "Sub-Divisional Magistrate (SDM) / Executive Magistrate permission order",
          "Local corporator / Tehsildar verification report",
        ],
        hi: [
          "₹100 के स्टाम्प पेपर पर नोटरीकृत शपथ पत्र",
          "एसडीएम / कार्यकारी मजिस्ट्रेट द्वारा जारी अनुमति आदेश",
          "तहसीलदार या स्थानीय पार्षद की सत्यापन रिपोर्ट",
        ],
        mr: [
          "१०० रुपयांच्या स्टॅम्प पेपरवर नोटरी केलेले प्रतिज्ञापत्र",
          "उपविभागीय अधिकारी (SDM) किंवा दंडाधिकारी यांचा आदेश",
          "तहसीलदार पडताळणी अहवाल",
        ],
      },
    },
    "non-availability-certificate": {
      name: {
        en: "Non-Availability Certificate (Form 10)",
        hi: "अनुपलब्धता प्रमाण पत्र (फॉर्म 10 / NABC)",
        mr: "नोंद उपलब्ध नसल्याचा दाखला (फॉर्म १० / NABC)",
      },
      shortDescription: {
        en: "Official municipal search certificate stating that no birth record exists in the birth register.",
        hi: "नगर पालिका द्वारा जारी प्रमाण पत्र जिसमें लिखा होता है कि रजिस्टर में जन्म का कोई रिकॉर्ड नहीं मिला।",
        mr: "नोंदवहीत जन्माची कोणतीही नोंद सापडली नसल्याचे महापालिकेने दिलेले अधिकृत प्रमाणपत्र.",
      },
      explanation: {
        en: "Before applying to the SDM for delayed birth registration, you must obtain Form 10 proving that the birth was never previously registered.",
        hi: "एसडीएम के पास आवेदन करने से पहले यह साबित करना होता है कि संबंधित वर्ष के रजिस्टर में जन्म पहले से दर्ज नहीं है।",
        mr: "प्रांताधिकाऱ्यांकडे अर्ज करण्यापूर्वी जन्माची जुनी नोंद झालेली नाही हे सिद्ध करण्यासाठी हे लागते.",
      },
      purpose: {
        en: "Establishes institutional absence of record prior to magistrate intervention.",
        hi: "अदालत या मजिस्ट्रेट के समक्ष यह प्रमाणित करने के लिए कि कोई पूर्व रिकॉर्ड मौजूद नहीं है।",
        mr: "नोंद उपलब्ध नसल्याचे अधिकृतरीत्या सिद्ध करण्यासाठी.",
      },
      examples: {
        en: [
          "Form 10 issued by Municipal Health Department / Gram Sevak",
          "Official Municipal Corporation search receipt stating 'Record Not Found'",
        ],
        hi: [
          "नगर निगम स्वास्थ्य विभाग / ग्राम सेवक द्वारा जारी फॉर्म 10",
          "नगर पालिका की अधिकृत सर्च रिपोर्ट ('रिकॉर्ड नहीं मिला')",
        ],
        mr: [
          "आरोग्य विभाग / ग्रामसेवकांनी दिलेला फॉर्म १०",
          "महापालिकेचा 'नोंद उपलब्ध नाही' असा शोध अहवाल",
        ],
      },
    },
    "unnamed-birth-certificate": {
      name: {
        en: "Original Unnamed Birth Certificate",
        hi: "मूल बिना नाम वाला जन्म प्रमाण पत्र",
        mr: "मूळ नाव नसलेला जन्म दाखला",
      },
      shortDescription: {
        en: "The original certificate issued at birth before child was officially named.",
        hi: "जन्म के समय जारी मूल प्रमाण पत्र जिसमें बच्चे का नाम दर्ज नहीं किया गया था।",
        mr: "बाळाचे नाव ठेवण्यापूर्वी सुरुवातीला दिलेला मूळ जन्म दाखला.",
      },
      explanation: {
        en: "Under Indian birth registration rules, hospital reports often register the birth without a child's name. Parents have up to 15 years to add the official name.",
        hi: "अस्पताल में जन्म के समय अक्सर केवल 'बेबी ऑफ...' दर्ज होता है। माता-पिता को 15 वर्ष के भीतर बच्चे का नाम जोड़ने की अनुमति होती है।",
        mr: "जन्माच्या वेळी अनेकदा बाळाचे नाव नसते. पालकांना १५ वर्षांच्या आत नाव समाविष्ट करता येते.",
      },
      purpose: {
        en: "Required for name-addition (Naam Nondani) process at the municipal office.",
        hi: "नगर निगम कार्यालय में जन्म प्रमाण पत्र में नाम जुड़वाने (नाम नोंदणी) के लिए।",
        mr: "जन्म दाखल्यावर नाव समाविष्ट करण्यासाठी आवश्यक कागदपत्र.",
      },
      examples: {
        en: [
          "Original Municipal Birth Certificate with blank name field",
          "Certified true extract of Birth Register entry",
        ],
        hi: [
          "नगर निगम का मूल जन्म प्रमाण पत्र (जिसमें नाम खाली हो)",
          "जन्म रजिस्टर की प्रमाणित प्रति",
        ],
        mr: [
          "नावाचा रकाना रिकामा असलेला मूळ जन्म दाखला",
          "जन्म नोंदवहीतील प्रमाणित उतारा",
        ],
      },
    },
    "school-id-or-bonafide": {
      name: {
        en: "School Bonafide Certificate / ID of Child",
        hi: "स्कूल बोनाफाइड सर्टिफिकेट / छात्र पहचान पत्र",
        mr: "शाळेचा बोनाफाईड दाखला / ओळखपत्र",
      },
      shortDescription: {
        en: "School record showing child's full name, parents' names, and date of birth for name addition.",
        hi: "स्कूल का रिकॉर्ड जिसमें बच्चे का पूरा नाम, माता-पिता का नाम और जन्मतिथि दर्ज हो।",
        mr: "विद्यार्थ्याचे पूर्ण नाव, पालकांची नावे आणि जन्मतारीख असलेला शाळेचा दाखला.",
      },
      explanation: {
        en: "When adding a child's name to an unnamed birth certificate, municipal authorities cross-verify the requested name with the child's school admission register.",
        hi: "जन्म प्रमाण पत्र में नाम जोड़ते समय नगर निगम अधिकारी स्कूल के जनरल रजिस्टर से नाम का मिलान करते हैं।",
        mr: "दाखल्यावर नाव समाविष्ट करताना शाळेच्या नोंदवहीशी नावाचे स्पेलिंग जुळवले जाते.",
      },
      purpose: {
        en: "Prevents discrepancies between school educational records and civil birth registry.",
        hi: "स्कूल के कागज़ात और जन्म प्रमाण पत्र के बीच नाम के अंतर को रोकने के लिए।",
        mr: "शालेय रेकॉर्ड आणि जन्म दाखल्यामधील नावाची तफावत टाळण्यासाठी.",
      },
      examples: {
        en: [
          "Bonafide certificate issued by school principal with photo & birth date",
          "School Identity Card",
          "Progress report / Marksheet showing student name and birth date",
        ],
        hi: [
          "प्रधानाचार्य द्वारा हस्ताक्षरित फोटो युक्त बोनाफाइड प्रमाण पत्र",
          "स्कूल पहचान पत्र",
          "अंकतालिका या प्रगति पत्रक जिसमें जन्मतिथि दर्ज हो",
        ],
        mr: [
          "मुख्याध्यापकांचा स्वाक्षरी असलेला बोनाफाईड दाखला",
          "शाळेचे ओळखपत्र",
          "जन्मतारीख असलेली गुणपत्रिका",
        ],
      },
    },
  },
  "domicile-certificate": {
    "residence-chain-proof": {
      name: {
        en: "Proof of 15 Years Continuous Residence",
        hi: "15 वर्षों के निरंतर निवास का प्रमाण",
        mr: "१५ वर्षांच्या सलग वास्तव्याचा पुरावा",
      },
      shortDescription: {
        en: "Documentary chain proving applicant or family resided in Maharashtra for past 15 consecutive years.",
        hi: "यह सिद्ध करने वाले दस्तावेज़ कि आवेदक या उसका परिवार पिछले 15 वर्षों से महाराष्ट्र में रह रहा है।",
        mr: "अर्जदार किंवा कुटुंब मागील १५ वर्षे सलग महाराष्ट्रात वास्तव्यास असल्याचा अधिकृत पुरावा.",
      },
      explanation: {
        en: "Maharashtra domicile strictly requires proof of continuous residence for a minimum of 15 years prior to application date. Usually proven through electricity bills, rent agreements, or school records across 15 years.",
        hi: "महाराष्ट्र डोमिसाइल के लिए आवेदन तिथि से पहले कम से कम 15 वर्ष लगातार रहने का प्रमाण आवश्यक है। इसे स्कूल रिकॉर्ड, बिजली बिल या राशन कार्ड की श्रृंखला से साबित किया जाता है।",
        mr: "महाराष्ट्रात अधिवास प्रमाणपत्रासाठी किमान १५ वर्षे सलग वास्तव्याचा पुरावा लागतो. शाळा दाखले, वीज बिले किंवा रेशन कार्डच्या नोंदींद्वारे हे सिद्ध केले जाते.",
      },
      purpose: {
        en: "Mandatory statutory eligibility criteria under Maharashtra Domicile rules.",
        hi: "महाराष्ट्र अधिवास नियमों के तहत अनिवार्य वैधानिक पात्रता शर्त।",
        mr: "महाराष्ट्र अधिवास नियमांनुसार अनिवार्य कायदेशीर निकष.",
      },
      examples: {
        en: [
          "Electricity Bills across 15 years (e.g. 2011, 2016, 2021, 2026)",
          "School Leaving Certificate of student (showing 10+ years schooling in MH)",
          "Parent's service record or employment continuous certificate in Maharashtra",
          "Ration card issued 15+ years ago",
          "Registered Property purchase deed / 7/12 extract dated 15+ years ago",
        ],
        hi: [
          "पिछले 15 वर्षों के बिजली बिल (जैसे 2011, 2016, 2021, 2026)",
          "महाराष्ट्र के स्कूल का लीविंग सर्टिफिकेट (10+ वर्ष की पढ़ाई का प्रमाण)",
          "महाराष्ट्र में माता-पिता की निरंतर नौकरी का सेवा प्रमाण पत्र",
          "15 वर्ष पुराना राशन कार्ड",
          "15 वर्ष पुराना संपत्ति का रजिस्टर्ड दस्तावेज या 7/12 उतारा",
        ],
        mr: [
          "मागील १५ वर्षांमधील वीज बिले (उदा. २०११, २०१६, २०२१, २०२६)",
          "शाळा सोडल्याचा दाखला (महाराष्ट्रात १०+ वर्षे शिक्षण झाल्याचा पुरावा)",
          "पालकांचे नोकरीचे सलग सेवा प्रमाणपत्र",
          "१५ वर्षांपूर्वीचे रेशन कार्ड",
          "१५ वर्षांपूर्वीचा ७/१२ उतारा किंवा खरेदीखत",
        ],
      },
    },
    "identity-proof": {
      name: {
        en: "Proof of Identity (PoI)",
        hi: "पहचान प्रमाण (PoI)",
        mr: "ओळखीचा पुरावा (PoI)",
      },
      shortDescription: {
        en: "Government photo ID card of the applicant (Aadhaar, Voter ID, PAN).",
        hi: "आवेदक का सरकारी फोटो पहचान पत्र (आधार, वोटर आईडी, पैन कार्ड)।",
        mr: "अर्जदाराचे शासकीय फोटो ओळखपत्र (आधार, मतदार ओळखपत्र, पॅन कार्ड).",
      },
      explanation: {
        en: "Confirms that the person claiming 15 years domicile is the genuine applicant applying on Aaple Sarkar.",
        hi: "यह पुष्टि करता है कि आपले सरकार पर अधिवास का दावा करने वाला व्यक्ति वास्तविक है।",
        mr: "आपले सरकार पोर्टलवर अधिवासाचा दावा करणारी व्यक्ती खरी असल्याची खात्री करण्यासाठी.",
      },
      purpose: {
        en: "Legal identification in revenue records.",
        hi: "राजस्व अभिलेखों में आवेदक की कानूनी पहचान दर्ज करने के लिए।",
        mr: "महसूल दप्तरी कायदेशीर ओळख निश्चित करण्यासाठी.",
      },
      examples: {
        en: [
          "Aadhaar Card (Indian resident)",
          "Voter Identity Card (EPIC)",
          "Indian Passport",
          "PAN Card",
        ],
        hi: [
          "आधार कार्ड",
          "मतदाता पहचान पत्र (वोटर आईडी)",
          "भारतीय पासपोर्ट",
          "पैन कार्ड",
        ],
        mr: [
          "आधार कार्ड",
          "मतदार ओळखपत्र",
          "भारतीय पासपोर्ट",
          "पॅन कार्ड",
        ],
      },
    },
    "birth-or-school-proof": {
      name: {
        en: "Proof of Age & Birth (LC or Birth Certificate)",
        hi: "आयु व जन्म स्थान का प्रमाण (LC या जन्म प्रमाण पत्र)",
        mr: "वय व जन्माचा पुरावा (LC किंवा जन्म दाखला)",
      },
      shortDescription: {
        en: "Birth certificate or School Leaving Certificate stating place of birth in Maharashtra.",
        hi: "जन्म प्रमाण पत्र या स्कूल लीविंग सर्टिफिकेट जिसमें महाराष्ट्र में जन्म स्थान दर्ज हो।",
        mr: "जन्म दाखला किंवा शाळा सोडल्याचा दाखला ज्यावर महाराष्ट्रातील जन्मस्थळाची नोंद आहे.",
      },
      explanation: {
        en: "Proves that the applicant was either born in Maharashtra, or documents their age if born elsewhere and applying based on 15 years continuous residence.",
        hi: "यह सिद्ध करता है कि आवेदक का जन्म महाराष्ट्र में हुआ है, अथवा 15 वर्ष के निवास के आधार पर उसकी आयु प्रमाणित करता है।",
        mr: "अर्जदाराचा जन्म महाराष्ट्रात झाल्याचे किंवा १५ वर्षांच्या वास्तव्यासाठी वय सिद्ध करणारे कागदपत्र.",
      },
      purpose: {
        en: "Determines whether applicant is applying as Domicile by Birth or Domicile by 15-Year Residence.",
        hi: "यह तय करता है कि अधिवास जन्म के आधार पर है या 15 वर्ष के निवास के आधार पर।",
        mr: "जन्मसिद्ध अधिवास की १५ वर्षांच्या वास्तव्यावरील अधिवास हे ठरवण्यासाठी.",
      },
      examples: {
        en: [
          "Birth Certificate issued by Municipal Corporation in Maharashtra",
          "School Leaving Certificate (LC) showing place of birth in Maharashtra",
          "Passport showing place of birth in Maharashtra",
        ],
        hi: [
          "महाराष्ट्र नगर निगम द्वारा जारी जन्म प्रमाण पत्र",
          "स्कूल लीविंग सर्टिफिकेट (जिसमें महाराष्ट्र का जन्म स्थान दर्ज हो)",
          "पासपोर्ट (महाराष्ट्र के जन्म स्थान सहित)",
        ],
        mr: [
          "महाराष्ट्रातील महापालिकेचा जन्म दाखला",
          "महाराष्ट्रातील जन्मस्थळ असलेला शाळा सोडल्याचा दाखला",
          "पासपोर्ट",
        ],
      },
    },
    "domicile-affidavit": {
      name: {
        en: "Affidavit & Self-Declaration for Domicile",
        hi: "अधिवास शपथ पत्र व स्व-घोषणापत्र",
        mr: "अधिवासाचे प्रतिज्ञापत्र व स्वयंघोषणापत्र",
      },
      shortDescription: {
        en: "Sworn legal declaration that applicant is a permanent resident of Maharashtra and holds no other state domicile.",
        hi: "शपथ पत्र जिसमें घोषणा की जाती है कि आवेदक महाराष्ट्र का स्थायी निवासी है और उसके पास किसी अन्य राज्य का अधिवास नहीं है।",
        mr: "अर्जदार महाराष्ट्राचा कायम रहिवासी असून त्याच्याकडे इतर कोणत्याही राज्याचा अधिवास नाही असे प्रतिज्ञापत्र.",
      },
      explanation: {
        en: "In India, a citizen cannot possess domicile certificates from two different states simultaneously. This affidavit confirms sole domicile allegiance to Maharashtra.",
        hi: "भारत में एक नागरिक एक साथ दो राज्यों का अधिवास नहीं रख सकता। यह शपथ पत्र केवल महाराष्ट्र अधिवास की पुष्टि करता है।",
        mr: "एका नागरिकाकडे एकाच वेळी दोन राज्यांचे अधिवास प्रमाणपत्र असू शकत नाही. हे हमीपत्र केवळ महाराष्ट्रातील अधिवासाची खात्री देते.",
      },
      purpose: {
        en: "Statutory bar against dual-state quota exploitation in professional admissions.",
        hi: "प्रवेश परीक्षाओं में दोहरे राज्य आरक्षण के दुरुपयोग को रोकने के लिए।",
        mr: "प्रवेश प्रक्रियेत दुहेरी आरक्षणाचा गैरवापर रोखण्यासाठी.",
      },
      examples: {
        en: [
          "Aaple Sarkar Self-Declaration Form (Form 1) signed by applicant",
          "Notarized Affidavit on ₹100 stamp paper as per Tehsil format",
        ],
        hi: [
          "आपले सरकार स्व-घोषणा प्रपत्र (Form 1) आवेदक के हस्ताक्षर सहित",
          "₹100 के स्टाम्प पेपर पर नोटरीकृत शपथ पत्र (तहसील प्रारूप)",
        ],
        mr: [
          "आपले सरकार स्वयंघोषणापत्र (फॉर्म १)",
          "१०० रुपयांच्या स्टॅम्प पेपरवर नोटरी केलेले प्रतिज्ञापत्र",
        ],
      },
    },
    photograph: {
      name: {
        en: "Applicant Passport Photograph",
        hi: "आवेदक का पासपोर्ट फोटो",
        mr: "अर्जदाराचा पासपोर्ट आकाराचा फोटो",
      },
      shortDescription: {
        en: "Recent color photograph (white background, 35mm x 45mm, under 50KB).",
        hi: "हाल ही का रंगीन फोटो (सफेद पृष्ठभूमि, 35x45 मिमी, 50KB से कम)।",
        mr: "अलीकडचा रंगीत फोटो (पांढरी पार्श्वभूमी, ३५x४५ मिमी, ५०KB पेक्षा कमी).",
      },
      explanation: {
        en: "Printed on the digital certificate with QR code issued by the Tahsildar / Sub-Divisional Magistrate.",
        hi: "तहसीलदार द्वारा जारी डिजिटल प्रमाण पत्र और क्यूआर कोड पर यही फोटो मुद्रित होता है।",
        mr: "तहसीलदारांनी दिलेल्या डिजिटल दाखल्यावर आणि क्यूआर कोडवर हा फोटो छापला जातो.",
      },
      purpose: {
        en: "Visual biometric verification on the final digital certificate.",
        hi: "अंतिम डिजिटल प्रमाण पत्र पर फोटो सत्यापन के लिए।",
        mr: "दाखल्यावरील अधिकृत फोटो पडताळणीसाठी.",
      },
      examples: {
        en: [
          "Studio photograph with white background, no sunglasses or caps",
          "JPEG image between 20KB and 50KB dimensioned 160x200 pixels",
        ],
        hi: [
          "सफेद बैकग्राउंड वाला स्टूडियो फोटो (बिना चश्मा या टोपी)",
          "20KB से 50KB साइज़ की JPEG फाइल (160x200 पिक्सल)",
        ],
        mr: [
          "पांढऱ्या पार्श्वभूमीवरील स्टुडिओ फोटो",
          "२० ते ५० KB आकाराची JPEG फाईल",
        ],
      },
    },
    "student-school-lc": {
      name: {
        en: "Student's School Leaving Certificate (LC)",
        hi: "छात्र का स्कूल लीविंग सर्टिफिकेट (LC)",
        mr: "विद्यार्थ्याचा शाळा सोडल्याचा दाखला (LC)",
      },
      shortDescription: {
        en: "Mandatory school record showing continuous education in Maharashtra schools.",
        hi: "महाराष्ट्र के स्कूलों में लगातार पढ़ाई को प्रमाणित करने वाला अनिवार्य स्कूल रिकॉर्ड।",
        mr: "महाराष्ट्रातील शालेय शिक्षणाचा सलग पुरावा दर्शवणारा दाखला.",
      },
      explanation: {
        en: "For student applicants, their School Leaving Certificate (LC) or Transfer Certificate (TC) is the single most important evidence of their residence during school years.",
        hi: "छात्र आवेदकों के लिए उनका स्कूल लीविंग सर्टिफिकेट स्कूल के वर्षों के दौरान महाराष्ट्र में रहने का सबसे पुख्ता सबूत है।",
        mr: "विद्यार्थ्यांसाठी शाळा सोडल्याचा दाखला हा शालेय वर्षांमधील वास्तव्याचा सर्वात महत्त्वाचा पुरावा ठरतो.",
      },
      purpose: {
        en: "Corroborates educational continuity in Maharashtra.",
        hi: "महाराष्ट्र में शैक्षणिक निरंतरता की पुष्टि के लिए।",
        mr: "महाराष्ट्रात सलग शिक्षण घेतल्याची खात्री करण्यासाठी.",
      },
      examples: {
        en: [
          "School Leaving Certificate (LC) signed by School Headmaster / Principal",
          "College Bonafide Certificate showing admission year",
        ],
        hi: [
          "प्रधानाचार्य द्वारा हस्ताक्षरित स्कूल लीविंग सर्टिफिकेट",
          "कॉलेज बोनाफाइड सर्टिफिकेट (प्रवेश वर्ष सहित)",
        ],
        mr: [
          "मुख्याध्यापकांची स्वाक्षरी असलेला शाळा सोडल्याचा दाखला (LC)",
          "कॉलेज बोनाफाईड दाखला",
        ],
      },
    },
    "father-domicile-proof": {
      name: {
        en: "Father's Domicile Certificate",
        hi: "पिता का अधिवास प्रमाण पत्र (डोमिसाइल)",
        mr: "वडिलांचे अधिवास प्रमाणपत्र (डोमिसाईल)",
      },
      shortDescription: {
        en: "Existing Maharashtra domicile certificate of father, simplifying child's application.",
        hi: "पिता का पहले से बना हुआ महाराष्ट्र अधिवास प्रमाण पत्र, जिससे बच्चे का आवेदन आसान हो जाता है।",
        mr: "वडिलांचे आधीपासून असलेले डोमिसाईल प्रमाणपत्र, ज्यामुळे पाल्याचा अर्ज सुलभ होतो.",
      },
      explanation: {
        en: "If a father already possesses a verified Maharashtra Domicile Certificate, the child is legally recognized as a domiciled dependent without needing a full independent 15-year chain.",
        hi: "यदि पिता के पास पहले से महाराष्ट्र डोमिसाइल है, तो बच्चे को स्वतंत्र 15-वर्षीय रिकॉर्ड दिए बिना आसानी से डोमिसाइल मिल जाता है।",
        mr: "वडिलांकडे महाराष्ट्राचा अधिवास दाखला असल्यास पाल्याला स्वतंत्र १५ वर्षांची कागदपत्रे न जोडता दाखला मिळणे सोपे होते.",
      },
      purpose: {
        en: "Fast-track derivative domicile for minor and student dependents.",
        hi: "नाबालिगों और छात्रों के लिए पारिवारिक आधार पर त्वरित डोमिसाइल जारी करने हेतु।",
        mr: "अल्पवयीन व विद्यार्थी पाल्यांसाठी जलद अधिवास मिळवण्यासाठी.",
      },
      examples: {
        en: [
          "Father's Domicile Certificate issued by Tahsildar / Executive Magistrate in Maharashtra",
          "Father's computerized Aaple Sarkar barcode certificate",
        ],
        hi: [
          "तहसीलदार द्वारा जारी पिता का अधिवास प्रमाण पत्र",
          "आपले सरकार बारकोड युक्त डिजिटल प्रमाण पत्र",
        ],
        mr: [
          "तहसीलदारांनी दिलेला वडिलांचा डोमिसाईल दाखला",
          "बारकोड असलेला डिजिटल दाखला",
        ],
      },
    },
    "service-posting-certificate": {
      name: {
        en: "Government Posting & Joining Order",
        hi: "सरकारी नियुक्ति व पदस्थापना आदेश (सरकारी कर्मचारियों हेतु)",
        mr: "शासकीय नियुक्ती व बदली आदेश (सरकारी कर्मचाऱ्यांसाठी)",
      },
      shortDescription: {
        en: "Transfer/posting order for Central/State Govt employees stationed in Maharashtra.",
        hi: "महाराष्ट्र में पदस्थ केंद्र या राज्य सरकार के कर्मचारियों का स्थानांतरण और नियुक्ति आदेश।",
        mr: "महाराष्ट्रात सेवेत असलेल्या शासकीय कर्मचाऱ्यांचा नियुक्ती व रुजू झाल्याचा आदेश.",
      },
      explanation: {
        en: "Defense personnel, IAS/IPS, and Central Government employees transferred to Maharashtra enjoy special domicile exemptions for their children's admissions.",
        hi: "सेना के जवानों, आईएएस/आईपीएस और केंद्र सरकार के कर्मचारियों के बच्चों को प्रवेश हेतु विशेष डोमिसाइल छूट मिलती है।",
        mr: "संरक्षण दलातील जवान आणि केंद्रीय कर्मचाऱ्यांच्या मुलांसाठी प्रवेश प्रक्रियेत विशेष सूट असते.",
      },
      purpose: {
        en: "Statutory exemption from 15-year rule for transferable public servants.",
        hi: "स्थानांतरणीय सरकारी कर्मचारियों के लिए 15 वर्ष के नियम में वैधानिक छूट हेतु।",
        mr: "शासकीय कर्मचाऱ्यांसाठी १५ वर्षांच्या अटीतून कायदेशीर सूट मिळवण्यासाठी.",
      },
      examples: {
        en: [
          "Posting order from competent defense authority / Ministry",
          "Certificate from Head of Office confirming posting in Maharashtra",
        ],
        hi: [
          "सक्षम रक्षा प्राधिकारी या मंत्रालय का पदस्थापना आदेश",
          "कार्यालय प्रमुख द्वारा जारी सेवा प्रमाण पत्र",
        ],
        mr: [
          "संरक्षण विभाग किंवा मंत्रालयाचा बदली आदेश",
          "कार्यालय प्रमुखाचे सेवा प्रमाणपत्र",
        ],
      },
    },
  },
  "caste-certificate": {
    "applicant-school-lc": {
      name: {
        en: "Applicant's School Leaving Certificate (LC)",
        hi: "आवेदक का स्कूल लीविंग सर्टिफिकेट (LC)",
        mr: "अर्जदाराचा शाळा सोडल्याचा दाखला (LC)",
      },
      shortDescription: {
        en: "School LC showing applicant's caste, sub-caste, and nationality as recorded in General Register.",
        hi: "स्कूल का दाखला जिसमें जनरल रजिस्टर के अनुसार आवेदक की जाति, उप-जाति और राष्ट्रीयता दर्ज हो।",
        mr: "शाळेचा दाखला ज्यावर जनरल रजिस्टरनुसार अर्जदाराची जात, पोटजात आणि राष्ट्रीयत्वाची नोंद आहे.",
      },
      explanation: {
        en: "Primary starting evidence. The caste entry recorded at the time of primary school admission is treated as unmanipulated contemporaneous proof.",
        hi: "प्राथमिक शुरुआत का सबसे ठोस सबूत। प्राथमिक स्कूल में प्रवेश के समय दर्ज जाति को प्रामाणिक माना जाता है।",
        mr: "प्राथमिक शिक्षणाच्या वेळी नोंदवलेली जात ही सर्वात विश्वासार्ह पुरावा मानली जाते.",
      },
      purpose: {
        en: "Establishes applicant's documented caste category from earliest childhood record.",
        hi: "बचपन के शुरुआती अभिलेखों से आवेदक की जाति श्रेणी प्रमाणित करने के लिए।",
        mr: "बालपणाच्या सुरुवातीच्या नोंदीवरून जातीची वर्गवारी निश्चित करण्यासाठी.",
      },
      examples: {
        en: [
          "Original School Leaving Certificate (LC) with clear caste column entry",
          "Certified copy of School General Register Extract (Nirgam Utara)",
        ],
        hi: [
          "मूल स्कूल लीविंग सर्टिफिकेट (जाति कॉलम में स्पष्ट प्रविष्टि सहित)",
          "स्कूल जनरल रजिस्टर का प्रमाणित निर्गम उतारा",
        ],
        mr: [
          "जातीच्या रकान्यात स्पष्ट नोंद असलेला मूळ शाळा सोडल्याचा दाखला",
          "शाळेच्या जनरल रजिस्टरचा प्रमाणित निर्गम उतारा",
        ],
      },
    },
    "paternal-caste-evidence": {
      name: {
        en: "Father's / Paternal Relative's Caste Certificate & LC",
        hi: "पिता / पैतृक रिश्तेदार का जाति प्रमाण पत्र व LC",
        mr: "वडिलांचे / रक्ताच्या नात्यातील नातेवाईकांचे जात प्रमाणपत्र व LC",
      },
      shortDescription: {
        en: "Caste documents of father, grandfather, real uncle, or paternal aunt.",
        hi: "पिता, दादा, सगे चाचा या बुआ के जाति प्रमाण पत्र और स्कूल अभिलेख।",
        mr: "वडील, आजोबा, सख्खे काका किंवा आत्या यांचे जात प्रमाणपत्र आणि शाळा दाखले.",
      },
      explanation: {
        en: "Under Indian jurisprudence, caste is determined strictly through paternal lineage (father's side). Maternal documents (mother's side) are legally inadmissible for caste determination.",
        hi: "भारतीय कानून के अनुसार जाति केवल पिता के वंश से निर्धारित होती है। ननिहाल (मां के पक्ष) के दस्तावेज़ जाति निर्धारण में मान्य नहीं होते।",
        mr: "कायद्यानुसार जात केवळ पितृसत्ताक रक्ताच्या नात्यावरून (वडिलांच्या बाजूने) ठरते. आईकडील कागदपत्रे ग्राह्य धरली जात नाहीत.",
      },
      purpose: {
        en: "Proves genetic and ancestral lineage to the notified constitutional category.",
        hi: "अधिसूचित संवैधानिक श्रेणी से पैतृक वंश संबंध सिद्ध करने के लिए।",
        mr: "अधिकृत संवर्गाशी रक्ताचे आणि पूर्वजांचे नाते सिद्ध करण्यासाठी.",
      },
      examples: {
        en: [
          "Father's Caste Certificate issued by competent authority",
          "Father's School Leaving Certificate showing caste",
          "Grandfather's School LC / Revenue extract showing caste",
          "Paternal uncle's Caste Validity Certificate",
        ],
        hi: [
          "सक्षम प्राधिकारी द्वारा जारी पिता का जाति प्रमाण पत्र",
          "पिता का स्कूल लीविंग सर्टिफिकेट (जाति प्रविष्टि सहित)",
          "दादाजी का स्कूल दाखिला या राजस्व रिकॉर्ड (जाति सहित)",
          "चाचा का जाति वैधता प्रमाण पत्र (Caste Validity)",
        ],
        mr: [
          "वडिलांचे अधिकृत जात प्रमाणपत्र",
          "वडिलांचा शाळा सोडल्याचा दाखला (जातीची नोंद असलेला)",
          "आजोबांचा शाळा दाखला किंवा महसूल उतारा",
          "सख्ख्या चुलत्यांचे जात वैधता प्रमाणपत्र",
        ],
      },
    },
    "deemed-date-1950-proof": {
      name: {
        en: "Pre-1950 Proof of Ancestor (for SC / ST)",
        hi: "1950 से पूर्व का पूर्वज प्रमाण (SC / ST हेतु)",
        mr: "१९५० पूर्वीचा पूर्वजांचा पुरावा (SC / ST साठी)",
      },
      shortDescription: {
        en: "Document dated on or before 10 August 1950 proving paternal ancestors resided in Maharashtra.",
        hi: "10 अगस्त 1950 या उससे पहले का दस्तावेज़ जिससे सिद्ध हो कि पैतृक पूर्वज महाराष्ट्र में रहते थे।",
        mr: "१० ऑगस्ट १९५० पूर्वी पूर्वज महाराष्ट्रात वास्तव्यास असल्याचा अधिकृत पुरावा.",
      },
      explanation: {
        en: "Under Maharashtra Scheduled Castes and Scheduled Tribes regulations, families must establish residence prior to the Presidential Order date: 10 August 1950.",
        hi: "राष्ट्रपति के आदेश की तिथि (10 अगस्त 1950) से पूर्व महाराष्ट्र में निवास और जाति का ऐतिहासिक प्रमाण अनिवार्य है।",
        mr: "राष्ट्रपतींच्या आदेशाच्या दिनांकापूर्वी (१० ऑगस्ट १९५०) महाराष्ट्रात निवास असल्याचा ऐतिहासिक पुरावा बंधनकारक आहे.",
      },
      purpose: {
        en: "Satisfies statutory deemed date requirement for SC / ST reservations.",
        hi: "अनुसूचित जाति/जनजाति आरक्षण के लिए वैधानिक कट-ऑफ तिथि की शर्त पूरी करने हेतु।",
        mr: "SC / ST संवर्गासाठी निर्धारित मानिव दिनांकाची कायदेशीर पूर्तता करण्यासाठी.",
      },
      examples: {
        en: [
          "Birth / Death register extract of ancestor dated before 1950",
          "Primary School Admission Register (Kotwal Book) extract dated before 1950",
          "Pre-1950 7/12 land revenue extract showing ancestor name",
        ],
        hi: [
          "1950 से पहले का पूर्वज का जन्म/मृत्यु रजिस्टर का उतारा",
          "1950 से पहले का प्राथमिक स्कूल प्रवेश रजिस्टर (कोतवाल बुक) उतारा",
          "1950 से पहले का 7/12 ज़मीन का राजस्व रिकॉर्ड",
        ],
        mr: [
          "१९५० पूर्वीचा जन्म-मृत्यू नोंदवहीचा उतारा",
          "१९५० पूर्वीचा कोतवाल बुकाचा उतारा किंवा प्राथमिक शाळा नोंद",
          "१९५० पूर्वीचा ७/१२ जमिनीचा उतारा",
        ],
      },
    },
    "deemed-date-1961-proof": {
      name: {
        en: "Pre-1961 Proof of Ancestor (for VJ / NT)",
        hi: "1961 से पूर्व का पूर्वज प्रमाण (विमुक्त जाति / घुमंतू जनजाति VJ/NT हेतु)",
        mr: "१९६१ पूर्वीचा पूर्वजांचा पुरावा (VJ / NT साठी)",
      },
      shortDescription: {
        en: "Document dated on or before 21 November 1961 proving ancestor resided in Maharashtra.",
        hi: "21 नवंबर 1961 या उससे पहले का दस्तावेज़ जिससे सिद्ध हो कि पूर्वज महाराष्ट्र के निवासी थे।",
        mr: "२१ नोव्हेंबर १९६१ पूर्वी पूर्वज महाराष्ट्रात राहत असल्याचा अधिकृत पुरावा.",
      },
      explanation: {
        en: "For VJ (Vimukta Jati) and NT (Nomadic Tribes) categories in Maharashtra, the statutory deemed date cutoff is 21 November 1961.",
        hi: "महाराष्ट्र में VJ और NT श्रेणियों के लिए कानूनी कट-ऑफ तिथि 21 नवंबर 1961 निर्धारित है।",
        mr: "महाराष्ट्रात विमुक्त जाती आणि भटक्या जमातींसाठी मानिव दिनांक २१ नोव्हेंबर १९६१ आहे.",
      },
      purpose: {
        en: "Constitutional deemed-date compliance for VJNT reservation.",
        hi: "VJNT आरक्षण के लिए संवैधानिक कट-ऑफ नियम का पालन करने हेतु।",
        mr: "VJNT संवर्गाच्या कायदेशीर वैधतेसाठी.",
      },
      examples: {
        en: [
          "Grandfather or father's school LC dated before 21 Nov 1961",
          "Kotwal Book entry or village birth register before Nov 1961",
          "Land record or tenancy deed dated before Nov 1961",
        ],
        hi: [
          "दादा या पिता का 21 नवंबर 1961 से पहले का स्कूल दाखिला",
          "नवंबर 1961 से पहले की कोतवाल बुक या गांव जन्म रजिस्टर प्रविष्टि",
          "नवंबर 1961 से पहले का भूमि अभिलेख या किरायानामा",
        ],
        mr: [
          "२१ नोव्हेंबर १९६१ पूर्वीचा आजोबा किंवा वडिलांचा शाळा दाखला",
          "नोव्हेंबर १९६१ पूर्वीचा कोतवाल बुकाचा उतारा",
          "नोव्हेंबर १९६१ पूर्वीचा जमिनीचा उतारा",
        ],
      },
    },
    "deemed-date-1967-proof": {
      name: {
        en: "Pre-1967 Proof of Ancestor (for OBC / SBC)",
        hi: "1967 से पूर्व का पूर्वज प्रमाण (OBC / SBC अन्य पिछड़ा वर्ग हेतु)",
        mr: "१९६७ पूर्वीचा पूर्वजांचा पुरावा (इतर मागास वर्ग OBC / SBC साठी)",
      },
      shortDescription: {
        en: "Document dated on or before 13 October 1967 proving ancestor resided in Maharashtra.",
        hi: "13 अक्टूबर 1967 या उससे पहले का दस्तावेज़ जिससे सिद्ध हो कि पूर्वज महाराष्ट्र के निवासी थे।",
        mr: "१३ ऑक्टोबर १९६७ पूर्वी पूर्वज महाराष्ट्रात राहत असल्याचा अधिकृत पुरावा.",
      },
      explanation: {
        en: "For OBC (Other Backward Class) and SBC (Special Backward Category), the statutory deemed date cutoff in Maharashtra is 13 October 1967.",
        hi: "महाराष्ट्र में ओबीसी और एसबीसी के लिए वैधानिक कट-ऑफ तिथि 13 अक्टूबर 1967 है।",
        mr: "महाराष्ट्रात इतर मागासवर्गासाठी मानिव दिनांक १३ ऑक्टोबर १९६७ निश्चित आहे.",
      },
      purpose: {
        en: "Mandatory statutory deemed date compliance for OBC/SBC certificates.",
        hi: "ओबीसी प्रमाण पत्र के लिए आवश्यक 1967 कट-ऑफ प्रमाण।",
        mr: "OBC दाखल्यासाठी आवश्यक असणारा कायदेशीर पुरावा.",
      },
      examples: {
        en: [
          "Paternal relative's School LC showing caste dated before 13 Oct 1967",
          "Kotwal Book extract dated before October 1967",
          "Property tax assessment or 7/12 extract dated before Oct 1967",
        ],
        hi: [
          "13 अक्टूबर 1967 से पहले का पिता/चाचा का स्कूल दाखिला (जाति सहित)",
          "अक्टूबर 1967 से पहले का कोतवाल बुक उतारा",
          "अक्टूबर 1967 से पहले का म्युनिसिपल टैक्स रिकॉर्ड या 7/12 उतारा",
        ],
        mr: [
          "१३ ऑक्टोबर १९६७ पूर्वीचा शाळा सोडल्याचा दाखला",
          "ऑक्टोबर १९६७ पूर्वीचा कोतवाल बुकाचा उतारा",
          "ऑक्टोबर १९६७ पूर्वीचा घरपट्टी किंवा जमिनीचा उतारा",
        ],
      },
    },
    "genealogy-vanshavali": {
      name: {
        en: "Genealogical Family Tree Affidavit (Vanshavali)",
        hi: "वंशावली शपथ पत्र (पारिवारिक वंशावली / Vanshavali)",
        mr: "वंशावळ प्रतिज्ञापत्र (सविस्तर वंशावळ)",
      },
      shortDescription: {
        en: "Notarized family tree affidavit showing exact paternal blood relation to the ancestor holding pre-deemed date proof.",
        hi: "नोटरीकृत वंशावली शपथ पत्र जिसमें कट-ऑफ तारीख वाले पूर्वज से आवेदक का पैतृक संबंध स्पष्ट दिखाया गया हो।",
        mr: "मानिव दिनांकाचा पुरावा असलेल्या पूर्वजांशी अर्जदाराचे रक्ताचे नाते स्पष्ट करणारे नोटरी प्रतिज्ञापत्र.",
      },
      explanation: {
        en: "Shows the uninterrupted line of descent: Great-Grandfather → Grandfather → Father → Applicant. Must be attested by applicant and elders on prescribed legal stamp paper.",
        hi: "यह परदादा → दादा → पिता → आवेदक के सीधे वंश क्रम को प्रमाणित करता है। इस पर परिवार के वरिष्ठ सदस्यों के हस्ताक्षर आवश्यक होते हैं।",
        mr: "पणजोबा → आजोबा → वडील → अर्जदार अशी थेट रक्ताची वंशावळ दर्शवणारे अधिकृत प्रतिज्ञापत्र.",
      },
      purpose: {
        en: "Connects applicant's identity legally to the ancestor's pre-1950/1961/1967 evidence.",
        hi: "आवेदक की पहचान को ऐतिहासिक पूर्वज के पुराने दस्तावेज़ों से जोड़ने के लिए।",
        mr: "ऐतिहासिक पुराव्यांशी अर्जदाराचे नाते कायदेशीररीत्या जोडण्यासाठी.",
      },
      examples: {
        en: [
          "Affidavit on ₹100 stamp paper detailing complete paternal family tree",
          "Talathi / Police Patil verified Vanshavali panchnama",
        ],
        hi: [
          "₹100 के स्टाम्प पेपर पर नोटरीकृत विस्तृत वंशावली शपथ पत्र",
          "तलाठी या पुलिस पाटिल द्वारा सत्यापित वंशावली पंचनामा",
        ],
        mr: [
          "१०० रुपयांच्या स्टॅम्प पेपरवर तयार केलेली सविस्तर वंशावळ",
          "तलाठी किंवा पोलीस पाटील प्रमाणित वंशावळ पंचनामा",
        ],
      },
    },
    photograph: {
      name: {
        en: "Applicant Photograph",
        hi: "आवेदक का फोटो",
        mr: "अर्जदाराचा फोटो",
      },
      shortDescription: {
        en: "Color passport photograph (35x45mm, plain background).",
        hi: "रंगीन पासपोर्ट फोटो (35x45 मिमी, साफ बैकग्राउंड)।",
        mr: "रंगीत पासपोर्ट फोटो (३५x४५ मिमी).",
      },
      explanation: {
        en: "Printed on the digital Caste Certificate issued by the Sub-Divisional Officer (SDO).",
        hi: "उपविभागीय अधिकारी (SDO) द्वारा जारी डिजिटल जाति प्रमाण पत्र पर यही फोटो लगाया जाता है।",
        mr: "उपविभागीय अधिकाऱ्यांनी (SDO) दिलेल्या डिजिटल प्रमाणपत्रावर हा फोटो छापला जातो.",
      },
      purpose: {
        en: "Visual identity verification on revenue certificate.",
        hi: "राजस्व प्रमाण पत्र पर आधिकारिक फोटो पहचान हेतु।",
        mr: "दाखल्यावरील ओळख पडताळणीसाठी.",
      },
      examples: {
        en: [
          "Recent color photograph (under 50KB JPG format)",
        ],
        hi: [
          "हाल ही का रंगीन पासपोर्ट फोटो (50KB से कम)",
        ],
        mr: [
          "नुकताच काढलेला रंगीत फोटो (५०KB पेक्षा कमी)",
        ],
      },
    },
  },
  "leaving-certificate": {
    "written-application": {
      name: {
        en: "Application Letter to School Principal",
        hi: "प्रधानाचार्य को औपचारिक आवेदन पत्र",
        mr: "मुख्याध्यापकांना औपचारिक अर्ज",
      },
      shortDescription: {
        en: "Written request signed by parent/student stating reason for leaving and requesting LC.",
        hi: "माता-पिता या छात्र द्वारा हस्ताक्षरित लिखित आवेदन जिसमें स्कूल छोड़ने का कारण दर्ज हो।",
        mr: "शाळा सोडण्याचे कारण स्पष्ट करून दाखला मिळवण्यासाठी पालकांनी मुख्याध्यापकांना दिलेला अर्ज.",
      },
      explanation: {
        en: "Formal written notice to the school administration requesting release of student from the General Register (G.R.) and generation of Leaving Certificate.",
        hi: "स्कूल प्रशासन को जनरल रजिस्टर से छात्र का नाम काटकर लीविंग सर्टिफिकेट जारी करने का औपचारिक अनुरोध।",
        mr: "शाळेच्या जनरल रजिस्टरमधून नाव कमी करून शाळा सोडल्याचा दाखला मिळवण्यासाठी अधिकृत अर्ज.",
      },
      purpose: {
        en: "Initiates institutional administrative file for issuing LC.",
        hi: "स्कूल कार्यालय में एलसी जारी करने की प्रक्रिया शुरू करने हेतु।",
        mr: "शाळा प्रशासनाकडे दाखल्याची प्रक्रिया सुरू करण्यासाठी.",
      },
      examples: {
        en: [
          "Handwritten or typed application letter on plain paper with parent signature",
          "Prescribed school LC request proforma filled and signed",
        ],
        hi: [
          "सादे कागज़ पर माता-पिता के हस्ताक्षर वाला हस्तलिखित या टाइप किया हुआ आवेदन पत्र",
          "स्कूल द्वारा निर्धारित एलसी आवेदन फॉर्म",
        ],
        mr: [
          "पालकांच्या स्वाक्षरीसह कोऱ्या कागदावरील अर्ज",
          "शाळेचा छापील अर्ज नमुना",
        ],
      },
    },
    "clearance-nodues-slip": {
      name: {
        en: "School Clearance / No-Dues Certificate",
        hi: "स्कूल क्लीयरेंस / बकाया मुक्ति प्रमाण पत्र (No-Dues)",
        mr: "शालेय थकबाकी नसल्याचा दाखला (No-Dues प्रमाणपत्र)",
      },
      shortDescription: {
        en: "Internal clearance slip showing library books returned, laboratory equipment clear, and school fees cleared.",
        hi: "आंतरिक क्लीयरेंस पर्ची जिससे सिद्ध हो कि लाइब्रेरी की किताबें जमा हैं और सभी स्कूल फीस भरी जा चुकी है।",
        mr: "ग्रंथालयाची पुस्तके, प्रयोगशाळा आणि शाळेची फी पूर्ण भरल्याचे क्लिअरन्स प्रमाणपत्र.",
      },
      explanation: {
        en: "Schools do not issue the final Leaving Certificate until all pending fee installments are settled and school property (library books, sports gear) is returned.",
        hi: "स्कूल सभी बकाया फीस जमा होने और स्कूल की संपत्ति (किताबें आदि) लौटाने के बाद ही अंतिम एलसी जारी करते हैं।",
        mr: "सर्व शालेय फी भरल्याशिवाय आणि ग्रंथालयाची पुस्तके जमा केल्याशिवाय शाळा दाखला देत नाही.",
      },
      purpose: {
        en: "Financial and asset clearance before severance of student-school relationship.",
        hi: "स्कूल छोड़ने से पहले वित्तीय और संपत्ति संबंधी देनदारियों के निपटान के लिए।",
        mr: "शाळा सोडण्यापूर्वी सर्व देणी पूर्ण झाल्याची खात्री करण्यासाठी.",
      },
      examples: {
        en: [
          "Printed No-Dues slip signed by School Accountant, Librarian, and Class Teacher",
          "Final fee receipt showing zero balance",
        ],
        hi: [
          "स्कूल अकाउंटेंट, लाइब्रेरियन और क्लास टीचर के हस्ताक्षर वाली नो-ड्यूज पर्ची",
          "शून्य बकाया दर्शाने वाली अंतिम फीस रसीद",
        ],
        mr: [
          "लेखापाल, ग्रंथपाल आणि वर्गशिक्षकांची स्वाक्षरी असलेली नो-ड्यूज पावती",
          "फी पूर्ण भरल्याची अंतिम पावती",
        ],
      },
    },
    "board-hallticket-or-marksheet": {
      name: {
        en: "Board Exam Marksheet / Hall Ticket Copy",
        hi: "बोर्ड परीक्षा अंकतालिका / हॉल टिकट की प्रति",
        mr: "बोर्ड परीक्षा गुणपत्रिका / हॉल तिकीट प्रत",
      },
      shortDescription: {
        en: "For 10th (SSC) or 12th (HSC) students, copy of marksheet or exam seat number.",
        hi: "10वीं (SSC) या 12वीं (HSC) के छात्रों के लिए बोर्ड अंकतालिका या परीक्षा सीट नंबर की प्रति।",
        mr: "१० वी (SSC) किंवा १२ वी (HSC) विद्यार्थ्यांसाठी गुणपत्रिका किंवा परीक्षा बैठक क्रमांक प्रत.",
      },
      explanation: {
        en: "The school needs your official board exam seat number and passing status to record on the final Leaving Certificate under the 'Reason for leaving' and 'Progress' columns.",
        hi: "स्कूल को लीविंग सर्टिफिकेट के 'प्रगति' और 'छोड़ने का कारण' कॉलम में बोर्ड परीक्षा का रोल नंबर और परिणाम दर्ज करना होता है।",
        mr: "दाखल्यावरील 'प्रगती' आणि 'शाळा सोडण्याचे कारण' या रकान्यात बोर्डाचा निकाल नोंदवण्यासाठी आवश्यक.",
      },
      purpose: {
        en: "Accurate transcript entry of board exam results on LC.",
        hi: "एलसी पर बोर्ड परीक्षा परिणाम की सही प्रविष्टि सुनिश्चित करने के लिए।",
        mr: "दाखल्यावर बोर्ड निकालाची अचूक नोंद करण्यासाठी.",
      },
      examples: {
        en: [
          "Online Board Result printout (from mahresult.nic.in)",
          "Original board marksheet photocopy",
          "Board examination Hall Ticket / Admit Card",
        ],
        hi: [
          "mahresult.nic.in से निकाला गया ऑनलाइन बोर्ड रिजल्ट का प्रिंट",
          "मूल बोर्ड अंकतालिका की फोटोकॉपी",
          "बोर्ड परीक्षा का हॉल टिकट / एडमिट कार्ड",
        ],
        mr: [
          "mahresult.nic.in वरील निकालाची प्रत",
          "बोर्डाच्या गुणपत्रिकेची झेरॉक्स प्रत",
          "बोर्ड परीक्षेचे हॉल तिकीट",
        ],
      },
    },
    "police-ncr-report": {
      name: {
        en: "Police Complaint (NCR) for Lost Original LC",
        hi: "मूल LC खोने की पुलिस शिकायत (NCR रिपोर्ट)",
        mr: "मूळ LC हरवल्याची पोलीस तक्रार (NCR प्रत)",
      },
      shortDescription: {
        en: "Police non-cognizable report proving that the original Leaving Certificate was genuinely lost/misplaced.",
        hi: "पुलिस की गैर-संज्ञेय रिपोर्ट (NCR) जिससे सिद्ध हो कि मूल लीविंग सर्टिफिकेट वास्तव में गुम हो गया है।",
        mr: "मूळ शाळा सोडल्याचा दाखला गहाळ झाल्याची खात्री देणारी अधिकृत पोलीस तक्रार प्रत.",
      },
      explanation: {
        en: "Under Maharashtra Education Code, a school CANNOT issue a second Leaving Certificate easily because it can be misused for dual college enrolments. A police lost-report is mandatory to request a 'DUPLICATE' LC.",
        hi: "शिक्षा संहिता के तहत स्कूल आसानी से दूसरा एलसी जारी नहीं कर सकते क्योंकि इसका दोहरे प्रवेश में दुरुपयोग हो सकता है। डुप्लीकेट एलसी के लिए पुलिस रिपोर्ट अनिवार्य है।",
        mr: "शाळा एका विद्यार्थ्याला सहज दुसरा दाखला देऊ शकत नाही कारण त्याचा गैरवापर होऊ शकतो. डुप्लिकेट दाखल्यासाठी पोलीस तक्रार बंधनकारक आहे.",
      },
      purpose: {
        en: "Legal barrier against unauthorized dual-school/college admission using duplicate documents.",
        hi: "डुप्लीकेट दस्तावेज़ के ज़रिए दो कॉलेजों में एक साथ प्रवेश के दुरुपयोग को रोकने के लिए।",
        mr: "एकाच वेळी दोन ठिकाणी प्रवेश घेण्याचा गैरव्यवहार रोखण्यासाठी.",
      },
      examples: {
        en: [
          "Non-Cognizable Report (NCR) from local police station",
          "Online lost-article certificate issued by Maharashtra Police Citizen Portal",
        ],
        hi: [
          "स्थानीय पुलिस स्टेशन से प्राप्त एनसीआर (NCR) रसीद",
          "महाराष्ट्र पुलिस नागरिक पोर्टल से जारी ऑनलाइन गुमशुदगी प्रमाण पत्र",
        ],
        mr: [
          "पोलीस ठाण्याची एनसीआर (NCR) पावती",
          "महाराष्ट्र पोलीस पोर्टलवरून डाऊनलोड केलेले गहाळ प्रमाणपत्र",
        ],
      },
    },
    "notarized-loss-affidavit": {
      name: {
        en: "Notarized Affidavit for Duplicate LC",
        hi: "डुप्लीकेट LC हेतु नोटरीकृत शपथ पत्र",
        mr: "डुप्लिकेट LC साठी नोटरी प्रतिज्ञापत्र",
      },
      shortDescription: {
        en: "Affidavit on ₹100 stamp paper declaring that original LC is lost and will not be misused.",
        hi: "₹100 के स्टाम्प पेपर पर शपथ पत्र जिसमें घोषणा होती है कि मूल एलसी खो गया है और इसका दुरुपयोग नहीं किया जाएगा।",
        mr: "१०० रुपयांच्या स्टॅम्प पेपरवर मूळ दाखला हरवल्याचे व गैरवापर न करण्याचे नोटरी प्रतिज्ञापत्र.",
      },
      explanation: {
        en: "Legal commitment holding the applicant criminally liable if the original LC is subsequently found and misused for fraudulent college admissions.",
        hi: "कानूनी शपथ जिसमें आवेदक वचन देता है कि यदि पुराना एलसी मिलता है तो वह उसे स्कूल में जमा करा देगा और दुरुपयोग नहीं करेगा।",
        mr: "मूळ दाखला सापडल्यास तो शाळेत जमा करण्याचे कायदेशीर बंधन घेणारे प्रतिज्ञापत्र.",
      },
      purpose: {
        en: "Statutory indemnity for school principal against duplicate issuance claims.",
        hi: "डुप्लीकेट प्रमाण पत्र जारी करने पर स्कूल प्रशासन की कानूनी सुरक्षा के लिए।",
        mr: "डुप्लिकेट दाखला दिल्यानंतर शाळेच्या कायदेशीर संरक्षणासाठी.",
      },
      examples: {
        en: [
          "Affidavit on ₹100 non-judicial stamp paper notarized by Notary Public",
          "Indemnity bond format supplied by school administration",
        ],
        hi: [
          "₹100 के गैर-न्यायिक स्टाम्प पेपर पर नोटरीकृत शपथ पत्र",
          "स्कूल द्वारा निर्धारित क्षतिपूर्ति बंधपत्र (Indemnity bond) प्रारूप",
        ],
        mr: [
          "१०० रुपयांच्या स्टॅम्प पेपरवर नोटरी केलेले प्रतिज्ञापत्र",
          "शाळेने दिलेला हमीपत्र नमुना",
        ],
      },
    },
    "parent-transfer-order": {
      name: {
        en: "Parent's Job Transfer Order / Proof of Relocation",
        hi: "माता/पिता का स्थानांतरण आदेश / निवास परिवर्तन का प्रमाण",
        mr: "पालकांचा बदली आदेश / स्थलांतराचा पुरावा",
      },
      shortDescription: {
        en: "Employer transfer order or new registered rent agreement when leaving school mid-academic year.",
        hi: "शैक्षणिक वर्ष के बीच में स्कूल बदलते समय नियोक्ता का ट्रांसफर ऑर्डर या नए शहर का रेंट एग्रीमेंट।",
        mr: "शैक्षणिक वर्षाच्या मध्यात शाळा सोडताना लागणारा पालकांचा बदली आदेश किंवा नवीन पत्त्याचा पुरावा.",
      },
      explanation: {
        en: "Under RTE and state board rules, schools require justifiable educational reasons (such as family job relocation) to issue a Transfer Certificate in the middle of a school term.",
        hi: "शिक्षा अधिकार नियमों के तहत शैक्षणिक सत्र के मध्य में टीसी जारी करने के लिए उचित कारण (जैसे परिवार का स्थानांतरण) आवश्यक होता है।",
        mr: "सत्राच्या मध्यात शाळा सोडताना पालकांची नोकरीतील बदली किंवा कौटुंबिक स्थलांतराचे वैध कारण आवश्यक असते.",
      },
      purpose: {
        en: "Justifies mid-session school transfer under education board guidelines.",
        hi: "सत्र के बीच स्कूल ट्रांसफर के लिए बोर्ड नियमों के तहत उचित कारण सिद्ध करने हेतु।",
        mr: "शालेय सत्राच्या मध्यात स्थलांतराचे कारण स्पष्ट करण्यासाठी.",
      },
      examples: {
        en: [
          "Transfer letter from employer on official company/ministry letterhead",
          "New residential lease or registered rent agreement in another district/state",
        ],
        hi: [
          "कंपनी या सरकारी विभाग के लेटरहेड पर नियोक्ता का ट्रांसफर पत्र",
          "दूसरे ज़िले या राज्य का नया पंजीकृत रेंट एग्रीमेंट",
        ],
        mr: [
          "कार्यालयाचा अधिकृत बदली आदेश",
          "दुसऱ्या जिल्ह्यातील किंवा राज्यातील नवीन भाडेकरार",
        ],
      },
    },
  },
};

