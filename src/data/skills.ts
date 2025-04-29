export type Skill = {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'devops' | 'other';
};

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML', level: 95, category: 'frontend' },
  { name: 'CSS', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Vue', level: 80, category: 'frontend' },
  { name: 'Angular', level: 70, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 88, category: 'backend' },
  { name: 'Python', level: 85, category: 'backend' },
  { name: 'PHP', level: 75, category: 'backend' },
  { name: 'Java', level: 70, category: 'backend' },
  { name: 'Express', level: 85, category: 'backend' },
  { name: 'GraphQL', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 85, category: 'backend' },
  { name: 'PostgreSQL', level: 80, category: 'backend' },
  
  // DevOps
  { name: 'Git', level: 90, category: 'devops' },
  { name: 'Docker', level: 85, category: 'devops' },
  { name: 'CI/CD', level: 80, category: 'devops' },
  { name: 'AWS', level: 75, category: 'devops' },
  { name: 'Kubernetes', level: 70, category: 'devops' },
  
  // Other
  { name: 'Agile', level: 85, category: 'other' },
  { name: 'UI/UX', level: 75, category: 'other' },
  { name: 'Testing', level: 80, category: 'other' },
  { name: 'Accessibility', level: 85, category: 'other' },
];
