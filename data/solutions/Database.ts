import { SolutionConfig } from "@/types/solutions";

export const database: SolutionConfig = {
  slug: "database",

  banner: {
    title: "Unlock Data Potential with",
    highlight: "Advanced Database Solutions",
    subtitle:
      "Design, deploy, and manage scalable and secure database systems to drive performance, insights, and growth for your business.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Database Solutions",
  },

  developerDetails: {
    heading: "Expert Database Developers & Architects",
    subheading:
      "Our team specializes in designing efficient, secure, and scalable database systems for web, mobile, and enterprise applications.",
    mainTitle: "Professional Database Development Services",
    mainDescription:
      "From relational databases to NoSQL solutions, we build customized databases optimized for speed, reliability, and security. Our developers ensure your data is structured, maintained, and accessible for real-time operations and analytics.",
    image: "/images/database-laptop.png",
    services: [
      {
        id: 1,
        title: "Database Design & Modeling",
        description:
          "We create normalized, scalable, and performance-optimized database schemas tailored to your business needs.",
        icon: "/icons/database.svg",
      },
      {
        id: 2,
        title: "Database Migration & Integration",
        description:
          "Seamlessly migrate your existing data to modern platforms while ensuring integrity, security, and compatibility with applications.",
        icon: "/icons/transfer.svg",
      },
      {
        id: 3,
        title: "Database Optimization & Maintenance",
        description:
          "Improve query performance, reduce latency, and maintain uptime with expert database monitoring, tuning, and maintenance services.",
        icon: "/icons/settings.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "End-to-End Database Solutions",
    mainDescription:
      "We provide complete database solutions from architecture and development to management, security, and analytics. Our solutions empower businesses to leverage their data effectively and make data-driven decisions.",
    items: [
      {
        id: "relational-db",
        icon: "Leaf",
        title: "Relational Database Systems",
        subtitle: "Structured & Reliable",
        description:
          "We develop relational databases using MySQL, PostgreSQL, Oracle, and SQL Server for secure and structured data storage and retrieval.",
      },
      {
        id: "nosql-db",
        icon: "Leaf",
        title: "NoSQL Databases",
        subtitle: "Flexible & Scalable",
        description:
          "Build scalable NoSQL databases with MongoDB, Cassandra, or Firebase to manage unstructured and semi-structured data efficiently.",
      },
      {
        id: "data-warehousing",
        icon: "Leaf",
        title: "Data Warehousing",
        subtitle: "Centralized Data for Analytics",
        description:
          "Integrate data from multiple sources into a centralized warehouse to facilitate advanced analytics and reporting.",
      },
      {
        id: "cloud-db",
        icon: "Leaf",
        title: "Cloud Database Solutions",
        subtitle: "Secure & Accessible Anywhere",
        description:
          "Deploy databases on cloud platforms like AWS RDS, Azure SQL, or Google Cloud for high availability, scalability, and security.",
      },
      {
        id: "backup-recovery",
        icon: "Leaf",
        title: "Backup & Disaster Recovery",
        subtitle: "Protect Your Data",
        description:
          "Implement reliable backup strategies and disaster recovery plans to safeguard your data from loss or corruption.",
      },
      {
        id: "db-automation",
        icon: "Leaf",
        title: "Database Automation & Monitoring",
        subtitle: "Efficient & Proactive",
        description:
          "Automate routine database tasks, monitoring, and alerting to ensure high performance, uptime, and proactive issue resolution.",
      },
    ],
    linkText: "Get Database Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Database Management & Administration",
    subtitle:
      "Our database management solutions ensure your systems are performant, secure, and reliable at all times.",
    subtitleLink: { text: "database management solutions", url: "#" },
    laptopImage: "/images/management-database.jpg",
    mobileImage: "/images/management-database-mobile.jpg",
    topFeatures: [
      {
        id: "security",
        icon: "map",
        title: "Database Security",
        description:
          "Protect sensitive data with access control, encryption, auditing, and compliance measures.",
      },
      {
        id: "performance",
        icon: "map",
        title: "Performance Tuning",
        description:
          "Optimize query performance, indexing, and caching strategies to deliver high-speed data access.",
      },
      {
        id: "scalability",
        icon: "map",
        title: "Scalable Architecture",
        description:
          "Design database architectures that scale with growing business demands and high data volumes.",
      },
    ],
    bottomFeatures: [
      {
        id: "automation",
        icon: "map",
        title: "Automation & Monitoring",
        description:
          "Automate backups, maintenance, and monitoring to reduce human error and improve reliability.",
      },
      {
        id: "cloud-integration",
        icon: "map",
        title: "Cloud Integration",
        description:
          "Seamlessly integrate on-premises databases with cloud platforms for hybrid solutions.",
      },
      {
        id: "analytics-support",
        icon: "map",
        title: "Analytics Support",
        description:
          "Ensure your databases are optimized for BI tools, analytics platforms, and reporting dashboards.",
      },
      {
        id: "api-access",
        icon: "map",
        title: "API Access & Integration",
        description:
          "Expose data securely via APIs to connect with applications and third-party platforms.",
      },
    ],
    ctaText: "Talk to Database Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What types of databases do you work with?",
        answer:
          "We specialize in relational databases like MySQL, PostgreSQL, SQL Server, and Oracle, as well as NoSQL databases such as MongoDB, Cassandra, and Firebase.",
      },
      {
        id: "2",
        question: "Can you migrate existing databases to modern platforms?",
        answer:
          "Yes, we handle secure database migration, ensuring data integrity, minimal downtime, and full compatibility with new systems.",
      },
      {
        id: "3",
        question: "Do you provide database performance optimization?",
        answer:
          "Absolutely. We optimize database queries, indexing, caching, and configuration to improve performance and reduce latency.",
      },
      {
        id: "4",
        question: "Do you offer cloud-based database solutions?",
        answer:
          "Yes, we deploy and manage databases on AWS, Azure, and Google Cloud for scalable, secure, and reliable access.",
      },
      {
        id: "5",
        question: "Can you integrate databases with analytics and BI tools?",
        answer:
          "Yes, we design databases to support reporting, dashboards, and business intelligence tools for actionable insights.",
      },
      {
        id: "6",
        question: "Do you provide database backup and disaster recovery services?",
        answer:
          "Yes, we implement backup, replication, and disaster recovery plans to ensure your data is safe and recoverable at all times.",
      },
    ],
  },
};
