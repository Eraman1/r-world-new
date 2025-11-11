import { ServiceConfig } from "./services";

export const systemIntegration: ServiceConfig = {
  slug: "system-integration",
  banner: {
    title: "Unify Your Business Operations with",
    highlight: "Seamless System Integration Solutions",
    subtitle:
      "Connect your software, databases, and enterprise systems for real-time data flow, automation, and improved efficiency. Our integration experts ensure smooth collaboration across all platforms.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Integration Solutions",
  },

  developerDetails: {
    heading: "Expert System Integration Engineers",
    subheading:
      "We specialize in integrating diverse software systems, APIs, and cloud environments to create unified and efficient business ecosystems.",
    mainTitle: "Professional System Integration Services",
    mainDescription:
      "Our experts help businesses eliminate data silos and streamline operations through powerful system integrations. From API development to enterprise middleware, we ensure secure, scalable, and high-performing integration solutions.",
    image: "/images/system-integration-laptop.png",
    services: [
      {
        id: 1,
        title: "API Integration Services",
        description:
          "Develop and integrate RESTful and SOAP APIs for seamless data exchange. Connect internal and third-party systems efficiently. Ensure secure authentication and data consistency. Automate workflows across platforms",
        icon: "/icons/api.svg",
      },
      {
        id: 2,
        title: "Cloud Integration Solutions",
        description:
          "Integrate on-premise software with cloud platforms like AWS, Azure, and Google Cloud. Enable real-time data access and synchronization. Improve business continuity with hybrid architectures.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 3,
        title: "Enterprise System Integration",
        description:
          "Connect ERP, CRM, HRM, and accounting systems for unified business operations. Ensure data accuracy and centralized management. Automate complex workflows across departments.",
        icon: "/icons/enterprise.svg",
      },
    ],
  },

  solutions: {
  mainTitle: "Comprehensive System Integration Solutions",
  mainDescription:
    "We deliver end-to-end integration services to unify your applications, software, and data ecosystems. Our goal is to streamline connectivity, automation, and performance across your entire IT infrastructure.",
  linkText: "Get Integration Services",
  linkUrl: "/contact-us",

  items: [
    {
      id: "api-integration",
      icon: "Leaf",
      title: "API Integration",
      subtitle: "Streamline Data Communication",
      description:
        "Connect web, mobile, and enterprise applications through secure, scalable APIs. \nEnable instant data synchronization across platforms and services. \nReduce manual work with automated workflows and intelligent mapping. \nEnhance interoperability between systems for smooth operations. \nDeliver seamless, real-time experiences to users and teams.",
    },
    {
      id: "cloud-integration",
      icon: "Leaf",
      title: "Cloud Integration",
      subtitle: "Connect Cloud & On-Premise Systems",
      description:
        "Integrate on-premise systems with leading cloud platforms like AWS, Azure, or Google Cloud. \nEnable smooth data flow and accessibility from any location. \nEnsure strong encryption and secure user authentication. \nSupport hybrid and multi-cloud environments for flexibility. \nAchieve improved scalability, uptime, and performance across workloads.",
    },
    {
      id: "data-integration",
      icon: "Leaf",
      title: "Data Integration",
      subtitle: "Unify and Optimize Your Data",
      description:
        "Combine structured and unstructured data from multiple sources into one unified view. \nEnsure accuracy, consistency, and accessibility across departments. \nAutomate ETL pipelines for faster insights and analytics. \nEmpower teams with real-time dashboards and reporting tools. \nMake smarter business decisions with centralized data management.",
    },
    {
      id: "enterprise-integration",
      icon: "Leaf",
      title: "Enterprise Application Integration",
      subtitle: "Unify Business Processes",
      description:
        "Connect ERP, CRM, HRM, and SCM applications for streamlined workflows. \nFacilitate data exchange and collaboration between business units. \nAutomate key processes to eliminate redundancy and delays. \nEnsure compatibility between legacy and modern systems. \nDrive productivity through end-to-end digital connectivity.",
    },
    {
      id: "legacy-integration",
      icon: "Leaf",
      title: "Legacy System Integration",
      subtitle: "Modernize Existing Infrastructure",
      description:
        "Bridge outdated software with modern applications for better performance. \nPreserve valuable data and existing functionality without disruption. \nEliminate silos to enhance data flow and business agility. \nImplement secure connectors for old and new technologies. \nSupport long-term scalability and digital modernization goals.",
    },
    {
      id: "middleware-integration",
      icon: "Leaf",
      title: "Middleware Development",
      subtitle: "Enable Smooth System Communication",
      description:
        "Develop powerful middleware solutions for efficient data exchange. \nConnect disparate systems to work together seamlessly. \nEnsure reliable communication with minimal latency and downtime. \nSimplify integration complexity through modular architecture. \nMaintain flexible, scalable systems that evolve with business needs.",
    },
  ],
},


  managementSolutions: {
    title: "Integration Management & Monitoring Tools",
    subtitle:
      "Monitor, manage, and optimize your integrated systems with real-time tracking, analytics, and performance monitoring.",
    subtitleLink: { text: "system integration platform", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "integration-tracking",
        icon: "map",
        title: "Integration Monitoring & Tracking",
        description:
          "Track system integrations in real-time. Identify data flow bottlenecks and sync failures. Optimize connections for better performance. Monitor system uptime and alerts. Ensure consistent data exchange across environments.",
      },
      {
        id: "workflow-automation",
        icon: "map",
        title: "Workflow Automation",
        description:
          "Automate routine integration tasks to reduce manual intervention. Sync business processes across apps and databases. Simplify multi-platform operations. Boost efficiency and speed through intelligent workflow design. Ensure consistency and reliability.",
      },
      {
        id: "analytics-reporting",
        icon: "map",
        title: "Integration Analytics & Reporting",
        description:
          "Generate insights from integrated system performance. Visualize data transfers and workflow efficiency. Identify optimization opportunities. Monitor API usage and system health. Enhance decision-making with actionable analytics.",
      },
    ],
    ctaText: "Get Integration Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ - System Integration Services",
    items: [
      {
        id: "1",
        question: "What systems can you integrate?",
        answer:
          "We integrate ERP, CRM, HRM, accounting, and third-party systems with cloud or on-premise software for unified workflows and real-time communication.",
      },
      {
        id: "2",
        question: "Do you provide API development for integration?",
        answer:
          "Yes, we design and implement secure RESTful and SOAP APIs for seamless integration between different applications and services.",
      },
      {
        id: "3",
        question: "Can you integrate legacy systems with modern platforms?",
        answer:
          "Absolutely. We specialize in connecting legacy infrastructure with modern software using middleware, APIs, and custom connectors.",
      },
      {
        id: "4",
        question: "Do you offer real-time data synchronization?",
        answer:
          "Yes, our integration solutions support real-time and batch data synchronization to ensure your systems always have up-to-date information.",
      },
      {
        id: "5",
        question: "Is the integration process secure?",
        answer:
          "Yes, we implement data encryption, authentication, and role-based access controls to ensure your data remains safe during and after integration.",
      },
      {
        id: "6",
        question: "Do you provide post-integration support?",
        answer:
          "Yes, we offer monitoring, troubleshooting, and maintenance services to ensure your integrated systems perform optimally over time.",
      },
      {
        id: "7",
        question: "Can you integrate cloud and on-premise systems together?",
        answer:
          "Yes, we specialize in hybrid integrations that connect cloud applications with local infrastructure for improved flexibility and performance.",
      },
    ],
  },
};
