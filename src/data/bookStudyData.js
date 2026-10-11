// src/data/bookStudyData.js
import { getMathClass10Chapter1Questions } from "./mathClass10Chapter1Data.js";

export const getBookChapters = (subject = "Mathematics", classNum = 10, term = 1) => {
  const normalized = (subject || "").toLowerCase();

  // Social Science & EVS (Class 1)
  if ((normalized.includes("social") || normalized.includes("evs") || normalized.includes("environmental") || normalized.includes("சூழ்நிலையியல்")) && classNum === 1) {
    const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

    if (termInt === 2) {
      const thickRoseTheme = {
        cardBg: "bg-[#FFE4E6]",
        cardBorder: "border-[#FB7185] border-b-[4px] border-b-[#FB7185]",
        hoverBorder: "hover:border-[#F43F5E] hover:border-b-[#F43F5E]",
        titleColor: "text-[#881337]",
        badgeBorder: "border-[#FB7185]",
        badgeText: "text-[#E11D48]",
        chevronBorder: "border-[#FB7185]",
        chevronText: "text-[#E11D48]",
        chevronBg: "bg-white border border-[#FB7185] text-[#E11D48] shadow-2xs"
      };

      return [
        {
          unit: "Unit 1",
          unitNum: 1,
          title: "Our Delicious Food",
          theme: thickRoseTheme,
          pages: "55 - 68"
        },
        {
          unit: "Unit 2",
          unitNum: 2,
          title: "Water",
          theme: thickRoseTheme,
          pages: "69 - 80"
        },
        {
          unit: "Unit 3",
          unitNum: 3,
          title: "Our Society",
          theme: thickRoseTheme,
          pages: "81 - 96"
        }
      ];
    }

    if (termInt === 3) {
      const evsSkyTheme = {
        cardBg: "bg-[#F0F9FF]",
        cardBorder: "border-[#7DD3FC] border-b-[4px] border-b-[#7DD3FC]",
        hoverBorder: "hover:border-[#38BDF8] hover:border-b-[#38BDF8]",
        titleColor: "text-[#0369A1]",
        badgeBorder: "border-[#7DD3FC]",
        badgeText: "text-[#0284C7]",
        chevronBorder: "border-[#7DD3FC]",
        chevronText: "text-[#0284C7]",
        chevronBg: "bg-white border border-[#7DD3FC] text-[#0284C7] shadow-2xs"
      };

      return [
        {
          unit: "Unit 1",
          unitNum: 1,
          title: "Materials Around Us",
          theme: evsSkyTheme,
          pages: "1 - 18"
        },
        {
          unit: "Unit 2",
          unitNum: 2,
          title: "Our Neighbourhood",
          theme: evsSkyTheme,
          pages: "19 - 36"
        },
        {
          unit: "Unit 3",
          unitNum: 3,
          title: "Transport",
          theme: evsSkyTheme,
          pages: "37 - 52"
        },
        {
          unit: "Unit 4",
          unitNum: 4,
          title: "Day and Night",
          theme: evsSkyTheme,
          pages: "53 - 68"
        },
        {
          unit: "Unit 5",
          unitNum: 5,
          title: "Science in Everyday Life",
          theme: evsSkyTheme,
          pages: "69 - 86"
        }
      ];
    }

    const purpleTheme = {
      cardBg: "bg-[#F3E8FF]",
      cardBorder: "border-[#C084FC] border-b-[4px] border-b-[#C084FC]",
      hoverBorder: "hover:border-[#A855F7] hover:border-b-[#A855F7]",
      titleColor: "text-[#581C87]",
      badgeBorder: "border-[#C084FC]",
      badgeText: "text-[#7E22CE]",
      chevronBorder: "border-[#C084FC]",
      chevronText: "text-[#7E22CE]"
    };

    return [
      {
        unit: "Unit 1",
        unitNum: 1,
        title: "Living and Non-living Things",
        theme: purpleTheme,
        pages: "65 - 74"
      },
      {
        unit: "Unit 2",
        unitNum: 2,
        title: "My Wonderful Body",
        theme: purpleTheme,
        pages: "75 - 88"
      },
      {
        unit: "Unit 3",
        unitNum: 3,
        title: "Nature's Bounty",
        theme: purpleTheme,
        pages: "89 - 102"
      },
      {
        unit: "Unit 4",
        unitNum: 4,
        title: "Animals Around Us",
        theme: purpleTheme,
        pages: "103 - 116"
      }
    ];
  }

  // EVS (Class 2 & other classes)
  if (normalized.includes("evs") || normalized.includes("environmental") || normalized.includes("சூழ்நிலையியல்")) {
    if (classNum === 2) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        const evsSkyTheme = {
          cardBg: "bg-[#F0F9FF]",
          cardBorder: "border-[#7DD3FC] border-b-[4px] border-b-[#7DD3FC]",
          hoverBorder: "hover:border-[#38BDF8] hover:border-b-[#38BDF8]",
          titleColor: "text-[#0369A1]",
          badgeBorder: "border-[#7DD3FC]",
          badgeText: "text-[#0284C7]",
          chevronBorder: "border-[#7DD3FC]",
          chevronText: "text-[#0284C7]",
          chevronBg: "bg-white border border-[#7DD3FC] text-[#0284C7] shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Our Environment",
            theme: evsSkyTheme,
            pages: "1 - 18"
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "My Amazing Body",
            theme: evsSkyTheme,
            pages: "19 - 36"
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Plants Around Us",
            theme: evsSkyTheme,
            pages: "37 - 52"
          },
          {
            unit: "Unit 4",
            unitNum: 4,
            title: "Animals Around Us",
            theme: evsSkyTheme,
            pages: "53 - 70"
          }
        ];
      }

      if (termInt === 2) {
        const evsWoodTheme = {
          cardBg: "bg-[#FEF3C7]",
          cardBorder: "border-[#FCD34D] border-b-[4px] border-b-[#FCD34D]",
          hoverBorder: "hover:border-[#F59E0B] hover:border-b-[#F59E0B]",
          titleColor: "text-[#78350F]",
          badgeBorder: "border-[#FCD34D]",
          badgeText: "text-[#D97706]",
          chevronBorder: "border-[#FCD34D]",
          chevronText: "text-[#D97706]",
          chevronBg: "bg-white border border-[#FCD34D] text-[#D97706] shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Food and Health",
            theme: evsWoodTheme,
            pages: "1 - 18"
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Water",
            theme: evsWoodTheme,
            pages: "19 - 36"
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Our Society",
            theme: evsWoodTheme,
            pages: "37 - 52"
          },
          {
            unit: "Unit 4",
            unitNum: 4,
            title: "The Pancha Bhutas",
            theme: evsWoodTheme,
            pages: "53 - 70"
          }
        ];
      }

      if (termInt === 3) {
        const evsPinkTheme = {
          cardBg: "bg-[#FFF1F2]",
          cardBorder: "border-[#FDA4AF] border-b-[4px] border-b-[#FDA4AF]",
          hoverBorder: "hover:border-[#FB7185] hover:border-b-[#FB7185]",
          titleColor: "text-[#9F1239]",
          badgeBorder: "border-[#FDA4AF]",
          badgeText: "text-[#E11D48]",
          chevronBorder: "border-[#FDA4AF]",
          chevronText: "text-[#E11D48]",
          chevronBg: "bg-white border border-[#FDA4AF] text-[#E11D48] shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Materials Around Us",
            theme: evsPinkTheme,
            pages: "1 - 18"
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "My Beloved Motherland",
            theme: evsPinkTheme,
            pages: "19 - 36"
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Shakthi’s Journey",
            theme: evsPinkTheme,
            pages: "37 - 52"
          },
          {
            unit: "Unit 4",
            unitNum: 4,
            title: "Day and Night",
            theme: evsPinkTheme,
            pages: "53 - 68"
          },
          {
            unit: "Unit 5",
            unitNum: 5,
            title: "Wonders of Nature",
            theme: evsPinkTheme,
            pages: "69 - 86"
          }
        ];
      }
    }
    const evsTheme = {
      accent: "#0D9488",
      badgeBg: "bg-slate-900",
      badgeText: "text-white",
      titleColor: "text-[#0D9488]",
      cardBg: "bg-[#F0FDFA]",
      cardBorder: "border-[#5EEAD4] border-b-[4px] border-b-[#5EEAD4]",
      hoverBorder: "hover:border-[#2DD4BF] hover:border-b-[#2DD4BF]",
      labelColor: "text-[#0D9488]",
      chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
    };

    return [
      {
        unit: "அலகு 1",
        unitNum: 1,
        title: "நமது சுற்றுச்சூழல் (Our Environment)",
        themeName: "சுற்றுச்சூழல்",
        theme: evsTheme,
        pages: "1 - 25",
        topics: 4,
        subtopics: [
          { title: "இயற்கை சூழல்", hasAsterisk: false, type: "பாடம்" },
          { title: "உயிருள்ளவை மற்றும் உயிரற்றவை", hasAsterisk: false, type: "பாடம்" },
          { title: "நீர் நிலைகள் & தாவரங்கள்", hasAsterisk: false, type: "பாடம்" },
          { title: "மதிப்பீடு & செயல்பாடுகள்", hasAsterisk: false, type: "பயிற்சி" }
        ]
      },
      {
        unit: "அலகு 2",
        unitNum: 2,
        title: "எனது அருமை உடல் (My Body & Health)",
        themeName: "நல்வாழ்வு",
        theme: evsTheme,
        pages: "26 - 48",
        topics: 4,
        subtopics: [
          { title: "உடல் உறுப்புகள் & தூய்மை", hasAsterisk: false, type: "பாடம்" },
          { title: "ஐம்புலன்கள்", hasAsterisk: false, type: "பாடம்" },
          { title: "ஆரோக்கிய உணவுகள்", hasAsterisk: false, type: "பாடம்" },
          { title: "பாதுகாப்பு & உடற்பயிற்சி", hasAsterisk: false, type: "பயிற்சி" }
        ]
      },
      {
        unit: "அலகு 3",
        unitNum: 3,
        title: "நம்மைச் சுற்றியுள்ள உலகம் (World Around Us)",
        themeName: "சமூகம் & இயற்கை",
        theme: evsTheme,
        pages: "49 - 72",
        topics: 4,
        subtopics: [
          { title: "விலங்குகளின் உலகம்", hasAsterisk: false, type: "பாடம்" },
          { title: "பறவைகள் & பூச்சிகள்", hasAsterisk: false, type: "பாடம்" },
          { title: "போக்குவரத்து & உதவிகள்", hasAsterisk: false, type: "பாடம்" },
          { title: "பயிற்சிகள் & வினா-விடை", hasAsterisk: false, type: "பயிற்சி" }
        ]
      }
    ];
  }

  // Combined book: Tamil & English (Classes 1 to 7)
  if (normalized.includes("tamil") && normalized.includes("english")) {
    const combinedTheme = {
      accent: "#EA580C",
      badgeBg: "bg-slate-900",
      badgeText: "text-white",
      titleColor: "text-[#EA580C]",
      cardBg: "bg-[#FFF7ED]",
      cardBorder: "border-[#FDBA74] border-b-[4px] border-b-[#FDBA74]",
      hoverBorder: "hover:border-[#FB923C] hover:border-b-[#FB923C]",
      labelColor: "text-[#EA580C]",
      chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
    };

    return [
      {
        unit: "பகுதி 1",
        unitNum: 1,
        title: "தமிழ் (Tamil)",
        themeName: "மொழிப் பாடம்",
        theme: combinedTheme,
        pages: "1 - 40",
        topics: 4,
        subtopics: [
          { title: "பாடல் / செய்யுள்", hasAsterisk: true, type: "செய்யுள்" },
          { title: "உரைநடைப் பகுதி", hasAsterisk: false, type: "உரைநடை" },
          { title: "கதை / துணைப்பாடம்", hasAsterisk: false, type: "துணைப்பாடம்" },
          { title: "இலக்கணம் & மொழித்திறன்", hasAsterisk: false, type: "இலக்கணம்" }
        ]
      },
      {
        unit: "Part 2",
        unitNum: 2,
        title: "English",
        themeName: "Language",
        theme: combinedTheme,
        pages: "41 - 80",
        topics: 3,
        subtopics: [
          { title: "Prose / Reading", hasAsterisk: false, type: "Prose" },
          { title: "Poem / Rhyme", hasAsterisk: true, type: "Poem" },
          { title: "Vocabulary & Grammar", hasAsterisk: false, type: "Grammar" }
        ]
      }
    ];
  }

  // Combined book: Mathematics & EVS (Class 1)
  if (normalized.includes("math") && normalized.includes("evs")) {
    const combinedTheme = {
      accent: "#0D9488",
      badgeBg: "bg-slate-900",
      badgeText: "text-white",
      titleColor: "text-[#0D9488]",
      cardBg: "bg-[#F0FDFA]",
      cardBorder: "border-[#5EEAD4] border-b-[4px] border-b-[#5EEAD4]",
      hoverBorder: "hover:border-[#2DD4BF] hover:border-b-[#2DD4BF]",
      labelColor: "text-[#0D9488]",
      chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
    };

    return [
      {
        unit: "பகுதி 1",
        unitNum: 1,
        title: "கணிதம் (Mathematics)",
        themeName: "எண்கள் & வடிவியல்",
        theme: combinedTheme,
        pages: "1 - 50",
        topics: 3,
        subtopics: [
          { title: "வடிவியல் (Geometry)", hasAsterisk: false, type: "கணிதம்" },
          { title: "எண்கள் (Numbers)", hasAsterisk: false, type: "கணிதம்" },
          { title: "அளவைகள் & அமைப்புகள்", hasAsterisk: false, type: "கணிதம்" }
        ]
      },
      {
        unit: "பகுதி 2",
        unitNum: 2,
        title: "சூழ்நிலையியல் (EVS)",
        themeName: "சுற்றுச்சூழல்",
        theme: combinedTheme,
        pages: "51 - 95",
        topics: 3,
        subtopics: [
          { title: "நமது சுற்றுச்சூழல் (Our Environment)", hasAsterisk: false, type: "சுற்றுச்சூழல்" },
          { title: "எனது உடல் (My Body)", hasAsterisk: false, type: "அறிவியல்" },
          { title: "தாவரங்கள் & விலங்குகள்", hasAsterisk: false, type: "இயற்கை" }
        ]
      }
    ];
  }

  // Combined book: Mathematics, Science & Social Science (Classes 2 to 5)
  if (normalized.includes("math") && (normalized.includes("science") || normalized.includes("social"))) {
    const combinedTheme = {
      accent: "#6366F1",
      badgeBg: "bg-slate-900",
      badgeText: "text-white",
      titleColor: "text-[#6366F1]",
      cardBg: "bg-[#EEF2FF]",
      cardBorder: "border-[#A5B4FC] border-b-[4px] border-b-[#A5B4FC]",
      hoverBorder: "hover:border-[#818CF8] hover:border-b-[#818CF8]",
      labelColor: "text-[#6366F1]",
      chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
    };

    return [
      {
        unit: "பகுதி 1",
        unitNum: 1,
        title: "கணிதம் (Mathematics)",
        themeName: "Mathematics",
        theme: combinedTheme,
        pages: "1 - 45",
        topics: 3,
        subtopics: [
          { title: "வடிவியல் & எண்கள் (Geometry & Numbers)", hasAsterisk: false, type: "கணிதம்" },
          { title: "அமைப்புகள் & அளவைகள்", hasAsterisk: false, type: "கணிதம்" },
          { title: "தகவல் செயலாக்கம்", hasAsterisk: false, type: "கணிதம்" }
        ]
      },
      {
        unit: "பகுதி 2",
        unitNum: 2,
        title: "அறிவியல் (Science)",
        themeName: "Science",
        theme: combinedTheme,
        pages: "46 - 85",
        topics: 3,
        subtopics: [
          { title: "அறிவியல் உலகம் & உடல் உறுப்புகள்", hasAsterisk: false, type: "அறிவியல்" },
          { title: "பருப்பொருள்கள் & விசை", hasAsterisk: false, type: "அறிவியல்" },
          { title: "அன்றாட வாழ்வில் அறிவியல்", hasAsterisk: false, type: "அறிவியல்" }
        ]
      },
      {
        unit: "பகுதி 3",
        unitNum: 3,
        title: "சமூக அறிவியல் (Social Science)",
        themeName: "Social Science",
        theme: combinedTheme,
        pages: "86 - 120",
        topics: 3,
        subtopics: [
          { title: "நமது பூமி & அரசமைப்பு", hasAsterisk: false, type: "வரலாறு" },
          { title: "வளங்கள் & போக்குவரத்து", hasAsterisk: false, type: "புவியியல்" },
          { title: "பாதுகாப்பு & குடிமையியல்", hasAsterisk: false, type: "குடிமையியல்" }
        ]
      }
    ];
  }

  // Combined book: Science & Social Science (Classes 6 & 7)
  if ((normalized.includes("&") || normalized.includes("and") || normalized.includes("combined") || normalized.includes("பகுதி")) && normalized.includes("science") && normalized.includes("social")) {
    const combinedTheme = {
      accent: "#059669",
      badgeBg: "bg-slate-900",
      badgeText: "text-white",
      titleColor: "text-[#059669]",
      cardBg: "bg-[#ECFDF5]",
      cardBorder: "border-[#6EE7B7] border-b-[4px] border-b-[#6EE7B7]",
      hoverBorder: "hover:border-[#34D399] hover:border-b-[#34D399]",
      labelColor: "text-[#059669]",
      chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
    };

    return [
      {
        unit: "பகுதி 1",
        unitNum: 1,
        title: "அறிவியல் (Science)",
        themeName: "Science",
        theme: combinedTheme,
        pages: "1 - 65",
        topics: 3,
        subtopics: [
          { title: "அளவீட்டியல் & விசை", hasAsterisk: false, type: "இயற்பியல்" },
          { title: "நம்மைச் சுற்றியுள்ள பருப்பொருள்கள்", hasAsterisk: false, type: "வேதியியல்" },
          { title: "தாவர உலகம் & விலங்குலகம்", hasAsterisk: false, type: "உயிரியல்" }
        ]
      },
      {
        unit: "பகுதி 2",
        unitNum: 2,
        title: "சமூக அறிவியல் (Social Science)",
        themeName: "Social Science",
        theme: combinedTheme,
        pages: "66 - 130",
        topics: 3,
        subtopics: [
          { title: "வரலாறு (History)", hasAsterisk: false, type: "வரலாறு" },
          { title: "புவியியல் (Geography)", hasAsterisk: false, type: "புவியியல்" },
          { title: "குடிமையியல் & பொருளியல்", hasAsterisk: false, type: "குடிமையியல்" }
        ]
      }
    ];
  }

  if (normalized.includes("math")) {
    const mathTheme = {
      accent: "#86198F",
      badgeBg: "bg-slate-900",
      badgeText: "text-white",
      titleColor: "text-[#86198F]",
      cardBg: "bg-[#F3E8FF]",
      cardBorder: "border-[#C084FC] border-b-[4px] border-b-[#C084FC]",
      hoverBorder: "hover:border-[#A855F7] hover:border-b-[#A855F7]",
      labelColor: "text-[#86198F]",
      chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
    };

    if (classNum === 1) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 2) {
        const mathOrangeTheme = {
          accent: "#EA580C",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          titleColor: "text-[#9A3412]",
          cardBg: "bg-[#FFF7ED]",
          cardBorder: "border-[#FB923C] border-b-[4px] border-b-[#FB923C]",
          hoverBorder: "hover:border-[#EA580C] hover:border-b-[#EA580C]",
          labelColor: "text-[#EA580C]",
          subCardBg: "bg-slate-100 hover:bg-slate-200/90",
          subCardBorder: "border-slate-300 border-b-[4px] border-b-slate-300",
          subCodeColor: "text-black",
          subTitleColor: "text-black",
          guideLine: "border-orange-300",
          chevronBorder: "border-[#FB923C]",
          chevronText: "text-[#EA580C]",
          subChevronBorder: "border-slate-300",
          subChevronText: "text-black"
        };

        return [
          {
            unit: "Chapter 1",
            chapterNum: 1,
            title: "Geometry",
            pages: "1 - 14",
            topics: 2,
            theme: mathOrangeTheme,
            subtopics: [
              { code: "1.1", title: "Introduction to basic shapes", pages: "1 - 8" },
              { code: "1.2", title: "Introduction to straight lines", pages: "9 - 14" }
            ]
          },
          {
            unit: "Chapter 2",
            chapterNum: 2,
            title: "Numbers",
            pages: "15 - 38",
            topics: 3,
            theme: mathOrangeTheme,
            subtopics: [
              { code: "2.1", title: "Introduction to number 10", pages: "15 - 20" },
              { code: "2.2", title: "Numbers from 10 to 20", pages: "21 - 30" },
              { code: "2.3", title: "Addition (Not exceeding 20)", pages: "31 - 38" }
            ]
          },
          {
            unit: "Chapter 3",
            chapterNum: 3,
            title: "Patterns",
            pages: "39 - 50",
            topics: 3,
            theme: mathOrangeTheme,
            subtopics: [
              { code: "3.1", title: "Patterns in shapes", pages: "39 - 42" },
              { code: "3.2", title: "Patterns in body movements", pages: "43 - 46" },
              { code: "3.3", title: "Patterns in numbers", pages: "47 - 50" }
            ]
          },
          {
            unit: "Chapter 4",
            chapterNum: 4,
            title: "Measurements",
            pages: "51 - 62",
            topics: 2,
            theme: mathOrangeTheme,
            subtopics: [
              { code: "4.1", title: "Comparisons", pages: "51 - 56" },
              { code: "4.2", title: "Measures", pages: "57 - 62" }
            ]
          }
        ];
      }

      if (termInt === 3) {
        const mathTerm3Theme = {
          accent: "#7C3AED",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          titleColor: "text-[#581C87]",
          cardBg: "bg-[#F3E8FF]",
          cardBorder: "border-[#C084FC] border-b-[4px] border-b-[#C084FC]",
          hoverBorder: "hover:border-[#A855F7] hover:border-b-[#A855F7]",
          labelColor: "text-[#7E22CE]",
          subCardBg: "bg-slate-100 hover:bg-slate-200/90",
          subCardBorder: "border-slate-300 border-b-[4px] border-b-slate-300",
          subCodeColor: "text-black",
          subTitleColor: "text-black",
          guideLine: "border-purple-300",
          chevronBorder: "border-[#C084FC]",
          chevronText: "text-[#7E22CE]",
          subChevronBorder: "border-slate-300",
          subChevronText: "text-black"
        };

        return [
          {
            unit: "Chapter 1",
            chapterNum: 1,
            title: "Geometry",
            pages: "1 - 12",
            topics: 2,
            theme: mathTerm3Theme,
            subtopics: [
              { code: "1.1", title: "Rolling and Sliding", pages: "1 - 6" },
              { code: "1.2", title: "Classification of objects", pages: "7 - 12" }
            ]
          },
          {
            unit: "Chapter 2",
            chapterNum: 2,
            title: "Numbers",
            pages: "13 - 38",
            topics: 4,
            theme: mathTerm3Theme,
            subtopics: [
              { code: "2.1", title: "Subtracting Zero", pages: "13 - 18" },
              { code: "2.2", title: "Subtraction (upto 20)", pages: "19 - 26" },
              { code: "2.3", title: "Numbers from 21 to 99", pages: "27 - 34" },
              { code: "2.4", title: "Skip counting", pages: "35 - 38" }
            ]
          },
          {
            unit: "Chapter 3",
            chapterNum: 3,
            title: "Money",
            pages: "39 - 46",
            topics: 1,
            theme: mathTerm3Theme,
            subtopics: []
          },
          {
            unit: "Chapter 4",
            chapterNum: 4,
            title: "Time",
            pages: "47 - 54",
            topics: 1,
            theme: mathTerm3Theme,
            subtopics: []
          },
          {
            unit: "Chapter 5",
            chapterNum: 5,
            title: "Information processing",
            pages: "55 - 66",
            topics: 3,
            theme: mathTerm3Theme,
            subtopics: [
              { code: "5.1", title: "Assembling Parts", pages: "55 - 58" },
              { code: "5.2", title: "Formation of Pictures", pages: "59 - 62" },
              { code: "5.3", title: "Formulating Instructions", pages: "63 - 66" }
            ]
          }
        ];
      }

      const mathClass1Theme = {
        accent: "#BE185D",
        badgeBg: "bg-slate-900",
        badgeText: "text-white",
        titleColor: "text-[#BE185D]",
        cardBg: "bg-[#FED7AA]", // warm peach from the image
        cardBorder: "border-[#FB923C] border-b-[4px] border-b-[#FB923C]",
        hoverBorder: "hover:border-[#EA580C] hover:border-b-[#EA580C]",
        labelColor: "text-[#BE185D]",
        subCardBg: "bg-slate-100 hover:bg-slate-200/90",
        subCardBorder: "border-slate-300 border-b-[4px] border-b-slate-300",
        subCodeColor: "text-slate-800",
        subTitleColor: "text-slate-800",
        guideLine: "border-[#FDBA74]",
        chevronBorder: "border-[#FB923C]",
        chevronText: "text-[#BE185D]",
        subChevronBorder: "border-slate-300",
        subChevronText: "text-slate-600"
      };

      return [
        {
          unit: "Chapter 1",
          chapterNum: 1,
          title: "Geometry",
          pages: "1 - 18",
          topics: 2,
          theme: mathClass1Theme,
          subtopics: [
            { code: "1.1", title: "Comparisons", pages: "1 - 8" },
            { code: "1.2", title: "Shapes", pages: "9 - 18" }
          ]
        },
        {
          unit: "Chapter 2",
          chapterNum: 2,
          title: "Numbers",
          pages: "19 - 48",
          topics: 4,
          theme: mathClass1Theme,
          subtopics: [
            { code: "2.1", title: "Numbers from 1 to 9", pages: "19 - 28" },
            { code: "2.2", title: "Addition", pages: "29 - 36" },
            { code: "2.3", title: "Subtraction", pages: "37 - 44" },
            { code: "2.4", title: "Zero", pages: "45 - 48" }
          ]
        },
        {
          unit: "Chapter 3",
          chapterNum: 3,
          title: "Patterns",
          pages: "49 - 58",
          topics: 2,
          theme: mathClass1Theme,
          subtopics: [
            { code: "3.1", title: "Patterns in sounds", pages: "49 - 53" },
            { code: "3.2", title: "Patterns in colour", pages: "54 - 58" }
          ]
        },
        {
          unit: "Chapter 4",
          chapterNum: 4,
          title: "Information Processing",
          pages: "59 - 68",
          topics: 2,
          theme: mathClass1Theme,
          subtopics: [
            { code: "4.1", title: "Systematic Listing", pages: "59 - 63" },
            { code: "4.2", title: "Organising Information", pages: "64 - 68" }
          ]
        }
      ];
    }

    if (classNum === 2) {
      const mathClass2Theme = {
        accent: "#DC2626",
        badgeBg: "bg-slate-900",
        badgeText: "text-white",
        titleColor: "text-[#991B1B]",
        cardBg: "bg-[#FEF3C7]",
        cardBorder: "border-[#FCD34D] border-b-[4px] border-b-[#FCD34D]",
        hoverBorder: "hover:border-[#F59E0B] hover:border-b-[#F59E0B]",
        labelColor: "text-[#DC2626]",
        subCardBg: "bg-slate-100 hover:bg-slate-200/90",
        subCardBorder: "border-slate-300 border-b-[4px] border-b-slate-300",
        subCodeColor: "text-slate-800",
        subTitleColor: "text-slate-800",
        guideLine: "border-[#FCD34D]",
        chevronBorder: "border-[#FCD34D]",
        chevronText: "text-[#DC2626]",
        subChevronBorder: "border-slate-300",
        subChevronText: "text-slate-600"
      };

      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        return [
          {
            unit: "Chapter 1",
            chapterNum: 1,
            title: "Geometry",
            pages: "1 - 12",
            topics: 2,
            theme: mathClass2Theme,
            subtopics: [
              { code: "1.1", title: "Introduction to 3 dimensional (3D) shapes", pages: "1 - 6" },
              { code: "1.2", title: "Identification of 2D Shapes and 3D Objects", pages: "7 - 12" }
            ]
          },
          {
            unit: "Chapter 2",
            chapterNum: 2,
            title: "Numbers",
            pages: "13 - 36",
            topics: 7,
            theme: mathClass2Theme,
            subtopics: [
              { code: "2.1", title: "Predecessor, Successor and in between numbers", pages: "13 - 16" },
              { code: "2.2", title: "Grouping", pages: "17 - 20" },
              { code: "2.3", title: "Place value", pages: "21 - 24" },
              { code: "2.4", title: "Comparing Numbers", pages: "25 - 27" },
              { code: "2.5", title: "Number Name", pages: "28 - 30" },
              { code: "2.6", title: "Addition", pages: "31 - 33" },
              { code: "2.7", title: "Subtraction", pages: "34 - 36" }
            ]
          },
          {
            unit: "Chapter 3",
            chapterNum: 3,
            title: "Patterns",
            pages: "37 - 46",
            topics: 3,
            theme: mathClass2Theme,
            subtopics: [
              { code: "3.1", title: "Patterns in Sound", pages: "37 - 39" },
              { code: "3.2", title: "Patterns in body movements and sound", pages: "40 - 42" },
              { code: "3.3", title: "Patterns in colours", pages: "43 - 46" }
            ]
          },
          {
            unit: "Chapter 4",
            chapterNum: 4,
            title: "Measurement",
            pages: "47 - 54",
            topics: 2,
            theme: mathClass2Theme,
            subtopics: [
              { code: "4.1", title: "Measuring length using uniform non standard tools", pages: "47 - 50" },
              { code: "4.2", title: "Standard units of measuring length", pages: "51 - 54" }
            ]
          },
          {
            unit: "Chapter 5",
            chapterNum: 5,
            title: "Time",
            pages: "55 - 62",
            topics: 3,
            theme: mathClass2Theme,
            subtopics: [
              { code: "5.1", title: "Days of the week", pages: "55 - 57" },
              { code: "5.2", title: "Months of the year", pages: "58 - 60" },
              { code: "5.3", title: "Seasons", pages: "61 - 62" }
            ]
          },
          {
            unit: "Chapter 6",
            chapterNum: 6,
            title: "Information Processing",
            pages: "63 - 72",
            topics: 3,
            theme: mathClass2Theme,
            subtopics: [
              { code: "6.1", title: "Systematic listing", pages: "63 - 65" },
              { code: "6.2", title: "Selection", pages: "66 - 68" },
              { code: "6.3", title: "Collection of data", pages: "69 - 72" }
            ]
          }
        ];
      }

      if (termInt === 2) {
        return [
          {
            unit: "Chapter 1",
            chapterNum: 1,
            title: "Geometry",
            pages: "1 - 14",
            topics: 3,
            theme: mathClass2Theme,
            subtopics: [
              { code: "1.1", title: "Properties of 2D shapes", pages: "1 - 5" },
              { code: "1.2", title: "Identification of objects by blind folding", pages: "6 - 10" },
              { code: "1.3", title: "Identification of objects by observing the shadows", pages: "11 - 14" }
            ]
          },
          {
            unit: "Chapter 2",
            chapterNum: 2,
            title: "Numbers",
            pages: "15 - 42",
            topics: 5,
            theme: mathClass2Theme,
            subtopics: [
              { code: "2.1", title: "Comparison and formation of numbers", pages: "15 - 20" },
              { code: "2.2", title: "Ordering of numbers", pages: "21 - 25" },
              { code: "2.3", title: "Number name", pages: "26 - 30" },
              { code: "2.4", title: "Addition upto 99 with regrouping", pages: "31 - 36" },
              { code: "2.5", title: "Subtraction upto 99 with regrouping", pages: "37 - 42" }
            ]
          },
          {
            unit: "Chapter 3",
            chapterNum: 3,
            title: "Patterns",
            pages: "43 - 56",
            topics: 2,
            theme: mathClass2Theme,
            subtopics: [
              { code: "3.1", title: "Block patterns", pages: "43 - 48" },
              { code: "3.2", title: "Patterns in shapes", pages: "49 - 56" }
            ]
          }
        ];
      }

      if (termInt === 3) {
        const mathTerm3Theme = {
          accent: "#7C3AED",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          titleColor: "text-[#581C87]",
          cardBg: "bg-[#F3E8FF]",
          cardBorder: "border-[#C084FC] border-b-[4px] border-b-[#C084FC]",
          hoverBorder: "hover:border-[#A855F7] hover:border-b-[#A855F7]",
          labelColor: "text-[#7E22CE]",
          subCardBg: "bg-slate-100 hover:bg-slate-200/90",
          subCardBorder: "border-slate-300 border-b-[4px] border-b-slate-300",
          subCodeColor: "text-black",
          subTitleColor: "text-black",
          guideLine: "border-purple-300",
          chevronBorder: "border-[#C084FC]",
          chevronText: "text-[#7E22CE]",
          subChevronBorder: "border-slate-300",
          subChevronText: "text-black"
        };

        return [
          {
            unit: "Chapter 1",
            chapterNum: 1,
            title: "Numbers",
            pages: "1 - 16",
            topics: 4,
            theme: mathTerm3Theme,
            subtopics: [
              { code: "1.1", title: "Odd and even numbers", pages: "1 - 4" },
              { code: "1.2", title: "Ordinal and cardinal numbers", pages: "5 - 8" },
              { code: "1.3", title: "Repeated addition", pages: "9 - 12" },
              { code: "1.4", title: "Repeated subtraction", pages: "13 - 16" }
            ]
          },
          {
            unit: "Chapter 2",
            chapterNum: 2,
            title: "Patterns",
            pages: "17 - 28",
            topics: 2,
            theme: mathTerm3Theme,
            subtopics: [
              { code: "2.1", title: "Patterns in numbers", pages: "17 - 22" },
              { code: "2.2", title: "Iterative pattern", pages: "23 - 28" }
            ]
          },
          {
            unit: "Chapter 3",
            chapterNum: 3,
            title: "Measurement",
            pages: "29 - 42",
            topics: 3,
            theme: mathTerm3Theme,
            subtopics: [
              { code: "3.1", title: "Comparison of weight", pages: "29 - 33" },
              { code: "3.2", title: "Measuring weight using simple balance", pages: "34 - 38" },
              { code: "3.3", title: "Measuring capacity", pages: "39 - 42" }
            ]
          },
          {
            unit: "Chapter 4",
            chapterNum: 4,
            title: "Money",
            pages: "43 - 52",
            topics: 1,
            theme: mathTerm3Theme,
            subtopics: [
              { code: "4.1", title: "Notes and coins", pages: "43 - 52" }
            ]
          },
          {
            unit: "Chapter 5",
            chapterNum: 5,
            title: "Time",
            pages: "53 - 60",
            topics: 1,
            theme: mathTerm3Theme,
            subtopics: [
              { code: "5.1", title: "Calculating time", pages: "53 - 60" }
            ]
          },
          {
            unit: "Chapter 6",
            chapterNum: 6,
            title: "Information processing",
            pages: "61 - 74",
            topics: 4,
            theme: mathTerm3Theme,
            subtopics: [
              { code: "6.1", title: "Representation of data and drawing inferences", pages: "61 - 64" },
              { code: "6.2", title: "Relationship", pages: "65 - 67" },
              { code: "6.3", title: "Shapes and nature of objects", pages: "68 - 70" },
              { code: "6.4", title: "Algorithms and instructions", pages: "71 - 74" }
            ]
          }
        ];
      }
    }

    if (classNum === 3) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        const mathClass3Theme = {
          accent: "#DB2777",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          titleColor: "text-[#9D174D]",
          cardBg: "bg-[#FDF2F8]",
          cardBorder: "border-[#F472B6] border-b-[4px] border-b-[#F472B6]",
          hoverBorder: "hover:border-[#EC4899] hover:border-b-[#EC4899]",
          labelColor: "text-[#DB2777]",
          subCardBg: "bg-slate-100 hover:bg-slate-200/90",
          subCardBorder: "border-slate-300 border-b-[4px] border-b-slate-300",
          subCodeColor: "text-slate-800",
          subTitleColor: "text-slate-800",
          guideLine: "border-pink-300",
          chevronBorder: "border-[#F472B6]",
          chevronText: "text-[#DB2777]",
          subChevronBorder: "border-slate-300",
          subChevronText: "text-slate-600"
        };

        return [
          {
            unit: "Chapter 1",
            chapterNum: 1,
            title: "GEOMETRY",
            pages: "1 - 18",
            topics: 2,
            theme: mathClass3Theme,
            subtopics: [
              { code: "1.1", title: "Construction of 2D Shapes", pages: "1 - 8" },
              { code: "1.2", title: "Properties of 3D Objects", pages: "9 - 18" }
            ]
          },
          {
            unit: "Chapter 2",
            chapterNum: 2,
            title: "NUMBERS",
            pages: "19 - 42",
            topics: 5,
            theme: mathClass3Theme,
            subtopics: [
              { code: "2.1", title: "Number Sequence upto 1000", pages: "19 - 24" },
              { code: "2.2", title: "Comparison of Numbers", pages: "25 - 28" },
              { code: "2.3", title: "Ordering", pages: "29 - 32" },
              { code: "2.4", title: "Addition and Subtraction.", pages: "33 - 38" },
              { code: "2.5", title: "Estimation", pages: "39 - 42" }
            ]
          },
          {
            unit: "Chapter 3",
            chapterNum: 3,
            title: "PATTERNS",
            pages: "43 - 52",
            topics: 2,
            theme: mathClass3Theme,
            subtopics: [
              { code: "3.1", title: "Patterns in Shapes", pages: "43 - 48" },
              { code: "3.2", title: "Symmetry", pages: "49 - 52" }
            ]
          },
          {
            unit: "Chapter 4",
            chapterNum: 4,
            title: "MEASUREMENTS",
            pages: "53 - 66",
            topics: 5,
            theme: mathClass3Theme,
            subtopics: [
              { code: "4.1", title: "Need for Standard Measurement", pages: "53 - 56" },
              { code: "4.2", title: "Millimetre and Centimetre", pages: "57 - 59" },
              { code: "4.3", title: "Measurement of Length using Ruler", pages: "60 - 62" },
              { code: "4.4", title: "Centimetre and Metre", pages: "63 - 64" },
              { code: "4.5", title: "Comparison of Estimation with Actual Measurement", pages: "65 - 66" }
            ]
          },
          {
            unit: "Chapter 5",
            chapterNum: 5,
            title: "TIME",
            pages: "67 - 74",
            topics: 3,
            theme: mathClass3Theme,
            subtopics: [
              { code: "5.1", title: "Calender", pages: "67 - 70" },
              { code: "5.2", title: "Reading a Particular Day and Date", pages: "71 - 72" },
              { code: "5.3", title: "Manufacture and Expiry Date", pages: "73 - 74" }
            ]
          },
          {
            unit: "Chapter 6",
            chapterNum: 6,
            title: "INFORMATION PROCESSING",
            pages: "75 - 84",
            topics: 3,
            theme: mathClass3Theme,
            subtopics: [
              { code: "6.1", title: "Systematic Listing", pages: "75 - 77" },
              { code: "6.2", title: "Collection and Representation of Data", pages: "78 - 81" },
              { code: "6.3", title: "Drawing Conclusion from the Represented Data", pages: "82 - 84" }
            ]
          }
        ];
      }

      if (termInt === 2) {
        const mathClass3Term2Theme = {
          accent: "#9333EA",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          titleColor: "text-[#6B21A8]",
          cardBg: "bg-[#FAF5FF]",
          cardBorder: "border-[#C084FC] border-b-[4px] border-b-[#C084FC]",
          hoverBorder: "hover:border-[#A855F7] hover:border-b-[#A855F7]",
          labelColor: "#9333EA",
          subCardBg: "bg-slate-100 hover:bg-slate-200/90",
          subCardBorder: "border-slate-300 border-b-[4px] border-b-slate-300",
          subCodeColor: "text-slate-800",
          subTitleColor: "text-slate-800",
          guideLine: "border-purple-300",
          chevronBorder: "border-[#C084FC]",
          chevronText: "text-[#9333EA]",
          subChevronBorder: "border-slate-300",
          subChevronText: "text-slate-600"
        };

        return [
          {
            unit: "Chapter 1",
            chapterNum: 1,
            title: "NUMBERS",
            pages: "1 - 18",
            topics: 1,
            theme: mathClass3Term2Theme,
            subtopics: []
          },
          {
            unit: "Chapter 2",
            chapterNum: 2,
            title: "PATTERNS",
            pages: "19 - 28",
            topics: 1,
            theme: mathClass3Term2Theme,
            subtopics: []
          },
          {
            unit: "Chapter 3",
            chapterNum: 3,
            title: "MEASUREMENTS",
            pages: "29 - 42",
            topics: 1,
            theme: mathClass3Term2Theme,
            subtopics: []
          },
          {
            unit: "Chapter 4",
            chapterNum: 4,
            title: "TIME",
            pages: "43 - 54",
            topics: 1,
            theme: mathClass3Term2Theme,
            subtopics: []
          },
          {
            unit: "Chapter 5",
            chapterNum: 5,
            title: "INFORMATION PROCESSING",
            pages: "55 - 68",
            topics: 1,
            theme: mathClass3Term2Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 3) {
        const mathClass3Term3Theme = {
          accent: "#9333EA",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          titleColor: "text-[#6B21A8]",
          cardBg: "bg-[#FAF5FF]",
          cardBorder: "border-[#C084FC] border-b-[4px] border-b-[#C084FC]",
          hoverBorder: "hover:border-[#A855F7] hover:border-b-[#A855F7]",
          labelColor: "#9333EA",
          chevronBorder: "border-[#C084FC]",
          chevronText: "text-[#9333EA]",
          subChevronBorder: "border-slate-300",
          subChevronText: "text-slate-600"
        };

        return [
          {
            unit: "Chapter 1",
            chapterNum: 1,
            title: "GEOMETRY",
            pages: "1 - 12",
            topics: 1,
            theme: mathClass3Term3Theme,
            subtopics: []
          },
          {
            unit: "Chapter 2",
            chapterNum: 2,
            title: "NUMBERS",
            pages: "13 - 26",
            topics: 1,
            theme: mathClass3Term3Theme,
            subtopics: []
          },
          {
            unit: "Chapter 3",
            chapterNum: 3,
            title: "PATTERNS",
            pages: "27 - 36",
            topics: 1,
            theme: mathClass3Term3Theme,
            subtopics: []
          },
          {
            unit: "Chapter 4",
            chapterNum: 4,
            title: "MEASUREMENTS",
            pages: "37 - 48",
            topics: 1,
            theme: mathClass3Term3Theme,
            subtopics: []
          },
          {
            unit: "Chapter 5",
            chapterNum: 5,
            title: "MONEY",
            pages: "49 - 58",
            topics: 1,
            theme: mathClass3Term3Theme,
            subtopics: []
          },
          {
            unit: "Chapter 6",
            chapterNum: 6,
            title: "TIME",
            pages: "59 - 68",
            topics: 1,
            theme: mathClass3Term3Theme,
            subtopics: []
          },
          {
            unit: "Chapter 7",
            chapterNum: 7,
            title: "INFORMATION PROCESSING",
            pages: "69 - 80",
            topics: 1,
            theme: mathClass3Term3Theme,
            subtopics: []
          }
        ];
      }
    }

    if (classNum === 4) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        const mathClass4Theme = {
          accent: "#9333EA",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          titleColor: "text-[#6B21A8]",
          cardBg: "bg-[#FAF5FF]",
          cardBorder: "border-[#C084FC] border-b-[4px] border-b-[#C084FC]",
          hoverBorder: "hover:border-[#A855F7] hover:border-b-[#A855F7]",
          labelColor: "#9333EA",
          subCardBg: "bg-slate-100 hover:bg-slate-200/90",
          subCardBorder: "border-slate-300 border-b-[4px] border-b-slate-300",
          subCodeColor: "text-slate-800",
          subTitleColor: "text-slate-800",
          guideLine: "border-purple-300",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          subChevronBorder: "border-slate-300",
          subChevronText: "text-slate-600"
        };

        return [
          {
            unit: "Chapter 1",
            chapterNum: 1,
            title: "GEOMETRY",
            pages: "1 - 18",
            topics: 2,
            theme: mathClass4Theme,
            subtopics: [
              { code: "1.1", title: "Properties of 2-D shapes", pages: "1 - 10" },
              { code: "1.2", title: "Properties of 3-D objects", pages: "11 - 18" }
            ]
          },
          {
            unit: "Chapter 2",
            chapterNum: 2,
            title: "NUMBERS",
            pages: "19 - 42",
            topics: 3,
            theme: mathClass4Theme,
            subtopics: [
              { code: "2.1", title: "Number Sequence upto 10,000", pages: "19 - 26" },
              { code: "2.2", title: "Comparing and Ordering of Numbers", pages: "27 - 34" },
              { code: "2.3", title: "Addition and subtraction", pages: "35 - 42" }
            ]
          },
          {
            unit: "Chapter 3",
            chapterNum: 3,
            title: "PATTERNS",
            pages: "43 - 54",
            topics: 2,
            theme: mathClass4Theme,
            subtopics: [
              { code: "3.1", title: "Patterns in shapes", pages: "43 - 48" },
              { code: "3.2", title: "Patterns in Numbers", pages: "49 - 54" }
            ]
          },
          {
            unit: "Chapter 4",
            chapterNum: 4,
            title: "MEASUREMENTS",
            pages: "55 - 72",
            topics: 6,
            theme: mathClass4Theme,
            subtopics: [
              { code: "4.1", title: "Relationship between metre and centimetre", pages: "55 - 58" },
              { code: "4.2", title: "Conversion of metre into centimetre", pages: "59 - 61" },
              { code: "4.3", title: "Conversion of centimetre into metre", pages: "62 - 64" },
              { code: "4.4", title: "Addition and subtraction of standard measurement", pages: "65 - 67" },
              { code: "4.5", title: "Problem involving length and distances", pages: "68 - 70" },
              { code: "4.6", title: "Estimation", pages: "71 - 72" }
            ]
          },
          {
            unit: "Chapter 5",
            chapterNum: 5,
            title: "TIME",
            pages: "73 - 88",
            topics: 5,
            theme: mathClass4Theme,
            subtopics: [
              { code: "5.1", title: "Understanding days and weeks", pages: "73 - 76" },
              { code: "5.2", title: "Marking the dates", pages: "77 - 79" },
              { code: "5.3", title: "Compute the number of weeks in a year", pages: "80 - 82" },
              { code: "5.4", title: "Relation between the number of days in a year and the number of days in each month", pages: "83 - 85" },
              { code: "5.5", title: "Read clock time to the nearest hours and minutes", pages: "86 - 88" }
            ]
          },
          {
            unit: "Chapter 6",
            chapterNum: 6,
            title: "INFORMATION PROCESSING",
            pages: "89 - 100",
            topics: 3,
            theme: mathClass4Theme,
            subtopics: [
              { code: "6.1", title: "Systematic Listing", pages: "89 - 92" },
              { code: "6.2", title: "Representation of data in bar graphs", pages: "93 - 96" },
              { code: "6.3", title: "Representation of data in Pie-Chart", pages: "97 - 100" }
            ]
          }
        ];
      }

      if (termInt === 2) {
        const mathClass4Term2Theme = {
          accent: "#0284C7",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          titleColor: "text-[#0369A1]",
          cardBg: "bg-[#F0F9FF]",
          cardBorder: "border-[#7DD3FC] border-b-[4px] border-b-[#7DD3FC]",
          hoverBorder: "hover:border-[#38BDF8] hover:border-b-[#38BDF8]",
          labelColor: "#0284C7",
          subCardBg: "bg-slate-100 hover:bg-slate-200/90",
          subCardBorder: "border-slate-300 border-b-[4px] border-b-slate-300",
          subCodeColor: "text-slate-800",
          subTitleColor: "text-slate-800",
          guideLine: "border-sky-300",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          subChevronBorder: "border-slate-300",
          subChevronText: "text-slate-600"
        };

        return [
          {
            unit: "Chapter 1",
            chapterNum: 1,
            title: "GEOMETRY",
            pages: "1 - 14",
            topics: 1,
            theme: mathClass4Term2Theme,
            subtopics: []
          },
          {
            unit: "Chapter 2",
            chapterNum: 2,
            title: "NUMBERS",
            pages: "15 - 32",
            topics: 1,
            theme: mathClass4Term2Theme,
            subtopics: []
          },
          {
            unit: "Chapter 3",
            chapterNum: 3,
            title: "PATTERNS",
            pages: "33 - 44",
            topics: 1,
            theme: mathClass4Term2Theme,
            subtopics: []
          },
          {
            unit: "Chapter 4",
            chapterNum: 4,
            title: "MEASUREMENTS",
            pages: "45 - 56",
            topics: 1,
            theme: mathClass4Term2Theme,
            subtopics: []
          },
          {
            unit: "Chapter 5",
            chapterNum: 5,
            title: "FRACTION",
            pages: "57 - 68",
            topics: 1,
            theme: mathClass4Term2Theme,
            subtopics: []
          },
          {
            unit: "Chapter 6",
            chapterNum: 6,
            title: "INFORMATION PROCESSING",
            pages: "69 - 80",
            topics: 1,
            theme: mathClass4Term2Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 3) {
        const mathClass4Term3Theme = {
          accent: "#DB2777",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          titleColor: "text-[#9D174D]",
          cardBg: "bg-[#FDF2F8]",
          cardBorder: "border-[#F472B6] border-b-[4px] border-b-[#F472B6]",
          hoverBorder: "hover:border-[#EC4899] hover:border-b-[#EC4899]",
          labelColor: "#DB2777",
          subCardBg: "bg-slate-100 hover:bg-slate-200/90",
          subCardBorder: "border-slate-300 border-b-[4px] border-b-slate-300",
          subCodeColor: "text-slate-800",
          subTitleColor: "text-slate-800",
          guideLine: "border-pink-300",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          subChevronBorder: "border-slate-300",
          subChevronText: "text-slate-600"
        };

        return [
          {
            unit: "Chapter 1",
            chapterNum: 1,
            title: "GEOMETRY",
            pages: "1 - 14",
            topics: 1,
            theme: mathClass4Term3Theme,
            subtopics: []
          },
          {
            unit: "Chapter 2",
            chapterNum: 2,
            title: "NUMBERS",
            pages: "15 - 32",
            topics: 1,
            theme: mathClass4Term3Theme,
            subtopics: []
          },
          {
            unit: "Chapter 3",
            chapterNum: 3,
            title: "MEASUREMENTS",
            pages: "33 - 46",
            topics: 1,
            theme: mathClass4Term3Theme,
            subtopics: []
          },
          {
            unit: "Chapter 4",
            chapterNum: 4,
            title: "TIME",
            pages: "47 - 58",
            topics: 1,
            theme: mathClass4Term3Theme,
            subtopics: []
          },
          {
            unit: "Chapter 5",
            chapterNum: 5,
            title: "MONEY",
            pages: "59 - 70",
            topics: 1,
            theme: mathClass4Term3Theme,
            subtopics: []
          },
          {
            unit: "Chapter 6",
            chapterNum: 6,
            title: "FRACTION",
            pages: "71 - 82",
            topics: 1,
            theme: mathClass4Term3Theme,
            subtopics: []
          }
        ];
      }
    }

    if (classNum === 5) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        const mathClass5Theme = {
          accent: "#0D9488",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          titleColor: "text-[#0F766E]",
          cardBg: "bg-[#F0FDFA]",
          cardBorder: "border-[#5EEAD4] border-b-[4px] border-b-[#5EEAD4]",
          hoverBorder: "hover:border-[#2DD4BF] hover:border-b-[#2DD4BF]",
          labelColor: "#0D9488",
          subCardBg: "bg-slate-100 hover:bg-slate-200/90",
          subCardBorder: "border-slate-300 border-b-[4px] border-b-slate-300",
          subCodeColor: "text-slate-800",
          subTitleColor: "text-slate-800",
          guideLine: "border-teal-300",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          subChevronBorder: "border-slate-300",
          subChevronText: "text-slate-600"
        };

        return [
          {
            unit: "Unit-1",
            chapterNum: 1,
            title: "GEOMETRY",
            pages: "1 - 18",
            topics: 2,
            theme: mathClass5Theme,
            subtopics: [
              { code: "1.1", title: "2 Dimensional Perspective of 3 Dimensional Objects", pages: "1 - 10" },
              { code: "1.2", title: "Introduction of Angles", pages: "11 - 18" }
            ]
          },
          {
            unit: "Unit-2",
            chapterNum: 2,
            title: "NUMBERS",
            pages: "19 - 42",
            topics: 5,
            theme: mathClass5Theme,
            subtopics: [
              { code: "2.1", title: "Numbers beyond 10000", pages: "19 - 24" },
              { code: "2.2", title: "Place Value of Numbers", pages: "25 - 28" },
              { code: "2.3", title: "Comparison of Numbers", pages: "29 - 32" },
              { code: "2.4", title: "Ascending and Descending Order of Numbers", pages: "33 - 36" },
              { code: "2.5", title: "Numbers and its Operations", pages: "37 - 42" }
            ]
          },
          {
            unit: "Unit-3",
            chapterNum: 3,
            title: "PATTERNS",
            pages: "43 - 54",
            topics: 2,
            theme: mathClass5Theme,
            subtopics: [
              { code: "3.1", title: "Patterns in Shapes", pages: "43 - 48" },
              { code: "3.2", title: "Patterns in Numbers", pages: "49 - 54" }
            ]
          },
          {
            unit: "Unit-4",
            chapterNum: 4,
            title: "MEASUREMENTS",
            pages: "55 - 72",
            topics: 6,
            theme: mathClass5Theme,
            subtopics: [
              { code: "4.1", title: "Length", pages: "55 - 57" },
              { code: "4.2", title: "Conversion of Units", pages: "58 - 60" },
              { code: "4.3", title: "Addition in Measurements", pages: "61 - 63" },
              { code: "4.4", title: "Subtraction in Measurements", pages: "64 - 66" },
              { code: "4.5", title: "Multiplication in Measurements", pages: "67 - 69" },
              { code: "4.6", title: "Division in Measurements", pages: "70 - 72" }
            ]
          },
          {
            unit: "Unit-5",
            chapterNum: 5,
            title: "TIME",
            pages: "73 - 86",
            topics: 3,
            theme: mathClass5Theme,
            subtopics: [
              { code: "5.1", title: "Railway Time", pages: "73 - 76" },
              { code: "5.2", title: "Normal Time and Railway Time", pages: "77 - 81" },
              { code: "5.3", title: "Addition and Subtraction in Finding Time Interval", pages: "82 - 86" }
            ]
          },
          {
            unit: "Unit-6",
            chapterNum: 6,
            title: "INFORMATION PROCESSING",
            pages: "87 - 100",
            topics: 5,
            theme: mathClass5Theme,
            subtopics: [
              { code: "6.1", title: "Systematic Listing", pages: "87 - 89" },
              { code: "6.2", title: "Graphical Representation of Data", pages: "90 - 92" },
              { code: "6.3", title: "Pictograph", pages: "93 - 95" },
              { code: "6.4", title: "Representation of Data by Tally Marks", pages: "96 - 98" },
              { code: "6.5", title: "Bargraph", pages: "99 - 100" }
            ]
          }
        ];
      }

      if (termInt === 2) {
        const mathClass5Term2Theme = {
          accent: "#0D9488",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          titleColor: "text-[#0F766E]",
          cardBg: "bg-[#F0FDFA]",
          cardBorder: "border-[#5EEAD4] border-b-[4px] border-b-[#5EEAD4]",
          hoverBorder: "hover:border-[#2DD4BF] hover:border-b-[#2DD4BF]",
          labelColor: "#0D9488",
          subCardBg: "bg-slate-100 hover:bg-slate-200/90",
          subCardBorder: "border-slate-300 border-b-[4px] border-b-slate-300",
          subCodeColor: "text-slate-800",
          subTitleColor: "text-slate-800",
          guideLine: "border-teal-300",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          subChevronBorder: "border-slate-300",
          subChevronText: "text-slate-600"
        };

        return [
          {
            unit: "Unit-1",
            chapterNum: 1,
            title: "GEOMETRY",
            pages: "1 - 12",
            topics: 2,
            theme: mathClass5Term2Theme,
            subtopics: [
              { code: "1.1", title: "Complementary angles and supplementary angles", pages: "1 - 6" },
              { code: "1.2", title: "Fractals", pages: "7 - 12" }
            ]
          },
          {
            unit: "Unit-2",
            chapterNum: 2,
            title: "NUMBERS",
            pages: "13 - 30",
            topics: 5,
            theme: mathClass5Term2Theme,
            subtopics: [
              { code: "2.1", title: "Introduction of square numbers", pages: "13 - 16" },
              { code: "2.2", title: "Factors and multiples", pages: "17 - 20" },
              { code: "2.3", title: "Composite and prime numbers", pages: "21 - 24" },
              { code: "2.4", title: "Least common multiple", pages: "25 - 27" },
              { code: "2.5", title: "Life applications of L.C.M", pages: "28 - 30" }
            ]
          },
          {
            unit: "Unit-3",
            chapterNum: 3,
            title: "PATTERNS",
            pages: "31 - 42",
            topics: 4,
            theme: mathClass5Term2Theme,
            subtopics: [
              { code: "3.1", title: "Patterns in geometry", pages: "31 - 33" },
              { code: "3.2", title: "To make patterns of shapes using different number of angles / type of angles", pages: "34 - 36" },
              { code: "3.3", title: "Rotating angles", pages: "37 - 39" },
              { code: "3.4", title: "Able to find patterns in a collection of words", pages: "40 - 42" }
            ]
          },
          {
            unit: "Unit-4",
            chapterNum: 4,
            title: "MEASUREMENTS",
            pages: "43 - 52",
            topics: 1,
            theme: mathClass5Term2Theme,
            subtopics: [
              { code: "4.1", title: "Able to apply the four operations in solving problems involving weight", pages: "43 - 52" }
            ]
          },
          {
            unit: "Unit-5",
            chapterNum: 5,
            title: "FRACTIONS AND INTERCONCEPT",
            pages: "53 - 70",
            topics: 5,
            theme: mathClass5Term2Theme,
            subtopics: [
              { code: "5.1", title: "Fractions", pages: "53 - 56" },
              { code: "5.2", title: "Able to reason out in solving problems by comparing Time, Money, Distance", pages: "57 - 60" },
              { code: "5.3", title: "Able to create problems integrating time, money and distance", pages: "61 - 63" },
              { code: "5.4", title: "Relation between speed, time and distance", pages: "64 - 67" },
              { code: "5.5", title: "Relation between distance and money", pages: "68 - 70" }
            ]
          },
          {
            unit: "Unit-6",
            chapterNum: 6,
            title: "INFORMATION PROCESSING",
            pages: "71 - 84",
            topics: 2,
            theme: mathClass5Term2Theme,
            subtopics: [
              { code: "6.1", title: "Modelling", pages: "71 - 76" },
              { code: "6.2", title: "Able to split bigger task into smaller known task", pages: "77 - 84" }
            ]
          }
        ];
      }
    }

    if (classNum === 9) {
      const math9Theme = {
        accent: "#0F172A",
        badgeBg: "bg-slate-900",
        badgeText: "text-white",
        titleColor: "text-slate-900",
        cardBg: "bg-[#F1F5F9]",
        cardBorder: "border-slate-300 border-b-[4px] border-b-slate-300",
        hoverBorder: "hover:border-slate-400 hover:border-b-slate-400",
        labelColor: "text-slate-900",
        chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
      };

      return [
        {
          unit: "Chapter 1",
          chapterNum: 1,
          title: "SET LANGUAGE",
          pages: "1 - 38",
          topics: 8,
          theme: math9Theme,
          subtopics: [
            { code: "1.1", title: "Introduction" },
            { code: "1.2", title: "Set" },
            { code: "1.3", title: "Representation of a Set" },
            { code: "1.4", title: "Types of Sets" },
            { code: "1.5", title: "Set Operations" },
            { code: "1.6", title: "Properties of Set Operations" },
            { code: "1.7", title: "De Morgan's Laws" },
            { code: "1.8", title: "Application on Cardinality of Sets:" }
          ]
        },
        {
          unit: "Chapter 2",
          chapterNum: 2,
          title: "REAL NUMBERS",
          pages: "39 - 80",
          topics: 8,
          theme: math9Theme,
          subtopics: [
            { code: "2.1", title: "Introduction" },
            { code: "2.2", title: "Rational Numbers" },
            { code: "2.3", title: "Irrational Numbers" },
            { code: "2.4", title: "Real Numbers" },
            { code: "2.5", title: "Radical Notation" },
            { code: "2.6", title: "Surds" },
            { code: "2.7", title: "Rationalisation of Surds" },
            { code: "2.8", title: "Scientific Notation" }
          ]
        },
        {
          unit: "Chapter 3",
          chapterNum: 3,
          title: "ALGEBRA",
          pages: "81 - 138",
          topics: 8,
          theme: math9Theme,
          subtopics: [
            { code: "3.1", title: "Introduction" },
            { code: "3.2", title: "Polynomials" },
            { code: "3.3", title: "Remainder Theorem" },
            { code: "3.4", title: "Algebraic Identities" },
            { code: "3.5", title: "Factorisation" },
            { code: "3.6", title: "Division of Polynomials" },
            { code: "3.7", title: "Greatest Common Divisor (GCD)" },
            { code: "3.8", title: "Linear Equation in Two Variables" }
          ]
        },
        {
          unit: "Chapter 4",
          chapterNum: 4,
          title: "GEOMETRY",
          pages: "139 - 192",
          topics: 7,
          theme: math9Theme,
          subtopics: [
            { code: "4.1", title: "Introduction" },
            { code: "4.2", title: "Types of Angles" },
            { code: "4.3", title: "Quadrilaterals" },
            { code: "4.4", title: "Parts of a Circle" },
            { code: "4.5", title: "Properties of Chords of a Circle" },
            { code: "4.6", title: "Cyclic Quadrilaterals" },
            { code: "4.7", title: "Practical Geometry" }
          ]
        },
        {
          unit: "Chapter 5",
          chapterNum: 5,
          title: "COORDINATE GEOMETRY",
          pages: "193 - 228",
          topics: 7,
          theme: math9Theme,
          subtopics: [
            { code: "5.1", title: "Mapping the Plane" },
            { code: "5.2", title: "Devising a Coordinate System" },
            { code: "5.3", title: "Distance between any Two Points" },
            { code: "5.4", title: "The Mid-point of a Line Segment" },
            { code: "5.5", title: "Points of Trisection of a Line Segment" },
            { code: "5.6", title: "Section Formula" },
            { code: "5.7", title: "The Coordinates of the Centroid" }
          ]
        },
        {
          unit: "Chapter 6",
          chapterNum: 6,
          title: "TRIGONOMETRY",
          pages: "229 - 256",
          topics: 4,
          theme: math9Theme,
          subtopics: [
            { code: "6.1", title: "Introduction" },
            { code: "6.2", title: "Trigonometric Ratios of Some Special Angles" },
            { code: "6.3", title: "Trigonometric Ratios for Complementary Angles" },
            { code: "6.4", title: "Method of using Trigonometric Table" }
          ]
        },
        {
          unit: "Chapter 7",
          chapterNum: 7,
          title: "MENSURATION",
          pages: "257 - 286",
          topics: 5,
          theme: math9Theme,
          subtopics: [
            { code: "7.1", title: "Introduction" },
            { code: "7.2", title: "Heron's Formula" },
            { code: "7.3", title: "Application of Heron's Formula in Finding Areas of Quadrilaterals" },
            { code: "7.4", title: "Surface Area of Cuboid and Cube" },
            { code: "7.5", title: "Volume of Cuboid and Cube" }
          ]
        },
        {
          unit: "Chapter 8",
          chapterNum: 8,
          title: "STATISTICS",
          pages: "287 - 314",
          topics: 6,
          theme: math9Theme,
          subtopics: [
            { code: "8.1", title: "Introduction" },
            { code: "8.2", title: "Collection of Data" },
            { code: "8.3", title: "Measures of Central Tendency" },
            { code: "8.4", title: "Arithmetic Mean" },
            { code: "8.5", title: "Median" },
            { code: "8.6", title: "Mode" }
          ]
        },
        {
          unit: "Chapter 9",
          chapterNum: 9,
          title: "PROBABILITY",
          pages: "315 - 336",
          topics: 5,
          theme: math9Theme,
          subtopics: [
            { code: "9.1", title: "Introduction" },
            { code: "9.2", title: "Basic Ideas" },
            { code: "9.3", title: "Classical Approach" },
            { code: "9.4", title: "Empirical Approach" },
            { code: "9.5", title: "Types of Events" }
          ]
        }
      ];
    }

    return [
      {
        unit: "Chapter 1",
        chapterNum: 1,
        title: "Relations and Functions",
        pages: "1 - 38",
        topics: 10,
        theme: mathTheme,
        subtopics: [
          { code: "1.1", title: "Introduction", pages: "1 - 3" },
          { code: "1.2", title: "Ordered Pair", pages: "3 - 4" },
          { code: "1.3", title: "Cartesian Product", pages: "4 - 10" },
          { code: "1.4", title: "Relations", pages: "10 - 18" },
          { code: "1.5", title: "Functions", pages: "18 - 25" },
          { code: "1.6", title: "Representation of Functions", pages: "25 - 29" },
          { code: "1.7", title: "Types of Functions", pages: "29 - 33" },
          { code: "1.8", title: "Special Cases of Functions", pages: "33 - 34" },
          { code: "1.9", title: "Composition of Functions", pages: "34 - 36" },
          { code: "1.10", title: "Identifying the Graphs of Linear, Quadratic, Cubic and Reciprocal Functions", pages: "36 - 38" }
        ]
      },
      {
        unit: "Chapter 2",
        chapterNum: 2,
        title: "Numbers and Sequences",
        pages: "39 - 84",
        topics: 11,
        theme: mathTheme,
        subtopics: [
          { code: "2.1", title: "Introduction", pages: "39 - 40" },
          { code: "2.2", title: "Euclid's Division Lemma", pages: "40 - 43" },
          { code: "2.3", title: "Euclid's Division Algorithm", pages: "43 - 48" },
          { code: "2.4", title: "Fundamental Theorem of Arithmetic", pages: "48 - 52" },
          { code: "2.5", title: "Modular Arithmetic", pages: "52 - 58" },
          { code: "2.6", title: "Sequences", pages: "58 - 62" },
          { code: "2.7", title: "Arithmetic Progression", pages: "62 - 68" },
          { code: "2.8", title: "Series", pages: "68 - 72" },
          { code: "2.9", title: "Geometric Progression", pages: "72 - 78" },
          { code: "2.10", title: "Sum to n terms of a Geometric Progression", pages: "78 - 82" },
          { code: "2.11", title: "Special Series", pages: "82 - 84" }
        ]
      },
      {
        unit: "Chapter 3",
        chapterNum: 3,
        title: "Algebra",
        pages: "85 - 156",
        topics: 9,
        theme: mathTheme,
        subtopics: [
          { code: "3.1", title: "Introduction", pages: "85 - 86" },
          { code: "3.2", title: "Simultaneous Linear Equations in Three Variables", pages: "86 - 93" },
          { code: "3.3", title: "GCD and LCM of Polynomials", pages: "93 - 99" },
          { code: "3.4", title: "Rational Expressions", pages: "99 - 108" },
          { code: "3.5", title: "Square Root of Polynomials", pages: "108 - 114" },
          { code: "3.6", title: "Quadratic Equations", pages: "114 - 126" },
          { code: "3.7", title: "Nature of Roots", pages: "126 - 131" },
          { code: "3.8", title: "Quadratic Graphs", pages: "131 - 141" },
          { code: "3.9", title: "Matrices", pages: "141 - 156" }
        ]
      },
      {
        unit: "Chapter 4",
        chapterNum: 4,
        title: "Geometry",
        pages: "157 - 200",
        topics: 6,
        theme: mathTheme,
        subtopics: [
          { code: "4.1", title: "Introduction", pages: "157 - 158" },
          { code: "4.2", title: "Similarity of Triangles", pages: "158 - 168" },
          { code: "4.3", title: "Thales Theorem and Angle Bisector Theorem", pages: "168 - 176" },
          { code: "4.4", title: "Pythagoras Theorem", pages: "176 - 184" },
          { code: "4.5", title: "Circles and Tangents", pages: "184 - 193" },
          { code: "4.6", title: "Concurrency Theorems", pages: "193 - 200" }
        ]
      },
      {
        unit: "Chapter 5",
        chapterNum: 5,
        title: "Coordinate Geometry",
        pages: "201 - 240",
        topics: 5,
        theme: mathTheme,
        subtopics: [
          { code: "5.1", title: "Introduction", pages: "201 - 202" },
          { code: "5.2", title: "Area of a Triangle and Quadrilateral", pages: "202 - 212" },
          { code: "5.3", title: "Inclination and Slope of a Straight Line", pages: "212 - 222" },
          { code: "5.4", title: "Equation of a Straight Line", pages: "222 - 231" },
          { code: "5.5", title: "General Form of a Straight Line", pages: "231 - 240" }
        ]
      },
      {
        unit: "Chapter 6",
        chapterNum: 6,
        title: "Trigonometry",
        pages: "241 - 270",
        topics: 3,
        theme: mathTheme,
        subtopics: [
          { code: "6.1", title: "Introduction", pages: "241 - 243" },
          { code: "6.2", title: "Trigonometric Identities", pages: "243 - 256" },
          { code: "6.3", title: "Heights and Distances", pages: "256 - 270" }
        ]
      },
      {
        unit: "Chapter 7",
        chapterNum: 7,
        title: "Mensuration",
        pages: "271 - 302",
        topics: 5,
        theme: mathTheme,
        subtopics: [
          { code: "7.1", title: "Introduction", pages: "271 - 272" },
          { code: "7.2", title: "Surface Area of Solids (Cylinder, Cone, Sphere)", pages: "272 - 282" },
          { code: "7.3", title: "Volume of Solids (Cylinder, Cone, Sphere)", pages: "282 - 291" },
          { code: "7.4", title: "Combination of Solids", pages: "291 - 297" },
          { code: "7.5", title: "Conversion of Solids", pages: "297 - 302" }
        ]
      },
      {
        unit: "Chapter 8",
        chapterNum: 8,
        title: "Statistics and Probability",
        pages: "303 - 338",
        topics: 6,
        theme: mathTheme,
        subtopics: [
          { code: "8.1", title: "Introduction", pages: "303 - 304" },
          { code: "8.2", title: "Measures of Dispersion and Range", pages: "304 - 311" },
          { code: "8.3", title: "Standard Deviation and Variance", pages: "311 - 322" },
          { code: "8.4", title: "Coefficient of Variation", pages: "322 - 326" },
          { code: "8.5", title: "Probability of Events", pages: "326 - 332" },
          { code: "8.6", title: "Addition Theorem of Probability", pages: "332 - 338" }
        ]
      }
    ];
  }

  if ((normalized.includes("science") && !normalized.includes("social")) || normalized.includes("physics")) {
    const scienceTheme = {
      accent: "#B45309",
      badgeBg: "bg-slate-900",
      badgeText: "text-white",
      cardBg: "bg-[#FDF1DC]",
      cardBorder: "border-[#FCD34D] border-b-[4px] border-b-[#FCD34D]",
      hoverBorder: "hover:border-[#F59E0B] hover:border-b-[#F59E0B]",
      labelColor: "text-[#B45309]",
      chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
    };

    if (classNum === 3) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        const science3Theme = {
          accent: "#059669",
          badgeBg: "bg-white",
          badgeBorder: "border-[#6EE7B7]",
          badgeText: "text-[#059669]",
          cardBg: "bg-[#ECFDF5]",
          cardBorder: "border-[#6EE7B7] border-b-[4px] border-b-[#6EE7B7]",
          hoverBorder: "hover:border-[#34D399] hover:border-b-[#34D399]",
          titleColor: "text-[#065F46]",
          chevronBorder: "border-[#6EE7B7]",
          chevronText: "text-[#059669]",
          chevronBg: "bg-white border border-[#6EE7B7] text-[#059669] shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "My Body",
            pages: "85 - 96",
            topics: 1,
            theme: science3Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "States of Matter",
            pages: "97 - 108",
            topics: 1,
            theme: science3Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Force",
            pages: "109 - 118",
            topics: 1,
            theme: science3Theme,
            subtopics: []
          },
          {
            unit: "Unit 4",
            unitNum: 4,
            title: "Science in Everyday Life",
            pages: "119 - 132",
            topics: 1,
            theme: science3Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 2) {
        const science3Term2Theme = {
          accent: "#0D9488",
          badgeBg: "bg-white",
          badgeBorder: "border-[#5EEAD4]",
          badgeText: "text-[#0D9488]",
          cardBg: "bg-[#F0FDFA]",
          cardBorder: "border-[#5EEAD4] border-b-[4px] border-b-[#5EEAD4]",
          hoverBorder: "hover:border-[#2DD4BF] hover:border-b-[#2DD4BF]",
          titleColor: "text-[#115E59]",
          chevronBorder: "border-[#5EEAD4]",
          chevronText: "text-[#0D9488]",
          chevronBg: "bg-white border border-[#5EEAD4] text-[#0D9488] shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Food",
            pages: "41 - 56",
            topics: 1,
            theme: science3Term2Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Water",
            pages: "57 - 68",
            topics: 1,
            theme: science3Term2Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Plants",
            pages: "69 - 84",
            topics: 1,
            theme: science3Term2Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 3) {
        const science3Term3Theme = {
          accent: "#0D9488",
          badgeBg: "bg-white",
          badgeBorder: "border-[#5EEAD4]",
          badgeText: "text-[#0D9488]",
          cardBg: "bg-[#F0FDFA]",
          cardBorder: "border-[#5EEAD4] border-b-[4px] border-b-[#5EEAD4]",
          hoverBorder: "hover:border-[#2DD4BF] hover:border-b-[#2DD4BF]",
          titleColor: "text-[#115E59]",
          chevronBorder: "border-[#5EEAD4]",
          chevronText: "text-[#0D9488]",
          chevronBg: "bg-white border border-[#5EEAD4] text-[#0D9488] shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Our Environment",
            pages: "69 - 82",
            topics: 1,
            theme: science3Term3Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Animal Life",
            pages: "83 - 96",
            topics: 1,
            theme: science3Term3Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Air",
            pages: "97 - 110",
            topics: 1,
            theme: science3Term3Theme,
            subtopics: []
          }
        ];
      }
    }

    if (classNum === 4) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        const science4Theme = {
          accent: "#0D9488",
          badgeBg: "bg-white",
          badgeBorder: "border-[#5EEAD4]",
          badgeText: "text-[#0D9488]",
          cardBg: "bg-[#F0FDFA]",
          cardBorder: "border-[#5EEAD4] border-b-[4px] border-b-[#5EEAD4]",
          hoverBorder: "hover:border-[#2DD4BF] hover:border-b-[#2DD4BF]",
          titleColor: "text-[#115E59]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "My Body",
            pages: "79 - 94",
            topics: 1,
            theme: science4Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Matter and Materials",
            pages: "95 - 110",
            topics: 1,
            theme: science4Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Work and Energy",
            pages: "111 - 124",
            topics: 1,
            theme: science4Theme,
            subtopics: []
          },
          {
            unit: "Unit 4",
            unitNum: 4,
            title: "Science in Everyday Life",
            pages: "125 - 138",
            topics: 1,
            theme: science4Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 2) {
        const science4Term2Theme = {
          accent: "#0D9488",
          badgeBg: "bg-white",
          badgeBorder: "border-[#5EEAD4]",
          badgeText: "text-[#0D9488]",
          cardBg: "bg-[#F0FDFA]",
          cardBorder: "border-[#5EEAD4] border-b-[4px] border-b-[#5EEAD4]",
          hoverBorder: "hover:border-[#2DD4BF] hover:border-b-[#2DD4BF]",
          titleColor: "text-[#115E59]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Food",
            pages: "57 - 68",
            topics: 1,
            theme: science4Term2Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Water",
            pages: "69 - 76",
            topics: 1,
            theme: science4Term2Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Plants",
            pages: "77 - 88",
            topics: 1,
            theme: science4Term2Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 3) {
        const science4Term3Theme = {
          accent: "#0D9488",
          badgeBg: "bg-white",
          badgeBorder: "border-[#5EEAD4]",
          badgeText: "text-[#0D9488]",
          cardBg: "bg-[#F0FDFA]",
          cardBorder: "border-[#5EEAD4] border-b-[4px] border-b-[#5EEAD4]",
          hoverBorder: "hover:border-[#2DD4BF] hover:border-b-[#2DD4BF]",
          titleColor: "text-[#115E59]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Green Environment",
            pages: "59 - 72",
            topics: 1,
            theme: science4Term3Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Life of Animals",
            pages: "73 - 86",
            topics: 1,
            theme: science4Term3Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Air We Breathe",
            pages: "87 - 98",
            topics: 1,
            theme: science4Term3Theme,
            subtopics: []
          }
        ];
      }
    }

    if (classNum === 5) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        const science5Theme = {
          accent: "#0D9488",
          badgeBg: "bg-white",
          badgeBorder: "border-[#5EEAD4]",
          badgeText: "text-[#0D9488]",
          cardBg: "bg-[#F0FDFA]",
          cardBorder: "border-[#5EEAD4] border-b-[4px] border-b-[#5EEAD4]",
          hoverBorder: "hover:border-[#2DD4BF] hover:border-b-[#2DD4BF]",
          titleColor: "text-[#115E59]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Organ Systems",
            pages: "77 - 92",
            topics: 1,
            theme: science5Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Matter and Materials",
            pages: "93 - 108",
            topics: 1,
            theme: science5Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Energy",
            pages: "109 - 122",
            topics: 1,
            theme: science5Theme,
            subtopics: []
          },
          {
            unit: "Unit 4",
            unitNum: 4,
            title: "Science in Everyday Life",
            pages: "123 - 138",
            topics: 1,
            theme: science5Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 2) {
        const science5Term2Theme = {
          accent: "#0D9488",
          badgeBg: "bg-white",
          badgeBorder: "border-[#5EEAD4]",
          badgeText: "text-[#0D9488]",
          cardBg: "bg-[#F0FDFA]",
          cardBorder: "border-[#5EEAD4] border-b-[4px] border-b-[#5EEAD4]",
          hoverBorder: "hover:border-[#2DD4BF] hover:border-b-[#2DD4BF]",
          titleColor: "text-[#115E59]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Food",
            pages: "55 - 68",
            topics: 1,
            theme: science5Term2Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Water",
            pages: "69 - 82",
            topics: 1,
            theme: science5Term2Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Plants",
            pages: "83 - 98",
            topics: 1,
            theme: science5Term2Theme,
            subtopics: []
          }
        ];
      }
    }

    if (classNum === 9) {
      const science9Theme = {
        accent: "#7E22CE",
        badgeBg: "bg-slate-900",
        badgeText: "text-white",
        cardBg: "bg-[#F3E8FF]",
        cardBorder: "border-[#C084FC] border-b-[4px] border-b-[#C084FC]",
        hoverBorder: "hover:border-[#A855F7] hover:border-b-[#A855F7]",
        labelColor: "text-[#6B21A8]",
        chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
      };

      return [
        { unit: "Unit 1", unitNum: 1, title: "Measurement", theme: science9Theme, pages: "1 - 14", topics: 5 },
        { unit: "Unit 2", unitNum: 2, title: "Motion", theme: science9Theme, pages: "15 - 28", topics: 5 },
        { unit: "Unit 3", unitNum: 3, title: "Fluids", theme: science9Theme, pages: "29 - 42", topics: 5 },
        { unit: "Unit 4", unitNum: 4, title: "Electric charge and Electric current", theme: science9Theme, pages: "43 - 56", topics: 5 },
        { unit: "Unit 5", unitNum: 5, title: "Magnetism and Electromagnetism", theme: science9Theme, pages: "57 - 72", topics: 5 },
        { unit: "Unit 6", unitNum: 6, title: "Light", theme: science9Theme, pages: "73 - 88", topics: 5 },
        { unit: "Unit 7", unitNum: 7, title: "Heat", theme: science9Theme, pages: "89 - 102", topics: 5 },
        { unit: "Unit 8", unitNum: 8, title: "Sound", theme: science9Theme, pages: "103 - 118", topics: 5 },
        { unit: "Unit 9", unitNum: 9, title: "Universe", theme: science9Theme, pages: "119 - 132", topics: 4 },
        { unit: "Unit 10", unitNum: 10, title: "Matter Around Us", theme: science9Theme, pages: "133 - 146", topics: 5 },
        { unit: "Unit 11", unitNum: 11, title: "Atomic Structure", theme: science9Theme, pages: "147 - 160", topics: 5 },
        { unit: "Unit 12", unitNum: 12, title: "Periodic Classification of Elements", theme: science9Theme, pages: "161 - 176", topics: 5 },
        { unit: "Unit 13", unitNum: 13, title: "Chemical Bonding", theme: science9Theme, pages: "177 - 190", topics: 5 },
        { unit: "Unit 14", unitNum: 14, title: "Acids, Bases and Salts", theme: science9Theme, pages: "191 - 204", topics: 5 },
        { unit: "Unit 15", unitNum: 15, title: "Carbon and its Compounds", theme: science9Theme, pages: "205 - 220", topics: 5 },
        { unit: "Unit 16", unitNum: 16, title: "Applied Chemistry", theme: science9Theme, pages: "221 - 236", topics: 5 },
        { unit: "Unit 17", unitNum: 17, title: "Animal Kingdom", theme: science9Theme, pages: "237 - 252", topics: 5 },
        { unit: "Unit 18", unitNum: 18, title: "Organisation of Tissues", theme: science9Theme, pages: "253 - 268", topics: 5 },
        { unit: "Unit 19", unitNum: 19, title: "Plant Physiology", theme: science9Theme, pages: "269 - 282", topics: 5 },
        { unit: "Unit 20", unitNum: 20, title: "Organ Systems in Animals", theme: science9Theme, pages: "283 - 298", topics: 5 },
        { unit: "Unit 21", unitNum: 21, title: "Nutrition and Health", theme: science9Theme, pages: "299 - 314", topics: 5 },
        { unit: "Unit 22", unitNum: 22, title: "World of Microbes", theme: science9Theme, pages: "315 - 330", topics: 5 },
        { unit: "Unit 23", unitNum: 23, title: "Economic Biology", theme: science9Theme, pages: "331 - 346", topics: 5 },
        { unit: "Unit 24", unitNum: 24, title: "Environmental Science", theme: science9Theme, pages: "347 - 362", topics: 5 },
        { unit: "Unit 25", unitNum: 25, title: "LibreOffice Impress", theme: science9Theme, pages: "363 - 376", topics: 4 }
      ];
    }

    return [
      { unit: "Unit 1", unitNum: 1, title: "Laws of Motion", theme: scienceTheme, pages: "1 - 15", topics: 4 },
      { unit: "Unit 1", unitNum: 1, title: "Optics", theme: scienceTheme, pages: "16 - 32", topics: 5 },
      { unit: "Unit 1", unitNum: 1, title: "Thermal Physics", theme: scienceTheme, pages: "33 - 48", topics: 4 },
      { unit: "Unit 1", unitNum: 1, title: "Electricity", theme: scienceTheme, pages: "49 - 68", topics: 6 },
      { unit: "Unit 1", unitNum: 1, title: "Acoustics", theme: scienceTheme, pages: "69 - 84", topics: 4 },
      { unit: "Unit 1", unitNum: 1, title: "Nuclear Physics", theme: scienceTheme, pages: "85 - 98", topics: 3 },
      { unit: "Unit 1", unitNum: 1, title: "Atoms and Molecules", theme: scienceTheme, pages: "99 - 118", topics: 5 },
      { unit: "Unit 1", unitNum: 1, title: "Periodic Classification of Elements", theme: scienceTheme, pages: "119 - 138", topics: 4 },
      { unit: "Unit 1", unitNum: 1, title: "Solutions", theme: scienceTheme, pages: "139 - 152", topics: 4 },
      { unit: "Unit 1", unitNum: 1, title: "Types of Chemical Reactions", theme: scienceTheme, pages: "153 - 170", topics: 5 },
      { unit: "Unit 1", unitNum: 1, title: "Carbon and its Compounds", theme: scienceTheme, pages: "171 - 192", topics: 5 },
      { unit: "Unit 1", unitNum: 1, title: "Plant Anatomy and Plant Physiology", theme: scienceTheme, pages: "193 - 212", topics: 6 },
      { unit: "Unit 1", unitNum: 1, title: "Structural Organisation of Animals", theme: scienceTheme, pages: "213 - 228", topics: 4 },
      { unit: "Unit 1", unitNum: 1, title: "Transportation in Plants and Circulation in Animals", theme: scienceTheme, pages: "229 - 248", topics: 5 },
      { unit: "Unit 1", unitNum: 1, title: "Nervous System", theme: scienceTheme, pages: "249 - 262", topics: 4 },
      { unit: "Unit 1", unitNum: 1, title: "Plant and Animal Hormones", theme: scienceTheme, pages: "263 - 276", topics: 4 },
      { unit: "Unit 1", unitNum: 1, title: "Reproduction in Plants and Animals", theme: scienceTheme, pages: "277 - 294", topics: 5 },
      { unit: "Unit 1", unitNum: 1, title: "Heredity", theme: scienceTheme, pages: "295 - 308", topics: 4 },
      { unit: "Unit 1", unitNum: 1, title: "Origin and Evolution of Life", theme: scienceTheme, pages: "309 - 322", topics: 4 },
      { unit: "Unit 1", unitNum: 1, title: "Breeding and Biotechnology", theme: scienceTheme, pages: "323 - 336", topics: 4 },
      { unit: "Unit 1", unitNum: 1, title: "Health and Diseases", theme: scienceTheme, pages: "337 - 352", topics: 5 },
      { unit: "Unit 1", unitNum: 1, title: "Environmental Management", theme: scienceTheme, pages: "353 - 368", topics: 4 },
      { unit: "Unit 1", unitNum: 1, title: "Visual Communication", theme: scienceTheme, pages: "369 - 380", topics: 3 }
    ];
  }

  if (normalized.includes("tamil")) {
    const tamilTheme = {
      accent: "#DB2777",
      badgeBg: "bg-slate-900",
      badgeText: "text-white",
      cardBg: "bg-[#FDE8E9]",
      cardBorder: "border-[#FDA4AF] border-b-[4px] border-b-[#FDA4AF]",
      hoverBorder: "hover:border-[#FB7185] hover:border-b-[#FB7185]",
      labelColor: "text-[#BE185D]",
      titleColor: "text-[#DB2777]",
      subBadgeBg: "bg-[#BE185D]/10 text-[#BE185D] border-[#FDA4AF]/50",
      chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
    };

    const tamil9Theme = {
      accent: "#0F172A",
      badgeBg: "bg-slate-900",
      badgeText: "text-white",
      cardBg: "bg-[#F1F5F9]",
      cardBorder: "border-slate-300 border-b-[4px] border-b-slate-300",
      hoverBorder: "hover:border-slate-400 hover:border-b-slate-400",
      labelColor: "text-slate-900",
      titleColor: "text-slate-900",
      subBadgeBg: "bg-slate-200 text-slate-800 border-slate-300",
      chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
    };

    const tamil1Theme = {
      accent: "#7C3AED",
      badgeBg: "bg-white",
      badgeBorder: "border-[#C084FC]",
      badgeText: "text-[#7C3AED]",
      cardBg: "bg-[#F3E8FF]",
      cardBorder: "border-[#C084FC] border-b-[4px] border-b-[#C084FC]",
      hoverBorder: "hover:border-[#A855F7] hover:border-b-[#A855F7]",
      labelColor: "text-purple-900",
      titleColor: "text-slate-900",
      subBadgeBg: "bg-purple-100 text-purple-800 border-purple-200",
      chevronBorder: "border-[#C084FC]",
      chevronText: "text-[#7C3AED]",
      chevronBg: "bg-white border border-[#C084FC] text-[#7C3AED] shadow-2xs"
    };

    if (classNum === 1) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 2) {
        const tamilBlueTheme = {
          accent: "#2563EB",
          badgeBg: "bg-blue-600",
          badgeText: "text-white",
          cardBg: "bg-[#EFF6FF]",
          cardBorder: "border-[#60A5FA] border-b-[4px] border-b-[#60A5FA]",
          hoverBorder: "hover:border-[#3B82F6] hover:border-b-[#3B82F6]",
          titleColor: "text-[#1E3A8A]",
          badgeBorder: "border-[#60A5FA]",
          badgeText: "text-[#2563EB]",
          chevronBorder: "border-[#60A5FA]",
          chevronText: "text-[#2563EB]",
          chevronBg: "bg-white border border-[#60A5FA] text-[#2563EB] shadow-2xs"
        };

        return [
          {
            unit: "அலகு 1",
            unitNum: 1,
            title: "ஜலசா! ஜலசா!",
            theme: tamilBlueTheme,
            pages: "1 - 10",
            topics: 1,
            subtopics: []
          },
          {
            unit: "அலகு 2",
            unitNum: 2,
            title: "காட்டிலே ஒரு விருந்து",
            theme: tamilBlueTheme,
            pages: "11 - 20",
            topics: 1,
            subtopics: []
          },
          {
            unit: "அலகு 3",
            unitNum: 3,
            title: "பழமும் படகும்",
            theme: tamilBlueTheme,
            pages: "21 - 30",
            topics: 1,
            subtopics: []
          },
          {
            unit: "அலகு 4",
            unitNum: 4,
            title: "அறுசுவை அறிவோம்",
            theme: tamilBlueTheme,
            pages: "31 - 42",
            topics: 1,
            subtopics: []
          }
        ];
      }

      if (termInt === 3) {
        return [
          {
            unit: "அலகு 1",
            unitNum: 1,
            title: "உலா போகலாம்",
            theme: tamil1Theme,
            pages: "1 - 10",
            topics: 1,
            subtopics: []
          },
          {
            unit: "அலகு 2",
            unitNum: 2,
            title: "இனிப்பு செய்யலாமா?",
            theme: tamil1Theme,
            pages: "11 - 20",
            topics: 1,
            subtopics: []
          },
          {
            unit: "அலகு 3",
            unitNum: 3,
            title: "ஊஞ்சல் ஆடலாமா?",
            theme: tamil1Theme,
            pages: "21 - 30",
            topics: 1,
            subtopics: []
          },
          {
            unit: "அலகு 4",
            unitNum: 4,
            title: "இனியாவின் ஒரு வாரம்",
            theme: tamil1Theme,
            pages: "31 - 40",
            topics: 1,
            subtopics: []
          },
          {
            unit: "அலகு 5",
            unitNum: 5,
            title: "தோரணம் செய்வோமா!",
            theme: tamil1Theme,
            pages: "41 - 50",
            topics: 1,
            subtopics: []
          },
          {
            unit: "அலகு 6",
            unitNum: 6,
            title: "பழம் பறக்குமா?",
            theme: tamil1Theme,
            pages: "51 - 60",
            topics: 1,
            subtopics: []
          },
          {
            unit: "அலகு 7",
            unitNum: 7,
            title: "இளையார் ஆத்திசூடி",
            theme: tamil1Theme,
            pages: "61 - 70",
            topics: 1,
            subtopics: []
          }
        ];
      }

      // Term 1 (Default or Term 1) - Authentic 5 units from textbook photo media_1791268891563.png
      return [
        {
          unit: "இயல் 1",
          unitNum: 1,
          title: "பாடி ஆடி விளையாடலாம்",
          themeName: "பாடல் & விளையாட்டு",
          theme: tamil1Theme,
          pages: "1 - 15",
          topics: 1,
          subtopics: []
        },
        {
          unit: "இயல் 2",
          unitNum: 2,
          title: "விரலோடு விளையாடு",
          themeName: "எழுத்துப் பயிற்சி & விளையாட்டு",
          theme: tamil1Theme,
          pages: "16 - 32",
          topics: 1,
          subtopics: []
        },
        {
          unit: "இயல் 3",
          unitNum: 3,
          title: "அருவியின் ஆட்டுக்குட்டி",
          themeName: "கதை & உயிர் எழுத்துகள்",
          theme: tamil1Theme,
          pages: "33 - 48",
          topics: 1,
          subtopics: []
        },
        {
          unit: "இயல் 4",
          unitNum: 4,
          title: "கொக்கு நிற்கும் குளக்கரை",
          themeName: "இயற்கை & சொல்வளம்",
          theme: tamil1Theme,
          pages: "49 - 65",
          topics: 1,
          subtopics: []
        },
        {
          unit: "இயல் 5",
          unitNum: 5,
          title: "கடற்கரைக்குச் செல்வோமா!",
          themeName: "பயணம் & மெய் எழுத்துகள்",
          theme: tamil1Theme,
          pages: "66 - 82",
          topics: 1,
          subtopics: []
        }
      ];
    }

    if (classNum === 2) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        const tamilGreenTheme = {
          accent: "#0da49f",
          badgeBg: "bg-white",
          badgeBorder: "border-[#5EEAD4]",
          badgeText: "text-[#0da49f]",
          cardBg: "bg-[#F0FDFA]",
          cardBorder: "border-[#5EEAD4] border-b-[4px] border-b-[#5EEAD4]",
          hoverBorder: "hover:border-[#2DD4BF] hover:border-b-[#2DD4BF]",
          titleColor: "text-[#115E59]",
          chevronBg: "bg-white border border-[#5EEAD4] text-[#0da49f] shadow-2xs"
        };

        return [
          {
            unit: "அலகு 1",
            unitNum: 1,
            title: "விளையாட்டு உலகம்",
            pages: "1 - 11",
            topics: 1,
            theme: tamilGreenTheme,
            subtopics: []
          },
          {
            unit: "அலகு 2",
            unitNum: 2,
            title: "செய்து மகிழ்வோம்",
            pages: "12 - 17",
            topics: 1,
            theme: tamilGreenTheme,
            subtopics: []
          },
          {
            unit: "அலகு 3",
            unitNum: 3,
            title: "சொல்லாதே! சொல்லாதே!",
            pages: "18 - 20",
            topics: 1,
            theme: tamilGreenTheme,
            subtopics: []
          },
          {
            unit: "அலகு 4",
            unitNum: 4,
            title: "நானும் நாங்களும்",
            pages: "21 - 25",
            topics: 1,
            theme: tamilGreenTheme,
            subtopics: []
          },
          {
            unit: "அலகு 5",
            unitNum: 5,
            title: "நண்பரைக் கண்டுபிடி!",
            pages: "26 - 31",
            topics: 1,
            theme: tamilGreenTheme,
            subtopics: []
          },
          {
            unit: "அலகு 6",
            unitNum: 6,
            title: "குமிழியின் பயணம்",
            pages: "32 - 35",
            topics: 1,
            theme: tamilGreenTheme,
            subtopics: []
          },
          {
            unit: "அலகு 7",
            unitNum: 7,
            title: "என் கற்பனையில்...",
            pages: "36 - 40",
            topics: 1,
            theme: tamilGreenTheme,
            subtopics: []
          },
          {
            unit: "அலகு 8",
            unitNum: 8,
            title: "இறகு",
            pages: "41 - 44",
            topics: 1,
            theme: tamilGreenTheme,
            subtopics: []
          },
          {
            unit: "அலகு 9",
            unitNum: 9,
            title: "கடற்கரைக்குப் போகலாம்",
            pages: "45 - 48",
            topics: 1,
            theme: tamilGreenTheme,
            subtopics: []
          },
          {
            unit: "அலகு 10",
            unitNum: 10,
            title: "ஆத்திசூடி",
            pages: "49 - 56",
            topics: 1,
            theme: tamilGreenTheme,
            subtopics: []
          }
        ];
      }

      if (termInt === 2) {
        const charcoalTheme = {
          accent: "#334155",
          badgeBg: "bg-white",
          badgeBorder: "border-[#94A3B8]",
          badgeText: "text-[#334155]",
          cardBg: "bg-[#F1F5F9]",
          cardBorder: "border-[#94A3B8] border-b-[4px] border-b-[#94A3B8]",
          hoverBorder: "hover:border-[#64748B] hover:border-b-[#64748B]",
          titleColor: "text-[#1E293B]",
          chevronBg: "bg-white border border-[#94A3B8] text-[#334155] shadow-2xs"
        };

        return [
          {
            unit: "அலகு 1",
            unitNum: 1,
            title: "நானே பறிப்பேன்",
            pages: "1 - 8",
            topics: 1,
            theme: charcoalTheme,
            subtopics: []
          },
          {
            unit: "அலகு 1",
            unitNum: 2,
            title: "அழகுத் தோட்டம்",
            pages: "9 - 16",
            topics: 1,
            theme: charcoalTheme,
            subtopics: []
          },
          {
            unit: "அலகு 1",
            unitNum: 3,
            title: "பூம்வண்டி",
            pages: "17 - 24",
            topics: 1,
            theme: charcoalTheme,
            subtopics: []
          },
          {
            unit: "அலகு 1",
            unitNum: 4,
            title: "விட்டுச் செல்லாதே!",
            pages: "25 - 32",
            topics: 1,
            theme: charcoalTheme,
            subtopics: []
          },
          {
            unit: "அலகு 1",
            unitNum: 5,
            title: "ஓடி விளையாடு பாப்பா",
            pages: "33 - 40",
            topics: 1,
            theme: charcoalTheme,
            subtopics: []
          },
          {
            unit: "அலகு 1",
            unitNum: 6,
            title: "ஆத்திசூடி",
            pages: "41 - 48",
            topics: 1,
            theme: charcoalTheme,
            subtopics: []
          }
        ];
      }

      if (termInt === 3) {
        const tamilYellowTheme = {
          accent: "#D97706",
          badgeBg: "bg-white",
          badgeBorder: "border-[#FCD34D]",
          badgeText: "text-[#D97706]",
          cardBg: "bg-[#FEF3C7]",
          cardBorder: "border-[#FCD34D] border-b-[4px] border-b-[#FCD34D]",
          hoverBorder: "hover:border-[#F59E0B] hover:border-b-[#F59E0B]",
          titleColor: "text-[#92400E]",
          chevronBg: "bg-white border border-[#FCD34D] text-[#D97706] shadow-2xs"
        };

        return [
          {
            unit: "அலகு 1",
            unitNum: 1,
            title: "எப்படி உதவலாம்?",
            pages: "1 - 8",
            topics: 1,
            theme: tamilYellowTheme,
            subtopics: []
          },
          {
            unit: "அலகு 2",
            unitNum: 2,
            title: "யாரு? யாரு? யாரு?",
            pages: "9 - 16",
            topics: 1,
            theme: tamilYellowTheme,
            subtopics: []
          },
          {
            unit: "அலகு 3",
            unitNum: 3,
            title: "சிறிய உருவம்! பெரிய உலகம்!",
            pages: "17 - 24",
            topics: 1,
            theme: tamilYellowTheme,
            subtopics: []
          },
          {
            unit: "அலகு 4",
            unitNum: 4,
            title: "நாங்கள் நண்பர்கள்",
            pages: "25 - 32",
            topics: 1,
            theme: tamilYellowTheme,
            subtopics: []
          },
          {
            unit: "அலகு 5",
            unitNum: 5,
            title: "வண்ணம் தொட்டு",
            pages: "33 - 40",
            topics: 1,
            theme: tamilYellowTheme,
            subtopics: []
          },
          {
            unit: "அலகு 6",
            unitNum: 6,
            title: "அன்றும்... இன்றும்...",
            pages: "41 - 48",
            topics: 1,
            theme: tamilYellowTheme,
            subtopics: []
          },
          {
            unit: "அலகு 7",
            unitNum: 7,
            title: "விரும்பி வேலை செய்யலாம்",
            pages: "49 - 56",
            topics: 1,
            theme: tamilYellowTheme,
            subtopics: []
          },
          {
            unit: "அலகு 8",
            unitNum: 8,
            title: "கொன்றை வேந்தன்",
            pages: "57 - 64",
            topics: 1,
            theme: tamilYellowTheme,
            subtopics: []
          }
        ];
      }
    }

    if (classNum === 3) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        const tamil3Theme = {
          accent: "#847E5A",
          badgeBg: "bg-white",
          badgeBorder: "border-[#D6D3C4]",
          badgeText: "text-[#847E5A]",
          cardBg: "bg-[#FBFBEE]",
          cardBorder: "border-[#D6D3C4] border-b-[4px] border-b-[#D6D3C4]",
          hoverBorder: "hover:border-[#A8A29E] hover:border-b-[#A8A29E]",
          titleColor: "text-[#292524]",
          chevronBorder: "border-[#D6D3C4]",
          chevronText: "text-[#847E5A]",
          chevronBg: "bg-white border border-[#D6D3C4] text-[#847E5A] shadow-2xs"
        };

        return [
          {
            unit: "அலகு 1",
            unitNum: 1,
            title: "தமிழ் அமுது",
            pages: "1 - 5",
            topics: 1,
            theme: tamil3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 2",
            unitNum: 2,
            title: "மாணவர்கள் நினைத்தால்...",
            pages: "6 - 11",
            topics: 1,
            theme: tamil3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 3",
            unitNum: 3,
            title: "மாட்டு வண்டியிலே...",
            pages: "12 - 16",
            topics: 1,
            theme: tamil3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 4",
            unitNum: 4,
            title: "டூம்... டூம்... சின்னு",
            pages: "17 - 21",
            topics: 1,
            theme: tamil3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 5",
            unitNum: 5,
            title: "கல்வி கண் போன்றது",
            pages: "22 - 27",
            topics: 1,
            theme: tamil3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 6",
            unitNum: 6,
            title: "நமது நண்பர்",
            pages: "28 - 32",
            topics: 1,
            theme: tamil3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 7",
            unitNum: 7,
            title: "இறகு யாருடையது?",
            pages: "33 - 38",
            topics: 1,
            theme: tamil3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 8",
            unitNum: 8,
            title: "சான்றோர் மொழி",
            pages: "39 - 48",
            topics: 1,
            theme: tamil3Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 2) {
        const tamil3Term2Theme = {
          accent: "#DB2777",
          badgeBg: "bg-white",
          badgeBorder: "border-[#F472B6]",
          badgeText: "text-[#DB2777]",
          cardBg: "bg-[#FDF2F8]",
          cardBorder: "border-[#F472B6] border-b-[4px] border-b-[#F472B6]",
          hoverBorder: "hover:border-[#EC4899] hover:border-b-[#EC4899]",
          titleColor: "text-[#9D174D]",
          chevronBorder: "border-[#F472B6]",
          chevronText: "text-[#DB2777]",
          chevronBg: "bg-white border border-[#F472B6] text-[#DB2777] shadow-2xs"
        };

        return [
          {
            unit: "அலகு 1",
            unitNum: 1,
            title: "நாயும் ஓநாயும்",
            pages: "1 - 6",
            topics: 1,
            theme: tamil3Term2Theme,
            subtopics: []
          },
          {
            unit: "அலகு 2",
            unitNum: 2,
            title: "நூலகம்",
            pages: "7 - 12",
            topics: 1,
            theme: tamil3Term2Theme,
            subtopics: []
          },
          {
            unit: "அலகு 3",
            unitNum: 3,
            title: "தூக்கணாங்குருவியும் ஒட்டகச்சிவிங்கியும்",
            pages: "13 - 18",
            topics: 1,
            theme: tamil3Term2Theme,
            subtopics: []
          },
          {
            unit: "அலகு 4",
            unitNum: 4,
            title: "ஏன்? ஏன்?",
            pages: "19 - 24",
            topics: 1,
            theme: tamil3Term2Theme,
            subtopics: []
          },
          {
            unit: "அலகு 5",
            unitNum: 5,
            title: "ஒன்றுபட்டால் உண்டு வாழ்வு",
            pages: "25 - 30",
            topics: 1,
            theme: tamil3Term2Theme,
            subtopics: []
          },
          {
            unit: "அலகு 6",
            unitNum: 6,
            title: "திருக்குறள் கதைகள்",
            pages: "31 - 40",
            topics: 1,
            theme: tamil3Term2Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 3) {
        const tamil3Term3Theme = {
          accent: "#DB2777",
          badgeBg: "bg-white",
          badgeBorder: "border-[#F472B6]",
          badgeText: "text-[#DB2777]",
          cardBg: "bg-[#FDF2F8]",
          cardBorder: "border-[#F472B6] border-b-[4px] border-b-[#F472B6]",
          hoverBorder: "hover:border-[#EC4899] hover:border-b-[#EC4899]",
          titleColor: "text-[#9D174D]",
          chevronBorder: "border-[#F472B6]",
          chevronText: "text-[#DB2777]",
          chevronBg: "bg-white border border-[#F472B6] text-[#DB2777] shadow-2xs"
        };

        return [
          {
            unit: "அலகு 1",
            unitNum: 1,
            title: "என் நினைவில்",
            pages: "1 - 4",
            topics: 1,
            theme: tamil3Term3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 2",
            unitNum: 2,
            title: "செந்தமிழ் நாடு",
            pages: "5 - 10",
            topics: 1,
            theme: tamil3Term3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 3",
            unitNum: 3,
            title: "தனித்திறமை",
            pages: "11 - 16",
            topics: 1,
            theme: tamil3Term3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 4",
            unitNum: 4,
            title: "நட்பே உயர்வு",
            pages: "17 - 22",
            topics: 1,
            theme: tamil3Term3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 5",
            unitNum: 5,
            title: "விண்ணின் கொடை",
            pages: "23 - 28",
            topics: 1,
            theme: tamil3Term3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 6",
            unitNum: 6,
            title: "முயற்சி வெல்லும்!",
            pages: "29 - 34",
            topics: 1,
            theme: tamil3Term3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 7",
            unitNum: 7,
            title: "அறிவூட்டும் தொலைக்காட்சி",
            pages: "35 - 40",
            topics: 1,
            theme: tamil3Term3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 8",
            unitNum: 8,
            title: "நல்வழி",
            pages: "41 - 46",
            topics: 1,
            theme: tamil3Term3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 9",
            unitNum: 9,
            title: "பட விளக்க அகரமுதலி",
            pages: "47 - 52",
            topics: 1,
            theme: tamil3Term3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 10",
            unitNum: 10,
            title: "வந்த பாதை",
            pages: "53 - 60",
            topics: 1,
            theme: tamil3Term3Theme,
            subtopics: []
          }
        ];
      }
    }

    if (classNum === 4) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        const tamil4Theme = {
          accent: "#DB2777",
          badgeBg: "bg-white",
          badgeBorder: "border-[#F472B6]",
          badgeText: "text-[#DB2777]",
          cardBg: "bg-[#FDF2F8]",
          cardBorder: "border-[#F472B6] border-b-[4px] border-b-[#F472B6]",
          hoverBorder: "hover:border-[#EC4899] hover:border-b-[#EC4899]",
          titleColor: "text-[#9D174D]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "அலகு 1",
            unitNum: 1,
            title: "அன்னைத் தமிழே!",
            pages: "1 - 6",
            topics: 1,
            theme: tamil4Theme,
            subtopics: []
          },
          {
            unit: "அலகு 2",
            unitNum: 2,
            title: "பனைமரச் சிறப்பு",
            pages: "7 - 14",
            topics: 1,
            theme: tamil4Theme,
            subtopics: []
          },
          {
            unit: "அலகு 3",
            unitNum: 3,
            title: "யார் தலைவர்?",
            pages: "15 - 20",
            topics: 1,
            theme: tamil4Theme,
            subtopics: []
          },
          {
            unit: "அலகு 4",
            unitNum: 4,
            title: "முளைப்பாரி – பாடல்",
            pages: "21 - 26",
            topics: 1,
            theme: tamil4Theme,
            subtopics: []
          },
          {
            unit: "அலகு 5",
            unitNum: 5,
            title: "விடியும் வேளை",
            pages: "27 - 34",
            topics: 1,
            theme: tamil4Theme,
            subtopics: []
          },
          {
            unit: "அலகு 6",
            unitNum: 6,
            title: "கரிகாலன் கட்டிய கல்லணை",
            pages: "35 - 42",
            topics: 1,
            theme: tamil4Theme,
            subtopics: []
          },
          {
            unit: "அலகு 7",
            unitNum: 7,
            title: "வெற்றி வேற்கை",
            pages: "43 - 48",
            topics: 1,
            theme: tamil4Theme,
            subtopics: []
          },
          {
            unit: "அலகு 8",
            unitNum: 8,
            title: "அகரமுதலி",
            pages: "49 - 56",
            topics: 1,
            theme: tamil4Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 2) {
        const tamil4Term2Theme = {
          accent: "#DB2777",
          badgeBg: "bg-white",
          badgeBorder: "border-[#F472B6]",
          badgeText: "text-[#DB2777]",
          cardBg: "bg-[#FDF2F8]",
          cardBorder: "border-[#F472B6] border-b-[4px] border-b-[#F472B6]",
          hoverBorder: "hover:border-[#EC4899] hover:border-b-[#EC4899]",
          titleColor: "text-[#9D174D]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "அலகு 1",
            unitNum: 1,
            title: "காவல்காரர்",
            pages: "1 - 8",
            topics: 1,
            theme: tamil4Term2Theme,
            subtopics: []
          },
          {
            unit: "அலகு 2",
            unitNum: 2,
            title: "யானைக்கும் பானைக்கும்",
            pages: "9 - 16",
            topics: 1,
            theme: tamil4Term2Theme,
            subtopics: []
          },
          {
            unit: "அலகு 3",
            unitNum: 3,
            title: "பனிமலைப் பயணம்",
            pages: "17 - 24",
            topics: 1,
            theme: tamil4Term2Theme,
            subtopics: []
          },
          {
            unit: "அலகு 4",
            unitNum: 4,
            title: "உள்ளங்கையில் ஓர் உலகம்",
            pages: "25 - 32",
            topics: 1,
            theme: tamil4Term2Theme,
            subtopics: []
          },
          {
            unit: "அலகு 5",
            unitNum: 5,
            title: "எழில் கொஞ்சும் அருவி",
            pages: "33 - 40",
            topics: 1,
            theme: tamil4Term2Theme,
            subtopics: []
          },
          {
            unit: "அலகு 6",
            unitNum: 6,
            title: "அன்பின் வழி",
            pages: "41 - 48",
            topics: 1,
            theme: tamil4Term2Theme,
            subtopics: []
          },
          {
            unit: "அலகு 7",
            unitNum: 7,
            title: "நன்னெறி",
            pages: "49 - 54",
            topics: 1,
            theme: tamil4Term2Theme,
            subtopics: []
          },
          {
            unit: "அலகு 8",
            unitNum: 8,
            title: "அகர முதலி",
            pages: "55 - 60",
            topics: 1,
            theme: tamil4Term2Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 3) {
        const tamil4Term3Theme = {
          accent: "#DB2777",
          badgeBg: "bg-white",
          badgeBorder: "border-[#F472B6]",
          badgeText: "text-[#DB2777]",
          cardBg: "bg-[#FDF2F8]",
          cardBorder: "border-[#F472B6] border-b-[4px] border-b-[#F472B6]",
          hoverBorder: "hover:border-[#EC4899] hover:border-b-[#EC4899]",
          titleColor: "text-[#9D174D]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "அலகு 1",
            unitNum: 1,
            title: "உலா வரும் செயற்கைக்கோள்",
            pages: "1 - 8",
            topics: 1,
            theme: tamil4Term3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 2",
            unitNum: 2,
            title: "மாசு இல்லா உலகம்",
            pages: "9 - 16",
            topics: 1,
            theme: tamil4Term3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 3",
            unitNum: 3,
            title: "காட்டுக்குள்ளே பாட்டுப்போட்டி",
            pages: "17 - 24",
            topics: 1,
            theme: tamil4Term3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 4",
            unitNum: 4,
            title: "இனிமை நிறைந்த பூமி",
            pages: "25 - 32",
            topics: 1,
            theme: tamil4Term3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 5",
            unitNum: 5,
            title: "மலையும் எதிரொலியும்",
            pages: "33 - 40",
            topics: 1,
            theme: tamil4Term3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 6",
            unitNum: 6,
            title: "திருக்குறள் கதைகள்",
            pages: "41 - 48",
            topics: 1,
            theme: tamil4Term3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 7",
            unitNum: 7,
            title: "விளையாட்டு விழா",
            pages: "49 - 56",
            topics: 1,
            theme: tamil4Term3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 8",
            unitNum: 8,
            title: "கல்வி அழகே அழகு",
            pages: "57 - 62",
            topics: 1,
            theme: tamil4Term3Theme,
            subtopics: []
          },
          {
            unit: "அலகு 9",
            unitNum: 9,
            title: "அகரமுதலி",
            pages: "63 - 68",
            topics: 1,
            theme: tamil4Term3Theme,
            subtopics: []
          }
        ];
      }
    }

    if (classNum === 5) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        const tamil5Theme = {
          accent: "#DB2777",
          badgeBg: "bg-white",
          badgeBorder: "border-[#F472B6]",
          badgeText: "text-[#DB2777]",
          cardBg: "bg-[#FDF2F8]",
          cardBorder: "border-[#F472B6] border-b-[4px] border-b-[#F472B6]",
          hoverBorder: "hover:border-[#EC4899] hover:border-b-[#EC4899]",
          titleColor: "text-[#9D174D]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "இயல் 1",
            unitNum: 1,
            title: "தமிழ்த்தேன்",
            themeName: "மொழி",
            theme: tamil5Theme,
            pages: "1 - 18",
            topics: 4,
            subtopics: [
              { title: "தமிழின் இனிமை!", hasAsterisk: true, type: "பாடல்" },
              { title: "அறிவுநிலா", hasAsterisk: false, type: "உரைநடை" },
              { title: "என்ன சத்தம்...?", hasAsterisk: false, type: "துணைப்பாடம்" },
              { title: "மரபுச்சொற்கள்", hasAsterisk: false, type: "இலக்கணம்" }
            ]
          },
          {
            unit: "இயல் 2",
            unitNum: 2,
            title: "கல்வி",
            themeName: "கல்வி",
            theme: tamil5Theme,
            pages: "19 - 36",
            topics: 4,
            subtopics: [
              { title: "மூதுரை", hasAsterisk: true, type: "பாடல்" },
              { title: "கல்விச்செல்வமும் பொருட்செல்வமும்", hasAsterisk: false, type: "உரைநடை" },
              { title: "பொறுமைக்குக் கிடைத்த பரிசு", hasAsterisk: false, type: "துணைப்பாடம்" },
              { title: "பெயர்ச்சொல், வினைச்சொல், மூவிடப்பெயர்கள்", hasAsterisk: false, type: "இலக்கணம்" }
            ]
          },
          {
            unit: "இயல் 3",
            unitNum: 3,
            title: "இயற்கை",
            themeName: "இயற்கை",
            theme: tamil5Theme,
            pages: "37 - 54",
            topics: 4,
            subtopics: [
              { title: "கடல்", hasAsterisk: true, type: "பாடல்" },
              { title: "பழமொழிக்குப் பரிசு", hasAsterisk: false, type: "உரைநடை" },
              { title: "தப்பிப் பிழைத்த மான்", hasAsterisk: false, type: "துணைப்பாடம்" },
              { title: "சொற்றொடர் அமைப்பு முறை", hasAsterisk: false, type: "இலக்கணம்" }
            ]
          },
          {
            unit: "அகராதி",
            unitNum: 4,
            title: "அகரமுதலி",
            theme: tamil5Theme,
            pages: "55 - 60",
            topics: 1,
            subtopics: []
          }
        ];
      }

      if (termInt === 2) {
        const tamil5Term2Theme = {
          accent: "#DB2777",
          badgeBg: "bg-white",
          badgeBorder: "border-[#F472B6]",
          badgeText: "text-[#DB2777]",
          cardBg: "bg-[#FDF2F8]",
          cardBorder: "border-[#F472B6] border-b-[4px] border-b-[#F472B6]",
          hoverBorder: "hover:border-[#EC4899] hover:border-b-[#EC4899]",
          titleColor: "text-[#9D174D]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "இயல் 1",
            unitNum: 1,
            title: "நாகரிகம் / பண்பாடு",
            themeName: "நாகரிகம் / பண்பாடு",
            theme: tamil5Term2Theme,
            pages: "1 - 18",
            topics: 4,
            subtopics: [
              { title: "திருக்குறள்", hasAsterisk: true, type: "பாடல்" },
              { title: "தமிழர்களின் வீரக்கலைகள்", hasAsterisk: false, type: "உரைநடை" },
              { title: "கங்கை கொண்ட சோழபுரம்", hasAsterisk: false, type: "துணைப்பாடம்" },
              { title: "இணைப்புச்சொற்கள்", hasAsterisk: false, type: "இலக்கணம்" }
            ]
          },
          {
            unit: "இயல் 2",
            unitNum: 2,
            title: "தொழில் / வணிகம்",
            themeName: "தொழில் / வணிகம்",
            theme: tamil5Term2Theme,
            pages: "19 - 36",
            topics: 4,
            subtopics: [
              { title: "உழவுப் பொங்கல்", hasAsterisk: true, type: "பாடல்" },
              { title: "விதைத் திருவிழா", hasAsterisk: false, type: "உரைநடை" },
              { title: "எது அழகு?", hasAsterisk: false, type: "துணைப்பாடம்" },
              { title: "அடுக்குத்தொடர், இரட்டைக்கிளவி", hasAsterisk: false, type: "இலக்கணம்" }
            ]
          },
          {
            unit: "அகராதி",
            unitNum: 3,
            title: "அகரமுதலி",
            theme: tamil5Term2Theme,
            pages: "37 - 40",
            topics: 1,
            subtopics: []
          }
        ];
      }
    }

    if (classNum === 9) {
      return [
        {
          unit: "இயல் 1",
          unitNum: 1,
          title: "அமுதூற்றுப் பேறு",
          themeName: "மொழி",
          theme: tamil9Theme,
          pages: "1 - 24",
          topics: 5,
          subtopics: [
            { title: "தமிழ்விடு தூது", hasAsterisk: true, type: "செய்யுள்" },
            { title: "திராவிட மொழிக் குடும்பம்", hasAsterisk: false, type: "உரைநடை" },
            { title: "தமிழோவியம்", hasAsterisk: false, type: "செய்யுள்" },
            { title: "அமுதம் நினைவு", hasAsterisk: false, type: "விரிவானம்" },
            { title: "எழுத்து – அடிப்படை", hasAsterisk: false, type: "கற்கண்டு" }
          ]
        },
        {
          unit: "இயல் 2",
          unitNum: 2,
          title: "உயிர்த்தெழு வேர்",
          themeName: "இயற்கை, சுற்றுச்சூழல்",
          theme: tamil9Theme,
          pages: "25 - 50",
          topics: 5,
          subtopics: [
            { title: "நீரின்றி அமையாது உலகு", hasAsterisk: false, type: "உரைநடை" },
            { title: "பெரியபுராணம்", hasAsterisk: true, type: "செய்யுள்" },
            { title: "புறநானூறு", hasAsterisk: true, type: "செய்யுள்" },
            { title: "தண்ணீர்", hasAsterisk: false, type: "விரிவானம்" },
            { title: "பகுபத உறுப்பிலக்கணம்", hasAsterisk: false, type: "கற்கண்டு" }
          ]
        },
        {
          unit: "இயல் 3",
          unitNum: 3,
          title: "உள்ளத்தின் சீர்",
          themeName: "பண்பாடு, மனிதம்",
          theme: tamil9Theme,
          pages: "51 - 76",
          topics: 6,
          subtopics: [
            { title: "ஏறு தழுவுதல்", hasAsterisk: false, type: "உரைநடை" },
            { title: "மணிமேகலை", hasAsterisk: false, type: "செய்யுள்" },
            { title: "மார்கழிப் பெருவிழா", hasAsterisk: false, type: "விரிவானம்" },
            { title: "தாய்மைக்கு வறட்சி இல்லை!", hasAsterisk: false, type: "துணைப்பாடம்" },
            { title: "தொடர் இலக்கணம், ஆகுபெயர்", hasAsterisk: false, type: "கற்கண்டு" },
            { title: "திருக்குறள்", hasAsterisk: true, type: "வாழ்வியல்" }
          ]
        },
        {
          unit: "இயல் 4",
          unitNum: 4,
          title: "கசடற மொழிதல்",
          themeName: "கல்வி",
          theme: tamil9Theme,
          pages: "77 - 102",
          topics: 5,
          subtopics: [
            { title: "கல்வியில் சிறந்த பெண்கள்", hasAsterisk: false, type: "உரைநடை" },
            { title: "குடும்ப விளக்கு", hasAsterisk: false, type: "செய்யுள்" },
            { title: "உயிர்வகை", hasAsterisk: true, type: "செய்யுள்" },
            { title: "வீட்டிற்கோர் புத்தகசாலை", hasAsterisk: false, type: "விரிவானம்" },
            { title: "துணைவினைகள்", hasAsterisk: false, type: "கற்கண்டு" }
          ]
        },
        {
          unit: "இயல் 5",
          unitNum: 5,
          title: "கலை பல வளர்த்தல்",
          themeName: "கலை, அழகியல், புதுமை",
          theme: tamil9Theme,
          pages: "103 - 128",
          topics: 5,
          subtopics: [
            { title: "சிற்பக்கலை", hasAsterisk: false, type: "உரைநடை" },
            { title: "இராவண காவியம்", hasAsterisk: true, type: "செய்யுள்" },
            { title: "செய்தி", hasAsterisk: false, type: "விரிவானம்" },
            { title: "வல்லினம் மிகும் இடங்கள்", hasAsterisk: false, type: "கற்கண்டு" },
            { title: "திருக்குறள்", hasAsterisk: true, type: "வாழ்வியல்" }
          ]
        },
        {
          unit: "இயல் 6",
          unitNum: 6,
          title: "வாழிய நிலனே",
          themeName: "நாடு, சமூகம், அரசு, நிருவாகம்",
          theme: tamil9Theme,
          pages: "129 - 154",
          topics: 4,
          subtopics: [
            { title: "இந்திய தேசிய இராணுவத்தில் தமிழர் பங்கு", hasAsterisk: false, type: "உரைநடை" },
            { title: "சீவக சிந்தாமணி", hasAsterisk: true, type: "செய்யுள்" },
            { title: "விண்ணைத் தாண்டுவோம்", hasAsterisk: false, type: "விரிவானம்" },
            { title: "வல்லினம் மிகா இடங்கள்", hasAsterisk: false, type: "கற்கண்டு" }
          ]
        },
        {
          unit: "இயல் 7",
          unitNum: 7,
          title: "எண்ணமெலாம் சுடரே",
          themeName: "அறம், தத்துவம், சிந்தனை",
          theme: tamil9Theme,
          pages: "155 - 180",
          topics: 5,
          subtopics: [
            { title: "பெரியாரின் சிந்தனைகள்", hasAsterisk: false, type: "உரைநடை" },
            { title: "ஓ, என் சமகாலத் தோழர்களே!", hasAsterisk: true, type: "செய்யுள்" },
            { title: "யசோதர காவியம்", hasAsterisk: true, type: "செய்யுள்" },
            { title: "மகனுக்கு எழுதிய கடிதம்", hasAsterisk: false, type: "விரிவானம்" },
            { title: "யாப்பிலக்கணம்", hasAsterisk: false, type: "கற்கண்டு" }
          ]
        }
      ];
    }

    return [
      {
        unit: "இயல் 1",
        unitNum: 1,
        title: "அமுதஊற்று",
        themeName: "மொழி, மனிதம்",
        theme: tamilTheme,
        pages: "1 - 26",
        topics: 5,
        subtopics: [
          { title: "அன்னை மொழியே", hasAsterisk: true, type: "செய்யுள்" },
          { title: "பாவாணர் பார்வையில் தமிழ்ச்சொல் வளம்", hasAsterisk: false, type: "உரைநடை" },
          { title: "காலக்கணிதம்", hasAsterisk: true, type: "செய்யுள்" },
          { title: "புயலிலே ஒரு தோணி", hasAsterisk: false, type: "விரிவானம்" },
          { title: "எழுத்து", hasAsterisk: false, type: "கற்கண்டு" }
        ]
      },
      {
        unit: "இயல் 2",
        unitNum: 2,
        title: "உயிரின் ஓசை",
        themeName: "இயற்கை, சுற்றுச்சூழல், அறிவியல்",
        theme: tamilTheme,
        pages: "27 - 52",
        topics: 5,
        subtopics: [
          { title: "கேட்கிறதா என் குரல்!", hasAsterisk: false, type: "உரைநடை" },
          { title: "பரிபாடல்", hasAsterisk: false, type: "செய்யுள்" },
          { title: "மேகம்", hasAsterisk: false, type: "செய்யுள்" },
          { title: "பிரளயம்", hasAsterisk: false, type: "விரிவானம்" },
          { title: "தொகைநிலைத் தொடர்கள்", hasAsterisk: false, type: "கற்கண்டு" }
        ]
      },
      {
        unit: "இயல் 3",
        unitNum: 3,
        title: "கூட்டாஞ்சோறு",
        themeName: "பண்பாடு",
        theme: tamilTheme,
        pages: "53 - 78",
        topics: 6,
        subtopics: [
          { title: "விருந்து போற்றுதும்!", hasAsterisk: false, type: "உரைநடை" },
          { title: "காசிக்காண்டம்", hasAsterisk: true, type: "செய்யுள்" },
          { title: "முத்துக்குமாரசாமி பிள்ளைத்தமிழ்", hasAsterisk: false, type: "செய்யுள்" },
          { title: "கோபல்லபுரத்து மக்கள்", hasAsterisk: false, type: "விரிவானம்" },
          { title: "தொகாநிலைத் தொடர்கள்", hasAsterisk: false, type: "கற்கண்டு" },
          { title: "திருக்குறள்", hasAsterisk: true, type: "கற்பவை கற்றபின்" }
        ]
      },
      {
        unit: "இயல் 4",
        unitNum: 4,
        title: "மணற்கேணி",
        themeName: "கல்வி",
        theme: tamilTheme,
        pages: "79 - 104",
        topics: 4,
        subtopics: [
          { title: "மொழிபெயர்ப்புக் கல்வி", hasAsterisk: false, type: "உரைநடை" },
          { title: "திருவிளையாடற் புராணம்", hasAsterisk: true, type: "செய்யுள்" },
          { title: "புதிய நம்பிக்கை", hasAsterisk: false, type: "விரிவானம்" },
          { title: "இலக்கணம் – பொது", hasAsterisk: false, type: "கற்கண்டு" }
        ]
      },
      {
        unit: "இயல் 5",
        unitNum: 5,
        title: "நிலா முற்றம்",
        themeName: "கலை, அழகியல், புதுமை",
        theme: tamilTheme,
        pages: "105 - 130",
        topics: 5,
        subtopics: [
          { title: "பண்பாட்டுக் கலைஞர்", hasAsterisk: false, type: "உரைநடை" },
          { title: "கம்பராமாயணம்", hasAsterisk: true, type: "செய்யுள்" },
          { title: "பாய்ச்சல்", hasAsterisk: false, type: "விரிவானம்" },
          { title: "அகப்பொருள் இலக்கணம்", hasAsterisk: false, type: "கற்கண்டு" },
          { title: "திருக்குறள்", hasAsterisk: true, type: "கற்பவை கற்றபின்" }
        ]
      },
      {
        unit: "இயல் 6",
        unitNum: 6,
        title: "விதை நெல்",
        themeName: "நாகரிகம், நாடு, சமூகம்",
        theme: tamilTheme,
        pages: "131 - 156",
        topics: 5,
        subtopics: [
          { title: "சிற்றகல் ஒளி", hasAsterisk: false, type: "உரைநடை" },
          { title: "சிலப்பதிகாரம்", hasAsterisk: true, type: "செய்யுள்" },
          { title: "முத்துநகரம்", hasAsterisk: false, type: "விரிவானம்" },
          { title: "மங்கையராய்ப் பிறப்பதற்கே...", hasAsterisk: false, type: "விரிவானம்" },
          { title: "புறப்பொருள் இலக்கணம்", hasAsterisk: false, type: "கற்கண்டு" }
        ]
      },
      {
        unit: "இயல் 7",
        unitNum: 7,
        title: "பெருவழி",
        themeName: "அறம், தத்துவம், சிந்தனை",
        theme: tamilTheme,
        pages: "157 - 182",
        topics: 6,
        subtopics: [
          { title: "சங்க இலக்கியத்தில் அறம்", hasAsterisk: false, type: "உரைநடை" },
          { title: "தேம்பாவணி", hasAsterisk: true, type: "செய்யுள்" },
          { title: "அத்தை", hasAsterisk: false, type: "விரிவானம்" },
          { title: "இராமானுசர் – நாடகம்", hasAsterisk: false, type: "விரிவானம்" },
          { title: "பா வகை, அழகிடுதல்", hasAsterisk: false, type: "கற்கண்டு" },
          { title: "திருக்குறள்", hasAsterisk: false, type: "கற்பவை கற்றபின்" }
        ]
      }
    ];
  }

  if (normalized.includes("english")) {
    if (classNum === 1) {
      const brownTheme = {
        accent: "#B45309",
        badgeBg: "bg-amber-900",
        badgeText: "text-white",
        cardBg: "bg-[#FDF3E3]",
        cardBorder: "border-[#E0A96D] border-b-[4px] border-b-[#E0A96D]",
        hoverBorder: "hover:border-[#C5894B] hover:border-b-[#C5894B]",
        labelColor: "text-[#8C531B]",
        titleColor: "text-[#422206]",
        chevronBg: "bg-white border border-[#E0A96D] text-[#8C531B] shadow-2xs",
        badgeBorder: "border-[#E0A96D]",
        badgeTextCol: "text-[#8C531B]"
      };

      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "My Pet",
            themeName: "Animals & Rhymes",
            theme: brownTheme,
            pages: "1 - 24",
            topics: 4,
            subtopics: [
              { title: "Look and Say", desc: "Pet Animals Vocabulary", type: "Vocabulary" },
              { title: "Let Us Sing", desc: "Pet Animal Rhymes", type: "Poem" },
              { title: "Let Us Learn", desc: "Story: Tina and Her Pet", type: "Story" },
              { title: "Let Us Practice", desc: "Phonics & Letter Tracing", type: "Practice" }
            ]
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Play Time",
            themeName: "Play & Activities",
            theme: brownTheme,
            pages: "25 - 48",
            topics: 4,
            subtopics: [
              { title: "Look and Say", desc: "Playground Equipment & Games", type: "Vocabulary" },
              { title: "Let Us Sing", desc: "Clap Your Hands Rhyme", type: "Poem" },
              { title: "Let Us Say", desc: "Letter Sounds & Phonics", type: "Phonics" },
              { title: "Let Us Do", desc: "Word Wall & Activities", type: "Activities" }
            ]
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Families",
            themeName: "Family & Relations",
            theme: brownTheme,
            pages: "49 - 68",
            topics: 4,
            subtopics: [
              { title: "Look and Say", desc: "Family Members & Words", type: "Vocabulary" },
              { title: "Let Us Sing", desc: "Family Song & Chant", type: "Poem" },
              { title: "Let Us Learn", desc: "Story: Our Family", type: "Story" },
              { title: "Let Us Practice", desc: "Writing & Sound Practice", type: "Practice" }
            ]
          }
        ];
      }

      if (termInt === 2) {
        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Healthy Food",
            themeName: "Food & Health",
            theme: brownTheme,
            pages: "1 - 32",
            topics: 4,
            subtopics: [
              { title: "Look and Say", desc: "Healthy Food Vocabulary", type: "Vocabulary" },
              { title: "Let Us Sing", desc: "Food Song & Rhymes", type: "Poem" },
              { title: "Let Us Learn", desc: "Story: Nutritious Meal", type: "Story" },
              { title: "Let Us Practice", desc: "Phonics & Words", type: "Practice" }
            ]
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "My Journey",
            themeName: "Travel & Transport",
            theme: brownTheme,
            pages: "33 - 54",
            topics: 4,
            subtopics: [
              { title: "Look and Say", desc: "Vehicles & Journey Words", type: "Vocabulary" },
              { title: "Let Us Sing", desc: "Travel Rhyme", type: "Poem" },
              { title: "Let Us Learn", desc: "Story: The Train Journey", type: "Story" },
              { title: "Let Us Practice", desc: "Phonics & Tracing", type: "Practice" }
            ]
          }
        ];
      }

      if (termInt === 3) {
        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "My Garden",
            themeName: "Nature & Garden",
            theme: brownTheme,
            pages: "1 - 24",
            topics: 4,
            subtopics: [
              { title: "Look and Say", desc: "Garden Vocabulary", type: "Vocabulary" },
              { title: "Let Us Sing", desc: "Garden Song & Rhyme", type: "Poem" },
              { title: "Let Us Learn", desc: "Story: In the Garden", type: "Story" },
              { title: "Let Us Practice", desc: "Phonics & Words", type: "Practice" }
            ]
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Time and calendar",
            themeName: "Time & Days",
            theme: brownTheme,
            pages: "25 - 46",
            topics: 4,
            subtopics: [
              { title: "Look and Say", desc: "Days of the Week Vocabulary", type: "Vocabulary" },
              { title: "Let Us Sing", desc: "Calendar Song", type: "Poem" },
              { title: "Let Us Learn", desc: "Story: Days and Months", type: "Story" },
              { title: "Let Us Practice", desc: "Phonics & Tracing", type: "Practice" }
            ]
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Rain... Rain... Rain",
            themeName: "Seasons & Weather",
            theme: brownTheme,
            pages: "47 - 68",
            topics: 4,
            subtopics: [
              { title: "Look and Say", desc: "Rain & Weather Words", type: "Vocabulary" },
              { title: "Let Us Sing", desc: "Rain Rhyme", type: "Poem" },
              { title: "Let Us Learn", desc: "Story: A Rainy Day", type: "Story" },
              { title: "Let Us Practice", desc: "Phonics & Writing", type: "Practice" }
            ]
          }
        ];
      }
    }

    if (classNum === 2) {
      const brownTheme = {
        accent: "#B45309",
        badgeBg: "bg-amber-900",
        badgeText: "text-white",
        cardBg: "bg-[#FDF3E3]",
        cardBorder: "border-[#E0A96D] border-b-[4px] border-b-[#B87A38]",
        hoverBorder: "hover:border-[#965A1E] hover:border-b-[#965A1E]",
        labelColor: "text-[#8C531B]",
        titleColor: "text-[#422206]",
        chevronBg: "bg-white border border-[#E0A96D] text-[#8C531B] shadow-2xs",
        badgeBorder: "border-[#8C531B]",
        badgeTextCol: "text-[#8C531B]"
      };

      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Our Sweet Home",
            themeName: "Home & Family",
            theme: brownTheme,
            pages: "1 - 24",
            topics: 4,
            subtopics: [
              { title: "Look and Say", desc: "Home & Room Words", type: "Vocabulary" },
              { title: "Let Us Sing", desc: "Home Rhyme", type: "Poem" },
              { title: "Let Us Learn", desc: "Story: Our Sweet Home", type: "Story" },
              { title: "Let Us Practice", desc: "Phonics & Words", type: "Practice" }
            ]
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Listen to Your Body",
            themeName: "Health & Senses",
            theme: brownTheme,
            pages: "25 - 48",
            topics: 4,
            subtopics: [
              { title: "Look and Say", desc: "Body Parts & Actions", type: "Vocabulary" },
              { title: "Let Us Sing", desc: "Body Action Rhyme", type: "Poem" },
              { title: "Let Us Learn", desc: "Story: Listening to Body", type: "Story" },
              { title: "Let Us Practice", desc: "Phonics & Tracing", type: "Practice" }
            ]
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Know Your Feelings",
            themeName: "Emotions & Expression",
            theme: brownTheme,
            pages: "49 - 68",
            topics: 4,
            subtopics: [
              { title: "Look and Say", desc: "Feelings & Emotions Words", type: "Vocabulary" },
              { title: "Let Us Sing", desc: "Feelings Song", type: "Poem" },
              { title: "Let Us Learn", desc: "Story: How Do You Feel?", type: "Story" },
              { title: "Let Us Practice", desc: "Phonics & Sentences", type: "Practice" }
            ]
          }
        ];
      }

      if (termInt === 2) {
        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Fun with Music",
            themeName: "Music & Rhymes",
            theme: brownTheme,
            pages: "1 - 30",
            topics: 4,
            subtopics: [
              { title: "Look and Say", desc: "Musical Instruments Vocabulary", type: "Vocabulary" },
              { title: "Let Us Sing", desc: "Music Rhyme", type: "Poem" },
              { title: "Let Us Learn", desc: "Story: Fun with Music", type: "Story" },
              { title: "Let Us Practice", desc: "Phonics & Words", type: "Practice" }
            ]
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Wonders of the Jungle",
            themeName: "Jungle & Animals",
            theme: brownTheme,
            pages: "31 - 60",
            topics: 4,
            subtopics: [
              { title: "Look and Say", desc: "Jungle Animals Vocabulary", type: "Vocabulary" },
              { title: "Let Us Sing", desc: "Jungle Rhyme", type: "Poem" },
              { title: "Let Us Learn", desc: "Story: Wonders of the Jungle", type: "Story" },
              { title: "Let Us Practice", desc: "Phonics & Words", type: "Practice" }
            ]
          }
        ];
      }

      if (termInt === 3) {
        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "A Visit to the Farm",
            themeName: "Farm & Animals",
            theme: brownTheme,
            pages: "1 - 25",
            topics: 4,
            subtopics: [
              { title: "Look and Say", desc: "Farm Words & Animals", type: "Vocabulary" },
              { title: "Let Us Sing", desc: "Farm Song & Rhyme", type: "Poem" },
              { title: "Let Us Learn", desc: "Story: A Visit to the Farm", type: "Story" },
              { title: "Let Us Practice", desc: "Phonics & Words", type: "Practice" }
            ]
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "People Who Help Us",
            themeName: "Community Helpers",
            theme: brownTheme,
            pages: "26 - 50",
            topics: 4,
            subtopics: [
              { title: "Look and Say", desc: "Community Helpers Vocabulary", type: "Vocabulary" },
              { title: "Let Us Sing", desc: "Helper Rhyme", type: "Poem" },
              { title: "Let Us Learn", desc: "Story: People Who Help Us", type: "Story" },
              { title: "Let Us Practice", desc: "Phonics & Tracing", type: "Practice" }
            ]
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Food We Eat",
            themeName: "Healthy Food",
            theme: brownTheme,
            pages: "51 - 75",
            topics: 4,
            subtopics: [
              { title: "Look and Say", desc: "Food Items Vocabulary", type: "Vocabulary" },
              { title: "Let Us Sing", desc: "Food Song", type: "Poem" },
              { title: "Let Us Learn", desc: "Story: Food We Eat", type: "Story" },
              { title: "Let Us Practice", desc: "Phonics & Writing", type: "Practice" }
            ]
          }
        ];
      }
    }

    if (classNum === 3) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        const english3Theme = {
          accent: "#E11D48",
          badgeBg: "bg-white",
          badgeBorder: "border-[#FDA4AF]",
          badgeText: "text-[#E11D48]",
          cardBg: "bg-[#FFF1F2]",
          cardBorder: "border-[#FDA4AF] border-b-[4px] border-b-[#FDA4AF]",
          hoverBorder: "hover:border-[#FB7185] hover:border-b-[#FB7185]",
          titleColor: "text-[#9F1239]",
          chevronBorder: "border-[#FDA4AF]",
          chevronText: "text-[#E11D48]",
          chevronBg: "bg-white border border-[#FDA4AF] text-[#E11D48] shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Our Kitchen",
            pages: "65 - 84",
            topics: 1,
            theme: english3Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Small Creatures",
            pages: "85 - 104",
            topics: 1,
            theme: english3Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "The World Around Us",
            pages: "105 - 124",
            topics: 1,
            theme: english3Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 2) {
        const english3Term2Theme = {
          accent: "#0284C7",
          badgeBg: "bg-white",
          badgeBorder: "border-[#7DD3FC]",
          badgeText: "text-[#0284C7]",
          cardBg: "bg-[#F0F9FF]",
          cardBorder: "border-[#7DD3FC] border-b-[4px] border-b-[#7DD3FC]",
          hoverBorder: "hover:border-[#38BDF8] hover:border-b-[#38BDF8]",
          titleColor: "text-[#0369A1]",
          chevronBorder: "border-[#7DD3FC]",
          chevronText: "text-[#0284C7]",
          chevronBg: "bg-white border border-[#7DD3FC] text-[#0284C7] shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Seasons' Story",
            pages: "41 - 60",
            topics: 1,
            theme: english3Term2Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Trip to the Store",
            pages: "61 - 80",
            topics: 1,
            theme: english3Term2Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 3) {
        const english3Term3Theme = {
          accent: "#0284C7",
          badgeBg: "bg-white",
          badgeBorder: "border-[#7DD3FC]",
          badgeText: "text-[#0284C7]",
          cardBg: "bg-[#F0F9FF]",
          cardBorder: "border-[#7DD3FC] border-b-[4px] border-b-[#7DD3FC]",
          hoverBorder: "hover:border-[#38BDF8] hover:border-b-[#38BDF8]",
          titleColor: "text-[#0369A1]",
          chevronBorder: "border-[#7DD3FC]",
          chevronText: "text-[#0284C7]",
          chevronBg: "bg-white border border-[#7DD3FC] text-[#0284C7] shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Our Leafy Friends",
            pages: "41 - 58",
            topics: 1,
            theme: english3Term3Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Tools We Use",
            pages: "59 - 76",
            topics: 1,
            theme: english3Term3Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Places in my Town",
            pages: "77 - 94",
            topics: 1,
            theme: english3Term3Theme,
            subtopics: []
          }
        ];
      }
    }

    if (classNum === 4) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        const english4Theme = {
          accent: "#0284C7",
          badgeBg: "bg-white",
          badgeBorder: "border-[#7DD3FC]",
          badgeText: "text-[#0284C7]",
          cardBg: "bg-[#F0F9FF]",
          cardBorder: "border-[#7DD3FC] border-b-[4px] border-b-[#7DD3FC]",
          hoverBorder: "hover:border-[#38BDF8] hover:border-b-[#38BDF8]",
          titleColor: "text-[#0369A1]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "A World with Robots",
            pages: "75 - 94",
            topics: 1,
            theme: english4Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "My Hobbies",
            pages: "95 - 114",
            topics: 1,
            theme: english4Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Time for a Journey",
            pages: "115 - 134",
            topics: 1,
            theme: english4Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 2) {
        const english4Term2Theme = {
          accent: "#0284C7",
          badgeBg: "bg-white",
          badgeBorder: "border-[#7DD3FC]",
          badgeText: "text-[#0284C7]",
          cardBg: "bg-[#F0F9FF]",
          cardBorder: "border-[#7DD3FC] border-b-[4px] border-b-[#7DD3FC]",
          hoverBorder: "hover:border-[#38BDF8] hover:border-b-[#38BDF8]",
          titleColor: "text-[#0369A1]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Affection",
            pages: "65 - 84",
            topics: 1,
            theme: english4Term2Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Savings",
            pages: "85 - 104",
            topics: 1,
            theme: english4Term2Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 3) {
        const english4Term3Theme = {
          accent: "#0284C7",
          badgeBg: "bg-white",
          badgeBorder: "border-[#7DD3FC]",
          badgeText: "text-[#0284C7]",
          cardBg: "bg-[#F0F9FF]",
          cardBorder: "border-[#7DD3FC] border-b-[4px] border-b-[#7DD3FC]",
          hoverBorder: "hover:border-[#38BDF8] hover:border-b-[#38BDF8]",
          titleColor: "text-[#0369A1]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "The Best Policy",
            pages: "65 - 82",
            topics: 1,
            theme: english4Term3Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Creativity Around Me",
            pages: "83 - 100",
            topics: 1,
            theme: english4Term3Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Secret of Success",
            pages: "101 - 118",
            topics: 1,
            theme: english4Term3Theme,
            subtopics: []
          }
        ];
      }
    }

    if (classNum === 5) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        const english5Theme = {
          accent: "#0284C7",
          badgeBg: "bg-white",
          badgeBorder: "border-[#7DD3FC]",
          badgeText: "text-[#0284C7]",
          cardBg: "bg-[#F0F9FF]",
          cardBorder: "border-[#7DD3FC] border-b-[4px] border-b-[#7DD3FC]",
          hoverBorder: "hover:border-[#38BDF8] hover:border-b-[#38BDF8]",
          titleColor: "text-[#0369A1]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Exploring Space",
            pages: "77 - 100",
            topics: 1,
            theme: english5Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "My Native Place",
            pages: "101 - 126",
            topics: 1,
            theme: english5Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Our Nation",
            pages: "127 - 148",
            topics: 1,
            theme: english5Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 2) {
        const english5Term2Theme = {
          accent: "#D97706",
          badgeBg: "bg-white",
          badgeBorder: "border-[#FCD34D]",
          badgeText: "text-[#B45309]",
          cardBg: "bg-[#FEF3C7]",
          cardBorder: "border-[#FCD34D] border-b-[4px] border-b-[#FCD34D]",
          hoverBorder: "hover:border-[#F59E0B] hover:border-b-[#F59E0B]",
          titleColor: "text-[#78350F]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Hospitality",
            pages: "67 - 94",
            topics: 1,
            theme: english5Term2Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Sports",
            pages: "95 - 120",
            topics: 1,
            theme: english5Term2Theme,
            subtopics: []
          }
        ];
      }
    }

    if (classNum === 9) {
      const english9Theme = {
        accent: "#9A3412",
        badgeBg: "bg-slate-900",
        badgeText: "text-white",
        cardBg: "bg-[#F1F5F9]",
        cardBorder: "border-slate-300 border-b-[4px] border-b-slate-300",
        hoverBorder: "hover:border-slate-400 hover:border-b-slate-400",
        labelColor: "text-[#9A3412]",
        titleColor: "text-[#0E4A6F]",
        subBadgeBg: "bg-[#9A3412]/10 text-[#9A3412] border-[#9A3412]/30",
        chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
      };

      return [
        {
          unit: "Unit 1",
          unitNum: 1,
          title: "Learning the Game",
          prose: "Learning the Game",
          poem: "Stopping by Woods on a Snowy Evening",
          hasPoemAsterisk: true,
          supplementary: "The Envious Neighbour",
          month: "June",
          prosePage: "01",
          poemPage: "18",
          suppPage: "22",
          pages: "1 - 28",
          topics: 3,
          theme: english9Theme
        },
        {
          unit: "Unit 2",
          unitNum: 2,
          title: "I can't Climb Trees Anymore",
          prose: "I can't Climb Trees Anymore",
          poem: "A Poison Tree",
          hasPoemAsterisk: false,
          supplementary: "The Fun They Had",
          month: "July",
          prosePage: "29",
          poemPage: "46",
          suppPage: "51",
          pages: "29 - 58",
          topics: 3,
          theme: english9Theme
        },
        {
          unit: "Unit 3",
          unitNum: 3,
          title: "Old Man River",
          prose: "Old Man River",
          proseLabel: "Drama",
          poem: "On Killing a Tree",
          hasPoemAsterisk: true,
          supplementary: "Earthquake",
          month: "August",
          prosePage: "59",
          poemPage: "82",
          suppPage: "86",
          pages: "59 - 94",
          topics: 3,
          theme: english9Theme
        },
        {
          unit: "Unit 4",
          unitNum: 4,
          title: "Seventeen Oranges",
          prose: "Seventeen Oranges",
          poem: "The Spider and the Fly",
          hasPoemAsterisk: false,
          supplementary: "The Cat and the Painkiller",
          month: "September",
          prosePage: "95",
          poemPage: "116",
          suppPage: "122",
          pages: "95 - 130",
          topics: 3,
          theme: english9Theme
        },
        {
          unit: "Unit 5",
          unitNum: 5,
          title: "Water – The Elixir of Life",
          prose: "Water – The Elixir of Life",
          poem: "The River",
          hasPoemAsterisk: true,
          supplementary: "Little Cyclone: The Story of a Grizzly Cub",
          month: "October",
          prosePage: "131",
          poemPage: "153",
          suppPage: "158",
          pages: "131 - 166",
          topics: 3,
          theme: english9Theme
        },
        {
          unit: "Unit 6",
          unitNum: 6,
          title: "From Zero to Infinity",
          prose: "From Zero to Infinity",
          poem: "The Comet",
          hasPoemAsterisk: true,
          supplementary: "Mother's Voice",
          month: "November",
          prosePage: "167",
          poemPage: "186",
          suppPage: "191",
          pages: "167 - 196",
          topics: 3,
          theme: english9Theme
        },
        {
          unit: "Unit 7",
          unitNum: 7,
          title: "A Birthday Letter",
          prose: "A Birthday Letter",
          poem: "The Stick-together Families",
          hasPoemAsterisk: false,
          supplementary: "The Christmas Truce",
          month: "December",
          prosePage: "197",
          poemPage: "212",
          suppPage: "216",
          pages: "197 - 224",
          topics: 3,
          theme: english9Theme
        }
      ];
    }

    return [
      {
        unit: "Unit 1",
        unitNum: 1,
        title: "His First Flight",
        prose: "His First Flight",
        poem: "Life",
        hasPoemAsterisk: true,
        supplementary: "The Tempest",
        month: "June",
        prosePage: "02",
        poemPage: "17",
        suppPage: "21",
        pages: "1 - 28",
        topics: 3,
        theme: {
          accent: "#BE123C",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          cardBg: "bg-[#FDE8E9]",
          cardBorder: "border-[#FDA4AF] border-b-[4px] border-b-[#FDA4AF]",
          hoverBorder: "hover:border-[#FB7185] hover:border-b-[#FB7185]",
          labelColor: "text-[#BE123C]",
          subBadgeBg: "bg-[#BE123C]/10 text-[#BE123C] border-[#FDA4AF]/50",
          chevronBg: "bg-white/80 border-[#FDA4AF] text-[#BE123C]"
        }
      },
      {
        unit: "Unit 2",
        unitNum: 2,
        title: "The Night the Ghost Got In",
        prose: "The Night the Ghost Got In",
        poem: "The Grumble Family",
        hasPoemAsterisk: false,
        supplementary: "Zigzag",
        month: "July",
        prosePage: "30",
        poemPage: "45",
        suppPage: "50",
        pages: "29 - 58",
        topics: 3,
        theme: {
          accent: "#16A34A",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          cardBg: "bg-[#E7F5EB]",
          cardBorder: "border-[#86EFAC] border-b-[4px] border-b-[#86EFAC]",
          hoverBorder: "hover:border-[#4ADE80] hover:border-b-[#4ADE80]",
          labelColor: "text-[#15803D]",
          subBadgeBg: "bg-[#16A34A]/10 text-[#15803D] border-[#86EFAC]/50",
          chevronBg: "bg-white/80 border-[#86EFAC] text-[#15803D]"
        }
      },
      {
        unit: "Unit 3",
        unitNum: 3,
        title: "Empowered Women Navigating the World",
        prose: "Empowered Women Navigating the World",
        poem: "I am Every Woman",
        hasPoemAsterisk: true,
        supplementary: "The Story of Mulan",
        month: "August",
        prosePage: "60",
        poemPage: "84",
        suppPage: "88",
        pages: "59 - 92",
        topics: 3,
        theme: {
          accent: "#EA580C",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          cardBg: "bg-[#FEEDDE]",
          cardBorder: "border-[#FDBA74] border-b-[4px] border-b-[#FDBA74]",
          hoverBorder: "hover:border-[#FB923C] hover:border-b-[#FB923C]",
          labelColor: "text-[#C2410C]",
          subBadgeBg: "bg-[#EA580C]/10 text-[#C2410C] border-[#FDBA74]/50",
          chevronBg: "bg-white/80 border-[#FDBA74] text-[#EA580C]"
        }
      },
      {
        unit: "Unit 4",
        unitNum: 4,
        title: "The Attic",
        prose: "The Attic",
        poem: "The Ant and the Cricket",
        hasPoemAsterisk: false,
        supplementary: "The Aged Mother",
        month: "September",
        prosePage: "94",
        poemPage: "115",
        suppPage: "120",
        pages: "93 - 124",
        topics: 3,
        theme: {
          accent: "#5B4296",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          cardBg: "bg-[#ECE7F4]",
          cardBorder: "border-[#C4B5FD] border-b-[4px] border-b-[#C4B5FD]",
          hoverBorder: "hover:border-[#A78BFA] hover:border-b-[#A78BFA]",
          labelColor: "text-[#5B4296]",
          subBadgeBg: "bg-[#5B4296]/10 text-[#5B21B6] border-[#C4B5FD]/50",
          chevronBg: "bg-white/80 border-[#C4B5FD] text-[#5B4296]"
        }
      },
      {
        unit: "Unit 5",
        unitNum: 5,
        title: "Tech Bloomers",
        prose: "Tech Bloomers",
        poem: "The Secret of the Machines",
        hasPoemAsterisk: true,
        supplementary: "A day in 2889 of an American Journalist",
        month: "October",
        prosePage: "126",
        poemPage: "148",
        suppPage: "153",
        pages: "125 - 160",
        topics: 3,
        theme: {
          accent: "#A21CAF",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          cardBg: "bg-[#F9E8F5]",
          cardBorder: "border-[#F0ABFC] border-b-[4px] border-b-[#F0ABFC]",
          hoverBorder: "hover:border-[#E879F9] hover:border-b-[#E879F9]",
          labelColor: "text-[#A21CAF]",
          subBadgeBg: "bg-[#A21CAF]/10 text-[#86198F] border-[#F0ABFC]/50",
          chevronBg: "bg-white/80 border-[#F0ABFC] text-[#A21CAF]"
        }
      },
      {
        unit: "Unit 6",
        unitNum: 6,
        title: "The Last Lesson",
        prose: "The Last Lesson",
        poem: "No Men Are Foreign",
        hasPoemAsterisk: true,
        supplementary: "The Little Hero of Holland",
        month: "November",
        prosePage: "162",
        poemPage: "179",
        suppPage: "183",
        pages: "161 - 188",
        topics: 3,
        theme: {
          accent: "#C27803",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          cardBg: "bg-[#FDF1DC]",
          cardBorder: "border-[#FCD34D] border-b-[4px] border-b-[#FCD34D]",
          hoverBorder: "hover:border-[#FBBF24] hover:border-b-[#FBBF24]",
          labelColor: "text-[#B45309]",
          subBadgeBg: "bg-[#C27803]/10 text-[#B45309] border-[#FCD34D]/50",
          chevronBg: "bg-white/80 border-[#FCD34D] text-[#B45309]"
        }
      },
      {
        unit: "Unit 7",
        unitNum: 7,
        title: "The Dying Detective",
        prose: "The Dying Detective",
        poem: "The House on Elm Street",
        hasPoemAsterisk: false,
        supplementary: "A Dilemma",
        month: "December",
        prosePage: "189",
        poemPage: "202",
        suppPage: "205",
        pages: "189 - 215",
        topics: 3,
        theme: {
          accent: "#0284C7",
          badgeBg: "bg-slate-900",
          badgeText: "text-white",
          cardBg: "bg-[#E3F2F9]",
          cardBorder: "border-[#7DD3FC] border-b-[4px] border-b-[#7DD3FC]",
          hoverBorder: "hover:border-[#38BDF8] hover:border-b-[#38BDF8]",
          labelColor: "text-[#0284C7]",
          subBadgeBg: "bg-[#0284C7]/10 text-[#0369A1] border-[#7DD3FC]/50",
          chevronBg: "bg-white/80 border-[#7DD3FC] text-[#0284C7]"
        }
      }
    ];
  }

  if (normalized.includes("biology") || normalized.includes("botany") || normalized.includes("zoology") || normalized.includes("computer") || normalized.includes("cs")) {
    const bioCsTheme = {
      accent: "#059669",
      badgeBg: "bg-slate-900",
      badgeText: "text-white",
      cardBg: "bg-[#E7F5EB]",
      cardBorder: "border-[#86EFAC] border-b-[4px] border-b-[#86EFAC]",
      hoverBorder: "hover:border-[#4ADE80] hover:border-b-[#4ADE80]",
      labelColor: "text-[#059669]",
      chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
    };

    return [
      { unit: "Unit 1", unitNum: 1, section: "Biology", title: "Reproduction in Organisms", theme: bioCsTheme, pages: "1 - 28", topics: 4 },
      { unit: "Unit 2", unitNum: 2, section: "Biology", title: "Genetics and Evolution", theme: bioCsTheme, pages: "29 - 64", topics: 5 },
      { unit: "Unit 3", unitNum: 3, section: "Biology", title: "Biotechnology - Principles and Processes", theme: bioCsTheme, pages: "65 - 98", topics: 4 },
      { unit: "Unit 4", unitNum: 4, section: "Biology", title: "Ecology and Environment", theme: bioCsTheme, pages: "99 - 132", topics: 4 },
      { unit: "Unit 5", unitNum: 5, section: "Computer Science", title: "Problem Solving and Python Basics", theme: bioCsTheme, pages: "133 - 165", topics: 5 },
      { unit: "Unit 6", unitNum: 6, section: "Computer Science", title: "Control Structures and Functions in Python", theme: bioCsTheme, pages: "166 - 198", topics: 5 },
      { unit: "Unit 7", unitNum: 7, section: "Computer Science", title: "Object-Oriented Programming & Classes", theme: bioCsTheme, pages: "199 - 228", topics: 4 },
      { unit: "Unit 8", unitNum: 8, section: "Computer Science", title: "Database Concepts & Structured Query Language (SQL)", theme: bioCsTheme, pages: "229 - 260", topics: 5 }
    ];
  }

  if (normalized.includes("social")) {
    if (classNum === 3) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        const social3Theme = {
          accent: "#EA580C",
          badgeBg: "bg-white",
          badgeBorder: "border-[#FB923C]",
          badgeText: "text-[#EA580C]",
          cardBg: "bg-[#FFF7ED]",
          cardBorder: "border-[#FB923C] border-b-[4px] border-b-[#FB923C]",
          hoverBorder: "hover:border-[#F97316] hover:border-b-[#F97316]",
          titleColor: "text-[#9A3412]",
          chevronBorder: "border-[#FB923C]",
          chevronText: "text-[#EA580C]",
          chevronBg: "bg-white border border-[#FB923C] text-[#EA580C] shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Family",
            pages: "133 - 144",
            topics: 1,
            theme: social3Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Our Friends",
            pages: "145 - 158",
            topics: 1,
            theme: social3Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Panchayat",
            pages: "159 - 170",
            topics: 1,
            theme: social3Theme,
            subtopics: []
          },
          {
            unit: "Unit 4",
            unitNum: 4,
            title: "Safety",
            pages: "171 - 184",
            topics: 1,
            theme: social3Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 2) {
        const social3Term2Theme = {
          accent: "#EA580C",
          badgeBg: "bg-white",
          badgeBorder: "border-[#FB923C]",
          badgeText: "text-[#EA580C]",
          cardBg: "bg-[#FFF7ED]",
          cardBorder: "border-[#FB923C] border-b-[4px] border-b-[#FB923C]",
          hoverBorder: "hover:border-[#F97316] hover:border-b-[#F97316]",
          titleColor: "text-[#9A3412]",
          chevronBorder: "border-[#FB923C]",
          chevronText: "text-[#EA580C]",
          chevronBg: "bg-white border border-[#FB923C] text-[#EA580C] shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Historical Places",
            pages: "77 - 88",
            topics: 1,
            theme: social3Term2Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Sanctuaries",
            pages: "89 - 100",
            topics: 1,
            theme: social3Term2Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "District Administration",
            pages: "101 - 114",
            topics: 1,
            theme: social3Term2Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 3) {
        const social3Term3Theme = {
          accent: "#EA580C",
          badgeBg: "bg-white",
          badgeBorder: "border-[#FB923C]",
          badgeText: "text-[#EA580C]",
          cardBg: "bg-[#FFF7ED]",
          cardBorder: "border-[#FB923C] border-b-[4px] border-b-[#FB923C]",
          hoverBorder: "hover:border-[#F97316] hover:border-b-[#F97316]",
          titleColor: "text-[#9A3412]",
          chevronBorder: "border-[#FB923C]",
          chevronText: "text-[#EA580C]",
          chevronBg: "bg-white border border-[#FB923C] text-[#EA580C] shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Freedom Fighters Of Tamil Nadu",
            pages: "111 - 124",
            topics: 1,
            theme: social3Term3Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Mineral Resources",
            pages: "125 - 136",
            topics: 1,
            theme: social3Term3Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Child Safety",
            pages: "137 - 150",
            topics: 1,
            theme: social3Term3Theme,
            subtopics: []
          }
        ];
      }
    }

    if (classNum === 4) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        const social4Theme = {
          accent: "#EA580C",
          badgeBg: "bg-white",
          badgeBorder: "border-[#FB923C]",
          badgeText: "text-[#EA580C]",
          cardBg: "bg-[#FFF7ED]",
          cardBorder: "border-[#FB923C] border-b-[4px] border-b-[#FB923C]",
          hoverBorder: "hover:border-[#F97316] hover:border-b-[#F97316]",
          titleColor: "text-[#9A3412]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Kingdoms of Rivers",
            pages: "117 - 126",
            topics: 1,
            theme: social4Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Five Landforms",
            pages: "127 - 138",
            topics: 1,
            theme: social4Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Municipality and Corporation",
            pages: "139 - 150",
            topics: 1,
            theme: social4Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 2) {
        const social4Term2Theme = {
          accent: "#EA580C",
          badgeBg: "bg-white",
          badgeBorder: "border-[#FB923C]",
          badgeText: "text-[#EA580C]",
          cardBg: "bg-[#FFF7ED]",
          cardBorder: "border-[#FB923C] border-b-[4px] border-b-[#FB923C]",
          hoverBorder: "hover:border-[#F97316] hover:border-b-[#F97316]",
          titleColor: "text-[#9A3412]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Philanthropists of Sangam Age",
            pages: "105 - 118",
            topics: 1,
            theme: social4Term2Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Physical Features of Tamil Nadu",
            pages: "119 - 132",
            topics: 1,
            theme: social4Term2Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Transport",
            pages: "133 - 146",
            topics: 1,
            theme: social4Term2Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 3) {
        const social4Term3Theme = {
          accent: "#EA580C",
          badgeBg: "bg-white",
          badgeBorder: "border-[#FB923C]",
          badgeText: "text-[#EA580C]",
          cardBg: "bg-[#FFF7ED]",
          cardBorder: "border-[#FB923C] border-b-[4px] border-b-[#FB923C]",
          hoverBorder: "hover:border-[#F97316] hover:border-b-[#F97316]",
          titleColor: "text-[#9A3412]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Tamils Around the World",
            pages: "105 - 118",
            topics: 1,
            theme: social4Term3Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "The Story of Madras Presidency",
            pages: "119 - 132",
            topics: 1,
            theme: social4Term3Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Rights and Duties of Children",
            pages: "133 - 146",
            topics: 1,
            theme: social4Term3Theme,
            subtopics: []
          }
        ];
      }
    }

    if (classNum === 5) {
      const termInt = typeof term === 'number' ? term : parseInt(String(term).replace(/\D+/g, ''), 10) || 1;

      if (termInt === 1) {
        const social5Theme = {
          accent: "#EA580C",
          badgeBg: "bg-white",
          badgeBorder: "border-[#FB923C]",
          badgeText: "text-[#EA580C]",
          cardBg: "bg-[#FFF7ED]",
          cardBorder: "border-[#FB923C] border-b-[4px] border-b-[#FB923C]",
          hoverBorder: "hover:border-[#F97316] hover:border-b-[#F97316]",
          titleColor: "text-[#9A3412]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Our Earth",
            pages: "105 - 120",
            topics: 1,
            theme: social5Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Towards History",
            pages: "121 - 136",
            topics: 1,
            theme: social5Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Good Citizen",
            pages: "137 - 148",
            topics: 1,
            theme: social5Theme,
            subtopics: []
          },
          {
            unit: "Unit 4",
            unitNum: 4,
            title: "Atmosphere",
            pages: "149 - 164",
            topics: 1,
            theme: social5Theme,
            subtopics: []
          }
        ];
      }

      if (termInt === 2) {
        const social5Term2Theme = {
          accent: "#EA580C",
          badgeBg: "bg-white",
          badgeBorder: "border-[#FB923C]",
          badgeText: "text-[#EA580C]",
          cardBg: "bg-[#FFF7ED]",
          cardBorder: "border-[#FB923C] border-b-[4px] border-b-[#FB923C]",
          hoverBorder: "hover:border-[#F97316] hover:border-b-[#F97316]",
          titleColor: "text-[#9A3412]",
          chevronBorder: "border-slate-200",
          chevronText: "text-slate-500",
          chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
        };

        return [
          {
            unit: "Unit 1",
            unitNum: 1,
            title: "Ancient Excavation",
            pages: "99 - 114",
            topics: 1,
            theme: social5Term2Theme,
            subtopics: []
          },
          {
            unit: "Unit 2",
            unitNum: 2,
            title: "Hydrosphere",
            pages: "115 - 130",
            topics: 1,
            theme: social5Term2Theme,
            subtopics: []
          },
          {
            unit: "Unit 3",
            unitNum: 3,
            title: "Continents of the World",
            pages: "131 - 150",
            topics: 1,
            theme: social5Term2Theme,
            subtopics: []
          }
        ];
      }
    }
  }

  if (classNum === 9) {
    const social9Theme = {
      accent: "#B45309",
      badgeBg: "bg-slate-900",
      badgeText: "text-white",
      cardBg: "bg-[#FDF3E7]",
      cardBorder: "border-[#FDBA74] border-b-[4px] border-b-[#FDBA74]",
      hoverBorder: "hover:border-[#FB923C] hover:border-b-[#FB923C]",
      labelColor: "text-[#B45309]",
      chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
    };

    return [
      // History (from media_1791052816312.png)
      { unit: "Unit 1", unitNum: 1, section: "History", title: "Evolution of Humans and Society - Prehistoric Period", theme: social9Theme, pages: "1 - 18", topics: 5 },
      { unit: "Unit 2", unitNum: 2, section: "History", title: "Ancient Civilisations", theme: social9Theme, pages: "19 - 36", topics: 5 },
      { unit: "Unit 3", unitNum: 3, section: "History", title: "Early Tamil Society and Culture", theme: social9Theme, pages: "37 - 54", topics: 5 },
      { unit: "Unit 4", unitNum: 4, section: "History", title: "Intellectual Awakening and Socio-Political Changes", theme: social9Theme, pages: "55 - 72", topics: 5 },
      { unit: "Unit 5", unitNum: 5, section: "History", title: "The Classical World", theme: social9Theme, pages: "73 - 90", topics: 5 },
      { unit: "Unit 6", unitNum: 6, section: "History", title: "The Middle Ages", theme: social9Theme, pages: "91 - 106", topics: 5 },
      { unit: "Unit 7", unitNum: 7, section: "History", title: "State and Society in Medieval India", theme: social9Theme, pages: "107 - 124", topics: 5 },
      { unit: "Unit 8", unitNum: 8, section: "History", title: "The Beginning of the Modern Age", theme: social9Theme, pages: "125 - 142", topics: 5 },
      { unit: "Unit 9", unitNum: 9, section: "History", title: "The Age of Revolutions", theme: social9Theme, pages: "143 - 160", topics: 5 },
      { unit: "Unit 10", unitNum: 10, section: "History", title: "Industrial Revolution", theme: social9Theme, pages: "161 - 176", topics: 5 },
      { unit: "Unit 11", unitNum: 11, section: "History", title: "Colonialism in Asia and Africa", theme: social9Theme, pages: "177 - 194", topics: 5 },

      // Geography (from media_1791052839234.png)
      { unit: "Unit 1", unitNum: 1, section: "Geography", title: "Lithosphere – I Endogenetic Processes", theme: social9Theme, pages: "195 - 212", topics: 5 },
      { unit: "Unit 2", unitNum: 2, section: "Geography", title: "Lithosphere – II Exogenetic Processes", theme: social9Theme, pages: "213 - 230", topics: 5 },
      { unit: "Unit 3", unitNum: 3, section: "Geography", title: "Atmosphere", theme: social9Theme, pages: "231 - 246", topics: 5 },
      { unit: "Unit 4", unitNum: 4, section: "Geography", title: "Hydrosphere", theme: social9Theme, pages: "247 - 262", topics: 5 },
      { unit: "Unit 5", unitNum: 5, section: "Geography", title: "Biosphere", theme: social9Theme, pages: "263 - 276", topics: 5 },
      { unit: "Unit 6", unitNum: 6, section: "Geography", title: "Man and Environment", theme: social9Theme, pages: "277 - 292", topics: 5 },
      { unit: "Unit 7", unitNum: 7, section: "Geography", title: "Mapping Skills", theme: social9Theme, pages: "293 - 306", topics: 5 },
      { unit: "Unit 8", unitNum: 8, section: "Geography", title: "Disaster Management: Responding to Disasters", theme: social9Theme, pages: "307 - 322", topics: 5 },

      // Civics (from media_1791052839234.png)
      { unit: "Unit 1", unitNum: 1, section: "Civics", title: "Forms of Government and Democracy", theme: social9Theme, pages: "323 - 336", topics: 4 },
      { unit: "Unit 2", unitNum: 2, section: "Civics", title: "Election, Political Parties and Pressure Groups", theme: social9Theme, pages: "337 - 350", topics: 4 },
      { unit: "Unit 3", unitNum: 3, section: "Civics", title: "Human Rights", theme: social9Theme, pages: "351 - 364", topics: 4 },
      { unit: "Unit 4", unitNum: 4, section: "Civics", title: "Forms of Government", theme: social9Theme, pages: "365 - 376", topics: 4 },
      { unit: "Unit 5", unitNum: 5, section: "Civics", title: "Local Self Government", theme: social9Theme, pages: "377 - 390", topics: 4 },
      { unit: "Unit 6", unitNum: 6, section: "Civics", title: "Road safety", theme: social9Theme, pages: "391 - 402", topics: 4 },

      // Economics (from media_1791052866033.png)
      { unit: "Unit 1", unitNum: 1, section: "Economics", title: "Understanding Development: Perspectives, Measurement and Sustainability", theme: social9Theme, pages: "403 - 416", topics: 4 },
      { unit: "Unit 2", unitNum: 2, section: "Economics", title: "Employment in India and Tamil Nadu", theme: social9Theme, pages: "417 - 428", topics: 4 },
      { unit: "Unit 3", unitNum: 3, section: "Economics", title: "Money and Credit", theme: social9Theme, pages: "429 - 440", topics: 4 },
      { unit: "Unit 4", unitNum: 4, section: "Economics", title: "Agriculture in Tamil Nadu", theme: social9Theme, pages: "441 - 452", topics: 4 },
      { unit: "Unit 5", unitNum: 5, section: "Economics", title: "Migration", theme: social9Theme, pages: "453 - 464", topics: 4 }
    ];
  }

  // Class 10 Social Science
  const socialTheme = {
    accent: "#0284C7",
    badgeBg: "bg-slate-900",
    badgeText: "text-white",
    cardBg: "bg-[#E3F2F9]",
    cardBorder: "border-[#7DD3FC] border-b-[4px] border-b-[#7DD3FC]",
    hoverBorder: "hover:border-[#38BDF8] hover:border-b-[#38BDF8]",
    labelColor: "text-[#0284C7]",
    chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
  };

  return [
    // History (from media_1791047798465.png)
    { unit: "Unit 1", unitNum: 1, section: "History", title: "Outbreak of World War I and Its Aftermath", theme: socialTheme, pages: "1 - 18", topics: 4 },
    { unit: "Unit 2", unitNum: 2, section: "History", title: "The World between two World Wars", theme: socialTheme, pages: "19 - 36", topics: 4 },
    { unit: "Unit 3", unitNum: 3, section: "History", title: "World war II", theme: socialTheme, pages: "37 - 54", topics: 4 },
    { unit: "Unit 4", unitNum: 4, section: "History", title: "The World after World War II", theme: socialTheme, pages: "55 - 72", topics: 4 },
    { unit: "Unit 5", unitNum: 5, section: "History", title: "Social and Religious Reform Movements in the 19th Century", theme: socialTheme, pages: "73 - 90", topics: 4 },
    { unit: "Unit 6", unitNum: 6, section: "History", title: "Early Revolts against British Rule in Tamil Nadu", theme: socialTheme, pages: "91 - 106", topics: 4 },
    { unit: "Unit 7", unitNum: 7, section: "History", title: "Anti-Colonial Movements and the Birth of Nationalism", theme: socialTheme, pages: "107 - 124", topics: 4 },
    { unit: "Unit 8", unitNum: 8, section: "History", title: "Nationalism: Gandhian Phase", theme: socialTheme, pages: "125 - 144", topics: 5 },
    { unit: "Unit 9", unitNum: 9, section: "History", title: "Freedom Struggle in Tamil Nadu", theme: socialTheme, pages: "145 - 160", topics: 4 },
    { unit: "Unit 10", unitNum: 10, section: "History", title: "Social Transformation in Tamil Nadu", theme: socialTheme, pages: "161 - 176", topics: 4 },
    // Geography (from media_1791047816061.png)
    { unit: "Unit 1", unitNum: 1, section: "Geography", title: "India - Location, Relief and Drainage", theme: socialTheme, pages: "177 - 198", topics: 5 },
    { unit: "Unit 2", unitNum: 2, section: "Geography", title: "Climate and Natural Vegetation of India", theme: socialTheme, pages: "199 - 216", topics: 4 },
    { unit: "Unit 3", unitNum: 3, section: "Geography", title: "India - Agriculture", theme: socialTheme, pages: "217 - 236", topics: 5 },
    { unit: "Unit 4", unitNum: 4, section: "Geography", title: "India - Resources and Industries", theme: socialTheme, pages: "237 - 256", topics: 4 },
    { unit: "Unit 5", unitNum: 5, section: "Geography", title: "India - Population, Transport, Communication and Trade", theme: socialTheme, pages: "257 - 274", topics: 5 },
    { unit: "Unit 6", unitNum: 6, section: "Geography", title: "Physical Geography of Tamil Nadu", theme: socialTheme, pages: "275 - 290", topics: 4 },
    { unit: "Unit 7", unitNum: 7, section: "Geography", title: "Human Geography of Tamil Nadu", theme: socialTheme, pages: "291 - 306", topics: 4 },
    // Civics (from media_1791047832663.png)
    { unit: "Unit 1", unitNum: 1, section: "Civics", title: "Indian Constitution", theme: socialTheme, pages: "307 - 320", topics: 4 },
    { unit: "Unit 2", unitNum: 2, section: "Civics", title: "Central Government", theme: socialTheme, pages: "321 - 336", topics: 4 },
    { unit: "Unit 3", unitNum: 3, section: "Civics", title: "State Government", theme: socialTheme, pages: "337 - 350", topics: 4 },
    { unit: "Unit 4", unitNum: 4, section: "Civics", title: "India's Foreign Policy", theme: socialTheme, pages: "351 - 360", topics: 3 },
    { unit: "Unit 5", unitNum: 5, section: "Civics", title: "India's International Relations", theme: socialTheme, pages: "361 - 372", topics: 3 },
    // Economics (from media_1791047832663.png)
    { unit: "Unit 1", unitNum: 1, section: "Economics", title: "Gross Domestic Product and its Growth: an Introduction", theme: socialTheme, pages: "373 - 386", topics: 4 },
    { unit: "Unit 2", unitNum: 2, section: "Economics", title: "Globalization and Trade", theme: socialTheme, pages: "387 - 398", topics: 4 },
    { unit: "Unit 3", unitNum: 3, section: "Economics", title: "Food Security and Nutrition", theme: socialTheme, pages: "399 - 410", topics: 4 },
    { unit: "Unit 4", unitNum: 4, section: "Economics", title: "Government and Taxes", theme: socialTheme, pages: "411 - 422", topics: 4 },
    { unit: "Unit 5", unitNum: 5, section: "Economics", title: "Industrial Clusters in Tamil Nadu", theme: socialTheme, pages: "423 - 434", topics: 4 }
  ];
};

