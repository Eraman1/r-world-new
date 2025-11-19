import { SolutionConfig } from "@/types/solutions";

export const salesManagement: SolutionConfig = {
  slug: "sales-management",

  banner: {
    title: "Boost Your Revenue with",
    highlight: "Advanced Sales Management Solutions",
    subtitle:
      "Streamline sales processes, track performance, and optimize customer engagement with our intelligent sales management systems.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Sales Management Solutions",
  },

  developerDetails: {
    heading: "Experts in Sales Automation & CRM Systems",
    subheading:
      "We help businesses transform their sales operations with modern, scalable, and data-driven sales management solutions.",
    mainTitle: "Professional Sales Management Services",
    mainDescription:
      "Our solutions cover CRM, lead management, sales automation, and analytics. We ensure your sales teams work efficiently, track deals accurately, and make data-backed decisions to drive revenue growth.",
    image: "/images/sales-management-laptop.png",
    services: [
      {
        id: 1,
        title: "CRM & Customer Management",
        description:
          "Manage customer relationships effectively, track interactions, and nurture leads to close more deals.",
        icon: "/icons/customer.svg",
      },
      {
        id: 2,
        title: "Sales Pipeline Automation",
        description:
          "Automate lead assignment, follow-ups, and task management to accelerate your sales cycles.",
        icon: "/icons/pipeline.svg",
      },
      {
        id: 3,
        title: "Performance Analytics & Reporting",
        description:
          "Gain insights into sales team performance, revenue trends, and deal conversion metrics through advanced dashboards.",
        icon: "/icons/analytics.svg",
      },
    ],
  },

 solutions: {
  mainTitle: "Comprehensive Sales Management Solutions",
  mainDescription:
    "Our sales management platforms enable businesses to manage leads, automate sales workflows, and track performance metrics. Empower your team with actionable insights and efficient processes.",
  items: [
    {
      id: "lead-management",
      icon: "Leaf",
      title: "Lead Management",
      subtitle: "Capture, Track & Convert Leads",
      description:
        "Capture leads from multiple channels and centralize them in a unified system for better visibility. Automatically assign leads to the right sales representatives. Track each lead’s journey to maximize conversion opportunities efficiently.",
    },
    {
      id: "sales-automation",
      icon: "Leaf",
      title: "Sales Automation",
      subtitle: "Streamline Sales Processes",
      description:
        "Automate repetitive tasks such as follow-ups, notifications, and report generation. Reduce manual errors and free your team to focus on closing deals. Enhance productivity and ensure consistent engagement with every prospect.",
    },
    {
      id: "deal-tracking",
      icon: "Leaf",
      title: "Deal & Opportunity Tracking",
      subtitle: "Monitor Progress in Real-Time",
      description:
        "Track all deals and opportunities across stages with real-time updates. Identify bottlenecks early and ensure timely actions. Gain complete visibility of the sales pipeline to improve forecasting and outcomes.",
    },
    {
      id: "performance-analytics",
      icon: "Leaf",
      title: "Sales Performance Analytics",
      subtitle: "Data-Driven Insights",
      description:
        "Analyze team performance, sales metrics, and revenue trends for smarter decision-making. Forecast sales accurately based on historical data and current pipeline. Make informed strategic choices to drive revenue growth effectively.",
    },
    {
      id: "mobile-access",
      icon: "Leaf",
      title: "Mobile Sales Management",
      subtitle: "Manage Sales On-The-Go",
      description:
        "Allow sales reps to access CRM, update leads, and close deals from any device. Maintain seamless communication with team members and clients while on the move. Empower your team with real-time data, anywhere, anytime.",
    },
    {
      id: "integration",
      icon: "Leaf",
      title: "Integration with ERP & Marketing",
      subtitle: "Seamless Workflow",
      description:
        "Connect your sales platform with ERP, marketing automation, and communication tools. Ensure data consistency across departments and streamline workflows. Enhance efficiency and collaboration with an integrated technology ecosystem.",
    },
  ],
  linkText: "Get Sales Management Solutions",
  linkUrl: "/contact-us",
},


  managementSolutions: {
    title: "Sales Data Management Platforms",
    subtitle:
      "Manage customer data, track sales activities, and gain actionable insights with our centralized sales management systems.",
    subtitleLink: { text: "sales management software", url: "#" },
    laptopImage: "https://i.pinimg.com/736x/a7/7b/0a/a77b0a8dc6a746346efa3016a7f5ba05.jpg",
    mobileImage: "https://i.pinimg.com/736x/b4/7b/c1/b47bc1ec1a5bf67d190180500ca38c3c.jpg",
    topFeatures: [
      {
        id: "dashboard",
        icon: "map",
        title: "Centralized Sales Dashboard",
        description:
          "Monitor all sales activities, leads, and revenue KPIs from a single dashboard for quick decision-making.",
      },
      {
        id: "analytics",
        icon: "map",
        title: "Real-Time Reporting & Analytics",
        description:
          "Generate reports on sales performance, team efficiency, and revenue trends automatically.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Workflow Automation",
        description:
          "Automate lead routing, follow-ups, and reminders to ensure a streamlined sales process.",
      },
    ],
   bottomFeatures: [
  {
    id: "integration",
    icon: "map",
    title: "CRM & ERP Integration",
    description:
      "Seamlessly connect your sales platform with existing CRM, ERP, and marketing tools. Ensure smooth data flow between departments for accurate reporting. Improve efficiency by centralizing customer and operational data into a unified system.",
  },
  {
    id: "security",
    icon: "map",
    title: "Data Security & Compliance",
    description:
      "Protect sensitive customer and business data with advanced encryption and access control measures. Stay compliant with industry regulations and legal requirements. Minimize risk through regular audits, secure backups, and proactive monitoring.",
  },
  {
    id: "mobile-access",
    icon: "map",
    title: "Mobile Accessibility",
    description:
      "Enable your sales team to work from anywhere with fully responsive mobile applications. Access real-time data, client information, and task updates on the go. Improve productivity and responsiveness with instant mobile collaboration.",
  },
  {
    id: "alerts",
    icon: "map",
    title: "Real-Time Alerts & Notifications",
    description:
      "Receive instant notifications for new leads, deal updates, or follow-up reminders. Stay informed about critical opportunities without checking the system constantly. Empower your team to act quickly and close deals more efficiently.",
  },
],
ctaText: "Get Sales Experts Consultation",
onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is a sales management system?",
        answer:
          "A sales management system helps businesses manage leads, track sales activities, automate workflows, and analyze performance metrics.",
      },
      {
        id: "2",
        question: "Which businesses can benefit from sales management software?",
        answer:
          "Sales teams of all sizes, from startups to enterprises, can use sales management software to streamline processes and boost revenue.",
      },
      {
        id: "3",
        question: "Can I access sales data on mobile devices?",
        answer:
          "Yes, modern sales management platforms provide mobile apps to access CRM, update leads, and monitor performance on-the-go.",
      },
      {
        id: "4",
        question: "Does it integrate with other business tools?",
        answer:
          "Yes, our solutions integrate with ERP, CRM, marketing automation, and communication platforms for seamless workflow.",
      },
      {
        id: "5",
        question: "Can sales management improve team performance?",
        answer:
          "Absolutely. By automating workflows, tracking KPIs, and providing insights, sales management systems help teams perform more efficiently.",
      },
      {
        id: "6",
        question: "Do you provide custom sales management solutions?",
        answer:
          "Yes, we develop tailored solutions to match your business processes, team structure, and reporting requirements.",
      },
    ],
  },
};
