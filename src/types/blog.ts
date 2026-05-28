export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  readTimeMinutes: number;
  content: string;
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
  };
};