export const getBookStudyOptions = (subject = "Mathematics") => {
  const norm = (subject || "").toLowerCase();

  let oneMarkQs = [
    {
      q: "If n(A × B) = 6 and A = {1, 3}, then n(B) is:",
      options: ["1", "2", "3", "6"],
      answer: 2,
      explanation: "n(A × B) = n(A) × n(B). Given n(A × B) = 6 and n(A) = 2. So 2 × n(B) = 6 => n(B) = 3."
    },
    {
      q: "Euclid's division lemma states that for positive integers a and b, there exist unique integers q and r such that a = bq + r, where r must satisfy:",
      options: ["1 < r < b", "0 ≤ r < b", "0 < r ≤ b", "0 ≤ r ≤ b"],
      answer: 1,
      explanation: "By Euclid's division lemma, the remainder r always satisfies 0 ≤ r < b."
    },
    {
      q: "The next term of the sequence 3/16, 1/8, 1/12, 1/18, ... is:",
      options: ["1/24", "1/27", "2/27", "1/81"],
      answer: 1,
      explanation: "Each term is multiplied by common ratio 2/3. So (1/18) * (2/3) = 1/27."
    }
  ];

  let twoMarkQs = [
    {
      q: "A relation R is given by {(x, y) / y = x + 3, x ∈ {0, 1, 2, 3, 4, 5}}. Determine its domain and range.",
      points: [
        "Step 1: Calculate y for each x: (0,3), (1,4), (2,5), (3,6), (4,7), (5,8)",
        "Step 2: Domain = {0, 1, 2, 3, 4, 5}",
        "Step 3: Range = {3, 4, 5, 6, 7, 8}"
      ]
    },
    {
      q: "Find the 19th term of an A.P. -11, -15, -19, ...",
      points: [
        "First term a = -11, common difference d = -15 - (-11) = -4",
        "Formula: tn = a + (n - 1)d",
        "t19 = -11 + (19 - 1)(-4) = -11 - 72 = -83"
      ]
    }
  ];

  let threeMarkQs = [
    {
      q: "Let f(x) = 2x + 1 and g(x) = x² - 2. Find f ∘ g and g ∘ f. Check if f ∘ g = g ∘ f.",
      points: [
        "f(g(x)) = f(x² - 2) = 2(x² - 2) + 1 = 2x² - 4 + 1 = 2x² - 3",
        "g(f(x)) = g(2x + 1) = (2x + 1)² - 2 = 4x² + 4x + 1 - 2 = 4x² + 4x - 1",
        "Since 2x² - 3 ≠ 4x² + 4x - 1, f ∘ g ≠ g ∘ f."
      ]
    },
    {
      q: "Find the sum of all natural numbers between 300 and 600 which are divisible by 7.",
      points: [
        "First number after 300 divisible by 7 is 301.",
        "Last number before 600 divisible by 7 is 595.",
        "Number of terms n = [(595 - 301) / 7] + 1 = [294 / 7] + 1 = 43",
        "Sum S43 = (43 / 2) × (301 + 595) = (43 / 2) × 896 = 43 × 448 = 19,264."
      ]
    }
  ];

  let fiveMarkQs = [
    {
      q: "State and prove Thales Theorem (Basic Proportionality Theorem).",
      points: [
        "Statement: If a line is drawn parallel to one side of a triangle intersecting the other two sides, then it divides the two sides in the same ratio.",
        "Given: In triangle ABC, D is a point on AB and E is a point on AC such that DE || BC.",
        "Construction: Draw EM ⊥ AB and DN ⊥ AC. Join BE and CD.",
        "Proof: Area(ΔADE) / Area(ΔBDE) = AD / DB and Area(ΔADE) / Area(ΔCDE) = AE / EC.",
        "Conclusion: Since ΔBDE and ΔCDE lie on the same base DE and between parallels DE and BC, their areas are equal. Hence AD/DB = AE/EC."
      ]
    },
    {
      q: "Find the square root of 64x⁴ - 16x³ + 17x² - 2x + 1 by division method.",
      points: [
        "Arrange terms in descending powers of x.",
        "Root of first term 64x⁴ is 8x².",
        "Bring down -16x³ + 17x²; divisor becomes 16x² - x.",
        "Bring down -2x + 1; divisor becomes 16x² - 2x + 1.",
        "Final Square Root = |8x² - x + 1|"
      ]
    }
  ];

  if (norm.includes("science") && !norm.includes("social")) {
    oneMarkQs = [
      {
        q: "Inertia of a body depends on:",
        options: ["Weight", "Acceleration due to gravity", "Mass of the object", "Both a & b"],
        answer: 2,
        explanation: "Inertia is directly proportional to the mass of the body."
      },
      {
        q: "Kilowatt hour is the unit of:",
        options: ["Resistivity", "Electric power", "Electrical energy", "Electric potential"],
        answer: 2,
        explanation: "1 kWh = 3.6 × 10⁶ Joules, which is the commercial unit of electrical energy."
      }
    ];
    twoMarkQs = [
      {
        q: "State Newton's Second Law of Motion.",
        points: [
          "The force acting on a body is directly proportional to the rate of change of linear momentum.",
          "Formula: F = dp/dt = m × a (Force = mass × acceleration)."
        ]
      }
    ];
    fiveMarkQs = [
      {
        q: "Differentiate between Mass and Weight with 5 distinct points.",
        points: [
          "1. Mass is fundamental quantity; Weight is derived quantity.",
          "2. Mass is amount of matter contained; Weight is gravitational pull (W = mg).",
          "3. Mass is scalar (magnitude only); Weight is vector (direction towards center of Earth).",
          "4. Mass remains constant anywhere; Weight varies with acceleration due to gravity g.",
          "5. Measured in kilograms (kg) vs measured in Newtons (N)."
        ]
      }
    ];
  } else if (norm.includes("social")) {
    oneMarkQs = [
      {
        q: "What was the main outcome of the First World War?",
        options: ["Treaty of Versailles", "League of Nations established", "Fall of Russian Empire", "All of the above"],
        answer: 3,
        explanation: "The First World War led to the Treaty of Versailles, the formation of League of Nations, and revolutions ending major empires."
      },
      {
        q: "Which Article of the Indian Constitution deals with the Fundamental Rights?",
        options: ["Part I", "Part III (Articles 12 to 35)", "Part IV", "Part IV-A"],
        answer: 1,
        explanation: "Part III of the Constitution from Articles 12 to 35 contains the Fundamental Rights of Indian citizens."
      }
    ];
    twoMarkQs = [
      {
        q: "Mention the four organs of the League of Nations.",
        points: [
          "The Assembly and the Council",
          "The Secretariat and the Permanent Court of International Justice"
        ]
      },
      {
        q: "State the importance of the Himalayas for Indian climate.",
        points: [
          "Acts as a climatic barrier intercepting South West monsoon winds causing torrential rainfall.",
          "Protects the subcontinent from cold, bitter winds of central Asia."
        ]
      }
    ];
    fiveMarkQs = [
      {
        q: "Write a detailed note on the powers and functions of the Prime Minister of India.",
        points: [
          "Leader of the nation and head of the Union Council of Ministers.",
          "Allocates portfolios among the ministers and coordinates policy decisions.",
          "Acts as the chief advisor to the President of India on state appointments.",
          "Represents the nation in international treaties, conferences, and summits."
        ]
      }
    ];
  } else if (norm.includes("tamil")) {
    oneMarkQs = [
      {
        q: "‘மெத்த வணிகலன்’ என்னும் தொடரில் தமிழழகனார் குறிப்பிடுவது எது?",
        options: ["வணிகக் கப்பல்களும் ஐம்பெருங்காப்பியங்களும்", "வணிகமும் அணிகலன்களும்", "பொன் அணிகலனும் கப்பல்களும்", "வணிகமும் காப்பியங்களும்"],
        answer: 0,
        explanation: "தமிழழகனார் மெத்த வணிகலன் என இரட்டுற மொழிதலில் ஐம்பெருங்காப்பியங்களையும் வணிகக் கப்பல்களையும் குறிப்பிடுகிறார்."
      }
    ];
    twoMarkQs = [
      {
        q: "விடைக்கேற்ற வினா அமைக்க: அன்னை மொழியே தமிழே உன்னை வாழ்த்துகிறோம்.",
        points: [
          "வினா: கவிஞர் யாரை வாழ்த்துகிறார்?",
          "அல்லது: நாம் எந்த மொழியை வாழ்த்துகிறோம்?"
        ]
      }
    ];
    fiveMarkQs = [
      {
        q: "அன்னை மொழியே கவிதையில் தமிழழகனார் தமிழை எவ்வாறெல்லாம் சிறப்பித்துக் கூறுகிறார்? விவரிக்க.",
        points: [
          "அன்னை மொழியாய், அழகிய செழுந்தமிழாய் விளங்குதல்.",
          "முத்தமிழாய் வளர்ந்து, சங்கப் பலகையில் சான்றோரால் காக்கப்பட்ட மேன்மை.",
          "திருக்குறளின் மாபெரும் பெருமை கொண்ட நூல் வளம்.",
          "எட்டுத்தொகையும் பத்துப்பாட்டும் சிலப்பதிகாரமும் மணிமேகலையும் பூண்ட அணிகலன் அழகு."
        ]
      }
    ];
  }

  return [
    {
      id: "opt-1mark",
      badge: "1 Mark",
      title: "1 Mark",
      subtitle: "Objective Questions",
      color: "bg-[#FF4545]",
      mark: 1,
      badgeColor: "bg-red-500",
      questions: oneMarkQs
    },
    {
      id: "opt-2mark",
      badge: "2 Mark",
      title: "2 Mark",
      subtitle: "Short Answers",
      color: "bg-[#1E74EA]",
      mark: 2,
      badgeColor: "bg-blue-500",
      questions: twoMarkQs
    },
    {
      id: "opt-5mark",
      badge: "5 Mark",
      title: "5 Mark",
      subtitle: "Detailed Answers",
      color: "bg-[#00C988]",
      mark: 5,
      badgeColor: "bg-emerald-500",
      questions: fiveMarkQs
    },
    {
      id: "opt-10mark",
      badge: "10 Mark",
      title: "10 Mark",
      subtitle: "Long Essays",
      color: "bg-[#A855F7]",
      mark: 10,
      badgeColor: "bg-purple-500",
      questions: [
        {
          q: `Comprehensive 10-Mark Section for ${subject}: Complete Exam Blueprint Solutions & Practical Analysis.`,
          points: [
            "Includes Government Blueprint high-weightage topics and long-form essays",
            "Full step-by-step scoring breakdown with key formulae",
            "Mandatory diagram labeling, proofs, and structured conclusion"
          ]
        }
      ]
    }
  ];
};

