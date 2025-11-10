import { IndustryConfig } from "@/types/industries";

export const aviation: IndustryConfig = {
  slug: "aviation",
  banner: {
    title: "Take Flight with",
    highlight: "Next-Gen Aviation Software Solutions",
    subtitle:
      "Empower your aviation business with intelligent, scalable, and data-driven software systems. From flight operations and maintenance to safety and analytics, streamline workflows, enhance passenger experiences, and optimize every aspect of your fleet management.",
    image:
      "https://stockit.rworldsoftware.in/images/industryAviationBanner.webp",
    linkText: "Get Aviation Solutions",
  },
  techHero: {
    heading: "Hire Expert Aviation Software Developers",
    description:
      "Our aviation software developers deliver custom digital solutions for airlines, airports, and aerospace enterprises. We help aviation businesses improve operational efficiency, safety compliance, and passenger satisfaction through advanced technology.",
    services: [
      {
        id: "land",
        title: "Flight Operations Management",
        icon: "Tractor",
        position: "left",
      },
      {
        id: "livestock",
        title: "Fleet Tracking & Maintenance Systems",
        icon: "Beef",
        position: "left",
      },
      {
        id: "farm",
        title: "Airport Operations & Ground Handling",
        icon: "Warehouse",
        position: "left",
      },
      {
        id: "precision",
        title: "Weather Monitoring & Forecasting",
        icon: "Wheat",
        position: "left",
      },
      {
        id: "aquaculture",
        title: "Crew Scheduling & Management",
        icon: "Fish",
        position: "right",
      },
      {
        id: "seed",
        title: "Passenger Booking & Ticketing Systems",
        icon: "ShoppingCart",
        position: "right",
      },
      {
        id: "drone",
        title: "Flight Data Analytics & Reporting",
        icon: "PlaneTakeoff",
        position: "right",
      },
      {
        id: "food",
        title: "Aviation Safety & Compliance Tools",
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
    mainTitle: "AI, IoT & Cloud Solutions for Modern Aviation",
    mainDescription:
      "Leverage the power of AI, IoT, and real-time analytics to optimize every operation — from flight scheduling to passenger experience. Our intelligent aviation software helps reduce costs, improve performance, and ensure the highest safety standards across fleets and airports.",

    items: [
      {
        id: "crop-yield",
        icon: "Warehouse",
        title: "AI-Powered Flight Optimization",
        subtitle: "",
        description:
          "Use machine learning to optimize routes, fuel efficiency, and scheduling. Enhance punctuality and reduce operational costs with smart flight analytics.",
      },
      {
        id: "chemical-spraying",
        icon: "Sprout",
        title: "IoT-Enabled Fleet Monitoring",
        subtitle: "",
        description:
          "Monitor aircraft systems in real time with IoT sensors. Predict maintenance needs, minimize downtime, and enhance fleet reliability.",
      },
      {
        id: "seed-sowing",
        icon: "Leaf",
        title: "Predictive Maintenance Systems",
        subtitle: "",
        description:
          "Detect potential issues before they cause disruptions. Our AI-driven maintenance systems ensure operational continuity and passenger safety.",
      },
      {
        id: "autonomous-harvesting",
        icon: "Tractor",
        title: "Air Traffic & Ground Operations Automation",
        subtitle: "",
        description:
          "Automate air traffic coordination and ground services with intelligent workflow systems to enhance efficiency and accuracy.",
      },
      {
        id: "crop-monitoring",
        icon: "Shield",
        title: "Real-Time Operations Dashboard",
        subtitle: "",
        description:
          "Access live data on flight status, maintenance, and crew schedules. Improve transparency and decision-making with actionable analytics.",
      },
      {
        id: "disease-diagnosis",
        icon: "Bug",
        title: "Sustainability & Fuel Efficiency Tools",
        subtitle: "",
        description:
          "Implement green aviation strategies with carbon tracking and eco-efficiency monitoring. Support a more sustainable future in air travel.",
      },
    ],
    linkText: "Get AI-Powered Aviation Solutions",
    linkUrl: "/contact-us",
  },
  managementSolutions: {
    title: "Aviation Management Solutions",
    subtitle:
      "Our full-cycle aviation software solutions empower airlines, airports, and aviation service providers to operate with precision, efficiency, and compliance.",
    subtitleLink: { text: "land management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "mapping",
        icon: "map",
        title: "Flight Scheduling & Dispatch",
        description:
          "Automate flight planning, crew assignment, and route optimization to ensure timely and efficient operations.",
        link: { text: "GIS & GPS technologies", url: "#" },
      },
      {
        id: "3d-design",
        icon: "box",
        title: "Fleet Maintenance Management",
        description:
          "Track aircraft maintenance schedules, parts usage, and inspections in real time for enhanced reliability and safety.",
      },
      {
        id: "sensors",
        icon: "sliders",
        title: "Airport & Ground Operations",
        description:
          "Coordinate ground handling, baggage, and refueling operations with digital automation and live monitoring tools.",
      },
    ],
    bottomFeatures: [
      {
        id: "autonomous",
        icon: "monitor",
        title: "Crew Management Systems",
        description:
          "Manage rosters, compliance, and training for pilots and staff efficiently with centralized digital platforms.",
      },
      {
        id: "irrigation",
        icon: "droplets",
        title: "Passenger Booking & CRM",
        description:
          "Offer seamless booking, check-in, and passenger communication through integrated CRM and ticketing systems.",
        link: { text: "irrigation software", url: "#" },
      },

      {
        id: "agronomy",
        icon: "testTube",
        title: "Safety & Compliance Monitoring",
        description:
          "Ensure aviation safety with AI-powered compliance tracking and automated risk detection tools.",
      },
      {
        id: "operations",
        icon: "settings",
        title: "Fuel Management & Cost Control",
        description:
          "Optimize fuel consumption, track expenses, and analyze trends with intelligent analytics for cost-effective operations.",
      },
    ],
    ctaText: "GET AVIATION SOFTWARE DEVELOPERS",
    onCtaClick: () => {},
  },
  managementSolutionsTwo: {
    title: "Land Management Software Solutions-testing",
    subtitle:
      "R-World land management software developers have vast agricultural industry-experience and first-hand knowledge of how to develop world-class solutions for agricultural operations.",
    subtitleLink: { text: "land management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "mapping",
        icon: "Map",
        title: "Land Mapping & GPS Software",
        description:
          "We program GIS & GPS technologies and integrate them with your current systems for site-specific data mapping optimization and accurate yield forecasting.",
        link: { text: "GIS & GPS technologies", url: "#" },
      },
      {
        id: "3d-design",
        icon: "Box",
        title: "3D Field Design Applications",
        description:
          "We engineer custom 3D field design apps to seamlessly integrate with topography mapping software for added visualization and management of all land areas.",
      },
      {
        id: "sensors",
        icon: "Sliders",
        title: "Smart Controllers & Sensors",
        description:
          "We implement smart controllers & sensors that screen the yields for changes in temperature, light, humidity, weather patterns, and other environmental factors.",
      },
    ],
    bottomFeatures: [
      {
        id: "autonomous",
        icon: "Monitor",
        title: "Autonomous Farming Management Systems",
        description:
          "We incorporate prescriptive technology, harvesting & crop management modules, and decision support systems (DSS) to maximize operational performance for autonomous farming.",
      },
      {
        id: "irrigation",
        icon: "Droplets",
        title: "Irrigation System Management",
        description:
          "We design our irrigation software with computer-aided designs (CAD), digital terrain modeling (DTM), hydraulic systems, and irrigation patterns.",
        link: { text: "irrigation software", url: "#" },
      },
      {
        id: "agronomy",
        icon: "TestTube",
        title: "Agronomy Software Solutions",
        description:
          "We develop agronomy software solutions covering everything from soil sampling and collection to GIS mapping, subsurface drainage, and soil fertility automation.",
      },
      {
        id: "operations",
        icon: "Settings",
        title: "Operations Management",
        description:
          "We integrate unmanned aerial vehicle (UAV) software with third-party APIs for irrigation management to streamline consistent operational workflows.",
      },
    ],
    ctaText: "GET LAND MGMT SOFTWARE DEVELOPERS",
    onCtaClick: "/contact-us",
  },
  faq: {
    title: "Aviation FAQ",
    items: [
      {
        id: "1",
        question: "What is the role of digital technology in modern aviation?",
        answer:
          "Digital technology in aviation enhances operational efficiency, safety, and passenger experience. It includes flight management systems, predictive maintenance software, digital twins, and advanced data analytics to optimize aircraft performance and airline operations.",
      },
      {
        id: "2",
        question: "How does AI improve flight safety?",
        answer:
          "AI improves flight safety by analyzing vast amounts of flight data in real time to detect anomalies, predict potential failures, and provide actionable insights. It supports predictive maintenance, automated monitoring, and intelligent decision-making for pilots and air traffic controllers.",
      },
      {
        id: "3",
        question: "What are aviation digital twins?",
        answer:
          "Aviation digital twins are virtual replicas of aircraft, engines, or systems that simulate real-world performance. They allow engineers to test scenarios, predict maintenance needs, and optimize operations without affecting actual aircraft, reducing risk and costs.",
      },
      {
        id: "4",
        question: "How is virtual reality used in pilot training?",
        answer:
          "Virtual reality (VR) enables immersive pilot training by simulating real cockpit environments, flight scenarios, and emergency situations. Trainees can practice procedures safely, improve decision-making skills, and gain hands-on experience without using an actual aircraft.",
      },
      {
        id: "5",
        question: "What technologies support aircraft maintenance?",
        answer:
          "Aircraft maintenance is supported by predictive analytics, IoT sensors, augmented reality (AR) inspection tools, and automated diagnostic systems. These technologies monitor component health, schedule timely maintenance, and reduce downtime while ensuring compliance with safety standards.",
      },
      {
        id: "6",
        question: "How does 3D modeling assist aircraft design?",
        answer:
          "3D modeling allows engineers to visualize aircraft structures, systems, and interiors in detail. It facilitates design validation, aerodynamic analysis, and rapid prototyping, reducing development time and improving collaboration between design and manufacturing teams.",
      },
      {
        id: "7",
        question: "Can aviation technology improve fuel efficiency?",
        answer:
          "Yes, aviation technology such as flight optimization software, real-time weather data integration, and AI-based routing systems can significantly enhance fuel efficiency. Airlines can reduce fuel consumption, lower emissions, and optimize operational costs.",
      },
      {
        id: "8",
        question: "What is the future of autonomous aviation?",
        answer:
          "Autonomous aviation includes self-piloting aircraft, drone delivery systems, and AI-assisted air traffic control. These technologies aim to improve safety, reduce human error, and create new opportunities for cargo transport and urban air mobility.",
      },
    ],
  },
};
