// src/components/FillInBlanksLetterGame.jsx
import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const BASE = 'https://res.cloudinary.com/qhsftimd/image/upload/f_auto,q_auto/studyverse/images/tamil_class1/nirappuven/';

const ALL_CARDS = [
  {
    id: 'card1',
    number: 1,
    items: [
      { id: 'c1_aamai', title: 'ஆமை', suffix: 'மை', correctLetter: 'ஆ', img: `${BASE}aamai.png` },
      { id: 'c1_appalam', title: 'அப்பளம்', suffix: 'ப்பளம்', correctLetter: 'அ', img: `${BASE}appalam.png` },
      { id: 'c1_aalamaram', title: 'ஆலமரம்', suffix: 'லமரம்', correctLetter: 'ஆ', img: `${BASE}aalamaram.png` },
      { id: 'c1_anil', title: 'அணில்', suffix: 'ணில்', correctLetter: 'அ', img: `${BASE}anil.png` },
    ],
    tiles: [
      { id: 'c1_t1', letter: 'ஆ' },
      { id: 'c1_t2', letter: 'அ' },
      { id: 'c1_t3', letter: 'ஆ' },
      { id: 'c1_t4', letter: 'அ' },
    ]
  },
  {
    id: 'card2',
    number: 2,
    items: [
      { id: 'c2_ilaneer', title: 'இளநீர்', suffix: 'ளநீர்', correctLetter: 'இ', img: `${BASE}ilaneer.png` },
      { id: 'c2_eecchamaram', title: 'ஈச்சமரம்', suffix: 'ச்சமரம்', correctLetter: 'ஈ', img: `${BASE}eecchamaram.png` },
      { id: 'c2_iragu', title: 'இறகு', suffix: 'றகு', correctLetter: 'இ', img: `${BASE}iragu.png` },
      { id: 'c2_eesal', title: 'ஈசல்', suffix: 'சல்', correctLetter: 'ஈ', img: `${BASE}eesal.png` },
    ],
    tiles: [
      { id: 'c2_t1', letter: 'இ' },
      { id: 'c2_t2', letter: 'ஈ' },
      { id: 'c2_t3', letter: 'இ' },
      { id: 'c2_t4', letter: 'ஈ' },
    ]
  },
  {
    id: 'card3',
    number: 3,
    items: [
      { id: 'c3_oothal', title: 'ஊதல்', suffix: 'தல்', correctLetter: 'ஊ', img: `${BASE}oothal.png` },
      { id: 'c3_oonjal', title: 'ஊஞ்சல்', suffix: 'ஞ்சல்', correctLetter: 'ஊ', img: `${BASE}oonjal.png` },
      { id: 'c3_undiyal', title: 'உண்டியல்', suffix: 'ண்டியல்', correctLetter: 'உ', img: `${BASE}undiyal.png` },
      { id: 'c3_urulaikkizhangu', title: 'உருளைக்கிழங்கு', suffix: 'ருளைக்கிழங்கு', correctLetter: 'உ', img: `${BASE}urulaikkizhangu.png` },
    ],
    tiles: [
      { id: 'c3_t1', letter: 'ஊ' },
      { id: 'c3_t2', letter: 'ஊ' },
      { id: 'c3_t3', letter: 'உ' },
      { id: 'c3_t4', letter: 'உ' },
    ]
  },
  {
    id: 'card4',
    number: 4,
    items: [
      { id: 'c4_eani', title: 'ஏணி', suffix: 'ணி', correctLetter: 'ஏ', img: `${BASE}eani.png` },
      { id: 'c4_eli', title: 'எலி', suffix: 'லி', correctLetter: 'எ', img: `${BASE}eli.png` },
      { id: 'c4_elakkai', title: 'ஏலக்காய்', suffix: 'லக்காய்', correctLetter: 'ஏ', img: `${BASE}elakkai.png` },
      { id: 'c4_erumbu', title: 'எறும்பு', suffix: 'றும்பபு', correctLetter: 'எ', img: `${BASE}erumbu.png` },
    ],
    tiles: [
      { id: 'c4_t1', letter: 'ஏ' },
      { id: 'c4_t2', letter: 'எ' },
      { id: 'c4_t3', letter: 'ஏ' },
      { id: 'c4_t4', letter: 'எ' },
    ]
  },
  {
    id: 'card5',
    number: 5,
    items: [
      { id: 'c5_aivar', title: 'ஐவர்', suffix: 'வர்', correctLetter: 'ஐ', img: `${BASE}aivar.png` },
      { id: 'c5_ainthu', title: 'ஐந்து', suffix: 'ந்து', correctLetter: 'ஐ', img: `${BASE}ainthu.png` },
      { id: 'c5_ottagam', title: 'ஒட்டகம்', suffix: 'ட்டகம்', correctLetter: 'ஒ', img: `${BASE}ottagam.png` },
      { id: 'c5_oliperukki', title: 'ஒலிபெருக்கி', suffix: 'லிபெருக்கி', correctLetter: 'ஒ', img: `${BASE}oliperukki.png` },
    ],
    tiles: [
      { id: 'c5_t1', letter: 'ஐ' },
      { id: 'c5_t2', letter: 'ஐ' },
      { id: 'c5_t3', letter: 'ஒ' },
      { id: 'c5_t4', letter: 'ஒ' },
    ]
  },
  {
    id: 'card6',
    number: 6,
    items: [
      { id: 'c6_onaan', title: 'ஓணான்', suffix: 'ணான்', correctLetter: 'ஓ', img: `${BASE}onaan.png` },
      { id: 'c6_onaai', title: 'ஓநாய்', suffix: 'நாய்', correctLetter: 'ஓ', img: `${BASE}onaai.png` },
      { id: 'c6_oudatham', title: 'ஔடதம்', suffix: 'டதம்', correctLetter: 'ஔ', img: `${BASE}oudatham.png` },
      { id: 'c6_ouvvai', title: 'ஔவை', suffix: 'வை', correctLetter: 'ஔ', img: `${BASE}ouvvai.png` },
    ],
    tiles: [
      { id: 'c6_t1', letter: 'ஓ' },
      { id: 'c6_t2', letter: 'ஓ' },
      { id: 'c6_t3', letter: 'ஔ' },
      { id: 'c6_t4', letter: 'ஔ' },
    ]
  }
];

