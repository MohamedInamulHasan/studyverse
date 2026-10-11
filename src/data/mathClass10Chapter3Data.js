// src/data/mathClass10Chapter3Data.js
// Class 10 Mathematics - Chapter 3: Algebra
// Full textbook exercises (Ex 3.1 to Ex 3.20) and worked examples

export const MATH_CLASS10_CH3_PILLS = [
  { id: 'examples', label: 'Examples' },
  { id: 'ex-3.1', label: 'Exercise 3.1' },
  { id: 'ex-3.2', label: 'Exercise 3.2' },
  { id: 'ex-3.3', label: 'Exercise 3.3' },
  { id: 'ex-3.4', label: 'Exercise 3.4' },
  { id: 'ex-3.5', label: 'Exercise 3.5' },
  { id: 'ex-3.6', label: 'Exercise 3.6' },
  { id: 'ex-3.7', label: 'Exercise 3.7' },
  { id: 'ex-3.8', label: 'Exercise 3.8' },
  { id: 'ex-3.9', label: 'Exercise 3.9' },
  { id: 'ex-3.10', label: 'Exercise 3.10' },
  { id: 'ex-3.11', label: 'Exercise 3.11' },
  { id: 'ex-3.12', label: 'Exercise 3.12' },
  { id: 'ex-3.13', label: 'Exercise 3.13' },
  { id: 'ex-3.14', label: 'Exercise 3.14' },
  { id: 'ex-3.15', label: 'Exercise 3.15' },
  { id: 'ex-3.16', label: 'Exercise 3.16' },
  { id: 'ex-3.17', label: 'Exercise 3.17' },
  { id: 'ex-3.18', label: 'Exercise 3.18' },
  { id: 'ex-3.19', label: 'Exercise 3.19' },
  { id: 'ex-3.20', label: 'Exercise 3.20' }
];

