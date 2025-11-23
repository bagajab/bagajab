export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}