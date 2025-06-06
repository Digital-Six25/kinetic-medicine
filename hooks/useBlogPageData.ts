// hooks/useBlogPageData.ts
import { BlogPageResponse } from "@/types/blogpage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useBlogPageData() {
  return useQuery<BlogPageResponse, Error>({
    queryKey: ["blog-page-data"],
    queryFn: async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not defined");
      }

      const { data } = await axios.get(API_URL);
      const acf = data.acf;

      if (!acf || !acf.blog) {
        throw new Error("Invalid ACF structure: 'blog' key missing.");
      }

      return {
        blog: {
          hero: {
            pill: acf.blog.hero.pill,
            title: acf.blog.hero.title,
            subtitle: acf.blog.hero.subtitle,
          },
          blogs: acf.blog.blogs.map((blog: any) => ({
            id: blog.post_id,
            isfeatured: blog.isfeatured,
            img: blog.img,
            title: blog.title,
            subtitle: blog.subtitle,
            date: blog.date,
            read_time: blog.read_time,
            category: blog.category,
            text: blog.text,
            author: {
              img: blog.author?.img,
              name: blog.author?.name,
              role: blog.author?.role,
              desc: blog.author?.desc,
            },
          })),
        },
      };
    },
  });
}
