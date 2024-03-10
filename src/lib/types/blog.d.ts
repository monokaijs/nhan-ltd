interface BlogPost {
  _id: any;
  title: string;
  summary: string;
  slug: string;
  body: string;
  hashtags: string[];
  duration: number;
  createdAt: Date;
  lastModified: Date;
}
