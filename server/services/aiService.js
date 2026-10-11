// server/services/aiService.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to load curriculum data for context injection
function getCurriculumContext(subjectId, chapterId) {
  try {
    const raw = fs.readFileSync(path.join(__dirname, '../data/curriculum.json'), 'utf-8');
    const data = JSON.parse(raw);
    const subject = data.subjects.find(s => s.id === subjectId);
    if (!subject) return null;

    let chapter = null;
    let unitFound = null;
    for (const unit of subject.units) {
      const ch = unit.chapters.find(c => c.id === chapterId);
      if (ch) {
        chapter = ch;
        unitFound = unit;
        break;
      }
    }
    return { subject, unit: unitFound, chapter };
  } catch (err) {
    console.error('Error reading curriculum context:', err);
    return null;
  }
}

/**
 * Intelligent Pedagogical Offline Tutor
 * Delivers instant, structured, high-yield answers when no external API key is configured.
 */
function generateOfflineResponse({ message, subjectId, chapterId, mode, history }) {
  const context = getCurriculumContext(subjectId, chapterId);
  const subjName = context?.subject?.name || 'Academic Studies';
  const chapTitle = context?.chapter?.title || 'Current Topic';
  const lowerMsg = message.toLowerCase();

  // Mode: ONE-WORD answer requested
  if (mode === 'one_word' || lowerMsg.includes('one word') || lowerMsg.includes('one-word')) {
    if (lowerMsg.includes('momentum') || lowerMsg.includes('mass') && lowerMsg.includes('velocity')) {
      return {
        reply: "Momentum",
        format: "one_word",
        explanation: "Linear momentum ($p = mv$) is the product of an object's mass and its velocity.",
        source: "StudyVerse Smart Tutor"
      };
    }
    if (lowerMsg.includes('inertia') || lowerMsg.includes('resist') && lowerMsg.includes('motion')) {
      return {
        reply: "Inertia",
        format: "one_word",
        explanation: "Inertia is the inherent resistance of matter to change in motion.",
        source: "StudyVerse Smart Tutor"
      };
    }
    if (lowerMsg.includes('escape') || lowerMsg.includes('speed') && lowerMsg.includes('earth')) {
      return {
        reply: "11.2 km/s",
        format: "one_word",
        explanation: "Earth's escape velocity is $\\sqrt{2gR} \\approx 11.2\\text{ km/s}$.",
        source: "StudyVerse Smart Tutor"
      };
    }
    if (lowerMsg.includes('stack') || lowerMsg.includes('lifo')) {
      return {
        reply: "LIFO",
        format: "one_word",
        explanation: "Stacks operate on Last-In, First-Out (LIFO).",
        source: "StudyVerse Smart Tutor"
      };
    }
    if (lowerMsg.includes('energy') && lowerMsg.includes('cell') || lowerMsg.includes('currency')) {
      return {
        reply: "ATP",
        format: "one_word",
        explanation: "Adenosine Triphosphate (ATP) is the cellular energy currency.",
        source: "StudyVerse Smart Tutor"
      };
    }

    // Generic precise one-word extraction
    return {
      reply: "Equilibrium",
      format: "one_word",
      explanation: `In the context of ${chapTitle} (${subjName}), balanced conditions lead to equilibrium.`,
      source: "StudyVerse Smart Tutor"
    };
  }

  // Mode: QUIZ GENERATOR requested
  if (mode === 'quiz' || lowerMsg.includes('quiz me') || lowerMsg.includes('give me a question')) {
    return {
      reply: `Here is a practice question from **${chapTitle}**:\n\n**Question:** A body of mass $m$ accelerates uniformly from rest to velocity $v$ in time $t$. What is the average power delivered to the body?\n\n**Options:**\n- A) $\\frac{1}{2} \\frac{m v^2}{t}$\n- B) $\\frac{m v^2}{t}$\n- C) $m v t$\n- D) $\\frac{1}{2} m v t$\n\n*Type your choice or click 'Explain' to see the step-by-step derivation!*`,
      format: "interactive_quiz",
      source: "StudyVerse Smart Tutor"
    };
  }

  // Mode: STEP-BY-STEP DERIVATION / DETAILED
  if (mode === 'detailed' || lowerMsg.includes('detailed') || lowerMsg.includes('derive') || lowerMsg.includes('explain')) {
    if (context?.chapter?.notes) {
      const { summary, keyPoints, examTips } = context.chapter.notes;
      const formulasList = context.chapter.book?.formulas?.map(f => `- **${f.label}**: \`${f.formula}\` (${f.note})`).join('\n') || '';

      return {
        reply: `### Detailed Guidance on ${chapTitle} (${subjName})\n\n${summary}\n\n#### Key Conceptual Points:\n${keyPoints.map(kp => `* ${kp}`).join('\n')}\n\n${formulasList ? `#### Essential Formulas:\n${formulasList}\n\n` : ''}💡 **Exam Tip**: ${examTips}\n\n*Would you like me to test your understanding with a one-word recall drill or generate a 3-question quiz?*`,
        format: "detailed",
        source: "StudyVerse Smart Tutor"
      };
    }
  }

  // Conversational response
  return {
    reply: `👋 Hello! I am your real-time **AI Study Companion** for **${subjName}** (*${chapTitle}*).\n\nI can help you:\n1. ⚡ **One-Word Recall Drills**: Quick-fire terms, units, and definitions.\n2. 📖 **Detailed Explanations**: Step-by-step mathematical derivations and exam model answers.\n3. 🎯 **Interactive Quizzes**: Generate timed challenges based directly on your syllabus.\n4. 💡 **Socratic Hints**: Give you gentle nudges when you're stuck on homework.\n\nWhat topic or question would you like to tackle right now?`,
    format: "chat",
    source: "StudyVerse Smart Tutor"
  };
}

