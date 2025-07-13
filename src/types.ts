export interface Project {
  title: string;
  description: string;
  link: string;
  tech: string[];
  isOngoing?: boolean;
  year?: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  companyUrl?: string;
  linkedinUrl?: string;
}

export interface Skill {
  name: string;
  url: string;
}

export interface Skills {
  programming: Skill[];
  frontend: Skill[];
  styling: Skill[];
  backend: Skill[];
  database: Skill[];
  deployment: Skill[];
  testing: Skill[];
  architecture: Skill[];
}