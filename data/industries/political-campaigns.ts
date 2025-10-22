import { IndustryConfig } from "@/types/industries";

export const politicalcampaigns: IndustryConfig = {
  slug: "politicalcampaigns",
  banner: {
    title: "Empower Political Movements with",
    highlight: "AI-Driven Campaign & Voter Engagement Platforms",
    subtitle:
      "Leverage technology to manage campaigns, analyze voter data, automate outreach, and boost engagement. From real-time analytics to digital fundraising and volunteer coordination, we build tools that power winning strategies.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Campaign Solutions",
  },

  techHero: {
    heading: "Hire Expert Developers for Political Campaign Software",
    description:
      "Our team specializes in creating digital platforms for political organizations — from voter relationship management and event coordination to real-time sentiment analytics and targeted outreach automation.",
    services: [
      {
        id: "voter-analytics",
        title: "Voter Data Analytics Platforms",
        icon: "Tractor", //BarChart
        position: "left",
      },
      {
        id: "crm-systems",
        title: "Campaign CRM & Volunteer Management",
        icon: "Tractor", //Users
        position: "left",
      },
      {
        id: "donation-platforms",
        title: "Digital Fundraising & Donation Platforms",
        icon: "Tractor", //CreditCard
        position: "left",
      },
      {
        id: "sentiment-ai",
        title: "AI-Powered Sentiment Analysis",
        icon: "Tractor", //Cpu
        position: "left",
      },
      {
        id: "social-automation",
        title: "Social Media & Ad Campaign Automation",
        icon: "Tractor", //Megaphone
        position: "right",
      },
      {
        id: "event-management",
        title: "Rally & Event Management Systems",
        icon: "Tractor", //Calendar
        position: "right",
      },
      {
        id: "security",
        title: "Secure Communication Platforms",
        icon: "Tractor", //Shield
        position: "right",
      },
      {
        id: "mobile-engagement",
        title: "Mobile Apps for Voter Engagement",
        icon: "Tractor", //Smartphone
        position: "right",
      },
    ],
  },

  solutions: {
    mainTitle: "Smart Digital Solutions for Political Campaigns",
    mainDescription:
      "We design secure, data-driven, and scalable systems for campaign operations. Manage supporters, track donations, analyze sentiment, and automate communication to maximize outreach efficiency.",
    items: [
      {
        id: "data-intelligence",
        icon: "Leaf", //Database
        title: "Voter Data Intelligence",
        subtitle: "",
        description:
          "Aggregate and analyze demographic, behavioral, and sentiment data to create precise voter targeting strategies.",
      },
      {
        id: "campaign-crm",
        icon: "Leaf", //Users
        title: "Campaign CRM Systems",
        subtitle: "",
        description:
          "Manage volunteers, supporters, and campaign events through a unified dashboard with automation and analytics.",
      },
      {
        id: "donation-system",
        icon: "Leaf", //DollarSign
        title: "Donation & Fundraising Platforms",
        subtitle: "",
        description:
          "Enable secure, transparent, and multi-channel fundraising with automated reporting and donor tracking.",
      },
      {
        id: "media-monitoring",
        icon: "Leaf", //Eye
        title: "Social Media Monitoring",
        subtitle: "",
        description:
          "Track trends, competitor campaigns, and public sentiment across all major social media channels in real time.",
      },
      {
        id: "geo-campaigns",
        icon: "Leaf", //Map
        title: "Geo-Targeted Campaign Tools",
        subtitle: "",
        description:
          "Plan local rallies, target regional voters, and analyze performance geographically for smarter campaign execution.",
      },
      {
        id: "ai-outreach",
        icon: "Leaf", //Cpu
        title: "AI-Powered Outreach Automation",
        subtitle: "",
        description:
          "Send personalized messages, emails, and notifications to segmented voter groups with AI-driven insights.",
      },
    ],
    linkText: "Explore Campaign Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Complete Political Campaign Management Suite",
    subtitle:
      "Integrate AI, data analytics, and automation to manage your political operations efficiently — from voter engagement to fundraising and field coordination.",
    subtitleLink: { text: "campaign management software", url: "#" },
    laptopImage: "/images/political-laptop.jpg",
    mobileImage: "/images/political-mobile.jpg",
    topFeatures: [
      {
        id: "voter-tracking",
        icon: "map", //UserCheck
        title: "Real-Time Voter Tracking",
        description:
          "Track voter engagement, feedback, and interactions across digital and offline channels in real time.",
      },
      {
        id: "data-visualization",
        icon: "map", //BarChart
        title: "Campaign Data Visualization",
        description:
          "View key campaign metrics through interactive dashboards for quick decision-making and performance optimization.",
      },
      {
        id: "communication",
        icon: "map", //MessageSquare
        title: "Centralized Communication Hub",
        description:
          "Enable coordinated messaging across all teams, volunteers, and field offices with secure cloud integration.",
      },
    ],
    bottomFeatures: [
      {
        id: "polling-analytics",
        icon: "map", //TrendingUp
        title: "Polling & Predictive Analytics",
        description:
          "Analyze voter sentiment, simulate outcomes, and make data-driven decisions using predictive AI tools.",
      },
      {
        id: "security",
        icon: "map", //Shield
        title: "Data Security & Compliance",
        description:
          "Protect voter information and campaign data with encryption, access control, and GDPR-compliant systems.",
      },
      {
        id: "mobile-engagement",
        icon: "map", //Smartphone
        title: "Mobile Engagement Platforms",
        description:
          "Empower voters with real-time updates, event notifications, and localized campaign content on the go.",
      },
      {
        id: "collaboration",
        icon: "map", //Users
        title: "Volunteer Collaboration Tools",
        description:
          "Coordinate activities, assign tasks, and track volunteer performance with team-based management modules.",
      },
    ],
    ctaText: "BUILD YOUR CAMPAIGN PLATFORM",
    onCtaClick: () => {},
  },
  faq : {
  title: "Political Campaigns FAQ",
  items: [
    {
      id: "1",
      question: "What are Political Campaign Management Systems?",
      answer:
        "Political Campaign Management Systems are digital platforms that help campaign teams organize, track, and optimize every aspect of their campaigns. They include voter databases, volunteer coordination tools, fundraising tracking, and communication automation.",
    },
    {
      id: "2",
      question: "How can technology improve voter engagement?",
      answer:
        "Technology enables personalized outreach through emails, SMS, and mobile apps. AI-driven insights help identify voter priorities, track sentiment, and deliver targeted messages, boosting voter participation and engagement.",
    },
    {
      id: "3",
      question: "What features are essential for campaign CRM software?",
      answer:
        "Key features include supporter management, donation tracking, volunteer coordination, event scheduling, and integrated communication channels. Advanced platforms also provide analytics and AI insights to optimize campaign strategies.",
    },
    {
      id: "4",
      question: "How does data analytics influence campaign decisions?",
      answer:
        "Data analytics allows campaign teams to identify key voter demographics, predict turnout, measure message effectiveness, and adjust strategies in real time. Insights from polling and social media data can significantly enhance campaign performance.",
    },
    {
      id: "5",
      question: "Can AI assist in political campaign strategy?",
      answer:
        "Yes. AI helps in predicting voter behavior, segmenting audiences, personalizing outreach, and optimizing advertising spend. It can also automate routine tasks, freeing teams to focus on high-impact campaign activities.",
    },
    {
      id: "6",
      question: "How do digital fundraising platforms support campaigns?",
      answer:
        "Digital fundraising platforms streamline donation collection, track donor history, generate reports, and ensure compliance. They allow secure, multi-channel contributions and help campaign teams manage fundraising efficiently.",
    },
    {
      id: "7",
      question: "Is volunteer management integrated into modern campaign platforms?",
      answer:
        "Absolutely. Volunteer management modules allow teams to recruit, assign tasks, track hours, and communicate effectively with volunteers. This centralization enhances coordination and maximizes volunteer impact.",
    },
    {
      id: "8",
      question: "How secure is campaign data on digital platforms?",
      answer:
        "Modern campaign platforms implement encryption, role-based access, and compliance with data protection laws to safeguard sensitive voter and campaign information from unauthorized access.",
    },
    {
      id: "9",
      question: "Can social media campaigns be automated?",
      answer:
        "Yes. Campaign platforms can schedule posts, target ads, monitor engagement, and generate performance reports. Automation ensures consistent messaging and efficient use of campaign resources.",
    },
    {
      id: "10",
      question: "What is the future of technology in political campaigns?",
      answer:
        "The future includes AI-driven voter insights, predictive analytics, micro-targeted advertising, and fully integrated campaign platforms that connect fundraising, communication, and volunteer management in real time for smarter, data-driven campaigns.",
    },
  ],
},

};