export const FillInBlanksLetterGame = () => {
  // Map of itemId -> tileId placed in it
  const [placedTiles, setPlacedTiles] = useState({});
  // Selected tile for tap-to-place support: { cardId, tileId }
  const [selectedTile, setSelectedTile] = useState(null);
  // Track dragging tile: { cardId, tileId }
  const [draggedTile, setDraggedTile] = useState(null);
  // Hovered target itemId
  const [dragOverTarget, setDragOverTarget] = useState(null);

  // Check if tile is used
  const isTileUsed = (tileId) => {
    return Object.values(placedTiles).includes(tileId);
  };

  // Find tile by ID across all cards
  const findTileById = (tileId) => {
    for (const card of ALL_CARDS) {
      const found = card.tiles.find(t => t.id === tileId);
      if (found) return found;
    }
    return null;
  };

  // Find item by ID across all cards
  const findItemById = (itemId) => {
    for (const card of ALL_CARDS) {
      const found = card.items.find(i => i.id === itemId);
      if (found) return found;
    }
    return null;
  };

  // Place tile in item
  const placeTileInItem = (tileId, itemId) => {
    const tile = findTileById(tileId);
    const item = findItemById(itemId);
    if (!tile || !item) return;

    setPlacedTiles(prev => {
      const next = { ...prev };
      // If this tile was placed elsewhere, clear that slot
      Object.keys(next).forEach(k => {
        if (next[k] === tileId) delete next[k];
      });
      next[itemId] = tileId;
      return next;
    });

    setSelectedTile(null);
  };

  // Remove tile from item
  const handleRemoveTile = (itemId) => {
    setPlacedTiles(prev => {
      const next = { ...prev };
      delete next[itemId];
      return next;
    });
  };

  // Drag handlers
  const handleDragStart = (e, cardId, tileId) => {
    setDraggedTile({ cardId, tileId });
    e.dataTransfer.setData('text/plain', JSON.stringify({ cardId, tileId }));
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, itemId) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (dragOverTarget !== itemId) {
      setDragOverTarget(itemId);
    }
  };

  const handleDragLeave = () => {
    setDragOverTarget(null);
  };

  const handleDrop = (e, cardId, itemId) => {
    e.preventDefault();
    setDragOverTarget(null);
    let tileData = draggedTile;
    try {
      const raw = e.dataTransfer.getData('text/plain');
      if (raw) tileData = JSON.parse(raw);
    } catch {
      // fallback to draggedTile
    }

    if (tileData && tileData.cardId === cardId) {
      placeTileInItem(tileData.tileId, itemId);
    }
    setDraggedTile(null);
  };

  // Tile click handler
  const handleTileClick = (cardId, tileId) => {
    if (isTileUsed(tileId)) return;
    if (selectedTile && selectedTile.tileId === tileId) {
      setSelectedTile(null);
    } else {
      setSelectedTile({ cardId, tileId });
    }
  };

  // Slot click handler
  const handleSlotClick = (cardId, itemId) => {
    if (selectedTile) {
      if (selectedTile.cardId === cardId) {
        placeTileInItem(selectedTile.tileId, itemId);
      }
      return;
    }
    if (placedTiles[itemId]) {
      handleRemoveTile(itemId);
    }
  };

  // Reset all cards
  const handleReset = () => {
    setPlacedTiles({});
    setSelectedTile(null);
    setDraggedTile(null);
  };

  return (
    <div className="space-y-6 pb-12 select-none w-full max-w-md sm:max-w-lg mx-auto">
      {ALL_CARDS.map((card) => {
        const allCardTilesPlaced = card.tiles.every(t => isTileUsed(t.id));

        return (
          <div
            key={card.id}
            className="rounded-3xl bg-white border-2 border-black p-4 sm:p-5 space-y-4"
          >
            {/* Card Number (Topic 4 style) */}
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-black text-black">{card.number}.</span>
            </div>

            {/* 4 Images Grid: Exactly 2 Images Per Row */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 sm:gap-x-10 sm:gap-y-4">
              {card.items.map((item) => {
                const placedTileId = placedTiles[item.id];
                const placedTile = placedTileId ? findTileById(placedTileId) : null;
                const isPlaced = !!placedTile;
                const isCorrect = isPlaced && placedTile.letter === item.correctLetter;
                const isWrong = isPlaced && placedTile.letter !== item.correctLetter;
                const isDragOver = dragOverTarget === item.id;
                const isEeLetter = isPlaced && placedTile.letter === 'ஈ';

                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-between"
                  >
                    {/* Pure Flat Image Container (No Card Borders, No Shadow) */}
                    <div className="relative w-full aspect-square flex items-center justify-center p-2">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-contain pointer-events-none"
                        loading="lazy"
                      />

                      {/* When correct: Topic 4 Forest Green (#15803d) chunky tick mark */}
                      {isCorrect && (
                        <div
                          onClick={() => handleRemoveTile(item.id)}
                          className="absolute top-1 right-1 sm:top-2 sm:right-2 z-20 cursor-pointer transition-transform hover:scale-110 anim-pop-in"
                          title="சரியானது (நீக்க தொடவும்)"
                        >
                          <svg
                            viewBox="0 0 100 100"
                            className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-xs"
                          >
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

                      {/* When wrong: Topic 4 red X mark */}
                      {isWrong && (
                        <div
                          onClick={() => handleRemoveTile(item.id)}
                          className="absolute top-1 right-1 sm:top-2 sm:right-2 z-20 cursor-pointer transition-transform hover:scale-110 anim-pop-in"
                          title="தவறானது (நீக்க தொடவும்)"
                        >
                          <svg
                            viewBox="0 0 100 100"
                            className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-xs"
                          >
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

                    {/* Question: Letter (filled) + Underline + Suffix Text */}
                    <div
                      onClick={() => handleSlotClick(card.id, item.id)}
                      onDragOver={(e) => handleDragOver(e, item.id)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, card.id, item.id)}
                      className="flex items-end justify-center gap-1 sm:gap-1.5 cursor-pointer pt-1 pb-0.5 select-none"
                      title={isPlaced ? 'நீக்க தொடவும்' : 'எழுத்தை வைக்கவும்'}
                    >
                      {/* Blank & Underline */}
                      <div className="flex flex-col items-center justify-end w-5 sm:w-6 min-w-[18px] sm:min-w-[22px]">
                        <span className={`text-sm sm:text-base font-black leading-none mb-1 transition-all inline-block ${
                          isPlaced
                            ? isWrong
                              ? 'text-red-500'
                              : 'text-black'
                            : 'text-transparent select-none'
                        } ${isEeLetter ? 'translate-y-[3px]' : ''}`}>
                          {isPlaced ? placedTile.letter : 'இ'}
                        </span>
                        
                        {/* Underline: Forest Green (#15803d) when correct, Red when wrong, Slate when empty */}
                        <div className={`w-full rounded-full transition-all duration-200 ${
                          isWrong
                            ? 'bg-red-500 h-[2.5px]'
                            : isCorrect
                            ? 'bg-[#15803d] h-[2.5px]'
                            : isDragOver || (selectedTile && selectedTile.cardId === card.id && !isPlaced)
                            ? 'bg-slate-900 h-[2.5px]'
                            : 'bg-slate-800 h-[2px]'
                        }`} />
                      </div>

                      {/* Rest of the word text */}
                      <span className="text-sm sm:text-base font-black text-slate-900 tracking-wide leading-none pb-0.5">
                        {item.suffix}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Below the 4 images: 4 Answer Letters (Collapses when no letters remain) */}
            <div className={`transition-all duration-300 flex flex-col items-center ${
              allCardTilesPlaced
                ? 'h-0 pt-0 pb-0 opacity-0 overflow-hidden'
                : 'pt-2 pb-1'
            }`}>
              <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
                {card.tiles.map((tile) => {
                  const used = isTileUsed(tile.id);
                  const isSelected = selectedTile && selectedTile.tileId === tile.id;
                  const isEe = tile.letter === 'ஈ';

                  if (used) return null;

                  return (
                    <div
                      key={tile.id}
                      draggable={true}
                      onDragStart={(e) => handleDragStart(e, card.id, tile.id)}
                      onClick={() => handleTileClick(card.id, tile.id)}
                      className="flex flex-col items-center cursor-pointer group"
                      title="இழுத்துப் பொருத்தவும் / தொடவும்"
                    >
                      <span
                        className={`font-black text-lg sm:text-xl transition-all duration-150 select-none px-1.5 py-0.5 inline-block ${
                          isSelected
                            ? 'text-rose-500 scale-110'
                            : 'text-black hover:scale-105 active:scale-95 group-hover:text-rose-400'
                        } ${isEe ? 'translate-y-[2px]' : ''}`}
                      >
                        {tile.letter}
                      </span>
                      
                      {/* Rose color line under the letter when clicked */}
                      <div
                        className={`w-5 sm:w-6 h-[2.5px] rounded-full transition-all duration-150 mt-1 ${
                          isSelected
                            ? 'bg-rose-500 opacity-100 scale-100'
                            : 'bg-transparent opacity-0 scale-75'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        );
      })}

      {/* Global Retry Button */}
      <div className="flex justify-center pt-2">
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

export default FillInBlanksLetterGame;
