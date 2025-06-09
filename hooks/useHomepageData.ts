import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HomepageData } from "@/types/homepage";

export function useHomepageData() {
  return useQuery<HomepageData, Error>({
    queryKey: ["homepage-data"],
    queryFn: async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      if (!API_URL) {
        throw new Error(
          "Environment variable NEXT_PUBLIC_API_URL is not defined"
        );
      }
      const { data } = await axios.get(API_URL);

      const acf = data.acf;

      return {
        hero_section: {
          hero_pill: acf.hero_pill,
          hero_title: acf.hero_title,
          hero_subtitle: acf.hero_subtitle,
          hero_cta: acf.hero_cta,
          hero_cta_1: acf.hero_cta_1,
          hero_image_1: acf.hero_image_1,
          hero_features: acf.hero_features || [],
          hero_counter: {
            icon: acf.hero_counter.icon,
            text: acf.hero_counter.text,
            number: acf.hero_counter.number,
          },
        },
        stats_section: (acf.stats_section || []).map((item: any) => ({
          stats_icon: item.stats_icon,
          stats_number: item.stats_number,
          stats_text: item.stats_text,
        })),
        numbered_items: acf.numbered_items || [],
        how_it_works: {
          pill: acf.how_it_works_pill,
          title: acf.how_it_works_title,
          subtitle: acf.how_it_works_subtitle,
          bullets: acf.how_it_works_bullets,
          img: acf.how_it_works_img,
          cta: acf.how_it_works_cta,
          rating: acf.how_it_works_rating,
          rating_name: acf.how_it_works_rating_name,
        },
        areas_of_expertise: {
          pill: acf.area_of_expertise_pill,
          title: acf.area_of_expertise_title,
          subtitle: acf.areas_of_expertise_subtitle,
          card: acf.area_of_expertise_card,
        },
        success_stories: {
          pill: acf.testimonials.pill,
          title: acf.testimonials.title,
          subtitle: acf.testimonials.subtitle,
          cards: acf.testimonials.cards,
        },
        contact: {
          title: acf.contact_title,
          subtitle: acf.contact_subtitle,
          card: acf.contact_card,
        },
        img_gallery: {
          pill: acf.img_gallery.pill,
          title: acf.img_gallery.title,
          subtitle: acf.img_gallery.subtitle,
          images: acf.img_gallery.images || [],
        },
      };
    },
  });
}
