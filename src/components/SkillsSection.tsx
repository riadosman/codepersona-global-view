
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { skills, Skill } from '@/data/skills';

const SkillsSection = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('frontend');

  const categories = [
    { id: 'frontend', label: t('skills.frontend') },
    { id: 'backend', label: t('skills.backend') },
    { id: 'devops', label: t('skills.devops') },
    { id: 'other', label: t('skills.other') },
  ];

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('skills.title')}</h2>
        
        <Tabs defaultValue="frontend" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-center">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle>{skill.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="h-2 bg-secondary rounded-full">
            <div 
              className="h-2 bg-primary rounded-full" 
              style={{ width: `${skill.level}%` }}
            />
          </div>
          <div className="text-sm text-end font-mono">{skill.level}%</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
