import { IndustryConfig } from "@/types/industries";
 
export const realEstate: IndustryConfig = {
  slug: "real-estate",
 
  banner: {
    title: "Transform Property Operations with",
    highlight: "AI-Powered Real Estate Management Solutions",
    subtitle:
      "Streamline property sales, leasing, and management with intelligent automation, analytics, and CRM integration. Our software empowers realtors, developers, and investors to make data-driven decisions and maximize ROI.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Real Estate Solutions",
  },
 
  techHero: {
    heading: "Hire Expert Developers for Real Estate Software Solutions",
    description:
      "We design and develop advanced real estate software — from property management systems to AI-powered analytics platforms — helping businesses automate operations, improve visibility, and boost profitability.",
    services: [
      {
        id: "property-management",
        title: "Property Management Systems",
        icon: "Tractor",  //Building2
        position: "left",
      },
      {
        id: "real-estate-crm",
        title: "Real Estate CRM Platforms",
        icon: "Tractor", //Users
        position: "left",
      },
      {
        id: "listing-portals",
        title: "Online Property Listing Portals",
        icon: "Tractor", //Globe
        position: "left",
      },
      {
        id: "valuation-ai",
        title: "AI-Based Property Valuation Tools",
        icon: "Tractor", //Cpu
        position: "left",
      },
      {
        id: "virtual-tour",
        title: "3D Virtual Tour & Visualization Systems",
        icon: "Tractor", //Camera
        position: "right",
      },
      {
        id: "smart-leasing",
        title: "Smart Leasing & Contract Management",
        icon: "Tractor", //FileText
        position: "right",
      },
      {
        id: "investment-analytics",
        title: "Real Estate Investment Analytics",
        icon: "Tractor", //BarChart3
        position: "right",
      },
      {
        id: "tenant-engagement",
        title: "Tenant Engagement Platforms",
        icon: "Tractor", //MessageSquare
        position: "right",
      },
    ],
  },
 
  solutions: {
    mainTitle: "Innovative Digital Solutions for the Real Estate Industry",
    mainDescription:
      "From property management automation to AI-based valuation and predictive analytics, we help real estate businesses transform digitally and operate efficiently in a data-driven marketplace.",
    items: [
      {
        id: "smart-property",
        icon: "Leaf", //Home
        title: "Smart Property Management",
        subtitle: "",
        description:
          "Automate maintenance requests, tenant communication, and rent collection with centralized management tools.",
      },
      {
        id: "crm-system",
        icon: "Leaf", //Users
        title: "Real Estate CRM Systems",
        subtitle: "",
        description:
          "Track leads, manage clients, and streamline sales workflows through intelligent CRM automation.",
      },
      {
        id: "listing-platforms",
        icon: "Leaf", //MapPin
        title: "Property Listing Platforms",
        subtitle: "",
        description:
          "Create feature-rich online listing portals with filters, 3D tours, and integrated inquiry management.",
      },
      {
        id: "valuation-engine",
        icon: "Leaf", //Cpu
        title: "AI Property Valuation Engine",
        subtitle: "",
        description:
          "Use data analytics and machine learning to estimate accurate property values and market trends in real time.",
      },
      {
        id: "investment-insights",
        icon: "Leaf", //TrendingUp
        title: "Investment Insights & Forecasting",
        subtitle: "",
        description:
          "Leverage predictive analytics to identify profitable investment opportunities and portfolio risks.",
      },
      {
        id: "tenant-apps",
        icon: "Leaf", //Smartphone
        title: "Tenant & Owner Mobile Apps",
        subtitle: "",
        description:
          "Build user-friendly apps for tenants and property owners to manage payments, documents, and communication on the go.",
      },
    ],
    linkText: "Explore Real Estate Solutions",
    linkUrl: "/contact-us",
  },
 
  managementSolutions: {
    title: "Comprehensive Real Estate Management Ecosystem",
    subtitle:
      "Digitize every aspect of your real estate operations with AI, automation, and integrated data analytics for a smarter, more transparent ecosystem.",
    subtitleLink: { text: "real estate software", url: "#" },
    laptopImage: "/images/real-estate-laptop.jpg",
    mobileImage: "/images/real-estate-mobile.jpg",
    topFeatures: [
      {
        id: "portfolio-tracking",
        icon: "map", //PieChart
        title: "Portfolio Tracking & Insights",
        description:
          "Monitor assets, track performance, and generate detailed reports with data visualization tools.",
      },
      {
        id: "contract-automation",
        icon: "map", //FileSignature
        title: "Contract Automation & eSignatures",
        description:
          "Streamline document workflows with secure, digital contract management and eSignatures.",
      },
      {
        id: "communication-hub",
        icon: "map", //MessageCircle
        title: "Integrated Communication Hub",
        description:
          "Centralize communication among agents, tenants, and property managers for faster collaboration.",
      },
    ],
    bottomFeatures: [
      {
        id: "data-security",
        icon: "map", //Shield
        title: "Data Security & Compliance",
        description:
          "Protect customer and property data with end-to-end encryption, role-based access, and GDPR compliance.",
      },
      {
        id: "analytics-dashboard",
        icon: "map", //BarChart4
        title: "Analytics & Performance Dashboard",
        description:
          "Get actionable insights into occupancy rates, ROI, and sales funnel metrics in real time.",
      },
      {
        id: "mobile-platforms",
        icon: "map", //Smartphone
        title: "Mobile Real Estate Platforms",
        description:
          "Access your property data, leads, and analytics anytime, anywhere, through fully responsive mobile systems.",
      },
      {
        id: "team-collaboration",
        icon: "map", //Users
        title: "Agent & Broker Collaboration Tools",
        description:
          "Enhance team efficiency with tools for task assignments, performance tracking, and shared databases.",
      },
    ],
    ctaText: "BUILD YOUR REAL ESTATE PLATFORM",
    onCtaClick: () => {},
  },
  faq :{
  title: "Real Estate FAQ",
  items: [
    {
      id: "1",
      question: "What is Real Estate Management Software?",
      answer:
        "Real Estate Management Software helps property owners, agents, and developers manage listings, track sales, handle leases, and automate financial transactions. It centralizes all operations to improve efficiency and client satisfaction.",
    },
    {
      id: "2",
      question: "How can technology improve property management?",
      answer:
        "Technology simplifies rent collection, maintenance tracking, and tenant communication. With real-time dashboards and automated alerts, property managers can reduce manual work and improve operational transparency.",
    },
    {
      id: "3",
      question: "Does real estate software support virtual property tours?",
      answer:
        "Yes. Modern real estate platforms integrate 3D visualization, AR/VR, and video walkthroughs to showcase properties remotely—offering buyers and tenants a realistic experience without physical visits.",
    },
    {
      id: "4",
      question: "Can real estate solutions help with lead generation?",
      answer:
        "Absolutely. Real estate CRM and marketing tools help capture, nurture, and convert leads through automated campaigns, targeted listings, and AI-powered recommendations tailored to buyer preferences.",
    },
    {
      id: "5",
      question: "How does AI benefit the real estate industry?",
      answer:
        "AI enables smarter property valuations, predictive market analytics, and customer behavior insights. It helps agents make data-driven decisions and identify high-value investment opportunities faster.",
    },
    {
      id: "6",
      question: "Is it possible to integrate payment systems into property software?",
      answer:
        "Yes. Most real estate software supports integrated payment gateways for online rent collection, invoice management, and transaction tracking—enhancing convenience for both tenants and owners.",
    },
    {
      id: "7",
      question: "Can real estate software manage multiple properties or agents?",
      answer:
        "Yes. Scalable property management systems allow administrators to oversee multiple locations, agents, and portfolios from a single dashboard—ideal for large real estate agencies or property investment firms.",
    },
    {
      id: "8",
      question: "How secure is data in real estate management platforms?",
      answer:
        "Real estate software uses encryption, secure logins, and cloud-based backups to protect property data, client information, and financial records from unauthorized access or loss.",
    },
    {
      id: "9",
      question: "Can real estate platforms integrate with MLS and other listing services?",
      answer:
        "Yes. Real estate software can integrate with MLS databases and third-party listing platforms to automatically sync and update property listings, ensuring accuracy and broader market reach.",
    },
    {
      id: "10",
      question: "What trends are shaping the future of real estate technology?",
      answer:
        "AI analytics, blockchain-based contracts, virtual property tours, and smart home integrations are transforming the real estate landscape—making transactions faster, safer, and more transparent.",
    },
  ],
},

};