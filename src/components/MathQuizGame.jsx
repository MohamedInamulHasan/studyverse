// src/components/MathQuizGame.jsx
import React, { useState, useEffect, useRef } from 'react';
import MathText from './MathText';
import { 
  RotateCcw,
  Check,
  X
} from 'lucide-react';

/**
 * Parses problem string and parts lines to extract clean question, 4 options, and correct answer index.
 */
export function parseMCQQuestion(sum, index) {
  if (!sum) return null;

  // If already structured
  if (Array.isArray(sum.options) && sum.options.length >= 2 && sum.answer !== undefined) {
    return {
      id: sum.id || `q-${index + 1}`,
      exampleNum: sum.exampleNum || `Question ${index + 1}`,
      assertion: sum.assertion || null,
      reason: sum.reason || null,
      question: sum.question || sum.problem || (sum.assertion ? `Assertion: ${sum.assertion}\nReason: ${sum.reason}` : ''),
      diagram: sum.diagram || null,
      options: sum.options,
      correctAnswer: typeof sum.answer === 'number' ? sum.answer : parseInt(sum.answer, 10),
      explanation: sum.explanation || (sum.parts && sum.parts[0]?.lines) || []
    };
  }

  const problem = sum.problem || '';
  // Match options pattern: (1)... (2)... (3)... (4)... or 1)... 2)... 3)... 4)...
  const optRegex = /(?:\n|\s+)(?:\(1\)|1\.)\s*([\s\S]*?)(?:\(2\)|2\.)\s*([\s\S]*?)(?:\(3\)|3\.)\s*([\s\S]*?)(?:\(4\)|4\.)\s*([\s\S]*)$/;
  const match = problem.match(optRegex);

  let question = problem;
  let options = [];
  if (match) {
    question = problem.substring(0, match.index).trim();
    options = [match[1].trim(), match[2].trim(), match[3].trim(), match[4].trim()];
  } else {
    // If not matching regex, fallback
    question = problem;
    options = sum.options || ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  }

  // Parse correct option index from parts lines
  let correctAnswer = 0;
  const lines = (sum.parts && sum.parts[0] && sum.parts[0].lines) || [];
  for (const line of lines) {
    const corMatch = line.match(/Correct\s*Option:\s*(?:\((\d)\)|(\d))/i);
    if (corMatch) {
      correctAnswer = parseInt(corMatch[1] || corMatch[2], 10) - 1;
      break;
    }
  }

  return {
    id: sum.id || `q-${index + 1}`,
    exampleNum: sum.exampleNum || `Question ${index + 1}`,
    question,
    options,
    correctAnswer: Math.max(0, Math.min(correctAnswer, options.length - 1)),
    explanation: lines
  };
}

/**
 * Fisher-Yates shuffle algorithm to arrange questions in random order
 */
