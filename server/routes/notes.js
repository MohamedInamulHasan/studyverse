// server/routes/notes.js
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const USER_DATA_PATH = path.join(__dirname, '../data/user_data.json');

function readUserData() {
  if (!fs.existsSync(USER_DATA_PATH)) {
    return { profile: {}, customNotes: [], bookmarks: [], quizHistory: [] };
  }
  const content = fs.readFileSync(USER_DATA_PATH, 'utf-8');
  return JSON.parse(content);
}

function writeUserData(data) {
  fs.writeFileSync(USER_DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

// Get user state (profile, notes, bookmarks, quiz history)
router.get('/user-state', (req, res) => {
  try {
    const data = readUserData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read user state' });
  }
});

// Create custom note
router.post('/custom', (req, res) => {
  try {
    const { title, content, subjectId, chapterId } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }
    const data = readUserData();
    const newNote = {
      id: `cn-${Date.now()}`,
      subjectId: subjectId || 'general',
      chapterId: chapterId || null,
      title,
      content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    data.customNotes.unshift(newNote);
    writeUserData(data);
    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create note' });
  }
});

// Update custom note
router.put('/custom/:id', (req, res) => {
  try {
    const { title, content } = req.body;
    const data = readUserData();
    const note = data.customNotes.find(n => n.id === req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });

    if (title !== undefined) note.title = title;
    if (content !== undefined) note.content = content;
    note.updatedAt = new Date().toISOString();

    writeUserData(data);
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update note' });
  }
});

// Delete custom note
router.delete('/custom/:id', (req, res) => {
  try {
    const data = readUserData();
    data.customNotes = data.customNotes.filter(n => n.id !== req.params.id);
    writeUserData(data);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete note' });
  }
});

// Toggle topic completion
router.post('/topic-toggle', (req, res) => {
  try {
    const { topic } = req.body;
    if (!topic) return res.status(400).json({ error: 'Topic string is required' });

    const data = readUserData();
    if (!data.profile.completedTopics) data.profile.completedTopics = [];

    const index = data.profile.completedTopics.indexOf(topic);
    if (index > -1) {
      data.profile.completedTopics.splice(index, 1);
    } else {
      data.profile.completedTopics.push(topic);
    }
    writeUserData(data);
    res.json({ completedTopics: data.profile.completedTopics });
  } catch (err) {
    res.status(500).json({ error: 'Failed to toggle topic' });
  }
});

// Toggle bookmark
router.post('/bookmark', (req, res) => {
  try {
    const { type, subjectId, chapterId, title } = req.body;
    const data = readUserData();
    if (!data.bookmarks) data.bookmarks = [];

    const existingIdx = data.bookmarks.findIndex(
      b => b.subjectId === subjectId && b.chapterId === chapterId
    );

    if (existingIdx > -1) {
      data.bookmarks.splice(existingIdx, 1);
      writeUserData(data);
      return res.json({ bookmarked: false, bookmarks: data.bookmarks });
    } else {
      const newBookmark = {
        id: `bm-${Date.now()}`,
        type: type || 'chapter',
        subjectId,
        chapterId,
        title,
        timestamp: new Date().toISOString()
      };
      data.bookmarks.push(newBookmark);
      writeUserData(data);
      return res.json({ bookmarked: true, bookmarks: data.bookmarks });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to toggle bookmark' });
  }
});

export default router;
