// src/data/mathClass10Chapter1Data.js
// Class 10 Mathematics - Chapter 1: Relations and Functions
// Verbatim textbook content from Tamil Nadu State Board Textbook
// Covers:
// - Section 1.1: Introduction (Michael Faraday quote, Everyday Relations, 3D shapes, Class IX recap)
// - Section 1.2: Ordered Pair (Auditorium seating plan Fig 1.1, tokens (4, 10) vs (10, 4), (5, 9) != (9, 5), definition)
// - Section 1.3: Cartesian Product (Illustration 1: Vegetables & Fruits 12 pairs, Formal definition, Illustration 2: Grid plane Fig 1.3, Thinking Corner, Cardinality, Infinite number sets N, W, Z, Q, R)

export const MATH_CLASS10_CH1_STUDY_NOTES = [
  {
    badge: "Chapter Epigraph",
    title: "Michael Faraday's Guiding Principle",
    quote: "The mind can also proceed, and naturally does proceed from the single relation to great and broad generalizations.",
    author: "Michael Faraday (Renowned Physicist & Chemist)",
    summary: "Sets and relations form the bedrock of mathematical modeling, generalizing isolated observations into comprehensive principles."
  },
  {
    badge: "Section 1.1 Introduction",
    title: "Sets, Daily-Life Relations & 3D Modeling",
    points: [
      "Concept Foundation: Set theory was founded by German mathematician Georg Cantor in the 1870s and remains a core language of modern mathematics.",
      "Everyday Relations: In daily life, relationships naturally pair elements together: Teacher to students, brother to sister, fuel consumed to distance driven, and commodity price to consumer demand.",
      "Geometric Formulae as Relations: Geometric properties are functional relations: Base & height determine triangle area (A = ½ b h); radius determines sphere surface area (4πr²) and volume (4/3 πr³).",
      "Common 3D Solids: Standard three-dimensional objects—Cone, Cylinder, and Sphere—connect physical dimensions to surface areas and volumes via algebraic relations.",
      "Class IX Recap: Fundamental set operations include Union (A ∪ B), Intersection (A ∩ B), Difference (A \\ B), and Complementation (A'). Relations extend this by pairing elements from two distinct non-empty sets."
    ]
  },
  {
    badge: "Section 1.2 Ordered Pair",
    title: "Auditorium Seating Plan & Ordered Pair (a, b)",
    illustration: "Auditorium Seating Arrangement (Fig 1.1)",
    points: [
      "Auditorium Seating Analogy: In a large auditorium with seats arranged in rows and columns, each ticket displays a token of two numbers: (Row Number, Seat Number).",
      "Token (4, 10): Indicates Row 4, Seat 10. Does (10, 4) mean the same seat? No! Row 10, Seat 4 is in a completely different part of the hall.",
      "Token (5, 9) vs (9, 5): (5, 9) represents Row 5, Seat 9; whereas (9, 5) represents Row 9, Seat 5. Therefore, (5, 9) ≠ (9, 5).",
      "Formal Definition: A pair of numbers written in a specific order enclosed within parentheses, (a, b), is called an ordered pair.",
      "Coordinates: 'a' is called the first component (or coordinate), and 'b' is called the second component (or coordinate).",
      "Equality Rule: (a, b) = (c, d) if and only if a = c and b = d. Generally, (a, b) ≠ (b, a) unless a = b."
    ]
  },
  {
    badge: "Section 1.3 Illustration 1",
    title: "Cartesian Product of Vegetables & Fruits",
    illustration: "Choosing 1 Vegetable from Set A and 1 Fruit from Set B",
    table: {
      headers: ["Vegetable (Set A)", "Fruits (Set B)", "Resulting Ordered Pairs (A × B)"],
      rows: [
        ["Carrot (c)", "Apple (a), Orange (o), Grapes (g), Strawberry (s)", "(c, a), (c, o), (c, g), (c, s) [4 pairs]"],
        ["Brinjal (b)", "Apple (a), Orange (o), Grapes (g), Strawberry (s)", "(b, a), (b, o), (b, g), (b, s) [4 pairs]"],
        ["Ladies Finger (l)", "Apple (a), Orange (o), Grapes (g), Strawberry (s)", "(l, a), (l, o), (l, g), (l, s) [4 pairs]"]
      ]
    },
    points: [
      "Set A = {carrot (c), brinjal (b), ladies finger (l)}, so n(A) = 3.",
      "Set B = {apple (a), orange (o), grapes (g), strawberry (s)}, so n(B) = 4.",
      "Total distinct meal pairings = 3 × 4 = 12 ordered pairs.",
      "This collection of all possible ordered pairs from set A to set B is the Cartesian Product A × B."
    ]
  },
  {
    badge: "Section 1.3 Formal Definition",
    title: "Definition & Notation of Cartesian Product",
    points: [
      "Definition: If A and B are two non-empty sets, then the set of all ordered pairs (a, b) such that a ∈ A, b ∈ B is called the Cartesian Product of A and B, denoted by A × B.",
      "Set-Builder Form: A × B = {(a, b) | a ∈ A, b ∈ B}.",
      "Empty Set Property: If either A = ∅ or B = ∅, then A × B = ∅.",
      "Cross Product: The Cartesian product is also commonly referred to as the cross product."
    ]
  },
  {
    badge: "Section 1.3 Illustration 2 & Grid",
    title: "Set Example & 2D Coordinate Grid Plane",
    points: [
      "Let A = {1, 2, 3} and B = {a, b}.",
      "A × B = {(1, a), (1, b), (2, a), (2, b), (3, a), (3, b)}.",
      "B × A = {(a, 1), (a, 2), (a, 3), (b, 1), (b, 2), (b, 3)}.",
      "Observation: A × B ≠ B × A because (1, a) ≠ (a, 1). However, n(A × B) = n(B × A) = 6.",
      "Graphical Grid (Fig 1.3): In a 2D grid, horizontal axis represents elements of set A (or B) and vertical axis represents set B (or A). The points of intersection of horizontal and vertical grid lines represent the ordered pairs."
    ]
  },
  {
    badge: "Thinking Corner & Notes",
    title: "Thinking Corner Solution & Cardinality Properties",
    callout: {
      title: "Thinking Corner",
      question: "When will A × B be equal to B × A?",
      answer: "A × B = B × A if and only if A = B (the two sets are identical), OR if at least one of the sets is empty (A = ∅ or B = ∅)."
    },
    points: [
      "Note 1: In general A × B ≠ B × A, but n(A × B) = n(B × A).",
      "Note 2: A × B = ∅ ⇔ A = ∅ or B = ∅.",
      "Note 3: If n(A) = p and n(B) = q, then n(A × B) = p · q.",
      "Note 4: Cartesian product is also called 'cross product'."
    ]
  },
  {
    badge: "Recall: Number Sets",
    title: "Standard Infinite Sets of Numbers",
    points: [
      "Natural Numbers: N = {1, 2, 3, ...}",
      "Whole Numbers: W = {0, 1, 2, 3, ...}",
      "Integers: Z = {..., -2, -1, 0, 1, 2, ...}",
      "Rational Numbers: Q = {p/q | p, q ∈ Z, q ≠ 0}",
      "Real Numbers: R = Q ∪ Q' (The complete union of all rational and irrational numbers).",
      "Hierarchy: N ⊂ W ⊂ Z ⊂ Q ⊂ R."
    ]
  }
];

// =========================================================================
// 1 MARK QUESTIONS (MCQs, FORMULAS, FILL BLANKS, ONE WORDS)
// =========================================================================
export const MATH_CLASS10_CH1_MCQS = [
  {
    q: "[Section 1.2 - Auditorium Seating] In an auditorium seating plan, token (4, 10) indicates Row 4, Seat 10. Does (10, 4) represent the same seat?",
    options: [
      "No, (10, 4) represents Row 10, Seat 4 which is completely different",
      "Yes, because 4 and 10 are the same two numbers",
      "Yes, seat ordering does not matter in mathematics",
      "Only if the auditorium has circular seating"
    ],
    answer: 0,
    explanation: "In an ordered pair (a, b), order is strictly preserved. Row 4, Seat 10 is distinct from Row 10, Seat 4; hence (4, 10) ≠ (10, 4)."
  },
  {
    q: "[Section 1.2 - Ordered Pair Definition] If (x - 2, 5) = (3, y + 1), what are the values of x and y?",
    options: [
      "x = 5, y = 4",
      "x = 1, y = 6",
      "x = 3, y = 5",
      "x = 5, y = 6"
    ],
    answer: 0,
    explanation: "By equality of ordered pairs: x - 2 = 3 => x = 5; and y + 1 = 5 => y = 4."
  },
  {
    q: "[Section 1.3 - Illustration 1] If set A = {carrot, brinjal, ladies finger} and set B = {apple, orange, grapes, strawberry}, what is the total number of ordered pairs in A × B?",
    options: [
      "12 pairs",
      "7 pairs",
      "14 pairs",
      "10 pairs"
    ],
    answer: 0,
    explanation: "n(A) = 3 vegetables, n(B) = 4 fruits. Cardinality of A × B = n(A) × n(B) = 3 × 4 = 12."
  },
  {
    q: "[Section 1.3 - Thinking Corner] Under which condition is A × B equal to B × A?",
    options: [
      "When A = B, or either A = ∅ or B = ∅",
      "Always for any two non-empty sets",
      "Only when n(A) = n(B)",
      "Never under any condition"
    ],
    answer: 0,
    explanation: "Textbook Thinking Corner: A × B = B × A if and only if the sets are identical (A = B) or at least one is the empty set (A = ∅ or B = ∅)."
  },
  {
    q: "[Section 1.3 - Cardinality Rule] If n(A) = p and n(B) = q, then n(A × B) is equal to:",
    options: [
      "p · q",
      "p + q",
      "p^q",
      "2^(p · q)"
    ],
    answer: 0,
    explanation: "Textbook Note: If n(A) = p and n(B) = q, then n(A × B) = p · q = n(B × A)."
  },
  {
    q: "[Section 1.3 - Recall Note] The set of all Real numbers R is defined as the union of:",
    options: [
      "Rational numbers and Irrational numbers (Q ∪ Q')",
      "Natural numbers and Whole numbers (N ∪ W)",
      "Integers and Fractions (Z ∪ F)",
      "Positive numbers and Negative numbers"
    ],
    answer: 0,
    explanation: "Recall note from Section 1.3: Real numbers R = Q ∪ Q' (the union of rational and irrational numbers)."
  },
  {
    q: "[Section 1.3 - Empty Set Property] If A is any non-empty set and ∅ is the empty set, then A × ∅ is:",
    options: [
      "∅ (The empty set)",
      "A",
      "{(a, ∅)}",
      "A single element set"
    ],
    answer: 0,
    explanation: "By definition of Cartesian product, if either set is empty, no ordered pair can be formed: A × ∅ = ∅."
  },
  {
    q: "[Section 1.3 - Terminology] The Cartesian product of two sets is also known as:",
    options: [
      "Cross product",
      "Dot product",
      "Scalar product",
      "Direct sum"
    ],
    answer: 0,
    explanation: "Textbook Note (iii): The Cartesian product is also called 'cross product'."
  }
];

export const MATH_CLASS10_CH1_FORMULAS = [
  {
    q: "[Definition of Cartesian Product] What is the formal set-builder notation for the Cartesian Product A × B?",
    options: [
      "A × B = {(a, b) | a ∈ A, b ∈ B}",
      "A × B = {a + b | a ∈ A, b ∈ B}",
      "A × B = {(b, a) | a ∈ A, b ∈ B}",
      "A × B = {a ∪ b | a ∈ A, b ∈ B}"
    ],
    answer: 0,
    explanation: "Standard definition: A × B = {(a, b) | a ∈ A, b ∈ B}."
  },
  {
    q: "[Cardinality Formula] If n(A) = 3 and n(B) = 2, what are n(A × B) and n(B × A)?",
    options: [
      "n(A × B) = n(B × A) = 6",
      "n(A × B) = 6, but n(B × A) = 5",
      "n(A × B) = 5, n(B × A) = 5",
      "n(A × B) = 9, n(B × A) = 4"
    ],
    answer: 0,
    explanation: "Even though A × B ≠ B × A, their cardinalities are always equal: n(A × B) = n(B × A) = 3 × 2 = 6."
  },
  {
    q: "[Ordered Pair Equality] Two ordered pairs (a, b) and (c, d) are equal if and only if:",
    options: [
      "a = c and b = d",
      "a = d and b = c",
      "a + b = c + d",
      "a · b = c · d"
    ],
    answer: 0,
    explanation: "(a, b) = (c, d) ⇔ a = c and b = d."
  },
  {
    q: "[Thinking Corner Identity] Under which condition is A × B = B × A?",
    options: [
      "A = B or A = ∅ or B = ∅",
      "n(A) = n(B)",
      "A ⊆ B",
      "A ∩ B ≠ ∅"
    ],
    answer: 0,
    explanation: "A × B = B × A holds if and only if sets A and B are identical, or at least one is the empty set."
  },
  {
    q: "[Real Number Set Identity] Which symbolic expression represents the set of Real Numbers R?",
    options: [
      "R = Q ∪ Q'",
      "R = N ∪ W",
      "R = Z ∩ Q",
      "R = Q \\ Z"
    ],
    answer: 0,
    explanation: "Real numbers R is the union of Rational numbers (Q) and Irrational numbers (Q')."
  }
];

export const MATH_CLASS10_CH1_FILL_BLANKS = [
  {
    q: "[Section 1.2] An ordered pair (a, b) is not equal to (b, a) unless ______:",
    options: ["a = b", "a > b", "a < b", "a + b = 0"],
    answer: 0,
    explanation: "(a, b) ≠ (b, a) in general, except when the components are identical (a = b)."
  },
  {
    q: "[Section 1.3] If n(A) = 3 and n(B) = 4, then n(A × B) = ______:",
    options: ["12", "7", "1", "64"],
    answer: 0,
    explanation: "n(A × B) = n(A) × n(B) = 3 × 4 = 12."
  },
  {
    q: "[Section 1.3] In general, A × B ≠ B × A, but n(A × B) is always ______ n(B × A):",
    options: ["Equal to", "Greater than", "Less than", "Reciprocal of"],
    answer: 0,
    explanation: "Textbook Note: In general A × B ≠ B × A, but n(A × B) = n(B × A)."
  },
  {
    q: "[Section 1.3] If A × B = ∅, then either A = ∅ or ______:",
    options: ["B = ∅", "B = A", "B is infinite", "n(B) = 1"],
    answer: 0,
    explanation: "Textbook Note: A × B = ∅ ⇔ A = ∅ or B = ∅."
  },
  {
    q: "[Section 1.3] The Cartesian product is also commonly known as the ______ product:",
    options: ["Cross", "Dot", "Direct", "Prime"],
    answer: 0,
    explanation: "Textbook Note (iii): The Cartesian product is also called 'cross product'."
  },
  {
    q: "[Section 1.2] In the auditorium seating token (5, 9), 5 represents the ______ number and 9 represents the seat number:",
    options: ["Row", "Column", "Balcony", "Tier"],
    answer: 0,
    explanation: "In token (Row, Seat), 5 represents the row number and 9 represents the seat number."
  }
];

