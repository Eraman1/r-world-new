import { ServiceConfig } from "./services";

export const databaseDesignManagement: ServiceConfig = {
  slug: "database-design-management",
  banner: {
    title: "Empower Your Business with",
    highlight: "Database Design & Management Services",
    subtitle:
      "Design, optimize, and manage high-performance databases that ensure data integrity, scalability, and security. Our experts deliver customized database solutions for businesses of all sizes.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Database Solutions",
  },

  developerDetails: {
    heading: "Expert Database Architects & Administrators",
    subheading:
      "Our team designs, builds, and maintains secure, high-performing databases tailored to your application and business needs.",
    mainTitle: "Professional Database Design & Management Services",
    mainDescription:
      "We provide end-to-end database solutions — from architecture and design to optimization and maintenance. Our focus is on performance, data security, and scalability to support business growth.",
    image: "/images/database-management-laptop.png",
    services: [
      {
        id: 1,
        title: "Database Architecture & Design",
        description:
          "Design efficient, scalable, and secure database structures tailored to your business logic. Optimize schema design for performance. Ensure data integrity, normalization, and reliability.",
        icon: "/icons/database-design.svg",
      },
      {
        id: 2,
        title: "Database Optimization",
        description:
          "Enhance database performance through indexing, caching, and query tuning. Detect and resolve bottlenecks. Optimize storage and memory usage. Ensure faster response times for large datasets.",
        icon: "/icons/database-optimization.svg",
      },
      {
        id: 3,
        title: "Database Administration & Maintenance",
        description:
          "Monitor database health, backups, and replication. Manage user access, roles, and permissions. Schedule regular maintenance and updates. Prevent downtime and data loss through proactive monitoring.",
        icon: "/icons/database-admin.svg",
      },
    ],
  },

  solutions: {
  mainTitle: "Comprehensive Database Solutions",
  mainDescription:
    "We deliver reliable, scalable, and secure database systems tailored to your unique business goals. Our experts ensure data accuracy, fast performance, and 24/7 availability.",
  linkText: "Get Database Solutions",
  linkUrl: "/contact-us",
  items: [
    {
      id: "database-design",
      icon: "Leaf",
      title: "Database Design & Modeling",
      subtitle: "Build a Strong Data Foundation",
      description:
        "Design structured and efficient database architectures from the ground up. \nEnsure normalization, schema accuracy, and data integrity. \nDefine relationships for optimized data flow. \nPlan indexing and partitioning for peak query speed. \nBuild scalable models to support business growth.",
    },
    {
      id: "database-development",
      icon: "Leaf",
      title: "Database Development",
      subtitle: "Custom Database Creation",
      description:
        "Develop powerful databases using MySQL, PostgreSQL, SQL Server, and MongoDB. \nCreate stored procedures, triggers, and business logic layers. \nIntegrate seamlessly with applications and APIs. \nMaintain data consistency across distributed systems. \nDeliver secure, scalable, and high-performing databases.",
    },
    {
      id: "data-security",
      icon: "Leaf",
      title: "Data Security & Compliance",
      subtitle: "Protect Business-Critical Data",
      description:
        "Implement encryption, access control, and real-time monitoring. \nEnsure compliance with GDPR, HIPAA, and ISO standards. \nSafeguard systems from breaches and unauthorized access. \nPerform continuous audits and vulnerability scans. \nMaintain trust through strong data governance policies.",
    },
    {
      id: "database-migration",
      icon: "Leaf",
      title: "Database Migration & Integration",
      subtitle: "Seamless Data Transfer",
      description:
        "Transfer large databases across platforms with zero downtime. \nValidate and synchronize all data for complete accuracy. \nIntegrate systems to enable unified business insights. \nReduce migration risks through thorough pre-testing. \nSupport hybrid, on-premise, and multi-cloud environments.",
    },
    {
      id: "performance-optimization",
      icon: "Leaf",
      title: "Performance Optimization",
      subtitle: "Faster Queries, Better Efficiency",
      description:
        "Diagnose and resolve performance bottlenecks using advanced tools. \nApply indexing, caching, and load-balancing strategies. \nOptimize complex queries for faster response times. \nEnhance throughput for large-scale database operations. \nDeliver consistent, high-speed performance under any load.",
    },
    {
      id: "backup-recovery",
      icon: "Leaf",
      title: "Backup & Disaster Recovery",
      subtitle: "Ensure Business Continuity",
      description:
        "Automate scheduled backups and real-time replication processes. \nDevelop robust disaster recovery and failover strategies. \nEnsure minimal downtime during critical failures. \nRecover data efficiently with point-in-time restoration. \nProtect your business with resilient backup solutions.",
    },
  ],
},


  managementSolutions: {
    title: "Database Management Tools & Solutions",
    subtitle:
      "Our management solutions simplify database monitoring, performance tracking, and maintenance for businesses of all sizes.",
    subtitleLink: { text: "database management software", url: "#" },
    laptopImage: "/images/database-management.jpg",
    mobileImage: "/images/database-management-mobile.jpg",
    topFeatures: [
      {
        id: "db-monitoring",
        icon: "map",
        title: "Real-Time Monitoring & Alerts",
        description:
          "Monitor database health, uptime, and performance metrics. Detect anomalies in real-time. Receive instant alerts for critical issues. Prevent downtime through proactive tracking. Ensure database reliability 24/7.",
      },
      {
        id: "db-automation",
        icon: "map",
        title: "Automated Maintenance & Optimization",
        description:
          "Automate indexing, backups, and routine maintenance tasks. Optimize database performance without manual intervention. Reduce human errors. Improve resource utilization and cost efficiency. Ensure smooth operations consistently.",
      },
      {
        id: "db-reporting",
        icon: "map",
        title: "Analytics & Reporting Dashboards",
        description:
          "Generate insights into data performance and trends. Monitor query efficiency, growth rates, and storage usage. Visualize performance through dashboards. Identify optimization opportunities. Support data-driven business decisions.",
      },
    ],
    ctaText: "Get Database Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ - Database Design & Management Services",
    items: [
      {
        id: "1",
        question: "What types of databases do you work with?",
        answer:
          "We work with relational databases like MySQL, PostgreSQL, SQL Server, and Oracle, as well as NoSQL databases like MongoDB and Firebase.",
      },
      {
        id: "2",
        question: "Can you migrate existing databases to new platforms?",
        answer:
          "Yes, we provide seamless database migration with zero data loss, ensuring compatibility and integrity across systems.",
      },
      {
        id: "3",
        question: "Do you offer database performance optimization?",
        answer:
          "Absolutely. We optimize queries, indexing, and caching to improve speed, efficiency, and scalability for all database types.",
      },
      {
        id: "4",
        question: "Can you integrate multiple databases into one system?",
        answer:
          "Yes, our team specializes in database integration for unified access and reporting across multiple systems or applications.",
      },
      {
        id: "5",
        question: "Do you provide backup and recovery solutions?",
        answer:
          "Yes, we design and implement automated backup and disaster recovery systems to ensure data protection and business continuity.",
      },
      {
        id: "6",
        question: "How do you ensure database security?",
        answer:
          "We use encryption, access control, and regular security audits to protect sensitive information and maintain compliance with data regulations.",
      },
      {
        id: "7",
        question: "Can you manage cloud-based databases?",
        answer:
          "Yes, we manage cloud databases on AWS, Azure, and Google Cloud, ensuring scalability, reliability, and high availability.",
      },
    ],
  },
};
