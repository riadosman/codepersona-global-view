
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

type TerminalProps = {
  onCommandExecuted?: (command: string) => void;
};

const Terminal: React.FC<TerminalProps> = ({ onCommandExecuted }) => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<string[]>([
    t('terminal.welcome'),
    t('terminal.greeting'),
    t('terminal.help'),
  ]);
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Initial animation effect
  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (typingIndex < 3) {
        setTypingIndex(typingIndex + 1);
      } else {
        setIsTyping(false);
      }
    }, 1000);

    return () => clearTimeout(typingTimeout);
  }, [typingIndex]);

  // Scroll to bottom when history updates
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus on input when terminal is clicked
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand();
    }
  };

  const executeCommand = () => {
    const command = input.trim().toLowerCase();
    let response: string;

    switch (command) {
      case 'help':
        response = t('terminal.helpText');
        break;
      case 'about':
        response = 'Navigating to About section...';
        if (onCommandExecuted) onCommandExecuted('about');
        break;
      case 'skills':
        response = 'Navigating to Skills section...';
        if (onCommandExecuted) onCommandExecuted('skills');
        break;
      case 'projects':
        response = 'Navigating to Projects section...';
        if (onCommandExecuted) onCommandExecuted('projects');
        break;
      case 'experience':
        response = 'Navigating to Experience section...';
        if (onCommandExecuted) onCommandExecuted('experience');
        break;
      case 'contact':
        response = 'Navigating to Contact section...';
        if (onCommandExecuted) onCommandExecuted('contact');
        break;
      case 'theme':
        toggleTheme();
        response = `Theme switched to ${theme === 'light' ? 'dark' : 'light'} mode.`;
        break;
      case 'language':
        response = 'Available languages: en (English), ar (Arabic), tr (Turkish). Use "language [code]" to switch.';
        break;
      case 'language en':
        setLanguage('en');
        response = 'Language switched to English.';
        break;
      case 'language ar':
        setLanguage('ar');
        response = 'تم تغيير اللغة إلى العربية.';
        break;
      case 'language tr':
        setLanguage('tr');
        response = 'Dil Türkçe\'ye değiştirildi.';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case '':
        response = '';
        break;
      default:
        response = `Command not found: ${command}. Type "help" for available commands.`;
    }

    setHistory([...history, `${t('terminal.commandPrompt')} ${command}`, response]);
    setInput('');
  };

  return (
    <div 
      className={`terminal bg-terminal-bg text-terminal-text font-mono rounded-md p-4 h-64 overflow-y-auto w-full border shadow-md ${language === 'ar' ? 'text-right' : 'text-left'}`}
      onClick={focusInput}
      ref={terminalRef}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {history.map((line, index) => (
        <div 
          key={index}
          className={`${index >= history.length - 1 && isTyping ? 'animate-typing border-r-2 border-terminal-text overflow-hidden whitespace-nowrap' : ''}`}
        >
          {line}
        </div>
      ))}
      
      <div className="flex items-center mt-1">
        <span className={`text-terminal-green ${language === 'ar' ? 'ml-2' : 'mr-2'}`}>{t('terminal.commandPrompt')}</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="bg-transparent flex-1 outline-none"
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