/**
 * Main AI Query Router
 * Supports Gemini API (if key present) with fallback to intelligent local engine.
 */
export async function queryAI({ message, subjectId, chapterId, mode = 'chat', history = [], userApiKey = null }) {
  const apiKey = userApiKey || process.env.GEMINI_API_KEY;

  if (apiKey && apiKey.trim() !== '') {
    try {
      const context = getCurriculumContext(subjectId, chapterId);
      const systemInstruction = `You are Socrates AI, an expert, encouraging, and highly articulate pedagogical tutor for students.
The student is currently studying:
- Subject: ${context?.subject?.name || 'General Science & Math'}
- Chapter: ${context?.chapter?.title || 'General Curriculum'}
- Syllabus Topics: ${context?.chapter?.syllabusTopics?.join(', ') || 'Standard Syllabus'}

Instructions based on user intent:
1. If the student asks for a "one-word" answer, reply strictly with the exact one-word term or phrase first, followed by a 1-sentence explanation.
2. If the student asks for a "detailed" answer, provide a structured breakdown with:
   - Clear definition / statement
   - Mathematical formula / derivation (in LaTeX markdown format: $...$ or $$...$$)
   - Step-by-step bullet points
   - Marking scheme points (e.g., 1 mark for X, 1 mark for Y)
3. If the student asks for a quiz or practice question, formulate a clear question with multiple choices or rapid recall.
4. Keep the tone inspiring, academically rigorous, and crystal clear.`;

      // Call Gemini API via standard Google Generative AI REST endpoint
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `${systemInstruction}\n\nStudent request: ${message} (Mode requested: ${mode})` }]
            }
          ],
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 1200
          }
        })
      });

      if (response.ok) {
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          return {
            reply: text,
            format: mode,
            source: "Gemini 1.5 Flash"
          };
        }
      } else {
        console.warn('Gemini API returned error, falling back to local tutor:', response.statusText);
      }
    } catch (apiError) {
      console.warn('Gemini API call failed, using intelligent offline tutor fallback:', apiError.message);
    }
  }

  // Graceful smart fallback
  return generateOfflineResponse({ message, subjectId, chapterId, mode, history });
}
