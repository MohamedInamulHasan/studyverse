// src/components/ConnectLetterToPictureGame.jsx
import React, { useState, useRef, useCallback } from 'react';
import { RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

const BASE = 'https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/topic12/';
const VERSION = '?v=' + Date.now();

// ── Layout constants
const CX = 170;          // center x
const CY = 170;          // center y
const CENTER_R = 36;     // center letter circle radius
const IMG_R = 35;        // image circle radius
const IMG_SIZE = 70;     // display size for images
const NODE_RADIUS = 125; // expanded distance from center to image centers for longer lines

// ── Helper: line from center circle edge → image circle edge
const linePoints = (item) => {
  const dx = item.cx - CX;
  const dy = item.cy - CY;
  const d = Math.sqrt(dx * dx + dy * dy);
  if (d === 0) return { x1: CX, y1: CY, x2: item.cx, y2: item.cy };
  const nx = dx / d;
  const ny = dy / d;
  return {
    x1: CX + nx * CENTER_R,
    y1: CY + ny * CENTER_R,
    x2: item.cx - nx * IMG_R,
    y2: item.cy - ny * IMG_R,
  };
};

const ITEMS_A = [
  { id: 'a1', img: `${BASE}aalamaram_circle.png${VERSION}`,  correct: false, cx: 170,       cy: 170 - 125 }, // top
  { id: 'a2', img: `${BASE}anil_circle.png${VERSION}`,       correct: true,  cx: 170 - 108, cy: 170 - 62  }, // top-left
  { id: 'a3', img: `${BASE}ammi_circle.png${VERSION}`,       correct: true,  cx: 170 + 108, cy: 170 - 62  }, // top-right
  { id: 'a4', img: `${BASE}aani_circle.png${VERSION}`,       correct: false, cx: 170 - 108, cy: 170 + 62  }, // bottom-left
  { id: 'a5', img: `${BASE}annasi_circle.png${VERSION}`,     correct: true,  cx: 170,       cy: 170 + 125 }, // bottom
  { id: 'a6', img: `${BASE}aadu_circle.png${VERSION}`,       correct: false, cx: 170 + 108, cy: 170 + 62  }, // bottom-right
];

const ITEMS_AA = [
  { id: 'aa1', img: `${BASE}aamai_circle.png${VERSION}`,      correct: true,  cx: 170,       cy: 170 - 125 },
  { id: 'aa2', img: `${BASE}amma_circle.png${VERSION}`,       correct: false, cx: 170 - 108, cy: 170 - 62  },
  { id: 'aa3', img: `${BASE}arisi_circle.png${VERSION}`,      correct: false, cx: 170 + 108, cy: 170 - 62  },
  { id: 'aa4', img: `${BASE}aalamaram2_circle.png${VERSION}`, correct: true,  cx: 170 - 108, cy: 170 + 62  },
  { id: 'aa5', img: `${BASE}ambu_circle.png${VERSION}`,       correct: false, cx: 170,       cy: 170 + 125 },
  { id: 'aa6', img: `${BASE}aanthai_circle.png${VERSION}`,    correct: true,  cx: 170 + 108, cy: 170 + 62  },
];

const ITEMS_I = [
  { id: 'i1', img: `${BASE}ee_circle.png${VERSION}`,          correct: false, cx: 170,       cy: 170 - 125 }, // top: ஈ (Housefly)
  { id: 'i2', img: `${BASE}idli_circle.png${VERSION}`,        correct: true,  cx: 170 - 108, cy: 170 - 62  }, // top-left: இட்லி (Idli)
  { id: 'i3', img: `${BASE}ilaneer_circle.png${VERSION}`,     correct: true,  cx: 170 + 108, cy: 170 - 62  }, // top-right: இளநீர் (Tender coconut)
  { id: 'i4', img: `${BASE}eesal_circle.png${VERSION}`,       correct: false, cx: 170 - 108, cy: 170 + 62  }, // bottom-left: ஈசல் (Winged termite)
  { id: 'i5', img: `${BASE}ilai_circle.png${VERSION}`,        correct: true,  cx: 170,       cy: 170 + 125 }, // bottom: இலை (Leaf)
  { id: 'i6', img: `${BASE}eecchamaram_circle.png${VERSION}`, correct: false, cx: 170 + 108, cy: 170 + 62  }, // bottom-right: ஈச்சமரம் (Date palm)
];

const ITEMS_EE = [
  { id: 'ee1', img: `${BASE}eesal_circle.png${VERSION}`,       correct: true,  cx: 170,       cy: 170 - 125 }, // top: ஈசல் (Winged termite)
  { id: 'ee2', img: `${BASE}ilai_circle.png${VERSION}`,        correct: false, cx: 170 - 108, cy: 170 - 62  }, // top-left: இலை (Leaf)
  { id: 'ee3', img: `${BASE}ilaneer_circle.png${VERSION}`,     correct: false, cx: 170 + 108, cy: 170 - 62  }, // top-right: இளநீர் (Tender coconut)
  { id: 'ee4', img: `${BASE}idli_circle.png${VERSION}`,        correct: false, cx: 170 - 108, cy: 170 + 62  }, // bottom-left: இட்லி (Idli)
  { id: 'ee5', img: `${BASE}eecchamaram_circle.png${VERSION}`, correct: true,  cx: 170,       cy: 170 + 125 }, // bottom: ஈச்சமரம் (Date palm)
  { id: 'ee6', img: `${BASE}ee_circle.png${VERSION}`,          correct: true,  cx: 170 + 108, cy: 170 + 62  }, // bottom-right: ஈ (Housefly)
];

const PANELS = [
  { id: 'a',  title: 'அ - எழுத்தை உரிய படத்தோடு இணைப்போம்', letter: 'அ', letterColor: '#e91e8c', lineColor: '#e91e8c', items: ITEMS_A  },
  { id: 'aa', title: 'ஆ - எழுத்தை உரிய படத்தோடு இணைப்போம்', letter: 'ஆ', letterColor: '#e91e8c', lineColor: '#e91e8c', items: ITEMS_AA },
  { id: 'i',  title: 'இ - எழுத்தை உரிய படத்தோடு இணைப்போம்', letter: 'இ', letterColor: '#e91e8c', lineColor: '#e91e8c', items: ITEMS_I  },
  { id: 'ee', title: 'ஈ - எழுத்தை உரிய படத்தோடு இணைப்போம்', letter: 'ஈ', letterColor: '#e91e8c', lineColor: '#e91e8c', items: ITEMS_EE },
];

// ── Radial Wheel with drag-to-connect ────────────────────────────────────────
function RadialWheel({ panel, connections, onConnect }) {
  const svgRef      = useRef(null);
  const draggingRef = useRef(false);
  const [dragPos, setDragPos] = useState(null);
  const [wrongId, setWrongId] = useState(null);

  const VB_W = 340;
  const VB_H = 340;

  const toSVG = (clientX, clientY) => {
    const rect = svgRef.current.getBoundingClientRect();
    return {
      x: ((clientX - rect.left) / rect.width)  * VB_W,
      y: ((clientY - rect.top)  / rect.height) * VB_H,
    };
  };

  const onCenterDown = (e) => {
    e.preventDefault();
    draggingRef.current = true;
    try { svgRef.current.setPointerCapture(e.pointerId); } catch (_) {}
    setDragPos({ x: CX, y: CY });
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    setDragPos(toSVG(e.clientX, e.clientY));
  };

  const onPointerUp = (e) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    const pos = toSVG(e.clientX, e.clientY);
    setDragPos(null);

    const hit = panel.items.find(item => {
      const dx = pos.x - item.cx;
      const dy = pos.y - item.cy;
      return Math.sqrt(dx * dx + dy * dy) < IMG_R + 15;
    });

    if (!hit) return;

    if (!hit.correct) {
      setWrongId(hit.id);
      setTimeout(() => setWrongId(null), 800);
    } else {
      onConnect(hit);
    }
  };

  const onPointerCancel = () => {
    draggingRef.current = false;
    setDragPos(null);
  };

  const getDragLineStart = (pos) => {
    const dx = pos.x - CX;
    const dy = pos.y - CY;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (d === 0) return { x: CX, y: CY };
    return { x: CX + (dx / d) * CENTER_R, y: CY + (dy / d) * CENTER_R };
  };

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      width="100%"
      style={{ maxWidth: 360, display: 'block', touchAction: 'pan-y', userSelect: 'none' }}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
    >
      {/* Permanent connection lines */}
      {panel.items.map(item => {
        if (!connections.has(item.id)) return null;
        const { x1, y1, x2, y2 } = linePoints(item);
        return (
          <line key={`line-${item.id}`}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={panel.lineColor}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        );
      })}

      {/* Dashed guide lines */}
      {panel.items.map(item => {
        const { x1, y1, x2, y2 } = linePoints(item);
        return (
          <line key={`guide-${item.id}`}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#cbd5e1"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        );
      })}

      {/* Live drag rubber-band line */}
      {dragPos && (() => {
        const start = getDragLineStart(dragPos);
        return (
          <line
            x1={start.x} y1={start.y}
            x2={dragPos.x} y2={dragPos.y}
            stroke={panel.lineColor}
            strokeWidth="3"
            strokeDasharray="5 4"
            opacity="0.8"
          />
        );
      })()}

      {/* Images */}
      {panel.items.map(item => {
        const isConnected = connections.has(item.id);
        const isWrong = wrongId === item.id;

        return (
          <g key={item.id}>
            {/* Outer ring */}
            <circle
              cx={item.cx} cy={item.cy} r={IMG_R}
              fill="white"
              stroke={isWrong ? '#ef4444' : isConnected ? '#22c55e' : '#e2e8f0'}
              strokeWidth={isWrong ? '3' : isConnected ? '3' : '2'}
              style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.08))' }}
            />
            <image
              href={item.img}
              x={item.cx - IMG_SIZE / 2}
              y={item.cy - IMG_SIZE / 2}
              width={IMG_SIZE}
              height={IMG_SIZE}
              preserveAspectRatio="xMidYMid meet"
              style={{ pointerEvents: 'none' }}
            />
            {/* Tick badge when correctly connected */}
            {isConnected && (
              <g transform={`translate(${item.cx + IMG_R * 0.65}, ${item.cy - IMG_R * 0.65})`}>
                <circle r="11" fill="#22c55e" stroke="#ffffff" strokeWidth="2" />
                <path
                  d="M -4.5 0.5 L -1.5 3.5 L 4.5 -3"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            )}
          </g>
        );
      })}

      {/* Center letter (drag source) */}
      <circle
        cx={CX} cy={CY} r={CENTER_R}
        fill="white"
        stroke={panel.letterColor}
        strokeWidth="3.5"
        style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.15))', cursor: 'grab', touchAction: 'none' }}
        onPointerDown={onCenterDown}
      />
      <text
        x={panel.letter === 'ஆ' ? CX + 2 : CX}
        y={panel.letter === 'ஆ' ? CY - 1 : CY}
        dy="0.05em"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="40"
        fontFamily="'Noto Sans Tamil', sans-serif"
        fill={panel.letterColor}
        fontWeight="700"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        {panel.letter}
      </text>
    </svg>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export const ConnectLetterToPictureGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [connections, setConnections] = useState({
    a: new Set(),
    aa: new Set(),
    i: new Set(),
    ee: new Set()
  });

  const handleConnect = useCallback((panelId, item) => {
    setConnections(prev => {
      const s = new Set(prev[panelId]);
      if (s.has(item.id)) { s.delete(item.id); } else { s.add(item.id); }
      return { ...prev, [panelId]: s };
    });
  }, []);

  const handleReset = () => {
    setConnections({
      a: new Set(),
      aa: new Set(),
      i: new Set(),
      ee: new Set()
    });
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(c => c - 1);
  };

  const handleNext = () => {
    if (currentIndex < PANELS.length - 1) setCurrentIndex(c => c + 1);
  };

  const currentPanel = PANELS[currentIndex];

  return (
    <div className="flex flex-col items-center gap-4 w-full pb-12 select-none px-2 max-w-lg mx-auto">
      {/* Title */}
      <div className="text-center font-black text-slate-800 text-sm sm:text-base">
        {currentIndex + 1}. {currentPanel.title}
      </div>

      {/* 1 Wheel in Center (Fits 100% on phone screen!) */}
      <div className="w-full flex justify-center py-1">
        <RadialWheel
          panel={currentPanel}
          connections={connections[currentPanel.id] || new Set()}
          onConnect={(item) => handleConnect(currentPanel.id, item)}
        />
      </div>

      {/* Prev / Next Horizontal Navigation Buttons */}
      <div className="flex items-center justify-between gap-3 pt-3 px-1 w-full max-w-sm">
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

        <div className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-black text-xs sm:text-sm">
          {currentIndex + 1} / {PANELS.length}
        </div>

        <button
          type="button"
          onClick={handleNext}
          disabled={currentIndex === PANELS.length - 1}
          className={`flex items-center gap-1 px-4 sm:px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all border shadow-xs ${
            currentIndex === PANELS.length - 1
              ? 'opacity-40 bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
              : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 border-b-[3px] border-b-slate-400 active:translate-y-[2px] active:border-b cursor-pointer'
          }`}
        >
          <span>அடுத்தது</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Reset Button (Resets all and goes back to Question 1) */}
      <div className="flex justify-center pt-2 pb-4">
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-[#16a34a] hover:bg-green-700 text-white border border-green-700 border-b-[3.5px] border-b-green-900 shadow-xs active:translate-y-[2px] active:border-b-[1.5px] transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>மீண்டும் செய்</span>
        </button>
      </div>
    </div>
  );
};

export default ConnectLetterToPictureGame;
