export type ReferralHero = {
  pill: string;
  title: string;
  subtitle: string;
  cta: string;
};

export type ReferralBenefitCard = {
  icon: string;
  title: string;
  subtitle: string;
};

export type ReferralBenefits = {
  title: string;
  subtitle: string;
  cards: ReferralBenefitCard[];
};

export type ReferralFormCard = {
  tag: string;
  img: string | false;
  icon: string;
  title: string;
  subtitle: string;
};

export type ReferralForm = {
  pill: string;
  title: string;
  subtitle: string;
  cards: ReferralFormCard[];
};

export type ReferralContactCard = {
  title: string;
  subtitle: string;
  contact_info: string;
};

export type ReferralContact = {
  title: string;
  subtitle: string;
  cards: ReferralContactCard[];
};

export type ReferralInformationStep = {
  num: string;
  title: string;
  subtitle: string;
};

export type ReferralInformation = {
  title: string;
  processes: ReferralInformationStep[];
  img: string;
};

export type ReferralsData = {
  hero: ReferralHero;
  benefits: ReferralBenefits;
  form: ReferralForm;
  contact: ReferralContact;
  information: ReferralInformation;
};
