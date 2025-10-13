import { IndustryConfig } from "@/types/industries";

export const gaming: IndustryConfig = {
  slug: "gaming",
  banner: {
    title: "Level Up Entertainment with",
    highlight: "Next-Gen Gaming & eSports Software Solutions",
    subtitle:
      "Reimagine the future of gaming with immersive, scalable, and AI-powered solutions. From AAA game development to live-stream analytics and esports management, our technologies bring your gaming vision to life with unmatched performance and engagement.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Gaming Solutions",
  },

  techHero: {
    heading: "Hire Expert Game Developers & eSports Engineers",
    description:
      "Our gaming specialists create captivating experiences across platforms — from mobile and console games to VR/AR and cloud gaming. We blend creativity, performance, and data-driven design to help studios and brands thrive in the digital entertainment space.",
    services: [
      {
        id: "game-dev",
        title: "Game Design & Development",
        icon: "Tractor", //Gamepad2
        position: "left",
      },
      {
        id: "multiplayer",
        title: "Multiplayer & Cloud Gaming Systems",
        icon: "Tractor", //Cloud
        position: "left",
      },
      {
        id: "ai-npc",
        title: "AI-Driven NPC & Behavior Simulation",
        icon: "Tractor", //Cpu
        position: "left",
      },
      {
        id: "vr-ar",
        title: "AR / VR Game Experiences",
        icon: "Tractor", //Headphones
        position: "left",
      },
      {
        id: "esports",
        title: "eSports Tournament Management Platforms",
        icon: "Tractor", //Trophy
        position: "right",
      },
      {
        id: "analytics",
        title: "Player Analytics & Engagement Tools",
        icon: "Tractor", //BarChart3
        position: "right",
      },
      {
        id: "blockchain",
        title: "Blockchain & NFT Gaming Platforms",
        icon: "Tractor", //Cube
        position: "right",
      },
      {
        id: "liveops",
        title: "LiveOps & Game Monetization Systems",
        icon: "Tractor", //DollarSign
        position: "right",
      },
    ],
  },

  solutions: {
    mainTitle: "AI, Cloud & Blockchain-Powered Gaming Solutions",
    mainDescription:
      "Empower your gaming ecosystem with advanced tools for performance, analytics, and player engagement. We deliver end-to-end solutions that enable studios, publishers, and esports organizations to innovate, monetize, and scale globally.",
    items: [
      {
        id: "game-engine",
        icon: "Leaf",
        title: "Custom Game Engine Development",
        subtitle: "",
        description:
          "Build high-performance 2D/3D game engines with real-time rendering, physics, and multiplayer capabilities tailored to your needs.",
      },
      {
        id: "live-stream",
        icon: "Leaf",
        title: "Live Streaming & Broadcasting Solutions",
        subtitle: "",
        description:
          "Enhance live gaming experiences with ultra-low latency streaming, audience engagement, and interactive broadcast features.",
      },
      {
        id: "metaverse",
        icon: "Leaf",
        title: "Metaverse & Virtual Worlds",
        subtitle: "",
        description:
          "Create immersive metaverse platforms with social hubs, digital economies, and avatar-based interactions powered by Web3.",
      },
      {
        id: "cloud-gaming",
        icon: "Leaf",
        title: "Cloud Gaming Infrastructure",
        subtitle: "",
        description:
          "Deliver high-end games on-demand with scalable cloud architecture, GPU streaming, and global content distribution.",
      },
      {
        id: "analytics-ai",
        icon: "Leaf",
        title: "AI-Based Game Analytics",
        subtitle: "",
        description:
          "Analyze player behavior, optimize levels, and enhance retention through real-time gameplay data and predictive analytics.",
      },
      {
        id: "nft-economy",
        icon: "Leaf",
        title: "NFT & Digital Asset Economy",
        subtitle: "",
        description:
          "Enable secure in-game economies with blockchain-based assets, NFT marketplaces, and player-to-player trade systems.",
      },
    ],
    linkText: "Get AI-Powered Gaming Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Game Development & eSports Management Solutions",
    subtitle:
      "We design next-gen platforms and tools that enhance development workflows, player engagement, and competitive gaming management.",
    subtitleLink: { text: "gaming software development", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "studio-tools",
        icon: "map",
        title: "Game Studio Management Tools",
        description:
          "Manage projects, assets, and collaboration across global game studios with cloud-based development pipelines.",
        link: { text: "game production systems", url: "#" },
      },
      {
        id: "matchmaking",
        icon: "map",
        title: "Multiplayer Matchmaking & Ranking Systems",
        description:
          "Implement fair matchmaking, ranking algorithms, and anti-cheat systems to ensure balanced and competitive gameplay.",
      },
      {
        id: "integration",
        icon: "map",
        title: "API Integration & Cross-Platform Play",
        description:
          "Enable cross-play between PC, console, and mobile platforms through scalable backend APIs and unified user systems.",
      },
    ],
    bottomFeatures: [
      {
        id: "leaderboards",
        icon: "map",
        title: "Real-Time Leaderboards & Achievements",
        description:
          "Boost player engagement with dynamic leaderboards, reward systems, and achievement tracking integrated with gameplay data.",
      },
      {
        id: "security",
        icon: "map",
        title: "Game Security & Anti-Cheat Systems",
        description:
          "Protect your games with advanced encryption, fraud detection, and real-time cheat prevention mechanisms.",
      },
      {
        id: "monetization",
        icon: "map",
        title: "In-Game Monetization & Ads",
        description:
          "Integrate multiple revenue streams including ads, subscriptions, and digital item purchases within immersive user interfaces.",
      },
      {
        id: "community",
        icon: "map",
        title: "Player Community & Social Hubs",
        description:
          "Foster player loyalty and social engagement through integrated chat, guild systems, and event management features.",
      },
    ],
    ctaText: "BUILD YOUR GAMING PLATFORM TODAY",
    onCtaClick: () => {},
  },
};
