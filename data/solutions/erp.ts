import { SolutionConfig } from "@/types/solutions";

export const erp: SolutionConfig = {
  slug: "erp",

  banner: {
    title: "Streamline Your Business with",
    highlight: "Enterprise Resource Planning Solutions",
    subtitle:
      "Integrate all your core business processes with our customized ERP software to enhance efficiency, data accuracy, and decision-making.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get ERP Solutions",
  },

  developerDetails: {
    heading: "Expert ERP Developers for Seamless Business Management",
    subheading:
      "Our ERP team specializes in building scalable, modular, and cloud-based solutions for finance, HR, supply chain, production, and more.",
    mainTitle: "Custom ERP Software Development Services",
    mainDescription:
      "We deliver enterprise-grade ERP systems tailored to your organization’s workflow. Our solutions integrate departments, automate tasks, provide real-time analytics, and support better decision-making.",
    image: "/images/erp-laptop.png",
    services: [
      {
        id: 1,
        title: "ERP Implementation & Customization",
        description:
          "Deploy fully tailored ERP solutions adapted to your business processes, ensuring maximum efficiency and ROI.",
        icon: "/icons/settings.svg",
      },
      {
        id: 2,
        title: "Financial Management",
        description:
          "Automate accounting, invoicing, budgeting, and reporting with real-time financial data integration.",
        icon: "/icons/finance.svg",
      },
      {
        id: 3,
        title: "Supply Chain & Inventory Management",
        description:
          "Optimize procurement, inventory control, and logistics with integrated ERP modules.",
        icon: "/icons/warehouse.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Integrated ERP Solutions for Modern Enterprises",
    mainDescription:
      "Our ERP systems unify all key business functions into a single platform, improving visibility, productivity, and efficiency across your organization.",
    items: [
      {
        id: "finance-automation",
        icon: "Leaf",
        title: "Finance & Accounting Automation",
        subtitle: "Smart Financial Management",
        description:
          "Automate accounting, tax, and financial operations with AI-driven accuracy. Simplify complex reporting and ensure compliance with real-time data. Gain better control over cash flow and profitability through intelligent automation.",
      },
      {
        id: "hr-management",
        icon: "Leaf",
        title: "Human Resources Management",
        subtitle: "Employee Lifecycle Automation",
        description:
          "Digitize and streamline the entire employee journey from recruitment to retirement. Manage payroll, attendance, and performance with ease. Empower HR teams to focus on growth, culture, and employee satisfaction.",
      },
      {
        id: "inventory-optimization",
        icon: "Leaf",
        title: "Inventory & Supply Chain Management",
        subtitle: "Optimized Stock & Logistics",
        description:
          "Gain complete visibility into inventory levels and supply chain workflows. Automate procurement and order tracking to reduce overheads. Improve logistics efficiency and ensure on-time deliveries every time.",
      },
      {
        id: "production-planning",
        icon: "Leaf",
        title: "Production & Operations Planning",
        subtitle: "Efficient Manufacturing Workflows",
        description:
          "Coordinate manufacturing schedules and resources through real-time data insights. Reduce downtime and improve throughput with smart automation. Achieve consistent product quality and operational efficiency.",
      },
      {
        id: "analytics-insights",
        icon: "Leaf",
        title: "Business Analytics & Insights",
        subtitle: "Data-Driven Decisions",
        description:
          "Access intelligent dashboards and KPI analytics to make informed business decisions. Identify trends, predict outcomes, and improve strategy. Turn raw data into actionable insights for faster growth.",
      },
      {
        id: "crm-integration",
        icon: "Leaf",
        title: "CRM Integration",
        subtitle: "Manage Customer Relationships",
        description:
          "Integrate customer data seamlessly across sales, marketing, and service departments. Build lasting relationships through personalized engagement. Enhance lead conversion and customer satisfaction with a unified CRM-ERP platform.",
      },
    ],
    linkText: "Get ERP Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Enterprise Management Systems",
    subtitle:
      "Our ERP software enables efficient management of finance, HR, operations, and supply chains with robust analytics and reporting.",
    subtitleLink: { text: "enterprise management", url: "#" },
    laptopImage:
      "https://i.pinimg.com/736x/1f/49/d8/1f49d84b3f1fc67e45f5b2d6b689b32a.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/ca/69/45/ca694537b6f2c044599180dad2b4c9c3.jpg",
    topFeatures: [
      {
        id: "centralized-data",
        icon: "map",
        title: "Centralized Data Management",
        description:
          "Keep all business data in one secure location, ensuring consistency, accuracy, and easy access for authorized users.",
      },
      {
        id: "workflow-automation",
        icon: "map",
        title: "Automated Workflow & Approvals",
        description:
          "Automate approvals, notifications, and repetitive tasks to improve operational efficiency.",
      },
      {
        id: "integration",
        icon: "map",
        title: "Third-Party Software Integration",
        description:
          "Seamlessly connect ERP with existing tools such as CRM, e-commerce platforms, or manufacturing software.",
      },
    ],
    bottomFeatures: [
      {
        id: "cloud-deployment",
        icon: "map",
        title: "Cloud-Based Deployment",
        description:
          "Access your ERP platform anytime, anywhere with secure cloud hosting. Eliminate on-premise infrastructure costs and streamline IT management. Scale resources easily as your organization grows without compromising performance.",
      },
      {
        id: "security-backup",
        icon: "map",
        title: "Data Security & Backup",
        description:
          "Safeguard business-critical information with enterprise-grade encryption and automated cloud backups. Implement role-based access controls to protect sensitive data. Ensure data continuity with reliable disaster recovery solutions.",
      },
      {
        id: "analytics",
        icon: "map",
        title: "Advanced Reporting & Analytics",
        description:
          "Empower decision-makers with real-time dashboards and visual analytics. Identify trends, monitor KPIs, and optimize business operations. Gain actionable insights to improve performance across departments.",
      },
      {
        id: "custom-modules",
        icon: "map",
        title: "Custom ERP Modules",
        description:
          "Tailor your ERP system with industry-specific modules that fit unique business processes. Automate complex workflows for better efficiency and control. Enhance flexibility with easily integrable, scalable extensions.",
      },
    ],
    ctaText: "Talk to ERP Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is ERP software?",
        answer:
          "ERP (Enterprise Resource Planning) software integrates all core business processes — including finance, HR, supply chain, and operations — into a single platform.",
      },
      {
        id: "2",
        question: "Can ERP be customized for my business?",
        answer:
          "Yes. ERP solutions can be tailored to meet your unique workflows, processes, and industry requirements.",
      },
      {
        id: "3",
        question: "Do you offer cloud-based ERP solutions?",
        answer:
          "Absolutely. We provide secure cloud deployments for accessibility, scalability, and reduced IT overhead.",
      },
      {
        id: "4",
        question: "Can ERP integrate with existing software?",
        answer:
          "Yes. We integrate ERP with CRM, e-commerce platforms, accounting software, and other business tools.",
      },
      {
        id: "5",
        question: "How long does ERP implementation take?",
        answer:
          "Implementation depends on complexity and scope but typically ranges from a few weeks to several months with proper planning and customization.",
      },
      {
        id: "6",
        question: "Does ERP provide reporting and analytics?",
        answer:
          "Yes. ERP systems include real-time dashboards, KPIs, and advanced reporting for data-driven decision-making.",
      },
    ],
  },
};