export const MATH_CLASS10_CH1_ONE_WORDS = [
  {
    q: "[Historical Fact] Name the mathematician who founded Set Theory in the 1870s:",
    options: ["Georg Cantor", "Leonhard Euler", "René Descartes", "Carl Friedrich Gauss"],
    answer: 0,
    explanation: "Section 1.1: Set theory was developed by the German mathematician Georg Cantor in the 1870s."
  },
  {
    q: "[Empty Product] If A = {1, 2, 3} and B = ∅, what is A × B?",
    options: ["∅", "{1, 2, 3}", "{(1, ∅), (2, ∅), (3, ∅)}", "0"],
    answer: 0,
    explanation: "If either set is empty, the Cartesian product is the empty set: A × ∅ = ∅."
  },
  {
    q: "[Cardinality Calculation] If n(A × B) = 6 and A = {1, 3}, what is n(B)?",
    options: ["3", "2", "4", "6"],
    answer: 0,
    explanation: "n(A) = 2. Since n(A × B) = n(A) × n(B), 6 = 2 × n(B) => n(B) = 3."
  },
  {
    q: "[Auditorium Comparison] In the auditorium seating system, is token (5, 9) equal to token (9, 5)?",
    options: ["No, (5, 9) ≠ (9, 5)", "Yes, they are identical", "Only on weekends", "Yes, in small halls"],
    answer: 0,
    explanation: "Row 5, Seat 9 is distinct from Row 9, Seat 5; hence (5, 9) ≠ (9, 5)."
  },
  {
    q: "[Quote Author] Who said: 'The mind can also proceed, and naturally does proceed from the single relation to great and broad generalizations'?",
    options: ["Michael Faraday", "Albert Einstein", "Isaac Newton", "René Descartes"],
    answer: 0,
    explanation: "Epigraph quote of Chapter 1 is by Michael Faraday."
  }
];

// =========================================================================
// 2 MARK QUESTIONS (SHORT ANSWERS, DEFINITIONS, PROBLEMS, BOOK-BACK)
// =========================================================================
export const MATH_CLASS10_CH1_2MARK_QA = [
  {
    q: "[2 Marks - Auditorium Seating Model] In an auditorium seating plan, each seat is allocated a token (r, s). Explain what tokens (4, 10) and (10, 4) represent. Do they indicate the same seat?",
    points: [
      "1. Token (4, 10) indicates Row 4, Seat 10.",
      "2. Token (10, 4) indicates Row 10, Seat 4.",
      "3. Conclusion: Since Row 4 is completely different from Row 10, (4, 10) ≠ (10, 4). They do not refer to the same seat. Order is essential!"
    ]
  },
  {
    q: "[2 Marks - Ordered Pair Definition] Define an Ordered Pair with formal notation and explain why (5, 9) ≠ (9, 5).",
    points: [
      "1. Definition: A pair of numbers written in a specific order enclosed within parentheses, (a, b), is called an ordered pair, where 'a' is the first component and 'b' is the second component.",
      "2. Equality Condition: (a, b) = (c, d) if and only if a = c and b = d.",
      "3. Since 5 ≠ 9, the first coordinates are unequal, so (5, 9) ≠ (9, 5)."
    ]
  },
  {
    q: "[2 Marks - Cartesian Product Definition] Define the Cartesian Product of two non-empty sets A and B. What is the value of A × ∅?",
    points: [
      "1. Definition: If A and B are two non-empty sets, the set of all ordered pairs (a, b) such that a ∈ A, b ∈ B is called the Cartesian Product of A and B.",
      "2. Set-Builder Notation: A × B = {(a, b) | a ∈ A, b ∈ B}.",
      "3. Empty Set Value: If either set is empty, no ordered pair can be formed; therefore, A × ∅ = ∅."
    ]
  },
  {
    q: "[2 Marks - Illustration 2] If A = {1, 2, 3} and B = {a, b}, write A × B and B × A. State whether A × B = B × A.",
    points: [
      "1. A × B = {(1, a), (1, b), (2, a), (2, b), (3, a), (3, b)}.",
      "2. B × A = {(a, 1), (a, 2), (a, 3), (b, 1), (b, 2), (b, 3)}.",
      "3. Conclusion: Since (1, a) ≠ (a, 1), A × B ≠ B × A. However, n(A × B) = n(B × A) = 6."
    ]
  },
  {
    q: "[2 Marks - Thinking Corner] When will the Cartesian product A × B be equal to B × A? Justify with two conditions.",
    points: [
      "1. Condition 1: A × B = B × A if and only if A = B (i.e., both sets are identical).",
      "2. Condition 2: A × B = B × A if either A = ∅ or B = ∅ (since both products equal ∅).",
      "3. In all other cases where A ≠ B and sets are non-empty, A × B ≠ B × A."
    ]
  },
  {
    q: "[2 Marks - Meal Pairing Problem] A student chooses 1 vegetable from A = {carrot (c), brinjal (b), ladies finger (l)} and 1 fruit from B = {apple (a), orange (o), grapes (g), strawberry (s)}. Find n(A × B).",
    points: [
      "1. Number of vegetables: n(A) = 3.",
      "2. Number of fruits: n(B) = 4.",
      "3. Total possible choices = n(A × B) = n(A) × n(B) = 3 × 4 = 12 distinct combinations."
    ]
  }
];

export const MATH_CLASS10_CH1_2MARK_DEFINITIONS = [
  {
    q: "[2 Marks - Key Definition] Define the Cartesian Product in set-builder form and state its alternative name.",
    points: [
      "1. Set-builder form: A × B = {(a, b) | a ∈ A, b ∈ B}, where A and B are non-empty sets.",
      "2. Alternative name: The Cartesian product is also called the 'cross product'."
    ]
  },
  {
    q: "[2 Marks - Key Property] State the 3 crucial notes on Cartesian Product given in Section 1.3.",
    points: [
      "1. Note 1: In general, A × B ≠ B × A, but n(A × B) = n(B × A).",
      "2. Note 2: A × B = ∅ ⇔ A = ∅ or B = ∅.",
      "3. Note 3: If n(A) = p and n(B) = q, then n(A × B) = pq."
    ]
  },
  {
    q: "[2 Marks - Standard Sets Recall] Define the set of Rational numbers Q and Real numbers R.",
    points: [
      "1. Rational Numbers: Q = {p/q | p, q ∈ Z, q ≠ 0}.",
      "2. Real Numbers: R = Q ∪ Q' (The union of the set of all rational numbers and irrational numbers)."
    ]
  }
];

export const MATH_CLASS10_CH1_2MARK_PROBLEMS = [
  {
    q: "[2 Marks - Numerical Problem] If (x + 1, 3) = (5, y - 2), find the values of x and y.",
    points: [
      "1. By equality of ordered pairs: x + 1 = 5 => x = 5 - 1 = 4.",
      "2. Second coordinates: y - 2 = 3 => y = 3 + 2 = 5.",
      "3. Answer: x = 4, y = 5."
    ]
  },
  {
    q: "[2 Marks - Numerical Problem] If n(A × B) = 20 and n(A) = 4, find n(B) and n(B × A).",
    points: [
      "1. Formula: n(A × B) = n(A) × n(B) => 20 = 4 × n(B) => n(B) = 20 / 4 = 5.",
      "2. By cardinality property: n(B × A) = n(A × B) = 20."
    ]
  }
];

export const MATH_CLASS10_CH1_2MARK_BOOKBACK = [
  {
    q: "[2 Marks - Book-Back Style] If A × B = {(a, 1), (a, 2), (a, 3), (b, 1), (b, 2), (b, 3)}, find the sets A and B.",
    points: [
      "1. Set A is the set of all first coordinates: A = {a, b}.",
      "2. Set B is the set of all second coordinates: B = {1, 2, 3}.",
      "3. Verification: n(A) = 2, n(B) = 3, and n(A × B) = 2 × 3 = 6."
    ]
  },
  {
    q: "[2 Marks - Book-Back Style] Let A = {1, 3, 5} and B = {2, 3}. Check whether n(A × B) = n(B × A).",
    points: [
      "1. n(A) = 3 and n(B) = 2.",
      "2. n(A × B) = n(A) × n(B) = 3 × 2 = 6.",
      "3. n(B × A) = n(B) × n(A) = 2 × 3 = 6. Hence, n(A × B) = n(B × A) = 6."
    ]
  }
];

// =========================================================================
// 5 MARK QUESTIONS (DETAILED ANSWERS, THEOREMS, DIAGRAMS)
// =========================================================================
export const MATH_CLASS10_CH1_5MARK_DETAILED = [
  {
    q: "[5 Marks - Comprehensive Illustration 1] Explain the concept of Cartesian Product using the Vegetable and Fruit selection model (Section 1.3):\n(a) Write sets A and B and list all 12 ordered pairs in A × B.\n(b) State the formal set-builder definition and empty set condition.\n(c) Verify the cardinality relationship n(A × B) = n(A) · n(B).",
    points: [
      "Part (a) Sets & Pairings: Let A = {c, b, l} be vegetables and B = {a, o, g, s} be fruits.\nPairing each vegetable with each fruit gives:\nRow 1: (c, a), (c, o), (c, g), (c, s)\nRow 2: (b, a), (b, o), (b, g), (b, s)\nRow 3: (l, a), (l, o), (l, g), (l, s)\nTherefore, A × B = {(c,a), (c,o), (c,g), (c,s), (b,a), (b,o), (b,g), (b,s), (l,a), (l,o), (l,g), (l,s)}.",
      "Part (b) Formal Definition: If A and B are two non-empty sets, the set of all ordered pairs (a, b) such that a ∈ A, b ∈ B is called the Cartesian Product of A and B, denoted by A × B = {(a, b) | a ∈ A, b ∈ B}. If A = ∅ or B = ∅, then A × B = ∅.",
      "Part (c) Cardinality Verification: n(A) = 3 and n(B) = 4. Number of elements in A × B = 12. Formula: n(A × B) = n(A) · n(B) = 3 · 4 = 12. The identity holds perfectly."
    ]
  },
  {
    q: "[5 Marks - Illustration 2 & Grid Model] Let A = {1, 2, 3} and B = {a, b}:\n(a) Find A × B and B × A.\n(b) Prove whether A × B = B × A and verify n(A × B) = n(B × A).\n(c) Explain the graphical representation on a 2D Cartesian plane grid (Fig 1.3).",
    points: [
      "Part (a) Finding Products:\nA × B = {(1, a), (1, b), (2, a), (2, b), (3, a), (3, b)}\nB × A = {(a, 1), (a, 2), (a, 3), (b, 1), (b, 2), (b, 3)}.",
      "Part (b) Equalities Analysis:\nComparing elements: (1, a) ≠ (a, 1), (1, b) ≠ (b, 1), etc. Therefore, A × B ≠ B × A (Cartesian product is not commutative).\nHowever, counting elements: n(A × B) = 6 and n(B × A) = 6. Thus, n(A × B) = n(B × A) = 6.",
      "Part (c) Graphical Grid Plane Representation (Fig 1.3):\n1. Draw horizontal axis representing elements of set A = {1, 2, 3} and vertical axis representing elements of set B = {a, b}.\n2. Draw vertical grid lines through 1, 2, 3 and horizontal grid lines through a, b.\n3. The 6 intersection points of these grid lines represent the ordered pairs of A × B in coordinate space."
    ]
  }
];

export const MATH_CLASS10_CH1_5MARK_THEOREMS = [
  {
    q: "[5 Marks - Properties & Thinking Corner] State and rigorously explain the 4 fundamental notes of Cartesian Product, prove the Thinking Corner condition, and write the standard infinite number sets hierarchy.",
    points: [
      "1. Four Fundamental Notes:\n(i) A × B is the set of all pairs with first element from A and second from B; in general A × B ≠ B × A, but n(A × B) = n(B × A).\n(ii) A × B = ∅ ⇔ A = ∅ or B = ∅.\n(iii) If n(A) = p and n(B) = q, then n(A × B) = pq.\n(iv) Cartesian product is also called 'cross product'.",
      "2. Thinking Corner Proof: When is A × B = B × A?\nFor any pair (a, b) ∈ A × B to belong to B × A, we must have a ∈ B and b ∈ A. This requires every element of A to be in B and vice-versa, meaning A = B. If either set is empty, A × ∅ = ∅ × A = ∅. Thus, A × B = B × A ⇔ A = B or A = ∅ or B = ∅.",
      "3. Standard Infinite Sets of Numbers Hierarchy:\nNatural Numbers N = {1, 2, 3, ...}\nWhole Numbers W = {0, 1, 2, 3, ...}\nIntegers Z = {..., -2, -1, 0, 1, 2, ...}\nRational Numbers Q = {p/q | p, q ∈ Z, q ≠ 0}\nReal Numbers R = Q ∪ Q' (Union of rationals & irrationals)\nHierarchy Chain: N ⊂ W ⊂ Z ⊂ Q ⊂ R."
    ]
  }
];

export const MATH_CLASS10_CH1_5MARK_DIAGRAMS = [
  {
    q: "[5 Marks - Auditorium & Grid Modeling] Construct a comparative analysis between the Auditorium Seating Arrangement (Fig 1.1) and the Cartesian Grid Representation (Fig 1.3):\n(a) Explain how tokens (r, s) mirror ordered pairs (x, y).\n(b) Detail why (4, 10) ≠ (10, 4) in an auditorium and how this corresponds to (1, a) ≠ (a, 1) on the grid plane.\n(c) State the scoring key for board exam representations.",
    points: [
      "Part (a) Auditorium Seating vs Cartesian Grid: In an auditorium, rows represent horizontal divisions and seat numbers represent vertical divisions. Every attendee's seat is uniquely pinned by the ordered pair (Row, Seat). On a Cartesian plane, horizontal x-coordinates and vertical y-coordinates pinpoint a unique geometric location.",
      "Part (b) Order Sensitivity: In token (4, 10), 4 is row and 10 is seat. In token (10, 4), 10 is row and 4 is seat. A person seated at (4, 10) is 6 rows closer to the stage than at (10, 4). Similarly, on the grid plane, (1, a) lies on the vertical line x = 1, whereas (a, 1) lies on x = a. Hence, order cannot be swapped without changing the point.",
      "Part (c) Board Exam Scoring Key: Real-life analogy statement (1 Mark) + Definition of ordered pair (1 Mark) + Comparative coordinate explanation (2 Marks) + Geometric grid conclusion (1 Mark) = 5 Marks."
    ]
  }
];

// =========================================================================
// 10 MARK COMPREHENSIVE ESSAY / CASE STUDY
// =========================================================================
export const MATH_CLASS10_CH1_10MARK_ESSAYS = [
  {
    q: "[10 Marks - Comprehensive Chapter 1 Blueprint Review] Foundational Theory, Real-Life Models & Mathematical Induction of Cartesian Product for Class 10 Board Examinations.",
    points: [
      "Part A (Core Principles & Real-Life Models - 4 Marks):\n1. Quote & Philosophy: Michael Faraday's principle of progressing from a single relation to broad generalizations.\n2. Auditorium Model: Token system (Row, Seat), proving (4, 10) ≠ (10, 4) and (5, 9) ≠ (9, 5).\n3. Vegetable & Fruit Model: A = {c, b, l}, B = {a, o, g, s}, full 12-pair table, formal set-builder definition A × B = {(a, b) | a ∈ A, b ∈ B}, and empty set property A × ∅ = ∅.",
      "Part B (Coordinate Grid Proof & Analytical Theorems - 3 Marks):\n1. Given A = {1, 2, 3} and B = {a, b}, construct A × B and B × A.\n2. Formal proof that A × B ≠ B × A while n(A × B) = n(B × A) = 6.\n3. Geometric interpretation of Cartesian grid lines (Fig 1.3) and cross product nomenclature.",
      "Part C (Thinking Corner Resolution & Infinite Sets Hierarchy - 3 Marks):\n1. Thinking Corner: Comprehensive mathematical proof that A × B = B × A ⇔ A = B or A = ∅ or B = ∅.\n2. Number sets recap: Natural (N), Whole (W), Integers (Z), Rationals (Q), and Reals (R = Q ∪ Q').\n3. Proof of subset chain: N ⊂ W ⊂ Z ⊂ Q ⊂ R with board exam summary."
    ]
  }
];

