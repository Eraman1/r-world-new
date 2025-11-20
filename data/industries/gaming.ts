import { IndustryConfig } from "@/types/industries";

export const gaming: IndustryConfig = {
  slug: "gaming",
  banner: {
    title: "Level Up Entertainment with",
    highlight: "Next-Gen Gaming & eSports Software Solutions",
    subtitle:
      "Reimagine the future of gaming with immersive, scalable, and AI-powered solutions. From AAA game development to live-stream analytics and esports management, our technologies bring your gaming vision to life with unmatched performance and engagement.",
    image: "/industry/industryGamingBanner.webp",
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
    deviceImages: {
      laptop: "/industry/industryGamingBanner.webp",
      tablet: "/industry/industryGamingBanner.webp",
      mobile: "/industry/industryGamingBanner.webp",
    },
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
          "Develop next-generation 2D and 3D game engines designed for seamless performance. Integrate real-time rendering, physics, and AI-based logic for dynamic gameplay. Enable multiplayer synchronization and cross-platform compatibility. Customize every module to match your studio’s creative vision. Deliver optimized engines that power immersive and scalable gaming worlds.",
      },
      {
        id: "live-stream",
        icon: "Leaf",
        title: "Live Streaming & Broadcasting Solutions",
        subtitle: "",
        description:
          "Bring gaming experiences to life with ultra-low latency streaming technology. Engage audiences through live chats, reactions, and interactive overlays. Integrate monetization tools such as donations and in-stream ads. Support high-definition broadcasts across platforms and devices. Create a connected environment where gamers and fans interact in real time.",
      },
      {
        id: "metaverse",
        icon: "Leaf",
        title: "Metaverse & Virtual Worlds",
        subtitle: "",
        description:
          "Build social, persistent metaverse spaces with realistic avatars and economies. Enable cross-world interactions through blockchain and decentralized systems. Incorporate NFT-based ownership for digital assets and collectibles. Design collaborative virtual events and marketplaces for global audiences. Transform gaming into immersive social experiences powered by Web3 innovation.",
      },
      {
        id: "cloud-gaming",
        icon: "Leaf",
        title: "Cloud Gaming Infrastructure",
        subtitle: "",
        description:
          "Stream high-performance games directly from the cloud to any device. Utilize GPU-based rendering and adaptive bitrate technology for smooth play. Eliminate downloads with instant access and real-time updates. Scale infrastructure seamlessly to handle millions of concurrent players. Deliver consistent, low-latency gameplay across regions and networks.",
      },
      {
        id: "analytics-ai",
        icon: "Leaf",
        title: "AI-Based Game Analytics",
        subtitle: "",
        description:
          "Leverage artificial intelligence to decode complex player behaviors. Identify engagement trends and predict churn using advanced data models. Personalize experiences by adapting levels and difficulty dynamically. Visualize insights through dashboards for informed decision-making. Empower developers to continuously refine and evolve gameplay mechanics.",
      },
      {
        id: "nft-economy",
        icon: "Leaf",
        title: "NFT & Digital Asset Economy",
        subtitle: "",
        description:
          "Enable blockchain-secured in-game economies with unique digital ownership. Create NFT marketplaces for trading skins, collectibles, and rare assets. Facilitate player-to-player transactions with transparent smart contracts. Integrate tokenized rewards to boost community participation and loyalty. Build sustainable virtual economies that evolve with your gaming ecosystem.",
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
    laptopImage:
      "https://i.pinimg.com/1200x/85/2d/0a/852d0afcdbfdd09ab5bc31cc358c3162.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/1c/62/86/1c628630545671a69c8155284132f498.jpg",
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
          "Enhance player motivation with dynamic leaderboards that update instantly. " +
          "Track achievements and reward milestones as players progress through games. " +
          "Offer exclusive badges and tiered ranking systems to build competition. " +
          "Integrate with in-game data analytics for personalized recognition. " +
          "Drive consistent engagement and retention across your gaming ecosystem.",
      },
      {
        id: "security",
        icon: "map",
        title: "Game Security & Anti-Cheat Systems",
        description:
          "Safeguard your platform with next-gen encryption and authentication layers. " +
          "Detect fraud, bots, and exploit attempts through real-time monitoring. " +
          "Automate player verification and fair play audits for all game sessions. " +
          "Integrate blockchain-based validation to secure transactions and assets. " +
          "Ensure trust, compliance, and integrity across the entire gaming network.",
      },
      {
        id: "monetization",
        icon: "map",
        title: "In-Game Monetization & Ads",
        description:
          "Unlock new revenue streams through immersive ad integrations and offers. " +
          "Enable smooth in-app purchases and digital wallet transactions globally. " +
          "Provide tiered subscriptions, rewards, and in-game currency systems. " +
          "Use data insights to target ads and personalize user experiences. " +
          "Maximize profitability while maintaining an enjoyable player experience.",
      },
      {
        id: "community",
        icon: "map",
        title: "Player Community & Social Hubs",
        description:
          "Build thriving player communities with real-time chat and social features. " +
          "Host events, tournaments, and challenges to strengthen player bonds. " +
          "Create group and guild systems to enhance collaborative gameplay. " +
          "Provide user-generated content hubs and leader interaction tools. " +
          "Boost retention through communication, teamwork, and shared experiences.",
      },
    ],
    ctaText: "BUILD YOUR GAMING PLATFORM TODAY",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },

  managementSolutionsTwo: {
    title: "Gaming Management Software Solutions",
    subtitle:
      "Our gaming software developers build innovative platforms to manage gameplay, enhance engagement, and maximize revenue across digital gaming ecosystems.",
    subtitleLink: { text: "gaming management systems", url: "#" },
    laptopImage:
      "https://i.pinimg.com/736x/e1/a0/cc/e1a0cc43be1c401cfe2a01dd6ebd72f3.jpg",
    mobileImage: "/images/gaming-management-mobile.jpg",

    topFeatures: [
      {
        id: "game-lifecycle",
        icon: "map",
        title: "Game Lifecycle & Performance Analytics",
        description:
          "Track game performance, player sessions, and engagement in real time. Use analytics to optimize gameplay balance and retention.",
        link: { text: "game analytics software", url: "#" },
      },
      {
        id: "player-engagement",
        icon: "map",
        title: "Player Engagement & Reward Platforms",
        description:
          "Create loyalty systems and achievement tracking tools. Reward player milestones to boost motivation and replay value.",
        link: { text: "player engagement systems", url: "#" },
      },
      {
        id: "payment-systems",
        icon: "map",
        title: "In-Game Payment & Wallet Management",
        description:
          "Enable secure in-game purchases and virtual wallet systems. Support multiple currencies and real-time transaction monitoring.",
        link: { text: "gaming payment gateways", url: "#" },
      },
      {
        id: "compliance-security",
        icon: "map",
        title: "Gaming Security & Compliance Systems",
        description:
          "Protect player data and ensure fair play through secure frameworks. Automate KYC and regulatory compliance verification.",
        link: { text: "gaming compliance tools", url: "#" },
      },
    ],

    bottomFeatures: [
      {
        id: "game-design",
        icon: "map",
        title: "Custom Game Design & Development",
        description:
          "Build immersive games across genres like sports, fantasy, or casino. Deliver cross-platform experiences with stunning visuals.",
      },
      {
        id: "live-operations",
        icon: "map",
        title: "Live Game Operations & Monitoring",
        description:
          "Monitor server performance, latency, and live gameplay events. Detect issues instantly and ensure seamless player experiences.",
      },
      {
        id: "reward-systems",
        icon: "map",
        title: "Dynamic Reward & Progression Systems",
        description:
          "Design scalable reward mechanics and progression models. Keep players engaged with achievements and evolving challenges.",
      },
      {
        id: "admin-dashboard",
        icon: "map",
        title: "Game Management & Admin Dashboards",
        description:
          "Manage players, servers, and payments in one interface. Gain real-time insights with reports and control panel access.",
      },
    ],

    ctaText: "GET GAMING SOFTWARE DEVELOPERS",
    onCtaClick: "/contact-us",
  },

  faq: {
    title: "Gaming Industry FAQ",
    items: [
      {
        id: "1",
        question: "What types of games can be developed professionally?",
        answer:
          "Professional game development covers various genres including action, adventure, RPG, simulation, sports, puzzle, and casual games. Each genre has unique design, mechanics, and technical requirements that cater to specific audiences.",
      },
      {
        id: "2",
        question: "Which platforms can games be launched on?",
        answer:
          "Games can be developed for multiple platforms such as PC, consoles (PlayStation, Xbox, Nintendo), mobile devices (iOS and Android), and cloud-based streaming services. Cross-platform development ensures wider audience reach.",
      },
      {
        id: "3",
        question: "How does AI enhance modern gaming experiences?",
        answer:
          "AI in gaming is used to create smarter NPCs, dynamic storylines, and personalized gameplay experiences. It can also optimize performance, generate content procedurally, and analyze player behavior for targeted in-game rewards or challenges.",
      },
      {
        id: "4",
        question: "What role does graphics and animation play in games?",
        answer:
          "High-quality graphics and smooth animation are crucial for immersion and player engagement. 2D and 3D animation bring characters and environments to life, while effects like particle systems and shaders enhance realism and visual appeal.",
      },
      {
        id: "5",
        question: "Can online multiplayer games support large-scale players?",
        answer:
          "Yes, with proper network architecture and cloud infrastructure, online multiplayer games can support thousands of concurrent players. Technologies like server clustering, load balancing, and real-time synchronization are essential for smooth gameplay.",
      },
      {
        id: "6",
        question: "How do in-game monetization strategies work?",
        answer:
          "Monetization strategies include in-app purchases, subscriptions, ad placements, battle passes, and virtual goods. Proper balance is key to ensure revenue without compromising player satisfaction or game integrity.",
      },
      {
        id: "7",
        question: "What is the role of game testing and QA?",
        answer:
          "Game testing ensures functionality, stability, and performance across devices and platforms. QA identifies bugs, glitches, and gameplay issues, ensuring a smooth and enjoyable experience for players before launch.",
      },
      {
        id: "8",
        question: "How can esports be integrated into gaming platforms?",
        answer:
          "Esports integration involves competitive multiplayer modes, leaderboards, tournament management, streaming support, and community engagement tools. It enhances player retention and generates revenue through sponsorships and events.",
      },
      {
        id: "9",
        question: "What trends are shaping the future of gaming?",
        answer:
          "The gaming industry is evolving with cloud gaming, VR/AR experiences, AI-driven content, blockchain-based assets, and cross-platform multiplayer. Immersive and interactive experiences are increasingly shaping player expectations.",
      },
      {
        id: "10",
        question: "How important is community management in games?",
        answer:
          "Community management is essential to maintain player engagement, resolve issues, gather feedback, and foster a loyal player base. Active communities contribute to long-term game success and brand reputation.",
      },
    ],
  },
};
