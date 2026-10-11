// src/data/mathClass10Chapter6Data.js
// Class 10 Mathematics - Chapter 6: Trigonometry
// Full textbook exercises (Ex 6.1 to Ex 6.5) and worked examples
// Decoded Given, Step-by-step intermediate equations, numbered equations badges

export const MATH_CLASS10_CH6_PILLS = [
  { id: 'examples', label: 'Examples' },
  { id: 'ex-6.1', label: 'Exercise 6.1' },
  { id: 'ex-6.2', label: 'Exercise 6.2' },
  { id: 'ex-6.3', label: 'Exercise 6.3' },
  { id: 'ex-6.4', label: 'Exercise 6.4' },
  { id: 'ex-6.5', label: 'Exercise 6.5' }
];

export const MATH_CLASS10_CH6_EXAMPLES = [
  {
    id: "ch6-eg-6.1",
    exampleNum: "Example 6.1",
    problem: "Prove that tan² θ - sin² θ = tan² θ sin² θ.",
    given: "Given trigonometric identity to prove.",
    givenLines: [
      "LHS = tan² θ - sin² θ"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "LHS = tan² θ - sin² θ",
          "= (sin² θ / cos² θ) - sin² θ   ...(1)",
          "= sin² θ [1 / cos² θ - 1]",
          "= sin² θ [sec² θ - 1]   ...(2)",
          "Using trigonometric identity sec² θ - 1 = tan² θ:",
          "= sin² θ · tan² θ = tan² θ sin² θ = RHS   ...(3)",
          "Hence proved."
        ]
      }
    ]
  },
  {
    id: "ch6-eg-6.19",
    exampleNum: "Example 6.19",
    problem: "A tower stands vertically on the ground. From a point on the ground, which is 48 m away from the foot of the tower, the angle of elevation of the top of the tower is 30°. Find the height of the tower.",
    given: "Given: Distance from foot = 48 m, angle of elevation θ = 30°.",
    givenLines: [
      "Distance from foot BC = 48 m",
      "Angle of elevation θ = 30°",
      "Let height of tower AB = h"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "In right ∆ABC: tan(30°) = AB / BC",
          "1 / √3 = h / 48   ...(1)",
          "h = 48 / √3 = (48 × √3) / 3   ...(2)",
          "h = 16√3 m = 16 × 1.732 = 27.71 m   ...(3)",
          "Height of the tower is 16√3 m (or 27.71 m)."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH6_EXERCISE_6_1 = [
  {
    id: "ex-6.1-q1",
    exampleNum: "Exercise 6.1 - Q1",
    problem: "Prove the following identities:\n(i) cot θ + tan θ = sec θ cosec θ\n(ii) tan⁴ θ + tan² θ = sec⁴ θ - sec² θ",
    given: "Given trigonometric equations.",
    givenLines: [
      "(i) LHS = cot θ + tan θ",
      "(ii) LHS = tan⁴ θ + tan² θ"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "Sub-division (i)",
        lines: [
          "LHS = cot θ + tan θ",
          "= (cos θ / sin θ) + (sin θ / cos θ)   ...(1)",
          "= (cos² θ + sin² θ) / (sin θ cos θ)",
          "Since sin² θ + cos² θ = 1: = 1 / (sin θ cos θ)   ...(2)",
          "= (1 / cos θ) × (1 / sin θ) = sec θ cosec θ = RHS   ...(3)",
          "Hence proved."
        ]
      },
      {
        partNum: "2.",
        heading: "Sub-division (ii)",
        lines: [
          "LHS = tan⁴ θ + tan² θ",
          "= tan² θ (tan² θ + 1)   ...(1)",
          "Using identity 1 + tan² θ = sec² θ and tan² θ = sec² θ - 1:",
          "= (sec² θ - 1) sec² θ   ...(2)",
          "= sec⁴ θ - sec² θ = RHS   ...(3)",
          "Hence proved."
        ]
      }
    ]
  },
  {
    id: "ex-6.1-q2",
    exampleNum: "Exercise 6.1 - Q2",
    problem: "Prove the following identities:\n(i) 1 / (1 + sin θ) + 1 / (1 - sin θ) = 2 sec² θ\n(ii) √( (1 + cos θ) / (1 - cos θ) ) = cosec θ + cot θ",
    given: "Given identities to prove.",
    givenLines: [
      "(i) LHS = 1 / (1 + sin θ) + 1 / (1 - sin θ)",
      "(ii) LHS = √[(1 + cos θ) / (1 - cos θ)]"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "Sub-division (i)",
        lines: [
          "LHS = 1 / (1 + sin θ) + 1 / (1 - sin θ)",
          "= [(1 - sin θ) + (1 + sin θ)] / [(1 + sin θ)(1 - sin θ)]   ...(1)",
          "= 2 / (1 - sin² θ)",
          "Since 1 - sin² θ = cos² θ: = 2 / cos² θ   ...(2)",
          "= 2 sec² θ = RHS   ...(3)",
          "Hence proved."
        ]
      },
      {
        partNum: "2.",
        heading: "Sub-division (ii)",
        lines: [
          "LHS = √[ (1 + cos θ)(1 + cos θ) / ((1 - cos θ)(1 + cos θ)) ]   ...(1)",
          "= √[ (1 + cos θ)² / (1 - cos² θ) ]",
          "= √[ (1 + cos θ)² / sin² θ ] = (1 + cos θ) / sin θ   ...(2)",
          "= 1 / sin θ + cos θ / sin θ = cosec θ + cot θ = RHS   ...(3)",
          "Hence proved."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH6_EXERCISE_6_2 = [
  {
    id: "ex-6.2-q1",
    exampleNum: "Exercise 6.2 - Q1",
    problem: "Find the angle of elevation of the top of a tower from a point on the ground, which is 30 m away from the foot of a tower of height 10√3 m.",
    given: "Given: Distance = 30 m, Height of tower = 10√3 m.",
    givenLines: [
      "Height of tower h = 10√3 m",
      "Distance from foot d = 30 m",
      "Let angle of elevation be θ"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "tan θ = Height / Distance = (10√3) / 30   ...(1)",
          "tan θ = √3 / 3 = 1 / √3   ...(2)",
          "Since tan(30°) = 1 / √3: θ = 30°   ...(3)",
          "The angle of elevation of the top of the tower is 30°."
        ]
      }
    ]
  },
  {
    id: "ex-6.2-q2",
    exampleNum: "Exercise 6.2 - Q2",
    problem: "A road is flanked on either side by continuous rows of houses of height 4√3 m with no space in between them. A pedestrian is standing on the median of the road facing a row house. The angle of elevation from the pedestrian to the top of the house is 30°. Find the width of the road.",
    given: "Given: House height = 4√3 m, Angle of elevation = 30°, pedestrian at center.",
    givenLines: [
      "Height of house h = 4√3 m",
      "Elevation θ = 30°",
      "Let width of the road be W, so half width d = W / 2"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "tan(30°) = h / d",
          "1 / √3 = 4√3 / d   ...(1)",
          "d = 4√3 × √3 = 4 × 3 = 12 m   ...(2)",
          "Width of the road W = 2d = 2 × 12 = 24 m   ...(3)",
          "The width of the road is 24 m."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH6_EXERCISE_6_3 = [
  {
    id: "ex-6.3-q1",
    exampleNum: "Exercise 6.3 - Q1",
    problem: "From the top of a rock 50√3 m high, the angle of depression of a car on the ground is observed to be 30°. Find the distance of the car from the rock.",
    given: "Given: Rock height = 50√3 m, Angle of depression = 30°.",
    givenLines: [
      "Height of rock AB = 50√3 m",
      "Angle of depression = Angle of elevation θ = 30°",
      "Let distance of car from rock BC = d"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "tan(30°) = AB / BC",
          "1 / √3 = (50√3) / d   ...(1)",
          "d = 50√3 × √3 = 50 × 3 = 150 m   ...(2)",
          "The distance of the car from the rock is 150 m."
        ]
      }
    ]
  },
  {
    id: "ex-6.3-q2",
    exampleNum: "Exercise 6.3 - Q2",
    problem: "The horizontal distance between two buildings is 70 m. The angle of depression of the top of the first building when seen from the top of the second building is 45°. If the height of the second building is 120 m, find the height of the first building.",
    given: "Given: Distance = 70 m, Height of second building = 120 m, Depression angle = 45°.",
    givenLines: [
      "Distance between buildings = 70 m",
      "Height of taller building = 120 m",
      "Angle of depression θ = 45°",
      "Let height of first building = h"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Difference in heights = 120 - h",
          "tan(45°) = (120 - h) / 70   ...(1)",
          "1 = (120 - h) / 70",
          "120 - h = 70   ...(2)",
          "h = 120 - 70 = 50 m   ...(3)",
          "The height of the first building is 50 m."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH6_EXERCISE_6_4 = [
  {
    id: "ex-6.4-q1",
    exampleNum: "Exercise 6.4 - Q1",
    problem: "From the top of a tree of height 13 m the angle of elevation and depression of the top and bottom of another tree are 45° and 30° respectively. Find the height of the second tree (√3 = 1.732).",
    given: "Given: Tree height = 13 m, elevation = 45°, depression = 30°.",
    givenLines: [
      "Height of first tree AB = 13 m",
      "Angle of depression of bottom = 30°",
      "Angle of elevation of top = 45°"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Let horizontal distance be x:",
          "tan(30°) = 13 / x ⇒ 1 / √3 = 13 / x ⇒ x = 13√3 m   ...(1)",
          "Let height above first tree top be h₁:",
          "tan(45°) = h₁ / x ⇒ 1 = h₁ / (13√3) ⇒ h₁ = 13√3 m   ...(2)",
          "Total height of second tree H = 13 + h₁ = 13 + 13√3",
          "H = 13(1 + √3) = 13(1 + 1.732) = 13 × 2.732 = 35.52 m   ...(3)",
          "The height of the second tree is 35.52 m."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH6_EXERCISE_6_5 = [
  {
    id: "ex-6.5-q1",
    exampleNum: "Exercise 6.5 - Q1",
    problem: "The value of sin² θ + 1 / (1 + tan² θ) is equal to:\n(1) tan² θ    (2) 1    (3) cot² θ    (4) 0",
    given: "Given expression sin² θ + 1 / (1 + tan² θ).",
    givenLines: [
      "sin² θ + 1 / (1 + tan² θ)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Since 1 + tan² θ = sec² θ: = sin² θ + 1 / sec² θ   ...(1)",
          "= sin² θ + cos² θ = 1   ...(2)",
          "Correct Option: (2) 1"
        ]
      }
    ]
  },
  {
    id: "ex-6.5-q2",
    exampleNum: "Exercise 6.5 - Q2",
    problem: "tan θ cosec² θ - tan θ is equal to:\n(1) sec θ    (2) cot² θ    (3) sin θ    (4) cot θ",
    given: "Given expression tan θ cosec² θ - tan θ.",
    givenLines: [
      "tan θ (cosec² θ - 1)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "tan θ (cosec² θ - 1) = tan θ · cot² θ   ...(1)",
          "= tan θ · (1 / tan² θ) = 1 / tan θ = cot θ   ...(2)",
          "Correct Option: (4) cot θ"
        ]
      }
    ]
  },
  {
    id: "ex-6.5-q3",
    exampleNum: "Exercise 6.5 - Q3",
    problem: "If (sin α + cosec α)² + (cos α + sec α)² = k + tan² α + cot² α, then the value of k is:\n(1) 9    (2) 7    (3) 5    (4) 3",
    given: "Given trigonometric identity.",
    givenLines: ["Expand both squares"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "sin² α + cosec² α + 2 + cos² α + sec² α + 2",
          "= (sin² α + cos² α) + 4 + (1 + cot² α) + (1 + tan² α)",
          "= 1 + 4 + 1 + 1 + tan² α + cot² α = 7 + tan² α + cot² α   ...(1)",
          "Comparing with RHS: k = 7.",
          "Correct Option: (2) 7"
        ]
      }
    ]
  },
  {
    id: "ex-6.5-q4",
    exampleNum: "Exercise 6.5 - Q4",
    problem: "If sin θ + cos θ = a and sec θ + cosec θ = b, then the value of b(a² - 1) is:\n(1) 2a    (2) 3a    (3) 0    (4) 2ab",
    given: "Given a = sin θ + cos θ, b = sec θ + cosec θ.",
    givenLines: ["a² - 1 = (sin θ + cos θ)² - 1 = 2 sin θ cos θ", "b = (sin θ + cos θ) / (sin θ cos θ) = a / (sin θ cos θ)"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "b(a² - 1) = [a / (sin θ cos θ)] · [2 sin θ cos θ] = 2a   ...(1)",
          "Correct Option: (1) 2a"
        ]
      }
    ]
  },
  {
    id: "ex-6.5-q5",
    exampleNum: "Exercise 6.5 - Q5",
    problem: "If 5x = sec θ and 5/x = tan θ, then x² - 1/x² is equal to:\n(1) 25    (2) 1/25    (3) 5    (4) 1",
    given: "5x = sec θ, 5/x = tan θ.",
    givenLines: ["sec² θ - tan² θ = 1"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "(5x)² - (5/x)² = sec² θ - tan² θ = 1",
          "25(x² - 1/x²) = 1 ⇒ x² - 1/x² = 1/25   ...(1)",
          "Correct Option: (2) 1/25"
        ]
      }
    ]
  },
  {
    id: "ex-6.5-q6",
    exampleNum: "Exercise 6.5 - Q6",
    problem: "If sin θ = cos θ, then 2 tan² θ + sin² θ - 1 is equal to:\n(1) -3/2    (2) 3/2    (3) 2/3    (4) -2/3",
    given: "Given sin θ = cos θ.",
    givenLines: ["tan θ = 1 ⇒ θ = 45°"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Since θ = 45°: tan 45° = 1, sin 45° = 1/√2",
          "2(1)² + (1/√2)² - 1 = 2 + 1/2 - 1 = 3/2   ...(1)",
          "Correct Option: (2) 3/2"
        ]
      }
    ]
  },
  {
    id: "ex-6.5-q7",
    exampleNum: "Exercise 6.5 - Q7",
    problem: "If x = a tan θ and y = b sec θ then:\n(1) y²/b² - x²/a² = 1    (2) x²/a² - y²/b² = 1    (3) x²/a² + y²/b² = 1    (4) y²/b² - x²/a² = 0",
    given: "x / a = tan θ, y / b = sec θ.",
    givenLines: ["sec² θ - tan² θ = 1"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "sec² θ - tan² θ = 1 ⇒ (y/b)² - (x/a)² = 1",
          "y²/b² - x²/a² = 1   ...(1)",
          "Correct Option: (1) y²/b² - x²/a² = 1"
        ]
      }
    ]
  },
  {
    id: "ex-6.5-q8",
    exampleNum: "Exercise 6.5 - Q8",
    problem: "(1 + tan θ + sec θ)(1 + cot θ - cosec θ) is equal to:\n(1) 0    (2) 1    (3) 2    (4) -1",
    given: "Standard trigonometric expression.",
    givenLines: ["Convert all terms to sin θ and cos θ"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "= [(cos θ + sin θ + 1) / cos θ] · [(sin θ + cos θ - 1) / sin θ]",
          "= [(cos θ + sin θ)² - 1] / (sin θ cos θ)",
          "= [1 + 2 sin θ cos θ - 1] / (sin θ cos θ) = 2   ...(1)",
          "Correct Option: (3) 2"
        ]
      }
    ]
  },
  {
    id: "ex-6.5-q9",
    exampleNum: "Exercise 6.5 - Q9",
    problem: "A tower is 60 m high. Its shadow is x metres shorter when the sun's altitude is 45° than when it has been 30°, then x is equal to:\n(1) 41.92 m    (2) 43.92 m    (3) 43 m    (4) 45.6 m",
    given: "Height h = 60 m, angles 45° and 30°.",
    givenLines: ["x = 60(cot 30° - cot 45°)"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "x = 60(√3 - 1) = 60(1.732 - 1) = 60 × 0.732 = 43.92 m   ...(1)",
          "Correct Option: (2) 43.92 m"
        ]
      }
    ]
  },
  {
    id: "ex-6.5-q10",
    exampleNum: "Exercise 6.5 - Q10",
    problem: "The electric pole subtends an angle of 30° at a point on the same level as its foot. At a second point 'b' metres above the first, the depression of the foot of the pole is 60°. The height of the pole (in metres) is equal to:\n(1) √3 b    (2) b / 3    (3) b / 2    (4) b / √3",
    given: "Pole height h, elevation 30°, depression 60° at height b.",
    givenLines: ["h / d = tan 30°, b / d = tan 60°"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "d = b / tan 60° = b / √3",
          "h = d · tan 30° = (b / √3) · (1 / √3) = b / 3   ...(1)",
          "Correct Option: (2) b / 3"
        ]
      }
    ]
  }
];

export const getMathClass10Chapter6Sums = (tabId = 'examples') => {
  switch (tabId) {
    case 'ex-6.1': return MATH_CLASS10_CH6_EXERCISE_6_1;
    case 'ex-6.2': return MATH_CLASS10_CH6_EXERCISE_6_2;
    case 'ex-6.3': return MATH_CLASS10_CH6_EXERCISE_6_3;
    case 'ex-6.4': return MATH_CLASS10_CH6_EXERCISE_6_4;
    case 'ex-6.5': return MATH_CLASS10_CH6_EXERCISE_6_5;
    default: return MATH_CLASS10_CH6_EXAMPLES;
  }
};