export const MATH_CLASS10_CH1_10MARK_CASE_STUDY = [
  {
    q: "[10 Marks - Practical Case Study] Modeling Real-World Seating Allocations and Relational Databases using Cartesian Products and Ordered Pairs.",
    points: [
      "Case Study Scenario: An educational institution is organizing a state-level mathematics Olympiad in an auditorium with 10 rows and 20 seats per row. A catering committee also prepares meal kits consisting of 3 drink options and 4 snack options.",
      "Question 1 (Seating Coordinates - 3 Marks): Formulate the set of all possible seating tokens as a Cartesian product R × S where R = {1, 2, ..., 10} and S = {1, 2, ..., 20}. Calculate total capacity n(R × S). Explain why a student issued token (3, 15) cannot sit at (15, 3).",
      "Question 2 (Meal Options - 3 Marks): Let D = {juice, milk, water} and K = {biscuit, sandwich, fruit, nuts}. Express D × K and compute n(D × K). Show how this mirrors Illustration 1 from Section 1.3.",
      "Question 3 (Database Relational Cross Join - 4 Marks): Explain why relational database operations use Cartesian products (CROSS JOIN) to generate all candidate combinations, and prove the Thinking Corner condition for symmetry."
    ]
  }
];

// Master getter for Class 10 Math Chapter 1
export const getMathClass10Chapter1Questions = (categoryId = "mcqs", mark = 1, selectedSection = null) => {
  const markNum = parseInt(mark, 10) || 1;

  if (markNum === 1) {
    if (categoryId === "concept-study") return MATH_CLASS10_CH1_STUDY_NOTES;
    if (categoryId === "formulas") return MATH_CLASS10_CH1_FORMULAS;
    if (categoryId === "fill-blanks") return MATH_CLASS10_CH1_FILL_BLANKS;
    if (categoryId === "one-words") return MATH_CLASS10_CH1_ONE_WORDS;
    return MATH_CLASS10_CH1_MCQS;
  }

  if (markNum === 2) {
    if (categoryId === "2m-definitions") return MATH_CLASS10_CH1_2MARK_DEFINITIONS;
    if (categoryId === "2m-problems") return MATH_CLASS10_CH1_2MARK_PROBLEMS;
    if (categoryId === "2m-bookback") return MATH_CLASS10_CH1_2MARK_BOOKBACK;
    return MATH_CLASS10_CH1_2MARK_QA;
  }

  if (markNum === 5) {
    if (categoryId === "5m-theorems") return MATH_CLASS10_CH1_5MARK_THEOREMS;
    if (categoryId === "5m-diagrams") return MATH_CLASS10_CH1_5MARK_DIAGRAMS;
    return MATH_CLASS10_CH1_5MARK_DETAILED;
  }

  if (markNum === 10) {
    if (categoryId === "10m-case-study") return MATH_CLASS10_CH1_10MARK_CASE_STUDY;
    return MATH_CLASS10_CH1_10MARK_ESSAYS;
  }

  return MATH_CLASS10_CH1_MCQS;
};

// =========================================================================
// TEXTBOOK WORKED EXAMPLES (SUMS) - 3D CARDS VIEW
// Verbatim from Tamil Nadu State Board Class 10 Textbook:
// - Example 1.1: If A = {1, 3, 5} and B = {2, 3}...
// - Example 1.2: If A × B = {(3, 2), (3, 4), (5, 2), (5, 4)}...
// - Example 1.3: Let A = {x ∈ ℕ | 1 < x < 4}, B = {x ∈ 𝕎 | 0 ≤ x < 2}, C = {x ∈ ℕ | x < 3}...
// =========================================================================
export const MATH_CLASS10_CH1_EXAMPLES = [
  {
    id: "example-1.1",
    exampleNum: "Example 1.1",
    problem: "If A = {1, 3, 5} and B = {2, 3} then (i) find A × B and B × A. (ii) Is A × B = B × A? If not why? (iii) Show that n(A × B) = n(B × A) = n(A) × n(B).",
    given: "Given: A = {1, 3, 5} and B = {2, 3}.",
    givenLines: [
      "A = {1, 3, 5}",
      "B = {2, 3}"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "A × B = {1, 3, 5} × {2, 3}",
          "A × B = {(1, 2), (1, 3), (3, 2), (3, 3), (5, 2), (5, 3)}   ...(1)",
          "B × A = {2, 3} × {1, 3, 5}",
          "B × A = {(2, 1), (2, 3), (2, 5), (3, 1), (3, 3), (3, 5)}   ...(2)"
        ]
      },
      {
        partNum: "2.",
        lines: [
          "From (1) and (2), (1, 2) ≠ (2, 1) and (1, 3) ≠ (3, 1)",
          "Hence, A × B ≠ B × A"
        ]
      },
      {
        partNum: "3.",
        lines: [
          "n(A) = 3 and n(B) = 2",
          "From (1), n(A × B) = 6",
          "From (2), n(B × A) = 6",
          "n(A) × n(B) = 3 × 2 = 6",
          "n(B) × n(A) = 2 × 3 = 6",
          "From (1) and (2), n(A × B) = n(B × A) = n(A) × n(B) = 6"
        ]
      }
    ]
  },
  {
    id: "example-1.2",
    exampleNum: "Example 1.2",
    problem: "If A × B = {(3, 2), (3, 4), (5, 2), (5, 4)} then find A and B.",
    given: "Given: A × B = {(3, 2), (3, 4), (5, 2), (5, 4)}.",
    givenLines: [
      "A × B = {(3, 2), (3, 4), (5, 2), (5, 4)}"
    ],
    parts: [
      {
        lines: [
          "A = {set of all first coordinates of elements of A × B}",
          "A = {3, 5}   ...(1)",
          "B = {set of all second coordinates of elements of A × B}",
          "B = {2, 4}   ...(2)",
          "From (1) and (2), A = {3, 5} and B = {2, 4}"
        ]
      }
    ]
  },
  {
    id: "example-1.3",
    exampleNum: "Example 1.3",
    problem: "Let A = {x ∈ ℕ | 1 < x < 4}, B = {x ∈ 𝕎 | 0 ≤ x < 2} and C = {x ∈ ℕ | x < 3}. Then verify that\n(i) A × (B ∪ C) = (A × B) ∪ (A × C)\n(ii) A × (B ∩ C) = (A × B) ∩ (A × C)",
    given: "Given: A = {x ∈ ℕ | 1 < x < 4} = {2, 3},  B = {x ∈ 𝕎 | 0 ≤ x < 2} = {0, 1},  C = {x ∈ ℕ | x < 3} = {1, 2}.",
    givenLines: [
      "A = {x ∈ ℕ | 1 < x < 4} = {2, 3}",
      "B = {x ∈ 𝕎 | 0 ≤ x < 2} = {0, 1}",
      "C = {x ∈ ℕ | x < 3} = {1, 2}"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) A × (B ∪ C) = (A × B) ∪ (A × C)",
        lines: [
          "B ∪ C = {0, 1} ∪ {1, 2} = {0, 1, 2}",
          "A × (B ∪ C) = {2, 3} × {0, 1, 2}",
          "A × (B ∪ C) = {(2, 0), (2, 1), (2, 2), (3, 0), (3, 1), (3, 2)}   ...(1)",
          "A × B = {2, 3} × {0, 1} = {(2, 0), (2, 1), (3, 0), (3, 1)}",
          "A × C = {2, 3} × {1, 2} = {(2, 1), (2, 2), (3, 1), (3, 2)}",
          "(A × B) ∪ (A × C) = {(2, 0), (2, 1), (3, 0), (3, 1)} ∪ {(2, 1), (2, 2), (3, 1), (3, 2)}",
          "(A × B) ∪ (A × C) = {(2, 0), (2, 1), (2, 2), (3, 0), (3, 1), (3, 2)}   ...(2)",
          "From (1) and (2), A × (B ∪ C) = (A × B) ∪ (A × C) is verified."
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) A × (B ∩ C) = (A × B) ∩ (A × C)",
        lines: [
          "B ∩ C = {0, 1} ∩ {1, 2} = {1}",
          "A × (B ∩ C) = {2, 3} × {1}",
          "A × (B ∩ C) = {(2, 1), (3, 1)}   ...(3)",
          "A × B = {2, 3} × {0, 1} = {(2, 0), (2, 1), (3, 0), (3, 1)}",
          "A × C = {2, 3} × {1, 2} = {(2, 1), (2, 2), (3, 1), (3, 2)}",
          "(A × B) ∩ (A × C) = {(2, 0), (2, 1), (3, 0), (3, 1)} ∩ {(2, 1), (2, 2), (3, 1), (3, 2)}",
          "(A × B) ∩ (A × C) = {(2, 1), (3, 1)}   ...(4)",
          "From (3) and (4), A × (B ∩ C) = (A × B) ∩ (A × C) is verified."
        ]
      }
    ]
  }
];

// =========================================================================
// HORIZONTAL SCROLLABLE PILLS FOR CHAPTER 1
// =========================================================================
export const MATH_CLASS10_CH1_PILLS = [
  { id: 'examples', label: 'Examples' },
  { id: 'ex-1.1', label: 'Exercise 1.1' },
  { id: 'ex-1.2', label: 'Exercise 1.2' },
  { id: 'ex-1.3', label: 'Exercise 1.3' },
  { id: 'ex-1.4', label: 'Exercise 1.4' },
  { id: 'ex-1.5', label: 'Exercise 1.5' },
  { id: 'ex-1.6', label: 'Exercise 1.6' }
];

