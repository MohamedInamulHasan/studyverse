// src/data/socialClass10Data.jsx
import React from 'react';

/**
 * Roman Numeral Topics for Class 10 Social Science Unit 1 (Book-back Evaluation Sections)
 * History Unit 1: Outbreak of World War I and Its Aftermath
 */
export const getSocialTopics = (unitNum = 1) => {
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
      id: "choose_statements",
      letter: "III",
      title: "Choose the correct statement",
      type: "quiz"
    },
    {
      id: "match",
      letter: "IV",
      title: "Match the following",
      type: "match"
    },
    {
      id: "answer_briefly",
      letter: "V",
      title: "Answer briefly",
      type: "qa"
    },
    {
      id: "answer_detail",
      letter: "VI",
      title: "Answer the following in detail",
      type: "qa"
    },
    {
      id: "activity",
      letter: "VII",
      title: "Activity",
      type: "qa"
    },
    {
      id: "map_work",
      letter: "VIII",
      title: "Map Work",
      type: "map"
    }
  ];
};

/**
 * Returns authentic textbook evaluation content for each topic in Social Science Unit 1
 */
export const getSocialTopicContent = (unitNum = 1, topicId = "choose_correct") => {
  if (topicId === "choose_correct") {
    return [
      {
        id: "q1",
        num: 1,
        question: "What were the three major empires shattered by the end of First World War?",
        options: [
          "Germany, Austria Hungary, and the Ottomans",
          "Germany, Austria-Hungary, and Russia",
          "Spain, Portugal and Italy",
          "Germany, Austria-Hungary, Italy"
        ],
        answer: 1 // b) Germany, Austria-Hungary, and Russia
      },
      {
        id: "q2",
        num: 2,
        question: "Which country emerged as the strongest in East Asia towards the close of nineteenth century?",
        options: [
          "China",
          "Japan",
          "Korea",
          "Mongolia"
        ],
        answer: 1 // b) Japan
      },
      {
        id: "q3",
        num: 3,
        question: 'Who said "imperialism is the highest stage of capitalism"?',
        options: [
          "Lenin",
          "Marx",
          "Sun Yat-sen",
          "Mao Tsetung"
        ],
        answer: 0 // a) Lenin
      },
      {
        id: "q4",
        num: 4,
        question: "What is the Battle of Marne remembered for?",
        options: [
          "air warfare",
          "trench warfare",
          "submarine warfare",
          "ship warfare"
        ],
        answer: 1 // b) trench warfare
      },
      {
        id: "q5",
        num: 5,
        question: "To which country did the first Secretary General of League of Nations belong?",
        options: [
          "Britain",
          "France",
          "Dutch",
          "USA"
        ],
        answer: 0 // a) Britain
      },
      {
        id: "q6",
        num: 6,
        question: "Which country was expelled from the League of Nations for attacking Finland?",
        options: [
          "Germany",
          "Russia",
          "Italy",
          "France"
        ],
        answer: 1 // b) Russia
      }
    ];
  }

  if (topicId === "fill_blanks") {
    return [
      {
        num: 1,
        sentence: "Japan forced a war on China in the year ______.",
        answer: "1894",
        acceptedAnswers: ["1894"]
      },
      {
        num: 2,
        sentence: "The new state of Albania was created according to the Treaty of ______ signed in May 1913.",
        answer: "London",
        acceptedAnswers: ["London", "Treaty of London"]
      },
      {
        num: 3,
        sentence: "Japan entered into an alliance with England in the year ______.",
        answer: "1902",
        acceptedAnswers: ["1902"]
      },
      {
        num: 4,
        sentence: "In the Balkans ______ had mixed population.",
        answer: "Macedonia",
        acceptedAnswers: ["Macedonia"]
      },
      {
        num: 5,
        sentence: "In the battle of Tannenberg ______ suffered heavy losses.",
        answer: "Russia",
        acceptedAnswers: ["Russia"]
      },
      {
        num: 6,
        sentence: "______ as Prime Minister represented France in Paris Peace Conference.",
        answer: "Clemenceau",
        acceptedAnswers: ["Clemenceau", "Georges Clemenceau"]
      },
      {
        num: 7,
        sentence: "Locarno Treaty was signed in the year ______.",
        answer: "1925",
        acceptedAnswers: ["1925"]
      }
    ];
  }

  if (topicId === "choose_statements") {
    return [
      {
        id: "cs1",
        num: 1,
        question: "i) The Turkish Empire contained many non-Turkish people in the Balkans.\nii) Turkey fought on the side of the central powers\niii) Turkey's attempt to attack Suez Canal but were repulsed.",
        options: [
          "i) and ii) are correct",
          "i) and iii) are correct",
          "ii) and iii) are correct",
          "i), ii) and iii) are correct"
        ],
        answer: 3 // d) i), ii) and iii) are correct
      },
      {
        id: "cs2",
        num: 2,
        assertion: "The first European attempts to carve out colonies in Africa resulted in bloody battles.",
        reason: "There was stiff resistance from the native population.",
        question: "Assertion: The first European attempts to carve out colonies in Africa resulted in bloody battles.\nReason: There was stiff resistance from the native population.",
        options: [
          "Both A and R are correct",
          "A is right but R is not the correct reason",
          "Both A and R are wrong",
          "R is right but A is wrong."
        ],
        answer: 0 // a) Both A and R are correct
      }
    ];
  }

  if (topicId === "match") {
    return [
      {
        num: 1,
        left: "Treaty of Brest- Litovsk",
        right: "Russia with Germany"
      },
      {
        num: 2,
        left: "Jingoism",
        right: "England"
      },
      {
        num: 3,
        left: "Kemal Pasha",
        right: "Turkey"
      },
      {
        num: 4,
        left: "Emden",
        right: "Madras"
      },
      {
        num: 5,
        left: "Hall of Mirrors",
        right: "Versailles"
      }
    ];
  }

  if (topicId === "answer_briefly") {
    return [
      {
        num: 1,
        q: "How do you assess the importance of Sino-Japanese War?",
        a: "• In 1894, Japan forced a war on China. The crushing defeat of China by small Japan in the Sino-Japanese War (1894–95) surprised the entire world.\n• Japan annexed the Liaotung peninsula with Port Arthur.\n• By this decisive victory, Japan proved that it was the strongest power in the East Asian region."
      },
      {
        num: 2,
        q: "Name the countries in the Triple Entente.",
        a: "The three countries in the Triple Entente (formed in 1907) were:\n1. Britain\n2. France\n3. Russia"
      },
      {
        num: 3,
        q: "What were the three militant forms of nationalism in Europe?",
        a: "The three militant and aggressive forms of nationalism in Europe were:\n1. England: Jingoism ('blind patriotism')\n2. France: Chauvinism ('extreme devotion to one's nation')\n3. Germany: Kultur ('belief in German cultural and racial superiority')"
      },
      {
        num: 4,
        q: "What do you know of trench warfare?",
        a: "• Trenches or ditches dug by soldiers protected them safely from hostile artillery and rifle fire.\n• The typical trench network consisted of two to four parallel trench lines linked by communicating trenches.\n• Supplies, ammunition, fresh troops, mail, and battle orders were safely delivered through this underground network."
      },
      {
        num: 5,
        q: "What was the role of Mustafa Kemal Pasha?",
        a: "• Mustafa Kemal Pasha played a remarkable and historic role in Turkey's rebirth as a modern nation.\n• He organized the patriotic forces, resisted European occupation and partition, and defeated the invaders.\n• He abolished the Sultanate and Caliphate, modernized Turkey, and established it as a secular republic."
      },
      {
        num: 6,
        q: "List out any two causes for the failure of the League of Nations.",
        a: "1. The League lacked an independent military force to enforce its decisions against aggressive powers.\n2. The United States of America never joined the League, and major powers like Germany, Italy, and Japan openly violated its principles and resigned."
      }
    ];
  }

  if (topicId === "answer_detail") {
    return [
      {
        num: 1,
        q: "Discuss the main causes of the First World War.",
        a: "1. European Alliances: Europe was divided into two hostile armed camps: the Triple Alliance (Germany, Austria-Hungary, Italy) and the Triple Entente (Britain, France, Russia).\n2. Violent Nationalism: Aggressive forms of nationalism such as Jingoism in Britain, Chauvinism in France, and Kultur in Germany created intense international hostility.\n3. Aggressive Attitude of Kaiser Wilhelm II: The German Emperor proclaimed that Germany was destined for world leadership and built a powerful navy rivaling Britain.\n4. Franco-German Hostility: France harbored deep resentment over the loss of Alsace and Lorraine to Germany in the Franco-Prussian War (1871).\n5. Imperial Rivalry in the Balkans: The collapse of Ottoman power in the Balkans sparked intense rivalry between Austria-Hungary and Russia to control the region.\n6. Immediate Cause: On 28 June 1914, Austrian Archduke Franz Ferdinand was assassinated at Sarajevo by Gavrilo Princip. Austria declared war on Serbia on 28 July 1914, triggering World War I."
      },
      {
        num: 2,
        q: "Highlight the provisions of the Treaty of Versailles relating to Germany.",
        a: "The Treaty of Versailles was signed on 28 June 1919 in the Hall of Mirrors at Versailles:\n1. War Guilt & Reparations: Germany was held solely responsible for the war and forced to pay massive financial reparations.\n2. Territorial Reductions: Alsace and Lorraine were restored to France. The Polish Corridor was created, separating East Prussia from Germany.\n3. Military Disarmament: The German army was strictly limited to 100,000 men. Conscription was banned, and naval submarines and combat aircraft were prohibited.\n4. Demilitarisation of Rhineland: The Rhineland was permanently demilitarised and occupied by Allied forces for 15 years.\n5. Loss of Colonies: All German overseas colonies were confiscated and transferred under the League of Nations Mandate system."
      },
      {
        num: 3,
        q: "Explain the course of the Russian Revolution under the leadership of Lenin.",
        a: "1. Return of Lenin: In April 1917, Vladimir Lenin returned to Russia from exile and proclaimed his famous 'April Theses', demanding 'Peace, Land, Bread' and 'All Power to the Soviets'.\n2. Failure of Provisional Government: The Provisional Government led by Kerensky continued the unpopular war and failed to solve food shortages, causing widespread disillusionment.\n3. Bolshevik Uprising: The Bolsheviks gained widespread support among industrial workers and garrison soldiers. Under Lenin and Trotsky, the Red Guards planned a synchronized takeover.\n4. October Revolution (1917): On 7 November 1917, the Bolsheviks seized strategic government headquarters and the Winter Palace in Petrograd, establishing Soviet power.\n5. Soviet Rule Established: Lenin withdrew Russia from the First World War by signing the Treaty of Brest-Litovsk (1918) and initiated socialist economic reconstruction."
      },
      {
        num: 4,
        q: "Estimate the work done by the League of Nations.",
        a: "1. Peaceful Settlement of Disputes:\n   • Successfully settled the dispute between Sweden and Finland over the Aaland Islands (1920).\n   • Settled the frontier conflict between Albania and Yugoslavia (1921).\n   • Resolved the border clash between Greece and Bulgaria (1925).\n2. Humanitarian Achievements:\n   • Aided hundreds of thousands of war prisoners and refugees through Fridtjof Nansen.\n   • Combated epidemics such as malaria, cholera, and leprosy worldwide.\n   • Suppressed human trafficking and regulated the illicit international trade of dangerous drugs.\n3. International Labour Organisation (ILO):\n   • Established international conventions for maximum working hours, minimum wage standards, and child labor prohibition.\n4. Failures:\n   • Could not stop major acts of aggression, including Japan's invasion of Manchuria (1931), Italy's invasion of Ethiopia (1935), and Hitler's expansionism, leading to World War II."
      }
    ];
  }

  if (topicId === "activity") {
    return [
      {
        num: 1,
        q: "Students can be taught to mark the places of battles and the capital cities of the countries that were engaged in the War.",
        a: "• Major Battle Sites: Marne (France), Tannenberg (East Prussia/Poland), Verdun (France), Somme (France), Gallipoli (Turkey), Jutland (North Sea naval battle).\n• Capital Cities of Belligerent Nations:\n  - Allied Powers: London (Great Britain), Paris (France), Petrograd (Russia), Rome (Italy), Washington D.C. (USA).\n  - Central Powers: Berlin (Germany), Vienna (Austria-Hungary), Constantinople / Istanbul (Ottoman Empire), Sofia (Bulgaria)."
      }
    ];
  }

  if (topicId === "map_work") {
    return [
      {
        num: 1,
        q: "Mark the following countries on the world map:\n1. Great Britain\n2. Germany\n3. France\n4. Italy\n5. Morocco\n6. Turkey\n7. Serbia\n8. Bosnia\n9. Greece\n10. Austria-Hungary\n11. Bulgaria\n12. Rumania",
        a: "Geographical locations to identify on the World / Europe Map:\n1. Great Britain: Island nation in Northwestern Europe, across the English Channel.\n2. Germany: Central Europe, bordered by France, Belgium, Poland, and the North/Baltic Seas.\n3. France: Western Europe, south of the English Channel and north of Spain.\n4. Italy: Boot-shaped peninsula in Southern Europe extending into the Mediterranean Sea.\n5. Morocco: Northwest corner of the African continent, across the Strait of Gibraltar.\n6. Turkey: Transcontinental country connecting Southeast Europe with Western Asia (Anatolia).\n7. Serbia: Balkan Peninsula in Southeast Europe, south of the Danube River.\n8. Bosnia: Balkan Peninsula, west of Serbia and east of the Adriatic coast.\n9. Greece: Southernmost tip of the Balkan Peninsula, surrounded by the Aegean and Ionian Seas.\n10. Austria-Hungary: Large Central European empire encompassing modern Austria, Hungary, Czech Republic, Slovakia, and parts of Poland and the Balkans.\n11. Bulgaria: Southeastern Europe in the Balkans, bordered by Rumania, Serbia, Greece, and Turkey.\n12. Rumania: Southeast Europe, north of the Danube and west of the Black Sea."
      }
    ];
  }

  return [];
};

export default {
  getSocialTopics,
  getSocialTopicContent
};
