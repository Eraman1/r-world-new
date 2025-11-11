import { ServiceConfig } from "./services";

export const softwareModernization: ServiceConfig = {
  slug: "software-modernization",
  banner: {
    title: "Transform Legacy Systems with",
    highlight: "Modern Software Modernization Solutions",
    subtitle:
      "Revitalize outdated software, migrate to modern architectures, and boost performance with our comprehensive software modernization services.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Modernization Services",
  },

  developerDetails: {
    heading: "Legacy to Modern Transformation Experts",
    subheading:
      "We modernize legacy systems with cutting-edge technologies to enhance agility, performance, and scalability for long-term business growth.",
    mainTitle: "Professional Software Modernization Services",
    mainDescription:
      "Our modernization experts re-engineer legacy software into cloud-ready, scalable, and efficient systems. We combine modernization strategies with automation and DevOps practices to help businesses stay future-ready.",
    image: "/images/software-modernization-laptop.png",
    services: [
      {
        id: 1,
        title: "Legacy System Assessment",
        description:
          "Analyze existing software architecture, dependencies, and performance bottlenecks. Identify modernization opportunities and migration challenges. Create a detailed roadmap for modernization success. Prioritize risk mitigation and business continuity.",
        icon: "/icons/legacy-assessment.svg",
      },
      {
        id: 2,
        title: "Cloud Migration",
        description:
          "Migrate on-premise systems to cloud platforms like AWS, Azure, or GCP. Re-architect applications for scalability and resilience. Implement hybrid or multi-cloud strategies. ",
        icon: "/icons/cloud-migration.svg",
      },
      {
        id: 3,
        title: "Application Re-engineering",
        description:
          "Rebuild and modernize outdated applications using modern frameworks and microservices. Optimize performance, maintainability, and security. Ensure compatibility with modern devices and browsers.",
        icon: "/icons/app-reengineering.svg",
      },
    ],
  },

  solutions: {
  mainTitle: "Comprehensive Software Modernization Solutions",
  mainDescription:
    "We provide complete modernization services that transform legacy systems, integrate cloud technologies, and future-proof your business through digital innovation and intelligent automation.",
  linkText: "Get Modernization Solutions",
  linkUrl: "/contact-us",
  items: [
    {
      id: "architecture-modernization",
      icon: "Leaf",
      title: "Architecture Modernization",
      subtitle: "Upgrade Core Foundations",
      description:
        "Redefine legacy architectures to improve scalability and reliability. \nAdopt microservices and cloud-native structures for agility. \nEliminate technical debt and outdated dependencies. \nEnhance flexibility, modularity, and long-term maintenance. \nPrepare your system for future-ready performance demands.",
    },
    {
      id: "ui-ux-modernization",
      icon: "Leaf",
      title: "UI/UX Modernization",
      subtitle: "Enhance User Experience",
      description:
        "Reimagine outdated interfaces with intuitive and modern design. \nDeliver seamless interactions across devices and platforms. \nImprove accessibility, navigation, and usability. \nIntegrate motion design and responsive layouts for engagement. \nCreate delightful digital experiences that users love.",
    },
    {
      id: "cloud-integration",
      icon: "Leaf",
      title: "Cloud Integration",
      subtitle: "Leverage Cloud Scalability",
      description:
        "Migrate applications to secure, scalable cloud infrastructure. \nEnable seamless data synchronization and continuous uptime. \nAdopt DevOps for automation and faster deployment cycles. \nReduce infrastructure complexity and costs. \nUnlock agility, flexibility, and global accessibility.",
    },
    {
      id: "data-modernization",
      icon: "Leaf",
      title: "Data Modernization",
      subtitle: "Empower Insights & Efficiency",
      description:
        "Upgrade legacy databases into high-performance data ecosystems. \nImplement real-time analytics and cloud data pipelines. \nEnsure compliance, accuracy, and governance at every level. \nEnable AI, ML, and predictive intelligence capabilities. \nMake faster, insight-driven business decisions with confidence.",
    },
    {
      id: "api-integration",
      icon: "Leaf",
      title: "API Integration & Automation",
      subtitle: "Streamline Connectivity",
      description:
        "Connect legacy and modern systems through unified APIs. \nAutomate workflows and eliminate repetitive manual tasks. \nFacilitate smooth data flow and real-time communication. \nEnhance interoperability between internal and external platforms. \nAccelerate innovation with connected digital ecosystems.",
    },
    {
      id: "security-upgrade",
      icon: "Leaf",
      title: "Security Upgrade & Compliance",
      subtitle: "Protect Modernized Systems",
      description:
        "Implement multi-layered security across all digital assets. \nEnsure compliance with industry standards like GDPR and ISO. \nProactively detect and mitigate vulnerabilities in real time. \nAdopt encryption, monitoring, and identity controls. \nSafeguard business continuity with advanced cyber resilience.",
    },
  ],
},


  managementSolutions: {
    title: "Modernization Management & Tracking Tools",
    subtitle:
      "Our modernization management platforms simplify planning, migration, and performance tracking for seamless digital transformation.",
    subtitleLink: { text: "modernization management software", url: "#" },
    laptopImage: "/images/modernization-management.jpg",
    mobileImage: "/images/modernization-management-mobile.jpg",
    topFeatures: [
      {
        id: "migration-tracking",
        icon: "map",
        title: "Migration Progress Tracking",
        description:
          "Monitor cloud migration and system upgrades in real-time. Track milestones, resources, and dependencies. Ensure minimal downtime. Optimize resource allocation. Deliver projects within timelines and budgets.",
      },
      {
        id: "collaboration-suite",
        icon: "map",
        title: "Team Collaboration Suite",
        description:
          "Enable smooth communication among developers, IT admins, and managers. Share progress updates and reports instantly. Coordinate modernization sprints effectively. Enhance visibility and accountability. Reduce bottlenecks and delivery risks.",
      },
      {
        id: "performance-analytics",
        icon: "map",
        title: "Performance Analytics & Insights",
        description:
          "Measure modernization impact with real-time analytics. Track KPIs for cost, speed, and performance. Identify optimization opportunities. Generate executive-level reports. Ensure continuous modernization improvement.",
      },
    ],
    ctaText: "Get Modernization Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ - Software Modernization Services",
    items: [
      {
        id: "1",
        question: "What is software modernization?",
        answer:
          "Software modernization involves upgrading outdated systems using modern technologies like cloud, APIs, and microservices to improve performance, scalability, and security.",
      },
      {
        id: "2",
        question: "Can you migrate legacy systems to the cloud?",
        answer:
          "Yes, we specialize in cloud migration services to AWS, Azure, and GCP, ensuring minimal downtime and maximum data integrity during transition.",
      },
      {
        id: "3",
        question: "Will modernization affect my ongoing operations?",
        answer:
          "No, our experts follow a phased modernization strategy ensuring zero downtime and smooth business continuity throughout the process.",
      },
      {
        id: "4",
        question: "Do you modernize both frontend and backend systems?",
        answer:
          "Absolutely. We re-engineer both frontend interfaces and backend architectures for complete modernization and long-term scalability.",
      },
      {
        id: "5",
        question: "How long does software modernization take?",
        answer:
          "The duration depends on system size, complexity, and migration goals, but we ensure efficient delivery with agile and incremental approaches.",
      },
      {
        id: "6",
        question: "Can you integrate old systems with new technologies?",
        answer:
          "Yes, we ensure seamless API-based integration between legacy software and modern platforms to enhance interoperability and extend lifespan.",
      },
      {
        id: "7",
        question: "Do you provide post-modernization support?",
        answer:
          "Yes, we offer continuous monitoring, optimization, and updates to maintain performance and security after modernization completion.",
      },
    ],
  },
};
