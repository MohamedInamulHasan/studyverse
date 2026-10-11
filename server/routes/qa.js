// server/routes/qa.js
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { queryAI } from '../services/aiService.js';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const QA_PATH = path.join(__dirname, '../data/questions_bank.json');

function readQABank() {
  const content = fs.readFileSync(QA_PATH, 'utf-8');
  return JSON.parse(content);
}

// Get one-word recall questions
router.get('/one-word', (req, res) => {
  try {
    const { subjectId, chapterId } = req.query;
    const data = readQABank();
    let list = data.oneWordQuestions || [];

    if (subjectId) {
      list = list.filter(q => q.subjectId === subjectId);
    }
    if (chapterId) {
      list = list.filter(q => q.chapterId === chapterId);
    }

    res.json(list);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch one-word questions' });
  }
});

// Get detailed exam-style questions with model answers
router.get('/detailed', (req, res) => {
  try {
    const { subjectId, chapterId } = req.query;
    const data = readQABank();
    let list = data.detailedQuestions || [];

    if (subjectId) {
      list = list.filter(q => q.subjectId === subjectId);
    }
    if (chapterId) {
      list = list.filter(q => q.chapterId === chapterId);
    }

    res.json(list);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch detailed questions' });
  }
});

// Generate / Solve dynamic question on-the-fly (One-word or Detailed)
router.post('/solve', async (req, res) => {
  try {
    const { question, mode = 'detailed', subjectId, chapterId, userApiKey } = req.body;
    if (!question) {
      return res.status(400).json({ error: 'Question text is required' });
    }

    const aiResult = await queryAI({
      message: question,
      subjectId,
      chapterId,
      mode,
      userApiKey
    });

    res.json({
      question,
      mode,
      result: aiResult.reply,
      format: aiResult.format,
      source: aiResult.source,
      explanation: aiResult.explanation
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate solution' });
  }
});

export default router;
