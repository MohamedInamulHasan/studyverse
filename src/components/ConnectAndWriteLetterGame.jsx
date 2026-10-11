// src/components/ConnectAndWriteLetterGame.jsx
import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const BASE = 'https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/inaippen_ezhuthuven/';

const ITEMS = [
  {
    id: 'katharikkai',
    number: 1,
    title: 'கத்தரிக்காய்',
    correctLetter: 'க',
    options: ['த', 'வ', 'க'],
    img: `${BASE}katharikkai.png`
  },
  {
    id: 'sangu',
    number: 2,
    title: 'சங்கு',
    correctLetter: 'ச',
    options: ['க', 'ச', 'ம'],
    img: `${BASE}sangu.png`
  },
  {
    id: 'malai',
    number: 3,
    title: 'மலை',
    correctLetter: 'ம',
    options: ['ல', 'ம', 'ந'],
    img: `${BASE}malai.png`
  },
  {
    id: 'vandu',
    number: 4,
    title: 'வண்டு',
    correctLetter: 'வ',
    options: ['வ', 'ல', 'ர'],
    img: `${BASE}vandu.png`
  },
  {
    id: 'thavalai',
    number: 5,
    title: 'தவளை',
    correctLetter: 'த',
    options: ['வ', 'ப', 'த'],
    img: `${BASE}thavalai.png`
  },
  {
    id: 'nari',
    number: 6,
    title: 'நரி',
    correctLetter: 'ந',
    options: ['ட', 'ந', 'ம'],
    img: `${BASE}nari.png`
  },
  {
    id: 'panthu',
    number: 7,
    title: 'பந்து',
    correctLetter: 'ப',
    options: ['ப', 'ழ', 'ய'],
    img: `${BASE}panthu.png`
  },
  {
    id: 'kappal',
    number: 8,
    title: 'கப்பல்',
    correctLetter: 'க',
    options: ['ள', 'க', 'ன'],
    img: `${BASE}kappal.png`
  }
];

export const ConnectAndWriteLetterGame = () => {
  // Map of itemId -> selected letter
  const [answers, setAnswers] = useState({});

  const handleSelectLetter = (itemId, letter) => {
    setAnswers(prev => ({
      ...prev,
      [itemId]: letter
    }));
  };

  const handleReset = () => {
    setAnswers({});
  };

  return (
    <div className="space-y-8 pb-14 select-none w-full max-w-lg sm:max-w-xl mx-auto px-3 sm:px-4">
      
      {/* ── 8 Cards: Exactly 2 Cards Per Row ── */}
      <div className="grid grid-cols-2 gap-x-7 gap-y-10 sm:gap-x-10 sm:gap-y-12">
        {ITEMS.map((item) => {
          const selectedLetter = answers[item.id];
          const isSelected = !!selectedLetter;
          const isCorrect = isSelected && selectedLetter === item.correctLetter;
          const isWrong = isSelected && selectedLetter !== item.correctLetter;

          return (
            <div key={item.id} className="relative">
              {/* Outer Squared Blue Card Box (1:1 Ratio) */}
              <div className="relative w-full aspect-square rounded-2xl bg-white border-2 border-sky-400 p-1.5 sm:p-2 flex items-center justify-center">
                
                {/* 1:1 Image inside (enlarged and shifted slightly left) */}
                <div className="w-full h-full flex items-center justify-start pl-1 pr-3 sm:pr-4 py-1">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain pointer-events-none -translate-x-1 sm:-translate-x-1.5 scale-105 sm:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Answer Box Container: Centered on the Right Side Line */}
                <div className="absolute -right-4 sm:-right-5 top-1/2 -translate-y-1/2 z-20">
                  {/* Answer Box: Always Rose/Pink Border, Solid White Background */}
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-2 border-pink-500 bg-white flex items-center justify-center transition-all shadow-xs">
                    <span className="font-black text-lg sm:text-xl leading-none text-pink-600 transition-all select-none">
                      {isSelected ? selectedLetter : ''}
                    </span>

                    {/* Answer Box Upper Right Corner: Topic 4 Green Tick (When Correct) */}
                    {isCorrect && (
                      <div className="absolute -top-3 -right-3 sm:-top-3.5 sm:-right-3.5 z-30 anim-pop-in pointer-events-none">
                        <svg viewBox="0 0 100 100" className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-xs">
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
                            stroke="#15803d"
                            strokeWidth="17"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}

                    {/* Answer Box Upper Right Corner: Topic 4 Red X (When Wrong) */}
                    {isWrong && (
                      <div className="absolute -top-3 -right-3 sm:-top-3.5 sm:-right-3.5 z-30 anim-pop-in pointer-events-none">
                        <svg viewBox="0 0 100 100" className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-xs">
                          <path
                            d="M 28 28 L 72 72 M 72 28 L 28 72"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M 28 28 L 72 72 M 72 28 L 28 72"
                            fill="none"
                            stroke="#dc2626"
                            strokeWidth="17"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom: 3 Circular Letter Badges Centered on the Bottom Line */}
                <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-1.5 sm:gap-2">
                  {item.options.map((letter, optIdx) => {
                    const isCurrentChoice = selectedLetter === letter;

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handleSelectLetter(item.id, letter)}
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 bg-white flex items-center justify-center font-black text-sm sm:text-base transition-all cursor-pointer ${
                          isCurrentChoice
                            ? letter === item.correctLetter
                              ? 'border-[#15803d] text-[#15803d]'
                              : 'border-red-500 text-red-500'
                            : 'border-amber-400 text-slate-900 hover:border-amber-500'
                        }`}
                        title={`${letter} எழுத்தைத் தேர்ந்தெடுக்க`}
                      >
                        {letter}
                      </button>
                    );
                  })}
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* ── Global Retry Button ── */}
      <div className="flex justify-center pt-4">
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-700 border-b-[3.5px] border-b-emerald-900 shadow-xs active:translate-y-[2px] active:border-b-[1.5px] transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>மீண்டும் செய்</span>
        </button>
      </div>

    </div>
  );
};

export default ConnectAndWriteLetterGame;
