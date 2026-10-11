// src/components/QuizArena.jsx
import React, { useState, useEffect } from 'react';
import { useStudy } from '../context/StudyContext';
import { api } from '../utils/api';
import { 
  Trophy, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Sparkles, 
  HelpCircle, 
  ArrowRight,
  Flame,
  Check
} from 'lucide-react';

export function QuizArena() {
  const { selectedSubjectId, selectedChapterId, activeChapter, activeSubject, setUserState } = useStudy();

  const [quizzes, setQuizzes] = useState([]);
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(300);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch quizzes for active chapter/subject
  useEffect(() => {
    async function loadQuizzes() {
      try {
        const list = await api.getQuizzes(selectedChapterId, selectedSubjectId);
        setQuizzes(list || []);
        if (list && list.length > 0) {
          setActiveQuiz(list[0]);
          setCurrentQuestionIdx(0);
          setAnswers({});
          setQuizFinished(false);
          setQuizResult(null);
          setTimeLeft(list[0].timeLimitSeconds || 300);
        } else {
          setActiveQuiz(null);
        }
      } catch (err) {
        console.error('Error loading quiz:', err);
      }
    }
    loadQuizzes();
  }, [selectedChapterId, selectedSubjectId]);

  // Timer countdown
  useEffect(() => {
    if (!activeQuiz || quizFinished || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeQuiz, quizFinished, timeLeft]);

  const handleSelectOption = (qId, optionIdx) => {
    setAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const handleOneWordInput = (qId, val) => {
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const handleSubmitQuiz = async () => {
    if (!activeQuiz || isSubmitting) return;
    setIsSubmitting(true);

    try {
      const result = await api.submitQuiz(activeQuiz.id, answers);
      setQuizResult(result);
      setQuizFinished(true);

      // Update streak in global state
      if (result.newStreak) {
        setUserState(prev => ({
          ...prev,
          profile: {
            ...prev.profile,
            streakDays: result.newStreak
          }
        }));
      }
    } catch (err) {
      console.error('Error submitting quiz:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const restartQuiz = () => {
    setAnswers({});
    setCurrentQuestionIdx(0);
    setQuizFinished(false);
    setQuizResult(null);
    setTimeLeft(activeQuiz?.timeLimitSeconds || 300);
  };

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!activeQuiz) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-400 dark:border-slate-800 max-w-xl mx-auto my-12">
        <Trophy className="mx-auto h-12 w-12 text-slate-300 dark:text-slate-700 mb-3" />
        <h2 className="text-base font-bold text-slate-700 dark:text-slate-300">
          No quizzes currently found for this chapter.
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Switch to another chapter (like Newtonian Dynamics or Data Structures) to take an interactive quiz!
        </p>
      </div>
    );
  }

  const currentQ = activeQuiz.questions[currentQuestionIdx];
  const totalQuestions = activeQuiz.questions.length;
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16 animate-fade-in">
      
      {/* Quiz Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            {activeSubject?.name} • Mastery Assessment
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {activeQuiz.title}
          </h1>
        </div>

        {!quizFinished && (
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold font-mono transition ${
              timeLeft < 60 
                ? 'bg-rose-50 text-rose-600 border border-rose-200 animate-pulse dark:bg-rose-950 dark:border-rose-900' 
                : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
            }`}>
              <Clock className="h-4 w-4" />
              <span>{formatTimer(timeLeft)}</span>
            </div>

            <button
              onClick={handleSubmitQuiz}
              disabled={isSubmitting}
              className="rounded-xl bg-indigo-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-indigo-700 transition"
            >
              Submit Test
            </button>
          </div>
        )}
      </div>

      {/* QUIZ ACTIVE VIEW */}
      {!quizFinished ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-6">
          
          {/* Progress Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span>Question {currentQuestionIdx + 1} of {totalQuestions}</span>
              <span>{answeredCount} of {totalQuestions} Answered</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden dark:bg-slate-800">
              <div 
                className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIdx + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Prompt */}
          <div className="pt-2">
            <div className="inline-block rounded-md bg-indigo-50 px-2 py-0.5 text-[11px] font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 mb-2">
              {currentQ.type === 'mcq' ? 'Multiple Choice Question' : '⚡ One-Word Recall Question'}
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
              {currentQ.prompt}
            </h2>
          </div>

          {/* Options: MCQ vs One-Word input */}
          <div className="space-y-3 pt-2">
            {currentQ.type === 'mcq' ? (
              currentQ.options.map((opt, optIdx) => {
                const isSelected = answers[currentQ.id] === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(currentQ.id, optIdx)}
                    className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left text-xs font-semibold transition ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/60 text-indigo-950 ring-2 ring-indigo-600/30 dark:border-indigo-500 dark:bg-indigo-950/40 dark:text-white'
                        : 'border-slate-200 bg-slate-50/50 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-850 dark:text-slate-300 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
                    }`}>
                      {String.fromCharCode(65 + optIdx)}
                    </div>
                    <span className="flex-1">{opt}</span>
                  </button>
                );
              })
            ) : (
              <div className="space-y-2">
                <input
                  type="text"
                  value={answers[currentQ.id] || ''}
                  onChange={(e) => handleOneWordInput(currentQ.id, e.target.value)}
                  placeholder="Type your one-word answer..."
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
                <p className="text-[11px] text-slate-400">
                  Precision counts: Type the single term, definition, or physical quantity.
                </p>
              </div>
            )}
          </div>

          {/* Navigation between questions */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setCurrentQuestionIdx(prev => Math.max(0, prev - 1))}
              disabled={currentQuestionIdx === 0}
              className="rounded-xl px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-40 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              Previous
            </button>

            {currentQuestionIdx < totalQuestions - 1 ? (
              <button
                onClick={() => setCurrentQuestionIdx(prev => prev + 1)}
                className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-indigo-700 transition"
              >
                <span>Next Question</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            ) : (
              <button
                onClick={handleSubmitQuiz}
                disabled={isSubmitting}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-6 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition"
              >
                <span>Finish & Submit</span>
                <Check className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

        </div>
      ) : (
        /* QUIZ RESULTS & EXPLANATION REVIEW */
        <div className="space-y-6 animate-slide-up">
          {/* Score Header Card */}
          <div className="rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <span>Quiz Completed Successfully</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight">
                Your Score: {quizResult?.score} / {quizResult?.total} ({quizResult?.percentage}%)
              </h2>
              <p className="text-xs text-indigo-100 max-w-md">
                {quizResult?.percentage >= 75
                  ? "Outstanding mastery! You have a firm grasp of the syllabus concepts and formulas."
                  : "Great effort! Review the detailed answer explanations below to strengthen your weak spots."}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={restartQuiz}
                className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-indigo-700 shadow-md hover:bg-indigo-50 transition"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Retry Quiz</span>
              </button>
            </div>
          </div>

          {/* Detailed Question Review */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Answer Review & Explanations ({quizResult?.review?.length})
            </h3>

            {quizResult?.review?.map((rev, idx) => (
              <div
                key={rev.id}
                className={`rounded-2xl border p-5 transition ${
                  rev.isCorrect
                    ? 'border-emerald-200 bg-emerald-50/30 dark:border-emerald-950 dark:bg-emerald-950/20'
                    : 'border-rose-200 bg-rose-50/30 dark:border-rose-950 dark:bg-rose-950/20'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      {rev.isCorrect ? (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="h-4 w-4" /> Correct
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs font-bold text-rose-600 dark:text-rose-400">
                          <XCircle className="h-4 w-4" /> Incorrect
                        </span>
                      )}
                      <span className="text-xs text-slate-400">• Question {idx + 1}</span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {rev.prompt}
                    </h4>

                    {/* Answer Comparison */}
                    <div className="text-xs space-y-1 pt-1">
                      <div className="text-slate-600 dark:text-slate-300">
                        <span className="font-semibold">Your Answer: </span>
                        <span className={`font-mono ${rev.isCorrect ? 'text-emerald-700 dark:text-emerald-300 font-bold' : 'text-rose-600 dark:text-rose-400'}`}>
                          {String(rev.userAnswer ?? '(No Answer)')}
                        </span>
                      </div>
                      {!rev.isCorrect && (
                        <div className="text-emerald-700 dark:text-emerald-400 font-medium">
                          <span className="font-semibold">Correct Answer: </span>
                          <span className="font-mono font-bold">{String(rev.correctAnswer)}</span>
                        </div>
                      )}
                    </div>

                    {/* Explanation */}
                    <div className="mt-3 rounded-xl bg-white p-3 text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">Explanation: </span>
                      {rev.explanation}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
