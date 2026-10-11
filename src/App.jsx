// src/App.jsx
import React, { useState, useRef, useEffect } from 'react';
import { supabase } from './lib/supabase';
import { getTextbooksForClass } from './data/curriculumData';
import { getBookChapters, getBookStudyOptions, getUnitQuestions, getUnitSubCategories, getCategoryQuestions } from './data/bookStudyData';
import { getEnglishExercises } from './data/englishExerciseData';
import { getMathChapterPills, getMathChapterSums } from './data/mathClass10AllChaptersData';
import { getScienceTopics, getScienceTopicContent } from './data/scienceClass10Data';
import { getSocialTopics, getSocialTopicContent } from './data/socialClass10Data';
import { getTamilLessons, getTamilLessonContent } from './data/tamilClass10Data';
import { getClass1TamilTopics, getClass1TamilTopicContent } from './data/tamilClass1Data';
import { MathText } from './components/MathText';
import { MathQuizGame } from './components/MathQuizGame';
import { MathProblemCard } from './components/MathProblemCard';
import { TextbookCover, AddBookCover } from './components/TextbookCover';
import { BookPdfViewer } from './components/BookPdfViewer';
import { MatchGame } from './components/MatchGame';
import { LineTracingGame } from './components/LineTracingGame';
import { DrawMissingPartsGame } from './components/DrawMissingPartsGame';
import { ColorMatchingLetterGame } from './components/ColorMatchingLetterGame';
import { ConnectLetterToPictureGame } from './components/ConnectLetterToPictureGame';
import { FillInBlanksLetterGame } from './components/FillInBlanksLetterGame';
import { ConnectAndWriteLetterGame } from './components/ConnectAndWriteLetterGame';
import { LearnLettersGame } from './components/LearnLettersGame';
import { TraceLettersGame } from './components/TraceLettersGame';
import { 
  Menu, 
  ArrowLeft, 
  Search, 
  Home, 
  Download, 
  X, 
  CheckCircle2,
  Sparkles,
  Eye,
  BookOpen,
  Check,
  Bell,
  Zap,
  Crown,
  HelpCircle,
  FileText,
  ChevronRight,
  ChevronDown,
  RotateCcw,
  Volume2,
  VolumeX,
  Edit3,
  Plus,
  GripVertical,
  Pencil,
  Trash2,
  Maximize2,
  Minimize2,
  Save,
  Upload
} from 'lucide-react';
import { VideoPlayer } from './components/VideoPlayer';
import { Topic1VideoPlayer, Topic2VideoPlayer } from './components/Topic1VideoPlayer';

