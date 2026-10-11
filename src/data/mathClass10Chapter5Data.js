// src/data/mathClass10Chapter5Data.js
// Class 10 Mathematics - Chapter 5: Coordinate Geometry
// Full textbook exercises (Ex 5.1 to Ex 5.5) and worked examples
// Decoded Given, Step-by-step intermediate equations, numbered equations badges

export const MATH_CLASS10_CH5_PILLS = [
  { id: 'examples', label: 'Examples' },
  { id: 'ex-5.1', label: 'Exercise 5.1' },
  { id: 'ex-5.2', label: 'Exercise 5.2' },
  { id: 'ex-5.3', label: 'Exercise 5.3' },
  { id: 'ex-5.4', label: 'Exercise 5.4' },
  { id: 'ex-5.5', label: 'Exercise 5.5' }
];

export const MATH_CLASS10_CH5_EXAMPLES = [
  {
    id: "ch5-eg-5.1",
    exampleNum: "Example 5.1",
    problem: "Find the area of the triangle whose vertices are (-3, 5), (5, 6) and (5, -2).",
    given: "Given vertices of triangle: A(-3, 5), B(5, 6), C(5, -2).",
    givenLines: [
      "(x₁, y₁) = (-3, 5)",
      "(x₂, y₂) = (5, 6)",
      "(x₃, y₃) = (5, -2)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Area of ∆ABC = 1/2 × |(x₁y₂ + x₂y₃ + x₃y₁) - (x₂y₁ + x₃y₂ + x₁y₃)|",
          "= 1/2 × |[(-3)(6) + (5)(-2) + (5)(5)] - [(5)(5) + (5)(6) + (-3)(-2)]|   ...(1)",
          "= 1/2 × |[-18 - 10 + 25] - [25 + 30 + 6]|",
          "= 1/2 × |[-3] - [61]|",
          "= 1/2 × |-64| = 32 sq. units   ...(2)",
          "Area of the triangle is 32 sq. units."
        ]
      }
    ]
  },
  {
    id: "ch5-eg-5.8",
    exampleNum: "Example 5.8",
    problem: "Find the slope of a line joining the points (5, √5) with the origin (0, 0).",
    given: "Given points: (x₁, y₁) = (0, 0) and (x₂, y₂) = (5, √5).",
    givenLines: [
      "(x₁, y₁) = (0, 0)",
      "(x₂, y₂) = (5, √5)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Slope m = (y₂ - y₁) / (x₂ - x₁)",
          "m = (√5 - 0) / (5 - 0) = √5 / 5   ...(1)",
          "m = √5 / (√5 × √5) = 1 / √5   ...(2)",
          "Slope of the line is 1 / √5."
        ]
      }
    ]
  },
  {
    id: "ch5-eg-5.17",
    exampleNum: "Example 5.17",
    problem: "Find the equation of a straight line passing through (5, 7) and having slope m = -4/5.",
    given: "Given point (x₁, y₁) = (5, 7) and slope m = -4/5.",
    givenLines: [
      "Point (x₁, y₁) = (5, 7)",
      "Slope m = -4/5"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Point-slope form of straight line: y - y₁ = m(x - x₁)",
          "y - 7 = -4/5 (x - 5)   ...(1)",
          "5(y - 7) = -4(x - 5)",
          "5y - 35 = -4x + 20",
          "4x + 5y - 35 - 20 = 0",
          "4x + 5y - 55 = 0   ...(2)",
          "Required straight line equation is 4x + 5y - 55 = 0."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH5_EXERCISE_5_1 = [
  {
    id: "ex-5.1-q1",
    exampleNum: "Exercise 5.1 - Q1",
    problem: "Find the area of the triangle formed by the points:\n(i) (1, -1), (-4, 6) and (-3, -5)\n(ii) (-10, -4), (-8, -1) and (-3, -5)",
    given: "Given coordinates of the vertices of triangles.",
    givenLines: [
      "(i) (x₁, y₁) = (1, -1), (x₂, y₂) = (-4, 6), (x₃, y₃) = (-3, -5)",
      "(ii) (x₁, y₁) = (-10, -4), (x₂, y₂) = (-8, -1), (x₃, y₃) = (-3, -5)"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "Sub-division (i)",
        lines: [
          "Area = 1/2 × |(x₁y₂ + x₂y₃ + x₃y₁) - (x₂y₁ + x₃y₂ + x₁y₃)|",
          "= 1/2 × |[(1)(6) + (-4)(-5) + (-3)(-1)] - [(-4)(-1) + (-3)(6) + (1)(-5)]|   ...(1)",
          "= 1/2 × |[6 + 20 + 3] - [4 - 18 - 5]|",
          "= 1/2 × |29 - (-19)| = 1/2 × |48| = 24 sq. units   ...(2)",
          "Area of triangle is 24 sq. units."
        ]
      },
      {
        partNum: "2.",
        heading: "Sub-division (ii)",
        lines: [
          "Area = 1/2 × |[(-10)(-1) + (-8)(-5) + (-3)(-4)] - [(-8)(-4) + (-3)(-1) + (-10)(-5)]|   ...(1)",
          "= 1/2 × |[10 + 40 + 12] - [32 + 3 + 50]|",
          "= 1/2 × |62 - 85| = 1/2 × |-23| = 23 / 2 = 11.5 sq. units   ...(2)",
          "Area of triangle is 11.5 sq. units."
        ]
      }
    ]
  },
  {
    id: "ex-5.1-q2",
    exampleNum: "Exercise 5.1 - Q2",
    problem: "Determine whether the sets of points are collinear:\n(i) (-1/2, 3), (-5, 6) and (-8, 8)\n(ii) (a, b + c), (b, c + a) and (c, a + b)",
    given: "Given three points to test for collinearity (Area = 0).",
    givenLines: [
      "(i) (-1/2, 3), (-5, 6), (-8, 8)",
      "(ii) (a, b + c), (b, c + a), (c, a + b)"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "Sub-division (i)",
        lines: [
          "Area = 1/2 × |[(-1/2)(6) + (-5)(8) + (-8)(3)] - [(-5)(3) + (-8)(6) + (-1/2)(8)]|",
          "= 1/2 × |[-3 - 40 - 24] - [-15 - 48 - 4]|   ...(1)",
          "= 1/2 × |-67 - (-67)| = 0   ...(2)",
          "Since area of the triangle is 0, the points are collinear."
        ]
      },
      {
        partNum: "2.",
        heading: "Sub-division (ii)",
        lines: [
          "Area = 1/2 × |[a(c + a) + b(a + b) + c(b + c)] - [b(b + c) + c(c + a) + a(a + b)]|   ...(1)",
          "= 1/2 × |(ac + a² + ab + b² + bc + c²) - (b² + bc + c² + ca + a² + ab)|",
          "= 1/2 × (0) = 0   ...(2)",
          "Since area of triangle is 0, the given points are collinear."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH5_EXERCISE_5_2 = [
  {
    id: "ex-5.2-q1",
    exampleNum: "Exercise 5.2 - Q1",
    problem: "What is the slope of a line whose inclination with positive direction of x-axis is:\n(i) 90°\n(ii) 0°",
    given: "Given angles of inclination θ.",
    givenLines: [
      "(i) θ = 90°",
      "(ii) θ = 0°"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Slope m = tan(θ)",
          "(i) For θ = 90°, m = tan(90°) = undefined (or not defined)   ...(1)",
          "(ii) For θ = 0°, m = tan(0°) = 0   ...(2)"
        ]
      }
    ]
  },
  {
    id: "ex-5.2-q2",
    exampleNum: "Exercise 5.2 - Q2",
    problem: "What is the inclination of a line whose slope is:\n(i) 0\n(ii) 1",
    given: "Given slope m of the lines.",
    givenLines: [
      "(i) m = 0",
      "(ii) m = 1"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "tan(θ) = m",
          "(i) tan(θ) = 0 ⇒ θ = 0°   ...(1)",
          "(ii) tan(θ) = 1 ⇒ θ = 45°   ...(2)"
        ]
      }
    ]
  },
  {
    id: "ex-5.2-q3",
    exampleNum: "Exercise 5.2 - Q3",
    problem: "Find the slope of a line joining the points:\n(i) (5, √5) with origin\n(ii) (sin θ, -cos θ) and (-sin θ, cos θ)",
    given: "Given coordinate pairs.",
    givenLines: [
      "(i) (5, √5) and (0, 0)",
      "(ii) (sin θ, -cos θ) and (-sin θ, cos θ)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Slope m = (y₂ - y₁) / (x₂ - x₁)",
          "(i) m = (√5 - 0) / (5 - 0) = √5 / 5 = 1 / √5   ...(1)",
          "(ii) m = [cos θ - (-cos θ)] / [-sin θ - sin θ]",
          "m = (2 cos θ) / (-2 sin θ) = -cos θ / sin θ = -cot θ   ...(2)"
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH5_EXERCISE_5_3 = [
  {
    id: "ex-5.3-q1",
    exampleNum: "Exercise 5.3 - Q1",
    problem: "Find the equation of a straight line passing through:\n(i) (1, -5) with slope 3\n(ii) (2, 2√3) with inclination 75°",
    given: "Given point and slope/inclination.",
    givenLines: [
      "(i) Point (1, -5), slope m = 3",
      "(ii) Point (2, 2√3), θ = 75°"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "Sub-division (i)",
        lines: [
          "Equation: y - y₁ = m(x - x₁)",
          "y - (-5) = 3(x - 1)   ...(1)",
          "y + 5 = 3x - 3",
          "3x - y - 8 = 0   ...(2)",
          "Equation of the straight line is 3x - y - 8 = 0."
        ]
      }
    ]
  },
  {
    id: "ex-5.3-q2",
    exampleNum: "Exercise 5.3 - Q2",
    problem: "Find the equation of a line which passes through (5, 7) and has intercepts on the axes which are equal in magnitude but opposite in sign.",
    given: "Given intercepts a and b where b = -a, and line passes through (5, 7).",
    givenLines: [
      "Intercepts: a and -a",
      "Passes through (5, 7)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Intercept form: x / a + y / b = 1",
          "Since b = -a: x / a + y / (-a) = 1 ⇒ x - y = a   ...(1)",
          "Substitute point (5, 7): 5 - 7 = a ⇒ a = -2   ...(2)",
          "Substitute a = -2 into (1): x - y = -2",
          "x - y + 2 = 0   ...(3)",
          "Required equation of the straight line is x - y + 2 = 0."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH5_EXERCISE_5_4 = [
  {
    id: "ex-5.4-q1",
    exampleNum: "Exercise 5.4 - Q1",
    problem: "Find the slope of the following straight lines:\n(i) 5y - 3 = 0\n(ii) 7x - 3/17 = 0",
    given: "Given equations of straight lines.",
    givenLines: [
      "(i) 5y - 3 = 0",
      "(ii) 7x - 3/17 = 0"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Slope of ax + by + c = 0 is m = -a / b",
          "(i) 5y - 3 = 0 ⇒ 0x + 5y - 3 = 0 ⇒ m = -0 / 5 = 0   ...(1)",
          "(ii) 7x - 3/17 = 0 ⇒ 7x + 0y - 3/17 = 0 ⇒ m = -7 / 0 = undefined   ...(2)"
        ]
      }
    ]
  },
  {
    id: "ex-5.4-q2",
    exampleNum: "Exercise 5.4 - Q2",
    problem: "Find the equation of a straight line parallel to 2x + 3y = 10 and passing through (4, 3).",
    given: "Given line 2x + 3y = 10 and passing through (4, 3).",
    givenLines: [
      "Line: 2x + 3y - 10 = 0",
      "Passes through (4, 3)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Any straight line parallel to 2x + 3y - 10 = 0 is of the form:",
          "2x + 3y + k = 0   ...(1)",
          "Since it passes through (4, 3): 2(4) + 3(3) + k = 0",
          "8 + 9 + k = 0 ⇒ 17 + k = 0 ⇒ k = -17   ...(2)",
          "Substitute k = -17 into (1): 2x + 3y - 17 = 0   ...(3)",
          "Required straight line equation is 2x + 3y - 17 = 0."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH5_EXERCISE_5_5 = [
  {
    id: "ex-5.5-q1",
    exampleNum: "Exercise 5.5 - Q1",
    problem: "The slope of the line joining (12, 3) and (4, a) is 1/8. The value of 'a' is:\n(1) 1    (2) 2    (3) -5    (4) 4",
    given: "Given points (12, 3), (4, a) and slope m = 1/8.",
    givenLines: [
      "(x₁, y₁) = (12, 3)",
      "(x₂, y₂) = (4, a)",
      "m = 1/8"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "m = (y₂ - y₁) / (x₂ - x₁)",
          "1/8 = (a - 3) / (4 - 12)   ...(1)",
          "1/8 = (a - 3) / (-8)",
          "-8 / 8 = a - 3 ⇒ -1 = a - 3",
          "a = -1 + 3 = 2   ...(2)",
          "Correct Option: (2) 2"
        ]
      }
    ]
  },
  {
    id: "ex-5.5-q2",
    exampleNum: "Exercise 5.5 - Q2",
    problem: "The slope of the straight line 7x - 2y = 15 is:\n(1) 7/2    (2) -7/2    (3) 2/7    (4) -2/7",
    given: "Given line equation 7x - 2y - 15 = 0.",
    givenLines: [
      "a = 7, b = -2, c = -15"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Slope m = -a / b = -7 / (-2) = 7/2   ...(1)",
          "Correct Option: (1) 7/2"
        ]
      }
    ]
  },
  {
    id: "ex-5.5-q3",
    exampleNum: "Exercise 5.5 - Q3",
    problem: "The area of triangle formed by the points (-5, 0), (0, -5) and (5, 0) is:\n(1) 0 sq.units    (2) 25 sq.units    (3) 5 sq.units    (4) none of these",
    given: "Vertices: A(-5, 0), B(0, -5), C(5, 0).",
    givenLines: ["Base along x-axis from -5 to 5 = 10", "Height along y-axis = 5"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Area = 1/2 × base × height = 1/2 × 10 × 5 = 25 sq.units   ...(1)",
          "Correct Option: (2) 25 sq.units"
        ]
      }
    ]
  },
  {
    id: "ex-5.5-q4",
    exampleNum: "Exercise 5.5 - Q4",
    problem: "A man walks near a wall such that the distance between him and the wall is 10 units. Consider the wall to be the Y axis. The path travelled by the man is:\n(1) x = 10    (2) y = 10    (3) x = 0    (4) y = 0",
    given: "Distance from Y-axis is fixed at 10 units.",
    givenLines: ["x-coordinate is constant at 10"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Any point with constant distance 10 from Y-axis has x = 10.",
          "Correct Option: (1) x = 10   ...(1)"
        ]
      }
    ]
  },
  {
    id: "ex-5.5-q5",
    exampleNum: "Exercise 5.5 - Q5",
    problem: "The straight line given by the equation x = 11 is:\n(1) parallel to X-axis    (2) parallel to Y-axis    (3) passing through the origin    (4) passing through the point (0, 11)",
    given: "Given line equation x = 11.",
    givenLines: ["Slope is undefined; vertical line"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "The equation x = c represents a vertical line parallel to the Y-axis.",
          "Correct Option: (2) parallel to Y-axis   ...(1)"
        ]
      }
    ]
  },
  {
    id: "ex-5.5-q6",
    exampleNum: "Exercise 5.5 - Q6",
    problem: "If (5, 7), (3, p) and (6, 6) are collinear, then the value of p is:\n(1) 3    (2) 6    (3) 9    (4) 12",
    given: "Given points are collinear.",
    givenLines: ["Slope of AB = Slope of BC"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "(p - 7) / (3 - 5) = (6 - p) / (6 - 3)",
          "(p - 7) / (-2) = (6 - p) / 3",
          "3(p - 7) = -2(6 - p) ⇒ 3p - 21 = -12 + 2p ⇒ p = 9   ...(1)",
          "Correct Option: (3) 9"
        ]
      }
    ]
  },
  {
    id: "ex-5.5-q7",
    exampleNum: "Exercise 5.5 - Q7",
    problem: "The point of intersection of 3x - y = 4 and x + y = 8 is:\n(1) (5, 3)    (2) (2, 4)    (3) (3, 5)    (4) (4, 4)",
    given: "Given lines 3x - y = 4 and x + y = 8.",
    givenLines: ["Add both equations: 4x = 12"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Adding equations: 4x = 12 ⇒ x = 3   ...(1)",
          "Substitute in x + y = 8 ⇒ 3 + y = 8 ⇒ y = 5   ...(2)",
          "Intersection point is (3, 5).",
          "Correct Option: (3) (3, 5)"
        ]
      }
    ]
  },
  {
    id: "ex-5.5-q8",
    exampleNum: "Exercise 5.5 - Q8",
    problem: "The slope of the line which is perpendicular to a line joining the points (0, 0) and (-8, 8) is:\n(1) -1    (2) 1    (3) 1/3    (4) -8",
    given: "Line passes through (0, 0) and (-8, 8).",
    givenLines: ["m₁ = (8 - 0) / (-8 - 0) = -1"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Slope m₁ = (8 - 0) / (-8 - 0) = -1",
          "For perpendicular lines: m₁ · m₂ = -1 ⇒ (-1) · m₂ = -1 ⇒ m₂ = 1   ...(1)",
          "Correct Option: (2) 1"
        ]
      }
    ]
  },
  {
    id: "ex-5.5-q9",
    exampleNum: "Exercise 5.5 - Q9",
    problem: "If slope of the line joining (12, 3) and (4, a) is 1/8, then the value of 'a' is:\n(1) 1    (2) 2    (3) -5    (4) 4",
    given: "Points (12, 3) and (4, a) with slope = 1/8.",
    givenLines: ["(a - 3) / (4 - 12) = 1/8"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "(a - 3) / (-8) = 1/8 ⇒ a - 3 = -1 ⇒ a = 2   ...(1)",
          "Correct Option: (2) 2"
        ]
      }
    ]
  },
  {
    id: "ex-5.5-q10",
    exampleNum: "Exercise 5.5 - Q10",
    problem: "If x = a, y = b is the solution of the equations x - y = 2 and x + y = 4, then the values of a and b are, respectively:\n(1) 3 and 5    (2) 5 and 3    (3) 3 and 1    (4) -1 and -3",
    given: "Given equations x - y = 2 and x + y = 4.",
    givenLines: ["x - y = 2", "x + y = 4"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Adding equations: 2x = 6 ⇒ x = 3 ⇒ a = 3   ...(1)",
          "Subtracting equations: 2y = 2 ⇒ y = 1 ⇒ b = 1   ...(2)",
          "Therefore, a = 3 and b = 1.",
          "Correct Option: (3) 3 and 1"
        ]
      }
    ]
  }
];

export const getMathClass10Chapter5Sums = (tabId = 'examples') => {
  switch (tabId) {
    case 'ex-5.1': return MATH_CLASS10_CH5_EXERCISE_5_1;
    case 'ex-5.2': return MATH_CLASS10_CH5_EXERCISE_5_2;
    case 'ex-5.3': return MATH_CLASS10_CH5_EXERCISE_5_3;
    case 'ex-5.4': return MATH_CLASS10_CH5_EXERCISE_5_4;
    case 'ex-5.5': return MATH_CLASS10_CH5_EXERCISE_5_5;
    default: return MATH_CLASS10_CH5_EXAMPLES;
  }
};
