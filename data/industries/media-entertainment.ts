import { IndustryConfig } from "@/types/industries";

export const mediaentertainment: IndustryConfig = {
  slug: "media-entertainment",
  banner: {
    title: "Transform Media & Entertainment with",
    highlight: "AI-Powered Content & Streaming Solutions",
    subtitle:
      "Reimagine how audiences experience entertainment with intelligent automation, real-time analytics, and personalized content delivery. From production to distribution, our media solutions empower studios, broadcasters, and OTT platforms to scale and engage globally.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get MediaTech Solutions",
  },

  techHero: {
    heading: "Hire Expert Media & Entertainment Software Developers",
    description:
      "We build digital media platforms powered by AI, cloud, and automation. From content recommendation engines to streaming analytics and digital rights management, our developers help you enhance engagement, monetize smarter, and scale faster.",
    services: [
      {
        id: "content-management",
        title: "AI-Driven Content Management Systems (CMS)",
        icon: "Tractor", //FileText
        position: "left",
      },
      {
        id: "video-streaming",
        title: "Live & On-Demand Streaming Platforms",
        icon: "Tractor", //PlayCircle
        position: "left",
      },
      {
        id: "personalization",
        title: "AI-Based Content Recommendation Engines",
        icon: "Tractor", //Sparkles
        position: "left",
      },
      {
        id: "post-production",
        title: "Automated Video Editing & Post-Production Tools",
        icon: "Tractor", //Scissors
        position: "left",
      },
      {
        id: "analytics",
        title: "Audience Analytics & Engagement Insights",
        icon: "Tractor", //BarChart
        position: "right",
      },
      {
        id: "rights-management",
        title: "Digital Rights & Royalty Management Systems",
        icon: "Tractor", //Shield
        position: "right",
      },
      {
        id: "monetization",
        title: "AdTech & Monetization Platforms",
        icon: "Tractor", //DollarSign
        position: "right",
      },
      {
        id: "immersive-media",
        title: "AR/VR & Immersive Experience Development",
        icon: "Tractor", //Globe
        position: "right",
      },
    ],
  },

  solutions: {
    mainTitle: "AI, Cloud & Streaming Solutions for the Media Industry",
    mainDescription:
      "Our advanced media solutions use AI, cloud, and data analytics to optimize every stage of content production and distribution. We enable OTT, broadcasters, and creators to deliver hyper-personalized, high-quality experiences to global audiences.",
    items: [
      {
        id: "streaming-platforms",
        icon: "Leaf", //Play
        title: "OTT & Video Streaming Platforms",
        subtitle: "",
        description:
          "Develop scalable streaming systems with adaptive bitrate delivery, CDN integration, and real-time analytics for seamless viewing.",
      },
      {
        id: "recommendation-ai",
        icon: "Leaf", //Sparkles
        title: "AI Recommendation & Personalization Engines",
        subtitle: "",
        description:
          "Use AI and machine learning to recommend content based on user behavior, preferences, and engagement trends.",
      },
      {
        id: "postproduction-automation",
        icon: "Leaf", //Scissors
        title: "Post-Production & Media Workflow Automation",
        subtitle: "",
        description:
          "Accelerate editing, tagging, and rendering workflows using AI tools for automated scene detection and metadata generation.",
      },
      {
        id: "adtech-monetization",
        icon: "Leaf", //DollarSign
        title: "AdTech & Monetization Platforms",
        subtitle: "",
        description:
          "Maximize ad revenue through targeted programmatic advertising, dynamic ad insertion, and audience segmentation tools.",
      },
      {
        id: "digital-rights",
        icon: "Leaf", //ShieldCheck
        title: "Digital Rights & Royalty Management",
        subtitle: "",
        description:
          "Ensure copyright protection and automate royalty distribution using blockchain-based digital rights systems.",
      },
      {
        id: "immersive-experiences",
        icon: "Leaf", //Globe
        title: "AR/VR Entertainment Experiences",
        subtitle: "",
        description:
          "Deliver immersive entertainment through virtual and augmented reality content, interactive storytelling, and metaverse integration.",
      },
    ],
    linkText: "Get AI-Powered Media Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Digital Media Management Software Solutions",
    subtitle:
      "We help media enterprises automate workflows, manage digital assets, and deliver real-time analytics that drive engagement and revenue growth.",
    subtitleLink: { text: "media management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "content-lifecycle",
        icon: "map", //Folder
        title: "Content Lifecycle & Workflow Automation",
        description:
          "Automate media ingestion, editing, approval, and publishing workflows across multiple platforms and formats.",
        link: { text: "AI content workflow automation", url: "#" },
      },
      {
        id: "analytics-dashboard",
        icon: "map", //BarChart3
        title: "Audience Insights & Performance Dashboards",
        description:
          "Track audience demographics, viewing patterns, and engagement metrics through real-time analytics dashboards.",
      },
      {
        id: "cloud-storage",
        icon: "map", //Cloud
        title: "Cloud Media Storage & Distribution",
        description:
          "Store and distribute high-resolution media content securely via cloud storage and global delivery networks.",
      },
    ],
    bottomFeatures: [
      {
        id: "drm-security",
        icon: "map", //Shield
        title: "Digital Rights Management (DRM) Security",
        description:
          "Protect video and music content with encryption, license management, and access control systems.",
      },
      {
        id: "ai-editing",
        icon: "map", //Cpu
        title: "AI Video Editing & Metadata Tagging",
        description:
          "Leverage AI to automate editing, scene tagging, and content recommendations for faster production workflows.",
      },
      {
        id: "ad-personalization",
        icon: "map", //Target
        title: "Ad Personalization & Revenue Optimization",
        description:
          "Deliver hyper-targeted ad experiences using audience segmentation, behavioral analytics, and predictive modeling.",
      },
      {
        id: "immersive-media",
        icon: "map", //Globe
        title: "Immersive & Interactive Media Creation",
        description:
          "Develop AR/VR-based experiences and gamified content for next-generation audience engagement.",
      },
    ],
    ctaText: "BUILD YOUR MEDIA SOFTWARE SOLUTION",
    onCtaClick: () => {},
  },
  faq : {
  title: "Media & Entertainment FAQ",
  items: [
    {
      id: "1",
      question: "What is digital media in the entertainment industry?",
      answer:
        "Digital media refers to content delivered through online platforms, streaming services, and digital channels. It includes videos, music, games, and interactive content designed to engage audiences across multiple devices.",
    },
    {
      id: "2",
      question: "How do streaming platforms impact traditional media?",
      answer:
        "Streaming platforms allow instant access to movies, shows, and music on-demand, reducing reliance on traditional TV, radio, and cinema. They also enable personalized recommendations and global distribution at scale.",
    },
    {
      id: "3",
      question: "What role does AI play in media and entertainment?",
      answer:
        "AI is used for content recommendations, automated editing, predictive analytics, and audience engagement. It enhances production efficiency, personalization, and helps creators make data-driven decisions.",
    },
    {
      id: "4",
      question: "Can media platforms track audience engagement?",
      answer:
        "Yes. Media platforms use analytics tools to monitor views, likes, shares, and watch time. This data helps content creators optimize content, target the right audience, and improve overall engagement.",
    },
    {
      id: "5",
      question: "What is immersive media in entertainment?",
      answer:
        "Immersive media includes technologies like Virtual Reality (VR), Augmented Reality (AR), and 360° videos that provide interactive and engaging experiences, making audiences feel part of the story.",
    },
    {
      id: "6",
      question: "How can entertainment companies monetize content online?",
      answer:
        "Companies can monetize via subscriptions, advertisements, pay-per-view, licensing, and merchandising. Digital platforms also allow microtransactions, premium content, and targeted ad campaigns for higher revenue.",
    },
    {
      id: "7",
      question: "What are the latest trends in the media industry?",
      answer:
        "Key trends include streaming-first content, AI-driven content creation, immersive experiences, interactive storytelling, and cross-platform distribution to maximize reach and engagement.",
    },
    {
      id: "8",
      question: "How do media companies ensure content security?",
      answer:
        "Content security is maintained using encryption, DRM (Digital Rights Management), secure cloud storage, and access control. These measures protect intellectual property and prevent piracy.",
    },
    {
      id: "9",
      question: "Can small creators compete in the media space?",
      answer:
        "Absolutely. Digital platforms and social media provide global reach with low barriers to entry. With quality content, consistent publishing, and audience engagement strategies, small creators can build significant audiences.",
    },
    {
      id: "10",
      question: "What is the future of media and entertainment?",
      answer:
        "The future is digital-first, personalized, and immersive. AI, VR/AR, interactive content, and multi-platform distribution will continue to transform how audiences consume and interact with media globally.",
    },
  ],
},

};
