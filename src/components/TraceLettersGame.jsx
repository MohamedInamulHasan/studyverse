// src/components/TraceLettersGame.jsx
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { RotateCcw } from 'lucide-react';

const LETTERS = [
  { id: 'l1',  char: 'அ', key: 'a',      fontSize: 320 },
  { id: 'l2',  char: 'ஆ', key: 'aa',     fontSize: 320 },
  { id: 'l3',  char: 'இ', key: 'i',      fontSize: 320 },
  { id: 'l4',  char: 'ஈ', key: 'ii',     fontSize: 320 },
  { id: 'l5',  char: 'உ', key: 'u',      fontSize: 320 },
  { id: 'l6',  char: 'ஊ', key: 'uu',     fontSize: 320 },
  { id: 'l7',  char: 'எ', key: 'e',      fontSize: 320 },
  { id: 'l8',  char: 'ஏ', key: 'ee',     fontSize: 320 },
  { id: 'l9',  char: 'ஐ', key: 'ai',     fontSize: 320 },
  { id: 'l10', char: 'ஒ', key: 'o',      fontSize: 320 },
  { id: 'l11', char: 'ஓ', key: 'oo',     fontSize: 320 },
  { id: 'l12', char: 'ஔ', key: 'au',     fontSize: 220 },
  { id: 'l13', char: 'ஃ', key: 'aaydha', fontSize: 320 }
];

// In-memory cache for generated single dots
const DOTS_CACHE = {};

// Zhang-Suen Thinning Algorithm: reduces thick font stroke to a 1-pixel centerline skeleton
function zhangSuenThinning(grid, width, height) {
  let changed = true;
  const p = (x, y) => (x >= 0 && x < width && y >= 0 && y < height) ? grid[y * width + x] : 0;

  while (changed) {
    changed = false;
    let toRemove = [];

    // Step 1
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        if (!grid[y * width + x]) continue;
        const p2 = p(x, y - 1);
        const p3 = p(x + 1, y - 1);
        const p4 = p(x + 1, y);
        const p5 = p(x + 1, y + 1);
        const p6 = p(x, y + 1);
        const p7 = p(x - 1, y + 1);
        const p8 = p(x - 1, y);
        const p9 = p(x - 1, y - 1);

        const neighbors = [p2, p3, p4, p5, p6, p7, p8, p9];
        const B = neighbors.reduce((a, b) => a + b, 0);
        if (B < 2 || B > 6) continue;

        let A = 0;
        for (let i = 0; i < 8; i++) {
          if (neighbors[i] === 0 && neighbors[(i + 1) % 8] === 1) A++;
        }
        if (A !== 1) continue;

        if (p2 * p4 * p6 !== 0) continue;
        if (p4 * p6 * p8 !== 0) continue;

        toRemove.push(y * width + x);
      }
    }
    if (toRemove.length > 0) {
      changed = true;
      for (let i = 0; i < toRemove.length; i++) grid[toRemove[i]] = 0;
    }

    toRemove = [];
    // Step 2
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        if (!grid[y * width + x]) continue;
        const p2 = p(x, y - 1);
        const p3 = p(x + 1, y - 1);
        const p4 = p(x + 1, y);
        const p5 = p(x + 1, y + 1);
        const p6 = p(x, y + 1);
        const p7 = p(x - 1, y + 1);
        const p8 = p(x - 1, y);
        const p9 = p(x - 1, y - 1);

        const neighbors = [p2, p3, p4, p5, p6, p7, p8, p9];
        const B = neighbors.reduce((a, b) => a + b, 0);
        if (B < 2 || B > 6) continue;

        let A = 0;
        for (let i = 0; i < 8; i++) {
          if (neighbors[i] === 0 && neighbors[(i + 1) % 8] === 1) A++;
        }
        if (A !== 1) continue;

        if (p2 * p4 * p8 !== 0) continue;
        if (p2 * p6 * p8 !== 0) continue;

        toRemove.push(y * width + x);
      }
    }
    if (toRemove.length > 0) {
      changed = true;
      for (let i = 0; i < toRemove.length; i++) grid[toRemove[i]] = 0;
    }
  }
}

