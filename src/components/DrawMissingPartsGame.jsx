// src/components/DrawMissingPartsGame.jsx
import React, { useState, useRef } from 'react';
import { RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

export const DrawMissingPartsGame = () => {
  // Strokes stored by rowId and itemIndex: { "row1_0": [ [[x1,y1],[x2,y2]], ... ], ... }
  const [strokesMap, setStrokesMap] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDrawingRef = useRef(false);
  const activeKeyRef = useRef(null);

  const getSvgCoords = (e, svg) => {
    const rect = svg.getBoundingClientRect();
    const x = Math.round(14 + ((e.clientX - rect.left) / rect.width) * 92);
    const y = Math.round(12 + ((e.clientY - rect.top) / rect.height) * 104);
    return [x, y];
  };

  const handlePointerDown = (key, e) => {
    e.preventDefault();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}

    const [x, y] = getSvgCoords(e, e.currentTarget);
    isDrawingRef.current = true;
    activeKeyRef.current = key;

    setStrokesMap(prev => {
      const existing = prev[key] || [];
      return {
        ...prev,
        [key]: [...existing, [[x, y]]]
      };
    });
  };

  const handlePointerMove = (key, e) => {
    if (!isDrawingRef.current || activeKeyRef.current !== key) return;
    e.preventDefault();

    const [x, y] = getSvgCoords(e, e.currentTarget);

    setStrokesMap(prev => {
      const existing = prev[key] || [];
      if (existing.length === 0) return prev;
      const lastStroke = [...existing[existing.length - 1], [x, y]];
      const updated = [...existing.slice(0, -1), lastStroke];
      return {
        ...prev,
        [key]: updated
      };
    });
  };

  const handlePointerUp = (e) => {
    if (e && e.currentTarget && e.currentTarget.hasPointerCapture && e.currentTarget.hasPointerCapture(e.pointerId)) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (_) {}
    }
    isDrawingRef.current = false;
    activeKeyRef.current = null;
  };

  const handleResetAll = () => {
    setStrokesMap({});
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(c => c - 1);
  };

  const handleNext = () => {
    if (currentIndex < rows.length - 1) setCurrentIndex(c => c + 1);
  };

  // 3 Questions definition
  const rows = [
    {
      id: 'row1',
      title: 'முகத்தில் விடுபட்ட உறுப்புகளை வரைக',
      type: 'stick',
      renderTarget: () => (
        <g stroke="#000" fill="none">
          <ellipse cx="60" cy="65" rx="36" ry="46" strokeWidth="3" fill="#fff" />
          <circle cx="46" cy="48" r="4.5" fill="#000" stroke="none" />
          <circle cx="74" cy="48" r="4.5" fill="#000" stroke="none" />
          <line x1="60" y1="50" x2="60" y2="82" strokeWidth="4" strokeLinecap="round" />
          <line x1="48" y1="96" x2="72" y2="96" strokeWidth="4" strokeLinecap="round" />
        </g>
      ),
      items: [
        {
          renderBase: () => (
            <g stroke="#000" fill="none">
              <ellipse cx="60" cy="65" rx="36" ry="46" strokeWidth="3" fill="#fff" />
              <circle cx="46" cy="48" r="4.5" fill="#000" stroke="none" />
              <circle cx="74" cy="48" r="4.5" fill="#000" stroke="none" />
              <line x1="60" y1="50" x2="60" y2="82" strokeWidth="4" strokeLinecap="round" />
            </g>
          )
        },
        {
          renderBase: () => (
            <g stroke="#000" fill="none">
              <ellipse cx="60" cy="65" rx="36" ry="46" strokeWidth="3" fill="#fff" />
              <circle cx="46" cy="48" r="4.5" fill="#000" stroke="none" />
              <circle cx="74" cy="48" r="4.5" fill="#000" stroke="none" />
            </g>
          )
        }
      ]
    },
    {
      id: 'row2',
      title: 'சிரிக்கும் முகத்தில் விடுபட்ட உறுப்புகளை வரைக',
      type: 'smile',
      renderTarget: () => (
        <g stroke="#000" fill="none">
          <ellipse cx="60" cy="65" rx="34" ry="38" strokeWidth="3" fill="#fff" />
          <path d="M 26 52 C 14 52 14 78 26 78" strokeWidth="3" />
          <path d="M 94 52 C 106 52 106 78 94 78" strokeWidth="3" />
          <path d="M 42 46 Q 48 40 54 46" strokeWidth="2.5" />
          <circle cx="48" cy="50" r="3.5" fill="#000" stroke="none" />
          <path d="M 66 46 Q 72 40 78 46" strokeWidth="2.5" />
          <circle cx="72" cy="50" r="3.5" fill="#000" stroke="none" />
          <path d="M 60 58 Q 54 68 62 68" strokeWidth="3" strokeLinecap="round" />
          <path d="M 46 80 Q 60 92 74 80" strokeWidth="3" strokeLinecap="round" />
        </g>
      ),
      items: [
        {
          renderBase: () => (
            <g stroke="#000" fill="none">
              <ellipse cx="60" cy="65" rx="34" ry="38" strokeWidth="3" fill="#fff" />
              <path d="M 26 52 C 14 52 14 78 26 78" strokeWidth="3" />
              <path d="M 94 52 C 106 52 106 78 94 78" strokeWidth="3" />
              <path d="M 42 46 Q 48 40 54 46" strokeWidth="2.5" />
              <circle cx="48" cy="50" r="3.5" fill="#000" stroke="none" />
              <path d="M 66 46 Q 72 40 78 46" strokeWidth="2.5" />
              <circle cx="72" cy="50" r="3.5" fill="#000" stroke="none" />
              <path d="M 60 58 Q 54 68 62 68" strokeWidth="3" strokeLinecap="round" />
            </g>
          )
        },
        {
          renderBase: () => (
            <g stroke="#000" fill="none">
              <ellipse cx="60" cy="65" rx="34" ry="38" strokeWidth="3" fill="#fff" />
              <path d="M 26 52 C 14 52 14 78 26 78" strokeWidth="3" />
              <path d="M 94 52 C 106 52 106 78 94 78" strokeWidth="3" />
              <path d="M 42 46 Q 48 40 54 46" strokeWidth="2.5" />
              <circle cx="48" cy="50" r="3.5" fill="#000" stroke="none" />
              <path d="M 66 46 Q 72 40 78 46" strokeWidth="2.5" />
              <circle cx="72" cy="50" r="3.5" fill="#000" stroke="none" />
            </g>
          )
        }
      ]
    },
    {
      id: 'row3',
      title: 'தொப்பி அணிந்த முகத்தில் விடுபட்ட உறுப்புகளை வரைக',
      type: 'hat',
      renderTarget: () => (
        <g stroke="#000" fill="none">
          <ellipse cx="60" cy="72" rx="30" ry="34" strokeWidth="3" fill="#fff" />
          <path d="M 30 58 C 18 58 18 82 30 82" strokeWidth="3" />
          <path d="M 90 58 C 102 58 102 82 90 82" strokeWidth="3" />
          <path d="M 42 45 L 60 16 L 78 45" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx="60" cy="13" r="3.5" fill="#000" stroke="none" />
          <circle cx="64" cy="15" r="2.5" fill="#000" stroke="none" />
          <circle cx="56" cy="15" r="2.5" fill="#000" stroke="none" />
          <path d="M 44 56 Q 49 51 54 56" strokeWidth="2.5" />
          <circle cx="49" cy="60" r="3" fill="#000" stroke="none" />
          <path d="M 66 56 Q 71 51 76 56" strokeWidth="2.5" />
          <circle cx="71" cy="60" r="3" fill="#000" stroke="none" />
          <path d="M 60 66 Q 55 74 62 74" strokeWidth="3" strokeLinecap="round" />
          <path d="M 48 88 Q 60 96 72 88" strokeWidth="3" strokeLinecap="round" />
          <circle cx="60" cy="97" r="2" fill="#000" stroke="none" />
        </g>
      ),
      items: [
        {
          renderBase: () => (
            <g stroke="#000" fill="none">
              <ellipse cx="60" cy="72" rx="30" ry="34" strokeWidth="3" fill="#fff" />
              <path d="M 30 58 C 18 58 18 82 30 82" strokeWidth="3" />
              <path d="M 90 58 C 102 58 102 82 90 82" strokeWidth="3" />
              <path d="M 42 45 L 60 16 L 78 45" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
              <circle cx="60" cy="13" r="3.5" fill="#000" stroke="none" />
              <circle cx="64" cy="15" r="2.5" fill="#000" stroke="none" />
              <circle cx="56" cy="15" r="2.5" fill="#000" stroke="none" />
              <path d="M 44 56 Q 49 51 54 56" strokeWidth="2.5" />
              <circle cx="49" cy="60" r="3" fill="#000" stroke="none" />
              <path d="M 66 56 Q 71 51 76 56" strokeWidth="2.5" />
              <circle cx="71" cy="60" r="3" fill="#000" stroke="none" />
              <path d="M 60 66 Q 55 74 62 74" strokeWidth="3" strokeLinecap="round" />
            </g>
          )
        },
        {
          renderBase: () => (
            <g stroke="#000" fill="none">
              <ellipse cx="60" cy="72" rx="30" ry="34" strokeWidth="3" fill="#fff" />
              <path d="M 30 58 C 18 58 18 82 30 82" strokeWidth="3" />
              <path d="M 90 58 C 102 58 102 82 90 82" strokeWidth="3" />
              <path d="M 42 45 L 60 16 L 78 45" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
              <circle cx="60" cy="13" r="3.5" fill="#000" stroke="none" />
              <circle cx="64" cy="15" r="2.5" fill="#000" stroke="none" />
              <circle cx="56" cy="15" r="2.5" fill="#000" stroke="none" />
            </g>
          )
        }
      ]
    }
  ];

  const currentRow = rows[currentIndex];

  return (
    <div className="space-y-4 pb-12 select-none w-full max-w-lg mx-auto px-2">
      {/* Active Question Card (1 Question at a time - Fits mobile screen fully!) */}
      <div
        key={currentRow.id}
        className="rounded-[24px] bg-white border border-slate-200/90 p-4 sm:p-6 space-y-4 shadow-xs relative transition-all duration-300"
      >
        {/* Question Header & Title */}
        <div className="text-center font-black text-slate-800 text-sm sm:text-base">
          {currentIndex + 1}. {currentRow.title}
        </div>

        {/* Target Complete Face */}
        <div className="w-full flex justify-center py-1">
          <div className="flex items-center justify-center bg-pink-50 border border-pink-200/80 rounded-2xl p-2 px-6 shadow-2xs">
            <svg viewBox="12 10 96 110" className="w-24 h-24 sm:w-28 sm:h-28 pointer-events-none">
              {currentRow.renderTarget()}
            </svg>
          </div>
        </div>

        <div className="border-b border-stone-200/70 my-1" />

        {/* 2 Big Practice Drawings */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-md mx-auto">
          {currentRow.items.map((item, itemIdx) => {
            const key = `${currentRow.id}_${itemIdx}`;
            const strokes = strokesMap[key] || [];

            return (
              <div
                key={itemIdx}
                className="flex items-center justify-center relative touch-none select-none p-1 cursor-crosshair"
              >
                <svg
                  viewBox="14 12 92 104"
                  className="w-36 h-40 sm:w-44 sm:h-48 max-w-full cursor-crosshair touch-none select-none drop-shadow-2xs"
                  onPointerDown={(e) => handlePointerDown(key, e)}
                  onPointerMove={(e) => handlePointerMove(key, e)}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                  style={{ touchAction: 'none' }}
                >
                  {/* Base incomplete face SVG */}
                  {item.renderBase()}

                  {/* Hand-drawn strokes */}
                  {strokes.map((pts, sIdx) => {
                    const polylinePoints = pts.map(p => `${p[0]},${p[1]}`).join(' ');
                    return (
                      <polyline
                        key={sIdx}
                        points={polylinePoints}
                        fill="none"
                        stroke="#000000"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    );
                  })}
                </svg>
              </div>
            );
          })}
        </div>
      </div>

      {/* Prev / Next Horizontal Navigation Buttons */}
      <div className="flex items-center justify-between gap-3 pt-2 px-1">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`flex items-center gap-1 px-4 sm:px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all border shadow-xs ${
            currentIndex === 0
              ? 'opacity-40 bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
              : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 border-b-[3px] border-b-slate-400 active:translate-y-[2px] active:border-b cursor-pointer'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>முந்தையது</span>
        </button>

        {/* Counter Indicator */}
        <div className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-black text-xs sm:text-sm">
          {currentIndex + 1} / {rows.length}
        </div>

        <button
          type="button"
          onClick={handleNext}
          disabled={currentIndex === rows.length - 1}
          className={`flex items-center gap-1 px-4 sm:px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all border shadow-xs ${
            currentIndex === rows.length - 1
              ? 'opacity-40 bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
              : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 border-b-[3px] border-b-slate-400 active:translate-y-[2px] active:border-b cursor-pointer'
          }`}
        >
          <span>அடுத்தது</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Retry Button (Resets all and redirects to Question 1) */}
      <div className="flex justify-center pt-3 pb-4">
        <button
          type="button"
          onClick={handleResetAll}
          className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-[#16a34a] hover:bg-green-700 text-white border border-green-700 border-b-[3.5px] border-b-green-900 shadow-xs active:translate-y-[2px] active:border-b-[1.5px] transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>மீண்டும் செய்</span>
        </button>
      </div>
    </div>
  );
};

export default DrawMissingPartsGame;
