// src/components/BooksReader.jsx
import React, { useState } from 'react';
import { useStudy } from '../context/StudyContext';
import { 
  BookOpen, 
  Bookmark, 
  BookmarkCheck, 
  Sparkles, 
  Trophy, 
  HelpCircle, 
  Copy, 
  Check, 
  Clock, 
  User, 
  ChevronLeft, 
  ChevronRight,
  Calculator
} from 'lucide-react';

export function BooksReader() {
  const { 
    activeChapter, 
    activeSubject, 
    selectedChapterId, 
    setSelectedChapterId,
    userState,
    toggleBookmark,
    setActiveTab,
    setIsAiDrawerOpen
  } = useStudy();

  const [fontSize, setFontSize] = useState('text-base');
  const [copiedFormula, setCopiedFormula] = useState(null);

  if (!activeChapter || !activeChapter.book) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center text-slate-400">
        <BookOpen className="h-12 w-12 stroke-[1.5] mb-3 text-slate-300 dark:text-slate-600" />
        <p className="text-base font-medium">Select a chapter to read its digital textbook contents.</p>
      </div>
    );
  }

  const book = activeChapter.book;
  const isBookmarked = userState?.bookmarks?.some(b => b.chapterId === selectedChapterId);

  // Flatten all chapters in current subject for next/prev navigation
  const allChapters = [];
  activeSubject?.units?.forEach(u => {
    u.chapters?.forEach(c => allChapters.push(c));
  });
  const currentIndex = allChapters.findIndex(c => c.id === selectedChapterId);
  const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null;

  const copyToClipboard = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedFormula(idx);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-16 animate-fade-in">
      
      {/* Chapter Book Header */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 transition">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span className="rounded-md bg-indigo-50 px-2 py-0.5 dark:bg-indigo-950/60">
                {activeSubject?.name} Textbook
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <Clock className="h-3 w-3" />
                {book.readTime}
              </span>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {book.title}
            </h1>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <User className="h-3.5 w-3.5" />
              <span>Authors: {book.author}</span>
            </div>
          </div>

          {/* Action bar: Bookmark & font sizing */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            {/* Font size control */}
            <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-1 text-xs dark:border-slate-800 dark:bg-slate-800">
              <button
                onClick={() => setFontSize('text-sm')}
                className={`px-2 py-1 rounded ${fontSize === 'text-sm' ? 'bg-white shadow-xs font-bold text-indigo-600 dark:bg-slate-700 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('text-base')}
                className={`px-2 py-1 rounded ${fontSize === 'text-base' ? 'bg-white shadow-xs font-bold text-indigo-600 dark:bg-slate-700 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('text-lg')}
                className={`px-2 py-1 rounded ${fontSize === 'text-lg' ? 'bg-white shadow-xs font-bold text-indigo-600 dark:bg-slate-700 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}
              >
                A+
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => toggleBookmark(activeSubject.id, activeChapter.id, activeChapter.title)}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                isBookmarked 
                  ? 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300' 
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200'
              }`}
            >
              {isBookmarked ? <BookmarkCheck className="h-4 w-4 text-amber-500" /> : <Bookmark className="h-4 w-4" />}
              <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Sections (2 Cols on lg) */}
        <div className="lg:col-span-2 space-y-6">
          {book.sections?.map((sec, idx) => (
            <article 
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {sec.heading}
              </h2>
              <div className={`prose prose-slate dark:prose-invert max-w-none ${fontSize} leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line`}>
                {sec.content}
              </div>
            </article>
          ))}

          {/* Bottom Navigation: Prev / Next Chapter */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
            {prevChapter ? (
              <button
                onClick={() => setSelectedChapterId(prevChapter.id)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                <ChevronLeft className="h-4 w-4" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-400">Previous Chapter</div>
                  <div className="font-bold truncate max-w-[160px] sm:max-w-xs">{prevChapter.title}</div>
                </div>
              </button>
            ) : <div />}

            {nextChapter ? (
              <button
                onClick={() => setSelectedChapterId(nextChapter.id)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                <div className="text-right">
                  <div className="text-[10px] text-slate-400">Next Chapter</div>
                  <div className="font-bold truncate max-w-[160px] sm:max-w-xs">{nextChapter.title}</div>
                </div>
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : <div />}
          </div>
        </div>

        {/* Right Sidebar: Formulas & AI Quick Actions */}
        <div className="space-y-6">
          {/* Formula Cheatsheet Card */}
          {book.formulas && book.formulas.length > 0 && (
            <div className="rounded-2xl border border-indigo-100 bg-gradient-to-b from-indigo-50/50 to-white p-5 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-900/60">
              <div className="flex items-center gap-2 mb-4 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
                <Calculator className="h-4 w-4" />
                <span>Chapter Formula Sheet</span>
              </div>
              <div className="space-y-3">
                {book.formulas.map((form, fIdx) => (
                  <div 
                    key={fIdx}
                    className="rounded-xl border border-slate-200/80 bg-white p-3 dark:border-slate-800 dark:bg-slate-800/80 shadow-xs"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400">
                      <span>{form.label}</span>
                      <button
                        onClick={() => copyToClipboard(form.formula, fIdx)}
                        className="rounded p-1 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                        title="Copy formula"
                      >
                        {copiedFormula === fIdx ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                    <div className="mt-1 font-mono text-sm font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50/50 dark:bg-indigo-950/30 px-2 py-1 rounded">
                      {form.formula}
                    </div>
                    <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 italic">
                      {form.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Study Actions */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Chapter Power-Ups
            </div>

            <button
              onClick={() => setIsAiDrawerOpen(true)}
              className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 p-3 text-xs font-bold text-white shadow-md hover:from-indigo-500 hover:to-purple-500 transition"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>Explain With AI Tutor</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => setActiveTab('qa')}
              className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs font-bold text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 transition"
            >
              <div className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-indigo-500" />
                <span>Practice Q&A Recall</span>
              </div>
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className="flex w-full items-center justify-between rounded-xl border border-amber-200 bg-amber-50/50 p-3 text-xs font-bold text-amber-800 hover:bg-amber-100/50 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-300 transition"
            >
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-amber-500" />
                <span>Test Knowledge In Quiz</span>
              </div>
              <ChevronRight className="h-4 w-4 text-amber-500" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
