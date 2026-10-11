// src/context/ChatContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { api } from '../utils/api';
import { useStudy } from './StudyContext';

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const { selectedSubjectId, selectedChapterId, geminiApiKey } = useStudy();
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: "👋 Hi! I'm **Socrates AI**, your real-time academic mentor. I know your current syllabus, textbook chapters, and formulas. Ask me for **one-word answers**, **detailed derivations**, or **quiz practice**!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      format: 'chat'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [activePromptMode, setActivePromptMode] = useState('chat'); // 'chat' | 'one_word' | 'detailed' | 'quiz'

  const sendMessage = async (text, overrideMode = null) => {
    if (!text.trim()) return;

    const mode = overrideMode || activePromptMode;
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    try {
      const response = await api.sendAIChatMessage({
        message: text,
        subjectId: selectedSubjectId,
        chapterId: selectedChapterId,
        mode,
        history: messages.slice(-6),
        userApiKey: geminiApiKey
      });

      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.reply,
        format: response.format || mode,
        source: response.source,
        explanation: response.explanation,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: `ai-err-${Date.now()}`,
          sender: 'ai',
          text: "⚠️ I encountered a temporary connection issue. Please try again or check your settings.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isError: true
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: `msg-${Date.now()}`,
        sender: 'ai',
        text: "✨ Fresh study session started! Ask me any question about your curriculum or notes.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        format: 'chat'
      }
    ]);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        isTyping,
        activePromptMode,
        setActivePromptMode,
        sendMessage,
        clearChat
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
