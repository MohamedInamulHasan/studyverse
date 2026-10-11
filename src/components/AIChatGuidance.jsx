// src/components/AIChatGuidance.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '../context/ChatContext';
import { useStudy } from '../context/StudyContext';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Zap, 
  FileText, 
  HelpCircle, 
  X, 
  Volume2, 
  Copy, 
  Check, 
  Trash2, 
  Lightbulb,
  BookOpen
} from 'lucide-react';

export function AIChatGuidance({ isDrawer = false, onClose = () => {} }) {
  const { messages, isTyping, activePromptMode, setActivePromptMode, sendMessage, clearChat } = useChat();
  const { activeSubject, activeChapter } = useStudy();

  const [input, setInput] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [speakingId, setSpeakingId] = useState(null);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    sendMessage(input);
    setInput('');
  };

  const handleQuickPrompt = (promptText, mode = null) => {
    sendMessage(promptText, mode);
  };

  const copyMessage = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const speakText = (id, text) => {
    if (!('speechSynthesis' in window)) return;
    
    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    // Strip markdown formatting for cleaner speech
    const cleanText = text.replace(/[*#`$\-_]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className={`flex flex-col h-full bg-white dark:bg-slate-900 ${isDrawer ? 'shadow-2xl' : 'rounded-2xl border border-slate-200 dark:border-slate-800'}`}>
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                Socrates AI Study Mentor
              </h2>
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Context: <span className="font-semibold text-indigo-600 dark:text-indigo-400">{activeSubject?.name || 'General'}</span> • {activeChapter?.title || 'Current Topic'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={clearChat}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800"
            title="Clear Chat History"
          >
            <Trash2 className="h-4 w-4" />
          </button>
          {isDrawer && (
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800"
              title="Close Tutor"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Mode Switcher Bar */}
      <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-2 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850 overflow-x-auto text-[11px] font-semibold">
        <span className="text-slate-400 mr-1 flex-shrink-0">Tutor Mode:</span>
        {[
          { id: 'chat', label: 'Conversational', icon: Bot },
          { id: 'one_word', label: '⚡ One-Word Drill', icon: Zap },
          { id: 'detailed', label: '📖 Detailed Answer', icon: FileText },
          { id: 'quiz', label: '🎯 Quiz Challenge', icon: HelpCircle },
        ].map(m => {
          const Icon = m.icon;
          const isActive = activePromptMode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setActivePromptMode(m.id)}
              className={`flex items-center gap-1 rounded-lg px-2.5 py-1 transition flex-shrink-0 ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              <Icon className="h-3 w-3" />
              <span>{m.label}</span>
            </button>
          );
        })}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(msg => {
          const isUser = msg.sender === 'user';
          const isSpeaking = speakingId === msg.id;

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                  isUser
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60'
                }`}
              >
                {/* Special One-Word Answer Rendering */}
                {msg.format === 'one_word' && !isUser ? (
                  <div className="space-y-2">
                    <div className="inline-block rounded-xl bg-indigo-600 px-3.5 py-1.5 font-mono text-base font-extrabold text-white shadow-xs">
                      {msg.text}
                    </div>
                    {msg.explanation && (
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 italic pt-1">
                        {msg.explanation}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="whitespace-pre-line font-medium">
                    {msg.text}
                  </div>
                )}
              </div>

              {/* Message metadata & actions */}
              <div className="flex items-center gap-2 text-[10px] text-slate-400 px-1">
                <span>{msg.timestamp}</span>
                {!isUser && (
                  <>
                    <span>•</span>
                    <button
                      onClick={() => copyMessage(msg.id, msg.text)}
                      className="hover:text-indigo-600 flex items-center gap-0.5"
                    >
                      {copiedId === msg.id ? <Check className="h-2.5 w-2.5 text-emerald-500" /> : <Copy className="h-2.5 w-2.5" />}
                      <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                    </button>
                    <span>•</span>
                    <button
                      onClick={() => speakText(msg.id, msg.text)}
                      className={`hover:text-indigo-600 flex items-center gap-0.5 ${isSpeaking ? 'text-indigo-600 font-bold' : ''}`}
                    >
                      <Volume2 className="h-2.5 w-2.5" />
                      <span>{isSpeaking ? 'Stop' : 'Listen'}</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-400 pl-2">
            <div className="flex space-x-1">
              <div className="h-2 w-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-2 w-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-2 w-2 bg-indigo-500 rounded-full animate-bounce"></div>
            </div>
            <span>Socrates AI is reasoning...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompt Pills */}
      <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-850 flex items-center gap-2 overflow-x-auto text-[11px]">
        <button
          onClick={() => handleQuickPrompt(`Give me 5 one-word rapid recall questions on ${activeChapter?.title || 'this topic'}`, 'one_word')}
          className="whitespace-nowrap rounded-lg border border-indigo-200 bg-indigo-50/60 px-2.5 py-1 text-indigo-700 hover:bg-indigo-100 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-300"
        >
          ⚡ 5 One-Word Questions
        </button>
        <button
          onClick={() => handleQuickPrompt(`Explain ${activeChapter?.title || 'the main concept'} with a simple real-world analogy`, 'detailed')}
          className="whitespace-nowrap rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
        >
          💡 Simple Analogy
        </button>
        <button
          onClick={() => handleQuickPrompt(`Derive the primary formula of ${activeChapter?.title || 'this unit'} step-by-step`, 'detailed')}
          className="whitespace-nowrap rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
        >
          📐 Formula Derivation
        </button>
        <button
          onClick={() => handleQuickPrompt(`Give me a practice quiz question on ${activeChapter?.title || 'this chapter'}`, 'quiz')}
          className="whitespace-nowrap rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
        >
          🎯 Quiz Me
        </button>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="border-t border-slate-200 p-3 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Ask Socrates anything about ${activeChapter?.title || 'your syllabus'}...`}
            className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 disabled:opacity-40 transition"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>

    </div>
  );
}