// Exercise 1.1 Textbook Sums
export const MATH_CLASS10_CH1_EXERCISE_1_1 = [
  {
    id: "ex-1.1-q1",
    exampleNum: "Exercise 1.1 - Q1",
    problem: "Find A × B, A × A and B × A for:\n(i) A = {2, -2, 3} and B = {1, -4}\n(ii) A = B = {p, q}\n(iii) A = {m, n} and B = ∅",
    given: "Given sets: (i) A = {2, -2, 3}, B = {1, -4}  (ii) A = B = {p, q}  (iii) A = {m, n}, B = ∅.",
    givenLines: [
      "(i) A = {2, -2, 3}, B = {1, -4}",
      "(ii) A = {p, q}, B = {p, q}",
      "(iii) A = {m, n}, B = ∅"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) A = {2, -2, 3} and B = {1, -4}",
        lines: [
          "A × B = {2, -2, 3} × {1, -4}",
          "= {(2, 1), (2, -4), (-2, 1), (-2, -4), (3, 1), (3, -4)}",
          "A × A = {2, -2, 3} × {2, -2, 3}",
          "= {(2, 2), (2, -2), (2, 3), (-2, 2), (-2, -2), (-2, 3), (3, 2), (3, -2), (3, 3)}",
          "B × A = {1, -4} × {2, -2, 3}",
          "= {(1, 2), (1, -2), (1, 3), (-4, 2), (-4, -2), (-4, 3)}"
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) A = B = {p, q}",
        lines: [
          "A × B = {p, q} × {p, q} = {(p, p), (p, q), (q, p), (q, q)}",
          "A × A = {p, q} × {p, q} = {(p, p), (p, q), (q, p), (q, q)}",
          "B × A = {p, q} × {p, q} = {(p, p), (p, q), (q, p), (q, q)}"
        ]
      },
      {
        partNum: "3.",
        heading: "(iii) A = {m, n} and B = ∅",
        lines: [
          "A × B = {m, n} × ∅ = ∅",
          "A × A = {m, n} × {m, n} = {(m, m), (m, n), (n, m), (n, n)}",
          "B × A = ∅ × {m, n} = ∅"
        ]
      }
    ]
  },
  {
    id: "ex-1.1-q2",
    exampleNum: "Exercise 1.1 - Q2",
    problem: "Let A = {1, 2, 3} and B = {x | x is a prime number less than 10}. Find A × B and B × A.",
    given: "Given: A = {1, 2, 3} and B = {prime numbers less than 10}.",
    givenLines: [
      "A = {1, 2, 3}",
      "B = {x | x is a prime number < 10} = {2, 3, 5, 7}"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "A × B = {1, 2, 3} × {2, 3, 5, 7}",
          "= {(1, 2), (1, 3), (1, 5), (1, 7), (2, 2), (2, 3), (2, 5), (2, 7), (3, 2), (3, 3), (3, 5), (3, 7)}"
        ]
      },
      {
        partNum: "2.",
        lines: [
          "B × A = {2, 3, 5, 7} × {1, 2, 3}",
          "= {(2, 1), (2, 2), (2, 3), (3, 1), (3, 2), (3, 3), (5, 1), (5, 2), (5, 3), (7, 1), (7, 2), (7, 3)}"
        ]
      }
    ]
  },
  {
    id: "ex-1.1-q3",
    exampleNum: "Exercise 1.1 - Q3",
    problem: "If B × A = {(-2, 3), (-2, 4), (0, 3), (0, 4), (3, 3), (3, 4)}, find A and B.",
    given: "Given: B × A = {(-2, 3), (-2, 4), (0, 3), (0, 4), (3, 3), (3, 4)}.",
    givenLines: [
      "B × A = {(-2, 3), (-2, 4), (0, 3), (0, 4), (3, 3), (3, 4)}"
    ],
    parts: [
      {
        lines: [
          "B = {set of all first coordinates of elements of B × A} = {-2, 0, 3}",
          "A = {set of all second coordinates of elements of B × A} = {3, 4}",
          "Thus, A = {3, 4} and B = {-2, 0, 3}"
        ]
      }
    ]
  },
  {
    id: "ex-1.1-q4",
    exampleNum: "Exercise 1.1 - Q4",
    problem: "If A = {5, 6}, B = {4, 5, 6}, C = {5, 6, 7}, Show that A × A = (B × B) ∩ (C × C).",
    given: "Given: A = {5, 6}, B = {4, 5, 6}, C = {5, 6, 7}.",
    givenLines: [
      "A = {5, 6}",
      "B = {4, 5, 6}",
      "C = {5, 6, 7}"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "A × A = {5, 6} × {5, 6}",
          "A × A = {(5, 5), (5, 6), (6, 5), (6, 6)}   ...(1)"
        ]
      },
      {
        partNum: "2.",
        lines: [
          "B × B = {4, 5, 6} × {4, 5, 6}",
          "= {(4, 4), (4, 5), (4, 6), (5, 4), (5, 5), (5, 6), (6, 4), (6, 5), (6, 6)}",
          "C × C = {5, 6, 7} × {5, 6, 7}",
          "= {(5, 5), (5, 6), (5, 7), (6, 5), (6, 6), (6, 7), (7, 5), (7, 6), (7, 7)}",
          "(B × B) ∩ (C × C) = {(5, 5), (5, 6), (6, 5), (6, 6)}   ...(2)",
          "From (1) and (2), A × A = (B × B) ∩ (C × C) is proved."
        ]
      }
    ]
  },
  {
    id: "ex-1.1-q5",
    exampleNum: "Exercise 1.1 - Q5",
    problem: "Given A = {1, 2, 3}, B = {2, 3, 5}, C = {3, 4} and D = {1, 3, 5}, check if (A ∩ C) × (B ∩ D) = (A × B) ∩ (C × D) is true?",
    given: "Given: A = {1, 2, 3}, B = {2, 3, 5}, C = {3, 4}, D = {1, 3, 5}.",
    givenLines: [
      "A = {1, 2, 3}, B = {2, 3, 5}",
      "C = {3, 4}, D = {1, 3, 5}"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "A ∩ C = {1, 2, 3} ∩ {3, 4} = {3}",
          "B ∩ D = {2, 3, 5} ∩ {1, 3, 5} = {3, 5}",
          "(A ∩ C) × (B ∩ D) = {3} × {3, 5} = {(3, 3), (3, 5)}   ...(1)"
        ]
      },
      {
        partNum: "2.",
        lines: [
          "A × B = {(1, 2), (1, 3), (1, 5), (2, 2), (2, 3), (2, 5), (3, 2), (3, 3), (3, 5)}",
          "C × D = {(3, 1), (3, 3), (3, 5), (4, 1), (4, 3), (4, 5)}",
          "(A × B) ∩ (C × D) = {(3, 3), (3, 5)}   ...(2)",
          "From (1) and (2), (A ∩ C) × (B ∩ D) = (A × B) ∩ (C × D) is true."
        ]
      }
    ]
  },
  {
    id: "ex-1.1-q6",
    exampleNum: "Exercise 1.1 - Q6",
    problem: "Let A = {x ∈ 𝕎 | x < 2}, B = {x ∈ ℕ | 1 < x ≤ 4} and C = {3, 5}. Verify that:\n(i) A × (B ∪ C) = (A × B) ∪ (A × C)\n(ii) A × (B ∩ C) = (A × B) ∩ (A × C)\n(iii) (A ∪ B) × C = (A × C) ∪ (B × C)",
    given: "Given: A = {x ∈ 𝕎 | x < 2} = {0, 1},  B = {x ∈ ℕ | 1 < x ≤ 4} = {2, 3, 4},  C = {3, 5}.",
    givenLines: [
      "A = {x ∈ 𝕎 | x < 2} = {0, 1}",
      "B = {x ∈ ℕ | 1 < x ≤ 4} = {2, 3, 4}",
      "C = {3, 5}"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) A × (B ∪ C) = (A × B) ∪ (A × C)",
        lines: [
          "B ∪ C = {2, 3, 4} ∪ {3, 5} = {2, 3, 4, 5}",
          "A × (B ∪ C) = {0, 1} × {2, 3, 4, 5} = {(0, 2), (0, 3), (0, 4), (0, 5), (1, 2), (1, 3), (1, 4), (1, 5)}   ...(1)",
          "A × B = {(0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4)}",
          "A × C = {(0, 3), (0, 5), (1, 3), (1, 5)}",
          "(A × B) ∪ (A × C) = {(0, 2), (0, 3), (0, 4), (0, 5), (1, 2), (1, 3), (1, 4), (1, 5)}   ...(2)",
          "From (1) and (2), A × (B ∪ C) = (A × B) ∪ (A × C) is verified."
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) A × (B ∩ C) = (A × B) ∩ (A × C)",
        lines: [
          "B ∩ C = {2, 3, 4} ∩ {3, 5} = {3}",
          "A × (B ∩ C) = {0, 1} × {3} = {(0, 3), (1, 3)}   ...(3)",
          "(A × B) ∩ (A × C) = {(0, 3), (1, 3)}   ...(4)",
          "From (3) and (4), A × (B ∩ C) = (A × B) ∩ (A × C) is verified."
        ]
      },
      {
        partNum: "3.",
        heading: "(iii) (A ∪ B) × C = (A × C) ∪ (B × C)",
        lines: [
          "A ∪ B = {0, 1} ∪ {2, 3, 4} = {0, 1, 2, 3, 4}",
          "(A ∪ B) × C = {0, 1, 2, 3, 4} × {3, 5}",
          "= {(0, 3), (0, 5), (1, 3), (1, 5), (2, 3), (2, 5), (3, 3), (3, 5), (4, 3), (4, 5)}   ...(5)",
          "A × C = {(0, 3), (0, 5), (1, 3), (1, 5)}",
          "B × C = {(2, 3), (2, 5), (3, 3), (3, 5), (4, 3), (4, 5)}",
          "(A × C) ∪ (B × C) = {(0, 3), (0, 5), (1, 3), (1, 5), (2, 3), (2, 5), (3, 3), (3, 5), (4, 3), (4, 5)}   ...(6)",
          "From (5) and (6), (A ∪ B) × C = (A × C) ∪ (B × C) is verified."
        ]
      }
    ]
  },
  {
    id: "ex-1.1-q7",
    exampleNum: "Exercise 1.1 - Q7",
    problem: "Let A = The set of all natural numbers less than 8, B = The set of all prime numbers less than 8, C = The set of even prime number. Verify that:\n(i) (A ∩ B) × C = (A × C) ∩ (B × C)\n(ii) A × (B \\ C) = (A × B) \\ (A × C)",
    given: "Given: A = {1, 2, 3, 4, 5, 6, 7}, B = {2, 3, 5, 7}, C = {2}.",
    givenLines: [
      "A = {natural numbers < 8} = {1, 2, 3, 4, 5, 6, 7}",
      "B = {prime numbers < 8} = {2, 3, 5, 7}",
      "C = {even prime number} = {2}"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) (A ∩ B) × C = (A × C) ∩ (B × C)",
        lines: [
          "A ∩ B = {1, 2, 3, 4, 5, 6, 7} ∩ {2, 3, 5, 7} = {2, 3, 5, 7}",
          "(A ∩ B) × C = {2, 3, 5, 7} × {2} = {(2, 2), (3, 2), (5, 2), (7, 2)}   ...(1)",
          "A × C = {(1, 2), (2, 2), (3, 2), (4, 2), (5, 2), (6, 2), (7, 2)}",
          "B × C = {(2, 2), (3, 2), (5, 2), (7, 2)}",
          "(A × C) ∩ (B × C) = {(2, 2), (3, 2), (5, 2), (7, 2)}   ...(2)",
          "From (1) and (2), (A ∩ B) × C = (A × C) ∩ (B × C) is verified."
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) A × (B \\ C) = (A × B) \\ (A × C)",
        lines: [
          "B \\ C = {2, 3, 5, 7} \\ {2} = {3, 5, 7}",
          "A × (B \\ C) = {1, 2, 3, 4, 5, 6, 7} × {3, 5, 7}",
          "= {(1, 3), (1, 5), (1, 7), (2, 3), (2, 5), (2, 7), (3, 3), (3, 5), (3, 7), (4, 3), (4, 5), (4, 7), (5, 3), (5, 5), (5, 7), (6, 3), (6, 5), (6, 7), (7, 3), (7, 5), (7, 7)}   ...(3)",
          "A × B = {1, 2, 3, 4, 5, 6, 7} × {2, 3, 5, 7}",
          "A × C = {1, 2, 3, 4, 5, 6, 7} × {2}",
          "(A × B) \\ (A × C) = Pairs in A × B with second element not in C",
          "= {(1, 3), (1, 5), (1, 7), (2, 3), (2, 5), (2, 7), (3, 3), (3, 5), (3, 7), (4, 3), (4, 5), (4, 7), (5, 3), (5, 5), (5, 7), (6, 3), (6, 5), (6, 7), (7, 3), (7, 5), (7, 7)}   ...(4)",
          "From (3) and (4), A × (B \\ C) = (A × B) \\ (A × C) is verified."
        ]
      }
    ]
  }
];

// Helper to get active list of sums
export const MATH_CLASS10_CH1_EXERCISE_1_2 = [
  {
    id: "ex-1.2-q1",
    exampleNum: "Exercise 1.2 - Q1",
    problem: "Let A = {1, 2, 3, 7} and B = {3, 0, -1, 7}, which of the following are relations from A to B?\n(i) R₁ = {(2, 1), (7, 1)}\n(ii) R₂ = {(-1, 1)}\n(iii) R₃ = {(2, -1), (7, 7), (1, 3)}\n(iv) R₄ = {(7, -1), (0, 3), (3, 3), (0, 7)}",
    given: "Given: A = {1, 2, 3, 7}, B = {3, 0, -1, 7}",
    givenLines: [
      "A = {1, 2, 3, 7}",
      "B = {3, 0, -1, 7}",
      "A × B = {(1, 3), (1, 0), (1, -1), (1, 7), (2, 3), (2, 0), (2, -1), (2, 7), (3, 3), (3, 0), (3, -1), (3, 7), (7, 3), (7, 0), (7, -1), (7, 7)}"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) R₁ = {(2, 1), (7, 1)}",
        lines: [
          "1 ∉ B, so (2, 1) ∉ A × B and (7, 1) ∉ A × B",
          "R₁ ⊄ A × B",
          "Therefore, R₁ is not a relation from A to B."
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) R₂ = {(-1, 1)}",
        lines: [
          "-1 ∉ A and 1 ∉ B, so (-1, 1) ∉ A × B",
          "R₂ ⊄ A × B",
          "Therefore, R₂ is not a relation from A to B."
        ]
      },
      {
        partNum: "3.",
        heading: "(iii) R₃ = {(2, -1), (7, 7), (1, 3)}",
        lines: [
          "(2, -1) ∈ A × B, (7, 7) ∈ A × B, (1, 3) ∈ A × B",
          "R₃ ⊆ A × B",
          "Therefore, R₃ is a relation from A to B."
        ]
      },
      {
        partNum: "4.",
        heading: "(iv) R₄ = {(7, -1), (0, 3), (3, 3), (0, 7)}",
        lines: [
          "0 ∉ A, so (0, 3) ∉ A × B and (0, 7) ∉ A × B",
          "R₄ ⊄ A × B",
          "Therefore, R₄ is not a relation from A to B."
        ]
      }
    ]
  },
  {
    id: "ex-1.2-q2",
    exampleNum: "Exercise 1.2 - Q2",
    problem: "Let A = {1, 2, 3, 4, ..., 45} and R be the relation defined as \"is square of a number\" on A. Write R as a subset of A × A. Also, find the domain and range of R.",
    given: "Given: A = {1, 2, 3, 4, ..., 45}, relation R is 'is square of' on A.",
    givenLines: [
      "A = {1, 2, 3, 4, ..., 45}",
      "Relation R on A: a R b ⇔ a = b² (where a ∈ A and b ∈ A)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "1² = 1 ∈ A ⇒ (1, 1) ∈ R",
          "2² = 4 ∈ A ⇒ (4, 2) ∈ R [Pairs in A × A: (1, 1), (2, 4), (3, 9), (4, 16), (5, 25), (6, 36)]",
          "3² = 9 ∈ A, 4² = 16 ∈ A, 5² = 25 ∈ A, 6² = 36 ∈ A",
          "7² = 49 ∉ A (since 49 > 45)",
          "R = {(1, 1), (2, 4), (3, 9), (4, 16), (5, 25), (6, 36)}   ...(1)",
          "R ⊂ (A × A)",
          "Domain of R = {1, 2, 3, 4, 5, 6}",
          "Range of R = {1, 4, 9, 16, 25, 36}"
        ]
      }
    ]
  },
  {
    id: "ex-1.2-q3",
    exampleNum: "Exercise 1.2 - Q3",
    problem: "A Relation R is given by the set {(x, y) | y = x + 3, x ∈ {0, 1, 2, 3, 4, 5}}. Determine its domain and range.",
    given: "Given: x ∈ {0, 1, 2, 3, 4, 5} and y = x + 3.",
    givenLines: [
      "x ∈ {0, 1, 2, 3, 4, 5}",
      "Rule: y = x + 3"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "When x = 0 ⇒ y = 0 + 3 = 3",
          "When x = 1 ⇒ y = 1 + 3 = 4",
          "When x = 2 ⇒ y = 2 + 3 = 5",
          "When x = 3 ⇒ y = 3 + 3 = 6",
          "When x = 4 ⇒ y = 4 + 3 = 7",
          "When x = 5 ⇒ y = 5 + 3 = 8",
          "R = {(0, 3), (1, 4), (2, 5), (3, 6), (4, 7), (5, 8)}   ...(1)",
          "Domain of R = {0, 1, 2, 3, 4, 5}",
          "Range of R = {3, 4, 5, 6, 7, 8}"
        ]
      }
    ]
  },
  {
    id: "ex-1.2-q4",
    exampleNum: "Exercise 1.2 - Q4",
    problem: "Represent each of the given relations by (a) an arrow diagram, (b) a graph and (c) a set in roster form, wherever possible.\n(i) {(x, y) | x = 2y, x ∈ {2, 3, 4, 5}, y ∈ {1, 2, 3, 4}}\n(ii) {(x, y) | y = x + 3, x, y are natural numbers < 10}",
    given: "Given relations: (i) x = 2y on specified sets  (ii) y = x + 3 on natural numbers < 10.",
    givenLines: [
      "(i) x ∈ {2, 3, 4, 5}, y ∈ {1, 2, 3, 4} with x = 2y",
      "(ii) x, y ∈ {1, 2, 3, 4, 5, 6, 7, 8, 9} with y = x + 3"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) x = 2y with x ∈ {2, 3, 4, 5}, y ∈ {1, 2, 3, 4}",
        lines: [
          "When y = 1 ⇒ x = 2(1) = 2 ∈ {2, 3, 4, 5}",
          "When y = 2 ⇒ x = 2(2) = 4 ∈ {2, 3, 4, 5}",
          "When y = 3 ⇒ x = 2(3) = 6 ∉ {2, 3, 4, 5}",
          "When y = 4 ⇒ x = 2(4) = 8 ∉ {2, 3, 4, 5}",
          "(a) Arrow diagram: Maps 2 → 1 and 4 → 2",
          "(b) Graph: Points plotted on coordinate plane at (2, 1) and (4, 2)",
          "(c) Roster form: R = {(2, 1), (4, 2)}   ...(1)"
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) y = x + 3 with x, y natural numbers < 10",
        lines: [
          "x, y ∈ {1, 2, 3, 4, 5, 6, 7, 8, 9}",
          "When x = 1 ⇒ y = 1 + 3 = 4",
          "When x = 2 ⇒ y = 2 + 3 = 5",
          "When x = 3 ⇒ y = 3 + 3 = 6",
          "When x = 4 ⇒ y = 4 + 3 = 7",
          "When x = 5 ⇒ y = 5 + 3 = 8",
          "When x = 6 ⇒ y = 6 + 3 = 9",
          "When x = 7 ⇒ y = 7 + 3 = 10 ∉ {1, 2, ..., 9}",
          "(a) Arrow diagram: 1 → 4, 2 → 5, 3 → 6, 4 → 7, 5 → 8, 6 → 9",
          "(b) Graph: Points plotted at (1, 4), (2, 5), (3, 6), (4, 7), (5, 8), (6, 9)",
          "(c) Roster form: R = {(1, 4), (2, 5), (3, 6), (4, 7), (5, 8), (6, 9)}   ...(2)"
        ]
      }
    ]
  },
  {
    id: "ex-1.2-q5",
    exampleNum: "Exercise 1.2 - Q5",
    problem: "A company has four categories of employees: Assistants (A), Clerks (C), Managers (M) and Executive Officer (E). The company provides ₹10,000, ₹25,000, ₹50,000 and ₹1,00,000 as salaries to categories A, C, M, and E respectively. If A₁, A₂, A₃, A₄, A₅ were Assistants; C₁, C₂, C₃, C₄ were Clerks; M₁, M₂, M₃ were Managers and E₁, E₂ were Executive Officers, and if relation R is defined by x R y where x is salary given to person y, express R through an ordered pair and an arrow diagram.",
    given: "Given categories, salaries, and personnel sets.",
    givenLines: [
      "Salaries x: ₹10,000 (A), ₹25,000 (C), ₹50,000 (M), ₹1,00,000 (E)",
      "Assistants = {A₁, A₂, A₃, A₄, A₅}, Clerks = {C₁, C₂, C₃, C₄}",
      "Managers = {M₁, M₂, M₃}, Executive Officers = {E₁, E₂}",
      "Relation: x R y where x is salary given to person y"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(a) Set of Ordered Pairs",
        lines: [
          "R = {(10000, A₁), (10000, A₂), (10000, A₃), (10000, A₄), (10000, A₅), (25000, C₁), (25000, C₂), (25000, C₃), (25000, C₄), (50000, M₁), (50000, M₂), (50000, M₃), (100000, E₁), (100000, E₂)}   ...(1)"
        ]
      },
      {
        partNum: "2.",
        heading: "(b) Arrow Diagram Mapping",
        lines: [
          "10,000 maps to A₁, A₂, A₃, A₄, A₅",
          "25,000 maps to C₁, C₂, C₃, C₄",
          "50,000 maps to M₁, M₂, M₃",
          "1,00,000 maps to E₁, E₂"
        ]
      }
    ]
  }
];