export const getUnitQuestions = (subject = "Mathematics", unit = { unit: "Unit 1", title: "Relations and Functions" }, mark = 1) => {
  const markNum = parseInt(mark, 10) || 1;
  const unitTitle = unit.title || "Selected Topic";
  const unitCode = unit.unit || "Unit 1";

  if ((subject || "").toLowerCase().includes("math") && (unit.chapterNum === 1 || (unit.title || "").toLowerCase().includes("relation"))) {
    return getMathClass10Chapter1Questions("mcqs", markNum, unit.selectedSection);
  }

  if (markNum === 1) {
    return [
      {
        q: `[${unitCode} - ${unitTitle}] What is the primary characteristic property associated with ${unitTitle}?`,
        options: [
          "Standard algebraic identity & unique mapping",
          "Linear proportionality coefficient",
          "Constant independent term",
          "Reciprocal differential quotient"
        ],
        answer: 0,
        explanation: `Under ${unitTitle}, every element is mapped uniquely under the defined standard relation.`
      },
      {
        q: `[${unitCode}] Which of the following statements is mathematically true for ${unitTitle}?`,
        options: [
          "It satisfies the fundamental theorem for all positive values",
          "The discriminant is always strictly negative",
          "The domain excludes zero in all real cases",
          "It represents a disjoint singular subset"
        ],
        answer: 0,
        explanation: `Direct theorem statement from ${unitCode} syllabus guidelines.`
      },
      {
        q: `[${unitCode}] For a given parameter in ${unitTitle}, the maximum optimal outcome occurs when:`,
        options: [
          "Ratio of inputs equals unity (1 : 1)",
          "Difference of coordinates vanishes",
          "Boundary condition is strictly bounded",
          "All coefficients are zero"
        ],
        answer: 0,
        explanation: `Symmetry in ${unitTitle} ensures maximum value at balanced boundary condition.`
      }
    ];
  }

  if (markNum === 2) {
    return [
      {
        q: `[${unitCode} - 2 Marks] Define the fundamental rule of ${unitTitle} and give its standard formula.`,
        points: [
          `Definition: In ${unitTitle}, the key governing relation defines the exact relationship between the primary variables.`,
          "Formula / Identity: Standard verified representation according to textbook curriculum.",
          "Conclusion: Two-step concise solution as per Tamil Nadu Board marking scheme."
        ]
      },
      {
        q: `[${unitCode} - 2 Marks] Find the essential value for the given problem in ${unitTitle}.`,
        points: [
          "Step 1: Write down the given data and state the applicable formula.",
          "Step 2: Substitute the known values and simplify to arrive at the final numerical answer."
        ]
      }
    ];
  }

  if (markNum === 5) {
    return [
      {
        q: `[${unitCode} - 5 Marks] State and prove the major theorem / derivation in ${unitTitle}.`,
        points: [
          `Statement: Clear and precise mathematical/scientific statement of the core theorem in ${unitTitle}.`,
          "Given Data & Figure: Label all essential components, axes, and angles.",
          "Step-by-step Proof: Sequential algebraic or analytical deduction.",
          "Scoring Key: Statement (1M) + Diagram (1M) + Proof Steps (2M) + Conclusion (1M) = 5 Marks."
        ]
      },
      {
        q: `[${unitCode} - 5 Marks] Solve the standard comprehensive problem from the end exercises of ${unitTitle}.`,
        points: [
          "Step 1: Formulate the equations from the given problem statement.",
          "Step 2: Apply the standard theorem or method of elimination/substitution.",
          "Step 3: Verification of the result with the original condition."
        ]
      }
    ];
  }

  // 10 Mark
  return [
    {
      q: `[${unitCode} - 10 Marks] Comprehensive Board Exam Problem & Theoretical Proof for ${unitTitle}.`,
      points: [
        "Part A (Theorem & Principle - 4 Marks): State the fundamental law, define all parameters, and provide formal mathematical induction or experimental proof.",
        "Part B (Practical Construction / Graph - 3 Marks): Construct the required geometric/analytical figure with exact measurements and step-by-step justification.",
        "Part C (Problem Solving & Analysis - 3 Marks): Calculate the final quantitative results, state units, and verify dimensional consistency."
      ]
    }
  ];
};

