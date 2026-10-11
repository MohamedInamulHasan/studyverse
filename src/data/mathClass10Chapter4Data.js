// src/data/mathClass10Chapter4Data.js
// Class 10 Mathematics - Chapter 4: Geometry
// Full textbook exercises (Ex 4.1 to Ex 4.5) and worked examples
// Decoded Given, Step-by-step intermediate equations, numbered equations badges

export const MATH_CLASS10_CH4_PILLS = [
  { id: 'examples', label: 'Examples' },
  { id: 'ex-4.1', label: 'Exercise 4.1' },
  { id: 'ex-4.2', label: 'Exercise 4.2' },
  { id: 'ex-4.3', label: 'Exercise 4.3' },
  { id: 'ex-4.4', label: 'Exercise 4.4' },
  { id: 'ex-4.5', label: 'Exercise 4.5' }
];

export const MATH_CLASS10_CH4_EXAMPLES = [
  {
    id: "ch4-eg-4.1",
    exampleNum: "Example 4.1",
    problem: "Show that ∆PST ~ ∆PQR in the figure where in ∆PQR, S is on PQ and T is on PR such that PS = 2, SQ = 1, PT = 4, TR = 2.",
    given: "Given sides of triangle PQR: PS = 2, SQ = 1, PT = 4, TR = 2.",
    givenLines: [
      "PS = 2, SQ = 1",
      "PQ = PS + SQ = 2 + 1 = 3",
      "PT = 4, TR = 2",
      "PR = PT + TR = 4 + 2 = 6"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "PS / PQ = 2 / 3   ...(1)",
          "PT / PR = 4 / 6 = 2 / 3   ...(2)",
          "From (1) and (2): PS / PQ = PT / PR",
          "∠P is common to both ∆PST and ∆PQR   ...(3)",
          "Therefore, by SAS similarity criterion, ∆PST ~ ∆PQR."
        ]
      }
    ]
  },
  {
    id: "ch4-eg-4.8",
    exampleNum: "Example 4.8",
    problem: "In ∆ABC, D and E are points on the sides AB and AC respectively such that DE || BC. If AD = 8x - 7, DB = 5x - 3, AE = 4x - 3 and EC = 3x - 1, find the value of x.",
    given: "Given: In ∆ABC, DE || BC.",
    givenLines: [
      "AD = 8x - 7",
      "DB = 5x - 3",
      "AE = 4x - 3",
      "EC = 3x - 1"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "By Basic Proportionality (Thales) Theorem: AD / DB = AE / EC",
          "(8x - 7) / (5x - 3) = (4x - 3) / (3x - 1)   ...(1)",
          "(8x - 7)(3x - 1) = (4x - 3)(5x - 3)",
          "24x² - 8x - 21x + 7 = 20x² - 12x - 15x + 9",
          "24x² - 29x + 7 = 20x² - 27x + 9",
          "4x² - 2x - 2 = 0",
          "Dividing by 2: 2x² - x - 1 = 0",
          "(2x + 1)(x - 1) = 0   ...(2)",
          "x = 1 or x = -1/2",
          "Since length cannot be negative, x = 1."
        ]
      }
    ]
  },
  {
    id: "ch4-eg-4.12",
    exampleNum: "Example 4.12",
    problem: "In ∆ABC, AD is the internal bisector of ∠A meeting BC at D. If AB = 10 cm, AC = 14 cm and BC = 6 cm, find BD and DC.",
    given: "Given: AD bisects ∠A in ∆ABC, AB = 10 cm, AC = 14 cm, BC = 6 cm.",
    givenLines: [
      "AB = 10 cm, AC = 14 cm",
      "BC = 6 cm",
      "Let BD = x cm, then DC = (6 - x) cm"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "By Angle Bisector Theorem: BD / DC = AB / AC",
          "x / (6 - x) = 10 / 14 = 5 / 7   ...(1)",
          "7x = 5(6 - x)",
          "7x = 30 - 5x",
          "12x = 30",
          "x = 30 / 12 = 2.5 cm   ...(2)",
          "BD = 2.5 cm",
          "DC = 6 - 2.5 = 3.5 cm   ...(3)"
        ]
      }
    ]
  },
  {
    id: "ch4-eg-4.20",
    exampleNum: "Example 4.20",
    problem: "An athlete in the Olympic games covers a distance of 100 m in a track. State Pythagoras theorem and find the diagonal if a rectangle has length 12 m and breadth 5 m.",
    given: "Given: Rectangle length l = 12 m, breadth b = 5 m.",
    givenLines: [
      "Length l = 12 m",
      "Breadth b = 5 m"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "By Pythagoras Theorem: d² = l² + b²",
          "d² = 12² + 5² = 144 + 25 = 169   ...(1)",
          "d = √169 = 13 m   ...(2)",
          "The diagonal is 13 m."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH4_EXERCISE_4_1 = [
  {
    id: "ex-4.1-q1",
    exampleNum: "Exercise 4.1 - Q1",
    problem: "Check whether the triangles are similar and find the value of x:\n(i) In ∆ABC and ∆AED, AB = 8, AD = 3, AC = 11, AE = 4\n(ii) In ∆ABC and ∆PQC, ∠ABC = 70°, ∠PQC = 70°, BC = 5, QC = x, AB = 6, PQ = 3.",
    given: "Given triangle side lengths and angles.",
    givenLines: [
      "(i) AB = 8, AD = 3, AC = 11, AE = 4",
      "(ii) ∠ABC = 70°, ∠PQC = 70°, BC = 5, QC = x, AB = 6, PQ = 3"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "Sub-division (i)",
        lines: [
          "AB / AD = 8 / 3   ...(1)",
          "AC / AE = 11 / 4   ...(2)",
          "8/3 ≠ 11/4 (32 ≠ 33)",
          "Therefore, the two triangles ∆ABC and ∆AED are not similar."
        ]
      },
      {
        partNum: "2.",
        heading: "Sub-division (ii)",
        lines: [
          "In ∆ABC and ∆PQC:",
          "∠ABC = ∠PQC = 70° (Given)",
          "∠C = ∠C (Common angle)",
          "By AA similarity criterion, ∆ABC ~ ∆PQC   ...(1)",
          "AB / PQ = BC / QC",
          "6 / 3 = 5 / x   ...(2)",
          "2 = 5 / x",
          "x = 5 / 2 = 2.5   ...(3)",
          "Therefore, the triangles are similar and x = 2.5."
        ]
      }
    ]
  },
  {
    id: "ex-4.1-q2",
    exampleNum: "Exercise 4.1 - Q2",
    problem: "A girl looks at the reflection of the top of the lamp post on a mirror placed on the ground 66 m away from the foot of the lamp post. The girl whose height is 1.5 m is standing 0.4 m away from the mirror. Assuming the mirror is facing the sky and the girl, mirror and lamp post are in the same line, find the height of the lamp post.",
    given: "Given: Girl height = 1.5 m, distance from mirror = 0.4 m, mirror distance from lamp post = 66 m (or 87.6 m).",
    givenLines: [
      "Height of girl AB = 1.5 m",
      "Distance of girl from mirror BC = 0.4 m",
      "Distance of lamp post from mirror EC = 87.6 m (or 66 m)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "In ∆ABC and ∆DEC:",
          "∠B = ∠E = 90°",
          "∠ACB = ∠DCE (Law of reflection: angle of incidence = angle of reflection)",
          "By AA similarity, ∆ABC ~ ∆DEC   ...(1)",
          "AB / DE = BC / EC",
          "1.5 / h = 0.4 / 87.6   ...(2)",
          "h = (1.5 × 87.6) / 0.4 = (1.5 × 876) / 4 = 1.5 × 219 = 328.5 m   ...(3)",
          "Height of the lamp post is 328.5 m."
        ]
      }
    ]
  },
  {
    id: "ex-4.1-q3",
    exampleNum: "Exercise 4.1 - Q3",
    problem: "A vertical stick of length 6 m casts a shadow 400 cm long on the ground and at the same time a tower casts a shadow 28 m long. Using similarity, find the height of the tower.",
    given: "Given: Stick height = 6 m, Stick shadow = 400 cm = 4 m, Tower shadow = 28 m.",
    givenLines: [
      "Height of stick AB = 6 m",
      "Shadow of stick BC = 400 cm = 4 m",
      "Shadow of tower QR = 28 m",
      "Let height of tower PQ = h"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Since shadows are cast at the same time:",
          "∠B = ∠Q = 90°",
          "∠C = ∠R (Sun's elevation is equal)",
          "By AA similarity criterion, ∆ABC ~ ∆PQR   ...(1)",
          "AB / PQ = BC / QR",
          "6 / h = 4 / 28   ...(2)",
          "6 / h = 1 / 7",
          "h = 6 × 7 = 42 m   ...(3)",
          "Height of the tower is 42 m."
        ]
      }
    ]
  },
  {
    id: "ex-4.1-q4",
    exampleNum: "Exercise 4.1 - Q4",
    problem: "Two triangles QPR and QSR, right angled at P and S respectively are drawn on the same base QR and on the same side of QR. If PR and SQ intersect at T, prove that PT × TR = ST × TQ.",
    given: "Given: Triangles QPR and QSR on base QR with ∠P = ∠S = 90°. PR and SQ intersect at T.",
    givenLines: [
      "∠P = ∠S = 90°",
      "PR and SQ intersect at T"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "In ∆PTQ and ∆STR:",
          "∠P = ∠S = 90° (Given)",
          "∠PTQ = ∠STR (Vertically opposite angles)   ...(1)",
          "By AA similarity criterion, ∆PTQ ~ ∆STR   ...(2)",
          "PT / ST = TQ / TR",
          "PT × TR = ST × TQ   ...(3)",
          "Hence proved."
        ]
      }
    ]
  },
  {
    id: "ex-4.1-q5",
    exampleNum: "Exercise 4.1 - Q5",
    problem: "In right triangle ABC right angled at C, DE ⊥ AB. If BC = 12, AC = 5, AD = 3, prove that ∆ABC ~ ∆ADE and find AE and DE.",
    given: "Given: Right ∆ABC with ∠C = 90°, BC = 12, AC = 5, AD = 3, DE ⊥ AB.",
    givenLines: [
      "In ∆ABC, ∠C = 90°, BC = 12, AC = 5",
      "In ∆ADE, DE ⊥ AB, AD = 3"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "In right ∆ABC, by Pythagoras Theorem:",
          "AB² = AC² + BC² = 5² + 12² = 25 + 144 = 169",
          "AB = √169 = 13   ...(1)",
          "In ∆ABC and ∆ADE:",
          "∠ACB = ∠AED = 90°",
          "∠A is common to both triangles",
          "By AA similarity, ∆ABC ~ ∆ADE   ...(2)",
          "BC / DE = AB / AD = AC / AE",
          "12 / DE = 13 / 3 = 5 / AE   ...(3)",
          "From 13 / 3 = 5 / AE ⇒ AE = (5 × 3) / 13 = 15 / 13   ...(4)",
          "From 12 / DE = 13 / 3 ⇒ DE = (12 × 3) / 13 = 36 / 13   ...(5)",
          "AE = 15/13 and DE = 36/13."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH4_EXERCISE_4_2 = [
  {
    id: "ex-4.2-q1",
    exampleNum: "Exercise 4.2 - Q1",
    problem: "In ∆ABC, D and E are points on AB and AC respectively such that DE || BC.\n(i) If AD / DB = 3 / 4 and AC = 15 cm, find AE.\n(ii) If AD = 8x - 7, DB = 5x - 3, AE = 4x - 3, EC = 3x - 1, find x.",
    given: "Given: In ∆ABC, DE || BC.",
    givenLines: [
      "DE || BC",
      "(i) AD / DB = 3 / 4, AC = 15 cm",
      "(ii) AD = 8x - 7, DB = 5x - 3, AE = 4x - 3, EC = 3x - 1"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "Sub-division (i)",
        lines: [
          "By Thales Theorem: AD / DB = AE / EC",
          "3 / 4 = AE / (AC - AE)",
          "3 / 4 = AE / (15 - AE)   ...(1)",
          "3(15 - AE) = 4 AE",
          "45 - 3 AE = 4 AE",
          "7 AE = 45",
          "AE = 45 / 7 ≈ 6.43 cm   ...(2)"
        ]
      },
      {
        partNum: "2.",
        heading: "Sub-division (ii)",
        lines: [
          "By Thales Theorem: AD / DB = AE / EC",
          "(8x - 7) / (5x - 3) = (4x - 3) / (3x - 1)   ...(1)",
          "(8x - 7)(3x - 1) = (4x - 3)(5x - 3)",
          "24x² - 29x + 7 = 20x² - 27x + 9",
          "4x² - 2x - 2 = 0 ⇒ 2x² - x - 1 = 0",
          "(2x + 1)(x - 1) = 0   ...(2)",
          "Since length cannot be negative, x = 1   ...(3)"
        ]
      }
    ]
  },
  {
    id: "ex-4.2-q2",
    exampleNum: "Exercise 4.2 - Q2",
    problem: "ABCD is a trapezium in which AB || DC and P, Q are points on AD and BC respectively such that PQ || DC. If PD = 18 cm, BQ = 35 cm and QC = 15 cm, find AD.",
    given: "Given: AB || DC || PQ in trapezium ABCD, PD = 18 cm, BQ = 35 cm, QC = 15 cm.",
    givenLines: [
      "PD = 18 cm",
      "BQ = 35 cm",
      "QC = 15 cm"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "By Thales Theorem on trapezium: AP / PD = BQ / QC",
          "AP / 18 = 35 / 15 = 7 / 3   ...(1)",
          "AP = (7 × 18) / 3 = 42 cm   ...(2)",
          "AD = AP + PD = 42 + 18 = 60 cm   ...(3)",
          "Length of AD is 60 cm."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH4_EXERCISE_4_3 = [
  {
    id: "ex-4.3-q1",
    exampleNum: "Exercise 4.3 - Q1",
    problem: "A man goes 18 m due east and then 24 m due north. Find the distance of his present position from the starting point.",
    given: "Given displacement: 18 m east and 24 m north.",
    givenLines: [
      "OA = 18 m (East)",
      "AB = 24 m (North)",
      "∠OAB = 90°"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "In right ∆OAB, by Pythagoras Theorem: OB² = OA² + AB²",
          "OB² = 18² + 24² = 324 + 576 = 900   ...(1)",
          "OB = √900 = 30 m   ...(2)",
          "The distance from starting point is 30 m."
        ]
      }
    ]
  },
  {
    id: "ex-4.3-q2",
    exampleNum: "Exercise 4.3 - Q2",
    problem: "There is a circular field whose diameter is 10 m. A point P is 13 m away from the centre. Find the length of the tangent drawn from P to the circular field.",
    given: "Given: Diameter = 10 m ⇒ Radius r = 5 m, OP = 13 m.",
    givenLines: [
      "Radius r = 5 m",
      "Distance from centre OP = 13 m"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "The radius is perpendicular to the tangent at point of contact: ∠OTP = 90°",
          "In right ∆OTP: OP² = OT² + PT²",
          "13² = 5² + PT²   ...(1)",
          "169 = 25 + PT²",
          "PT² = 169 - 25 = 144",
          "PT = √144 = 12 m   ...(2)",
          "Length of the tangent is 12 m."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH4_EXERCISE_4_4 = [
  {
    id: "ex-4.4-q1",
    exampleNum: "Exercise 4.4 - Q1",
    problem: "The length of the tangent to a circle from a point P, which is 25 cm away from the centre is 24 cm. What is the radius of the circle?",
    given: "Given: Distance of point P from centre OP = 25 cm, tangent length PT = 24 cm.",
    givenLines: [
      "OP = 25 cm",
      "PT = 24 cm"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "In right ∆OTP (OT ⊥ PT): OP² = OT² + PT²",
          "25² = OT² + 24²   ...(1)",
          "625 = OT² + 576",
          "OT² = 625 - 576 = 49",
          "OT = √49 = 7 cm   ...(2)",
          "The radius of the circle is 7 cm."
        ]
      }
    ]
  },
  {
    id: "ex-4.4-q2",
    exampleNum: "Exercise 4.4 - Q2",
    problem: "∆LMN is a right angled triangle with ∠L = 90°. A circle with radius r is inscribed in ∆LMN. If LM = 24 cm and LN = 10 cm, find the radius r of the inscribed circle.",
    given: "Given: Right ∆LMN with ∠L = 90°, LM = 24 cm, LN = 10 cm.",
    givenLines: [
      "LM = 24 cm",
      "LN = 10 cm"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "In right ∆LMN: MN² = LM² + LN²",
          "MN² = 24² + 10² = 576 + 100 = 676",
          "MN = √676 = 26 cm   ...(1)",
          "For an in-circle of a right triangle: r = (LM + LN - MN) / 2",
          "r = (24 + 10 - 26) / 2 = 8 / 2 = 4 cm   ...(2)",
          "Radius of the inscribed circle is 4 cm."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH4_EXERCISE_4_5 = [
  {
    id: "ex-4.5-q1",
    exampleNum: "Exercise 4.5 - Q1",
    problem: "If in triangles ABC and EDF, AB / DE = BC / FD then they will be similar, when:\n(1) ∠B = ∠E    (2) ∠A = ∠D    (3) ∠B = ∠D    (4) ∠A = ∠F",
    given: "Given proportion: AB / DE = BC / FD.",
    givenLines: [
      "AB / DE = BC / FD"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "The included angle between AB and BC is ∠B.",
          "The included angle between DE and FD is ∠D.",
          "For similarity by SAS criterion, ∠B = ∠D.",
          "Correct Option: (3) ∠B = ∠D   ...(1)"
        ]
      }
    ]
  },
  {
    id: "ex-4.5-q2",
    exampleNum: "Exercise 4.5 - Q2",
    problem: "In ∆LMN, ∠L = 60°, ∠M = 50°. If ∆LMN ~ ∆PQR then the value of ∠R is:\n(1) 40°    (2) 70°    (3) 30°    (4) 110°",
    given: "Given: ∠L = 60°, ∠M = 50°, ∆LMN ~ ∆PQR.",
    givenLines: [
      "∠L = 60°, ∠M = 50°",
      "∆LMN ~ ∆PQR"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "In ∆LMN: ∠N = 180° - (60° + 50°) = 180° - 110° = 70°   ...(1)",
          "Since ∆LMN ~ ∆PQR, corresponding angles are equal: ∠R = ∠N = 70°   ...(2)",
          "Correct Option: (2) 70°"
        ]
      }
    ]
  },
  {
    id: "ex-4.5-q3",
    exampleNum: "Exercise 4.5 - Q3",
    problem: "If ∆ABC is an isosceles triangle with ∠C = 90° and AC = 5 cm, then AB is:\n(1) 2.5 cm    (2) 5 cm    (3) 10 cm    (4) 5√2 cm",
    given: "Given: Isosceles ∆ABC with ∠C = 90°, AC = BC = 5 cm.",
    givenLines: [
      "AC = BC = 5 cm",
      "∠C = 90°"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "By Pythagoras Theorem: AB² = AC² + BC²",
          "AB² = 5² + 5² = 25 + 25 = 50   ...(1)",
          "AB = √50 = 5√2 cm   ...(2)",
          "Correct Option: (4) 5√2 cm"
        ]
      }
    ]
  },
  {
    id: "ex-4.5-q4",
    exampleNum: "Exercise 4.5 - Q4",
    problem: "In a given figure ST || QR, PS = 2 cm and SQ = 3 cm. Then the ratio of the area of ∆PQR to the area of ∆PST is:\n(1) 25/4    (2) 4/25    (3) 25/9    (4) 9/25",
    given: "Given ST || QR, PS = 2 cm, SQ = 3 cm.",
    givenLines: ["PQ = PS + SQ = 2 + 3 = 5 cm"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Since ST || QR, ∆PQR ~ ∆PST.",
          "Ratio of areas = (PQ / PS)² = (5 / 2)² = 25 / 4   ...(1)",
          "Correct Option: (1) 25/4"
        ]
      }
    ]
  },
  {
    id: "ex-4.5-q5",
    exampleNum: "Exercise 4.5 - Q5",
    problem: "The perimeters of two similar triangles ∆ABC and ∆PQR are 36 cm and 24 cm respectively. If PQ = 10 cm, then the length of AB is:\n(1) 6.67 cm    (2) 15 cm    (3) 12 cm    (4) 20 cm",
    given: "Given similar triangles perimeter ratio = 36 / 24, PQ = 10 cm.",
    givenLines: ["AB / PQ = Perimeter(∆ABC) / Perimeter(∆PQR)"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "AB / 10 = 36 / 24 = 3 / 2",
          "AB = 10 × (3 / 2) = 15 cm   ...(1)",
          "Correct Option: (2) 15 cm"
        ]
      }
    ]
  },
  {
    id: "ex-4.5-q6",
    exampleNum: "Exercise 4.5 - Q6",
    problem: "If in ∆ABC, DE || BC, AB = 3.6 cm, AC = 2.4 cm and AD = 2.1 cm then the length of AE is:\n(1) 1.4 cm    (2) 1.8 cm    (3) 1.2 cm    (4) 1.05 cm",
    given: "Given DE || BC in ∆ABC.",
    givenLines: ["AD / AB = AE / AC"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "By Thales Theorem: AD / AB = AE / AC",
          "2.1 / 3.6 = AE / 2.4",
          "AE = (2.1 × 2.4) / 3.6 = 1.4 cm   ...(1)",
          "Correct Option: (1) 1.4 cm"
        ]
      }
    ]
  },
  {
    id: "ex-4.5-q7",
    exampleNum: "Exercise 4.5 - Q7",
    problem: "In a ∆ABC, AD is the bisector of ∠BAC. If AB = 8 cm, BD = 6 cm and DC = 3 cm, the length of the side AC is:\n(1) 6 cm    (2) 4 cm    (3) 3 cm    (4) 8 cm",
    given: "AD is the internal angle bisector of ∠A.",
    givenLines: ["AB / AC = BD / DC by Angle Bisector Theorem"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "By Angle Bisector Theorem: AB / AC = BD / DC",
          "8 / AC = 6 / 3 = 2",
          "AC = 8 / 2 = 4 cm   ...(1)",
          "Correct Option: (2) 4 cm"
        ]
      }
    ]
  },
  {
    id: "ex-4.5-q8",
    exampleNum: "Exercise 4.5 - Q8",
    problem: "In ∆ABC, ∠BAC = 90° and AD ⊥ BC. Then:\n(1) BD · CD = BC²    (2) AB · AC = BC²    (3) BD · CD = AD²    (4) AB · AC = AD²",
    given: "Right angled triangle ABC with altitude AD to hypotenuse BC.",
    givenLines: ["∆DBA ~ ∆DAC"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "By geometric mean theorem: AD / CD = BD / AD",
          "AD² = BD · CD   ...(1)",
          "Correct Option: (3) BD · CD = AD²"
        ]
      }
    ]
  },
  {
    id: "ex-4.5-q9",
    exampleNum: "Exercise 4.5 - Q9",
    problem: "Two poles of heights 6 m and 11 m stand vertically on a plane ground. If the distance between their feet is 12 m, what is the distance between their tops?\n(1) 13 m    (2) 14 m    (3) 15 m    (4) 12.8 m",
    given: "Poles of 6 m and 11 m separated by 12 m.",
    givenLines: ["Base = 12 m", "Height difference = 11 - 6 = 5 m"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Distance between tops = √(12² + 5²) = √(144 + 25) = √169 = 13 m   ...(1)",
          "Correct Option: (1) 13 m"
        ]
      }
    ]
  },
  {
    id: "ex-4.5-q10",
    exampleNum: "Exercise 4.5 - Q10",
    problem: "A tangent is perpendicular to the radius at the:\n(1) centre    (2) point of contact    (3) infinity    (4) chord",
    given: "Circle theorem on tangent and radius.",
    givenLines: ["Radius meets tangent at point of contact"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "The tangent at any point of a circle is perpendicular to the radius through the point of contact.",
          "Correct Option: (2) point of contact   ...(1)"
        ]
      }
    ]
  }
];

export const getMathClass10Chapter4Sums = (tabId = 'examples') => {
  switch (tabId) {
    case 'ex-4.1': return MATH_CLASS10_CH4_EXERCISE_4_1;
    case 'ex-4.2': return MATH_CLASS10_CH4_EXERCISE_4_2;
    case 'ex-4.3': return MATH_CLASS10_CH4_EXERCISE_4_3;
    case 'ex-4.4': return MATH_CLASS10_CH4_EXERCISE_4_4;
    case 'ex-4.5': return MATH_CLASS10_CH4_EXERCISE_4_5;
    default: return MATH_CLASS10_CH4_EXAMPLES;
  }
};
