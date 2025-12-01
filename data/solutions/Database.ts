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
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
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
          "We design and implement robust relational databases using MySQL, PostgreSQL, Oracle, and SQL Server. These systems ensure secure, consistent, and high-performance data management. Perfect for enterprises requiring reliable and structured data storage solutions.",
      },
      {
        id: "nosql-db",
        icon: "Leaf",
        title: "NoSQL Databases",
        subtitle: "Flexible & Scalable",
        description:
          "Our NoSQL solutions leverage MongoDB, Cassandra, and Firebase for modern, large-scale applications. Handle unstructured and semi-structured data with flexibility and speed. Achieve scalability and performance that grow seamlessly with your business needs.",
      },
      {
        id: "data-warehousing",
        icon: "Leaf",
        title: "Data Warehousing",
        subtitle: "Centralized Data for Analytics",
        description:
          "We build centralized data warehouses that consolidate information from multiple sources into one trusted repository. Empower your organization with actionable insights through advanced analytics. Enhance decision-making and business intelligence with unified reporting.",
      },
      {
        id: "cloud-db",
        icon: "Leaf",
        title: "Cloud Database Solutions",
        subtitle: "Secure & Accessible Anywhere",
        description:
          "Deploy and manage cloud databases on AWS RDS, Azure SQL, or Google Cloud with top-tier reliability. Benefit from global accessibility, high availability, and strong security compliance. Scale effortlessly as your data demands and workloads grow.",
      },
      {
        id: "backup-recovery",
        icon: "Leaf",
        title: "Backup & Disaster Recovery",
        subtitle: "Protect Your Data",
        description:
          "Safeguard your mission-critical data with automated backups and advanced disaster recovery protocols. Minimize downtime and prevent data loss in any unexpected event. Ensure your business continuity with reliable recovery mechanisms and redundancy planning.",
      },
      {
        id: "db-automation",
        icon: "Leaf",
        title: "Database Automation & Monitoring",
        subtitle: "Efficient & Proactive",
        description:
          "Streamline database operations through intelligent automation tools and real-time monitoring systems. Detect issues before they impact performance using predictive alerts. Maintain optimal efficiency, uptime, and system reliability with minimal manual intervention.",
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
<<<<<<< HEAD
    laptopImage: "https://i.pinimg.com/736x/f3/58/5e/f3585e95f219caca30cf14df38c29599.jpg",
    mobileImage: "https://i.pinimg.com/736x/4f/44/95/4f44951e7c52d8cd6b9d40ab7b754bab.jpg",
=======
    laptopImage:
      "https://i.pinimg.com/736x/f3/58/5e/f3585e95f219caca30cf14df38c29599.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/4f/44/95/4f44951e7c52d8cd6b9d40ab7b754bab.jpg",
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
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
          "Automate database backups, performance tuning, and system monitoring for continuous reliability. Reduce downtime with proactive alerts and real-time tracking. Enhance operational efficiency while minimizing human intervention and errors.",
      },
      {
        id: "cloud-integration",
        icon: "map",
        title: "Cloud Integration",
        description:
          "Integrate on-premises databases with leading cloud providers for scalable hybrid infrastructure. Enable secure data synchronization and remote accessibility. Achieve flexibility, cost efficiency, and improved business continuity across environments.",
      },
      {
        id: "analytics-support",
        icon: "map",
        title: "Analytics Support",
        description:
          "Optimize database structures for seamless integration with BI tools and analytics platforms. Enable fast querying, data visualization, and predictive insights. Empower decision-makers with reliable, real-time reporting dashboards.",
      },
      {
        id: "api-access",
        icon: "map",
        title: "API Access & Integration",
        description:
          "Expose and manage data securely through robust API connections for external applications. Simplify integration with enterprise systems, SaaS tools, and third-party platforms. Maintain full control with authentication, rate limiting, and logging features.",
      },
    ],
    ctaText: "Talk to Database Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
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
        question:
          "Do you provide database backup and disaster recovery services?",
        answer:
          "Yes, we implement backup, replication, and disaster recovery plans to ensure your data is safe and recoverable at all times.",
      },
    ],
  },
};
