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
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
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
          "Leverage Oracle Cloud Infrastructure to deploy scalable, secure, and high-performance environments. Optimize compute, storage, and networking for enterprise workloads. Ensure business continuity with automated scaling and disaster recovery capabilities.",
      },
      {
        id: "database-solutions",
        icon: "Leaf",
        title: "Database Management & Optimization",
        subtitle: "High Availability & Security",
        description:
          "We design, optimize, and maintain Oracle databases to ensure top-tier performance and resilience. Our solutions include migration, real-time monitoring, and backup automation. Experience minimal downtime and superior data integrity with proactive management.",
      },
      {
        id: "erp-automation",
        icon: "Leaf",
        title: "ERP & Business Process Automation",
        subtitle: "Streamline Operations",
        description:
          "Empower your organization with Oracle ERP to unify financials, HR, procurement, and supply chain systems. Automate repetitive workflows for greater efficiency and transparency. Improve productivity and decision-making with centralized, real-time data access.",
      },
      {
        id: "analytics-ai",
        icon: "Leaf",
        title: "Analytics & AI Solutions",
        subtitle: "Data-Driven Insights",
        description:
          "Transform your enterprise data into strategic intelligence using Oracle Analytics and AI tools. Enable predictive forecasting, visualization, and real-time dashboards. Drive smarter decisions through integrated machine learning models and automated insights.",
      },
      {
        id: "integration-solutions",
        icon: "Leaf",
        title: "Integration & Custom Solutions",
        subtitle: "Connect Systems Seamlessly",
        description:
          "Unify your business ecosystem through Oracle Integration Cloud and APIs. Connect diverse applications, automate processes, and maintain consistent data flow. Tailor custom integrations that boost collaboration and operational efficiency across departments.",
      },
      {
        id: "security-compliance",
        icon: "Leaf",
        title: "Security & Compliance",
        subtitle: "Protect Critical Data",
        description:
          "Safeguard your enterprise with Oracle’s advanced identity, access, and encryption tools. Ensure compliance with industry regulations and data protection standards. Defend against evolving cyber threats with real-time monitoring and threat intelligence solutions.",
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
    laptopImage:
      "https://i.pinimg.com/736x/8e/d2/00/8ed200577799934880faf393957cc7c8.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/7e/8c/03/7e8c03132862d83e1b336098f653ac68.jpg",
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
          "Gain valuable insights through real-time data visualization and advanced reporting dashboards. Track performance metrics to identify growth opportunities. Empower decision-makers with predictive analytics for smarter, data-driven strategies.",
      },
      {
        id: "cloud-management",
        icon: "map",
        title: "Cloud & Infrastructure Management",
        description:
          "Manage and optimize cloud resources effortlessly with Oracle’s scalable infrastructure solutions. Ensure seamless workload distribution, uptime reliability, and cost efficiency. Enable hybrid and multi-cloud integration for greater operational flexibility.",
      },
      {
        id: "security-compliance-bottom",
        icon: "map",
        title: "Enterprise Security & Compliance",
        description:
          "Protect your enterprise data with advanced encryption, authentication, and access control protocols. Stay aligned with global compliance standards like GDPR, HIPAA, and ISO. Mitigate risks through continuous monitoring and security automation.",
      },
      {
        id: "api-support",
        icon: "map",
        title: "API & Integration Support",
        description:
          "Expand Oracle capabilities through seamless API connectivity and third-party integrations. Enable smooth data exchange between enterprise systems and cloud applications. Accelerate workflows by connecting CRM, ERP, and analytics tools efficiently.",
      },
    ],
    ctaText: "Talk to Oracle Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
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
