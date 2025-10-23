import { SolutionConfig } from "@/types/solutions";

export const Oracle: SolutionConfig = {
  slug: "Oracle",

  banner: {
    title: "Unlock Business Potential with",
    highlight: "Oracle Cloud & Enterprise Solutions",
    subtitle:
      "Drive digital transformation with Oracle’s robust suite of cloud applications, database management, and enterprise resource planning solutions.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Oracle Solutions",
  },

  developerDetails: {
    heading: "Oracle Experts in Cloud, Database & ERP",
    subheading:
      "Our team specializes in implementing, customizing, and optimizing Oracle solutions to improve efficiency, security, and scalability across your organization.",
    mainTitle: "Comprehensive Oracle Services",
    mainDescription:
      "We deliver end-to-end Oracle services including cloud implementation, database management, ERP automation, and analytics. Our experts help businesses leverage Oracle tools to improve productivity, reduce costs, and drive innovation.",
    image: "/images/oracle-laptop.png",
    services: [
      {
        id: 1,
        title: "Oracle Cloud Implementation",
        description:
          "We help businesses migrate to Oracle Cloud Infrastructure and SaaS solutions, ensuring seamless integration and optimized performance.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 2,
        title: "Database Management & Optimization",
        description:
          "Our team manages Oracle databases with high availability, security, and performance tuning for mission-critical applications.",
        icon: "/icons/database.svg",
      },
      {
        id: 3,
        title: "ERP & Business Automation",
        description:
          "We implement Oracle ERP solutions to automate finance, HR, supply chain, and procurement processes for greater efficiency.",
        icon: "/icons/settings.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Oracle-Powered Enterprise Solutions",
    mainDescription:
      "We provide end-to-end solutions using Oracle technologies for database management, cloud infrastructure, enterprise resource planning, and advanced analytics to accelerate business growth.",
    items: [
      {
        id: "cloud-infrastructure",
        icon: "Leaf",
        title: "Cloud Infrastructure Services",
        subtitle: "Scalable & Secure Cloud Platforms",
        description:
          "Oracle Cloud Infrastructure enables high-performance computing, storage, and networking to meet your enterprise needs.",
      },
      {
        id: "database-solutions",
        icon: "Leaf",
        title: "Database Management & Optimization",
        subtitle: "High Availability & Security",
        description:
          "We provide Oracle database design, tuning, migration, and backup solutions to ensure data integrity and peak performance.",
      },
      {
        id: "erp-automation",
        icon: "Leaf",
        title: "ERP & Business Process Automation",
        subtitle: "Streamline Operations",
        description:
          "Oracle ERP helps automate financials, HR, procurement, and supply chain management, improving efficiency across departments.",
      },
      {
        id: "analytics-ai",
        icon: "Leaf",
        title: "Analytics & AI Solutions",
        subtitle: "Data-Driven Insights",
        description:
          "We integrate AI and analytics tools with Oracle databases to provide actionable insights and predictive analytics for informed decision-making.",
      },
      {
        id: "integration-solutions",
        icon: "Leaf",
        title: "Integration & Custom Solutions",
        subtitle: "Connect Systems Seamlessly",
        description:
          "Oracle integration platforms help connect disparate systems, automate workflows, and ensure consistent data flow across your enterprise.",
      },
      {
        id: "security-compliance",
        icon: "Leaf",
        title: "Security & Compliance",
        subtitle: "Protect Critical Data",
        description:
          "We implement Oracle security solutions to safeguard your data, ensure regulatory compliance, and protect against cyber threats.",
      },
    ],
    linkText: "Get Oracle Enterprise Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Oracle Enterprise Management Systems",
    subtitle:
      "Our Oracle management solutions provide centralized control over your business operations, assets, and analytics.",
    subtitleLink: { text: "Oracle enterprise management", url: "#" },
    laptopImage: "/images/management-oracle.jpg",
    mobileImage: "/images/management-oracle-mobile.jpg",
    topFeatures: [
      {
        id: "centralized-dashboard",
        icon: "map",
        title: "Centralized Dashboard",
        description:
          "Monitor operations, performance metrics, and KPIs in real-time with Oracle enterprise dashboards.",
      },
      {
        id: "workflow-automation",
        icon: "map",
        title: "Workflow Automation",
        description:
          "Automate repetitive tasks and business processes to increase efficiency and reduce operational costs.",
      },
      {
        id: "integration-tools",
        icon: "map",
        title: "Integration Tools",
        description:
          "Connect Oracle ERP, CRM, and cloud services with other enterprise applications for seamless data flow.",
      },
    ],
    bottomFeatures: [
      {
        id: "analytics-reports",
        icon: "map",
        title: "Analytics & Reporting",
        description:
          "Generate real-time reports and predictive analytics to make informed business decisions quickly.",
      },
      {
        id: "cloud-management",
        icon: "map",
        title: "Cloud & Infrastructure Management",
        description:
          "Manage cloud resources efficiently with Oracle Cloud management solutions for scalability and reliability.",
      },
      {
        id: "security-compliance-bottom",
        icon: "map",
        title: "Enterprise Security & Compliance",
        description:
          "Ensure your data is secure and compliant with industry standards and regulatory requirements.",
      },
      {
        id: "api-support",
        icon: "map",
        title: "API & Integration Support",
        description:
          "Extend Oracle functionality and integrate with third-party tools through robust API support.",
      },
    ],
    ctaText: "Talk to Oracle Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What Oracle services do you offer?",
        answer:
          "We provide Oracle Cloud implementation, database management, ERP automation, analytics, AI integration, and custom enterprise solutions.",
      },
      {
        id: "2",
        question: "Can Oracle solutions integrate with our existing systems?",
        answer:
          "Yes, we integrate Oracle solutions with legacy systems, third-party applications, and cloud platforms for seamless workflow.",
      },
      {
        id: "3",
        question: "Do you provide database optimization services?",
        answer:
          "Absolutely. We optimize Oracle databases for performance, scalability, and security using best practices.",
      },
      {
        id: "4",
        question: "Can Oracle ERP automate my business processes?",
        answer:
          "Yes. Oracle ERP automates finance, HR, procurement, and supply chain processes to increase efficiency and reduce errors.",
      },
      {
        id: "5",
        question: "Do you offer cloud migration services?",
        answer:
          "We help businesses migrate to Oracle Cloud Infrastructure and SaaS solutions safely and efficiently.",
      },
      {
        id: "6",
        question: "Is Oracle secure and compliant?",
        answer:
          "Oracle provides enterprise-grade security, encryption, and compliance with industry regulations to protect critical business data.",
      },
    ],
  },
};
