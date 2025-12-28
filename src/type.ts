
export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  language: string;
  updated_at: string;
}

export interface SkillProject {
  name: string;
  url?: string;
}

export interface Skill {
  name: string;
  proficiency: number; // 0 to 100
  projects: (string | SkillProject)[]; // Related project names or objects with links
  category: 'Language' | 'Frontend' | 'Backend' | 'AI/ML' | 'Tools';
}

export const Section = {
  About: 'about',
  Skills: 'skills',
  Experience: 'experience',
  Projects: 'projects',
  Contact: 'contact'
} as const;

export type SectionType = typeof Section[keyof typeof Section];
