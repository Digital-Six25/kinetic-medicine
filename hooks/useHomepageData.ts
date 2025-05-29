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
          hero_title: acf.hero_title,
          hero_subtitle: acf.hero_subtitle,
          hero_cta: acf.hero_cta,
          hero_image_1: acf.hero_image_1,
          hero_image_2: acf.hero_image_2,
          hero_image_3: acf.hero_image_3,
        },
        stats_section: (acf.stats_section || []).map((item: any) => ({
          stats_icon: item.stats_icon,
          stats_number: item.stats_number,
          stats_text: item.stats_text,
        })),
        numbered_items: acf.numbered_items || [],
        how_it_works: {
          title: acf.how_it_works_title,
          subtitle: acf.how_it_works_subtitle,
          cards: acf.how_it_works_cards,
          cta: acf.how_it_works_cta,
        },
        areas_of_expertise: {
          title: acf.area_of_expertise_title,
          subtitle: acf.areas_of_expertise_subtitle,
          large_card: {
            icon: acf.areas_of_expertise_large_card_icon,
            title: acf.areas_of_expertise_large_card_title,
            subtitle: acf.areas_of_expertise_large_card_subtitle,
            bullet: acf.areas_of_expertise_large_card_bullet,
            cta: acf.area_of_expertise_large_card_cta,
          },
          side_cards: acf.area_of_expertise_side_cards,
          bottom_card: acf.area_of_expertise_bottom_card,
        },
        success_stories: {
          title: acf.success_stories_title,
          card: acf.success_stories_card,
        },
        contact: {
          title: acf.contact_title,
          subtitle: acf.contact_subtitle,
          card: acf.contact_card,
        },
      };
    },
  });
}
