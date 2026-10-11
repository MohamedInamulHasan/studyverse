// server/routes/quiz.js
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const QA_PATH = path.join(__dirname, '../data/questions_bank.json');
const USER_DATA_PATH = path.join(__dirname, '../data/user_data.json');

function readQABank() {
  const content = fs.readFileSync(QA_PATH, 'utf-8');
  return JSON.parse(content);
}

function readUserData() {
  if (!fs.existsSync(USER_DATA_PATH)) return { quizHistory: [] };
  return JSON.parse(fs.readFileSync(USER_DATA_PATH, 'utf-8'));
}

function writeUserData(data) {
  fs.writeFileSync(USER_DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

// Get quiz by chapterId or subjectId
router.get('/', (req, res) => {
  try {
    const { chapterId, subjectId } = req.query;
    const data = readQABank();
    let quizzes = data.quizzes || [];

    if (chapterId) {
      quizzes = quizzes.filter(q => q.chapterId === chapterId);
    } else if (subjectId) {
      quizzes = quizzes.filter(q => q.subjectId === subjectId);
    }

    if (quizzes.length === 0 && data.quizzes.length > 0) {
      // Default to first available quiz if none specifically matched
      quizzes = [data.quizzes[0]];
    }

    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch quizzes' });
  }
});

// Submit quiz answers & calculate score
router.post('/submit', (req, res) => {
  try {
    const { quizId, answers } = req.body; // answers is map: { [questionId]: answerValue }
    const data = readQABank();
    const quiz = data.quizzes.find(q => q.id === quizId);

    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    let score = 0;
    const review = quiz.questions.map(q => {
      const studentAns = answers[q.id];
      let isCorrect = false;

      if (q.type === 'mcq') {
        isCorrect = Number(studentAns) === q.correctIndex;
      } else if (q.type === 'one_word') {
        const cleanUser = String(studentAns || '').trim().toLowerCase();
        const cleanCorrect = String(q.correctAnswer).trim().toLowerCase();
        const acceptable = (q.acceptableAnswers || []).map(a => a.toLowerCase().trim());
        isCorrect = cleanUser === cleanCorrect || acceptable.includes(cleanUser);
      }

      if (isCorrect) score += 1;

      return {
        id: q.id,
        prompt: q.prompt,
        type: q.type,
        userAnswer: studentAns,
        correctAnswer: q.type === 'mcq' ? q.options[q.correctIndex] : q.correctAnswer,
        isCorrect,
        explanation: q.explanation
      };
    });

    const total = quiz.questions.length;
    const percentage = Math.round((score / total) * 100);

    // Save to user history
    const userData = readUserData();
    if (!userData.quizHistory) userData.quizHistory = [];
    userData.quizHistory.unshift({
      quizId,
      title: quiz.title,
      score,
      total,
      percentage,
      completedAt: new Date().toISOString()
    });
    // Boost streak on quiz completion!
    if (userData.profile) {
      userData.profile.streakDays = (userData.profile.streakDays || 0) + 1;
    }
    writeUserData(userData);

    res.json({
      score,
      total,
      percentage,
      review,
      newStreak: userData.profile?.streakDays || 1
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit quiz' });
  }
});

export default router;
