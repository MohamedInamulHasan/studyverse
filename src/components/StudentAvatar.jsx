// src/components/StudentAvatar.jsx
import React from 'react';

export function StudentAvatar({ type, className = "w-24 h-40" }) {
  switch (type) {
    // CLASS 12: Senior Boy in Black Sweater with Brown Elbow Patches (Exact match to reference)
    case 'boy-black-shirt':
      return (
        <svg viewBox="0 0 100 125" className={`${className} overflow-visible drop-shadow-md`}>
          {/* Hair with quiff */}
          <path d="M38 10 Q50 4 62 12 Q70 18 68 30 Q60 20 50 20 Q40 20 36 28 Q32 18 38 10 Z" fill="#5A3825" />
          <path d="M35 16 Q40 6 48 8 Q58 4 65 14 L65 23 Q58 16 48 18 Q40 18 35 23 Z" fill="#422514" />
          {/* Ears */}
          <circle cx="34" cy="38" r="4.5" fill="#FCD5B5" />
          <circle cx="66" cy="38" r="4.5" fill="#FCD5B5" />
          {/* Long Face */}
          <rect x="37" y="22" width="26" height="34" rx="10" fill="#FCD5B5" />
          {/* Eyes */}
          <ellipse cx="44" cy="34" rx="1.8" ry="2.2" fill="#1E293B" />
          <ellipse cx="56" cy="34" rx="1.8" ry="2.2" fill="#1E293B" />
          {/* Eyebrows */}
          <line x1="41" y1="29" x2="47" y2="29" stroke="#422514" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="53" y1="29" x2="59" y2="29" stroke="#422514" strokeWidth="1.8" strokeLinecap="round" />
          {/* Nose */}
          <line x1="50" y1="35" x2="50" y2="41" stroke="#E3B396" strokeWidth="1.5" strokeLinecap="round" />
          {/* Cheerful Tooth Smile */}
          <path d="M43 45 Q50 52 57 45 Z" fill="#EA580C" />
          <path d="M44 45.2 Q50 47.5 56 45.2 L56 46.8 Q50 48.8 44 46.8 Z" fill="#FFFFFF" />
          <line x1="42" y1="45" x2="58" y2="45" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />
          {/* Stubble tone */}
          <rect x="42" y="48" width="16" height="6" rx="2.5" fill="#EFCBB0" opacity="0.6" />
          {/* Neck */}
          <rect x="46" y="54" width="8" height="10" fill="#FCD5B5" />
          {/* White T-shirt collar */}
          <polygon points="43,62 57,62 50,70" fill="#FFFFFF" />
          {/* Black Body Shirt */}
          <path d="M26 64 C34 58 66 58 74 64 L78 116 L22 116 Z" fill="#252427" />
          {/* Brown Elbow Patches */}
          <ellipse cx="28" cy="84" rx="3.5" ry="6.5" fill="#8C5E3C" />
          <ellipse cx="72" cy="84" rx="3.5" ry="6.5" fill="#8C5E3C" />
          {/* Belt */}
          <rect x="30" y="112" width="40" height="3" fill="#18181B" />
          <rect x="47" y="111" width="6" height="5" rx="1" fill="#94A3B8" />
          {/* Hands extending out at bottom */}
          <path d="M22 101 C22 99 28 99 28 101 L28 114 C28 118 25 119 23 118 C22 117 22 115 22 114 Z" fill="#FCD5B5" />
          <circle cx="25" cy="115" r="3.5" fill="#FCD5B5" />
          <path d="M72 101 C72 99 78 99 78 101 L78 114 C78 118 75 119 73 118 C72 117 72 115 72 114 Z" fill="#FCD5B5" />
          <circle cx="75" cy="115" r="3.5" fill="#FCD5B5" />
        </svg>
      );

    // CLASS 11: Senior Medical / Science Student
    case 'girl-doctor':
      return (
        <svg viewBox="0 0 100 125" className={`${className} overflow-visible drop-shadow-md`}>
          {/* Hair */}
          <path d="M30 20 Q50 10 70 20 C76 34 76 52 74 60 C70 48 68 40 66 32 C60 24 40 24 34 32 C32 40 30 48 26 60 C24 52 24 34 30 20 Z" fill="#292D32" />
          {/* Ears */}
          <circle cx="34" cy="38" r="4.5" fill="#FCD5B5" />
          <circle cx="66" cy="38" r="4.5" fill="#FCD5B5" />
          {/* Face */}
          <rect x="37" y="24" width="26" height="30" rx="10" fill="#FCD5B5" />
          {/* Eyes */}
          <ellipse cx="44" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          <ellipse cx="56" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          {/* Cheerful Smile with Teeth */}
          <path d="M43 45 Q50 52 57 45 Z" fill="#EA580C" />
          <path d="M44 45.2 Q50 47.5 56 45.2 L56 46.8 Q50 48.8 44 46.8 Z" fill="#FFFFFF" />
          <line x1="43" y1="45" x2="57" y2="45" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />
          {/* Neck */}
          <rect x="46" y="52" width="8" height="9" fill="#FCD5B5" />
          {/* Scrubs */}
          <path d="M26 62 C34 57 66 57 74 62 L78 116 L22 116 Z" fill="#D3D8DE" />
          {/* Stethoscope */}
          <path d="M40 68 Q40 85 48 88 L48 95" stroke="#475569" strokeWidth="2.5" fill="none" />
          <circle cx="48" cy="97" r="3.5" fill="#94A3B8" />
          {/* Watch */}
          <rect x="22" y="100" width="8" height="3" fill="#1E293B" />
          {/* Hands */}
          <path d="M22 101 C22 99 28 99 28 101 L28 114 C28 118 25 119 23 118 C22 117 22 115 22 114 Z" fill="#FCD5B5" />
          <circle cx="25" cy="115" r="3.5" fill="#FCD5B5" />
          <path d="M72 101 C72 99 78 99 78 101 L78 114 C78 118 75 119 73 118 C72 117 72 115 72 114 Z" fill="#FCD5B5" />
          <circle cx="75" cy="115" r="3.5" fill="#FCD5B5" />
        </svg>
      );

    // CLASS 10: High School Girl in Black Hoodie
    case 'girl-hoodie':
      return (
        <svg viewBox="0 0 100 125" className={`${className} overflow-visible drop-shadow-md`}>
          {/* Hair */}
          <path d="M30 18 Q50 8 70 18 C76 30 76 52 74 60 C70 48 68 40 66 32 C60 24 40 24 34 32 C32 40 30 48 26 60 C24 52 24 34 30 18 Z" fill="#3B2314" />
          {/* Ears */}
          <circle cx="34" cy="38" r="4.5" fill="#FCD5B5" />
          <circle cx="66" cy="38" r="4.5" fill="#FCD5B5" />
          {/* Face */}
          <rect x="37" y="24" width="26" height="30" rx="10" fill="#FCD5B5" />
          {/* Eyes */}
          <ellipse cx="44" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          <ellipse cx="56" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          {/* Cheerful Smile with Teeth */}
          <path d="M43 45 Q50 52 57 45 Z" fill="#EA580C" />
          <path d="M44 45.2 Q50 47.5 56 45.2 L56 46.8 Q50 48.8 44 46.8 Z" fill="#FFFFFF" />
          <line x1="43" y1="45" x2="57" y2="45" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />
          {/* Neck */}
          <rect x="46" y="52" width="8" height="9" fill="#FCD5B5" />
          {/* Black Hoodie */}
          <path d="M26 62 C34 57 66 57 74 62 L78 116 L22 116 Z" fill="#18181B" />
          {/* Hoodie drawstrings */}
          <line x1="46" y1="64" x2="46" y2="76" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="54" y1="64" x2="54" y2="76" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          {/* Hands */}
          <path d="M22 101 C22 99 28 99 28 101 L28 114 C28 118 25 119 23 118 C22 117 22 115 22 114 Z" fill="#FCD5B5" />
          <circle cx="25" cy="115" r="3.5" fill="#FCD5B5" />
          <path d="M72 101 C72 99 78 99 78 101 L78 114 C78 118 75 119 73 118 C72 117 72 115 72 114 Z" fill="#FCD5B5" />
          <circle cx="75" cy="115" r="3.5" fill="#FCD5B5" />
        </svg>
      );

    // CLASS 9: Boy in Formal Suit & Tie
    case 'boy-suit':
      return (
        <svg viewBox="0 0 100 125" className={`${className} overflow-visible drop-shadow-md`}>
          {/* Hair */}
          <path d="M35 18 Q50 8 65 18 C70 26 68 34 66 36 C60 26 40 26 34 36 C32 34 30 26 35 18 Z" fill="#F59E0B" />
          {/* Ears */}
          <circle cx="34" cy="38" r="4.5" fill="#FCD5B5" />
          <circle cx="66" cy="38" r="4.5" fill="#FCD5B5" />
          {/* Face */}
          <rect x="37" y="24" width="26" height="30" rx="10" fill="#FCD5B5" />
          {/* Eyes */}
          <ellipse cx="44" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          <ellipse cx="56" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          {/* Cheerful Smile with Teeth */}
          <path d="M43 45 Q50 52 57 45 Z" fill="#EA580C" />
          <path d="M44 45.2 Q50 47.5 56 45.2 L56 46.8 Q50 48.8 44 46.8 Z" fill="#FFFFFF" />
          <line x1="43" y1="45" x2="57" y2="45" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />
          {/* Neck */}
          <rect x="46" y="52" width="8" height="9" fill="#FCD5B5" />
          {/* Suit Jacket */}
          <path d="M26 62 C34 57 66 57 74 62 L78 116 L22 116 Z" fill="#1E293B" />
          {/* White Shirt Collar */}
          <polygon points="46,60 54,60 50,72" fill="#FFFFFF" />
          {/* Tie */}
          <polygon points="49,63 51,63 52,78 50,82 48,78" fill="#0F172A" />
          {/* Hands */}
          <path d="M22 101 C22 99 28 99 28 101 L28 114 C28 118 25 119 23 118 C22 117 22 115 22 114 Z" fill="#FCD5B5" />
          <circle cx="25" cy="115" r="3.5" fill="#FCD5B5" />
          <path d="M72 101 C72 99 78 99 78 101 L78 114 C78 118 75 119 73 118 C72 117 72 115 72 114 Z" fill="#FCD5B5" />
          <circle cx="75" cy="115" r="3.5" fill="#FCD5B5" />
        </svg>
      );

    // CLASS 8: Girl in Red Scoop Dress with Wavy Hair
    case 'girl-red-dress':
      return (
        <svg viewBox="0 0 100 125" className={`${className} overflow-visible drop-shadow-md`}>
          {/* Long brown hair */}
          <path d="M30 18 Q50 8 70 18 C78 30 82 55 80 85 C75 75 72 50 68 34 C60 25 40 25 32 34 C28 50 25 75 20 85 C18 55 22 30 30 18 Z" fill="#4A2810" />
          {/* Ears */}
          <circle cx="34" cy="38" r="4.5" fill="#FCD5B5" />
          <circle cx="66" cy="38" r="4.5" fill="#FCD5B5" />
          {/* Face */}
          <rect x="37" y="24" width="26" height="30" rx="10" fill="#FCD5B5" />
          {/* Eyes */}
          <ellipse cx="44" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          <ellipse cx="56" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          {/* Cheerful Smile with Teeth */}
          <path d="M43 45 Q50 52 57 45 Z" fill="#EA580C" />
          <path d="M44 45.2 Q50 47.5 56 45.2 L56 46.8 Q50 48.8 44 46.8 Z" fill="#FFFFFF" />
          <line x1="43" y1="45" x2="57" y2="45" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />
          {/* Neck */}
          <rect x="46" y="52" width="8" height="9" fill="#FCD5B5" />
          {/* Red Dress */}
          <path d="M26 62 C34 57 66 57 74 62 L78 116 L22 116 Z" fill="#EA384D" />
          {/* Watch on wrist */}
          <rect x="22" y="98" width="7" height="3" fill="#1E293B" />
          {/* Hands */}
          <path d="M22 101 C22 99 28 99 28 101 L28 114 C28 118 25 119 23 118 C22 117 22 115 22 114 Z" fill="#FCD5B5" />
          <circle cx="25" cy="115" r="3.5" fill="#FCD5B5" />
          <path d="M72 101 C72 99 78 99 78 101 L78 114 C78 118 75 119 73 118 C72 117 72 115 72 114 Z" fill="#FCD5B5" />
          <circle cx="75" cy="115" r="3.5" fill="#FCD5B5" />
        </svg>
      );

    // CLASS 7: Boy in Brown Sweater with Spiky Hair
    case 'boy-brown-shirt':
      return (
        <svg viewBox="0 0 100 125" className={`${className} overflow-visible drop-shadow-md`}>
          {/* Spiky brown hair */}
          <path d="M35 18 L38 8 L44 14 L50 6 L56 14 L62 8 L65 18 C70 24 68 32 66 36 C60 26 40 26 34 36 C32 32 30 24 35 18 Z" fill="#66462C" />
          {/* Ears */}
          <circle cx="34" cy="38" r="4.5" fill="#FCD5B5" />
          <circle cx="66" cy="38" r="4.5" fill="#FCD5B5" />
          {/* Face */}
          <rect x="37" y="24" width="26" height="30" rx="10" fill="#FCD5B5" />
          {/* Eyes */}
          <ellipse cx="44" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          <ellipse cx="56" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          {/* Cheerful Smile with Teeth */}
          <path d="M43 45 Q50 52 57 45 Z" fill="#EA580C" />
          <path d="M44 45.2 Q50 47.5 56 45.2 L56 46.8 Q50 48.8 44 46.8 Z" fill="#FFFFFF" />
          <line x1="43" y1="45" x2="57" y2="45" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />
          {/* Neck */}
          <rect x="46" y="52" width="8" height="9" fill="#FCD5B5" />
          {/* Brown / Olive Shirt */}
          <path d="M26 62 C34 57 66 57 74 62 L78 116 L22 116 Z" fill="#8C7A6B" />
          {/* Hands */}
          <path d="M22 101 C22 99 28 99 28 101 L28 114 C28 118 25 119 23 118 C22 117 22 115 22 114 Z" fill="#FCD5B5" />
          <circle cx="25" cy="115" r="3.5" fill="#FCD5B5" />
          <path d="M72 101 C72 99 78 99 78 101 L78 114 C78 118 75 119 73 118 C72 117 72 115 72 114 Z" fill="#FCD5B5" />
          <circle cx="75" cy="115" r="3.5" fill="#FCD5B5" />
        </svg>
      );

    // CLASS 6: Girl with Afro Curls & Green T-Shirt
    case 'girl-curly-hair':
      return (
        <svg viewBox="0 0 100 125" className={`${className} overflow-visible drop-shadow-md`}>
          {/* Curly dark hair */}
          <circle cx="34" cy="22" r="8" fill="#2E241E" />
          <circle cx="44" cy="14" r="8" fill="#2E241E" />
          <circle cx="56" cy="14" r="8" fill="#2E241E" />
          <circle cx="66" cy="22" r="8" fill="#2E241E" />
          <circle cx="70" cy="34" r="8" fill="#2E241E" />
          <circle cx="30" cy="34" r="8" fill="#2E241E" />
          {/* Blue hair clip */}
          <rect x="37" y="16" width="6" height="3" rx="1.5" fill="#38BDF8" />
          {/* Face */}
          <rect x="37" y="24" width="26" height="30" rx="10" fill="#E0A97E" />
          {/* Eyes */}
          <ellipse cx="44" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          <ellipse cx="56" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          {/* Cheerful Smile with Teeth */}
          <path d="M43 45 Q50 52 57 45 Z" fill="#EA580C" />
          <path d="M44 45.2 Q50 47.5 56 45.2 L56 46.8 Q50 48.8 44 46.8 Z" fill="#FFFFFF" />
          <line x1="43" y1="45" x2="57" y2="45" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />
          {/* Neck */}
          <rect x="46" y="52" width="8" height="9" fill="#E0A97E" />
          {/* Green Shirt */}
          <path d="M26 62 C34 57 66 57 74 62 L78 116 L22 116 Z" fill="#10B981" />
          {/* Hands */}
          <path d="M22 101 C22 99 28 99 28 101 L28 114 C28 118 25 119 23 118 C22 117 22 115 22 114 Z" fill="#E0A97E" />
          <circle cx="25" cy="115" r="3.5" fill="#E0A97E" />
          <path d="M72 101 C72 99 78 99 78 101 L78 114 C78 118 75 119 73 118 C72 117 72 115 72 114 Z" fill="#E0A97E" />
          <circle cx="75" cy="115" r="3.5" fill="#E0A97E" />
        </svg>
      );

    // CLASS 5: Blonde Girl with Purple Sweater
    case 'girl-blonde':
      return (
        <svg viewBox="0 0 100 125" className={`${className} overflow-visible drop-shadow-md`}>
          {/* Blonde Hair */}
          <path d="M32 18 Q50 8 68 18 C74 26 76 44 74 54 C70 42 66 32 64 26 C58 20 42 20 36 26 C34 32 30 42 26 54 C24 44 26 26 32 18 Z" fill="#F6C85F" />
          {/* Ears */}
          <circle cx="34" cy="38" r="4.5" fill="#FCD5B5" />
          <circle cx="66" cy="38" r="4.5" fill="#FCD5B5" />
          {/* Face */}
          <rect x="37" y="24" width="26" height="30" rx="10" fill="#FCD5B5" />
          {/* Eyes */}
          <ellipse cx="44" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          <ellipse cx="56" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          {/* Cheerful Smile with Teeth */}
          <path d="M43 45 Q50 52 57 45 Z" fill="#EA580C" />
          <path d="M44 45.2 Q50 47.5 56 45.2 L56 46.8 Q50 48.8 44 46.8 Z" fill="#FFFFFF" />
          <line x1="43" y1="45" x2="57" y2="45" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />
          {/* Neck */}
          <rect x="46" y="52" width="8" height="9" fill="#FCD5B5" />
          {/* Purple Shirt */}
          <path d="M26 62 C34 57 66 57 74 62 L78 116 L22 116 Z" fill="#6D28D9" />
          {/* White inner collar */}
          <polygon points="46,60 54,60 50,68" fill="#FFFFFF" />
          {/* Hands */}
          <path d="M22 101 C22 99 28 99 28 101 L28 114 C28 118 25 119 23 118 C22 117 22 115 22 114 Z" fill="#FCD5B5" />
          <circle cx="25" cy="115" r="3.5" fill="#FCD5B5" />
          <path d="M72 101 C72 99 78 99 78 101 L78 114 C78 118 75 119 73 118 C72 117 72 115 72 114 Z" fill="#FCD5B5" />
          <circle cx="75" cy="115" r="3.5" fill="#FCD5B5" />
        </svg>
      );

    // CLASS 4: Boy in Bright Orange Shirt with Brown Quiff (Seamless Card Attachment)
    case 'boy-orange-shirt':
      return (
        <svg viewBox="0 0 100 125" className={`${className} overflow-visible drop-shadow-md`}>
          {/* Hair */}
          <path d="M36 14 Q50 6 64 14 Q70 22 66 32 C60 22 40 22 34 32 Q30 22 36 14 Z" fill="#5A3825" />
          {/* Ears */}
          <circle cx="34" cy="38" r="4.5" fill="#FCD5B5" />
          <circle cx="66" cy="38" r="4.5" fill="#FCD5B5" />
          {/* Face */}
          <rect x="37" y="24" width="26" height="30" rx="10" fill="#FCD5B5" />
          {/* Eyes */}
          <ellipse cx="44" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          <ellipse cx="56" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          {/* Smile with Teeth */}
          <path d="M43 45 Q50 52 57 45 Z" fill="#EA580C" />
          <path d="M44 45.2 Q50 47.5 56 45.2 L56 46.8 Q50 48.8 44 46.8 Z" fill="#FFFFFF" />
          <line x1="43" y1="45" x2="57" y2="45" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />
          {/* Neck */}
          <rect x="46" y="52" width="8" height="9" fill="#FCD5B5" />
          {/* Orange Shirt attached to bottom and sides */}
          <path d="M26 62 C34 57 66 57 74 62 L78 116 L22 116 Z" fill="#F97316" />
          {/* V-Neck detail */}
          <polygon points="45,61 55,61 50,71" fill="#EA580C" />
          <polygon points="46,61 54,61 50,68" fill="#FCD5B5" />
          {/* Hands extending out at bottom */}
          <path d="M22 101 C22 99 28 99 28 101 L28 114 C28 118 25 119 23 118 C22 117 22 115 22 114 Z" fill="#FCD5B5" />
          <circle cx="25" cy="115" r="3.5" fill="#FCD5B5" />
          <path d="M72 101 C72 99 78 99 78 101 L78 114 C78 118 75 119 73 118 C72 117 72 115 72 114 Z" fill="#FCD5B5" />
          <circle cx="75" cy="115" r="3.5" fill="#FCD5B5" />
        </svg>
      );

    // CLASS 3: Girl with Cute Buns & Yellow Top
    case 'girl-yellow-top':
      return (
        <svg viewBox="0 0 100 125" className={`${className} overflow-visible drop-shadow-md`}>
          {/* Double Buns */}
          <circle cx="28" cy="20" r="7" fill="#6B3A1C" />
          <circle cx="72" cy="20" r="7" fill="#6B3A1C" />
          {/* Hair base */}
          <path d="M32 18 Q50 12 68 18 C74 26 74 40 70 46 C64 26 36 26 30 46 C26 40 26 26 32 18 Z" fill="#6B3A1C" />
          {/* Ears */}
          <circle cx="34" cy="38" r="4.5" fill="#FCD5B5" />
          <circle cx="66" cy="38" r="4.5" fill="#FCD5B5" />
          {/* Face */}
          <rect x="37" y="24" width="26" height="30" rx="10" fill="#FCD5B5" />
          {/* Eyes */}
          <ellipse cx="44" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          <ellipse cx="56" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          {/* Smile with Teeth */}
          <path d="M43 45 Q50 52 57 45 Z" fill="#EA580C" />
          <path d="M44 45.2 Q50 47.5 56 45.2 L56 46.8 Q50 48.8 44 46.8 Z" fill="#FFFFFF" />
          <line x1="43" y1="45" x2="57" y2="45" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />
          {/* Neck */}
          <rect x="46" y="52" width="8" height="9" fill="#FCD5B5" />
          {/* Yellow Top */}
          <path d="M26 62 C34 57 66 57 74 62 L78 116 L22 116 Z" fill="#EAB308" />
          {/* White Peter Pan Collar */}
          <path d="M43 62 Q47 68 50 64 Q53 68 57 62 Z" fill="#FFFFFF" />
          {/* Hands */}
          <path d="M22 101 C22 99 28 99 28 101 L28 114 C28 118 25 119 23 118 C22 117 22 115 22 114 Z" fill="#FCD5B5" />
          <circle cx="25" cy="115" r="3.5" fill="#FCD5B5" />
          <path d="M72 101 C72 99 78 99 78 101 L78 114 C78 118 75 119 73 118 C72 117 72 115 72 114 Z" fill="#FCD5B5" />
          <circle cx="75" cy="115" r="3.5" fill="#FCD5B5" />
        </svg>
      );

    // CLASS 2: Young Boy in Sky Blue Polo Shirt
    case 'boy-blue-polo':
      return (
        <svg viewBox="0 0 100 125" className={`${className} overflow-visible drop-shadow-md`}>
          {/* Neat side-part hair */}
          <path d="M35 16 Q50 10 65 16 C69 22 68 30 66 34 C60 22 40 22 34 34 C32 30 31 22 35 16 Z" fill="#452715" />
          {/* Ears */}
          <circle cx="34" cy="38" r="4.5" fill="#FCD5B5" />
          <circle cx="66" cy="38" r="4.5" fill="#FCD5B5" />
          {/* Face */}
          <rect x="37" y="24" width="26" height="30" rx="10" fill="#FCD5B5" />
          {/* Eyes */}
          <ellipse cx="44" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          <ellipse cx="56" cy="35" rx="1.8" ry="2.2" fill="#1E293B" />
          {/* Smile with Teeth */}
          <path d="M43 45 Q50 52 57 45 Z" fill="#EA580C" />
          <path d="M44 45.2 Q50 47.5 56 45.2 L56 46.8 Q50 48.8 44 46.8 Z" fill="#FFFFFF" />
          <line x1="43" y1="45" x2="57" y2="45" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />
          {/* Neck */}
          <rect x="46" y="52" width="8" height="9" fill="#FCD5B5" />
          {/* Sky-Blue Polo Shirt */}
          <path d="M26 62 C34 57 66 57 74 62 L78 116 L22 116 Z" fill="#38BDF8" />
          {/* Polo Collar */}
          <polygon points="44,61 50,66 47,72 43,62" fill="#0284C7" />
          <polygon points="56,61 50,66 53,72 57,62" fill="#0284C7" />
          {/* Hands */}
          <path d="M22 101 C22 99 28 99 28 101 L28 114 C28 118 25 119 23 118 C22 117 22 115 22 114 Z" fill="#FCD5B5" />
          <circle cx="25" cy="115" r="3.5" fill="#FCD5B5" />
          <path d="M72 101 C72 99 78 99 78 101 L78 114 C78 118 75 119 73 118 C72 117 72 115 72 114 Z" fill="#FCD5B5" />
          <circle cx="75" cy="115" r="3.5" fill="#FCD5B5" />
        </svg>
      );

    // CLASS 1: Adorable 1st Grader with Backward Cap & Striped Shirt
    case 'kid-red-cap':
    default:
      return (
        <svg viewBox="0 0 100 125" className={`${className} overflow-visible drop-shadow-md`}>
          {/* Red Cap turned backward */}
          <path d="M33 16 Q50 6 67 16 C71 22 71 28 66 32 C60 22 40 22 34 32 C29 28 29 22 33 16 Z" fill="#EF4444" />
          <rect x="42" y="8" width="16" height="4" rx="2" fill="#B91C1C" />
          {/* Ears */}
          <circle cx="34" cy="38" r="4.5" fill="#FCD5B5" />
          <circle cx="66" cy="38" r="4.5" fill="#FCD5B5" />
          {/* Chubby Round Face */}
          <rect x="37" y="24" width="26" height="30" rx="10" fill="#FCD5B5" />
          {/* Big Sparkly Eyes */}
          <circle cx="44" cy="35" r="2.2" fill="#1E293B" />
          <circle cx="43" cy="34" r="0.8" fill="#FFFFFF" />
          <circle cx="56" cy="35" r="2.2" fill="#1E293B" />
          <circle cx="55" cy="34" r="0.8" fill="#FFFFFF" />
          {/* Wide Joyful Smile with Teeth */}
          <path d="M43 45 Q50 53 57 45 Z" fill="#EA580C" />
          <path d="M44 45.2 Q50 47.8 56 45.2 L56 46.8 Q50 48.8 44 46.8 Z" fill="#FFFFFF" />
          <line x1="43" y1="45" x2="57" y2="45" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />
          {/* Neck */}
          <rect x="46" y="52" width="8" height="9" fill="#FCD5B5" />
          {/* Striped Red/White T-Shirt */}
          <path d="M26 62 C34 57 66 57 74 62 L78 116 L22 116 Z" fill="#EF4444" />
          <path d="M24 74 L76 74 L75 80 L25 80 Z" fill="#FFFFFF" />
          <path d="M23 90 L77 90 L76 96 L24 96 Z" fill="#FFFFFF" />
          {/* Hands */}
          <path d="M22 101 C22 99 28 99 28 101 L28 114 C28 118 25 119 23 118 C22 117 22 115 22 114 Z" fill="#FCD5B5" />
          <circle cx="25" cy="115" r="3.5" fill="#FCD5B5" />
          <path d="M72 101 C72 99 78 99 78 101 L78 114 C78 118 75 119 73 118 C72 117 72 115 72 114 Z" fill="#FCD5B5" />
          <circle cx="75" cy="115" r="3.5" fill="#FCD5B5" />
        </svg>
      );
  }
}
