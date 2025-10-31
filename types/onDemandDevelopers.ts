export type OnDemandDevelopersConfig = {
  slug: string;
  banner: {
    title: string;
    highlight?: string;
    subtitle?: string;
    image?: string;
    linkText?: string;
  };
  features: {
    icon: string;
    title: string;
    items: string[];
  }[];
  solutions?: {
    mainTitle: string;
    mainDescription: string;
    items: {
      id: string;
      icon: string;
      title: string;
      description: string;
    }[];
    linkText?: string;
    linkUrl?: string;
  };
  topSkill?: {
    mainTitle: string;
    mainDescription: string;
    items: {
      id: string;
      icon: string;
      title: string;
      link?: string;
      description: string;
    }[];
    linkText?: string;
    linkUrl?: string;
  };

  faq?: {
    title: string;
    items: {
      id: string;
      question: string;
      answer: string;
    }[];
  };
};
