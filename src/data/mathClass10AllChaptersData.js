// src/data/mathClass10AllChaptersData.js
// Class 10 Mathematics - Master Chapter Solutions & Exercises
// Covers all Chapters:
// - Chapter 1: Relations and Functions
// - Chapter 2: Numbers and Sequences
// - Chapter 3: Algebra
// - Chapter 4: Geometry
// - Chapter 5: Coordinate Geometry
// - Chapter 6: Trigonometry
// - Chapter 7: Mensuration
// - Chapter 8: Statistics and Probability

import {
  MATH_CLASS10_CH1_EXAMPLES,
  MATH_CLASS10_CH1_PILLS,
  MATH_CLASS10_CH1_EXERCISE_1_1,
  MATH_CLASS10_CH1_EXERCISE_1_2,
  MATH_CLASS10_CH1_EXERCISE_1_3,
  MATH_CLASS10_CH1_EXERCISE_1_4,
  MATH_CLASS10_CH1_EXERCISE_1_5,
  MATH_CLASS10_CH1_EXERCISE_1_6,
  getMathClass10Chapter1Sums
} from './mathClass10Chapter1Data';

import {
  MATH_CLASS10_CH2_PILLS,
  MATH_CLASS10_CH2_EXAMPLES,
  getMathClass10Chapter2Sums
} from './mathClass10Chapter2Data';

import {
  MATH_CLASS10_CH3_PILLS,
  MATH_CLASS10_CH3_EXAMPLES,
  getMathClass10Chapter3Sums
} from './mathClass10Chapter3Data';

import {
  MATH_CLASS10_CH4_PILLS,
  MATH_CLASS10_CH4_EXAMPLES,
  getMathClass10Chapter4Sums
} from './mathClass10Chapter4Data';

import {
  MATH_CLASS10_CH5_PILLS,
  MATH_CLASS10_CH5_EXAMPLES,
  getMathClass10Chapter5Sums
} from './mathClass10Chapter5Data';

import {
  MATH_CLASS10_CH6_PILLS,
  MATH_CLASS10_CH6_EXAMPLES,
  getMathClass10Chapter6Sums
} from './mathClass10Chapter6Data';

import {
  MATH_CLASS10_CH7_PILLS,
  MATH_CLASS10_CH7_EXAMPLES,
  getMathClass10Chapter7Sums
} from './mathClass10Chapter7Data';

import {
  MATH_CLASS10_CH8_PILLS,
  MATH_CLASS10_CH8_EXAMPLES,
  getMathClass10Chapter8Sums
} from './mathClass10Chapter8Data';

// Re-export pills for all chapters
export {
  MATH_CLASS10_CH1_PILLS,
  MATH_CLASS10_CH2_PILLS,
  MATH_CLASS10_CH3_PILLS,
  MATH_CLASS10_CH4_PILLS,
  MATH_CLASS10_CH5_PILLS,
  MATH_CLASS10_CH6_PILLS,
  MATH_CLASS10_CH7_PILLS,
  MATH_CLASS10_CH8_PILLS
};

// =========================================================================
// MASTER DISPATCHER HELPERS FOR ALL CHAPTERS
// =========================================================================
export const getMathChapterPills = (chapterNum = 1) => {
  const cNum = Number(chapterNum) || 1;
  switch (cNum) {
    case 1: return MATH_CLASS10_CH1_PILLS;
    case 2: return MATH_CLASS10_CH2_PILLS;
    case 3: return MATH_CLASS10_CH3_PILLS;
    case 4: return MATH_CLASS10_CH4_PILLS;
    case 5: return MATH_CLASS10_CH5_PILLS;
    case 6: return MATH_CLASS10_CH6_PILLS;
    case 7: return MATH_CLASS10_CH7_PILLS;
    case 8: return MATH_CLASS10_CH8_PILLS;
    default: return MATH_CLASS10_CH1_PILLS;
  }
};

export const getMathChapterSums = (chapterNum = 1, tabId = 'examples') => {
  const cNum = Number(chapterNum) || 1;
  switch (cNum) {
    case 1:
      return getMathClass10Chapter1Sums(tabId);
    case 2:
      return getMathClass10Chapter2Sums(tabId);
    case 3:
      return getMathClass10Chapter3Sums(tabId);
    case 4:
      return getMathClass10Chapter4Sums(tabId);
    case 5:
      return getMathClass10Chapter5Sums(tabId);
    case 6:
      return getMathClass10Chapter6Sums(tabId);
    case 7:
      return getMathClass10Chapter7Sums(tabId);
    case 8:
      return getMathClass10Chapter8Sums(tabId);
    default:
      return getMathClass10Chapter1Sums(tabId);
  }
};
