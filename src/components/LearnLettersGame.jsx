// src/components/LearnLettersGame.jsx
import React, { useState, useRef } from 'react';
import { RotateCcw, Volume2 } from 'lucide-react';

const BASE_IMG = 'https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/topic13/';
const BASE_AUDIO = '/audio/tamil_class1/topic13/';

const LETTER_CARDS = [
  {
    num: 1,
    id: 'k',
    letter: 'க்',
    bgColor: '#e0f2fe', // Soft pastel blue
    cardImg: `${BASE_IMG}card1.png`,
    leftImg: `${BASE_IMG}card1_left.png`,
    rightImg: `${BASE_IMG}card1_right.png`,
    leftAudio: `${BASE_AUDIO}card1_left.mp3`,
    rightAudio: `${BASE_AUDIO}card1_right.mp3`,
    leftName: { prefix: 'கொ', highlight: 'க்', suffix: 'கு' },
    rightName: { prefix: 'த', highlight: 'க்', suffix: 'காளி' },
  },
  {
    num: 2,
    id: 'c',
    letter: 'ச்',
    bgColor: '#fce7f3', // Soft pastel pink
    cardImg: `${BASE_IMG}card2.png`,
    leftImg: `${BASE_IMG}card2_left.png`,
    rightImg: `${BASE_IMG}card2_right.png`,
    leftAudio: `${BASE_AUDIO}card2_left.mp3`,
    rightAudio: `${BASE_AUDIO}card2_right.mp3`,
    leftName: { prefix: 'எலுமி', highlight: 'ச்', suffix: 'சை' },
    rightName: { prefix: 'அ', highlight: 'ச்', suffix: 'சாணி' },
  },
  {
    num: 3,
    id: 't',
    letter: 'ட்',
    bgColor: '#f3e8ff', // Soft pastel lavender
    cardImg: `${BASE_IMG}card3.png`,
    leftImg: `${BASE_IMG}card3_left.png`,
    rightImg: `${BASE_IMG}card3_right.png`,
    leftAudio: `${BASE_AUDIO}card3_left.mp3`,
    rightAudio: `${BASE_AUDIO}card3_right.mp3`,
    leftName: { prefix: 'ச', highlight: 'ட்', suffix: 'டை' },
    rightName: { prefix: 'மு', highlight: 'ட்', suffix: 'டை' },
  },
  {
    num: 4,
    id: 'th',
    letter: 'த்',
    bgColor: '#fef9c3', // Soft pastel cream / yellow
    cardImg: `${BASE_IMG}card4.png`,
    leftImg: `${BASE_IMG}card4_left.png`,
    rightImg: `${BASE_IMG}card4_right.png`,
    leftAudio: `${BASE_AUDIO}card4_left.mp3`,
    rightAudio: `${BASE_AUDIO}card4_right.mp3`,
    leftName: { prefix: 'வா', highlight: 'த்', suffix: 'து' },
    rightName: { prefix: 'ந', highlight: 'த்', suffix: 'தை' },
  },
  {
    num: 5,
    id: 'p',
    letter: 'ப்',
    bgColor: '#ffedd5', // Soft pastel tan / peach
    cardImg: `${BASE_IMG}card5.png`,
    leftImg: `${BASE_IMG}card5_left.png`,
    rightImg: `${BASE_IMG}card5_right.png`,
    leftAudio: `${BASE_AUDIO}card5_left.mp3`,
    rightAudio: `${BASE_AUDIO}card5_right.mp3`,
    leftName: { prefix: 'தொ', highlight: 'ப்', suffix: 'பி' },
    rightName: { prefix: 'ப', highlight: 'ப்', suffix: 'பாளி' },
  },
  {
    num: 6,
    id: 'r',
    letter: 'ற்',
    bgColor: '#dcfce7', // Soft pastel light green
    cardImg: `${BASE_IMG}card6.png`,
    leftImg: `${BASE_IMG}card6_left.png`,
    rightImg: `${BASE_IMG}card6_right.png`,
    leftAudio: `${BASE_AUDIO}card6_left.mp3`,
    rightAudio: `${BASE_AUDIO}card6_right.mp3`,
    leftName: { prefix: 'நா', highlight: 'ற்', suffix: 'று' },
    rightName: { prefix: 'க', highlight: 'ற்', suffix: 'றாழை' },
  }
];

