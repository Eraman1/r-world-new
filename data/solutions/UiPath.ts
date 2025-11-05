import { SolutionConfig } from "@/types/solutions";

export const UiPath: SolutionConfig = {
  slug: "UiPath",

  banner: {
    title: "Automate Smarter with",
    highlight: "UiPath RPA & Intelligent Automation Solutions",
    subtitle:
      "Streamline your business processes with UiPath-powered automation. From repetitive tasks to complex workflows, achieve efficiency and scalability through intelligent bots.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore UiPath Solutions",
  },

  developerDetails: {
    heading: "Certified UiPath Developers & Automation Experts",
    subheading:
      "Our UiPath-certified professionals design, develop, and deploy scalable automation workflows tailored to your business needs.",
    mainTitle: "Comprehensive UiPath RPA Development Services",
    mainDescription:
      "We help enterprises leverage UiPath’s full potential for Robotic Process Automation (RPA). From process discovery to orchestration and bot deployment, we enable digital transformation with efficiency and accuracy.",
    image: "/images/uipath-laptop.png",
    services: [
      {
        id: 1,
        title: "UiPath Bot Development",
        description:
          "We build intelligent software bots to automate repetitive, rules-based business processes and improve team productivity.",
        icon: "/icons/robot.svg",
      },
      {
        id: 2,
        title: "Workflow Automation",
        description:
          "Automate data entry, invoice processing, HR tasks, and more using UiPath Studio, Orchestrator, and attended/unattended bots.",
        icon: "/icons/workflow.svg",
      },
      {
        id: 3,
        title: "Process Optimization & Integration",
        description:
          "Integrate UiPath bots with ERP, CRM, and third-party applications like SAP, Salesforce, and Excel for seamless automation.",
        icon: "/icons/integration.svg",
      },
    ],
  },

  solutions: {
  mainTitle: "UiPath Automation & RPA Solutions",
  mainDescription:
    "Empower your organization with intelligent automation. We design UiPath-driven solutions to accelerate workflows, reduce manual effort, and increase ROI through smart digital transformation.",
  items: [
    {
      id: "document-processing",
      icon: "Leaf",
      title: "Document Processing Automation",
      subtitle: "AI-Powered Data Extraction",
      description:
        "Leverage UiPath’s advanced OCR and AI tools to extract, validate, and categorize data from invoices, PDFs, and scanned forms. Automate document handling from start to finish with accuracy and consistency. Save hours of manual effort and ensure faster data availability across departments.",
    },
    {
      id: "financial-automation",
      icon: "Leaf",
      title: "Financial & Accounting Automation",
      subtitle: "Reduce Manual Entry Errors",
      description:
        "Streamline financial operations by automating data entry, reconciliations, and reporting workflows. Minimize human error and maintain audit-ready accuracy in accounting records. Empower your finance teams to focus on analysis, compliance, and strategic decision-making.",
    },
    {
      id: "customer-service",
      icon: "Leaf",
      title: "Customer Service Automation",
      subtitle: "Enhance CX with Virtual Assistants",
      description:
        "Deploy UiPath bots to handle support tickets, retrieve customer data, and automate repetitive inquiries. Reduce response times while ensuring personalized service delivery. Elevate your customer experience through seamless human-bot collaboration across helpdesk platforms.",
    },
    {
      id: "data-integration",
      icon: "Leaf",
      title: "Data Integration Workflows",
      subtitle: "Seamless System Connectivity",
      description:
        "Enable smooth data flow across ERP, CRM, and legacy systems with UiPath integration bots. Eliminate data silos and ensure real-time synchronization between platforms. Simplify digital operations by connecting multiple business applications effortlessly.",
    },
    {
      id: "ai-decision-making",
      icon: "Leaf",
      title: "AI-Driven Decision Making",
      subtitle: "Smarter Automation Outcomes",
      description:
        "Combine UiPath RPA with AI and machine learning to automate decisions based on predictive analytics. Improve business accuracy with intelligent workflows that learn and adapt. Achieve greater agility and innovation through data-driven process automation.",
    },
    {
      id: "employee-productivity",
      icon: "Leaf",
      title: "Employee Productivity Bots",
      subtitle: "Focus on High-Value Work",
      description:
        "Boost team efficiency by automating repetitive admin, HR, and reporting tasks with UiPath robots. Allow employees to focus on creative, strategic, and analytical work. Foster a smarter, more productive workplace through intelligent automation solutions.",
    },
  ],
  linkText: "Automate with UiPath",
  linkUrl: "/contact-us",
},


  managementSolutions: {
    title: "UiPath Orchestration & Management Systems",
    subtitle:
      "Centralize, monitor, and manage your bots efficiently using UiPath Orchestrator for enterprise-grade automation governance.",
    subtitleLink: { text: "UiPath Orchestrator", url: "#" },
    laptopImage: "/images/uipath-management.jpg",
    mobileImage: "/images/uipath-management-mobile.jpg",
    topFeatures: [
      {
        id: "monitoring",
        icon: "map",
        title: "Real-Time Monitoring",
        description:
          "Track bot performance, errors, and process logs in real-time to ensure uninterrupted automation workflows.",
      },
      {
        id: "scalability",
        icon: "map",
        title: "Enterprise Scalability",
        description:
          "Easily scale automation across departments and systems with centralized deployment through UiPath Orchestrator.",
      },
      {
        id: "security",
        icon: "map",
        title: "Secure Credential Management",
        description:
          "Manage and encrypt user credentials with UiPath’s built-in security and governance features.",
      },
    ],
    bottomFeatures: [
  {
    id: "analytics",
    icon: "map",
    title: "Automation Analytics",
    description:
      "Gain actionable insights into your automation performance with real-time analytics dashboards. Track ROI, efficiency, and process optimization metrics effortlessly. Use data-driven intelligence to refine workflows and boost productivity across teams.",
  },
  {
    id: "cloud-integration",
    icon: "map",
    title: "Cloud Orchestration",
    description:
      "Deploy and manage bots securely on the UiPath Cloud for enhanced scalability and uptime. Enable remote accessibility to automation assets from any location. Simplify infrastructure management while maintaining performance and reliability.",
  },
  {
    id: "integration",
    icon: "map",
    title: "Seamless App Integrations",
    description:
      "Effortlessly integrate UiPath automation with SAP, Salesforce, Power BI, and leading enterprise tools. Connect your digital ecosystem for unified data flow and improved collaboration. Eliminate silos to achieve a streamlined and connected business environment.",
  },
  {
    id: "ai-robotics",
    icon: "map",
    title: "AI Robotics",
    description:
      "Combine robotic process automation with artificial intelligence for smarter workflows. Enable predictive analytics, pattern recognition, and self-learning capabilities. Drive intelligent decision-making and automation that evolves with your business needs.",
  },
],
ctaText: "Get UiPath Experts",
onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is UiPath used for?",
        answer:
          "UiPath is an RPA platform that automates repetitive business tasks using software robots, improving accuracy and efficiency across operations.",
      },
      {
        id: "2",
        question: "Can UiPath integrate with existing enterprise systems?",
        answer:
          "Yes, UiPath easily integrates with popular platforms like SAP, Oracle, Salesforce, Excel, and databases through pre-built connectors and APIs.",
      },
      {
        id: "3",
        question: "What industries benefit most from UiPath automation?",
        answer:
          "UiPath is widely used across banking, healthcare, logistics, retail, and manufacturing for automating back-office and front-end processes.",
      },
      {
        id: "4",
        question: "Is UiPath suitable for small businesses?",
        answer:
          "Absolutely. UiPath provides scalable automation options for businesses of all sizes, from startups to large enterprises.",
      },
      {
        id: "5",
        question: "Do you offer UiPath implementation and training?",
        answer:
          "Yes, we provide end-to-end UiPath implementation, support, and training to help teams adopt automation effectively.",
      },
      {
        id: "6",
        question: "Can UiPath bots use AI and machine learning?",
        answer:
          "Yes, UiPath integrates AI and ML for intelligent automation, enabling bots to handle unstructured data, predictions, and cognitive tasks.",
      },
    ],
  },
};
