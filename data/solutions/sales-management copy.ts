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
          "Capture leads from multiple channels, assign them automatically, and track their journey through the sales pipeline.",
      },
      {
        id: "sales-automation",
        icon: "Leaf",
        title: "Sales Automation",
        subtitle: "Streamline Sales Processes",
        description:
          "Automate repetitive sales tasks such as follow-ups, notifications, and reporting, freeing your team to focus on closing deals.",
      },
      {
        id: "deal-tracking",
        icon: "Leaf",
        title: "Deal & Opportunity Tracking",
        subtitle: "Monitor Progress in Real-Time",
        description:
          "Track all deals, stages, and opportunities in real-time to ensure nothing falls through the cracks.",
      },
      {
        id: "performance-analytics",
        icon: "Leaf",
        title: "Sales Performance Analytics",
        subtitle: "Data-Driven Insights",
        description:
          "Analyze sales metrics, forecast revenue, and measure team performance to make informed business decisions.",
      },
      {
        id: "mobile-access",
        icon: "Leaf",
        title: "Mobile Sales Management",
        subtitle: "Manage Sales On-The-Go",
        description:
          "Enable your sales team to access CRM, update leads, and close deals from any device, anytime, anywhere.",
      },
      {
        id: "integration",
        icon: "Leaf",
        title: "Integration with ERP & Marketing",
        subtitle: "Seamless Workflow",
        description:
          "Integrate your sales platform with ERP, marketing automation, and communication tools for a unified workflow.",
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
          "Connect your sales platform with existing CRM, ERP, and marketing tools for smooth data flow.",
      },
      {
        id: "security",
        icon: "map",
        title: "Data Security & Compliance",
        description:
          "Ensure secure customer data storage with encryption, access control, and compliance with industry regulations.",
      },
      {
        id: "mobile-access",
        icon: "map",
        title: "Mobile Accessibility",
        description:
          "Empower your sales team to work from anywhere with mobile apps and real-time updates.",
      },
      {
        id: "alerts",
        icon: "map",
        title: "Real-Time Alerts & Notifications",
        description:
          "Receive notifications for new leads, deal progress, or follow-up reminders to never miss an opportunity.",
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
