// src/data/mathClass10Chapter2Data.js
// Class 10 Mathematics - Chapter 2: Numbers and Sequences
// Full textbook exercises (Ex 2.1 to Ex 2.10) and worked examples

export const MATH_CLASS10_CH2_PILLS = [
  { id: 'examples', label: 'Examples' },
  { id: 'ex-2.1', label: 'Exercise 2.1' },
  { id: 'ex-2.2', label: 'Exercise 2.2' },
  { id: 'ex-2.3', label: 'Exercise 2.3' },
  { id: 'ex-2.4', label: 'Exercise 2.4' },
  { id: 'ex-2.5', label: 'Exercise 2.5' },
  { id: 'ex-2.6', label: 'Exercise 2.6' },
  { id: 'ex-2.7', label: 'Exercise 2.7' },
  { id: 'ex-2.8', label: 'Exercise 2.8' },
  { id: 'ex-2.9', label: 'Exercise 2.9' },
  { id: 'ex-2.10', label: 'Exercise 2.10' }
];

export const MATH_CLASS10_CH2_EXAMPLES = [
  {
    id: "ch2-eg-2.1",
    exampleNum: "Example 2.1",
    problem: "We have 34 cakes. Each box can hold 5 cakes only. How many boxes we need to pack and how many cakes are unpacked?",
    given: "Given: Total cakes = 34, capacity per box = 5.",
    givenLines: [
      "Total cakes a = 34",
      "Capacity per box b = 5"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "By Euclid's Division Lemma: a = bq + r, where 0 ≤ r < b",
          "34 = 5 × 6 + 4   ...(1)",
          "Quotient q = 6 (Number of boxes packed)",
          "Remainder r = 4 (Cakes unpacked)",
          "Therefore, 6 boxes are needed and 4 cakes remain unpacked."
        ]
      }
    ]
  },
  {
    id: "ch2-eg-2.2",
    exampleNum: "Example 2.2",
    problem: "Find the quotient and remainder when a is divided by b:\n(i) a = -12, b = 5\n(ii) a = 17, b = -3\n(iii) a = -19, b = -4",
    given: "Given dividend a and divisor b.",
    givenLines: [
      "(i) a = -12, b = 5",
      "(ii) a = 17, b = -3",
      "(iii) a = -19, b = -4"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) a = -12, b = 5",
        lines: [
          "-12 = 5(-3) + 3   ...(1)",
          "Quotient q = -3, Remainder r = 3"
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) a = 17, b = -3",
        lines: [
          "17 = (-3)(-5) + 2   ...(2)",
          "Quotient q = -5, Remainder r = 2"
        ]
      },
      {
        partNum: "3.",
        heading: "(iii) a = -19, b = -4",
        lines: [
          "-19 = (-4)(5) + 1   ...(3)",
          "Quotient q = 5, Remainder r = 1"
        ]
      }
    ]
  },
  {
    id: "ch2-eg-2.3",
    exampleNum: "Example 2.3",
    problem: "Show that the square of an odd integer is of the form 4q + 1, for some integer q.",
    given: "Given: An odd integer x.",
    givenLines: [
      "Any odd integer can be written as x = 2k + 1, for some integer k."
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "x² = (2k + 1)²",
          "= 4k² + 4k + 1",
          "= 4(k² + k) + 1   ...(1)",
          "Let q = k² + k (which is an integer)",
          "x² = 4q + 1   ...(2)",
          "Hence, the square of any odd integer is of the form 4q + 1."
        ]
      }
    ]
  },
  {
    id: "ch2-eg-2.4",
    exampleNum: "Example 2.4",
    problem: "If the Highest Common Factor (HCF) of 210 and 55 is expressible in the form 55x - 325, find x.",
    given: "Given: HCF(210, 55) = 55x - 325.",
    givenLines: [
      "a = 210, b = 55",
      "HCF(210, 55) = 55x - 325"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Using Euclid's division algorithm to find HCF(210, 55):",
          "210 = 55 × 3 + 45",
          "55 = 45 × 1 + 10",
          "45 = 10 × 4 + 5",
          "10 = 5 × 2 + 0",
          "Since remainder is 0, HCF(210, 55) = 5.",
          "Given: 55x - 325 = 5   ...(1)",
          "55x = 325 + 5 = 330",
          "x = 330 / 55 = 6",
          "The value of x is 6."
        ]
      }
    ]
  },
  {
    id: "ch2-eg-2.5",
    exampleNum: "Example 2.5",
    problem: "Find the greatest number that will divide 445 and 572 leaving remainders 4 and 5 respectively.",
    given: "Given numbers: 445 and 572 with remainders 4 and 5.",
    givenLines: [
      "445 - 4 = 441",
      "572 - 5 = 567",
      "Required number = HCF(441, 567)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Using Euclid's division algorithm on 567 and 441:",
          "567 = 441 × 1 + 126",
          "441 = 126 × 3 + 63",
          "126 = 63 × 2 + 0",
          "Since remainder is 0, HCF(441, 567) = 63.",
          "The greatest number that will divide 445 and 572 leaving remainders 4 and 5 is 63."
        ]
      }
    ]
  },
  {
    id: "ch2-eg-2.11",
    exampleNum: "Example 2.11",
    problem: "Find the remainders when 70004 and 778 are divided by 7.",
    given: "Given numbers: 70004 and 778 divided by 7.",
    givenLines: [
      "Divisor = 7"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "For 70004",
        lines: [
          "Since 70000 is divisible by 7: 70000 ≡ 0 (mod 7)",
          "70000 + 4 ≡ 0 + 4 (mod 7)",
          "70004 ≡ 4 (mod 7)",
          "Remainder when 70004 is divided by 7 is 4."
        ]
      },
      {
        partNum: "2.",
        heading: "For 778",
        lines: [
          "Since 777 = 7 × 111 is divisible by 7: 777 ≡ 0 (mod 7)",
          "777 + 1 ≡ 0 + 1 (mod 7)",
          "778 ≡ 1 (mod 7)",
          "Remainder when 778 is divided by 7 is 1."
        ]
      }
    ]
  },
  {
    id: "ch2-eg-2.24",
    exampleNum: "Example 2.24",
    problem: "Write an A.P. whose first term is 20 and common difference is 8.",
    given: "Given: First term a = 20, common difference d = 8.",
    givenLines: [
      "First term a = 20",
      "Common difference d = 8"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "General form of an A.P. is a, a + d, a + 2d, a + 3d, ...",
          "t₁ = a = 20",
          "t₂ = a + d = 20 + 8 = 28",
          "t₃ = a + 2d = 20 + 2(8) = 20 + 16 = 36",
          "t₄ = a + 3d = 20 + 3(8) = 20 + 24 = 44",
          "The required Arithmetic Progression is 20, 28, 36, 44, ..."
        ]
      }
    ]
  },
  {
    id: "ch2-eg-2.40",
    exampleNum: "Example 2.40",
    problem: "Which of the following sequences form a Geometric Progression?\n(i) 7, 14, 21, 28, ...\n(ii) 1/2, 1, 2, 4, ...\n(iii) 5, 25, 50, 75, ...",
    given: "Given sequences to test for G.P.",
    givenLines: [
      "(i) 7, 14, 21, 28, ...",
      "(ii) 1/2, 1, 2, 4, ...",
      "(iii) 5, 25, 50, 75, ..."
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "(i) t₂ / t₁ = 14 / 7 = 2 ; t₃ / t₂ = 21 / 14 = 3/2. Since 2 ≠ 3/2, it is not a G.P.",
          "(ii) t₂ / t₁ = 1 / (1/2) = 2 ; t₃ / t₂ = 2 / 1 = 2 ; t₄ / t₃ = 4 / 2 = 2. Common ratio r = 2. Hence it is a G.P.",
          "(iii) t₂ / t₁ = 25 / 5 = 5 ; t₃ / t₂ = 50 / 25 = 2. Since 5 ≠ 2, it is not a G.P."
        ]
      }
    ]
  },
  {
    id: "ch2-eg-2.57",
    exampleNum: "Example 2.57",
    problem: "Find the sum of the following series:\n(i) 1³ + 2³ + 3³ + ... + 16³\n(ii) 9³ + 10³ + ... + 21³",
    given: "Given series of cubes of natural numbers.",
    givenLines: [
      "(i) 1³ + 2³ + 3³ + ... + 16³",
      "(ii) 9³ + 10³ + ... + 21³",
      "Formula: 1³ + 2³ + ... + n³ = [n(n + 1) / 2]²"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "Sub-division (i) 1³ + 2³ + 3³ + ... + 16³",
        lines: [
          "Here n = 16",
          "1³ + 2³ + ... + 16³ = [16(16 + 1) / 2]²",
          "= [16 × 17 / 2]² = [8 × 17]²",
          "= (136)² = 18496"
        ]
      },
      {
        partNum: "2.",
        heading: "Sub-division (ii) 9³ + 10³ + ... + 21³",
        lines: [
          "9³ + 10³ + ... + 21³ = (1³ + 2³ + ... + 21³) - (1³ + 2³ + ... + 8³)",
          "= [21(21 + 1) / 2]² - [8(8 + 1) / 2]²",
          "= [21 × 22 / 2]² - [8 × 9 / 2]²",
          "= [21 × 11]² - [4 × 9]²",
          "= (231)² - (36)² = 53361 - 1296 = 52065"
        ]
      }
    ]
  },
  {
    id: "ch2-eg-2.58",
    exampleNum: "Example 2.58",
    problem: "If 1 + 2 + 3 + ... + n = 666, then find n.",
    given: "Given: 1 + 2 + 3 + ... + n = 666.",
    givenLines: [
      "1 + 2 + 3 + ... + n = 666",
      "Formula: n(n + 1) / 2 = 666"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "n(n + 1) / 2 = 666",
          "n(n + 1) = 666 × 2 = 1332",
          "n² + n - 1332 = 0",
          "(n + 37)(n - 36) = 0",
          "n = -37 or n = 36",
          "Since n is a natural number (n > 0), n cannot be negative.",
          "Therefore, n = 36."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH2_EXERCISE_2_1 = [
  {
    id: "ex-2.1-q1",
    exampleNum: "Exercise 2.1 - Q1",
    problem: "Find all positive integers which when divided by 3 leaves remainder 2.",
    given: "Given: Positive integer n when divided by 3 leaves remainder 2.",
    givenLines: [
      "Divisor b = 3, Remainder r = 2",
      "Euclid's Division Lemma: n = 3q + 2, where q ≥ 0"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "For q = 0 ⇒ n = 3(0) + 2 = 2",
          "For q = 1 ⇒ n = 3(1) + 2 = 5",
          "For q = 2 ⇒ n = 3(2) + 2 = 8",
          "For q = 3 ⇒ n = 3(3) + 2 = 11",
          "The positive integers are 2, 5, 8, 11, 14, ...   ...(1)"
        ]
      }
    ]
  },
  {
    id: "ex-2.1-q2",
    exampleNum: "Exercise 2.1 - Q2",
    problem: "A man has 532 flower pots. He wants to arrange them in rows such that each row contains 21 flower pots. Find the number of completed rows and how many flower pots are left over.",
    given: "Given: Total flower pots a = 532, pots per row b = 21.",
    givenLines: [
      "Total pots a = 532",
      "Pots per row b = 21"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "By Euclid's division lemma: a = bq + r",
          "532 = 21 × 25 + 7   ...(1)",
          "Completed rows = 25",
          "Leftover flower pots = 7"
        ]
      }
    ]
  },
  {
    id: "ex-2.1-q3",
    exampleNum: "Exercise 2.1 - Q3",
    problem: "Prove that the product of two consecutive positive integers is divisible by 2.",
    given: "Given: Two consecutive positive integers n and n + 1.",
    givenLines: [
      "Consecutive integers: n, n + 1",
      "Product P = n(n + 1)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Case 1: If n is even, let n = 2k",
          "P = 2k(2k + 1) = 2[k(2k + 1)], which is divisible by 2.   ...(1)",
          "Case 2: If n is odd, let n = 2k + 1",
          "Then n + 1 = 2k + 2 = 2(k + 1)",
          "P = (2k + 1) · 2(k + 1) = 2[(2k + 1)(k + 1)], which is divisible by 2.   ...(2)",
          "Hence, the product of two consecutive positive integers is always divisible by 2."
        ]
      }
    ]
  },
  {
    id: "ex-2.1-q4",
    exampleNum: "Exercise 2.1 - Q4",
    problem: "When the positive integers a, b and c are divided by 13, the respective remainders are 9, 7 and 10. Show that a + b + c is divisible by 13.",
    given: "Given remainders when a, b, c are divided by 13.",
    givenLines: [
      "a = 13q₁ + 9",
      "b = 13q₂ + 7",
      "c = 13q₃ + 10"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "a + b + c = (13q₁ + 9) + (13q₂ + 7) + (13q₃ + 10)",
          "= 13(q₁ + q₂ + q₃) + 26",
          "= 13(q₁ + q₂ + q₃ + 2)   ...(1)",
          "Since 13 is a factor, a + b + c is divisible by 13."
        ]
      }
    ]
  },
  {
    id: "ex-2.1-q5",
    exampleNum: "Exercise 2.1 - Q5",
    problem: "Prove that square of any integer is of the form 4k or 4k + 1 for some integer k.",
    given: "Given: Any integer x.",
    givenLines: [
      "Any integer x is either even (x = 2m) or odd (x = 2m + 1)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Case 1: If x is even, x = 2m ⇒ x² = 4m² = 4k, where k = m²   ...(1)",
          "Case 2: If x is odd, x = 2m + 1 ⇒ x² = 4m² + 4m + 1 = 4(m² + m) + 1 = 4k + 1, where k = m² + m   ...(2)",
          "Therefore, the square of any integer is of the form 4k or 4k + 1."
        ]
      }
    ]
  },
  {
    id: "ex-2.1-q6",
    exampleNum: "Exercise 2.1 - Q6",
    problem: "Use Euclid's Division Algorithm to find the Highest Common Factor (HCF) of:\n(i) 340 and 412\n(ii) 867 and 255\n(iii) 10224 and 9648\n(iv) 84, 90 and 120",
    given: "Given pairs/triplets of numbers to find HCF.",
    givenLines: [
      "(i) 340 and 412",
      "(ii) 867 and 255",
      "(iii) 10224 and 9648",
      "(iv) 84, 90 and 120"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "Sub-division (i) 340 and 412",
        lines: [
          "412 = 340 × 1 + 72",
          "340 = 72 × 4 + 52",
          "72 = 52 × 1 + 20",
          "52 = 20 × 2 + 12",
          "20 = 12 × 1 + 8",
          "12 = 8 × 1 + 4",
          "8 = 4 × 2 + 0",
          "Since remainder is 0, HCF(340, 412) = 4."
        ]
      },
      {
        partNum: "2.",
        heading: "Sub-division (ii) 867 and 255",
        lines: [
          "867 = 255 × 3 + 102",
          "255 = 102 × 2 + 51",
          "102 = 51 × 2 + 0",
          "Since remainder is 0, HCF(867, 255) = 51."
        ]
      },
      {
        partNum: "3.",
        heading: "Sub-division (iii) 10224 and 9648",
        lines: [
          "10224 = 9648 × 1 + 576",
          "9648 = 576 × 16 + 432",
          "576 = 432 × 1 + 144",
          "432 = 144 × 3 + 0",
          "Since remainder is 0, HCF(10224, 9648) = 144."
        ]
      },
      {
        partNum: "4.",
        heading: "Sub-division (iv) 84, 90 and 120",
        lines: [
          "First find HCF of 84 and 90:",
          "90 = 84 × 1 + 6",
          "84 = 6 × 14 + 0 ⇒ HCF(84, 90) = 6",
          "Now find HCF of 6 and 120:",
          "120 = 6 × 20 + 0 ⇒ HCF(6, 120) = 6",
          "Therefore, HCF(84, 90, 120) = 6."
        ]
      }
    ]
  },
  {
    id: "ex-2.1-q7",
    exampleNum: "Exercise 2.1 - Q7",
    problem: "Find the largest number which divides 1230 and 1926 leaving remainder 12 in each case.",
    given: "Given numbers: 1230 and 1926 with remainder 12 in each case.",
    givenLines: [
      "1230 - 12 = 1218",
      "1926 - 12 = 1914",
      "Required number = HCF(1218, 1914)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "By Euclid's division algorithm:",
          "1914 = 1218 × 1 + 696",
          "1218 = 696 × 1 + 522",
          "696 = 522 × 1 + 174",
          "522 = 174 × 3 + 0",
          "Since remainder is 0, HCF(1218, 1914) = 174.",
          "The largest number is 174."
        ]
      }
    ]
  },
  {
    id: "ex-2.1-q8",
    exampleNum: "Exercise 2.1 - Q8",
    problem: "If d is the Highest Common Factor of 32 and 60, find x and y satisfying d = 32x + 60y.",
    given: "Given: d = HCF(32, 60) and d = 32x + 60y.",
    givenLines: [
      "a = 60, b = 32",
      "d = 32x + 60y"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Applying Euclid's division lemma on 60 and 32:",
          "60 = 32 × 1 + 28   ...(1)",
          "32 = 28 × 1 + 4   ...(2)",
          "28 = 4 × 7 + 0   ...(3)",
          "Since remainder is 0, HCF d = 4.",
          "From (2): 4 = 32 - 28 × 1",
          "From (1): 28 = 60 - 32 × 1",
          "4 = 32 - (60 - 32 × 1) × 1",
          "4 = 32 - 60 + 32 = 32 × 2 + 60(-1)",
          "Comparing with d = 32x + 60y: x = 2 and y = -1."
        ]
      }
    ]
  },
  {
    id: "ex-2.1-q9",
    exampleNum: "Exercise 2.1 - Q9",
    problem: "A positive integer, when divided by 88, gives the remainder 61. What will be the remainder when the same number is divided by 11?",
    given: "Given: Integer x leaves remainder 61 when divided by 88.",
    givenLines: [
      "x = 88q + 61, where q is an integer"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "x = 88q + 61",
          "Since 88 is a multiple of 11 (88 = 11 × 8), we divide 61 by 11:",
          "61 = 11 × 5 + 6",
          "x = 11(8q) + 11(5) + 6 = 11(8q + 5) + 6",
          "Therefore, the remainder when divided by 11 is 6."
        ]
      }
    ]
  },
  {
    id: "ex-2.1-q10",
    exampleNum: "Exercise 2.1 - Q10",
    problem: "Prove that two consecutive positive integers are always coprime.",
    given: "Given: Two consecutive positive integers n and n + 1.",
    givenLines: [
      "Let the integers be n and n + 1"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Let d be a common divisor of n and n + 1.",
          "Then d must divide their difference (n + 1) - n = 1.",
          "Since only positive divisor of 1 is 1, d = 1.",
          "Hence, the HCF of any two consecutive positive integers is always 1.",
          "Therefore, two consecutive positive integers are always coprime."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH2_EXERCISE_2_2 = [
  {
    id: "ex-2.2-q1",
    exampleNum: "Exercise 2.2 - Q1",
    problem: "For what values of natural number n, 4ⁿ can end with the digit 0?",
    given: "Given: 4ⁿ, where n ∈ ℕ.",
    givenLines: [
      "4ⁿ = (2²)ⁿ = 2²ⁿ"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Any number ending with the digit 0 must have both 2 and 5 as prime factors.",
          "4ⁿ = 2²ⁿ has only 2 as a prime factor. 5 is not a prime factor of 4ⁿ.   ...(1)",
          "Therefore, 4ⁿ cannot end with the digit 0 for any natural number n."
        ]
      }
    ]
  },
  {
    id: "ex-2.2-q2",
    exampleNum: "Exercise 2.2 - Q2",
    problem: "If m, n are natural numbers, for what values of m, does 2ⁿ × 5ᵐ ends in 5?",
    given: "Given: 2ⁿ × 5ᵐ, where m, n ∈ ℕ.",
    givenLines: [
      "Expression: 2ⁿ × 5ᵐ"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Since 2ⁿ is an even number for all n ∈ ℕ, 2ⁿ × 5ᵐ is always even.",
          "Any number ending in 5 must be odd.",
          "Therefore, 2ⁿ × 5ᵐ cannot end in 5 for any value of m.   ...(1)"
        ]
      }
    ]
  },
  {
    id: "ex-2.2-q4",
    exampleNum: "Exercise 2.2 - Q4",
    problem: "If 13824 = 2ᵃ × 3ᵇ then find a and b.",
    given: "Given: 13824 = 2ᵃ × 3ᵇ.",
    givenLines: [
      "Number = 13824"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Prime factorizing 13824:",
          "13824 = 2⁹ × 3³   ...(1)",
          "Equating powers: a = 9, b = 3   ...(2)"
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH2_EXERCISE_2_3 = [
  {
    id: "ex-2.3-q1",
    exampleNum: "Exercise 2.3 - Q1",
    problem: "Find the least positive value of x such that:\n(i) 71 ≡ x (mod 8)\n(ii) 78 + x ≡ 3 (mod 5)",
    given: "Given modular congruences.",
    givenLines: [
      "(i) 71 ≡ x (mod 8)",
      "(ii) 78 + x ≡ 3 (mod 5)"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) 71 ≡ x (mod 8)",
        lines: [
          "71 - x is divisible by 8",
          "71 = 8 × 8 + 7",
          "x = 7   ...(1)"
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) 78 + x ≡ 3 (mod 5)",
        lines: [
          "(78 + x) - 3 is divisible by 5",
          "75 + x is divisible by 5",
          "Least positive value of x = 5   ...(2)"
        ]
      }
    ]
  },
  {
    id: "ex-2.3-q5",
    exampleNum: "Exercise 2.3 - Q5",
    problem: "What is the time 100 hours after 7 a.m.?",
    given: "Given: Starting time = 7 a.m., elapsed hours = 100.",
    givenLines: [
      "Clock arithmetic uses modulo 24"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "100 ≡ x (mod 24)",
          "100 = 24 × 4 + 4 ⇒ 100 ≡ 4 (mod 24)   ...(1)",
          "Time after 100 hours = 7 + 4 = 11 a.m.   ...(2)"
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH2_EXERCISE_2_4 = [
  {
    id: "ex-2.4-q1",
    exampleNum: "Exercise 2.4 - Q1",
    problem: "Find the next three terms of the sequences:\n(i) 8, 24, 72, ...\n(ii) 5, 1, -3, ...",
    given: "Given sequences.",
    givenLines: [
      "(i) 8, 24, 72, ...",
      "(ii) 5, 1, -3, ..."
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) 8, 24, 72, ...",
        lines: [
          "Each term is multiplied by 3:",
          "a₄ = 72 × 3 = 216",
          "a₅ = 216 × 3 = 648",
          "a₆ = 648 × 3 = 1944   ...(1)"
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) 5, 1, -3, ...",
        lines: [
          "Common difference d = 1 - 5 = -4:",
          "a₄ = -3 - 4 = -7",
          "a₅ = -7 - 4 = -11",
          "a₆ = -11 - 4 = -15   ...(2)"
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH2_EXERCISE_2_5 = [
  {
    id: "ex-2.5-q4",
    exampleNum: "Exercise 2.5 - Q4",
    problem: "Find the 19th term of an A.P. -11, -15, -19, ...",
    given: "Given A.P.: -11, -15, -19, ...",
    givenLines: [
      "First term a = -11",
      "Common difference d = -15 - (-11) = -4"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "General term: tₙ = a + (n - 1)d",
          "t₁₉ = -11 + (19 - 1)(-4)",
          "= -11 + 18(-4)",
          "= -11 - 72 = -83   ...(1)"
        ]
      }
    ]
  },
  {
    id: "ex-2.5-q8",
    exampleNum: "Exercise 2.5 - Q8",
    problem: "If 3 + k, 18 - k, 5k + 1 are in A.P. then find k.",
    given: "Given: 3 + k, 18 - k, 5k + 1 are in A.P.",
    givenLines: [
      "Terms in A.P.: t₁ = 3 + k, t₂ = 18 - k, t₃ = 5k + 1"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "t₂ - t₁ = t₃ - t₂",
          "(18 - k) - (3 + k) = (5k + 1) - (18 - k)",
          "15 - 2k = 6k - 17",
          "15 + 17 = 6k + 2k",
          "32 = 8k ⇒ k = 4   ...(1)"
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH2_EXERCISE_2_6 = [
  {
    id: "ex-2.6-q1",
    exampleNum: "Exercise 2.6 - Q1",
    problem: "Find the sum of the following: 3, 7, 11, ... up to 40 terms.",
    given: "Given A.P.: 3, 7, 11, ... to 40 terms.",
    givenLines: [
      "a = 3, d = 7 - 3 = 4, n = 40"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Sₙ = (n / 2)[2a + (n - 1)d]",
          "S₄₀ = (40 / 2)[2(3) + (40 - 1)4]",
          "= 20[6 + 39(4)]",
          "= 20[6 + 156] = 20(162) = 3240   ...(1)"
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH2_EXERCISE_2_7 = [
  {
    id: "ex-2.7-q4",
    exampleNum: "Exercise 2.7 - Q4",
    problem: "Find x so that x + 6, x + 12 and x + 15 are consecutive terms of a Geometric Progression.",
    given: "Given consecutive terms of G.P.",
    givenLines: [
      "t₁ = x + 6, t₂ = x + 12, t₃ = x + 15"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "t₂ / t₁ = t₃ / t₂ ⇒ t₂² = t₁ · t₃",
          "(x + 12)² = (x + 6)(x + 15)",
          "x² + 24x + 144 = x² + 21x + 90",
          "24x - 21x = 90 - 144",
          "3x = -54 ⇒ x = -18   ...(1)"
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH2_EXERCISE_2_8 = [
  {
    id: "ex-2.8-q4",
    exampleNum: "Exercise 2.8 - Q4",
    problem: "Find the sum to infinity of: 9 + 3 + 1 + ...",
    given: "Given infinite G.P.: 9, 3, 1, ...",
    givenLines: [
      "a = 9, r = 3 / 9 = 1 / 3 (< 1)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "S_∞ = a / (1 - r)",
          "= 9 / (1 - 1/3) = 9 / (2/3)",
          "= 9 × (3 / 2) = 27 / 2 = 13.5   ...(1)"
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH2_EXERCISE_2_9 = [
  {
    id: "ex-2.9-q1",
    exampleNum: "Exercise 2.9 - Q1",
    problem: "Find the sum of the series:\n(i) 1 + 2 + 3 + ... + 60\n(ii) 1 + 4 + 9 + ... + 225",
    given: "Given standard special series.",
    givenLines: [
      "(i) 1 + 2 + ... + 60",
      "(ii) 1² + 2² + ... + 15²"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) 1 + 2 + 3 + ... + 60",
        lines: [
          "Formula: Σn = n(n + 1) / 2",
          "= 60(61) / 2 = 30 × 61 = 1830   ...(1)"
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) 1² + 2² + ... + 15²",
        lines: [
          "Formula: Σn² = n(n + 1)(2n + 1) / 6",
          "= 15(16)(31) / 6 = 5(8)(31) = 1240   ...(2)"
        ]
      }
    ]
  },
  {
    id: "ex-2.9-q2",
    exampleNum: "Exercise 2.9 - Q2",
    problem: "If 1 + 2 + 3 + ... + k = 325, then find 1³ + 2³ + 3³ + ... + k³.",
    given: "Given: Σk = 325.",
    givenLines: [
      "1 + 2 + 3 + ... + k = 325"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "1³ + 2³ + ... + k³ = [1 + 2 + ... + k]²",
          "= (325)² = 105625   ...(1)"
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH2_EXERCISE_2_10 = [
  {
    id: "ex-2.10-q1",
    exampleNum: "Exercise 2.10 - Q1",
    problem: "Euclid's division lemma states that for positive integers a and b, there exist unique integers q and r such that a = bq + r, where r must satisfy:\n(1) 1 < r < b    (2) 0 < r < b    (3) 0 ≤ r < b    (4) 0 < r ≤ b",
    given: "Given: Euclid's division lemma condition.",
    givenLines: ["a = bq + r, where 0 ≤ r < b"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "By Euclid's division lemma, when positive integer a is divided by b, remainder r satisfies 0 ≤ r < b.",
          "Correct Option: (3) 0 ≤ r < b   ...(1)"
        ]
      }
    ]
  },
  {
    id: "ex-2.10-q2",
    exampleNum: "Exercise 2.10 - Q2",
    problem: "Using Euclid's division lemma, if the cube of any positive integer is divided by 9 then the possible remainders are:\n(1) 0, 1, 8    (2) 1, 4, 8    (3) 0, 1, 3    (4) 1, 3, 5",
    given: "Given: Cubes of positive integers divided by 9.",
    givenLines: ["n³, where n is a positive integer"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Any positive integer is of the form 3k, 3k + 1, or 3k + 2.",
          "(3k)³ = 27k³ = 9(3k³) ⇒ remainder 0",
          "(3k + 1)³ = 27k³ + 27k² + 9k + 1 = 9(3k³ + 3k² + k) + 1 ⇒ remainder 1",
          "(3k + 2)³ = 27k³ + 54k² + 36k + 8 = 9(3k³ + 6k² + 4k) + 8 ⇒ remainder 8",
          "Therefore, the possible remainders are 0, 1, 8.",
          "Correct Option: (1) 0, 1, 8   ...(1)"
        ]
      }
    ]
  },
  {
    id: "ex-2.10-q3",
    exampleNum: "Exercise 2.10 - Q3",
    problem: "If the HCF of 65 and 117 is expressible in the form 65m - 117, then the value of m is:\n(1) 4    (2) 2    (3) 1    (4) 3",
    given: "Given: HCF(65, 117) = 65m - 117.",
    givenLines: ["65 = 5 × 13", "117 = 3² × 13", "HCF(65, 117) = 13"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "65 = 13 × 5 and 117 = 13 × 9.",
          "HCF(65, 117) = 13.",
          "65m - 117 = 13 ⇒ 65m = 13 + 117 = 130",
          "m = 130 / 65 = 2   ...(1)",
          "Correct Option: (2) 2"
        ]
      }
    ]
  },
  {
    id: "ex-2.10-q4",
    exampleNum: "Exercise 2.10 - Q4",
    problem: "The sum of the exponents of the prime factors in the prime factorization of 1729 is:\n(1) 1    (2) 2    (3) 3    (4) 4",
    given: "Given number 1729 (Ramanujan number).",
    givenLines: ["1729 = 7 × 13 × 19"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Prime factorization of 1729 = 7¹ × 13¹ × 19¹.",
          "Sum of exponents = 1 + 1 + 1 = 3   ...(1)",
          "Correct Option: (3) 3"
        ]
      }
    ]
  },
  {
    id: "ex-2.10-q5",
    exampleNum: "Exercise 2.10 - Q5",
    problem: "The least number that is divisible by all the numbers from 1 to 10 (both inclusive) is:\n(1) 2050    (2) 5200    (3) 5020    (4) 2520",
    given: "LCM of numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.",
    givenLines: ["Find LCM(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Prime factors: 2³ = 8, 3² = 9, 5¹ = 5, 7¹ = 7",
          "LCM = 2³ × 3² × 5 × 7 = 8 × 9 × 5 × 7 = 2520   ...(1)",
          "Correct Option: (4) 2520"
        ]
      }
    ]
  },
  {
    id: "ex-2.10-q6",
    exampleNum: "Exercise 2.10 - Q6",
    problem: "7⁴ᵏ ≡ _____ (mod 100):\n(1) 1    (2) 2    (3) 3    (4) 4",
    given: "Given modular expression 7⁴ᵏ (mod 100).",
    givenLines: ["7⁴ = 2401"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "7⁴ = 2401 = 24 × 100 + 1",
          "7⁴ ≡ 1 (mod 100)",
          "(7⁴)ᵏ ≡ 1ᵏ ≡ 1 (mod 100)   ...(1)",
          "Correct Option: (1) 1"
        ]
      }
    ]
  },
  {
    id: "ex-2.10-q7",
    exampleNum: "Exercise 2.10 - Q7",
    problem: "Given F₁ = 1, F₂ = 3 and Fₙ = Fₙ₋₁ + Fₙ₋₂, then F₅ is:\n(1) 3    (2) 5    (3) 8    (4) 11",
    given: "Given recurrence: F₁ = 1, F₂ = 3, Fₙ = Fₙ₋₁ + Fₙ₋₂.",
    givenLines: ["F₁ = 1", "F₂ = 3"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "F₃ = F₂ + F₁ = 3 + 1 = 4",
          "F₄ = F₃ + F₂ = 4 + 3 = 7",
          "F₅ = F₄ + F₃ = 7 + 4 = 11   ...(1)",
          "Correct Option: (4) 11"
        ]
      }
    ]
  },
  {
    id: "ex-2.10-q8",
    exampleNum: "Exercise 2.10 - Q8",
    problem: "The first term of an arithmetic progression is unity and the common difference is 4. Which of the following will be a term of this A.P.:\n(1) 4551    (2) 10091    (3) 7881    (4) 13531",
    given: "Given A.P. with a = 1, d = 4.",
    givenLines: ["a = 1, d = 4", "tₙ = a + (n - 1)d = 1 + (n - 1)4 = 4n - 3"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Every term of this A.P. is of the form 4n - 3.",
          "Check (3) 7881: 4n - 3 = 7881 ⇒ 4n = 7884 ⇒ n = 1971 (integer)",
          "Since n is a positive integer, 7881 is a term of the A.P.   ...(1)",
          "Correct Option: (3) 7881"
        ]
      }
    ]
  },
  {
    id: "ex-2.10-q9",
    exampleNum: "Exercise 2.10 - Q9",
    problem: "If 6 times of 6th term of an A.P. is equal to 7 times the 7th term, then the 13th term of the A.P. is:\n(1) 0    (2) 6    (3) 7    (4) 13",
    given: "Given 6 · t₆ = 7 · t₇ in an A.P.",
    givenLines: ["6(a + 5d) = 7(a + 6d)"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "6(a + 5d) = 7(a + 6d)",
          "6a + 30d = 7a + 42d",
          "7a - 6a = 30d - 42d ⇒ a = -12d",
          "t₁₃ = a + (13 - 1)d = a + 12d = -12d + 12d = 0   ...(1)",
          "Correct Option: (1) 0"
        ]
      }
    ]
  },
  {
    id: "ex-2.10-q10",
    exampleNum: "Exercise 2.10 - Q10",
    problem: "An A.P. consists of 31 terms. If its 16th term is m, then the sum of all the terms of this A.P. is:\n(1) 16m    (2) 62m    (3) 31m    (4) 31/2 m",
    given: "Given n = 31, t₁₆ = m.",
    givenLines: ["t₁₆ = a + 15d = m", "S₃₁ = (31/2)[2a + 30d]"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "S₃₁ = (31 / 2) [2a + (31 - 1)d] = (31 / 2) [2a + 30d]",
          "= (31 / 2) × 2(a + 15d) = 31(a + 15d)",
          "Since t₁₆ = a + 15d = m, S₃₁ = 31m   ...(1)",
          "Correct Option: (3) 31m"
        ]
      }
    ]
  },
  {
    id: "ex-2.10-q11",
    exampleNum: "Exercise 2.10 - Q11",
    problem: "In an A.P., the first term is 1 and the common difference is 4. How many terms of the A.P. must be taken for their sum to be equal to 120?\n(1) 6    (2) 7    (3) 8    (4) 9",
    given: "Given a = 1, d = 4, Sₙ = 120.",
    givenLines: ["Sₙ = (n/2)[2(1) + (n - 1)4] = 120"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "(n / 2) [2 + 4n - 4] = 120 ⇒ (n / 2) [4n - 2] = 120",
          "n(2n - 1) = 120 ⇒ 2n² - n - 120 = 0",
          "(2n + 15)(n - 8) = 0 ⇒ n = 8 (since n must be positive)",
          "Therefore, 8 terms must be taken.   ...(1)",
          "Correct Option: (3) 8"
        ]
      }
    ]
  },
  {
    id: "ex-2.10-q12",
    exampleNum: "Exercise 2.10 - Q12",
    problem: "If A = 2⁶⁵ and B = 2⁶⁴ + 2⁶³ + 2⁶² + ... + 2⁰, which of the following is true?\n(1) B is 2⁶⁴ more than A    (2) A and B are equal    (3) B is larger than A by 1    (4) A is larger than B by 1",
    given: "Given A = 2⁶⁵ and B = 2⁰ + 2¹ + ... + 2⁶⁴.",
    givenLines: ["B is a geometric series with a = 1, r = 2, n = 65 terms"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "B = 1(2⁶⁵ - 1) / (2 - 1) = 2⁶⁵ - 1",
          "A = 2⁶⁵",
          "A - B = 2⁶⁵ - (2⁶⁵ - 1) = 1",
          "Therefore, A is larger than B by 1.   ...(1)",
          "Correct Option: (4) A is larger than B by 1"
        ]
      }
    ]
  },
  {
    id: "ex-2.10-q13",
    exampleNum: "Exercise 2.10 - Q13",
    problem: "The next term of the sequence 3/16, 1/8, 1/12, 1/18, ... is:\n(1) 1/24    (2) 1/27    (3) 2/3    (4) 1/81",
    given: "Given sequence 3/16, 1/8, 1/12, 1/18, ...",
    givenLines: ["Check common ratio r = (1/8) / (3/16)"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Common ratio r = (1/8) / (3/16) = (1/8) × (16/3) = 2/3",
          "(1/12) / (1/8) = (1/12) × (8/1) = 2/3",
          "Next term = (1/18) × (2/3) = 2/54 = 1/27   ...(1)",
          "Correct Option: (2) 1/27"
        ]
      }
    ]
  },
  {
    id: "ex-2.10-q14",
    exampleNum: "Exercise 2.10 - Q14",
    problem: "If the sequence t₁, t₂, t₃, ... are in A.P. then the sequence t₆, t₁₂, t₁₈, ... is:\n(1) a Geometric Progression    (2) an Arithmetic Progression    (3) neither an A.P. nor a G.P.    (4) a constant sequence",
    given: "Given tₙ is an A.P.",
    givenLines: ["tₙ = a + (n - 1)d"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "t₆ = a + 5d, t₁₂ = a + 11d, t₁₈ = a + 17d",
          "t₁₂ - t₆ = (a + 11d) - (a + 5d) = 6d",
          "t₁₈ - t₁₂ = (a + 17d) - (a + 11d) = 6d",
          "Since the consecutive difference is constant (6d), the sequence is an Arithmetic Progression.   ...(1)",
          "Correct Option: (2) an Arithmetic Progression"
        ]
      }
    ]
  },
  {
    id: "ex-2.10-q15",
    exampleNum: "Exercise 2.10 - Q15",
    problem: "The value of (1³ + 2³ + 3³ + ... + 15³) - (1 + 2 + 3 + ... + 15) is:\n(1) 14400    (2) 14200    (3) 14280    (4) 14520",
    given: "Given difference of sum of cubes and sum of natural numbers.",
    givenLines: ["Σn³ - Σn for n = 15"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Σn = (15 × 16) / 2 = 120",
          "Σn³ = (Σn)² = (120)² = 14400",
          "Σn³ - Σn = 14400 - 120 = 14280   ...(1)",
          "Correct Option: (3) 14280"
        ]
      }
    ]
  }
];

export const getMathClass10Chapter2Sums = (tabId = 'examples') => {
  switch (tabId) {
    case 'ex-2.1': return MATH_CLASS10_CH2_EXERCISE_2_1;
    case 'ex-2.2': return MATH_CLASS10_CH2_EXERCISE_2_2;
    case 'ex-2.3': return MATH_CLASS10_CH2_EXERCISE_2_3;
    case 'ex-2.4': return MATH_CLASS10_CH2_EXERCISE_2_4;
    case 'ex-2.5': return MATH_CLASS10_CH2_EXERCISE_2_5;
    case 'ex-2.6': return MATH_CLASS10_CH2_EXERCISE_2_6;
    case 'ex-2.7': return MATH_CLASS10_CH2_EXERCISE_2_7;
    case 'ex-2.8': return MATH_CLASS10_CH2_EXERCISE_2_8;
    case 'ex-2.9': return MATH_CLASS10_CH2_EXERCISE_2_9;
    case 'ex-2.10': return MATH_CLASS10_CH2_EXERCISE_2_10;
    default: return MATH_CLASS10_CH2_EXAMPLES;
  }
};
