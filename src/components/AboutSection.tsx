
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';

const AboutSection = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const aboutData = {
    name: "Riad Osman",
    role: t('about.role'),
    bio: t('about.bio'),
    location: "San Francisco, CA",
    languages: ["JavaScript", "TypeScript", "Python", "PHP"],
    interests: ["Web Development", "Open Source", "UI/UX Design", "Machine Learning"],
    quote: t('about.quote'),
    image: "https://picsum.photos/400/400",
  };

  // Create a JSON-like object representation with proper formatting
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
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-maroon">{t('about.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Card className="border border-sand/30 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-maroon">{t('about.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`font-mono text-sm rounded-md p-4 ${
                  theme === 'dark' ? 'bg-coal/80 text-cream' : 'bg-cream/80 text-coal'
                } ${language === 'ar' ? 'text-right' : 'text-left'}`} 
                  dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  <pre className="whitespace-pre-wrap break-words">{codeSnippet}</pre>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="order-1 md:order-2">
            <Card className="border border-sand/30 shadow-lg overflow-hidden bg-card/80 backdrop-blur-sm">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={aboutData.image} 
                  alt={aboutData.name}
                  className="object-cover w-full h-full transition-transform hover:scale-105 duration-700"
                />
              </div>
              <CardContent className="p-6">
                <div className={`space-y-4 ${language === 'ar' ? 'text-right' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  <div>
                    <h3 className="text-2xl font-bold text-maroon">{aboutData.name}</h3>
                    <p className="text-lg font-medium">{aboutData.role}</p>
                    <p className="text-muted-foreground mt-2">{aboutData.bio}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-maroon">{t('about.location')}</h4>
                    <p>{aboutData.location}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-maroon">{t('about.languages')}</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {aboutData.languages.map((language, index) => (
                        <span key={index} className="px-3 py-1 bg-sand/20 text-maroon border border-maroon/30 rounded-full text-sm">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="border-l-4 border-maroon pl-4 italic mt-4">
                    {aboutData.quote}
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
