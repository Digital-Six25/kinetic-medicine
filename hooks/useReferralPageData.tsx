import { ReferralsData } from "@/types/referralpage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useReferralPageData() {
  return useQuery<ReferralsData, Error>({
    queryKey: ["referral-page-data"],
    queryFn: async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not defined");
      }

      const { data } = await axios.get(API_URL);
      const acf = data.acf;

      if (!acf || !acf.referrals) {
        throw new Error("Invalid ACF structure: 'referrals' key missing.");
      }

      const referral = acf.referrals;

      return {
        hero: {
          pill: referral.hero.pill,
          title: referral.hero.title,
          subtitle: referral.hero.subtitle,
          cta: referral.hero.cta,
        },
        benefits: {
          title: referral.benefits.title,
          subtitle: referral.benefits.subtitle,
          cards: referral.benefits.cards.map((card: any) => ({
            icon: card.icon,
            title: card.title,
            subtitle: card.subtitle,
          })),
        },
        form: {
          pill: referral.form.pill,
          title: referral.form.title,
          subtitle: referral.form.subtitle,
          cards: referral.form.cards.map((card: any) => ({
            tag: card.tag,
            img: card.img || false,
            icon: card.icon,
            title: card.title,
            subtitle: card.subtitle,
            url: card.url,
          })),
        },
        contact: {
          title: referral.contact.title,
          subtitle: referral.contact.subtitle,
          cards: referral.contact.cards.map((card: any) => ({
            title: card.title,
            subtitle: card.subtitle,
            contact_info: card.contact_info,
          })),
        },
        information: {
          title: referral.information.title,
          img: referral.information.img,
          processes: referral.information.processes.map((step: any) => ({
            num: step.num,
            title: step.title,
            subtitle: step.subtitle,
          })),
        },
      };
    },
  });
}
