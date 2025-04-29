
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Terminal from '@/components/Terminal';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useIsMobile } from '@/hooks/use-mobile';

const Home = () => {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const isMobile = useIsMobile();

  // Handle terminal commands
  const handleCommand = (command: string) => {
    setActiveSection(command);
    const element = document.getElementById(command);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add scroll event listener for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={language === 'ar' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{t('seo.title')} | Riad Osman</title>
        <meta name="description" content={t('seo.description')} />
        <meta name="keywords" content={t('seo.keywords')} />
        <meta property="og:title" content={`${t('seo.title')} | Riad Osman`} />
        <meta property="og:description" content={t('seo.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://picsum.photos/1200/630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('seo.title')} | Riad Osman`} />
        <meta name="twitter:description" content={t('seo.description')} />
        <meta name="twitter:image" content="https://picsum.photos/1200/630" />
        <link rel="canonical" href="https://riadosman.com" />
        {language === 'ar' && <html lang="ar" dir="rtl" />}
        {language === 'en' && <html lang="en" dir="ltr" />}
        {language === 'tr' && <html lang="tr" dir="ltr" />}
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen">
        <section className={`py-16 md:py-24 bg-gradient-to-b ${
          theme === 'dark' ? 'from-coal to-maroon/10' : 'from-cream to-sand/10'
        }`}>
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Terminal onCommandExecuted={handleCommand} />
            </div>
          </div>
        </section>
        
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
