export interface Tool {
  id: string;
  name: string;
  description: string;
  logo: string;
  url: string;
  category: string;
  tags: string[];
  launchDate: string;
  featured: boolean;
  upvotes: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}