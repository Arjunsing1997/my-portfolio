export interface SkillCategory {
  category: string;
  list: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  image: string;
  link?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  company: string;
}
