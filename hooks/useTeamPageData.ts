import { TeamSection } from "@/types/teamspage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useTeamPageData() {
  return useQuery<TeamSection, Error>({
    queryKey: ["team-page-data"],
    queryFn: async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not defined");
      }

      const { data } = await axios.get(API_URL);
      const acf = data.acf;

      if (!acf || !acf.team) {
        throw new Error("Invalid ACF structure: 'team' key missing.");
      }

      return {
        team: {
          hero: {
            pill: acf.team.hero.pill,
            title: acf.team.hero.title,
            subtitle: acf.team.hero.subtitle,
          },
          values: {
            title: acf.team.values.title,
            subtitle: acf.team.values.subtitle,
            cards: acf.team.values.cards,
          },
          team: {
            pill: acf.team.team.pill,
            title: acf.team.team.title,
            subtitle: acf.team.team.subtitle,
            tags: acf.team.team.tags,
            cards: acf.team.team.cards,
          },
          qualification: {
            pill: acf.team.qualification.pill,
            title: acf.team.qualification.title,
            subtitle: acf.team.qualification.subtitle,
            bullets: acf.team.qualification.bullets,
          },
          careers: {
            pill: acf.team.careers.pill,
            title: acf.team.careers.title,
            subtitle: acf.team.careers.subtitle,
            cards: acf.team.careers.cards,
          },
        },
      };
    },
  });
}