// Extracts single dots strictly along the centerline of the Tamil glyph
function getLetterSkeletonDots(char, fontSize = 320) {
  if (typeof window === 'undefined') return [];
  const key = `${char}_${fontSize}`;
  if (DOTS_CACHE[key]) return DOTS_CACHE[key];

  // Special case: Ayutha Ezhuthu ஃ (3 prominent single dots in a triangle)
  if (char === 'ஃ') {
    const ayuthaDots = [
      { x: 200, y: 135, r: 14 },
      { x: 150, y: 245, r: 14 },
      { x: 250, y: 245, r: 14 }
    ];
    DOTS_CACHE[key] = ayuthaDots;
    return ayuthaDots;
  }

  try {
    const size = 180;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return [];

    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const scale = size / 400;
    ctx.font = `bold ${Math.round(fontSize * scale)}px "Noto Sans Tamil", "Latha", "Vijaya", sans-serif`;
    ctx.fillText(char, size / 2, size / 2 + (char === 'ஔ' ? 0 : 6));

    const imgData = ctx.getImageData(0, 0, size, size);
    const data = imgData.data;
    const grid = new Uint8Array(size * size);
    for (let i = 0; i < grid.length; i++) {
      if (data[i * 4 + 3] > 80) {
        grid[i] = 1;
      }
    }

    zhangSuenThinning(grid, size, size);

    // Extract nicely-spaced single dots along the skeleton
    const points = [];
    const minSpacing = 7; // spacing in grid, corresponds to ~15.5px in 400x400 space
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (grid[y * size + x] === 1) {
          const tooClose = points.some(p => Math.hypot(p.gridX - x, p.gridY - y) < minSpacing);
          if (!tooClose) {
            points.push({
              gridX: x,
              gridY: y,
              x: Math.round(x * (400 / size)),
              y: Math.round(y * (400 / size)),
              r: 5
            });
          }
        }
      }
    }

    DOTS_CACHE[key] = points;
    return points;
  } catch (e) {
    console.error('Error generating letter dots:', e);
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
  onPointerUp,
  onDotsLoaded
}) => {
  const [dots, setDots] = useState(() => getLetterSkeletonDots(item.char, item.fontSize ?? 320));

  useEffect(() => {
    if (dots.length === 0) {
      if (document.fonts) {
        document.fonts.ready.then(() => {
          const res = getLetterSkeletonDots(item.char, item.fontSize ?? 320);
          setDots(res);
          if (onDotsLoaded) onDotsLoaded(item.id, res);
        });
      } else {
        const timer = setTimeout(() => {
          const res = getLetterSkeletonDots(item.char, item.fontSize ?? 320);
          setDots(res);
          if (onDotsLoaded) onDotsLoaded(item.id, res);
        }, 120);
        return () => clearTimeout(timer);
      }
    } else {
      if (onDotsLoaded) onDotsLoaded(item.id, dots);
    }
  }, [item.char, item.fontSize, dots.length]);

  return (
    <div
      id={`trace-card-${idx}`}
      className="rounded-[32px] sm:rounded-[36px] bg-white border-2 border-stone-200 border-b-[5px] border-b-stone-300 shadow-sm relative aspect-square w-full flex flex-col items-center justify-center overflow-hidden transition-all"
    >
      {/* Top-Left: Plain black number "1." */}
      <div className="absolute top-4 left-5 text-slate-900 font-black text-lg sm:text-xl z-20 select-none">
        {idx + 1}.
      </div>

      {/* Top-Right: Tick Mark when complete >= 98% */}
      {isCompleted && (
        <div className="absolute top-4 right-5 z-20 transition-all transform scale-100 animate-in zoom-in-75 duration-200 pointer-events-none">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-500 flex items-center justify-center shadow-md border-2 border-white">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white stroke-[3.5] stroke-current fill-none">
              <path d="M 5 12 L 10 17 L 19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      )}

      {/* 1:1 Tracing Surface */}
      <div className="relative w-full h-full flex items-center justify-center p-2 mt-2 select-none touch-none">
        {/* Dotted Letter Background (ONLY Single Centerline Dots - No Outline Dots) */}
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full max-h-full pointer-events-none select-none z-0"
        >
          {/* Crisp, prominent SINGLE CENTERLINE DOTS */}
          {dots.map((pt, i) => (
            <circle
              key={i}
              cx={pt.x}
              cy={pt.y}
              r={pt.r || 5}
              fill="#1e293b"
            />
          ))}
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

      {/* Bottom-Right: Small Card Retry Icon */}
      <button
        type="button"
        onClick={() => onResetRow(item.id)}
        className="absolute bottom-3.5 right-4 z-20 px-2 py-1 rounded-lg hover:bg-stone-100 text-stone-500 hover:text-stone-800 active:scale-90 transition-all cursor-pointer flex items-center gap-1 border border-stone-200/60 bg-stone-50/80"
        title="மீண்டும் செய்"
      >
        <RotateCcw className="w-3.5 h-3.5 text-stone-600" />
        <span className="text-[11px] font-bold text-stone-600">மீண்டும்</span>
      </button>
    </div>
  );
};

export const TraceLettersGame = () => {
  const [strokesByLetter, setStrokesByLetter] = useState({});
  const [completedLetters, setCompletedLetters] = useState({});
  const dotsByLetterRef = useRef({});
  const canvasRefs = useRef({});
  const isDrawing  = useRef(false);
  const activeLetterRef = useRef(null);

  const handleDotsLoaded = (letterId, dots) => {
    dotsByLetterRef.current[letterId] = dots;
  };

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

  // Pointer Event Handlers (Fixed for Mobile Screens and Laptops)
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
      const lastIdx = existing.length - 1;
      const updatedLast = [...existing[lastIdx], pt];
      const updated = [...existing];
      updated[lastIdx] = updatedLast;
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
    const dots = dotsByLetterRef.current[letterId] || [];
    const strokes = strokesByLetter[letterId] || [];
    const flatPoints = strokes.flat();

    if (dots.length > 0 && flatPoints.length > 0 && !completedLetters[letterId]) {
      const tolSq = 26 * 26; // Tolerance radius in 400x400 space
      let coveredCount = 0;

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const isHit = flatPoints.some(pt => {
          // Canvas is 600x600, SVG space is 400x400
          const sx = pt.x * (400 / 600);
          const sy = pt.y * (400 / 600);
          const dx = d.x - sx;
          const dy = d.y - sy;
          return dx * dx + dy * dy <= tolSq;
        });
        if (isHit) coveredCount++;
      }

      const coverageRatio = coveredCount / dots.length;
      if (coverageRatio >= 0.95) { // 95% - 98% dot coverage threshold
        setCompletedLetters(prev => ({ ...prev, [letterId]: true }));

        // Automatically advance / smooth scroll to the next card
        const currentIdx = LETTERS.findIndex(l => l.id === letterId);
        if (currentIdx !== -1 && currentIdx < LETTERS.length - 1) {
          setTimeout(() => {
            const nextElem = document.getElementById(`trace-card-${currentIdx + 1}`);
            if (nextElem) {
              nextElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 500);
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

    // Redirect / smooth scroll to first question
    setTimeout(() => {
      const firstCard = document.getElementById('trace-card-0');
      if (firstCard) {
        firstCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <div className="space-y-6 pb-12 select-none w-full max-w-md sm:max-w-lg mx-auto px-2 sm:px-4">
      {/* ── 13 1:1 Aspect Ratio Square Letter Cards (1 card per row) ── */}
      <div className="space-y-6">
        {LETTERS.map((item, idx) => (
          <TraceLetterCard
            key={item.id}
            item={item}
            idx={idx}
            isCompleted={!!completedLetters[item.id]}
            onResetRow={handleResetRow}
            canvasRef={el => (canvasRefs.current[item.id] = el)}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onDotsLoaded={handleDotsLoaded}
          />
        ))}
      </div>

      {/* ── Bottom Reset / Retry Button (Resets All & Redirects to Question 1) ── */}
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
