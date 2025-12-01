import { IndustryConfig } from "@/types/industries";

export const realEstate: IndustryConfig = {
  slug: "real-estate",

  banner: {
    title: "Transform Property Operations with",
    highlight: "AI-Powered Real Estate Management Solutions",
    subtitle:
      "Streamline property sales, leasing, and management with intelligent automation, analytics, and CRM integration. Our software empowers realtors, developers, and investors to make data-driven decisions and maximize ROI.",
    image: "/industry/industryRealEstateBanner.webp",
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
        icon: "Tractor", //Building2
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
    deviceImages: {
      laptop: "/industry/industryRealEstateBanner.webp",
      tablet: "/industry/industryRealEstateBanner.webp",
      mobile: "/industry/industryRealEstateBanner.webp",
    },
  },

  solutions: {
<<<<<<< HEAD
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
        "Automate maintenance requests and tenant communications seamlessly. Simplify rent collection with integrated payment gateways. Access all property data from a centralized dashboard. Improve operational efficiency with digital scheduling tools. Ensure smooth property management from any device in real time.",
    },
    {
      id: "crm-system",
      icon: "Leaf", //Users
      title: "Real Estate CRM Systems",
      subtitle: "",
      description:
        "Track leads and manage clients with advanced CRM automation. Streamline your sales pipeline with smart task assignments. Get real-time insights into customer interactions and deals. Improve conversion rates through targeted marketing workflows. Build lasting relationships with a unified communication hub.",
    },
    {
      id: "listing-platforms",
      icon: "Leaf", //MapPin
      title: "Property Listing Platforms",
      subtitle: "",
      description:
        "Create dynamic portals for property buyers, sellers, and agents. Offer 3D virtual tours and intelligent search filters. Manage property inquiries and appointments effortlessly. Enhance visibility with SEO-optimized listings and analytics. Deliver an engaging property search experience to every user.",
    },
    {
      id: "valuation-engine",
      icon: "Leaf", //Cpu
      title: "AI Property Valuation Engine",
      subtitle: "",
      description:
        "Use advanced AI algorithms to calculate real-time property values. Analyze local trends and market conditions with precision. Integrate automated reports for investor and client transparency. Reduce manual effort with predictive valuation models. Make confident pricing decisions backed by smart analytics.",
    },
    {
      id: "investment-insights",
      icon: "Leaf", //TrendingUp
      title: "Investment Insights & Forecasting",
      subtitle: "",
      description:
        "Harness predictive analytics to assess investment potential. Identify profitable assets through data-driven forecasting. Evaluate market risks and opportunities with custom dashboards. Empower stakeholders with clear financial performance reports. Optimize real estate portfolios for maximum long-term gains.",
    },
    {
      id: "tenant-apps",
      icon: "Leaf", //Smartphone
      title: "Tenant & Owner Mobile Apps",
      subtitle: "",
      description:
        "Develop intuitive apps for tenants and property owners alike. Simplify rent payments and document access through mobile tools. Enable instant notifications for updates and maintenance tasks. Build transparency and trust with real-time communication. Enhance user convenience with secure, on-the-go management.",
    },
  ],
  linkText: "Explore Real Estate Solutions",
  linkUrl: "/contact-us",
},

 
=======
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
          "Automate maintenance requests and tenant communications seamlessly. Simplify rent collection with integrated payment gateways. Access all property data from a centralized dashboard. Improve operational efficiency with digital scheduling tools. Ensure smooth property management from any device in real time.",
      },
      {
        id: "crm-system",
        icon: "Leaf", //Users
        title: "Real Estate CRM Systems",
        subtitle: "",
        description:
          "Track leads and manage clients with advanced CRM automation. Streamline your sales pipeline with smart task assignments. Get real-time insights into customer interactions and deals. Improve conversion rates through targeted marketing workflows. Build lasting relationships with a unified communication hub.",
      },
      {
        id: "listing-platforms",
        icon: "Leaf", //MapPin
        title: "Property Listing Platforms",
        subtitle: "",
        description:
          "Create dynamic portals for property buyers, sellers, and agents. Offer 3D virtual tours and intelligent search filters. Manage property inquiries and appointments effortlessly. Enhance visibility with SEO-optimized listings and analytics. Deliver an engaging property search experience to every user.",
      },
      {
        id: "valuation-engine",
        icon: "Leaf", //Cpu
        title: "AI Property Valuation Engine",
        subtitle: "",
        description:
          "Use advanced AI algorithms to calculate real-time property values. Analyze local trends and market conditions with precision. Integrate automated reports for investor and client transparency. Reduce manual effort with predictive valuation models. Make confident pricing decisions backed by smart analytics.",
      },
      {
        id: "investment-insights",
        icon: "Leaf", //TrendingUp
        title: "Investment Insights & Forecasting",
        subtitle: "",
        description:
          "Harness predictive analytics to assess investment potential. Identify profitable assets through data-driven forecasting. Evaluate market risks and opportunities with custom dashboards. Empower stakeholders with clear financial performance reports. Optimize real estate portfolios for maximum long-term gains.",
      },
      {
        id: "tenant-apps",
        icon: "Leaf", //Smartphone
        title: "Tenant & Owner Mobile Apps",
        subtitle: "",
        description:
          "Develop intuitive apps for tenants and property owners alike. Simplify rent payments and document access through mobile tools. Enable instant notifications for updates and maintenance tasks. Build transparency and trust with real-time communication. Enhance user convenience with secure, on-the-go management.",
      },
    ],
    linkText: "Explore Real Estate Solutions",
    linkUrl: "/contact-us",
  },