function shuffleQuestions(array) {
  if (!Array.isArray(array) || array.length <= 1) return array || [];
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const MathQuizGame = ({ sums = [], chapterNum = 1, exerciseLabel = 'Exercise 1.6', theme = 'blue' }) => {
  // Session key to ensure fresh DOM rendering on each shuffle / retry
  const [sessionKey, setSessionKey] = useState(0);

  // Questions randomized
  const [questions, setQuestions] = useState(() => {
    const parsed = (sums || []).map((s, idx) => parseMCQQuestion(s, idx)).filter(Boolean);
    return shuffleQuestions(parsed);
  });

  // Game state
  const [userAnswers, setUserAnswers] = useState({}); // { [qIdx]: selectedOptionIdx }
  const [score, setScore] = useState(0);

  // References to smoothly scroll to question items below
  const questionRefs = useRef({});
  const containerRef = useRef(null);

  // Reset & arrange questions in random order whenever sums, chapter, or exercise changes (on visit)
  useEffect(() => {
    const parsed = (sums || []).map((s, idx) => parseMCQQuestion(s, idx)).filter(Boolean);
    setQuestions(shuffleQuestions(parsed));
    setUserAnswers({});
    setScore(0);
    setSessionKey(prev => prev + 1);
    questionRefs.current = {};
  }, [chapterNum, exerciseLabel, sums]);

  // Total questions count
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const isCompleted = totalQuestions > 0 && answeredCount === totalQuestions;

  // Handle option selection
  const handleSelectOption = (qIdx, optionIdx) => {
    // If already answered, ignore
    if (userAnswers[qIdx] !== undefined) return;

    const q = questions[qIdx];
    const isCorrect = optionIdx === q.correctAnswer;

    // Update answers
    setUserAnswers(prev => ({
      ...prev,
      [qIdx]: optionIdx
    }));

    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    // Automatically redirect/scroll smoothly down to next question below (for both correct and wrong answers)
    if (qIdx + 1 < totalQuestions) {
      setTimeout(() => {
        const nextCard = questionRefs.current[qIdx + 1];
        if (nextCard) {
          nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    }
  };

  // Reset & arrange quiz questions in random order on retry
  const handleRestartQuiz = () => {
    const parsed = (sums || []).map((s, idx) => parseMCQQuestion(s, idx)).filter(Boolean);
    setQuestions(shuffleQuestions(parsed));
    setUserAnswers({});
    setScore(0);
    setSessionKey(prev => prev + 1);
    questionRefs.current = {};
    setTimeout(() => {
      const firstQ = questionRefs.current[0];
      if (firstQ) {
        firstQ.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="py-8 text-center space-y-2">
        <p className="font-bold text-slate-800 text-base">{exerciseLabel} Quiz</p>
        <p className="text-xs text-slate-500">Preparing multiple choice questions for this exercise...</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="space-y-8 pb-16 pt-2 select-text">
      {/* =========================================================================
          QUESTIONS LIST:
          - Plain question statement: "1. <Question text>" (NOT in 3D card)
          - Options: 2 per row in small tactile 3D cards
          - When highlighted: FULL solid red and FULL solid green
          - No text mentions of correct/wrong, no step-by-step solution
          - Auto-redirect to next question on correct choice
          - Natural downward scrollable layout allows reviewing previous questions
          ========================================================================= */}
      <div className="space-y-8">
        {questions.map((q, qIdx) => {
          const selectedOpt = userAnswers[qIdx];
          const hasAnswered = selectedOpt !== undefined;

          return (
            <div
              key={`${sessionKey}-${q.id || qIdx}`}
              ref={(el) => (questionRefs.current[qIdx] = el)}
              className="space-y-3 pt-2 scroll-mt-24 border-b border-slate-100 pb-7 last:border-b-0"
            >
              {/* Question Statement: Plain bold text "1. Question", NOT in a 3D card */}
              <div className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed flex items-start gap-1.5">
                <span className="font-extrabold text-slate-950 shrink-0">{qIdx + 1}.</span>
                <div className="flex-1 break-words">
                  {q.assertion && q.reason ? (
                    <div className="space-y-1">
                      <p>
                        <span className="font-bold text-slate-950">Assertion:</span>{' '}
                        <span className="font-normal text-slate-800"><MathText text={q.assertion} /></span>
                      </p>
                      <p>
                        <span className="font-bold text-slate-950">Reason:</span>{' '}
                        <span className="font-normal text-slate-800"><MathText text={q.reason} /></span>
                      </p>
                    </div>
                  ) : (
                    <MathText text={q.question} />
                  )}
                  {q.diagram && (
                    <div className="mt-2.5 mb-1 flex items-center justify-start">
                      {q.diagram}
                    </div>
                  )}
                </div>
              </div>

              {/* Options: 1 Per Row in 3D Cards */}
              <div className="space-y-2.5 pt-1">
                {q.options.map((optionText, optIdx) => {
                  const isSelected = selectedOpt === optIdx;
                  const isThisCorrect = optIdx === q.correctAnswer;

                  // 3D Small Card Styling
                  let cardClasses = 'bg-white text-slate-800 border-slate-200 border-b-[3.5px] border-b-slate-300 hover:border-slate-400 hover:bg-slate-50/70 active:border-b-[1.5px] active:translate-y-[2px]';

                  if (hasAnswered) {
                    if (isThisCorrect) {
                      // Correct option: light orange for orange theme, light blue for blue/social theme
                      cardClasses = theme === 'orange'
                        ? 'bg-[#FED7AA] text-orange-950 border-orange-300 border-b-[4px] border-b-orange-500 shadow-md font-bold'
                        : (theme === 'blue' || theme === 'sky')
                        ? 'bg-[#BAE6FD] text-sky-950 border-sky-300 border-b-[4px] border-b-sky-500 shadow-md font-bold'
                        : 'bg-blue-600 text-white border-blue-700 border-b-[4px] border-b-blue-800 shadow-md font-bold';
                    } else if (isSelected && !isThisCorrect) {
                      // Selected wrong option: LIGHT grey button
                      cardClasses = 'bg-slate-200 text-slate-800 border-slate-300 border-b-[4px] border-b-slate-400 shadow-xs font-bold';
                    } else {
                      // Other unselected options after answered: very light grey
                      cardClasses = 'bg-slate-100/70 text-slate-400 border-slate-200 border-b-[2.5px] border-b-slate-200 cursor-not-allowed opacity-60';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={hasAnswered}
                      onClick={() => handleSelectOption(qIdx, optIdx)}
                      className={`w-full text-left rounded-xl border p-2.5 sm:p-3 transition-all duration-150 flex items-center gap-2.5 shadow-2xs select-text cursor-pointer disabled:cursor-default ${cardClasses}`}
                    >
                      {/* Option Number / Letter: (a), (b), (c), (d) for orange & blue/social, or (1), (2), (3), (4) for math */}
                      <span className={`text-xs font-black shrink-0 ${
                        hasAnswered && isThisCorrect
                          ? (theme === 'orange' ? 'text-orange-950' : (theme === 'blue' || theme === 'sky') ? 'text-sky-950' : 'text-white')
                          : hasAnswered && isSelected
                          ? 'text-slate-800'
                          : 'text-slate-500'
                      }`}>
                        ({(theme === 'orange' || theme === 'blue' || theme === 'sky') ? String.fromCharCode(97 + optIdx) : optIdx + 1})
                      </span>

                      {/* Option Text */}
                      <div className="text-xs sm:text-[13px] leading-snug break-words flex-1 min-w-0 pr-1">
                        <MathText text={optionText} />
                      </div>

                      {/* Tick (✓) & X (✗) Symbols: Small & non-collapsing */}
                      {hasAnswered && isThisCorrect && (
                        <Check className={`w-3.5 h-3.5 stroke-[3.5] shrink-0 self-center ${
                          theme === 'orange' ? 'text-orange-900' : (theme === 'blue' || theme === 'sky') ? 'text-sky-900' : 'text-white'
                        }`} />
                      )}
                      {hasAnswered && isSelected && !isThisCorrect && (
                        <X className="w-3.5 h-3.5 stroke-[3.5] text-slate-700 shrink-0 self-center" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          SCORE & RETRY BUTTON
          ========================================================================= */}
      {answeredCount > 0 && (
        <div className="text-center space-y-3 pt-6 pb-2">
          {isCompleted && (
            <p className="text-sm sm:text-base font-bold text-slate-700 animate-fade-in">
              Score: <span className={`font-black ${theme === 'orange' ? 'text-orange-600' : 'text-blue-600'}`}>{score}</span> / {totalQuestions} ({Math.round((score / totalQuestions) * 100)}%)
            </p>
          )}
          <div>
            <button
              onClick={handleRestartQuiz}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-700 border-b-[3.5px] border-b-emerald-900 shadow-xs active:translate-y-[2px] active:border-b-[1.5px] transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Quiz</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MathQuizGame;
