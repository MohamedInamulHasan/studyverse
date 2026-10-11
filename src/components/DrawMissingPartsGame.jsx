// src/components/DrawMissingPartsGame.jsx
import React, { useState, useRef } from 'react';
import { RotateCcw } from 'lucide-react';

export const DrawMissingPartsGame = () => {
  // Strokes stored by rowId and itemIndex: { "row1_0": [ [[x1,y1],[x2,y2]], ... ], ... }
  const [strokesMap, setStrokesMap] = useState({});
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
    const firstEl = document.getElementById('missing-parts-row-0');
    if (firstEl) {
      firstEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Rows definition: 3 questions, each with target + 2 enlarged practice drawings
  const rows = [
    {
      id: 'row1',
      title: '1. முகத்தில் விடுபட்ட உறுப்புகளை வரைக',
      type: 'stick',
      renderTarget: () => (
        <g stroke="#000" fill="none">
          {/* Oval face */}
          <ellipse cx="60" cy="65" rx="36" ry="46" strokeWidth="3" fill="#fff" />
          {/* Eyes */}
          <circle cx="46" cy="48" r="4.5" fill="#000" stroke="none" />
          <circle cx="74" cy="48" r="4.5" fill="#000" stroke="none" />
          {/* Stick nose */}
          <line x1="60" y1="50" x2="60" y2="82" strokeWidth="4" strokeLinecap="round" />
          {/* Mouth line */}
          <line x1="48" y1="96" x2="72" y2="96" strokeWidth="4" strokeLinecap="round" />
        </g>
      ),
      items: [
        {
          // Step 1: Has face, eyes, nose (missing mouth)
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
          // Step 2: Has face, eyes (missing nose & mouth)
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
      title: '2. சிரிக்கும் முகத்தில் விடுபட்ட உறுப்புகளை வரைக',
      type: 'smile',
      renderTarget: () => (
        <g stroke="#000" fill="none">
          {/* Face Circle FIRST */}
          <ellipse cx="60" cy="65" rx="34" ry="38" strokeWidth="3" fill="#fff" />
          {/* Left & Right Ears SECOND */}
          <path d="M 26 52 C 14 52 14 78 26 78" strokeWidth="3" />
          <path d="M 94 52 C 106 52 106 78 94 78" strokeWidth="3" />
          {/* Eyebrows & Pupils */}
          <path d="M 42 46 Q 48 40 54 46" strokeWidth="2.5" />
          <circle cx="48" cy="50" r="3.5" fill="#000" stroke="none" />
          <path d="M 66 46 Q 72 40 78 46" strokeWidth="2.5" />
          <circle cx="72" cy="50" r="3.5" fill="#000" stroke="none" />
          {/* U Nose */}
          <path d="M 60 58 Q 54 68 62 68" strokeWidth="3" strokeLinecap="round" />
          {/* Smile mouth */}
          <path d="M 46 80 Q 60 92 74 80" strokeWidth="3" strokeLinecap="round" />
        </g>
      ),
      items: [
        {
          // Step 1: Face + ears + eyes + nose
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
          // Step 2: Face + ears + eyes
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
      title: '3. தொப்பி அணிந்த முகத்தில் விடுபட்ட உறுப்புகளை வரைக',
      type: 'hat',
      renderTarget: () => (
        <g stroke="#000" fill="none">
          {/* Face Oval FIRST */}
          <ellipse cx="60" cy="72" rx="30" ry="34" strokeWidth="3" fill="#fff" />
          {/* Ears SECOND */}
          <path d="M 30 58 C 18 58 18 82 30 82" strokeWidth="3" />
          <path d="M 90 58 C 102 58 102 82 90 82" strokeWidth="3" />
          {/* Party Hat */}
          <path d="M 42 45 L 60 16 L 78 45" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx="60" cy="13" r="3.5" fill="#000" stroke="none" />
          <circle cx="64" cy="15" r="2.5" fill="#000" stroke="none" />
          <circle cx="56" cy="15" r="2.5" fill="#000" stroke="none" />
          {/* Eyebrows & Eyes */}
          <path d="M 44 56 Q 49 51 54 56" strokeWidth="2.5" />
          <circle cx="49" cy="60" r="3" fill="#000" stroke="none" />
          <path d="M 66 56 Q 71 51 76 56" strokeWidth="2.5" />
          <circle cx="71" cy="60" r="3" fill="#000" stroke="none" />
          {/* Nose */}
          <path d="M 60 66 Q 55 74 62 74" strokeWidth="3" strokeLinecap="round" />
          {/* Mouth & Chin Dimple */}
          <path d="M 48 88 Q 60 96 72 88" strokeWidth="3" strokeLinecap="round" />
          <circle cx="60" cy="97" r="2" fill="#000" stroke="none" />
        </g>
      ),
      items: [
        {
          // Step 1: Hat + face + ears + eyes + nose (missing mouth)
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
          // Step 2: Hat + face outline + ears
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

  return (
    <div className="space-y-5 pb-12 select-none w-full max-w-xl mx-auto px-1 sm:px-3">
      {rows.map((row, rIdx) => (
        <div
          id={`missing-parts-row-${rIdx}`}
          key={row.id}
          className="rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200/90 p-4 sm:p-6 space-y-4 shadow-xs relative"
        >
          {/* Question Illustration (ABOVE - Light Pink Pill Container) */}
          <div className="w-full flex justify-center py-1">
            <div className="flex items-center justify-center bg-pink-50 border border-pink-200/80 rounded-2xl p-2.5 px-6 shadow-2xs">
              <svg viewBox="12 10 96 110" className="w-28 h-28 sm:w-32 sm:h-32 pointer-events-none">
                {row.renderTarget()}
              </svg>
            </div>
          </div>

          <div className="border-b border-stone-200/70 my-1" />

          {/* 2 Enlarged Drawings (BELOW - BIGGER FACES, NO 3RD DRAWING) */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-md mx-auto">
            {row.items.map((item, itemIdx) => {
              const key = `${row.id}_${itemIdx}`;
              const strokes = strokesMap[key] || [];

              return (
                <div
                  key={itemIdx}
                  className="flex items-center justify-center relative touch-none select-none p-1 sm:p-2 cursor-crosshair"
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
      ))}

      {/* Bottom Reset All Button: Resets strokes and smoothly scrolls back to first question */}
      <div className="flex justify-center pt-2 pb-4">
        <button
          type="button"
          onClick={handleResetAll}
          className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-700 border-b-[3.5px] border-b-emerald-900 shadow-xs active:translate-y-[2px] active:border-b-[1.5px] transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>மீண்டும் செய்</span>
        </button>
      </div>
    </div>
  );
};

export default DrawMissingPartsGame;