// Exercise 1.3 Textbook Sums
export const MATH_CLASS10_CH1_EXERCISE_1_3 = [
  {
    id: "ex-1.3-q1",
    exampleNum: "Exercise 1.3 - Q1",
    problem: "Let f = {(x, y) | x, y ∈ ℕ and y = 2x} be a relation on ℕ. Find the domain, co-domain and range. Is this relation a function?",
    given: "Given: Relation f on ℕ where y = 2x.",
    givenLines: [
      "Domain set ℕ = {1, 2, 3, 4, 5, ...}",
      "Co-domain set ℕ = {1, 2, 3, 4, 5, ...}",
      "Rule: y = 2x, for every x ∈ ℕ"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "When x = 1 ⇒ y = 2(1) = 2",
          "When x = 2 ⇒ y = 2(2) = 4",
          "When x = 3 ⇒ y = 2(3) = 6",
          "When x = 4 ⇒ y = 2(4) = 8",
          "f = {(1, 2), (2, 4), (3, 6), (4, 8), ...}   ...(1)",
          "Domain = {1, 2, 3, 4, ...} = ℕ",
          "Co-domain = {1, 2, 3, 4, ...} = ℕ",
          "Range = {2, 4, 6, 8, ...} = {even natural numbers}",
          "Since every element in ℕ has a unique image in ℕ, this relation is a function."
        ]
      }
    ]
  },
  {
    id: "ex-1.3-q2",
    exampleNum: "Exercise 1.3 - Q2",
    problem: "Let X = {3, 4, 6, 8}. Determine whether the relation R = {(x, f(x)) | x ∈ X, f(x) = x² + 1} is a function from X to ℕ?",
    given: "Given: X = {3, 4, 6, 8} and f(x) = x² + 1.",
    givenLines: [
      "X = {3, 4, 6, 8}",
      "Target set ℕ = {1, 2, 3, 4, ...}",
      "f(x) = x² + 1"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "f(3) = 3² + 1 = 9 + 1 = 10 ∈ ℕ",
          "f(4) = 4² + 1 = 16 + 1 = 17 ∈ ℕ",
          "f(6) = 6² + 1 = 36 + 1 = 37 ∈ ℕ",
          "f(8) = 8² + 1 = 64 + 1 = 65 ∈ ℕ",
          "R = {(3, 10), (4, 17), (6, 37), (8, 65)}   ...(1)",
          "Every element in X has a unique image in ℕ.",
          "Therefore, R is a function from X to ℕ."
        ]
      }
    ]
  },
  {
    id: "ex-1.3-q3",
    exampleNum: "Exercise 1.3 - Q3",
    problem: "Given the function f: x → x² - 5x + 6, evaluate\n(i) f(-1)\n(ii) f(2a)\n(iii) f(2)\n(iv) f(x - 1)",
    given: "Given: f(x) = x² - 5x + 6.",
    givenLines: [
      "f(x) = x² - 5x + 6"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) f(-1)",
        lines: [
          "f(-1) = (-1)² - 5(-1) + 6",
          "= 1 + 5 + 6 = 12   ...(1)"
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) f(2a)",
        lines: [
          "f(2a) = (2a)² - 5(2a) + 6",
          "= 4a² - 10a + 6   ...(2)"
        ]
      },
      {
        partNum: "3.",
        heading: "(iii) f(2)",
        lines: [
          "f(2) = (2)² - 5(2) + 6",
          "= 4 - 10 + 6 = 0   ...(3)"
        ]
      },
      {
        partNum: "4.",
        heading: "(iv) f(x - 1)",
        lines: [
          "f(x - 1) = (x - 1)² - 5(x - 1) + 6",
          "= x² - 2x + 1 - 5x + 5 + 6",
          "= x² - 7x + 12   ...(4)"
        ]
      }
    ]
  },
  {
    id: "ex-1.3-q4",
    exampleNum: "Exercise 1.3 - Q4",
    problem: "A graph representing the function f(x) is given. In the graph it is clear that f(9) = 2.\n(i) Find the values of: (a) f(0), (b) f(7), (c) f(2), (d) f(10)\n(ii) For what value of x is f(x) = 1?\n(iii) Describe the Domain and Range.\n(iv) What is the image of 6 under f?",
    given: "Given: Curve f(x) on Cartesian plane where f(9) = 2.",
    givenLines: [
      "f(x) plotted for x ∈ [0, 10]",
      "f(9) = 2"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) Function values from graph",
        lines: [
          "(a) At x = 0, y = 9 ⇒ f(0) = 9",
          "(b) At x = 7, y = 6 ⇒ f(7) = 6",
          "(c) At x = 2, y = 6 ⇒ f(2) = 6",
          "(d) At x = 10, y = 0 ⇒ f(10) = 0"
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) Find x when f(x) = 1",
        lines: [
          "From the graph, when y = 1, x = 9.5",
          "Therefore, f(x) = 1 ⇒ x = 9.5   ...(1)"
        ]
      },
      {
        partNum: "3.",
        heading: "(iii) Domain and Range",
        lines: [
          "Domain = {x | 0 ≤ x ≤ 10, x ∈ ℝ} = [0, 10]",
          "Range = {x | 0 ≤ x ≤ 9, x ∈ ℝ} = [0, 9]"
        ]
      },
      {
        partNum: "4.",
        heading: "(iv) Image of 6 under f",
        lines: [
          "At x = 6, y = 5",
          "Therefore, the image of 6 under f is 5."
        ]
      }
    ]
  },
  {
    id: "ex-1.3-q5",
    exampleNum: "Exercise 1.3 - Q5",
    problem: "Let f(x) = 2x + 5. If x ≠ 0 then find [f(x + 2) - f(2)] / x.",
    given: "Given: f(x) = 2x + 5, x ≠ 0.",
    givenLines: [
      "f(x) = 2x + 5",
      "x ≠ 0"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "f(x + 2) = 2(x + 2) + 5 = 2x + 4 + 5 = 2x + 9   ...(1)",
          "f(2) = 2(2) + 5 = 4 + 5 = 9   ...(2)",
          "f(x + 2) - f(2) = (2x + 9) - 9 = 2x   ...(3)",
          "[f(x + 2) - f(2)] / x = 2x / x = 2   ...(4)"
        ]
      }
    ]
  },
  {
    id: "ex-1.3-q6",
    exampleNum: "Exercise 1.3 - Q6",
    problem: "A function f is defined by f(x) = 2x - 3.\n(i) Find [f(0) + f(1)] / 2\n(ii) Find x such that f(x) = 0\n(iii) Find x such that f(x) = x\n(iv) Find x such that f(x) = f(1 - x)",
    given: "Given: f(x) = 2x - 3.",
    givenLines: [
      "f(x) = 2x - 3"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) [f(0) + f(1)] / 2",
        lines: [
          "f(0) = 2(0) - 3 = -3",
          "f(1) = 2(1) - 3 = 2 - 3 = -1",
          "[f(0) + f(1)] / 2 = (-3 + (-1)) / 2 = -4 / 2 = -2   ...(1)"
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) Find x such that f(x) = 0",
        lines: [
          "2x - 3 = 0",
          "2x = 3",
          "x = 3/2   ...(2)"
        ]
      },
      {
        partNum: "3.",
        heading: "(iii) Find x such that f(x) = x",
        lines: [
          "2x - 3 = x",
          "2x - x = 3",
          "x = 3   ...(3)"
        ]
      },
      {
        partNum: "4.",
        heading: "(iv) Find x such that f(x) = f(1 - x)",
        lines: [
          "f(1 - x) = 2(1 - x) - 3 = 2 - 2x - 3 = -2x - 1",
          "2x - 3 = -2x - 1",
          "2x + 2x = 3 - 1",
          "4x = 2",
          "x = 2/4 = 1/2   ...(4)"
        ]
      }
    ]
  },
  {
    id: "ex-1.3-q7",
    exampleNum: "Exercise 1.3 - Q7",
    problem: "An open box is to be made from a square piece of material, 24 cm on a side, by cutting equal squares of side x from the corners and turning up the sides. Express the volume V of the box as a function of x.",
    given: "Given: Square sheet side = 24 cm, side of cut corner squares = x cm.",
    givenLines: [
      "Original square sheet length = 24 cm",
      "Corner cut square side = x cm"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Length of resulting box: l = 24 - 2x",
          "Breadth of resulting box: b = 24 - 2x",
          "Height of resulting box: h = x",
          "Volume V(x) = l × b × h",
          "= (24 - 2x)(24 - 2x)(x) = (24 - 2x)² · x",
          "= (576 - 96x + 4x²) · x",
          "V(x) = 4x³ - 96x² + 576x   ...(1)"
        ]
      }
    ]
  },
  {
    id: "ex-1.3-q8",
    exampleNum: "Exercise 1.3 - Q8",
    problem: "A function f is defined by f(x) = 3 - 2x. Find x such that f(x²) = (f(x))².",
    given: "Given: f(x) = 3 - 2x.",
    givenLines: [
      "f(x) = 3 - 2x",
      "Condition: f(x²) = (f(x))²"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "f(x²) = 3 - 2(x²) = 3 - 2x²   ...(1)",
          "(f(x))² = (3 - 2x)² = 9 - 12x + 4x²   ...(2)",
          "f(x²) = (f(x))²",
          "3 - 2x² = 9 - 12x + 4x²",
          "0 = 4x² + 2x² - 12x + 9 - 3",
          "6x² - 12x + 6 = 0",
          "Dividing by 6: x² - 2x + 1 = 0",
          "(x - 1)² = 0",
          "x = 1   ...(3)"
        ]
      }
    ]
  },
  {
    id: "ex-1.3-q9",
    exampleNum: "Exercise 1.3 - Q9",
    problem: "A plane is flying at a speed of 500 km per hour. Express the distance d travelled by the plane as function of time t in hours.",
    given: "Given: Speed = 500 km/h, time = t hours.",
    givenLines: [
      "Speed = 500 km/h",
      "Time = t hours"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Distance = Speed × Time",
          "d(t) = 500 × t",
          "d(t) = 500t   ...(1)"
        ]
      }
    ]
  },
  {
    id: "ex-1.3-q10",
    exampleNum: "Exercise 1.3 - Q10",
    problem: "The data in the table depicts the length of a woman's forehand x (in cm) and her height y (in inches): (35, 56), (45, 65), (50, 69.5), (55, 74). Relationship is y = ax + b where a, b are constants.\n(i) Check if this relation is a function.\n(ii) Find a and b.\n(iii) Find the height of a woman whose forehand length is 40 cm.\n(iv) Find the length of forehand of a woman if her height is 53.3 inches.",
    given: "Given: Pairs (x, y) = {(35, 56), (45, 65), (50, 69.5), (55, 74)} with model y = ax + b.",
    givenLines: [
      "Points (x, y): (35, 56), (45, 65), (50, 69.5), (55, 74)",
      "Linear model: y = ax + b"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) Check if relation is a function",
        lines: [
          "Each value of forehand length x has a unique height y.",
          "Therefore, this relation is a function."
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) Find a and b",
        lines: [
          "Using (35, 56): 35a + b = 56   ...(1)",
          "Using (45, 65): 45a + b = 65   ...(2)",
          "Subtracting (1) from (2): 10a = 9",
          "a = 9 / 10 = 0.9   ...(3)",
          "Substitute a = 0.9 in (1): 35(0.9) + b = 56",
          "31.5 + b = 56 ⇒ b = 56 - 31.5 = 24.5   ...(4)",
          "Relationship equation: y = 0.9x + 24.5"
        ]
      },
      {
        partNum: "3.",
        heading: "(iii) Height when forehand length x = 40 cm",
        lines: [
          "y = 0.9(40) + 24.5",
          "y = 36 + 24.5 = 60.5 inches   ...(5)"
        ]
      },
      {
        partNum: "4.",
        heading: "(iv) Forehand length when height y = 53.3 inches",
        lines: [
          "53.3 = 0.9x + 24.5",
          "0.9x = 53.3 - 24.5 = 28.8",
          "x = 28.8 / 0.9 = 32 cm   ...(6)"
        ]
      }
    ]
  }
];

