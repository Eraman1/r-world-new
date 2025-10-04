export type IndustryConfig = {
  slug: string;
  banner: {
    title: string;
    highlight?: string;
    subtitle?: string;
    image?: string;
    linkText?: string;
  };
  techHero?: {
    heading: string;
    description: string;
    services?: {
      id: string;
      title: string;
      icon: string; // store as string, we’ll map to Lucide icons
      position: "left" | "right";
    }[];
    deviceImages?: {
      laptop?: string;
      tablet?: string;
      mobile?: string;
    };
  };
  solutions?: {
    mainTitle: string;
    mainDescription: string;
    items: {
      id: string;
      icon: string; // store icon name (e.g., "Warehouse")
      title: string;
      subtitle: string;
      description: string;
    }[];
    linkText?: string;
    linkUrl?: string;
  };
  managementSolutions?: {
    title?: string;
    subtitle?: string;
    subtitleLink?: { text: string; url: string };
    laptopImage?: string;
    mobileImage?: string;
    topFeatures?: {
      id: string;
      icon: string;
      title: string;
      description: string;
      link?: { text: string; url: string };
    }[];
    bottomFeatures?: {
      id: string;
      icon: string;
      title: string;
      description: string;
      link?: { text: string; url: string };
    }[];
    ctaText?: string;
    onCtaClick?: () => void;
  };
  managementSolutionsTwo?: {
    title: string;
    features: string[];
  };
};