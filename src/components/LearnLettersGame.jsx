// src/components/LearnLettersGame.jsx
import React, { useState, useRef } from 'react';
import { Volume2 } from 'lucide-react';

const BASE_IMG = 'https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/topic13/';
const BASE_AUDIO = '/audio/tamil_class1/topic13/';

const LETTER_CARDS = [
  {
    num: 1,
    id: 'k',
    letter: 'க்',
    cardImg: `${BASE_IMG}card1.png`,
    leftAudio: `${BASE_AUDIO}card1_left.mp3`,
    rightAudio: `${BASE_AUDIO}card1_right.mp3`,
    leftTitle: 'கொக்கு',
    rightTitle: 'தக்காளி',
  },
  {
    num: 2,
    id: 'c',
    letter: 'ச்',
    cardImg: `${BASE_IMG}card2.png`,
    leftAudio: `${BASE_AUDIO}card2_left.mp3`,
    rightAudio: `${BASE_AUDIO}card2_right.mp3`,
    leftTitle: 'எலுமிச்சை',
    rightTitle: 'அச்சாணி',
  },
  {
    num: 3,
    id: 't',
    letter: 'ட்',
    cardImg: `${BASE_IMG}card3.png`,
    leftAudio: `${BASE_AUDIO}card3_left.mp3`,
    rightAudio: `${BASE_AUDIO}card3_right.mp3`,
    leftTitle: 'சட்டை',
    rightTitle: 'முட்டை',
  },
  {
    num: 4,
    id: 'th',
    letter: 'த்',
    cardImg: `${BASE_IMG}card4.png`,
    leftAudio: `${BASE_AUDIO}card4_left.mp3`,
    rightAudio: `${BASE_AUDIO}card4_right.mp3`,
    leftTitle: 'வாத்து',
    rightTitle: 'நத்தை',
  },
  {
    num: 5,
    id: 'p',
    letter: 'ப்',
    cardImg: `${BASE_IMG}card5.png`,
    leftAudio: `${BASE_AUDIO}card5_left.mp3`,
    rightAudio: `${BASE_AUDIO}card5_right.mp3`,
    leftTitle: 'தொப்பி',
    rightTitle: 'பப்பாளி',
  },
  {
    num: 6,
    id: 'r',
    letter: 'ற்',
    cardImg: `${BASE_IMG}card6.png`,
    leftAudio: `${BASE_AUDIO}card6_left.mp3`,
    rightAudio: `${BASE_AUDIO}card6_right.mp3`,
    leftTitle: 'நாற்று',
    rightTitle: 'கற்றாழை',
  }
];

export const LearnLettersGame = () => {
  const currentAudioRef = useRef(null);
  const [playingKey, setPlayingKey] = useState(null); // e.g. "k-left" or "k-right"

  const handlePlayAudio = (card, side) => {
    const key = `${card.id}-${side}`;
    const audioPath = side === 'left' ? card.leftAudio : card.rightAudio;

    if (!audioPath) return;

    // Stop currently playing audio
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }

    setPlayingKey(key);

    try {
      const audio = new Audio(audioPath + '?v=' + Date.now());
      currentAudioRef.current = audio;

      audio.onended = () => {
        setPlayingKey((curr) => (curr === key ? null : curr));
      };

      audio.onerror = () => {
        setPlayingKey((curr) => (curr === key ? null : curr));
      };

      audio.play().catch((err) => {
        console.log('Audio playback notice:', err);
        setPlayingKey(null);
      });
    } catch (e) {
      console.log('Audio init notice:', e);
      setPlayingKey(null);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 pb-12 select-none w-full max-w-2xl sm:max-w-3xl mx-auto px-1 sm:px-3">
      {/* 6 Clean Cards: No 3D borders, clean flat illustration with bare popping audio icons */}
      <div className="flex flex-col gap-4 sm:gap-6 w-full">
        {LETTER_CARDS.map((card) => {
          const isLeftPlaying = playingKey === `${card.id}-left`;
          const isRightPlaying = playingKey === `${card.id}-right`;

          return (
            <div
              key={card.id}
              onContextMenu={(e) => {
                e.preventDefault();
                handlePlayAudio(card, 'right');
              }}
              className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl bg-white shadow-xs overflow-hidden select-none border border-slate-100"
            >
              {/* Clean Image (No 3D bevels) */}
              <img
                src={card.cardImg}
                alt={`Letter card ${card.letter}`}
                className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none z-0"
                loading="lazy"
              />

              {/* Left Click Area (Left Image & Word) */}
              <button
                type="button"
                onClick={() => handlePlayAudio(card, 'left')}
                className="absolute inset-y-0 left-0 w-1/2 z-10 cursor-pointer outline-none focus:outline-none flex items-start justify-start p-3 sm:p-4 group"
                title={`${card.leftTitle} - ஒலி கேட்க`}
              >
                {/* Bare Audio Icon: No circle border/background, pops with bounce on click (no yellow) */}
                <Volume2
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-200 pointer-events-none stroke-[2.2] ${
                    isLeftPlaying
                      ? 'scale-135 text-slate-900 drop-shadow-sm'
                      : 'text-slate-600/90 group-hover:scale-115 group-hover:text-slate-900'
                  }`}
                />
              </button>

              {/* Right Click Area (Right Image & Word) */}
              <button
                type="button"
                onClick={() => handlePlayAudio(card, 'right')}
                className="absolute inset-y-0 right-0 w-1/2 z-10 cursor-pointer outline-none focus:outline-none flex items-start justify-end p-3 sm:p-4 group"
                title={`${card.rightTitle} - ஒலி கேட்க`}
              >
                {/* Bare Audio Icon: No circle border/background, pops with bounce on click (no yellow) */}
                <Volume2
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-200 pointer-events-none stroke-[2.2] ${
                    isRightPlaying
                      ? 'scale-135 text-slate-900 drop-shadow-sm'
                      : 'text-slate-600/90 group-hover:scale-115 group-hover:text-slate-900'
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearnLettersGame;
