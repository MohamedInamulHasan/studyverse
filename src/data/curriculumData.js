// src/data/curriculumData.js

export const CLASSES_DATA = Array.from({ length: 12 }, (_, i) => {
  const classNum = i + 1;
  return {
    id: `class-${classNum}`,
    number: classNum,
    title: `Class ${classNum}`,
    roman: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"][i],
    category: classNum <= 5 ? "Primary" : classNum <= 8 ? "Middle" : classNum <= 10 ? "Secondary" : "Higher Sec",
    gradient: [
      "from-rose-500/20 to-orange-500/20 border-rose-400/30 text-rose-300",
      "from-amber-500/20 to-yellow-500/20 border-amber-400/30 text-amber-300",
      "from-emerald-500/20 to-teal-500/20 border-emerald-400/30 text-emerald-300",
      "from-cyan-500/20 to-blue-500/20 border-cyan-400/30 text-cyan-300",
      "from-blue-500/20 to-indigo-500/20 border-blue-400/30 text-blue-300",
      "from-indigo-500/20 to-purple-500/20 border-indigo-400/30 text-indigo-300",
      "from-purple-500/20 to-pink-500/20 border-purple-400/30 text-purple-300",
      "from-fuchsia-500/20 to-rose-500/20 border-fuchsia-400/30 text-fuchsia-300",
      "from-sky-500/20 to-indigo-500/20 border-sky-400/30 text-sky-300",
      "from-violet-500/20 to-purple-500/20 border-violet-400/30 text-violet-300",
      "from-emerald-500/20 to-cyan-500/20 border-emerald-400/30 text-emerald-300",
      "from-amber-500/20 to-rose-500/20 border-amber-400/30 text-amber-300",
    ][i],
    accentColor: [
      "#f43f5e", "#f59e0b", "#10b981", "#06b6d4", "#3b82f6", "#6366f1",
      "#a855f7", "#d946ef", "#0284c7", "#8b5cf6", "#059669", "#ea580c"
    ][i]
  };
});

