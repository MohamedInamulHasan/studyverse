// src/components/NotesHub.jsx
import React, { useState } from 'react';
import { useStudy } from '../context/StudyContext';
import { 
  FileText, 
  Plus, 
  Trash2, 
  Lightbulb, 
  CheckCircle, 
  BookMarked, 
  Sparkles, 
  Download, 
  Edit3 
} from 'lucide-react';

export function NotesHub() {
  const { 
    activeChapter, 
    activeSubject, 
    userState, 
    addCustomNote, 
    deleteCustomNote,
    setIsAiDrawerOpen 
  } = useStudy();

  const [activeSubTab, setActiveSubTab] = useState('official'); // 'official' | 'personal'
  const [showNewNoteModal, setShowNewNoteModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const notes = activeChapter?.notes;
  const customNotes = userState?.customNotes || [];
  const chapterCustomNotes = customNotes.filter(
    n => !n.chapterId || n.chapterId === activeChapter?.id
  );

  const handleSaveNote = async (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    setIsSubmitting(true);
    try {
      await addCustomNote(newTitle, newContent);
      setNewTitle('');
      setNewContent('');
      setShowNewNoteModal(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const exportNotesAsMarkdown = () => {
    let md = `# Curriculum Notes: ${activeSubject?.name} - ${activeChapter?.title}\n\n`;
    if (notes) {
      md += `## Chapter Summary\n${notes.summary}\n\n`;
      md += `## Key Points\n`;
      notes.keyPoints?.forEach(kp => { md += `- ${kp}\n`; });
      md += `\n## Exam Tips\n${notes.examTips}\n\n`;
    }
    if (chapterCustomNotes.length > 0) {
      md += `## Student Personal Notes\n`;
      chapterCustomNotes.forEach(cn => {
        md += `### ${cn.title}\n${cn.content}\n\n`;
      });
    }

    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeSubject?.name}_${activeChapter?.title}_Notes.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-16 animate-fade-in">
      
      {/* Header & Sub-Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Curriculum Notes & Cheatsheets
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {activeSubject?.name} • {activeChapter?.title}
          </p>
        </div>

        {/* Tab Controls & Export */}
        <div className="flex items-center gap-2.5">
          <div className="flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
            <button
              onClick={() => setActiveSubTab('official')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                activeSubTab === 'official'
                  ? 'bg-white text-indigo-600 shadow-sm dark:bg-slate-700 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400'
              }`}
            >
              Curriculum Notes
            </button>
            <button
              onClick={() => setActiveSubTab('personal')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                activeSubTab === 'personal'
                  ? 'bg-white text-indigo-600 shadow-sm dark:bg-slate-700 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400'
              }`}
            >
              My Notes ({chapterCustomNotes.length})
            </button>
          </div>

          <button
            onClick={exportNotesAsMarkdown}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 transition"
            title="Download Notes as Markdown"
          >
            <Download className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Official Curriculum Notes View */}
      {activeSubTab === 'official' && notes && (
        <div className="space-y-6">
          {/* Executive Chapter Summary */}
          <div className="rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50/80 via-white to-purple-50/50 p-6 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
              <BookMarked className="h-4 w-4" />
              <span>Chapter Core Summary</span>
            </div>
            <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              {notes.summary}
            </p>
          </div>

          {/* Key Conceptual Points */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              <span>Key Conceptual Points & Must-Know Rules</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {notes.keyPoints?.map((point, pIdx) => (
                <div 
                  key={pIdx}
                  className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 dark:border-slate-800 dark:bg-slate-800/50 flex items-start gap-3"
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                    {pIdx + 1}
                  </span>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Exam Tips & Common Traps */}
          {notes.examTips && (
            <div className="rounded-2xl border border-amber-200/80 bg-amber-50/60 p-6 dark:border-amber-900/60 dark:bg-amber-950/20">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Lightbulb className="h-4 w-4" />
                <span>High-Yield Exam Strategy & Pitfalls</span>
              </div>
              <p className="text-sm text-amber-950 dark:text-amber-200 leading-relaxed">
                {notes.examTips}
              </p>
            </div>
          )}

          {/* AI Helper Banner */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-bold text-sm text-slate-900 dark:text-white">
                Need more specific revision notes or analogies?
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Socrates AI can generate custom mnemonics, tables, and concept maps for this chapter.
              </p>
            </div>
            <button
              onClick={() => setIsAiDrawerOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-indigo-700 transition"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Ask AI for Study Notes</span>
            </button>
          </div>
        </div>
      )}

      {/* Personal Notes View */}
      {activeSubTab === 'personal' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              My Personal Notes ({chapterCustomNotes.length})
            </h2>
            <button
              onClick={() => setShowNewNoteModal(true)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-indigo-700 transition"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add Personal Note</span>
            </button>
          </div>

          {chapterCustomNotes.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-400 dark:border-slate-800">
              <Edit3 className="mx-auto h-10 w-10 text-slate-300 dark:text-slate-700 mb-3" />
              <p className="font-medium text-sm">You haven't added any notes for this chapter yet.</p>
              <p className="text-xs text-slate-500 mt-1">Jot down formulas, homework questions, or key takeaways!</p>
              <button
                onClick={() => setShowNewNoteModal(true)}
                className="mt-4 rounded-xl bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"
              >
                Create Your First Note
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {chapterCustomNotes.map(cn => (
                <div 
                  key={cn.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        {cn.title}
                      </h3>
                      <button
                        onClick={() => deleteCustomNote(cn.id)}
                        className="rounded-lg p-1 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition"
                        title="Delete note"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-3 text-xs text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                      {cn.content}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400">
                    Added: {new Date(cn.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* New Note Modal */}
      {showNewNoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-fade-in">
          <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 animate-slide-up">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Create New Revision Note
            </h3>
            <form onSubmit={handleSaveNote} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  Note Title
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Newton's 2nd Law Exam Derivation Steps"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  Note Details / Formulas
                </label>
                <textarea
                  required
                  rows={5}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Write your study notes, formulas, or reminders here..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-800 dark:text-white"
                />
              </div>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewNoteModal(false)}
                  className="rounded-xl px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-xl bg-indigo-600 px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-indigo-700 transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Saving...' : 'Save Note'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
