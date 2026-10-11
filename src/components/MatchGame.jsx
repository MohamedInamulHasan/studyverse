// src/components/MatchGame.jsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { RotateCcw } from 'lucide-react';
import { MathText } from './MathText';

export const MatchGame = ({ items = [], theme = 'orange' }) => {
  // Shuffled right items
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  // Matches map: { [questionNum]: { answerId: string, isCorrect: boolean } }
  const [matches, setMatches] = useState({});
  // Currently dragging from question item: questionNum or null
  const [activeQuestion, setActiveQuestion] = useState(null);
  // Pointer position during drag relative to SVG container: { x, y }
  const [dragLine, setDragLine] = useState(null);

  const containerRef = useRef(null);
  const leftBubbleRefs = useRef({});
  const rightBubbleRefs = useRef({});
  const [bubbleCoords, setBubbleCoords] = useState({ left: {}, right: {} });

  // Shuffle right items on load or reset
  const initGame = useCallback(() => {
    const answers = items.map((item, idx) => ({
      id: `ans_${item.num || idx + 1}`,
      text: item.right,
      originalNum: item.num || idx + 1
    }));

    // Shuffle ensuring not in exact same order if length > 1
    const shuffled = [...answers].sort(() => Math.random() - 0.5);
    setShuffledAnswers(shuffled);
    setMatches({});
    setActiveQuestion(null);
    setDragLine(null);
  }, [items]);

  useEffect(() => {
    initGame();
  }, [initGame]);

  // Recalculate bubble coordinates
  const updateCoords = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();

    const newLeft = {};
    Object.entries(leftBubbleRefs.current).forEach(([num, el]) => {
      if (el) {
        const r = el.getBoundingClientRect();
        newLeft[num] = {
          x: r.left + r.width / 2 - containerRect.left,
          y: r.top + r.height / 2 - containerRect.top
        };
      }
    });

    const newRight = {};
    Object.entries(rightBubbleRefs.current).forEach(([id, el]) => {
      if (el) {
        const r = el.getBoundingClientRect();
        newRight[id] = {
          x: r.left + r.width / 2 - containerRect.left,
          y: r.top + r.height / 2 - containerRect.top
        };
      }
    });

    setBubbleCoords({ left: newLeft, right: newRight });
  }, []);

  useEffect(() => {
    updateCoords();
    window.addEventListener('resize', updateCoords);
    const timer = setTimeout(updateCoords, 80);
    return () => {
      window.removeEventListener('resize', updateCoords);
      clearTimeout(timer);
    };
  }, [shuffledAnswers, matches, updateCoords]);

  // Handle Drag / Pointer Start from a Question Bubble or Card
  const handlePointerDownQuestion = (e, qNum) => {
    e.preventDefault();
    // Undrag / detach if this question was already connected so user can drag line again
    setMatches((prev) => {
      const next = { ...prev };
      delete next[qNum];
      return next;
    });

    setActiveQuestion(qNum);
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    setDragLine({
      x: e.clientX - containerRect.left,
      y: e.clientY - containerRect.top
    });
  };

  // Handle Drag / Pointer Start from an Answer Bubble or Card
  const handlePointerDownAnswer = (e, ansItem) => {
    // If this answer is already matched, undrag it and resume dragging from its connected question
    const matchedEntry = Object.entries(matches).find(([_, m]) => m.answerId === ansItem.id);
    if (matchedEntry) {
      e.preventDefault();
      const qNum = parseInt(matchedEntry[0], 10);
      setMatches((prev) => {
        const next = { ...prev };
        delete next[qNum];
        return next;
      });

      setActiveQuestion(qNum);
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      setDragLine({
        x: e.clientX - containerRect.left,
        y: e.clientY - containerRect.top
      });
    }
  };

  // Pointer Move on Container
  const handlePointerMove = (e) => {
    if (activeQuestion === null) return;
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    setDragLine({
      x: e.clientX - containerRect.left,
      y: e.clientY - containerRect.top
    });
  };

  // Connect active question to an answer
  const makeConnection = (qNum, ansItem) => {
    if (!qNum || !ansItem) return;
    const questionObj = items.find((it) => it.num === qNum);
    if (!questionObj) return;

    const isCorrect = questionObj.right.trim() === ansItem.text.trim();

    setMatches((prev) => {
      const next = { ...prev };
      // If another question was connected to this answer, disconnect that one
      Object.keys(next).forEach((k) => {
        if (next[k]?.answerId === ansItem.id) {
          delete next[k];
        }
      });
      next[qNum] = {
        answerId: ansItem.id,
        isCorrect
      };
      return next;
    });

    setActiveQuestion(null);
    setDragLine(null);
  };

  // Pointer Up
  const handlePointerUp = (e) => {
    if (activeQuestion === null) return;

    // Check if pointer dropped over any answer card
    const targetElement = document.elementFromPoint(e.clientX, e.clientY);
    if (targetElement) {
      const cardEl = targetElement.closest('[data-answer-id]');
      if (cardEl) {
        const ansId = cardEl.getAttribute('data-answer-id');
        const ansItem = shuffledAnswers.find((a) => a.id === ansId);
        if (ansItem) {
          makeConnection(activeQuestion, ansItem);
          return;
        }
      }
    }

    // Dropped in empty space: undrag line completely
    setActiveQuestion(null);
    setDragLine(null);
  };

  // Tap-to-connect handler on answer card
  const handleClickAnswer = (ansItem) => {
    if (activeQuestion !== null) {
      makeConnection(activeQuestion, ansItem);
    } else {
      // If clicked on an already-matched answer without dragging, detach / undrag it
      setMatches((prev) => {
        const next = { ...prev };
        Object.keys(next).forEach((qKey) => {
          if (next[qKey]?.answerId === ansItem.id) {
            delete next[qKey];
          }
        });
        return next;
      });
    }
  };

  // Total answers & completion metrics
  const totalQuestions = items.length;
  const answeredCount = Object.keys(matches).length;
  const correctCount = Object.values(matches).filter((m) => m.isCorrect).length;
  const isCompleted = totalQuestions > 0 && answeredCount === totalQuestions;

  return (
    <div className="space-y-4 select-none">
      {/* Instructions */}
      <div className="text-center">
        <p className="text-xs font-semibold text-slate-500">
          Drag the line from the question bubble to the matching answer
        </p>
      </div>

      {/* Main Interactive Matching Container */}
      <div
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="relative touch-none px-1 py-2"
      >
        {/* SVG Canvas for Lines - Line is ONLY BLACK */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
          {/* Render already connected matches in pure black */}
          {Object.entries(matches).map(([qNumStr, match]) => {
            const qNum = parseInt(qNumStr, 10);
            const p1 = bubbleCoords.left[qNum];
            const p2 = bubbleCoords.right[match.answerId];
            if (!p1 || !p2) return null;

            const midX = (p1.x + p2.x) / 2;
            const pathData = `M ${p1.x} ${p1.y} C ${midX} ${p1.y}, ${midX} ${p2.y}, ${p2.x} ${p2.y}`;

            return (
              <path
                key={qNum}
                d={pathData}
                fill="none"
                stroke="#000000"
                strokeWidth={2.4}
                strokeLinecap="round"
              />
            );
          })}

          {/* Render active dragging line in pure black */}
          {activeQuestion !== null && dragLine && bubbleCoords.left[activeQuestion] && (
            <path
              d={`M ${bubbleCoords.left[activeQuestion].x} ${bubbleCoords.left[activeQuestion].y} C ${(bubbleCoords.left[activeQuestion].x + dragLine.x) / 2} ${bubbleCoords.left[activeQuestion].y}, ${(bubbleCoords.left[activeQuestion].x + dragLine.x) / 2} ${dragLine.y}, ${dragLine.x} ${dragLine.y}`}
              fill="none"
              stroke="#000000"
              strokeWidth={2.4}
              strokeLinecap="round"
            />
          )}
        </svg>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-2 gap-7 sm:gap-12 relative z-20">
          {/* LEFT COLUMN: Questions (ALWAYS white card, layout remains exactly as it is, no black border) */}
          <div className="space-y-3">
            {items.map((item) => {
              const qNum = item.num;
              const match = matches[qNum];
              const isMatched = Boolean(match);

              return (
                <div
                  key={qNum}
                  onPointerDown={(e) => handlePointerDownQuestion(e, qNum)}
                  className="relative min-h-[58px] rounded-[18px] bg-white text-slate-800 border border-slate-200 border-b-[4px] border-b-slate-300 p-3 flex items-center transition-all duration-150 cursor-grab active:cursor-grabbing shadow-2xs"
                >
                  {/* Question Text */}
                  <div className="text-xs sm:text-[13px] font-bold leading-snug break-words flex-1 pr-2">
                    <span className="mr-1">{qNum}.</span>
                    <MathText text={item.left} />
                  </div>

                  {/* Small Bubble Connector on Right Side */}
                  <div
                    ref={(el) => {
                      leftBubbleRefs.current[qNum] = el;
                    }}
                    className={`absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border transition-all ${
                      isMatched
                        ? 'bg-black border-black'
                        : 'bg-white border-slate-400 hover:border-black'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Answers (Light orange if correct, light red if wrong, NO tick or x symbol) */}
          <div className="space-y-3">
            {shuffledAnswers.map((ans) => {
              const matchedEntry = Object.entries(matches).find(([_, m]) => m.answerId === ans.id);
              const isMatched = Boolean(matchedEntry);
              const isCorrect = matchedEntry ? matchedEntry[1].isCorrect : false;

              let cardClasses = 'bg-white text-slate-800 border-slate-200 border-b-[4px] border-b-slate-300';
              if (isMatched) {
                if (isCorrect) {
                  // Correct: Light orange card for science, light blue card for social science
                  cardClasses = (theme === 'blue' || theme === 'sky')
                    ? 'bg-[#BAE6FD] text-sky-950 border-sky-300 border-b-[4px] border-b-sky-500 font-bold'
                    : 'bg-[#FED7AA] text-orange-950 border-orange-300 border-b-[4px] border-b-orange-500 font-bold';
                } else {
                  // Wrong: Light red card
                  cardClasses = 'bg-rose-100 text-rose-950 border-rose-300 border-b-[4px] border-b-rose-400 font-bold';
                }
              }

              return (
                <div
                  key={ans.id}
                  data-answer-id={ans.id}
                  onPointerDown={(e) => handlePointerDownAnswer(e, ans)}
                  onClick={() => handleClickAnswer(ans)}
                  className={`relative min-h-[58px] rounded-[18px] border p-3 flex items-center transition-all duration-150 cursor-pointer shadow-2xs ${cardClasses}`}
                >
                  {/* Small Bubble Connector on Left Side */}
                  <div
                    ref={(el) => {
                      rightBubbleRefs.current[ans.id] = el;
                    }}
                    className={`absolute -left-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border transition-all ${
                      isMatched
                        ? 'bg-black border-black'
                        : 'bg-white border-slate-400 hover:border-black'
                    }`}
                  />

                  {/* Answer Text (no tick or x symbol) */}
                  <div className="text-xs sm:text-[13px] font-bold leading-snug break-words flex-1 pl-2">
                    <MathText text={ans.text} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Completion Score & Retry Button Below */}
      {answeredCount > 0 && (
        <div className="text-center space-y-3 pt-4 pb-2 animate-fade-in">
          {isCompleted && (
            <p className="text-sm sm:text-base font-bold text-slate-700 animate-fade-in">
              Score: <span className={`font-black ${(theme === 'blue' || theme === 'sky') ? 'text-sky-600' : 'text-orange-600'}`}>{correctCount}</span> / {totalQuestions} ({Math.round((correctCount / totalQuestions) * 100)}%)
            </p>
          )}
          <div>
            <button
              onClick={initGame}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-700 border-b-[3.5px] border-b-emerald-900 shadow-xs active:translate-y-[2px] active:border-b-[1.5px] transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchGame;
