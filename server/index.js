// server/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import curriculumRouter from './routes/curriculum.js';
import notesRouter from './routes/notes.js';
import qaRouter from './routes/qa.js';
import quizRouter from './routes/quiz.js';
import aiRouter from './routes/ai.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/curriculum', curriculumRouter);
app.use('/api/notes', notesRouter);
app.use('/api/qa', qaRouter);
app.use('/api/quiz', quizRouter);
app.use('/api/ai', aiRouter);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'StudyVerse AI Platform Engine'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 StudyVerse AI Server running at http://localhost:${PORT}`);
});
