// blog.types.ts

export interface BlogPageResponse {
  blog: {
    hero: BlogHero;
    blogs: BlogEntry[];
  };
}

export interface BlogHero {
  pill: string;
  title: string;
  subtitle: string;
}

export interface BlogEntry {
  post_id: string;
  isfeatured: boolean;
  img: string | false; // Could be a URL string or `false`
  title: string;
  subtitle: string;
  date: string;
  read_time: string;
  category: string;
  text: string; // HTML string
  author: BlogAuthor;
}

export interface BlogAuthor {
  img: string | false; // Could be a URL string or `false`
  name: string;
  role: string;
  desc: string;
}
