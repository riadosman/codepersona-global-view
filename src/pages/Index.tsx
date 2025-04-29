
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import Home from '@/pages/Home';

const Index = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Home />
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default Index;
