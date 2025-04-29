
import React from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { experiences, ExperienceItem } from '@/data/experience';

const ExperienceSection = () => {
  const { t, language } = useLanguage();

  const workExperience = experiences.filter((exp) => exp.type === 'work');
  const educationExperience = experiences.filter((exp) => exp.type === 'education');

  return (
    <section id="experience" className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('experience.title')}</h2>
        
        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="work">{t('experience.work')}</TabsTrigger>
            <TabsTrigger value="education">{t('experience.education')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="work" className="mt-0">
            <div className="space-y-8">
              {workExperience.map((exp) => (
                <ExperienceCard 
                  key={exp.id} 
                  experience={exp} 
                  currentLanguage={language}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="education" className="mt-0">
            <div className="space-y-8">
              {educationExperience.map((exp) => (
                <ExperienceCard 
                  key={exp.id} 
                  experience={exp} 
                  currentLanguage={language}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ExperienceCard = ({ 
  experience, 
  currentLanguage 
}: { 
  experience: ExperienceItem; 
  currentLanguage: Language;
}) => {
  const { language } = useLanguage();

  const formatDate = (dateStr: string | null): string => {
    if (!dateStr) return 'Present';
    
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short' 
    };
    
    return date.toLocaleDateString(
      currentLanguage === 'en' ? 'en-US' : 
      currentLanguage === 'ar' ? 'ar-SA' : 
      'tr-TR', 
      options
    );
  };

  return (
    <Card className="relative">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
      
      <CardHeader>
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div>
            <CardTitle>{experience.title[currentLanguage]}</CardTitle>
            <p className="text-muted-foreground">{experience.organization[currentLanguage]}</p>
          </div>
          
          <div className={`text-right ${language === 'ar' ? 'text-left' : ''}`}>
            <p className="font-medium">
              {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
            </p>
            <p className="text-muted-foreground">{experience.location[currentLanguage]}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className={language === 'ar' ? 'text-right' : ''} dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {experience.description[currentLanguage]}
        </p>
        
        {experience.technologies && (
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ExperienceSection;
