export interface ServiceDetail {
  id: string;
  title: string;
  icon: string; // Lucide icon identifier
  shortDescription: string;
  fullDescription: string;
  features: string[];
  techStack: string[];
}

export interface PortfolioItem {
  id: string;
  category: 'web' | 'mobile' | 'design' | 'edu';
  categoryLabel: string;
  title: string;
  client: string;
  description: string;
  image: string;
  year: string;
  url?: string;
  testimonial?: {
    clientName: string;
    comment: string;
    rating: number;
  };
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}