export const getTextbooksForClass = (classNum) => {
  const cNum = typeof classNum === 'number' ? classNum : (parseInt(classNum, 10) || 10);

  // Classes 1 to 7: Trimester system with Term 1, Term 2, Term 3 (SPLIT INDIVIDUAL BOOKS)
  if (cNum >= 1 && cNum <= 7) {
    const terms = [
      { term: "Term 1", termNum: 1, termTamil: "பருவம் 1" },
      { term: "Term 2", termNum: 2, termTamil: "பருவம் 2" },
      { term: "Term 3", termNum: 3, termTamil: "பருவம் 3" }
    ];

    const books = [];

    terms.forEach(({ term, termNum, termTamil }) => {
      const romanTerm = termNum === 1 ? "Term I" : termNum === 2 ? "Term II" : "Term III";

      // 1. Tamil
      const tamilCover = cNum === 1 ? `/covers/1st Tamil Book - ${romanTerm}.png` : null;
      const tamilPdf = cNum === 1 ? `/pdfs/Class_1_Tamil_Tamil_Tamil_-_Term_${termNum}_-_${termNum === 1 ? '2025' : '2024'}_Edition-www.tntextbooks.in.pdf` : null;
      books.push({
        id: `tamil-${cNum}-t${termNum}`,
        classNum: cNum,
        term,
        termNum,
        termTamil,
        subject: "Tamil",
        nativeTitle: "தமிழ்",
        medium: "தமிழ்நாடு அரசு பாடநூல்",
        edition: `Class ${cNum} • ${term}`,
        board: "TN State Board • Trimester",
        coverImage: tamilCover,
        pdfUrl: tamilPdf,
        themeColor: "from-[#b45309] via-[#ea580c] to-[#9a3412]",
        cardBg: "bg-gradient-to-br from-amber-600 to-orange-700",
        spineColor: "#78350f",
        accent: "#f97316",
        badge: `${term}`,
        coverPattern: "tamil-pattern",
        coverSubtitle: `${termTamil} • தமிழ்ப் பாடநூல்`,
        iconType: "tamil",
        isCombined: false
      });

      // 2. English
      const englishCover = cNum === 1 ? `/covers/1st English Book - ${romanTerm}.png` : null;
      const englishPdf = cNum === 1 ? `/pdfs/Class_1_English_English_English_-_Term_${termNum}_-_${termNum === 1 ? '2025' : '2024'}_Edition-www.tntextbooks.in.pdf` : null;
      books.push({
        id: `english-${cNum}-t${termNum}`,
        classNum: cNum,
        term,
        termNum,
        termTamil,
        subject: "English",
        nativeTitle: "ஆங்கிலம்",
        medium: "Language & Literature",
        edition: `Class ${cNum} • ${term}`,
        board: "TN State Board • Trimester",
        coverImage: englishCover,
        pdfUrl: englishPdf,
        themeColor: "from-[#6b21a8] via-[#7c3aed] to-[#4338ca]",
        cardBg: "bg-gradient-to-br from-purple-600 to-indigo-700",
        spineColor: "#3b0764",
        accent: "#c084fc",
        badge: `${term}`,
        coverPattern: "english-pattern",
        coverSubtitle: `${termTamil} • English Textbook`,
        iconType: "english",
        isCombined: false
      });

      // 3. Mathematics
      const mathsCover = cNum === 1 ? `/covers/1st Mathematics Book - ${romanTerm}.png` : null;
      const mathsPdf = cNum === 1 ? `/pdfs/Class_1_Mathematics_English_Mathematics_-_Term_${termNum}_-_2024_Edition-www.tntextbooks.in.pdf` : null;
      books.push({
        id: `maths-${cNum}-t${termNum}`,
        classNum: cNum,
        term,
        termNum,
        termTamil,
        subject: "Mathematics",
        nativeTitle: "கணிதம்",
        medium: "Standard Curriculum",
        edition: `Class ${cNum} • ${term}`,
        board: "TN State Board • Trimester",
        coverImage: mathsCover,
        pdfUrl: mathsPdf,
        themeColor: "from-[#1d4ed8] via-[#2563eb] to-[#1e40af]",
        cardBg: "bg-gradient-to-br from-blue-600 to-indigo-700",
        spineColor: "#1e3a8a",
        accent: "#38bdf8",
        badge: `${term}`,
        coverPattern: "math-pattern",
        coverSubtitle: `${termTamil} • கணிதப் பாடநூல்`,
        iconType: "math",
        isCombined: false
      });

      // 4. For Class 1 & 2: EVS & Social Science
      if (cNum <= 2) {
        const evsCover = cNum === 1 ? `/covers/1st EVS Book - ${romanTerm}.png` : null;
        const evsPdf = cNum === 1 ? `/pdfs/Class_1_Environmental_Science_English_Environmental_Science_-_Term_${termNum}_-_2024_Edition-www.tntextbooks.in.pdf` : null;
        books.push({
          id: `evs-${cNum}-t${termNum}`,
          classNum: cNum,
          term,
          termNum,
          termTamil,
          subject: "EVS",
          nativeTitle: "சூழ்நிலையியல்",
          medium: "Environmental Studies",
          edition: `Class ${cNum} • ${term}`,
          board: "TN State Board • Trimester",
          coverImage: evsCover,
          pdfUrl: evsPdf,
          themeColor: "from-[#0284c7] via-[#0d9488] to-[#047857]",
          cardBg: "bg-gradient-to-br from-cyan-600 to-teal-700",
          spineColor: "#0f766e",
          accent: "#14b8a6",
          badge: `${term}`,
          coverPattern: "science-pattern",
          coverSubtitle: `${termTamil} • சூழ்நிலையியல் பாடநூல்`,
          iconType: "stem",
          isCombined: false
        });
      } else {
        // For Classes 3 to 7: Science & Social Science
        books.push({
          id: `science-${cNum}-t${termNum}`,
          classNum: cNum,
          term,
          termNum,
          termTamil,
          subject: "Science",
          nativeTitle: "அறிவியல்",
          medium: "General Science",
          edition: `Class ${cNum} • ${term}`,
          board: "TN State Board • Trimester",
          coverImage: null,
          themeColor: "from-[#047857] via-[#059669] to-[#0f766e]",
          cardBg: "bg-gradient-to-br from-emerald-600 to-green-700",
          spineColor: "#064e3b",
          accent: "#34d399",
          badge: `${term}`,
          coverPattern: "science-pattern",
          coverSubtitle: `${termTamil} • அறிவியல் பாடநூல்`,
          iconType: "science",
          isCombined: false
        });

        books.push({
          id: `social-${cNum}-t${termNum}`,
          classNum: cNum,
          term,
          termNum,
          termTamil,
          subject: "Social Science",
          nativeTitle: "சமூக அறிவியல்",
          medium: "Social Studies",
          edition: `Class ${cNum} • ${term}`,
          board: "TN State Board • Trimester",
          coverImage: null,
          themeColor: "from-[#ea580c] via-[#f97316] to-[#c2410c]",
          cardBg: "bg-gradient-to-br from-orange-600 to-amber-700",
          spineColor: "#9a3412",
          accent: "#fb923c",
          badge: `${term}`,
          coverPattern: "social-pattern",
          coverSubtitle: `${termTamil} • சமூக அறிவியல் பாடநூல்`,
          iconType: "social",
          isCombined: false
        });
      }
    });

    return books;
  }

  const isClass8 = cNum === 8;
  const isClass9 = cNum === 9;
  const isClass10 = cNum === 10;

  return [
    {
      id: `tamil-${classNum}`,
      subject: "Tamil",
      nativeTitle: "தமிழ்",
      medium: "தமிழ்நாடு அரசு பாடநூல்",
      edition: `Class ${classNum}`,
      board: "State Board & Samacheer",
      coverImage: isClass8
        ? "/covers/8th Tamil Book.jpeg"
        : isClass9 
          ? "/covers/9th Tamil Book.jpeg" 
          : isClass10 
            ? "/covers/10th Tamil Book.jpeg" 
            : "/covers/tamil.jpg",
      themeColor: "from-amber-700 via-orange-600 to-amber-900",
      spineColor: "#7c2d12",
      accent: "#f59e0b",
      badge: "முதல் மொழி",
      coverPattern: "tamil-pattern",
      coverSubtitle: isClass9 ? "இயல் 1 - 7 • கவிதை, உரைநடை, இலக்கணம்" : "இயல் 1 - 9 • கவிதை, உரைநடை, இலக்கணம்",
      iconType: "tamil"
    },
    {
      id: `english-${classNum}`,
      subject: "English",
      nativeTitle: "ஆங்கிலம்",
      medium: "Language & Literature",
      edition: `Class ${classNum}`,
      board: "NCERT & State Board",
      coverImage: isClass8
        ? "/covers/8th English Book.jpeg"
        : isClass9 
          ? "/covers/9th English Book.jpeg" 
          : isClass10 
            ? "/covers/10th English Book.jpeg" 
            : "/covers/english.jpg",
      themeColor: "from-purple-800 via-violet-700 to-indigo-950",
      spineColor: "#3b0764",
      accent: "#c084fc",
      badge: "Second Language",
      coverPattern: "english-pattern",
      coverSubtitle: "Prose, Poetry, Supplementary Reader & Grammar",
      iconType: "english"
    },
    {
      id: `maths-${classNum}`,
      subject: "Mathematics",
      nativeTitle: "கணிதம்",
      medium: "Standard Curriculum",
      edition: `Class ${classNum}`,
      board: "NCERT & State Board",
      coverImage: isClass8
        ? "/covers/8th Mathematics Book.jpeg"
        : isClass9 
          ? "/covers/9th Mathematics Book.jpeg" 
          : isClass10 
            ? "/covers/10th Mathematics Book.jpeg" 
            : "/covers/maths.jpg",
      themeColor: "from-blue-700 via-indigo-700 to-sky-900",
      spineColor: "#1e1b4b",
      accent: "#38bdf8",
      badge: "Core STEM",
      coverPattern: "math-pattern",
      coverSubtitle: "Algebra, Geometry, Trigonometry & Calculus",
      iconType: "math"
    },
    {
      id: `science-${classNum}`,
      subject: classNum >= 11 ? "Physics & Chemistry" : "Science",
      nativeTitle: classNum >= 11 ? "இயற்பியல் & வேதியியல்" : "அறிவியல்",
      medium: "General Science",
      edition: `Class ${classNum}`,
      board: "NCERT & State Board",
      coverImage: isClass8
        ? "/covers/8th Science Book.jpeg"
        : isClass9 
          ? "/covers/9th Science Book.jpeg" 
          : isClass10 
            ? "/covers/10th Science Book.jpeg" 
            : "/covers/science.jpg",
      themeColor: "from-emerald-700 via-teal-700 to-green-900",
      spineColor: "#064e3b",
      accent: "#34d399",
      badge: "Discovery",
      coverPattern: "science-pattern",
      coverSubtitle: isClass9 
        ? "Units 1 - 25 • Measurement, Matter, Living World & Environment"
        : classNum >= 11 ? "Theory & Lab Manual Practical" : "Units 1 - 23 • Physics, Chemistry & Biology Life Systems",
      iconType: "science"
    },
    {
      id: `social-${classNum}`,
      subject: classNum >= 11 ? "Biology / CS" : "Social Science",
      nativeTitle: classNum >= 11 ? "உயிரியல் / கணினி" : "சமூக அறிவியல்",
      medium: "Integrated Social Studies",
      edition: `Class ${classNum}`,
      board: "State Board & NCERT",
      coverImage: isClass8
        ? "/covers/8th Social Science Book.jpeg"
        : isClass9 
          ? "/covers/9th Social Science Book.png" 
          : isClass10 
            ? "/covers/10th Social Science Book.jpeg" 
            : "/covers/social.jpg",
      themeColor: "from-rose-800 via-pink-700 to-red-950",
      spineColor: "#4c0519",
      accent: "#fb7185",
      badge: classNum >= 11 ? "Elective Track" : "Heritage & Civics",
      coverPattern: "social-pattern",
      coverSubtitle: classNum >= 11 ? "Botany, Zoology & Python Coding" : "History, Geography, Civics & Economics",
      iconType: "social"
    }
  ];
};
