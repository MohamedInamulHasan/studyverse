// src/components/TraceLettersGame.jsx
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

const LETTERS = [
  { id: 'l1',  char: 'அ', key: 'a',      fontSize: 260, y: 275 },
  { id: 'l2',  char: 'ஆ', key: 'aa',     fontSize: 235, y: 255 }, // Loop fits without clipping
  { id: 'l3',  char: 'இ', key: 'i',      fontSize: 260, y: 275 },
  { id: 'l4',  char: 'ஈ', key: 'ii',     fontSize: 250, y: 270 }, // 2 inner dots visible
  { id: 'l5',  char: 'உ', key: 'u',      fontSize: 260, y: 275 },
  { id: 'l6',  char: 'ஊ', key: 'uu',     fontSize: 230, y: 265 }, // Fits wide glyph + loop
  { id: 'l7',  char: 'எ', key: 'e',      fontSize: 260, y: 275 },
  { id: 'l8',  char: 'ஏ', key: 'ee',     fontSize: 260, y: 275 },
  { id: 'l9',  char: 'ஐ', key: 'ai',     fontSize: 245, y: 275 },
  { id: 'l10', char: 'ஒ', key: 'o',      fontSize: 260, y: 275 },
  { id: 'l11', char: 'ஓ', key: 'oo',     fontSize: 245, y: 260 },
  { id: 'l12', char: 'ஔ', key: 'au',     fontSize: 175, y: 265 }, // Fits wide composite glyph perfectly
  { id: 'l13', char: 'ஃ', key: 'aaydha', fontSize: 260, y: 275, isAyutha: true }
];

const SAMPLE_CACHE = {};

function getSampleLetterPoints(char, fontSize = 260, yOffset = 275) {
  if (typeof window === 'undefined') return [];
  const key = `sample_${char}_${fontSize}_${yOffset}`;
  if (SAMPLE_CACHE[key]) return SAMPLE_CACHE[key];

  if (char === 'ஃ') {
    const ayuthaPts = [
      { x: 200, y: 140 },
      { x: 145, y: 245 },
      { x: 255, y: 245 }
    ];
    SAMPLE_CACHE[key] = ayuthaPts;
    return ayuthaPts;
  }

  try {
    const size = 120;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return [];

    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    const scale = size / 400;
    ctx.font = `bold ${Math.round(fontSize * scale)}px "Noto Sans Tamil", "Latha", "Vijaya", sans-serif`;
    ctx.fillText(char, 200 * scale, yOffset * scale);

    const imgData = ctx.getImageData(0, 0, size, size);
    const data = imgData.data;
    const rawPoints = [];
    const minSpacing = 5.5;

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (data[(y * size + x) * 4 + 3] > 80) {
          const tooClose = rawPoints.some(p => Math.hypot(p.gx - x, p.gy - y) < minSpacing);
          if (!tooClose) {
            rawPoints.push({
              gx: x,
              gy: y,
              x: Math.round(x * (400 / size)),
              y: Math.round(y * (400 / size))
            });
          }
        }
      }
    }

    SAMPLE_CACHE[key] = rawPoints;
    return rawPoints;
  } catch (e) {
    return [];
  }
}

