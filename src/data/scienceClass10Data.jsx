// src/data/scienceClass10Data.jsx
import React from 'react';

/**
 * Roman Numeral Topics for 10th Science Unit 1 (Book-back Evaluation Sections)
 * Chapter 1: Laws of Motion
 */
export const getScienceTopics = (unitNum = 1) => {
  return [
    {
      id: "choose_correct",
      letter: "I",
      title: "Choose the correct answer",
      type: "quiz"
    },
    {
      id: "fill_blanks",
      letter: "II",
      title: "Fill in the blanks",
      type: "fill_blanks"
    },
    {
      id: "true_false",
      letter: "III",
      title: "State whether the following statements are true or false. Correct the false statement",
      type: "true_false"
    },
    {
      id: "match",
      letter: "IV",
      title: "Match the following",
      type: "match"
    },
    {
      id: "assertion_reason",
      letter: "V",
      title: "Assertion and Reason",
      type: "assertion_reason"
    },
    {
      id: "answer_briefly",
      letter: "VI",
      title: "Answer briefly",
      type: "qa"
    },
    {
      id: "solve_problems",
      letter: "VII",
      title: "Solve the given problems",
      type: "problems"
    },
    {
      id: "answer_detail",
      letter: "VIII",
      title: "Answer in detail",
      type: "qa"
    }
  ];
};

/**
 * Returns question items for 10th Science Unit 1: Laws of Motion
 */
