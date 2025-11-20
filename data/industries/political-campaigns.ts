import { IndustryConfig } from "@/types/industries";

export const politicalcampaigns: IndustryConfig = {
  slug: "politicalcampaigns",
  banner: {
    title: "Empower Political Movements with",
    highlight: "AI-Driven Campaign & Voter Engagement Platforms",
    subtitle:
      "Leverage technology to manage campaigns, analyze voter data, automate outreach, and boost engagement. From real-time analytics to digital fundraising and volunteer coordination, we build tools that power winning strategies.",
    image: "/industry/industryPoliticalBanner.webp",
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
    deviceImages: {
      laptop: "/industry/industryPoliticalBanner.webp",
      tablet: "/industry/industryPoliticalBanner.webp",
      mobile: "/industry/industryPoliticalBanner.webp",
    },
  },

  solutions: {
    mainTitle: "Smart Digital Solutions for Political Campaigns",
    mainDescription:
      "We design secure, data-driven, and scalable systems for modern campaigns. Manage supporters, track donations, analyze voter sentiment, and automate communications to achieve maximum outreach efficiency.",
    items: [
      {
        id: "data-intelligence",
        icon: "Leaf", // Database
        title: "Voter Data Intelligence",
        subtitle: "",
        description:
          "Leverage advanced analytics to understand voter demographics, behavior, and preferences. Collect and segment data for precise voter targeting and messaging. Monitor shifting sentiments and trends across regions. Generate insights that guide smarter campaign decisions. Empower your team with real-time, actionable intelligence.",
      },
      {
        id: "campaign-crm",
        icon: "Leaf", // Users
        title: "Campaign CRM Systems",
        subtitle: "",
        description:
          "Centralize all campaign data within an integrated CRM dashboard. Manage volunteers, supporters, and event logistics seamlessly. Automate communication workflows and follow-ups efficiently. Analyze performance metrics for improved campaign operations. Enhance collaboration across teams for smooth coordination.",
      },
      {
        id: "donation-system",
        icon: "Leaf", // DollarSign
        title: "Donation & Fundraising Platforms",
        subtitle: "",
        description:
          "Build secure platforms for multi-channel fundraising campaigns. Accept contributions via cards, UPI, or online transfers safely. Provide transparency with detailed donor reports and analytics. Track donations in real time with automated notifications. Inspire trust and increase recurring donor participation.",
      },
      {
        id: "media-monitoring",
        icon: "Leaf", // Eye
        title: "Social Media Monitoring",
        subtitle: "",
        description:
          "Track conversations and sentiment across all social platforms. Identify trending topics and potential reputation risks early. Compare your campaign’s digital presence with competitors. Measure engagement and audience response effectively. Make data-driven adjustments to improve online visibility.",
      },
      {
        id: "geo-campaigns",
        icon: "Leaf", // Map
        title: "Geo-Targeted Campaign Tools",
        subtitle: "",
        description:
          "Plan and execute region-specific political campaigns intelligently. Use geographic data to focus on high-potential voter clusters. Analyze turnout rates and response metrics for each area. Coordinate events, rallies, and door-to-door programs smartly. Maximize campaign impact with precise local targeting.",
      },
      {
        id: "ai-outreach",
        icon: "Leaf", // Cpu
        title: "AI-Powered Outreach Automation",
        subtitle: "",
        description:
          "Automate voter engagement through intelligent AI-driven tools. Send personalized messages and updates across multiple channels. Segment voters by interest, region, or past engagement patterns. Analyze communication performance using predictive analytics. Boost reach and influence with smart, scalable outreach systems.",
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
    laptopImage:
      "https://i.pinimg.com/736x/3d/d0/6d/3dd06dde47f53867af0438e74f9c4ddf.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/1e/22/6f/1e226fc7ff08e73019998a2167380765.jpg",
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
        icon: "map", // TrendingUp
        title: "Polling & Predictive Analytics",
        description:
          "Gain deeper voter insights with real-time polling dashboards. Track sentiment shifts and regional trends effectively. Simulate outcomes using AI-powered prediction models. Identify key influencers driving voting behaviors. Make smarter campaign decisions based on accurate data.",
      },
      {
        id: "security",
        icon: "map", // Shield
        title: "Data Security & Compliance",
        description:
          "Safeguard all sensitive voter and campaign data end-to-end. Use strong encryption and role-based access controls. Ensure compliance with GDPR and election data laws. Prevent unauthorized data access or manipulation. Build trust through transparent data protection systems.",
      },
      {
        id: "mobile-engagement",
        icon: "map", // Smartphone
        title: "Mobile Engagement Platforms",
        description:
          "Engage voters anytime through personalized mobile channels. Send live updates, alerts, and event notifications instantly. Deliver local content based on voter demographics. Simplify participation with mobile-friendly interfaces. Strengthen community connections and campaign awareness.",
      },
      {
        id: "collaboration",
        icon: "map", // Users
        title: "Volunteer Collaboration Tools",
        description:
          "Empower campaign teams with real-time coordination tools. Assign roles, schedule events, and manage field operations. Track progress through transparent reporting modules. Encourage teamwork with shared communication spaces. Boost volunteer efficiency and campaign productivity.",
      },
    ],
    ctaText: "BUILD YOUR CAMPAIGN PLATFORM",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },
  managementSolutionsTwo: {
    title: "Political Campaign Management Software Solutions",
    subtitle:
      "Our political campaign software developers build advanced tools to streamline voter outreach, campaign analytics, and strategic decision-making for winning elections.",
    subtitleLink: { text: "political campaign management software", url: "#" },
    laptopImage:
      "https://i.pinimg.com/736x/02/61/96/026196c12bf94ebae9533c5d06e20bfe.jpg",
    mobileImage: "/images/political-campaign-mobile.jpg",

    topFeatures: [
      {
        id: "voter-analytics",
        icon: "BarChart3",
        title: "Voter Analytics & Engagement Systems",
        description:
          "Analyze voter demographics and behavior in real time. Enhance engagement through targeted outreach and predictive insights.",
        link: { text: "voter analytics software", url: "#" },
      },
      {
        id: "donation-platforms",
        icon: "Coins",
        title: "Donation & Fundraising Platforms",
        description:
          "Manage secure online donations and fundraising campaigns. Track contributions, compliance, and donor engagement efficiently.",
        link: { text: "political fundraising platforms", url: "#" },
      },
      {
        id: "volunteer-management",
        icon: "Users",
        title: "Volunteer & Event Management Tools",
        description:
          "Coordinate volunteers, assign tasks, and track participation. Organize rallies, campaigns, and community events effectively.",
        link: { text: "volunteer management software", url: "#" },
      },
      {
        id: "communication-suite",
        icon: "MessageSquare",
        title: "Campaign Communication & Outreach Suite",
        description:
          "Automate emails, SMS, and social media messages. Keep supporters informed and motivated with real-time campaign updates.",
        link: { text: "campaign communication tools", url: "#" },
      },
    ],

    bottomFeatures: [
      {
        id: "polling-tools",
        icon: "PieChart",
        title: "Polling & Predictive Analysis Tools",
        description:
          "Conduct opinion polls and sentiment analysis instantly. Predict voter trends to refine campaign strategies smartly.",
      },
      {
        id: "data-security",
        icon: "Shield",
        title: "Data Security & Compliance Systems",
        description:
          "Protect voter and donor information with encryption. Ensure full compliance with election and data protection laws.",
      },
      {
        id: "dashboard-reporting",
        icon: "LayoutDashboard",
        title: "Real-Time Dashboard & Performance Tracking",
        description:
          "Monitor campaign KPIs, funding, and voter engagement live. Get actionable insights through interactive visual dashboards.",
      },
      {
        id: "strategy-automation",
        icon: "Cpu",
        title: "Campaign Strategy & Automation Systems",
        description:
          "Automate repetitive workflows and optimize team efforts. Focus resources on impactful voter and media outreach.",
      },
    ],

    ctaText: "GET POLITICAL CAMPAIGN DEVELOPERS",
    onCtaClick: "/contact-us",
  },

  faq: {
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
        question:
          "Is volunteer management integrated into modern campaign platforms?",
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
