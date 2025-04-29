
import React, { useState } from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects, Project } from '@/data/projects';

const ProjectsSection = () => {
  const { t, language } = useLanguage();
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Get unique technologies from all projects
  const technologies = Array.from(new Set(projects.flatMap(project => project.technologies)));

  // Filter projects based on selected technology
  const filteredProjects = selectedTech
    ? projects.filter(project => project.technologies.includes(selectedTech))
    : projects;

  return (
    <section id="projects" className="py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('projects.title')}</h2>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">{t('projects.filter')}:</h3>
          <div className="flex flex-wrap gap-2">
            <Badge
              className={`cursor-pointer ${!selectedTech ? 'bg-primary' : 'bg-secondary'}`}
              onClick={() => setSelectedTech(null)}
            >
              {t('projects.viewAll')}
            </Badge>
            {technologies.map((tech) => (
              <Badge
                key={tech}
                className={`cursor-pointer ${selectedTech === tech ? 'bg-primary' : 'bg-secondary'}`}
                onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} currentLanguage={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, currentLanguage }: { project: Project; currentLanguage: Language }) => {
  const { t } = useLanguage();
  
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title[currentLanguage]} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title[currentLanguage]}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="mb-4">{project.description[currentLanguage]}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-0">
        {project.links.live && (
          <Button asChild variant="default" size="sm">
            <a href={project.links.live} target="_blank" rel="noopener noreferrer">
              {t('projects.visitSite')}
            </a>
          </Button>
        )}
        {project.links.code && (
          <Button asChild variant="outline" size="sm">
            <a href={project.links.code} target="_blank" rel="noopener noreferrer">
              {t('projects.viewCode')}
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectsSection;
