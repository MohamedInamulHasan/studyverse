// src/context/StudyContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../utils/api';

const StudyContext = createContext();

export function StudyProvider({ children }) {
  const [grades, setGrades] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState('grade-12');
  const [selectedSubjectId, setSelectedSubjectId] = useState('physics-12');
  const [activeSubject, setActiveSubject] = useState(null);
  const [selectedChapterId, setSelectedChapterId] = useState('chap-phy-101');
  const [activeChapter, setActiveChapter] = useState(null);
  
  const [userState, setUserState] = useState({
    profile: { streakDays: 4, completedTopics: [] },
    customNotes: [],
    bookmarks: [],
    quizHistory: []
  });

  const [activeTab, setActiveTab] = useState('syllabus'); // 'syllabus' | 'books' | 'notes' | 'qa' | 'quiz' | 'ai'
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [geminiApiKey, setGeminiApiKey] = useState(localStorage.getItem('studyverse_gemini_key') || '');
  const [isAiDrawerOpen, setIsAiDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Initialize Curriculum & User State
  useEffect(() => {
    async function loadInitialData() {
      try {
        setLoading(true);
        const [currData, userData] = await Promise.all([
          api.getCurriculum(),
          api.getUserState()
        ]);

        if (currData.grades) setGrades(currData.grades);
        if (currData.subjects) setSubjects(currData.subjects);
        if (userData) setUserState(userData);

        if (userData.profile?.selectedGrade) {
          setSelectedGrade(userData.profile.selectedGrade);
        }
        if (userData.profile?.selectedSubject) {
          setSelectedSubjectId(userData.profile.selectedSubject);
        }
        if (userData.profile?.selectedChapter) {
          setSelectedChapterId(userData.profile.selectedChapter);
        }
      } catch (err) {
        console.error('Failed to load initial study data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadInitialData();
  }, []);

  // Fetch subject details when selectedSubjectId changes
  useEffect(() => {
    if (!selectedSubjectId) return;
    async function fetchSubject() {
      try {
        const sub = await api.getSubject(selectedSubjectId);
        setActiveSubject(sub);
        // If current chapter doesn't belong to this subject, pick first chapter
        let foundChapter = false;
        if (sub.units && sub.units.length > 0) {
          for (const u of sub.units) {
            if (u.chapters.some(c => c.id === selectedChapterId)) {
              foundChapter = true;
              break;
            }
          }
          if (!foundChapter && sub.units[0]?.chapters?.[0]) {
            setSelectedChapterId(sub.units[0].chapters[0].id);
          }
        }
      } catch (err) {
        console.error('Error fetching subject:', err);
      }
    }
    fetchSubject();
  }, [selectedSubjectId]);

  // Fetch chapter details when selectedChapterId changes
  useEffect(() => {
    if (!selectedChapterId) return;
    async function fetchChapter() {
      try {
        const ch = await api.getChapter(selectedChapterId);
        setActiveChapter(ch);
      } catch (err) {
        console.error('Error fetching chapter:', err);
      }
    }
    fetchChapter();
  }, [selectedChapterId]);

  // Handle topic toggle
  const toggleTopic = async (topic) => {
    try {
      const res = await api.toggleTopicCompletion(topic);
      setUserState(prev => ({
        ...prev,
        profile: {
          ...prev.profile,
          completedTopics: res.completedTopics
        }
      }));
    } catch (err) {
      console.error('Error toggling topic:', err);
    }
  };

  // Handle bookmark toggle
  const toggleBookmark = async (subjectId, chapterId, title) => {
    try {
      const res = await api.toggleBookmark({ subjectId, chapterId, title });
      setUserState(prev => ({
        ...prev,
        bookmarks: res.bookmarks
      }));
    } catch (err) {
      console.error('Error toggling bookmark:', err);
    }
  };

  // Save custom note
  const addCustomNote = async (title, content) => {
    try {
      const newNote = await api.createCustomNote({
        title,
        content,
        subjectId: selectedSubjectId,
        chapterId: selectedChapterId
      });
      setUserState(prev => ({
        ...prev,
        customNotes: [newNote, ...prev.customNotes]
      }));
      return newNote;
    } catch (err) {
      console.error('Error adding note:', err);
    }
  };

  const deleteCustomNote = async (id) => {
    try {
      await api.deleteCustomNote(id);
      setUserState(prev => ({
        ...prev,
        customNotes: prev.customNotes.filter(n => n.id !== id)
      }));
    } catch (err) {
      console.error('Error deleting note:', err);
    }
  };

  // Update Gemini API key
  const updateGeminiKey = (key) => {
    setGeminiApiKey(key);
    localStorage.setItem('studyverse_gemini_key', key);
  };

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  return (
    <StudyContext.Provider
      value={{
        grades,
        subjects,
        selectedGrade,
        setSelectedGrade,
        selectedSubjectId,
        setSelectedSubjectId,
        activeSubject,
        selectedChapterId,
        setSelectedChapterId,
        activeChapter,
        userState,
        setUserState,
        activeTab,
        setActiveTab,
        searchQuery,
        setSearchQuery,
        darkMode,
        toggleDarkMode,
        geminiApiKey,
        updateGeminiKey,
        isAiDrawerOpen,
        setIsAiDrawerOpen,
        toggleTopic,
        toggleBookmark,
        addCustomNote,
        deleteCustomNote,
        loading
      }}
    >
      {children}
    </StudyContext.Provider>
  );
}

export const useStudy = () => useContext(StudyContext);
