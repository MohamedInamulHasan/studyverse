// src/data/mathClass10Chapter8Data.js
// Class 10 Mathematics - Chapter 8: Statistics and Probability
// Full textbook exercises (Ex 8.1 to Ex 8.5) and worked examples
// Decoded Given, Step-by-step intermediate equations, numbered equations badges

export const MATH_CLASS10_CH8_PILLS = [
  { id: 'examples', label: 'Examples' },
  { id: 'ex-8.1', label: 'Exercise 8.1' },
  { id: 'ex-8.2', label: 'Exercise 8.2' },
  { id: 'ex-8.3', label: 'Exercise 8.3' },
  { id: 'ex-8.4', label: 'Exercise 8.4' },
  { id: 'ex-8.5', label: 'Exercise 8.5' }
];

export const MATH_CLASS10_CH8_EXAMPLES = [
  {
    id: "ch8-eg-8.1",
    exampleNum: "Example 8.1",
    problem: "Find the range and coefficient of range of the following data: 25, 67, 48, 53, 18, 39, 44.",
    given: "Given data set: 25, 67, 48, 53, 18, 39, 44.",
    givenLines: [
      "Largest value L = 67",
      "Smallest value S = 18"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Range R = L - S = 67 - 18 = 49   ...(1)",
          "Coefficient of range = (L - S) / (L + S)",
          "= (67 - 18) / (67 + 18) = 49 / 85 ≈ 0.58   ...(2)",
          "Range is 49 and coefficient of range is 0.58."
        ]
      }
    ]
  },
  {
    id: "ch8-eg-8.17",
    exampleNum: "Example 8.17",
    problem: "A coin is tossed thrice. What is the probability of getting two consecutive tails?",
    given: "A coin is tossed three times.",
    givenLines: [
      "Sample space S = {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}",
      "Total outcomes n(S) = 8"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Let A be the event of getting two consecutive tails.",
          "Favourable outcomes A = {HTT, TTH, TTT}   ...(1)",
          "n(A) = 3",
          "P(A) = n(A) / n(S) = 3 / 8   ...(2)",
          "The probability of getting two consecutive tails is 3/8."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH8_EXERCISE_8_1 = [
  {
    id: "ex-8.1-q1",
    exampleNum: "Exercise 8.1 - Q1",
    problem: "Find the range and coefficient of range of the following data:\n(i) 63, 89, 98, 125, 79, 108, 117, 68\n(ii) 43.5, 13.6, 18.9, 38.4, 61.4, 29.8",
    given: "Given data arrays to find Range and Coefficient of Range.",
    givenLines: [
      "(i) L = 125, S = 63",
      "(ii) L = 61.4, S = 13.6"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "Sub-division (i)",
        lines: [
          "Range R = L - S = 125 - 63 = 62   ...(1)",
          "Coefficient of range = (L - S) / (L + S)",
          "= (125 - 63) / (125 + 63) = 62 / 188 ≈ 0.33   ...(2)",
          "Range = 62, Coefficient of range = 0.33."
        ]
      },
      {
        partNum: "2.",
        heading: "Sub-division (ii)",
        lines: [
          "Range R = L - S = 61.4 - 13.6 = 47.8   ...(1)",
          "Coefficient of range = (L - S) / (L + S)",
          "= (61.4 - 13.6) / (61.4 + 13.6) = 47.8 / 75 ≈ 0.64   ...(2)",
          "Range = 47.8, Coefficient of range = 0.64."
        ]
      }
    ]
  },
  {
    id: "ex-8.1-q2",
    exampleNum: "Exercise 8.1 - Q2",
    problem: "If the range and the smallest value of a set of data are 36.8 and 13.4 respectively, then find the largest value.",
    given: "Given: Range R = 36.8, Smallest value S = 13.4.",
    givenLines: [
      "Range R = 36.8",
      "Smallest value S = 13.4",
      "Let largest value be L"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Range R = L - S",
          "36.8 = L - 13.4   ...(1)",
          "L = 36.8 + 13.4 = 50.2   ...(2)",
          "The largest value is 50.2."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH8_EXERCISE_8_2 = [
  {
    id: "ex-8.2-q1",
    exampleNum: "Exercise 8.2 - Q1",
    problem: "The standard deviation and mean of a data are 6.5 and 12.5 respectively. Find the coefficient of variation.",
    given: "Given: Standard deviation σ = 6.5, Mean x̄ = 12.5.",
    givenLines: [
      "Standard deviation σ = 6.5",
      "Mean x̄ = 12.5"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Coefficient of Variation (C.V.) = (σ / x̄) × 100%",
          "C.V. = (6.5 / 12.5) × 100%   ...(1)",
          "C.V. = (65 / 125) × 100% = (13 / 25) × 100%",
          "C.V. = 13 × 4 = 52%   ...(2)",
          "The coefficient of variation is 52%."
        ]
      }
    ]
  },
  {
    id: "ex-8.2-q2",
    exampleNum: "Exercise 8.2 - Q2",
    problem: "The standard deviation and coefficient of variation of a data are 1.2 and 25.6 respectively. Find the value of mean.",
    given: "Given: σ = 1.2, C.V. = 25.6.",
    givenLines: [
      "σ = 1.2",
      "C.V. = 25.6"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "C.V. = (σ / x̄) × 100",
          "25.6 = (1.2 / x̄) × 100   ...(1)",
          "25.6 x̄ = 120",
          "x̄ = 120 / 25.6 = 1200 / 256 = 4.69   ...(2)",
          "The mean value is 4.69."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH8_EXERCISE_8_3 = [
  {
    id: "ex-8.3-q1",
    exampleNum: "Exercise 8.3 - Q1",
    problem: "Write the sample space for tossing three coins using tree diagram.",
    given: "Three coins are tossed simultaneously.",
    givenLines: [
      "Each coin has two outcomes: H or T",
      "Total outcomes = 2³ = 8"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Sample Space S = {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}   ...(1)",
          "n(S) = 8   ...(2)"
        ]
      }
    ]
  },
  {
    id: "ex-8.3-q2",
    exampleNum: "Exercise 8.3 - Q2",
    problem: "A die is rolled and a coin is tossed simultaneously. Find the probability that the die shows an odd number and the coin shows a head.",
    given: "A die and a coin are tossed simultaneously.",
    givenLines: [
      "Die outcomes = {1, 2, 3, 4, 5, 6}",
      "Coin outcomes = {H, T}",
      "Total outcomes n(S) = 6 × 2 = 12"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Sample space S = {(1,H), (1,T), (2,H), (2,T), (3,H), (3,T), (4,H), (4,T), (5,H), (5,T), (6,H), (6,T)}",
          "Let A be event of odd number on die and head on coin: A = {(1,H), (3,H), (5,H)}   ...(1)",
          "n(A) = 3",
          "P(A) = n(A) / n(S) = 3 / 12 = 1 / 4   ...(2)",
          "The probability is 1/4."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH8_EXERCISE_8_4 = [
  {
    id: "ex-8.4-q1",
    exampleNum: "Exercise 8.4 - Q1",
    problem: "If P(A) = 2/3, P(B) = 2/5, P(A ∪ B) = 1/3 then find P(A ∩ B).",
    given: "Given probabilities: P(A) = 2/3, P(B) = 2/5, P(A ∪ B) = 1/3.",
    givenLines: [
      "P(A) = 2/3",
      "P(B) = 2/5",
      "P(A ∪ B) = 1/3"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "By Addition Theorem of Probability: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
          "P(A ∩ B) = P(A) + P(B) - P(A ∪ B)   ...(1)",
          "= 2/3 + 2/5 - 1/3 = (2/3 - 1/3) + 2/5",
          "= 1/3 + 2/5 = (5 + 6) / 15 = 11 / 15   ...(2)",
          "P(A ∩ B) = 11/15."
        ]
      }
    ]
  },
  {
    id: "ex-8.4-q2",
    exampleNum: "Exercise 8.4 - Q2",
    problem: "A and B are two events such that P(A) = 0.42, P(B) = 0.48, and P(A ∩ B) = 0.16. Find:\n(i) P(not A)\n(ii) P(not B)\n(iii) P(A or B)",
    given: "Given: P(A) = 0.42, P(B) = 0.48, P(A ∩ B) = 0.16.",
    givenLines: [
      "P(A) = 0.42",
      "P(B) = 0.48",
      "P(A ∩ B) = 0.16"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "(i) P(not A) = 1 - P(A) = 1 - 0.42 = 0.58   ...(1)",
          "(ii) P(not B) = 1 - P(B) = 1 - 0.48 = 0.52   ...(2)",
          "(iii) P(A or B) = P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
          "= 0.42 + 0.48 - 0.16 = 0.90 - 0.16 = 0.74   ...(3)"
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH8_EXERCISE_8_5 = [
  {
    id: "ex-8.5-q1",
    exampleNum: "Exercise 8.5 - Q1",
    problem: "Which of the following is not a measure of dispersion?\n(1) Range    (2) Standard deviation    (3) Arithmetic mean    (4) Variance",
    given: "Measures of dispersion check.",
    givenLines: [
      "Range, SD, Variance are measures of dispersion",
      "Arithmetic mean is a measure of central tendency"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Arithmetic mean is a measure of central tendency, not dispersion.",
          "Correct Option: (3) Arithmetic mean   ...(1)"
        ]
      }
    ]
  },
  {
    id: "ex-8.5-q2",
    exampleNum: "Exercise 8.5 - Q2",
    problem: "The probability of a sure event is:\n(1) 0    (2) 1    (3) 0.5    (4) 0.1",
    given: "Probability of a sure event.",
    givenLines: [
      "For sure event S, n(E) = n(S)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "P(S) = n(S) / n(S) = 1   ...(1)",
          "Correct Option: (2) 1"
        ]
      }
    ]
  },
  {
    id: "ex-8.5-q3",
    exampleNum: "Exercise 8.5 - Q3",
    problem: "The range of the data 8, 8, 8, 8, 8 ... 8 is:\n(1) 0    (2) 1    (3) 8    (4) 3",
    given: "All data values are equal to 8.",
    givenLines: ["Largest value L = 8, Smallest value S = 8"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Range R = L - S = 8 - 8 = 0   ...(1)",
          "Correct Option: (1) 0"
        ]
      }
    ]
  },
  {
    id: "ex-8.5-q4",
    exampleNum: "Exercise 8.5 - Q4",
    problem: "The sum of all deviations of the data from its A.M. is:\n(1) always positive    (2) always negative    (3) zero    (4) non-zero integer",
    given: "Deviations from arithmetic mean x̄.",
    givenLines: ["Σ(x - x̄)"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "By property of arithmetic mean: Σ(x - x̄) = Σx - n x̄ = n x̄ - n x̄ = 0   ...(1)",
          "Correct Option: (3) zero"
        ]
      }
    ]
  },
  {
    id: "ex-8.5-q5",
    exampleNum: "Exercise 8.5 - Q5",
    problem: "The mean of 100 observations is 40 and their standard deviation is 3. The sum of squares of all deviations from mean is:\n(1) 40000    (2) 160900    (3) 160000    (4) 900",
    given: "n = 100, x̄ = 40, σ = 3.",
    givenLines: ["σ² = Σ(x - x̄)² / n"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "σ² = 3² = 9",
          "Σ(x - x̄)² = n · σ² = 100 × 9 = 900   ...(1)",
          "Correct Option: (4) 900"
        ]
      }
    ]
  },
  {
    id: "ex-8.5-q6",
    exampleNum: "Exercise 8.5 - Q6",
    problem: "The variance of the first 20 natural numbers is:\n(1) 32.25    (2) 44.25    (3) 33.25    (4) 30",
    given: "First 20 natural numbers.",
    givenLines: ["Variance = (n² - 1) / 12 for n = 20"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Variance = (20² - 1) / 12 = (400 - 1) / 12 = 399 / 12 = 33.25   ...(1)",
          "Correct Option: (3) 33.25"
        ]
      }
    ]
  },
  {
    id: "ex-8.5-q7",
    exampleNum: "Exercise 8.5 - Q7",
    problem: "The standard deviation of a data is 3. If each value is multiplied by 2 then the new variance is:\n(1) 12    (2) 36    (3) 6    (4) 9",
    given: "Original σ = 3, each observation multiplied by 2.",
    givenLines: ["New σ = 2 × 3 = 6"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "New standard deviation = 3 × 2 = 6",
          "New variance = (new σ)² = 6² = 36   ...(1)",
          "Correct Option: (2) 36"
        ]
      }
    ]
  },
  {
    id: "ex-8.5-q8",
    exampleNum: "Exercise 8.5 - Q8",
    problem: "If the mean and coefficient of variation of a data are 4 and 87.5% then the standard deviation is:\n(1) 3.5    (2) 3    (3) 4.5    (4) 2.5",
    given: "x̄ = 4, C.V. = 87.5%.",
    givenLines: ["C.V. = (σ / x̄) × 100"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "87.5 = (σ / 4) × 100 ⇒ σ = (87.5 × 4) / 100 = 350 / 100 = 3.5   ...(1)",
          "Correct Option: (1) 3.5"
        ]
      }
    ]
  },
  {
    id: "ex-8.5-q9",
    exampleNum: "Exercise 8.5 - Q9",
    problem: "Which of the following is incorrect?\n(1) P(A) > 1    (2) 0 ≤ P(A) ≤ 1    (3) P(∅) = 0    (4) P(A) + P(A') = 1",
    given: "Properties of probability.",
    givenLines: ["Probability of any event must lie in [0, 1]"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "The probability of any event cannot exceed 1. Hence P(A) > 1 is incorrect.",
          "Correct Option: (1) P(A) > 1   ...(1)"
        ]
      }
    ]
  },
  {
    id: "ex-8.5-q10",
    exampleNum: "Exercise 8.5 - Q10",
    problem: "The probability of getting a job for a person is x / 3. If the probability of not getting the job is 2 / 3 then the value of x is:\n(1) 2    (2) 1    (3) 3    (4) 1.5",
    given: "P(E) = x / 3, P(E') = 2 / 3.",
    givenLines: ["P(E) + P(E') = 1"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "x/3 + 2/3 = 1 ⇒ (x + 2) / 3 = 1 ⇒ x + 2 = 3 ⇒ x = 1   ...(1)",
          "Correct Option: (2) 1"
        ]
      }
    ]
  },
  {
    id: "ex-8.5-q11",
    exampleNum: "Exercise 8.5 - Q11",
    problem: "If a letter is chosen at random from the English alphabets, then the probability that the letter chosen precedes x is:\n(1) 12 / 13    (2) 1 / 13    (3) 23 / 26    (4) 3 / 26",
    given: "Total letters = 26. Letters preceding x (a through w) = 23.",
    givenLines: ["n(S) = 26, n(E) = 23"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "P(E) = 23 / 26   ...(1)",
          "Correct Option: (3) 23 / 26"
        ]
      }
    ]
  },
  {
    id: "ex-8.5-q12",
    exampleNum: "Exercise 8.5 - Q12",
    problem: "If A and B are mutually exclusive events, then P(A ∩ B) is:\n(1) 1    (2) 0    (3) 0.5    (4) P(A) · P(B)",
    given: "A and B are mutually exclusive events.",
    givenLines: ["A ∩ B = ∅"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Since A and B cannot occur simultaneously, A ∩ B = ∅ ⇒ P(A ∩ B) = 0   ...(1)",
          "Correct Option: (2) 0"
        ]
      }
    ]
  }
];

export const getMathClass10Chapter8Sums = (tabId = 'examples') => {
  switch (tabId) {
    case 'ex-8.1': return MATH_CLASS10_CH8_EXERCISE_8_1;
    case 'ex-8.2': return MATH_CLASS10_CH8_EXERCISE_8_2;
    case 'ex-8.3': return MATH_CLASS10_CH8_EXERCISE_8_3;
    case 'ex-8.4': return MATH_CLASS10_CH8_EXERCISE_8_4;
    case 'ex-8.5': return MATH_CLASS10_CH8_EXERCISE_8_5;
    default: return MATH_CLASS10_CH8_EXAMPLES;
  }
};
