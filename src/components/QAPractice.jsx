// src/components/QAPractice.jsx
import React, { useState, useEffect } from 'react';
import { useStudy } from '../context/StudyContext';
import { api } from '../utils/api';
import { 
  Zap, 
  FileText, 
  HelpCircle, 
  CheckCircle, 
  XCircle, 
  Eye, 
  Sparkles, 
  Send, 
  Copy, 
  Check, 
  RotateCcw,
  Award
} from 'lucide-react';

export function QAPractice() {
  const { selectedSubjectId, selectedChapterId, activeChapter, activeSubject, geminiApiKey } = useStudy();

  const [activeMode, setActiveMode] = useState('one_word'); // 'one_word' | 'detailed'
  const [oneWordList, setOneWordList] = useState([]);
  const [detailedList, setDetailedList] = useState([]);
  const [revealedAnswers, setRevealedAnswers] = useState({});
  const [userInputs, setUserInputs] = useState({});
  const [feedback, setFeedback] = useState({});

  // Dynamic solver state
  const [customQuestion, setCustomQuestion] = useState('');
  const [solverMode, setSolverMode] = useState('one_word'); // 'one_word' | 'detailed'
  const [isSolving, setIsSolving] = useState(false);
  const [solveResult, setSolveResult] = useState(null);
  const [copiedSolve, setCopiedSolve] = useState(false);

  // Fetch Q&A for the active subject / chapter
  useEffect(() => {
    async function loadQA() {
      try {
        const [ow, dt] = await Promise.all([
          api.getOneWordQuestions(selectedSubjectId, selectedChapterId),
          api.getDetailedQuestions(selectedSubjectId, selectedChapterId)
        ]);
        setOneWordList(ow || []);
        setDetailedList(dt || []);
        setRevealedAnswers({});
        setUserInputs({});
        setFeedback({});
      } catch (err) {
        console.error('Error loading QA:', err);
      }
    }
    loadQA();
  }, [selectedSubjectId, selectedChapterId]);

  // Handle checking a one-word answer
  const handleCheckOneWord = (qId, correctAnswer, synonyms = []) => {
    const input = (userInputs[qId] || '').trim().toLowerCase();
    const target = correctAnswer.trim().toLowerCase();
    const cleanSynonyms = synonyms.map(s => s.trim().toLowerCase());

    const isCorrect = input === target || cleanSynonyms.includes(input);
    setFeedback(prev => ({ ...prev, [qId]: isCorrect }));
    setRevealedAnswers(prev => ({ ...prev, [qId]: true }));
  };

  // Toggle reveal
  const toggleReveal = (qId) => {
    setRevealedAnswers(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  // Dynamic Question Solver
  const handleSolveCustom = async (e) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    setIsSolving(true);
    setSolveResult(null);

    try {
      const data = await api.solveDynamicQA({
        question: customQuestion,
        mode: solverMode,
        subjectId: selectedSubjectId,
        chapterId: selectedChapterId,
        userApiKey: geminiApiKey
      });
      setSolveResult(data);
    } catch (err) {
      console.error('Error solving custom question:', err);
    } finally {
      setIsSolving(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16 animate-fade-in">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          Question & Answer Practice Center
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Master syllabus concepts with rapid **One-Word Recall** and structured **Detailed Model Answers**.
        </p>
      </div>

      {/* Dynamic AI Question Solver Card */}
      <div className="rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50/80 via-white to-purple-50/70 p-6 shadow-md dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              Instant AI Question Solver
            </h2>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Type any question from your curriculum to get an instant One-Word term or In-Depth Breakdown
            </p>
          </div>
        </div>

        <form onSubmit={handleSolveCustom} className="space-y-3">
          <div className="relative">
            <input
              type="text"
              required
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              placeholder="e.g. What is the escape velocity from Earth? or Derive the conservation of linear momentum..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs text-slate-900 shadow-xs focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Format Picker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span>Answer Style:</span>
              <button
                type="button"
                onClick={() => setSolverMode('one_word')}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                  solverMode === 'one_word'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
                }`}
              >
                <Zap className="h-3.5 w-3.5" />
                <span>One-Word Answer</span>
              </button>

              <button
                type="button"
                onClick={() => setSolverMode('detailed')}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                  solverMode === 'detailed'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
                }`}
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Detailed Explanation</span>
              </button>
            </div>

            <button
              type="submit"
              disabled={isSolving}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2 text-xs font-bold text-white shadow-md hover:from-indigo-500 hover:to-purple-500 transition disabled:opacity-50"
            >
              {isSolving ? (
                <>
                  <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span>Analyzing Syllabus...</span>
                </>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" />
                  <span>Solve Question</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Dynamic Solver Result Box */}
        {solveResult && (
          <div className="mt-4 rounded-xl border border-indigo-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-850 shadow-sm animate-slide-up">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 px-2 py-0.5 text-[11px] font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                <Sparkles className="h-3 w-3" />
                {solveResult.source} • {solveResult.mode === 'one_word' ? '⚡ One-Word Answer' : '📖 Detailed Solution'}
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(solveResult.result);
                  setCopiedSolve(true);
                  setTimeout(() => setCopiedSolve(false), 2000);
                }}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {copiedSolve ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                <span>{copiedSolve ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="mt-3">
              {solveResult.mode === 'one_word' ? (
                <div className="space-y-2">
                  <div className="inline-block rounded-xl bg-indigo-600 px-4 py-2 font-mono text-xl font-extrabold text-white shadow-sm">
                    {solveResult.result}
                  </div>
                  {solveResult.explanation && (
                    <p className="text-xs text-slate-600 dark:text-slate-300 italic">
                      {solveResult.explanation}
                    </p>
                  )}
                </div>
              ) : (
                <div className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line font-medium">
                  {solveResult.result}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Tab Switcher for Question Bank */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveMode('one_word')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition ${
              activeMode === 'one_word'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
            }`}
          >
            <Zap className="h-3.5 w-3.5" />
            <span>One-Word Rapid Recall ({oneWordList.length})</span>
          </button>

          <button
            onClick={() => setActiveMode('detailed')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition ${
              activeMode === 'detailed'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
            }`}
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Detailed Exam Answers ({detailedList.length})</span>
          </button>
        </div>

        <span className="text-[11px] font-semibold text-slate-400 hidden sm:inline">
          {activeSubject?.name} • {activeChapter?.title}
        </span>
      </div>

      {/* Mode 1: One-Word Rapid Recall Cards */}
      {activeMode === 'one_word' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {oneWordList.length === 0 ? (
            <div className="col-span-2 rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-400 dark:border-slate-800">
              <Zap className="mx-auto h-8 w-8 text-slate-300 dark:text-slate-600 mb-2" />
              <p className="text-sm font-medium">No one-word questions preloaded for this chapter yet.</p>
              <p className="text-xs text-slate-500 mt-1">Use the Instant AI Question Solver above to generate one-word answers instantly!</p>
            </div>
          ) : (
            oneWordList.map((item, idx) => {
              const isRevealed = revealedAnswers[item.id];
              const isCorrect = feedback[item.id];

              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold mb-2">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {item.topic}
                      </span>
                      <span className="text-indigo-600 dark:text-indigo-400">
                        Difficulty: {item.difficulty}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      Q{idx + 1}: {item.question}
                    </h3>

                    {/* Interactive Input or Reveal */}
                    <div className="mt-4">
                      {!isRevealed ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            placeholder="Type your one-word answer..."
                            value={userInputs[item.id] || ''}
                            onChange={(e) => setUserInputs(prev => ({ ...prev, [item.id]: e.target.value }))}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleCheckOneWord(item.id, item.answer, item.acceptableSynonyms);
                              }
                            }}
                            className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-800 dark:text-white"
                          />
                          <button
                            onClick={() => handleCheckOneWord(item.id, item.answer, item.acceptableSynonyms)}
                            className="rounded-xl bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-indigo-700 transition"
                          >
                            Check
                          </button>
                          <button
                            onClick={() => toggleReveal(item.id)}
                            className="rounded-xl border border-slate-200 p-1.5 text-slate-500 hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800"
                            title="Reveal Answer"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="rounded-xl bg-slate-50 p-3.5 dark:bg-slate-800/80 animate-fade-in border border-slate-200/60 dark:border-slate-700/60">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-1.5 text-xs font-bold">
                              {isCorrect !== undefined ? (
                                isCorrect ? (
                                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                                    <CheckCircle className="h-4 w-4" /> Correct!
                                  </span>
                                ) : (
                                  <span className="flex items-center gap-1 text-rose-600 dark:text-rose-400">
                                    <XCircle className="h-4 w-4" /> Expected:
                                  </span>
                                )
                              ) : (
                                <span className="text-slate-500">Correct Answer:</span>
                              )}
                            </div>
                            <button
                              onClick={() => toggleReveal(item.id)}
                              className="text-[10px] text-slate-400 hover:underline"
                            >
                              Hide
                            </button>
                          </div>
                          
                          <div className="font-mono text-base font-extrabold text-indigo-600 dark:text-indigo-400">
                            {item.answer}
                          </div>
                          
                          <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                            {item.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* Mode 2: Detailed Long-Form Exam Answers */}
      {activeMode === 'detailed' && (
        <div className="space-y-6">
          {detailedList.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-400 dark:border-slate-800">
              <FileText className="mx-auto h-8 w-8 text-slate-300 dark:text-slate-600 mb-2" />
              <p className="text-sm font-medium">No long-form questions preloaded for this chapter yet.</p>
              <p className="text-xs text-slate-500 mt-1">Use the Instant AI Question Solver above to generate detailed derivations!</p>
            </div>
          ) : (
            detailedList.map((dq, idx) => (
              <div
                key={dq.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-4"
              >
                {/* Question Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                      Question {idx + 1}
                    </span>
                    <span className="text-xs text-slate-400">• {dq.topic}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                      <Award className="h-3.5 w-3.5" />
                      {dq.totalMarks} Marks
                    </span>
                  </div>
                </div>

                {/* Prompt */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {dq.question}
                </h3>

                {/* Structured Model Answer */}
                <div className="rounded-xl bg-slate-50 p-5 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                    Model Exam Solution
                  </div>
                  <div className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line">
                    {dq.modelAnswer}
                  </div>
                </div>

                {/* Key Marking Scheme Breakdown */}
                {dq.keyMarkingPoints && (
                  <div className="rounded-xl border border-amber-200/80 bg-amber-50/40 p-4 dark:border-amber-900/40 dark:bg-amber-950/20">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
                      Marking Scheme Breakdown
                    </div>
                    <ul className="space-y-1">
                      {dq.keyMarkingPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="text-xs text-amber-950 dark:text-amber-200 flex items-start gap-2">
                          <span className="font-bold text-amber-600">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}

    </div>
  );
}
