// src/components/TextbookCover.jsx
import React, { useState } from 'react';
import { Pencil, Plus } from 'lucide-react';

export function TextbookCover({ book, onClick, onEdit, language = 'eng' }) {
  const [imgError, setImgError] = useState(false);
  const hasCoverImage = Boolean(book.coverImage) && !imgError;

  const displayName = language === 'tam' 
    ? (book.nativeTitle || book.subject) 
    : book.subject;

  const romanTerm = book.termNum === 1 ? 'Term I' : book.termNum === 2 ? 'Term II' : book.termNum === 3 ? 'Term III' : (book.term || '');
  const termLabel = language === 'tam'
    ? (book.termTamil || (book.termNum === 1 ? 'பருவம் 1' : book.termNum === 2 ? 'பருவம் 2' : book.termNum === 3 ? 'பருவம் 3' : ''))
    : romanTerm;

  const titleWithTerm = termLabel ? `${displayName} - ${termLabel}` : displayName;

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className="group relative flex flex-col cursor-pointer select-none transition-all duration-300 transform hover:-translate-y-1.5 active:scale-95"
    >
      {/* Authentic Physical Book Shell (Apple Books / Kindle Style) */}
      <div className="relative aspect-[1/1.42] w-full rounded-r-[6px] rounded-l-[2px] overflow-hidden shadow-[2px_5px_15px_rgba(0,0,0,0.18),0_1px_3px_rgba(0,0,0,0.08)] group-hover:shadow-[3px_12px_26px_rgba(0,0,0,0.26)] transition-all duration-300 ring-1 ring-black/10 bg-slate-900">
        
        {/* Upper Right Corner Edit Icon: White Primary, Black Secondary (Admin only) */}
        {onEdit && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(book);
            }}
            className="absolute top-1.5 right-1.5 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-white text-black hover:bg-slate-100 shadow-md border border-slate-300 transition-all hover:scale-110 active:scale-90 cursor-pointer"
            title="Edit Book"
            aria-label="Edit Book"
          >
            <Pencil className="h-3 w-3 stroke-[2.5] text-black" />
          </button>
        )}

        {/* Book Cover Image */}
        {hasCoverImage ? (
          <img 
            src={book.coverImage} 
            alt={displayName} 
            onError={() => setImgError(true)}
            className="w-full h-full object-fill select-none block"
            loading="eager"
          />
        ) : (
          /* Clean Minimalist Illustrated Cover - Subject Name and Term in Single Line */
          <div className={`absolute inset-0 bg-gradient-to-b ${book.themeColor || 'from-slate-700 to-slate-900'} flex items-center justify-center p-2 text-white select-none`}>
            <div className="w-full text-center px-1">
              <h3 className="font-black text-[10px] sm:text-[11px] text-white drop-shadow-md leading-snug truncate tracking-tight">
                {titleWithTerm}
              </h3>
            </div>
          </div>
        )}

        {/* Realistic Book Spine Hinge & Binding Shadow (Over the cover) */}
        <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-gradient-to-r from-black/40 via-black/15 to-transparent pointer-events-none z-10" />
        <div className="absolute left-[3px] top-0 bottom-0 w-[1px] bg-white/30 pointer-events-none z-10" />
        <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-black/20 pointer-events-none z-10" />
        
        {/* Subtle glossy sheen reflection across the laminated cover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10" />
      </div>

      {/* Book Title Underneath - Subject Name with Term in Single Line */}
      <div className="mt-2 text-center px-0.5">
        <h4 className="text-[10px] sm:text-[11.5px] font-bold text-slate-800 group-hover:text-slate-900 transition-colors leading-tight truncate">
          {titleWithTerm}
        </h4>
      </div>
    </div>
  );
}

{/* Book Design for "Add Book" near last book: White Primary, Black Secondary */}
export function AddBookCover({ onClick, language = 'eng' }) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className="group relative flex flex-col cursor-pointer select-none transition-all duration-300 transform hover:-translate-y-1.5 active:scale-95"
    >
      {/* Authentic Physical Book Shell (White Primary, Black Secondary) */}
      <div className="relative aspect-[1/1.42] w-full rounded-r-[6px] rounded-l-[2px] overflow-hidden shadow-[2px_5px_15px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.06)] group-hover:shadow-[3px_12px_26px_rgba(0,0,0,0.2)] transition-all duration-300 ring-1 ring-slate-200 border-2 border-dashed border-slate-300 bg-gradient-to-b from-white via-slate-50 to-slate-100 flex flex-col items-center justify-center p-2 text-center">
        
        {/* Realistic Book Spine Hinge & Binding Shadow */}
        <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-gradient-to-r from-black/15 via-black/5 to-transparent pointer-events-none z-10" />
        <div className="absolute left-[3px] top-0 bottom-0 w-[1px] bg-slate-300 pointer-events-none z-10" />
        <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-black/10 pointer-events-none z-10" />
        
        {/* Glossy sheen reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-white/60 pointer-events-none z-10" />

        {/* Center Content: White primary, Black secondary */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-1.5 group-hover:scale-105 transition-transform duration-200">
          <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-black text-white flex items-center justify-center shadow-md transition-all group-hover:bg-slate-800">
            <Plus className="h-4 w-4 sm:h-5 sm:w-5 stroke-[3]" />
          </div>
          <span className="text-[10px] sm:text-[11px] font-black text-slate-900 tracking-tight leading-tight pt-0.5">
            Add Book
          </span>
          <span className="text-[8.5px] font-bold text-slate-500 leading-none">
            {language === 'tam' ? 'புதிய புத்தகம்' : 'New Book'}
          </span>
        </div>
      </div>

      {/* Book Title Underneath */}
      <div className="mt-2 text-center px-0.5">
        <h4 className="text-[10px] sm:text-[11.5px] font-black text-slate-800 group-hover:text-black transition-colors leading-tight truncate">
          + {language === 'tam' ? 'புத்தகம் சேர்க்க' : 'Add Book'}
        </h4>
      </div>
    </div>
  );
}