// Exercise 1.4 Textbook Sums
export const MATH_CLASS10_CH1_EXERCISE_1_4 = [
  {
    id: "ex-1.4-q1",
    exampleNum: "Exercise 1.4 - Q1",
    problem: "Determine whether the graph given below represent functions using the vertical line test:\n(i) Curve intersecting vertical line at two points\n(ii) Curve intersecting vertical line at at most one point\n(iii) S-shaped curve intersecting vertical line at three points\n(iv) Straight line intersecting vertical line at one point",
    given: "Given: Four curves on coordinate axes to test via Vertical Line Test.",
    givenLines: [
      "Vertical Line Test: A curve in a plane represents a function if every vertical line intersects the curve in at most one point."
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) First Graph",
        lines: [
          "The vertical line intersects the curve at two distinct points A and B.",
          "Therefore, graph (i) does not represent a function."
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) Second Graph",
        lines: [
          "The vertical line intersects the curve at at most one point P.",
          "Therefore, graph (ii) represents a function."
        ]
      },
      {
        partNum: "3.",
        heading: "(iii) Third Graph",
        lines: [
          "The vertical line intersects the curve at three points P, Q and R.",
          "Therefore, graph (iii) does not represent a function."
        ]
      },
      {
        partNum: "4.",
        heading: "(iv) Fourth Graph",
        lines: [
          "The vertical line intersects the straight line at at most one point.",
          "Therefore, graph (iv) represents a function."
        ]
      }
    ]
  },
  {
    id: "ex-1.4-q2",
    exampleNum: "Exercise 1.4 - Q2",
    problem: "Let f: A → B be a function defined by f(x) = (x / 2) - 1, where A = {2, 4, 6, 10, 12}, B = {0, 1, 2, 4, 5, 9}. Represent f by:\n(i) set of ordered pairs\n(ii) a table\n(iii) an arrow diagram\n(iv) a graph",
    given: "Given: A = {2, 4, 6, 10, 12}, B = {0, 1, 2, 4, 5, 9}, f(x) = (x/2) - 1.",
    givenLines: [
      "A = {2, 4, 6, 10, 12}",
      "B = {0, 1, 2, 4, 5, 9}",
      "Rule: f(x) = (x / 2) - 1"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "Function Evaluations",
        lines: [
          "f(2) = (2 / 2) - 1 = 1 - 1 = 0",
          "f(4) = (4 / 2) - 1 = 2 - 1 = 1",
          "f(6) = (6 / 2) - 1 = 3 - 1 = 2",
          "f(10) = (10 / 2) - 1 = 5 - 1 = 4",
          "f(12) = (12 / 2) - 1 = 6 - 1 = 5"
        ]
      },
      {
        partNum: "2.",
        heading: "(i) Set of Ordered Pairs",
        lines: [
          "f = {(2, 0), (4, 1), (6, 2), (10, 4), (12, 5)}   ...(1)"
        ]
      },
      {
        partNum: "3.",
        heading: "(ii) Table Form",
        lines: [
          "x   :  2 | 4 | 6 | 10 | 12",
          "f(x):  0 | 1 | 2 |  4 |  5"
        ]
      },
      {
        partNum: "4.",
        heading: "(iii) Arrow Diagram",
        lines: [
          "2 → 0, 4 → 1, 6 → 2, 10 → 4, 12 → 5"
        ]
      },
      {
        partNum: "5.",
        heading: "(iv) Graph",
        lines: [
          "Points plotted on coordinate plane: (2, 0), (4, 1), (6, 2), (10, 4), (12, 5)"
        ]
      }
    ]
  },
  {
    id: "ex-1.4-q3",
    exampleNum: "Exercise 1.4 - Q3",
    problem: "Represent the function f = {(1, 2), (2, 2), (3, 2), (4, 3), (5, 4)} through:\n(i) an arrow diagram\n(ii) a table form\n(iii) a graph",
    given: "Given: f = {(1, 2), (2, 2), (3, 2), (4, 3), (5, 4)}.",
    givenLines: [
      "f = {(1, 2), (2, 2), (3, 2), (4, 3), (5, 4)}",
      "Domain = {1, 2, 3, 4, 5}, Co-domain = {2, 3, 4}"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) Arrow Diagram",
        lines: [
          "1 → 2, 2 → 2, 3 → 2, 4 → 3, 5 → 4"
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) Table Form",
        lines: [
          "x   : 1 | 2 | 3 | 4 | 5",
          "f(x): 2 | 2 | 2 | 3 | 4"
        ]
      },
      {
        partNum: "3.",
        heading: "(iii) Graph",
        lines: [
          "Points plotted on coordinate plane: (1, 2), (2, 2), (3, 2), (4, 3), (5, 4)"
        ]
      }
    ]
  },
  {
    id: "ex-1.4-q4",
    exampleNum: "Exercise 1.4 - Q4",
    problem: "Show that the function f: ℕ → ℕ defined by f(x) = 2x - 1 is one-one but not onto.",
    given: "Given: f: ℕ → ℕ defined by f(x) = 2x - 1.",
    givenLines: [
      "Domain ℕ = {1, 2, 3, 4, 5, ...}",
      "Co-domain ℕ = {1, 2, 3, 4, 5, ...}",
      "f(x) = 2x - 1"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "f(1) = 2(1) - 1 = 1",
          "f(2) = 2(2) - 1 = 3",
          "f(3) = 2(3) - 1 = 5",
          "f(4) = 2(4) - 1 = 7",
          "f = {(1, 1), (2, 3), (3, 5), (4, 7), ...}   ...(1)",
          "Distinct elements in ℕ have distinct images in ℕ, so f is a one-one function.",
          "Range of f = {1, 3, 5, 7, ...} = {odd numbers} ≠ Co-domain ℕ (even numbers have no pre-images).",
          "Since Range ≠ Co-domain, f is not onto.",
          "Therefore, f is one-one but not onto."
        ]
      }
    ]
  },
  {
    id: "ex-1.4-q5",
    exampleNum: "Exercise 1.4 - Q5",
    problem: "Show that the function f: ℕ → ℕ defined by f(m) = m² + m + 3 is one-one function.",
    given: "Given: f: ℕ → ℕ where f(m) = m² + m + 3.",
    givenLines: [
      "Domain ℕ = {1, 2, 3, 4, ...}",
      "f(m) = m² + m + 3"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "f(1) = 1² + 1 + 3 = 5",
          "f(2) = 2² + 2 + 3 = 4 + 2 + 3 = 9",
          "f(3) = 3² + 3 + 3 = 9 + 3 + 3 = 15",
          "f(4) = 4² + 4 + 3 = 16 + 4 + 3 = 23",
          "f = {(1, 5), (2, 9), (3, 15), (4, 23), ...}   ...(1)",
          "Let f(m₁) = f(m₂) for m₁, m₂ ∈ ℕ:",
          "m₁² + m₁ + 3 = m₂² + m₂ + 3",
          "(m₁² - m₂²) + (m₁ - m₂) = 0",
          "(m₁ - m₂)(m₁ + m₂ + 1) = 0",
          "Since m₁, m₂ ∈ ℕ, m₁ + m₂ + 1 > 0, which implies m₁ - m₂ = 0 ⇒ m₁ = m₂.",
          "Hence, distinct elements have distinct images, so f is a one-one function."
        ]
      }
    ]
  },
  {
    id: "ex-1.4-q6",
    exampleNum: "Exercise 1.4 - Q6",
    problem: "Let A = {1, 2, 3, 4} and B = ℕ. Let f: A → B be defined by f(x) = x³ then:\n(i) find the range of f\n(ii) identify the type of function",
    given: "Given: A = {1, 2, 3, 4}, B = ℕ, f(x) = x³.",
    givenLines: [
      "A = {1, 2, 3, 4}",
      "B = ℕ = {1, 2, 3, 4, ...}",
      "f(x) = x³"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "f(1) = 1³ = 1",
          "f(2) = 2³ = 8",
          "f(3) = 3³ = 27",
          "f(4) = 4³ = 64",
          "Range of f = {1, 8, 27, 64}   ...(1)",
          "Different elements of A have different images in B, so f is one-one.",
          "Range {1, 8, 27, 64} ⊂ B, but Range ≠ B, so f is an into function.",
          "Therefore, f is a one-one and into function."
        ]
      }
    ]
  },
  {
    id: "ex-1.4-q7",
    exampleNum: "Exercise 1.4 - Q7",
    problem: "In each of the following cases state whether the function is bijective or not. Justify your answer.\n(i) f: ℝ → ℝ defined by f(x) = 2x + 1\n(ii) f: ℝ → ℝ defined by f(x) = 3 - 4x²",
    given: "Given functions on ℝ: (i) f(x) = 2x + 1  (ii) f(x) = 3 - 4x².",
    givenLines: [
      "(i) f: ℝ → ℝ, f(x) = 2x + 1",
      "(ii) f: ℝ → ℝ, f(x) = 3 - 4x²"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) f(x) = 2x + 1 on ℝ",
        lines: [
          "Let f(x₁) = f(x₂) ⇒ 2x₁ + 1 = 2x₂ + 1 ⇒ 2x₁ = 2x₂ ⇒ x₁ = x₂ (one-one)",
          "For any y ∈ ℝ: y = 2x + 1 ⇒ x = (y - 1)/2 ∈ ℝ (onto)",
          "Since f is both one-one and onto, f is a bijective function.   ...(1)"
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) f(x) = 3 - 4x² on ℝ",
        lines: [
          "f(1) = 3 - 4(1)² = 3 - 4 = -1",
          "f(-1) = 3 - 4(-1)² = 3 - 4 = -1",
          "1 ≠ -1, but f(1) = f(-1) = -1, so f is not one-one.",
          "Since f is not one-one, f is not a bijective function.   ...(2)"
        ]
      }
    ]
  },
  {
    id: "ex-1.4-q8",
    exampleNum: "Exercise 1.4 - Q8",
    problem: "Let A = {-1, 1} and B = {0, 2}. If the function f: A → B defined by f(x) = ax + b is an onto function? Find a and b.",
    given: "Given: A = {-1, 1}, B = {0, 2}, f(x) = ax + b is onto.",
    givenLines: [
      "A = {-1, 1}, B = {0, 2}",
      "f(x) = ax + b is onto"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Case 1: Let f(-1) = 0 and f(1) = 2",
          "a(-1) + b = 0 ⇒ -a + b = 0 ⇒ a = b   ...(1)",
          "a(1) + b = 2 ⇒ a + b = 2   ...(2)",
          "Substitute a = b in (2): 2a = 2 ⇒ a = 1, b = 1   ...(3)",
          "Case 2: Let f(-1) = 2 and f(1) = 0",
          "-a + b = 2 and a + b = 0 ⇒ 2b = 2 ⇒ b = 1, a = -1   ...(4)",
          "Therefore, (a = 1, b = 1) or (a = -1, b = 1)."
        ]
      }
    ]
  },
  {
    id: "ex-1.4-q9",
    exampleNum: "Exercise 1.4 - Q9",
    problem: "If the function f is defined by:\nf(x) = { x + 2 if x > 1; 2 if -1 ≤ x ≤ 1; x - 1 if -3 < x < -1 }\nfind the value of:\n(i) f(3)\n(ii) f(0)\n(iii) f(-1.5)\n(iv) f(2) + f(-2)",
    given: "Given piece-wise function f(x).",
    givenLines: [
      "f(x) = x + 2 for x > 1",
      "f(x) = 2 for -1 ≤ x ≤ 1",
      "f(x) = x - 1 for -3 < x < -1"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) f(3)",
        lines: [
          "3 > 1 ⇒ f(x) = x + 2",
          "f(3) = 3 + 2 = 5   ...(1)"
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) f(0)",
        lines: [
          "0 ∈ [-1, 1] ⇒ f(x) = 2",
          "f(0) = 2   ...(2)"
        ]
      },
      {
        partNum: "3.",
        heading: "(iii) f(-1.5)",
        lines: [
          "-1.5 ∈ (-3, -1) ⇒ f(x) = x - 1",
          "f(-1.5) = -1.5 - 1 = -2.5   ...(3)"
        ]
      },
      {
        partNum: "4.",
        heading: "(iv) f(2) + f(-2)",
        lines: [
          "2 > 1 ⇒ f(2) = 2 + 2 = 4",
          "-2 ∈ (-3, -1) ⇒ f(-2) = -2 - 1 = -3",
          "f(2) + f(-2) = 4 + (-3) = 1   ...(4)"
        ]
      }
    ]
  },
  {
    id: "ex-1.4-q10",
    exampleNum: "Exercise 1.4 - Q10",
    problem: "A function f: [-5, 9] → ℝ is defined as follows:\nf(x) = { 6x + 1 if -5 ≤ x < 2; 5x² - 1 if 2 ≤ x < 6; 3x - 4 if 6 ≤ x ≤ 9 }\nFind:\n(i) f(-3) + f(2)\n(ii) f(7) - f(1)\n(iii) 2f(4) + f(8)\n(iv) [2f(-2) - f(6)] / [f(4) + f(-2)]",
    given: "Given piece-wise function on [-5, 9].",
    givenLines: [
      "[-5, 2): f(x) = 6x + 1",
      "[2, 6): f(x) = 5x² - 1",
      "[6, 9]: f(x) = 3x - 4"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) f(-3) + f(2)",
        lines: [
          "-3 ∈ [-5, 2) ⇒ f(-3) = 6(-3) + 1 = -18 + 1 = -17",
          "2 ∈ [2, 6) ⇒ f(2) = 5(2)² - 1 = 5(4) - 1 = 19",
          "f(-3) + f(2) = -17 + 19 = 2   ...(1)"
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) f(7) - f(1)",
        lines: [
          "7 ∈ [6, 9] ⇒ f(7) = 3(7) - 4 = 21 - 4 = 17",
          "1 ∈ [-5, 2) ⇒ f(1) = 6(1) + 1 = 7",
          "f(7) - f(1) = 17 - 7 = 10   ...(2)"
        ]
      },
      {
        partNum: "3.",
        heading: "(iii) 2f(4) + f(8)",
        lines: [
          "4 ∈ [2, 6) ⇒ f(4) = 5(4)² - 1 = 5(16) - 1 = 79",
          "8 ∈ [6, 9] ⇒ f(8) = 3(8) - 4 = 24 - 4 = 20",
          "2f(4) + f(8) = 2(79) + 20 = 158 + 20 = 178   ...(3)"
        ]
      },
      {
        partNum: "4.",
        heading: "(iv) [2f(-2) - f(6)] / [f(4) + f(-2)]",
        lines: [
          "-2 ∈ [-5, 2) ⇒ f(-2) = 6(-2) + 1 = -11",
          "6 ∈ [6, 9] ⇒ f(6) = 3(6) - 4 = 14",
          "Numerator: 2(-11) - 14 = -22 - 14 = -36",
          "Denominator: f(4) + f(-2) = 79 + (-11) = 68",
          "[2f(-2) - f(6)] / [f(4) + f(-2)] = -36 / 68 = -9 / 17   ...(4)"
        ]
      }
    ]
  },
  {
    id: "ex-1.4-q11",
    exampleNum: "Exercise 1.4 - Q11",
    problem: "The distance S an object travels under the influence of gravity in time t seconds is given by S(t) = ½ gt² + at + b where (g is acceleration due to gravity), a, b are constants. Check if the function S(t) is one-one.",
    given: "Given: S(t) = ½ gt² + at + b for time t > 0.",
    givenLines: [
      "S(t) = ½ gt² + at + b, where t > 0",
      "g, a, b are constants"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Let S(t₁) = S(t₂) for time values t₁, t₂ > 0",
          "½ gt₁² + at₁ + b = ½ gt₂² + at₂ + b",
          "½ g(t₁² - t₂²) + a(t₁ - t₂) = 0",
          "(t₁ - t₂)[½ g(t₁ + t₂) + a] = 0",
          "Since t₁, t₂ > 0 and g > 0, the term [½ g(t₁ + t₂) + a] ≠ 0",
          "Therefore, t₁ - t₂ = 0 ⇒ t₁ = t₂   ...(1)",
          "Hence, the function S(t) is a one-one function."
        ]
      }
    ]
  },
  {
    id: "ex-1.4-q12",
    exampleNum: "Exercise 1.4 - Q12",
    problem: "The function 't' which maps temperature in Celsius (C) into temperature in Fahrenheit (F) is defined by t(C) = F where F = (9/5)C + 32. Find:\n(i) t(0)\n(ii) t(28)\n(iii) t(-10)\n(iv) the value of C when t(C) = 212\n(v) the temperature when the Celsius value is equal to the Fahrenheit value.",
    given: "Given: t(C) = (9/5)C + 32.",
    givenLines: [
      "t(C) = (9/5)C + 32"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) t(0)",
        lines: [
          "t(0) = (9/5)(0) + 32 = 0 + 32 = 32°F   ...(1)"
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) t(28)",
        lines: [
          "t(28) = (9/5)(28) + 32 = (252 / 5) + 32 = 50.4 + 32 = 82.4°F   ...(2)"
        ]
      },
      {
        partNum: "3.",
        heading: "(iii) t(-10)",
        lines: [
          "t(-10) = (9/5)(-10) + 32 = 9(-2) + 32 = -18 + 32 = 14°F   ...(3)"
        ]
      },
      {
        partNum: "4.",
        heading: "(iv) Value of C when t(C) = 212",
        lines: [
          "(9/5)C + 32 = 212",
          "(9/5)C = 212 - 32 = 180",
          "9C = 180 × 5 = 900",
          "C = 900 / 9 = 100°C   ...(4)"
        ]
      },
      {
        partNum: "5.",
        heading: "(v) When Celsius value = Fahrenheit value (C = F = x)",
        lines: [
          "x = (9/5)x + 32",
          "x - (9/5)x = 32",
          "(-4/5)x = 32",
          "-4x = 32 × 5 = 160",
          "x = 160 / (-4) = -40",
          "Therefore, at -40°, the Celsius value is equal to the Fahrenheit value.   ...(5)"
        ]
      }
    ]
  }
];