// Single Card Component for Isolated Rendering & High Performance
const TraceLetterCard = ({
  item,
  idx,
  isCompleted,
  onResetRow,
  canvasRef,
  onPointerDown,
  onPointerMove,
  onPointerUp
}) => {
  return (
    <div
      id={`trace-card-${idx}`}
      className="rounded-[32px] sm:rounded-[36px] bg-white border border-slate-200 border-b-[4px] border-b-slate-300 shadow-sm relative aspect-square w-full max-w-sm sm:max-w-md mx-auto flex flex-col items-center justify-between p-3.5 sm:p-4 overflow-hidden transition-all"
    >
      {/* Top Header Bar: Chunky Green Tick Mark when completed */}
      <div className="w-full flex items-center justify-end z-20 select-none px-1 min-h-[32px]">

        {isCompleted && (
          <div className="anim-pop-in pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-md">
              <path
                d="M 22 52 L 42 74 L 80 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 22 52 L 42 74 L 80 24"
                fill="none"
                stroke="#16a34a"
                strokeWidth="17"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      {/* 1:1 Tracing Surface */}
      <div className="relative w-full flex-1 max-h-[75%] aspect-square flex items-center justify-center select-none" style={{ touchAction: 'none' }}>
        {/* Double-dot Pattern Fill (Classic Dotted Letter Shape) */}
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
            {!item.isAyutha && (
              <clipPath id={`clip_${item.id}`}>
                <text
                  x="200"
                  y={item.y ?? 275}
                  textAnchor="middle"
                  fontSize={item.fontSize ?? 260}
                  fontWeight="bold"
                  fontFamily='"Noto Sans Tamil", "Latha", "Vijaya", sans-serif'
                >
                  {item.char}
                </text>
              </clipPath>
            )}
          </defs>

          {/* Letter 13 ஃ rendered as 3 distinct circle dots */}
          {item.isAyutha ? (
            <g>
              <circle cx="200" cy="140" r="16" fill={`url(#dp_${item.id})`} stroke="#1c1917" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="145" cy="245" r="16" fill={`url(#dp_${item.id})`} stroke="#1c1917" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="255" cy="245" r="16" fill={`url(#dp_${item.id})`} stroke="#1c1917" strokeWidth="1.5" strokeDasharray="3 3" />
            </g>
          ) : (
            <rect
              x="0"
              y="0"
              width="400"
              height="400"
              fill={`url(#dp_${item.id})`}
              clipPath={`url(#clip_${item.id})`}
            />
          )}
        </svg>

        {/* Unified Freehand Canvas (Works smoothly on both Mobile Touch & Laptop Mouse) */}
        <canvas
          ref={canvasRef}
          width={600}
          height={600}
          style={{ touchAction: 'none' }}
          className="absolute inset-0 w-full h-full cursor-crosshair z-10"
          onPointerDown={(e) => onPointerDown(item.id, e)}
          onPointerMove={(e) => onPointerMove(item.id, e)}
          onPointerUp={(e) => onPointerUp(item.id, e)}
          onPointerCancel={(e) => onPointerUp(item.id, e)}
        />
      </div>

      {/* Bottom Bar: Small Circular Retry Icon */}
      <div className="w-full flex items-center justify-end z-20 px-1">
        <button
          type="button"
          onClick={() => onResetRow(item.id)}
          className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 active:scale-90 transition-all cursor-pointer border border-slate-200 bg-slate-50/80 shadow-xs"
          title="மீண்டும் செய்"
        >
          <RotateCcw className="w-4 h-4 text-slate-600 stroke-[2.2]" />
        </button>
      </div>
    </div>
  );
};

export const TraceLettersGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [strokesByLetter, setStrokesByLetter] = useState({});
  const [completedLetters, setCompletedLetters] = useState({});
  const canvasRefs = useRef({});
  const isDrawing  = useRef(false);
  const activeLetterRef = useRef(null);

  // Accurate Canvas Coordinate Mapping (works for Mouse, Pen & Mobile Touch)
  const getCanvasCoords = (e, canvas) => {
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width)  * canvas.width;
    const y = ((e.clientY - rect.top)  / rect.height) * canvas.height;
    return { x, y };
  };

  // Smooth Canvas Redraw
  const redrawCanvas = useCallback((letterId, strokes) => {
    const canvas = canvasRefs.current[letterId];
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth   = 18;
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

  // Redraw when switching letters
  useEffect(() => {
    const curLetter = LETTERS[currentIndex];
    if (curLetter) {
      redrawCanvas(curLetter.id, strokesByLetter[curLetter.id] || []);
    }
  }, [currentIndex, strokesByLetter, redrawCanvas]);

  // Pointer Event Handlers
  const handlePointerDown = (letterId, e) => {
    if (e.cancelable) e.preventDefault();
    if (e.target && e.target.setPointerCapture) {
      try { e.target.setPointerCapture(e.pointerId); } catch {}
    }
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

  const handlePointerMove = (letterId, e) => {
    if (!isDrawing.current || activeLetterRef.current !== letterId) return;
    if (e.cancelable) e.preventDefault();
    const canvas = canvasRefs.current[letterId];
    if (!canvas) return;

    const pt = getCanvasCoords(e, canvas);
    setStrokesByLetter(prev => {
      const existing = prev[letterId] || [];
      if (existing.length === 0) return prev;
      const lastStroke = [...existing[existing.length - 1], pt];
      const updated    = [...existing.slice(0, -1), lastStroke];
      redrawCanvas(letterId, updated);
      return { ...prev, [letterId]: updated };
    });
  };

  const handlePointerUp = (letterId, e) => {
    if (e && e.target && e.target.releasePointerCapture) {
      try { e.target.releasePointerCapture(e.pointerId); } catch {}
    }
    isDrawing.current = false;
    activeLetterRef.current = null;

    // Check completion when user lifts finger/mouse
    const letterObj = LETTERS.find(l => l.id === letterId);
    if (!letterObj) return;

    const samplePts = getSampleLetterPoints(letterObj.char, letterObj.fontSize, letterObj.y);
    const strokes = strokesByLetter[letterId] || [];
    const flatPoints = strokes.flat();

    if (samplePts.length > 0 && flatPoints.length > 0 && !completedLetters[letterId]) {
      const tolSq = 26 * 26; // Tolerance radius in 400x400 space
      let coveredCount = 0;

      for (let i = 0; i < samplePts.length; i++) {
        const d = samplePts[i];
        const isHit = flatPoints.some(pt => {
          const sx = pt.x * (400 / 600);
          const sy = pt.y * (400 / 600);
          const dx = d.x - sx;
          const dy = d.y - sy;
          return dx * dx + dy * dy <= tolSq;
        });
        if (isHit) coveredCount++;
      }

      const coverageRatio = coveredCount / samplePts.length;
      if (coverageRatio >= 0.90) { // Coverage threshold
        setCompletedLetters(prev => ({ ...prev, [letterId]: true }));

        // Automatically advance to the next card after completion
        if (currentIndex < LETTERS.length - 1) {
          setTimeout(() => {
            setCurrentIndex(c => c + 1);
          }, 650);
        }
      }
    }
  };

  // Single card reset handler
  const handleResetRow = (letterId) => {
    setStrokesByLetter(prev => ({ ...prev, [letterId]: [] }));
    setCompletedLetters(prev => ({ ...prev, [letterId]: false }));
    const canvas = canvasRefs.current[letterId];
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  // Reset all cards and redirect to first question
  const handleResetAll = () => {
    setStrokesByLetter({});
    setCompletedLetters({});
    Object.keys(canvasRefs.current).forEach(id => {
      const canvas = canvasRefs.current[id];
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    });
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(c => c - 1);
  };

  const handleNext = () => {
    if (currentIndex < LETTERS.length - 1) setCurrentIndex(c => c + 1);
  };

  const currentItem = LETTERS[currentIndex];

  return (
    <div className="space-y-4 pb-12 select-none w-full max-w-sm sm:max-w-md mx-auto px-2">
      {/* ── 1 Square Letter Card at a Time (Fits mobile screen fully!) ── */}
      <TraceLetterCard
        key={currentItem.id}
        item={currentItem}
        idx={currentIndex}
        isCompleted={!!completedLetters[currentItem.id]}
        onResetRow={handleResetRow}
        canvasRef={el => (canvasRefs.current[currentItem.id] = el)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      />

      {/* ── Prev / Next Horizontal Navigation Buttons ── */}
      <div className="flex items-center justify-between gap-3 pt-2 px-1">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`flex items-center gap-1 px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all border shadow-xs ${
            currentIndex === 0
              ? 'opacity-40 bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
              : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 border-b-[3px] border-b-slate-400 active:translate-y-[2px] active:border-b cursor-pointer'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>முந்தையது</span>
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={currentIndex === LETTERS.length - 1}
          className={`flex items-center gap-1 px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all border shadow-xs ${
            currentIndex === LETTERS.length - 1
              ? 'opacity-40 bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
              : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 border-b-[3px] border-b-slate-400 active:translate-y-[2px] active:border-b cursor-pointer'
          }`}
        >
          <span>அடுத்தது</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TraceLettersGame;