// =========================================================================
// SUB-CATEGORIES FOR UNIT PRACTICE (SUBJECT-SPECIFIC & MARK-SPECIFIC)
// =========================================================================
export const getUnitSubCategories = (subject = "Mathematics", unit = { unit: "Unit 1", title: "Relations and Functions" }, mark = 1) => {
  const norm = (subject || "").toLowerCase();
  const markNum = parseInt(mark, 10) || 1;
  const unitName = unit.unit || "Unit 1";
  const unitTitle = unit.title || "Selected Topic";

  if (markNum === 1) {
    if (norm.includes("english")) {
      const prose = unit.prose || unitTitle;
      const poem = unit.poem || "Poem";
      const supp = unit.supplementary || "Supplementary";

      return [
        { id: "synonyms", title: `Synonyms (Prose: ${prose})`, subtitle: `Vocabulary & Word Meanings`, count: "4 Questions" },
        { id: "antonyms", title: `Antonyms (Prose: ${prose})`, subtitle: `Opposite Words & Meanings`, count: "4 Questions" },
        { id: "fill-blanks", title: "Fill in the Blanks", subtitle: `Prepositions, Tenses & Phrasal Verbs`, count: "4 Questions" },
        { id: "poem-mcq", title: `Poem Appreciation (${poem})`, subtitle: `Rhyme Scheme & Figures of Speech`, count: "4 Questions" },
        { id: "supp-mcq", title: `Supplementary MCQs (${supp})`, subtitle: `Character & Plot Comprehension`, count: "4 Questions" },
        { id: "one-words", title: "One Word Substitution", subtitle: `Single Term Replacements`, count: "4 Questions" },
      ];
    }
    if (norm.includes("tamil")) {
      return [
        { id: "synonyms", title: "பொருள் தருக (Synonyms)", subtitle: `${unitName} - சொல்லும் பொருளும்`, count: "4 Questions" },
        { id: "antonyms", title: "எதிர்ச்சொல் தருக (Antonyms)", subtitle: `எதிர்ச்சொற்கள் பயிற்சி`, count: "4 Questions" },
        { id: "fill-blanks", title: "கோடிட்ட இடம் (Fill Blanks)", subtitle: `சரியான சொல்லால் நிரப்புக`, count: "4 Questions" },
        { id: "one-words", title: "பிரித்து / சேர்த்து எழுதுக", subtitle: `இலக்கண சொல் பிரித்தல்`, count: "4 Questions" },
        { id: "mcqs", title: "சரியான விடை (MCQs)", subtitle: `பலவுள் தெரிக வினாக்கள்`, count: "4 Questions" },
      ];
    }
    if (norm.includes("math")) {
      const isCh1 = unit.chapterNum === 1 || (unit.title || "").toLowerCase().includes("relation");
      if (isCh1) {
        return [
          { id: "concept-study", title: "Textbook Study Notes & Illustrations", subtitle: "Faraday Quote, Auditorium Plan & Thinking Corner", count: "Study Guide" },
          { id: "mcqs", title: "Choose the Best Answer (MCQs)", subtitle: `Standard Board MCQs for ${unitName}`, count: "8 Questions" },
          { id: "formulas", title: "Key Formulas & Definitions", subtitle: `Essential Formulas & Identity Rules`, count: "5 Questions" },
          { id: "fill-blanks", title: "Fill in the Blanks", subtitle: `Mathematical Property Completions`, count: "6 Questions" },
          { id: "one-words", title: "One Word / Direct Values", subtitle: `Direct Value & Calculation Answers`, count: "5 Questions" },
        ];
      }
      return [
        { id: "mcqs", title: "Choose the Best Answer (MCQs)", subtitle: `Standard Board MCQs for ${unitName}`, count: "4 Questions" },
        { id: "formulas", title: "Key Formulas & Definitions", subtitle: `Essential Formulas & Identity Rules`, count: "4 Questions" },
        { id: "fill-blanks", title: "Fill in the Blanks", subtitle: `Mathematical Property Completions`, count: "4 Questions" },
        { id: "one-words", title: "One Word / Direct Values", subtitle: `Direct Value & Calculation Answers`, count: "4 Questions" },
      ];
    }
    if ((norm.includes("science") && !norm.includes("social")) || norm.includes("physics") || norm.includes("chem") || norm.includes("bio")) {
      return [
        { id: "mcqs", title: "Choose the Correct Option (MCQs)", subtitle: `Textbook & Board Exam MCQs`, count: "4 Questions" },
        { id: "fill-blanks", title: "Fill in the Blanks", subtitle: `Scientific Statements & Missing Terms`, count: "4 Questions" },
        { id: "one-words", title: "One Word Answers & SI Units", subtitle: `Definitions, Units & Scientific Terms`, count: "4 Questions" },
        { id: "match", title: "Match the Following", subtitle: `Laws, Inventors & SI Unit Pairs`, count: "4 Questions" },
      ];
    }
    // Social / default
    return [
      { id: "mcqs", title: "Choose the Correct Option", subtitle: `Objective Board Exam MCQs`, count: "4 Questions" },
      { id: "fill-blanks", title: "Fill in the Blanks", subtitle: `Historical Dates & Important Facts`, count: "4 Questions" },
      { id: "one-words", title: "One Word Answers", subtitle: `Key Terms, Treaties & Concepts`, count: "4 Questions" },
      { id: "match", title: "Match the Following", subtitle: `Events, Leaders & Reforms`, count: "4 Questions" },
    ];
  }

  if (markNum === 2) {
    if (norm.includes("english")) {
      const prose = unit.prose || unitTitle;
      const poem = unit.poem || "Poem";
      const supp = unit.supplementary || "Supplementary";
      return [
        { id: "prose-short-qa", title: `Prose 2M Q&A (${prose})`, subtitle: `Direct Short Answer Questions`, count: "3 Questions" },
        { id: "poem-short-qa", title: `Poem 2M Questions (${poem})`, subtitle: `Poetic Lines & Appreciation`, count: "3 Questions" },
        { id: "supp-short-qa", title: `Supplementary 2M Q&A (${supp})`, subtitle: `Key Plot Events & Characters`, count: "2 Questions" },
        { id: "grammar-2m", title: "Grammar & Transformation (2M)", subtitle: `Direct/Indirect, Voices & Clauses`, count: "3 Questions" },
      ];
    }
    if (norm.includes("math") && (unit.chapterNum === 1 || (unit.title || "").toLowerCase().includes("relation"))) {
      return [
        { id: "2m-short-qa", title: "2 Mark Short Questions & Answers", subtitle: `Auditorium Seating & Cartesian Products`, count: "6 Questions" },
        { id: "2m-definitions", title: "Key Definitions & Notes", subtitle: `Standard Formulations & Properties`, count: "3 Questions" },
        { id: "2m-problems", title: "Problem Solving & Formula Steps", subtitle: `Step-by-Step 2M Numerical Answers`, count: "2 Questions" },
        { id: "2m-bookback", title: "Book-Back Important Questions", subtitle: `High-Priority Scoring Questions`, count: "2 Questions" },
      ];
    }
    return [
      { id: "2m-short-qa", title: "2 Mark Short Questions & Answers", subtitle: `Direct Board Exam Q&A for ${unitName}`, count: "3 Questions" },
      { id: "2m-definitions", title: "Key Definitions & Laws", subtitle: `Standard Formulations & Meanings`, count: "3 Questions" },
      { id: "2m-problems", title: "Problem Solving & Formula Steps", subtitle: `Step-by-Step 2M Numerical Answers`, count: "2 Questions" },
      { id: "2m-bookback", title: "Book-Back Important Questions", subtitle: `High-Priority Scoring Questions`, count: "2 Questions" },
    ];
  }

  if (markNum === 5) {
    if (norm.includes("english")) {
      const prose = unit.prose || unitTitle;
      const poem = unit.poem || "Poem";
      const supp = unit.supplementary || "Supplementary";
      return [
        { id: "prose-paragraph", title: `Prose Paragraph (${prose})`, subtitle: `5 Mark Detailed Paragraph Answer`, count: "2 Questions" },
        { id: "poem-substance", title: `Poem Substance (${poem})`, subtitle: `5 Mark Central Idea & Appreciation`, count: "2 Questions" },
        { id: "supp-summary", title: `Supplementary Summary (${supp})`, subtitle: `5 Mark Story Character & Summary`, count: "2 Questions" },
      ];
    }
    if (norm.includes("math") && (unit.chapterNum === 1 || (unit.title || "").toLowerCase().includes("relation"))) {
      return [
        { id: "5m-detailed", title: "5 Mark Detailed Questions & Answers", subtitle: `Vegetables & Fruits 12-Pair & Grid Plane`, count: "2 Questions" },
        { id: "5m-theorems", title: "Theorems, Properties & Thinking Corner", subtitle: `Thinking Corner Proof & Infinite Sets`, count: "1 Question" },
        { id: "5m-diagrams", title: "Diagram & Graphical Grid Problems", subtitle: `Auditorium Seating & Coordinate Grid`, count: "1 Question" },
      ];
    }
    return [
      { id: "5m-detailed", title: "5 Mark Detailed Questions & Answers", subtitle: `Long Answer Solutions for ${unitName}`, count: "2 Questions" },
      { id: "5m-theorems", title: "Theorems, Derivations & Proofs", subtitle: `Complete Step-by-Step Board Proofs`, count: "2 Questions" },
      { id: "5m-diagrams", title: "Diagram & Construction Problems", subtitle: `Labeled Figures & Scoring Breakdown`, count: "2 Questions" },
    ];
  }

  // 10 Mark
  if (norm.includes("english")) {
    return [
      { id: "10m-essays", title: "10 Mark Comprehensive Essay", subtitle: `Blueprint Board Exam Long Analysis`, count: "2 Questions" },
      { id: "10m-writing", title: "Letter & Creative Writing (10M)", subtitle: `Formal/Informal Letter & Story Outline`, count: "2 Questions" },
    ];
  }
  if (norm.includes("math") && (unit.chapterNum === 1 || (unit.title || "").toLowerCase().includes("relation"))) {
    return [
      { id: "10m-essays", title: "10 Mark Comprehensive Blueprint Review", subtitle: `Full Concept Mastery & In-depth Multi-Part Problem`, count: "1 Question" },
      { id: "10m-case-study", title: "Real-Life Seating & Grid Case Studies", subtitle: `Auditorium Modeling & Olympiad Case`, count: "1 Question" },
    ];
  }
  return [
    { id: "10m-essays", title: "10 Mark Comprehensive Essays", subtitle: `Complete Blueprint High-Weightage Solutions`, count: "2 Questions" },
    { id: "10m-case-study", title: "Analytical & Practical Case Studies", subtitle: `In-depth Multi-Part Board Exam Problems`, count: "2 Questions" },
  ];
};

