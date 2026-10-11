// src/components/LineTracingGame.jsx
import React, { useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';

const BASE_TRACE = 'https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/';

// ViewBox 320 x 95
// Each row has an `end` point — tick only shown after user covers that point too
const TRACE_ROWS = [
  {
    id: 'row1',
    name: 'மண்புழு',
    bugImg: `${BASE_TRACE}trace_worm.png`,
    fallbackEmoji: '🐛',
    start: { x: 30, y: 48 },
    end: { x: 295, y: 48 },
    pathD: 'M 30,48 Q 75,10 120,48 Q 165,86 210,48 Q 255,10 295,48'
  },
  {
    id: 'row2',
    name: 'வண்ணத்துப்பூச்சி',
    bugImg: `${BASE_TRACE}trace_butterfly1.png`,
    fallbackEmoji: '🦋',
    start: { x: 30, y: 76 },
    end: { x: 295, y: 76 },
    pathD: 'M 30,76 Q 75,12 120,76 Q 165,12 210,76 Q 255,12 295,76'
  },
  {
    id: 'row3',
    name: 'வண்ணத்துப்பூச்சி',
    bugImg: `${BASE_TRACE}trace_butterfly2.png`,
    fallbackEmoji: '🦋',
    start: { x: 30, y: 18 },
    end: { x: 295, y: 18 },
    pathD: 'M 30,18 Q 75,82 120,18 Q 165,82 210,18 Q 255,82 295,18'
  },
  {
    id: 'row4',
    name: 'தேனீ',
    bugImg: `${BASE_TRACE}trace_bee.png`,
    fallbackEmoji: '🐝',
    start: { x: 30, y: 48 },
    end: { x: 295, y: 48 },
    pathD: 'M 30,48 C 80,6 120,6 120,48 C 120,90 80,90 80,48 C 80,6 195,6 195,48 C 195,90 155,90 155,48 C 155,6 270,6 270,48 C 270,90 230,90 230,48 C 230,6 295,6 295,48'
  },
  {
    id: 'row5',
    name: 'செவ்வண்டு',
    bugImg: `${BASE_TRACE}trace_ladybug.png`,
    fallbackEmoji: '🐞',
    start: { x: 30, y: 78 },
    end: { x: 295, y: 78 },
    pathD: 'M 30,78 L 30,16 L 75,16 L 75,78 L 120,78 L 120,16 L 165,16 L 165,78 L 210,78 L 210,16 L 255,16 L 255,78 L 295,78'
  },
  {
    id: 'row6',
    name: 'நத்தை',
    bugImg: `${BASE_TRACE}trace_snail.png`,
    fallbackEmoji: '🐌',
    type: 'spirals',
    spirals: [
      { cx: 70, cy: 48 },
      { cx: 160, cy: 48 },
      { cx: 250, cy: 48 }
    ],
    // End point near last spiral outer edge
    end: { x: 250, y: 88 }
  },
  {
    id: 'row7',
    name: 'சுருள் புழு',
    bugImg: `${BASE_TRACE}trace_circle_bug.png`,
    fallbackEmoji: '🐛',
    type: 'circles',
    circles: [
      { cx: 70, cy: 48, r: 35 },
      { cx: 160, cy: 48, r: 35 },
      { cx: 250, cy: 48, r: 35 }
    ],
    // End point near last circle top (where arrow is)
    end: { x: 250, y: 13 }
  }
];

// Custom cursor styles
const PENCIL_CURSOR = 'crosshair';

const ERASER_CURSOR = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36'><circle cx='18' cy='18' r='15' fill='white' stroke='%23aaaaaa' stroke-width='2'/></svg>") 18 18, auto`;

export const LineTracingGame = () => {
  const [activeTool, setActiveTool] = useState('pencil'); // 'pencil' | 'eraser'
  const [activeRow, setActiveRow] = useState(null);
  const [strokesByRow, setStrokesByRow] = useState({});
  const [completedRows, setCompletedRows] = useState({});
  const canvasRefs = useRef({});
  const pathElementsRef = useRef({});
  const samplePointsRef = useRef({});
  const isDrawing = useRef(false);

  // Pre-sample points along each guide path for coverage calculation
  const getSamplePointsForRow = (rowId) => {
    if (samplePointsRef.current[rowId]) return samplePointsRef.current[rowId];
    const pathElem = pathElementsRef.current[rowId];
    if (!pathElem) return [];
    try {
      const len = pathElem.getTotalLength();
      if (!len) return [];
      const pts = [];
      const step = 6;
      for (let d = 0; d <= len; d += step) {
        const pt = pathElem.getPointAtLength(d);
        pts.push({ x: pt.x, y: pt.y });
      }
      samplePointsRef.current[rowId] = pts;
      return pts;
    } catch (e) {
      return [];
    }
  };

  // Check if 90% of guide points are covered AND the end dot is reached
  const checkCompletion = (row, allStrokes) => {
    const guidePts = getSamplePointsForRow(row.id);
    const flatStrokes = allStrokes.flat();
    if (flatStrokes.length === 0) return false;

    const toleranceSq = 14 * 14;

    // Coverage check
    let covered = true;
    if (guidePts && guidePts.length > 0) {
      let coveredCount = 0;
      for (let i = 0; i < guidePts.length; i++) {
        const g = guidePts[i];
        let isHit = false;
        for (let j = 0; j < flatStrokes.length; j++) {
          const p = flatStrokes[j];
          const dx = g.x - p[0];
          const dy = g.y - p[1];
          if (dx * dx + dy * dy <= toleranceSq) { isHit = true; break; }
        }
        if (isHit) coveredCount++;
      }
      covered = (coveredCount / guidePts.length) >= 0.90;
    } else {
      covered = flatStrokes.length >= 40;
    }

    if (!covered) return false;

    // End dot check: user must have drawn near the end point
    if (row.end) {
      const endTolSq = 18 * 18;
      const endReached = flatStrokes.some(p => {
        const dx = p[0] - row.end.x;
        const dy = p[1] - row.end.y;
        return dx * dx + dy * dy <= endTolSq;
      });
      if (!endReached) return false;
    }

    return true;
  };

  const getCoordinates = (e, svgElem) => {
    const rect = svgElem.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const x = ((clientX - rect.left) / rect.width) * 320;
    const y = ((clientY - rect.top) / rect.height) * 95;
    return { x, y };
  };

  const eraseNear = (rowId, x, y, row) => {
    setStrokesByRow(prev => {
      const existing = prev[rowId] || [];
      if (existing.length === 0) return prev;

      const eraserRadiusSq = 16 * 16;
      const updated = existing
        .map(stroke => stroke.filter(pt => {
          const dx = pt[0] - x;
          const dy = pt[1] - y;
          return (dx * dx + dy * dy) > eraserRadiusSq;
        }))
        .filter(stroke => stroke.length > 0);

      if (completedRows[rowId] && !checkCompletion(row, updated)) {
        setCompletedRows(c => ({ ...c, [rowId]: false }));
      }

      return { ...prev, [rowId]: updated };
    });
  };

  const handlePointerDown = (row, e) => {
    e.preventDefault();
    isDrawing.current = true;
    setActiveRow(row.id);
    const svg = canvasRefs.current[row.id];
    if (!svg) return;
    const { x, y } = getCoordinates(e, svg);

    if (activeTool === 'eraser') {
      eraseNear(row.id, x, y, row);
    } else {
      setStrokesByRow(prev => {
        const existing = prev[row.id] || [];
        return { ...prev, [row.id]: [...existing, [[x, y]]] };
      });
    }
  };

  const handlePointerMove = (row, e) => {
    if (!isDrawing.current || activeRow !== row.id) return;
    e.preventDefault();
    const svg = canvasRefs.current[row.id];
    if (!svg) return;
    const { x, y } = getCoordinates(e, svg);

    if (activeTool === 'eraser') {
      eraseNear(row.id, x, y, row);
    } else {
      setStrokesByRow(prev => {
        const existing = prev[row.id] || [];
        if (existing.length === 0) return prev;

        const lastIdx = existing.length - 1;
        const updatedStroke = [...existing[lastIdx], [x, y]];
        const updatedStrokes = [...existing];
        updatedStrokes[lastIdx] = updatedStroke;

        if (!completedRows[row.id] && checkCompletion(row, updatedStrokes)) {
          setCompletedRows(c => ({ ...c, [row.id]: true }));
        }
        return { ...prev, [row.id]: updatedStrokes };
      });
    }
  };

  const handlePointerUp = () => { isDrawing.current = false; };

  const handleRetry = () => {
    setStrokesByRow({});
    setCompletedRows({});
    setActiveTool('pencil');
  };

  return (
    <div className="relative select-none pb-12 w-full max-w-md mx-auto px-2">



      {/* 7 Tracing Rows */}
      <div className="space-y-4 sm:space-y-6 pt-2">
        {TRACE_ROWS.map((row) => {
          const isCompleted = completedRows[row.id];
          const strokes = strokesByRow[row.id] || [];

          return (
            <div
              key={row.id}
              className="relative flex items-center justify-between w-full py-1 select-none"
            >
              {/* Interactive SVG Tracing Surface */}
              <div className="flex-1 relative touch-none pr-3">
                <svg
                  ref={el => (canvasRefs.current[row.id] = el)}
                  viewBox="0 0 320 95"
                  className="w-full h-24 sm:h-28 touch-none"
                  style={{ cursor: activeTool === 'eraser' ? ERASER_CURSOR : PENCIL_CURSOR }}
                  onMouseDown={(e) => handlePointerDown(row, e)}
                  onMouseMove={(e) => handlePointerMove(row, e)}
                  onMouseUp={handlePointerUp}
                  onMouseLeave={handlePointerUp}
                  onTouchStart={(e) => handlePointerDown(row, e)}
                  onTouchMove={(e) => handlePointerMove(row, e)}
                  onTouchEnd={handlePointerUp}
                >
                  {/* Thin dotted grey guide lines */}
                  {row.pathD && (
                    <path
                      ref={el => (pathElementsRef.current[row.id] = el)}
                      d={row.pathD}
                      fill="none"
                      stroke="#78716c"
                      strokeWidth="2.5"
                      strokeDasharray="3 3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}

                  {/* 3 BIG Spirals */}
                  {row.spirals && row.spirals.map((sp, idx) => (
                    <g key={idx}>
                      <path
                        ref={el => { if (idx === 0) pathElementsRef.current[row.id] = el; }}
                        d={`M ${sp.cx},${sp.cy} 
                           m 0, -6 
                           a 6,6 0 0,1 6,6 
                           a 12,12 0 0,1 -12,12 
                           a 18,18 0 0,1 -18,-18 
                           a 25,25 0 0,1 25,-25 
                           a 33,33 0 0,1 33,33 
                           a 40,40 0 0,1 -40,40`}
                        fill="none"
                        stroke="#78716c"
                        strokeWidth="2.5"
                        strokeDasharray="3 3"
                        strokeLinecap="round"
                      />
                      {/* Red start arrow at spiral center */}
                      <polygon
                        points={`${sp.cx - 6},${sp.cy - 5} ${sp.cx + 5},${sp.cy} ${sp.cx - 6},${sp.cy + 5}`}
                        fill="#dc2626"
                      />
                    </g>
                  ))}

                  {/* 3 BIG Circles */}
                  {row.circles && row.circles.map((c, idx) => (
                    <g key={idx}>
                      <circle
                        ref={el => { if (idx === 0) pathElementsRef.current[row.id] = el; }}
                        cx={c.cx}
                        cy={c.cy}
                        r={c.r}
                        fill="none"
                        stroke="#78716c"
                        strokeWidth="2.5"
                        strokeDasharray="3.5 3.5"
                      />
                      {/* Red start arrow at top of circle */}
                      <polygon
                        points={`${c.cx - 6},${c.cy - c.r - 5} ${c.cx + 5},${c.cy - c.r} ${c.cx - 6},${c.cy - c.r + 5}`}
                        fill="#dc2626"
                      />
                    </g>
                  ))}

                  {/* Red start indicator arrow pointing right into start point */}
                  {row.start && (
                    <polygon
                      points={`${row.start.x - 14},${row.start.y - 6} ${row.start.x},${row.start.y} ${row.start.x - 14},${row.start.y + 6}`}
                      fill="#dc2626"
                    />
                  )}



                  {/* User's hand-drawn strokes: persistent, black, bold */}
                  {strokes.map((pts, sIdx) => {
                    const polylinePoints = pts.map(p => `${p[0]},${p[1]}`).join(' ');
                    return (
                      <polyline
                        key={sIdx}
                        points={polylinePoints}
                        fill="none"
                        stroke="#000000"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.95"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Bug image on the right edge */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center select-none relative">
                <img
                  src={row.bugImg}
                  alt={row.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                  }}
                  className="w-full h-full object-contain pointer-events-none drop-shadow-xs"
                />
                <span className="text-2xl hidden pointer-events-none">
                  {row.fallbackEmoji}
                </span>

                {/* Chunky green tick — only shown after 90% + end dot coverage */}
                {isCompleted && (
                  <div className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 z-20 anim-pop-in pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-md">
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
            </div>
          );
        })}
      </div>

      {/* Bottom Retry Button */}
      <div className="flex justify-center pt-6 pb-4">
        <button
          type="button"
          onClick={handleRetry}
          className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-700 border-b-[3.5px] border-b-emerald-900 shadow-xs active:translate-y-[2px] active:border-b-[1.5px] transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>மீண்டும் செய்</span>
        </button>
      </div>
    </div>
  );
};
