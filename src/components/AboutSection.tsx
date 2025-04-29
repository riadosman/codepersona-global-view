
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  const { t, language } = useLanguage();

  const aboutData = {
    name: "John Doe",
    role: t('about.role'),
    bio: t('about.bio'),
    location: "San Francisco, CA",
    languages: ["JavaScript", "TypeScript", "Python", "PHP"],
    interests: ["Web Development", "Open Source", "UI/UX Design", "Machine Learning"],
    quote: t('about.quote'),
  };

  // Create a JSON-like object representation
  const codeSnippet = `{
  "name": "${aboutData.name}",
  "role": "${aboutData.role}",
  "bio": "${aboutData.bio}",
  "location": "${aboutData.location}",
  "languages": [${aboutData.languages.map(lang => `"${lang}"`).join(', ')}],
  "interests": [${aboutData.interests.map(interest => `"${interest}"`).join(', ')}],
  "quote": "${aboutData.quote}"
}`;

  return (
    <section id="about" className="py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('about.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>{t('about.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`font-mono text-sm bg-terminal-bg text-terminal-text rounded-md p-4 ${language === 'ar' ? 'text-right' : 'text-left'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
                <pre>{codeSnippet}</pre>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>{aboutData.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`space-y-4 ${language === 'ar' ? 'text-right' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
                <div>
                  <h3 className="text-lg font-medium">{aboutData.role}</h3>
                  <p className="text-muted-foreground mt-1">{aboutData.bio}</p>
                </div>
                
                <div>
                  <h4 className="font-medium">{t('about.location')}</h4>
                  <p>{aboutData.location}</p>
                </div>
                
                <div>
                  <h4 className="font-medium">{t('about.languages')}</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {aboutData.languages.map((language, index) => (
                      <span key={index} className="px-2 py-1 bg-primary/10 rounded-md text-sm">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
                
                <blockquote className="border-l-4 pl-4 italic">
                  {aboutData.quote}
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
