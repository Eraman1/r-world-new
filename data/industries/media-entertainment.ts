import { IndustryConfig } from "@/types/industries";

export const mediaentertainment: IndustryConfig = {
  slug: "media-entertainment",
  banner: {
    title: "Transform Media & Entertainment with",
    highlight: "AI-Powered Content & Streaming Solutions",
    subtitle:
      "Reimagine how audiences experience entertainment with intelligent automation, real-time analytics, and personalized content delivery. From production to distribution, our media solutions empower studios, broadcasters, and OTT platforms to scale and engage globally.",
    image: "/industry/industryMedia&EntertainmentBanner.webp",
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
    deviceImages: {
      laptop: "/industry/industryMedia&EntertainmentBanner.webp",
      tablet: "/industry/industryMedia&EntertainmentBanner.webp",
      mobile: "/industry/industryMedia&EntertainmentBanner.webp",
    },
  },

  solutions: {
    mainTitle: "AI, Cloud & Streaming Solutions for the Media Industry",
    mainDescription:
      "Our advanced media technology solutions harness AI, cloud computing, and predictive analytics to optimize every stage of production, delivery, and viewer engagement. We empower broadcasters, OTT platforms, and content creators to build personalized, high-quality entertainment experiences for global audiences.",
    items: [
      {
        id: "streaming-platforms",
        icon: "Leaf", //Play
        title: "OTT & Video Streaming Platforms",
        subtitle: "",
        description:
          "Build scalable OTT platforms powered by cloud and AI-driven optimization. Deliver smooth playback with adaptive bitrate streaming and CDN acceleration. Gain real-time insights into viewer behavior and content performance. Support multi-device accessibility for seamless user experiences. Ensure global scalability and superior video delivery quality.",
      },
      {
        id: "recommendation-ai",
        icon: "Leaf", //Sparkles
        title: "AI Recommendation & Personalization Engines",
        subtitle: "",
        description:
          "Enhance viewer engagement through intelligent recommendation systems. Analyze user preferences, watch history, and interaction data. Deliver hyper-personalized content suggestions across devices. Boost retention and reduce churn using predictive analytics. Continuously refine algorithms for evolving audience behavior.",
      },
      {
        id: "postproduction-automation",
        icon: "Leaf", //Scissors
        title: "Post-Production & Media Workflow Automation",
        subtitle: "",
        description:
          "Revolutionize post-production with automated AI workflows. Speed up editing, tagging, and rendering using intelligent tools. Detect scenes, objects, and emotions with precision algorithms. Manage large media libraries with metadata-driven organization. Increase production efficiency while maintaining creative control.",
      },
      {
        id: "adtech-monetization",
        icon: "Leaf", //DollarSign
        title: "AdTech & Monetization Platforms",
        subtitle: "",
        description:
          "Monetize your content ecosystem through advanced AdTech solutions. Integrate dynamic ad insertion and real-time audience targeting. Utilize data analytics to optimize ad performance and ROI. Enable programmatic advertising across OTT and mobile platforms. Create personalized ad experiences that maximize engagement.",
      },
      {
        id: "digital-rights",
        icon: "Leaf", //ShieldCheck
        title: "Digital Rights & Royalty Management",
        subtitle: "",
        description:
          "Protect creative assets with next-gen digital rights solutions. Automate royalty tracking and distribution using blockchain. Ensure transparency across multi-platform licensing models. Manage content ownership with smart contracts and encryption. Simplify compliance while safeguarding intellectual property.",
      },
      {
        id: "immersive-experiences",
        icon: "Leaf", //Globe
        title: "AR/VR Entertainment Experiences",
        subtitle: "",
        description:
          "Transform storytelling with immersive AR and VR environments. Build interactive 3D worlds that captivate digital audiences. Integrate real-time rendering for lifelike virtual performances. Connect metaverse experiences with real-world entertainment. Elevate engagement through sensory-rich digital adventures.",
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
    laptopImage:
      "https://i.pinimg.com/1200x/b1/86/9a/b1869a8b2b0501c2ab1effbb4fafb0d0.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/d3/fd/be/d3fdbe54b0f5644b21b26dbb08938629.jpg",
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
        icon: "map", // Shield
        title: "Digital Rights Management (DRM) Security",
        description:
          "Protect valuable media assets with advanced encryption protocols and secure license distribution. Manage digital rights seamlessly across streaming and download platforms. Control content access and prevent unauthorized duplication or piracy. Integrate with multi-device authentication for consistent protection. Ensure full compliance with global copyright and media regulations.",
      },
      {
        id: "ai-editing",
        icon: "map", // Cpu
        title: "AI Video Editing & Metadata Tagging",
        description:
          "Automate post-production with intelligent scene detection and smart cutting tools. Use AI-driven metadata tagging to organize vast media libraries efficiently. Generate highlights, captions, and previews with precision algorithms. Reduce manual editing time and enhance creative workflows. Deliver faster, high-quality outputs optimized for digital platforms.",
      },
      {
        id: "ad-personalization",
        icon: "map", // Target
        title: "Ad Personalization & Revenue Optimization",
        description:
          "Deliver hyper-personalized ad experiences with predictive audience insights. Segment viewers based on behavior, preferences, and engagement data. Use AI to forecast trends and optimize ad inventory for maximum ROI. Integrate cross-platform analytics to measure campaign effectiveness. Increase brand visibility and advertiser satisfaction through automation.",
      },
      {
        id: "immersive-media",
        icon: "map", // Globe
        title: "Immersive & Interactive Media Creation",
        description:
          "Create next-generation experiences using AR, VR, and mixed-reality technologies. Engage audiences through 3D storytelling and interactive environments. Integrate gamification elements to boost participation and retention. Enable real-time rendering for lifelike visuals and performance. Transform traditional content into immersive digital entertainment.",
      },
    ],
    ctaText: "BUILD YOUR MEDIA SOFTWARE SOLUTION",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },

  managementSolutionsTwo: {
    title: "Media & Entertainment Management Software Solutions",
    subtitle:
      "We build innovative media and entertainment platforms that streamline content workflows, enhance audience engagement, and drive monetization through digital transformation.",
    subtitleLink: { text: "media management software", url: "#" },
    laptopImage:
      "https://i.pinimg.com/1200x/91/6b/4b/916b4bd44f429ba9d69e3976d778ae2d.jpg",
    mobileImage: "/images/media-entertainment-mobile.jpg",

    topFeatures: [
      {
        id: "content-distribution",
        icon: "PlaySquare",
        title: "Content Distribution & Streaming Systems",
        description:
          "Deliver high-quality video and audio across multiple platforms. Manage content scheduling, analytics, and monetization in one place.",
        link: { text: "content distribution software", url: "#" },
      },
      {
        id: "audience-engagement",
        icon: "Users",
        title: "Audience Engagement & Analytics Platforms",
        description:
          "Track audience preferences and behavior in real time. Use insights to personalize recommendations and improve retention.",
        link: { text: "audience analytics software", url: "#" },
      },
      {
        id: "rights-management",
        icon: "Lock",
        title: "Digital Rights & Licensing Management",
        description:
          "Protect creative assets with DRM and license tracking tools. Simplify rights distribution and automate royalty calculations.",
        link: { text: "digital rights management software", url: "#" },
      },
      {
        id: "production-automation",
        icon: "Camera",
        title: "Media Production & Workflow Automation",
        description:
          "Automate editing, approvals, and publishing across teams. Enhance collaboration and reduce turnaround time for content delivery.",
        link: { text: "production workflow software", url: "#" },
      },
    ],

    bottomFeatures: [
      {
        id: "asset-management",
        icon: "Folder",
        title: "Media Asset Management Systems",
        description:
          "Store, organize, and retrieve large volumes of content efficiently. Ensure brand consistency with version control and tagging.",
      },
      {
        id: "advertising-platforms",
        icon: "Megaphone",
        title: "Ad Campaign & Revenue Management",
        description:
          "Manage digital ad inventory, targeting, and tracking. Maximize ROI with data-driven campaign optimization tools.",
      },
      {
        id: "event-streaming",
        icon: "Broadcast",
        title: "Live Event & Streaming Platforms",
        description:
          "Broadcast live concerts, shows, and sports events at scale. Offer interactive features like chats, polls, and virtual meetups.",
      },
      {
        id: "analytics-dashboard",
        icon: "BarChart3",
        title: "Real-Time Media Analytics Dashboards",
        description:
          "Visualize audience trends, engagement, and ad performance. Make data-driven decisions with customizable reports.",
      },
    ],

    ctaText: "HIRE MEDIA SOFTWARE DEVELOPERS",
    onCtaClick: "/contact-us",
  },

  faq: {
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
