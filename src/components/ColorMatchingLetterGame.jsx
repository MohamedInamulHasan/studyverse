// src/components/ColorMatchingLetterGame.jsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { RotateCcw, Eraser } from 'lucide-react';

const BASE = 'https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/topic11/';

// ── 15 Colors + 1 Eraser = 16 Palette Items (2 rows of 8) ───────────────────
const PALETTE_COLORS = [
  { id: 'red',     hex: '#ef4444' },
  { id: 'crimson', hex: '#e11d48' },
  { id: 'orange',  hex: '#f97316' },
  { id: 'amber',   hex: '#f59e0b' },
  { id: 'yellow',  hex: '#eab308' },
  { id: 'lime',    hex: '#84cc16' },
  { id: 'green',   hex: '#22c55e' },
  { id: 'black',   hex: '#000000' },
  { id: 'cyan',    hex: '#06b6d4' },
  { id: 'skyblue', hex: '#0284c7' },
  { id: 'blue',    hex: '#3b82f6' },
  { id: 'indigo',  hex: '#6366f1' },
  { id: 'purple',  hex: '#a855f7' },
  { id: 'pink',    hex: '#ec4899' },
  { id: 'brown',   hex: '#854d0e' },
  { id: 'eraser',  hex: 'eraser'  },
];

