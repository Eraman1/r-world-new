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
          "Automate accounts payable/receivable, budgeting, tax compliance, and financial reporting to minimize errors and save time.",
      },
      {
        id: "hr-management",
        icon: "Leaf",
        title: "Human Resources Management",
        subtitle: "Employee Lifecycle Automation",
        description:
          "Manage recruitment, payroll, attendance, performance evaluation, and training seamlessly within the ERP system.",
      },
      {
        id: "inventory-optimization",
        icon: "Leaf",
        title: "Inventory & Supply Chain Management",
        subtitle: "Optimized Stock & Logistics",
        description:
          "Track inventory in real-time, optimize stock levels, and automate procurement workflows to reduce costs and improve delivery efficiency.",
      },
      {
        id: "production-planning",
        icon: "Leaf",
        title: "Production & Operations Planning",
        subtitle: "Efficient Manufacturing Workflows",
        description:
          "Plan, schedule, and monitor production activities to ensure timely delivery and optimal resource usage.",
      },
      {
        id: "analytics-insights",
        icon: "Leaf",
        title: "Business Analytics & Insights",
        subtitle: "Data-Driven Decisions",
        description:
          "Leverage real-time dashboards, KPIs, and reports to gain actionable insights across all business operations.",
      },
      {
        id: "crm-integration",
        icon: "Leaf",
        title: "CRM Integration",
        subtitle: "Manage Customer Relationships",
        description:
          "Integrate customer relationship management into ERP to enhance sales, marketing, and support functions.",
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
    laptopImage: "/images/management-erp.jpg",
    mobileImage: "/images/management-erp-mobile.jpg",
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
          "Access your ERP system securely from anywhere and reduce infrastructure costs.",
      },
      {
        id: "security-backup",
        icon: "map",
        title: "Data Security & Backup",
        description:
          "Protect critical business data with automated backups, encryption, and role-based access control.",
      },
      {
        id: "analytics",
        icon: "map",
        title: "Advanced Reporting & Analytics",
        description:
          "Get real-time insights and reports to drive informed decision-making across departments.",
      },
      {
        id: "custom-modules",
        icon: "map",
        title: "Custom ERP Modules",
        description:
          "Extend your ERP with custom modules designed for industry-specific needs and workflows.",
      },
    ],
    ctaText: "Talk to ERP Experts",
    onCtaClick: () => {},
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
