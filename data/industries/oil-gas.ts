import { IndustryConfig } from "@/types/industries";

export const oilGas: IndustryConfig = {
  slug: "oil-gas",
  banner: {
    title: "Revolutionize Oil & Gas Operations with",
    highlight: "AI-Powered Energy Management Solutions",
    subtitle:
      "Enhance exploration, drilling, production, and logistics with intelligent automation, predictive analytics, and IoT-driven monitoring systems. Improve safety, efficiency, and sustainability across the oil and gas value chain.",
    image: "/industry/industryOilandgasBanner.webp",
    linkText: "Get Oil & Gas Solutions",
  },

  techHero: {
    heading: "Hire Expert Oil & Gas Software Developers",
    description:
      "We design and build intelligent software platforms for exploration, drilling, asset management, and logistics optimization. Empower your oil and gas enterprise with smart, data-driven solutions for operational excellence.",
    services: [
      {
        id: "exploration-data",
        title: "Exploration & Seismic Data Analysis",
        icon: "Tractor", //Database
        position: "left",
      },
      {
        id: "drilling-automation",
        title: "Automated Drilling & Rig Management",
        icon: "Tractor", //Cpu
        position: "left",
      },
      {
        id: "asset-tracking",
        title: "Asset Tracking & Equipment Monitoring",
        icon: "Tractor", //MapPin
        position: "left",
      },
      {
        id: "pipeline-monitoring",
        title: "Pipeline Monitoring & Leak Detection",
        icon: "Tractor", //Activity
        position: "left",
      },
      {
        id: "production-optimization",
        title: "Production Optimization Analytics",
        icon: "Tractor", //BarChart
        position: "right",
      },
      {
        id: "supply-chain",
        title: "Supply Chain & Logistics Management",
        icon: "Tractor", //Truck
        position: "right",
      },
      {
        id: "safety-compliance",
        title: "Safety & Regulatory Compliance Systems",
        icon: "Tractor", //ShieldCheck
        position: "right",
      },
      {
        id: "sustainability",
        title: "Sustainability & Carbon Tracking",
        icon: "Tractor", //Leaf
        position: "right",
      },
    ],
    deviceImages: {
      laptop: "/industry/industryOilandgasBanner.webp",
      tablet: "/industry/industryOilandgasBanner.webp",
      mobile: "/industry/industryOilandgasBanner.webp",
    },
  },

  solutions: {
    mainTitle: "AI, IoT & Cloud Solutions for Oil & Gas Enterprises",
    mainDescription:
      "Transform upstream, midstream, and downstream operations with AI-driven platforms, IoT sensors, and cloud integration. Enable smarter exploration, predictive maintenance, and sustainable production management.",
    items: [
      {
        id: "exploration-ai",
        icon: "Shield", // Compass
        title: "AI-Powered Exploration Platforms",
        subtitle: "",
        description:
          "Leverage AI and ML algorithms to interpret seismic and geological datasets with precision. Identify high-potential drilling zones while minimizing exploration risks. Integrate predictive analytics to estimate yield and drilling feasibility. Reduce costs by optimizing exploration strategies in real time. Enhance decision-making with automated data-driven exploration insights.",
      },
      {
        id: "rig-automation",
        icon: "Shield", // Cog
        title: "Rig & Drilling Automation Systems",
        subtitle: "",
        description:
          "Implement smart automation tools for rig control and performance monitoring. Detect early signs of equipment wear and schedule predictive maintenance. Ensure operator safety through AI-powered real-time risk analysis.  Boost drilling precision with adaptive control and sensor feedback. Increase uptime and reduce manual intervention in daily operations.",
      },
      {
        id: "pipeline-safety",
        icon: "Shield",
        title: "Pipeline Safety & Leak Detection",
        subtitle: "",
        description:
          "Deploy IoT-enabled sensors for 24/7 pressure, flow, and temperature tracking. Instantly detect leaks, corrosion, or anomalies in the pipeline system. Use predictive models to prevent failures before they occur.  Centralize safety data in secure, cloud-connected dashboards. Maintain compliance with global environmental and safety standards.",
      },
      {
        id: "production-analytics",
        icon: "Shield", // BarChart2
        title: "Production Analytics & Reporting",
        subtitle: "",
        description:
          "Visualize key production KPIs through dynamic analytics dashboards. Identify inefficiencies and downtime causes using real-time insights. Forecast output and energy consumption with predictive AI models. Automate reporting to streamline operational transparency. Empower teams with actionable insights for data-driven optimization.",
      },
      {
        id: "logistics-optimization",
        icon: "Shield", // Truck
        title: "Logistics & Fuel Supply Chain Optimization",
        subtitle: "",
        description:
          "Digitize the entire logistics network with smart routing systems. Manage fleet performance, delivery schedules, and fuel usage efficiently. Utilize predictive analytics to balance inventory and reduce costs. Track real-time movement of fuel and materials across regions. Enhance supply reliability through AI-powered decision automation.",
      },
      {
        id: "emission-tracking",
        icon: "Shield", // Cloud
        title: "Emission & Sustainability Tracking",
        subtitle: "",
        description:
          "Integrate IoT sensors to continuously monitor greenhouse gas emissions. Analyze sustainability metrics and generate ESG-compliant reports. Automate alerts for threshold breaches and compliance deviations. Support corporate sustainability goals with transparent carbon data. Drive cleaner operations through intelligent environmental monitoring.",
      },
    ],
    linkText: "Explore Energy Tech Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "End-to-End Oil & Gas Management Systems",
    subtitle:
      "Empower exploration, drilling, and production with integrated platforms for real-time monitoring, analytics, and decision-making.",
    subtitleLink: { text: "oil and gas management software", url: "#" },
    laptopImage:
      "https://i.pinimg.com/736x/a5/39/19/a5391921445483abb1a8ab7fb78c1fef.jpg",
    mobileImage:
      "https://i.pinimg.com/1200x/31/40/06/3140064914def3841b80c4076ace48aa.jpg",
    topFeatures: [
      {
        id: "asset-automation",
        icon: "map", //Settings
        title: "Asset & Maintenance Automation",
        description:
          "Predict equipment failures and optimize maintenance schedules to reduce downtime and extend asset lifespan.",
      },
      {
        id: "performance-dashboard",
        icon: "map", //BarChart
        title: "Operational Performance Dashboards",
        description:
          "Access real-time insights into drilling performance, production metrics, and energy utilization.",
      },
      {
        id: "mobile-operations",
        icon: "map", //Smartphone
        title: "Mobile Field Operations",
        description:
          "Enable remote teams to manage field activities, inspections, and safety reports via mobile applications.",
      },
    ],
    bottomFeatures: [
      {
        id: "ai-prediction",
        icon: "map",
        title: "AI-Based Predictive Analytics",
        description:
          "Harness the power of artificial intelligence to anticipate production challenges and equipment failures. " +
          "Use predictive models to optimize drilling schedules and resource utilization. " +
          "Reduce downtime by identifying anomalies before they escalate into costly issues. " +
          "Integrate real-time data from IoT sensors for enhanced operational intelligence. " +
          "Boost overall efficiency with smarter, data-driven decision-making across your sites.",
      },
      {
        id: "safety-security",
        icon: "map",
        title: "Safety, Compliance & Security",
        description:
          "Protect workforce and assets with automated safety monitoring and reporting tools. " +
          "Ensure adherence to global regulatory standards through digital compliance workflows. " +
          "Monitor incidents in real time and instantly flag potential risks for quick response. " +
          "Maintain robust cybersecurity to secure sensitive operational data and systems. " +
          "Promote a safety-first culture supported by transparent and traceable records.",
      },
      {
        id: "energy-efficiency",
        icon: "map",
        title: "Energy Efficiency & Cost Control",
        description:
          "Gain complete visibility into energy consumption across operations and sites. " +
          "Analyze usage trends to pinpoint inefficiencies and optimize resource deployment. " +
          "Adopt intelligent automation to reduce wastage and control maintenance expenses. " +
          "Leverage smart metering systems to track and report cost performance metrics. " +
          "Drive sustainable profitability through continuous energy optimization efforts.",
      },
      {
        id: "sustainability-insights",
        icon: "map",
        title: "Sustainability & Environmental Insights",
        description:
          "Monitor emissions, water usage, and waste output through integrated digital dashboards. " +
          "Meet environmental, social, and governance (ESG) standards with accurate data analytics. " +
          "Visualize sustainability KPIs and automate reporting for audit-ready compliance. " +
          "Support carbon reduction and circular economy initiatives across the supply chain. " +
          "Strengthen brand reputation by embedding sustainability into every business process.",
      },
    ],
    ctaText: "BUILD YOUR OIL & GAS SOLUTION",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },
  managementSolutionsTwo: {
    title: "Oil & Gas Management Software Solutions",
    subtitle:
      "Our oil & gas software experts build digital platforms to streamline exploration, production, and asset management while maximizing safety and operational efficiency.",
    subtitleLink: { text: "oil & gas software development", url: "#" },
    laptopImage:
      "https://i.pinimg.com/736x/19/35/da/1935dad1470244b6ea1b60ae9385aa41.jpg",
    mobileImage: "/images/oil-gas-management-mobile.jpg",

    topFeatures: [
      {
        id: "asset-operations",
        icon: "Factory",
        title: "Asset Operations & Production Monitoring",
        description:
          "Track equipment performance and production in real time. Enhance asset utilization with predictive maintenance insights.",
        link: { text: "asset monitoring software", url: "#" },
      },
      {
        id: "pipeline-management",
        icon: "Map",
        title: "Pipeline & Transportation Management",
        description:
          "Monitor pipeline flow, pressure, and safety remotely. Optimize logistics and prevent downtime with smart tracking tools.",
        link: { text: "pipeline management software", url: "#" },
      },
      {
        id: "energy-analytics",
        icon: "BarChart3",
        title: "Energy Analytics & Reporting Systems",
        description:
          "Analyze drilling and production data for better decisions. Gain real-time insights into operational performance and costs.",
        link: { text: "energy analytics systems", url: "#" },
      },
      {
        id: "safety-compliance",
        icon: "Shield",
        title: "Safety & Environmental Compliance Software",
        description:
          "Automate regulatory reporting and safety monitoring. Ensure environmental compliance and minimize operational risks.",
        link: { text: "oil-gas compliance software", url: "#" },
      },
    ],

    bottomFeatures: [
      {
        id: "drilling-automation",
        icon: "map",
        title: "Drilling Automation & Control Systems",
        description:
          "Automate drilling workflows for accuracy and safety. Integrate real-time data sensors to improve field performance.",
      },
      {
        id: "supply-chain",
        icon: "map",
        title: "Supply Chain & Logistics Management",
        description:
          "Manage inventory, fleet, and transport routes efficiently. Reduce delays and operational costs through real-time tracking.",
      },
      {
        id: "maintenance-tracking",
        icon: "map",
        title: "Equipment Maintenance Tracking Tools",
        description:
          "Monitor equipment health with IoT-based alerts. Schedule preventive maintenance to reduce unplanned downtime.",
      },
      {
        id: "admin-dashboard",
        icon: "map",
        title: "Operations Administration Dashboard",
        description:
          "Centralize field data, analytics, and reporting tools. Manage resources and performance from a unified dashboard.",
      },
    ],

    ctaText: "GET OIL & GAS SOFTWARE DEVELOPERS",
    onCtaClick: "/contact-us",
  },

  faq: {
    title: "Oil & Gas Industry FAQ",
    items: [
      {
        id: "1",
        question: "What are the main segments of the Oil & Gas industry?",
        answer:
          "The Oil & Gas industry is divided into upstream (exploration and production), midstream (transportation and storage), and downstream (refining, distribution, and marketing). Each segment requires specialized technologies and operational strategies.",
      },
      {
        id: "2",
        question: "How is technology transforming the Oil & Gas sector?",
        answer:
          "Technology such as IoT sensors, AI analytics, digital twins, and predictive maintenance is enhancing efficiency, safety, and decision-making. These tools enable real-time monitoring, reduce downtime, and optimize resource extraction and processing.",
      },
      {
        id: "3",
        question: "What safety measures are essential in Oil & Gas operations?",
        answer:
          "Rigorous safety protocols, regular equipment inspections, automation of hazardous processes, and workforce training are critical. Compliance with environmental and regulatory standards ensures safe production and minimizes the risk of accidents.",
      },
      {
        id: "4",
        question: "How does Oil & Gas monitoring improve efficiency?",
        answer:
          "Advanced monitoring systems track production rates, pipeline integrity, and equipment performance in real time. Predictive analytics helps identify potential failures, optimize maintenance schedules, and reduce operational costs.",
      },
      {
        id: "5",
        question: "What role does sustainability play in Oil & Gas?",
        answer:
          "Sustainability initiatives focus on reducing emissions, improving energy efficiency, and adopting cleaner technologies. Companies are integrating renewable energy solutions and carbon capture technologies to minimize environmental impact.",
      },
      {
        id: "6",
        question: "Can digital transformation help reduce operational risks?",
        answer:
          "Yes. Digital tools such as remote monitoring, automated reporting, and AI-based risk assessment enhance safety, regulatory compliance, and operational reliability, reducing human errors and costly downtime.",
      },
      {
        id: "7",
        question:
          "How do Oil & Gas companies manage supply chain complexities?",
        answer:
          "By using digital supply chain platforms, companies can track shipments, optimize logistics, manage inventory, and coordinate with vendors efficiently. Real-time data ensures timely delivery and reduces operational bottlenecks.",
      },
      {
        id: "8",
        question:
          "What are the benefits of predictive maintenance in Oil & Gas?",
        answer:
          "Predictive maintenance uses sensor data and analytics to anticipate equipment failures. This minimizes unplanned downtime, lowers repair costs, and ensures consistent production output.",
      },
      {
        id: "9",
        question: "How is AI used in Oil & Gas exploration?",
        answer:
          "AI helps in seismic data interpretation, reservoir modeling, and identifying optimal drilling locations. Machine learning algorithms improve decision-making and increase the accuracy of exploration activities.",
      },
      {
        id: "10",
        question: "What digital solutions improve downstream operations?",
        answer:
          "Downstream operations benefit from refinery optimization software, automated inventory management, digital logistics tracking, and customer analytics platforms, enhancing efficiency and profitability in fuel distribution and retail operations.",
      },
    ],
  },
};
