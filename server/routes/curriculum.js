// server/routes/curriculum.js
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../data/curriculum.json');

function readCurriculum() {
  const content = fs.readFileSync(DATA_PATH, 'utf-8');
  return JSON.parse(content);
}

function writeCurriculum(data) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

// Get all grades and subjects
router.get('/', (req, res) => {
  try {
    const data = readCurriculum();
    res.json({
      grades: data.grades,
      subjects: data.subjects.map(s => ({
        id: s.id,
        gradeId: s.gradeId,
        name: s.name,
        icon: s.icon,
        color: s.color,
        badge: s.badge,
        description: s.description,
        totalUnits: s.units.length,
        totalChapters: s.units.reduce((acc, u) => acc + u.chapters.length, 0)
      }))
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to read curriculum' });
  }
});

// Get specific subject details
router.get('/subject/:id', (req, res) => {
  try {
    const data = readCurriculum();
    const subject = data.subjects.find(s => s.id === req.params.id);
    if (!subject) return res.status(404).json({ error: 'Subject not found' });
    res.json(subject);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch subject' });
  }
});

// Get specific chapter details (Book text, formulas, syllabus, revision notes)
router.get('/chapter/:id', (req, res) => {
  try {
    const data = readCurriculum();
    for (const subj of data.subjects) {
      for (const unit of subj.units) {
        const chap = unit.chapters.find(c => c.id === req.params.id);
        if (chap) {
          return res.json({
            ...chap,
            subjectId: subj.id,
            subjectName: subj.name,
            unitId: unit.id,
            unitTitle: unit.title
          });
        }
      }
    }
    res.status(404).json({ error: 'Chapter not found' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chapter' });
  }
});

// Add custom subject or chapter
router.post('/subject', (req, res) => {
  try {
    const { name, gradeId, description, icon, badge } = req.body;
    if (!name || !gradeId) {
      return res.status(400).json({ error: 'Name and gradeId are required' });
    }
    const data = readCurriculum();
    const newSubject = {
      id: `custom-${Date.now()}`,
      gradeId,
      name,
      icon: icon || 'BookOpen',
      color: 'from-blue-600 to-indigo-600',
      badge: badge || 'Custom',
      description: description || 'User added subject',
      units: []
    };
    data.subjects.push(newSubject);
    writeCurriculum(data);
    res.status(201).json(newSubject);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create subject' });
  }
});

export default router;