>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
  managementSolutions: {
    title: "Comprehensive Real Estate Management Ecosystem",
    subtitle:
      "Digitize every aspect of your real estate operations with AI, automation, and integrated data analytics for a smarter, more transparent ecosystem.",
    subtitleLink: { text: "real estate software", url: "#" },
<<<<<<< HEAD
    laptopImage: "https://i.pinimg.com/736x/55/54/aa/5554aa9b7279042e83d29e382eae8d25.jpg",
    mobileImage: "https://i.pinimg.com/736x/14/f5/6d/14f56df09c193369a6eaaa394af16196.jpg",
=======
    laptopImage:
      "https://i.pinimg.com/736x/55/54/aa/5554aa9b7279042e83d29e382eae8d25.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/14/f5/6d/14f56df09c193369a6eaaa394af16196.jpg",
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
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
<<<<<<< HEAD
  {
    id: "data-security",
    icon: "map", //Shield
    title: "Data Security & Compliance",
    description:
      "Safeguard your client and property data with multi-layer encryption and advanced access controls. " +
      "Ensure compliance with GDPR, SOC 2, and other data protection regulations. " +
      "Monitor system integrity through automated alerts and audit trails. " +
      "Prevent unauthorized data exposure with secure authentication protocols. " +
      "Deliver peace of mind to your clients through full data transparency and trust.",
  },
  {
    id: "analytics-dashboard",
    icon: "map", //BarChart4
    title: "Analytics & Performance Dashboard",
    description:
      "Gain a complete overview of business performance with real-time analytics dashboards. " +
      "Track property sales, occupancy rates, lead conversion, and ROI seamlessly. " +
      "Visualize trends through customizable charts and predictive insights. " +
      "Identify top-performing agents and market segments instantly. " +
      "Make data-driven decisions that enhance efficiency and profitability.",
  },
  {
    id: "mobile-platforms",
    icon: "map", //Smartphone
    title: "Mobile Real Estate Platforms",
    description:
      "Access listings, client data, and performance metrics from any mobile device. " +
      "Stay connected with buyers and sellers through instant alerts and push notifications. " +
      "Manage leads, appointments, and transactions on the go. " +
      "Provide agents with a seamless user experience through responsive design. " +
      "Empower your workforce with mobility and flexibility in every operation.",
  },
  {
    id: "team-collaboration",
    icon: "map", //Users
    title: "Agent & Broker Collaboration Tools",
    description:
      "Enable smooth communication between agents, brokers, and clients through shared dashboards. " +
      "Assign tasks, track progress, and manage approvals in one unified workspace. " +
      "Facilitate transparent deal tracking and document sharing in real time. " +
      "Boost teamwork with built-in messaging and integrated workflows. " +
      "Increase overall productivity with an ecosystem designed for collaboration.",
  },
],
ctaText: "BUILD YOUR REAL ESTATE PLATFORM",
onCtaClick: () => {},
},

