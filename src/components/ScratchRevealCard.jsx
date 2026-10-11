// src/components/ScratchRevealCard.jsx
import React, { useRef, useEffect, useState } from 'react';
import { RotateCcw } from 'lucide-react';

export function ScratchRevealCard({
  text,
  scratchId,
  brushSize = 26,
  onRevealed = null
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasStartedScratching, setHasStartedScratching] = useState(false);

  // Initialize and redraw the silver scratch mask on the canvas
  const initCanvas = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const width = Math.floor(rect.width) || 300;
    const height = Math.floor(rect.height) || 64;

    // Support High-DPI screens
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // Realistic silver-metallic gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#94a3b8');   // slate-400
    gradient.addColorStop(0.3, '#cbd5e1'); // slate-300
    gradient.addColorStop(0.5, '#f1f5f9'); // slate-100 shimmer
    gradient.addColorStop(0.7, '#cbd5e1'); // slate-300
    gradient.addColorStop(1, '#94a3b8');   // slate-400

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Subtle hatch/sparkle scratch overlay texture
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.lineWidth = 1;
    for (let i = -height; i < width + height; i += 12) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + height, height);
      ctx.stroke();
    }

    // Centered stylish invitation banner
    ctx.fillStyle = 'rgba(30, 41, 59, 0.75)'; // slate-800
    ctx.font = '600 11px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ Scratch here to reveal answer', width / 2, height / 2);

    setIsRevealed(false);
    setHasStartedScratching(false);
  };

  useEffect(() => {
    // Small timeout to guarantee DOM layout calculation
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
  }, [text, scratchId]);

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

    // Erase scratch layer
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
      // Downsample check for high performance
      const w = canvas.width;
      const h = canvas.height;
      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;
      let transparentPixels = 0;
      const totalSampled = data.length / 16; // sample every 4th pixel

      for (let i = 3; i < data.length; i += 16) {
        if (data[i] < 128) {
          transparentPixels++;
        }
      }

      const percent = (transparentPixels / totalSampled) * 100;
      if (percent > 45) {
        setIsRevealed(true);
        if (onRevealed) onRevealed();
      }
    } catch {
      // Fallback
    }
  };

  const handleRevealFull = () => {
    setIsRevealed(true);
    if (onRevealed) onRevealed();
  };

  const handleResetScratch = () => {
    initCanvas();
  };

  return (
    <div className="space-y-1.5 w-full select-none">
      <div
        ref={containerRef}
        className="relative min-h-[58px] rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-50 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] flex items-center justify-center p-3 text-center"
      >
        {/* Underlying Revealed Text (Multiline, Stylish Grey) */}
        <div className="w-full text-xs sm:text-[13px] font-medium italic tracking-wide text-slate-700 leading-relaxed select-text selection:bg-slate-300">
          "{text}"
        </div>

        {/* Scratch Surface Canvas */}
        {!isRevealed && (
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className="absolute inset-0 w-full h-full cursor-pointer touch-none z-10 transition-opacity duration-300"
            title="Scratch with finger or mouse to reveal answer"
          />
        )}
      </div>

      {/* Action helper bar */}
      <div className="flex items-center justify-between px-1 text-[11px] font-semibold text-slate-400">
        {!isRevealed ? (
          <>
            <span className="italic flex items-center gap-1 text-slate-500">
              🪙 Scratch surface to reveal
            </span>
            <button
              type="button"
              onClick={handleRevealFull}
              className="text-blue-600 hover:text-blue-700 font-bold hover:underline transition-colors cursor-pointer"
            >
              Reveal All
            </button>
          </>
        ) : (
          <>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              ✓ Revealed
            </span>
            <button
              type="button"
              onClick={handleResetScratch}
              className="flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer font-medium"
            >
              <RotateCcw size={12} />
              Scratch again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
