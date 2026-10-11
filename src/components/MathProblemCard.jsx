// src/components/MathProblemCard.jsx
import React, { useState, useEffect, useMemo, useRef } from 'react';
import MathText from './MathText';
import { RotateCcw } from 'lucide-react';

/**
 * Tokenizes a math string into atomic units (LaTeX commands, spaces, individual characters)
 * so that partial typing animations never break LaTeX syntax mid-command.
 */
function tokenizeMathString(str) {
  if (!str || typeof str !== 'string') return [];
  const tokens = [];
  const regex = /(\\[a-zA-Z]+|\s+|.)/g;
  let match;
  while ((match = regex.exec(str)) !== null) {
    tokens.push(match[0]);
  }
  return tokens;
}

/**
 * Individual Step Card that:
 * 1. Keeps the exact same card appearance ("as it is": rounded-2xl bg-blue-50/70 border border-blue-100).
 * 2. In Test Mode, displays plain "Step 1", "Step 2" without any dashed borders or click banners.
 * 3. Enforces 1 step after another sequence.
 * 4. Types equation with animation when clicked.
 */
const StepCard = ({
  isTestMode,
  stepIndex,
  revealedCount,
  typingStepIdx,
  onStartTyping,
  onFinishTyping,
  line,
  children,
  className = ""
}) => {
  const isRevealed = stepIndex < revealedCount;
  const isCurrent = stepIndex === revealedCount && typingStepIdx === null;
  const isTyping = typingStepIdx === stepIndex;

  // Check if line contains an equation badge like "------- (1)" or "...(1)"
  const eqMatch = useMemo(() => {
    return typeof line === 'string' ? line.match(/^(.*?)(?:\s+(?:\.{3}|-{3,})\((\d+)\))$/) : null;
  }, [line]);

  const exprToType = eqMatch ? eqMatch[1] : line;
  const eqNum = eqMatch ? eqMatch[2] : null;

  // Tokenize math expression so LaTeX isn't broken
  const tokens = useMemo(() => {
    return tokenizeMathString(exprToType);
  }, [exprToType]);

  const [typedCount, setTypedCount] = useState(0);
  const finishTimeoutRef = useRef(null);

  // Typing animation effect
  useEffect(() => {
    if (!isTyping) {
      setTypedCount(0);
      if (finishTimeoutRef.current) {
        clearTimeout(finishTimeoutRef.current);
      }
      return;
    }

    if (tokens.length === 0) {
      onFinishTyping(stepIndex);
      return;
    }

    let idx = 0;
    // Speed adapts to length: shorter lines type at ~20ms, longer lines type at ~12ms
    const speed = Math.max(10, Math.min(22, Math.floor(650 / tokens.length)));

    const interval = setInterval(() => {
      idx++;
      setTypedCount(idx);
      if (idx >= tokens.length) {
        clearInterval(interval);
        finishTimeoutRef.current = setTimeout(() => {
          onFinishTyping(stepIndex);
        }, 120);
      }
    }, speed);

    return () => {
      clearInterval(interval);
      if (finishTimeoutRef.current) {
        clearTimeout(finishTimeoutRef.current);
      }
    };
  }, [isTyping, tokens, stepIndex, onFinishTyping]);

  const handleCardClick = () => {
    if (!isTestMode) return;
    if (isTyping) {
      // User clicks while typing: instantly finish typing
      onFinishTyping(stepIndex);
      return;
    }
    if (isCurrent) {
      // User clicks current step: trigger typing animation
      onStartTyping(stepIndex);
    }
  };

  // Reconstructed typed string so far
  const typedString = useMemo(() => {
    return tokens.slice(0, typedCount).join('');
  }, [tokens, typedCount]);

  // If Test Mode is disabled, render standard static card
  if (!isTestMode) {
    return (
      <div className={`rounded-2xl bg-blue-50/70 border border-blue-100 p-3 sm:p-3.5 leading-relaxed break-words shadow-2xs text-slate-800 ${className}`}>
        {children}
      </div>
    );
  }

  // TEST MODE: Card remains "as it is" (bg-blue-50/70 border border-blue-100)
  return (
    <div
      onClick={handleCardClick}
      className={`relative rounded-2xl transition-all duration-150 leading-relaxed break-words shadow-2xs text-slate-800 select-text bg-blue-50/70 border border-blue-100 ${
        isCurrent ? 'cursor-pointer' : isRevealed ? '' : 'cursor-default'
      } ${className}`}
    >
      {/* 
        SKELETON / LAYOUT PRESERVER:
        Always in the normal DOM flow so the card retains its EXACT natural height,
        width, padding, and line wraps. The position never shifts or jumps.
      */}
      <div
        className={`p-3 sm:p-3.5 ${
          isRevealed && !isTyping ? 'opacity-100' : 'invisible pointer-events-none'
        }`}
      >
        {children}
      </div>

      {/* TYPING OVERLAY: Displayed while animating */}
      {isTyping && (
        <div className="absolute inset-0 p-3 sm:p-3.5 flex items-start justify-between gap-2.5 overflow-hidden">
          <div className="font-mono text-xs sm:text-[12.5px] text-slate-800 flex-1 min-w-0">
            <MathText text={typedString} />
            <span className="inline-block w-[2.5px] h-3.5 bg-blue-600 animate-pulse ml-0.5 align-middle rounded-full" />
          </div>
          {eqNum && typedCount >= tokens.length && (
            <div className="flex items-center gap-1.5 shrink-0 ml-auto select-none pt-0.5 sm:pt-0">
              <span className="border-b border-dashed border-blue-300 w-6 sm:w-10 inline-block opacity-75" />
              <span className="w-5 h-5 rounded-full border border-blue-400 bg-white text-blue-700 font-bold font-mono text-[11px] flex items-center justify-center shadow-2xs">
                {eqNum}
              </span>
            </div>
          )}
        </div>
      )}

      {/* HIDDEN STEP OVERLAY: Just "Step 1", "Step 2" without any dashed borders or click banners */}
      {!isRevealed && !isTyping && (
        <div className="absolute inset-0 p-2 flex items-center justify-center select-none">
          <span className="text-xs sm:text-[12.5px] font-semibold text-slate-400">
            Step {stepIndex + 1}
          </span>
        </div>
      )}
    </div>
  );
};

