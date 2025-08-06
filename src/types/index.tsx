export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    category: 'web' | 'mobile' | 'full-stack';
    technologies: string[];
    link?: string;
    github?: string;
}

export interface Testimonial {
    id: string;
    name: string;
    company: string;
    content: string;
    rating: number;
}

export interface ContactFormData {
    name: string;
    email: string;
    projectType: string;
    message: string;
}

export interface Skill {
    name: string;
    category: 'frontend' | 'backend' | 'mobile' | 'tools';
}

export interface Service {
    id: string;
    icon: string;
    title: string;
    description: string;
}

export interface Stats {
    experience: number;
    projects: number;
    clients: number;
    satisfaction: number;
}