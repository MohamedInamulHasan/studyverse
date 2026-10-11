// src/components/SyllabusViewer.jsx
import React from 'react';
import { useStudy } from '../context/StudyContext';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  BookOpen, 
  HelpCircle, 
  Trophy, 
  Sparkles, 
  Layers, 
  ArrowRight,
  BookmarkCheck,
  Bookmark
} from 'lucide-react';

export function SyllabusViewer() {
  const { 
    activeSubject, 
    selectedChapterId, 
    setSelectedChapterId, 
    userState, 
    toggleTopic,
    toggleBookmark,
    setActiveTab,
    setIsAiDrawerOpen
  } = useStudy();

  if (!activeSubject) {
    return (
      <div className="flex h-64 items-center justify-center text-slate-400">
        Loading syllabus details...
      </div>
    );
  }

  const completedTopics = userState?.profile?.completedTopics || [];
  const bookmarks = userState?.bookmarks || [];

  // Calculate total syllabus topics and completed topics
  let totalTopicsCount = 0;
  let completedTopicsCount = 0;

  activeSubject.units?.forEach(u => {
    u.chapters?.forEach(c => {
      c.syllabusTopics?.forEach(t => {
        totalTopicsCount++;
        if (completedTopics.includes(t)) completedTopicsCount++;
      });
    });
  });

  const progressPercent = totalTopicsCount > 0 
    ? Math.round((completedTopicsCount / totalTopicsCount) * 100) 
    : 0;

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12 animate-fade-in">
      
      {/* Subject Hero Card */}
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${activeSubject.color || 'from-indigo-600 to-purple-600'} p-6 sm:p-8 text-white shadow-xl`}>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">
              <Layers className="h-3.5 w-3.5" />
              <span>{activeSubject.badge || 'Curriculum'}</span>
              <span>•</span>
              <span>{activeSubject.units?.length || 0} Units</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {activeSubject.name} Curriculum & Syllabus
            </h1>
            <p className="text-sm text-indigo-100/90 leading-relaxed">
              {activeSubject.description}
            </p>
          </div>

          {/* Progress Widget */}
          <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-md border border-white/20">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
              <span className="text-lg font-bold text-white">{progressPercent}%</span>
            </div>
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-indigo-200">
                Syllabus Progress
              </div>
              <div className="text-sm font-semibold text-white">
                {completedTopicsCount} of {totalTopicsCount} Topics Mastered
              </div>
              <div className="mt-1.5 h-1.5 w-32 rounded-full bg-white/20 overflow-hidden">
                <div 
                  className="h-full bg-emerald-400 rounded-full transition-all duration-500" 
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Units & Chapters List */}
      <div className="space-y-6">
        {activeSubject.units?.map((unit, uIdx) => (
          <div 
            key={unit.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 transition"
          >
            {/* Unit Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Unit {uIdx + 1}
                </span>
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {unit.title}
                </h2>
              </div>
              <span className="self-start sm:self-auto rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                Weightage: {unit.weightage}
              </span>
            </div>

            {/* Chapters in this Unit */}
            <div className="mt-5 space-y-4">
              {unit.chapters?.map((chap, cIdx) => {
                const isSelected = selectedChapterId === chap.id;
                const isBookmarked = bookmarks.some(b => b.chapterId === chap.id);

                return (
                  <div
                    key={chap.id}
                    className={`rounded-xl border p-4 sm:p-5 transition-all ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-50/40 ring-1 ring-indigo-500/30 dark:border-indigo-600/60 dark:bg-indigo-950/20'
                        : 'border-slate-200/80 bg-slate-50/50 hover:border-slate-300 dark:border-slate-800/80 dark:bg-slate-900/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                            Chapter {cIdx + 1}
                          </span>
                          <span className="flex items-center gap-1 text-[11px] text-slate-400">
                            <Clock className="h-3 w-3" />
                            {chap.duration}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {chap.title}
                        </h3>
                      </div>

                      {/* Bookmark chapter */}
                      <button
                        onClick={() => toggleBookmark(activeSubject.id, chap.id, chap.title)}
                        className={`rounded-lg p-1.5 transition ${
                          isBookmarked 
                            ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/50' 
                            : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                        }`}
                        title={isBookmarked ? "Remove Bookmark" : "Bookmark Chapter"}
                      >
                        {isBookmarked ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
                      </button>
                    </div>

                    {/* Syllabus Topics Checklist */}
                    <div className="mt-4">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                        Syllabus Milestones (Click to check off):
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {chap.syllabusTopics?.map(topic => {
                          const isDone = completedTopics.includes(topic);
                          return (
                            <button
                              key={topic}
                              onClick={() => toggleTopic(topic)}
                              className={`flex items-start gap-2.5 rounded-lg p-2 text-left text-xs transition ${
                                isDone
                                  ? 'bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200'
                                  : 'bg-white hover:bg-slate-100 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700/60 dark:text-slate-200'
                              } border border-slate-200/60 dark:border-slate-700/60`}
                            >
                              {isDone ? (
                                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                              ) : (
                                <Circle className="h-4 w-4 text-slate-300 dark:text-slate-500 flex-shrink-0 mt-0.5" />
                              )}
                              <span className={`leading-snug ${isDone ? 'line-through opacity-80' : ''}`}>
                                {topic}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Chapter Action Buttons */}
                    <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedChapterId(chap.id);
                          setActiveTab('books');
                        }}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 transition"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        <span>Read Book</span>
                      </button>

                      <button
                        onClick={() => {
                          setSelectedChapterId(chap.id);
                          setActiveTab('notes');
                        }}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition"
                      >
                        <span>Revision Notes</span>
                      </button>

                      <button
                        onClick={() => {
                          setSelectedChapterId(chap.id);
                          setActiveTab('qa');
                        }}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition"
                      >
                        <HelpCircle className="h-3.5 w-3.5" />
                        <span>Q&A Practice</span>
                      </button>

                      <button
                        onClick={() => {
                          setSelectedChapterId(chap.id);
                          setActiveTab('quiz');
                        }}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-700 hover:bg-amber-500/20 dark:text-amber-400 transition"
                      >
                        <Trophy className="h-3.5 w-3.5 text-amber-500" />
                        <span>Take Quiz</span>
                      </button>

                      <button
                        onClick={() => {
                          setSelectedChapterId(chap.id);
                          setIsAiDrawerOpen(true);
                        }}
                        className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Tutor This Chapter</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
