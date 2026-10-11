// src/components/TraceLettersGame.jsx
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { RotateCcw } from 'lucide-react';

const BASE_IMG = 'https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/topic14/';

const LETTERS = [
  { id: 'l1',  char: 'அ', key: 'a',       file: 'a.png' },
  { id: 'l2',  char: 'ஆ', key: 'aa',      file: 'aa.png' },
  { id: 'l3',  char: 'இ', key: 'i',       file: 'i.png' },
  { id: 'l4',  char: 'ஈ', key: 'ii',      file: 'ii.png' },
  { id: 'l5',  char: 'உ', key: 'u',       file: 'u.png' },
  { id: 'l6',  char: 'ஊ', key: 'uu',      file: 'uu.png' },
  { id: 'l7',  char: 'எ', key: 'e',       file: 'e.png' },
  { id: 'l8',  char: 'ஏ', key: 'ee',      file: 'ee.png' },
  { id: 'l9',  char: 'ஐ', key: 'ai',      file: 'ai.png' },
  { id: 'l10', char: 'ஒ', key: 'o',       file: 'o.png' },
  { id: 'l11', char: 'ஓ', key: 'oo',      file: 'oo.png' },
  { id: 'l12', char: 'ஔ', key: 'au',      file: 'au.png', fontSize: 170 },
  { id: 'l13', char: 'ஃ', key: 'aaydha',  file: 'aaydha.png' }
];

