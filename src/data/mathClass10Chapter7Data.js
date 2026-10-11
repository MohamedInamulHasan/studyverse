// src/data/mathClass10Chapter7Data.js
// Class 10 Mathematics - Chapter 7: Mensuration
// Full textbook exercises (Ex 7.1 to Ex 7.5) and worked examples
// Decoded Given, Step-by-step intermediate equations, numbered equations badges

export const MATH_CLASS10_CH7_PILLS = [
  { id: 'examples', label: 'Examples' },
  { id: 'ex-7.1', label: 'Exercise 7.1' },
  { id: 'ex-7.2', label: 'Exercise 7.2' },
  { id: 'ex-7.3', label: 'Exercise 7.3' },
  { id: 'ex-7.4', label: 'Exercise 7.4' },
  { id: 'ex-7.5', label: 'Exercise 7.5' }
];

export const MATH_CLASS10_CH7_EXAMPLES = [
  {
    id: "ch7-eg-7.1",
    exampleNum: "Example 7.1",
    problem: "A cylindrical drum has a height of 20 cm and base radius of 14 cm. Find its curved surface area and the total surface area.",
    given: "Given: Cylinder height h = 20 cm, base radius r = 14 cm.",
    givenLines: [
      "Radius r = 14 cm",
      "Height h = 20 cm"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Curved Surface Area (CSA) = 2πrh",
          "= 2 × (22 / 7) × 14 × 20   ...(1)",
          "= 2 × 22 × 2 × 20 = 1760 cm²   ...(2)",
          "Total Surface Area (TSA) = 2πr(h + r)",
          "= 2 × (22 / 7) × 14 × (20 + 14)   ...(3)",
          "= 88 × 34 = 2992 cm²   ...(4)",
          "CSA = 1760 cm² and TSA = 2992 cm²."
        ]
      }
    ]
  },
  {
    id: "ch7-eg-7.15",
    exampleNum: "Example 7.15",
    problem: "Find the volume of a cylinder whose height is 2 m and whose base area is 250 m².",
    given: "Given: Height h = 2 m, base area A = 250 m².",
    givenLines: [
      "Base area A = πr² = 250 m²",
      "Height h = 2 m"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Volume of cylinder V = Base area × Height",
          "V = 250 × 2   ...(1)",
          "V = 500 m³   ...(2)",
          "The volume of the cylinder is 500 m³."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH7_EXERCISE_7_1 = [
  {
    id: "ex-7.1-q1",
    exampleNum: "Exercise 7.1 - Q1",
    problem: "The radius and height of a cylinder are in the ratio 5:7 and its curved surface area is 5500 sq.cm. Find its radius and height.",
    given: "Given: r:h = 5:7, CSA = 5500 cm².",
    givenLines: [
      "Let r = 5x and h = 7x",
      "CSA = 5500 cm²"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "CSA of cylinder = 2πrh = 5500",
          "2 × (22 / 7) × (5x) × (7x) = 5500   ...(1)",
          "2 × 22 × 5 × x² = 5500",
          "220 x² = 5500",
          "x² = 5500 / 220 = 25",
          "x = 5   ...(2)",
          "Radius r = 5 × 5 = 25 cm   ...(3)",
          "Height h = 7 × 5 = 35 cm   ...(4)",
          "Radius is 25 cm and height is 35 cm."
        ]
      }
    ]
  },
  {
    id: "ex-7.1-q2",
    exampleNum: "Exercise 7.1 - Q2",
    problem: "A solid iron cylinder has total surface area of 1848 sq.m. Its curved surface area is five-sixth of its total surface area. Find the radius and height of the iron cylinder.",
    given: "Given: TSA = 1848 m², CSA = (5/6) × TSA.",
    givenLines: [
      "TSA = 1848 m²",
      "CSA = (5/6) × 1848 = 1540 m²"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "TSA - CSA = 2πr²",
          "1848 - 1540 = 2πr²",
          "308 = 2 × (22 / 7) × r²   ...(1)",
          "r² = (308 × 7) / 44 = 7 × 7 = 49",
          "r = √49 = 7 m   ...(2)",
          "Now, CSA = 2πrh = 1540",
          "2 × (22 / 7) × 7 × h = 1540",
          "44 h = 1540 ⇒ h = 1540 / 44 = 35 m   ...(3)",
          "Radius is 7 m and height is 35 m."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH7_EXERCISE_7_2 = [
  {
    id: "ex-7.2-q1",
    exampleNum: "Exercise 7.2 - Q1",
    problem: "A 14 m deep well with diameter 7 m is dug and the earth from digging is evenly spread out to form a platform 22 m by 14 m. Find the height of the platform.",
    given: "Given: Well depth h₁ = 14 m, diameter = 7 m ⇒ r = 7/2 m. Platform l = 22 m, b = 14 m.",
    givenLines: [
      "Well radius r = 7/2 m, depth h₁ = 14 m",
      "Platform length l = 22 m, breadth b = 14 m",
      "Let height of platform be H"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Volume of earth taken out = πr²h₁",
          "= (22 / 7) × (7 / 2) × (7 / 2) × 14   ...(1)",
          "= 11 × 7 × 7 = 539 m³",
          "Volume of platform = l × b × H",
          "22 × 14 × H = 539   ...(2)",
          "308 H = 539",
          "H = 539 / 308 = 1.75 m   ...(3)",
          "Height of the platform is 1.75 m."
        ]
      }
    ]
  },
  {
    id: "ex-7.2-q2",
    exampleNum: "Exercise 7.2 - Q2",
    problem: "A conical flask is full of water. The flask has base radius r and height h. This water is poured into a cylindrical flask of base radius mr. Find the height of water in the cylindrical flask.",
    given: "Given: Conical flask (r, h), Cylindrical flask radius = mr.",
    givenLines: [
      "Volume of cone = (1/3)πr²h",
      "Cylinder radius R = mr",
      "Let height of water in cylinder be H"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Volume of water in cylinder = Volume of water in cone",
          "πR²H = (1/3)πr²h   ...(1)",
          "π(mr)²H = (1/3)πr²h",
          "m²r²H = (1/3)r²h   ...(2)",
          "H = h / (3m²)   ...(3)",
          "Height of water in the cylindrical flask is h / (3m²)."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH7_EXERCISE_7_3 = [
  {
    id: "ex-7.3-q1",
    exampleNum: "Exercise 7.3 - Q1",
    problem: "A vessel is in the form of a hemispherical bowl mounted by a hollow cylinder. The diameter is 14 cm and the height of the vessel is 13 cm. Find the capacity of the vessel.",
    given: "Given: Diameter = 14 cm ⇒ r = 7 cm, Total height = 13 cm.",
    givenLines: [
      "Radius of hemisphere and cylinder r = 7 cm",
      "Height of cylinder h = 13 - 7 = 6 cm"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Capacity = Volume of cylinder + Volume of hemisphere",
          "= πr²h + (2/3)πr³ = πr² (h + 2r/3)   ...(1)",
          "= (22 / 7) × 7 × 7 × (6 + (2 × 7) / 3)",
          "= 154 × (6 + 14/3) = 154 × (32 / 3)   ...(2)",
          "= 4928 / 3 ≈ 1642.67 cm³   ...(3)",
          "Capacity of the vessel is 1642.67 cm³."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH7_EXERCISE_7_4 = [
  {
    id: "ex-7.4-q1",
    exampleNum: "Exercise 7.4 - Q1",
    problem: "An aluminium sphere of radius 12 cm is melted to make a cylinder of radius 8 cm. Find the height of the cylinder.",
    given: "Given: Sphere radius R = 12 cm, cylinder radius r = 8 cm.",
    givenLines: [
      "Sphere radius R = 12 cm",
      "Cylinder radius r = 8 cm",
      "Let cylinder height be h"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Volume of cylinder = Volume of sphere",
          "πr²h = (4/3)πR³   ...(1)",
          "8² × h = (4/3) × 12³",
          "64 h = (4/3) × 1728 = 4 × 576 = 2304   ...(2)",
          "h = 2304 / 64 = 36 cm   ...(3)",
          "Height of the cylinder is 36 cm."
        ]
      }
    ]
  }
];

export const MATH_CLASS10_CH7_EXERCISE_7_5 = [
  {
    id: "ex-7.5-q1",
    exampleNum: "Exercise 7.5 - Q1",
    problem: "The curved surface area of a right circular cone of height 15 cm and base diameter 16 cm is:\n(1) 60π cm²    (2) 68π cm²    (3) 120π cm²    (4) 136π cm²",
    given: "Given: Cone height h = 15 cm, diameter = 16 cm ⇒ radius r = 8 cm.",
    givenLines: [
      "h = 15 cm, r = 8 cm",
      "Slant height l = √(r² + h²)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "l = √(8² + 15²) = √(64 + 225) = √289 = 17 cm   ...(1)",
          "CSA = πrl = π × 8 × 17 = 136π cm²   ...(2)",
          "Correct Option: (4) 136π cm²"
        ]
      }
    ]
  },
  {
    id: "ex-7.5-q2",
    exampleNum: "Exercise 7.5 - Q2",
    problem: "If two solid hemispheres of same base radius r units are joined together along their bases, then curved surface area of this new solid is:\n(1) 4πr² sq.units    (2) 6πr² sq.units    (3) 3πr² sq.units    (4) 8πr² sq.units",
    given: "Given: Two hemispheres joined at bases to form a sphere of radius r.",
    givenLines: [
      "New solid = Sphere of radius r"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "CSA of 2 hemispheres = 2πr² + 2πr² = 4πr²   ...(1)",
          "Correct Option: (1) 4πr² sq.units"
        ]
      }
    ]
  },
  {
    id: "ex-7.5-q3",
    exampleNum: "Exercise 7.5 - Q3",
    problem: "The height of a right circular cone whose radius is 5 cm and slant height is 13 cm will be:\n(1) 12 cm    (2) 10 cm    (3) 13 cm    (4) 8 cm",
    given: "Radius r = 5 cm, slant height l = 13 cm.",
    givenLines: ["h = √(l² - r²)"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "h = √(13² - 5²) = √(169 - 25) = √144 = 12 cm   ...(1)",
          "Correct Option: (1) 12 cm"
        ]
      }
    ]
  },
  {
    id: "ex-7.5-q4",
    exampleNum: "Exercise 7.5 - Q4",
    problem: "If the radius of the base of a right circular cylinder is halved keeping the same height, then the ratio of the volume of the cylinder thus obtained to the volume of original cylinder is:\n(1) 1 : 2    (2) 1 : 4    (3) 1 : 6    (4) 1 : 8",
    given: "Radius is r/2, height is h.",
    givenLines: ["V₁ = πr²h", "V₂ = π(r/2)²h = (1/4)πr²h"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "V₂ / V₁ = [π(r/2)²h] / [πr²h] = (1/4) / 1 = 1 : 4   ...(1)",
          "Correct Option: (2) 1 : 4"
        ]
      }
    ]
  },
  {
    id: "ex-7.5-q5",
    exampleNum: "Exercise 7.5 - Q5",
    problem: "The total surface area of a cylinder whose radius is 1/3 of its height is:\n(1) 9πh² / 8    (2) 24πh²    (3) 8πh² / 9    (4) 56πh² / 9",
    given: "Radius r = h / 3.",
    givenLines: ["TSA = 2πr(h + r)"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "TSA = 2π(h/3)[h + h/3] = 2π(h/3)[4h/3] = 8πh² / 9   ...(1)",
          "Correct Option: (3) 8πh² / 9"
        ]
      }
    ]
  },
  {
    id: "ex-7.5-q6",
    exampleNum: "Exercise 7.5 - Q6",
    problem: "In a hollow cylinder, the sum of the external and internal radii is 14 cm and the width is 4 cm. If its height is 20 cm, the volume of the material in it is:\n(1) 5600π cm³    (2) 1120π cm³    (3) 56π cm³    (4) 3600π cm³",
    given: "R + r = 14 cm, R - r = 4 cm, h = 20 cm.",
    givenLines: ["Volume = π(R² - r²)h = π(R + r)(R - r)h"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "V = π (14) (4) (20) = 1120π cm³   ...(1)",
          "Correct Option: (2) 1120π cm³"
        ]
      }
    ]
  },
  {
    id: "ex-7.5-q7",
    exampleNum: "Exercise 7.5 - Q7",
    problem: "If the radius of the base of a cone is tripled and the height is doubled then the volume is:\n(1) made 6 times    (2) made 18 times    (3) made 12 times    (4) unchanged",
    given: "New radius = 3r, new height = 2h.",
    givenLines: ["V = 1/3 πr²h"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "V_new = 1/3 π (3r)² (2h) = 1/3 π (9r²) (2h) = 18 × (1/3 πr²h)   ...(1)",
          "Volume is made 18 times.",
          "Correct Option: (2) made 18 times"
        ]
      }
    ]
  },
  {
    id: "ex-7.5-q8",
    exampleNum: "Exercise 7.5 - Q8",
    problem: "A solid sphere of radius x cm is melted and cast into a shape of a solid cone of same radius. The height of the cone is:\n(1) 3x cm    (2) x cm    (3) 4x cm    (4) 2x cm",
    given: "Volume of sphere = Volume of cone with radius x.",
    givenLines: ["4/3 πx³ = 1/3 πx² h"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "4/3 π x³ = 1/3 π x² h ⇒ 4x = h ⇒ h = 4x cm   ...(1)",
          "Correct Option: (3) 4x cm"
        ]
      }
    ]
  },
  {
    id: "ex-7.5-q9",
    exampleNum: "Exercise 7.5 - Q9",
    problem: "A frustum of a right circular cone has diameters of base and top as 20 cm and 12 cm and height 3 cm. Its slant height is:\n(1) 5 cm    (2) 6 cm    (3) 4 cm    (4) 7 cm",
    given: "R = 10 cm, r = 6 cm, h = 3 cm.",
    givenLines: ["l = √(h² + (R - r)²)"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "l = √(3² + (10 - 6)²) = √(9 + 16) = √25 = 5 cm   ...(1)",
          "Correct Option: (1) 5 cm"
        ]
      }
    ]
  },
  {
    id: "ex-7.5-q10",
    exampleNum: "Exercise 7.5 - Q10",
    problem: "The ratio of the volumes of a cylinder, a cone and a sphere, if each has the same diameter and same height, is:\n(1) 1 : 2 : 3    (2) 2 : 1 : 3    (3) 1 : 3 : 2    (4) 3 : 1 : 2",
    given: "Height h = 2r for all solids.",
    givenLines: ["Cylinder = 2πr³", "Cone = 2/3 πr³", "Sphere = 4/3 πr³"],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Volumes: 2πr³ : 2/3 πr³ : 4/3 πr³",
          "= 2 : 2/3 : 4/3 = 6 : 2 : 4 = 3 : 1 : 2   ...(1)",
          "Correct Option: (4) 3 : 1 : 2"
        ]
      }
    ]
  }
];

export const getMathClass10Chapter7Sums = (tabId = 'examples') => {
  switch (tabId) {
    case 'ex-7.1': return MATH_CLASS10_CH7_EXERCISE_7_1;
    case 'ex-7.2': return MATH_CLASS10_CH7_EXERCISE_7_2;
    case 'ex-7.3': return MATH_CLASS10_CH7_EXERCISE_7_3;
    case 'ex-7.4': return MATH_CLASS10_CH7_EXERCISE_7_4;
    case 'ex-7.5': return MATH_CLASS10_CH7_EXERCISE_7_5;
    default: return MATH_CLASS10_CH7_EXAMPLES;
  }
};
