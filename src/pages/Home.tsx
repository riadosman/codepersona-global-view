
import React, { useState } from 'react';
import Header from '@/components/Header';
import Terminal from '@/components/Terminal';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Handle terminal commands
  const handleCommand = (command: string) => {
    setActiveSection(command);
    const element = document.getElementById(command);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      
      <main>
        <section className="py-16 md:py-24">
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