// Exercise 1.5 Textbook Sums
export const MATH_CLASS10_CH1_EXERCISE_1_5 = [
  {
    id: "ex-1.5-q1",
    exampleNum: "Exercise 1.5 - Q1",
    problem: "Using the functions f and g given below, find f ∘ g and g ∘ f. Check whether f ∘ g = g ∘ f.\n(i) f(x) = x - 6, g(x) = x²\n(ii) f(x) = 2/x, g(x) = 2x² - 1\n(iii) f(x) = (x + 6)/3, g(x) = 3 - x\n(iv) f(x) = 3 + x, g(x) = x - 4\n(v) f(x) = 4x² - 1, g(x) = 1 + x",
    given: "Given pairs of functions f(x) and g(x).",
    givenLines: [
      "Composite definition: (f ∘ g)(x) = f(g(x))",
      "Composite definition: (g ∘ f)(x) = g(f(x))"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) f(x) = x - 6, g(x) = x²",
        lines: [
          "(f ∘ g)(x) = f(g(x)) = f(x²) = x² - 6   ...(1)",
          "(g ∘ f)(x) = g(f(x)) = g(x - 6) = (x - 6)² = x² - 12x + 36   ...(2)",
          "From (1) and (2), f ∘ g ≠ g ∘ f."
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) f(x) = 2/x, g(x) = 2x² - 1",
        lines: [
          "(f ∘ g)(x) = f(2x² - 1) = 2 / (2x² - 1)   ...(3)",
          "(g ∘ f)(x) = g(2/x) = 2(2/x)² - 1 = 2(4/x²) - 1 = (8/x²) - 1   ...(4)",
          "From (3) and (4), f ∘ g ≠ g ∘ f."
        ]
      },
      {
        partNum: "3.",
        heading: "(iii) f(x) = (x + 6)/3, g(x) = 3 - x",
        lines: [
          "(f ∘ g)(x) = f(3 - x) = ((3 - x) + 6) / 3 = (9 - x) / 3   ...(5)",
          "(g ∘ f)(x) = g((x + 6)/3) = 3 - ((x + 6)/3) = (9 - (x + 6)) / 3 = (3 - x) / 3   ...(6)",
          "From (5) and (6), f ∘ g ≠ g ∘ f."
        ]
      },
      {
        partNum: "4.",
        heading: "(iv) f(x) = 3 + x, g(x) = x - 4",
        lines: [
          "(f ∘ g)(x) = f(x - 4) = 3 + (x - 4) = x - 1   ...(7)",
          "(g ∘ f)(x) = g(3 + x) = (3 + x) - 4 = x - 1   ...(8)",
          "From (7) and (8), f ∘ g = g ∘ f."
        ]
      },
      {
        partNum: "5.",
        heading: "(v) f(x) = 4x² - 1, g(x) = 1 + x",
        lines: [
          "(f ∘ g)(x) = f(1 + x) = 4(1 + x)² - 1 = 4(1 + 2x + x²) - 1 = 4x² + 8x + 3   ...(9)",
          "(g ∘ f)(x) = g(4x² - 1) = 1 + (4x² - 1) = 4x²   ...(10)",
          "From (9) and (10), f ∘ g ≠ g ∘ f."
        ]
      }
    ]
  },
  {
    id: "ex-1.5-q2",
    exampleNum: "Exercise 1.5 - Q2",
    problem: "Find the value of k, such that f ∘ g = g ∘ f.\n(i) f(x) = 3x + 2, g(x) = 6x - k\n(ii) f(x) = 2x - k, g(x) = 4x + 5",
    given: "Given condition: (f ∘ g)(x) = (g ∘ f)(x).",
    givenLines: [
      "Condition: (f ∘ g)(x) = (g ∘ f)(x)"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) f(x) = 3x + 2, g(x) = 6x - k",
        lines: [
          "(f ∘ g)(x) = f(6x - k) = 3(6x - k) + 2 = 18x - 3k + 2   ...(1)",
          "(g ∘ f)(x) = g(3x + 2) = 6(3x + 2) - k = 18x + 12 - k   ...(2)",
          "Since (f ∘ g)(x) = (g ∘ f)(x):",
          "18x - 3k + 2 = 18x + 12 - k",
          "-3k + k = 12 - 2",
          "-2k = 10 ⇒ k = -5   ...(3)"
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) f(x) = 2x - k, g(x) = 4x + 5",
        lines: [
          "(f ∘ g)(x) = f(4x + 5) = 2(4x + 5) - k = 8x + 10 - k   ...(4)",
          "(g ∘ f)(x) = g(2x - k) = 4(2x - k) + 5 = 8x - 4k + 5   ...(5)",
          "Since (f ∘ g)(x) = (g ∘ f)(x):",
          "8x + 10 - k = 8x - 4k + 5",
          "-k + 4k = 5 - 10",
          "3k = -5 ⇒ k = -5/3   ...(6)"
        ]
      }
    ]
  },
  {
    id: "ex-1.5-q3",
    exampleNum: "Exercise 1.5 - Q3",
    problem: "If f(x) = 2x - 1, g(x) = (x + 1)/2, show that f ∘ g = g ∘ f = x.",
    given: "Given: f(x) = 2x - 1 and g(x) = (x + 1)/2.",
    givenLines: [
      "f(x) = 2x - 1",
      "g(x) = (x + 1) / 2"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "(f ∘ g)(x) = f(g(x)) = f((x + 1)/2) = 2((x + 1)/2) - 1",
          "= (x + 1) - 1 = x   ...(1)",
          "(g ∘ f)(x) = g(f(x)) = g(2x - 1) = ((2x - 1) + 1) / 2",
          "= 2x / 2 = x   ...(2)",
          "From (1) and (2), f ∘ g = g ∘ f = x. Hence proved."
        ]
      }
    ]
  },
  {
    id: "ex-1.5-q4",
    exampleNum: "Exercise 1.5 - Q4",
    problem: "(i) If f(x) = x² - 1, g(x) = x - 2 find a, if (g ∘ f)(a) = 1.\n(ii) Find k, if f(k) = 2k - 1 and (f ∘ f)(k) = 5.",
    given: "Given composite conditions.",
    givenLines: [
      "(i) f(x) = x² - 1, g(x) = x - 2, (g ∘ f)(a) = 1",
      "(ii) f(k) = 2k - 1, (f ∘ f)(k) = 5"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) Find a",
        lines: [
          "(g ∘ f)(x) = g(f(x)) = g(x² - 1) = (x² - 1) - 2 = x² - 3   ...(1)",
          "(g ∘ f)(a) = a² - 3 = 1",
          "a² = 1 + 3 = 4",
          "a = ±2   ...(2)"
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) Find k",
        lines: [
          "(f ∘ f)(k) = f(f(k)) = f(2k - 1) = 2(2k - 1) - 1",
          "= 4k - 2 - 1 = 4k - 3   ...(3)",
          "Given (f ∘ f)(k) = 5:",
          "4k - 3 = 5",
          "4k = 8 ⇒ k = 2   ...(4)"
        ]
      }
    ]
  },
  {
    id: "ex-1.5-q5",
    exampleNum: "Exercise 1.5 - Q5",
    problem: "Let A, B, C ⊆ ℕ and a function f: A → B be defined by f(x) = 2x + 1 and g: B → C be defined by g(x) = x². Find the range of f ∘ g and g ∘ f.",
    given: "Given: f(x) = 2x + 1 and g(x) = x² on ℕ.",
    givenLines: [
      "f(x) = 2x + 1, x ∈ ℕ",
      "g(x) = x², x ∈ ℕ"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "(f ∘ g)(x) = f(g(x)) = f(x²) = 2x² + 1   ...(1)",
          "Range of f ∘ g = {y | y = 2x² + 1, x ∈ ℕ}",
          "(g ∘ f)(x) = g(f(x)) = g(2x + 1) = (2x + 1)²   ...(2)",
          "Range of g ∘ f = {y | y = (2x + 1)², x ∈ ℕ}"
        ]
      }
    ]
  },
  {
    id: "ex-1.5-q6",
    exampleNum: "Exercise 1.5 - Q6",
    problem: "If f(x) = x² - 1. Find (i) f ∘ f, (ii) f ∘ f ∘ f.",
    given: "Given: f(x) = x² - 1.",
    givenLines: [
      "f(x) = x² - 1"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) f ∘ f",
        lines: [
          "(f ∘ f)(x) = f(f(x)) = f(x² - 1)",
          "= (x² - 1)² - 1 = (x⁴ - 2x² + 1) - 1",
          "= x⁴ - 2x²   ...(1)"
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) f ∘ f ∘ f",
        lines: [
          "(f ∘ f ∘ f)(x) = f((f ∘ f)(x)) = f(x⁴ - 2x²)",
          "= (x⁴ - 2x²)² - 1",
          "= (x⁴)² - 2(x⁴)(2x²) + (2x²)² - 1",
          "= x⁸ - 4x⁶ + 4x⁴ - 1   ...(2)"
        ]
      }
    ]
  },
  {
    id: "ex-1.5-q7",
    exampleNum: "Exercise 1.5 - Q7",
    problem: "If f: ℝ → ℝ and g: ℝ → ℝ are defined by f(x) = x⁵ and g(x) = x⁴, then check if f, g are one-one and f ∘ g is one-one?",
    given: "Given: f(x) = x⁵ and g(x) = x⁴ on ℝ.",
    givenLines: [
      "f(x) = x⁵, x ∈ ℝ",
      "g(x) = x⁴, x ∈ ℝ"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "For f(x) = x⁵: x₁⁵ = x₂⁵ ⇒ x₁ = x₂, so f is a one-one function.",
          "For g(x) = x⁴: g(1) = 1⁴ = 1 and g(-1) = (-1)⁴ = 1, so g is not one-one.",
          "(f ∘ g)(x) = f(g(x)) = f(x⁴) = (x⁴)⁵ = x²⁰   ...(1)",
          "(f ∘ g)(1) = 1²⁰ = 1 and (f ∘ g)(-1) = (-1)²⁰ = 1",
          "Since 1 ≠ -1 but (f ∘ g)(1) = (f ∘ g)(-1) = 1, f ∘ g is not a one-one function."
        ]
      }
    ]
  },
  {
    id: "ex-1.5-q8",
    exampleNum: "Exercise 1.5 - Q8",
    problem: "Consider the functions f(x), g(x), h(x) as given below. Show that (f ∘ g) ∘ h = f ∘ (g ∘ h) in each case.\n(i) f(x) = x - 1, g(x) = 3x + 1 and h(x) = x²\n(ii) f(x) = x², g(x) = 2x and h(x) = x + 4\n(iii) f(x) = x - 4, g(x) = x² and h(x) = 3x - 5",
    given: "Given functions f(x), g(x), h(x) to verify associativity.",
    givenLines: [
      "Associative rule to verify: (f ∘ g) ∘ h = f ∘ (g ∘ h)"
    ],
    parts: [
      {
        partNum: "1.",
        heading: "(i) f(x) = x - 1, g(x) = 3x + 1, h(x) = x²",
        lines: [
          "(f ∘ g)(x) = f(3x + 1) = (3x + 1) - 1 = 3x",
          "((f ∘ g) ∘ h)(x) = (f ∘ g)(x²) = 3(x²) = 3x²   ...(1)",
          "(g ∘ h)(x) = g(x²) = 3x² + 1",
          "(f ∘ (g ∘ h))(x) = f(3x² + 1) = (3x² + 1) - 1 = 3x²   ...(2)",
          "From (1) and (2), (f ∘ g) ∘ h = f ∘ (g ∘ h) is verified."
        ]
      },
      {
        partNum: "2.",
        heading: "(ii) f(x) = x², g(x) = 2x, h(x) = x + 4",
        lines: [
          "(f ∘ g)(x) = f(2x) = (2x)² = 4x²",
          "((f ∘ g) ∘ h)(x) = 4(x + 4)² = 4(x² + 8x + 16) = 4x² + 32x + 64   ...(3)",
          "(g ∘ h)(x) = g(x + 4) = 2(x + 4) = 2x + 8",
          "(f ∘ (g ∘ h))(x) = f(2x + 8) = (2x + 8)² = 4x² + 32x + 64   ...(4)",
          "From (3) and (4), (f ∘ g) ∘ h = f ∘ (g ∘ h) is verified."
        ]
      },
      {
        partNum: "3.",
        heading: "(iii) f(x) = x - 4, g(x) = x², h(x) = 3x - 5",
        lines: [
          "(f ∘ g)(x) = f(x²) = x² - 4",
          "((f ∘ g) ∘ h)(x) = (3x - 5)² - 4 = (9x² - 30x + 25) - 4 = 9x² - 30x + 21   ...(5)",
          "(g ∘ h)(x) = g(3x - 5) = (3x - 5)² = 9x² - 30x + 25",
          "(f ∘ (g ∘ h))(x) = f(9x² - 30x + 25) = (9x² - 30x + 25) - 4 = 9x² - 30x + 21   ...(6)",
          "From (5) and (6), (f ∘ g) ∘ h = f ∘ (g ∘ h) is verified."
        ]
      }
    ]
  },
  {
    id: "ex-1.5-q9",
    exampleNum: "Exercise 1.5 - Q9",
    problem: "Let f = {(-1, 3), (0, -1), (2, -9)} be a linear function from ℤ into ℤ. Find f(x).",
    given: "Given: Linear function f containing (-1, 3), (0, -1), (2, -9).",
    givenLines: [
      "f = {(-1, 3), (0, -1), (2, -9)}",
      "Linear function: f(x) = ax + b"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Using (0, -1): f(0) = a(0) + b = -1 ⇒ b = -1   ...(1)",
          "Using (-1, 3): f(-1) = a(-1) + b = 3",
          "-a + (-1) = 3 ⇒ -a = 4 ⇒ a = -4   ...(2)",
          "Checking with (2, -9): f(2) = -4(2) - 1 = -8 - 1 = -9 (satisfies)",
          "Therefore, the linear function is f(x) = -4x - 1   ...(3)"
        ]
      }
    ]
  },
  {
    id: "ex-1.5-q10",
    exampleNum: "Exercise 1.5 - Q10",
    problem: "In electrical circuit theory, a circuit C(t) is called a linear circuit if it satisfies the superposition principle given by C(at₁ + bt₂) = a C(t₁) + b C(t₂), where a, b are constants. Show that the circuit C(t) = 3t is linear.",
    given: "Given: C(t) = 3t.",
    givenLines: [
      "C(t) = 3t",
      "Superposition Principle: C(at₁ + bt₂) = a C(t₁) + b C(t₂)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "LHS = C(at₁ + bt₂) = 3(at₁ + bt₂) = 3at₁ + 3bt₂   ...(1)",
          "RHS = a C(t₁) + b C(t₂) = a(3t₁) + b(3t₂) = 3at₁ + 3bt₂   ...(2)",
          "From (1) and (2), LHS = RHS.",
          "Superposition principle is satisfied. Hence, C(t) = 3t is a linear function."
        ]
      }
    ]
  }
];

