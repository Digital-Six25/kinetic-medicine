import { EligibilityData } from "@/types/homepage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useEligibilityPageData() {
  return useQuery<EligibilityData, Error>({
    queryKey: ["eligibility-page-data"],
    queryFn: async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not defined");
      }

      const { data } = await axios.get(API_URL);
      const acf = data.acf;

      return {
        eligibility_hero_pill: acf.eligibility_hero_pill,
        eligibility_hero_title: acf.eligibility_hero_title,
        eligibility_hero_subtitle: acf.eligibility_hero_subtitle,
        eligibility_hero_btn1: acf.eligibility_hero_btn1,
        eligibility_hero_btn2: acf.eligibility_hero_btn2,
        eligibility_hero_img: acf.eligibility_hero_img,

        eligibility_eligible_title: acf.eligibility_eligible_title,
        eligibility_eligible_subtitle: acf.eligibility_eligible_subtitle,

        eligibility_criteria_title: acf.eligibility_criteria_title,
        eligibility_criteria: acf.eligibility_criteria,
        eligibility_criteria_btn: acf.eligibility_criteria_btn,

        eeligibility_goal_title: acf.eeligibility_goal_title,
        eligibility_goals: acf.eligibility_goals,

        eligibility_works_title: acf.eligibility_works_title,
        eligibility_works_subtitle: acf.eligibility_works_subtitle,
        eligibility_works: acf.eligibility_works,

        eligibility_started_title: acf.eligibility_started_title,
        eligibility_started_subtitle: acf.eligibility_started_subtitle,
        eligibility_started: acf.eligibility_started,

        eligibility_support_title: acf.eligibility_support_title,
        eligibility_support_subtitle: acf.eligibility_support_subtitle,
        eligibility_support: acf.eligibility_support,

        eligibility_referrers_title: acf.eligibility_referrers_title,
        eligibility_referrers_subtitle: acf.eligibility_referrers_subtitle,
        eligibility_why_refer: acf.eligibility_why_refer,
        eligibility_why_refer_title: acf.eligibility_why_refer_title,
        eligibility_refer_btn1: acf.eligibility_refer_btn1,
        eligibility_refer_btn2: acf.eligibility_refer_btn2,
        eligibility_referral_info_title: acf.eligibility_referral_info_title,
        eligibility_referral_info: acf.eligibility_referral_info,
        eligibility_quick_referral: acf.eligibility_quick_referral,

        eligibility_cta1_title: acf.eligibility_cta1_title,
        eligibility_cta1_subtitle: acf.eligibility_cta1_subtitle,
        eligibility_cta1_btn1: acf.eligibility_cta1_btn1,
        eligibility_cta1_btn2: acf.eligibility_cta1_btn2,

        eligibility_cta2_title: acf.eligibility_cta2_title,
        eligibility_cta2_subtitle: acf.eligibility_cta2_subtitle,
        eligibility_cta2_btn: acf.eligibility_cta2_btn,
      };
    },
  });
}