// =========================================================================
// REAL QUESTIONS FOR SPECIFIC SUB-CATEGORIES
// =========================================================================
// ENGLISH QUESTIONS GENERATOR (UNITS 1 - 7: PROSE, POEM, SUPPLEMENTARY)
// =========================================================================
const getEnglishCategoryQuestions = (unit, categoryId, mark = 1) => {
  const unitNum = parseInt((unit.unit || "").replace(/\D/g, ""), 10) || 1;
  const unitName = unit.unit || `Unit ${unitNum}`;
  const prose = unit.prose || unit.title || "Prose";
  const poem = unit.poem || "Poem";
  const supp = unit.supplementary || "Supplementary";

  const UNIT_DATA = {
    1: {
      synonyms: [
        {
          q: `[${unitName} - ${prose}] Choose the correct synonym for the underlined word: "The seagull was plaintively begging for food."`,
          options: ["Sorrowfully / Mournfully", "Cheerfully", "Angrily", "Courageously"],
          answer: 0,
          explanation: "'Plaintively' means expressing sorrow or sounding sad."
        },
        {
          q: `[${unitName} - ${prose}] What is the synonym of "monstrous"?`,
          options: ["Tremendous / Terrible", "Gentle", "Tiny", "Fragile"],
          answer: 0,
          explanation: "'Monstrous' refers to something terrifying, shockingly large or hideous."
        },
        {
          q: `[${unitName} - ${prose}] What is the synonym of "exhausted"?`,
          options: ["Completely worn out / Tired", "Refreshed", "Active", "Playful"],
          answer: 0,
          explanation: "'Exhausted' means completely drained of physical or mental energy."
        },
        {
          q: `[${unitName} - ${prose}] What is the synonym of "soared"?`,
          options: ["Flew high in the air", "Fell down rapidly", "Walked slowly", "Sat silently"],
          answer: 0,
          explanation: "'Soared' means flew upwards into the air with wings outstretched."
        }
      ],
      antonyms: [
        {
          q: `[${unitName} - ${prose}] Choose the correct antonym for the underlined word: "The young seagull was reluctant to fly."`,
          options: ["Willing / Eager", "Hesitant", "Afraid", "Anxious"],
          answer: 0,
          explanation: "The antonym of 'reluctant' is 'willing' or 'eager'."
        },
        {
          q: `[${unitName} - ${prose}] What is the antonym of "victory"?`,
          options: ["Defeat", "Success", "Triumph", "Glory"],
          answer: 0,
          explanation: "The opposite of victory is defeat or failure."
        },
        {
          q: `[${unitName} - ${prose}] What is the antonym of "cowardice"?`,
          options: ["Bravery / Courage", "Fear", "Timidness", "Weakness"],
          answer: 0,
          explanation: "The antonym of cowardice is courage or bravery."
        },
        {
          q: `[${unitName} - ${prose}] What is the antonym of "harsh"?`,
          options: ["Gentle / Pleasant", "Severe", "Rough", "Cruel"],
          answer: 0,
          explanation: "The opposite of harsh is gentle or soft."
        }
      ],
      "poem-mcq": [
        {
          q: `[${unitName} - ${poem}] In the poem 'Life', the poet Henry Van Dyke desires to live life with a ______ heart:`,
          options: ["Whole and happy", "Sad and reluctant", "Proud and boastful", "Weary and troubled"],
          answer: 0,
          explanation: "Henry Van Dyke urges living cheerfully with a whole and happy heart."
        },
        {
          q: `[${unitName} - ${poem}] What is the rhyme scheme of the opening quatrain in 'Life'?`,
          options: ["abba", "abab", "aabb", "abcb"],
          answer: 0,
          explanation: "The octave follows the Italian sonnet scheme abba abba."
        },
        {
          q: `[${unitName} - ${poem}] 'In the dim past, nor holding back in fear' - What does this poetic line reflect?`,
          options: ["Courageous optimism and moving forward", "Dwelling on past mistakes", "Regret over lost time", "Fear of death"],
          answer: 0,
          explanation: "The poet urges not to mourn the past or fear the unknown future."
        },
        {
          q: `[${unitName} - ${poem}] The poem 'Life' is written in the traditional 14-line verse form known as a ______:`,
          options: ["Sonnet", "Ballad", "Epic", "Elegy"],
          answer: 0,
          explanation: "A 14-line poem in iambic pentameter with a formal rhyme scheme is a sonnet."
        }
      ],
      "supp-mcq": [
        {
          q: `[${unitName} - ${supp}] Who was the rightful Duke of Milan in 'The Tempest'?`,
          options: ["Prospero", "Antonio", "Alonso", "Ferdinand"],
          answer: 0,
          explanation: "Prospero was the rightful Duke of Milan before his brother Antonio usurped his throne."
        },
        {
          q: `[${unitName} - ${supp}] Ariel was an airy spirit whom Prospero released from imprisonment inside a ______:`,
          options: ["Pine tree", "Iron cage", "Cave", "Castle tower"],
          answer: 0,
          explanation: "The evil witch Sycorax had imprisoned Ariel in the body of a cleft pine tree."
        },
        {
          q: `[${unitName} - ${supp}] Who raised the tempest in the sea under Prospero's orders?`,
          options: ["Ariel", "Caliban", "Miranda", "Gonzalo"],
          answer: 0,
          explanation: "Ariel magically whipped up the storm to shipwreck Prospero's enemies."
        },
        {
          q: `[${unitName} - ${supp}] Ferdinand was the young prince and son of the King of ______:`,
          options: ["Naples", "Milan", "Rome", "Athens"],
          answer: 0,
          explanation: "Ferdinand was Alonso, the King of Naples' son."
        }
      ],
      "prose-short-qa": [
        {
          q: `[${unitName} - 2 Marks] Why was the young seagull afraid to fly?`,
          points: [
            "1. He felt certain that his wings would never support him over the vast sea.",
            "2. The great expanse of water stretching miles beneath him made him terrified."
          ]
        },
        {
          q: `[${unitName} - 2 Marks] What compelled the young seagull to finally take his flight?`,
          points: [
            "1. Intense hunger maddened him after fasting for 24 hours.",
            "2. When his mother hovered near with fish and halted, he dived in desperation and spread his wings."
          ]
        },
        {
          q: `[${unitName} - 2 Marks] What happened when the young seagull landed on the green sea?`,
          points: [
            "1. His legs sank in and he screamed with fright, trying to flap his wings once more.",
            "2. He was exhausted, his belly touched the water, and he floated safely without sinking."
          ]
        }
      ],
      "poem-short-qa": [
        {
          q: `[${unitName} - 2 Marks] What does Henry Van Dyke mean by 'from what the future veils'?`,
          points: [
            "1. He refuses to live in dread of whatever unknown trials the future might conceal.",
            "2. He embraces the present with courage and a cheerful spirit."
          ]
        },
        {
          q: `[${unitName} - 2 Marks] How does the poet describe the journey of life?`,
          points: [
            "1. Life's road may wind up hill or down, through rough trails or smooth paths.",
            "2. The journey will be joyful if undertaken with high adventure, courage, and hope."
          ]
        }
      ],
      "supp-short-qa": [
        {
          q: `[${unitName} - 2 Marks] Why did Antonio conspire against his brother Prospero?`,
          points: [
            "1. Prospero neglected state affairs to immerse himself in secret study and magic books.",
            "2. Antonio grew ambitious and plotted with the King of Naples to seize the dukedom."
          ]
        },
        {
          q: `[${unitName} - 2 Marks] How did Prospero test Ferdinand's love for Miranda?`,
          points: [
            "1. Prospero treated him as a spy and assigned him hard labor carrying heavy wooden logs.",
            "2. Ferdinand endured the toil gladly without complaint for the love of Miranda."
          ]
        }
      ],
      "prose-paragraph": [
        {
          q: `[${unitName} - 5 Marks] Describe the struggles undergone by the young seagull to overcome his fear of flying.`,
          points: [
            "Introduction: Liam O'Flaherty depicts the natural triumph of courage over fear in 'His First Flight'.",
            "Initial Fear: Young seagull was alone on his ledge; his parents and siblings had already flown.",
            "Parental Motivation: Parents called shrilly, scolded him, and threatened starvation if he did not fly.",
            "The Turning Point: Maddened by 24 hours of hunger, he dived for the fish held by his mother.",
            "Flight & Rejoicing: He felt his wings cut the wind, soared upwards, and his family rejoiced in his success."
          ]
        }
      ],
      "poem-substance": [
        {
          q: `[${unitName} - 5 Marks] Write an appreciation of Henry Van Dyke's poem 'Life'.`,
          points: [
            "Theme: The poem expresses optimistic determination and living life to the fullest.",
            "Attitude to Past and Future: The poet does not mourn the dim past nor fear what the future veils.",
            "Structure & Rhyme: 14-line sonnet with rhyme scheme abba abba cde cde.",
            "Message: Every individual must face life's twists and turns with a cheerful spirit and unwavering courage."
          ]
        }
      ],
      "supp-summary": [
        {
          q: `[${unitName} - 5 Marks] Narrate how Prospero reconciled with his enemies in 'The Tempest'.`,
          points: [
            "Exile & Magic: Prospero lived on an enchanted island with Miranda and his spirit Ariel.",
            "The Shipwreck: He raised a tempest to bring his treacherous brother Antonio and Alonso to his island.",
            "Forgiveness: Instead of taking revenge, Prospero chose mercy and noble reconciliation.",
            "Conclusion: Antonio repented, Alonso restored the dukedom, Miranda and Ferdinand united, and Ariel was set free."
          ]
        }
      ]
    },

    2: {
      synonyms: [
        {
          q: `[${unitName} - ${prose}] Choose the correct synonym for "hullabaloo":`,
          options: ["Uproar / Loud disturbance", "Silence", "Tragedy", "Ceremony"],
          answer: 0,
          explanation: "'Hullabaloo' refers to a clamorous noise or uproar."
        },
        {
          q: `[${unitName} - ${prose}] What is the synonym of "indignant"?`,
          options: ["Annoyed / Righteously angry", "Pleased", "Calm", "Timid"],
          answer: 0,
          explanation: "'Indignant' means feeling or showing anger at what is perceived as unfair."
        },
        {
          q: `[${unitName} - ${prose}] What is the synonym of "ransacked"?`,
          options: ["Searched thoroughly / Despoiled", "Cleaned neatly", "Locked tightly", "Ignored"],
          answer: 0,
          explanation: "'Ransacked' means searched violently or hurriedly through a place."
        },
        {
          q: `[${unitName} - ${prose}] What is the synonym of "intuitive"?`,
          options: ["Instinctive / Perceptive", "Mathematical", "Doubtful", "Slow"],
          answer: 0,
          explanation: "'Intuitive' means understanding something immediately without conscious reasoning."
        }
      ],
      antonyms: [
        {
          q: `[${unitName} - ${prose}] What is the antonym of "regularly"?`,
          options: ["Irregularly / Erratically", "Daily", "Constantly", "Punctually"],
          answer: 0,
          explanation: "The opposite of regularly is irregularly or sporadically."
        },
        {
          q: `[${unitName} - ${prose}] What is the antonym of "suspect"?`,
          options: ["Trust / Rely upon", "Mistrust", "Doubt", "Accuse"],
          answer: 0,
          explanation: "The opposite of suspecting someone is trusting them."
        },
        {
          q: `[${unitName} - ${prose}] What is the antonym of "cautiously"?`,
          options: ["Recklessly / Carelessly", "Safely", "Alertly", "Watchfully"],
          answer: 0,
          explanation: "The antonym of cautiously is carelessly or recklessly."
        },
        {
          q: `[${unitName} - ${prose}] What is the antonym of "vanished"?`,
          options: ["Appeared / Emerged", "Disappeared", "Faded", "Hid"],
          answer: 0,
          explanation: "The antonym of vanished is appeared."
        }
      ],
      "poem-mcq": [
        {
          q: `[${unitName} - ${poem}] Where does the Grumble Family live?`,
          options: ["On Complaining Street by River of Discontent", "On Happy Avenue by River of Joy", "In Pleasant Valley", "In Silence Town"],
          answer: 0,
          explanation: "Lucy Maud Montgomery locates them in Complaining Street."
        },
        {
          q: `[${unitName} - ${poem}] What happens if anyone stays too long with the Grumble Family?`,
          options: ["They learn their complaining ways and become grumblers", "They become very wealthy", "They fall asleep", "They run away immediately"],
          answer: 0,
          explanation: "Complaining is contagious and travelers soon pick up their habits."
        },
        {
          q: `[${unitName} - ${poem}] What is the poet's advice in 'The Grumble Family'?`,
          options: ["Never to grumble and keep our feet from Complaining Street", "To argue with them", "To visit them often", "To move to their town"],
          answer: 0,
          explanation: "The poet urges keeping cheerful and avoiding complaining habits."
        },
        {
          q: `[${unitName} - ${poem}] What is the rhyme scheme of 'The Grumble Family'?`,
          options: ["aabb", "abab", "abba", "abcb"],
          answer: 0,
          explanation: "The poem is composed in rhyming couplets: aabb."
        }
      ],
      "supp-mcq": [
        {
          q: `[${unitName} - ${supp}] Who gave the pet bird Zigzag to Dr. Krishnan's family?`,
          options: ["Dr. Somu (his pediatrician colleague)", "A local pet dealer", "Mrs. Jhunjhunwala", "Aunt Emily"],
          answer: 0,
          explanation: "Dr. Somu left Zigzag in Dr. Krishnan's care before leaving for Alaska."
        },
        {
          q: `[${unitName} - ${supp}] What shocking nuisance did Zigzag cause when he first perched in the house?`,
          options: ["He snored like a roaring diesel engine and slept for hours", "He bit everyone", "He flew away", "He tore the curtains"],
          answer: 0,
          explanation: "Zigzag ate fruit, perched on the ceiling fan, and snored tremendously."
        },
        {
          q: `[${unitName} - ${supp}] How did Mrs. Krishnan's painting get smeared with fruit slices?`,
          options: ["Zigzag deposited papaya and walnuts on the fan blades which spun down", "Arvind threw food at it", "A storm blew through the window", "The maid dropped a bowl"],
          answer: 0,
          explanation: "When the maid turned on the fan, fruit rained down on Mrs. Krishnan's canvas."
        },
        {
          q: `[${unitName} - ${supp}] How much money did Mrs. Jhunjhunwala pay for Mrs. Krishnan's painting?`,
          options: ["Rs. 5,000", "Rs. 1,000", "Rs. 10,000", "Rs. 500"],
          answer: 0,
          explanation: "The art critic adored the accidental fruit patterns and paid Rs. 5,000."
        }
      ],
      "prose-short-qa": [
        {
          q: `[${unitName} - 2 Marks] Why did the narrator's mother throw a shoe through Mr. Bodwell's window?`,
          points: [
            "1. The telephone was on the ground floor where the footsteps were heard.",
            "2. Throwing a shoe through the neighbor's window was her quick method to get them to summon the police."
          ]
        },
        {
          q: `[${unitName} - 2 Marks] What did grandfather do when the policemen entered the attic?`,
          points: [
            "1. Grandfather mistook the cops for deserters from General Meade's army in 1863.",
            "2. He jumped out of bed, grabbed Officer Bichelmeyer's gun, and shot him in the shoulder."
          ]
        }
      ],
      "poem-short-qa": [
        {
          q: `[${unitName} - 2 Marks] Why does no one ever acknowledge being a member of the Grumble Family?`,
          points: [
            "1. Nobody ever confesses to having a complaining nature.",
            "2. Grumblers are despised because they spread negativity wherever they go."
          ]
        }
      ],
      "supp-short-qa": [
        {
          q: `[${unitName} - 2 Marks] How did Zigzag prove to be an invaluable asset at Dr. Krishnan's clinic?`,
          points: [
            "1. Zigzag spoke in twenty-one languages and recited French poetry.",
            "2. He comforted crying children, kept the waiting room calm, and cheered patients."
          ]
        }
      ],
      "prose-paragraph": [
        {
          q: `[${unitName} - 5 Marks] Describe the comical turn of events that took place in the house on the night the ghost got in.`,
          points: [
            "Footsteps at Midnight: Narrator heard footsteps circling the dining table at 1:15 AM.",
            "Mother's Alarm: Mother assumed burglars were in the house and flung a shoe through the neighbor's window.",
            "Police Raid: Cops smashed the doors, broke windows, and ransacked the furniture searching for thieves.",
            "Grandfather's Action: Grandfather mistook police for Civil War deserters and opened fire in the attic.",
            "Resolution: The next morning, grandfather casually asked why all those cops were in the house."
          ]
        }
      ],
      "poem-substance": [
        {
          q: `[${unitName} - 5 Marks] Summarize the central theme of Lucy Maud Montgomery's poem 'The Grumble Family'.`,
          points: [
            "The Grumble Habit: The poem humorously exposes the toxic habit of perpetual complaining.",
            "Location of the Family: They reside on Complaining Street, never satisfied with weather or fortune.",
            "The Warning: Associating with grumblers rubs off on people until they become grumblers themselves.",
            "Poet's Counsel: Keep a cheerful countenance and resolve never to grumble whatever happens."
          ]
        }
      ],
      "supp-summary": [
        {
          q: `[${unitName} - 5 Marks] Give an account of the hilarious arrival and triumph of Zigzag in Dr. Krishnan's home.`,
          points: [
            "Somu's Surprise: Dr. Somu sent Zigzag, an eccentric African bird, to Dr. Krishnan's home.",
            "Chaos at Home: Zigzag refused to speak, deposited fruits on fan blades, and snored deafeningly.",
            "The Painting Accident: Fruit pulp splattered across Mrs. Krishnan's prized canvas.",
            "Clinic Triumph: At the clinic, Zigzag became active, reciting poetry and calming crying toddlers.",
            "Happy Ending: Mrs. Jhunjhunwala bought the fruit-stained painting for Rs. 5,000, calling it genius."
          ]
        }
      ]
    },

    3: {
      synonyms: [
        {
          q: `[${unitName} - ${prose}] Choose the synonym for "expedition":`,
          options: ["Voyage / Structured journey", "Holiday picnic", "Indoor conference", "Rest period"],
          answer: 0,
          explanation: "'Expedition' refers to a journey undertaken by a group with a definite purpose."
        },
        {
          q: `[${unitName} - ${prose}] What is the synonym of "rendezvous"?`,
          options: ["Meeting place / Appointed venue", "Farewell party", "Battlefield", "Airport"],
          answer: 0,
          explanation: "'Rendezvous' is a prearranged meeting at an agreed time and place."
        },
        {
          q: `[${unitName} - ${prose}] What is the synonym of "replenish"?`,
          options: ["Refill / Restock", "Deplete", "Empty", "Damage"],
          answer: 0,
          explanation: "'Replenish' means to restore or fill up again with fresh supplies."
        },
        {
          q: `[${unitName} - ${prose}] What is the synonym of "intrepid"?`,
          options: ["Fearless / Resolute", "Timid", "Fragile", "Hesitant"],
          answer: 0,
          explanation: "'Intrepid' describes fearless, adventurous courage."
        }
      ],
      antonyms: [
        {
          q: `[${unitName} - ${prose}] What is the antonym of "ancient"?`,
          options: ["Modern / Contemporary", "Historic", "Antique", "Old"],
          answer: 0,
          explanation: "The antonym of ancient is modern."
        },
        {
          q: `[${unitName} - ${prose}] What is the antonym of "treacherous"?`,
          options: ["Safe / Reliable", "Dangerous", "Risky", "Perilous"],
          answer: 0,
          explanation: "The opposite of treacherous (hazardous/unfaithful) is safe or trustworthy."
        },
        {
          q: `[${unitName} - ${prose}] What is the antonym of "harmony"?`,
          options: ["Discord / Conflict", "Agreement", "Peace", "Symphony"],
          answer: 0,
          explanation: "The antonym of harmony is discord."
        }
      ],
      "poem-mcq": [
        {
          q: `[${unitName} - ${poem}] In 'I am Every Woman', what does the poet say about a woman's innate nature?`,
          options: ["She is beauty innate, a symbol of power and strength", "She is weak and easily defeated", "She seeks wealth above all", "She prefers solitude"],
          answer: 0,
          explanation: "Rakhi Nariani Shirke praises the inherent strength and beauty of womanhood."
        },
        {
          q: `[${unitName} - ${poem}] 'She is a lioness; don't mess with her' - Which figure of speech is used?`,
          options: ["Metaphor", "Simile", "Oxymoron", "Onomatopoeia"],
          answer: 0,
          explanation: "A direct comparison without 'like' or 'as' is a metaphor."
        },
        {
          q: `[${unitName} - ${poem}] What does the line 'She puts her life at stake' demonstrate?`,
          options: ["Her selflessness and love for her family", "Her recklessness", "Her desire for fame", "Her fear of life"],
          answer: 0,
          explanation: "Women willingly make immense sacrifices for their loved ones."
        }
      ],
      "supp-mcq": [
        {
          q: `[${unitName} - ${supp}] Why did Mulan decide to enlist in the Chinese army?`,
          options: ["Her father was old and sick, and her brother was only a little boy", "She wanted to be a general", "She was forced by the government", "She wanted to escape housework"],
          answer: 0,
          explanation: "Each family had to send one male; Mulan sacrificed herself to save her father."
        },
        {
          q: `[${unitName} - ${supp}] What gift did Mulan request from the Emperor of China after winning the war?`,
          options: ["Six fine horses to return to her family", "Gold and royal titles", "The palace", "To remain general forever"],
          answer: 0,
          explanation: "Mulan loved her family and wished only to return home."
        }
      ],
      "prose-short-qa": [
        {
          q: `[${unitName} - 2 Marks] What is Navika Sagar Parikrama?`,
          points: [
            "1. An initiative by the Indian Navy where an all-women crew circumnavigated the globe.",
            "2. It showcased women empowerment and indigenous capability on INSV Tarini."
          ]
        },
        {
          q: `[${unitName} - 2 Marks] Name the skipper and crew members of INSV Tarini.`,
          points: [
            "1. Commanded by Lt. Cdr. Vartika Joshi.",
            "2. Crew: Lt. Cdr. Pratibha Jamwal, Lt. Cdr. Swathi P., Lt. Aishwarya Boddapati, Lt. S. Vijaya Devi, and Lt. Payal Gupta."
          ]
        }
      ],
      "prose-paragraph": [
        {
          q: `[${unitName} - 5 Marks] Highlight the challenges faced by the all-women crew during their voyage in INSV Tarini.`,
          points: [
            "Global Voyage: Covered 21,600 nautical miles, crossing the equator twice and weathering South Pacific storms.",
            "Teamwork: They managed steering, sail repairs, culinary duties, and tactical navigation independently.",
            "Overcoming Fear: The crew faced giant waves with unity, proving women can excel in extreme adventure.",
            "National Pride: Inspired young women across India to achieve excellence in defense and scientific spheres."
          ]
        }
      ]
    },

    4: {
      synonyms: [
        {
          q: `[${unitName} - ${prose}] Choose the synonym for "antiquated":`,
          options: ["Outdated / Old-fashioned", "Modern", "Shiny", "Digital"],
          answer: 0,
          explanation: "'Antiquated' means old-fashioned or outdated."
        },
        {
          q: `[${unitName} - ${prose}] What is the synonym of "remorse"?`,
          options: ["Deep regret / Guilt", "Joy", "Anger", "Indifference"],
          answer: 0,
          explanation: "'Remorse' is a feeling of deep regret for a wrong committed."
        },
        {
          q: `[${unitName} - ${prose}] What is the synonym of "affluent"?`,
          options: ["Wealthy / Prosperous", "Destitute", "Weak", "Hungry"],
          answer: 0,
          explanation: "'Affluent' means possessing great wealth."
        }
      ],
      antonyms: [
        {
          q: `[${unitName} - ${prose}] What is the antonym of "remember"?`,
          options: ["Forget", "Recall", "Remind", "Cherish"],
          answer: 0,
          explanation: "The antonym of remember is forget."
        }
      ],
      "poem-mcq": [
        {
          q: `[${unitName} - ${poem}] In 'The Ant and the Cricket', what did the cricket do throughout summer?`,
          options: ["Sang and danced continuously", "Stored grains in his house", "Built a shelter", "Farmed the fields"],
          answer: 0,
          explanation: "The foolish cricket wasted summer singing instead of planning ahead."
        },
        {
          q: `[${unitName} - ${poem}] What was the ant's reply when the cricket asked for food in winter?`,
          options: ["Go and dance the winter away", "Here is all my food", "You are very wise", "Come inside my home"],
          answer: 0,
          explanation: "The ant refused, reprimanding him to dance the winter away."
        }
      ],
      "supp-mcq": [
        {
          q: `[${unitName} - ${supp}] What cruel order was issued by the despotic governor of Shinano?`,
          options: ["All aged persons must immediately be put to death", "All farmers must leave the town", "All cattle must be confiscated", "Taxes must be doubled"],
          answer: 0,
          explanation: "The governor abhorred frailty and ordered all elderly to be killed."
        },
        {
          q: `[${unitName} - ${supp}] How did the loving mother help her son safely return down the mountain?`,
          options: ["She snapped twigs and quietly dropped them along the path", "She carried a torch", "She shouted directions", "She drew a map on cloth"],
          answer: 0,
          explanation: "The mother dropped twigs as markers so her son would not lose his way."
        }
      ],
      "prose-short-qa": [
        {
          q: `[${unitName} - 2 Marks] Why did Aditya decide to visit the attic of his ancestral house?`,
          points: [
            "1. To retrieve a silver medal won by his childhood classmate Sasanka Sanyal.",
            "2. Aditya had kept the medal 29 years ago out of jealousy and wished to return it."
          ]
        }
      ]
    },

    5: {
      synonyms: [
        {
          q: `[${unitName} - ${prose}] Choose the synonym for "prodigy":`,
          options: ["Wonder / Genius person", "Lazy person", "Machine", "Tourist"],
          answer: 0,
          explanation: "'Prodigy' is an exceptionally talented person or child."
        },
        {
          q: `[${unitName} - ${prose}] What is the synonym of "inclusion"?`,
          options: ["Integration / Equal involvement", "Exclusion", "Isolation", "Rejection"],
          answer: 0,
          explanation: "'Inclusion' means ensuring all people have equal access and involvement."
        }
      ],
      "poem-mcq": [
        {
          q: `[${unitName} - ${poem}] According to the poem 'The Secret of the Machines', where are machines taken from?`,
          options: ["From the ore-bed and the mine", "From deep ocean trenches", "From clouds and sky", "From forest trees"],
          answer: 0,
          explanation: "Metals for machines are extracted from the ore-bed and mines."
        },
        {
          q: `[${unitName} - ${poem}] What limitation do machines openly admit in the poem?`,
          options: ["They cannot tell a lie, comprehend love, pity, or forgive", "They cannot lift weights", "They cannot compute numbers", "They cannot run fast"],
          answer: 0,
          explanation: "Machines follow strict physics laws and lack human empathy."
        }
      ],
      "supp-mcq": [
        {
          q: `[${unitName} - ${supp}] In the year 2889, Fritz Napoleon Smith was the director of which publication?`,
          options: ["The Earth Chronicle", "The Times", "The Global Herald", "The Daily Planet"],
          answer: 0,
          explanation: "Jules Verne depicts the managing director of the Earth Chronicle."
        }
      ],
      "prose-short-qa": [
        {
          q: `[${unitName} - 2 Marks] How does assistive technology empower differently-abled students like Alisha?`,
          points: [
            "1. Dragon Dictate software turns speech into written text effortlessly.",
            "2. Eye-gaze technology and communicative devices grant independence in learning."
          ]
        }
      ]
    },

    6: {
      synonyms: [
        {
          q: `[${unitName} - ${prose}] Choose the synonym for "commotion":`,
          options: ["Noisy confusion / Clamour", "Peaceful rest", "Ceremony", "Prayer"],
          answer: 0,
          explanation: "'Commotion' refers to noisy confusion or agitation."
        },
        {
          q: `[${unitName} - ${prose}] What is the synonym of "reproach"?`,
          options: ["Scold / Express blame", "Applaud", "Reward", "Invite"],
          answer: 0,
          explanation: "'Reproach' means to address someone with expression of disapproval."
        }
      ],
      "poem-mcq": [
        {
          q: `[${unitName} - ${poem}] In 'No Men Are Foreign', what breathes beneath all uniforms?`,
          options: ["A single human body", "A different creature", "A mechanical heart", "A ghost"],
          answer: 0,
          explanation: "James Kirkup affirms the essential biological brotherhood of all mankind."
        },
        {
          q: `[${unitName} - ${poem}] Whenever we are told to hate other nations, whom do we harm?`,
          options: ["We betray, dispossess, and condemn ourselves", "Only the enemy", "Nobody", "Just politicians"],
          answer: 0,
          explanation: "Hatred pollutes our common human earth and wounds ourselves."
        }
      ],
      "supp-mcq": [
        {
          q: `[${unitName} - ${supp}] Who was the little hero of Holland who saved his country?`,
          options: ["Peter", "Hans", "Franz", "Lucas"],
          answer: 0,
          explanation: "Young Peter heroically stopped the canal leak in the dike with his finger."
        }
      ],
      "prose-short-qa": [
        {
          q: `[${unitName} - 2 Marks] What shocking announcement did M. Hamel make in the classroom?`,
          points: [
            "1. An order had come from Berlin to teach only German in the schools of Alsace and Lorraine.",
            "2. This was to be their very last French lesson."
          ]
        },
        {
          q: `[${unitName} - 2 Marks] What words did M. Hamel write on the blackboard with all his might?`,
          points: [
            "1. 'Vive La France!' (Long Live France!).",
            "2. He urged that when a people are enslaved, holding fast to their language is like holding the key to their prison."
          ]
        }
      ]
    },

    7: {
      synonyms: [
        {
          q: `[${unitName} - ${prose}] Choose the synonym for "contagious":`,
          options: ["Infectious / Transmissible", "Harmless", "Non-communicable", "Rare"],
          answer: 0,
          explanation: "'Contagious' means easily spread from one person to another."
        },
        {
          q: `[${unitName} - ${prose}] What is the synonym of "delirium"?`,
          options: ["Feverish hallucination / Confusion", "Sound sleep", "Sharp logic", "Coldness"],
          answer: 0,
          explanation: "'Delirium' is an acutely disturbed state of mind due to illness or fever."
        }
      ],
      "poem-mcq": [
        {
          q: `[${unitName} - ${poem}] What makes 'The House on Elm Street' so mysterious?`,
          options: ["Lights flicker without inhabitants and no one ever enters", "It was built upside down", "It is painted golden", "It floats in the air"],
          answer: 0,
          explanation: "Nadia Bush describes an eerie house with flickering lights and mysterious solitude."
        }
      ],
      "supp-mcq": [
        {
          q: `[${unitName} - ${supp}] What life-threatening trap was set inside the iron box left by Uncle Philip?`,
          options: ["A sensitive spring connected to dynamite", "A venomous snake", "Poison gas", "An electric wire"],
          answer: 0,
          explanation: "Opening the iron box carelessly would detonate the dynamite."
        }
      ],
      "prose-short-qa": [
        {
          q: `[${unitName} - 2 Marks] Why did Sherlock Holmes feign mortal illness with Tapanuli fever?`,
          points: [
            "1. To lure Culverton Smith to his bedroom to gloat over Holmes' supposed demise.",
            "2. To extract a full spoken confession that Smith murdered Victor Savage."
          ]
        },
        {
          q: `[${unitName} - 2 Marks] Why did Holmes tell Watson not to touch the ivory box on the mantlepiece?`,
          points: [
            "1. It contained a hidden poisoned spring designed to prick anyone opening it.",
            "2. It was the crucial physical evidence sent by Culverton Smith."
          ]
        }
      ]
    }
  };

  // If unit data exists
  if (UNIT_DATA[unitNum]?.[categoryId]) {
    return UNIT_DATA[unitNum][categoryId];
  }

  // Fallbacks
  if (categoryId === "fill-blanks") {
    return [
      {
        q: `[${unitName}] The young bird stood alone ______ his ledge looking at the sea.`,
        options: ["on", "in", "at", "under"],
        answer: 0,
        explanation: "Preposition 'on' is used for a horizontal surface like a ledge."
      },
      {
        q: `[${unitName}] He waited a moment ______ surprise when his mother stopped nearby.`,
        options: ["in", "at", "for", "with"],
        answer: 0,
        explanation: "'In surprise' is the standard idiomatic prepositional phrase."
      },
      {
        q: `[${unitName}] She flew across to him ______ a piece of fish in her beak.`,
        options: ["with", "for", "by", "from"],
        answer: 0,
        explanation: "'With' indicates accompaniment or possession."
      },
      {
        q: `[${unitName}] He dropped his legs to stand ______ the green sea.`,
        options: ["on", "over", "into", "through"],
        answer: 0,
        explanation: "'Stand on' is appropriate here as he attempted to alight."
      }
    ];
  }

  if (categoryId === "one-words") {
    return [
      {
        q: `[${unitName}] A high steep face of rock on a coastline is called a ______:`,
        options: ["Cliff / Precipice", "Plateau", "Glacier", "Island"],
        answer: 0,
        explanation: "A cliff or precipice is a steep vertical rock edge by the coast."
      },
      {
        q: `[${unitName}] A short, sharp, high-pitched cry made by a bird is a ______:`,
        options: ["Shrill call", "Roar", "Hiss", "Growl"],
        answer: 0,
        explanation: "Birds utter a shrill call or scream when calling mates or warning."
      },
      {
        q: `[${unitName}] The extreme edge or threshold of a steep cliff or drop is the ______:`,
        options: ["Brink", "Basin", "Ridge", "Depth"],
        answer: 0,
        explanation: "'Brink' means the extreme edge of land before a steep slope."
      },
      {
        q: `[${unitName}] Moving lightly and quickly just above a surface (like water):`,
        options: ["Skimming", "Diving", "Drifting", "Submerging"],
        answer: 0,
        explanation: "'Skimming' means gliding smoothly just over water waves."
      }
    ];
  }

  if (categoryId === "grammar-2m") {
    return [
      {
        q: `[${unitName} - 2 Marks] Rewrite into Indirect Speech: Ramu said to Somu, "I am reading my textbook now."`,
        points: [
          "Step 1: Change reporting verb 'said to' into 'told'.",
          "Step 2: Conjunction 'that', change tense to past: Ramu told Somu that he was reading his textbook then."
        ]
      },
      {
        q: `[${unitName} - 2 Marks] Transform into Passive Voice: The mother seagull caught a fresh fish.`,
        points: [
          "Step 1: Object 'A fresh fish' becomes the subject.",
          "Step 2: Passive form: A fresh fish was caught by the mother seagull."
        ]
      }
    ];
  }

  if (categoryId === "10m-essays") {
    return [
      {
        q: `[${unitName} - 10 Marks] Comprehensive Board Exam Essay: Discuss the central moral themes and character growth in ${prose}.`,
        points: [
          "Part A (Introduction - 3 Marks): Background of the author, setting, and introduction of primary characters.",
          "Part B (Core Plot & Conflict - 4 Marks): Step-by-step description of the critical dilemma, family dynamics, and overcoming personal fear.",
          "Part C (Conclusion & Real-Life Relevance - 3 Marks): Universal lesson on determination, self-reliance, and perseverance in the face of adversity."
        ]
      }
    ];
  }

  if (categoryId === "10m-writing") {
    return [
      {
        q: `[${unitName} - 10 Marks] Formal Letter Writing: Write a letter to the Headmaster requesting permission to conduct a special study workshop on ${prose}.`,
        points: [
          "Sender's Address, Date & Receiver's Designation (2 Marks)",
          "Subject Line & Salutation (1 Mark)",
          "Body of the Letter: Purpose, date, venue, guest speaker, and student participation details (5 Marks)",
          "Subscription & Signature (2 Marks)"
        ]
      }
    ];
  }

  return UNIT_DATA[1]?.[categoryId] || UNIT_DATA[unitNum]?.["synonyms"] || [];
};