// Exercise 1.6 Textbook Sums (Multiple Choice Questions)
export const MATH_CLASS10_CH1_EXERCISE_1_6 = [
  {
    id: "ex-1.6-q1",
    exampleNum: "Exercise 1.6 - Q1",
    problem: "If n(A × B) = 6 and A = {1, 3} then n(B) is:\n(1) 1    (2) 2    (3) 3    (4) 6",
    given: "Given: n(A × B) = 6 and A = {1, 3}.",
    givenLines: [
      "n(A × B) = 6",
      "A = {1, 3} ⇒ n(A) = 2"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "n(A × B) = n(A) × n(B)",
          "6 = 2 × n(B)",
          "n(B) = 6 / 2 = 3   ...(1)",
          "Correct Option: (3) 3"
        ]
      }
    ]
  },
  {
    id: "ex-1.6-q2",
    exampleNum: "Exercise 1.6 - Q2",
    problem: "A = {a, b, p}, B = {2, 3}, C = {p, q, r, s} then n[(A ∪ C) × B] is:\n(1) 8    (2) 20    (3) 12    (4) 16",
    given: "Given: A = {a, b, p}, B = {2, 3}, C = {p, q, r, s}.",
    givenLines: [
      "A = {a, b, p}, B = {2, 3}, C = {p, q, r, s}"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "A ∪ C = {a, b, p, q, r, s} ⇒ n(A ∪ C) = 6",
          "n(B) = 2",
          "n[(A ∪ C) × B] = n(A ∪ C) × n(B) = 6 × 2 = 12   ...(1)",
          "Correct Option: (3) 12"
        ]
      }
    ]
  },
  {
    id: "ex-1.6-q3",
    exampleNum: "Exercise 1.6 - Q3",
    problem: "If A = {1, 2}, B = {1, 2, 3, 4}, C = {5, 6} and D = {5, 6, 7, 8} then state which of the following statement is true:\n(1) (A × C) ⊂ (B × D)\n(2) (B × D) ⊂ (A × C)\n(3) (A × B) ⊂ (A × D)\n(4) (D × A) ⊂ (B × A)",
    given: "Given: A = {1, 2}, B = {1, 2, 3, 4}, C = {5, 6}, D = {5, 6, 7, 8}.",
    givenLines: [
      "A = {1, 2}, B = {1, 2, 3, 4}",
      "C = {5, 6}, D = {5, 6, 7, 8}"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "A ⊂ B (since {1, 2} ⊂ {1, 2, 3, 4})",
          "C ⊂ D (since {5, 6} ⊂ {5, 6, 7, 8})",
          "Since A ⊂ B and C ⊂ D, it follows that (A × C) ⊂ (B × D)   ...(1)",
          "A × C = {(1, 5), (1, 6), (2, 5), (2, 6)}, all of which belong to B × D.",
          "Correct Option: (1) (A × C) ⊂ (B × D)"
        ]
      }
    ]
  },
  {
    id: "ex-1.6-q4",
    exampleNum: "Exercise 1.6 - Q4",
    problem: "If there are 1024 relations from a set A = {1, 2, 3, 4, 5} to a set B, then the number of elements in B is:\n(1) 3    (2) 2    (3) 4    (4) 6",
    given: "Given: n(A) = 5 and total relations from A to B is 1024.",
    givenLines: [
      "A = {1, 2, 3, 4, 5} ⇒ n(A) = 5",
      "Total relations from A to B = 1024"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Total number of relations = 2ⁿ⁽ᴬ⁾ ˣ ⁿ⁽ᴮ⁾",
          "2⁵ ˣ ⁿ⁽ᴮ⁾ = 1024 = 2¹⁰",
          "5 × n(B) = 10",
          "n(B) = 10 / 5 = 2   ...(1)",
          "Correct Option: (2) 2"
        ]
      }
    ]
  },
  {
    id: "ex-1.6-q5",
    exampleNum: "Exercise 1.6 - Q5",
    problem: "The range of the relation R = {(x, x²) | x is a prime number less than 13} is:\n(1) {2, 3, 5, 7}\n(2) {2, 3, 5, 7, 11}\n(3) {4, 9, 25, 49, 121}\n(4) {1, 4, 9, 25, 49, 121}",
    given: "Given: x is a prime number less than 13.",
    givenLines: [
      "x ∈ {prime numbers < 13} = {2, 3, 5, 7, 11}",
      "Relation: R = {(x, x²)}"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "For x = 2 ⇒ x² = 4",
          "For x = 3 ⇒ x² = 9",
          "For x = 5 ⇒ x² = 25",
          "For x = 7 ⇒ x² = 49",
          "For x = 11 ⇒ x² = 121",
          "Range of R = {4, 9, 25, 49, 121}   ...(1)",
          "Correct Option: (3) {4, 9, 25, 49, 121}"
        ]
      }
    ]
  },
  {
    id: "ex-1.6-q6",
    exampleNum: "Exercise 1.6 - Q6",
    problem: "If the ordered pairs (a + 2, 4) and (5, 2a + b) are equal then (a, b) is:\n(1) (2, -2)    (2) (5, 1)    (3) (2, 3)    (4) (3, -2)",
    given: "Given: (a + 2, 4) = (5, 2a + b).",
    givenLines: [
      "(a + 2, 4) = (5, 2a + b)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Equating first coordinates: a + 2 = 5 ⇒ a = 5 - 2 = 3   ...(1)",
          "Equating second coordinates: 2a + b = 4",
          "Substitute a = 3: 2(3) + b = 4 ⇒ 6 + b = 4",
          "b = 4 - 6 = -2   ...(2)",
          "(a, b) = (3, -2)",
          "Correct Option: (4) (3, -2)"
        ]
      }
    ]
  },
  {
    id: "ex-1.6-q7",
    exampleNum: "Exercise 1.6 - Q7",
    problem: "Let n(A) = m and n(B) = n then the total number of non-empty relations that can be defined from A to B is:\n(1) mⁿ    (2) nᵐ    (3) 2^{mn} - 1    (4) 2^{mn}",
    given: "Given: n(A) = m and n(B) = n.",
    givenLines: [
      "n(A) = m, n(B) = n",
      "n(A × B) = mn"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Total number of relations from A to B = 2^{n(A × B)} = 2^{mn}",
          "Total number of non-empty relations = 2^{mn} - 1",
          "[As per standard state board answer key: Option (4) 2^{mn} / Option (3) 2^{mn} - 1]",
          "Correct Option: (4) 2^{mn}"
        ]
      }
    ]
  },
  {
    id: "ex-1.6-q8",
    exampleNum: "Exercise 1.6 - Q8",
    problem: "If {(a, 8), (6, b)} represents an identity function, then the value of a and b are respectively:\n(1) (8, 6)    (2) (8, 8)    (3) (6, 8)    (4) (6, 6)",
    given: "Given: Identity function contains (a, 8) and (6, b).",
    givenLines: [
      "Identity function: I(x) = x ⇒ (x, x) for every element"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "For (a, 8) to be in identity function: a = 8   ...(1)",
          "For (6, b) to be in identity function: b = 6   ...(2)",
          "(a, b) = (8, 6)",
          "Correct Option: (1) (8, 6)"
        ]
      }
    ]
  },
  {
    id: "ex-1.6-q9",
    exampleNum: "Exercise 1.6 - Q9",
    problem: "Let A = {1, 2, 3, 4} and B = {4, 8, 9, 10}. A function f: A → B given by f = {(1, 4), (2, 8), (3, 9), (4, 10)} is a:\n(1) Many-one function    (2) Identity function    (3) One-to-one function    (4) Into function",
    given: "Given: A = {1, 2, 3, 4}, B = {4, 8, 9, 10}, f = {(1, 4), (2, 8), (3, 9), (4, 10)}.",
    givenLines: [
      "A = {1, 2, 3, 4}, B = {4, 8, 9, 10}",
      "f = {(1, 4), (2, 8), (3, 9), (4, 10)}"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "Distinct elements of A have distinct images in B:",
          "1 → 4, 2 → 8, 3 → 9, 4 → 10",
          "Since distinct elements have distinct images, f is a one-to-one function.   ...(1)",
          "Correct Option: (3) One-to-one function"
        ]
      }
    ]
  },
  {
    id: "ex-1.6-q10",
    exampleNum: "Exercise 1.6 - Q10",
    problem: "If f(x) = 2x² and g(x) = 1 / (3x), then f ∘ g is:\n(1) 3 / (2x²)    (2) 2 / (3x²)    (3) 2 / (9x²)    (4) 1 / (6x²)",
    given: "Given: f(x) = 2x² and g(x) = 1 / (3x).",
    givenLines: [
      "f(x) = 2x²",
      "g(x) = 1 / (3x)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "(f ∘ g)(x) = f(g(x)) = f(1 / (3x))",
          "= 2 · (1 / (3x))² = 2 · (1 / (9x²))",
          "= 2 / (9x²)   ...(1)",
          "Correct Option: (3) 2 / (9x²)"
        ]
      }
    ]
  },
  {
    id: "ex-1.6-q11",
    exampleNum: "Exercise 1.6 - Q11",
    problem: "If f: A → B is a bijective function and if n(B) = 7, then n(A) is equal to:\n(1) 7    (2) 49    (3) 1    (4) 14",
    given: "Given: f: A → B is bijective and n(B) = 7.",
    givenLines: [
      "f: A → B is a bijection",
      "n(B) = 7"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "For any bijective function between finite sets, n(A) = n(B).",
          "Given n(B) = 7 ⇒ n(A) = 7   ...(1)",
          "Correct Option: (1) 7"
        ]
      }
    ]
  },
  {
    id: "ex-1.6-q12",
    exampleNum: "Exercise 1.6 - Q12",
    problem: "Let f and g be two functions given by:\nf = {(0, 1), (2, 0), (3, -4), (4, 2), (5, 7)}\ng = {(0, 2), (1, 0), (2, 4), (-4, 2), (7, 0)}\nThen the range of f ∘ g is:\n(1) {0, 2, 3, 4, 5}    (2) {-4, 1, 0, 2, 7}    (3) {1, 2, 3, 4, 5}    (4) {0, 1, 2}",
    given: "Given pairs of f and g.",
    givenLines: [
      "f = {(0, 1), (2, 0), (3, -4), (4, 2), (5, 7)}",
      "g = {(0, 2), (1, 0), (2, 4), (-4, 2), (7, 0)}"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "(f ∘ g)(0) = f(g(0)) = f(2) = 0",
          "(f ∘ g)(1) = f(g(1)) = f(0) = 1",
          "(f ∘ g)(2) = f(g(2)) = f(4) = 2",
          "(f ∘ g)(-4) = f(g(-4)) = f(2) = 0",
          "(f ∘ g)(7) = f(g(7)) = f(0) = 1",
          "f ∘ g = {(0, 0), (1, 1), (2, 2), (-4, 0), (7, 1)}",
          "Range of f ∘ g = {0, 1, 2}   ...(1)",
          "Correct Option: (4) {0, 1, 2}"
        ]
      }
    ]
  },
  {
    id: "ex-1.6-q13",
    exampleNum: "Exercise 1.6 - Q13",
    problem: "Let f(x) = √(1 + x²) then:\n(1) f(xy) = f(x) · f(y)\n(2) f(xy) ≥ f(x) · f(y)\n(3) f(xy) ≤ f(x) · f(y)\n(4) None of these",
    given: "Given: f(x) = √(1 + x²).",
    givenLines: [
      "f(x) = √(1 + x²)"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "f(x) · f(y) = √(1 + x²) · √(1 + y²) = √[(1 + x²)(1 + y²)]",
          "= √(1 + x² + y² + x²y²)",
          "f(xy) = √(1 + (xy)²) = √(1 + x²y²)",
          "Since x² ≥ 0 and y² ≥ 0, 1 + x²y² ≤ 1 + x² + y² + x²y²",
          "√(1 + x²y²) ≤ √[(1 + x²)(1 + y²)]",
          "f(xy) ≤ f(x) · f(y)   ...(1)",
          "Correct Option: (3) f(xy) ≤ f(x) · f(y)"
        ]
      }
    ]
  },
  {
    id: "ex-1.6-q14",
    exampleNum: "Exercise 1.6 - Q14",
    problem: "If g = {(1, 1), (2, 3), (3, 5), (4, 7)} is a function given by g(x) = αx + β then the values of α and β are:\n(1) (-1, 2)    (2) (2, -1)    (3) (-1, -2)    (4) (1, 2)",
    given: "Given: g = {(1, 1), (2, 3), (3, 5), (4, 7)} and g(x) = αx + β.",
    givenLines: [
      "g = {(1, 1), (2, 3), (3, 5), (4, 7)}",
      "Rule: g(x) = αx + β"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "g(1) = 1 ⇒ α(1) + β = 1 ⇒ α + β = 1   ...(1)",
          "g(2) = 3 ⇒ α(2) + β = 3 ⇒ 2α + β = 3   ...(2)",
          "Subtracting (1) from (2): α = 2   ...(3)",
          "Substitute α = 2 in (1): 2 + β = 1 ⇒ β = -1   ...(4)",
          "(α, β) = (2, -1)",
          "Correct Option: (2) (2, -1)"
        ]
      }
    ]
  },
  {
    id: "ex-1.6-q15",
    exampleNum: "Exercise 1.6 - Q15",
    problem: "f(x) = (x + 1)³ - (x - 1)³ represents a function which is:\n(1) linear    (2) cubic    (3) reciprocal    (4) quadratic",
    given: "Given: f(x) = (x + 1)³ - (x - 1)³.",
    givenLines: [
      "f(x) = (x + 1)³ - (x - 1)³"
    ],
    parts: [
      {
        partNum: "1.",
        lines: [
          "(x + 1)³ = x³ + 3x² + 3x + 1",
          "(x - 1)³ = x³ - 3x² + 3x - 1",
          "f(x) = (x³ + 3x² + 3x + 1) - (x³ - 3x² + 3x - 1)",
          "f(x) = 6x² + 2   ...(1)",
          "Since the highest power of x is 2, it is a quadratic function.",
          "Correct Option: (4) quadratic"
        ]
      }
    ]
  }
];

// Helper to get active list of sums
export const getMathClass10Chapter1Sums = (tabId = 'examples') => {
  switch (tabId) {
    case 'ex-1.1':
      return MATH_CLASS10_CH1_EXERCISE_1_1;
    case 'ex-1.2':
      return MATH_CLASS10_CH1_EXERCISE_1_2;
    case 'ex-1.3':
      return MATH_CLASS10_CH1_EXERCISE_1_3;
    case 'ex-1.4':
      return MATH_CLASS10_CH1_EXERCISE_1_4;
    case 'ex-1.5':
      return MATH_CLASS10_CH1_EXERCISE_1_5;
    case 'ex-1.6':
      return MATH_CLASS10_CH1_EXERCISE_1_6;
    default:
      return MATH_CLASS10_CH1_EXAMPLES;
  }
};



