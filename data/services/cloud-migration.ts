import { ServiceConfig } from "./services";

export const cloudMigration: ServiceConfig = {
  slug: "cloud-migration",
  banner: {
    title: "Accelerate Your Business with",
    highlight: "Professional Cloud Migration Services",
    subtitle:
      "Migrate your applications, data, and infrastructure to the cloud securely and efficiently. Ensure scalability, performance, and cost optimization with our expert cloud solutions.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Cloud Migration Services",
  },
  developerDetails: {
    heading: "Expert Cloud Engineers & Architects",
    subheading:
      "Our cloud specialists ensure seamless migration to cloud platforms while optimizing infrastructure, security, and cost-efficiency for your business applications.",
    mainTitle: "Comprehensive Cloud Migration Services",
    mainDescription:
      "We provide end-to-end cloud migration solutions for enterprises and SMBs. Our services cover assessment, planning, migration, and post-migration support to ensure reliable and scalable cloud adoption.",
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    services: [
      {
        id: 1,
        title: "Application Migration",
        description:
          "Migrate legacy and modern applications to cloud platforms with minimal downtime. Ensure compatibility and optimal performance. Re-architect apps if needed for cloud efficiency. Maintain security and data integrity during migration. ",
        icon: "/icons/cloud-app.svg",
      },
      {
        id: 2,
        title: "Data Migration",
        description:
          "Transfer databases, storage, and large datasets to cloud infrastructure securely. Ensure zero data loss and maintain consistency. Optimize data storage and retrieval in the cloud. Implement backup and disaster recovery strategies. ",
        icon: "/icons/cloud-data.svg",
      },
      {
        id: 3,
        title: "Cloud Infrastructure Setup",
        description:
          "Design and deploy scalable cloud architecture on AWS, Azure, or GCP. Configure servers, storage, and networking for performance and redundancy. Implement security policies and access controls. Optimize costs through resource management. ",
        icon: "/icons/cloud-infra.svg",
      },
    ],
  },
  solutions: {
    mainTitle: "Cloud Migration & Optimization Solutions",
    mainDescription:
      "Our cloud solutions ensure seamless migration, optimized performance, and cost-effective infrastructure management. We help businesses fully leverage cloud capabilities to drive growth and scalability.",
    items: [
      {
        id: "assessment-planning",
        icon: "Leaf",
        title: "Cloud Assessment & Planning",
        subtitle: "",
        description:
          "Evaluate current infrastructure and applications for cloud readiness. \nIdentify dependencies and potential challenges. \nDefine a clear, phased migration strategy. \nEstimate costs, benefits, and ROI. \nPlan migration with minimal disruption to business operations.",
      },
      {
        id: "cloud-security",
        icon: "Leaf",
        title: "Cloud Security & Compliance",
        subtitle: "",
        description:
          "Implement strong security protocols during and after migration. \nEnsure compliance with industry and regional standards. \nProtect sensitive data with encryption and access controls. \nMonitor threats and vulnerabilities continuously. \nMaintain regulatory adherence and audit readiness at all times.",
      },
      {
        id: "performance-optimization",
        icon: "Leaf",
        title: "Cloud Performance Optimization",
        subtitle: "",
        description:
          "Optimize cloud resources to improve cost efficiency and performance. \nScale infrastructure automatically based on demand. \nReduce latency, downtime, and system bottlenecks. \nContinuously monitor application and server performance. \nImplement automation and cloud-native practices for maximum efficiency.",
      },
      {
        id: "post-migration-support",
        icon: "Leaf",
        title: "Post-Migration Support & Monitoring",
        subtitle: "",
        description:
          "Provide ongoing monitoring and maintenance after migration. \nAddress performance issues proactively and optimize resources. \nRegularly update and patch cloud infrastructure. \nEnsure disaster recovery and backup readiness. \nOffer 24/7 support to maintain uninterrupted operations.",
      },
      {
        id: "cost-optimization",
        icon: "Leaf",
        title: "Cloud Cost Management & Optimization",
        subtitle: "",
        description:
          "Analyze cloud spending patterns to identify inefficiencies. \nImplement cost-saving strategies like resource scaling and reserved instances. \nMonitor usage continuously to prevent waste. \nUse analytics to forecast future cloud expenses accurately. \nEnsure cost-effective operations without compromising performance.",
      },
      {
        id: "cloud-architecture",
        icon: "Leaf",
        title: "Cloud Architecture & Design",
        subtitle: "",
        description:
          "Design scalable, resilient, and secure cloud architectures. \nSelect the right services and technologies for your needs. \nEnsure high availability and fault-tolerance across systems. \nIntegrate best practices for performance and security. \nCreate a foundation that supports long-term growth and innovation.",
      },
    ],
    linkText: "Get Cloud Migration Services",
    linkUrl: "/contact-us",
  },
  solutionsTwo: {
    mainTitle: "Cloud Migration & Modernization Solutions",
    mainDescription:
      "We help enterprises migrate, modernize, and optimize their IT infrastructure on the cloud. Our experts ensure seamless transitions, high availability, and cost efficiency while maintaining performance and security. Empower your business to scale confidently in the cloud-first era.",

    items: [
      {
        id: "migration-strategy",
        icon: "Leaf",
        title: "Cloud Migration Strategy & Planning",
        subtitle: "",
        description:
          "Design a clear, risk-free roadmap for seamless cloud transition. \nWe analyze your existing infrastructure and business goals deeply. \nOur experts define timelines, dependencies, and migration priorities. \nMitigate downtime with a structured, step-by-step approach. \nAchieve faster adoption with optimized strategy and execution.",
      },
      {
        id: "infrastructure-modernization",
        icon: "Leaf",
        title: "Infrastructure Modernization & Optimization",
        subtitle: "",
        description:
          "Transform legacy systems into agile, scalable cloud environments. \nWe re-architect workloads for improved flexibility and resilience. \nOur team optimizes performance through automation and monitoring. \nReduce technical debt and operational overhead efficiently. \nDeliver continuous performance with modernized infrastructure.",
      },
      {
        id: "data-migration",
        icon: "Leaf",
        title: "Data Migration & Storage Management",
        subtitle: "",
        description:
          "Migrate databases securely with zero data loss and minimal downtime. \nWe handle structured, unstructured, and hybrid data with precision. \nEnsure compliance and encryption during every stage of transfer. \nOptimize storage costs using intelligent tiering and backups. \nGain faster access to reliable, scalable, cloud-based data systems.",
      },
      {
        id: "security-compliance",
        icon: "Leaf",
        title: "Cloud Security & Compliance Solutions",
        subtitle: "",
        description:
          "Protect workloads and applications with enterprise-grade security. \nImplement encryption, IAM policies, and zero-trust frameworks. \nEnsure compliance with GDPR, HIPAA, and ISO standards. \nDetect and mitigate threats using AI-driven monitoring tools. \nSafeguard cloud assets while maintaining regulatory integrity.",
      },
      {
        id: "multi-cloud-management",
        icon: "Leaf",
        title: "Multi-Cloud & Hybrid Cloud Management",
        subtitle: "",
        description:
          "Simplify operations across AWS, Azure, Google Cloud, and private setups. \nCentralize visibility, cost management, and security enforcement. \nEnable workload mobility across platforms without disruption. \nAutomate provisioning and policy control for unified governance. \nMaximize flexibility with an intelligent multi-cloud ecosystem.",
      },
      {
        id: "devops-cloud",
        icon: "Leaf",
        title: "DevOps Integration & Continuous Deployment",
        subtitle: "",
        description:
          "Adopt DevOps pipelines to accelerate cloud deployment cycles. \nWe integrate CI/CD tools for seamless automation and delivery. \nEnhance collaboration between development and operations teams. \nMonitor, scale, and optimize deployments in real time. \nAchieve faster innovation with cloud-native DevOps frameworks.",
      },
    ],

    linkText: "Start Your Cloud Migration Journey",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Cloud Project Management Tools",
    subtitle:
      "Manage cloud migration projects efficiently with tracking, collaboration, and performance monitoring for your team.",
    subtitleLink: { text: "cloud management software", url: "#" },
    laptopImage:
      "https://i.pinimg.com/736x/73/26/5d/73265dbab4589669637c8b99bfca9db6.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "migration-tracking",
        icon: "map",
        title: "Migration Tracking & Monitoring",
        description:
          "Track migration progress and milestones in real-time. Allocate cloud resources efficiently. Monitor team performance during migration. Generate reports for informed decisions.",
      },
      {
        id: "team-collaboration",
        icon: "map",
        title: "Team Collaboration Tools",
        description:
          "Enable seamless communication between cloud engineers, developers, and stakeholders. Share migration updates, logs, and documents. Assign tasks efficiently and track completion. Reduce miscommunication and bottlenecks.",
      },
      {
        id: "analytics",
        icon: "map",
        title: "Cloud Performance Analytics",
        description:
          "Measure system performance, uptime, and efficiency. Monitor resource usage and cost metrics. Analyze trends to optimize future cloud operations. Generate actionable insights for improvements.",
      },
    ],
    ctaText: "Get Cloud Migration Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },
  faq: {
    title: "FAQ - Cloud Migration Services",
    items: [
      {
        id: "1",
        question: "What types of cloud migrations do you perform?",
        answer:
          "We handle application, database, and infrastructure migrations to AWS, Azure, GCP, and private clouds with minimal downtime and high security.",
      },
      {
        id: "2",
        question: "How do you ensure data security during migration?",
        answer:
          "We implement encryption, secure transfer protocols, access controls, and compliance measures to safeguard all sensitive data during migration.",
      },
      {
        id: "3",
        question: "Do you support hybrid or multi-cloud strategies?",
        answer:
          "Yes, we provide solutions for hybrid and multi-cloud environments to optimize performance, redundancy, and cost-efficiency.",
      },
      {
        id: "4",
        question: "Can you optimize cloud costs after migration?",
        answer:
          "Absolutely. We analyze resource usage, recommend cost-saving measures, and implement auto-scaling and optimization strategies to reduce cloud expenses.",
      },
      {
        id: "5",
        question: "Do you provide post-migration support?",
        answer:
          "Yes, we offer ongoing monitoring, maintenance, performance tuning, and security updates to ensure smooth cloud operations.",
      },
    ],
  },
};
