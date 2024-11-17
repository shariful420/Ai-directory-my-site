export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  publishedAt: string;
  readingTime: number;
  categories: string[];
  tags: string[];
  author: {
    name: string;
    avatar?: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  count: number;
}