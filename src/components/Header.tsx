
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';

const Header = () => {
  const { t, language } = useLanguage();
  
  const navItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'experience', href: '#experience' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-sand/30">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link 
          to="/" 
          className="flex items-center font-mono text-lg font-bold text-maroon hover:text-maroon/80 transition-colors"
        >
          Riad Osman
        </Link>
        
        <nav className={`hidden md:flex items-center gap-6 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-maroon"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
