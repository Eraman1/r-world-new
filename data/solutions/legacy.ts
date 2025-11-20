import { SolutionConfig } from "@/types/solutions";

export const legacy: SolutionConfig = {
  slug: "legacy",

  banner: {
    title: "Modernize Your Business with",
    highlight: "Legacy System Transformation Solutions",
    subtitle:
      "Upgrade outdated applications with modern, scalable technologies. Improve performance, security, and integration without losing critical business logic.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore Legacy Modernization",
  },

  developerDetails: {
    heading: "Experts in Legacy Application Modernization",
    subheading:
      "We specialize in transforming outdated systems into high-performance, cloud-ready platforms that enable innovation and agility.",
    mainTitle: "Seamless Legacy System Modernization Services",
    mainDescription:
      "Our modernization process ensures your existing business systems evolve into robust, future-proof architectures. Whether it’s mainframe migration, API enablement, or UI revamp — we help you stay competitive and efficient.",
    image: "/images/legacy-modernization-laptop.png",
    services: [
      {
        id: 1,
        title: "Application Re-engineering",
        description:
          "We analyze your current legacy applications and rebuild them with modern frameworks while retaining key functionalities and data integrity.",
        icon: "/icons/rebuild.svg",
      },
      {
        id: 2,
        title: "Cloud Migration",
        description:
          "Move your legacy systems to the cloud (AWS, Azure, or GCP) with minimal downtime and enhanced scalability, performance, and security.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 3,
        title: "API Integration & Enablement",
        description:
          "Transform monolithic systems into connected ecosystems by integrating APIs for faster data exchange and third-party integrations.",
        icon: "/icons/link.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Legacy Software Modernization Solutions",
    mainDescription:
      "We bring outdated systems into the modern era with updated technology stacks, intuitive interfaces, and cloud-native architecture — enabling faster innovation and lower maintenance costs.",
    items: [
      {
        id: "code-refactoring",
        icon: "Leaf",
        title: "Code Refactoring",
        subtitle: "Optimize Existing Codebases",
        description:
          "We refactor legacy code to improve performance, maintainability, and security without altering core functionality. This reduces technical debt and simplifies future updates. Enhance overall system stability while ensuring cleaner, modular code structure.",
      },
      {
        id: "database-modernization",
        icon: "Leaf",
        title: "Database Modernization",
        subtitle: "Upgrade Legacy Databases",
        description:
          "Migrate outdated databases to modern, scalable, and cloud-ready platforms like PostgreSQL, Azure SQL, or MongoDB. Optimize data structures and indexing for better performance. Ensure reliable backup, disaster recovery, and seamless integration with new systems.",
      },
      {
        id: "ui-ux-modernization",
        icon: "Leaf",
        title: "UI/UX Modernization",
        subtitle: "Redesign User Interfaces",
        description:
          "Redesign legacy interfaces with responsive, intuitive, and user-friendly layouts using React, Angular, or Vue. Enhance user engagement and accessibility across devices. Improve navigation, workflow efficiency, and overall customer satisfaction.",
      },
      {
        id: "mainframe-migration",
        icon: "Leaf",
        title: "Mainframe Migration",
        subtitle: "Shift to Cloud-Native Infrastructure",
        description:
          "Move mainframe-based applications to scalable, cloud-native architectures for flexibility and cost efficiency. Enable faster deployments and easier integration with modern systems. Reduce operational overhead while improving reliability and performance.",
      },
      {
        id: "security-upgrade",
        icon: "Leaf",
        title: "Security & Compliance Upgrade",
        subtitle: "Ensure Enterprise Protection",
        description:
          "Integrate modern security frameworks and compliance protocols like ISO, GDPR, and SOC2 into legacy systems. Protect sensitive data while maintaining regulatory standards. Mitigate risks of breaches, vulnerabilities, and non-compliance penalties.",
      },
      {
        id: "microservices",
        icon: "Leaf",
        title: "Microservices Architecture",
        subtitle: "Scalable & Modular Systems",
        description:
          "Transform monolithic applications into modular, independent microservices for agility and scalability. Enable faster updates, continuous deployment, and simplified maintenance. Improve fault isolation, team autonomy, and overall system resilience.",
      },
    ],
    linkText: "Start Modernizing Now",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Legacy Management & Monitoring Systems",
    subtitle:
      "We offer intelligent tools to monitor, optimize, and maintain legacy systems during and after modernization.",
    subtitleLink: { text: "legacy management systems", url: "#" },
    laptopImage:
      "https://i.pinimg.com/1200x/c0/bd/72/c0bd72784aac884278f58081ed826d88.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/63/ad/77/63ad774cef4af5ae304da749894ebcc8.jpg",
    topFeatures: [
      {
        id: "automation",
        icon: "map",
        title: "Automated Testing & Deployment",
        description:
          "Implement CI/CD pipelines for legacy codebases, ensuring reliable updates and fast deployment cycles.",
      },
      {
        id: "monitoring",
        icon: "map",
        title: "Performance Monitoring",
        description:
          "Track real-time system performance metrics to identify and fix bottlenecks using APM and analytics tools.",
      },
      {
        id: "integration",
        icon: "map",
        title: "Seamless System Integration",
        description:
          "Connect legacy systems with ERP, CRM, and external applications for unified business operations.",
      },
    ],
    bottomFeatures: [
      {
        id: "data-migration",
        icon: "map",
        title: "Data Migration & Backup",
        description:
          "Securely migrate large volumes of data from legacy systems with complete accuracy and minimal downtime. Implement strong encryption protocols to protect sensitive information during transfer. Ensure automatic backup processes to safeguard against data loss and support business continuity.",
      },
      {
        id: "ai-analytics",
        icon: "map",
        title: "AI-Powered Analytics",
        description:
          "Leverage AI-driven analytics to extract actionable insights from historical and real-time data. Visualize trends, patterns, and predictive forecasts through interactive dashboards. Enable data-driven decision-making to optimize operations, reduce costs, and uncover new growth opportunities.",
      },
      {
        id: "support",
        icon: "map",
        title: "24/7 Support & Maintenance",
        description:
          "Receive round-the-clock system monitoring and maintenance from our dedicated support teams. Quickly troubleshoot issues to minimize downtime and maintain optimal system performance. Regularly update and patch software to ensure security, reliability, and compliance.",
      },
      {
        id: "governance",
        icon: "map",
        title: "Governance & Compliance",
        description:
          "Ensure all modernization and migration activities strictly follow industry standards and regulatory requirements. Maintain comprehensive audit trails for accountability and transparency. Implement policies and procedures that safeguard data integrity, security, and compliance at every stage.",
      },
    ],
    ctaText: "Talk to Legacy Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is legacy system modernization?",
        answer:
          "Legacy modernization involves upgrading or rebuilding outdated systems using modern technologies to improve scalability, performance, and security.",
      },
      {
        id: "2",
        question: "Can you migrate our on-premise system to the cloud?",
        answer:
          "Yes, we help businesses migrate their legacy applications to cloud platforms like AWS, Azure, or Google Cloud with minimal disruption.",
      },
      {
        id: "3",
        question: "Do you provide support after modernization?",
        answer:
          "Absolutely. We offer post-modernization support, monitoring, and optimization to ensure long-term system stability.",
      },
      {
        id: "4",
        question: "Will our existing data remain safe during migration?",
        answer:
          "Yes. We use secure migration frameworks that ensure complete data integrity, backup, and encryption during transition.",
      },
      {
        id: "5",
        question: "Can modernization improve application speed and UI?",
        answer:
          "Definitely. We optimize code performance and redesign outdated interfaces with modern technologies for a faster, smoother experience.",
      },
      {
        id: "6",
        question: "Do you modernize mainframe or ERP systems?",
        answer:
          "Yes, we specialize in mainframe modernization, ERP migration, and integrating legacy business systems with cloud-native environments.",
      },
    ],
  },
};
