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
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
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
          "Integrate powerful CRM systems to unify customer data across all franchise locations. Gain actionable insights into loyalty programs and retention trends. Deliver personalized customer experiences that drive engagement and repeat sales.",
      },
      {
        id: "inventory-tracking",
        icon: "Leaf",
        title: "Inventory & Supply Chain Management",
        subtitle: "Real-Time Stock Control",
        description:
          "Monitor and manage inventory seamlessly across all outlets with real-time data visibility. Automate reordering and optimize stock distribution through predictive analytics. Reduce waste, improve efficiency, and ensure timely product availability.",
      },
      {
        id: "training",
        icon: "Leaf",
        title: "Training & Certification Portal",
        subtitle: "Empower Franchisees",
        description:
          "Provide an intuitive digital learning platform for franchise training and onboarding. Deliver standardized modules, quizzes, and certifications to maintain brand consistency. Track performance analytics and skill development across teams.",
      },
      {
        id: "compliance",
        icon: "Leaf",
        title: "Compliance & Quality Assurance",
        subtitle: "Maintain Brand Standards",
        description:
          "Automate compliance monitoring and ensure adherence to operational protocols. Conduct digital audits and inspections using customizable checklists. Maintain high-quality service standards across all franchise locations effortlessly.",
      },
      {
        id: "financials",
        icon: "Leaf",
        title: "Finance & Royalty Management",
        subtitle: "Automated Revenue Tracking",
        description:
          "Simplify franchise accounting with transparent revenue tracking and royalty automation. Manage invoices, settlements, and payments with real-time accuracy. Eliminate manual errors and streamline financial reconciliation across your network.",
      },
      {
        id: "marketing",
        icon: "Leaf",
        title: "Marketing Campaign Automation",
        subtitle: "Brand-Wide Promotions",
        description:
          "Launch and manage localized marketing campaigns from a central platform. Maintain consistent brand messaging across regions while enabling local customization. Analyze campaign performance and optimize future strategies with data-driven insights.",
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
<<<<<<< HEAD
    laptopImage: "https://i.pinimg.com/736x/a2/81/2c/a2812cac20aad52df7ec97bc60a39bcd.jpg",
    mobileImage: "https://i.pinimg.com/736x/21/9b/d0/219bd01bf34ac06428eb897698135724.jpg",
=======
    laptopImage:
      "https://i.pinimg.com/736x/a2/81/2c/a2812cac20aad52df7ec97bc60a39bcd.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/21/9b/d0/219bd01bf34ac06428eb897698135724.jpg",
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
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
          "Leverage AI-driven dashboards to monitor performance across locations in real time. Identify sales patterns, customer trends, and growth opportunities with precision. Transform raw data into actionable insights for smarter decision-making.",
      },
      {
        id: "mobile-app",
        icon: "map",
        title: "Mobile Access",
        description:
          "Stay in control of your entire franchise network anytime, anywhere with a secure mobile platform. Track operations, performance, and team activities on the go. Enhance flexibility and responsiveness through real-time mobile updates.",
      },
      {
        id: "security",
        icon: "map",
        title: "Data Privacy & Security",
        description:
          "Protect franchise data with enterprise-grade encryption and secure cloud storage. Manage access through multi-level authentication and role-based controls. Ensure full compliance with global data protection and privacy standards.",
      },
      {
        id: "integration",
        icon: "map",
        title: "ERP & POS Integration",
        description:
          "Unify franchise operations by connecting POS, accounting, and ERP systems effortlessly. Enable smooth data synchronization between sales, finance, and inventory. Improve operational efficiency and decision accuracy with automated integration.",
      },
    ],
    ctaText: "Get Franchise Management Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
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