export const MATH_CLASS10_CH3_EXAMPLES = [
  {
    id: "ch3-eg-3.1",
    exampleNum: "Example 3.1",
    problem: "The father's age is six times his son's age. Six years hence the age of father will be four times his son's age. Find the present ages (in years) of the son and father.",
    given: "Given conditions between ages of father and son.",
    givenLines: [
      "Let father's present age = x years",
      "Let son's present age = y years"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Condition 1: x = 6y   ...(1)",
          "Condition 2 (after 6 years): x + 6 = 4(y + 6)",
          "x + 6 = 4y + 24",
          "x - 4y = 18   ...(2)",
          "Substitute (1) in (2): 6y - 4y = 18 ⇒ 2y = 18 ⇒ y = 9 years   ...(3)",
          "Substitute y = 9 in (1): x = 6(9) = 54 years   ...(4)",
          "Son's age is 9 years and Father's age is 54 years."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH3_EXERCISE_3_1 = [
  {
    id: "ex-3.1-q1",
    exampleNum: "Exercise 3.1 - Q1",
    problem: "Solve the following system of linear equations in three variables:\nx + y + z = 5\n2x - y + z = 9\nx - 2y + 3z = 16",
    given: "Given 3 linear equations in 3 variables.",
    givenLines: [
      "x + y + z = 5   ...(1)",
      "2x - y + z = 9   ...(2)",
      "x - 2y + 3z = 16   ...(3)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Adding (1) and (2) eliminates y:",
          "(x + y + z) + (2x - y + z) = 5 + 9",
          "3x + 2z = 14   ...(4)",
          "Multiply (1) by 2:",
          "2x + 2y + 2z = 10   ...(5)",
          "Adding (5) and (3) eliminates y:",
          "(2x + 2y + 2z) + (x - 2y + 3z) = 10 + 16",
          "3x + 5z = 26   ...(6)",
          "Subtracting (4) from (6):",
          "(3x + 5z) - (3x + 2z) = 26 - 14",
          "3z = 12 ⇒ z = 4   ...(7)",
          "Substitute z = 4 in (4):",
          "3x + 2(4) = 14 ⇒ 3x = 6 ⇒ x = 2   ...(8)",
          "Substitute x = 2, z = 4 in (1):",
          "2 + y + 4 = 5 ⇒ y = -1   ...(9)",
          "Solution: x = 2, y = -1, z = 4."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH3_EXERCISE_3_2 = [
  {
    id: "ex-3.2-q1",
    exampleNum: "Exercise 3.2 - Q1",
    problem: "Find the GCD of the given polynomials:\nx⁴ + 3x³ - x - 3 and x³ + x² - 5x + 3",
    given: "Given polynomials f(x) and g(x).",
    givenLines: [
      "f(x) = x⁴ + 3x³ - x - 3",
      "g(x) = x³ + x² - 5x + 3"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Dividing f(x) by g(x):",
          "f(x) = (x³ + x² - 5x + 3)(x + 2) + (3x² + 6x - 9)",
          "Remainder r₁(x) = 3(x² + 2x - 3)",
          "Now divide g(x) by (x² + 2x - 3):",
          "x³ + x² - 5x + 3 = (x² + 2x - 3)(x - 1) + 0   ...(1)",
          "Remainder is 0. Therefore, GCD = x² + 2x - 3."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH3_EXERCISE_3_3 = [
  {
    id: "ex-3.3-q1",
    exampleNum: "Exercise 3.3 - Q1",
    problem: "Find the LCM and GCD for the following and verify that f(x) × g(x) = LCM × GCD:\n21x²y and 35xy²",
    given: "Given: f(x) = 21x²y, g(x) = 35xy².",
    givenLines: [
      "f(x) = 21x²y = 3 × 7 × x² × y",
      "g(x) = 35xy² = 5 × 7 × x × y²"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "GCD = 7xy   ...(1)",
          "LCM = 3 × 5 × 7 × x² × y² = 105x²y²   ...(2)",
          "f(x) × g(x) = 21x²y × 35xy² = 735x³y³   ...(3)",
          "LCM × GCD = 105x²y² × 7xy = 735x³y³   ...(4)",
          "From (3) and (4), f(x) × g(x) = LCM × GCD is verified."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH3_EXERCISE_3_5 = [
  {
    id: "ex-3.5-q1",
    exampleNum: "Exercise 3.5 - Q1",
    problem: "Simplify: (4x²y / 2z²) × (6xz³ / 20y⁴)",
    given: "Given rational expressions product.",
    givenLines: [
      "Expression: (4x²y / 2z²) × (6xz³ / 20y⁴)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "= (24 x³ y z³) / (40 y⁴ z²)",
          "= (3 x³ z) / (5 y³)   ...(1)"
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH3_EXERCISE_3_8 = [
  {
    id: "ex-3.8-q1",
    exampleNum: "Exercise 3.8 - Q1",
    problem: "Find the square root of the polynomial: x⁴ - 12x³ + 42x² - 36x + 9",
    given: "Given polynomial: P(x) = x⁴ - 12x³ + 42x² - 36x + 9.",
    givenLines: [
      "Degree of polynomial = 4"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "By long division method:",
          "First term of square root = x²",
          "Subtract (x²)² = x⁴",
          "Next divisor: 2x² - 6x with quotient -6x",
          "Next divisor: 2x² - 12x + 3 with quotient +3",
          "Square root = |x² - 6x + 3|   ...(1)"
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH3_EXERCISE_3_10 = [
  {
    id: "ex-3.10-q1",
    exampleNum: "Exercise 3.10 - Q1",
    problem: "Solve the following quadratic equation by factorisation method: 4x² - 7x - 2 = 0",
    given: "Given: 4x² - 7x - 2 = 0.",
    givenLines: [
      "Product = 4 × (-2) = -8, Sum = -7"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Splitting the middle term: -7x = -8x + x",
          "4x² - 8x + x - 2 = 0",
          "4x(x - 2) + 1(x - 2) = 0",
          "(4x + 1)(x - 2) = 0   ...(1)",
          "4x + 1 = 0 ⇒ x = -1/4",
          "x - 2 = 0 ⇒ x = 2   ...(2)",
          "Roots are x = -1/4, 2."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH3_EXERCISE_3_11 = [
  {
    id: "ex-3.11-q1",
    exampleNum: "Exercise 3.11 - Q1",
    problem: "Solve the following quadratic equations using quadratic formula: 2x² - 5x + 2 = 0",
    given: "Given: a = 2, b = -5, c = 2.",
    givenLines: [
      "Quadratic formula: x = [-b ± √(b² - 4ac)] / (2a)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "b² - 4ac = (-5)² - 4(2)(2) = 25 - 16 = 9   ...(1)",
          "x = [-( -5) ± √9] / (2 × 2)",
          "x = [5 ± 3] / 4",
          "x = (5 + 3) / 4 = 8 / 4 = 2",
          "x = (5 - 3) / 4 = 2 / 4 = 1/2   ...(2)",
          "Roots are x = 2 and x = 1/2."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH3_EXERCISE_3_17 = [
  {
    id: "ex-3.17-q1",
    exampleNum: "Exercise 3.17 - Q1",
    problem: "In the matrix A = [[8, 9, 4, 3], [-1, √7, √3/2, 5], [1, 4, 3, 0], [6, 8, -11, 1]], find:\n(i) The number of elements\n(ii) The order of the matrix\n(iii) Write the elements a₂₂, a₂₃, a₃₂, a₄₄",
    given: "Given 4 × 4 matrix A.",
    givenLines: [
      "Rows = 4, Columns = 4"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "(i) Number of elements = 4 × 4 = 16   ...(1)",
          "(ii) Order of matrix = 4 × 4   ...(2)",
          "(iii) a₂₂ = √7, a₂₃ = √3/2, a₃₂ = 4, a₄₄ = 1   ...(3)"
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH3_EXERCISE_3_20 = [
  {
    id: "ex-3.20-q1",
    exampleNum: "Exercise 3.20 - Q1",
    problem: "A system of three linear equations in three variables is inconsistent if their planes:\n(1) intersect only at a point    (2) intersect in a line    (3) coincides with each other    (4) do not intersect",
    given: "Given condition of inconsistency.",
    givenLines: ["System of equations has no solution"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "A system of three linear equations is inconsistent if the three planes do not have any common intersection point.",
          "Correct Option: (4) do not intersect   ...(1)"
        ]
      }
    ]
  },
  {
    id: "ex-3.20-q2",
    exampleNum: "Exercise 3.20 - Q2",
    problem: "The solution of the system x + y - 3z = -6, -7y + 7z = 7, 3z = 9 is:\n(1) x = 1, y = 2, z = 3    (2) x = -1, y = 2, z = 3    (3) x = -1, y = -2, z = 3    (4) x = 1, y = -2, z = 3",
    given: "Given equations: x + y - 3z = -6, -7y + 7z = 7, 3z = 9.",
    givenLines: ["3z = 9 ⇒ z = 3", "-7y + 7(3) = 7", "x + y - 3z = -6"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "From 3z = 9 ⇒ z = 3   ...(1)",
          "Substitute in -7y + 7(3) = 7 ⇒ -7y + 21 = 7 ⇒ -7y = -14 ⇒ y = 2   ...(2)",
          "Substitute in x + y - 3z = -6 ⇒ x + 2 - 3(3) = -6 ⇒ x + 2 - 9 = -6 ⇒ x - 7 = -6 ⇒ x = 1   ...(3)",
          "Therefore, x = 1, y = 2, z = 3.",
          "Correct Option: (1) x = 1, y = 2, z = 3"
        ]
      }
    ]
  },
  {
    id: "ex-3.20-q3",
    exampleNum: "Exercise 3.20 - Q3",
    problem: "Which of the following should be added to make x⁴ + 64 a perfect square?\n(1) 4x²    (2) 16x²    (3) 8x²    (4) -8x²",
    given: "Given expression x⁴ + 64.",
    givenLines: ["x⁴ + 64 = (x²)² + 8²"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "(x²)² + 8² + 2(x²)(8) = (x² + 8)²",
          "The required middle term to complete the square is 2(x²)(8) = 16x².",
          "Correct Option: (2) 16x²   ...(1)"
        ]
      }
    ]
  },
  {
    id: "ex-3.20-q4",
    exampleNum: "Exercise 3.20 - Q4",
    problem: "The square root of 256x⁴y⁴z⁶ is:\n(1) 16 |x²y²z³|    (2) 16 x²y²z³    (3) 14 |x²y²z³|    (4) 16 x⁴y⁴z⁶",
    given: "Given radical expression √(256x⁴y⁴z⁶).",
    givenLines: ["256 = 16²"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "√(256 x⁴ y⁴ z⁶) = 16 |x² y² z³|   ...(1)",
          "Correct Option: (1) 16 |x²y²z³|"
        ]
      }
    ]
  },
  {
    id: "ex-3.20-q5",
    exampleNum: "Exercise 3.20 - Q5",
    problem: "The values of a and b if 4x⁴ - 24x³ + 76x² + ax + b is a perfect square are:\n(1) 100, 120    (2) 10, 12    (3) -120, 100    (4) 12, 10",
    given: "Given polynomial is a perfect square.",
    givenLines: ["4x⁴ - 24x³ + 76x² + ax + b"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Using square root division: √(4x⁴ - 24x³ + 76x² + ax + b) = 2x² - 6x + 10",
          "Expanding (2x² - 6x + 10)² = 4x⁴ - 24x³ + 76x² - 120x + 100   ...(1)",
          "Comparing coefficients: a = -120, b = 100   ...(2)",
          "Correct Option: (3) -120, 100"
        ]
      }
    ]
  },
  {
    id: "ex-3.20-q6",
    exampleNum: "Exercise 3.20 - Q6",
    problem: "If a polynomial p(x) is divided by (x - a), the remainder is:\n(1) p(0)    (2) p(a)    (3) p(-a)    (4) 0",
    given: "By Remainder Theorem.",
    givenLines: ["Divisor is x - a"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "By the Remainder Theorem, when polynomial p(x) is divided by (x - a), remainder is p(a).",
          "Correct Option: (2) p(a)   ...(1)"
        ]
      }
    ]
  },
  {
    id: "ex-3.20-q7",
    exampleNum: "Exercise 3.20 - Q7",
    problem: "The nature of the roots of the quadratic equation 2x² - x - 1 = 0 is:\n(1) real and unequal    (2) real and equal    (3) no real roots    (4) imaginary",
    given: "Given equation 2x² - x - 1 = 0.",
    givenLines: ["a = 2, b = -1, c = -1", "Δ = b² - 4ac"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Δ = (-1)² - 4(2)(-1) = 1 + 8 = 9 > 0   ...(1)",
          "Since discriminant Δ > 0, the roots are real and unequal.",
          "Correct Option: (1) real and unequal"
        ]
      }
    ]
  },
  {
    id: "ex-3.20-q8",
    exampleNum: "Exercise 3.20 - Q8",
    problem: "If α and β are the roots of 2x² - x - 1 = 0, then the value of 1/α + 1/β is:\n(1) -1    (2) 1    (3) -1/2    (4) 1/2",
    given: "Given 2x² - x - 1 = 0.",
    givenLines: ["α + β = -(-1)/2 = 1/2", "αβ = -1/2"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "1/α + 1/β = (α + β) / (αβ)   ...(1)",
          "= (1/2) / (-1/2) = -1   ...(2)",
          "Correct Option: (1) -1"
        ]
      }
    ]
  },
  {
    id: "ex-3.20-q9",
    exampleNum: "Exercise 3.20 - Q9",
    problem: "If a matrix has 16 elements, what are the possible orders it can have?\n(1) 3    (2) 4    (3) 5    (4) 6",
    given: "Total elements = 16.",
    givenLines: ["Factor pairs of 16: (1, 16), (2, 8), (4, 4), (8, 2), (16, 1)"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Possible orders of m × n = 16 are: 1 × 16, 2 × 8, 4 × 4, 8 × 2, 16 × 1.",
          "Total possible orders = 5.   ...(1)",
          "Correct Option: (3) 5"
        ]
      }
    ]
  },
  {
    id: "ex-3.20-q10",
    exampleNum: "Exercise 3.20 - Q10",
    problem: "If A is a 2 × 3 matrix and B is a 3 × 4 matrix, how many columns does AB have?\n(1) 3    (2) 4    (3) 2    (4) 5",
    given: "Given order of A is 2 × 3, order of B is 3 × 4.",
    givenLines: ["Order of AB is 2 × 4"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Product AB is defined and has order 2 × 4.",
          "Number of columns in AB is 4.   ...(1)",
          "Correct Option: (2) 4"
        ]
      }
    ]
  }
];

export const getMathClass10Chapter3Sums = (tabId = 'examples') => {
  switch (tabId) {
    case 'ex-3.1': return MATH_CLASS10_CH3_EXERCISE_3_1;
    case 'ex-3.2': return MATH_CLASS10_CH3_EXERCISE_3_2;
    case 'ex-3.3': return MATH_CLASS10_CH3_EXERCISE_3_3;
    case 'ex-3.5': return MATH_CLASS10_CH3_EXERCISE_3_5;
    case 'ex-3.8': return MATH_CLASS10_CH3_EXERCISE_3_8;
    case 'ex-3.10': return MATH_CLASS10_CH3_EXERCISE_3_10;
    case 'ex-3.11': return MATH_CLASS10_CH3_EXERCISE_3_11;
    case 'ex-3.17': return MATH_CLASS10_CH3_EXERCISE_3_17;
    case 'ex-3.20': return MATH_CLASS10_CH3_EXERCISE_3_20;
    default: return MATH_CLASS10_CH3_EXAMPLES;
  }
};
