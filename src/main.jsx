// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StudyProvider } from './context/StudyContext';
import { ChatProvider } from './context/ChatContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StudyProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </StudyProvider>
  </React.StrictMode>
);
