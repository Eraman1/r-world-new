import { SolutionConfig } from "@/types/solutions";

export const franchiseManagement: SolutionConfig = {
  slug: "franchise-management",

  banner: {
    title: "Streamline Operations with",
    highlight: "Franchise Management Software Solutions",
    subtitle:
      "Simplify multi-location operations, ensure brand consistency, and enhance franchise growth with our powerful management software.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Franchise Solutions",
  },

  developerDetails: {
    heading: "Smart Software for Modern Franchise Networks",
    subheading:
      "Empower your franchise business with intelligent digital solutions that centralize communication, automate workflows, and ensure compliance across all locations.",
    mainTitle: "Comprehensive Franchise Management Systems",
    mainDescription:
      "We design and develop custom franchise management platforms that simplify daily operations, improve transparency, and enhance brand consistency. From onboarding to analytics, our solutions help you manage everything from one unified dashboard.",
    image: "/images/franchise-dashboard.png",
    services: [
      {
        id: 1,
        title: "Franchise Onboarding System",
        description:
          "Automate franchisee registration, documentation, and approval workflows with secure digital onboarding tools.",
        icon: "/icons/users.svg",
      },
      {
        id: 2,
        title: "Centralized Communication Hub",
        description:
          "Facilitate smooth communication between franchisors and franchisees with built-in messaging, announcements, and task updates.",
        icon: "/icons/chat.svg",
      },
      {
        id: 3,
        title: "Performance Tracking & Analytics",
        description:
          "Monitor franchise performance through real-time reports and dashboards that measure KPIs, revenue, and compliance metrics.",
        icon: "/icons/graph.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Franchise Growth & Operations Solutions",
    mainDescription:
      "Our franchise management solutions enable enterprises to scale faster with integrated systems for training, compliance, reporting, and customer engagement.",
    items: [
      {
        id: "crm-integration",
        icon: "Leaf",
        title: "CRM Integration",
        subtitle: "Centralized Customer Management",
        description:
          "Integrate CRM systems to maintain customer data consistency across all franchise outlets and improve loyalty tracking.",
      },
      {
        id: "inventory-tracking",
        icon: "Leaf",
        title: "Inventory & Supply Chain Management",
        subtitle: "Real-Time Stock Control",
        description:
          "Monitor inventory across multiple locations and automate supply chain logistics with predictive restocking alerts.",
      },
      {
        id: "training",
        icon: "Leaf",
        title: "Training & Certification Portal",
        subtitle: "Empower Franchisees",
        description:
          "Provide standardized training modules, assessments, and certifications to ensure brand and operational consistency.",
      },
      {
        id: "compliance",
        icon: "Leaf",
        title: "Compliance & Quality Assurance",
        subtitle: "Maintain Brand Standards",
        description:
          "Track compliance across franchise outlets and manage audits with automated checklists and performance reviews.",
      },
      {
        id: "financials",
        icon: "Leaf",
        title: "Finance & Royalty Management",
        subtitle: "Automated Revenue Tracking",
        description:
          "Manage royalties, payments, and financial settlements with transparency and accuracy across your franchise network.",
      },
      {
        id: "marketing",
        icon: "Leaf",
        title: "Marketing Campaign Automation",
        subtitle: "Brand-Wide Promotions",
        description:
          "Plan, distribute, and monitor localized marketing campaigns to ensure consistent branding and measurable results.",
      },
    ],
    linkText: "Explore Franchise Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Franchise Management Platforms",
    subtitle:
      "Our intelligent management systems help franchisors oversee operations, performance, and communication across all locations with ease.",
    subtitleLink: { text: "franchise software", url: "#" },
    laptopImage: "/images/franchise-management-laptop.jpg",
    mobileImage: "/images/franchise-management-mobile.jpg",
    topFeatures: [
      {
        id: "dashboard",
        icon: "map",
        title: "Unified Dashboard",
        description:
          "Access real-time insights on operations, finance, and compliance across all franchise outlets in one view.",
      },
      {
        id: "workflow",
        icon: "map",
        title: "Automated Workflows",
        description:
          "Automate repetitive tasks such as reporting, approvals, and data entry for higher efficiency.",
      },
      {
        id: "communication",
        icon: "map",
        title: "Multi-Level Communication",
        description:
          "Enable smooth coordination between regional managers, franchise owners, and the corporate team.",
      },
    ],
    bottomFeatures: [
      {
        id: "analytics",
        icon: "map",
        title: "Advanced Analytics & Reporting",
        description:
          "Get AI-powered insights on sales, customer engagement, and franchise growth opportunities.",
      },
      {
        id: "mobile-app",
        icon: "map",
        title: "Mobile Access",
        description:
          "Manage your entire franchise network on the go with secure, cloud-based mobile applications.",
      },
      {
        id: "security",
        icon: "map",
        title: "Data Privacy & Security",
        description:
          "Ensure compliance with data security standards through encryption, user authentication, and role-based access control.",
      },
      {
        id: "integration",
        icon: "map",
        title: "ERP & POS Integration",
        description:
          "Seamlessly connect franchise management with accounting, POS, and ERP systems for smooth data flow.",
      },
    ],
    ctaText: "Get Franchise Management Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is Franchise Management Software?",
        answer:
          "Franchise Management Software is a centralized platform designed to manage franchise operations, communication, compliance, and analytics across all locations.",
      },
      {
        id: "2",
        question: "Can the software handle multiple franchise locations?",
        answer:
          "Yes. Our platform supports unlimited franchise outlets, allowing you to manage each location’s data, performance, and compliance efficiently.",
      },
      {
        id: "3",
        question: "Does it integrate with accounting or POS systems?",
        answer:
          "Absolutely. We integrate with popular ERP and POS systems for seamless financial tracking, royalty management, and automated reporting.",
      },
      {
        id: "4",
        question: "Is training and onboarding included?",
        answer:
          "Yes. The system includes built-in modules for franchisee onboarding, training, and performance certification.",
      },
      {
        id: "5",
        question: "Can I monitor franchise performance in real time?",
        answer:
          "Yes. Our dashboard provides live insights into franchise sales, compliance, inventory, and operational KPIs across all units.",
      },
      {
        id: "6",
        question: "Is the software cloud-based and secure?",
        answer:
          "Yes. The solution is hosted on secure cloud servers with encrypted data, ensuring accessibility and safety for all users.",
      },
    ],
  },
};
