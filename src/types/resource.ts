export interface Resource {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  category: 'Guides' | 'Tips' | 'News' | 'Case Studies';
  publishedDate: string;
  lastUpdated: string;
  author: {
    name: string;
    role: string;
  };
  readingTime: number;
  relatedResources: string[];
  status: 'draft' | 'published' | 'archived';
}