// ── 4:3 Full-Card Canvas Component ──────────────────────────────────────────
const CanvasCard = ({ card, selectedColor, letterColors, onColorLetter }) => {
  const canvasRef        = useRef(null);
  const imgRef           = useRef(null);
  const isDrawingRef     = useRef(false);
  const strokesRef       = useRef([]);
  const currentStrokeRef = useRef(null);

  // ── Redraw Canvas: User paint strokes on BOTTOM, lineart image on TOP ────
  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // 1. Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Draw user paint & eraser strokes (BEHIND lineart image)
    const allStrokes = [...strokesRef.current];
    if (currentStrokeRef.current) {
      allStrokes.push(currentStrokeRef.current);
    }

    allStrokes.forEach(stroke => {
      if (!stroke.points || stroke.points.length === 0) return;
      ctx.beginPath();

      if (stroke.color === 'eraser') {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineWidth = 38;
      } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = stroke.color;
        ctx.lineWidth = 26;
      }

      ctx.lineCap  = 'round';
      ctx.lineJoin = 'round';

      stroke.points.forEach((pt, i) => {
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else         ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();
    });

    // Reset composite mode to source-over for top image
    ctx.globalCompositeOperation = 'source-over';

    // 3. Draw lineart image ON TOP
    if (imgRef.current && imgRef.current.complete) {
      const zoom  = card.zoom || 1.0;
      const drawW = canvas.width  * zoom;
      const drawH = canvas.height * zoom;
      const drawX = (canvas.width  - drawW) / 2;
      const drawY = (canvas.height - drawH) / 2;
      ctx.drawImage(imgRef.current, drawX, drawY, drawW, drawH);
    }
  }, [card.zoom]);

  // Load lineart image
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = card.imgSrc;
    img.onload = () => {
      imgRef.current = img;
      redraw();
    };
  }, [card.imgSrc, redraw]);

  // Global mouseup listener — stops drawing safely
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDrawingRef.current && currentStrokeRef.current) {
        strokesRef.current.push(currentStrokeRef.current);
        currentStrokeRef.current = null;
      }
      isDrawingRef.current = false;
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const getCanvasPoint = (e) => {
    const canvas = canvasRef.current;
    const rect   = canvas.getBoundingClientRect();
    const scaleX = canvas.width  / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top)  * scaleY
    };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}
    isDrawingRef.current     = true;
    currentStrokeRef.current = {
      color: selectedColor,
      points: [getCanvasPoint(e)]
    };
    redraw();
  };

  const draw = (e) => {
    if (!isDrawingRef.current || !currentStrokeRef.current) return;
    e.preventDefault();
    currentStrokeRef.current.points.push(getCanvasPoint(e));
    redraw();
  };

  const stopDrawing = (e) => {
    if (e && e.currentTarget && e.currentTarget.hasPointerCapture && e.currentTarget.hasPointerCapture(e.pointerId)) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (_) {}
    }
    if (isDrawingRef.current && currentStrokeRef.current) {
      strokesRef.current.push(currentStrokeRef.current);
      currentStrokeRef.current = null;
    }
    isDrawingRef.current = false;
  };

  // Color letter circle when dragging or pressing over it
  const handleLetterColorTrigger = (letter, e) => {
    if (e.buttons === 1 || isDrawingRef.current) {
      onColorLetter(card.id, letter);
    }
  };

  // Round SVG cursor for paint and eraser
  const cursorSvg = selectedColor === 'eraser'
    ? `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><circle cx='10' cy='10' r='7' fill='%23ffffff' stroke='%23000000' stroke-width='2'/></svg>`
    : `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><circle cx='10' cy='10' r='7' fill='${encodeURIComponent(selectedColor)}' stroke='%23ffffff' stroke-width='2'/></svg>`;

  const customCursorStyle = {
    cursor: `url("data:image/svg+xml;utf8,${cursorSvg}") 10 10, crosshair`
  };

  return (
    <div
      className="rounded-[28px] bg-white border-2 border-[#84cc16] p-2 sm:p-3 flex items-center justify-center shadow-2xs relative overflow-visible transition-all w-full max-w-xl aspect-[4/3]"
    >
      {/* Full 4:3 Canvas for Lineart Image */}
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="w-full h-full aspect-[4/3] rounded-[22px] bg-white block select-none"
        style={{ ...customCursorStyle, touchAction: 'none' }}
        onPointerDown={startDrawing}
        onPointerMove={draw}
        onPointerUp={stopDrawing}
        onPointerCancel={stopDrawing}
      />

      {/* Right Border Embedded Option Circles (அ & ஆ) */}
      <div className="absolute -right-6 sm:-right-7 top-0 bottom-0 my-auto h-36 flex flex-col justify-between items-center z-10">
        <div className="absolute top-0 bottom-0 w-0.5 bg-[#84cc16] -z-10" />

        {card.options.map((letter) => {
          const key = `${card.id}_${letter}`;
          const letterPaintedColor = letterColors[key];

          let bgStyle = (letterPaintedColor && letterPaintedColor !== 'eraser') ? letterPaintedColor : '#ffffff';

          return (
            <div
              key={letter}
              style={{
                backgroundColor: bgStyle,
                color: '#1c1917', // Text always stays dark black!
                border: '2px solid #84cc16',
                ...customCursorStyle
              }}
              onMouseDown={() => onColorLetter(card.id, letter)}
              onMouseEnter={(e) => handleLetterColorTrigger(letter, e)}
              onPointerEnter={(e) => handleLetterColorTrigger(letter, e)}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full font-black text-xl sm:text-2xl flex items-center justify-center select-none shadow-xs transition-colors duration-150"
            >
              {letter}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
export const ColorMatchingLetterGame = () => {
  const [selectedColor, setSelectedColor] = useState(PALETTE_COLORS[6].hex); // Default green
  const [letterColors,  setLetterColors]  = useState({});
  const [resetTrigger,  setResetTrigger]  = useState(0);

  const handleColorLetter = (cardId, letter) => {
    const key = `${cardId}_${letter}`;
    setLetterColors(prev => ({
      ...prev,
      [key]: selectedColor
    }));
  };

  const handleReset = () => {
    setLetterColors({});
    setSelectedColor(PALETTE_COLORS[6].hex);
    setResetTrigger(prev => prev + 1);
    const firstEl = document.getElementById('color-match-card-0');
    if (firstEl) {
      firstEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const cards = [
    {
      id: 'p1',
      title: 'ஆடு',
      correctLetter: 'ஆ',
      options: ['அ', 'ஆ'],
      imgSrc: `${BASE}aadu.png`,
      zoom: 1.0,
    },
    {
      id: 'p2',
      title: 'அல்லி',
      correctLetter: 'அ',
      options: ['அ', 'ஆ'],
      imgSrc: `${BASE}alli.png`,
      zoom: 1.0,
    },
    {
      id: 'p3',
      title: 'ஈச்சமரம்',
      correctLetter: 'ஈ',
      options: ['இ', 'ஈ'],
      imgSrc: `${BASE}eecchamaram.png`,
      zoom: 1.0,
    },
    {
      id: 'p4',
      title: 'இலை',
      correctLetter: 'இ',
      options: ['இ', 'ஈ'],
      imgSrc: `${BASE}ilai.png`,
      zoom: 1.0,
    },
    {
      id: 'p5',
      title: 'உண்டியல்',
      correctLetter: 'உ',
      options: ['உ', 'ஊ'],
      imgSrc: `${BASE}undiyal.png`,
      zoom: 1.0,
    },
    {
      id: 'p6',
      title: 'ஊதல்',
      correctLetter: 'ஊ',
      options: ['உ', 'ஊ'],
      imgSrc: `${BASE}oothal.png`,
      zoom: 1.0,
    },
    {
      id: 'p7',
      title: 'ஏணி',
      correctLetter: 'ஏ',
      options: ['எ', 'ஏ'],
      imgSrc: `${BASE}yeni.png`,
      zoom: 1.0,
    },
    {
      id: 'p8',
      title: 'எலி',
      correctLetter: 'எ',
      options: ['எ', 'ஏ'],
      imgSrc: `${BASE}eli.png`,
      zoom: 1.0,
    },
    {
      id: 'p9',
      title: 'ஐந்து',
      correctLetter: 'ஐ',
      options: ['ஒ', 'ஐ'],
      imgSrc: `${BASE}ainthu.png`,
      zoom: 1.0,
    },
    {
      id: 'p10',
      title: 'ஒட்டகம்',
      correctLetter: 'ஒ',
      options: ['ஒ', 'ஓ'],
      imgSrc: `${BASE}ottagam.png`,
      zoom: 1.0,
    },
    {
      id: 'p11',
      title: 'ஓணான்',
      correctLetter: 'ஓ',
      options: ['ஒ', 'ஓ'],
      imgSrc: `${BASE}onaan.png`,
      zoom: 1.0,
    },
    {
      id: 'p12',
      title: 'ஔடதம்',
      correctLetter: 'ஔ',
      options: ['ஒ', 'ஔ'],
      imgSrc: `${BASE}avvadham.png`,
      zoom: 1.0,
    }
  ];

  return (
    <div className="space-y-6 pb-12 select-none w-full max-w-xl mx-auto pr-6 sm:pr-8">

      {/* ── 2-Row Palette: Sticky at top for easy painting while scrolling ── */}
      <div className="sticky top-0 z-30 bg-slate-50/95 backdrop-blur-md py-2 px-1 rounded-2xl shadow-xs flex justify-center">
        <div className="grid grid-cols-8 gap-2.5 sm:gap-3 max-w-md w-full justify-items-center">
          {PALETTE_COLORS.map(c => {
            const isSelected = selectedColor === c.hex;
            const isEraser   = c.id === 'eraser';
            const isBlack    = c.hex === '#000000';

            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedColor(c.hex)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full shrink-0 flex items-center justify-center cursor-pointer transition-colors duration-100"
                style={{
                  backgroundColor: isEraser ? '#ffffff' : c.hex,
                  border: isSelected
                    ? (isBlack ? '3px solid #000000' : '3px solid #111111')
                    : isEraser
                      ? '1px solid #d6d3d1'
                      : '3px solid transparent',
                  boxShadow: isSelected
                    ? (isBlack ? '0 0 0 2px #ffffff, 0 0 0 4px #000000' : '0 1px 3px rgba(0,0,0,0.15)')
                    : '0 1px 3px rgba(0,0,0,0.15)',
                }}
                title={isEraser ? 'அழிப்பான் (Eraser)' : ''}
              >
                {isEraser && (
                  <Eraser className="w-4 h-4 text-stone-800 stroke-[2.2]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── List of 4:3 Canvas Cards ── */}
      <div className="space-y-8">
        {cards.map((card, cIdx) => (
          <div id={`color-match-card-${cIdx}`} key={`${card.id}_${resetTrigger}`}>
            <CanvasCard
              card={card}
              selectedColor={selectedColor}
              letterColors={letterColors}
              onColorLetter={handleColorLetter}
            />
          </div>
        ))}
      </div>

      {/* ── Bottom Reset Button ── */}
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

export default ColorMatchingLetterGame;
