import { StorySectionData } from "@/types/homepage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useStoryPageData() {
  return useQuery<StorySectionData, Error>({
    queryKey: ["story-page-data"],
    queryFn: async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not defined");
      }

      const { data } = await axios.get(API_URL);
      const acf = data.acf;

      return {
        story_hero_pill: acf.story_hero_pill,
        story_hero_title: acf.story_hero_title,
        story_hero_subtitle: acf.story_hero_subtitle,

        story_title: acf.story_title,
        story_text: acf.story_text,
        story_numbers: acf.story_numbers,
        story_img: acf.story_img,

        story_value_title: acf.story_value_title,
        story_value_subtitle: acf.story_value_subtitle,
        story_value_cards: acf.story_value_cards,

        story_team_title: acf.story_team_title,
        story_team_subtitle: acf.story_team_subtitle,
        story_team_card: acf.story_team_card,

        story_qualification_title: acf.story_qualification_title,
        story_qualification_subtitle: acf.story_qualification_subtitle,
        story_qualifications: acf.story_qualifications,

        story_why_title_: acf.story_why_title_, // Note: backend typo
        story_why_subtitle: acf.story_why_subtitle,
        story_why: acf.story_why,

        story_cta_title: acf.story_cta_title,
        story_cta_subtitle: acf.story_cta_subtitle,
        story_cta_btn1: acf.story_cta_btn1,
        story_cta_btn2: acf.story_cta_btn2,
      };
    },
  });
}