function openPdfDb() {
  return new Promise((resolve) => {
    try {
      const request = indexedDB.open('StudyVersePdfDB', 1);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('uploaded_pdfs')) {
          db.createObjectStore('uploaded_pdfs');
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

async function savePdfToIndexedDb(bookId, buffer) {
  try {
    const db = await openPdfDb();
    if (!db) return false;
    return new Promise((resolve) => {
      const tx = db.transaction('uploaded_pdfs', 'readwrite');
      tx.objectStore('uploaded_pdfs').put(buffer, bookId);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    });
  } catch {
    return false;
  }
}

async function getPdfFromIndexedDb(bookId) {
  try {
    const db = await openPdfDb();
    if (!db) return null;
    return new Promise((resolve) => {
      const tx = db.transaction('uploaded_pdfs', 'readonly');
      const req = tx.objectStore('uploaded_pdfs').get(bookId);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export default function App() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedExerciseOption, setSelectedExerciseOption] = useState(null);
  const [activeMarkTab, setActiveMarkTab] = useState(1);
  const [mathTab, setMathTab] = useState('examples');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTerm, setSelectedTerm] = useState('Term I');
  const [language, setLanguage] = useState('eng'); // 'eng' | 'tam'
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [customBooksOverrides, setCustomBooksOverrides] = useState({});
  const [customChaptersOverrides, setCustomChaptersOverrides] = useState(() => {
    try {
      const saved = localStorage.getItem('custom_chapters_overrides');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [customExerciseOverrides, setCustomExerciseOverrides] = useState(() => {
    try {
      const saved = localStorage.getItem('custom_exercise_overrides');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [topicsModal, setTopicsModal] = useState(null); // { unitKey, indexType: 'alphabets' | 'numbers' | 'roman', topics: [{ letter, title, paletteId }], activeTopicIndex }
  const [saveToastMessage, setSaveToastMessage] = useState('');

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('custom_chapters_overrides', JSON.stringify(customChaptersOverrides));
    } catch (e) {
      console.error(e);
    }
  }, [customChaptersOverrides]);

  useEffect(() => {
    try {
      localStorage.setItem('custom_exercise_overrides', JSON.stringify(customExerciseOverrides));
    } catch (e) {
      console.error(e);
    }
  }, [customExerciseOverrides]);

  // Sync from Supabase Cloud on mount
  useEffect(() => {
    const fetchCloudData = async () => {
      try {
        const { data: chapRows, error: chapErr } = await supabase.from('custom_chapters').select('*');
        if (!chapErr && chapRows && chapRows.length > 0) {
          const cloudChaps = {};
          chapRows.forEach(r => {
            if (r.book_id && r.chapters) cloudChaps[r.book_id] = r.chapters;
          });
          setCustomChaptersOverrides(prev => ({ ...prev, ...cloudChaps }));
        }

        const { data: topRows, error: topErr } = await supabase.from('custom_topics').select('*');
        if (!topErr && topRows && topRows.length > 0) {
          const cloudTopics = {};
          topRows.forEach(r => {
            if (r.unit_key && r.topics) cloudTopics[r.unit_key] = r.topics;
          });
          setCustomExerciseOverrides(prev => ({ ...prev, ...cloudTopics }));
        }
      } catch (err) {
        console.warn('Supabase cloud fetch info:', err);
      }
    };

    fetchCloudData();
  }, []);
  const [bookModal, setBookModal] = useState(null); // { mode: 'edit' | 'add', id, subject, term, medium, coverImage, pdfName, pdfUrl }
  const [cardModal, setCardModal] = useState(null); // { mode: 'add' | 'edit', format: 'units' | 'tamil' | 'english' | 'maths' | 'science' | 'social', ... }
  const [activeColorField, setActiveColorField] = useState('titlePaletteId');
  const fileInputRef = useRef(null);
  const pdfFileInputRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePracticeOption, setActivePracticeOption] = useState(null);
  const [isViewingBook, setIsViewingBook] = useState(false);
  const [selectedMcqAnswers, setSelectedMcqAnswers] = useState({});
  // Exercise C Drag and Drop Game State
  const [gamePlacedWords, setGamePlacedWords] = useState({});
  const [activeSelectedWord, setActiveSelectedWord] = useState(null);
  const [selectedSentenceGameAnswers, setSelectedSentenceGameAnswers] = useState({});
  const [typedSentences, setTypedSentences] = useState({});
  const [showSampleAnswers, setShowSampleAnswers] = useState({});
  // Exercise F & Sectioned Exercises State
  const [travelogueAudioPlaying, setTravelogueAudioPlaying] = useState(false);
  const [showTravelogueText, setShowTravelogueText] = useState(false);
  const [blankAnswers, setBlankAnswers] = useState({});
  const [tfAnswers, setTfAnswers] = useState({});
  const [showSectionSuggest, setShowSectionSuggest] = useState({});
  // Exercise G Dialogue State
  const [dialogueTypedAnswers, setDialogueTypedAnswers] = useState({});
  const [showDialogueSuggest, setShowDialogueSuggest] = useState({});
  const [dialogueRevealedPhases, setDialogueRevealedPhases] = useState({}); // { [blankIndex]: revealedLength }
  const [activeBottomNav, setActiveBottomNav] = useState('home');
  const [expandedMathChapters, setExpandedMathChapters] = useState({});

  // Track and restore scroll position on chapters list when navigating back
  const chaptersListRef = useRef(null);
  const savedChaptersScrollPosRef = useRef(0);

  useEffect(() => {
    if (!selectedUnit && selectedBook && chaptersListRef.current) {
      if (savedChaptersScrollPosRef.current > 0) {
        requestAnimationFrame(() => {
          if (chaptersListRef.current) {
            chaptersListRef.current.scrollTop = savedChaptersScrollPosRef.current;
          }
        });
      }
    }
  }, [selectedUnit, selectedBook]);

  // Vibrant solid color palette for Units (Home page UI/UX card style)
  const UNIT_COLORS = [
    'bg-[#FF4545]', // Red
    'bg-[#1E74EA]', // Blue
    'bg-[#00C988]', // Green
    'bg-[#A855F7]', // Purple
    'bg-[#F59E0B]', // Amber
    'bg-[#EC4899]', // Pink
    'bg-[#06B6D4]', // Cyan
    'bg-[#6366F1]', // Indigo
  ];

  // 24 Variety of Color Palettes for Cards (with matching 3D bottom border, dark badges, and text accents)
  const CARD_COLOR_PALETTES = [
    // Row 1 (8 Colors)
    {
      id: 'solid-black',
      name: 'Charcoal Black',
      accent: '#0f172a',
      cardBg: 'bg-white',
      cardBorder: 'border-slate-300 border-b-[4px] border-b-slate-400',
      hoverBorder: 'hover:border-slate-400 hover:border-b-slate-500',
      titleColor: 'text-slate-900',
      badgeBg: 'bg-black',
      badgeText: 'text-white',
      hexBg: '#ffffff',
      hexPrimary: '#0f172a'
    },
    {
      id: 'coral-red',
      name: 'Coral Red',
      accent: '#EF4444',
      cardBg: 'bg-[#FEF2F2]',
      cardBorder: 'border-[#FCA5A5] border-b-[4px] border-b-[#FCA5A5]',
      hoverBorder: 'hover:border-[#F87171] hover:border-b-[#F87171]',
      titleColor: 'text-[#991B1B]',
      badgeBg: 'bg-[#EF4444]',
      badgeText: 'text-white',
      hexBg: '#FEF2F2',
      hexPrimary: '#EF4444'
    },
    {
      id: 'crimson-rose',
      name: 'Crimson Rose',
      accent: '#E11D48',
      cardBg: 'bg-[#FFF1F2]',
      cardBorder: 'border-[#FDA4AF] border-b-[4px] border-b-[#FDA4AF]',
      hoverBorder: 'hover:border-[#FB7185] hover:border-b-[#FB7185]',
      titleColor: 'text-[#881337]',
      badgeBg: 'bg-[#E11D48]',
      badgeText: 'text-white',
      hexBg: '#FFF1F2',
      hexPrimary: '#E11D48'
    },
    {
      id: 'vivid-orange',
      name: 'Vivid Orange',
      accent: '#F97316',
      cardBg: 'bg-[#FEEDDE]',
      cardBorder: 'border-[#FDBA74] border-b-[4px] border-b-[#FDBA74]',
      hoverBorder: 'hover:border-[#FB923C] hover:border-b-[#FB923C]',
      titleColor: 'text-[#9A3412]',
      badgeBg: 'bg-[#EA580C]',
      badgeText: 'text-white',
      hexBg: '#FEEDDE',
      hexPrimary: '#F97316'
    },
    {
      id: 'bright-amber',
      name: 'Bright Amber',
      accent: '#F59E0B',
      cardBg: 'bg-[#FFFBEB]',
      cardBorder: 'border-[#FCD34D] border-b-[4px] border-b-[#FCD34D]',
      hoverBorder: 'hover:border-[#FBBF24] hover:border-b-[#FBBF24]',
      titleColor: 'text-[#92400E]',
      badgeBg: 'bg-[#D97706]',
      badgeText: 'text-white',
      hexBg: '#FFFBEB',
      hexPrimary: '#F59E0B'
    },
    {
      id: 'golden-yellow',
      name: 'Golden Yellow',
      accent: '#EAB308',
      cardBg: 'bg-[#FEFCE8]',
      cardBorder: 'border-[#FDE047] border-b-[4px] border-b-[#FDE047]',
      hoverBorder: 'hover:border-[#FACC15] hover:border-b-[#FACC15]',
      titleColor: 'text-[#854D0E]',
      badgeBg: 'bg-[#CA8A04]',
      badgeText: 'text-white',
      hexBg: '#FEFCE8',
      hexPrimary: '#EAB308'
    },
    {
      id: 'lime-green',
      name: 'Lime Green',
      accent: '#84CC16',
      cardBg: 'bg-[#F7FEE7]',
      cardBorder: 'border-[#BEF264] border-b-[4px] border-b-[#BEF264]',
      hoverBorder: 'hover:border-[#A3E635] hover:border-b-[#A3E635]',
      titleColor: 'text-[#3F6212]',
      badgeBg: 'bg-[#65A30D]',
      badgeText: 'text-white',
      hexBg: '#F7FEE7',
      hexPrimary: '#84CC16'
    },
    {
      id: 'vibrant-emerald',
      name: 'Emerald Green',
      accent: '#10B981',
      cardBg: 'bg-[#E7F5EB]',
      cardBorder: 'border-[#86EFAC] border-b-[4px] border-b-[#86EFAC]',
      hoverBorder: 'hover:border-[#4ADE80] hover:border-b-[#4ADE80]',
      titleColor: 'text-[#065F46]',
      badgeBg: 'bg-[#059669]',
      badgeText: 'text-white',
      hexBg: '#E7F5EB',
      hexPrimary: '#10B981'
    },

    // Row 2 (8 Colors)
    {
      id: 'teal-mint',
      name: 'Teal Mint',
      accent: '#14B8A6',
      cardBg: 'bg-[#F0FDFA]',
      cardBorder: 'border-[#5EEAD4] border-b-[4px] border-b-[#5EEAD4]',
      hoverBorder: 'hover:border-[#2DD4BF] hover:border-b-[#2DD4BF]',
      titleColor: 'text-[#115E59]',
      badgeBg: 'bg-[#0D9488]',
      badgeText: 'text-white',
      hexBg: '#F0FDFA',
      hexPrimary: '#14B8A6'
    },
    {
      id: 'ocean-cyan',
      name: 'Ocean Cyan',
      accent: '#06B6D4',
      cardBg: 'bg-[#ECFEFF]',
      cardBorder: 'border-[#67E8F9] border-b-[4px] border-b-[#67E8F9]',
      hoverBorder: 'hover:border-[#22D3EE] hover:border-b-[#22D3EE]',
      titleColor: 'text-[#155E75]',
      badgeBg: 'bg-[#0891B2]',
      badgeText: 'text-white',
      hexBg: '#ECFEFF',
      hexPrimary: '#06B6D4'
    },
    {
      id: 'sky-blue',
      name: 'Sky Blue',
      accent: '#0284C7',
      cardBg: 'bg-[#F0F9FF]',
      cardBorder: 'border-[#7DD3FC] border-b-[4px] border-b-[#7DD3FC]',
      hoverBorder: 'hover:border-[#38BDF8] hover:border-b-[#38BDF8]',
      titleColor: 'text-[#0369A1]',
      badgeBg: 'bg-[#0369A1]',
      badgeText: 'text-white',
      hexBg: '#F0F9FF',
      hexPrimary: '#0284C7'
    },
    {
      id: 'royal-blue',
      name: 'Royal Blue',
      accent: '#2563EB',
      cardBg: 'bg-[#EFF6FF]',
      cardBorder: 'border-[#93C5FD] border-b-[4px] border-b-[#93C5FD]',
      hoverBorder: 'hover:border-[#60A5FA] hover:border-b-[#60A5FA]',
      titleColor: 'text-[#1E40AF]',
      badgeBg: 'bg-[#1D4ED8]',
      badgeText: 'text-white',
      hexBg: '#EFF6FF',
      hexPrimary: '#2563EB'
    },
    {
      id: 'indigo-iris',
      name: 'Indigo Iris',
      accent: '#6366F1',
      cardBg: 'bg-[#EEF2FF]',
      cardBorder: 'border-[#A5B4FC] border-b-[4px] border-b-[#A5B4FC]',
      hoverBorder: 'hover:border-[#818CF8] hover:border-b-[#818CF8]',
      titleColor: 'text-[#3730A3]',
      badgeBg: 'bg-[#4F46E5]',
      badgeText: 'text-white',
      hexBg: '#EEF2FF',
      hexPrimary: '#6366F1'
    },
    {
      id: 'vibrant-purple',
      name: 'Vibrant Purple',
      accent: '#A855F7',
      cardBg: 'bg-[#ECE7F4]',
      cardBorder: 'border-[#C4B5FD] border-b-[4px] border-b-[#C4B5FD]',
      hoverBorder: 'hover:border-[#A78BFA] hover:border-b-[#A78BFA]',
      titleColor: 'text-[#5B4296]',
      badgeBg: 'bg-[#9333EA]',
      badgeText: 'text-white',
      hexBg: '#ECE7F4',
      hexPrimary: '#A855F7'
    },
    {
      id: 'hot-pink',
      name: 'Hot Pink',
      accent: '#EC4899',
      cardBg: 'bg-[#FDF2F8]',
      cardBorder: 'border-[#F9A8D4] border-b-[4px] border-b-[#F9A8D4]',
      hoverBorder: 'hover:border-[#F472B6] hover:border-b-[#F472B6]',
      titleColor: 'text-[#9D174D]',
      badgeBg: 'bg-[#DB2777]',
      badgeText: 'text-white',
      hexBg: '#FDF2F8',
      hexPrimary: '#EC4899'
    },
    {
      id: 'rich-brown',
      name: 'Rich Brown',
      accent: '#854D0E',
      cardBg: 'bg-[#FDF3E3]',
      cardBorder: 'border-[#E0A96D] border-b-[4px] border-b-[#E0A96D]',
      hoverBorder: 'hover:border-[#C5894B] hover:border-b-[#C5894B]',
      titleColor: 'text-[#422206]',
      badgeBg: 'bg-[#78350F]',
      badgeText: 'text-white',
      hexBg: '#FDF3E3',
      hexPrimary: '#854D0E'
    },

    // Row 3 (8 Colors - Completing the 24 palettes with rich pastel and grey shades)
    {
      id: 'modern-slate',
      name: 'Modern Slate',
      accent: '#334155',
      cardBg: 'bg-[#F8FAFC]',
      cardBorder: 'border-[#94A3B8] border-b-[4px] border-b-[#94A3B8]',
      hoverBorder: 'hover:border-[#64748B] hover:border-b-[#64748B]',
      titleColor: 'text-[#0F172A]',
      badgeBg: 'bg-[#1E293B]',
      badgeText: 'text-white',
      hexBg: '#F8FAFC',
      hexPrimary: '#334155'
    },
    {
      id: 'deep-fuchsia',
      name: 'Deep Fuchsia',
      accent: '#D946EF',
      cardBg: 'bg-[#FDF4FF]',
      cardBorder: 'border-[#F0ABFC] border-b-[4px] border-b-[#F0ABFC]',
      hoverBorder: 'hover:border-[#E879F9] hover:border-b-[#E879F9]',
      titleColor: 'text-[#86198F]',
      badgeBg: 'bg-[#C026D3]',
      badgeText: 'text-white',
      hexBg: '#FDF4FF',
      hexPrimary: '#D946EF'
    },
    {
      id: 'warm-peach',
      name: 'Warm Peach',
      accent: '#FB923C',
      cardBg: 'bg-[#FFF7ED]',
      cardBorder: 'border-[#FDBA74] border-b-[4px] border-b-[#FDBA74]',
      hoverBorder: 'hover:border-[#FB923C] hover:border-b-[#FB923C]',
      titleColor: 'text-[#C2410C]',
      badgeBg: 'bg-[#EA580C]',
      badgeText: 'text-white',
      hexBg: '#FFF7ED',
      hexPrimary: '#FB923C'
    },
    {
      id: 'forest-green',
      name: 'Forest Green',
      accent: '#15803D',
      cardBg: 'bg-[#F0FDF4]',
      cardBorder: 'border-[#86EFAC] border-b-[4px] border-b-[#86EFAC]',
      hoverBorder: 'hover:border-[#4ADE80] hover:border-b-[#4ADE80]',
      titleColor: 'text-[#14532D]',
      badgeBg: 'bg-[#166534]',
      badgeText: 'text-white',
      hexBg: '#F0FDF4',
      hexPrimary: '#15803D'
    },
    {
      id: 'cobalt-blue',
      name: 'Cobalt Blue',
      accent: '#1D4ED8',
      cardBg: 'bg-[#EFF6FF]',
      cardBorder: 'border-[#93C5FD] border-b-[4px] border-b-[#93C5FD]',
      hoverBorder: 'hover:border-[#60A5FA] hover:border-b-[#60A5FA]',
      titleColor: 'text-[#172554]',
      badgeBg: 'bg-[#1E40AF]',
      badgeText: 'text-white',
      hexBg: '#EFF6FF',
      hexPrimary: '#1D4ED8'
    },
    {
      id: 'deep-violet',
      name: 'Deep Violet',
      accent: '#7C3AED',
      cardBg: 'bg-[#F5F3FF]',
      cardBorder: 'border-[#C4B5FD] border-b-[4px] border-b-[#C4B5FD]',
      hoverBorder: 'hover:border-[#A78BFA] hover:border-b-[#A78BFA]',
      titleColor: 'text-[#4C1D95]',
      badgeBg: 'bg-[#6D28D9]',
      badgeText: 'text-white',
      hexBg: '#F5F3FF',
      hexPrimary: '#7C3AED'
    },
    {
      id: 'terracotta-red',
      name: 'Terracotta Red',
      accent: '#BE123C',
      cardBg: 'bg-[#FFF1F2]',
      cardBorder: 'border-[#FDA4AF] border-b-[4px] border-b-[#FDA4AF]',
      hoverBorder: 'hover:border-[#FB7185] hover:border-b-[#FB7185]',
      titleColor: 'text-[#881337]',
      badgeBg: 'bg-[#9F1239]',
      badgeText: 'text-white',
      hexBg: '#FFF1F2',
      hexPrimary: '#BE123C'
    },
    {
      id: 'slate-grey',
      name: 'Slate Grey',
      accent: '#64748B',
      cardBg: 'bg-[#F1F5F9]',
      cardBorder: 'border-slate-300 border-b-[4px] border-b-slate-300',
      hoverBorder: 'hover:border-slate-400 hover:border-b-slate-400',
      titleColor: 'text-slate-900',
      badgeBg: 'bg-slate-600',
      badgeText: 'text-white',
      hexBg: '#F1F5F9',
      hexPrimary: '#64748B'
    }
  ];

    // STRICTLY CLASS 1 TO CLASS 12 ONLY
  // Flawless 3D Pop-Out Card:
  // 1. Zero bottom gap: Character sits right at bottom-0
  // 2. Zero bottom overflow: Bottom clipped cleanly to rounded-b-[24px]
  // 3. True 3D head-out effect: Head pops 32px out above the top border
  // 4. Zero cutting lines across the face: 100% single intact image
  const CLASSES_LIST = [
    {
      id: "class-12",
      classNum: 12,
      badge: "12th",
      title: "Class 12",
      subtitle: "Standard",
      stage: "Higher Secondary",
      color: "bg-[#2EA5FF]",
      shadow: "shadow-[0_12px_24px_rgba(46,165,255,0.4)]",
      avatarImg: "/avatars/student_12.png"
    },
    {
      id: "class-11",
      classNum: 11,
      badge: "11th",
      title: "Class 11",
      subtitle: "Standard",
      stage: "Higher Secondary",
      color: "bg-[#1E74EA]",
      shadow: "shadow-[0_12px_24px_rgba(30,116,234,0.4)]",
      avatarImg: "/avatars/student_11.png"
    },
    {
      id: "class-10",
      classNum: 10,
      badge: "10th",
      title: "Class 10",
      subtitle: "Standard",
      stage: "Secondary School (SSLC)",
      color: "bg-[#A855F7]",
      shadow: "shadow-[0_12px_24px_rgba(168,85,247,0.4)]",
      avatarImg: "/avatars/student_10.png"
    },
    {
      id: "class-9",
      classNum: 9,
      badge: "9th",
      title: "Class 9",
      subtitle: "Standard",
      stage: "Secondary School",
      color: "bg-[#F43F8E]",
      shadow: "shadow-[0_12px_24px_rgba(244,63,142,0.4)]",
      avatarImg: "/avatars/student_9.png"
    },
    {
      id: "class-8",
      classNum: 8,
      badge: "8th",
      title: "Class 8",
      subtitle: "Standard",
      stage: "Middle School",
      color: "bg-[#FBBF24]",
      shadow: "shadow-[0_12px_24px_rgba(251,191,36,0.4)]",
      avatarImg: "/avatars/student_8.png"
    },
    {
      id: "class-7",
      classNum: 7,
      badge: "7th",
      title: "Class 7",
      subtitle: "Standard",
      stage: "Middle School",
      color: "bg-[#F97316]",
      shadow: "shadow-[0_12px_24px_rgba(249,115,22,0.4)]",
      avatarImg: "/avatars/student_7.png"
    },
    {
      id: "class-6",
      classNum: 6,
      badge: "6th",
      title: "Class 6",
      subtitle: "Standard",
      stage: "Middle School",
      color: "bg-[#00C988]",
      shadow: "shadow-[0_12px_24px_rgba(0,201,136,0.4)]",
      avatarImg: "/avatars/student_6.png"
    },
    {
      id: "class-5",
      classNum: 5,
      badge: "5th",
      title: "Class 5",
      subtitle: "Standard",
      stage: "Primary School",
      color: "bg-[#06D3D7]",
      shadow: "shadow-[0_12px_24px_rgba(6,211,215,0.4)]",
      avatarImg: "/avatars/student_5.png"
    },
    {
      id: "class-4",
      classNum: 4,
      badge: "4th",
      title: "Class 4",
      subtitle: "Standard",
      stage: "Primary School",
      color: "bg-[#0D9488]",
      shadow: "shadow-[0_12px_24px_rgba(13,148,136,0.4)]",
      avatarImg: "/avatars/student_4.png"
    },
    {
      id: "class-3",
      classNum: 3,
      badge: "3rd",
      title: "Class 3",
      subtitle: "Standard",
      stage: "Primary School",
      color: "bg-[#6366F1]",
      shadow: "shadow-[0_12px_24px_rgba(99,102,241,0.4)]",
      avatarImg: "/avatars/student_3.png"
    },
    {
      id: "class-2",
      classNum: 2,
      badge: "2nd",
      title: "Class 2",
      subtitle: "Standard",
      stage: "Primary School",
      color: "bg-[#F59E0B]",
      shadow: "shadow-[0_12px_24px_rgba(245,158,11,0.4)]",
      avatarImg: "/avatars/student_2.png"
    },
    {
      id: "class-1",
      classNum: 1,
      badge: "1st",
      title: "Class 1",
      subtitle: "Standard",
      stage: "Primary School",
      color: "bg-[#EC4899]",
      shadow: "shadow-[0_12px_24px_rgba(236,72,153,0.4)]",
      avatarImg: "/avatars/student_1.png"
    }
  ];

  const renderTextWithAsterisk = (text) => {
    if (!text) return null;
    const str = String(text);
    if (!str.includes('*')) return str;
    const parts = str.split('*');
    return parts.map((part, pIdx) => (
      <React.Fragment key={pIdx}>
        {part}
        {pIdx < parts.length - 1 && (
          <span className="text-red-500 font-black ml-0.5 select-none text-[1.15em] leading-none inline-block">*</span>
        )}
      </React.Fragment>
    ));
  };

  const currentClassNum = selectedClass?.classNum || selectedClass?.number || (selectedClass?.title ? parseInt(selectedClass.title.replace(/\D+/g, ''), 10) : 10) || 10;
  const isTrimester = currentClassNum >= 1 && currentClassNum <= 7;
  const defaultTextbooks = getTextbooksForClass(currentClassNum);
  const textbooks = customBooksOverrides[currentClassNum] || defaultTextbooks;

  const handleEditBook = (book) => {
    const romanTerm = book.termNum === 1 ? 'Term I' : book.termNum === 2 ? 'Term II' : book.termNum === 3 ? 'Term III' : (book.term || 'Term I');
    setBookModal({
      mode: 'edit',
      id: book.id,
      subject: book.subject || '',
      term: romanTerm,
      medium: book.medium || 'Tamil Medium',
      coverImage: book.coverImage || '',
      pdfUrl: book.pdfUrl || '',
      pdfName: book.pdfName || (book.pdfUrl ? 'Uploaded PDF' : '')
    });
  };

  const handleAddBook = () => {
    setBookModal({
      mode: 'add',
      id: `custom-book-${Date.now()}`,
      subject: '',
      term: (selectedTerm !== 'All' ? selectedTerm : 'Term I'),
      medium: 'Tamil Medium',
      coverImage: '',
      pdfUrl: '',
      pdfName: ''
    });
  };

  const handleSaveModalBook = (e) => {
    e.preventDefault();
    if (!bookModal || !bookModal.subject.trim()) {
      alert('Please enter a book name');
      return;
    }
    const termNum = bookModal.term === 'Term I' ? 1 : bookModal.term === 'Term II' ? 2 : bookModal.term === 'Term III' ? 3 : null;
    const termTamil = bookModal.term === 'Term I' ? 'பருவம் 1' : bookModal.term === 'Term II' ? 'பருவம் 2' : bookModal.term === 'Term III' ? 'பருவம் 3' : '';

    const list = [...(customBooksOverrides[currentClassNum] || defaultTextbooks)];
    const targetBookId = bookModal.id || `custom-book-${Date.now()}`;

    if (bookModal.pdfBuffer) {
      savePdfToIndexedDb(targetBookId, bookModal.pdfBuffer);
    }

    if (bookModal.mode === 'edit') {
      const idx = list.findIndex(b => b.id === bookModal.id);
      if (idx !== -1) {
        list[idx] = {
          ...list[idx],
          subject: bookModal.subject.trim(),
          nativeTitle: bookModal.subject.trim(),
          term: bookModal.term,
          termNum: termNum,
          termTamil: termTamil,
          medium: bookModal.medium,
          coverImage: bookModal.coverImage,
          pdfUrl: bookModal.pdfUrl || list[idx].pdfUrl,
          pdfName: bookModal.pdfName || list[idx].pdfName
        };
      }
      setSaveToastMessage(`Updated "${bookModal.subject.trim()}"`);
    } else {
      const newBook = {
        id: targetBookId,
        subject: bookModal.subject.trim(),
        nativeTitle: bookModal.subject.trim(),
        classNum: currentClassNum,
        termNum: termNum,
        term: bookModal.term,
        termTamil: termTamil,
        medium: bookModal.medium,
        coverImage: bookModal.coverImage,
        pdfUrl: bookModal.pdfUrl,
        pdfName: bookModal.pdfName,
        edition: bookModal.term ? `${bookModal.subject.trim()} • ${bookModal.term}` : bookModal.subject.trim(),
        themeColor: 'from-slate-800 to-black'
      };
      list.push(newBook);
      setSaveToastMessage(`Added "${bookModal.subject.trim()}"`);
    }

    setCustomBooksOverrides(prev => ({ ...prev, [currentClassNum]: list }));
    setBookModal(null);
    setTimeout(() => setSaveToastMessage(''), 2500);
  };

  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);

  const handleDownloadBookPdf = async (bookToDownload) => {
    const targetBook = bookToDownload || selectedBook;
    if (!targetBook) return;

    const bId = targetBook.id || 'book';
    const subj = targetBook.subject || 'Book';
    const cNum = currentClassNum || 10;
    const downloadFileName = `${subj}_Class_${cNum}${targetBook.term ? `_${targetBook.term}` : ''}.pdf`.replace(/\s+/g, '_');

    setIsDownloadingPdf(true);

    try {
      // 1. Check IndexedDB first
      const storedBuffer = await getPdfFromIndexedDb(bId);
      if (storedBuffer) {
        const blob = new Blob([storedBuffer], { type: 'application/pdf' });
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = downloadFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
        setSaveToastMessage(`Downloaded ${downloadFileName}`);
        setTimeout(() => setSaveToastMessage(''), 2500);
        setIsDownloadingPdf(false);
        return;
      }

      // 2. Candidate paths
      const exactUploadedFiles = {
        'tamil-10': '/pdfs/Class_10_Tamil_2025_Edition-www.tntextbooks.in.pdf',
        'english-10': '/pdfs/10th-English - www.tntextbooks.in.pdf',
        'maths-10': '/pdfs/Class_10_Mathematics_English_2025_Edition-www.tntextbooks.in.pdf',
        'science-10': '/pdfs/Class_10_Science_English_2024_Edition-www.tntextbooks.in.pdf',
        'social-10': '/pdfs/Class_10_Social_Science_English_2025_Edition-www.tntextbooks.in.pdf'
      };

      const candidatePaths = [
        targetBook.pdfUrl,
        exactUploadedFiles[bId],
        `/pdfs/${bId}.pdf`,
        `/books/${bId}.pdf`,
        `/pdfs/${cNum}th ${subj} Book.pdf`,
        `/books/${cNum}th ${subj} Book.pdf`,
        `/pdfs/${cNum}th ${subj}.pdf`,
        `/books/${cNum}th ${subj}.pdf`,
        `/pdfs/${subj}.pdf`,
        `/books/${subj}.pdf`,
        `/pdfs/${subj.toLowerCase()}.pdf`,
        `/books/${subj.toLowerCase()}.pdf`
      ].filter(Boolean);

      for (const path of candidatePaths) {
        try {
          const res = await fetch(path, { method: 'HEAD' });
          if (res.ok && res.status === 200) {
            // Trigger download via anchor
            const link = document.createElement('a');
            link.href = path;
            link.download = downloadFileName;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setSaveToastMessage(`Downloading ${downloadFileName}...`);
            setTimeout(() => setSaveToastMessage(''), 2500);
            setIsDownloadingPdf(false);
            return;
          }
        } catch {}
      }

      // If no pre-existing PDF found, alert user nicely
      alert(`No PDF file has been uploaded yet for "${targetBook.subject}". You can upload one using the Edit Book option.`);
    } catch (err) {
      console.error('Download error:', err);
      alert('Failed to download PDF. Please try again.');
    } finally {
      setIsDownloadingPdf(false);
    }
  };

  const handleDeleteModalBook = () => {
    if (!bookModal || !bookModal.id) return;
    if (window.confirm(`Are you sure you want to delete "${bookModal.subject || 'this book'}"?`)) {
      const list = (customBooksOverrides[currentClassNum] || defaultTextbooks).filter(b => b.id !== bookModal.id);
      setCustomBooksOverrides(prev => ({ ...prev, [currentClassNum]: list }));
      setBookModal(null);
      setSaveToastMessage(`Deleted "${bookModal.subject}" successfully!`);
      setTimeout(() => setSaveToastMessage(''), 2500);
    }
  };

  const bookStudyOptions = selectedBook ? getBookStudyOptions(selectedBook.subject) : [];
  const defaultBookChapters = selectedBook ? getBookChapters(selectedBook.subject, currentClassNum, selectedBook.termNum || selectedBook.term || 1) : [];
  const bookChapters = (selectedBook && customChaptersOverrides[selectedBook.id]) 
    ? customChaptersOverrides[selectedBook.id] 
    : defaultBookChapters;

  const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];
  const ALPHABETS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const getIndexLabel = (indexType, index) => {
    if (indexType === 'roman') {
      return ROMAN_NUMERALS[index] || String(index + 1);
    }
    if (indexType === 'numbers') {
      return String(index + 1);
    }
    return ALPHABETS[index] || String(index + 1);
  };

  const detectIndexType = (items = []) => {
    if (!items || !items.length) return 'alphabets';
    const first = (items[0]?.letter || '').replace(/[:.]/g, '').trim();
    if (/^\d+$/.test(first)) return 'numbers';
    if (/^(I|II|III|IV|V|VI|VII|VIII|IX|X)$/i.test(first)) return 'roman';
    return 'alphabets';
  };

  const handleOpenEditTopicsModal = (overrideKey, currentList = []) => {
    const detectedType = detectIndexType(currentList);
    const formattedTopics = currentList.map((item, idx) => ({
      ...item,
      letter: (item.letter || getIndexLabel(detectedType, idx)).replace(/[:.]/g, '').trim(),
      title: item.title || '',
      paletteId: item.paletteId || item.cardPaletteId || 'solid-black'
    }));

    setTopicsModal({
      unitKey: overrideKey,
      indexType: detectedType,
      topics: formattedTopics.length > 0 ? formattedTopics : [
        { letter: getIndexLabel(detectedType, 0), title: '', paletteId: 'solid-black', questions: [{ q: 'Question 1', a: 'Answer 1' }] }
      ],
      activeTopicIndex: 0
    });
  };

  const handleSwitchIndexType = (newType) => {
    if (!topicsModal) return;
    const updated = topicsModal.topics.map((t, idx) => ({
      ...t,
      letter: getIndexLabel(newType, idx)
    }));
    setTopicsModal(prev => ({
      ...prev,
      indexType: newType,
      topics: updated
    }));
  };

  const handleAddTopicRow = () => {
    if (!topicsModal) return;
    const nextIdx = topicsModal.topics.length;
    const nextLetter = getIndexLabel(topicsModal.indexType, nextIdx);
    const newRow = {
      letter: nextLetter,
      title: '',
      paletteId: 'solid-black',
      questions: [{ q: 'Question 1', a: 'Answer 1' }]
    };
    setTopicsModal(prev => ({
      ...prev,
      topics: [...prev.topics, newRow],
      activeTopicIndex: nextIdx
    }));
  };

  const handleTopicChange = (idx, field, value) => {
    if (!topicsModal) return;
    const updated = [...topicsModal.topics];
    updated[idx] = { ...updated[idx], [field]: value };
    setTopicsModal(prev => ({ ...prev, topics: updated }));
  };

  const handleRemoveTopicRow = (idx) => {
    if (!topicsModal || topicsModal.topics.length <= 1) return;
    const updated = topicsModal.topics.filter((_, i) => i !== idx);
    const reIndexed = updated.map((t, i) => ({
      ...t,
      letter: getIndexLabel(topicsModal.indexType, i)
    }));
    setTopicsModal(prev => ({
      ...prev,
      topics: reIndexed,
      activeTopicIndex: Math.min(prev.activeTopicIndex, reIndexed.length - 1)
    }));
  };

  const handleSaveTopics = () => {
    if (!topicsModal || !topicsModal.unitKey) return;
    const { unitKey, topics } = topicsModal;
    const cleanTopics = topics.map(t => ({
      ...t,
      letter: (t.letter || '').trim(),
      title: (t.title || '').trim(),
      paletteId: t.paletteId || 'solid-black'
    }));

    setCustomExerciseOverrides(prev => ({
      ...prev,
      [unitKey]: cleanTopics
    }));

    // Cloud sync to Supabase
    supabase.from('custom_topics').upsert({
      unit_key: unitKey,
      topics: cleanTopics,
      updated_at: new Date().toISOString()
    }, { onConflict: 'unit_key' }).then(({ error }) => {
      if (error) console.warn('Supabase topics sync info:', error);
    });

    setTopicsModal(null);
    setSaveToastMessage('Topics updated successfully!');
    setTimeout(() => setSaveToastMessage(''), 2500);
  };

  const handleOpenAddCardModal = () => {
    if (!selectedBook) return;
    const norm = (selectedBook.subject || '').toLowerCase();
    let initialFormat = 'units';
    let defaultPalette = 'solid-black';
    let defUnit = `Unit ${bookChapters.length + 1}`;

    if (norm.includes('tamil') && currentClassNum > 4) {
      initialFormat = 'tamil';
      defaultPalette = 'solid-black';
      defUnit = `இயல் ${bookChapters.length + 1}`;
    } else if (norm.includes('english') && currentClassNum > 5) {
      initialFormat = 'english';
      defaultPalette = 'solid-black';
      defUnit = `Unit ${bookChapters.length + 1}`;
    } else if (norm.includes('math') && currentClassNum > 5) {
      initialFormat = 'maths';
      defaultPalette = 'solid-black';
      defUnit = `Chapter ${bookChapters.length + 1}`;
    } else if (norm.includes('science') && !norm.includes('social') && currentClassNum > 5) {
      initialFormat = 'science';
      defaultPalette = 'solid-black';
      defUnit = `Unit 1`;
    } else if (norm.includes('social') && currentClassNum > 5) {
      initialFormat = 'social';
      defaultPalette = 'solid-black';
      defUnit = 'History';
    } else {
      initialFormat = 'units';
      defaultPalette = 'solid-black';
      defUnit = `Unit ${bookChapters.length + 1}`;
    }

    setCardModal({
      mode: 'add',
      format: initialFormat,
      selectedPaletteId: defaultPalette,
      unitPaletteId: 'solid-black',
      titlePaletteId: defaultPalette,
      themePaletteId: 'solid-black',
      // English fields
      prosePaletteId: 'solid-black',
      poemPaletteId: 'solid-black',
      supplementaryPaletteId: 'solid-black',
      grammarPaletteId: 'solid-black',
      unitName: defUnit,
      titleName: '',
      titles: [{ title: '', paletteId: defaultPalette }],
      themeName: '',
      proseTitle: '',
      poemTitle: '',
      hasPoemAsterisk: false,
      supplementaryTitle: '',
      grammarTitle: '',
      extraTitles: [],
      // Subtopics (Tamil lessons or Maths topics)
      subtopics: initialFormat === 'tamil'
        ? [{ title: '', type: 'பாடம்', hasAsterisk: false, paletteId: 'solid-black' }]
        : initialFormat === 'maths'
        ? [{ code: `${bookChapters.length + 1}.1`, title: '', paletteId: defaultPalette }]
        : [],
      // Social fields
      sectionName: defUnit
    });
    setActiveColorField('title-0');
  };

  const handleOpenEditCardModal = (chap, idx, isSection = false) => {
    if (!selectedBook) return;
    const norm = (selectedBook.subject || '').toLowerCase();
    let format = 'units';
    if (chap.format) {
      format = chap.format;
    } else if (norm.includes('tamil') && currentClassNum > 4 && chap.subtopics && chap.subtopics.length > 0) {
      format = 'tamil';
    } else if (norm.includes('english') && currentClassNum > 5) {
      format = 'english';
    } else if (norm.includes('math') && currentClassNum > 5) {
      format = 'maths';
    } else if (norm.includes('social') && currentClassNum > 5) {
      format = 'social';
    } else if (norm.includes('science') && currentClassNum > 5) {
      format = 'science';
    } else {
      format = 'units';
    }

    let matchedPal = CARD_COLOR_PALETTES[0];
    if (chap.theme?.accent) {
      const found = CARD_COLOR_PALETTES.find(p => p.accent?.toLowerCase() === chap.theme.accent?.toLowerCase());
      if (found) matchedPal = found;
    }

    const prosePalFound = chap.proseTheme?.accent ? CARD_COLOR_PALETTES.find(p => p.accent?.toLowerCase() === chap.proseTheme.accent?.toLowerCase())?.id : null;
    const poemPalFound = chap.poemTheme?.accent ? CARD_COLOR_PALETTES.find(p => p.accent?.toLowerCase() === chap.poemTheme.accent?.toLowerCase())?.id : null;
    const suppPalFound = chap.supplementaryTheme?.accent ? CARD_COLOR_PALETTES.find(p => p.accent?.toLowerCase() === chap.supplementaryTheme.accent?.toLowerCase())?.id : null;
    const gramPalFound = chap.grammarTheme?.accent ? CARD_COLOR_PALETTES.find(p => p.accent?.toLowerCase() === chap.grammarTheme.accent?.toLowerCase())?.id : null;

    let initialTitles = [];
    if (format === 'social') {
      const targetSec = chap.section || chap.unit || 'History';
      const matchingChaps = bookChapters.filter(ch => (ch.section || ch.unit) === targetSec);
      if (matchingChaps.length > 0) {
        initialTitles = matchingChaps.map(ch => {
          let pId = ch.titlePaletteId;
          if (!pId && ch.theme?.accent) {
            const found = CARD_COLOR_PALETTES.find(p => p.accent?.toLowerCase() === ch.theme.accent?.toLowerCase());
            if (found) pId = found.id;
          }
          return {
            title: ch.title || '',
            paletteId: pId || matchedPal.id
          };
        });
      } else {
        initialTitles = [{ title: chap.title || '', paletteId: matchedPal.id }];
      }
    } else if (format === 'science') {
      const targetUnit = chap.unit || 'Unit 1';
      const matchingChaps = bookChapters.filter(ch => (ch.unit || 'Unit 1') === targetUnit);
      if (matchingChaps.length > 0) {
        initialTitles = matchingChaps.map(ch => {
          let pId = ch.titlePaletteId;
          if (!pId && ch.theme?.accent) {
            const found = CARD_COLOR_PALETTES.find(p => p.accent?.toLowerCase() === ch.theme.accent?.toLowerCase());
            if (found) pId = found.id;
          }
          return {
            title: ch.title || '',
            paletteId: pId || matchedPal.id
          };
        });
      } else {
        initialTitles = [{ title: chap.title || '', paletteId: matchedPal.id }];
      }
    } else if (format === 'units' || (format === 'tamil' && (!chap.subtopics || chap.subtopics.length === 0))) {
      const targetUnit = chap.unit || `Unit ${idx + 1}`;
      const matchingChaps = bookChapters.filter(ch => (ch.unit || `Unit ${idx + 1}`) === targetUnit);
      if (matchingChaps.length > 0) {
        initialTitles = matchingChaps.map(ch => {
          let pId = ch.titlePaletteId;
          if (!pId && ch.theme?.accent) {
            const found = CARD_COLOR_PALETTES.find(p => p.accent?.toLowerCase() === ch.theme.accent?.toLowerCase());
            if (found) pId = found.id;
          }
          return {
            title: ch.title || '',
            paletteId: pId || matchedPal.id
          };
        });
      } else {
        initialTitles = [
          { title: chap.title || '', paletteId: chap.titlePaletteId || matchedPal.id },
          ...(chap.subtopics || []).map((s, sIdx) => ({
            title: s.title || '',
            paletteId: s.paletteId || (s.theme?.accent ? CARD_COLOR_PALETTES.find(p => p.accent?.toLowerCase() === s.theme.accent?.toLowerCase())?.id : null) || matchedPal.id
          }))
        ];
      }
    }

    setCardModal({
      mode: 'edit',
      editIndex: idx,
      isEditingSection: isSection,
      oldSection: chap.section || chap.unit || 'History',
      format,
      selectedPaletteId: matchedPal.id,
      unitPaletteId: chap.unitPaletteId || (format === 'tamil' || format === 'maths' || format === 'english' || format === 'science' ? 'slate-charcoal' : matchedPal.id),
      titlePaletteId: chap.titlePaletteId || matchedPal.id,
      themePaletteId: chap.themePaletteId || 'vibrant-purple',
      prosePaletteId: chap.prosePaletteId || prosePalFound || 'coral-red',
      poemPaletteId: chap.poemPaletteId || poemPalFound || 'crimson-rose',
      supplementaryPaletteId: chap.supplementaryPaletteId || suppPalFound || 'sky-blue',
      grammarPaletteId: chap.grammarPaletteId || gramPalFound || 'emerald-mint',
      unitName: (format === 'social' && chap.section) ? chap.section : (chap.unit || `Unit ${idx + 1}`),
      titleName: initialTitles[0]?.title || chap.title || '',
      titles: initialTitles,
      themeName: chap.themeName || '',
      // English fields
      proseTitle: chap.prose || '',
      poemTitle: chap.poem || '',
      hasPoemAsterisk: Boolean(chap.hasPoemAsterisk),
      supplementaryTitle: chap.supplementary || '',
      grammarTitle: chap.grammar || '',
      // Extra titles for units, science, and social
      extraTitles: initialTitles.slice(1),
      // Subtopics (Tamil lessons or Maths topics) with drag-and-drop palette support
      subtopics: chap.subtopics && chap.subtopics.length > 0 
        ? chap.subtopics.map((s, sIdx) => ({
            ...s,
            paletteId: s.paletteId || (s.theme?.accent && s.theme.accent !== '#0F172A' ? CARD_COLOR_PALETTES.find(p => p.accent?.toLowerCase() === s.theme.accent?.toLowerCase())?.id : null) || (format === 'maths' ? null : CARD_COLOR_PALETTES[sIdx % CARD_COLOR_PALETTES.length].id)
          })) 
        : (format === 'tamil'
            ? [{ title: chap.title || '', type: 'பாடம்', hasAsterisk: false, paletteId: matchedPal.id }]
            : format === 'maths'
            ? [{ code: `${idx + 1}.1`, title: '', paletteId: null }]
            : []),
      // Social fields
      sectionName: chap.section || 'History'
    });
    setActiveColorField('title-0');
  };

  const saveCustomChaptersForBook = (bookId, updatedChapters) => {
    setCustomChaptersOverrides(prev => ({
      ...prev,
      [bookId]: updatedChapters
    }));

    // Cloud sync to Supabase
    supabase.from('custom_chapters').upsert({
      book_id: bookId,
      chapters: updatedChapters,
      updated_at: new Date().toISOString()
    }, { onConflict: 'book_id' }).then(({ error }) => {
      if (error) console.warn('Supabase chapters sync info:', error);
    });
  };

  const handleDeleteCard = (idx) => {
    if (!selectedBook || typeof idx !== 'number') return;
    const currentList = [...bookChapters];
    const removed = currentList[idx];
    const updated = currentList.filter((_, i) => i !== idx);
    saveCustomChaptersForBook(selectedBook.id, updated);
    setCardModal(null);
    setSaveToastMessage(`Deleted "${removed?.title || removed?.unit || 'Card'}" successfully!`);
    setTimeout(() => setSaveToastMessage(''), 2500);
  };

  const handleSaveModalCard = (e) => {
    e?.preventDefault();
    if (!cardModal || !selectedBook) return;

    const buildThemeObj = (pal) => ({
      accent: pal.accent,
      badgeBg: pal.badgeBg,
      badgeText: pal.badgeText,
      cardBg: pal.cardBg,
      cardBorder: pal.cardBorder,
      hoverBorder: pal.hoverBorder,
      labelColor: pal.titleColor,
      titleColor: pal.titleColor,
      chevronBg: 'bg-white border border-slate-200 text-slate-500 shadow-2xs'
    });

    const titlePal = CARD_COLOR_PALETTES.find(p => p.id === (cardModal.titlePaletteId || cardModal.selectedPaletteId)) || CARD_COLOR_PALETTES[0];
    const unitPal = CARD_COLOR_PALETTES.find(p => p.id === cardModal.unitPaletteId) || titlePal;
    const themeObj = buildThemeObj(titlePal);

    let newCard = null;
    const currentList = [...bookChapters];
    const nextIdx = currentList.length + 1;

    if (cardModal.format === 'units') {
      const titlesList = (cardModal.titles && cardModal.titles.length > 0)
        ? cardModal.titles
        : [
            { title: cardModal.titleName, paletteId: cardModal.titlePaletteId },
            ...(cardModal.extraTitles || [])
          ];
      const validTitles = titlesList.filter(t => t && t.title && t.title.trim());
      if (validTitles.length === 0) {
        alert('Please enter at least one title');
        return;
      }
      const unitNameStr = cardModal.unitName?.trim() || `Unit ${nextIdx}`;

      const unitCards = validTitles.map((tItem, tIdx) => {
        const uPal = CARD_COLOR_PALETTES.find(p => p.id === tItem.paletteId) || titlePal;
        return {
          format: 'units',
          unit: unitNameStr,
          unitNum: tIdx + 1,
          title: tItem.title.trim(),
          theme: buildThemeObj(uPal),
          titlePaletteId: uPal.id,
          unitPaletteId: unitPal.id
        };
      });

      const oldUnit = cardModal.oldSection || unitNameStr;
      let updatedChapters = [];
      let replaced = false;

      currentList.forEach((ch) => {
        if (ch.unit === oldUnit || (ch.unit && ch.unit.toLowerCase() === oldUnit.toLowerCase())) {
          if (!replaced) {
            updatedChapters.push(...unitCards);
            replaced = true;
          }
        } else {
          updatedChapters.push(ch);
        }
      });

      if (!replaced) {
        updatedChapters.push(...unitCards);
      }

      saveCustomChaptersForBook(selectedBook.id, updatedChapters);
      setSaveToastMessage(`Updated "${unitNameStr}" titles successfully!`);
      setTimeout(() => setSaveToastMessage(''), 2500);
      setCardModal(null);
      return;
    } else if (cardModal.format === 'tamil') {
      if (!cardModal.titleName.trim()) {
        alert('Please enter lesson/title name');
        return;
      }
      const themePal = CARD_COLOR_PALETTES.find(p => p.id === cardModal.themePaletteId) || titlePal;
      const validSubtopics = (cardModal.subtopics || [])
        .filter(s => s.title && s.title.trim())
        .map((s, sIdx) => {
          const subPal = CARD_COLOR_PALETTES.find(p => p.id === s.paletteId) || titlePal;
          return {
            title: s.title.trim(),
            type: s.type?.trim() || 'பாடம்',
            hasAsterisk: Boolean(s.hasAsterisk),
            paletteId: subPal.id,
            theme: buildThemeObj(subPal)
          };
        });

      newCard = {
        format: 'tamil',
        unit: cardModal.unitName?.trim() || `இயல் ${nextIdx}`,
        unitNum: nextIdx,
        title: cardModal.titleName.trim(),
        themeName: cardModal.themeName?.trim() || '',
        theme: themeObj,
        titlePaletteId: titlePal.id,
        unitPaletteId: unitPal.id,
        themePaletteId: themePal.id,
        subtopics: validSubtopics.length > 0 ? validSubtopics : [
          { title: cardModal.titleName.trim(), type: 'பாடம்', paletteId: titlePal.id, theme: themeObj }
        ]
      };
    } else if (cardModal.format === 'english') {
      if (!cardModal.proseTitle.trim() && !cardModal.poemTitle.trim() && !cardModal.supplementaryTitle.trim() && !cardModal.grammarTitle?.trim()) {
        alert('Please enter at least one title for Prose, Poem, Supplementary or Grammar');
        return;
      }
      const prosePal = CARD_COLOR_PALETTES.find(p => p.id === (cardModal.prosePaletteId || cardModal.selectedPaletteId)) || CARD_COLOR_PALETTES[0];
      const poemPal = CARD_COLOR_PALETTES.find(p => p.id === cardModal.poemPaletteId) || prosePal;
      const suppPal = CARD_COLOR_PALETTES.find(p => p.id === cardModal.supplementaryPaletteId) || prosePal;
      const gramPal = CARD_COLOR_PALETTES.find(p => p.id === cardModal.grammarPaletteId) || prosePal;

      newCard = {
        format: 'english',
        unit: cardModal.unitName?.trim() || `Unit ${nextIdx}`,
        unitNum: nextIdx,
        prose: cardModal.proseTitle.trim() || 'Prose Lesson',
        poem: cardModal.poemTitle.trim() || 'Poem',
        hasPoemAsterisk: Boolean(cardModal.hasPoemAsterisk),
        supplementary: cardModal.supplementaryTitle.trim() || 'Supplementary Reader',
        grammar: cardModal.grammarTitle?.trim() || '',
        theme: buildThemeObj(prosePal),
        proseTheme: buildThemeObj(prosePal),
        poemTheme: buildThemeObj(poemPal),
        supplementaryTheme: buildThemeObj(suppPal),
        grammarTheme: buildThemeObj(gramPal),
        prosePaletteId: prosePal.id,
        poemPaletteId: poemPal.id,
        supplementaryPaletteId: suppPal.id,
        grammarPaletteId: gramPal.id,
        unitPaletteId: unitPal.id
      };
    } else if (cardModal.format === 'maths') {
      if (!cardModal.titleName.trim()) {
        alert('Please enter chapter title name');
        return;
      }
      const validSubtopics = (cardModal.subtopics || [])
        .filter(s => s.title && s.title.trim())
        .map((s, sIdx) => {
          const subPal = s.paletteId ? CARD_COLOR_PALETTES.find(p => p.id === s.paletteId) : null;
          return {
            code: s.code?.trim() || `${nextIdx}.${sIdx + 1}`,
            title: s.title.trim(),
            paletteId: subPal ? subPal.id : null,
            theme: subPal ? buildThemeObj(subPal) : null
          };
        });

      newCard = {
        format: 'maths',
        unit: cardModal.unitName?.trim() || `Chapter ${nextIdx}`,
        unitNum: nextIdx,
        title: cardModal.titleName.trim(),
        subtopics: validSubtopics,
        theme: themeObj,
        titlePaletteId: titlePal.id,
        unitPaletteId: unitPal.id
      };
    } else if (cardModal.format === 'science') {
      const titlesList = (cardModal.titles && cardModal.titles.length > 0)
        ? cardModal.titles
        : [
            { title: cardModal.titleName, paletteId: cardModal.titlePaletteId },
            ...(cardModal.extraTitles || [])
          ];
      const validTitles = titlesList.filter(t => t && t.title && t.title.trim());
      if (validTitles.length === 0) {
        alert('Please enter at least one title');
        return;
      }

      const sciUnitName = cardModal.unitName?.trim() || `Unit ${nextIdx}`;
      const sciCards = validTitles.map((tItem, tIdx) => {
        const sPal = CARD_COLOR_PALETTES.find(p => p.id === tItem.paletteId) || titlePal;
        return {
          format: 'science',
          unit: sciUnitName,
          unitNum: tIdx + 1,
          title: tItem.title.trim(),
          theme: buildThemeObj(sPal),
          titlePaletteId: sPal.id,
          unitPaletteId: unitPal.id
        };
      });

      const oldUnit = cardModal.oldSection || sciUnitName;
      let updatedChapters = [];
      let replaced = false;

      currentList.forEach((ch) => {
        if (ch.unit === oldUnit || (ch.unit && ch.unit.toLowerCase() === oldUnit.toLowerCase())) {
          if (!replaced) {
            updatedChapters.push(...sciCards);
            replaced = true;
          }
        } else {
          updatedChapters.push(ch);
        }
      });

      if (!replaced) {
        updatedChapters.push(...sciCards);
      }

      saveCustomChaptersForBook(selectedBook.id, updatedChapters);
      setSaveToastMessage(`Updated "${sciUnitName}" titles successfully!`);
      setTimeout(() => setSaveToastMessage(''), 2500);
      setCardModal(null);
      return;
    } else if (cardModal.format === 'social') {
      const titlesList = (cardModal.titles && cardModal.titles.length > 0)
        ? cardModal.titles
        : [
            { title: cardModal.titleName, paletteId: cardModal.titlePaletteId },
            ...(cardModal.extraTitles || [])
          ];
      const validTitles = titlesList.filter(t => t && t.title && t.title.trim());
      if (validTitles.length === 0) {
        alert('Please enter at least one title');
        return;
      }

      const socialUnitName = cardModal.unitName?.trim() || cardModal.sectionName?.trim() || 'History';

      const socialCards = validTitles.map((tItem, tIdx) => {
        const sPal = CARD_COLOR_PALETTES.find(p => p.id === tItem.paletteId) || titlePal;
        return {
          format: 'social',
          unit: socialUnitName,
          unitNum: tIdx + 1,
          section: socialUnitName,
          title: tItem.title.trim(),
          theme: buildThemeObj(sPal),
          titlePaletteId: sPal.id
        };
      });

      const oldSec = cardModal.oldSection || socialUnitName;
      let updatedChapters = [];
      let replaced = false;

      currentList.forEach((ch) => {
        if (ch.section === oldSec || ch.unit === oldSec) {
          if (!replaced) {
            updatedChapters.push(...socialCards);
            replaced = true;
          }
        } else {
          updatedChapters.push(ch);
        }
      });

      if (!replaced) {
        updatedChapters.push(...socialCards);
      }

      saveCustomChaptersForBook(selectedBook.id, updatedChapters);
      setSaveToastMessage(`Updated "${socialUnitName}" titles successfully!`);
      setTimeout(() => setSaveToastMessage(''), 2500);
      setCardModal(null);
      return;
    }

    if (newCard) {
      let updatedChapters = [...currentList];
      const isEdit = cardModal.mode === 'edit' && typeof cardModal.editIndex === 'number';
      if (isEdit) {
        if (cardModal.isEditingSection && cardModal.oldSection) {
          const newSec = newCard.section || newCard.unit;
          updatedChapters = currentList.map((ch) => {
            if (ch.section === cardModal.oldSection) {
              return { ...ch, section: newSec, unit: newSec };
            }
            return ch;
          });
          updatedChapters[cardModal.editIndex] = {
            ...updatedChapters[cardModal.editIndex],
            ...newCard
          };
        } else {
          updatedChapters[cardModal.editIndex] = {
            ...currentList[cardModal.editIndex],
            ...newCard
          };
        }
      } else {
        updatedChapters = [...currentList, newCard];
      }
      saveCustomChaptersForBook(selectedBook.id, updatedChapters);
      setSaveToastMessage(isEdit ? `Updated "${newCard.title || newCard.unit || 'Card'}" successfully!` : `Added "${newCard.title || newCard.unit || 'Card'}" successfully!`);
      setTimeout(() => setSaveToastMessage(''), 2500);
      setCardModal(null);
    }
  };
  const unitCategories = selectedBook && selectedUnit
    ? getUnitSubCategories(selectedBook.subject, selectedUnit, activeMarkTab)
    : [];

  const getBookHeaderTitle = (book) => {
    if (!book) return '';
    const baseName = language === 'tam' ? (book.nativeTitle || book.subject) : book.subject;
    const romanTerm = book.termNum === 1 ? 'Term I' : book.termNum === 2 ? 'Term II' : book.termNum === 3 ? 'Term III' : (book.term || '');
    const termLabel = language === 'tam'
      ? (book.termTamil || (book.termNum === 1 ? 'பருவம் 1' : book.termNum === 2 ? 'பருவம் 2' : book.termNum === 3 ? 'பருவம் 3' : ''))
      : romanTerm;
    return (isTrimester && termLabel) ? `${baseName} - ${termLabel}` : baseName;
  };

  const filteredClasses = CLASSES_LIST.filter(c => 
    c.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.stage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTextbooks = textbooks.filter(b => {
    const matchesSearch = 
      b.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (b.nativeTitle && b.nativeTitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (b.term && b.term.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;
    if (isTrimester && selectedTerm !== 'All') {
      const termNumSelected = 
        (selectedTerm === 'Term I' || selectedTerm === 'Term 1') ? 1 :
        (selectedTerm === 'Term II' || selectedTerm === 'Term 2') ? 2 :
        (selectedTerm === 'Term III' || selectedTerm === 'Term 3') ? 3 :
        null;
      if (termNumSelected && b.termNum) {
        return b.termNum === termNumSelected;
      }
      return b.term === selectedTerm;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-start py-0 sm:py-6 sm:px-4 font-sans text-slate-800 antialiased select-none">
      
      {/* Mobile Device Frame */}
      <div className="w-full sm:max-w-[410px] min-h-screen sm:min-h-[850px] sm:max-h-[870px] bg-[#F8FAFC] sm:rounded-[50px] sm:shadow-[0_25px_70px_rgba(0,0,0,0.14)] sm:border-[8px] sm:border-slate-900 flex flex-col overflow-hidden relative selection:bg-blue-500 selection:text-white">
        
        {/* Device Notch at top */}
        <div className="hidden sm:flex justify-center pt-2.5 pb-1 bg-white">
          <div className="h-4 w-28 bg-black rounded-full" />
        </div>

        {/* Top Header Bar: ☰ Menu / Back, Title, School Logo */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-4 pt-4 pb-3 flex items-center justify-between border-b border-slate-200/80 relative">
          
          {selectedExerciseOption ? (
            <button
              onClick={() => {
                if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                setTravelogueAudioPlaying(false);
                setShowTravelogueText(false);
                setBlankAnswers({});
                setTfAnswers({});
                setShowSectionSuggest({});
                setDialogueTypedAnswers({});
                setShowDialogueSuggest({});
                setDialogueRevealedPhases({});
                setSelectedSentenceGameAnswers({});
                setTypedSentences({});
                setSelectedExerciseOption(null);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-xs text-slate-800 hover:bg-slate-50 border border-slate-200/80 transition active:scale-95 shrink-0 cursor-pointer"
              aria-label="Back"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          ) : selectedUnit ? (
            <button
              onClick={() => {
                setSelectedUnit(null);
                setSelectedExerciseOption(null);
                setActivePracticeOption(null);
                setSearchQuery('');
              }}
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-xs text-slate-800 hover:bg-slate-50 border border-slate-200/80 transition active:scale-95 shrink-0 cursor-pointer"
              aria-label="Back"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          ) : selectedBook ? (
            <button
              onClick={() => {
                setSelectedBook(null);
                setSearchQuery('');
                savedChaptersScrollPosRef.current = 0;
              }}
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-xs text-slate-800 hover:bg-slate-50 border border-slate-200/80 transition active:scale-95 shrink-0"
              aria-label="Back"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          ) : selectedClass ? (
            <button
              onClick={() => {
                setSelectedClass(null);
                setSearchQuery('');
              }}
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-xs text-slate-800 hover:bg-slate-50 border border-slate-200/80 transition active:scale-95 shrink-0"
              aria-label="Back"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white font-black text-xs shadow-xs shrink-0 select-none">
              SV
            </div>
          )}

          {/* Center Title */}
          {selectedUnit ? (
            <div className="flex flex-col items-center justify-center min-w-0 flex-1 px-2">
              <span className="text-sm sm:text-base font-black text-slate-900 tracking-tight text-center truncate max-w-[200px] leading-tight">
                {getBookHeaderTitle(selectedBook)}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500 text-center truncate max-w-[200px] leading-tight mt-0.5">
                {renderTextWithAsterisk(selectedUnit.sectionTitle || selectedUnit.prose || selectedUnit.title)}
              </span>
            </div>
          ) : (
            <h1 className="text-sm sm:text-base font-black text-slate-900 tracking-tight text-center truncate max-w-[200px] flex-1 px-2">
              {selectedBook 
                ? getBookHeaderTitle(selectedBook)
                : selectedClass 
                  ? `${selectedClass.title} ${language === 'tam' ? 'பாடநூல்கள்' : 'Textbooks'}`
                  : (language === 'tam' ? 'வகுப்பைத் தேர்ந்தெடுக்கவும்' : 'Select your Class/ Course')}
            </h1>
          )}

          {/* Right Hamburger Menu with Dropdown in ALL Headers */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-xs text-slate-800 hover:bg-slate-50 border border-slate-200/80 transition active:scale-95 cursor-pointer"
              aria-label="Menu"
            >
              <Menu className="h-5 w-5 stroke-[2.4]" />
              {isAdminMode && (
                <span className="absolute -top-1 -right-1 flex h-4 px-1 items-center justify-center rounded-full bg-rose-500 text-[9px] font-black text-white shadow-xs ring-2 ring-white">
                  A
                </span>
              )}
            </button>

            {/* Language & Admin Dropdown Menu */}
            {isMenuOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsMenuOpen(false)} 
                />
                <div className="absolute right-0 top-12 z-50 w-44 bg-white rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.18)] border border-slate-200 p-2 animate-in fade-in zoom-in-95 duration-150 select-none">
                  <div className="space-y-1">
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage('tam');
                        setIsMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
                        language === 'tam'
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>தமிழ்</span>
                      {language === 'tam' && <Check className="h-4 w-4 stroke-[3]" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage('eng');
                        setIsMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
                        language === 'eng'
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>English</span>
                      {language === 'eng' && <Check className="h-4 w-4 stroke-[3]" />}
                    </button>
                    <div className="h-[1px] bg-slate-100 my-1" />
                    <button
                      type="button"
                      onClick={() => {
                        setIsAdminMode(!isAdminMode);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
                        isAdminMode
                          ? 'bg-rose-500 text-white'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>Admin</span>
                      {isAdminMode && <Check className="h-4 w-4 stroke-[3]" />}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </header>

        {/* ========================================================================= */}
        {/* SCREEN 1: 1 TO 12TH CARDS (HEAD POPS OUT TOP, ZERO BOTTOM GAP & OVERHANG)  */}
        {/* ========================================================================= */}
        {!selectedClass && (
          <main className="flex-1 overflow-y-auto px-5 pt-4 pb-28 space-y-4">
            
            {/* Modern Cylindrical Search Bar (Flat, No Light/Shadow Effects) */}
            <div className="relative group">
              <div className="flex items-center w-full rounded-full bg-white border border-black px-4 py-2.5 transition-colors">
                <Search className="h-4 w-4 stroke-[2.5] text-slate-800 shrink-0 mr-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search standard (e.g. 10th, 12th, 6th)..."
                  className="w-full bg-transparent text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-500 hover:bg-slate-300 hover:text-slate-800 transition active:scale-90 shrink-0 ml-1"
                  >
                    <X className="h-3 w-3 stroke-[2.5]" />
                  </button>
                )}
              </div>
            </div>

            {/* 3-Column Grid: Compact height gap with 11th/12th in front (z-30), avatar middle (z-20), std in back (z-10) */}
            <div className="grid grid-cols-3 gap-x-2.5 gap-y-6 pt-4 pb-8">
              {filteredClasses.map((cls) => (
                <div
                  key={cls.id}
                  onClick={() => {
                    setSelectedClass(cls);
                    setSelectedTerm('Term I');
                    setSearchQuery('');
                  }}
                  role="button"
                  tabIndex={0}
                  className={`group relative h-[102px] rounded-[20px] ${cls.color} border border-white/20 border-b-[4px] border-b-black/25 hover:border-b-black/35 cursor-pointer p-3 flex flex-col justify-between transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-[2px] active:border-b-[2px] select-none overflow-visible`}
                >
                  {/* Subtle 3D Top Highlight Sheen */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-t-[19px]" />

                  {/* Left Text Block */}
                  <div className="relative z-10 pt-3 pl-1 select-none pointer-events-none">
                    <div className="flex items-baseline text-white">
                      <span className="text-2xl sm:text-3xl font-black leading-none drop-shadow-sm tracking-tight">{cls.classNum}</span>
                      <span className="text-xs font-bold leading-none ml-0.5 uppercase opacity-95">
                        {cls.classNum === 1 ? 'st' : cls.classNum === 2 ? 'nd' : cls.classNum === 3 ? 'rd' : 'th'}
                      </span>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-wider text-white/90 leading-tight mt-1">
                      STANDARD
                    </p>
                  </div>

                  {/* 3D POP-OUT AVATAR: Positioned so text has full clearance and head pops out above */}
                  <div className="absolute -top-[36px] inset-x-0 bottom-0 rounded-b-[19px] overflow-hidden pointer-events-none z-20">
                    <img 
                      src={cls.avatarImg} 
                      alt={cls.title}
                      className="absolute -right-1 -bottom-0.5 w-[90px] h-[90px] object-contain object-bottom select-none"
                      loading="eager"
                    />
                  </div>
                </div>
              ))}
            </div>

          </main>
        )}

        {/* ======================================================== */}
        {/* SCREEN 2: TEXTBOOKS LIST (3 IN A ROW)                    */}
        {/* ======================================================== */}
        {selectedClass && !selectedBook && (
          <main className="flex-1 overflow-y-auto px-5 pt-4 pb-28 space-y-5">
            
            {/* Modern Cylindrical Search Bar */}
            <div className="relative group">
              <div className="flex items-center w-full rounded-full bg-white border border-black px-4 py-2.5 transition-colors">
                <Search className="h-4 w-4 stroke-[2.5] text-slate-800 shrink-0 mr-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isTrimester ? "Search Tamil, Maths, Term 1..." : "Search Tamil, Maths, Science..."}
                  className="w-full bg-transparent text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-500 hover:bg-slate-300 hover:text-slate-800 transition active:scale-90 shrink-0 ml-1"
                  >
                    <X className="h-3 w-3 stroke-[2.5]" />
                  </button>
                )}
              </div>
            </div>

            {/* Trimester Terms Filter for Classes 1 to 7 */}
            {isTrimester && (
              <div className="flex items-center justify-between border-b border-slate-200 select-none px-1 pt-1">
                {[
                  { id: 'Term I', label: 'Term I', termNum: 1 },
                  { id: 'Term II', label: 'Term II', termNum: 2 },
                  { id: 'Term III', label: 'Term III', termNum: 3 }
                ].map((tab) => {
                  const isActive = 
                    selectedTerm === tab.id ||
                    (tab.id === 'Term I' && selectedTerm === 'Term 1') ||
                    (tab.id === 'Term II' && selectedTerm === 'Term 2') ||
                    (tab.id === 'Term III' && selectedTerm === 'Term 3');

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSelectedTerm(tab.id)}
                      className={`flex-1 relative pb-2.5 pt-1 text-xs sm:text-sm font-bold transition-all cursor-pointer select-none text-center ${
                        isActive
                          ? 'text-black font-black'
                          : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <span className="relative inline-block">
                        {tab.label}
                        {isActive && (
                          <span className="absolute -bottom-2.5 left-[-4px] right-[-4px] h-[2.5px] bg-black rounded-full" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Textbooks Grid: EXACTLY 3 IN A ROW */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {filteredTextbooks.map((book) => (
                <TextbookCover
                  key={book.id}
                  book={book}
                  language={language}
                  onEdit={isAdminMode ? handleEditBook : undefined}
                  onClick={() => {
                    setSelectedBook(book);
                    setSearchQuery('');
                  }}
                />
              ))}

              {/* Add Book Cover (near last book) - Visible for ADMIN only */}
              {isAdminMode && (
                <AddBookCover
                  language={language}
                  onClick={handleAddBook}
                />
              )}
            </div>
          </main>
        )}

        {/* ======================================================== */}
        {/* SCREEN 3: BOOK DETAILS & 8 UNITS LIST DIRECTLY BELOW     */}
        {/* ======================================================== */}
        {selectedClass && selectedBook && (
          <main 
            ref={chaptersListRef}
            onScroll={(e) => {
              savedChaptersScrollPosRef.current = e.currentTarget.scrollTop;
            }}
            className={`flex-1 overflow-y-auto px-5 pt-4 pb-28 space-y-4 ${selectedUnit ? 'hidden' : 'block'}`}
          >
            
            {/* Top Container: Black Opacity Card with Crisp White Outline & White Texts (No Light Effects) */}
            <div className="relative rounded-[28px] bg-black/75 border-2 border-white p-4 flex items-center gap-4 select-none">
              
              {/* Authentic Book Cover Visual */}
              <div className="w-[84px] shrink-0">
                <div className="relative aspect-[1/1.42] w-full rounded-r-[6px] rounded-l-[2px] overflow-hidden border border-white/20 bg-slate-900 shadow-md">
                  {selectedBook.coverImage ? (
                    <img
                      src={selectedBook.coverImage}
                      alt={language === 'tam' ? (selectedBook.nativeTitle || selectedBook.subject) : selectedBook.subject}
                      className="h-full w-full object-cover select-none"
                    />
                  ) : (
                    <div className={`h-full w-full bg-gradient-to-b ${selectedBook.themeColor || 'from-indigo-600 to-purple-800'} flex flex-col justify-center p-2 text-white text-center select-none`}>
                      <div className="my-auto py-1">
                        <h4 className="text-[10px] font-black leading-tight break-words">
                          {language === 'tam' ? (selectedBook.nativeTitle || selectedBook.subject) : selectedBook.subject}
                        </h4>
                      </div>
                    </div>
                  )}
                  {/* Spine Hinge & Binding Shadow */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/60 via-black/25 to-transparent pointer-events-none z-10" />
                  <div className="absolute left-[2px] top-0 bottom-0 w-[1px] bg-white/40 pointer-events-none z-10" />
                  <div className="absolute left-[5px] top-0 bottom-0 w-[1px] bg-black/30 pointer-events-none z-10" />
                </div>
              </div>

              {/* Book Info & Action Button */}
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-black text-white leading-tight truncate">
                  {language === 'tam' ? (selectedBook.nativeTitle || selectedBook.subject) : selectedBook.subject}
                </h2>

                <p className="text-xs font-bold text-white/80 mt-1 truncate">
                  {(() => {
                    const bookName = language === 'tam' ? (selectedBook.nativeTitle || selectedBook.subject) : selectedBook.subject;
                    const termLabel = selectedBook.term 
                      ? (language === 'tam' ? (selectedBook.termTamil || selectedBook.term) : selectedBook.term) 
                      : (currentClassNum <= 7 ? 'Term I' : null);
                    return termLabel ? `${bookName} • ${termLabel}` : bookName;
                  })()}
                </p>

                {/* Action Buttons: View & Download */}
                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsViewingBook(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-xs font-extrabold transition active:scale-95 shadow-sm cursor-pointer select-none"
                  >
                    <Eye className="h-3.5 w-3.5 stroke-[2.5]" />
                    <span>View</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDownloadBookPdf(selectedBook)}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-xs font-extrabold transition active:scale-95 shadow-sm cursor-pointer select-none"
                  >
                    <Download className="h-3.5 w-3.5 stroke-[2.5]" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Units List */}
            {(() => {
              const getDarkBadgeBg = (theme) => {
                const bg = (theme?.cardBg || '').toLowerCase();
                const border = (theme?.cardBorder || '').toLowerCase();
                const accent = (theme?.accent || '').toLowerCase();

                if (bg.includes('f0f9ff') || border.includes('7dd3fc') || accent === '#0284c7') {
                  return 'bg-[#0369A1]'; // Sky dark
                }
                if (bg.includes('fff7ed') || border.includes('fb923c') || accent === '#ea580c' || accent === '#9a3412') {
                  return 'bg-[#C2410C]'; // Orange dark
                }
                if (bg.includes('f0fdfa') || bg.includes('ecfdf5') || border.includes('5eead4') || border.includes('6ee7b7') || accent === '#0d9488' || accent === '#059669') {
                  return 'bg-[#0F766E]'; // Teal / Emerald dark
                }
                if (bg.includes('fdf2f8') || bg.includes('fff1f2') || bg.includes('ffe4e6') || border.includes('f472b6') || border.includes('fda4af') || border.includes('fb7185') || accent === '#db2777' || accent === '#be185d') {
                  return 'bg-[#BE185D]'; // Pink / Rose dark
                }
                if (bg.includes('faf5ff') || bg.includes('f3e8ff') || bg.includes('ece7f4') || border.includes('c084fc') || border.includes('c4b5fd') || accent === '#9333ea' || accent === '#7e22ce' || accent === '#6b21a8') {
                  return 'bg-[#6B21A8]'; // Purple dark
                }
                if (bg.includes('fef3c7') || border.includes('fcd34d') || accent === '#d97706' || accent === '#b45309') {
                  return 'bg-[#B45309]'; // Amber dark
                }
                if (bg.includes('fed7aa')) {
                  return 'bg-[#C2410C]'; // Peach dark
                }
                return 'bg-slate-900';
              };

              const getCard3DStyles = (theme) => {
                if (theme?.cardBg && theme?.cardBorder) {
                  return {
                    bg: theme.cardBg,
                    border: theme.cardBorder,
                    hover: theme.hoverBorder || 'hover:border-slate-300 hover:border-b-slate-400'
                  };
                }

                return {
                  bg: 'bg-white',
                  border: 'border-slate-200 border-b-[4px] border-b-slate-300',
                  hover: 'hover:border-slate-300 hover:border-b-slate-400'
                };
              };

              return (selectedBook?.subject || '').toLowerCase().includes('english') && (currentClassNum <= 5) ? (
                /* Class 1, 2, 3, 4, 5 English: Units as Cards matching 10th card style */
                <div className="space-y-3 pt-1 pb-8">
                  {bookChapters.map((chap, idx) => {
                    const theme = chap.theme || {
                      cardBg: "bg-[#FDF3E3]",
                      cardBorder: "border-[#E0A96D] border-b-[4px] border-b-[#E0A96D]",
                      hoverBorder: "hover:border-[#C5894B] hover:border-b-[#C5894B]",
                      titleColor: "text-[#422206]"
                    };
                    const cardStyles = getCard3DStyles(theme);
                    const isNewUnit = idx === 0;

                    return (
                      <React.Fragment key={idx}>
                        {/* Unit Tag ABOVE the card + Edit Icon + Divider (Only once per unit) */}
                        {isNewUnit && (
                          <div className="pt-3 pb-1 first:pt-0">
                            <div className="flex items-center gap-2 px-1">
                              <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-black tracking-wide shadow-xs shrink-0 select-none">
                                {renderTextWithAsterisk(chap.unit || `Unit 1`)}
                              </span>
                              {isAdminMode && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleOpenEditCardModal(chap, idx);
                                  }}
                                  className="h-6 w-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-black flex items-center justify-center transition active:scale-90 cursor-pointer shrink-0 shadow-2xs border border-slate-200"
                                  title="Edit Unit"
                                  aria-label="Edit Unit"
                                >
                                  <Pencil className="h-3 w-3 stroke-[2.5]" />
                                </button>
                              )}
                              <div className="h-[2px] flex-1 bg-slate-200 rounded-full" />
                            </div>
                          </div>
                        )}

                        <div className="space-y-2">
                          <div
                            onClick={() => {
                              setSelectedUnit({
                                ...chap,
                                selectedSection: chap.title,
                                sectionTitle: chap.title,
                                sectionType: 'Unit'
                              });
                              setActiveMarkTab(1);
                            }}
                            role="button"
                            tabIndex={0}
                            className={`group relative min-h-[58px] rounded-[20px] ${cardStyles.bg} border ${cardStyles.border} ${cardStyles.hover} px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] select-none shadow-sm`}
                          >
                            {/* Inside Card: Only Title */}
                            <div className="min-w-0 flex-1 pr-2 flex items-start gap-2.5">
                              <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug break-words flex-1">
                                {renderTextWithAsterisk(chap.title)}
                              </span>
                            </div>

                            {/* Right Side: Clean 3D Chevron Button */}
                            <div className="flex items-center shrink-0 ml-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-2xs group-hover:text-slate-800 group-hover:scale-105 transition-all shrink-0">
                                <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              ) : (
                (((selectedBook?.subject || '').toLowerCase().includes('social') || (selectedBook?.subject || '').toLowerCase().includes('evs')) && (currentClassNum === 1 || currentClassNum === 2)) ||
                (((selectedBook?.subject || '').toLowerCase().includes('science') || (selectedBook?.subject || '').toLowerCase().includes('social')) && (currentClassNum >= 3 && currentClassNum <= 5))
              ) ? (
                /* Class 1-3 Social Science / EVS / Science: Units as Cards matching 10th card design */
                <div className="space-y-3 pt-1 pb-8">
                  {bookChapters.map((chap, idx) => {
                    const theme = chap.theme || {
                      cardBg: "bg-[#F3E8FF]",
                      cardBorder: "border-[#C084FC] border-b-[4px] border-b-[#C084FC]",
                      hoverBorder: "hover:border-[#A855F7] hover:border-b-[#A855F7]",
                      titleColor: "text-[#581C87]"
                    };
                    const cardStyles = getCard3DStyles(theme);
                    const isNewUnit = idx === 0;

                    return (
                      <React.Fragment key={idx}>
                        {/* Unit Tag ABOVE the card + Edit Icon + Divider (Only once per unit) */}
                        {isNewUnit && (
                          <div className="pt-3 pb-1 first:pt-0">
                            <div className="flex items-center gap-2 px-1">
                              <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-black tracking-wide shadow-xs shrink-0 select-none">
                                {renderTextWithAsterisk(chap.unit || `Unit 1`)}
                              </span>
                              {isAdminMode && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleOpenEditCardModal(chap, idx);
                                  }}
                                  className="h-6 w-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-black flex items-center justify-center transition active:scale-90 cursor-pointer shrink-0 shadow-2xs border border-slate-200"
                                  title="Edit Unit"
                                  aria-label="Edit Unit"
                                >
                                  <Pencil className="h-3 w-3 stroke-[2.5]" />
                                </button>
                              )}
                              <div className="h-[2px] flex-1 bg-slate-200 rounded-full" />
                            </div>
                          </div>
                        )}

                        <div className="space-y-2">
                          <div
                            onClick={() => {
                              setSelectedUnit({
                                ...chap,
                                selectedSection: chap.title,
                                sectionTitle: chap.title,
                                sectionType: 'Unit'
                              });
                              setActiveMarkTab(1);
                            }}
                            role="button"
                            tabIndex={0}
                            className={`group relative min-h-[58px] rounded-[20px] ${cardStyles.bg} border ${cardStyles.border} ${cardStyles.hover} px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] select-none shadow-sm`}
                          >
                            {/* Inside Card: Only Title */}
                            <div className="min-w-0 flex-1 pr-2 flex items-start gap-2.5">
                              <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug break-words flex-1">
                                {renderTextWithAsterisk(chap.title)}
                              </span>
                            </div>

                            {/* Right Side: Clean 3D Chevron Button */}
                            <div className="flex items-center shrink-0 ml-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-2xs group-hover:text-slate-800 group-hover:scale-105 transition-all shrink-0">
                                <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
            ) : (selectedBook?.subject || '').toLowerCase().includes('english') ? (
              /* English: Each Unit with its Prose, Poem, and Supplementary Cards matching textbook colors */
              <div className="space-y-4 pt-1 pb-8">
                {bookChapters.map((chap, idx) => {
                  const theme = chap.theme || {
                    badgeBg: "bg-slate-900",
                    badgeText: "text-white",
                    cardBg: "bg-white",
                    cardBorder: "border-slate-200 border-b-[4px] border-b-slate-200",
                    hoverBorder: "hover:border-slate-300 hover:border-b-slate-300",
                    labelColor: "text-slate-800",
                    subBadgeBg: "bg-slate-100 text-slate-700 border-slate-200",
                    chevronBg: "bg-white border border-slate-200 text-slate-400"
                  };

                  return (
                    <div key={idx} className="space-y-2 pt-2 first:pt-0">
                      {/* Unit Header: Solid Black tag + Edit Icon */}
                      <div className="flex items-center gap-2 px-1">
                        <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-black tracking-wide shadow-xs shrink-0 select-none">
                          {renderTextWithAsterisk(chap.unit)}
                        </span>
                        {isAdminMode && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenEditCardModal(chap, idx);
                            }}
                            className="h-6 w-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-black flex items-center justify-center transition active:scale-90 cursor-pointer shrink-0 shadow-2xs border border-slate-200"
                            title="Edit Unit"
                            aria-label="Edit Unit"
                          >
                            <Pencil className="h-3 w-3 stroke-[2.5]" />
                          </button>
                        )}
                      </div>

                      {/* 3 Sub-Cards: Prose, Poem, Supplementary (and optional Grammar) with 3D tactile card styling */}
                      {(() => {
                        const proseTheme = chap.proseTheme || theme;
                        const poemTheme = chap.poemTheme || theme;
                        const suppTheme = chap.supplementaryTheme || theme;
                        const gramTheme = chap.grammarTheme || theme;

                        return (
                          <div className="space-y-2.5">
                            {/* 1. Prose Card */}
                            <div
                              onClick={() => {
                                setSelectedUnit({ ...chap, selectedSection: 'prose', sectionTitle: chap.prose, sectionType: chap.proseLabel || 'Prose' });
                                setActiveMarkTab(1);
                              }}
                              role="button"
                              tabIndex={0}
                              className={`group relative min-h-[58px] rounded-[20px] ${proseTheme.cardBg} border ${proseTheme.cardBorder} ${proseTheme.hoverBorder} px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none`}
                            >
                              <div className="flex items-start gap-2.5 min-w-0 flex-1 pr-2">
                                <span className={`${proseTheme.labelColor} font-black text-[11px] sm:text-xs tracking-wide uppercase shrink-0 pt-0.5 select-none`}>
                                  {chap.proseLabel ? `${chap.proseLabel}:` : 'Prose:'}
                                </span>
                                <span className={`text-xs sm:text-sm font-bold ${proseTheme.titleColor || 'text-slate-900'} leading-snug break-words flex-1`}>
                                  {renderTextWithAsterisk(chap.prose)}
                                </span>
                              </div>
                              <div className="flex items-center shrink-0 ml-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-2xs group-hover:text-slate-800 group-hover:scale-105 transition-all shrink-0">
                                  <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                                </div>
                              </div>
                            </div>

                            {/* 2. Poem Card */}
                            <div
                              onClick={() => {
                                setSelectedUnit({ ...chap, selectedSection: 'poem', sectionTitle: chap.poem, sectionType: 'Poem' });
                                setActiveMarkTab(1);
                              }}
                              role="button"
                              tabIndex={0}
                              className={`group relative min-h-[58px] rounded-[20px] ${poemTheme.cardBg} border ${poemTheme.cardBorder} ${poemTheme.hoverBorder} px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none`}
                            >
                              <div className="flex items-start gap-2.5 min-w-0 flex-1 pr-2">
                                <span className={`${poemTheme.labelColor} font-black text-[11px] sm:text-xs tracking-wide uppercase shrink-0 pt-0.5 select-none`}>
                                  {chap.hasPoemAsterisk ? <span>Poem<span className="text-red-500 font-black ml-0.5">*</span>:</span> : 'Poem:'}
                                </span>
                                <span className={`text-xs sm:text-sm font-bold ${poemTheme.titleColor || 'text-slate-900'} leading-snug break-words flex-1`}>
                                  {renderTextWithAsterisk(chap.poem)}
                                </span>
                              </div>
                              <div className="flex items-center shrink-0 ml-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-2xs group-hover:text-slate-800 group-hover:scale-105 transition-all shrink-0">
                                  <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                                </div>
                              </div>
                            </div>

                            {/* 3. Supplementary Card */}
                            <div
                              onClick={() => {
                                setSelectedUnit({ ...chap, selectedSection: 'supplementary', sectionTitle: chap.supplementary, sectionType: 'Supplementary' });
                                setActiveMarkTab(1);
                              }}
                              role="button"
                              tabIndex={0}
                              className={`group relative min-h-[58px] rounded-[20px] ${suppTheme.cardBg} border ${suppTheme.cardBorder} ${suppTheme.hoverBorder} px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none`}
                            >
                              <div className="flex items-start gap-2.5 min-w-0 flex-1 pr-2">
                                <span className={`${suppTheme.labelColor} font-black text-[11px] sm:text-xs tracking-wide uppercase shrink-0 pt-0.5 select-none`}>
                                  Supplementary:
                                </span>
                                <span className={`text-xs sm:text-sm font-bold ${suppTheme.titleColor || 'text-slate-900'} leading-snug break-words flex-1`}>
                                  {renderTextWithAsterisk(chap.supplementary)}
                                </span>
                              </div>
                              <div className="flex items-center shrink-0 ml-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-2xs group-hover:text-slate-800 group-hover:scale-105 transition-all shrink-0">
                                  <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                                </div>
                              </div>
                            </div>

                            {/* 4. Grammar Card (Optional for custom cards, default for built-in units) */}
                            {((chap.grammar !== undefined && chap.grammar !== '') || (chap.grammar === undefined)) && (
                              <div
                                onClick={() => {
                                  setSelectedUnit({ ...chap, selectedSection: 'grammar', sectionTitle: chap.grammar || 'Grammar Section', sectionType: 'Grammar' });
                                  setActiveMarkTab(1);
                                }}
                                role="button"
                                tabIndex={0}
                                className={`group relative min-h-[58px] rounded-[20px] ${gramTheme.cardBg} border ${gramTheme.cardBorder} ${gramTheme.hoverBorder} px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none`}
                              >
                                <div className="flex items-start gap-2.5 min-w-0 flex-1 pr-2">
                                  <span className={`${gramTheme.labelColor} font-black text-[11px] sm:text-xs tracking-wide uppercase shrink-0 pt-0.5 select-none`}>
                                    Grammar:
                                  </span>
                                  <span className={`text-xs sm:text-sm font-bold ${gramTheme.titleColor || 'text-slate-900'} leading-snug break-words flex-1`}>
                                    {renderTextWithAsterisk(chap.grammar || 'Grammar Section')}
                                  </span>
                                </div>
                                <div className="flex items-center shrink-0 ml-2">
                                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-2xs group-hover:text-slate-800 group-hover:scale-105 transition-all shrink-0">
                                    <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  );
                })}
              </div>
            ) : (selectedBook?.subject || '').toLowerCase().includes('math') ? (
              /* Mathematics: 8 Chapter Cards with right side arrow toggling sub-chapters list */
              <div className="space-y-3 pt-1 pb-8">
                {bookChapters.map((chap, idx) => {
                  const isExpanded = Boolean(expandedMathChapters[idx]);

                  return (
                    <div key={idx} className="space-y-2">
                      {/* Chapter Tag ABOVE the card + Edit Icon */}
                      <div className="flex items-center gap-2 px-1">
                        <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-black tracking-wide shadow-xs shrink-0 select-none">
                          {renderTextWithAsterisk(chap.unit || `Chapter ${idx + 1}`)}
                        </span>
                        {isAdminMode && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenEditCardModal(chap, idx);
                            }}
                            className="h-6 w-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-black flex items-center justify-center transition active:scale-90 cursor-pointer shrink-0 shadow-2xs border border-slate-200"
                            title="Edit Chapter"
                            aria-label="Edit Chapter"
                          >
                            <Pencil className="h-3 w-3 stroke-[2.5]" />
                          </button>
                        )}
                      </div>

                      {/* Main Chapter Card BELOW the tag */}
                      {(() => {
                        const cardStyles = getCard3DStyles(chap.theme);
                        return (
                          <div
                            onClick={() => {
                              // Click chapter card goes directly to exercise & example pages
                              setSelectedUnit(chap);
                              setMathTab('examples');
                              setActiveMarkTab(1);
                            }}
                            role="button"
                            tabIndex={0}
                            className={`group relative min-h-[58px] rounded-[20px] ${cardStyles.bg} border ${cardStyles.border} ${cardStyles.hover} px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none`}
                          >
                            <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                              <div className="flex-1 min-w-0 flex items-start gap-2.5">
                                <span className={`text-xs sm:text-sm font-bold ${chap.theme?.titleColor || 'text-slate-900'} leading-snug break-words flex-1`}>
                                  {renderTextWithAsterisk(chap.title)}
                                </span>
                              </div>
                            </div>

                        {/* Right Side: circular chevron */}
                        <div className="flex items-center shrink-0 ml-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-2xs group-hover:text-slate-800 group-hover:scale-105 transition-all shrink-0">
                            <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                      {/* Sub-chapters list (1.1, 1.2...): Shown normally, no need to press arrow */}
                      {chap.subtopics && chap.subtopics.length > 0 && (
                        <div className="pl-3 sm:pl-4 space-y-2 pt-1 pb-1 border-l-2 border-slate-200 ml-4">
                          {(chap.subtopics || []).map((sub, sIdx) => {
                            const subPal = CARD_COLOR_PALETTES.find(p => p.id === (sub.paletteId || sub.cardPaletteId));
                            const subTheme = subPal ? {
                              cardBg: subPal.cardBg,
                              cardBorder: subPal.cardBorder,
                              hoverBorder: subPal.hoverBorder,
                              labelColor: subPal.titleColor,
                              titleColor: subPal.titleColor,
                              chevronBg: 'bg-white border border-slate-200 text-slate-500 shadow-2xs'
                            } : (sub.theme && sub.theme.cardBg && sub.theme.cardBg !== 'bg-white' && sub.theme.cardBg !== 'bg-[#F1F5F9]' ? sub.theme : {
                              cardBg: "bg-[#F1F5F9]",
                              cardBorder: "border-slate-300 border-b-[4px] border-b-slate-300",
                              hoverBorder: "hover:border-slate-400 hover:border-b-slate-400",
                              labelColor: "text-slate-900",
                              titleColor: "text-slate-900",
                              chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
                            });
                            const subCardStyles = getCard3DStyles(subTheme);

                            return (
                              <div
                                key={sIdx}
                                onClick={() => {
                                  setSelectedUnit({
                                    ...chap,
                                    selectedSection: sub.code,
                                    sectionTitle: sub.title,
                                    sectionType: `Topic ${sub.code}`
                                  });
                                  setMathTab('examples');
                                  setActiveMarkTab(1);
                                }}
                                role="button"
                                tabIndex={0}
                                className={`group relative min-h-[58px] sm:min-h-[62px] rounded-[20px] ${subCardStyles.bg} border ${subCardStyles.border} ${subCardStyles.hover} px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none`}
                              >
                                {/* Left Side: Code + Title */}
                                <div className="flex items-start gap-2.5 min-w-0 flex-1 pr-2">
                                  <span className={`${subTheme.labelColor || 'text-slate-900'} font-black text-xs sm:text-[13px] shrink-0 pt-0.5 select-none`}>
                                    {sub.code}:
                                  </span>
                                  <div className="min-w-0 flex-1">
                                    <span className={`text-xs sm:text-sm font-bold ${subTheme.titleColor || 'text-slate-900'} leading-snug break-words block`}>
                                      {renderTextWithAsterisk(sub.title)}
                                    </span>
                                  </div>
                                </div>

                                {/* Right Side: circular chevron */}
                                <div className="flex items-center shrink-0 ml-2">
                                  <div className={`flex h-7 w-7 items-center justify-center rounded-full ${subTheme.chevronBg || 'bg-white border border-slate-200 text-slate-500 shadow-2xs'} group-hover:scale-105 transition-all shrink-0`}>
                                    <ChevronRight className="h-3.5 w-3.5 stroke-[2.5]" />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (selectedBook?.subject || '').toLowerCase().includes('tamil') ? (
              /* Tamil: Each Iyal with its authentic lessons matching textbook photos */
              <div className="space-y-4 pt-1 pb-8">
                {bookChapters.map((chap, idx) => {
                  const theme = chap.theme || {
                    badgeBg: "bg-slate-900",
                    badgeText: "text-white",
                    cardBg: "bg-[#FFF1F2]",
                    cardBorder: "border-[#FDA4AF] border-b-[4px] border-b-[#FDA4AF]",
                    hoverBorder: "hover:border-[#FB7185] hover:border-b-[#FB7185]",
                    labelColor: "text-[#BE185D]",
                    chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
                  };

                  const hasSubtopics = chap.subtopics && chap.subtopics.length > 0;
                  const cardStyles = getCard3DStyles(theme);

                  if (!hasSubtopics) {
                    const isNewUnit = idx === 0;
                    return (
                      <React.Fragment key={idx}>
                        {isNewUnit && (
                          <div className="pt-3 pb-1 first:pt-0">
                            <div className="flex items-center gap-2 px-1">
                              <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-black tracking-wide shadow-xs shrink-0 select-none">
                                {renderTextWithAsterisk(chap.unit || `இயல் 1`)}
                              </span>
                              {isAdminMode && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleOpenEditCardModal(chap, idx);
                                  }}
                                  className="h-6 w-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-black flex items-center justify-center transition active:scale-90 cursor-pointer shrink-0 shadow-2xs border border-slate-200"
                                  title="Edit Unit"
                                  aria-label="Edit Unit"
                                >
                                  <Pencil className="h-3 w-3 stroke-[2.5]" />
                                </button>
                              )}
                              <div className="h-[2px] flex-1 bg-slate-200 rounded-full" />
                            </div>
                          </div>
                        )}

                        <div className="space-y-2">
                          <div
                            onClick={() => {
                              setSelectedUnit({
                                ...chap,
                                selectedSection: chap.title,
                                sectionTitle: chap.title,
                                sectionType: 'பாடம் '
                              });
                              setActiveMarkTab(1);
                            }}
                            role="button"
                            tabIndex={0}
                            className={`group relative min-h-[58px] rounded-[20px] ${cardStyles.bg} border ${cardStyles.border} ${cardStyles.hover} px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] select-none shadow-sm`}
                          >
                            {/* Inside Card: Only Title */}
                            <div className="min-w-0 flex-1 pr-2 flex items-start gap-2.5">
                              <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug break-words flex-1">
                                {renderTextWithAsterisk(chap.title)}
                              </span>
                            </div>

                            {/* Right Side: Clean 3D Chevron Button */}
                            <div className="flex items-center shrink-0 ml-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-2xs group-hover:text-slate-800 group-hover:scale-105 transition-all shrink-0">
                                <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  }

                  return (
                    <div key={idx} className="space-y-2 pt-2 first:pt-0">
                      {/* Iyal Header: Black Unit Tag + Edit Icon + Magenta Title + Theme Name */}
                      <div className="flex items-center justify-between px-1">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-black tracking-wide shadow-xs shrink-0 select-none">
                            {renderTextWithAsterisk(chap.unit)}
                          </span>
                          {isAdminMode && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenEditCardModal(chap, idx);
                              }}
                              className="h-6 w-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-black flex items-center justify-center transition active:scale-90 cursor-pointer shrink-0 shadow-2xs border border-slate-200"
                              title="Edit Unit"
                              aria-label="Edit Unit"
                            >
                              <Pencil className="h-3 w-3 stroke-[2.5]" />
                            </button>
                          )}
                          <span className={`text-xs sm:text-[13px] font-bold ${theme.titleColor || 'text-[#DB2777]'} truncate`}>
                            {renderTextWithAsterisk(chap.title)}
                          </span>
                        </div>
                        {chap.themeName && (
                          <span className="text-[11px] sm:text-xs font-bold text-slate-500 shrink-0 ml-2">
                            {renderTextWithAsterisk(chap.themeName)}
                          </span>
                        )}
                      </div>

                      {/* Lesson 3D Cards */}
                      <div className="space-y-2.5">
                        {(chap.subtopics || []).map((sub, sIdx) => {
                          const subTheme = sub.theme || theme;
                          const subCardStyles = getCard3DStyles(subTheme);

                          return (
                            <div
                              key={sIdx}
                              onClick={() => {
                                setSelectedUnit({
                                  ...chap,
                                  selectedSection: sub.title,
                                  sectionTitle: sub.title,
                                  sectionType: sub.type || 'பாடம் '
                                });
                                setActiveMarkTab(1);
                              }}
                              role="button"
                              tabIndex={0}
                              className={`group relative min-h-[58px] rounded-[20px] ${subCardStyles.bg} border ${subCardStyles.border} ${subCardStyles.hover} px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none`}
                            >
                            {/* Left Side: Lesson Title + Red Asterisk if memory poem */}
                            <div className="flex items-start gap-2 min-w-0 flex-1 pr-2">
                              <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug break-words flex-1">
                                {renderTextWithAsterisk(sub.title)}
                                {sub.hasAsterisk && !sub.title?.includes('*') && (
                                  <span className="text-red-500 font-black ml-1 select-none text-sm leading-none" title="மனப்பாடப் பகுதி">*</span>
                                )}
                              </span>
                            </div>

                            {/* Right Side: 3D circular chevron */}
                            <div className="flex items-center shrink-0 ml-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-2xs group-hover:text-slate-800 group-hover:scale-105 transition-all shrink-0">
                                <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Non-English, Non-Math, Non-Tamil (Science, Social, etc.): 1 Unit per Row, Non-Truncated 3D Cards */
              <div className="space-y-3 pt-1 pb-8">
                {bookChapters.map((chap, idx) => {
                  const theme = chap.theme || {
                    cardBg: "bg-white",
                    cardBorder: "border-slate-200 border-b-[4px] border-b-slate-200",
                    hoverBorder: "hover:border-slate-300 hover:border-b-slate-300",
                    labelColor: "text-slate-800",
                    chevronBg: "bg-white border border-slate-200 text-slate-500 shadow-2xs"
                  };
                  const cardStyles = getCard3DStyles(theme);

                  const isNewSection = chap.section && chap.section !== bookChapters[idx - 1]?.section;
                  const isSocialScience = Boolean((selectedBook?.subject || '').toLowerCase().includes('social') || chap.section);
                  const isNewUnit = !isSocialScience && (idx === 0 || (chap.unit && chap.unit !== bookChapters[idx - 1]?.unit));

                  return (
                    <React.Fragment key={idx}>
                      {isNewSection && (
                        <div className="pt-4 pb-1.5 first:pt-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-black tracking-wide uppercase shadow-xs shrink-0 select-none">
                              {renderTextWithAsterisk(chap.section)}
                            </span>
                            {isAdminMode && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleOpenEditCardModal(chap, idx, true);
                                }}
                                className="h-6 w-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-black flex items-center justify-center transition active:scale-90 cursor-pointer shrink-0 shadow-2xs border border-slate-200"
                                title={`Edit ${chap.section || 'Unit'}`}
                                aria-label={`Edit ${chap.section || 'Unit'}`}
                              >
                                <Pencil className="h-3 w-3 stroke-[2.5]" />
                              </button>
                            )}
                            <div className="h-[2px] flex-1 bg-slate-200 rounded-full" />
                          </div>
                        </div>
                      )}

                      {/* Single Unit Tag ABOVE + Edit Icon + horizontal dividing line (Only when starting a new unit) */}
                      {isNewUnit && (
                        <div className="pt-3 pb-1 first:pt-0">
                          <div className="flex items-center gap-2 px-1">
                            <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-black tracking-wide uppercase shadow-xs shrink-0 select-none">
                              {renderTextWithAsterisk(chap.unit || `Unit 1`)}
                            </span>
                            {isAdminMode && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleOpenEditCardModal(chap, idx);
                                }}
                                className="h-6 w-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-black flex items-center justify-center transition active:scale-90 cursor-pointer shrink-0 shadow-2xs border border-slate-200"
                                title="Edit Unit"
                                aria-label="Edit Unit"
                              >
                                <Pencil className="h-3 w-3 stroke-[2.5]" />
                              </button>
                            )}
                            <div className="h-[2px] flex-1 bg-slate-200 rounded-full" />
                          </div>
                        </div>
                      )}

                      <div className="space-y-2">

                        <div
                          onClick={() => {
                            setSelectedUnit(chap);
                            setActiveMarkTab(1);
                          }}
                          role="button"
                          tabIndex={0}
                          className={`group relative min-h-[58px] rounded-[20px] ${cardStyles.bg} border ${cardStyles.border} ${cardStyles.hover} px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] select-none shadow-sm`}
                        >
                          {/* Inside Card: Only Title */}
                          <div className="min-w-0 flex-1 pr-2 flex items-start gap-2.5">
                            <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug break-words flex-1">
                              {renderTextWithAsterisk(chap.title)}
                            </span>
                          </div>

                          {/* Right Side: Clean 3D Chevron Button */}
                          <div className="flex items-center shrink-0 ml-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-2xs group-hover:text-slate-800 group-hover:scale-105 transition-all shrink-0">
                              <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Additional Unit Titles */}
                      {chap.subtopics && chap.subtopics.length > 0 && (
                        <div className="space-y-2 pt-1">
                          {(chap.subtopics || []).map((sub, sIdx) => {
                            const subTheme = sub.theme || theme;
                            const subCardStyles = getCard3DStyles(subTheme);

                            return (
                              <div
                                key={sIdx}
                                onClick={() => {
                                  setSelectedUnit({
                                    ...chap,
                                    selectedSection: sub.title,
                                    sectionTitle: sub.title,
                                    sectionType: 'Unit'
                                  });
                                  setActiveMarkTab(1);
                                }}
                                role="button"
                                tabIndex={0}
                                className={`group relative min-h-[58px] rounded-[20px] ${subCardStyles.bg} border ${subCardStyles.border} ${subCardStyles.hover} px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] select-none shadow-sm`}
                              >
                                {/* Inside Card: Only Title */}
                                <div className="min-w-0 flex-1 pr-2 flex items-start gap-2.5">
                                  <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug break-words flex-1">
                                    {renderTextWithAsterisk(sub.title)}
                                  </span>
                                </div>

                                {/* Right Side: Clean 3D Chevron Button */}
                                <div className="flex items-center shrink-0 ml-2">
                                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-2xs group-hover:text-slate-800 group-hover:scale-105 transition-all shrink-0">
                                    <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            );
          })()}

          {/* Add Card Button below the last card (Normal White 3D Card Design, Admin Only) */}
          {isAdminMode && (
            <div className="pt-2 pb-10">
              <div
                onClick={handleOpenAddCardModal}
                role="button"
                tabIndex={0}
                className="group relative min-h-[58px] rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-300 hover:border-slate-300 hover:border-b-slate-400 px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none"
              >
                {/* Left Side: Circular + Badge + Title & Subtitle */}
                <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-900 text-white font-black text-xs shrink-0 select-none shadow-sm group-hover:scale-105 transition-transform">
                    <Plus className="h-4 w-4 stroke-[3]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      + Add Card
                    </span>
                    <p className="text-[10.5px] text-slate-500 font-semibold truncate mt-0.5">
                      Units, Tamil, English, Maths, Science, Social S...
                    </p>
                  </div>
                </div>

                {/* Right Side: Clean 3D circular chevron */}
                <div className="flex items-center shrink-0 ml-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-2xs group-hover:text-slate-800 group-hover:scale-105 transition-all shrink-0">
                    <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </div>
          )}

          </main>
        )}

        {/* ======================================================== */}
        {/* SCREEN 4: UNIT TOPIC, MARKS SELECTOR & QUESTION CATEGORIES */}
        {/* ======================================================== */}
        {selectedClass && selectedBook && selectedUnit && (
          (selectedBook?.subject || '').toLowerCase().includes('english') && (currentClassNum === 1 || currentClassNum === 2) ? (
            /* Class 1 English Topics View (Screen 4) */
            (() => {
              const theme = selectedUnit.theme || {
                cardBg: "bg-[#FDF3E3]",
                cardBorder: "border-[#E0A96D] border-b-[4px] border-b-[#B87A38]",
                hoverBorder: "hover:border-[#965A1E] hover:border-b-[#965A1E]",
                titleColor: "text-[#422206]",
                chevronBg: "bg-white border border-[#E0A96D] text-[#8C531B]"
              };

              const topicsOverrideKey = `${selectedBook?.id || selectedBook?.subject || 'book'}_${selectedUnit?.id || selectedUnit?.unitNum || 1}_topics`;
              const currentTopics = customExerciseOverrides[topicsOverrideKey] || (selectedUnit.subtopics || [
                { letter: "1", title: "Look and Say", desc: "Vocabulary & Word Recognition" },
                { letter: "2", title: "Let Us Sing", desc: "Rhymes & Singing" },
                { letter: "3", title: "Let Us Learn", desc: "Story Time & Reading" },
                { letter: "4", title: "Let Us Practice", desc: "Phonics & Tracing" }
              ]);

              return (
                <main className="flex-1 overflow-y-auto px-5 pt-4 pb-28 space-y-3 animate-fade-in select-none">
                  {currentTopics.map((topic, tIdx) => {
                    const pal = CARD_COLOR_PALETTES.find(p => p.id === (topic.paletteId || topic.cardPaletteId));
                    const cardBgClass = pal ? `${pal.cardBg} border ${pal.cardBorder} ${pal.hoverBorder}` : 'bg-[#FDF3E3] border border-[#E0A96D] border-b-[4px] border-b-[#B87A38] hover:border-[#965A1E] hover:border-b-[#965A1E] hover:bg-[#FAEAD2]';
                    const titleColorClass = pal ? pal.titleColor : 'text-[#422206]';
                    const badgeBorderClass = pal ? `border-[${pal.hexPrimary}] text-[${pal.hexPrimary}]` : 'border-[#8C531B] text-[#8C531B]';

                    return (
                      <div
                        key={tIdx}
                        role="button"
                        tabIndex={0}
                        className={`group relative min-h-[64px] rounded-[22px] ${cardBgClass} px-4 py-3.5 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none`}
                      >
                        {/* Left: Number circle + Title & Subtitle */}
                        <div className="flex items-center gap-3.5 min-w-0 flex-1 pr-2">
                          <div className={`flex items-center justify-center h-9 w-9 rounded-full border-2 ${badgeBorderClass} bg-white font-black text-sm shrink-0 select-none shadow-2xs`}>
                            {topic.letter || tIdx + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className={`text-sm sm:text-base font-black ${titleColorClass} tracking-tight leading-snug break-words block`}>
                              {topic.title}
                            </span>
                            {topic.desc && (
                              <span className="text-xs font-bold text-slate-500 leading-snug mt-0.5 block truncate">
                                {topic.desc}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Right: Chevron button */}
                        <div className="flex items-center shrink-0 ml-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#E0A96D] text-[#8C531B] shadow-2xs group-hover:scale-105 group-hover:border-[#965A1E] group-hover:bg-[#FDF3E3] transition-all shrink-0">
                            <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Edit Topics Card below last card for Admin */}
                  {isAdminMode && (
                    <div className="pt-2 pb-8">
                      <div
                        onClick={() => handleOpenEditTopicsModal(topicsOverrideKey, currentTopics.map((t, idx) => ({ letter: t.letter || String(idx + 1), title: t.title, paletteId: t.paletteId })))}
                        role="button"
                        tabIndex={0}
                        className="group relative min-h-[58px] rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-300 hover:border-slate-300 hover:border-b-slate-400 px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none"
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-900 text-white font-black text-xs shrink-0 select-none shadow-sm group-hover:scale-105 transition-transform">
                            <Pencil className="h-4 w-4 stroke-[2.5]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-bold text-slate-800">
                              Edit Topics
                            </div>
                            <div className="text-[11px] font-semibold text-slate-400">
                              Add or edit topics and numbering
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center shrink-0 ml-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-slate-900 group-hover:text-white transition-all">
                            <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </main>
              );
            })()
          ) : (((selectedBook?.subject || '').toLowerCase().includes('social') || (selectedBook?.subject || '').toLowerCase().includes('evs')) && (currentClassNum === 1 || currentClassNum === 2)) ? (
            /* Class 1 Social Science / EVS Topics View (Screen 4) */
            (() => {
              const theme = selectedUnit.theme || {
                cardBg: "bg-[#F3E8FF]",
                cardBorder: "border-[#C084FC] border-b-[4px] border-b-[#9333EA]",
                hoverBorder: "hover:border-[#7E22CE] hover:border-b-[#7E22CE]",
                titleColor: "text-[#581C87]",
                badgeBorder: "border-[#7E22CE]",
                badgeText: "text-[#7E22CE]",
                chevronBorder: "border-[#C084FC]",
                chevronText: "text-[#7E22CE]"
              };

              const topicsOverrideKey = `${selectedBook?.id || selectedBook?.subject || 'book'}_${selectedUnit?.id || selectedUnit?.unitNum || 1}_topics`;
              const currentTopics = customExerciseOverrides[topicsOverrideKey] || (selectedUnit.subtopics || [
                { letter: "1", title: "Look and Learn (பார்த்து அறிவோம்)", desc: "Observation & Discovery" },
                { letter: "2", title: "Let Us Explore (ஆராய்ந்து அறிவோம்)", desc: "Interactive Activity & Facts" },
                { letter: "3", title: "Let Us Practice (பயிற்சி செய்வோம்)", desc: "Exercises & Evaluation" }
              ]);

              return (
                <main className="flex-1 overflow-y-auto px-5 pt-4 pb-28 space-y-3 animate-fade-in select-none">
                  {currentTopics.map((topic, tIdx) => {
                    const pal = CARD_COLOR_PALETTES.find(p => p.id === (topic.paletteId || topic.cardPaletteId));
                    const cardBgClass = pal ? `${pal.cardBg} border ${pal.cardBorder} ${pal.hoverBorder}` : `${theme.cardBg || 'bg-[#F3E8FF]'} border ${theme.cardBorder || 'border-[#C084FC] border-b-[4px] border-b-[#9333EA]'} ${theme.hoverBorder || 'hover:border-[#7E22CE] hover:border-b-[#7E22CE]'}`;
                    const titleColorClass = pal ? pal.titleColor : (theme.titleColor || 'text-[#581C87]');
                    const badgeBorderClass = pal ? `border-[${pal.hexPrimary}] text-[${pal.hexPrimary}]` : `${theme.badgeBorder || 'border-[#7E22CE]'} ${theme.badgeText || 'text-[#7E22CE]'}`;

                    return (
                      <div
                        key={tIdx}
                        role="button"
                        tabIndex={0}
                        className={`group relative min-h-[64px] rounded-[22px] ${cardBgClass} px-4 py-3.5 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none`}
                      >
                        {/* Left: Number circle + Title & Subtitle */}
                        <div className="flex items-center gap-3.5 min-w-0 flex-1 pr-2">
                          <div className={`flex items-center justify-center h-9 w-9 rounded-full border-2 ${badgeBorderClass} bg-white font-black text-sm shrink-0 select-none shadow-2xs`}>
                            {topic.letter || tIdx + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className={`text-sm sm:text-base font-black ${titleColorClass} tracking-tight leading-snug break-words block`}>
                              {topic.title}
                            </span>
                            {topic.desc && (
                              <span className={`text-xs font-bold text-slate-500 leading-snug mt-0.5 block truncate`}>
                                {topic.desc}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Right: Chevron button */}
                        <div className="flex items-center shrink-0 ml-2">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-white border ${theme.chevronBorder || 'border-[#C084FC]'} ${theme.chevronText || 'text-[#7E22CE]'} shadow-2xs group-hover:scale-105 transition-all shrink-0`}>
                            <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Edit Topics Card below last card for Admin */}
                  {isAdminMode && (
                    <div className="pt-2 pb-8">
                      <div
                        onClick={() => handleOpenEditTopicsModal(topicsOverrideKey, currentTopics.map((t, idx) => ({ letter: t.letter || String(idx + 1), title: t.title, paletteId: t.paletteId })))}
                        role="button"
                        tabIndex={0}
                        className="group relative min-h-[58px] rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-300 hover:border-slate-300 hover:border-b-slate-400 px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none"
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-900 text-white font-black text-xs shrink-0 select-none shadow-sm group-hover:scale-105 transition-transform">
                            <Pencil className="h-4 w-4 stroke-[2.5]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-bold text-slate-800">
                              Edit Topics
                            </div>
                            <div className="text-[11px] font-semibold text-slate-400">
                              Add or edit topics and numbering
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center shrink-0 ml-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-slate-900 group-hover:text-white transition-all">
                            <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </main>
              );
            })()
          ) : (selectedBook?.subject || '').toLowerCase().includes('english') && (selectedUnit?.prose || currentClassNum >= 8) ? (
            /* English: Authentic Textual Exercise Cards Matching Textbook (A, B, C, D...) */
            (() => {
              const unitNum = selectedUnit.unitNum || parseInt((selectedUnit.unit || '').replace(/\D+/g, ''), 10) || 1;
              const sectionType = selectedUnit.selectedSection || selectedUnit.sectionType || 'prose';
              const exercises = getEnglishExercises(unitNum, sectionType);
              const overrideKey = `${selectedBook?.id || selectedBook?.subject || 'book'}_${selectedUnit?.id || unitNum}_${sectionType}`;
              const currentExerciseOptions = customExerciseOverrides[overrideKey] || exercises.options || [];
              const theme = selectedUnit.theme || {
                cardBg: "bg-[#FDE8E9]",
                cardBorder: "border-[#FDA4AF] border-b-[4px] border-b-[#FDA4AF]",
                hoverBorder: "hover:border-[#FB7185] hover:border-b-[#FB7185]",
                labelColor: "text-[#BE123C]",
                titleColor: "text-slate-900"
              };

              if (selectedExerciseOption) {
                return (
                  <main className="flex-1 overflow-y-auto px-4 sm:px-5 pt-3 pb-28 space-y-3.5 animate-fade-in select-none">
                    {/* Topic Heading: No outline box, no underline on letter, second line indented below sentence */}
                    <div className="w-full px-1 pt-1 pb-1">
                      <div className="text-xs sm:text-sm font-black tracking-tight leading-relaxed text-[#78350f]">
                        {(() => {
                          const letter = (selectedExerciseOption.letter || '').trim();
                          let rawTitle = (selectedExerciseOption.title || '').trim();
                          
                          // Strip leading letter like "A.", "A:", "A ", "A" only when followed by a non-letter or at word boundary
                          rawTitle = rawTitle.replace(new RegExp(`^${letter}(?:[.:\\-\\s]+|\\s+)`, 'i'), '').trim();

                          return (
                            <div className="flex items-start gap-1.5 w-full">
                              <span className="shrink-0 font-black">{letter}.</span>
                              <span className="underline underline-offset-[5px] decoration-[#78350f] decoration-1.5 min-w-0 flex-1 leading-relaxed">
                                {rawTitle}
                              </span>
                            </div>
                          );
                        })()}
                      </div>
                    </div>

                    {/* Table View: Drag-and-Drop Chart Game without extra card boxes */}
                    {selectedExerciseOption.isTable ? (
                      (() => {
                        const allDraggableWords = [
                          { id: "0-verb", word: "exhaust", correctCell: "0-verb" },
                          { id: "0-adjective", word: "exhausted", correctCell: "0-adjective" },
                          { id: "0-adverb", word: "exhaustingly", correctCell: "0-adverb" },
                          { id: "1-noun", word: "width", correctCell: "1-noun" },
                          { id: "1-adjective", word: "wide", correctCell: "1-adjective" },
                          { id: "1-adverb", word: "widely", correctCell: "1-adverb" },
                          { id: "2-noun", word: "madness", correctCell: "2-noun" },
                          { id: "2-verb", word: "madden", correctCell: "2-verb" },
                          { id: "2-adverb", word: "madly", correctCell: "2-adverb" },
                          { id: "3-noun", word: "perfection", correctCell: "3-noun" },
                          { id: "3-verb", word: "perfect", correctCell: "3-verb" },
                          { id: "3-adjective", word: "perfect", correctCell: "3-adjective" },
                        ];

                        const placedValues = Object.values(gamePlacedWords);
                        const availablePool = allDraggableWords.filter(
                          (item) => !placedValues.includes(item.id)
                        );

                        const handleDropOrPlace = (cellKey) => {
                          if (activeSelectedWord) {
                            setGamePlacedWords((prev) => {
                              const next = { ...prev };
                              // If this word was previously in another box, remove it from old box
                              Object.keys(next).forEach((k) => {
                                if (next[k] === activeSelectedWord.id) {
                                  delete next[k];
                                }
                              });
                              next[cellKey] = activeSelectedWord.id;
                              return next;
                            });
                            setActiveSelectedWord(null);
                          }
                        };

                        const handleMoveWordToCell = (wordId, targetCellKey, fromCellKey = null) => {
                          setGamePlacedWords((prev) => {
                            const next = { ...prev };
                            if (fromCellKey) {
                              delete next[fromCellKey];
                            }
                            // Also clear any other cell that might hold this word
                            Object.keys(next).forEach((k) => {
                              if (next[k] === wordId) {
                                delete next[k];
                              }
                            });
                            next[targetCellKey] = wordId;
                            return next;
                          });
                        };

                        const handleRemovePlaced = (cellKey) => {
                          setGamePlacedWords((prev) => {
                            const next = { ...prev };
                            delete next[cellKey];
                            return next;
                          });
                        };

                        return (
                          <div className="space-y-4 pt-1">
                            {/* 1. Pure Table with drop slots & given words on a single line */}
                            <div className="overflow-x-auto rounded-2xl border-2 border-[#831843]/30 shadow-sm bg-white">
                              <table className="w-full text-xs sm:text-sm text-center border-collapse">
                                <thead>
                                  <tr className="bg-[#831843] text-white">
                                    {selectedExerciseOption.tableHeaders.map((head, hIdx) => (
                                      <th 
                                        key={hIdx} 
                                        className="py-3 px-3 sm:px-4 font-black tracking-wide border-r border-[#9d174d] last:border-r-0 whitespace-nowrap text-center"
                                      >
                                        {head}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-[#fbcfe8]">
                                  {selectedExerciseOption.tableRows.map((row, rIdx) => {
                                    const columns = ["noun", "verb", "adjective", "adverb"];
                                    return (
                                      <tr key={rIdx} className="bg-[#fdf2f8]/60 hover:bg-[#fce7f3]/40 transition-colors">
                                        {columns.map((colKey, cIdx) => {
                                          const isGiven = row.givenColumn === colKey;
                                          const cellKey = `${rIdx}-${colKey}`;
                                          const placedWordId = gamePlacedWords[cellKey];
                                          const placedWordObj = allDraggableWords.find((w) => w.id === placedWordId);
                                          const isCorrect = placedWordObj && placedWordObj.correctCell === cellKey;
                                          const isCellSelected = activeSelectedWord?.sourceCell === cellKey;

                                          if (isGiven) {
                                            return (
                                              <td 
                                                key={cIdx} 
                                                className="py-3 px-3 sm:px-4 text-center border-r border-[#fbcfe8] last:border-r-0 whitespace-nowrap"
                                              >
                                                <span className="font-black text-[#831843] whitespace-nowrap inline-block">
                                                  {row[colKey]}
                                                </span>
                                              </td>
                                            );
                                          }

                                          return (
                                            <td 
                                              key={cIdx}
                                              onDragOver={(e) => e.preventDefault()}
                                              onDrop={(e) => {
                                                e.preventDefault();
                                                try {
                                                  const payloadStr = e.dataTransfer.getData("application/json") || e.dataTransfer.getData("text/plain");
                                                  const payload = payloadStr.startsWith("{") ? JSON.parse(payloadStr) : { id: payloadStr, fromCell: null };
                                                  if (payload.id) {
                                                    handleMoveWordToCell(payload.id, cellKey, payload.fromCell);
                                                  }
                                                } catch (err) {
                                                  const wordId = e.dataTransfer.getData("text/plain");
                                                  if (wordId) handleMoveWordToCell(wordId, cellKey);
                                                }
                                              }}
                                              onClick={() => {
                                                // If already has placed word and no other word is selected, select it to move or tap to unplace
                                                if (placedWordObj) {
                                                  if (activeSelectedWord && activeSelectedWord.id !== placedWordObj.id) {
                                                    // Swap or move selected word into this cell
                                                    handleDropOrPlace(cellKey);
                                                  } else if (isCellSelected) {
                                                    // Deselect or remove
                                                    handleRemovePlaced(cellKey);
                                                    setActiveSelectedWord(null);
                                                  } else {
                                                    // Select this placed word to move to another cell
                                                    setActiveSelectedWord({ ...placedWordObj, sourceCell: cellKey });
                                                  }
                                                } else if (activeSelectedWord) {
                                                  // Move selected word from bank or other cell into this cell
                                                  handleDropOrPlace(cellKey);
                                                }
                                              }}
                                              className={`py-2 px-2 sm:px-3 text-center border-r border-[#fbcfe8] last:border-r-0 whitespace-nowrap cursor-pointer transition-all ${
                                                !placedWordObj && activeSelectedWord ? 'bg-amber-100/60' : ''
                                              }`}
                                            >
                                              {placedWordObj ? (
                                                /* 3D Tactile Card in Box - Draggable to another box */
                                                <div 
                                                  draggable
                                                  onDragStart={(e) => {
                                                    const payload = JSON.stringify({ id: placedWordObj.id, fromCell: cellKey });
                                                    e.dataTransfer.setData("application/json", payload);
                                                    e.dataTransfer.setData("text/plain", placedWordObj.id);
                                                  }}
                                                  className={`inline-flex items-center justify-center px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all select-none cursor-grab active:cursor-grabbing border-b-[3px] active:translate-y-[2px] active:border-b-[1px] ${
                                                    isCellSelected
                                                      ? 'bg-amber-300 text-amber-950 border border-amber-400 border-b-[3px] border-b-amber-500 scale-105'
                                                      : isCorrect 
                                                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 border-b-[3px] border-b-emerald-400' 
                                                      : 'bg-rose-50 text-rose-800 border border-rose-300 border-b-[3px] border-b-rose-400'
                                                  }`}
                                                  title="Drag to move to another box, or tap to move/remove"
                                                >
                                                  <span className="whitespace-nowrap">{placedWordObj.word}</span>
                                                </div>
                                              ) : (
                                                <div className="h-8 min-w-[70px] rounded-xl flex items-center justify-center select-none" />
                                              )}
                                            </td>
                                          );
                                        })}
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>

                            {/* 2. Floating Words Below Table (No Box), Direct Reset Icon */}
                            <div className="pt-2 select-none space-y-2.5">
                              <div className="flex items-center justify-between px-1">
                                <span className="text-xs font-bold text-slate-500">
                                  Drag or tap to place into chart:
                                </span>
                                {placedValues.length > 0 && (
                                  <button
                                    onClick={() => {
                                      setGamePlacedWords({});
                                      setActiveSelectedWord(null);
                                    }}
                                    title="Reset All"
                                    className="p-1 text-[#be123c] hover:opacity-80 active:scale-90 transition-all cursor-pointer flex items-center justify-center"
                                  >
                                    <RotateCcw className="h-4 w-4 stroke-[2.5]" />
                                  </button>
                                )}
                              </div>

                              {/* Word chips floating directly with clean slate hover (no red hover) */}
                              <div className="flex flex-wrap items-center justify-center gap-2">
                                {availablePool.map((item) => {
                                  const isSelected = activeSelectedWord?.id === item.id;
                                  return (
                                    <div
                                      key={item.id}
                                      draggable
                                      onDragStart={(e) => {
                                        e.dataTransfer.setData("text/plain", item.id);
                                      }}
                                      onClick={() => {
                                        setActiveSelectedWord(isSelected ? null : item);
                                      }}
                                      role="button"
                                      tabIndex={0}
                                      className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold cursor-grab active:cursor-grabbing transition-all select-none border-b-[3px] active:translate-y-[2px] active:border-b-[1px] shadow-2xs whitespace-nowrap ${
                                        isSelected 
                                          ? 'bg-amber-300 text-amber-950 border border-amber-400 border-b-[3px] border-b-amber-500 scale-105' 
                                          : 'bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                                      }`}
                                    >
                                      {item.word}
                                    </div>
                                  );
                                })}

                                {availablePool.length === 0 && (
                                  (() => {
                                    // Check if all placed words are in their correct cells
                                    const allCorrect = allDraggableWords.every(
                                      (w) => gamePlacedWords[w.correctCell] === w.id
                                    );

                                    return allCorrect ? (
                                      /* 3D Success Card */
                                      <div className="w-full text-center py-2.5 px-4 text-xs sm:text-sm font-black text-emerald-800 bg-[#E7F5EB] rounded-2xl border border-emerald-300 border-b-[4px] border-b-emerald-400 shadow-sm transition-all select-none">
                                        ðŸŽ‰ Perfect! All words are placed correctly!
                                      </div>
                                    ) : (
                                      /* 3D Wrong Message Card */
                                      <div className="w-full text-center py-2.5 px-4 text-xs sm:text-sm font-black text-rose-800 bg-[#FDE8E9] rounded-2xl border border-rose-300 border-b-[4px] border-b-rose-400 shadow-sm transition-all select-none">
                                        âŒ Some words are in the wrong columns! Move them to fix.
                                      </div>
                                    );
                                  })()
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })()
                    ) : selectedExerciseOption.isSentenceGame ? (
                      /* Interactive Whole Sentence Formation Game (Exercise D) */
                      <div className="space-y-3.5 pt-1">
                        {(selectedExerciseOption.questions || []).map((item, qIdx) => {
                          const allChips = (item.scrambledWords || []).map((word, wIdx) => ({
                            id: `q${qIdx}_w${wIdx}_${word}`,
                            text: word
                          }));
                          const placedChips = selectedSentenceGameAnswers[qIdx] || [];
                          const placedIds = new Set(placedChips.map((c) => c.id));
                          const availableChips = allChips.filter((c) => !placedIds.has(c.id));

                          const currentSentence = placedChips.map((c) => c.text).join(' ');
                          const targetSentence = (item.targetWords || []).join(' ') || (item.a ? item.a.trim() : '');
                          const targetCount = item.targetWords?.length || (targetSentence ? targetSentence.split(' ').length : 0);

                          const isComplete = placedChips.length >= targetCount && targetCount > 0;
                          const isCorrect = isComplete && currentSentence === targetSentence;

                          return (
                            <div 
                              key={qIdx}
                              className="rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-200 p-4 space-y-2.5 shadow-sm transition-all"
                            >
                              {/* Question Heading */}
                              <div className="flex items-start justify-between gap-3">
                                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug break-words">
                                  {qIdx + 1}. {item.originalSentence || item.q}
                                </h3>

                                {placedChips.length > 0 && (
                                  <button
                                    onClick={() => {
                                      setSelectedSentenceGameAnswers((prev) => {
                                        const next = { ...prev };
                                        delete next[qIdx];
                                        return next;
                                      });
                                    }}
                                    title="Reset this sentence"
                                    className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-all shrink-0 cursor-pointer"
                                  >
                                    <RotateCcw size={15} />
                                  </button>
                                )}
                              </div>

                              {/* Assembled Sentence (Just words, wrong parts in red, tick when complete) */}
                              <div className="min-h-[30px] flex flex-wrap items-center gap-1.5 py-0.5">
                                {placedChips.length === 0 ? (
                                  <span className="text-xs sm:text-sm text-slate-400 italic select-none">
                                    Tap words below in order to form the sentence...
                                  </span>
                                ) : (
                                  <>
                                    {placedChips.map((chip, chipIdx) => {
                                      const isPartCorrect = item.targetWords && chip.text === item.targetWords[chipIdx];

                                      return (
                                        <span
                                          key={chip.id}
                                          onClick={() => {
                                            // Tap placed word to remove it back to pool
                                            setSelectedSentenceGameAnswers((prev) => ({
                                              ...prev,
                                              [qIdx]: (prev[qIdx] || []).filter((c) => c.id !== chip.id)
                                            }));
                                          }}
                                          role="button"
                                          tabIndex={0}
                                          className={`inline-block text-xs sm:text-sm font-bold cursor-pointer transition-colors select-none py-0.5 px-0.5 hover:text-rose-600 hover:line-through ${
                                            isComplete && isCorrect
                                              ? 'text-emerald-700'
                                              : isPartCorrect
                                              ? 'text-slate-900'
                                              : 'text-rose-600'
                                          }`}
                                          title="Tap to remove"
                                        >
                                          {chip.text}
                                        </span>
                                      );
                                    })}

                                    {/* Direct tick near sentence when completed correctly */}
                                    {isComplete && isCorrect && (
                                      <span className="inline-flex items-center text-emerald-600 ml-1 font-bold">
                                        <Check size={18} className="stroke-[3]" />
                                      </span>
                                    )}
                                  </>
                                )}
                              </div>

                              {/* Divider line above Words */}
                              <div className="h-[1px] w-full bg-slate-200/80" />

                              {/* Available Words (Just words, no box) */}
                              <div className="space-y-1 pt-0.5">
                                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                  Words:
                                </div>

                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                  {availableChips.map((chip) => (
                                    <span
                                      key={chip.id}
                                      onClick={() => {
                                        // Tap available word to append it to the sentence
                                        setSelectedSentenceGameAnswers((prev) => ({
                                          ...prev,
                                          [qIdx]: [...(prev[qIdx] || []), chip]
                                        }));
                                      }}
                                      role="button"
                                      tabIndex={0}
                                      className="inline-block text-xs sm:text-sm font-bold text-slate-700 hover:text-black active:scale-95 cursor-pointer transition-colors py-0.5 px-0.5 hover:underline select-none"
                                    >
                                      {chip.text}
                                    </span>
                                  ))}
                                  {availableChips.length === 0 && placedChips.length === 0 && (
                                    <span className="text-xs text-slate-400 italic">No words available.</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : selectedExerciseOption.isTypingExercise ? (
                      /* Interactive Sentence Construction Typing Exercise (Exercise E) */
                      <div className="space-y-3 pt-1">
                        {(selectedExerciseOption.questions || []).map((item, qIdx) => {
                          const typedValue = typedSentences[qIdx] || '';
                          const wordToUse = (item.word || '').toLowerCase();

                          // Normalize to ignore dots, commas, punctuation, and caps
                          const trimmed = typedValue.trim();
                          const normalize = (s) => (s || '').toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
                          const targetList = (item.acceptedAnswers && item.acceptedAnswers.length > 0)
                            ? item.acceptedAnswers
                            : [item.sampleAnswer].filter(Boolean);
                          const isComplete = Boolean(trimmed && targetList.some(target => normalize(trimmed) === normalize(target)));

                          return (
                            <div 
                              key={qIdx}
                              className="rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-200 p-4 space-y-2.5 shadow-sm transition-all"
                            >
                              {/* Word prompt: 1. coward - (Always black) */}
                              <div className="flex items-center justify-between gap-3">
                                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                                  {qIdx + 1}. {item.word} -
                                </h3>

                                <div className="flex items-center gap-2">
                                  {typedValue.length > 0 && (
                                    <button
                                      onClick={() => {
                                        setTypedSentences((prev) => {
                                          const next = { ...prev };
                                          delete next[qIdx];
                                          return next;
                                        });
                                      }}
                                      title="Clear typing"
                                      className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-all shrink-0 cursor-pointer"
                                    >
                                      <RotateCcw size={14} />
                                    </button>
                                  )}
                                </div>
                              </div>

                              {/* Typing line input with green and tick near when correct sentence is formed */}
                              <div className="pt-0.5 flex items-center gap-2">
                                <input
                                  type="text"
                                  value={typedValue}
                                  onChange={(e) => {
                                    setTypedSentences((prev) => ({
                                      ...prev,
                                      [qIdx]: e.target.value
                                    }));
                                  }}
                                  placeholder={`Construct a sentence using '${item.word}'...`}
                                  className={`w-full bg-transparent border-b-2 py-1.5 px-0.5 text-xs sm:text-sm font-semibold placeholder:text-slate-400 placeholder:italic outline-none transition-colors caret-black selection:bg-blue-500 selection:text-white ${
                                    isComplete
                                      ? 'border-emerald-500 text-emerald-700 font-bold'
                                      : 'border-slate-200 focus:border-black text-slate-800'
                                  }`}
                                />

                                {/* Direct tick near the sentence when correctly formed */}
                                {isComplete && (
                                  <span className="shrink-0 text-emerald-600 font-bold inline-flex items-center" title="Correct!">
                                    <Check size={18} className="stroke-[3]" />
                                  </span>
                                )}
                              </div>

                              {/* Suggestion toggle */}
                              <div className="flex items-center justify-between pt-0.5">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setShowSampleAnswers((prev) => ({
                                      ...prev,
                                      [qIdx]: !prev[qIdx]
                                    }));
                                  }}
                                  className={`text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer select-none hover:text-blue-600 ${
                                    showSampleAnswers[qIdx] ? 'text-blue-600 font-bold' : 'text-slate-400'
                                  }`}
                                >
                                  <Eye size={12} />
                                  {showSampleAnswers[qIdx] ? 'Hide suggest' : 'Show suggest'}
                                </button>
                              </div>

                              {showSampleAnswers[qIdx] && item.sampleAnswer && (
                                <div className="text-xs text-slate-600 font-medium italic tracking-wide bg-slate-50 border border-slate-200/90 rounded-2xl px-3.5 py-2.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] select-text selection:bg-slate-400 selection:text-white">
                                  "{item.sampleAnswer}"
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : selectedExerciseOption.sections ? (
                      /* Sectioned Exercise (e.g. Exercise F - Darjeeling Travelogue) */
                      <div className="space-y-4 pt-1">
                        {/* 1. Full Travelogue Summary in 3D Card with Unit-1 Ribbon & Round Audio Button */}
                        {selectedExerciseOption.passage && (
                          <div className="relative rounded-[22px] bg-white border border-slate-200 border-b-[5px] border-b-slate-300 pt-5 px-4 sm:px-5 pb-5 space-y-3.5 shadow-sm select-none transition-all mt-3">
                            {/* Textbook Top Red Ribbon: Unit - 1 */}
                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                              <span className="bg-[#b91c1c] text-white px-5 py-0.5 rounded-full text-xs font-black tracking-wider uppercase shadow-xs">
                                Unit â€“ 1
                              </span>
                            </div>

                            {/* Card Header with Title and Round Audio Button */}
                            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-2.5 pt-1">
                              <div>
                                <h3 className="text-sm sm:text-base font-bold text-[#b91c1c] leading-tight">
                                  {selectedExerciseOption.passageTitle || "A Trip to Remember Forever"}
                                </h3>
                                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                  Listening Travelogue
                                </span>
                              </div>

                              {/* Round 3D Audio Icon Button (Always Black) */}
                              <button
                                type="button"
                                onClick={() => {
                                  if (!('speechSynthesis' in window)) return;
                                  if (travelogueAudioPlaying) {
                                    window.speechSynthesis.cancel();
                                    setTravelogueAudioPlaying(false);
                                  } else {
                                    window.speechSynthesis.cancel();
                                    const utter = new SpeechSynthesisUtterance(selectedExerciseOption.passage);
                                    utter.rate = 0.9;
                                    utter.onend = () => setTravelogueAudioPlaying(false);
                                    utter.onerror = () => setTravelogueAudioPlaying(false);
                                    window.speechSynthesis.speak(utter);
                                    setTravelogueAudioPlaying(true);
                                  }
                                }}
                                title={travelogueAudioPlaying ? "Stop Audio" : "Listen to Travelogue"}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer shrink-0 active:translate-y-[2px] active:border-b-[2px] shadow-sm ${
                                  travelogueAudioPlaying
                                    ? 'bg-black text-white border border-black border-b-[4px] border-b-slate-900 animate-pulse'
                                    : 'bg-white hover:bg-slate-100 text-black border border-slate-200 border-b-[4px] border-b-slate-300 hover:border-b-slate-400'
                                }`}
                              >
                                {travelogueAudioPlaying ? (
                                  <VolumeX size={18} className="stroke-[2.5] text-white" />
                                ) : (
                                  <Volume2 size={18} className="stroke-[2.5] text-black" />
                                )}
                              </button>
                            </div>

                            {/* Full Summary Text Displayed in 2 Clear Paragraphs */}
                            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 font-medium whitespace-pre-line select-text text-justify">
                              {selectedExerciseOption.passage}
                            </div>
                          </div>
                        )}

                        {/* 2. Render each section */}
                        {selectedExerciseOption.sections.map((section, sIdx) => {
                          return (
                            <div key={section.sectionId || sIdx} className="space-y-3 pt-1">
                              {/* Section Title Banner in Blue ink like in the textbook */}
                              <div className="px-1">
                                <h4 className="text-xs sm:text-sm font-bold text-[#1d4ed8] leading-snug">
                                  {section.title}
                                </h4>
                              </div>

                              {/* Section Items: Blanks */}
                              {section.type === "blanks" && (
                                <div className="space-y-3">
                                  {section.questions.map((item) => {
                                    const typed = (blankAnswers[item.num] || '').trim();
                                    const normalize = (s) => (s || '').toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
                                    const targetList = (item.acceptedAnswers && item.acceptedAnswers.length > 0)
                                      ? item.acceptedAnswers
                                      : [item.answer].filter(Boolean);
                                    const isComplete = Boolean(typed && targetList.some(target => normalize(typed) === normalize(target)));
                                    const isSuggestOpen = Boolean(showSectionSuggest[`blank_${item.num}`]);

                                    return (
                                      <div
                                        key={item.num}
                                        className="rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-200 p-4 space-y-2.5 shadow-sm transition-all"
                                      >
                                        {/* Question Sentence */}
                                        <div className="flex items-start justify-between gap-3">
                                          <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                                            {item.num}. {item.sentence}
                                          </h3>

                                          {typed.length > 0 && (
                                            <button
                                              onClick={() => {
                                                setBlankAnswers((prev) => {
                                                  const next = { ...prev };
                                                  delete next[item.num];
                                                  return next;
                                                });
                                              }}
                                              title="Clear"
                                              className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-all shrink-0 cursor-pointer"
                                            >
                                              <RotateCcw size={14} />
                                            </button>
                                          )}
                                        </div>

                                        {/* Blank typing line */}
                                        <div className="pt-0.5 flex items-center gap-2">
                                          <input
                                            type="text"
                                            value={blankAnswers[item.num] || ''}
                                            onChange={(e) => {
                                              setBlankAnswers((prev) => ({
                                                ...prev,
                                                [item.num]: e.target.value
                                              }));
                                            }}
                                            placeholder="Type answer here..."
                                            className={`w-full bg-transparent border-b-2 py-1.5 px-0.5 text-xs sm:text-sm font-semibold placeholder:text-slate-400 placeholder:italic outline-none transition-colors caret-black selection:bg-blue-500 selection:text-white ${
                                              isComplete
                                                ? 'border-emerald-500 text-emerald-700 font-bold'
                                                : 'border-slate-200 focus:border-black text-slate-800'
                                            }`}
                                          />

                                          {isComplete && (
                                            <span className="shrink-0 text-emerald-600 font-bold inline-flex items-center" title="Correct!">
                                              <Check size={18} className="stroke-[3]" />
                                            </span>
                                          )}
                                        </div>

                                        {/* Show suggest button */}
                                        <div className="flex items-center justify-between pt-0.5">
                                          <button
                                            type="button"
                                            onClick={() => {
                                              setShowSectionSuggest((prev) => ({
                                                ...prev,
                                                [`blank_${item.num}`]: !prev[`blank_${item.num}`]
                                              }));
                                            }}
                                            className={`text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer select-none hover:text-blue-600 ${
                                              isSuggestOpen ? 'text-blue-600 font-bold' : 'text-slate-400'
                                            }`}
                                          >
                                            <Eye size={12} />
                                            {isSuggestOpen ? 'Hide suggest' : 'Show suggest'}
                                          </button>
                                        </div>

                                        {isSuggestOpen && (
                                          <div className="text-xs text-slate-600 font-medium italic tracking-wide bg-slate-50 border border-slate-200/90 rounded-2xl px-3.5 py-2.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] select-text selection:bg-slate-400 selection:text-white">
                                            "{item.answer}"
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}

                              {/* Section Items: QA */}
                              {section.type === "qa" && (
                                <div className="space-y-3">
                                  {section.questions.map((item, qIdx) => {
                                    return (
                                      <div
                                        key={qIdx}
                                        className="rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-200 p-4 sm:p-5 space-y-2.5 shadow-sm transition-all"
                                      >
                                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug break-words">
                                          {item.q}
                                        </h3>

                                        <div className="h-[1px] w-full bg-slate-100" />

                                        <div className="text-xs sm:text-sm font-normal text-slate-700 leading-relaxed bg-slate-50/70 border border-slate-200/70 rounded-xl p-3 select-text">
                                          {item.a}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              )}

                              {/* Section Items: True or False */}
                              {section.type === "true_false" && (
                                <div className="space-y-3">
                                  {section.questions.map((item) => {
                                    const userChoice = tfAnswers[item.num];
                                    const isAnswered = Boolean(userChoice);
                                    const isCorrect = userChoice === item.answer;
                                    const isSuggestOpen = Boolean(showSectionSuggest[`tf_${item.num}`]);

                                    return (
                                      <div
                                        key={item.num}
                                        className="rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-200 p-4 space-y-3 shadow-sm transition-all"
                                      >
                                        <div className="flex items-start justify-between gap-3">
                                          <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                                            {item.num}. {item.statement}
                                          </h3>

                                          {isAnswered && (
                                            <button
                                              onClick={() => {
                                                setTfAnswers((prev) => {
                                                  const next = { ...prev };
                                                  delete next[item.num];
                                                  return next;
                                                });
                                              }}
                                              title="Try again"
                                              className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-all shrink-0 cursor-pointer"
                                            >
                                              <RotateCcw size={14} />
                                            </button>
                                          )}
                                        </div>

                                        {/* 3D True / False Choice Buttons */}
                                        <div className="flex items-center gap-3 pt-1">
                                          {['True', 'False'].map((choice) => {
                                            const isSelected = userChoice === choice;
                                            const isThisCorrect = choice === item.answer;
                                            
                                            let btnStyle = "bg-white text-slate-700 border border-slate-200 border-b-[4px] border-b-slate-300 hover:bg-slate-50 hover:border-b-slate-400 active:border-b-[2px] active:translate-y-[2px] shadow-sm";
                                            if (isSelected) {
                                              if (isThisCorrect) {
                                                btnStyle = "bg-emerald-600 text-white border border-emerald-600 border-b-[4px] border-b-emerald-800 active:border-b-[2px] active:translate-y-[2px] font-black shadow-sm";
                                              } else {
                                                btnStyle = "bg-rose-500 text-white border border-rose-500 border-b-[4px] border-b-rose-700 active:border-b-[2px] active:translate-y-[2px] font-black shadow-sm";
                                              }
                                            }

                                            return (
                                              <button
                                                key={choice}
                                                type="button"
                                                onClick={() => {
                                                  setTfAnswers((prev) => ({
                                                    ...prev,
                                                    [item.num]: choice
                                                  }));
                                                }}
                                                className={`flex-1 py-2.5 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer select-none ${btnStyle}`}
                                              >
                                                {choice}
                                                {isSelected && isThisCorrect && (
                                                  <Check size={16} className="stroke-[3]" />
                                                )}
                                                {isSelected && !isThisCorrect && (
                                                  <X size={16} className="stroke-[3]" />
                                                )}
                                              </button>
                                            );
                                          })}
                                        </div>

                                        {/* Show suggest button */}
                                        <div className="flex items-center justify-between pt-0.5">
                                          <button
                                            type="button"
                                            onClick={() => {
                                              setShowSectionSuggest((prev) => ({
                                                ...prev,
                                                [`tf_${item.num}`]: !prev[`tf_${item.num}`]
                                              }));
                                            }}
                                            className={`text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer select-none hover:text-blue-600 ${
                                              isSuggestOpen ? 'text-blue-600 font-bold' : 'text-slate-400'
                                            }`}
                                          >
                                            <Eye size={12} />
                                            {isSuggestOpen ? 'Hide suggest' : 'Show suggest'}
                                          </button>
                                        </div>

                                        {isSuggestOpen && (
                                          <div className="text-xs text-slate-600 font-medium italic tracking-wide bg-slate-50 border border-slate-200/90 rounded-2xl px-3.5 py-2.5 space-y-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] select-text selection:bg-slate-400 selection:text-white">
                                            <div className="font-bold not-italic">
                                              Answer: <span className={item.answer === 'True' ? 'text-emerald-700' : 'text-rose-700'}>{item.answer}</span>
                                            </div>
                                            {item.explanation && (
                                              <div className="text-slate-500 font-medium text-[11px] not-italic">
                                                {item.explanation}
                                              </div>
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : selectedExerciseOption.isDialogue ? (
                      /* Exercise G - Father & Mary Dialogue with blanks & clues */
                      <div className="space-y-3 pt-1">
                        <div className="rounded-[22px] bg-white border border-slate-200 border-b-[4px] border-b-slate-200 p-4 sm:p-5 space-y-3.5 shadow-sm">
                          {(() => {
                            let blankCounter = 0;
                            return (selectedExerciseOption.dialogue || []).map((item, dIdx) => {
                              const isFather = item.speaker === "Father";
                              const speakerColor = isFather ? "text-[#1d4ed8]" : "text-[#c2410c]";
                              let currentPhaseIndex = null;
                              if (item.isBlank) {
                                currentPhaseIndex = blankCounter;
                                blankCounter++;
                              }

                              const targetAnswer = item.sampleAnswer || '';
                              const revealedChars = currentPhaseIndex !== null ? (dialogueRevealedPhases[currentPhaseIndex] || 0) : 0;
                              const isRevealed = revealedChars >= targetAnswer.length && targetAnswer.length > 0;
                              const isTyping = revealedChars > 0 && !isRevealed;
                              const displayText = targetAnswer.slice(0, revealedChars);

                              // Only previous phase revealed allows clicking next phase
                              const isPreviousPhaseRevealed = currentPhaseIndex === 0 || Boolean(
                                currentPhaseIndex !== null &&
                                (dialogueRevealedPhases[currentPhaseIndex - 1] || 0) >= ((selectedExerciseOption.dialogue || []).filter(x => x.isBlank)[currentPhaseIndex - 1]?.sampleAnswer?.length || 0)
                              );
                              const canClickAns = isPreviousPhaseRevealed && !isRevealed && !isTyping;

                              const handleTriggerAns = () => {
                                if (!canClickAns) return;
                                let charIdx = 0;
                                const interval = setInterval(() => {
                                  charIdx++;
                                  setDialogueRevealedPhases((prev) => ({
                                    ...prev,
                                    [currentPhaseIndex]: charIdx
                                  }));
                                  if (charIdx >= targetAnswer.length) {
                                    clearInterval(interval);
                                  }
                                }, 22);
                              };

                              // Cascading forward reset: resetting line N clears line N and any subsequent lines that were unlocked/revealed after it
                              const handleResetPhaseCascading = () => {
                                setDialogueRevealedPhases((prev) => {
                                  const next = { ...prev };
                                  // Clear current line and all lines after it
                                  Object.keys(next).forEach((key) => {
                                    if (Number(key) >= currentPhaseIndex) {
                                      delete next[key];
                                    }
                                  });
                                  return next;
                                });
                              };

                              // Speaker-matched button color: brown/rust for Mary, blue for Father
                              const ansBtnActiveStyle = isFather
                                ? 'bg-[#1d4ed8] text-white hover:bg-blue-700 shadow-blue-200'
                                : 'bg-[#c2410c] text-white hover:bg-amber-800 shadow-orange-200';

                              return (
                                <div key={dIdx} className="space-y-1 text-xs sm:text-sm">
                                  <div className="leading-relaxed">
                                    <span className={`font-black mr-1.5 ${speakerColor}`}>
                                      {item.speaker}:
                                    </span>
                                    {item.prompt && (
                                      <span className="text-slate-800 font-medium mr-1.5">{item.prompt}</span>
                                    )}
                                    {item.isBlank ? (
                                      <span className="inline">
                                        {/* Multi-line underline stays completely static; letters turn from transparent to visible as typed */}
                                        <span className="underline underline-offset-[5px] decoration-slate-400 decoration-1.5 font-medium select-text selection:bg-slate-300">
                                          {/* Revealed/typed letters */}
                                          <span className="text-slate-800">
                                            {displayText}
                                          </span>

                                          {/* Cursor while typing */}
                                          {isTyping && (
                                            <span className={`inline-block w-1.5 h-3.5 ${isFather ? 'bg-[#1d4ed8]' : 'bg-[#c2410c]'} animate-pulse ml-0.5 align-middle`} />
                                          )}

                                          {/* Remaining unrevealed letters: transparent so the underline stays identical with zero movement or overlap */}
                                          {!isRevealed && (
                                            <span 
                                              className="text-transparent select-none inline"
                                              style={{ WebkitTextFillColor: 'transparent' }}
                                            >
                                              {targetAnswer.slice(revealedChars)}
                                            </span>
                                          )}
                                        </span>

                                        {/* Ans / Reset button positioned right where the sentence ends, exactly where the retry icon appears */}
                                        {isRevealed ? (
                                          <button
                                            type="button"
                                            onClick={handleResetPhaseCascading}
                                            title={`Reset line ${currentPhaseIndex + 1} and any subsequent answers`}
                                            className="ml-1.5 inline-flex items-center p-0.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all active:scale-90 cursor-pointer align-baseline"
                                          >
                                            <RotateCcw size={12} strokeWidth={2.4} />
                                          </button>
                                        ) : (
                                          <button
                                            type="button"
                                            onClick={handleTriggerAns}
                                            disabled={!canClickAns}
                                            title={canClickAns ? `Reveal Phase ${currentPhaseIndex + 1} Answer` : "Complete previous phase first"}
                                            className={`ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-tight shadow-xs transition-all active:scale-95 select-none align-baseline ${
                                              canClickAns
                                                ? `${ansBtnActiveStyle} cursor-pointer`
                                                : 'bg-slate-100 text-slate-300 border border-slate-200 cursor-not-allowed opacity-60'
                                            }`}
                                          >
                                            Ans
                                          </button>
                                        )}
                                      </span>
                                    ) : (
                                      <span className="text-slate-800 font-medium">{item.text}</span>
                                    )}
                                  </div>
                                </div>
                              );
                            });
                          })()}
                        </div>
                      </div>
                    ) : selectedExerciseOption.isAdvertisement ? (
                      /* Exercise I - Advertisement Posters & Rules */
                      <div className="space-y-4 pt-1">
                        {/* Rules Card: An advertisement should include the following to make it attractive (No star icon, stacked 1 by 1) */}
                        {selectedExerciseOption.guidelines && (
                          <div className="rounded-[22px] bg-[#f0fdf4] border-2 border-[#16a34a]/30 border-b-[5px] border-b-[#16a34a]/40 p-4 sm:p-5 space-y-3 shadow-xs select-none">
                            <h3 className="text-xs sm:text-sm font-bold text-[#15803d]">
                              {selectedExerciseOption.guidelinesTitle}
                            </h3>
                            {/* 1, 2, 3, 4 stacked one by one below */}
                            <div className="space-y-2 pt-1 text-xs text-slate-700 font-medium">
                              {selectedExerciseOption.guidelines.map((rule, rIdx) => (
                                <div key={rIdx} className="bg-white/90 border border-[#bbf7d0] rounded-xl px-3 py-2 flex items-start gap-2.5 shadow-2xs">
                                  <span className="font-bold text-[#16a34a] shrink-0 text-sm">âœ“</span>
                                  <span className="leading-snug text-slate-800">{rule}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* List of Advertisements with 1:1 Aspect Ratio Images */}
                        {(selectedExerciseOption.advertisements || []).map((ad) => (
                          <div key={ad.id} className="space-y-3">
                            {/* Exercise Prompt / Hint */}
                            <div className="rounded-[18px] bg-slate-50 border border-slate-200 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-800">
                              {ad.hint}
                            </div>

                            {/* 1:1 Aspect Ratio Poster Image Card */}
                            <div className="rounded-[26px] bg-white border-4 border-slate-800 border-b-[8px] border-b-slate-900 overflow-hidden shadow-lg">
                              <div className="relative aspect-square w-full max-w-[540px] mx-auto bg-slate-950 flex items-center justify-center overflow-hidden">
                                <img
                                  src={ad.image}
                                  alt={ad.title || "Advertisement Poster"}
                                  className="w-full h-full object-cover select-none"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : selectedExerciseOption.isReportWriting ? (
                      /* Exercise J - Report Writing Rules, Format & Model Reports */
                      <div className="space-y-4 pt-1">
                        {/* Concept & Format Card matching textbook page 10 verbatim */}
                        <div className="rounded-[22px] bg-white border border-slate-200 border-b-[5px] border-b-slate-300 p-4 sm:p-5 space-y-4 shadow-sm select-none">
                          {/* Section Title */}
                          <div className="space-y-1.5 border-b border-slate-100 pb-3">
                            <h3 className="text-sm sm:text-base font-bold text-[#b45309] leading-tight">
                              {selectedExerciseOption.conceptTitle}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium text-justify">
                              {selectedExerciseOption.conceptDescription}
                            </p>
                          </div>

                          {/* Format of a Report Title */}
                          <div className="space-y-3">
                            <h4 className="text-xs sm:text-sm font-bold text-[#b45309]">
                              {selectedExerciseOption.formatTitle}
                            </h4>

                            {/* 2-Column Format & Guidelines Grid matching textbook layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                              {/* Left Column: 6 Elements */}
                              <div className="space-y-2">
                                {(selectedExerciseOption.formatItems || []).slice(0, 6).map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <span className="text-cyan-600 font-bold text-sm shrink-0">â–</span>
                                    <span className="text-slate-800 font-medium">
                                      <strong className="font-bold">{item.label}</strong> {item.desc && <span className="text-slate-500 italic font-normal">{item.desc}</span>}
                                    </span>
                                  </div>
                                ))}
                              </div>

                              {/* Right Column: Remaining Elements + Writing Tips */}
                              <div className="space-y-2">
                                {(selectedExerciseOption.formatItems || []).slice(6).map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <span className="text-cyan-600 font-bold text-sm shrink-0">â–</span>
                                    <span className="text-slate-800 font-medium">
                                      <strong className="font-bold">{item.label}</strong> {item.desc && <span className="text-slate-500 italic font-normal">{item.desc}</span>}
                                    </span>
                                  </div>
                                ))}

                                {(selectedExerciseOption.tips || []).map((tip, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <span className="text-cyan-600 font-bold text-sm shrink-0">â–</span>
                                    <span className="text-slate-700 font-medium leading-snug">{tip}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Model Reports for students */}
                        {(selectedExerciseOption.questions || []).map((qItem, qIdx) => (
                          <div 
                            key={qIdx}
                            className="rounded-[22px] bg-white border border-slate-200 border-b-[5px] border-b-slate-200 p-4 sm:p-5 space-y-3.5 shadow-sm transition-all select-text"
                          >
                            {/* Question Title */}
                            <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug break-words">
                              {qItem.q}
                            </h3>

                            {/* Structured Report Card Container */}
                            <div className="rounded-[18px] bg-slate-50 border border-slate-200 p-4 sm:p-5 space-y-3">
                              {/* Heading & By-line */}
                              <div className="text-center space-y-1 border-b border-slate-200/80 pb-3">
                                <h4 className="text-sm sm:text-base font-black text-slate-900 tracking-tight">
                                  {qItem.reportTitle}
                                </h4>
                                <p className="text-xs font-semibold text-slate-500 italic">
                                  {qItem.byLine}
                                </p>
                              </div>

                              {/* Report Body Text */}
                              <div className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed space-y-2.5 text-justify whitespace-pre-line">
                                {qItem.content}
                              </div>

                              {/* Key Elements Checklist */}
                              {qItem.points && (
                                <div className="mt-3 pt-3 border-t border-slate-200/80 space-y-1.5 bg-white/70 rounded-xl p-3">
                                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                                    Report Breakdown (5 Ws & How)
                                  </span>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-slate-700 font-medium">
                                    {qItem.points.map((pt, pIdx) => (
                                      <div key={pIdx} className="leading-tight">{pt}</div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4 pt-1">
                        {/* Passage 3D Card if present (e.g. Exercise H - BUNGEE-JUMPING) */}
                        {selectedExerciseOption.passage && (
                          <div className="rounded-[22px] bg-white border border-slate-200 border-b-[5px] border-b-slate-300 p-4 sm:p-5 space-y-3.5 shadow-sm select-none transition-all">
                            {/* Card Header with Passage Title and Round Audio Button */}
                            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-2.5">
                              <div>
                                <h3 className="text-sm sm:text-base font-bold text-[#b91c1c] leading-tight">
                                  {selectedExerciseOption.passageTitle || "Passage"}
                                </h3>
                                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                  Comprehension Reading
                                </span>
                              </div>

                              {/* Round 3D Audio Icon Button (Always Black) */}
                              <button
                                type="button"
                                onClick={() => {
                                  if (!('speechSynthesis' in window)) return;
                                  if (travelogueAudioPlaying) {
                                    window.speechSynthesis.cancel();
                                    setTravelogueAudioPlaying(false);
                                  } else {
                                    window.speechSynthesis.cancel();
                                    const utter = new SpeechSynthesisUtterance(selectedExerciseOption.passage);
                                    utter.rate = 0.9;
                                    utter.onend = () => setTravelogueAudioPlaying(false);
                                    utter.onerror = () => setTravelogueAudioPlaying(false);
                                    window.speechSynthesis.speak(utter);
                                    setTravelogueAudioPlaying(true);
                                  }
                                }}
                                title={travelogueAudioPlaying ? "Stop Audio" : "Listen to Passage"}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer shrink-0 active:translate-y-[2px] active:border-b-[2px] shadow-sm ${
                                  travelogueAudioPlaying
                                    ? 'bg-black text-white border border-black border-b-[4px] border-b-slate-900 animate-pulse'
                                    : 'bg-white hover:bg-slate-100 text-black border border-slate-200 border-b-[4px] border-b-slate-300 hover:border-b-slate-400'
                                }`}
                              >
                                {travelogueAudioPlaying ? (
                                  <VolumeX size={18} className="stroke-[2.5] text-white" />
                                ) : (
                                  <Volume2 size={18} className="stroke-[2.5] text-black" />
                                )}
                              </button>
                            </div>

                            {/* Full Passage Text in Clear Paragraphs */}
                            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 font-medium whitespace-pre-line select-text text-justify">
                              {selectedExerciseOption.passage}
                            </div>
                          </div>
                        )}

                        {/* Questions Header if passage exists */}
                        {selectedExerciseOption.passage && (
                          <div className="px-1 pt-1">
                            <h4 className="text-xs sm:text-sm font-bold text-[#b91c1c] uppercase tracking-wide">
                              Questions
                            </h4>
                          </div>
                        )}

                        {/* List of Questions */}
                        {(selectedExerciseOption.questions || []).map((item, qIdx) => (
                          <div 
                            key={qIdx}
                            className="rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-200 p-4 sm:p-5 space-y-2.5 shadow-sm transition-all"
                          >
                            {/* Question numbered like 1. 2. 3. (No Q badge) */}
                            <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug break-words">
                              {qIdx + 1}. {item.q}
                            </h3>

                            {/* Subtle Separator */}
                            <div className="h-[1px] w-full bg-slate-100" />

                            {/* Answer directly (No Ans badge) */}
                            <div className="text-xs sm:text-sm font-normal text-slate-700 leading-relaxed break-words space-y-1.5">
                              {item.a ? (
                                <p className="leading-relaxed">{item.a}</p>
                              ) : item.points ? (
                                item.points.map((pt, pIdx) => (
                                  <p key={pIdx} className="leading-relaxed">{pt}</p>
                                ))
                              ) : (
                                <p className="leading-relaxed">{item.q}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </main>
                );
              }

              return (
                <main className="flex-1 overflow-y-auto px-5 pt-4 pb-28 space-y-2.5">
                  {currentExerciseOptions.map((opt, optIdx) => {
                    const cardPal = CARD_COLOR_PALETTES.find(p => p.id === opt.cardPaletteId);
                    const indexPal = CARD_COLOR_PALETTES.find(p => p.id === opt.indexPaletteId);
                    const cardBgClass = cardPal ? cardPal.cardBg : theme.cardBg;
                    const cardBorderClass = cardPal ? cardPal.cardBorder : theme.cardBorder;
                    const cardHoverBorderClass = cardPal ? cardPal.hoverBorder : theme.hoverBorder;
                    const titleColorClass = cardPal ? cardPal.titleColor : (theme.titleColor || 'text-slate-900');
                    const indexColorStyle = indexPal ? { color: indexPal.hexPrimary } : undefined;
                    const indexColorClass = indexPal ? '' : (theme.labelColor || 'text-[#BE123C]');

                    return (
                      <div
                        key={opt.letter + '_' + optIdx}
                        onClick={() => {
                          if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                          setTravelogueAudioPlaying(false);
                          setShowTravelogueText(false);
                          setBlankAnswers({});
                          setTfAnswers({});
                          setShowSectionSuggest({});
                          setSelectedSentenceGameAnswers({});
                          setTypedSentences({});
                          setDialogueTypedAnswers({});
                          setShowDialogueSuggest({});
                          setDialogueRevealedPhases({});
                          setSelectedExerciseOption(opt);
                        }}
                        role="button"
                        tabIndex={0}
                        className={`group relative min-h-[58px] rounded-[20px] ${cardBgClass} border ${cardBorderClass} ${cardHoverBorderClass} px-4 py-3.5 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none`}
                      >
                        {/* Left: Bold letter/number and Exercise Title */}
                        <div className="flex items-start gap-2.5 min-w-0 flex-1 pr-2">
                          <span
                            style={indexColorStyle}
                            className={`${indexColorClass} font-black text-xs sm:text-sm tracking-wide uppercase shrink-0 pt-0.5 select-none`}
                          >
                            {opt.letter?.toString().trim().endsWith(':') ? opt.letter.toString().trim() : `${opt.letter}:`}
                          </span>
                          <span className={`text-xs sm:text-sm font-bold ${titleColorClass} leading-snug break-words flex-1`}>
                            {opt.title}
                          </span>
                        </div>

                        {/* Right: Tactile 3D Chevron button */}
                        <div className="flex items-center shrink-0 ml-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-2xs group-hover:text-slate-800 group-hover:scale-105 transition-all shrink-0">
                            <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Edit Topics Card below last card for Admin */}
                  {isAdminMode && (
                    <div className="pt-2 pb-8">
                      <div
                        onClick={() => handleOpenEditTopicsModal(overrideKey, currentExerciseOptions)}
                        role="button"
                        tabIndex={0}
                        className="group relative min-h-[58px] rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-300 hover:border-slate-300 hover:border-b-slate-400 px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none"
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-900 text-white font-black text-xs shrink-0 select-none shadow-sm group-hover:scale-105 transition-transform">
                            <Pencil className="h-4 w-4 stroke-[2.5]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-bold text-slate-800">
                              Edit Topics
                            </div>
                            <div className="text-[11px] font-semibold text-slate-400">
                              Add or edit topics and numbering
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center shrink-0 ml-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-slate-900 group-hover:text-white transition-all">
                            <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </main>
              );
            })()
          ) : (selectedBook?.subject || '').toLowerCase().includes('math') && currentClassNum === 1 ? (
            /* Class 1 Math: Subtopics list in 3D Cards */
            (() => {
              const theme = selectedUnit.theme || {};
              const subtopicsOverrideKey = `${selectedBook?.id || selectedBook?.subject || 'book'}_${selectedUnit?.id || selectedUnit?.unitNum || 1}_subtopics`;
              const currentSubtopics = customExerciseOverrides[subtopicsOverrideKey] || (selectedUnit.subtopics || [
                { letter: "1.1", title: "Comparisons" },
                { letter: "1.2", title: "Shapes" }
              ]);

              return (
                <main className="flex-1 overflow-y-auto px-5 pt-4 pb-28 space-y-3 animate-fade-in select-none">
                  {currentSubtopics.map((sub, sIdx) => {
                    const pal = CARD_COLOR_PALETTES.find(p => p.id === (sub.paletteId || sub.cardPaletteId));
                    const cardBgClass = pal ? `${pal.cardBg} border ${pal.cardBorder} ${pal.hoverBorder}` : `${theme.subCardBg || 'bg-[#FFF7ED]'} border ${theme.subCardBorder || 'border-[#FDBA74] border-b-[4px] border-b-[#FB923C]'} hover:border-[#EA580C] hover:border-b-[#EA580C]`;
                    const titleColorClass = pal ? pal.titleColor : (theme.subTitleColor || 'text-[#7C2D12]');
                    const badgeBorderClass = pal ? `border-[${pal.hexPrimary}] text-[${pal.hexPrimary}]` : `${theme.badgeBorder || 'border-[#BE185D]'} ${theme.badgeText || 'text-[#BE185D]'}`;

                    return (
                      <div
                        key={sIdx}
                        role="button"
                        tabIndex={0}
                        className={`group relative min-h-[64px] rounded-[22px] ${cardBgClass} px-4 py-3.5 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0 flex-1 pr-2">
                          <div className={`flex items-center justify-center h-9 w-9 rounded-full border-2 ${badgeBorderClass} bg-white font-black text-sm shrink-0 select-none shadow-2xs`}>
                            {sub.letter || sub.code || sIdx + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className={`text-sm sm:text-base font-black ${titleColorClass} tracking-tight leading-snug break-words block`}>
                              {renderTextWithAsterisk(sub.title)}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center shrink-0 ml-2">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-white border ${theme.subChevronBorder || 'border-[#FB923C]'} ${theme.subChevronText || 'text-[#BE185D]'} shadow-2xs group-hover:scale-105 transition-all shrink-0`}>
                            <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Edit Topics Card below last card for Admin */}
                  {isAdminMode && (
                    <div className="pt-2 pb-8">
                      <div
                        onClick={() => handleOpenEditTopicsModal(subtopicsOverrideKey, currentSubtopics.map((s, idx) => ({ letter: s.letter || s.code || String(idx + 1), title: s.title, paletteId: s.paletteId })))}
                        role="button"
                        tabIndex={0}
                        className="group relative min-h-[58px] rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-300 hover:border-slate-300 hover:border-b-slate-400 px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none"
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-900 text-white font-black text-xs shrink-0 select-none shadow-sm group-hover:scale-105 transition-transform">
                            <Pencil className="h-4 w-4 stroke-[2.5]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-bold text-slate-800">
                              Edit Topics
                            </div>
                            <div className="text-[11px] font-semibold text-slate-400">
                              Add or edit topics and numbering
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center shrink-0 ml-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-slate-900 group-hover:text-white transition-all">
                            <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </main>
              );
            })()
          ) : (selectedBook?.subject || '').toLowerCase().includes('math') ? (
            /* Class 10 Math: Directly show Worked Examples and Exercises in 3D Cards with 3D Pills for ALL chapters */
            <main className="flex-1 overflow-y-auto px-5 pt-4 pb-28 space-y-4">
              {/* Horizontal Scrollable 3D Pills */}
              {(() => {
                const chapterNum = selectedUnit.chapterNum || 1;
                const chapterPills = getMathChapterPills(chapterNum);
                const activeTabId = chapterPills.some(p => p.id === mathTab) ? mathTab : (chapterPills[0]?.id || 'examples');
                return (
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 -mx-1 select-none shrink-0">
                    {chapterPills.map((pill) => {
                      const isActive = activeTabId === pill.id;
                      return (
                        <button
                          key={pill.id}
                          onClick={() => setMathTab(pill.id)}
                          className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-[13px] font-black transition-all duration-150 select-none ${
                            isActive
                              ? 'bg-slate-900 text-white border border-slate-900 border-b-[3.5px] border-b-black shadow-sm active:translate-y-[2px] active:border-b-[1.5px]'
                              : 'bg-white text-slate-700 border border-slate-200 border-b-[3.5px] border-b-slate-300 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50 active:translate-y-[2px] active:border-b-[1.5px]'
                          }`}
                        >
                          {pill.label}
                        </button>
                      );
                    })}
                  </div>
                );
              })()}

              {/* Dynamic Sums Rendering based on selected pill */}
              {(() => {
                const chapterNum = selectedUnit.chapterNum || 1;
                const chapterPills = getMathChapterPills(chapterNum);
                const activeTabId = chapterPills.some(p => p.id === mathTab) ? mathTab : (chapterPills[0]?.id || 'examples');
                const activeSums = getMathChapterSums(chapterNum, activeTabId);
                const isLastExercisePill = chapterPills.length > 0 && activeTabId === chapterPills[chapterPills.length - 1].id;

                if (isLastExercisePill && activeSums && activeSums.length > 0) {
                  return (
                    <MathQuizGame
                      sums={activeSums}
                      chapterNum={chapterNum}
                      exerciseLabel={chapterPills[chapterPills.length - 1]?.label || 'Exercise'}
                      chapterTitle={selectedUnit.title || `Chapter ${chapterNum}`}
                    />
                  );
                }

                if (!activeSums || activeSums.length === 0) {
                  return (
                    <div className="rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-200 p-8 text-center space-y-2">
                      <p className="font-bold text-slate-800 text-sm">
                        {chapterPills.find(p => p.id === activeTabId)?.label || 'Exercise'} Solutions
                      </p>
                      <p className="text-xs text-slate-500">
                        Content for this exercise will appear here soon.
                      </p>
                    </div>
                  );
                }

                return activeSums.map((sum, sIdx) => (
                  <MathProblemCard
                    key={sum.id || `${sum.exampleNum || 'sum'}-${sIdx}`}
                    sum={sum}
                    sIdx={sIdx}
                  />
                ));
              })()}
            </main>
          ) : ((selectedBook?.subject || '').toLowerCase().includes('science') || (selectedBook?.subject || '').toLowerCase().includes('social')) ? (
            /* Science & Social Science: Roman Numeral Topics (I, II, III, IV...) like English book and Quiz */
            (() => {
              const subjectLower = (selectedBook?.subject || '').toLowerCase();
              const isSocial = subjectLower.includes('social');
              const unitNum = selectedUnit.unitNum || parseInt((selectedUnit.unit || '').replace(/\D+/g, ''), 10) || 1;
              const topics = isSocial ? getSocialTopics(unitNum) : getScienceTopics(unitNum);

              if (selectedExerciseOption) {
                const topicContent = isSocial
                  ? getSocialTopicContent(unitNum, selectedExerciseOption.id)
                  : getScienceTopicContent(unitNum, selectedExerciseOption.id);

                return (
                  <main className="flex-1 overflow-y-auto px-4 sm:px-5 pt-3 pb-28 space-y-4 animate-fade-in select-text">
                    {/* Topic Heading (like textbook): I. Choose the correct answer */}
                    <div className="w-full px-1 pt-1 pb-1">
                      <div className={`text-xs sm:text-sm font-black tracking-tight leading-relaxed ${isSocial ? 'text-sky-500' : 'text-red-600'}`}>
                        <div className="flex items-start gap-1.5 w-full">
                          <span className={`shrink-0 font-black ${isSocial ? 'text-sky-500' : 'text-red-600'}`}>{selectedExerciseOption.letter}.</span>
                          <span className={`underline underline-offset-[5px] ${isSocial ? 'decoration-sky-500 text-sky-500' : 'decoration-red-600 text-red-600'} decoration-1.5 min-w-0 flex-1 leading-relaxed`}>
                            {selectedExerciseOption.title}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* If topic is Quiz (Choose the correct answer): Show like Quiz with blue (social) or orange (science) correct option! */}
                    {selectedExerciseOption.type === 'quiz' ? (
                      <MathQuizGame
                        sums={topicContent}
                        theme={isSocial ? 'blue' : 'orange'}
                        exerciseLabel={`${selectedExerciseOption.letter}. ${selectedExerciseOption.title}`}
                      />
                    ) : selectedExerciseOption.type === 'fill_blanks' ? (
                      /* Fill in the blanks: Interactive typing with live verification and suggest */
                      <div className="space-y-3">
                        {topicContent.map((item) => {
                          const typed = (blankAnswers[item.num] || '').trim();
                          const normalize = (s) => (s || '').toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
                          const targetList = (item.acceptedAnswers && item.acceptedAnswers.length > 0)
                            ? item.acceptedAnswers
                            : [item.answer, item.a].filter(Boolean);
                          const isComplete = Boolean(typed && targetList.some(target => normalize(typed) === normalize(target)));
                          const isSuggestOpen = Boolean(showSectionSuggest[`blank_${item.num}`]);

                          return (
                            <div
                              key={item.num}
                              className="rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-200 p-4 space-y-2.5 shadow-sm transition-all"
                            >
                              {/* Question Sentence */}
                              <div className="flex items-start justify-between gap-3">
                                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                                  {item.num}. {item.sentence || item.q}
                                </h3>

                                {typed.length > 0 && (
                                  <button
                                    onClick={() => {
                                      setBlankAnswers((prev) => {
                                        const next = { ...prev };
                                        delete next[item.num];
                                        return next;
                                      });
                                    }}
                                    title="Clear"
                                    className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-all shrink-0 cursor-pointer"
                                  >
                                    <RotateCcw size={14} />
                                  </button>
                                )}
                              </div>

                              {/* Blank typing line */}
                              <div className="pt-0.5 flex items-center gap-2">
                                <input
                                  type="text"
                                  value={blankAnswers[item.num] || ''}
                                  onChange={(e) => {
                                    setBlankAnswers((prev) => ({
                                      ...prev,
                                      [item.num]: e.target.value
                                    }));
                                  }}
                                  placeholder="Type answer here..."
                                  className={`w-full bg-transparent border-b-2 py-1.5 px-0.5 text-xs sm:text-sm font-semibold placeholder:text-slate-400 placeholder:italic outline-none transition-colors caret-black selection:bg-blue-500 selection:text-white ${
                                    isComplete
                                      ? 'border-emerald-500 text-emerald-700 font-bold'
                                      : 'border-slate-200 focus:border-black text-slate-800'
                                  }`}
                                />

                                {isComplete && (
                                  <span className="shrink-0 text-emerald-600 font-bold inline-flex items-center" title="Correct!">
                                    <Check size={18} className="stroke-[3]" />
                                  </span>
                                )}
                              </div>

                              {/* Show suggest button */}
                              <div className="flex items-center justify-between pt-0.5">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setShowSectionSuggest((prev) => ({
                                      ...prev,
                                      [`blank_${item.num}`]: !prev[`blank_${item.num}`]
                                    }));
                                  }}
                                  className={`text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer select-none hover:text-blue-600 ${
                                    isSuggestOpen ? 'text-blue-600 font-bold' : 'text-slate-400'
                                  }`}
                                >
                                  <Eye size={12} />
                                  {isSuggestOpen ? 'Hide suggest' : 'Show suggest'}
                                </button>
                              </div>

                              {isSuggestOpen && (
                                <div className={`text-xs text-slate-800 font-medium italic tracking-wide ${
                                  isSocial ? 'bg-[#E3F2F9] border-[#7DD3FC]' : 'bg-[#FDF1DC] border-[#FCD34D]'
                                } border rounded-2xl px-3.5 py-2.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] select-text`}>
                                  "{item.answer || item.a}"
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : selectedExerciseOption.type === 'true_false' ? (
                      /* True or False: All questions inside a single unified card, with Retry button & score below */
                      <div className="space-y-4">
                        <div className="rounded-[22px] bg-white border border-slate-200 border-b-[4px] border-b-slate-200 p-4 sm:p-5 shadow-sm divide-y divide-slate-100">
                          {topicContent.map((item, idx) => {
                            const userChoice = tfAnswers[item.num];
                            const isAnswered = Boolean(userChoice);
                            const isCorrect = userChoice === item.answer;

                            return (
                              <div
                                key={item.num}
                                className={`${idx === 0 ? 'pb-5' : idx === topicContent.length - 1 ? 'pt-5' : 'py-5'} space-y-3 transition-all`}
                              >
                                <div>
                                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                                    {item.num}. {item.statement}
                                  </h3>
                                </div>

                                {/* 3D True / False Choice Buttons */}
                                <div className="flex items-center gap-3 pt-1">
                                  {['True', 'False'].map((choice) => {
                                    const isSelected = userChoice === choice;
                                    const isThisCorrect = choice === item.answer;
                                    
                                    let btnStyle = "bg-white text-slate-700 border border-slate-200 border-b-[4px] border-b-slate-300 hover:bg-slate-50 hover:border-b-slate-400 active:border-b-[2px] active:translate-y-[2px] shadow-sm";
                                    if (isSelected) {
                                      if (isThisCorrect) {
                                        // Correct: light blue for social, light orange for science
                                        btnStyle = isSocial
                                          ? "bg-[#BAE6FD] text-sky-950 border border-sky-300 border-b-[4px] border-b-sky-500 active:border-b-[2px] active:translate-y-[2px] font-black shadow-sm"
                                          : "bg-[#FED7AA] text-orange-950 border border-orange-300 border-b-[4px] border-b-orange-500 active:border-b-[2px] active:translate-y-[2px] font-black shadow-sm";
                                      } else {
                                        // Wrong: grey like quiz
                                        btnStyle = "bg-slate-200 text-slate-800 border border-slate-300 border-b-[4px] border-b-slate-400 active:border-b-[2px] active:translate-y-[2px] font-black shadow-sm";
                                      }
                                    }

                                    return (
                                      <button
                                        key={choice}
                                        type="button"
                                        onClick={() => {
                                          setTfAnswers((prev) => ({
                                            ...prev,
                                            [item.num]: choice
                                          }));
                                        }}
                                        className={`flex-1 py-2.5 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer select-none ${btnStyle}`}
                                      >
                                        {choice}
                                        {isSelected && isThisCorrect && (
                                          <Check size={16} className={`stroke-[3] ${isSocial ? 'text-sky-900' : 'text-orange-900'}`} />
                                        )}
                                        {isSelected && !isThisCorrect && (
                                          <X size={16} className="stroke-[3] text-slate-700" />
                                        )}
                                      </button>
                                    );
                                  })}
                                </div>

                                {/* Statement card: Only show after selecting False */}
                                {userChoice === 'False' && item.answer === 'False' && (item.correction || item.explanation) && (
                                  <div className={`text-xs text-slate-800 font-medium italic tracking-wide ${
                                    isSocial ? 'bg-[#E3F2F9] border-[#7DD3FC]' : 'bg-[#FDF1DC] border-[#FCD34D]'
                                  } border rounded-2xl px-3.5 py-2.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] select-text animate-fade-in`}>
                                    <div className="text-slate-700 font-medium text-[11px] not-italic leading-relaxed">
                                      <span className="font-bold text-slate-900">Correct Statement: </span>
                                      {item.correction || item.explanation}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {/* Score & Retry button below */}
                        {(() => {
                          const totalQuestions = topicContent.length;
                          const answeredCount = Object.keys(tfAnswers).length;
                          const isCompleted = totalQuestions > 0 && answeredCount === totalQuestions;
                          const score = topicContent.filter((item) => tfAnswers[item.num] === item.answer).length;

                          if (answeredCount === 0) return null;

                          return (
                            <div className="text-center space-y-3 pt-2 pb-2 animate-fade-in">
                              {isCompleted && (
                                <p className="text-sm sm:text-base font-bold text-slate-700 animate-fade-in">
                                  Score: <span className={`font-black ${isSocial ? 'text-sky-600' : 'text-orange-600'}`}>{score}</span> / {totalQuestions} ({Math.round((score / totalQuestions) * 100)}%)
                                </p>
                              )}
                              <div>
                                <button
                                  onClick={() => setTfAnswers({})}
                                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-700 border-b-[3.5px] border-b-emerald-900 shadow-xs active:translate-y-[2px] active:border-b-[1.5px] transition-all cursor-pointer"
                                >
                                  <RotateCcw className="w-4 h-4" />
                                  <span>Retry</span>
                                </button>
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    ) : selectedExerciseOption.type === 'match' ? (
                      /* IV. Match the following: Interactive Line Drawing Match Game */
                      <MatchGame items={topicContent} theme={isSocial ? 'blue' : 'orange'} />
                    ) : selectedExerciseOption.type === 'assertion_reason' ? (
                      /* Assertion & Reasoning: Interactive Quiz */
                      <MathQuizGame
                        sums={topicContent}
                        theme={isSocial ? 'blue' : 'orange'}
                        exerciseLabel={`${selectedExerciseOption.letter}. ${selectedExerciseOption.title}`}
                      />
                    ) : (
                      /* Q&A / Answer briefly / Detail / Map work: Clean cards matching textbook */
                      <div className="space-y-3.5">
                        {topicContent.map((item, idx) => (
                          <div
                            key={idx}
                            className="rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-200 p-4 space-y-2.5 shadow-sm"
                          >
                            <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug break-words">
                              {item.num ? `${item.num}. ` : ''}{item.q || item.sentence}
                            </h3>
                            {item.a && (
                              <div className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed bg-slate-50/80 border border-slate-200/80 rounded-xl p-3 select-text whitespace-pre-line">
                                <MathText text={item.a} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </main>
                );
              }

              /* If selectedExerciseOption is null: Show Roman numeral topic cards */
              const topicsOverrideKey = `${selectedBook?.id || selectedBook?.subject || 'book'}_${selectedUnit?.id || unitNum}_topics`;
              const currentTopics = customExerciseOverrides[topicsOverrideKey] || topics;
              const defaultCardBg = isSocial
                ? "bg-[#E3F2F9] border-[#7DD3FC] border-b-[4px] border-b-[#7DD3FC] hover:border-[#38BDF8] hover:border-b-[#38BDF8]"
                : "bg-[#FDF1DC] border-[#FCD34D] border-b-[4px] border-b-[#FCD34D] hover:border-[#F59E0B] hover:border-b-[#F59E0B]";

              return (
                <main className="flex-1 overflow-y-auto px-5 pt-4 pb-28 space-y-2.5">
                  {currentTopics.map((topic, tIdx) => {
                    const pal = CARD_COLOR_PALETTES.find(p => p.id === (topic.paletteId || topic.cardPaletteId));
                    const cardBgClass = pal ? `${pal.cardBg} border ${pal.cardBorder} ${pal.hoverBorder}` : defaultCardBg;
                    const titleColorClass = pal ? pal.titleColor : 'text-slate-900';
                    const labelColorClass = pal ? '' : (isSocial ? 'text-sky-500' : 'text-red-600');
                    const labelStyle = pal ? { color: pal.hexPrimary } : undefined;

                    return (
                      <div
                        key={topic.letter + '_' + tIdx}
                        onClick={() => {
                          setBlankAnswers({});
                          setTfAnswers({});
                          setShowSectionSuggest({});
                          setSelectedExerciseOption(topic);
                        }}
                        role="button"
                        tabIndex={0}
                        className={`group relative min-h-[58px] rounded-[20px] ${cardBgClass} px-4 py-3.5 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none`}
                      >
                        {/* Left: Bold Roman numeral / Number / Letter and Topic Title */}
                        <div className="flex items-start gap-2.5 min-w-0 flex-1 pr-2">
                          <span
                            style={labelStyle}
                            className={`${labelColorClass} font-black text-xs sm:text-sm tracking-wide uppercase shrink-0 pt-0.5 select-none`}
                          >
                            {topic.letter?.toString().trim().endsWith(':') ? topic.letter.toString().trim() : `${topic.letter}:`}
                          </span>
                          <span className={`text-xs sm:text-sm font-bold ${titleColorClass} leading-snug break-words flex-1`}>
                            {topic.title}
                          </span>
                        </div>

                        {/* Right: Tactile 3D Chevron button */}
                        <div className="flex items-center shrink-0 ml-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 shadow-2xs group-hover:text-slate-800 group-hover:scale-105 transition-all shrink-0">
                            <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Edit Topics Card below last card for Admin */}
                  {isAdminMode && (
                    <div className="pt-2 pb-8">
                      <div
                        onClick={() => handleOpenEditTopicsModal(topicsOverrideKey, currentTopics)}
                        role="button"
                        tabIndex={0}
                        className="group relative min-h-[58px] rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-300 hover:border-slate-300 hover:border-b-slate-400 px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none"
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-900 text-white font-black text-xs shrink-0 select-none shadow-sm group-hover:scale-105 transition-transform">
                            <Pencil className="h-4 w-4 stroke-[2.5]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-bold text-slate-800">
                              Edit Topics
                            </div>
                            <div className="text-[11px] font-semibold text-slate-400">
                              Add or edit topics and numbering
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center shrink-0 ml-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-slate-900 group-hover:text-white transition-all">
                            <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </main>
              );
            })()
          ) : (selectedBook?.subject || '').toLowerCase().includes('tamil') ? (
            /* Tamil: Karpavai Katrappin textbook box + Q&A Cards matching English book card style */
            (() => {
              const unitNum = selectedUnit.unitNum || parseInt((selectedUnit.unit || '').replace(/\D+/g, ''), 10) || 1;
              const lessonTitle = selectedUnit.selectedSection || selectedUnit.sectionTitle || 'à®…à®©à¯à®©à¯ˆ à®®à¯Šà®´à®¿à®¯à¯‡';

              /* Class 1 Tamil Topics (Term 1 Unit 1: à®•à®¾à®Ÿà¯à®Ÿà¯à®•à¯à®•à¯à®³à¯à®³à¯‡ à®•à¯Šà®£à¯à®Ÿà®¾à®Ÿà¯à®Ÿà®®à¯, à®†à®²à®®à®°à®¤à¯à®¤à¯à®² à®µà®¿à®³à¯ˆà®¯à®¾à®Ÿà¯à®Ÿà¯, à®‡à®²à¯ˆà®¯à¯à®®à¯... à®•à®¾à®¯à¯à®®à¯...) */
              if (currentClassNum === 1) {
                const class1Topics = getClass1TamilTopics(unitNum);

                if (selectedExerciseOption) {
                  const topicContent = getClass1TamilTopicContent(unitNum, selectedExerciseOption.id);

                  return (
                    <main className="flex-1 overflow-y-auto px-4 sm:px-5 pt-3 pb-28 space-y-4 animate-fade-in select-none">
                      {/* Topic Heading: Underlined text like English page for visual topics, standard card for others */}
                      {!['kattukulle', 'aalamarathula', 'verupattathai', 'muthal-padam', 'poruthamaanathai', 'peyarai', 'vaanga-ennodu', 'vidubattadhai', 'padathirkum-ezhuthirkum', 'ezhuthai-inaippom', 'nirappuven', 'inaippen-ezhuthuven', 'ezhuthukkalai-arivom', 'ezhuthi-pazhaguven'].includes(topicContent.id) ? (
                        <div className="rounded-[22px] bg-pink-50 border border-pink-300 border-b-[4px] border-b-pink-400 px-4 py-3.5 flex items-center justify-between shadow-sm select-none">
                          <div className="flex items-center gap-3.5 min-w-0 flex-1 pr-2">
                            <div className="flex items-center justify-center h-9 w-9 rounded-full border-2 border-pink-400 bg-white text-pink-600 font-black text-sm shrink-0 shadow-2xs">
                              {class1Topics.findIndex(t => t.id === topicContent.id) + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-sm sm:text-base font-black text-gray-900 tracking-tight leading-snug break-words block">
                                {topicContent.title}
                              </span>
                              {topicContent.subTitle && (
                                <span className="text-xs font-bold text-gray-500 leading-snug mt-0.5 block">
                                  {topicContent.subTitle}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full px-1 pt-1 pb-1">
                          <h2 className={`text-base sm:text-lg font-black tracking-tight leading-relaxed ${topicContent.id === 'peyarai' ? 'text-pink-600' : 'text-red-600'}`}>
                            <span className={`underline underline-offset-[5px] decoration-1.5 leading-relaxed ${topicContent.id === 'peyarai' ? 'decoration-pink-600' : 'decoration-red-600'}`}>
                              {topicContent.title}
                            </span>
                          </h2>
                        </div>
                      )}

                      {/* Topic Specific Content */}
                      {topicContent.id === 'aalamarathula' ? (
                        /* 2. ஆலமரத்துல விளையாட்டு: Song Video Player */
                        <Topic2VideoPlayer />
                      ) : topicContent.id === 'ilaiyum-kaayum' ? (
                        /* 3. à®‡à®²à¯ˆà®¯à¯à®®à¯... à®•à®¾à®¯à¯à®®à¯...: Craft, Creation & Story */
                        <div className="space-y-4">
                          <div className="rounded-[22px] bg-white border border-amber-900/15 border-b-[4px] border-b-amber-900/25 p-5 shadow-sm space-y-3">
                            <h3 className="text-sm sm:text-base font-black text-[#78350f]">à®šà¯†à®¯à®²à¯à®®à¯à®±à¯ˆà®ªà¯ à®ªà®Ÿà®•à¯à®•à®¤à¯ˆ</h3>
                            <p className="text-xs sm:text-sm font-semibold text-[#78350f] leading-relaxed bg-amber-50/60 border border-amber-200/60 rounded-xl p-3">
                              {topicContent.intro}
                            </p>
                          </div>

                          <div className="space-y-3">
                            {topicContent.creations.map((cr, idx) => (
                              <div key={idx} className="rounded-[20px] bg-white border border-amber-900/15 border-b-[4px] border-b-amber-900/25 p-4 shadow-sm space-y-2">
                                <div className="flex items-center gap-2.5">
                                  <span className="text-2xl">{cr.icon}</span>
                                  <h4 className="text-sm font-black text-[#78350f]">{cr.title}</h4>
                                </div>
                                <p className="text-xs sm:text-sm font-medium text-[#78350f] leading-relaxed pl-1">
                                  {cr.desc}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div className="rounded-[22px] bg-white border border-amber-900/15 border-b-[4px] border-b-amber-900/25 p-5 shadow-sm space-y-3">
                            <h3 className="text-sm font-black text-[#78350f]">à®ªà®Ÿà¯ˆà®ªà¯à®ªà®¾à®±à¯à®±à®²à¯ à®µà®´à®¿à®•à®¾à®Ÿà¯à®Ÿà¯à®¤à®²à¯</h3>
                            <div className="space-y-2">
                              {topicContent.activitySteps.map((step, sIdx) => (
                                <p key={sIdx} className="text-xs sm:text-sm font-bold text-[#78350f] leading-relaxed">
                                  {step}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : ['verupattathai', 'muthal-padam', 'poruthamaanathai'].includes(topicContent.id) ? (
                        /* 4, 5, 6. Visual Exercises: 3 Cards, 4 photos (2 in 1st row, 2 in 2nd row), thin green line circle animation, retry button, no scores */
                        <div className="space-y-4">
                          {/* 3 Cards */}
                          {topicContent.exercises.map((ex, cIdx) => {
                            const answerKey = `circle_${topicContent.id}_${cIdx}`;
                            const chosenIdx = blankAnswers[answerKey];
                            const photos = ex.items || ex.options || [];

                            return (
                              <div
                                key={ex.id || cIdx}
                                className="rounded-3xl bg-white border-2 border-black p-4 sm:p-5 space-y-3"
                              >
                                {ex.target && (
                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                      <span className="text-base sm:text-lg font-black text-black">{cIdx + 1}.</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                      <div className="relative aspect-square rounded-2xl overflow-hidden flex items-center justify-center bg-[#fef08a]">
                                        <img
                                          src={ex.target.img}
                                          alt={`Question ${cIdx + 1}`}
                                          className="w-full h-full object-cover pointer-events-none"
                                        />
                                      </div>
                                    </div>
                                    <div className="border-b border-black/10 my-2" />
                                  </div>
                                )}

                                {ex.groupImg && (
                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                      <span className="text-base sm:text-lg font-black text-black">{cIdx + 1}.</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                      <div className="relative aspect-square rounded-2xl overflow-hidden flex items-center justify-center bg-[#fef08a]">
                                        <img
                                          src={ex.groupImg}
                                          alt={`Group ${cIdx + 1}`}
                                          className="w-full h-full object-cover pointer-events-none"
                                        />
                                      </div>
                                    </div>
                                    <div className="border-b border-black/10 my-2" />
                                  </div>
                                )}

                                {!ex.target && !ex.groupImg && (
                                  <div className="flex items-center gap-2">
                                    <span className="text-base sm:text-lg font-black text-black">{cIdx + 1}.</span>
                                  </div>
                                )}

                                {/* 4 Photos: 2 in first row, 2 in second row */}
                                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                  {photos.map((item, iIdx) => {
                                    const isCorrect = iIdx === ex.correctIdx;
                                    const isCircled = chosenIdx === iIdx && isCorrect;
                                    const isWrong = !!blankAnswers[`${answerKey}_wrong_${iIdx}`];

                                    return (
                                      <button
                                        key={iIdx}
                                        type="button"
                                        onClick={() => {
                                          if (isCorrect) {
                                            setBlankAnswers(prev => ({
                                              ...prev,
                                              [answerKey]: iIdx
                                            }));
                                          } else {
                                            // Clicked wrong image: show curvy small wrong icon
                                            setBlankAnswers(prev => ({
                                              ...prev,
                                              [`${answerKey}_wrong_${iIdx}`]: true
                                            }));
                                          }
                                        }}
                                        className="relative aspect-square rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer transition-all active:scale-95 border-0"
                                      >
                                        <img
                                          src={item.img}
                                          alt={`Photo ${iIdx + 1}`}
                                          className="w-full h-full object-cover pointer-events-none"
                                        />

                                        {/* Chunky green tick matching reference image */}
                                        {isCircled && (
                                          <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-20 anim-pop-in pointer-events-none">
                                            <svg
                                              viewBox="0 0 100 100"
                                              className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-md"
                                            >
                                              <path
                                                d="M 22 52 L 42 74 L 80 24"
                                                fill="none"
                                                stroke="#ffffff"
                                                strokeWidth="24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              />
                                              <path
                                                d="M 22 52 L 42 74 L 80 24"
                                                fill="none"
                                                stroke="#16a34a"
                                                strokeWidth="17"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              />
                                            </svg>
                                          </div>
                                        )}

                                        {/* Chunky red X matching reference image */}
                                        {isWrong && (
                                          <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-20 anim-pop-in pointer-events-none">
                                            <svg
                                              viewBox="0 0 100 100"
                                              className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-md"
                                            >
                                              <path
                                                d="M 28 28 L 72 72 M 72 28 L 28 72"
                                                fill="none"
                                                stroke="#ffffff"
                                                strokeWidth="24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              />
                                              <path
                                                d="M 28 28 L 72 72 M 72 28 L 28 72"
                                                fill="none"
                                                stroke="#dc2626"
                                                strokeWidth="17"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              />
                                            </svg>
                                          </div>
                                        )}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}

                          {/* Below: Retry button styled like Maths quiz */}
                          <div className="flex justify-center pt-2 pb-4">
                            <button
                              type="button"
                              onClick={() => {
                                setBlankAnswers(prev => {
                                  const n = { ...prev };
                                  topicContent.exercises.forEach((exItem, cI) => {
                                    delete n[`circle_${topicContent.id}_${cI}`];
                                    const opts = exItem.items || exItem.options || [];
                                    opts.forEach((_, optIdx) => {
                                      delete n[`circle_${topicContent.id}_${cI}_wrong_${optIdx}`];
                                    });
                                  });
                                  return n;
                                });
                              }}
                              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-700 border-b-[3.5px] border-b-emerald-900 shadow-xs active:translate-y-[2px] active:border-b-[1.5px] transition-all cursor-pointer"
                            >
                              <RotateCcw className="w-4 h-4" />
                              <span>à®®à¯€à®£à¯à®Ÿà¯à®®à¯ à®šà¯†à®¯à¯</span>
                            </button>
                          </div>
                        </div>
                      ) : topicContent.id === 'nigalvai' ? (
                        /* 7. à®¨à®¿à®•à®´à¯à®µà¯ˆà®šà¯ à®šà¯Šà®²à¯à®µà¯‹à®®à¯: Story Sequencing */
                        <div className="space-y-4">
                          <div className="rounded-[22px] bg-white border border-amber-900/15 border-b-[4px] border-b-amber-900/25 p-5 shadow-sm space-y-2">
                            <h3 className="text-sm sm:text-base font-black text-[#78350f]">à®¨à®¿à®•à®´à¯à®µà¯ˆ à®µà®°à®¿à®šà¯ˆà®ªà¯à®ªà®Ÿà¯à®¤à¯à®¤à®¿à®šà¯ à®šà¯Šà®²à¯à®µà¯‹à®®à¯</h3>
                            <p className="text-xs sm:text-sm font-semibold text-[#78350f] leading-relaxed bg-amber-50/60 border border-amber-200/60 rounded-xl p-3">
                              {topicContent.intro}
                            </p>
                          </div>

                          <div className="space-y-4">
                            {topicContent.stories.map((story, stIdx) => (
                              <div
                                key={story.id}
                                className="rounded-[22px] bg-white border border-amber-900/15 border-b-[4px] border-b-amber-900/25 p-4 sm:p-5 space-y-3.5 shadow-sm"
                              >
                                <div className="flex items-center justify-between pb-2 border-b border-amber-100">
                                  <h4 className="text-sm font-black text-[#78350f]">
                                    {story.title}
                                  </h4>
                                  <span className="text-xs font-bold text-[#92400e]">
                                    à®ªà®Ÿà®¿ 1 à®®à¯à®¤à®²à¯ 4 à®µà®°à¯ˆ
                                  </span>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                  {story.steps.map((st, stepIdx) => (
                                    <div
                                      key={stepIdx}
                                      className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/60 flex items-start gap-3"
                                    >
                                      <span className="flex items-center justify-center h-7 w-7 rounded-full bg-amber-700 text-white font-black text-xs shrink-0 select-none shadow-2xs mt-0.5">
                                        {st.num}
                                      </span>
                                      <div className="min-w-0 flex-1">
                                        <div className="flex items-center gap-1.5">
                                          <span className="text-xl">{st.icon}</span>
                                          <span className="text-xs sm:text-sm font-black text-[#78350f]">{st.title}</span>
                                        </div>
                                        <p className="text-xs font-semibold text-[#92400e] leading-relaxed mt-1">
                                          {st.desc}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : topicContent.id === 'peyarai' ? (
                        /* 8. Name the Pictures: Full image 3D cards, 2 per row, black audio icon in bottom right */
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-3.5 sm:gap-5">
                            {topicContent.items.map((item, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => {
                                  if (item.audio) {
                                    if (window._currentPeyaraiAudio) {
                                      window._currentPeyaraiAudio.pause();
                                      window._currentPeyaraiAudio.currentTime = 0;
                                    }
                                    const a = new Audio(item.audio);
                                    window._currentPeyaraiAudio = a;
                                    a.play().catch(e => console.log('Audio playback error:', e));
                                  }
                                }}
                                className="relative aspect-square w-full rounded-2xl sm:rounded-3xl bg-white border-2 border-stone-300 border-b-[5px] border-b-stone-400 shadow-md hover:border-b-[6px] hover:shadow-lg active:translate-y-[2px] active:border-b-[2px] transition-all cursor-pointer overflow-hidden group outline-none focus:outline-none focus-visible:outline-none focus:ring-0 flex items-center justify-center p-0"
                              >
                                <img
                                  src={item.img}
                                  alt={item.name}
                                  className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-200"
                                />

                                {/* Black audio icon in bottom-right corner */}
                                <div
                                  className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-black shadow-md border border-black/15 flex items-center justify-center transition-transform group-hover:scale-110 active:scale-90"
                                  title="à®’à®²à®¿ à®•à¯‡à®Ÿà¯à®•"
                                >
                                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : topicContent.id === 'vaanga-ennodu' ? (
                        /* 9. à®µà®¾à®™à¯à®• à®Žà®©à¯à®©à¯‹à®Ÿà¯: Line Tracing Activity */
                        <LineTracingGame />
                      ) : topicContent.id === 'vidubattadhai' ? (
                        /* 10. à®µà®¿à®Ÿà¯à®ªà®Ÿà¯à®Ÿà®¤à¯ˆ à®µà®°à¯ˆà®µà¯‡à®©à¯: Draw Missing Parts Activity */
                        <DrawMissingPartsGame />
                      ) : topicContent.id === 'padathirkum-ezhuthirkum' ? (
                        /* 11. à®ªà®Ÿà®¤à¯à®¤à®¿à®±à¯à®•à¯à®®à¯ à®‰à®°à®¿à®¯ à®Žà®´à¯à®¤à¯à®¤à®¿à®±à¯à®•à¯à®®à¯ à®µà®£à¯à®£à®®à®¿à®Ÿà¯à®µà¯‹à®®à¯ */
                        <ColorMatchingLetterGame />
                      ) : topicContent.id === 'ezhuthai-inaippom' ? (

                        /* 12. à®Žà®´à¯à®¤à¯à®¤à¯ˆ à®‰à®°à®¿à®¯ à®ªà®Ÿà®¤à¯à®¤à¯‹à®Ÿà¯ à®‡à®£à¯ˆà®ªà¯à®ªà¯‹à®®à¯ */

                        <ConnectLetterToPictureGame />

                      ) : topicContent.id === 'nirappuven' ? (

                        /* 13. நிரப்புவேன்: விடுபட்ட எழுத்தை நிரப்புவோம் */

                        <FillInBlanksLetterGame />

                      ) : topicContent.id === 'inaippen-ezhuthuven' ? (

                        <ConnectAndWriteLetterGame />

                      ) : topicContent.id === 'ezhuthukkalai-arivom' ? (

                        /* 13. à®Žà®´à¯à®¤à¯à®¤à¯à®•à¯à®•à®³à¯ˆ à®…à®±à®¿à®µà¯‹à®®à¯ */

                        <LearnLettersGame />

                      ) : topicContent.id === 'ezhuthi-pazhaguven' ? (

                        /* 14. à®Žà®´à¯à®¤à®¿à®ªà¯ à®ªà®´à®•à¯à®µà¯‡à®©à¯ */

                        <TraceLettersGame />

                      ) : (
                        /* 1. காட்டுக்குள்ளே கொண்டாட்டம்: Song Video Player */
                        <Topic1VideoPlayer />
                      )}

                      {/* Interactive Q&A for Kids */}
                      {!['kattukulle', 'aalamarathula', 'nirappuven', 'inaippen-ezhuthuven'].includes(topicContent.id) && topicContent.questions && topicContent.questions.length > 0 && (
                        <div className="space-y-3 pt-2">
                          <h3 className="text-sm font-black text-[#78350f] px-1 flex items-center gap-1.5">
                            <span>â­</span>
                            <span>பயிற்சி வினாக்கள்</span>
                          </h3>
                          {topicContent.questions.map((qItem, qIdx) => {
                            const selectedAns = blankAnswers[`c1_q_${qIdx}`];
                            return (
                              <div
                                key={qIdx}
                                className="rounded-[20px] bg-white border border-amber-900/15 border-b-[4px] border-b-amber-900/25 p-4 sm:p-5 space-y-3 shadow-sm"
                              >
                                <h4 className="text-xs sm:text-sm font-black text-[#78350f] leading-snug">
                                  {qIdx + 1}. {qItem.q}
                                </h4>
                                <div className="grid grid-cols-2 gap-2 pt-1">
                                  {qItem.options.map((opt, optIdx) => {
                                    const isChosen = selectedAns === optIdx;
                                    const isCorrect = optIdx === qItem.answer;
                                    let btnStyle = "bg-amber-50/60 text-[#78350f] border-amber-200 hover:border-amber-400";
                                    if (selectedAns !== undefined) {
                                      if (isCorrect) btnStyle = "bg-emerald-500 text-white border-emerald-600";
                                      else if (isChosen) btnStyle = "bg-rose-500 text-white border-rose-600";
                                    }

                                    return (
                                      <button
                                        key={optIdx}
                                        onClick={() => {
                                          setBlankAnswers(prev => ({ ...prev, [`c1_q_${qIdx}`]: optIdx }));
                                        }}
                                        className={`p-2.5 rounded-xl border text-xs font-black transition-all duration-150 select-none ${btnStyle}`}
                                      >
                                        {opt}
                                      </button>
                                    );
                                  })}
                                </div>
                                {selectedAns !== undefined && (
                                  <div className="text-xs font-semibold text-[#92400e] bg-amber-50/50 p-2.5 rounded-xl border border-amber-200/50 leading-relaxed">
                                    ðŸ’¡ {qItem.explanation}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </main>
                  );
                }

                // If no topic selected: Show topic cards
                const topicsOverrideKey = `${selectedBook?.id || selectedBook?.subject || 'book'}_${selectedUnit?.id || unitNum}_topics`;
                const currentTopics = customExerciseOverrides[topicsOverrideKey] || class1Topics;

                return (
                  <main className="flex-1 overflow-y-auto px-5 pt-4 pb-28 space-y-3 animate-fade-in select-none">
                    {currentTopics.map((topic, tIdx) => {
                      const pal = CARD_COLOR_PALETTES.find(p => p.id === (topic.paletteId || topic.cardPaletteId));
                      const cardBgClass = pal ? `${pal.cardBg} border ${pal.cardBorder} ${pal.hoverBorder}` : 'bg-pink-50 border border-pink-300 border-b-[4px] border-b-pink-400 hover:border-pink-500 hover:border-b-pink-500 hover:bg-pink-100';
                      const titleColorClass = pal ? pal.titleColor : 'text-gray-900';
                      const badgeBorderClass = pal ? `border-[${pal.hexPrimary}] text-[${pal.hexPrimary}]` : 'border-pink-400 text-pink-600';

                      return (
                        <div
                          key={topic.id || tIdx}
                          onClick={() => {
                            setBlankAnswers({});
                            setSelectedExerciseOption(topic);
                          }}
                          role="button"
                          tabIndex={0}
                          className={`group relative min-h-[64px] rounded-[22px] ${cardBgClass} px-4 py-3.5 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none`}
                        >
                          {/* Left: Number circle + Title & Subtitle */}
                          <div className="flex items-center gap-3.5 min-w-0 flex-1 pr-2">
                            <div className={`flex items-center justify-center h-9 w-9 rounded-full border-2 ${badgeBorderClass} bg-white font-black text-sm shrink-0 select-none shadow-2xs`}>
                              {topic.letter || topic.num || tIdx + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className={`text-sm sm:text-base font-black ${titleColorClass} tracking-tight leading-snug break-words block`}>
                                {topic.title}
                              </span>
                              {topic.subTitle && (
                                <span className="text-xs font-bold text-gray-500 leading-snug mt-0.5 block truncate">
                                  {topic.subTitle}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Right: Chevron button */}
                          <div className="flex items-center shrink-0 ml-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-pink-300 text-pink-500 shadow-2xs group-hover:scale-105 group-hover:border-pink-400 group-hover:bg-pink-50 transition-all shrink-0">
                              <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* Edit Topics Card below last card for Admin */}
                    {isAdminMode && (
                      <div className="pt-2 pb-8">
                        <div
                          onClick={() => handleOpenEditTopicsModal(topicsOverrideKey, currentTopics.map((t, idx) => ({ letter: t.letter || String(t.num || idx + 1), title: t.title, paletteId: t.paletteId })))}
                          role="button"
                          tabIndex={0}
                          className="group relative min-h-[58px] rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-300 hover:border-slate-300 hover:border-b-slate-400 px-4 py-3 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[2px] active:border-b-[2px] shadow-sm select-none"
                        >
                          <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-900 text-white font-black text-xs shrink-0 select-none shadow-sm group-hover:scale-105 transition-transform">
                              <Pencil className="h-4 w-4 stroke-[2.5]" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-bold text-slate-800">
                                Edit Topics
                              </div>
                              <div className="text-[11px] font-semibold text-slate-400">
                                Add or edit topics and numbering
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center shrink-0 ml-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-slate-900 group-hover:text-white transition-all">
                              <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </main>
                );
              }

              const lessons = getTamilLessons(unitNum);
              const content = getTamilLessonContent(unitNum, lessonTitle);
              const karpavai = content?.karpavai;

              return (
                <main className="flex-1 overflow-y-auto px-4 sm:px-5 pt-4 pb-28 space-y-4 animate-fade-in select-none">
                  {karpavai ? (
                    <>
                      {/* ======================================================== */}
                      {/* 1. TOP TEXTBOOK BOX: "à®•à®±à¯à®ªà®µà¯ˆ à®•à®±à¯à®±à®ªà®¿à®©à¯..."              */}
                      {/* Exact match to textbook image media_1791207135429.png     */}
                      {/* ======================================================== */}
                      {/* ======================================================== */}
                      {/* BOX 1: à®µà®¿à®©à®¾ 1 - à®•à®±à¯à®ªà®µà¯ˆ à®•à®±à¯à®±à®ªà®¿à®©à¯...                     */}
                      {/* ======================================================== */}
                      <div className="border-2 border-[#4e5233] rounded-xl overflow-hidden bg-white shadow-sm">
                        
                        {/* Header bar: dark olive green with Knowledge Tree icon badge on the left */}
                        <div className="bg-[#4e5233] flex items-stretch border-b border-[#4e5233]">
                          {/* Tree Icon Badge: White box with the illustrated knowledge tree */}
                          <div className="bg-white px-3.5 py-2 flex items-center justify-center shrink-0 border-r border-[#4e5233]">
                            <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              {/* Trunk & Branches */}
                              <path d="M24 44V26M24 34L17 24M24 30L31 22M17 24L12 19M31 22L36 17" stroke="#78350F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                              {/* Root base */}
                              <path d="M19 44H29" stroke="#78350F" strokeWidth="3" strokeLinecap="round"/>
                              {/* Colorful Knowledge Symbols / Leaves */}
                              <rect x="13" y="10" width="8" height="6" rx="1" fill="#3B82F6" />
                              <circle cx="24" cy="8" r="4.5" fill="#EF4444" />
                              <text x="24" y="11" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold">à®…</text>
                              <circle cx="33" cy="11" r="4" fill="#10B981" />
                              <rect x="7" y="17" width="7" height="4" rx="1" transform="rotate(-30 7 17)" fill="#F59E0B" />
                              <circle cx="39" cy="19" r="3.5" fill="#8B5CF6" />
                              <circle cx="11" cy="25" r="3" fill="#EC4899" />
                              <rect x="33" y="24" width="7" height="5" rx="1" fill="#06B6D4" />
                            </svg>
                          </div>

                          {/* Title: à®•à®±à¯à®ªà®µà¯ˆ à®•à®±à¯à®±à®ªà®¿à®©à¯... */}
                          <div className="flex items-center px-4 py-2 flex-1">
                            <h2 className="text-white font-black text-base sm:text-lg tracking-wide select-none drop-shadow-xs">
                              {karpavai.title || "à®•à®±à¯à®ªà®µà¯ˆ à®•à®±à¯à®±à®ªà®¿à®©à¯..."}
                            </h2>
                          </div>
                        </div>

                        {/* Content for Question 1 */}
                        <div className="p-4 sm:p-5 text-xs sm:text-sm">
                          <div className="flex items-start gap-2.5">
                            <span className="font-bold text-slate-800 shrink-0 select-none text-xs sm:text-sm pt-0.5">1.</span>
                            <div className="space-y-2 flex-1 min-w-0">
                              {/* Rose poem lines only if present */}
                              {karpavai.items[0]?.rosePoemLines && karpavai.items[0].rosePoemLines.length > 0 && (
                                <div className="text-[#db2777] font-semibold leading-relaxed tracking-normal select-text text-xs sm:text-sm">
                                  {karpavai.items[0].rosePoemLines.map((line, lIdx) => (
                                    <div key={lIdx}>{line}</div>
                                  ))}
                                </div>
                              )}
                              {/* Question prompt in dark bold text */}
                              <div className="text-slate-900 font-bold leading-relaxed select-text text-xs sm:text-sm">
                                {karpavai.items[0]?.question}
                              </div>

                              {/* Answer 1 right inside Box 1 */}
                              <div className="mt-3 pt-2">
                                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2.5 select-text bg-slate-50/80 border border-slate-200/80 rounded-xl p-3 sm:p-3.5">
                                  {karpavai.qaList?.[0]?.points ? (
                                    karpavai.qaList[0].points.map((pt, pIdx) => (
                                      <div key={pIdx} className="space-y-0.5">
                                        <div className="font-bold text-slate-900 text-xs sm:text-sm">
                                          {pt.title}
                                        </div>
                                        <div className="text-slate-700 text-xs sm:text-sm font-normal leading-relaxed pl-1">
                                          {pt.desc}
                                        </div>
                                      </div>
                                    ))
                                  ) : (
                                    <div className="whitespace-pre-line leading-relaxed">
                                      {karpavai.qaList?.[0]?.a}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ======================================================== */}
                      {/* BOX 2: à®µà®¿à®©à®¾ 2                                           */}
                      {/* ======================================================== */}
                      <div className="border-2 border-[#4e5233] rounded-xl overflow-hidden bg-white shadow-sm">

                        {/* Content for Question 2 */}
                        <div className="p-4 sm:p-5 text-xs sm:text-sm">
                          <div className="flex items-start gap-2.5">
                            <span className="font-bold text-slate-800 shrink-0 select-none text-xs sm:text-sm pt-0.5">2.</span>
                            <div className="space-y-2 flex-1 min-w-0">
                              {/* Quote lines in dark text if present */}
                              {karpavai.items[1]?.quoteLines && (
                                <div className="text-slate-800 font-semibold leading-relaxed italic select-text text-xs sm:text-sm">
                                  {karpavai.items[1].quoteLines.map((line, lIdx) => (
                                    <div key={lIdx}>{line}</div>
                                  ))}
                                </div>
                              )}
                              {/* Speech prompt in dark bold text */}
                              <div className="text-slate-900 font-bold leading-relaxed select-text text-xs sm:text-sm">
                                {karpavai.items[1]?.question}
                              </div>

                              {/* Answer 2 right inside Box 2 */}
                              <div className="mt-3 pt-2">
                                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2.5 select-text bg-slate-50/80 border border-slate-200/80 rounded-xl p-3 sm:p-3.5">
                                  {karpavai.qaList?.[1]?.points ? (
                                    karpavai.qaList[1].points.map((pt, pIdx) => (
                                      <div key={pIdx} className="space-y-0.5">
                                        <div className="font-bold text-slate-900 text-xs sm:text-sm">
                                          {pt.title}
                                        </div>
                                        <div className="text-slate-700 text-xs sm:text-sm font-normal leading-relaxed pl-1">
                                          {pt.desc}
                                        </div>
                                      </div>
                                    ))
                                  ) : karpavai.qaList?.[1]?.paragraphs ? (
                                    karpavai.qaList[1].paragraphs.map((para, paraIdx) => (
                                      <p key={paraIdx} className="leading-relaxed whitespace-pre-line">
                                        {para}
                                      </p>
                                    ))
                                  ) : (
                                    <div className="whitespace-pre-line leading-relaxed">
                                      {karpavai.qaList?.[1]?.a}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-200 p-8 text-center space-y-2">
                      <p className="font-bold text-slate-800 text-sm">
                        {lessonTitle} à®µà®¿à®©à®¾ - à®µà®¿à®Ÿà¯ˆà®•à®³à¯
                      </p>
                      <p className="text-xs text-slate-500">
                        Content for this lesson will appear here soon.
                      </p>
                    </div>
                  )}

                </main>
              );
            })()
          ) : (
            <main className="flex-1 overflow-y-auto px-5 pt-4 pb-28 space-y-4">
              
              {/* Top Unit Banner with matched theme */}
              <div className={`relative rounded-[22px] ${selectedUnit.theme?.cardBg || 'bg-white'} border ${selectedUnit.theme?.cardBorder || 'border-slate-200'} p-4 text-slate-900 select-none shadow-2xs`}>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5 min-w-0 pr-2">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider ${selectedUnit.theme?.labelColor || 'text-slate-400'}`}>
                      {selectedBook.subject} • Tamil Nadu State Board
                    </span>
                    <h2 className="text-base sm:text-lg font-bold tracking-tight leading-tight text-slate-900 break-words">
                      {selectedUnit.unit} : {selectedUnit.title}
                    </h2>
                    <p className="text-xs text-slate-500">
                      {selectedUnit.topics ? `${selectedUnit.topics} Topics` : 'Comprehensive Study Material'}
                    </p>
                  </div>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white font-black text-xs shadow-xs">
                    {activeMarkTab}M
                  </div>
                </div>
              </div>

              {/* Mark Selector Tabs: 1 Mark, 2 Mark, 5 Mark, 10 Mark */}
              <div className="grid grid-cols-4 gap-2 pt-1">
                {[
                  { mark: 1, label: "1 Mark" },
                  { mark: 2, label: "2 Mark" },
                  { mark: 5, label: "5 Mark" },
                  { mark: 10, label: "10 Mark" }
                ].map(tab => {
                  const isActive = activeMarkTab === tab.mark;
                  return (
                    <button
                      key={tab.mark}
                      onClick={() => setActiveMarkTab(tab.mark)}
                      className={`h-10 rounded-2xl font-black text-xs transition-all active:scale-95 flex items-center justify-center border ${
                        isActive
                          ? 'bg-slate-900 text-white border-slate-900 border-b-[3px] border-b-black shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 border-b-[3px] border-b-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Section Header */}
              <div className="pt-2 px-1 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Question Categories
                </span>
                <span className="text-xs font-bold text-slate-500">
                  {unitCategories.length} Categories Available
                </span>
              </div>

              {/* Categories List: 1 Option Per Row */}
              <div className="space-y-2.5 pt-1 pb-8">
                {unitCategories.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => {
                      setActivePracticeOption({
                        unit: selectedUnit,
                        subject: selectedBook.subject,
                        title: `${selectedUnit.unit} - ${cat.title}`,
                        badge: `${activeMarkTab}M • ${cat.title}`,
                        badgeColor: activeMarkTab === 1 ? 'bg-blue-600' : activeMarkTab === 2 ? 'bg-emerald-600' : activeMarkTab === 5 ? 'bg-amber-600' : 'bg-purple-600',
                        questions: getCategoryQuestions(selectedBook.subject, selectedUnit, activeMarkTab, cat.id)
                      });
                    }}
                    role="button"
                    tabIndex={0}
                    className="group relative min-h-[58px] rounded-[18px] bg-white border-2 border-slate-200 hover:border-slate-300 px-4 py-2.5 flex items-center justify-between cursor-pointer transition-all duration-150 active:translate-y-[1px] select-none"
                  >
                    <div className="space-y-0.5 min-w-0 pr-3 flex-1">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug break-words">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 leading-tight break-words">
                        {cat.subtitle}
                      </p>
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-400 group-hover:text-slate-800 group-hover:border-slate-300 transition-colors shrink-0 ml-2">
                      <ChevronRight className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                  </div>
                ))}
              </div>

            </main>
          )
        )}

        {/* Floating Dark Pill Navigation Bar */}
        <div className="absolute bottom-5 left-0 right-0 px-6 flex justify-center z-40 pointer-events-none">
          <nav className="pointer-events-auto w-full max-w-[280px] rounded-full bg-[#1A1A1E]/95 backdrop-blur-md px-8 py-3.5 flex items-center justify-between text-white shadow-2xl border border-white/10">
            {/* Search */}
            <button 
              onClick={() => setActiveBottomNav('search')}
              className={`hover:text-amber-400 transition ${activeBottomNav === 'search' ? 'text-amber-400' : 'text-slate-300'}`}
              title="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Home */}
            <button 
              onClick={() => {
                setSelectedUnit(null);
                setSelectedBook(null);
                setSelectedClass(null);
                savedChaptersScrollPosRef.current = 0;
                setActiveBottomNav('home');
              }}
              className={`hover:text-amber-400 transition ${activeBottomNav === 'home' && !selectedClass && !selectedBook && !selectedUnit ? 'text-amber-400' : 'text-slate-300'}`}
              title="Home"
            >
              <Home className="h-5 w-5" />
            </button>

            {/* Download / Bookmark */}
            <button 
              onClick={() => setActiveBottomNav('downloads')}
              className={`hover:text-amber-400 transition ${activeBottomNav === 'downloads' ? 'text-amber-400' : 'text-slate-300'}`}
              title="Downloads"
            >
              <Download className="h-5 w-5" />
            </button>
          </nav>
        </div>

        {/* ======================================================== */}
        {/* ======================================================== */}
        {/* MODAL 1: REAL 3D PDF BOOK VIEWER WITH PAPER TURN ANIMATION */}
        {/* ======================================================== */}
        {isViewingBook && selectedBook && (
          <BookPdfViewer
            book={selectedBook}
            selectedClass={selectedClass}
            onClose={() => setIsViewingBook(false)}
          />
        )}

        {/* ======================================================== */}
        {/* MODAL 2: QUESTION PRACTICE & STUDY NOTES MODAL           */}
        {/* ======================================================== */}
        {activePracticeOption && selectedBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4 animate-fade-in">
            <div className="w-full max-w-sm sm:max-w-md rounded-[32px] bg-white p-4 sm:p-5 shadow-2xl border border-slate-200 animate-slide-up space-y-3.5 max-h-[88vh] flex flex-col">
              
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2 min-w-0 pr-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-white text-[10px] font-black shrink-0 ${activePracticeOption.badgeColor || 'bg-slate-900'}`}>
                    {activePracticeOption.badge}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                    {activePracticeOption.title || `${selectedBook.subject} Questions`}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setActivePracticeOption(null);
                    setSelectedMcqAnswers({});
                  }}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition shrink-0"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Content Area */}
              <div className="flex-1 overflow-y-auto space-y-3.5 pr-1 text-left">
                {activePracticeOption.questions && activePracticeOption.questions.map((qItem, qIdx) => (
                  <div key={qIdx} className="rounded-2xl bg-slate-50 p-3.5 border border-slate-200 space-y-2.5 shadow-2xs">
                    
                    {/* Badge / Subtopic Tag */}
                    {(qItem.badge || qItem.illustration) && (
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {qItem.badge && (
                          <span className="px-2 py-0.5 rounded-md text-[9.5px] font-black uppercase tracking-wider bg-purple-100 text-purple-900 border border-purple-200">
                            {qItem.badge}
                          </span>
                        )}
                        {qItem.illustration && (
                          <span className="px-2 py-0.5 rounded-md text-[9.5px] font-bold text-slate-600 bg-white border border-slate-200">
                            {qItem.illustration}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Question Title or Study Note Header */}
                    {qItem.title ? (
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                        {qItem.title}
                      </h4>
                    ) : qItem.q ? (
                      <div className="text-xs sm:text-[13px] font-extrabold text-slate-900 leading-snug whitespace-pre-line">
                        {activePracticeOption.questions.length > 1 && !qItem.q.startsWith("[") ? `Q${qIdx + 1}. ` : ""}{qItem.q}
                      </div>
                    ) : null}

                    {/* Faraday or Historical Quote Card */}
                    {qItem.quote && (
                      <div className="p-3 rounded-xl bg-purple-50/90 border border-purple-200 text-purple-950 space-y-1">
                        <p className="text-xs italic leading-relaxed font-serif">â€œ{qItem.quote}â€</p>
                        {qItem.author && (
                          <p className="text-[10px] font-black text-purple-800 not-italic text-right">
                            â€” {qItem.author}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Summary Description */}
                    {qItem.summary && (
                      <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                        {qItem.summary}
                      </p>
                    )}

                    {/* Thinking Corner / Note Callout */}
                    {qItem.callout && (
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 space-y-1.5">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="px-1.5 py-0.5 rounded text-[9.5px] font-black uppercase tracking-wide bg-amber-500 text-white shadow-2xs">
                            {qItem.callout.title || "Thinking Corner"}
                          </span>
                          <span className="text-xs font-bold text-amber-900 leading-tight">
                            {qItem.callout.question}
                          </span>
                        </div>
                        <div className="text-[11px] text-amber-950 font-medium pl-1 pt-1.5 border-t border-amber-200/70 leading-relaxed">
                          <span className="font-black text-amber-800">Answer: </span>
                          {qItem.callout.answer}
                        </div>
                      </div>
                    )}

                    {/* Data / Illustration Table */}
                    {qItem.table && (
                      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                        <table className="w-full text-left text-[10.5px] border-collapse">
                          <thead>
                            <tr className="bg-slate-100/90 border-b border-slate-200 text-slate-800 font-extrabold">
                              {qItem.table.headers.map((h, hIdx) => (
                                <th key={hIdx} className="p-2 border-r last:border-r-0 border-slate-200">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {qItem.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="border-b last:border-b-0 border-slate-100 hover:bg-slate-50">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="p-2 border-r last:border-r-0 border-slate-100 text-slate-800 font-medium leading-tight">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* If MCQ Options */}
                    {qItem.options && (
                      <div className="space-y-1.5 pt-1">
                        {qItem.options.map((opt, optIdx) => {
                          const isSelected = selectedMcqAnswers[qIdx] === optIdx;
                          const isCorrect = qItem.answer === optIdx;
                          let btnStyle = "bg-white text-slate-700 border-slate-200 hover:bg-slate-100";
                          if (selectedMcqAnswers[qIdx] !== undefined) {
                            if (isCorrect) {
                              btnStyle = "bg-emerald-600 text-white border-emerald-700 font-bold";
                            } else if (isSelected) {
                              btnStyle = "bg-blue-600 text-white border-blue-700 font-bold";
                            } else {
                              btnStyle = "bg-slate-100 text-slate-400 border-slate-200 font-medium";
                            }
                          }
                          return (
                            <button
                              key={optIdx}
                              onClick={() => {
                                setSelectedMcqAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
                              }}
                              className={`w-full text-left text-xs px-3 py-2 rounded-xl border flex items-center justify-between transition ${btnStyle}`}
                            >
                              <span>{String.fromCharCode(65 + optIdx)}. {opt}</span>
                              {selectedMcqAnswers[qIdx] !== undefined && isCorrect && (
                                <Check className="h-3.5 w-3.5 shrink-0 stroke-[3]" />
                              )}
                            </button>
                          );
                        })}

                        {selectedMcqAnswers[qIdx] !== undefined && qItem.explanation && (
                          <div className="mt-2 p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-[11px] text-blue-950 font-medium">
                            <span className="font-bold text-blue-900">Explanation: </span>
                            {qItem.explanation}
                          </div>
                        )}
                      </div>
                    )}

                    {/* If Written Points / Answer Steps */}
                    {qItem.points && (
                      <div className="space-y-1.5 pt-1">
                        {qItem.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-700 leading-snug">
                            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                            <span className="whitespace-pre-line flex-1">{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setActivePracticeOption(null);
                  setSelectedMcqAnswers({});
                }}
                className="w-full rounded-2xl bg-slate-900 hover:bg-black py-2.5 text-xs font-bold text-white transition active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* EDIT / ADD BOOK MODAL FORM (White Primary, Black Secondary) */}
        {/* ======================================================== */}
        {bookModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
            <div className="w-full max-w-sm rounded-[32px] bg-white text-slate-900 border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.22)] p-5 space-y-4 animate-in zoom-in-95 duration-150 select-none">
              
              {/* Modal Header (White Primary, Black Secondary) */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center font-black shadow-xs">
                    {bookModal.mode === 'edit' ? <Pencil className="h-4 w-4 stroke-[2.5]" /> : <Plus className="h-4 w-4 stroke-[3]" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900 tracking-tight leading-tight">
                      {bookModal.mode === 'edit' ? 'Edit Book' : 'Add New Book'}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-semibold">
                      Class {currentClassNum}
                    </p>
                  </div>
                </div>

                {/* Right Header Actions: Close */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setBookModal(null)}
                    className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition active:scale-90 cursor-pointer"
                    title="Close"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSaveModalBook} className="space-y-3.5">
                
                {/* 1. Book Name */}
                <div>
                  <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1.5">
                    Book Name
                  </label>
                  <input
                    type="text"
                    required
                    value={bookModal.subject}
                    onChange={(e) => setBookModal({ ...bookModal, subject: e.target.value })}
                    placeholder="e.g. Mathematics, Science..."
                    className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl px-3.5 py-2.5 text-xs font-bold border border-slate-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition shadow-2xs"
                  />
                </div>

                {/* 2. Term Dropdown */}
                <div>
                  <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1.5">
                    Term
                  </label>
                  <select
                    value={bookModal.term}
                    onChange={(e) => setBookModal({ ...bookModal, term: e.target.value })}
                    className="w-full bg-white text-slate-900 rounded-xl px-3.5 py-2.5 text-xs font-bold border border-slate-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition cursor-pointer shadow-2xs"
                  >
                    <option value="Term I">Term I (பருவம் 1)</option>
                    <option value="Term II">Term II (பருவம் 2)</option>
                    <option value="Term III">Term III (பருவம் 3)</option>
                    <option value="Full Year">Full Year (முழுப் பருவம்)</option>
                  </select>
                </div>

                {/* 3. Image as Uploadable Type */}
                <div>
                  <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1.5">
                    Book Cover Image
                  </label>
                  
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setBookModal(prev => ({ ...prev, coverImage: reader.result }));
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="hidden"
                  />

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-3 p-2.5 rounded-xl border border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 hover:border-black transition cursor-pointer group"
                  >
                    {bookModal.coverImage ? (
                      <div className="relative h-12 w-9 rounded-md overflow-hidden border border-slate-300 bg-white shrink-0 shadow-2xs">
                        <img
                          src={bookModal.coverImage}
                          alt="Cover Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-12 w-9 rounded-md bg-white border border-slate-300 flex items-center justify-center text-slate-400 shrink-0 shadow-2xs">
                        <Upload className="h-4 w-4 stroke-[2.2]" />
                      </div>
                    )}
                    
                    <div className="min-w-0 flex-1">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 group-hover:text-black transition">
                        <Upload className="h-3.5 w-3.5 stroke-[2.2]" />
                        <span>{bookModal.coverImage ? 'Change Image' : 'Upload Image'}</span>
                      </span>
                      <p className="text-[10px] text-slate-500 mt-0.5 truncate font-medium">
                        {bookModal.coverImage ? 'Cover image ready' : 'Choose PNG / JPG from device'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. PDF File Upload */}
                <div>
                  <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1.5">
                    Textbook PDF
                  </label>
                  
                  <input
                    type="file"
                    ref={pdfFileInputRef}
                    accept="application/pdf"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setBookModal(prev => ({
                            ...prev,
                            pdfName: file.name,
                            pdfBuffer: reader.result
                          }));
                        };
                        reader.readAsArrayBuffer(file);
                      }
                    }}
                    className="hidden"
                  />

                  <div
                    onClick={() => pdfFileInputRef.current?.click()}
                    className="flex items-center gap-3 p-2.5 rounded-xl border border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 hover:border-black transition cursor-pointer group"
                  >
                    <div className="h-12 w-9 rounded-md bg-white border border-slate-300 flex items-center justify-center text-slate-400 shrink-0 shadow-2xs group-hover:text-red-600 group-hover:border-red-200 transition">
                      <FileText className="h-5 w-5 stroke-[2]" />
                    </div>
                    
                    <div className="min-w-0 flex-1">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 group-hover:text-black transition">
                        <Upload className="h-3.5 w-3.5 stroke-[2.2]" />
                        <span>{bookModal.pdfName ? 'Change PDF' : 'Upload PDF'}</span>
                      </span>
                      <p className="text-[10px] text-slate-500 mt-0.5 truncate font-medium">
                        {bookModal.pdfName ? bookModal.pdfName : 'Choose PDF file from device'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Medium Selection Dropdown */}
                <div>
                  <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1.5">
                    Medium
                  </label>
                  <select
                    value={bookModal.medium}
                    onChange={(e) => setBookModal({ ...bookModal, medium: e.target.value })}
                    className="w-full bg-white text-slate-900 rounded-xl px-3.5 py-2.5 text-xs font-bold border border-slate-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition cursor-pointer shadow-2xs"
                  >
                    <option value="Tamil Medium">Tamil Medium</option>
                    <option value="English Medium">English Medium</option>
                  </select>
                </div>

                {/* Buttons (White Primary, Black Secondary UI) */}
                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-black hover:bg-slate-800 text-white font-black text-xs shadow-md transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <Check className="h-4 w-4 stroke-[3]" />
                    <span>{bookModal.mode === 'edit' ? 'Save Changes' : 'Add Book'}</span>
                  </button>

                  {/* Delete Book button in edit mode */}
                  {bookModal.mode === 'edit' && (
                    <button
                      type="button"
                      onClick={handleDeleteModalBook}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-red-600 hover:bg-red-50 border border-red-200 font-bold text-xs transition active:scale-[0.98] cursor-pointer"
                    >
                      <Trash2 className="h-3.5 w-3.5 stroke-[2.2]" />
                      <span>Delete Book</span>
                    </button>
                  )}
                  
                  <button
                    type="button"
                    onClick={() => setBookModal(null)}
                    className="w-full py-2 px-4 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold text-xs transition active:scale-[0.98] cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* ADD / EDIT CARD MODAL (Units, Tamil, English, Maths, Science, Social + 16 Color Palettes) */}
        {/* ======================================================== */}
        {cardModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-150">
            <div className="w-full max-w-sm rounded-[32px] bg-white text-slate-900 border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.22)] p-5 space-y-4 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150 select-none">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center font-black shadow-xs">
                    {cardModal.mode === 'edit' ? (
                      <Pencil className="h-3.5 w-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="h-4 w-4 stroke-[3]" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900 tracking-tight leading-tight">
                      {cardModal.format === 'tamil'
                        ? (cardModal.mode === 'edit' ? 'அட்டையைத் திருத்து' : 'அட்டை சேர்')
                        : (cardModal.mode === 'edit' ? 'Edit Card' : 'Add Card')}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-semibold truncate max-w-[190px]">
                      {selectedBook?.subject || 'Current Book'}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setCardModal(null)}
                  className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition active:scale-90 cursor-pointer"
                  title={cardModal.format === 'tamil' ? 'மூடு' : 'Close'}
                  aria-label={cardModal.format === 'tamil' ? 'மூடு' : 'Close'}
                >
                  <X className="h-4 w-4 stroke-[2.5]" />
                </button>
              </div>

              {/* Form */}
              {(() => {
                const getFieldPalette = (palId, fallbackId = 'solid-black') => {
                  return CARD_COLOR_PALETTES.find(p => p.id === palId) ||
                         (palId === 'dark-navy' ? CARD_COLOR_PALETTES.find(p => p.id === 'slate-grey') : null) ||
                         CARD_COLOR_PALETTES.find(p => p.id === fallbackId) ||
                         CARD_COLOR_PALETTES[0];
                };

                const mainPal = getFieldPalette(cardModal.selectedPaletteId, 'solid-black');
                const isTamil = cardModal.format === 'tamil';

                const unitPal = getFieldPalette(cardModal.unitPaletteId, 'solid-black');
                const titlePal = getFieldPalette(cardModal.titlePaletteId, cardModal.selectedPaletteId || 'solid-black');
                const themePal = getFieldPalette(cardModal.themePaletteId, 'solid-black');

                return (
                  <form onSubmit={handleSaveModalCard} className="space-y-3.5">
                    
                    {/* 1. Card Format Dropdown */}
                    {(() => {
                      const subjectNorm = (selectedBook?.subject || '').toLowerCase();
                      let subjectFmt = null;
                      if (subjectNorm.includes('tamil')) subjectFmt = { value: 'tamil', label: 'தமிழ் (Tamil)' };
                      else if (subjectNorm.includes('english')) subjectFmt = { value: 'english', label: 'English' };
                      else if (subjectNorm.includes('math')) subjectFmt = { value: 'maths', label: 'Maths' };
                      else if (subjectNorm.includes('science') && !subjectNorm.includes('social')) subjectFmt = { value: 'science', label: 'Science' };
                      else if (subjectNorm.includes('social')) subjectFmt = { value: 'social', label: 'Social Science' };

                      return (
                        <div>
                          <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1.5">
                            {isTamil ? 'அட்டை வடிவம்' : 'Card Format'}
                          </label>
                          <select
                            value={cardModal.format}
                            onChange={(e) => {
                              const newFmt = e.target.value;
                              let defPalette = 'solid-black';
                              let defUnit = `Unit ${bookChapters.length + 1}`;
                              if (newFmt === 'tamil') {
                                defPalette = 'solid-black';
                                defUnit = `இயல் ${bookChapters.length + 1}`;
                              } else if (newFmt === 'english') {
                                defPalette = 'solid-black';
                                defUnit = `Unit ${bookChapters.length + 1}`;
                              } else if (newFmt === 'maths') {
                                defPalette = 'solid-black';
                                defUnit = `Chapter ${bookChapters.length + 1}`;
                              } else if (newFmt === 'science') {
                                defPalette = 'solid-black';
                                defUnit = `Unit 1`;
                              } else if (newFmt === 'social') {
                                defPalette = 'solid-black';
                                defUnit = `Unit ${bookChapters.length + 1}`;
                              } else {
                                defPalette = 'solid-black';
                                defUnit = `Unit ${bookChapters.length + 1}`;
                              }
                              setCardModal(prev => ({
                                ...prev,
                                format: newFmt,
                                selectedPaletteId: defPalette,
                                unitPaletteId: 'solid-black',
                                titlePaletteId: defPalette,
                                themePaletteId: 'solid-black',
                                prosePaletteId: 'solid-black',
                                poemPaletteId: 'solid-black',
                                supplementaryPaletteId: 'solid-black',
                                grammarPaletteId: 'solid-black',
                                unitName: defUnit,
                                sectionName: newFmt === 'social' ? (prev.sectionName || 'History') : prev.sectionName,
                                extraTitles: [],
                                subtopics: (newFmt === 'tamil')
                                  ? [{ title: '', type: 'பாடம்', hasAsterisk: false, paletteId: 'solid-black' }]
                                  : (newFmt === 'maths')
                                  ? [{ code: `${bookChapters.length + 1}.1`, title: '', paletteId: defPalette }]
                                  : []
                              }));
                              setActiveColorField('titlePaletteId');
                            }}
                            className="w-full bg-white text-slate-900 rounded-xl px-3.5 py-2.5 text-xs font-bold border border-slate-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition cursor-pointer shadow-2xs"
                          >
                            <option value="units">Units</option>
                            {subjectFmt && (
                              <option value={subjectFmt.value}>{subjectFmt.label}</option>
                            )}
                            {cardModal.format !== 'units' && (!subjectFmt || cardModal.format !== subjectFmt.value) && (
                              <option value={cardModal.format}>
                                {cardModal.format === 'tamil' ? 'தமிழ் (Tamil)' :
                                 cardModal.format === 'english' ? 'English' :
                                 cardModal.format === 'maths' ? 'Maths' :
                                 cardModal.format === 'science' ? 'Science' :
                                 cardModal.format === 'social' ? 'Social Science' : cardModal.format}
                              </option>
                            )}
                          </select>
                        </div>
                      );
                    })()}

                    {/* 2. Format-Specific Input Fields */}
                    {/* A. UNITS FORMAT */}
                    {cardModal.format === 'units' && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1">
                            Unit Name
                          </label>
                          <input
                            type="text"
                            value={cardModal.unitName}
                            onChange={(e) => setCardModal({ ...cardModal, unitName: e.target.value })}
                            placeholder="e.g. Unit 1"
                            className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl px-3.5 py-2.5 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                          />
                        </div>
                            {/* Unit Titles (Numbered 1, 2, 3, 4, 5...) */}
                            <div>
                              <div className="mb-2">
                                <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 leading-tight">
                                  Unit Titles
                                </label>
                              </div>

                              {(() => {
                                const displayTitles = (cardModal.titles && cardModal.titles.length > 0)
                                  ? cardModal.titles
                                  : [
                                      { title: cardModal.titleName || '', paletteId: cardModal.titlePaletteId || 'solid-black' },
                                      ...(cardModal.extraTitles || [])
                                    ];

                                return (
                                  <div className="space-y-2">
                                    <div className="space-y-2">
                                      {displayTitles.map((tItem, tIdx) => {
                                        const itemPal = getFieldPalette(tItem.paletteId, 'solid-black');
                                        const isFirst = tIdx === 0;

                                        return (
                                          <div key={tIdx} className="flex items-center gap-2">
                                            {/* Title Input with color dot */}
                                            <div className="relative flex-1 flex items-center">
                                              <input
                                                type="text"
                                                required={isFirst}
                                                value={tItem.title || ''}
                                                onChange={(e) => {
                                                  const nextTitles = [...displayTitles];
                                                  nextTitles[tIdx] = { ...nextTitles[tIdx], title: e.target.value };
                                                  setCardModal({
                                                    ...cardModal,
                                                    titles: nextTitles,
                                                    titleName: nextTitles[0]?.title || '',
                                                    extraTitles: nextTitles.slice(1)
                                                  });
                                                }}
                                                onFocus={() => setActiveColorField(`title-${tIdx}`)}
                                                onDragOver={(e) => {
                                                  e.preventDefault();
                                                  e.stopPropagation();
                                                  e.dataTransfer.dropEffect = 'copy';
                                                }}
                                                onDrop={(e) => {
                                                  e.preventDefault();
                                                  e.stopPropagation();
                                                  const palId = e.dataTransfer.getData('text/plain');
                                                  if (palId) {
                                                    const nextTitles = [...displayTitles];
                                                    nextTitles[tIdx] = { ...nextTitles[tIdx], paletteId: palId };
                                                    setCardModal({
                                                      ...cardModal,
                                                      titles: nextTitles,
                                                      titleName: nextTitles[0]?.title || '',
                                                      extraTitles: nextTitles.slice(1)
                                                    });
                                                  }
                                                }}
                                                placeholder={isFirst ? "Living World, Force & Pressure..." : `Unit Title ${tIdx + 1}...`}
                                                className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl pl-3.5 pr-9 py-2 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                                              />
                                              <div
                                                className="absolute right-3 flex items-center cursor-pointer"
                                                onClick={() => setActiveColorField(`title-${tIdx}`)}
                                                onDragOver={(e) => {
                                                  e.preventDefault();
                                                  e.stopPropagation();
                                                  e.dataTransfer.dropEffect = 'copy';
                                                }}
                                                onDrop={(e) => {
                                                  e.preventDefault();
                                                  e.stopPropagation();
                                                  const palId = e.dataTransfer.getData('text/plain');
                                                  if (palId) {
                                                    const nextTitles = [...displayTitles];
                                                    nextTitles[tIdx] = { ...nextTitles[tIdx], paletteId: palId };
                                                    setCardModal({
                                                      ...cardModal,
                                                      titles: nextTitles,
                                                      titleName: nextTitles[0]?.title || '',
                                                      extraTitles: nextTitles.slice(1)
                                                    });
                                                  }
                                                }}
                                              >
                                                <span
                                                  className="h-3.5 w-3.5 rounded-full shadow-2xs border border-white/90 ring-1 ring-black/10 shrink-0 transition hover:scale-125"
                                                  style={{ backgroundColor: itemPal.hexPrimary }}
                                                  title={itemPal.name}
                                                />
                                              </div>
                                            </div>

                                            {/* Delete button (if more than 1 title) */}
                                            {displayTitles.length > 1 && (
                                              <button
                                                type="button"
                                                onClick={() => {
                                                  const nextTitles = displayTitles.filter((_, i) => i !== tIdx);
                                                  setCardModal({
                                                    ...cardModal,
                                                    titles: nextTitles,
                                                    titleName: nextTitles[0]?.title || '',
                                                    extraTitles: nextTitles.slice(1)
                                                  });
                                                }}
                                                className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition shrink-0 cursor-pointer"
                                                title="Remove Title"
                                              >
                                                <Trash2 className="h-4 w-4" />
                                              </button>
                                            )}
                                          </div>
                                        );
                                      })}
                                    </div>

                                    {/* + Add Title Button placed below like add topics */}
                                    <button
                                      type="button"
                                      onClick={() => {
                                        const curTitles = (cardModal.titles && cardModal.titles.length > 0)
                                          ? cardModal.titles
                                          : [
                                              { title: cardModal.titleName || '', paletteId: cardModal.titlePaletteId || 'solid-black' },
                                              ...(cardModal.extraTitles || [])
                                            ];
                                        const nextTitles = [...curTitles, { title: '', paletteId: 'solid-black' }];
                                        setCardModal({
                                          ...cardModal,
                                          titles: nextTitles,
                                          titleName: nextTitles[0]?.title || '',
                                          extraTitles: nextTitles.slice(1)
                                        });
                                      }}
                                      className="w-full py-2.5 px-3 rounded-xl border-2 border-dashed border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center transition cursor-pointer mt-1"
                                    >
                                      <span>+ Add Title</span>
                                    </button>
                                  </div>
                                );
                              })()}
                            </div>
                      </div>
                    )}

                    {/* B. TAMIL FORMAT: Pure Tamil without English words */}
                    {cardModal.format === 'tamil' && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1">
                            இயல் பெயர்
                          </label>
                          <input
                            type="text"
                            value={cardModal.unitName}
                            onChange={(e) => setCardModal({ ...cardModal, unitName: e.target.value })}
                            placeholder="இயல் 1, இயல் 2..."
                            className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl px-3.5 py-2.5 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                          />
                        </div>
                        <div>
                          <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1">
                            இயல் தலைப்பு
                          </label>
                          <div className="relative flex items-center">
                            <input
                              type="text"
                              required
                              value={cardModal.titleName}
                              onChange={(e) => setCardModal({ ...cardModal, titleName: e.target.value })}
                              onFocus={() => setActiveColorField('titlePaletteId')}
                              onDragOver={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                e.dataTransfer.dropEffect = 'copy';
                              }}
                              onDrop={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                const palId = e.dataTransfer.getData('text/plain');
                                if (palId) setCardModal(prev => ({ ...prev, titlePaletteId: palId, selectedPaletteId: palId }));
                              }}
                              placeholder="அன்னை மொழியே, உரைநடை உலகம்..."
                              className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl pl-3.5 pr-9 py-2.5 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                            />
                            <div
                              className="absolute right-3 flex items-center cursor-pointer"
                              onClick={() => setActiveColorField('titlePaletteId')}
                              onDragOver={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                e.dataTransfer.dropEffect = 'copy';
                              }}
                              onDrop={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                const palId = e.dataTransfer.getData('text/plain');
                                if (palId) setCardModal(prev => ({ ...prev, titlePaletteId: palId, selectedPaletteId: palId }));
                              }}
                            >
                              <span
                                className="h-3.5 w-3.5 rounded-full shadow-2xs border border-white/90 ring-1 ring-black/10 shrink-0 transition hover:scale-125"
                                style={{ backgroundColor: titlePal.hexPrimary }}
                                title={titlePal.name}
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1">
                            இயல் பொருள் (விருப்பத்தேர்வு)
                          </label>
                          <div className="relative flex items-center">
                            <input
                              type="text"
                              value={cardModal.themeName}
                              onChange={(e) => setCardModal({ ...cardModal, themeName: e.target.value })}
                              onFocus={() => setActiveColorField('themePaletteId')}
                              onDragOver={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                e.dataTransfer.dropEffect = 'copy';
                              }}
                              onDrop={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                const palId = e.dataTransfer.getData('text/plain');
                                if (palId) setCardModal(prev => ({ ...prev, themePaletteId: palId }));
                              }}
                              placeholder="மொழி, இயற்கை / சுற்றுச்சூழல்..."
                              className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl pl-3.5 pr-9 py-2.5 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                            />
                            <div
                              className="absolute right-3 flex items-center cursor-pointer"
                              onClick={() => setActiveColorField('themePaletteId')}
                              onDragOver={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                e.dataTransfer.dropEffect = 'copy';
                              }}
                              onDrop={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                const palId = e.dataTransfer.getData('text/plain');
                                if (palId) setCardModal(prev => ({ ...prev, themePaletteId: palId }));
                              }}
                            >
                              <span
                                className="h-3.5 w-3.5 rounded-full shadow-2xs border border-white/90 ring-1 ring-black/10 shrink-0 transition hover:scale-125"
                                style={{ backgroundColor: themePal.hexPrimary }}
                                title={themePal.name}
                              />
                            </div>
                          </div>
                        </div>

                        {/* பாடங்கள் */}
                        <div>
                          <div className="mb-1.5">
                            <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 leading-tight">
                              பாடங்கள்
                            </label>
                          </div>

                          <div className="space-y-2">
                            <div className="space-y-2">
                              {(cardModal.subtopics || []).map((sub, sIdx) => {
                                const subPal = getFieldPalette(sub.paletteId, 'crimson-rose');

                                return (
                                  <div key={sIdx} className="flex items-center gap-2">
                                    {/* Title input with direct drag-and-drop & color indicator */}
                                    <div className="relative flex-1 flex items-center">
                                      <input
                                        type="text"
                                        value={sub.title || ''}
                                        onChange={(e) => {
                                          const newSubs = [...(cardModal.subtopics || [])];
                                          newSubs[sIdx] = { ...newSubs[sIdx], title: e.target.value };
                                          setCardModal({ ...cardModal, subtopics: newSubs });
                                        }}
                                        onFocus={() => setActiveColorField(`subtopic-${sIdx}`)}
                                        onDragOver={(e) => {
                                          e.preventDefault();
                                          e.stopPropagation();
                                          e.dataTransfer.dropEffect = 'copy';
                                        }}
                                        onDrop={(e) => {
                                          e.preventDefault();
                                          e.stopPropagation();
                                          const palId = e.dataTransfer.getData('text/plain');
                                          if (palId) {
                                            const newSubs = [...(cardModal.subtopics || [])];
                                            newSubs[sIdx] = { ...newSubs[sIdx], paletteId: palId };
                                            setCardModal({ ...cardModal, subtopics: newSubs });
                                          }
                                        }}
                                        placeholder="கேட்கிறதா என் குரல்!, பரிபாடல்..."
                                        className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl pl-3 pr-9 py-2 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                                      />
                                      <div
                                        className="absolute right-2.5 flex items-center cursor-pointer"
                                        onClick={() => setActiveColorField(`subtopic-${sIdx}`)}
                                        onDragOver={(e) => {
                                          e.preventDefault();
                                          e.stopPropagation();
                                          e.dataTransfer.dropEffect = 'copy';
                                        }}
                                        onDrop={(e) => {
                                          e.preventDefault();
                                          e.stopPropagation();
                                          const palId = e.dataTransfer.getData('text/plain');
                                          if (palId) {
                                            const newSubs = [...(cardModal.subtopics || [])];
                                            newSubs[sIdx] = { ...newSubs[sIdx], paletteId: palId };
                                            setCardModal({ ...cardModal, subtopics: newSubs });
                                          }
                                        }}
                                      >
                                        <span
                                          className="h-3.5 w-3.5 rounded-full shadow-2xs border border-white/90 ring-1 ring-black/10 shrink-0 transition hover:scale-125"
                                          style={{ backgroundColor: subPal.hexPrimary }}
                                          title={subPal.name}
                                        />
                                      </div>
                                    </div>

                                    {/* Remove button */}
                                    {cardModal.subtopics && cardModal.subtopics.length > 1 && (
                                      <button
                                        type="button"
                                        onClick={() => {
                                          const newSubs = cardModal.subtopics.filter((_, i) => i !== sIdx);
                                          setCardModal({ ...cardModal, subtopics: newSubs });
                                        }}
                                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition shrink-0 cursor-pointer"
                                        title="நீக்கு"
                                      >
                                        <Trash2 className="h-4 w-4" />
                                      </button>
                                    )}
                                  </div>
                                );
                              })}
                            </div>

                            {/* + பாடம் சேர்க்க Button placed below like add topics */}
                            <button
                              type="button"
                              onClick={() => {
                                const curSubs = cardModal.subtopics || [];
                                setCardModal({
                                  ...cardModal,
                                  subtopics: [...curSubs, { title: '', type: 'பாடம்', hasAsterisk: false, paletteId: 'crimson-rose' }]
                                });
                              }}
                              className="w-full py-2.5 px-3 rounded-xl border-2 border-dashed border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center transition cursor-pointer mt-1"
                            >
                              <span>+ பாடம் சேர்க்க</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* C. ENGLISH FORMAT: Prose, Poem, Supplementary */}
                    {cardModal.format === 'english' && (() => {
                      const engUnitPal = getFieldPalette(cardModal.unitPaletteId, 'slate-charcoal');
                      const prosePal = getFieldPalette(cardModal.prosePaletteId, 'coral-red');
                      const poemPal = getFieldPalette(cardModal.poemPaletteId, 'crimson-rose');
                      const suppPal = getFieldPalette(cardModal.supplementaryPaletteId, 'sky-blue');
                      const gramPal = getFieldPalette(cardModal.grammarPaletteId, 'emerald-mint');

                      return (
                        <div className="space-y-3">
                          <div>
                            <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1">
                              Unit Name
                            </label>
                            <input
                              type="text"
                              value={cardModal.unitName}
                              onChange={(e) => setCardModal({ ...cardModal, unitName: e.target.value })}
                              placeholder="e.g. Unit 1"
                              className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl px-3.5 py-2.5 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                            />
                          </div>
                          <div>
                            <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1">
                              Prose Title
                            </label>
                            <div className="relative flex items-center">
                              <input
                                type="text"
                                value={cardModal.proseTitle}
                                onChange={(e) => setCardModal({ ...cardModal, proseTitle: e.target.value })}
                                onFocus={() => setActiveColorField('prosePaletteId')}
                                onDragOver={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  e.dataTransfer.dropEffect = 'copy';
                                }}
                                onDrop={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  const palId = e.dataTransfer.getData('text/plain');
                                  if (palId) setCardModal(prev => ({ ...prev, prosePaletteId: palId }));
                                }}
                                placeholder="e.g. His First Flight"
                                className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl pl-3.5 pr-9 py-2.5 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                              />
                              <div
                                className="absolute right-3 flex items-center cursor-pointer"
                                onDragOver={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  e.dataTransfer.dropEffect = 'copy';
                                }}
                                onDrop={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  const palId = e.dataTransfer.getData('text/plain');
                                  if (palId) setCardModal(prev => ({ ...prev, prosePaletteId: palId }));
                                }}
                              >
                                <span
                                  className="h-3.5 w-3.5 rounded-full shadow-2xs border border-white/90 ring-1 ring-black/10 shrink-0 transition hover:scale-125"
                                  style={{ backgroundColor: prosePal.hexPrimary }}
                                  title={prosePal.name}
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1">
                              Poem Title
                            </label>
                            <div className="relative flex items-center">
                              <input
                                type="text"
                                value={cardModal.poemTitle}
                                onChange={(e) => setCardModal({ ...cardModal, poemTitle: e.target.value })}
                                onFocus={() => setActiveColorField('poemPaletteId')}
                                onDragOver={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  e.dataTransfer.dropEffect = 'copy';
                                }}
                                onDrop={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  const palId = e.dataTransfer.getData('text/plain');
                                  if (palId) setCardModal(prev => ({ ...prev, poemPaletteId: palId }));
                                }}
                                placeholder="e.g. Life"
                                className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl pl-3.5 pr-9 py-2.5 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                              />
                              <div
                                className="absolute right-3 flex items-center cursor-pointer"
                                onDragOver={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  e.dataTransfer.dropEffect = 'copy';
                                }}
                                onDrop={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  const palId = e.dataTransfer.getData('text/plain');
                                  if (palId) setCardModal(prev => ({ ...prev, poemPaletteId: palId }));
                                }}
                              >
                                <span
                                  className="h-3.5 w-3.5 rounded-full shadow-2xs border border-white/90 ring-1 ring-black/10 shrink-0 transition hover:scale-125"
                                  style={{ backgroundColor: poemPal.hexPrimary }}
                                  title={poemPal.name}
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1">
                              Supplementary Title
                            </label>
                            <div className="relative flex items-center">
                              <input
                                type="text"
                                value={cardModal.supplementaryTitle}
                                onChange={(e) => setCardModal({ ...cardModal, supplementaryTitle: e.target.value })}
                                onFocus={() => setActiveColorField('supplementaryPaletteId')}
                                onDragOver={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  e.dataTransfer.dropEffect = 'copy';
                                }}
                                onDrop={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  const palId = e.dataTransfer.getData('text/plain');
                                  if (palId) setCardModal(prev => ({ ...prev, supplementaryPaletteId: palId }));
                                }}
                                placeholder="e.g. The Tempest"
                                className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl pl-3.5 pr-9 py-2.5 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                              />
                              <div
                                className="absolute right-3 flex items-center cursor-pointer"
                                onDragOver={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  e.dataTransfer.dropEffect = 'copy';
                                }}
                                onDrop={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  const palId = e.dataTransfer.getData('text/plain');
                                  if (palId) setCardModal(prev => ({ ...prev, supplementaryPaletteId: palId }));
                                }}
                              >
                                <span
                                  className="h-3.5 w-3.5 rounded-full shadow-2xs border border-white/90 ring-1 ring-black/10 shrink-0 transition hover:scale-125"
                                  style={{ backgroundColor: suppPal.hexPrimary }}
                                  title={suppPal.name}
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1">
                              Grammar Title (Optional)
                            </label>
                            <div className="relative flex items-center">
                              <input
                                type="text"
                                value={cardModal.grammarTitle || ''}
                                onChange={(e) => setCardModal({ ...cardModal, grammarTitle: e.target.value })}
                                onFocus={() => setActiveColorField('grammarPaletteId')}
                                onDragOver={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  e.dataTransfer.dropEffect = 'copy';
                                }}
                                onDrop={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  const palId = e.dataTransfer.getData('text/plain');
                                  if (palId) setCardModal(prev => ({ ...prev, grammarPaletteId: palId }));
                                }}
                                placeholder="e.g. Prepositions, Modal Verbs (optional)"
                                className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl pl-3.5 pr-9 py-2.5 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                              />
                              <div className="absolute right-3 pointer-events-none flex items-center">
                                <span
                                  className="h-3.5 w-3.5 rounded-full shadow-2xs border border-white/90 ring-1 ring-black/10 shrink-0"
                                  style={{ backgroundColor: gramPal.hexPrimary }}
                                  title={gramPal.name}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })()}

                    {/* D. MATHS FORMAT: Chapter Title & Sub-title Names */}
                    {cardModal.format === 'maths' && (() => {
                      const mathUnitPal = getFieldPalette(cardModal.unitPaletteId, 'slate-charcoal');
                      const mathTitlePal = getFieldPalette(cardModal.titlePaletteId, cardModal.selectedPaletteId || 'vibrant-purple');

                      return (
                        <div className="space-y-3">
                          <div>
                            <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1">
                              Chapter Tag / Name
                            </label>
                            <input
                              type="text"
                              value={cardModal.unitName}
                              onChange={(e) => setCardModal({ ...cardModal, unitName: e.target.value })}
                              placeholder="e.g. Chapter 1"
                              className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl px-3.5 py-2.5 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                            />
                          </div>
                          <div>
                            <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1">
                              Chapter Title Name
                            </label>
                            <div className="relative flex items-center">
                              <input
                                type="text"
                                required
                                value={cardModal.titleName}
                                onChange={(e) => setCardModal({ ...cardModal, titleName: e.target.value })}
                                onFocus={() => setActiveColorField('titlePaletteId')}
                                onDragOver={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  e.dataTransfer.dropEffect = 'copy';
                                }}
                                onDrop={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  const palId = e.dataTransfer.getData('text/plain');
                                  if (palId) setCardModal(prev => ({ ...prev, titlePaletteId: palId, selectedPaletteId: palId }));
                                }}
                                placeholder="e.g. Relations and Functions"
                                className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl pl-3.5 pr-9 py-2.5 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                              />
                               <div
                                 className="absolute right-3 flex items-center cursor-pointer"
                                 onDragOver={(e) => {
                                   e.preventDefault();
                                   e.stopPropagation();
                                   e.dataTransfer.dropEffect = 'copy';
                                 }}
                                 onDrop={(e) => {
                                   e.preventDefault();
                                   e.stopPropagation();
                                   const palId = e.dataTransfer.getData('text/plain');
                                   if (palId) setCardModal(prev => ({ ...prev, titlePaletteId: palId, selectedPaletteId: palId }));
                                 }}
                               >
                                 <span
                                   className="h-3.5 w-3.5 rounded-full shadow-2xs border border-white/90 ring-1 ring-black/10 shrink-0 transition hover:scale-125"
                                   style={{ backgroundColor: mathTitlePal.hexPrimary }}
                                   title={mathTitlePal.name}
                                 />
                               </div>
                             </div>
                           </div>

                            <div>
                              <div className="mb-1.5">
                                <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 leading-tight">
                                  Sub-title Names (Topics)
                                </label>
                              </div>

                              <div className="space-y-2">
                                <div className="space-y-2">
                                  {(cardModal.subtopics || []).map((sub, sIdx) => {
                                    const subPal = sub.paletteId ? CARD_COLOR_PALETTES.find(p => p.id === sub.paletteId) : null;

                                    return (
                                      <div key={sIdx} className="flex items-center gap-2">
                                        <input
                                          type="text"
                                          value={sub.code}
                                          onChange={(e) => {
                                            const newSubs = [...(cardModal.subtopics || [])];
                                            newSubs[sIdx] = { ...newSubs[sIdx], code: e.target.value };
                                            setCardModal({ ...cardModal, subtopics: newSubs });
                                          }}
                                          placeholder="Code (1.1)"
                                          className="w-16 bg-white text-slate-900 rounded-xl px-2.5 py-2 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                                        />
                                        <div className="relative flex-1 flex items-center">
                                          <input
                                            type="text"
                                            value={sub.title}
                                            onChange={(e) => {
                                              const newSubs = [...(cardModal.subtopics || [])];
                                              newSubs[sIdx] = { ...newSubs[sIdx], title: e.target.value };
                                              setCardModal({ ...cardModal, subtopics: newSubs });
                                            }}
                                            onFocus={() => setActiveColorField(`subtopic-${sIdx}`)}
                                            onDragOver={(e) => {
                                              e.preventDefault();
                                              e.stopPropagation();
                                              e.dataTransfer.dropEffect = 'copy';
                                            }}
                                            onDrop={(e) => {
                                              e.preventDefault();
                                              e.stopPropagation();
                                              const palId = e.dataTransfer.getData('text/plain');
                                              if (palId) {
                                                const newSubs = [...(cardModal.subtopics || [])];
                                                newSubs[sIdx] = { ...newSubs[sIdx], paletteId: palId };
                                                setCardModal({ ...cardModal, subtopics: newSubs });
                                              }
                                            }}
                                            placeholder="e.g. Ordered Pair, Cartesian Product"
                                            className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl pl-3 pr-9 py-2 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                                          />
                                          <div
                                            className="absolute right-2.5 flex items-center cursor-pointer"
                                            onClick={() => setActiveColorField(`subtopic-${sIdx}`)}
                                            onDragOver={(e) => {
                                              e.preventDefault();
                                              e.stopPropagation();
                                              e.dataTransfer.dropEffect = 'copy';
                                            }}
                                            onDrop={(e) => {
                                              e.preventDefault();
                                              e.stopPropagation();
                                              const palId = e.dataTransfer.getData('text/plain');
                                              if (palId) {
                                                const newSubs = [...(cardModal.subtopics || [])];
                                                newSubs[sIdx] = { ...newSubs[sIdx], paletteId: palId };
                                                setCardModal({ ...cardModal, subtopics: newSubs });
                                              }
                                            }}
                                          >
                                            <span
                                              className="h-3.5 w-3.5 rounded-full shadow-2xs border border-white/90 ring-1 ring-black/10 shrink-0 transition hover:scale-125"
                                              style={{ backgroundColor: subPal ? subPal.hexPrimary : '#94a3b8' }}
                                              title={subPal ? subPal.name : 'Default Grey (Drag color here)'}
                                            />
                                          </div>
                                        </div>

                                        {cardModal.subtopics && cardModal.subtopics.length > 1 && (
                                          <button
                                            type="button"
                                            onClick={() => {
                                              const newSubs = cardModal.subtopics.filter((_, i) => i !== sIdx);
                                              setCardModal({ ...cardModal, subtopics: newSubs });
                                            }}
                                            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition shrink-0 cursor-pointer"
                                            title="Remove Sub-title"
                                          >
                                            <Trash2 className="h-4 w-4" />
                                          </button>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>

                                {/* + Add Sub-title Button placed below like add topics */}
                                <button
                                  type="button"
                                  onClick={() => {
                                    const curSubs = cardModal.subtopics || [];
                                    setCardModal({
                                      ...cardModal,
                                      subtopics: [...curSubs, { code: `${bookChapters.length + 1}.${curSubs.length + 1}`, title: '', paletteId: null }]
                                    });
                                  }}
                                  className="w-full py-2.5 px-3 rounded-xl border-2 border-dashed border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center transition cursor-pointer mt-1"
                                >
                                  <span>+ Add Sub-title</span>
                                </button>
                              </div>
                            </div>
                        </div>
                      );
                    })()}

                    {/* E. SCIENCE FORMAT: Unit Name, Title Name & Unit Titles / Topics */}
                    {cardModal.format === 'science' && (() => {
                      const sciUnitPal = getFieldPalette(cardModal.unitPaletteId, 'solid-black');
                      const sciTitlePal = getFieldPalette(cardModal.titlePaletteId, cardModal.selectedPaletteId || 'solid-black');

                      return (
                        <div className="space-y-3">
                          <div>
                            <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1">
                              Unit Name
                            </label>
                            <input
                              type="text"
                              value={cardModal.unitName}
                              onChange={(e) => setCardModal({ ...cardModal, unitName: e.target.value })}
                              placeholder="e.g. Unit 1"
                              className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl px-3.5 py-2.5 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                            />
                          </div>
                          {/* Unit Titles (Numbered 1, 2, 3, 4, 5...) */}
                          <div>
                            <div className="mb-2">
                              <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 leading-tight">
                                Unit Titles
                              </label>
                            </div>

                            {(() => {
                              const displayTitles = (cardModal.titles && cardModal.titles.length > 0)
                                ? cardModal.titles
                                : [
                                    { title: cardModal.titleName || '', paletteId: cardModal.titlePaletteId || 'solid-black' },
                                    ...(cardModal.extraTitles || [])
                                  ];

                              return (
                                <div className="space-y-2">
                                  <div className="space-y-2">
                                    {displayTitles.map((tItem, tIdx) => {
                                      const itemPal = getFieldPalette(tItem.paletteId, 'solid-black');
                                      const isFirst = tIdx === 0;

                                      return (
                                        <div key={tIdx} className="flex items-center gap-2">
                                           {/* Title Input with color dot */}
                                           <div className="relative flex-1 flex items-center">
                                             <input
                                               type="text"
                                               required={isFirst}
                                               value={tItem.title || ''}
                                               onChange={(e) => {
                                                 const nextTitles = [...displayTitles];
                                                 nextTitles[tIdx] = { ...nextTitles[tIdx], title: e.target.value };
                                                 setCardModal({
                                                   ...cardModal,
                                                   titles: nextTitles,
                                                   titleName: nextTitles[0]?.title || '',
                                                   extraTitles: nextTitles.slice(1)
                                                 });
                                               }}
                                               onFocus={() => setActiveColorField(`title-${tIdx}`)}
                                               onDragOver={(e) => {
                                                 e.preventDefault();
                                                 e.stopPropagation();
                                                 e.dataTransfer.dropEffect = 'copy';
                                               }}
                                               onDrop={(e) => {
                                                 e.preventDefault();
                                                 e.stopPropagation();
                                                 const palId = e.dataTransfer.getData('text/plain');
                                                 if (palId) {
                                                   const nextTitles = [...displayTitles];
                                                   nextTitles[tIdx] = { ...nextTitles[tIdx], paletteId: palId };
                                                   setCardModal({
                                                     ...cardModal,
                                                     titles: nextTitles,
                                                     titleName: nextTitles[0]?.title || '',
                                                     extraTitles: nextTitles.slice(1)
                                                   });
                                                 }
                                               }}
                                               placeholder={isFirst ? "Laws of Motion, Optics, Thermal Physics..." : `Unit Title ${tIdx + 1}...`}
                                               className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl pl-3.5 pr-9 py-2 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                                             />
                                             <div
                                               className="absolute right-3 flex items-center cursor-pointer"
                                               onClick={() => setActiveColorField(`title-${tIdx}`)}
                                               onDragOver={(e) => {
                                                 e.preventDefault();
                                                 e.stopPropagation();
                                                 e.dataTransfer.dropEffect = 'copy';
                                               }}
                                               onDrop={(e) => {
                                                 e.preventDefault();
                                                 e.stopPropagation();
                                                 const palId = e.dataTransfer.getData('text/plain');
                                                 if (palId) {
                                                   const nextTitles = [...displayTitles];
                                                   nextTitles[tIdx] = { ...nextTitles[tIdx], paletteId: palId };
                                                   setCardModal({
                                                     ...cardModal,
                                                     titles: nextTitles,
                                                     titleName: nextTitles[0]?.title || '',
                                                     extraTitles: nextTitles.slice(1)
                                                   });
                                                 }
                                               }}
                                             >
                                               <span
                                                 className="h-3.5 w-3.5 rounded-full shadow-2xs border border-white/90 ring-1 ring-black/10 shrink-0 transition hover:scale-125"
                                                 style={{ backgroundColor: itemPal.hexPrimary }}
                                                 title={itemPal.name}
                                               />
                                             </div>
                                           </div>

                                          {/* Delete button (if more than 1 title) */}
                                          {displayTitles.length > 1 && (
                                            <button
                                              type="button"
                                              onClick={() => {
                                                const nextTitles = displayTitles.filter((_, i) => i !== tIdx);
                                                setCardModal({
                                                  ...cardModal,
                                                  titles: nextTitles,
                                                  titleName: nextTitles[0]?.title || '',
                                                  extraTitles: nextTitles.slice(1)
                                                });
                                              }}
                                              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition shrink-0 cursor-pointer"
                                              title="Remove Title"
                                            >
                                              <Trash2 className="h-4 w-4" />
                                            </button>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>

                                  {/* + Add Title Button placed below like add topics */}
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const curTitles = (cardModal.titles && cardModal.titles.length > 0)
                                        ? cardModal.titles
                                        : [
                                            { title: cardModal.titleName || '', paletteId: cardModal.titlePaletteId || 'solid-black' },
                                            ...(cardModal.extraTitles || [])
                                          ];
                                      const nextTitles = [...curTitles, { title: '', paletteId: 'solid-black' }];
                                      setCardModal({
                                        ...cardModal,
                                        titles: nextTitles,
                                        titleName: nextTitles[0]?.title || '',
                                        extraTitles: nextTitles.slice(1)
                                      });
                                    }}
                                    className="w-full py-2.5 px-3 rounded-xl border-2 border-dashed border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center transition cursor-pointer mt-1"
                                  >
                                    <span>+ Add Title</span>
                                  </button>
                                </div>
                              );
                            })()}
                          </div>
                        </div>
                      );
                    })()}

                    {/* F. SOCIAL SCIENCE FORMAT: Unit Name / Section, Title Name & Unit Titles / Topics */}
                    {cardModal.format === 'social' && (() => {
                      const socTitlePal = getFieldPalette(cardModal.titlePaletteId, cardModal.selectedPaletteId || 'solid-black');

                      return (
                        <div className="space-y-3">
                          <div>
                            <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 mb-1">
                              Unit Name
                            </label>
                            <input
                              type="text"
                              list="social-sections-list"
                              value={cardModal.unitName || cardModal.sectionName || ''}
                              onChange={(e) => setCardModal({ ...cardModal, unitName: e.target.value, sectionName: e.target.value })}
                              placeholder="e.g. History, Geography, Civics, Economics..."
                              className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl px-3.5 py-2.5 text-xs font-bold border border-slate-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition shadow-2xs"
                            />
                            <datalist id="social-sections-list">
                              <option value="History" />
                              <option value="Geography" />
                              <option value="Civics" />
                              <option value="Economics" />
                            </datalist>
                          </div>

                          {/* Unit Titles (Numbered 1, 2, 3, 4, 5...) */}
                          <div>
                            <div className="mb-2">
                              <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700 leading-tight">
                                Unit Titles
                              </label>
                            </div>

                            {(() => {
                              const displayTitles = (cardModal.titles && cardModal.titles.length > 0)
                                ? cardModal.titles
                                : [
                                    { title: cardModal.titleName || '', paletteId: cardModal.titlePaletteId || 'solid-black' },
                                    ...(cardModal.extraTitles || [])
                                  ];

                              return (
                                <div className="space-y-2">
                                  <div className="space-y-2">
                                    {displayTitles.map((tItem, tIdx) => {
                                      const itemPal = getFieldPalette(tItem.paletteId, 'solid-black');
                                      const isFirst = tIdx === 0;

                                      return (
                                        <div key={tIdx} className="flex items-center gap-2">
                                          {/* Title Input with color dot */}
                                          <div className="relative flex-1 flex items-center">
                                            <input
                                              type="text"
                                              required={isFirst}
                                              value={tItem.title || ''}
                                              onChange={(e) => {
                                                const nextTitles = [...displayTitles];
                                                nextTitles[tIdx] = { ...nextTitles[tIdx], title: e.target.value };
                                                setCardModal({
                                                  ...cardModal,
                                                  titles: nextTitles,
                                                  titleName: nextTitles[0]?.title || '',
                                                  extraTitles: nextTitles.slice(1)
                                                });
                                              }}
                                              onFocus={() => setActiveColorField(`title-${tIdx}`)}
                                              onDragOver={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                e.dataTransfer.dropEffect = 'copy';
                                              }}
                                              onDrop={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                const palId = e.dataTransfer.getData('text/plain');
                                                if (palId) {
                                                  const nextTitles = [...displayTitles];
                                                  nextTitles[tIdx] = { ...nextTitles[tIdx], paletteId: palId };
                                                  setCardModal({
                                                    ...cardModal,
                                                    titles: nextTitles,
                                                    titleName: nextTitles[0]?.title || '',
                                                    extraTitles: nextTitles.slice(1)
                                                  });
                                                }
                                              }}
                                              placeholder={isFirst ? "e.g. Outbreak of World War I and Its Aftermath..." : `Unit Title ${tIdx + 1}...`}
                                              className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl pl-3.5 pr-9 py-2 text-xs font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                                            />
                                            <div
                                              className="absolute right-3 flex items-center cursor-pointer"
                                              onClick={() => setActiveColorField(`title-${tIdx}`)}
                                              onDragOver={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                e.dataTransfer.dropEffect = 'copy';
                                              }}
                                              onDrop={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                const palId = e.dataTransfer.getData('text/plain');
                                                if (palId) {
                                                  const nextTitles = [...displayTitles];
                                                  nextTitles[tIdx] = { ...nextTitles[tIdx], paletteId: palId };
                                                  setCardModal({
                                                    ...cardModal,
                                                    titles: nextTitles,
                                                    titleName: nextTitles[0]?.title || '',
                                                    extraTitles: nextTitles.slice(1)
                                                  });
                                                }
                                              }}
                                            >
                                              <span
                                                className="h-3.5 w-3.5 rounded-full shadow-2xs border border-white/90 ring-1 ring-black/10 shrink-0 transition hover:scale-125"
                                                style={{ backgroundColor: itemPal.hexPrimary }}
                                                title={itemPal.name}
                                              />
                                            </div>
                                          </div>

                                          {/* Delete button (if more than 1 title) */}
                                          {displayTitles.length > 1 && (
                                            <button
                                              type="button"
                                              onClick={() => {
                                                const nextTitles = displayTitles.filter((_, i) => i !== tIdx);
                                                setCardModal({
                                                  ...cardModal,
                                                  titles: nextTitles,
                                                  titleName: nextTitles[0]?.title || '',
                                                  extraTitles: nextTitles.slice(1)
                                                });
                                              }}
                                              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition shrink-0 cursor-pointer"
                                              title="Remove Title"
                                            >
                                              <Trash2 className="h-4 w-4" />
                                            </button>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>

                                  {/* + Add Title Button placed below like add topics */}
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const curTitles = (cardModal.titles && cardModal.titles.length > 0)
                                        ? cardModal.titles
                                        : [
                                            { title: cardModal.titleName || '', paletteId: cardModal.titlePaletteId || 'solid-black' },
                                            ...(cardModal.extraTitles || [])
                                          ];
                                      const nextTitles = [...curTitles, { title: '', paletteId: 'solid-black' }];
                                      setCardModal({
                                        ...cardModal,
                                        titles: nextTitles,
                                        titleName: nextTitles[0]?.title || '',
                                        extraTitles: nextTitles.slice(1)
                                      });
                                    }}
                                    className="w-full py-2.5 px-3 rounded-xl border-2 border-dashed border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center transition cursor-pointer mt-1"
                                  >
                                    <span>+ Add Title</span>
                                  </button>
                                </div>
                              );
                            })()}
                          </div>
                        </div>
                      );
                    })()}

                    {/* 3. 16 VARIETY OF COLOR PALETTES (2 rows of circular dots matching user reference) */}
                    <div>
                      <div className="mb-2">
                        <label className="block text-[10.5px] font-black uppercase tracking-wider text-slate-700">
                          {isTamil ? 'வண்ணத் தேர்வு (24 வகைகள்)' : 'Choose Color Palette (24 Varieties)'}
                        </label>
                      </div>

                      {/* 2 Rows of 8 Circular Swatches */}
                      <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                        <div className="grid grid-cols-8 gap-2.5 sm:gap-3 place-items-center">
                          {CARD_COLOR_PALETTES.map((pal) => {
                            const isSelected = cardModal.selectedPaletteId === pal.id;
                            return (
                              <button
                                key={pal.id}
                                type="button"
                                draggable={true}
                                onDragStart={(e) => {
                                  e.dataTransfer.setData('text/plain', pal.id);
                                  e.dataTransfer.effectAllowed = 'copy';
                                }}
                                onClick={() => {
                                  if (activeColorField) {
                                    if (activeColorField.startsWith('title-')) {
                                      const tIdx = parseInt(activeColorField.replace('title-', ''), 10);
                                      const curTitles = (cardModal.titles && cardModal.titles.length > 0)
                                        ? [...cardModal.titles]
                                        : [{ title: cardModal.titleName || '', paletteId: cardModal.titlePaletteId || pal.id }, ...(cardModal.extraTitles || [])];
                                      if (!isNaN(tIdx) && curTitles[tIdx]) {
                                        curTitles[tIdx] = { ...curTitles[tIdx], paletteId: pal.id };
                                        setCardModal(prev => ({
                                          ...prev,
                                          titles: curTitles,
                                          titleName: curTitles[0]?.title || '',
                                          titlePaletteId: curTitles[0]?.paletteId || pal.id,
                                          extraTitles: curTitles.slice(1),
                                          selectedPaletteId: pal.id
                                        }));
                                        return;
                                      }
                                    } else if (activeColorField.startsWith('extraTitle-')) {
                                      const eIdx = parseInt(activeColorField.replace('extraTitle-', ''), 10);
                                      if (!isNaN(eIdx) && cardModal.extraTitles && cardModal.extraTitles[eIdx]) {
                                        const newExtra = [...cardModal.extraTitles];
                                        newExtra[eIdx] = { ...newExtra[eIdx], paletteId: pal.id };
                                        setCardModal(prev => ({ ...prev, extraTitles: newExtra, selectedPaletteId: pal.id }));
                                        return;
                                      }
                                    } else if (activeColorField.startsWith('subtopic-')) {
                                      const sIdx = parseInt(activeColorField.replace('subtopic-', ''), 10);
                                      if (!isNaN(sIdx) && cardModal.subtopics && cardModal.subtopics[sIdx]) {
                                        const newSubs = [...cardModal.subtopics];
                                        newSubs[sIdx] = { ...newSubs[sIdx], paletteId: pal.id };
                                        setCardModal(prev => ({ ...prev, subtopics: newSubs, selectedPaletteId: pal.id }));
                                        return;
                                      }
                                    } else {
                                      setCardModal(prev => ({ ...prev, [activeColorField]: pal.id, selectedPaletteId: pal.id }));
                                      return;
                                    }
                                  }
                                  setCardModal(prev => ({ ...prev, selectedPaletteId: pal.id, titlePaletteId: pal.id }));
                                }}
                                className={`group relative h-8 w-8 sm:h-9 sm:w-9 rounded-full transition-all duration-150 cursor-grab active:cursor-grabbing flex items-center justify-center shrink-0 ${
                                  isSelected 
                                    ? 'scale-110 shadow-md ring-2 ring-white/90' 
                                    : 'hover:scale-105 hover:shadow-xs'
                                }`}
                                style={{ backgroundColor: pal.hexPrimary }}
                                title={isTamil ? `${pal.name} (உள்ளீட்டுப் பெட்டியின் மீது இழுத்துப் போடவும்)` : `${pal.name} (Drag onto any input box or click)`}
                              >
                                {isSelected && (
                                  <span className="h-2 w-2 rounded-full bg-white shadow-xs" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Buttons (White Primary, Black Secondary UI) */}
                    <div className="pt-2 space-y-2">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-black hover:bg-slate-800 text-white font-black text-xs shadow-md transition-all active:scale-[0.98] cursor-pointer"
                      >
                        <Check className="h-4 w-4 stroke-[3]" />
                        <span>
                          {isTamil
                            ? (cardModal.mode === 'edit' ? 'சேமிக்கவும்' : 'அட்டை உருவாக்கவும்')
                            : (cardModal.mode === 'edit' ? 'Save Changes' : 'Create Card')}
                        </span>
                      </button>

                      {cardModal.mode === 'edit' && (
                        <button
                          type="button"
                          onClick={() => handleDeleteCard(cardModal.editIndex)}
                          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-red-600 hover:bg-red-50 border border-red-200 font-bold text-xs transition active:scale-[0.98] cursor-pointer"
                        >
                          <Trash2 className="h-3.5 w-3.5 stroke-[2.2]" />
                          <span>{isTamil ? 'அட்டையை நீக்கு' : 'Delete Card'}</span>
                        </button>
                      )}
                      
                      <button
                        type="button"
                        onClick={() => setCardModal(null)}
                        className="w-full py-2 px-4 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold text-xs transition active:scale-[0.98] cursor-pointer"
                      >
                        {isTamil ? 'ரத்து செய்' : 'Cancel'}
                      </button>
                    </div>
                  </form>
                );
              })()}
            </div>
          </div>
        )}

        {/* Edit Topics Modal */}
        {topicsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col max-h-[92vh] overflow-hidden animate-scale-in">
              {/* Header */}
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-50/70">
                <h3 className="text-base font-black text-slate-900 tracking-tight">
                  Edit Topics
                </h3>
                <button
                  type="button"
                  onClick={() => setTopicsModal(null)}
                  className="h-8 w-8 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-slate-800 flex items-center justify-center transition active:scale-95 cursor-pointer shadow-xs"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Scrollable Form Body */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                {/* 1. Index Style Selector Dropdown */}
                <div className="flex items-center justify-between pb-1">
                  <label className="text-xs font-black text-slate-800">
                    Index Style
                  </label>
                  <select
                    value={topicsModal.indexType || 'alphabets'}
                    onChange={(e) => handleSwitchIndexType(e.target.value)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl px-3 py-1.5 text-xs font-bold border border-slate-200 focus:outline-none cursor-pointer"
                  >
                    <option value="alphabets">Alphabets (A, B, C)</option>
                    <option value="numbers">Numbers (1, 2, 3)</option>
                    <option value="roman">Roman (I, II, III)</option>
                  </select>
                </div>

                {/* 2. Topics List (No separate index box, clean input with color dot) */}
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-800">
                    Topics
                  </label>
                  <div className="space-y-2">
                    {topicsModal.topics.map((t, tIdx) => {
                      const pal = CARD_COLOR_PALETTES.find(p => p.id === (t.paletteId || 'solid-black'));
                      const isRowActive = topicsModal.activeTopicIndex === tIdx;

                      return (
                        <div 
                          key={tIdx} 
                          className={`flex items-center gap-2 p-1.5 rounded-2xl transition border ${
                            isRowActive ? 'bg-slate-50 border-slate-300' : 'border-transparent'
                          }`}
                        >
                          {/* Topic Name Input with small color dot at the right end */}
                          <div className="relative flex-1 flex items-center">
                            <input
                              type="text"
                              value={t.title}
                              onFocus={() => setTopicsModal(prev => ({ ...prev, activeTopicIndex: tIdx }))}
                              onChange={(e) => handleTopicChange(tIdx, 'title', e.target.value)}
                              onDragOver={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                e.dataTransfer.dropEffect = 'copy';
                              }}
                              onDrop={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                const palId = e.dataTransfer.getData('text/plain');
                                if (palId) {
                                  handleTopicChange(tIdx, 'paletteId', palId);
                                  setTopicsModal(prev => ({ ...prev, activeTopicIndex: tIdx }));
                                }
                              }}
                              placeholder={`${t.letter || getIndexLabel(topicsModal.indexType, tIdx)}. Topic name`}
                              className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-xl pl-3.5 pr-9 py-2 text-xs sm:text-sm font-bold border border-slate-200 focus:border-slate-400 focus:outline-none transition shadow-2xs"
                            />
                            <div
                              className="absolute right-3 flex items-center cursor-pointer"
                              onClick={() => setTopicsModal(prev => ({ ...prev, activeTopicIndex: tIdx }))}
                              onDragOver={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                e.dataTransfer.dropEffect = 'copy';
                              }}
                              onDrop={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                const palId = e.dataTransfer.getData('text/plain');
                                if (palId) {
                                  handleTopicChange(tIdx, 'paletteId', palId);
                                  setTopicsModal(prev => ({ ...prev, activeTopicIndex: tIdx }));
                                }
                              }}
                            >
                              <span
                                className="h-3.5 w-3.5 rounded-full shadow-2xs border border-white/90 ring-1 ring-black/10 shrink-0 transition hover:scale-125"
                                style={{ backgroundColor: pal ? pal.hexPrimary : '#0f172a' }}
                                title={pal ? `${pal.name} (Drag color here)` : 'Default'}
                              />
                            </div>
                          </div>

                          {/* Remove Row Button */}
                          {topicsModal.topics.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveTopicRow(tIdx)}
                              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition shrink-0 cursor-pointer"
                              title="Remove topic"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* + Add Topic Button */}
                  <button
                    type="button"
                    onClick={handleAddTopicRow}
                    className="w-full py-2.5 px-3 rounded-xl border-2 border-dashed border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer mt-1"
                  >
                    <span>+ Add Topic</span>
                  </button>
                </div>

                {/* 3. Color Palette Swatches */}
                <div className="space-y-2 pt-1">
                  <label className="text-xs font-black text-slate-800">
                    Color Palette
                  </label>
                  <div className="grid grid-cols-8 gap-2.5 sm:gap-3 place-items-center p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                    {CARD_COLOR_PALETTES.map((pal) => {
                      const currentTopic = topicsModal.topics[topicsModal.activeTopicIndex];
                      const isSelected = currentTopic && (currentTopic.paletteId === pal.id);

                      return (
                        <button
                          key={pal.id}
                          type="button"
                          draggable={true}
                          onDragStart={(e) => {
                            e.dataTransfer.setData('text/plain', pal.id);
                            e.dataTransfer.effectAllowed = 'copy';
                          }}
                          onClick={() => {
                            if (topicsModal.activeTopicIndex >= 0) {
                              handleTopicChange(topicsModal.activeTopicIndex, 'paletteId', pal.id);
                            }
                          }}
                          className={`group relative h-8 w-8 sm:h-9 sm:w-9 rounded-full transition-all duration-150 cursor-grab active:cursor-grabbing flex items-center justify-center shrink-0 ${
                            isSelected 
                              ? 'scale-110 shadow-md ring-2 ring-slate-900' 
                              : 'hover:scale-105 hover:shadow-xs'
                          }`}
                          style={{ backgroundColor: pal.hexPrimary }}
                          title={`${pal.name} (Click to apply or drag)`}
                        >
                          {isSelected && (
                            <span className="h-2 w-2 rounded-full bg-white shadow-xs" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-4 border-t border-slate-100 bg-slate-50/70 flex flex-col gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleSaveTopics}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-black text-white font-black text-xs sm:text-sm tracking-wide shadow-md transition active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTopicsModal(null)}
                  className="w-full py-2 px-4 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold text-xs transition active:scale-[0.98] cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Save/Delete Notification Toast */}
        {saveToastMessage && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 bg-slate-900/95 backdrop-blur-md text-white text-xs font-black rounded-2xl shadow-xl border border-slate-700/50 animate-in fade-in slide-in-from-bottom-2 duration-200 flex items-center gap-2 select-none">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>{saveToastMessage}</span>
          </div>
        )}

      </div>

    </div>
  );
}
