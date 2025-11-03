export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  industry: string;
  technologies: string[];
  author: {
    name: string;
    avatar: string;
    role?: string;
    bio: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
  relatedPosts?: BlogPost[];
  url?: string;
}