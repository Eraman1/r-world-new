import { IndustryConfig } from "@/types/industries";
 
export const energyUtilities: IndustryConfig = {
  slug: "energy-utilities",
  banner: {
    title: "Transform Energy Operations with",
    highlight: "Smart Energy & Utility Management Software",
    subtitle:
      "Drive efficiency, sustainability, and innovation with AI-powered solutions for the energy and utilities sector. From smart grids to renewable forecasting, empower your infrastructure with intelligent automation and analytics.",
    image:
        "/industry/industryEnergyBanner.webp",
    linkText: "Get Energy Solutions",
  },
 
  techHero: {
    heading: "Hire Expert Energy & Utility Software Developers",
    description:
      "We develop scalable, secure, and data-driven software solutions for the energy and utilities industry. Our technology empowers organizations to optimize resources, improve grid reliability, reduce waste, and transition to clean, smart energy systems.",
    services: [
      {
        id: "smartgrid",
        title: "Smart Grid Management Systems",
        icon: "Tractor", //zap
        position: "left",
      },
      {
        id: "energytrading",
        title: "Energy Trading & Risk Management Platforms",
        icon: "Tractor", //BarChart
        position: "left",
      },
      {
        id: "demandforecast",
        title: "AI-Based Demand Forecasting",
        icon: "Tractor", //Activity
        position: "left",
      },
      {
        id: "assetmonitoring",
        title: "Asset Monitoring & Maintenance Software",
        icon: "Tractor", //Cog
        position: "left",
      },
      {
        id: "renewable",
        title: "Renewable Energy Management Systems",
        icon: "Tractor",  //Sun
        position: "right",
      },
      {
        id: "utilitybilling",
        title: "Utility Billing & Customer Portals",
        icon: "Tractor",  //CreditCard
        position: "right",
      },
      {
        id: "iotintegration",
        title: "IoT-Enabled Energy Monitoring",
        icon: "Tractor", //Cpu
        position: "right",
      },
      {
        id: "analytics",
        title: "Energy Analytics & Optimization Dashboards",
        icon: "Tractor",  //LineChart
        position: "right",
      },
    ],
    deviceImages: {
      laptop: "/industry/industryEnergyBanner.webp",
      tablet: "/industry/industryEnergyBanner.webp",
      mobile: "/industry/industryEnergyBanner.webp",
    },
  },
 
  solutions: {
  mainTitle: "AI & IoT Solutions for the Energy & Utilities Industry",
  mainDescription:
    "Leverage Artificial Intelligence, IoT, and advanced analytics to revolutionize energy management. Our solutions enable predictive maintenance, real-time monitoring, and data-driven optimization. Drive sustainability, reduce energy losses, and achieve operational excellence with smart, connected systems.",
  items: [
    {
      id: "grid-management",
      icon: "Leaf", // Network
      title: "Smart Grid Optimization",
      subtitle: "",
      description:
        "Integrate AI-powered monitoring tools to optimize energy distribution. Enhance grid reliability through predictive analytics and automation. Prevent overloads and power failures with dynamic control systems. Improve operational visibility across distributed networks. Deliver stable, efficient, and sustainable grid performance.",
    },
    {
      id: "demand-response",
      icon: "Leaf", // TrendingUp
      title: "Demand Response Systems",
      subtitle: "",
      description:
        "Use machine learning to forecast and adjust consumer energy usage in real time. Prevent power imbalances and reduce costly peak demands. Automatically manage supply and demand for stable operations. Improve grid resilience and energy efficiency at scale. Empower consumers with smarter, adaptive energy control.",
    },
    {
      id: "renewable-forecast",
      icon: "Leaf", // Sun
      title: "Renewable Energy Forecasting",
      subtitle: "",
      description:
        "Leverage AI-based weather prediction models for solar, wind, and hydro energy. Predict renewable output with precision and reliability. Optimize energy trading and supply chain decisions using analytics. Reduce dependency on manual forecasting for greater accuracy. Drive profitability with intelligent energy production insights.",
    },
    {
      id: "smart-metering",
      icon: "Leaf", // Gauge
      title: "Smart Metering & Data Analytics",
      subtitle: "",
      description:
        "Deploy IoT-enabled smart meters for real-time consumption tracking. Enhance transparency in billing through automated data analysis. Identify inefficiencies and energy losses instantly. Empower customers with personalized insights and visual dashboards. Build trust through accurate, data-driven energy reporting.",
    },
    {
      id: "maintenance",
      icon: "Leaf", // Wrench
      title: "Predictive Maintenance Systems",
      subtitle: "",
      description:
        "Predict equipment failures before they occur using AI and sensors. Monitor asset performance continuously across power plants. Reduce maintenance costs through proactive service scheduling. Minimize downtime with intelligent fault detection and alerts. Extend asset lifespan and improve overall plant reliability.",
    },
    {
      id: "carbon-tracking",
      icon: "Leaf",
      title: "Carbon Footprint Monitoring",
      subtitle: "",
      description:
        "Measure and manage your environmental impact using real-time data. Track CO₂ emissions from all operational sources effortlessly. Gain insights with AI dashboards for sustainability planning. Support compliance with regulatory carbon reporting standards. Achieve green goals through continuous emission optimization.",
    },
  ],
  linkText: "Get AI-Powered Energy Solutions",
  linkUrl: "/contact-us",
},

 
  managementSolutions: {
    title: "Energy & Utility Management Software Solutions",
    subtitle:
      "Our expert developers deliver innovative energy software that enhances operational efficiency, improves reliability, and supports clean energy transitions across industries.",
    subtitleLink: { text: "energy management software", url: "#" },
    laptopImage: "https://i.pinimg.com/1200x/de/b6/78/deb6785701e176883c8742237c085961.jpg",
    mobileImage: "https://i.pinimg.com/1200x/c6/2d/53/c62d53a9562c1f5976b35c5fb89e183e.jpg",
    topFeatures: [
      {
        id: "energy-distribution",
        icon: "map", //Battery
        title: "Energy Distribution Management",
        description:
          "Monitor and control power distribution networks with precision using AI and SCADA-integrated systems for real-time optimization.",
        link: { text: "grid monitoring systems", url: "#" },
      },
      {
        id: "billing",
        icon: "map", //FileText
        title: "Automated Billing & Tariff Systems",
        description:
          "Simplify billing operations with automated tariff calculations, payment integration, and transparent energy usage reports.",
      },
      {
        id: "integration",
        icon: "map", //Plug
        title: "System Integration & API Connectivity",
        description:
          "Connect your ERP, CRM, and IoT devices seamlessly with API-based architecture that ensures efficient energy ecosystem integration.",
      },
    ],
    bottomFeatures: [
  {
    id: "smartcities",
    icon: "map", //Globe
    title: "Smart City Energy Platforms",
    description:
      "Develop connected city ecosystems powered by IoT and renewable technologies. Integrate intelligent analytics for efficient grid performance. Enable predictive insights for power distribution and consumption. Reduce waste with real-time monitoring and automation. Drive urban sustainability through data-driven energy management.",
  },
  {
    id: "renewable-mix",
    icon: "map", //Wind
    title: "Hybrid Energy Mix Optimization",
    description:
      "Leverage AI algorithms to balance renewable and non-renewable resources. Enhance energy reliability and lower dependency on single sources. Adapt dynamically to weather and demand fluctuations. Achieve cost-effective energy generation strategies. Support long-term sustainability and carbon neutrality goals.",
  },
  {
    id: "safety",
    icon: "map", //ShieldCheck
    title: "Safety & Compliance Management",
    description:
      "Maintain safety standards across all energy operations seamlessly. Automate compliance tracking with intelligent alert systems. Monitor field equipment and personnel in real time. Generate accurate digital reports for inspections and audits. Ensure a safer, fully compliant work environment effortlessly.",
  },
  {
    id: "reporting",
    icon: "map", //PieChart
    title: "Real-Time Performance Reporting",
    description:
      "Access key metrics through interactive, real-time dashboards. Visualize performance trends and identify operational gaps. Automate data collection for efficiency and accuracy. Empower decision-makers with AI-driven reporting tools. Achieve transparency and control across the energy lifecycle.",
  },
],
ctaText: "BUILD YOUR ENERGY SOFTWARE SOLUTION",
onCtaClick: () => {},
  },

  managementSolutionsTwo: {
  title: "Energy & Utilities Management Software Solutions",
  subtitle:
    "Our energy and utilities software developers build advanced systems to optimize energy distribution, automate monitoring, and ensure sustainable operations for modern power enterprises.",
  subtitleLink: { text: "energy management software", url: "#" },
  laptopImage: "https://i.pinimg.com/1200x/f3/7d/91/f37d9138432f7e03d98dc784fac893c9.jpg",
  mobileImage: "/images/energy-utilities-mobile.jpg",

  topFeatures: [
    {
      id: "energy-monitoring",
      icon: "Activity",
      title: "Smart Energy Monitoring Systems",
      description:
        "Track real-time power usage and grid performance efficiently. Reduce energy wastage and improve operational visibility.",
      link: { text: "smart energy monitoring", url: "#" },
    },
    {
      id: "asset-management",
      icon: "Database",
      title: "Asset & Infrastructure Management",
      description:
        "Digitally manage power plants, substations, and utilities. Extend asset life with predictive maintenance and analytics.",
      link: { text: "asset management software", url: "#" },
    },
    {
      id: "billing-systems",
      icon: "CreditCard",
      title: "Automated Billing & Payment Systems",
      description:
        "Streamline billing cycles and automate invoicing for customers. Integrate secure payments and multi-tariff options easily.",
      link: { text: "utility billing software", url: "#" },
    },
    {
      id: "sustainability-tracking",
      icon: "Leaf",
      title: "Sustainability & Carbon Tracking Platforms",
      description:
        "Monitor carbon emissions and renewable energy usage. Support ESG goals with accurate sustainability reporting tools.",
      link: { text: "sustainability management software", url: "#" },
    },
  ],

  bottomFeatures: [
    {
      id: "grid-automation",
      icon: "Cpu",
      title: "Smart Grid Automation Solutions",
      description:
        "Automate grid operations for improved stability and efficiency. Enable faster fault detection and load balancing.",
    },
    {
      id: "predictive-analytics",
      icon: "BarChart",
      title: "Predictive Analytics & Forecasting Tools",
      description:
        "Use AI-driven analytics to forecast energy demand trends. Optimize production planning and reduce downtime.",
    },
    {
      id: "iot-integration",
      icon: "Wifi",
      title: "IoT Integration for Utility Networks",
      description:
        "Connect smart meters and sensors for real-time insights. Enhance remote control and monitoring of utility assets.",
    },
    {
      id: "customer-portals",
      icon: "User",
      title: "Customer Self-Service Portals",
      description:
        "Provide consumers with billing access and usage tracking. Improve satisfaction with transparent digital experiences.",
    },
  ],

  ctaText: "GET ENERGY SOFTWARE DEVELOPERS",
  onCtaClick: "/contact-us",
},

 faq :{
  title: "Energy & Utilities FAQ",
  items: [
    {
      id: "1",
      question: "What are Energy & Utility Management Solutions?",
      answer:
        "Energy and utility management solutions help organizations monitor, optimize, and control energy consumption. These systems integrate IoT, analytics, and automation to improve efficiency, reduce costs, and promote sustainability.",
    },
    {
      id: "2",
      question: "How can smart grids improve energy distribution?",
      answer:
        "Smart grids use real-time data and automation to balance energy demand and supply efficiently. They enable predictive maintenance, reduce outages, and support renewable energy integration across distribution networks.",
    },
    {
      id: "3",
      question: "What technologies are transforming the energy sector?",
      answer:
        "Technologies like IoT sensors, artificial intelligence, blockchain, and cloud analytics are driving innovation in the energy sector. They enhance demand forecasting, asset performance monitoring, and transparent energy trading.",
    },
    {
      id: "4",
      question: "How do energy analytics platforms benefit utility providers?",
      answer:
        "Energy analytics platforms collect and analyze operational data to detect inefficiencies, forecast demand, and optimize generation schedules. This leads to better resource utilization, cost savings, and improved grid reliability.",
    },
    {
      id: "5",
      question: "Can digital solutions support renewable energy integration?",
      answer:
        "Yes. Digital platforms help integrate solar, wind, and other renewable sources into the grid by managing fluctuations in generation, ensuring grid stability, and enabling data-driven energy forecasting.",
    },
    {
      id: "6",
      question: "How do Energy Management Systems (EMS) support sustainability?",
      answer:
        "EMS platforms monitor energy consumption patterns, track carbon emissions, and identify areas for reduction. They empower organizations to achieve sustainability goals and comply with environmental regulations.",
    },
    {
      id: "7",
      question: "What role does AI play in utility operations?",
      answer:
        "AI optimizes demand response, predicts equipment failures, and enhances load balancing. It also improves maintenance planning and ensures consistent service delivery with minimal energy wastage.",
    },
    {
      id: "8",
      question: "Are these systems suitable for both commercial and residential sectors?",
      answer:
        "Yes. Energy management and utility solutions can be tailored for industries, commercial buildings, and residential areas—offering insights into usage, savings opportunities, and sustainability performance.",
    },
    {
      id: "9",
      question: "How do IoT-enabled utilities improve customer experience?",
      answer:
        "IoT devices provide real-time energy data, enabling consumers to monitor and control their usage. This transparency leads to smarter energy habits, reduced bills, and improved satisfaction.",
    },
    {
      id: "10",
      question: "What is the future of digital transformation in energy and utilities?",
      answer:
        "The future of energy lies in smart, connected infrastructure powered by AI, blockchain, and renewables. Utilities are shifting toward decentralized grids, predictive analytics, and carbon-neutral operations for a sustainable tomorrow.",
    },
  ],
},

};