export const TraceLettersGame = () => {
  const [strokesByLetter, setStrokesByLetter] = useState({});
  const [imgFailed, setImgFailed] = useState({});
  const canvasRefs = useRef({});
  const isDrawing  = useRef(false);
  const activeLetterRef = useRef(null);

  // ── Reconstructed Accurate Canvas Coordinate Mapping ─────────────────────
  const getCanvasCoords = (e, canvas) => {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const x = ((clientX - rect.left) / rect.width)  * canvas.width;
    const y = ((clientY - rect.top)  / rect.height) * canvas.height;
    return { x, y };
  };

  // ── Uniform Smooth Redraw Logic ──────────────────────────────────────────
  const redrawCanvas = useCallback((letterId, strokes) => {
    const canvas = canvasRefs.current[letterId];
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#000000';
    ctx.lineWidth   = 16;
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';
    ctx.globalCompositeOperation = 'source-over';

    strokes.forEach(stroke => {
      if (!stroke || stroke.length === 0) return;
      ctx.beginPath();
      stroke.forEach((pt, i) => {
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else         ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();
    });
  }, []);

  const startDrawing = (letterId, e) => {
    e.preventDefault();
    isDrawing.current = true;
    activeLetterRef.current = letterId;
    const canvas = canvasRefs.current[letterId];
    if (!canvas) return;

    const pt = getCanvasCoords(e, canvas);
    setStrokesByLetter(prev => {
      const existing = prev[letterId] || [];
      const updated  = [...existing, [pt]];
      redrawCanvas(letterId, updated);
      return { ...prev, [letterId]: updated };
    });
  };

  const draw = (letterId, e) => {
    if (!isDrawing.current || activeLetterRef.current !== letterId) return;
    e.preventDefault();
    const canvas = canvasRefs.current[letterId];
    if (!canvas) return;

    const pt = getCanvasCoords(e, canvas);
    setStrokesByLetter(prev => {
      const existing = prev[letterId] || [];
      if (existing.length === 0) return prev;
      const lastIdx = existing.length - 1;
      const updatedLast = [...existing[lastIdx], pt];
      const updated = [...existing];
      updated[lastIdx] = updatedLast;
      redrawCanvas(letterId, updated);
      return { ...prev, [letterId]: updated };
    });
  };

  const stopDrawing = () => {
    isDrawing.current = false;
    activeLetterRef.current = null;
  };

  // Single card reset handler
  const handleResetRow = (letterId) => {
    setStrokesByLetter(prev => ({ ...prev, [letterId]: [] }));
    const canvas = canvasRefs.current[letterId];
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  // Reset all cards
  const handleResetAll = () => {
    setStrokesByLetter({});
    Object.keys(canvasRefs.current).forEach(id => {
      const canvas = canvasRefs.current[id];
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    });
  };

  return (
    <div className="space-y-6 pb-12 select-none w-full max-w-md sm:max-w-lg mx-auto px-2 sm:px-4">
      {/* ── 13 1:1 Aspect Ratio Square Letter Cards (1 card per row) ── */}
      <div className="space-y-6">
        {LETTERS.map((item, idx) => {
          const isFailed = imgFailed[item.id];

          return (
            <div
              key={item.id}
              className="rounded-[32px] sm:rounded-[40px] bg-white border-2 border-stone-200 border-b-[5px] border-b-stone-300 p-4 sm:p-6 shadow-sm relative aspect-square w-full flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Top-Left: Plain black number "1." */}
              <div className="absolute top-4 left-5 text-black font-black text-lg sm:text-xl z-20 select-none">
                {idx + 1}.
              </div>

              {/* Top-Right: Card Retry Icon */}
              <button
                type="button"
                onClick={() => handleResetRow(item.id)}
                className="absolute top-4 right-5 z-20 p-2 sm:p-2.5 rounded-full hover:bg-stone-100 text-stone-800 active:scale-90 transition-all cursor-pointer"
                title="மீண்டும் செய்"
              >
                <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6 text-black stroke-[2.2]" />
              </button>

              {/* 1:1 Tracing Surface */}
              <div className="relative w-full h-full flex items-center justify-center touch-none p-2 mt-4">

                {/* 1. Dotted Letter Image (if uploaded) */}
                {!isFailed && (
                  <img
                    src={`${BASE_IMG}${item.file}`}
                    alt={`Dotted ${item.char}`}
                    className="max-h-full max-w-full object-contain pointer-events-none select-none filter-none"
                    onError={() => setImgFailed(prev => ({ ...prev, [item.id]: true }))}
                  />
                )}

                {/* 2. Dotted Letter using clipPath + dot fill pattern */}
                {isFailed && (
                  <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full max-h-full pointer-events-none select-none z-0"
                  >
                    <defs>
                      <pattern
                        id={`dp_${item.id}`}
                        width="11"
                        height="11"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="5.5" cy="5.5" r="2.8" fill="#1c1917" />
                      </pattern>
                      <clipPath id={`clip_${item.id}`}>
                        <text
                          x="200"
                          y={item.fontSize ? 200 + (item.fontSize * 0.3) : 275}
                          textAnchor="middle"
                          fontSize={item.fontSize ?? 260}
                          fontWeight="400"
                          fontFamily='"Noto Sans Tamil", sans-serif'
                        >
                          {item.char}
                        </text>
                      </clipPath>
                    </defs>
                    {/* Dot-filled rect clipped to letter shape */}
                    <rect
                      x="0" y="0" width="400" height="400"
                      fill={`url(#dp_${item.id})`}
                      clipPath={`url(#clip_${item.id})`}
                    />
                  </svg>
                )}

                {/* 3. Reconstructed 1:1 Freehand Drawing Canvas */}
                <canvas
                  ref={el => (canvasRefs.current[item.id] = el)}
                  width={600}
                  height={600}
                  className="absolute inset-0 w-full h-full touch-none cursor-crosshair z-10"
                  onMouseDown={(e) => startDrawing(item.id, e)}
                  onMouseMove={(e) => draw(item.id, e)}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={(e) => startDrawing(item.id, e.touches[0])}
                  onTouchMove={(e) => draw(item.id, e.touches[0])}
                  onTouchEnd={stopDrawing}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Bottom Reset / Retry Button (Resets All) ── */}
      <div className="flex justify-center pt-3 pb-4">
        <button
          type="button"
          onClick={handleResetAll}
          className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-lime-600 hover:bg-lime-700 text-white border border-lime-700 border-b-[3.5px] border-b-lime-900 shadow-xs active:translate-y-[2px] active:border-b-[1.5px] transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>மீண்டும் செய்</span>
        </button>
      </div>
    </div>
  );
};

export default TraceLettersGame;
