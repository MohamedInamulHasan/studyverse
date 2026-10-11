// src/components/Sidebar.jsx
import React from 'react';
import { useStudy } from '../context/StudyContext';
import { 
  BookMarked, 
  Layers, 
  FileText, 
  HelpCircle, 
  Trophy, 
  Bot, 
  ChevronRight, 
  CheckCircle2, 
  Atom, 
  Calculator, 
  Code2, 
  FlaskConical, 
  Dna,
  BookOpen
} from 'lucide-react';

const SUBJECT_ICONS = {
  Atom: Atom,
  Calculator: Calculator,
  Code2: Code2,
  FlaskConical: FlaskConical,
  Dna: Dna,
  BookOpen: BookOpen
};

export function Sidebar() {
  const {
    subjects,
    selectedGrade,
    selectedSubjectId,
    setSelectedSubjectId,
    activeSubject,
    selectedChapterId,
    setSelectedChapterId,
    activeTab,
    setActiveTab,
    userState
  } = useStudy();

  const gradeSubjects = subjects.filter(s => s.gradeId === selectedGrade);
  const completedTopics = userState?.profile?.completedTopics || [];

  const navItems = [
    { id: 'syllabus', label: 'Syllabus & Units', icon: Layers },
    { id: 'books', label: 'Books & Reader', icon: BookMarked },
    { id: 'notes', label: 'Curriculum Notes', icon: FileText },
    { id: 'qa', label: 'Q&A Practice Hub', icon: HelpCircle },
    { id: 'quiz', label: 'Interactive Quizzes', icon: Trophy },
    { id: 'ai', label: 'AI Study Mentor', icon: Bot },
  ];

  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-900/70 p-4 flex flex-col gap-6 overflow-y-auto">
      
      {/* Platform Navigation */}
      <div>
        <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Learning Modules
        </div>
        <nav className="space-y-1">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-xs font-semibold transition ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Subject Switcher */}
      <div>
        <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Subjects ({gradeSubjects.length})
        </div>
        <div className="space-y-1">
          {gradeSubjects.map(subj => {
            const IconComponent = SUBJECT_ICONS[subj.icon] || BookOpen;
            const isSelected = selectedSubjectId === subj.id;
            return (
              <button
                key={subj.id}
                onClick={() => setSelectedSubjectId(subj.id)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition ${
                  isSelected
                    ? 'bg-slate-100 font-semibold text-indigo-700 dark:bg-slate-800 dark:text-indigo-400 border-l-4 border-indigo-600'
                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <div className={`p-1 rounded-md bg-gradient-to-tr ${subj.color || 'from-indigo-500 to-purple-500'} text-white`}>
                    <IconComponent className="h-3.5 w-3.5" />
                  </div>
                  <span className="truncate">{subj.name}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-normal">
                  {subj.totalChapters || subj.units?.length || 1} ch
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Chapters list for Active Subject */}
      {activeSubject && activeSubject.units && (
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {activeSubject.name} Chapters
          </div>
          <div className="space-y-3">
            {activeSubject.units.map(unit => (
              <div key={unit.id} className="space-y-1">
                <div className="px-2 text-[10px] font-bold text-slate-400 truncate">
                  {unit.title}
                </div>
                {unit.chapters.map(chap => {
                  const isSelected = selectedChapterId === chap.id;
                  // check if all topics in this chapter are completed
                  const totalTopics = chap.syllabusTopics?.length || 0;
                  const doneCount = (chap.syllabusTopics || []).filter(t => completedTopics.includes(t)).length;
                  const isComplete = totalTopics > 0 && doneCount === totalTopics;

                  return (
                    <button
                      key={chap.id}
                      onClick={() => setSelectedChapterId(chap.id)}
                      className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-left transition ${
                        isSelected
                          ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 ring-1 ring-indigo-200 dark:ring-indigo-800/40'
                          : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="truncate pr-1 flex items-center gap-1.5">
                        {isComplete ? (
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                        ) : (
                          <div className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                        )}
                        <span className="truncate">{chap.title}</span>
                      </div>
                      <ChevronRight className={`h-3 w-3 text-slate-400 flex-shrink-0 ${isSelected ? 'text-indigo-600 dark:text-indigo-400' : ''}`} />
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}

    </aside>
  );
}
