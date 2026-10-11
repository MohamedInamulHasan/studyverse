// src/components/ScratchLineReveal.jsx
import React, { useRef, useEffect, useState } from 'react';
import { RotateCcw } from 'lucide-react';

export function ScratchLineReveal({
  prompt = '',
  answer = '',
  scratchId,
  brushSize = 22
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasStartedScratching, setHasStartedScratching] = useState(false);

  // Initialize and redraw the silver scratch mask directly over the underlined answer sentence
  const initCanvas = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const width = Math.max(Math.floor(rect.width), 180);
    const height = Math.max(Math.floor(rect.height), 28);

    // Support High-DPI screens
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // Sleek silver-metallic gradient matching the textbook line
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#94a3b8');   // slate-400
    gradient.addColorStop(0.25, '#cbd5e1'); // slate-300
    gradient.addColorStop(0.5, '#f8fafc'); // silver highlight shimmer
    gradient.addColorStop(0.75, '#cbd5e1'); // slate-300
    gradient.addColorStop(1, '#94a3b8');   // slate-400

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Subtle hatch overlay texture
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.lineWidth = 1;
    for (let i = -height; i < width + height; i += 12) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + height, height);
      ctx.stroke();
    }

    // Invitation text on the scratch mask
    ctx.fillStyle = 'rgba(30, 41, 59, 0.75)';
    ctx.font = '600 11px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ Scratch line to reveal', width / 2, height / 2);

    setIsRevealed(false);
    setHasStartedScratching(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      initCanvas();
    }, 40);

    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [answer, scratchId]);

  const scratchAt = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.x;
    const y = clientY - rect.y;

    const dpr = window.devicePixelRatio || 1;
    const ctx = canvas.getContext('2d');
    ctx.save();
    ctx.scale(dpr, dpr);

    // Erase scratch foil layer
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.restore();

    if (!hasStartedScratching) {
      setHasStartedScratching(true);
    }
  };

  const handlePointerDown = (e) => {
    if (isRevealed) return;
    isDrawingRef.current = true;
    scratchAt(e.clientX, e.clientY);
  };

  const handlePointerMove = (e) => {
    if (!isDrawingRef.current || isRevealed) return;
    scratchAt(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    isDrawingRef.current = false;
    checkScratchPercentage();
  };

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    try {
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;
      let transparentPixels = 0;
      const totalSampled = data.length / 16;

      for (let i = 3; i < data.length; i += 16) {
        if (data[i] < 128) {
          transparentPixels++;
        }
      }

      const percent = (transparentPixels / totalSampled) * 100;
      if (percent > 40) {
        setIsRevealed(true);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div className="w-full space-y-1 select-none">
      <div className="leading-relaxed text-xs sm:text-sm">
        {/* Natural prompt text in the sentence */}
        {prompt ? (
          <span className="text-slate-800 font-medium mr-1.5">{prompt}</span>
        ) : null}

        {/* The Underlined Filled Sentence Covered by Scratch Canvas (No box/card outline) */}
        <span
          ref={containerRef}
          className="relative inline-block align-baseline rounded-sm px-1 py-0.5"
        >
          {/* Natural sentence text with underline */}
          <span className="text-slate-800 font-medium underline underline-offset-[5px] decoration-slate-400 decoration-1.5 select-text selection:bg-slate-300">
            {answer}
          </span>

          {/* Scratch Foil Mask overlaying only the underlined filled words */}
          {!isRevealed && (
            <canvas
              ref={canvasRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              className="absolute inset-0 w-full h-full rounded cursor-pointer touch-none z-10 transition-opacity duration-300"
              title="Scratch across this line to reveal"
            />
          )}
        </span>
      </div>

      {/* Discrete subtle controls */}
      <div className="flex items-center justify-between px-0.5 text-[10.5px] font-semibold text-slate-400 pt-0.5">
        {!isRevealed ? (
          <>
            <span className="italic flex items-center gap-1 text-slate-500">
              🪙 Scratch through line to reveal
            </span>
            <button
              type="button"
              onClick={() => setIsRevealed(true)}
              className="text-blue-600 hover:text-blue-700 font-bold hover:underline transition-colors cursor-pointer"
            >
              Reveal
            </button>
          </>
        ) : (
          <>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              ✓ Revealed
            </span>
            <button
              type="button"
              onClick={() => initCanvas()}
              className="flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer font-medium"
            >
              <RotateCcw size={11} />
              Scratch again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
