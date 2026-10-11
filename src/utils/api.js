// src/utils/api.js
const API_BASE = '/api';

export const api = {
  // Curriculum
  async getCurriculum() {
    const res = await fetch(`${API_BASE}/curriculum`);
    return res.json();
  },

  async getSubject(id) {
    const res = await fetch(`${API_BASE}/curriculum/subject/${id}`);
    return res.json();
  },

  async getChapter(id) {
    const res = await fetch(`${API_BASE}/curriculum/chapter/${id}`);
    return res.json();
  },

  async addSubject(payload) {
    const res = await fetch(`${API_BASE}/curriculum/subject`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return res.json();
  },

  // User State & Notes
  async getUserState() {
    const res = await fetch(`${API_BASE}/notes/user-state`);
    return res.json();
  },

  async createCustomNote(payload) {
    const res = await fetch(`${API_BASE}/notes/custom`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return res.json();
  },

  async updateCustomNote(id, payload) {
    const res = await fetch(`${API_BASE}/notes/custom/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return res.json();
  },

  async deleteCustomNote(id) {
    const res = await fetch(`${API_BASE}/notes/custom/${id}`, {
      method: 'DELETE'
    });
    return res.json();
  },

  async toggleTopicCompletion(topic) {
    const res = await fetch(`${API_BASE}/notes/topic-toggle`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic })
    });
    return res.json();
  },

  async toggleBookmark(payload) {
    const res = await fetch(`${API_BASE}/notes/bookmark`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return res.json();
  },

  // Q&A
  async getOneWordQuestions(subjectId, chapterId) {
    const params = new URLSearchParams();
    if (subjectId) params.append('subjectId', subjectId);
    if (chapterId) params.append('chapterId', chapterId);
    const res = await fetch(`${API_BASE}/qa/one-word?${params.toString()}`);
    return res.json();
  },

  async getDetailedQuestions(subjectId, chapterId) {
    const params = new URLSearchParams();
    if (subjectId) params.append('subjectId', subjectId);
    if (chapterId) params.append('chapterId', chapterId);
    const res = await fetch(`${API_BASE}/qa/detailed?${params.toString()}`);
    return res.json();
  },

  async solveDynamicQA({ question, mode, subjectId, chapterId, userApiKey }) {
    const res = await fetch(`${API_BASE}/qa/solve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, mode, subjectId, chapterId, userApiKey })
    });
    return res.json();
  },

  // Quizzes
  async getQuizzes(chapterId, subjectId) {
    const params = new URLSearchParams();
    if (chapterId) params.append('chapterId', chapterId);
    if (subjectId) params.append('subjectId', subjectId);
    const res = await fetch(`${API_BASE}/quiz?${params.toString()}`);
    return res.json();
  },

  async submitQuiz(quizId, answers) {
    const res = await fetch(`${API_BASE}/quiz/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quizId, answers })
    });
    return res.json();
  },

  // AI Guidance Chat
  async sendAIChatMessage({ message, subjectId, chapterId, mode, history, userApiKey }) {
    const res = await fetch(`${API_BASE}/ai/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, subjectId, chapterId, mode, history, userApiKey })
    });
    return res.json();
  }
};