// =========================================================================
// REAL QUESTIONS FOR SPECIFIC SUB-CATEGORIES
// =========================================================================
export const getCategoryQuestions = (subject = "English", unit = { unit: "Unit 1", title: "His First Flight" }, mark = 1, categoryId = "synonyms") => {
  const norm = (subject || "").toLowerCase();
  const unitName = unit.unit || "Unit 1";
  const unitTitle = unit.title || "Selected Topic";

  // ENGLISH
  if (norm.includes("english")) {
    return getEnglishCategoryQuestions(unit, categoryId, mark);
  }

  // CLASS 10 MATHEMATICS - CHAPTER 1: RELATIONS AND FUNCTIONS
  if (norm.includes("math") && (unit.chapterNum === 1 || (unit.title || "").toLowerCase().includes("relation"))) {
    return getMathClass10Chapter1Questions(categoryId, mark, unit.selectedSection);
  }

  // 2-MARK QUESTIONS (FOR ALL SUBJECTS / MATHS / SCIENCE)
  if (categoryId.startsWith("2m-") || mark === 2) {

    if (norm.includes("math")) {
      return [
        {
          q: `[${unitName} - 2 Marks] Define a Relation and write the condition for a Function.`,
          points: [
            "1. Relation: A relation R from non-empty set A to B is a subset of the Cartesian product A × B (R ⊆ A × B).",
            "2. Function Condition: Every element x ∈ A must be associated with exactly one unique element y ∈ B."
          ]
        },
        {
          q: `[${unitName} - 2 Marks] If A = {1, 2, 3} and B = {x : x is a prime number less than 10}, find A × B.`,
          points: [
            "1. Given A = {1, 2, 3} and primes less than 10: B = {2, 3, 5, 7}.",
            "2. A × B = {(1,2),(1,3),(1,5),(1,7),(2,2),(2,3),(2,5),(2,7),(3,2),(3,3),(3,5),(3,7)}. Number of elements = 3 × 4 = 12."
          ]
        }
      ];
    }

    // Default 2M
    return [
      {
        q: `[${unitName} - 2 Marks] State the fundamental law governing ${unitTitle}.`,
        points: [
          `1. Core Principle: Defines the fundamental direct relationship between parameters in ${unitTitle}.`,
          "2. Standard Equation & SI Units: Verified textbook mathematical formula and unit definition."
        ]
      },
      {
        q: `[${unitName} - 2 Marks] Differentiate the primary concepts in ${unitTitle} with two distinct points.`,
        points: [
          "Point 1: First concept represents fundamental scalar properties.",
          "Point 2: Second concept incorporates directional vector dynamics and external force interaction."
        ]
      }
    ];
  }

  // MATHEMATICS (1 Mark MCQs, Formulas, Fill blanks, One words)
  if (norm.includes("math")) {
    if (categoryId === "formulas") {
      return [
        {
          q: `[${unitName}] What is the formula for the total number of relations from set A with m elements to set B with n elements?`,
          options: ["2^(m × n)", "m × n", "2^(m + n)", "m^n"],
          answer: 0,
          explanation: "Total subsets of Cartesian product A × B is 2^(m × n)."
        },
        {
          q: `[${unitName}] If f: A → B is a bijection, then:`,
          options: ["n(A) = n(B)", "n(A) > n(B)", "n(A) < n(B)", "n(A) + n(B) = 0"],
          answer: 0,
          explanation: "A bijection (one-to-one and onto) between finite sets implies n(A) = n(B)."
        },
        {
          q: `[${unitName}] The composition of functions f ∘ g and g ∘ f:`,
          options: ["Is generally not commutative (f ∘ g ≠ g ∘ f)", "Is always strictly equal", "Is always zero", "Does not exist"],
          answer: 0,
          explanation: "Function composition is associative but generally not commutative."
        }
      ];
    }
    if (categoryId === "fill-blanks") {
      return [
        {
          q: `[${unitName}] The set of all first coordinates of elements in relation R is called the ______:`,
          options: ["Domain of R", "Co-domain of R", "Range of R", "Null set"],
          answer: 0,
          explanation: "Domain = {a ∈ A : (a, b) ∈ R for some b ∈ B}."
        },
        {
          q: `[${unitName}] The set of all second coordinates of elements in relation R is called the ______:`,
          options: ["Range of R", "Domain of R", "Co-domain of R", "Subset"],
          answer: 0,
          explanation: "Range = {b ∈ B : (a, b) ∈ R for some a ∈ A}."
        },
        {
          q: `[${unitName}] An empty relation on a non-empty set A is a subset containing ______ elements:`,
          options: ["Zero elements (∅)", "One element", "All elements", "Infinite elements"],
          answer: 0,
          explanation: "The empty set ∅ ⊆ A × A is called the empty relation."
        }
      ];
    }
    if (categoryId === "one-words") {
      return [
        {
          q: `[${unitName}] What is the range of the constant function f(x) = c?`,
          options: ["Singleton set {c}", "All real numbers", "Empty set", "{0, c}"],
          answer: 0,
          explanation: "Every input maps to the exact single value c."
        },
        {
          q: `[${unitName}] If f(x) = x², what is the value of f(-4)?`,
          options: ["16", "-16", "8", "-8"],
          answer: 0,
          explanation: "(-4)² = 16."
        }
      ];
    }
  }

  // SCIENCE / PHYSICS (1 Mark)
  if (norm.includes("science") || norm.includes("physics")) {
    if (categoryId === "fill-blanks") {
      return [
        {
          q: `[${unitName}] The SI unit of force is ______:`,
          options: ["Newton (N)", "Joule (J)", "Pascal (Pa)", "Watt (W)"],
          answer: 0,
          explanation: "Force is measured in Newtons (1 N = 1 kg·m/s²)."
        },
        {
          q: `[${unitName}] Momentum is the product of mass and ______:`,
          options: ["Velocity", "Acceleration", "Speed", "Time"],
          answer: 0,
          explanation: "p = m × v (Linear Momentum)."
        },
        {
          q: `[${unitName}] To every action there is an equal and opposite ______:`,
          options: ["Reaction", "Velocity", "Friction", "Inertia"],
          answer: 0,
          explanation: "Statement of Newton's Third Law of Motion."
        }
      ];
    }
    if (categoryId === "one-words") {
      return [
        {
          q: `[${unitName}] What is the inherent property of a body to resist changes in its state of motion?`,
          options: ["Inertia", "Gravity", "Weight", "Friction"],
          answer: 0,
          explanation: "Inertia is the resistance of any physical object to change in velocity."
        },
        {
          q: `[${unitName}] What is the product of force and time interval over which it acts?`,
          options: ["Impulse", "Momentum", "Pressure", "Work"],
          answer: 0,
          explanation: "Impulse J = F × Δt = Δp (Change in linear momentum)."
        }
      ];
    }
    if (categoryId === "match") {
      return [
        {
          q: `[${unitName}] Match the correct physical quantity with its SI unit: Force -> ?`,
          options: ["Newton (kg·m/s²)", "Joule (N·m)", "Watt (J/s)", "Pascal (N/m²)"],
          answer: 0,
          explanation: "Force is measured in Newtons."
        },
        {
          q: `[${unitName}] Match: Linear Momentum -> ?`,
          options: ["kg·m/s (or N·s)", "m/s²", "kg·m²", "Newton/meter"],
          answer: 0,
          explanation: "Linear momentum SI unit is kg·m/s."
        }
      ];
    }
  }

  // Fallback to unit questions
  return getUnitQuestions(subject, unit, mark);
};


