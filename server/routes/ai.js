// server/routes/ai.js
import express from 'express';
import { queryAI } from '../services/aiService.js';

const router = express.Router();

router.post('/chat', async (req, res) => {
  try {
    const { message, subjectId, chapterId, mode, history, userApiKey } = req.body;
    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message cannot be empty' });
    }

    const aiResponse = await queryAI({
      message,
      subjectId,
      chapterId,
      mode: mode || 'chat',
      history: history || [],
      userApiKey
    });

    res.json(aiResponse);
  } catch (err) {
    console.error('AI chat endpoint error:', err);
    res.status(500).json({ error: 'AI tutor encountered an issue. Please try again.' });
  }
});

export default router;
