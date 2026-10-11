// src/components/SettingsModal.jsx
import React, { useState } from 'react';
import { useStudy } from '../context/StudyContext';
import { 
  X, 
  Key, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  RefreshCw, 
  Cpu 
} from 'lucide-react';

export function SettingsModal({ isOpen, onClose }) {
  const { geminiApiKey, updateGeminiKey, userState, setUserState } = useStudy();
  const [apiKeyInput, setApiKeyInput] = useState(geminiApiKey || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    updateGeminiKey(apiKeyInput.trim());
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleResetProgress = () => {
    if (window.confirm("Are you sure you want to reset your syllabus checklist and quiz history?")) {
      setUserState(prev => ({
        ...prev,
        profile: {
          ...prev.profile,
          completedTopics: [],
          streakDays: 1
        },
        quizHistory: []
      }));
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-fade-in">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 animate-slide-up space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
              <Key className="h-4 w-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Platform & AI Settings
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Gemini API Key Form */}
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Google Gemini API Key (Optional)
            </label>
            <input
              type="password"
              value={apiKeyInput}
              onChange={(e) => setApiKeyInput(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white font-mono"
            />
            <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              Leave blank to use the built-in <strong>Smart Offline Educational Engine</strong>, or paste your Gemini Key for live AI generation.
            </p>
          </div>

          {/* Engine Status Notice */}
          <div className="rounded-xl bg-indigo-50/70 p-3.5 border border-indigo-100 dark:bg-indigo-950/40 dark:border-indigo-900/40 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-indigo-700 dark:text-indigo-300 mb-1">
              <Cpu className="h-3.5 w-3.5" />
              <span>Engine Status: {apiKeyInput.trim() ? "Gemini 1.5 Flash (Live)" : "Smart Academic Knowledge Base (Active)"}</span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Curriculum parsing, syllabus milestones, textbook reader, one-word drills, and quiz scoring function 100% locally.
            </p>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-indigo-700 transition"
            >
              {savedSuccess ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Changes</span>
              )}
            </button>
          </div>
        </form>

        {/* Danger Zone: Reset */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-700 dark:text-slate-300">Reset Study Progress</div>
            <div className="text-[11px] text-slate-400">Clear syllabus checklist & quiz scores</div>
          </div>
          <button
            onClick={handleResetProgress}
            className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 dark:border-slate-700 dark:hover:bg-rose-950/30"
          >
            <RefreshCw className="h-3 w-3" />
            <span>Reset</span>
          </button>
        </div>

      </div>
    </div>
  );
}
