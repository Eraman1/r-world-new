import { IndustryConfig } from "@/types/industries";

export const environmentalManagement: IndustryConfig = {
  slug: "environmental-management",
  banner: {
    title: "Environmental-Management",
    highlight: "Next-Gen Environmental Management Solutions",
    subtitle:
      "Leverage cutting-edge technology to monitor, optimize, and sustain your environmental initiatives efficiently and effectively.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Environmental Solutions",
  },
  techHero: {
    heading: "Hire Expert Environmental Management Software Developers",
    description:
      "We build intelligent, scalable, and sustainable software solutions that help organizations monitor, manage, and optimize their environmental impact effectively.",
    services: [
      {
        id: "land",
        title: "Water Quality & Wastewater Management Software",
        icon: "Tractor",
        position: "left",
      },
      {
        id: "livestock",
        title: "Climate Risk Assessment Tools ",
        icon: "Beef",
        position: "left",
      },
      {
        id: "farm",
        title: "Pollution Control & Monitoring Systems",
        icon: "Warehouse",
        position: "left",
      },
      {
        id: "precision",
        title: "Biodiversity & Ecosystem Monitoring Platforms",
        icon: "Wheat",
        position: "left",
      },
      {
        id: "aquaculture",
        title: "Smart Environmental Sensors & IoT Solutions",
        icon: "Fish",
        position: "right",
      },
      {
        id: "seed",
        title: "Sustainable Resource Management Software",
        icon: "ShoppingCart",
        position: "right",
      },
      {
        id: "drone",
        title: "Renewable Energy Management Solutions",
        icon: "PlaneTakeoff",
        position: "right",
      },
      {
        id: "food",
        title: "Soil & Agriculture Monitoring Systems",
        icon: "FileCheck",
        position: "right",
      },
    ],
    // deviceImages: {
    //   laptop: "/images/devices/laptop-agri.png",
    //   tablet: "/images/devices/tablet-agri.png",
    //   mobile: "/images/devices/mobile-agri.png",
    // },
  },
  solutions: {
    mainTitle: "AI Solutions for Smart Environmental Management",
    mainDescription:
      "Our expert developers integrate Artificial Intelligence (AI) into environmental management systems to deliver intelligent monitoring, predictive analytics, and actionable insights. AI-driven solutions analyze data from air, water, soil, and weather patterns to enhance decision-making and sustainability efforts. Transform your operations with cutting-edge AI technologies that optimize resource usage, monitor environmental compliance, and predict ecological risks. Empower your organization with real-time analytics, smarter resource management, and data-driven innovation for a greener, sustainable future.",
    items: [
      {
        id: "crop-yield",
        icon: "Warehouse",
        title: "Air Quality Monitoring Systems",
        subtitle: "",
        description:
          "Our advanced Air Quality Monitoring Systems use AI and IoT sensors to track pollutants, particulate matter, and greenhouse gases in real time. They provide actionable insights to maintain healthy environments and comply with regulations. By detecting hazardous conditions early, organizations can mitigate risks and protect public health. This technology ensures cleaner air, smarter decision-making, and sustainable environmental management.",
      },
      {
        id: "chemical-spraying",
        icon: "Sprout",
        title: "Climate Risk Assessment Tools",
        subtitle: "",
        description:
          "Our Climate Risk Assessment Tools leverage AI and advanced analytics to evaluate environmental risks and predict climate impacts. They analyze weather patterns, natural hazards, and ecological data to provide actionable insights. Organizations can proactively plan for climate-related challenges and minimize operational disruptions. This empowers sustainable decision-making and strengthens resilience against environmental uncertainties.",
      },
      {
        id: "seed-sowing",
        icon: "Leaf",
        title: "Hazardous Waste Tracking Solutions",
        subtitle: "",
        description:
          "Our AI-powered hazardous waste tracking solutions monitor and manage the lifecycle of dangerous materials with precision. They ensure compliance with environmental regulations and safety standards. Real-time tracking helps prevent accidents, reduce environmental impact, and optimize disposal processes. Empower your organization with safer, smarter, and fully auditable waste management operations.",
      },
      {
        id: "autonomous-harvesting",
        icon: "Tractor",
        title: "Eco-Project Management & Tracking Software",
        subtitle: "",
        description:
          "Our Eco-Project Management & Tracking Software helps organizations plan, monitor, and execute sustainability initiatives efficiently. It tracks project milestones, resource usage, and environmental impact in real time. Teams can optimize workflows, ensure compliance, and achieve eco-goals effectively. This empowers businesses to deliver measurable sustainability outcomes while maximizing operational efficiency.",
      },
      {
        id: "crop-monitoring",
        icon: "Shield",
        title: "Coastal Flood & Storm Prediction Systems",
        subtitle: "",
        description:
          "Our AI-powered Coastal Flood & Storm Prediction Systems analyze weather patterns, tides, and ocean data to forecast extreme events accurately. Real-time alerts help authorities and communities prepare and respond effectively. By predicting floods and storms early, risk to lives and property is minimized. This ensures safer coastal management, improved disaster readiness, and resilient infrastructure planning.",
      },
      {
        id: "disease-diagnosis",
        icon: "Bug",
        title: "Wildlife Tracking & Conservation Software",
        subtitle: "",
        description:
          "Our Wildlife Tracking & Conservation Software leverages AI and IoT to monitor animal movements and habitats in real time. It helps conservationists track endangered species, detect threats, and analyze behavioral patterns. By providing actionable insights, it supports effective wildlife protection strategies. This technology empowers sustainable conservation efforts and ensures the preservation of biodiversity.",
      },
    ],
    linkText: "Get AI-Powered Environmental Solutions",
    linkUrl: "/contact-us",
  },
  managementSolutions: {
    title: "Environmental Management Software Solutions",
    subtitle:
      "R-World’s expert developers bring deep environmental tech experience to create intelligent, scalable, and sustainable management systems. Our tailored solutions monitor resources, optimize operations, and empower organizations to achieve efficiency and sustainability in a dynamic ecological landscape.",
    subtitleLink: { text: "land management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "mapping",
        icon: "map",
        title: "Marine & Coastal Ecosystem Monitoring Solutions",
        description:
          "Our solutions leverage AI and IoT to monitor marine and coastal ecosystems in real time. They track water quality, biodiversity, and environmental changes to provide actionable insights. This empowers organizations to protect habitats, manage resources sustainably, and respond proactively to ecological threats.",
        link: { text: "GIS & GPS technologies", url: "#" },
      },
      {
        id: "3d-design",
        icon: "box",
        title: "Supplier Management",
        description:
          "Our Supplier Management software streamlines procurement and vendor operations with precision and efficiency. It monitors supplier performance, ensures compliance, and strengthens collaboration. By optimizing the supply chain, organizations reduce risks, cut costs, and build stronger, more reliable partnerships.",
      },
      {
        id: "sensors",
        icon: "sliders",
        title: "Renewable Energy Forecasting Software",
        description:
          "Our Renewable Energy Forecasting Software leverages AI and advanced analytics to predict energy generation from solar, wind, and other renewable sources. It helps organizations optimize energy distribution, reduce waste, and plan efficiently. By providing accurate forecasts, it ensures reliable, sustainable, and cost-effective energy management.",
      },
    ],
    bottomFeatures: [
      {
        id: "autonomous",
        icon: "monitor",
        title: "Green Transportation & Fleet Management Solutions",
        description:
          "Our Green Transportation & Fleet Management Solutions optimize routes, reduce fuel consumption, and lower carbon emissions. Real-time monitoring ensures efficient fleet operations and sustainable logistics. This empowers organizations to cut costs while promoting eco-friendly transportation practices.",
      },
      {
        id: "irrigation",
        icon: "droplets",
        title: "Permit & Regulation Tracker",
        description:
          "Our Permit & Regulation Tracker simplifies compliance by monitoring environmental permits and regulatory requirements in real time. It alerts organizations to upcoming deadlines and changes in legislation. This ensures timely adherence, reduces risk, and streamlines regulatory management efficiently.",
        link: { text: "irrigation software", url: "#" },
      },
      {
        id: "agronomy",
        icon: "testTube",
        title: "Smart Chemical Supply Chain Management",
        description:
          "Our Smart Chemical Supply Chain Management software leverages AI and IoT to optimize chemical procurement, storage, and distribution. It ensures regulatory compliance, reduces operational risks, and enhances efficiency. By providing real-time insights, organizations can streamline supply chains and minimize waste effectively.",
      },
      {
        id: "operations",
        icon: "settings",
        title: "Deforestation & Land Degradation Monitoring",
        description:
          "Our software monitors forests and land in real time to detect deforestation and soil degradation. It provides actionable insights to prevent environmental loss and restore ecosystems. By enabling proactive intervention, it supports sustainable land management and biodiversity preservation.",
      },
    ],
    ctaText: "CREATE SMART ENVIRONMENTAL SYSTEMS",
    onCtaClick: () => {},
  },
};