export const LearnLettersGame = () => {
  const currentAudioRef = useRef(null);
  const [resetKey, setResetKey] = useState(0);
  const [loadedCards, setLoadedCards] = useState({});

  const playAudio = (audioPath) => {
    if (!audioPath) return;
    try {
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current.currentTime = 0;
      }
      const a = new Audio(audioPath + '?v=' + Date.now());
      currentAudioRef.current = a;
      a.play().catch(e => console.log('Audio play error:', e));
    } catch (err) {
      console.log('Audio error:', err);
    }
  };

  const handleReset = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    setResetKey(prev => prev + 1);
  };

  const handleCardImageLoad = (cardId) => {
    setLoadedCards(prev => ({ ...prev, [cardId]: true }));
  };

  return (
    <div key={resetKey} className="space-y-6 pb-12 select-none w-full max-w-3xl sm:max-w-4xl mx-auto px-2 sm:px-4">
      {/* ── 6 Cards: 1 Card per Row, 16:9 Aspect Ratio, Larger Size, No Shadows ── */}
      <div className="grid grid-cols-1 gap-6 w-full">
        {LETTER_CARDS.map((card) => {
          const isCompositeImgLoaded = loadedCards[card.id];

          return (
            <div
              key={card.id}
              style={{ backgroundColor: card.bgColor }}
              className="rounded-[24px] sm:rounded-[32px] border-2 border-stone-300/80 border-b-[6px] border-b-stone-400/80 shadow-none relative w-full aspect-[16/9] overflow-hidden flex items-center justify-between p-2 sm:p-4"
            >
              {/* Full Composite Card Image (card1.png ... card6.png) */}
              <img
                src={card.cardImg}
                alt={`Card ${card.num}`}
                onLoad={() => handleCardImageLoad(card.id)}
                className="absolute inset-0 w-full h-full object-fill pointer-events-none z-0 rounded-[22px] sm:rounded-[30px] filter-none shadow-none"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />

              {/* Left Half Click Area (First Image) with Audio Icon in Top-Left Corner */}
              <button
                type="button"
                onClick={() => playAudio(card.leftAudio)}
                className="relative z-10 w-1/2 h-full flex flex-col items-center justify-between py-1 cursor-pointer group outline-none focus:outline-none"
                title="ஒலி கேட்க"
              >
                {/* Small Audio Icon for First Image (Top-Left corner) */}
                <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/90 border border-stone-300/90 text-black shadow-2xs flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform">
                  <Volume2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black stroke-[2.2]" />
                </div>

                {!isCompositeImgLoaded && (
                  <>
                    <div className="w-full flex-1 flex items-center justify-center p-1">
                      <img
                        src={card.leftImg}
                        alt={card.leftName.prefix + card.leftName.highlight + card.leftName.suffix}
                        className="max-h-full max-w-full object-contain filter-none group-hover:scale-105 transition-transform duration-200 pointer-events-none"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="text-center font-black text-base sm:text-xl text-stone-900 tracking-wide mt-1">
                      <span>{card.leftName.prefix}</span>
                      <span className="text-pink-600 font-extrabold px-0.5">{card.leftName.highlight}</span>
                      <span>{card.leftName.suffix}</span>
                    </div>
                  </>
                )}
              </button>

              {/* Center Letter Box (only shown if full card image is missing) */}
              {!isCompositeImgLoaded && (
                <div className="relative z-10 mx-2 shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-sky-400 text-indigo-950 font-black text-2xl sm:text-3xl shadow-xs flex items-center justify-center select-none">
                    {card.letter}
                  </div>
                </div>
              )}

              {/* Right Half Click Area (Second Image) with Audio Icon in Top-Right Corner */}
              <button
                type="button"
                onClick={() => playAudio(card.rightAudio)}
                className="relative z-10 w-1/2 h-full flex flex-col items-center justify-between py-1 cursor-pointer group outline-none focus:outline-none"
                title="ஒலி கேட்க"
              >
                {/* Small Audio Icon for Second Image (Top-Right corner) */}
                <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/90 border border-stone-300/90 text-black shadow-2xs flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform">
                  <Volume2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black stroke-[2.2]" />
                </div>

                {!isCompositeImgLoaded && (
                  <>
                    <div className="w-full flex-1 flex items-center justify-center p-1">
                      <img
                        src={card.rightImg}
                        alt={card.rightName.prefix + card.rightName.highlight + card.rightName.suffix}
                        className="max-h-full max-w-full object-contain filter-none group-hover:scale-105 transition-transform duration-200 pointer-events-none"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="text-center font-black text-base sm:text-xl text-stone-900 tracking-wide mt-1">
                      <span>{card.rightName.prefix}</span>
                      <span className="text-pink-600 font-extrabold px-0.5">{card.rightName.highlight}</span>
                      <span>{card.rightName.suffix}</span>
                    </div>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearnLettersGame;