/**
 * Main Math Problem Card Component with:
 * - Top header with Example / Exercise label on the left
 * - Grey text "Test Mode" / "Exit Test" on the right
 * - Problem statement with KaTeX math formatting
 * - Given sets / conditions
 * - Sequential solution steps with interactive typing animation in Test Mode
 */
export const MathProblemCard = ({ sum, sIdx }) => {
  const [isTestMode, setIsTestMode] = useState(false);
  const [revealedCount, setRevealedCount] = useState(0);
  const [typingStepIdx, setTypingStepIdx] = useState(null);

  // Toggle Test Mode
  const handleToggleTestMode = () => {
    setIsTestMode(prev => {
      const next = !prev;
      if (next) {
        setRevealedCount(0);
        setTypingStepIdx(null);
      }
      return next;
    });
  };

  // Reset test steps back to Step 1
  const handleResetTest = () => {
    setRevealedCount(0);
    setTypingStepIdx(null);
  };

  // Start typing for step index
  const handleStartTyping = (stepIdx) => {
    setTypingStepIdx(stepIdx);
  };

  // Complete typing for step index
  const handleFinishTyping = (stepIdx) => {
    setTypingStepIdx(null);
    setRevealedCount(Math.max(stepIdx + 1, revealedCount));
  };

  const isExercise = /exercise/i.test(sum.exampleNum || '');

  // We assign sequential step index across given + parts
  let currentStepCounter = 0;

  return (
    <div className="rounded-[20px] bg-white border border-slate-200 border-b-[4px] border-b-slate-200 p-4 sm:p-5 space-y-3.5 shadow-sm transition-all select-text">
      {/* Top Header Row: Exercise/Example label on Left, Retry icon + Grey Test Mode text on Right */}
      <div className="flex items-center justify-between gap-3">
        {/* Left: Example in red text, Exercise in orange pill */}
        <div>
          {isExercise ? (
            <div className="inline-flex items-center px-3.5 py-1 rounded-full border-2 border-orange-500 bg-white">
              <span className="font-bold text-xs sm:text-sm text-emerald-600 font-sans">
                {sum.exampleNum}
              </span>
            </div>
          ) : (
            <h3 className="font-bold text-base sm:text-lg text-red-600">
              {sum.exampleNum}
            </h3>
          )}
        </div>

        {/* Right: Retry icon + Plain grey text for Test Mode / Exit Test */}
        <div className="flex items-center gap-2">
          {isTestMode && (
            <button
              onClick={handleResetTest}
              title="Retry Test"
              className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer select-none p-0.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={handleToggleTestMode}
            className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors cursor-pointer select-none"
          >
            {isTestMode ? 'Exit Test' : 'Test Mode'}
          </button>
        </div>
      </div>

      {/* Problem Statement directly */}
      <div className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-relaxed whitespace-pre-line break-words">
        <MathText text={sum.problem} />
      </div>

      {/* Subtle Separator */}
      <div className="h-[1px] w-full bg-slate-100" />

      {/* Solution Section */}
      <div className="space-y-3">
        <span className="text-blue-600 font-black text-xs sm:text-sm tracking-wide inline-block">
          Solution:
        </span>

        {/* Step 0 / Understanding the Given Sets (if present) */}
        {sum.givenUnderstanding && (
          <div className="rounded-xl bg-slate-50/80 border border-slate-200/80 p-3 sm:p-3.5 space-y-2 text-xs sm:text-[12.5px] text-slate-700 leading-relaxed font-sans">
            {sum.givenUnderstanding.map((item, idx) => (
              <p 
                key={idx} 
                className={idx === 0 ? "font-bold text-slate-900 pb-0.5" : "text-slate-800 leading-relaxed"}
              >
                <MathText text={item} />
              </p>
            ))}
          </div>
        )}

        {/* Given data decoded in the answer */}
        {(sum.givenLines || sum.given) && (
          <div className="space-y-1.5 pt-0.5">
            <span className="font-bold text-slate-900 text-xs sm:text-[13px] inline-block">
              Given:
            </span>
            {sum.givenLines ? (
              <div className="space-y-1.5">
                {sum.givenLines.map((gLine, gIdx) => {
                  const stepIdx = currentStepCounter++;
                  return (
                    <StepCard
                      key={gIdx}
                      isTestMode={isTestMode}
                      stepIndex={stepIdx}
                      revealedCount={revealedCount}
                      typingStepIdx={typingStepIdx}
                      onStartTyping={handleStartTyping}
                      onFinishTyping={handleFinishTyping}
                      line={gLine}
                    >
                      <p className="font-mono text-xs sm:text-[12.5px] text-slate-800 font-normal">
                        <MathText text={gLine} />
                      </p>
                    </StepCard>
                  );
                })}
              </div>
            ) : (
              (() => {
                const gLine = sum.given.replace(/^Given:\s*/i, '');
                const stepIdx = currentStepCounter++;
                return (
                  <StepCard
                    isTestMode={isTestMode}
                    stepIndex={stepIdx}
                    revealedCount={revealedCount}
                    typingStepIdx={typingStepIdx}
                    onStartTyping={handleStartTyping}
                    onFinishTyping={handleFinishTyping}
                    line={gLine}
                  >
                    <p className="font-mono text-xs sm:text-[12.5px] text-slate-800 font-normal">
                      <MathText text={gLine} />
                    </p>
                  </StepCard>
                );
              })()
            )}
          </div>
        )}

        {/* Worked Example Steps in Blue Boxes */}
        {sum.parts ? (
          <div className="space-y-3 pt-1 text-xs sm:text-[13px] text-slate-800 leading-relaxed">
            {sum.parts.map((part, pIdx) => (
              <div key={pIdx} className="space-y-1.5">
                {/* Part Heading if present (e.g. (i) A × (B ∪ C) = (A × B) ∪ (A × C)) */}
                {part.heading && (
                  <p className="font-mono font-bold text-slate-900 text-xs sm:text-[13px] pb-0.5">
                    <MathText text={part.heading} />
                  </p>
                )}

                {/* Row with Part number (e.g. 1.) and Blue Boxes for each step line */}
                <div className="flex items-start gap-2.5">
                  {part.partNum && (
                    <span className="font-bold text-blue-600 text-sm sm:text-base pt-2 shrink-0 select-none">
                      {part.partNum}
                    </span>
                  )}

                  <div className="flex-1 space-y-2">
                    {part.lines.map((line, lIdx) => {
                      const stepIdx = currentStepCounter++;
                      // Match lines ending with ...(N) or ---(N)
                      const eqMatch = line.match(/^(.*?)(?:\s+(?:\.{3}|-{3,})\((\d+)\))$/);
                      if (eqMatch) {
                        const expr = eqMatch[1];
                        const eqNum = eqMatch[2];
                        return (
                          <StepCard
                            key={lIdx}
                            isTestMode={isTestMode}
                            stepIndex={stepIdx}
                            revealedCount={revealedCount}
                            typingStepIdx={typingStepIdx}
                            onStartTyping={handleStartTyping}
                            onFinishTyping={handleFinishTyping}
                            line={line}
                          >
                            <div className="flex items-center justify-between gap-2.5 flex-wrap sm:flex-nowrap">
                              <span className="font-mono text-xs sm:text-[12.5px] text-slate-800">
                                <MathText text={expr} />
                              </span>
                              <div className="flex items-center gap-1.5 shrink-0 ml-auto select-none pt-0.5 sm:pt-0">
                                <span className="border-b border-dashed border-blue-300 w-6 sm:w-10 inline-block opacity-75" />
                                <span className="w-5 h-5 rounded-full border border-blue-400 bg-white text-blue-700 font-bold font-mono text-[11px] flex items-center justify-center shadow-2xs">
                                  {eqNum}
                                </span>
                              </div>
                            </div>
                          </StepCard>
                        );
                      }

                      return (
                        <StepCard
                          key={lIdx}
                          isTestMode={isTestMode}
                          stepIndex={stepIdx}
                          revealedCount={revealedCount}
                          typingStepIdx={typingStepIdx}
                          onStartTyping={handleStartTyping}
                          onFinishTyping={handleFinishTyping}
                          line={line}
                        >
                          <p className="font-mono text-xs sm:text-[12.5px] text-slate-800 font-normal">
                            <MathText text={line} />
                          </p>
                        </StepCard>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MathProblemCard;
