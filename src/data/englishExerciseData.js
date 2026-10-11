// src/data/englishExerciseData.js
// 10th English Textbook Complete Textual Exercises Dataset (Units 1 - 7)

export const englishExerciseData = {
  1: {
    unit: "Unit 1",
    proseTitle: "His First Flight",
    poemTitle: "Life",
    supplementaryTitle: "The Tempest",
    grammarTitle: "Modals & Passive Voice",
    prose: [
      {
        letter: "A",
        title: "Answer the following questions in a sentence or two",
        questions: [
          {
            q: "How was the young seagull's first attempt to fly?",
            a: "When the young seagull attempted to flap his wings and take a little run forward to the brink of the ledge, he became afraid of the great expanse of the sea stretching beneath and felt certain his wings would never support him, causing him to run back to his hole."
          },
          {
            q: "How did the parents support and encourage the young seagull's brothers and sister?",
            a: "The parents flew about with his brothers and sister, perfecting them in the art of flight, teaching them how to skim the waves and dive for fish."
          },
          {
            q: "Give an instance that shows the pathetic condition of the young bird.",
            a: "Having found nothing else to eat, the young bird searched every inch of his nest and even gnawed at the dried pieces of eggshell, which felt like eating a part of himself."
          },
          {
            q: "How did the bird try to reach its parents without having to fly?",
            a: "He trotted back and forth from one end of the ledge to the other on his long gray legs, trying to find some means of reaching his parents without having to fly."
          },
          {
            q: "Do you think that the young seagull's parents were harsh to him? Why?",
            a: "Yes, they were initially harsh by scolding him, threatening to let him starve on his ledge unless he flew away, and laughing at his cowardice, but it was necessary tough love to push him to overcome his fear."
          },
          {
            q: "What prompted the young seagull to fly finally?",
            a: "He was maddened by hunger and the sight of his mother holding a piece of fish just within reach, which drove him to dive at the food and fall outwards into space."
          },
          {
            q: "What happened to the young seagull when it landed on the green sea?",
            a: "When he dropped his legs to stand on the green sea, his legs sank into it and he screamed with fright, but his belly touched the water and he sank no farther, floating safely while his family praised him."
          }
        ]
      },
      {
        letter: "B",
        title: "Answer each of the following questions in a paragraph of about 100-150 words",
        questions: [
          {
            q: "Describe the struggles underwent by the young seagull to overcome its fear of flying.",
            a: "The young seagull was paralyzed by intense fear and isolation, left entirely alone on his ledge for twenty-four hours while his parents and siblings practiced the art of flight. Every time he ran to the brink and attempted to flap his wings, the vast, terrifying expanse of the sea stretching miles below made him certain his wings would never support him. This psychological dread plunged him into a deeply pathetic physical state; with not a single scrap of food left on the ledge, he was forced to search every inch of his nest, gnawing desperately at dried pieces of eggshell and hunting for the remnants of a mackerel's tail. When his family mocked his cowardice, his hunger was intensified by the sight of his mother tearing at a piece of fish nearby. Driven completely mad by starvation, he finally lunged at the food and plunged outward into space. Though initially seized by a monstrous terror, the rushing wind beneath his wings caught him, transforming his desperate fall into a triumphant and exhilarating first flight."
          },
          {
            q: "Your parents sometimes behave like the young bird's parents. They may seem cruel and unrelenting. Does it mean that they do not care for you? Explain your views about it with reference to the story.",
            a: "Parents who appear strict or unrelenting are rarely acting out of a lack of care; rather, their toughness is often a necessary tool for our growth. In the story, the young seagull's parents appeared remarkably cruel when they scolded him harshly, threatened to let him starve on the bare ledge unless he flew away, and publicly laughed at his cowardice. However, this firm discipline was essential. If they had coddled him out of pity, he would have remained helpless and starved to death on the cliff. By forcing him out of his comfort zone and allowing him to face his fears, they pushed him toward self-reliance. Similarly, in real life, parents push us past our limits, correct us strictly, and refuse to rescue us from every minor hardship not because they are unloving, but because they know that true independence and resilience can only be earned through personal struggle. Their ultimate aim is to give us the strength to fly on our own."
          }
        ]
      },
      {
        letter: "C",
        title: "Change the parts of speech of the given words in the chart",
        isTable: true,
        isGame: true,
        tableHeaders: ["Noun", "Verb", "Adjective", "Adverb"],
        tableRows: [
          {
            noun: "exhaustion",
            verb: "exhaust",
            adjective: "exhausted",
            adverb: "exhaustingly",
            givenColumn: "noun"
          },
          {
            noun: "width",
            verb: "widen",
            adjective: "wide",
            adverb: "widely",
            givenColumn: "verb"
          },
          {
            noun: "madness",
            verb: "madden",
            adjective: "mad",
            adverb: "madly",
            givenColumn: "adjective"
          },
          {
            noun: "perfection",
            verb: "perfect",
            adjective: "perfect",
            adverb: "perfectly",
            givenColumn: "adverb"
          }
        ],
        questions: []
      },
      {
        letter: "D",
        title: "Read the following sentences and change the form of the underlined words as directed",
        isSentenceGame: true,
        questions: [
          {
            num: 1,
            originalSentence: "His family was screaming and offering him food. (to adjective)",
            prompt: "Change 'screaming' to its adjective form and form the complete sentence:",
            targetWords: ["His", "screaming", "family", "was", "offering", "him", "food."],
            scrambledWords: ["offering", "His", "screamed", "family", "food.", "screaming", "was", "him"],
            a: "His screaming family was offering him food."
          },
          {
            num: 2,
            originalSentence: "The young seagull gave out a loud call. (to adverb)",
            prompt: "Change 'loud' to its adverb form and form the complete sentence:",
            targetWords: ["The", "young", "seagull", "called", "out", "loudly."],
            scrambledWords: ["loudly.", "young", "The", "loud", "seagull", "out", "called"],
            a: "The young seagull called out loudly."
          },
          {
            num: 3,
            originalSentence: "The bird cackled amusedly while flying. (to noun)",
            prompt: "Change 'amusedly' to its noun form and form the complete sentence:",
            targetWords: ["The", "bird", "cackled", "with", "amusement", "while", "flying."],
            scrambledWords: ["amusement", "cackled", "The", "flying.", "amused", "bird", "while", "with"],
            a: "The bird cackled with amusement while flying."
          },
          {
            num: 4,
            originalSentence: "The depth of the sea from the ledge scared the seagull. (to adjective)",
            prompt: "Change 'depth' to its adjective form and form the complete sentence:",
            targetWords: ["The", "deep", "sea", "from", "the", "ledge", "scared", "the", "seagull."],
            scrambledWords: ["deep", "The", "ledge", "the", "depth", "scared", "sea", "from", "the", "seagull."],
            a: "The deep sea from the ledge scared the seagull."
          },
          {
            num: 5,
            originalSentence: "The successful flight of the bird was a proud moment for the seagull's family. (to verb)",
            prompt: "Change 'flight' to its verb form and form the complete sentence:",
            targetWords: ["The", "bird", "flew", "successfully,", "which", "was", "a", "proud", "moment", "for", "the", "seagull's", "family."],
            scrambledWords: ["successfully,", "flew", "The", "moment", "bird", "which", "flight", "a", "proud", "for", "was", "the", "family.", "seagull's"],
            a: "The bird flew successfully, which was a proud moment for the seagull's family."
          }
        ]
      },
      {
        letter: "E",
        title: "Use the following words to construct meaningful sentences on your own",
        isTypingExercise: true,
        questions: [
          {
            num: 1,
            word: "coward",
            sampleAnswer: "One should not be a coward in life."
          },
          {
            num: 2,
            word: "gradual",
            sampleAnswer: "There is a gradual increase in the water level."
          },
          {
            num: 3,
            word: "praise",
            sampleAnswer: "Always praise the good deeds of others."
          },
          {
            num: 4,
            word: "courageous",
            sampleAnswer: "The courageous soldier fought bravely for the country."
          },
          {
            num: 5,
            word: "starvation",
            sampleAnswer: "Many animals died of starvation during the drought."
          }
        ]
      },
      {
        letter: "F",
        title: "*Here is a travelogue by the students of Government Girls Higher Secondary School, Pattukkottai after their trip to Darjeeling. Listen to the travelogue and answer the following questions",
        shortTitle: "Travelogue Listening Comprehension (Trip to Darjeeling)",
        passageTitle: "A Trip to Remember Forever",
        passage: "Our trip to this wonderful city, Darjeeling started with a breath-taking view. We parted the curtains of our hotel room and there it was, Kanchenjunga, the third highest mountain in the world! The entire range was in front of us in full view, snow-capped and dazzling in the sun. Our trip started early in the morning the next day. We woke up at 4 a.m. and reached Tiger hill at 5 a.m. to view the sunrise as the place has earned international fame for the best sunrise view. Tiger hill is situated at an altitude of 2590 meters and is 13 kilometers away from the city. Although Kanchenjunga was visible from the window of our hotel room, viewing it from tiger hill was a different experience altogether. It was not a very cloudy day so we were lucky enough to get a glimpse of the Mount Everest. After Tiger hill, we visited Senchal Lake which is another picnic spot nearby. We were told that the lake supplies drinking water to the city.\n\nThe next spot on our list was Batasia Loop, a spiral railway near Ghum. The loop is situated 5 kilometer from the city and is a gigantic railway loop where the toy train runs and takes a 360 degree turn. It is a beautiful place with manicured garden, streams and waterfalls. While travelling on the toy train, one gets a breath-taking view of Darjeeling’s scenic beauty. We would suggest the toy train only for people with lot of patience as the train travels at a speed of 15 kilometers per hour and covers 14 kilometers in three hours which might be an utter disappointment for some. Altogether we had a memorable and enjoyable school trip with our friends and it will linger in our thoughts forever.",
        sections: [
          {
            sectionId: "i",
            title: "i) Fill in the blanks with suitable words.",
            type: "blanks",
            questions: [
              {
                num: 1,
                sentence: "The students visited ___________ city.",
                beforeBlank: "The students visited ",
                afterBlank: " city.",
                answer: "Darjeeling",
                acceptedAnswers: ["Darjeeling", "darjeeling"]
              },
              {
                num: 2,
                sentence: "___________ is the third highest mountain in the world.",
                beforeBlank: "",
                afterBlank: " is the third highest mountain in the world.",
                answer: "Kanchenjunga",
                acceptedAnswers: ["Kanchenjunga", "kanchenjunga", "Mt Kanchenjunga", "Mount Kanchenjunga"]
              },
              {
                num: 3,
                sentence: "___________ hill is 13 km away from Darjeeling.",
                beforeBlank: "",
                afterBlank: " hill is 13 km away from Darjeeling.",
                answer: "Tiger",
                acceptedAnswers: ["Tiger", "tiger"]
              },
              {
                num: 4,
                sentence: "The drinking water is supplied by ___________ lake to the city.",
                beforeBlank: "The drinking water is supplied by ",
                afterBlank: " lake to the city.",
                answer: "Senchal",
                acceptedAnswers: ["Senchal", "senchal"]
              },
              {
                num: 5,
                sentence: "After Senchal lake, they visited ___________.",
                beforeBlank: "After Senchal lake, they visited ",
                afterBlank: ".",
                answer: "Batasia Loop",
                acceptedAnswers: ["Batasia Loop", "batasia loop", "Batasia loop", "Batasia"]
              }
            ]
          },
          {
            sectionId: "ii",
            title: "ii) Do you think they had a memorable and enjoyable school trip?",
            type: "qa",
            questions: [
              {
                num: 1,
                q: "Do you think they had a memorable and enjoyable school trip?",
                a: "Yes, they had a memorable and enjoyable school trip. They had a breath-taking view of Kanchenjunga and Mount Everest, watched the famous sunrise from Tiger Hill, visited Senchal Lake, and enjoyed riding the Darjeeling toy train through Batasia Loop."
              }
            ]
          },
          {
            sectionId: "iii",
            title: "iii) Name a few places that you wish to visit with your classmates an a school trip.",
            type: "qa",
            questions: [
              {
                num: 1,
                q: "Name a few places that you wish to visit with your classmates an a school trip.",
                a: "I would like to visit Ooty, Kodaikanal, Yercaud, Munnar, and Mahabalipuram with my classmates on a school trip."
              }
            ]
          },
          {
            sectionId: "iv",
            title: "iv) State whether the following statements are True or False.",
            type: "true_false",
            questions: [
              {
                num: 1,
                statement: "As the sky was cloudy, they could get the glimpse of the Mount Everest.",
                answer: "False",
                explanation: "It was not a very cloudy day, which is why they were lucky enough to get a glimpse of Mount Everest."
              },
              {
                num: 2,
                statement: "The toy train covers 14 km in three hours.",
                answer: "True",
                explanation: "The toy train covered 14 km in three hours."
              },
              {
                num: 3,
                statement: "Tiger hill has earned international fame for the best sunset view.",
                answer: "False",
                explanation: "Tiger Hill has earned international fame for the best sunrise view, not sunset view."
              }
            ]
          }
        ],
        questions: [
          {
            q: "i) Fill in the blanks with suitable words:",
            points: [
              "1. The students visited Darjeeling city.",
              "2. Kanchenjunga is the third highest mountain in the world.",
              "3. Tiger hill is 13 km away from Darjeeling.",
              "4. The drinking water is supplied by Senchal lake to the city.",
              "5. After Senchal lake, they visited Batasia Loop."
            ]
          },
          {
            q: "ii) Do you think they had a memorable and enjoyable school trip?",
            a: "Yes, they had a memorable and enjoyable school trip. They had a breath-taking view of Kanchenjunga and Mount Everest, watched the sunrise from Tiger Hill, visited Senchal Lake, and enjoyed riding the Darjeeling toy train through Batasia Loop."
          },
          {
            q: "iii) Name a few places that you wish to visit with your classmates an a school trip.",
            a: "I would like to visit Ooty, Kodaikanal, Yercaud, Munnar, and Mahabalipuram with my classmates on a school trip."
          },
          {
            q: "iv) State whether the following statements are True or False:",
            points: [
              "1. As the sky was cloudy, they could get the glimpse of the Mount Everest. — False (It was not a cloudy day).",
              "2. The toy train covers 14 km in three hours. — True",
              "3. Tiger hill has earned international fame for the best sunset view. — False (Famous for sunrise view)."
            ]
          }
        ]
      },
      {
        letter: "G",
        title: "Here is a dialogue between a father and his daughter. Continue the dialogue with at least five utterances and use all the clues given above",
        isDialogue: true,
        dialogue: [
          { speaker: "Father", text: "Hi Mary, it has been a very long time since we went on a trip. Let's plan one." },
          { speaker: "Mary", text: "Yes, dad. I am also longing to go. Why don't we plan one for this weekend?" },
          { speaker: "Father", text: "Sure. Tell me, where shall we go?" },
          { speaker: "Mary", text: "Some place nearby but for at least two days." },
          { speaker: "Father", text: "Hmm... I think we should go to the reserved forest nearby." },
          { speaker: "Mary", text: "Yeah. I've never been to a forest. I have seen it only on the TV and movies. A forest is a good choice!" },
          { speaker: "Father", text: "OK. If we are going to the forest, we must list out what we should carry with us for two days." },
          { 
            speaker: "Mary", 
            prompt: "I think we should carry suitable clothes like ", 
            isBlank: true,
            sampleAnswer: "sweaters, blankets, raincoats, and sturdy trekking shoes."
          },
          { speaker: "Father", text: "What about the food? Do you have any idea, Mary?" },
          { 
            speaker: "Mary", 
            prompt: "Yeah. For food, I suggest ", 
            isBlank: true,
            sampleAnswer: "we can take bread, butter, jam, chappathis, snacks, and some fresh fruits."
          },
          { 
            speaker: "Father", 
            prompt: "", 
            isBlank: true,
            sampleAnswer: "Good idea. What other essential items should we pack for our safety and convenience?"
          },
          { 
            speaker: "Mary", 
            prompt: "", 
            isBlank: true,
            sampleAnswer: "We should carry a first-aid kit with basic medicines, mosquito repellent cream, water bottles, and a powerful torchlight."
          }
        ],
        questions: [
          {
            q: "Here is a dialogue between a father and his daughter. Continue the dialogue with at least five utterances and use all the clues given above:",
            points: [
              "Father: Hi Mary, it has been a very long time since we went on a trip. Let's plan one.",
              "Mary: Yes, dad. I am also longing to go. Why don't we plan one for this weekend?",
              "Father: Sure. Tell me, where shall we go?",
              "Mary: Some place nearby but for at least two days.",
              "Father: Hmm... I think we should go to the reserved forest nearby.",
              "Mary: Yeah. I've never been to a forest. I have seen it only on the TV and movies. A forest is a good choice!",
              "Father: OK. If we are going to the forest, we must list out what we should carry with us for two days.",
              "Mary: I think we should carry suitable clothes like sweaters, blankets, and trekking shoes.",
              "Father: What about the food? Do you have any idea, Mary?",
              "Mary: Yeah. For food, I suggest we can take bread, butter, jam, rotis, and fresh fruits.",
              "Father: Good idea. What other essential items should we pack for our safety and convenience?",
              "Mary: We should carry a first-aid kit, torchlight, mosquito repellent, and water bottles."
            ]
          }
        ]
      },
      {
        letter: "H",
        title: "Read the following passage and answer the questions that follow",
        passageTitle: "BUNGEE-JUMPING",
        passage: "Bungee jumping is an activity that involves jumping from a tall structure while connected to a long elastic cord. The tall structure is usually a fixed object, such as a building, bridge or crane; but it is also possible to jump from a movable object, such as a hot-air-balloon or helicopter, that has the ability to hover above the ground. The thrill comes from the free-falling and the rebound. When the person jumps, the cord stretches and the jumper flies upwards again as the cord recoils, and continues to oscillate up and down until all the kinetic energy is dissipated.\n\nJumping Heights, located in Mohan Chatti village, in Rishikesh has been rated as one of the most preferred bungee jumping destinations in India at a height of 83 meters. It is the only place in India where bungee jumping can be done from a fixed platform. This is also India's only fixed platform Bungee- performed from a professional cantilever, to separate it from entertainment parks, and create instead, an extreme adventure zone. The Bungee has been designed by David Allardice of New Zealand.\n\nThe Cantilever platform is built over a rocky cliff over-looking the river Hall, a tributary of River Ganges. Bungee-ing amidst the vastness of nature lends an absolutely breath taking experience.\n\nJumping Heights is well known for its safety measures and experienced staff. It costs around Rs 2500 per jump, a bit expensive, but totally worth the experience. The Bungee jumping experience has been set amidst the astoundingly stunning landscape of Rishikesh. To Bungee jump, one must be at least 12 years and should weigh between 40-110 kg.",
        questions: [
          {
            q: "What is Bungee Jumping?",
            a: "Bungee jumping is an activity that involves jumping from a tall structure while connected to a long elastic cord."
          },
          {
            q: "Can Bungee be performed from a movable object? How?",
            a: "Yes, Bungee can be performed from a movable object, such as a hot-air balloon or helicopter that has the ability to hover above the ground."
          },
          {
            q: "When do you think Bungee becomes thrilling?",
            a: "The thrill comes from the free-falling and the rebound, as the jumper flies upwards again when the elastic cord recoils and continues to oscillate up and down until all the kinetic energy is dissipated."
          },
          {
            q: "What is the experience when one falls off the platform?",
            a: "When one falls off the platform, the elastic cord stretches and the jumper flies upwards again as the cord recoils, oscillating up and down amidst the vastness of nature, which lends an absolutely breathtaking experience."
          },
          {
            q: "Where is the Bungee jumping point located in India?",
            a: "The Bungee jumping point is located at Jumping Heights in Mohan Chatti village, in Rishikesh, at a height of 83 meters."
          },
          {
            q: "What is the minimum age to Bungee jump?",
            a: "To Bungee jump, one must be at least 12 years of age and should weigh between 40 to 110 kg."
          }
        ]
      },
      {
        letter: "I",
        title: "Prepare attractive advertisements using the hints given below",
        isAdvertisement: true,
        guidelinesTitle: "An advertisement should include the following to make it attractive:",
        guidelines: [
          "1. Name of the product / brand / outlet.",
          "2. Address with contact information and websites.",
          "3. Appealing Images (visuals) of the Product / Service / Idea to be advertised.",
          "4. Target demographics / audience / customers.",
          "5. Feel-good discounts and offers.",
          "6. Colourful Background.",
          "7. Colourful and readable text.",
          "8. Brief and catchy descriptions and benefits about the product.",
          "9. Borders and lines to organize."
        ],
        advertisements: [
          {
            id: 1,
            hint: "1. Home appliances – Aadi Sale – 20-50% - Special Combo Offers – Muthusamy & Co., Raja Street, Gingee.",
            image: "/images/posters/muthusamy_ad_poster.jpg",
            title: "Muthusamy & Co. - Grand Aadi Sale Poster",
            poster: {
              brand: "MUTHUSAMY & CO.",
              tagline: "Your Trusted Home Appliances Destination Since 1995",
              headline: "💥 GRAND AADI SALE DHAMAKA! 💥",
              discountBadge: "FLAT 20% - 50% OFF",
              themeGradient: "from-amber-500 via-rose-500 to-red-600",
              accentColor: "#b91c1c",
              visuals: [
                { emoji: "📺", label: "Smart 4K LED TVs" },
                { emoji: "🧊", label: "Double Door Fridges" },
                { emoji: "🧺", label: "Front Load Washers" },
                { emoji: "🍲", label: "Mixer & Grinders" },
                { emoji: "♨️", label: "Micro Ovens & Stoves" }
              ],
              specialCombo: {
                title: "🎁 SPECIAL MEGA COMBO OFFER",
                desc: "Buy Smart TV + Refrigerator and get Preethi 3-Jar Mixer Grinder ABSOLUTELY FREE!"
              },
              benefits: [
                "✨ 0% Interest Easy EMI Options Available",
                "✨ Free Delivery & Express Installation within 24 Hours",
                "✨ 5-Year Comprehensive Extended Warranty"
              ],
              targetAudience: "Family & Homemakers' Mega Savings Carnival",
              address: "No. 45, Raja Street, Gingee - 604 202",
              contact: "📞 98421-23456 | 04145-223344",
              website: "🌐 www.muthusamyappliances.com"
            }
          },
          {
            id: 2,
            hint: "2. Mobile Galaxy – Smart phones – accessories – SIM cards – Recharge – Free Power banks on Mobile purchase – No.1, Toll Gate, Trichy.",
            image: "/images/posters/mobile_galaxy_poster.jpg",
            title: "Mobile Galaxy - Smartphone Carnival Poster",
            poster: {
              brand: "MOBILE GALAXY",
              tagline: "Connecting You to the Future of 5G Technology",
              headline: "🚀 STEP INTO THE GALAXY OF SMARTPHONES! 🚀",
              discountBadge: "FREE 10,000mAh POWER BANK",
              themeGradient: "from-blue-600 via-indigo-600 to-purple-700",
              accentColor: "#1d4ed8",
              visuals: [
                { emoji: "📱", label: "5G Flagship Phones" },
                { emoji: "🎧", label: "ANC Wireless Earbuds" },
                { emoji: "⌚", label: "Smartwatches" },
                { emoji: "🔋", label: "Fast Chargers & Banks" },
                { emoji: "📶", label: "5G SIM Activation" }
              ],
              specialCombo: {
                title: "⚡ MEGA LAUNCH OFFER",
                desc: "Free 10,000 mAh High-Speed Fast-Charging Power Bank on every new Smartphone purchase!"
              },
              benefits: [
                "✨ Instant All-Network SIM Activation & Recharges",
                "✨ Up to ₹10,000 Instant Old Phone Exchange Bonus",
                "✨ 100% Genuine Branded Accessories & Tempered Glass"
              ],
              targetAudience: "Students, Youth & Tech Enthusiasts Exclusive Hub",
              address: "No. 1, Near Toll Gate, Trichy - 620 005",
              contact: "📞 97890-56789 | 0431-246810",
              website: "🌐 www.mobilegalaxytrichy.in"
            }
          }
        ],
        questions: [
          {
            q: "1. Home appliances – Aadi Sale – 20-50% - Special Combo Offers – Muthusamy & Co., Raja Street, Gingee.",
            points: [
              "🏷️ CATCHY HEADLINE: MEGA AADI SALE – UP TO 50% OFF!",
              "🏢 SHOP NAME: MUTHUSAMY & CO.",
              "📍 ADDRESS: Raja Street, Gingee.",
              "✨ SPECIAL OFFERS: 20% to 50% Flat Discounts on all Top-Brand Home Appliances!",
              "🎁 COMBO OFFERS: Buy Refrigerator + Smart TV & Get Mixer Grinder absolutely FREE!",
              "⚡ RANGE: Washing Machines | Refrigerators | Microwave Ovens | Induction Stoves | Water Purifiers.",
              "📞 CONTACT: Muthusamy & Co., Raja Street, Gingee. Ph: 98421-XXXXX | Easy EMI Available!"
            ]
          },
          {
            q: "2. Mobile Galaxy – Smart phones – accessories – SIM cards – Recharge – Free Power banks on Mobile purchase – No.1, Toll Gate, Trichy.",
            points: [
              "🏷️ CATCHY HEADLINE: STEP INTO THE GALAXY OF SMART PHONES!",
              "📱 SHOP NAME: MOBILE GALAXY",
              "📍 ADDRESS: No.1, Toll Gate, Trichy.",
              "✨ SPECIAL OFFER: FREE 10,000mAh Power Bank on every Smartphone purchase!",
              "🛍️ PRODUCTS: Latest 5G Smartphones | Smartwatches | Earbuds | Tempered Glass & Covers.",
              "📶 SERVICES: All SIM Cards Activated | Instant Mobile Recharges | Exchange Offers.",
              "📞 CONTACT: Mobile Galaxy, No.1, Toll Gate, Trichy. Call: 97890-XXXXX."
            ]
          }
        ]
      },
      {
        letter: "J",
        title: "Write a report of the following events in about 100-120 words",
        isReportWriting: true,
        conceptTitle: "Report Writing",
        conceptDescription: "A report is designed to lead people through the information in a structured way, and also to enable them to find the information that they want quickly and easily. It is a short, sharp, concise document which is written for a particular purpose and audience.",
        formatTitle: "Format of a report.",
        formatItems: [
          { label: "Title of the report", desc: "Catchy and relevant heading" },
          { label: "Report Writer's name", desc: "Written as 'By [Name], Class X'" },
          { label: "What...?", desc: "(name of the event)" },
          { label: "When...?", desc: "(day and time of the event)" },
          { label: "Where...?", desc: "(venue of the event)" },
          { label: "Why...?", desc: "(the purpose of the event)" },
          { label: "Who...?", desc: "(Chief guest, dignitaries, participants)" },
          { label: "How...?", desc: "(the details of the event and its impact etc.)" }
        ],
        tips: [
          "Use simple sentences in the Past Tense.",
          "Be brief.",
          "Do not exaggerate the event."
        ],
        questions: [
          {
            q: "1. 'Educational Development Day' was organized in your school on 15th July. Write a report of the event in about 100-120 words.",
            reportTitle: "EDUCATIONAL DEVELOPMENT DAY CELEBRATION",
            byLine: "By K. Sneha, Class X - A",
            content: "Government Higher Secondary School celebrated 'Educational Development Day' on 15th July in the school auditorium to commemorate the birth anniversary of former Chief Minister of Tamil Nadu, Thiru K. Kamaraj. The event aimed to promote the value of education and honor his revolutionary educational reforms.\n\nThe programme commenced at 9:30 a.m. with a prayer song by the school choir. Our Headmaster welcomed the gathering, after which the Chief Guest, the District Educational Officer, inaugurated the celebration by garlanding the portrait of Karma Veerar Kamarajar. In his inspiring keynote address, the Chief Guest highlighted the historic introduction of the Mid-day Meal Scheme and free schooling that empowered millions of rural children.\n\nVarious competitions including oratorical, drawing, and essay-writing were conducted, and the winners were felicitated with books and certificates. The event concluded with a vote of thanks proposed by the School Pupil Leader, followed by the National Anthem.",
            points: [
              "📌 Title: EDUCATIONAL DEVELOPMENT DAY CELEBRATION",
              "👤 By-line: By K. Sneha, Class X - A",
              "📅 When & Where: 15th July, 9:30 a.m. at School Auditorium",
              "🎯 Why: To commemorate the birth anniversary of Thiru K. Kamaraj and highlight education for all",
              "🌟 Chief Guest: District Educational Officer (DEO)",
              "📝 Events & Details: Prayer song, garland ceremony, oratorical & essay contests, prize distribution, vote of thanks, and National Anthem."
            ]
          },
          {
            q: "2. Your school celebrated the 'Annual Sports Day' recently. Write a report of the event in about 100-120 words.",
            reportTitle: "ANNUAL SPORTS MEET HELD WITH ENTHUSIASM",
            byLine: "By R. Praveen, Sports Secretary, Class X",
            content: "Government Higher Secondary School celebrated its 28th Annual Sports Day on 24th August on the sprawling school playground with boundless energy and sportsman spirit. The grand meet aimed to promote physical fitness and teamwork among the students.\n\nThe gala event commenced at 8:30 a.m. with the unfurling of the Olympic flag and a majestic march-past led by the school band and house captains. The Chief Guest, Deputy Superintendent of Police (DSP), lit the sports torch and declared the meet open. Over 800 students took part in thrilling track and field events including 100m sprint, relay, long jump, and shot put amidst rousing cheers from the audience.\n\nThe overall championship trophy was bagged by the Yellow Tigers House. The Chief Guest distributed medals and certificates to the victorious athletes, applauding their discipline and perseverance. The gala meet concluded successfully with a vote of thanks and the National Anthem.",
            points: [
              "📌 Title: ANNUAL SPORTS MEET HELD WITH ENTHUSIASM",
              "👤 By-line: By R. Praveen, Sports Secretary, Class X",
              "📅 When & Where: 24th August, 8:30 a.m. on School Playground",
              "🎯 Why: To foster sportsmanship, athletic spirit, and fitness among youth",
              "🌟 Chief Guest: Deputy Superintendent of Police (DSP)",
              "🏃 Events & Details: Torch lighting, march past, track & field heats (100m, relay, long jump), medals distribution, and National Anthem."
            ]
          }
        ]
      }
    ],
    grammar: [
      {
        letter: "A",
        title: "Complete these sentences using appropriate modals",
        questions: [
          {
            q: "You _______ follow traffic regulations strictly. (must / should)",
            options: ["must", "might", "can", "could"],
            answer: 0,
            explanation: "'Must' denotes strong obligation or compulsory rule."
          },
          {
            q: "_______ I borrow your pen for a minute? (May / Might)",
            options: ["May", "Must", "Will", "Shall"],
            answer: 0,
            explanation: "'May' is used for polite formal permission."
          }
        ]
      },
      {
        letter: "B",
        title: "Rewrite the following sentences by rectifying the errors in the use of modals",
        questions: [
          {
            q: "Correct: 'He can to speak four languages fluently.'",
            points: ["Correction: He can speak four languages fluently. (Modals are followed by bare infinitive without 'to')."]
          },
          {
            q: "Correct: 'We must to submit the assignment tomorrow.'",
            points: ["Correction: We must submit the assignment tomorrow."]
          }
        ]
      },
      {
        letter: "C",
        title: "Read the dialogue and fill in the blanks with suitable modals",
        questions: [
          {
            q: "Fill in: Doctor: You (should / can) take these medicines after food. Patient: (May / Will) I drink milk?",
            points: [
              "1. Doctor: You 'should' take these medicines after food.",
              "2. Patient: 'May' I drink cold milk?"
            ]
          }
        ]
      },
      {
        letter: "D",
        title: "Read the following dialogues and supply appropriate modals",
        questions: [
          {
            q: "Supply modals: Teacher: Who _______ answer this riddle? Student: Sir, I _______ try.",
            points: [
              "Teacher: Who 'can' answer this riddle?",
              "Student: Sir, I 'will' try."
            ]
          }
        ]
      },
      {
        letter: "E",
        title: "Make more sentences on your own using modals and given clues",
        questions: [
          {
            q: "Form sentences using: ought to (duty), might (remote possibility), could (past ability).",
            points: [
              "1. Ought to: We ought to respect our national heritage.",
              "2. Might: It might rain this evening as clouds are gathering.",
              "3. Could: In his youth, my grandfather could swim across the river."
            ]
          }
        ]
      },
      {
        letter: "F",
        title: "Change the following sentences to the other voice",
        questions: [
          {
            q: "Change Voice: 'The seagull caught a small herring.'",
            points: ["Passive: A small herring was caught by the seagull."]
          },
          {
            q: "Change Voice: 'The mother tore a piece of fish.'",
            points: ["Passive: A piece of fish was torn by the mother."]
          }
        ]
      },
      {
        letter: "G",
        title: "Change the following into passive voice",
        questions: [
          {
            q: "Change into Passive: 'They are building a new library in our school.'",
            points: ["Passive: A new library is being built in our school by them."]
          },
          {
            q: "Change into Passive: 'The chef has prepared a delicious dinner.'",
            points: ["Passive: A delicious dinner has been prepared by the chef."]
          }
        ]
      },
      {
        letter: "H",
        title: "Change each of the following sentences into two passives using direct and indirect objects",
        questions: [
          {
            q: "Sentence: 'The teacher gave Ravi a prize.' Form two passive sentences.",
            points: [
              "Passive 1 (Indirect object as subject): Ravi was given a prize by the teacher.",
              "Passive 2 (Direct object as subject): A prize was given to Ravi by the teacher."
            ]
          }
        ]
      },
      {
        letter: "I",
        title: "Rewrite the following passage in passive voice",
        questions: [
          {
            q: "Passage: 'Workers clean the laboratory daily. Technicians calibrate the instruments. The director inspects the records.'",
            points: [
              "Passive version: The laboratory is cleaned daily by workers. The instruments are calibrated by technicians. The records are inspected by the director."
            ]
          }
        ]
      },
      {
        letter: "J",
        title: "Write a recipe of your favourite dish in passive voice",
        questions: [
          {
            q: "Recipe for Lemon Rice written in passive voice.",
            points: [
              "1. Cooked rice is spread on a broad plate and cooled.",
              "2. Mustard seeds, curry leaves, and green chillies are fried in oil.",
              "3. Turmeric powder and salt are added to the mixture.",
              "4. Fresh lemon juice is extracted and poured over the fried ingredients.",
              "5. The mixture is poured over rice and gently tossed."
            ]
          }
        ]
      },
      {
        letter: "K",
        title: "Write a report of an event held at your school using passive voice",
        questions: [
          {
            q: "Report: Annual Sports Day in passive voice.",
            points: [
              "1. The Olympic torch was lit by the school sports captain.",
              "2. The parade was inspected by the District Collector.",
              "3. Medals and certificates were awarded to the winners by the Headmaster."
            ]
          }
        ]
      }
    ],
    poem: [
      {
        letter: "A",
        title: "Read the following lines from the poem and answer the questions that follow",
        questions: [
          {
            q: "'Let me but live my life from year to year, With forward face and unreluctant soul;'\nWho does 'me' refer to?",
            points: ["'Me' refers to the poet, Henry van Dyke."]
          },
          {
            q: "What does 'unreluctant soul' mean in the poem 'Life'?",
            points: ["It means a willing, eager, and courageous mindset that does not hesitate or shrink back from life's experiences."]
          }
        ]
      },
      {
        letter: "B",
        title: "Answer the following question in about 80 - 100 words",
        questions: [
          {
            q: "Describe the poet's positive attitude towards life in Henry van Dyke's 'Life'.",
            points: [
              "1. Henry van Dyke advises living courageously with a forward face and unhesitating soul.",
              "2. He refuses to mourn past losses or fear the uncertain future.",
              "3. Life should be embraced like a joyful journey with youthful cheer and continuous quest for adventure."
            ]
          }
        ]
      },
      {
        letter: "C",
        title: "Complete the following passage by using the phrases given in the box",
        questions: [
          {
            q: "Complete summary using: [forward face, unreluctant soul, youth and age, crown].",
            points: [
              "The poet desires to live with a (forward face) and an (unreluctant soul). He travels happily through (youth and age), believing life's journey will conclude with the victor's (crown)."
            ]
          }
        ]
      }
    ],
    supplementary: [
      {
        letter: "A",
        title: "Choose the correct answer",
        questions: [
          {
            q: "Who was the chief of the spirits on the magical island in 'The Tempest'?",
            options: ["Ariel", "Caliban", "Ferdinand", "Gonzalo"],
            answer: 0,
            explanation: "Ariel was the delicate chief spirit freed and commanded by Prospero."
          },
          {
            q: "Prospero was the former Duke of _______.",
            options: ["Milan", "Naples", "Venice", "Rome"],
            answer: 0,
            explanation: "Prospero was the rightful Duke of Milan usurped by his brother Antonio."
          }
        ]
      },
      {
        letter: "B",
        title: "Identify the character or speaker",
        questions: [
          {
            q: "'I have done nothing but in care of thee, my dear one, thee my daughter.'",
            points: ["Speaker: Prospero to his daughter Miranda."]
          },
          {
            q: "'O, wonder! How many goodly creatures are there here!'",
            points: ["Speaker: Miranda upon seeing noble human beings for the first time."]
          }
        ]
      },
      {
        letter: "C",
        title: "Answer the following questions in one or two sentences",
        questions: [
          {
            q: "Who helped Prospero and baby Miranda when they were cast adrift in a boat?",
            points: ["Gonzalo, a kind lord of Naples, secretly provided them with water, provisions, apparel, and Prospero's cherished magic books."]
          },
          {
            q: "Why did Prospero raise a tempest in the sea?",
            points: ["Prospero raised the tempest to bring his treacherous enemies safely to his island to awaken their conscience and forgive them."]
          }
        ]
      },
      {
        letter: "D",
        title: "Answer the questions in a paragraph of about 100-150 words",
        questions: [
          {
            q: "Narrate how Prospero used his magical powers for reconciliation rather than revenge.",
            points: [
              "1. Exiled to a secluded island by his treacherous brother Antonio and King Alonso, Prospero mastered magical arts.",
              "2. When their ship sailed near, Prospero instructed Ariel to create a tempest without harming a single passenger.",
              "3. He tested Ferdinand's love for Miranda and prompted genuine repentance in Alonso and Antonio.",
              "4. Ultimately, Prospero renounced magic, forgave his enemies, and united Milan and Naples in harmony."
            ]
          }
        ]
      },
      {
        letter: "E",
        title: "Rearrange the following sentences in coherent order",
        questions: [
          {
            q: "Rearrange the sequence of events in 'The Tempest':",
            points: [
              "1. Prospero lived with his daughter Miranda on an enchanted island.",
              "2. Ariel raised a great storm at sea under Prospero's command.",
              "3. Ferdinand was separated from his father and brought before Miranda.",
              "4. Antonio and Alonso expressed deep remorse for their past misdeeds.",
              "5. Prospero forgave all and prepared to return to Milan."
            ]
          }
        ]
      }
    ]
  },

  2: {
    unit: "Unit 2",
    proseTitle: "The Night the Ghost Got In",
    poemTitle: "The Grumble Family",
    supplementaryTitle: "Zigzag",
    grammarTitle: "Articles & Prepositional Phrases",
    prose: [
      {
        letter: "A",
        title: "Answer the following questions in a sentence or two",
        questions: [
          {
            q: "Where was the author James Thurber when he first heard the steps?",
            points: ["James Thurber had just stepped out of the bathtub and was drying himself when he heard footsteps downstairs."]
          },
          {
            q: "Who did grandfather mistake the police officers for?",
            points: ["Grandfather mistook the police officers for General Meade's deserters retreating from the Civil War battlefield."]
          }
        ]
      },
      {
        letter: "B",
        title: "Answer the following questions in about 100-150 words",
        questions: [
          {
            q: "Describe the humorous chaos that ensued the night the ghost got into James Thurber's house.",
            points: [
              "1. Hearing rhythmic footsteps at 1:15 AM, Thurber assumed burglars had entered.",
              "2. His mother hurled a shoe through the neighbor's window to summon the police.",
              "3. Patrolmen and reporters stormed the house, ransacking rooms.",
              "4. Grandfather in the attic mistook officers for deserting soldiers and shot a policeman in the shoulder.",
              "5. Thurber's deadpan wit turns a simple misunderstanding into an unforgettable comedic masterpiece."
            ]
          }
        ]
      },
      {
        letter: "C",
        title: "Rewrite the given slang expressions from the text in standard English",
        questions: [
          {
            q: "Translate slang expressions: 'Ye gods', 'What's the rumpus?', 'he's got 'em'.",
            points: [
              "• 'Ye gods' -> An exclamation of shock or disbelief.",
              "• 'What's the rumpus?' -> What is all this noise and confusion about?",
              "• 'He's got 'em' -> He is hallucinating / suffering from delirium."
            ]
          }
        ]
      },
      {
        letter: "D",
        title: "Complete the given tabular column with the suitable plural forms",
        questions: [
          {
            q: "Plural forms of: Bureau, Crisis, Phenomenon, Index, Stratum.",
            points: [
              "• Bureau -> Bureaus / Bureaux",
              "• Crisis -> Crises",
              "• Phenomenon -> Phenomena",
              "• Index -> Indices / Indexes",
              "• Stratum -> Strata"
            ]
          }
        ]
      },
      {
        letter: "E",
        title: "Listen to the story and answer the following",
        questions: [
          {
            q: "Listening comprehension on ghost folklore and comic misunderstandings.",
            points: ["1. The narrator's brother Herman initially believed footsteps belonged to a burglar.", "2. Thurber later conceded it may indeed have been a ghost."]
          }
        ]
      },
      {
        letter: "F",
        title: "Quiz: Who am I? (Speaking game)",
        questions: [
          {
            q: "Clues: I threw a shoe through Mr. Bodwell's window. Who am I?",
            points: ["Answer: The author's mother (Mrs. Thurber)."]
          }
        ]
      },
      {
        letter: "G",
        title: "Read the incident (The Tie that does not Bind) carefully to answer the questions that follow",
        questions: [
          {
            q: "Comprehension questions based on family bonds during unexpected emergencies.",
            points: ["Family solidarity surfaces even during the most eccentric and irrational emergencies."]
          }
        ]
      },
      {
        letter: "H",
        title: "Read the incident again and answer the following questions",
        questions: [
          {
            q: "Analytical questions on humorous exaggeration as a literary device.",
            points: ["James Thurber uses deadpan understatement and rapid escalation of minor events to create supreme comedy."]
          }
        ]
      },
      {
        letter: "I",
        title: "Suggesting titles (Match paragraphs to expressions)",
        questions: [
          {
            q: "Match suitable headings: Night Steps, Mother's Missile, Police Pandemonium, Grandfather's Gun.",
            points: ["1. Footsteps heard -> Night Steps; 2. Shoe thrown -> Mother's Missile; 3. Police enter -> Pandemonium; 4. Attic battle -> Grandfather's Gun."]
          }
        ]
      },
      {
        letter: "J",
        title: "Comment on what the writer should have done in the given situations",
        questions: [
          {
            q: "What should James Thurber have done before panicking his family?",
            points: ["He should have verified the source of the footsteps calmly before waking up his mother and creating an alarm."]
          }
        ]
      },
      {
        letter: "K",
        title: "State whether the following statements are true or false",
        questions: [
          {
            q: "Grandfather welcomed the police officers warmly into his bedroom. (True/False)",
            points: ["False. Grandfather believed they were Union deserters and shot at them with a revolver."]
          }
        ]
      },
      {
        letter: "L",
        title: "Write a speech for your school Literary Association celebration",
        questions: [
          {
            q: "Speech: 'The Role of Humour in Everyday Life'.",
            points: [
              "Respected teachers and friends, humour is the great shock-absorber of life...",
              "Writers like James Thurber show us that laughter turns awkward moments into lasting joy."
            ]
          }
        ]
      }
    ],
    grammar: [
      {
        letter: "A",
        title: "Complete the conversation by adding a, an or the",
        questions: [
          {
            q: "Insert articles: 'I saw (a/an/the) old man sitting under (a/an/the) banyan tree.'",
            points: ["Answer: I saw 'an' old man sitting under 'the' banyan tree."]
          }
        ]
      },
      {
        letter: "B",
        title: "Edit the passage given below by adding suitable articles wherever necessary",
        questions: [
          {
            q: "Edit passage with missing articles: 'Himalayas are highest mountains in world.'",
            points: ["Corrected: 'The' Himalayas are 'the' highest mountains in 'the' world."]
          }
        ]
      },
      {
        letter: "C",
        title: "Find the meaning of the given prepositions and match them with the correct meaning",
        questions: [
          {
            q: "Match: In spite of, On account of, In front of, With reference to.",
            points: [
              "• In spite of -> Regardless of / Notwithstanding",
              "• On account of -> Due to / Because of",
              "• In front of -> Ahead of / In the presence of"
            ]
          }
        ]
      },
      {
        letter: "D",
        title: "Fill in the blanks by choosing the most appropriate prepositional phrase",
        questions: [
          {
            q: "The match was delayed _______ heavy rain. (in spite of / on account of / in lieu of)",
            options: ["on account of", "in spite of", "in lieu of", "with view to"],
            answer: 0,
            explanation: "'On account of' indicates cause or reason."
          }
        ]
      },
      {
        letter: "E",
        title: "Edit the following passage by replacing the underlined incorrect words with correct prepositional phrases",
        questions: [
          {
            q: "Replace incorrect prepositional phrases in the sample paragraph.",
            points: ["Replace 'by means to' with 'by means of', and 'in accordance with' where context specifies compliance."]
          }
        ]
      }
    ],
    poem: [
      {
        letter: "A",
        title: "Read the following lines from the poem and answer the questions given below",
        questions: [
          {
            q: "'There is a family nobody likes to meet; They live, it is said, on Complaining Street...'\nWhere does the family live?",
            points: ["The family lives on 'Complaining Street', in the city of 'Never-Are-Satisfied'."]
          }
        ]
      },
      {
        letter: "B",
        title: "Answer the following questions in about 80-120 words",
        questions: [
          {
            q: "What message does Lucy Maud Montgomery convey through 'The Grumble Family'?",
            points: [
              "1. The poet cautions against cultivating a pessimistic, complaining temperament.",
              "2. Constant grumbling is contagious and makes a person unlikable.",
              "3. We must keep our feet from Complaining Street and look at life with optimism and joy."
            ]
          }
        ]
      },
      {
        letter: "C",
        title: "Answer the following (alliteration and rhyme scheme questions)",
        questions: [
          {
            q: "Identify the rhyme scheme in: 'meet / street / satisfied / beside'.",
            points: ["Rhyme Scheme: AABB (meet-street: A, satisfied-beside: B)."]
          }
        ]
      }
    ],
    supplementary: [
      {
        letter: "A",
        title: "Identify the speaker / character",
        questions: [
          {
            q: "'Can I take Zigzag to school, Papa?'",
            points: ["Speaker: Arvind Krishnan (Dr. Krishnan's son)."]
          }
        ]
      },
      {
        letter: "B",
        title: "Read the story again and write how these characters reacted in these situations",
        questions: [
          {
            q: "How did Mrs. Krishnan react when Zigzag splattered papaya on her painting?",
            points: ["Mrs. Krishnan was infuriated because her masterpiece 'Sunset at Marina' was ruined for the upcoming exhibition."]
          }
        ]
      },
      {
        letter: "C",
        title: "Complete the given tabular columns",
        questions: [
          {
            q: "Characters in Zigzag: Dr. Ashok T. Somu, Dr. Krishnan, Mrs. Krishnan, Visu, Arvind, Maya.",
            points: ["Tabulate traits: Somu (eccentric friend), Zigzag (African multilingual bird), Visu (cook)."]
          }
        ]
      },
      {
        letter: "D",
        title: "Answer the following questions in one or two sentences",
        questions: [
          {
            q: "What was the astonishing talent of Zigzag?",
            points: ["Zigzag could recite poetry in twenty-one languages and manage chaotic waiting rooms with astonishing charm."]
          }
        ]
      },
      {
        letter: "E",
        title: "Answer the following questions in about 100-150 words",
        questions: [
          {
            q: "Write a summary of Asha Nehemiah's humorous tale 'Zigzag'.",
            points: [
              "1. Dr. Krishnan agrees to pet-sit Zigzag, an unusual African bird sent by Dr. Somu.",
              "2. At home, Zigzag refuses to talk, snores like a jet engine, and ruins Mrs. Krishnan's painting.",
              "3. When taken to the clinic, Zigzag transforms into a dignified, efficient host, calming crying children.",
              "4. Mrs. Krishnan's painting sells for a fortune due to the unique fruit splotches, turning calamity into triumph."
            ]
          }
        ]
      }
    ]
  },

  3: {
    unit: "Unit 3",
    proseTitle: "Empowered Women Navigating the World",
    poemTitle: "I am Every Woman",
    supplementaryTitle: "The Story of Mulan",
    grammarTitle: "Tenses & Phrasal Verbs",
    prose: [
      { letter: "A", title: "Read the statements given below and state whether they are true or false" },
      { letter: "B", title: "Answer the following questions briefly" },
      { letter: "C", title: "Answer the following in about 100-150 words" },
      { letter: "D", title: "Pick out the idioms and phrases from the box and write them in the blanks equivalent to their meaning" },
      { letter: "E", title: "Read the given sentences carefully and fill in with appropriate phrasal verbs" },
      { letter: "F", title: "Read the given passage carefully and fill in the blanks with suitable phrasal verbs" },
      { letter: "G", title: "Listen to the passage and say whether the given statement is true or false" },
      { letter: "H", title: "Read the clues given below and develop your story" },
      { letter: "I", title: "Develop a story with the given pictures and narrate it to your class" },
      { letter: "J", title: "Read the data below and answer the following questions" },
      { letter: "K", title: "Read the given slogans and match them appropriately with their theme" },
      { letter: "L", title: "Frame your own slogans for advertisements / pictures" },
      { letter: "M", title: "Exercise for Letter Writing (Complaint, enquiry, ordering goods)" }
    ],
    grammar: [
      { letter: "A", title: "Complete the sentences in present tense forms" },
      { letter: "B", title: "Complete the sentences in past tense forms" },
      { letter: "C", title: "Fill in the blanks using the verbs in the brackets in the future form" },
      { letter: "D", title: "Underline the verbs and identify the tense forms" },
      { letter: "E", title: "Choose the correct words from options to complete the passage" },
      { letter: "F", title: "Edit the passage by replacing the wrong tense word with the correct one" },
      { letter: "G", title: "Read the story and rewrite it using the past tense" },
      { letter: "H", title: "Read the situations given and frame two suitable sentences in the appropriate form of tenses" }
    ],
    poem: [
      { letter: "A", title: "Read the lines and answer the questions" },
      { letter: "B", title: "Read the lines and identify the figure of speech" },
      { letter: "C", title: "Fill in with a word in each blank to complete the summary of the poem" },
      { letter: "D", title: "Answer the following in a paragraph in about 80 to 100 words" }
    ],
    supplementary: [
      { letter: "A", title: "Choose the best answers" },
      { letter: "B", title: "Identify the character or speaker of the following lines" },
      { letter: "C", title: "Answer the following questions in a sentence or two" },
      { letter: "D", title: "Answer the following questions in a paragraph" }
    ]
  },

  4: {
    unit: "Unit 4",
    proseTitle: "The Attic",
    poemTitle: "The Ant and the Cricket",
    supplementaryTitle: "The Aged Mother",
    grammarTitle: "Connectors & Nominalisation",
    prose: [
      { letter: "A", title: "Answer the following questions in two or three sentences" },
      { letter: "B", title: "Answer in detail the following questions in about 100-150 words" },
      { letter: "C", title: "Complete the following table with two more compound words" },
      { letter: "D", title: "Combine the words in column A with those in column B to form compound words" },
      { letter: "E", title: "Form compound words from boxes and fill in the blanks in the sentences" },
      { letter: "F", title: "Form new words by adding appropriate prefix/suffix (and frame sentences)" },
      { letter: "G", title: "Fill in the blanks by adding appropriate prefix/suffix to the words given in brackets" }
    ],
    grammar: [
      { letter: "A", title: "Complete the sentences choosing the right connectors" },
      { letter: "B", title: "Fill in the blanks with the connector that goes with the underlined words" },
      { letter: "C", title: "Combine the pairs of sentences using appropriate connectors" },
      { letter: "D", title: "Tick the correct linker" },
      { letter: "E", title: "Supply suitable linkers in the passages" },
      { letter: "F", title: "Rearrange the words in the correct order to make meaningful sentences" },
      { letter: "G", title: "Write the noun forms of the following words" },
      { letter: "H", title: "Complete the sentences using the noun form of the words given in brackets" },
      { letter: "I", title: "Rewrite the sentences nominalising the underlined words" },
      { letter: "J", title: "Combine the pairs of sentences into a single sentence using the noun form" },
      { letter: "K", title: "Complete the sentences in the paragraph using the appropriate form of words" },
      { letter: "L", title: "Identify the phrases in the following sentences and classify them" },
      { letter: "M", title: "Identify the clauses and classify them accordingly" },
      { letter: "N", title: "Fill in the blanks based on the online ticket booking listening procedure" },
      { letter: "O", title: "Mock Press Conference roles and discussions" },
      { letter: "P", title: "Answer questions based on the parent-to-coach letter" },
      { letter: "Q", title: "Prepare notices for the given situations" },
      { letter: "R", title: "Write an article for the following topics" }
    ],
    poem: [
      { letter: "A", title: "Based on your understanding of the poem, read the lines and answer the questions" },
      { letter: "B", title: "Based on your understanding of the poem, complete the summary using the phrases given" },
      { letter: "C", title: "Answer each of the following questions in a paragraph about 100 words" }
    ],
    supplementary: [
      { letter: "A", title: "Rearrange the sentences given below in the correct sequence" },
      { letter: "B", title: "Answer the following questions in one or two sentences" },
      { letter: "C", title: "Answer each of the following in a paragraph of 120 to 150 words" },
      { letter: "D", title: "Identify the character/speaker" },
      { letter: "E", title: "Choose the appropriate answer and fill in the blanks" }
    ]
  },

  5: {
    unit: "Unit 5",
    proseTitle: "Tech Bloomers",
    poemTitle: "The Secret of the Machines",
    supplementaryTitle: "A Day in 2889 of an American Journalist",
    grammarTitle: "Pronouns (Personal & Relative)",
    prose: [
      { letter: "A", title: "Answer the following questions in two or three sentences" },
      { letter: "B", title: "Answer in a paragraph of about 100–150 words" },
      { letter: "C", title: "Pick out the contractions from the lesson and expand them" },
      { letter: "D", title: "Expand the following abbreviations or acronyms" },
      { letter: "E", title: "Complete the sentences with the correct abbreviations or acronyms from the given list" },
      { letter: "F", title: "Listen to the passage and state whether statements are true, false, or no information" },
      { letter: "G", title: "Listen to the passage again and answer the questions" },
      { letter: "H", title: "Complete the sentences after reading the passage" },
      { letter: "I", title: "Prepare on topics for public speaking or JAM games" },
      { letter: "J", title: "Read the comic strip and answer the questions on cyber safety" },
      { letter: "K", title: "Fill in the missing words in the email" },
      { letter: "L", title: "Write an email to your teacher about an English model prepared for a literary fest" },
      { letter: "M", title: "Practice exercise for writing a message" },
      { letter: "N", title: "Start your own blog on a favourite sportsperson/hobby/recipe" }
    ],
    grammar: [
      { letter: "A", title: "Write words that can replace nouns and name the pronoun type" },
      { letter: "B", title: "Fill in the gaps with personal pronouns" },
      { letter: "C", title: "Fill in the gaps with appropriate pronouns" },
      { letter: "D", title: "Join the sentences using relative pronouns" }
    ],
    poem: [
      { letter: "A", title: "Reading comprehension, rhyming words, and line analysis" },
      { letter: "B", title: "Figures of speech and poetic devices in machines" },
      { letter: "C", title: "Analytical paragraph on human mind vs machines" }
    ],
    supplementary: [
      { letter: "A", title: "Identify character and speaker in futurist Earth" },
      { letter: "B", title: "Short answer questions on 2889 inventions" },
      { letter: "C", title: "Paragraph summary on futuristic technologies" }
    ]
  },

  6: {
    unit: "Unit 6",
    proseTitle: "The Last Lesson",
    poemTitle: "No Men Are Foreign",
    supplementaryTitle: "The Little Hero of Holland",
    grammarTitle: "Reported Speech & Vocabulary",
    prose: [
      { letter: "A", title: "Short answer questions (2-3 sentences)" },
      { letter: "B", title: "Long paragraph answers (100-150 words)" },
      { letter: "C", title: "Vocabulary tasks (Synonyms & Antonyms)" },
      { letter: "D", title: "Grammar exercises (Direct and Indirect Speech)" }
    ],
    grammar: [
      { letter: "A", title: "Convert Direct Speech to Reported Speech" },
      { letter: "B", title: "Convert Indirect Speech to Direct Speech" },
      { letter: "C", title: "Dialogue transformation to reported paragraphs" }
    ],
    poem: [
      { letter: "A", title: "Poem appreciation & universal brotherhood questions" },
      { letter: "B", title: "Poetic devices, metaphors, and figures of speech" },
      { letter: "C", title: "Analytical paragraph on 'No Men Are Foreign'" }
    ],
    supplementary: [
      { letter: "A", title: "Sequence arrangement of events at the dike" },
      { letter: "B", title: "Character traits & speaker identification of Peter" },
      { letter: "C", title: "Paragraph summary of 'The Little Hero of Holland'" }
    ]
  },

  7: {
    unit: "Unit 7",
    proseTitle: "The Dying Detective",
    poemTitle: "The House on Elm Street",
    supplementaryTitle: "A Dilemma",
    grammarTitle: "Comprehension & Dialogue Analysis",
    prose: [
      { letter: "A", title: "Comprehension checks & short answer questions" },
      { letter: "B", title: "Character evaluation paragraphs of Sherlock Holmes" },
      { letter: "C", title: "Textual grammar and vocabulary exercises" }
    ],
    grammar: [
      { letter: "A", title: "Identify clause types and sentence synthesis" },
      { letter: "B", title: "Correction of common grammatical errors" }
    ],
    poem: [
      { letter: "A", title: "Line-by-line questions on the mysterious house" },
      { letter: "B", title: "Identification of poetic devices and imagery" },
      { letter: "C", title: "Thematic paragraph writing" }
    ],
    supplementary: [
      { letter: "A", title: "Multiple-choice questions and textual checks" },
      { letter: "B", title: "Character dialogues & speaker identification of Uncle Philip" },
      { letter: "C", title: "Critical review and resolution paragraphs" }
    ]
  }
};

// Helper to retrieve exercises for a selected English unit and section
export const getEnglishExercises = (unitNum = 1, sectionType = 'prose') => {
  const num = parseInt(unitNum, 10) || 1;
  const unitObj = englishExerciseData[num] || englishExerciseData[1];
  const normType = (sectionType || 'prose').toLowerCase();

  if (normType.includes('prose')) {
    return {
      title: unitObj.proseTitle,
      type: 'Prose',
      options: unitObj.prose || []
    };
  }
  if (normType.includes('poem')) {
    return {
      title: unitObj.poemTitle,
      type: 'Poem',
      options: unitObj.poem || []
    };
  }
  if (normType.includes('supp')) {
    return {
      title: unitObj.supplementaryTitle,
      type: 'Supplementary',
      options: unitObj.supplementary || []
    };
  }
  if (normType.includes('gram')) {
    return {
      title: unitObj.grammarTitle || `Grammar Section (${unitObj.unit})`,
      type: 'Grammar',
      options: unitObj.grammar || []
    };
  }

  // Default to prose
  return {
    title: unitObj.proseTitle,
    type: 'Prose',
    options: unitObj.prose || []
  };
};