managementSolutionsTwo: {
  title: "Real Estate Management Software Solutions",
  subtitle:
    "Our real estate software developers build intelligent platforms to manage property listings, automate workflows, and streamline sales and leasing operations with data-driven insights.",
  subtitleLink: { text: "real estate management software", url: "#" },
  laptopImage: "https://i.pinimg.com/736x/e5/72/b0/e572b07dfc7c4590726560ac0985a7a9.jpg",
  mobileImage: "/images/real-estate-management-mobile.jpg",

  topFeatures: [
    {
      id: "property-management",
      icon: "Building2",
      title: "Property & Asset Management Systems",
      description:
        "Digitize property listings, leases, and maintenance workflows. Centralize portfolio management with real-time status tracking.",
      link: { text: "property management software", url: "#" },
    },
    {
      id: "crm-solutions",
      icon: "Users",
      title: "Real Estate CRM & Lead Management",
      description:
        "Automate lead capture, follow-ups, and client engagement. Convert prospects faster with intelligent analytics and reminders.",
      link: { text: "real estate crm software", url: "#" },
    },
    {
      id: "sales-analytics",
      icon: "BarChart4",
      title: "Sales, Booking & Analytics Platforms",
      description:
        "Track sales performance, booking pipelines, and agent productivity. Visualize market data to make informed investment decisions.",
      link: { text: "real estate analytics software", url: "#" },
    },
    {
      id: "document-automation",
      icon: "FileText",
      title: "Document & Contract Automation Tools",
      description:
        "Generate, e-sign, and store property contracts securely. Reduce paperwork with automated compliance and approval systems.",
      link: { text: "real estate document software", url: "#" },
    },
  ],

  bottomFeatures: [
    {
      id: "tenant-management",
      icon: "Home",
      title: "Tenant & Lease Management Portals",
      description:
        "Simplify tenant onboarding, rent collection, and renewals. Offer residents self-service access for requests and payments.",
    },
    {
      id: "property-listing",
      icon: "Globe",
      title: "Property Listing & MLS Integration",
      description:
        "Integrate your listings with MLS and real estate portals. Sync updates instantly across platforms for better visibility.",
    },
    {
      id: "financial-tools",
      icon: "CreditCard",
      title: "Financial & Payment Management Tools",
      description:
        "Automate billing, rent processing, and commission tracking. Ensure transparency with accurate, real-time financial reporting.",
    },
    {
      id: "admin-dashboard",
      icon: "Settings",
      title: "Admin Dashboard & Reporting Suite",
      description:
        "Monitor operations, sales, and occupancy from one dashboard. Gain actionable insights with data-driven visual reports.",
    },
  ],

  ctaText: "GET REAL ESTATE SOFTWARE DEVELOPERS",
  onCtaClick: "/contact-us",
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
=======
      {
        id: "data-security",
        icon: "map", //Shield
        title: "Data Security & Compliance",
        description:
          "Safeguard your client and property data with multi-layer encryption and advanced access controls. " +
          "Ensure compliance with GDPR, SOC 2, and other data protection regulations. " +
          "Monitor system integrity through automated alerts and audit trails. " +
          "Prevent unauthorized data exposure with secure authentication protocols. " +
          "Deliver peace of mind to your clients through full data transparency and trust.",
      },
      {
        id: "analytics-dashboard",
        icon: "map", //BarChart4
        title: "Analytics & Performance Dashboard",
        description:
          "Gain a complete overview of business performance with real-time analytics dashboards. " +
          "Track property sales, occupancy rates, lead conversion, and ROI seamlessly. " +
          "Visualize trends through customizable charts and predictive insights. " +
          "Identify top-performing agents and market segments instantly. " +
          "Make data-driven decisions that enhance efficiency and profitability.",
      },
      {
        id: "mobile-platforms",
        icon: "map", //Smartphone
        title: "Mobile Real Estate Platforms",
        description:
          "Access listings, client data, and performance metrics from any mobile device. " +
          "Stay connected with buyers and sellers through instant alerts and push notifications. " +
          "Manage leads, appointments, and transactions on the go. " +
          "Provide agents with a seamless user experience through responsive design. " +
          "Empower your workforce with mobility and flexibility in every operation.",
      },
      {
        id: "team-collaboration",
        icon: "map", //Users
        title: "Agent & Broker Collaboration Tools",
        description:
          "Enable smooth communication between agents, brokers, and clients through shared dashboards. " +
          "Assign tasks, track progress, and manage approvals in one unified workspace. " +
          "Facilitate transparent deal tracking and document sharing in real time. " +
          "Boost teamwork with built-in messaging and integrated workflows. " +
          "Increase overall productivity with an ecosystem designed for collaboration.",
      },
    ],
    ctaText: "BUILD YOUR REAL ESTATE PLATFORM",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6

  managementSolutionsTwo: {
    title: "Real Estate Management Software Solutions",
    subtitle:
      "Our real estate software developers build intelligent platforms to manage property listings, automate workflows, and streamline sales and leasing operations with data-driven insights.",
    subtitleLink: { text: "real estate management software", url: "#" },
    laptopImage:
      "https://i.pinimg.com/736x/e5/72/b0/e572b07dfc7c4590726560ac0985a7a9.jpg",
    mobileImage: "/images/real-estate-management-mobile.jpg",

    topFeatures: [
      {
        id: "property-management",
        icon: "Building2",
        title: "Property & Asset Management Systems",
        description:
          "Digitize property listings, leases, and maintenance workflows. Centralize portfolio management with real-time status tracking.",
        link: { text: "property management software", url: "#" },
      },
      {
        id: "crm-solutions",
        icon: "Users",
        title: "Real Estate CRM & Lead Management",
        description:
          "Automate lead capture, follow-ups, and client engagement. Convert prospects faster with intelligent analytics and reminders.",
        link: { text: "real estate crm software", url: "#" },
      },
      {
        id: "sales-analytics",
        icon: "BarChart4",
        title: "Sales, Booking & Analytics Platforms",
        description:
          "Track sales performance, booking pipelines, and agent productivity. Visualize market data to make informed investment decisions.",
        link: { text: "real estate analytics software", url: "#" },
      },
      {
        id: "document-automation",
        icon: "FileText",
        title: "Document & Contract Automation Tools",
        description:
          "Generate, e-sign, and store property contracts securely. Reduce paperwork with automated compliance and approval systems.",
        link: { text: "real estate document software", url: "#" },
      },
    ],

    bottomFeatures: [
      {
        id: "tenant-management",
        icon: "Home",
        title: "Tenant & Lease Management Portals",
        description:
          "Simplify tenant onboarding, rent collection, and renewals. Offer residents self-service access for requests and payments.",
      },
      {
        id: "property-listing",
        icon: "Globe",
        title: "Property Listing & MLS Integration",
        description:
          "Integrate your listings with MLS and real estate portals. Sync updates instantly across platforms for better visibility.",
      },
      {
        id: "financial-tools",
        icon: "CreditCard",
        title: "Financial & Payment Management Tools",
        description:
          "Automate billing, rent processing, and commission tracking. Ensure transparency with accurate, real-time financial reporting.",
      },
      {
        id: "admin-dashboard",
        icon: "Settings",
        title: "Admin Dashboard & Reporting Suite",
        description:
          "Monitor operations, sales, and occupancy from one dashboard. Gain actionable insights with data-driven visual reports.",
      },
    ],

    ctaText: "GET REAL ESTATE SOFTWARE DEVELOPERS",
    onCtaClick: "/contact-us",
  },

  faq: {
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
        question:
          "Is it possible to integrate payment systems into property software?",
        answer:
          "Yes. Most real estate software supports integrated payment gateways for online rent collection, invoice management, and transaction tracking—enhancing convenience for both tenants and owners.",
      },
      {
        id: "7",
        question:
          "Can real estate software manage multiple properties or agents?",
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
        question:
          "Can real estate platforms integrate with MLS and other listing services?",
        answer:
          "Yes. Real estate software can integrate with MLS databases and third-party listing platforms to automatically sync and update property listings, ensuring accuracy and broader market reach.",
      },
      {
        id: "10",
        question:
          "What trends are shaping the future of real estate technology?",
        answer:
          "AI analytics, blockchain-based contracts, virtual property tours, and smart home integrations are transforming the real estate landscape—making transactions faster, safer, and more transparent.",
      },
    ],
  },
};
