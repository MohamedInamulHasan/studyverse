// src/data/tamilClass1Data.jsx
import React from 'react';

export const getClass1TamilTopics = (unitNum = 1) => {
  if (Number(unitNum) === 1) {
    return [
      {
        id: "kattukulle",
        num: 1,
        letter: "1",
        title: "காட்டுக்குள்ளே கொண்டாட்டம்",
        subTitle: "படப்பார்வை & உரையாடல்",
        category: "கதை & உரையாடல்",
        badge: "பகுதி 1",
        description: "காட்டில் விலங்குகளும் பறவைகளும் ஒன்றிணைந்து ஆடிப் பாடி மகிழும் கொண்டாட்டம்."
      },
      {
        id: "aalamarathula",
        num: 2,
        letter: "2",
        title: "ஆலமரத்துல விளையாட்டு",
        subTitle: "பாடல் (பாடி மகிழ்வோம்)",
        category: "பாடல்",
        badge: "பகுதி 2",
        description: "அணில், குயில், கிளி, குரங்கு, நரி, முயல், சிங்கம் இணைந்து கொண்டாடும் மகிழ்ச்சிப் பாடல்."
      },
      {
        id: "ilaiyum-kaayum",
        num: 3,
        letter: "3",
        title: "இலையும்... காயும்...",
        subTitle: "படத்தைப் பார்த்துக் கதை கூறி மகிழ்வோம்",
        category: "கதை கூறி மகிழ்வோம்",
        badge: "பகுதி 3",
        description: "இலைகள் மற்றும் காய்கறிகளைக் கொண்டு பல உருவங்கள் செய்து கதை கூறி மகிழ்தல்."
      },
      {
        id: "verupattathai",
        num: 4,
        letter: "4",
        title: "வேறுபட்டதை வட்டமிடுவோம்",
        subTitle: "கூர்ந்து கவனித்து வேறுபட்டதைக் கண்டறிவோம்",
        category: "கூர்ந்து கவனித்தல்",
        badge: "பகுதி 4",
        description: "குழுவில் உள்ள படங்களில் வேறுபட்ட ஒன்றைக் கூர்ந்து கவனித்து வட்டமிடுதல்."
      },
      {
        id: "muthal-padam",
        num: 5,
        letter: "5",
        title: "முதல் படம் போல் உள்ளதை வட்டமிடுவோம்",
        subTitle: "முதல் படத்தோடு ஒப்பிட்டு ஒரே மாதிரியானதைக் கண்டறிதல்",
        category: "ஒற்றுமை அறிதல்",
        badge: "பகுதி 5",
        description: "முதலில் கொடுக்கப்பட்ட படத்தைப் போன்றே உள்ள சரியான படத்தை வட்டமிடுதல்."
      },
      {
        id: "poruthamaanathai",
        num: 6,
        letter: "6",
        title: "பொருத்தமானதைக் குழுவுடன் சேர்ப்போம்",
        subTitle: "குழுவின் தன்மையை அறிந்து பொருத்தமானதை இணைப்போம்",
        category: "வகைப்படுத்துதல்",
        badge: "பகுதி 6",
        description: "கொடுக்கப்பட்ட குழுவுடன் பொருந்துகின்ற சரியான படத்தைத் தேர்ந்தெடுத்து வட்டமிடுதல்."
      },
      {
        id: "nigalvai",
        num: 7,
        letter: "7",
        title: "நிகழ்வைச் சொல்வோம்",
        subTitle: "படங்களின் வரிசையை அறிந்து கதை கூறுவோம்",
        category: "வரிசைப்படுத்துதல் & கதை",
        badge: "பகுதி 7",
        description: "படங்களை முறைப்படி வரிசைப்படுத்தி நிகழ்வை அழகாகக் கதையாகக் கூறுதல்."
      },
      {
        id: "peyarai",
        num: 8,
        letter: "8",
        title: "பெயரைச் சொல்வோம்",
        subTitle: "படங்களைப் பார்த்து பெயர் சொல்வோம்",
        category: "பெயர் அறிதல்",
        badge: "பகுதி 8",
        description: "கொடுக்கப்பட்ட படங்களைப் பார்த்து அவற்றின் பெயரை அறிந்து சொல்லுதல்."
      },
      {
        id: "vaanga-ennodu",
        num: 9,
        letter: "9",
        title: "வாங்க என்னோடு",
        subTitle: "கோடுகளின் வழியே விரல் வரைந்து பழகுவோம்",
        category: "வரிவடிவம் அறிதல்",
        badge: "பகுதி 9",
        description: "புள்ளிக் கோடுகளின் மீது விரலால் வரைந்து பூச்சிகளைச் சென்றடைதல்."
      },
      {
        id: "vidubattadhai",
        num: 10,
        letter: "10",
        title: "விடுபட்டதை வரைவேன்",
        subTitle: "விடுபட்ட பகுதிகளை வரைந்து முழுமையாக்குவோம்",
        category: "வரைதல்",
        badge: "பகுதி 10",
        description: "படங்களில் விடுபட்ட உறுப்புகளை வரைந்து படத்தை முழுமையாக்குதல்."
      },
      {
        id: "padathirkum-ezhuthirkum",
        num: 11,
        letter: "11",
        title: "படத்திற்கும் உரிய எழுத்திற்கும் வண்ணமிடுவோம்",
        subTitle: "படத்திற்கும் அதன் முதல் எழுத்திற்கும் வண்ணமிட்டு மகிழ்வோம்",
        category: "எழுத்து அறிதல்",
        badge: "பகுதி 11",
        description: "படத்தைப் பார்த்து சரியான முதல் எழுத்தைத் தேர்ந்தெடுத்து வண்ணமிடுதல்."
      },
      {
        id: "ezhuthai-inaippom",
        num: 12,
        letter: "12",
        title: "எழுத்தை உரிய படத்தோடு இணைப்போம்",
        subTitle: "எழுத்தில் தொடங்கும் படங்களை இணைத்து மகிழ்வோம்",
        category: "எழுத்து இணைத்தல்",
        badge: "பகுதி 12",
        description: "நடுவில் உள்ள எழுத்தில் தொடங்கும் படங்களை இணைத்து அறிதல்."
      },
      {
        id: "nirappuven",
        num: 13,
        letter: "13",
        title: "நிரப்புவேன்",
        subTitle: "விடுபட்ட எழுத்தை நிரப்புவோம்",
        category: "எழுத்து அறிதல்",
        badge: "பகுதி 13",
        description: "படத்திற்குரிய சொல்லின் முதல் எழுத்தை இழுத்துப் பொருத்திச் சொல்லை நிறைவு செய்தல்."
      },
      {
        id: "inaippen-ezhuthuven",
        num: 14,
        letter: "14",
        title: "படத்திற்கு உரிய முதல் எழுத்தை இணைப்பேன்; எழுதுவேன்",
        subTitle: "படத்திற்குரிய முதல் எழுத்தைத் தேர்ந்தெடுத்து எழுதுவோம்",
        category: "எழுத்து இணைத்தல் & எழுதுதல்",
        badge: "பகுதி 14",
        description: "படத்திற்குரிய முதல் எழுத்தைத் தேர்ந்தெடுத்துப் பெட்டியில் எழுதி மகிழ்தல்."
      },
      {
        id: "ezhuthukkalai-arivom",
        num: 15,
        letter: "15",
        title: "எழுத்துக்களை அறிவோம்",
        subTitle: "படங்களைப் பார்த்து எழுத்துக்களை அறிந்து கொள்வோம்",
        category: "எழுத்து அறிதல்",
        badge: "பகுதி 14",
        description: "மெய்யெழுத்துக்கள் (க், ச், ட், த், ப், ற்) அடங்கிய படங்களைப் பார்த்து ஒலி கேட்டு எழுத்துக்களை அறிதல்."
      },
      {
        id: "ezhuthi-pazhaguven",
        num: 16,
        letter: "16",
        title: "எழுதிப் பழகுவேன்",
        subTitle: "உயிரெழுத்துக்களையும் ஆய்த எழுத்தையும் புள்ளிகளின் மீது எழுதிப் பழகுவோம்",
        category: "எழுதுதல்",
        badge: "பகுதி 15",
        description: "அ, ஆ, இ, ஈ, உ, ஊ, எ, ஏ, ஐ, ஒ, ஓ, ஔ, ஃ ஆகிய தமிழ் எழுத்துக்களைப் புள்ளிகளின் வழியே எழுதிப் பழகுதல்."
      }
    ];
  }

  // Fallback for other units
  return [];
};