export const getScienceTopicContent = (unitNum = 1, topicId = "choose_correct") => {
  if (topicId === "choose_correct") {
    return [
      {
        id: "q1",
        question: "Inertia of a body depends on",
        options: [
          "weight of the object",
          "acceleration due to gravity of the planet",
          "mass of the object",
          "Both a & b"
        ],
        answer: 2 // c) mass of the object
      },
      {
        id: "q2",
        question: "Impulse is equals to",
        options: [
          "rate of change of momentum",
          "rate of force and time",
          "change of momentum",
          "rate of change of mass"
        ],
        answer: 2 // c) change of momentum
      },
      {
        id: "q3",
        question: "Newton's III law is applicable",
        options: [
          "for a body is at rest",
          "for a body in motion",
          "both a & b",
          "only for bodies with equal masses"
        ],
        answer: 2 // c) both a & b
      },
      {
        id: "q4",
        question: "Plotting a graph for momentum on the Y-axis and time on X-axis. slope of momentum-time graph gives",
        options: [
          "Impulsive force",
          "Acceleration",
          "Force",
          "Rate of force"
        ],
        answer: 2 // c) Force
      },
      {
        id: "q5",
        question: "In which of the following sport the turning of effect of force used",
        options: [
          "swimming",
          "tennis",
          "cycling",
          "hockey"
        ],
        answer: 2 // c) cycling
      },
      {
        id: "q6",
        question: "The unit of 'g' is m s⁻². It can be also expressed as",
        options: [
          "cms⁻¹",
          "Nkg⁻¹",
          "Nm²kg⁻¹",
          "cm²s⁻²"
        ],
        answer: 1 // b) Nkg⁻¹
      },
      {
        id: "q7",
        question: "One kilogram force equals to",
        options: [
          "9.8 dyne",
          "9.8 × 10⁴ N",
          "98 × 10⁴ dyne",
          "980 dyne"
        ],
        answer: 2 // c) 98 × 10⁴ dyne
      },
      {
        id: "q8",
        question: "The mass of a body is measured on planet Earth as M kg. When it is taken to a planet of radius half that of the Earth then its value will be______kg",
        options: [
          "4 M",
          "2M",
          "M/4",
          "M"
        ],
        answer: 3 // d) M
      },
      {
        id: "q9",
        question: "If the Earth shrinks to 50% of its real radius its mass remaining the same, the weight of a body on the Earth will",
        options: [
          "decrease by 50%",
          "increase by 50%",
          "decrease by 25%",
          "increase by 300%"
        ],
        answer: 3 // d) increase by 300%
      },
      {
        id: "q10",
        question: "To project the rockets which of the following principle(s) is /(are) required?",
        options: [
          "Newton's third law of motion",
          "Newton's law of gravitation",
          "law of conservation of linear momentum",
          "both a and c"
        ],
        answer: 3 // d) both a and c
      }
    ];
  }

  if (topicId === "fill_blanks") {
    return [
      {
        num: 1,
        sentence: "To produce a displacement ___________ is required.",
        q: "To produce a displacement ___________ is required.",
        answer: "force",
        acceptedAnswers: ["force", "a force"]
      },
      {
        num: 2,
        sentence: "Passengers lean forward when sudden brake is applied in a moving vehicle. This can be explained by ___________",
        q: "Passengers lean forward when sudden brake is applied in a moving vehicle. This can be explained by ___________",
        answer: "the inertia of motion",
        acceptedAnswers: ["the inertia of motion", "inertia of motion", "inertia"]
      },
      {
        num: 3,
        sentence: "By convention, the clockwise moments are taken as ___________ and the anticlockwise moments are taken as ___________",
        q: "By convention, the clockwise moments are taken as ___________ and the anticlockwise moments are taken as ___________",
        answer: "negative, positive",
        acceptedAnswers: ["negative, positive", "negative and positive", "negative , positive"]
      },
      {
        num: 4,
        sentence: "___________ is used to change the speed of the car.",
        q: "___________ is used to change the speed of the car.",
        answer: "Accelerator",
        acceptedAnswers: ["accelerator", "acceleration", "an accelerator"]
      },
      {
        num: 5,
        sentence: "A man of mass 100 kg has a weight of ___________ at the surface of the Earth.",
        q: "A man of mass 100 kg has a weight of ___________ at the surface of the Earth.",
        answer: "980 N",
        acceptedAnswers: ["980 N", "980N", "980 n", "980 newton", "980 newtons"]
      }
    ];
  }

  if (topicId === "true_false") {
    return [
      {
        num: 1,
        statement: "The linear momentum of a system of particles is always conserved.",
        answer: "False",
        correction: "The linear momentum of a system of particles is always conserved if no external force acts.",
        explanation: "The linear momentum of a system of particles is always conserved only if no external force acts on the system."
      },
      {
        num: 2,
        statement: "The apparent weight of a person is always equal to his actual weight.",
        answer: "False",
        correction: "Apparent weight of a person is not always equal to actual weight.",
        explanation: "Apparent weight is not always equal to actual weight (for instance, when accelerating upward or downward in an elevator, or in free fall)."
      },
      {
        num: 3,
        statement: "Weight of a body is greater at the equator and less at the polar region.",
        answer: "False",
        correction: "Weight of a body is lesser at the equator and greater at the polar region.",
        explanation: "Acceleration due to gravity 'g' is minimum at the equator and maximum at the poles. Therefore, weight is lesser at the equator and greater at the poles."
      },
      {
        num: 4,
        statement: "Turning a nut with a spanner having a short handle is so easy than one with a long handle.",
        answer: "False",
        correction: "Turning a nut with a spanner having a long handle is easier than one with a short handle.",
        explanation: "Torque = Force × distance. A longer handle gives a larger moment arm, requiring much less effort."
      },
      {
        num: 5,
        statement: "There is no gravity in the orbiting space station around the Earth. So the astronauts feel weightlessness.",
        answer: "False",
        correction: "There is gravity in the orbiting space station. Astronauts experience weightlessness because both the station and astronauts are in continuous free fall.",
        explanation: "Gravity is very much present in orbit. Weightlessness is felt because both the space station and astronauts are experiencing identical acceleration in continuous free fall."
      }
    ];
  }

  if (topicId === "match") {
    return [
      {
        num: 1,
        left: "Newton's I law",
        right: "Stable equilibrium of a body"
      },
      {
        num: 2,
        left: "Newton's II law",
        right: "Law of force"
      },
      {
        num: 3,
        left: "Newton's III law",
        right: "Flying nature of a bird"
      },
      {
        num: 4,
        left: "Law of conservation of linear momentum",
        right: "Propulsion of a rocket"
      }
    ];
  }

  if (topicId === "assertion_reason") {
    const standardOptions = [
      "If both the assertion and the reason are true and the reason is the correct explanation of assertion.",
      "If both the assertion and the reason are true, but the reason is not the correct explanation of the assertion.",
      "Assertion is true, but the reason is false.",
      "Assertion is false, but the reason is true."
    ];

    return [
      {
        id: "ar1",
        num: 1,
        assertion: "The sum of the clockwise moments is equal to the sum of the anticlockwise moments.",
        reason: "The principle of conservation of momentum is valid if the external force on the system is zero.",
        question: "Assertion: The sum of the clockwise moments is equal to the sum of the anticlockwise moments.\nReason: The principle of conservation of momentum is valid if the external force on the system is zero.",
        options: standardOptions,
        answer: 1 // (b)
      },
      {
        id: "ar2",
        num: 2,
        assertion: "The value of 'g' decreases as height and depth increases from the surface of the Earth.",
        reason: "'g' depends on the mass of the object and the Earth.",
        question: "Assertion: The value of 'g' decreases as height and depth increases from the surface of the Earth.\nReason: 'g' depends on the mass of the object and the Earth.",
        options: standardOptions,
        answer: 2 // (c)
      }
    ];
  }

  if (topicId === "answer_briefly") {
    return [
      {
        num: 1,
        q: "Define inertia. Give its classification.",
        a: "The inherent property of a body to resist any change in its state of rest or the state of uniform motion, unless it is influenced upon by an external unbalanced force, is known as 'inertia'.\nTypes of inertia:\n1. Inertia of rest\n2. Inertia of motion\n3. Inertia of direction"
      },
      {
        num: 2,
        q: "Classify the types of force based on their application.",
        a: "1. Like parallel forces: Two or more forces of equal or unequal magnitude acting along the same direction, parallel to each other.\n2. Unlike parallel forces: Two or more equal or unequal forces acting along opposite directions, parallel to each other."
      },
      {
        num: 3,
        q: "If a 5 N and a 15 N forces are acting opposite to one another. Find the resultant force and the direction of action of the resultant force.",
        a: "Let P = 5 N and Q = 15 N (acting in opposite direction).\nResultant force R = Q - P = 15 - 5 = 10 N.\nThe resultant force acts along the direction of the 15 N force (Q)."
      },
      {
        num: 4,
        q: "Differentiate mass and weight.",
        a: "• Mass: Fundamental quantity, amount of matter contained in a body, SI unit is kilogram (kg), remains constant everywhere, measured using physical balance.\n• Weight: Derived quantity, gravitational force exerted on a body (W = mg), SI unit is newton (N), varies from place to place, measured using spring balance."
      },
      {
        num: 5,
        q: "Define moment of a couple.",
        a: "The rotating effect of a couple is known as moment of a couple. It is measured by the product of any one of the forces and the perpendicular distance between the line of action of the forces (M = F × s). SI unit is N m."
      },
      {
        num: 6,
        q: "State Newton's second law of motion.",
        a: "The force acting on a body is directly proportional to the rate of change of linear momentum of the body and the change in momentum takes place in the direction of the force (F = m × a)."
      },
      {
        num: 7,
        q: "Why a spanner with a long handle is preferred to tighten screws in heavy vehicles?",
        a: "The turning effect (torque) depends on the perpendicular distance from the axis of rotation to the point of application of force. A longer handle provides a larger moment arm, requiring much less force to produce the required torque."
      },
      {
        num: 8,
        q: "While catching a cricket ball the fielder lowers his hands backwards. Why?",
        a: "By lowering hands backwards, the fielder increases the time of contact (Δt). According to the impulse-momentum equation (F = Δp / Δt), increasing time reduces the impact force on the hands, preventing injury."
      }
    ];
  }

  if (topicId === "solve_problems") {
    return [
      {
        num: 1,
        q: "Two bodies have a mass ratio of 3 : 4. The force applied to the bigger mass produces an acceleration of 12 m s⁻². What could be the acceleration of the other body, if the same force acts on it?",
        a: "Given: m₁ : m₂ = 3 : 4, a₂ = 12 m s⁻²\nSince F₁ = F₂:\nm₁ × a₁ = m₂ × a₂\na₁ = (m₂ / m₁) × a₂\na₁ = (4 / 3) × 12 = 16 m s⁻²"
      },
      {
        num: 2,
        q: "A ball of mass 1 kg moving with a speed of 10 m s⁻¹ rebounds after a perfectly elastic collision with the floor. Calculate the change in linear momentum of the ball.",
        a: "Given: m = 1 kg, initial velocity u = 10 m s⁻¹, final velocity v = -10 m s⁻¹\nChange in momentum Δp = m(v - u)\nΔp = 1 × (-10 - 10) = -20 kg m s⁻¹ (magnitude = 20 kg m s⁻¹)"
      },
      {
        num: 3,
        q: "A mechanic unscrews a nut by applying a force of 140 N with a spanner of length 40 cm. What should be the length of the spanner if a force of 40 N is applied to unscrew the same nut?",
        a: "Given: F₁ = 140 N, d₁ = 40 cm, F₂ = 40 N, d₂ = ?\nTorque required is the same: F₁ × d₁ = F₂ × d₂\n140 × 40 = 40 × d₂\nd₂ = (140 × 40) / 40 = 140 cm (1.4 m)"
      }
    ];
  }

  // Topic: answer_detail
  return [
    {
      num: 1,
      q: "What are the types of inertia? Give an example for each type.",
      a: "1. Inertia of rest: The resistance of a body to change its state of rest. Example: When shaking the branches of a tree vigorously, leaves and fruits detach and fall down.\n2. Inertia of motion: The resistance of a body to change its state of motion. Example: An athlete runs a certain distance before a long jump to gain momentum.\n3. Inertia of direction: The resistance of a body to change its direction of motion. Example: When a car makes a sharp turn, passengers lean sideways."
    },
    {
      num: 2,
      q: "State Newton's laws of motion.",
      a: "1. First Law: Every body continues to be in its state of rest or the state of uniform motion along a straight line unless acted upon by an external unbalanced force.\n2. Second Law: The force acting on a body is directly proportional to the rate of change of linear momentum of the body and takes place in the direction of the force (F = ma).\n3. Third Law: For every action, there is an equal and opposite reaction, and they act on two different bodies."
    },
    {
      num: 3,
      q: "Deduce the equation of a force using Newton's second law of motion.",
      a: "Let a body of mass 'm' move with initial velocity 'u'. An external force 'F' acts for time 't', changing its velocity to 'v'.\nInitial momentum: P_i = m × u\nFinal momentum: P_f = m × v\nChange in momentum: ΔP = P_f - P_i = m(v - u)\nBy Newton's second law: F ∝ ΔP / t\nF ∝ m(v - u) / t\nSince acceleration a = (v - u) / t:\nF ∝ m × a\nF = k × m × a (in SI units, k = 1)\nHence, F = m × a (Force = mass × acceleration)."
    },
    {
      num: 4,
      q: "State and prove the law of conservation of linear momentum.",
      a: "Statement: There is no change in the total linear momentum of an isolated system of bodies as long as no external force acts on them.\n\nProof:\nLet two bodies A and B of masses m₁ and m₂ move in a straight line with initial velocities u₁ and u₂ (u₁ > u₂).\nDuring collision of duration t, body A exerts force F_B on body B and body B exerts force F_A on body A.\nForce on B: F_B = m₂(v₂ - u₂) / t\nForce on A: F_A = m₁(v₁ - u₁) / t\nAccording to Newton's third law: F_B = -F_A\nm₂(v₂ - u₂) / t = -m₁(v₁ - u₁) / t\nm₂v₂ - m₂u₂ = -m₁v₁ + m₁u₁\nm₁v₁ + m₂v₂ = m₁u₁ + m₂u₁\nTotal momentum after collision = Total momentum before collision.\nHence the law of conservation of linear momentum is proved."
    },
    {
      num: 5,
      q: "Describe rocket propulsion.",
      a: "Propulsion of rockets is based on Newton's third law of motion and the law of conservation of linear momentum.\n1. Propellant combustion: Rockets contain fuel and oxidizer in propellant tanks. When fired, the propellant burns and hot gases eject from the nozzle at high speed, creating huge backward momentum.\n2. Forward reaction: To balance this momentum, an equal and opposite reaction force is produced in the combustion chamber, pushing the rocket forward.\n3. Acceleration: As the rocket moves, its fuel burns and its mass decreases continuously. By conservation of linear momentum, as mass decreases, velocity increases until it reaches the necessary escape velocity."
    }
  ];
};

export default {
  getScienceTopics,
  getScienceTopicContent
};

