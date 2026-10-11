// src/components/Navbar.jsx
import React, { useState } from 'react';
import { useStudy } from '../context/StudyContext';
import { 
  BookOpen, 
  Sparkles, 
  Flame, 
  Moon, 
  Sun, 
  Search, 
  Settings, 
  GraduationCap, 
  ChevronDown 
} from 'lucide-react';

export function Navbar({ onOpenSettings }) {
  const { 
    grades, 
    selectedGrade, 
    setSelectedGrade, 
    subjects, 
    selectedSubjectId, 
    setSelectedSubjectId,
    activeSubject,
    userState,
    searchQuery,
    setSearchQuery,
    darkMode,
    toggleDarkMode,
    isAiDrawerOpen,
    setIsAiDrawerOpen,
    setActiveTab
  } = useStudy();

  const [isGradeDropdownOpen, setIsGradeDropdownOpen] = useState(false);
  const currentGradeObj = grades.find(g => g.id === selectedGrade) || grades[0];
  const currentStreak = userState?.profile?.streakDays || 1;

  // Filter subjects for the active grade
  const filteredSubjects = subjects.filter(s => s.gradeId === selectedGrade);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 transition-colors">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        
        {/* Left: Brand Logo & Grade Selector */}
        <div className="flex items-center gap-4">
          <div 
            onClick={() => setActiveTab('syllabus')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-300">
                StudyVerse
              </span>
              <span className="ml-1.5 rounded-md bg-indigo-100 px-1.5 py-0.5 text-[10px] font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                AI
              </span>
            </div>
          </div>

          <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>

          {/* Grade Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsGradeDropdownOpen(!isGradeDropdownOpen)}
              className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition"
            >
              <GraduationCap className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>{currentGradeObj?.name || 'Select Grade'}</span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </button>

            {isGradeDropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-slate-800 dark:bg-slate-900 z-50 animate-fade-in">
                <div className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Select Grade Level
                </div>
                {grades.map(g => (
                  <button
                    key={g.id}
                    onClick={() => {
                      setSelectedGrade(g.id);
                      setIsGradeDropdownOpen(false);
                      // Switch to first subject in new grade
                      const firstSubj = subjects.find(s => s.gradeId === g.id);
                      if (firstSubj) setSelectedSubjectId(firstSubj.id);
                    }}
                    className={`w-full rounded-lg px-2.5 py-2 text-left text-xs font-medium transition ${
                      selectedGrade === g.id
                        ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300'
                        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="font-semibold">{g.name}</div>
                    <div className="text-[11px] text-slate-400">{g.description}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center: Search Box */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search syllabus, notes, formulas, or Q&A..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-1.5 pl-9 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100 dark:focus:bg-slate-900 transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Right: Actions, Streaks, AI Tutor trigger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Daily Streak */}
          <div 
            title={`${currentStreak} Day Study Streak! Keep it going!`}
            className="flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-600 border border-amber-200/60 dark:bg-amber-950/40 dark:border-amber-900/50 dark:text-amber-400"
          >
            <Flame className="h-3.5 w-3.5 fill-amber-500 text-amber-500 animate-bounce" />
            <span>{currentStreak}d</span>
          </div>

          {/* AI Tutor Launcher Button */}
          <button
            onClick={() => setIsAiDrawerOpen(!isAiDrawerOpen)}
            className="relative flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:from-indigo-500 hover:to-purple-500 active:scale-95 transition-all"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Ask AI Tutor</span>
            <span className="sm:hidden">AI</span>
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-slate-900 animate-pulse"></span>
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleDarkMode}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Settings Modal Button */}
          <button
            onClick={onOpenSettings}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition"
            title="Settings & API Key"
          >
            <Settings className="h-4 w-4" />
          </button>
        </div>

      </div>
    </header>
  );
}