export const getClass1TamilTopicContent = (unitNum = 1, topicId = "kattukulle") => {
  if (topicId === "aalamarathula") {
    return {
      id: "aalamarathula",
      title: "ஆலமரத்துல விளையாட்டு",
      subTitle: "பாடல் (பாடி மகிழ்வோம்)",
      category: "பாடல்",
      songLines: [
        { stanza: 1, lines: ["ஆல மரத்துல விளையாட்டு", "அணிலே அணிலே கைத்தட்டு!"] },
        { stanza: 2, lines: ["குக்கூ குக்கூ குயில்பாட்டு", "கொஞ்சும் கிளியே தலையாட்டு!"] },
        { stanza: 3, lines: ["குட்டி குரங்கே வால் ஆட்டு", "குள்ள நரியே தாலாட்டு!"] },
        { stanza: 4, lines: ["சின்ன முயலே மேளம்கொட்டு", "சிங்கக் குட்டியே தாளம்போடு!"] },
        { stanza: 5, lines: ["எல்லாரும் தான் ஆடிக்கிட்டு", "ஏலேலோ பாடிக்கிட்டு"] },
        { stanza: 6, lines: ["ஒன்றாய் சேர்ந்து வாழலாம்", "உலகம் முழுதும் வெல்லலாம்!"] }
      ],
      fullPoemText: `ஆல மரத்துல விளையாட்டு
அணிலே அணிலே கைத்தட்டு!
குக்கூ குக்கூ குயில்பாட்டு
கொஞ்சும் கிளியே தலையாட்டு!
குட்டி குரங்கே வால் ஆட்டு
குள்ள நரியே தாலாட்டு!
சின்ன முயலே மேளம்கொட்டு
சிங்கக் குட்டியே தாளம்போடு!
எல்லாரும் தான் ஆடிக்கிட்டு
ஏலேலோ பாடிக்கிட்டு
ஒன்றாய் சேர்ந்து வாழலாம்
உலகம் முழுதும் வெல்லலாம்!`,
      characters: [
        { name: "அணில்", action: "கைத்தட்டு", icon: "🐿️" },
        { name: "குயில்", action: "குக்கூ பாட்டு", icon: "🐦" },
        { name: "கிளி", action: "தலையாட்டு", icon: "🦜" },
        { name: "குரங்கு", action: "வால் ஆட்டு", icon: "🐒" },
        { name: "நரி", action: "தாலாட்டு", icon: "🦊" },
        { name: "முயல்", action: "மேளம் கொட்டு", icon: "🐇" },
        { name: "சிங்கம்", action: "தாளம் போடு", icon: "🦁" }
      ],
      questions: [
        {
          q: "ஆலமரத்துல கைத்தட்டியது யார்?",
          options: ["அணில்", "குரங்கு", "நரி", "சிங்கம்"],
          answer: 0,
          explanation: "'அணிலே அணிலே கைத்தட்டு' என்று பாடல் கூறுகிறது."
        },
        {
          q: "குக்கூ குக்கூ என்று பாடியது யார்?",
          options: ["கிளி", "குயில்", "முயல்", "அணில்"],
          answer: 1,
          explanation: "'குக்கூ குக்கூ குயில்பாட்டு' என்று பாடல் கூறுகிறது."
        },
        {
          q: "மேளம் கொட்டியது யார்?",
          options: ["சின்ன முயல்", "குள்ள நரி", "குட்டி குரங்கு", "கிளி"],
          answer: 0,
          explanation: "'சின்ன முயலே மேளம்கொட்டு' என்று பாடல் கூறுகிறது."
        }
      ]
    };
  }

  if (topicId === "ilaiyum-kaayum") {
    return {
      id: "ilaiyum-kaayum",
      title: "இலையும்... காயும்...",
      subTitle: "படத்தைப் பார்த்துக் கதை கூறி மகிழ்வோம்",
      category: "கதை கூறி மகிழ்வோம்",
      intro: "மரங்களின் இலைகள், காய்கள், பழங்கள், விதைகளைக் கொண்டு விதவிதமான பறவைகள், விலங்குகள் உருவங்கள் செய்து கதை கூறி மகிழ்வோம்.",
      creations: [
        {
          title: "இலைகளால் ஆன எலி",
          desc: "ஆலமர இலையால் உடல், சிறிய இலைகளால் காதுகள், மெல்லிய காம்பினால் வால் அமைத்து செய்யப்பட்ட குட்டி எலி.",
          icon: "🐭"
        },
        {
          title: "காய்களால் ஆன பறவை",
          desc: "கத்தரிக்காய் மற்றும் வெண்டைக்காய் விதைகளால் அழகிய பறவை உருவம் செய்து மகிழ்தல்.",
          icon: "🕊️"
        },
        {
          title: "இலைகளால் ஆன மீன்",
          desc: "நீள்வட்ட இலைகளால் துடுப்புகளும் வாலும் அமைத்து நீரில் நீந்தும் மீன் வடிவம் உருவாக்குதல்.",
          icon: "🐟"
        }
      ],
      activitySteps: [
        "1. தோட்டத்திலோ பூங்காவிலோ கீழே உதிர்ந்த இலைகளைச் சேகரியுங்கள்.",
        "2. பல்வேறு காய்கறித் துண்டுகளைப் பெரியவர்கள் உதவியுடன் தயார் செய்யுங்கள்.",
        "3. வெள்ளைத் தாளில் இலைகளை அடுக்கிப் பறவை, விலங்கு உருவங்களை உருவாக்குங்கள்.",
        "4. உங்கள் உருவங்களுக்குப் பெயரிட்டு வகுப்பறையில் கதை கூறிக் காட்டுங்கள்!"
      ],
      questions: [
        {
          q: "இலைகளைக் கொண்டு எந்தெந்த உருவங்கள் செய்யலாம்?",
          options: ["விலங்குகள், பறவைகள், பூச்சிகள்", "கல் மட்டும்", "இரும்பு மட்டும்", "ஒன்றுமில்லை"],
          answer: 0,
          explanation: "பல்வேறு இலை வடிவங்களைக் கொண்டு விலங்குகள் மற்றும் பறவைகள் செய்யலாம்."
        },
        {
          q: "கதை கூறி மகிழ்வோம் செயல்பாட்டின் நோக்கம் என்ன?",
          options: ["படைப்பாற்றல் & பேச்சுத்திறன் வளர்த்தல்", "அமைதியாக இருத்தல்", "தூங்குதல்", "பார்க்காமல் இருத்தல்"],
          answer: 0,
          explanation: "படத்தைப் பார்த்துக் கதை கூறுவது கற்பனைத் திறனையும் பேசும் ஆற்றலையும் வளர்க்கும்."
        }
      ]
    };
  }

  if (topicId === "verupattathai") {
    return {
      id: "verupattathai",
      title: "வேறுபட்டதை வட்டமிடுவோம்",
      subTitle: "கூர்ந்து கவனித்து வேறுபட்டதைக் கண்டறிவோம்",
      category: "கூர்ந்து கவனித்தல்",
      intro: "ஒவ்வொரு வரிசையிலும் உள்ள படங்களை உற்று நோக்குங்கள். மற்றவற்றிலிருந்து மாறுபட்ட சரியான படத்தைக் கிளிக் செய்து வட்டமிடுங்கள்.",
      exercises: [
        {
          id: "v1",
          question: "வரிசை 1: வேறுபட்ட பறவையை வட்டமிடுக",
          rowBg: "bg-purple-50/60 border-purple-200/70",
          items: [
            { name: "பறவை 1", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Bird.png" },
            { name: "பறவை 2", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Different_Bird.png", isOdd: true },
            { name: "பறவை 3", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Bird.png" },
            { name: "பறவை 4", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Bird.png" }
          ],
          correctIdx: 1,
          reason: "இரண்டாவது பறவை மட்டும் வேறு திசையில் பறக்கிறது!"
        },
        {
          id: "v2",
          question: "வரிசை 2: வேறுபட்ட குச்சி ஐஸை வட்டமிடுக",
          rowBg: "bg-cyan-50/60 border-cyan-200/70",
          items: [
            { name: "குச்சி ஐஸ் 1", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Ice.png" },
            { name: "குச்சி ஐஸ் 2", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Ice.png" },
            { name: "குச்சி ஐஸ் 3", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Ice.png" },
            { name: "குச்சி ஐஸ் 4", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Different_Ice.png", isOdd: true }
          ],
          correctIdx: 3,
          reason: "நான்காவது ஐஸ் மற்றவற்றிலிருந்து வேறுபட்ட நிறத்தில் உள்ளது!"
        },
        {
          id: "v3",
          question: "வரிசை 3: வேறுபட்ட கரடியை வட்டமிடுக",
          rowBg: "bg-orange-50/60 border-orange-200/70",
          items: [
            { name: "கரடி 1", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Bear.png" },
            { name: "கரடி 2", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Bear.png" },
            { name: "கரடி 3", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Different_Bear.png", isOdd: true },
            { name: "கரடி 4", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Bear.png" }
          ],
          correctIdx: 2,
          reason: "மூன்றாவது கரடி மட்டும் தோற்றத்தில் மாறுபட்டு நிற்கிறது!"
        }
      ]
    };
  }

  if (topicId === "muthal-padam") {
    return {
      id: "muthal-padam",
      title: "முதல் படம் போல் உள்ளதை வட்டமிடுவோம்",
      subTitle: "முதல் படத்தோடு ஒப்பிட்டு ஒரே மாதிரியானதைக் கண்டறிதல்",
      category: "ஒற்றுமை அறிதல்",
      intro: "இடதுபுறம் உள்ள முதல் படத்தைப் பாருங்கள். வலதுபுறத்தில் முதல் படம் போன்றே உள்ள சரியான படத்தைக் கிளிக் செய்து வட்டமிடுங்கள்.",
      exercises: [
        {
          id: "m1",
          question: "வரிசை 1: முதல் படம் போல் உள்ள கம்பளிப்பூச்சியை வட்டமிடுக",
          target: { name: "மாதிரிப் பூச்சி", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Caterpillar.png" },
          options: [
            { name: "படம் 1", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Different_Caterpillar.png" },
            { name: "படம் 2", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Caterpillar.png", isMatch: true },
            { name: "படம் 3", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Different_Caterpillar.png" },
            { name: "படம் 4", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Different_Caterpillar.png" }
          ],
          correctIdx: 1,
          reason: "இரண்டாவது பூச்சி முதல் படம் போன்றே சரியாக உள்ளது!"
        },
        {
          id: "m2",
          question: "வரிசை 2: முதல் படம் போல் உள்ள கோமாளியை வட்டமிடுக",
          target: { name: "மாதிரிக் கோமாளி", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Clown.png" },
          options: [
            { name: "படம் 1", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Different_Clown.png" },
            { name: "படம் 2", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Clown.png", isMatch: true },
            { name: "படம் 3", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Different_Clown.png" },
            { name: "படம் 4", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Different_Clown.png" }
          ],
          correctIdx: 1,
          reason: "இரண்டாவது கோமாளி முதல் படம் போன்றே உள்ளது!"
        },
        {
          id: "m3",
          question: "வரிசை 3: முதல் படம் போல் உள்ள தவளையை வட்டமிடுக",
          target: { name: "மாதிரித் தவளை", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Frog.png" },
          options: [
            { name: "படம் 1", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Different_Frog.png" },
            { name: "படம் 2", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Frog.png", isMatch: true },
            { name: "படம் 3", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Different_Frog.png" },
            { name: "படம் 4", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/Different_Frog.png" }
          ],
          correctIdx: 1,
          reason: "இரண்டாவது தவளை முதல் தவளை போன்றே சரியாக உள்ளது!"
        }
      ]
    };
  }

  if (topicId === "poruthamaanathai") {
    return {
      id: "poruthamaanathai",
      title: "பொருத்தமானதைக் குழுவுடன் சேர்ப்போம்",
      subTitle: "குழுவின் தன்மையை அறிந்து பொருத்தமானதை இணைப்போம்",
      category: "வகைப்படுத்துதல்",
      intro: "இடதுபுறக் குழுவில் உள்ள படங்களின் பொதுத் தன்மையைப் பாருங்கள். அக்குழுவுடன் சேர வேண்டிய சரியான படத்தைக் கிளிக் செய்து வட்டமிடுங்கள்.",
      exercises: [
        {
          id: "p1",
          groupTitle: "பறவைகள் குழு",
          groupImg: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/group1.png.png",
          question: "இக்குழுவுடன் சேர வேண்டிய பொருத்தமான படத்தை வட்டமிடுக",
          options: [
            { name: "பந்து", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/q1_photo1.png.png" },
            { name: "பொம்மை கரடி", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/q1_photo2.png.png" },
            { name: "ஆந்தை", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/q1_photo3.png.png", isCorrect: true },
            { name: "முயல்", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/q1_photo4.png.png" }
          ],
          correctIdx: 2,
          reason: "ஆந்தை ஒரு பறவை என்பதால் பறவைகள் குழுவுடன் அழகாகப் பொருந்துகிறது!"
        },
        {
          id: "p2",
          groupTitle: "விளையாட்டுப் பொம்மைகள் குழு",
          groupImg: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/group2.png.png",
          question: "இக்குழுவுடன் சேர வேண்டிய பொருத்தமான பொம்மையை வட்டமிடுக",
          options: [
            { name: "லட்டு", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/q2_photo1.png.png" },
            { name: "மிட்டாய்", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/q2_photo2.png.png" },
            { name: "பொம்மை ரயில்", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/q2_photo3.png.png", isCorrect: true },
            { name: "வாழைப்பழம்", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/q2_photo4.png.png" }
          ],
          correctIdx: 2,
          reason: "ரயிலும் ஒரு விளையாட்டுப் பொம்மை என்பதால் இக்குழுவுடன் சேரும்!"
        },
        {
          id: "p3",
          groupTitle: "படிப்புப் பொருட்கள் குழு",
          groupImg: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/group3.png.png",
          question: "இக்குழுவுடன் சேர வேண்டிய பள்ளிப் பொருளை வட்டமிடுக",
          options: [
            { name: "தண்ணீர் பாட்டில்", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/q3_photo1.png.png" },
            { name: "பென்சில் துருவி", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/q3_photo2.png.png", isCorrect: true },
            { name: "மஞ்சள் பூ", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/q3_photo3.png.png" },
            { name: "காலணிகள்", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/q3_photo4.png.png" }
          ],
          correctIdx: 1,
          reason: "பென்சில் துருவி படிப்புப் பொருள் என்பதால் இக்குழுவுடன் சேரும்!"
        }
      ]
    };
  }

  if (topicId === "peyarai") {
    return {
      id: "peyarai",
      title: "பெயரைச் சொல்வோம்",
      subTitle: "படங்களைப் பார்த்து பெயர் சொல்வோம்",
      category: "பெயர் அறிதல்",
      intro: "கீழே உள்ள படங்களை உற்று நோக்கி, ஒவ்வொரு படத்தின் பெயரை அழகாகச் சொல்லுங்கள்.",
      items: [
        { name: "குடை", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/umbrella.png.png", audio: "/audio/tamil_class1/umbrella.mp3.mp3" },
        { name: "பாகற்காய்", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/bitter_gourd.png.png", audio: "/audio/tamil_class1/bitter_gourd.mp3.mp3" },
        { name: "கல்", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/stone.png.png", audio: "/audio/tamil_class1/stone.mp3.mp3" },
        { name: "தவளை", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/frog.png.png", audio: "/audio/tamil_class1/frog.mp3.mp3" },
        { name: "இலை", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/leaf.png.png", audio: "/audio/tamil_class1/leaf.mp3.mp3" },
        { name: "முட்டை", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/eggs.png.png", audio: "/audio/tamil_class1/eggs.mp3.mp3" },
        { name: "தலையணை", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/pillow.png.png", audio: "/audio/tamil_class1/pillow.mp3.mp3" },
        { name: "உருளைக்கிழங்கு", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/potato.png.png", audio: "/audio/tamil_class1/potato.mp3.mp3" },
        { name: "குடம்", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/pot.png.png", audio: "/audio/tamil_class1/pot.mp3.mp3" },
        { name: "இளநீர்", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/coconut.png.png", audio: "/audio/tamil_class1/coconut.mp3.mp3" },
        { name: "யானை", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/elephant.png.png", audio: "/audio/tamil_class1/elephant.mp3.mp3" },
        { name: "பை", img: "https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/bag.png.png", audio: "/audio/tamil_class1/bag.mp3.mp3" }
      ]
    };
  }

  if (topicId === "vaanga-ennodu") {
    return {
      id: "vaanga-ennodu",
      title: "வாங்க என்னோடு",
      subTitle: "கோடுகளின் வழியே விரல் வரைந்து பழகுவோம்",
      category: "வரிவடிவம் அறிதல்",
      intro: "சிவப்பு முக்கோணக் குறியீட்டில் விரலை வைத்து, புள்ளிக் கோட்டின் வழியே விரலை நகர்த்திப் பூச்சியைச் சென்றடையுங்கள்."
    };
  }

  if (topicId === "nigalvai") {
    return {
      id: "nigalvai",
      title: "நிகழ்வைச் சொல்வோம்",
      subTitle: "படங்களின் வரிசையை அறிந்து கதை கூறுவோம்",
      category: "வரிசைப்படுத்துதல் & கதை",
      intro: "படங்களை உற்று நோக்கி, எது முதலில் நடக்கும், எது அடுத்து நடக்கும் என்று வரிசைப்படுத்தி கதையாகக் கூறுங்கள்.",
      stories: [
        {
          id: "s1",
          title: "விதை முளைத்துச் செடியாகும் கதை",
          steps: [
            { num: 1, title: "விதை நடுதல்", desc: "மண்ணைத் தோண்டி விதையை நடுதல்.", icon: "🌱" },
            { num: 2, title: "நீர் ஊற்றுதல்", desc: "விதைக்குத் தினமும் நீர் ஊற்றிப் பராமரித்தல்.", icon: "💧" },
            { num: 3, title: "துளிர் விடுதல்", desc: "விதையிலிருந்து சிறிய பச்சைப் புதுத்தளிர் தோன்றுதல்.", icon: "🌿" },
            { num: 4, title: "பூத்துப் பூரித்தல்", desc: "செடி நன்கு வளர்ந்து அழகிய பூக்களையும் பழங்களையும் தருதல்.", icon: "🌸" }
          ]
        },
        {
          id: "s2",
          title: "பறவைக் குஞ்சு பொரிக்கும் கதை",
          steps: [
            { num: 1, title: "கூடு கட்டுதல்", desc: "மரக்கிளையில் பறவை அழகாகக் கூடுகட்டுகிறது.", icon: "🪹" },
            { num: 2, title: "முட்டையிடுதல்", desc: "கூட்டில் முட்டையிட்டுப் பாதுகாப்பாக அடைகாக்குகிறது.", icon: "🥚" },
            { num: 3, title: "குஞ்சு பொரித்தல்", desc: "முட்டை உடைந்து சின்னஞ்சிறு குஞ்சு வெளியே வருகிறது.", icon: "🐣" },
            { num: 4, title: "பறக்கப் பழகுதல்", desc: "தாய்ப்பறவை இரை கொடுக்க, சிறகடித்து வானில் பறக்கிறது.", icon: "🕊️" }
          ]
        }
      ]
    };
  }

  if (topicId === "vidubattadhai") {
    return {
      id: "vidubattadhai",
      title: "விடுபட்டதை வரைவேன்",
      subTitle: "விடுபட்ட பகுதிகளை வரைந்து முழுமையாக்குவோம்",
      category: "வரைதல்",
      intro: "மேலே உள்ள முழுமையான படத்தைப் பார்த்து, கீழே உள்ள படங்களில் விடுபட்ட உறுப்புகளை வரைந்து முழுமையாக்குங்கள்."
    };
  }

  if (topicId === "padathirkum-ezhuthirkum") {
    return {
      id: "padathirkum-ezhuthirkum",
      title: "படத்திற்கும் உரிய எழுத்திற்கும் வண்ணமிடுவோம்",
      subTitle: "படத்திற்கும் அதன் முதல் எழுத்திற்கும் வண்ணமிட்டு மகிழ்வோம்",
      category: "எழுத்து அறிதல்",
      intro: "படத்தைப் பார்த்து சரியான முதல் எழுத்தைத் தேர்ந்தெடுத்து வண்ணமிட்டு மகிழுங்கள்."
    };
  }

  if (topicId === "ezhuthai-inaippom") {
    return {
      id: "ezhuthai-inaippom",
      title: "எழுத்தை உரிய படத்தோடு இணைப்போம்",
      subTitle: "எழுத்தில் தொடங்கும் படங்களை இணைத்து மகிழ்வோம்",
      category: "எழுத்து இணைத்தல்",
      intro: "நடுவில் உள்ள எழுத்தில் தொடங்கும் படங்களை இணைத்து மகிழுங்கள்."
    };
  }

  if (topicId === "nirappuven") {
    return {
      id: "nirappuven",
      title: "நிரப்புவேன்",
      subTitle: "விடுபட்ட எழுத்தை நிரப்புவோம்",
      category: "எழுத்து அறிதல்",
      intro: "படத்தைப் பார்த்து விடுபட்ட சரியான எழுத்தை இழுத்துப் பொருத்திச் சொல்லை நிறைவு செய்யுங்கள்."
    };
  }

  if (topicId === "inaippen-ezhuthuven") {
    return {
      id: "inaippen-ezhuthuven",
      title: "படத்திற்கு உரிய முதல் எழுத்தை இணைப்பேன்; எழுதுவேன்",
      subTitle: "படத்திற்குரிய முதல் எழுத்தைத் தேர்ந்தெடுத்து எழுதுவோம்",
      category: "எழுத்து இணைத்தல் & எழுதுதல்",
      intro: "படத்திற்குரிய முதல் எழுத்தைத் தேர்ந்தெடுத்துப் பெட்டியில் எழுதி மகிழுங்கள்."
    };
  }

  if (topicId === "ezhuthukkalai-arivom") {
    return {
      id: "ezhuthukkalai-arivom",
      title: "எழுத்துக்களை அறிவோம்",
      subTitle: "படங்களைப் பார்த்து எழுத்துக்களை அறிந்து கொள்வோம்",
      category: "எழுத்து அறிதல்",
      intro: "மெய்யெழுத்துக்கள் (க், ச், ட், த், ப், ற்) அடங்கிய படங்களைப் பார்த்து ஒலி கேட்டு எழுத்துக்களை அறிவோம்."
    };
  }

  if (topicId === "ezhuthi-pazhaguven") {
    return {
      id: "ezhuthi-pazhaguven",
      title: "எழுதிப் பழகுவேன்",
      subTitle: "உயிரெழுத்துக்களையும் ஆய்த எழுத்தையும் புள்ளிகளின் மீது எழுதிப் பழகுவோம்",
      category: "எழுதுதல்",
      intro: "புள்ளிகளின் மீது விரலால் வரைந்து தமிழ் எழுத்துக்களை எழுதிப் பழகுங்கள்."
    };
  }

  // Default: kattukulle
  return {
    id: "kattukulle",
    title: "காட்டுக்குள்ளே கொண்டாட்டம்",
    subTitle: "படப்பார்வை & உரையாடல்",
    category: "கதை & உரையாடல்",
    intro: "அழகிய காட்டில் விலங்குகளும் பறவைகளும் ஒன்றுகூடி ஆடிப் பாடி மகிழ்ச்சியாகக் கொண்டாடுகின்றன.",
    animalsList: [
      { name: "யானை", action: "துதிக்கையால் நீரை வாரி இறைத்து மகிழ்கிறது", icon: "🐘" },
      { name: "குரங்கு", action: "மரக்கிளையில் தாவி ஊஞ்சலாடுகிறது", icon: "🐒" },
      { name: "மான்", action: "துள்ளி ஓடி விளையாடுகிறது", icon: "🦌" },
      { name: "மயில்", action: "தோகை விரித்து ஆடுகிறது", icon: "🦚" },
      { name: "முயல்", action: "மகிழ்ச்சியுடன் துள்ளிக்குதிக்கிறது", icon: "🐇" },
      { name: "கிளி", action: "இனிமையாகப் பேசுகிறது", icon: "🦜" }
    ],
    conversationPoints: [
      "• காட்டில் உள்ள விலங்குகள் என்ன செய்கின்றன என்று உற்று நோக்குங்கள்.",
      "• விலங்குகளின் பெயர்களையும், அவற்றின் செயல்களையும் வகுப்பில் கூறிப் பழகுங்கள்.",
      "• விலங்குகள் தங்களுக்குள் சண்டையிடாமல் ஒற்றுமையாகக் கொண்டாடுவதைப் பாருங்கள்."
    ],
    questions: [
      {
        q: "காட்டுக்குள்ளே விலங்குகள் என்ன செய்கின்றன?",
        options: ["ஒற்றுமையாகக் கொண்டாடுகின்றன", "தூங்குகின்றன", "சண்டையிடுகின்றன", "ஓடி ஒளிகின்றன"],
        answer: 0,
        explanation: "காட்டில் அனைத்து விலங்குகளும் ஒன்றிணைந்து ஆடிப் பாடி மகிழ்ச்சியாகக் கொண்டாடுகின்றன."
      },
      {
        q: "தோகை விரித்து ஆடுவது எது?",
        options: ["மயில்", "யானை", "முயல்", "குரங்கு"],
        answer: 0,
        explanation: "மயில் தன் அழகிய தோகையை விரித்து மகிழ்ச்சியாய் ஆடுகிறது."
      },
      {
        q: "மரக்கிளையில் தாவி விளையாடுவது யார்?",
        options: ["குரங்கு", "மான்", "யானை", "நரி"],
        answer: 0,
        explanation: "குரங்கு மரக்கிளையிலிருந்து மற்றொரு கிளைக்குத் தாவி விளையாடுகிறது."
      }
    ]
  };
};

export default {
  getClass1TamilTopics,
  getClass1TamilTopicContent
};
