// src/components/PeyaraiSolvomGame.jsx
import React, { useState, useRef } from 'react';
import { Volume2 } from 'lucide-react';

export const PeyaraiSolvomGame = ({ items = [] }) => {
  const [playingIdx, setPlayingIdx] = useState(null);
  const currentAudioRef = useRef(null);

  const handlePlay = (item, idx) => {
    if (!item.audio) return;

    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }

    setPlayingIdx(idx);

    try {
      const audio = new Audio(item.audio + '?v=' + Date.now());
      currentAudioRef.current = audio;

      audio.onended = () => {
        setPlayingIdx((curr) => (curr === idx ? null : curr));
      };

      audio.onerror = () => {
        setPlayingIdx((curr) => (curr === idx ? null : curr));
      };

      audio.play().catch((err) => {
        console.log('Audio playback notice:', err);
        setPlayingIdx(null);
      });
    } catch (e) {
      console.log('Audio init notice:', e);
      setPlayingIdx(null);
    }
  };

  return (
    <div className="space-y-4 select-none">
      <div className="grid grid-cols-2 gap-3.5 sm:gap-5">
        {items.map((item, idx) => {
          const isPlaying = playingIdx === idx;

          return (
            <button
              key={idx}
              type="button"
              onClick={() => handlePlay(item, idx)}
              className="relative aspect-square w-full rounded-2xl sm:rounded-3xl bg-white border border-slate-100 shadow-xs cursor-pointer overflow-hidden group outline-none focus:outline-none flex items-center justify-center p-0 transition-all select-none"
              title={`${item.name} - ஒலி கேட்க`}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-200"
                loading="lazy"
              />

              {/* Bare Audio Icon: No circular wrapper, pops when clicked/playing (no yellow) */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 pointer-events-none">
                <Volume2
                  className={`w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2] transition-all duration-200 ${
                    isPlaying
                      ? 'scale-135 text-slate-900 drop-shadow-sm'
                      : 'text-slate-600/90 group-hover:scale-115 group-hover:text-slate-900'
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PeyaraiSolvomGame;
