import { IndustryConfig } from "@/types/industries";

export const aviation: IndustryConfig = {
  slug: "aviation",
  banner: {
    title: "Take Flight with",
    highlight: "Next-Gen Aviation Software Solutions",
    subtitle:
      "Empower your aviation business with intelligent, scalable, and data-driven software systems. From flight operations and maintenance to safety and analytics, streamline workflows, enhance passenger experiences, and optimize every aspect of your fleet management.",
    image:
      "/industry/industryAviationBanner.webp",
    linkText: "Get Aviation Solutions",
  },
  techHero: {
    heading: "Hire Expert Aviation Software Developers",
    description:
      "Our aviation software developers deliver custom digital solutions for airlines, airports, and aerospace enterprises. We help aviation businesses improve operational efficiency, safety compliance, and passenger satisfaction through advanced technology.",
      deviceImages: {
      laptop: "/industry/industryAviationBanner.webp",
      tablet: "/industry/industryAviationBanner.webp",
      mobile: "/industry/industryAviationBanner.webp",
    },
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
    
  },
  solutions: {
  mainTitle: "AI, IoT & Cloud Solutions for Modern Aviation",
  mainDescription:
    "Transform aviation operations with intelligent digital solutions. From predictive maintenance to smart analytics, our AI-driven tools enhance safety, efficiency, and passenger satisfaction. We empower airlines, airports, and MROs with real-time insights, automation, and innovation.",

  items: [
    {
      id: "ai-flight-optimization",
      icon: "Gauge",
      title: "AI-Powered Flight Optimization Systems",
      subtitle: "",
      description:
        "Utilize advanced AI models to plan efficient flight routes and fuel consumption. Predict weather impacts and optimize flight scheduling dynamically. Reduce operational costs through real-time performance analytics.  Ensure punctual departures and arrivals across global networks. Drive smarter, data-backed decision-making for every journey.",
    },
    {
      id: "iot-fleet-monitoring",
      icon: "Radar",
      title: "IoT-Based Aircraft Health Monitoring",
      subtitle: "",
      description:
        "Integrate IoT sensors to monitor aircraft components continuously. Capture live data from engines, hydraulics, and avionics systems. Detect anomalies early and schedule maintenance proactively. Minimize unscheduled downtime with predictive diagnostics. Enhance overall flight reliability and operational readiness.",
    },
    {
      id: "predictive-maintenance",
      icon: "Wrench",
      title: "Predictive Maintenance & Asset Management",
      subtitle: "",
      description:
        "Use AI-driven analytics to anticipate potential mechanical issues. Replace reactive maintenance with predictive intelligence. Extend aircraft lifespan through condition-based upkeep. Reduce maintenance costs and increase aircraft availability. Improve safety standards through automated risk alerts.",
    },
    {
      id: "air-traffic-automation",
      icon: "Network",
      title: "Air Traffic & Ground Operations Automation",
      subtitle: "",
      description:
        "Digitize air traffic workflows with real-time coordination tools. Enable synchronized communication between air and ground staff. Automate baggage routing, fueling, and gate assignment tasks. Reduce turnaround time with smart AI scheduling systems. Achieve precision, safety, and efficiency at every checkpoint.",
    },
    {
      id: "operations-dashboard",
      icon: "Activity",
      title: "Real-Time Aviation Operations Dashboard",
      subtitle: "",
      description:
        "Monitor flight status, crew schedules, and maintenance updates. Gain actionable insights with live analytics and KPIs. Enhance situational awareness across multiple airport hubs. Simplify decision-making with unified, visualized data streams. Empower teams to respond faster with predictive alerts.",
    },
    {
      id: "fuel-sustainability",
      icon: "Leaf",
      title: "Sustainability & Fuel Efficiency Intelligence",
      subtitle: "",
      description:
        "Adopt AI-powered systems to reduce carbon emissions and waste. Track and optimize fuel burn through real-time performance metrics. Implement green aviation initiatives across flight operations. Analyze sustainability goals through environmental dashboards. Support regulatory compliance and eco-friendly flight strategies.",
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
    laptopImage: "https://i.pinimg.com/736x/6c/dc/bd/6cdcbdadc3ad6d24a06e7d07a253ccfe.jpg",
    mobileImage: "https://i.pinimg.com/736x/ac/60/16/ac60164f046b06cbc5c1aeb9fa7da3fe.jpg",
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
    id: "crew-management",
    icon: "users",
    title: "Crew Scheduling & Management Systems",
    description:
      "Efficiently manage crew rosters, shifts, and flight schedules with automated systems. Track certifications, compliance, and training renewals in real time. Reduce administrative load through centralized digital workflows. Ensure seamless coordination between pilots, attendants, and ground staff. Improve operational reliability with predictive crew availability insights.",
  },
  {
    id: "passenger-experience",
    icon: "plane",
    title: "Passenger Booking & CRM Platforms",
    description:
      "Deliver frictionless passenger experiences from booking to boarding. Integrate CRM tools for personalized communication and loyalty programs. Automate check-ins, ticketing, and real-time flight updates effortlessly. Enhance user satisfaction through responsive, mobile-first design. Boost retention and revenue with smart customer engagement insights.",
  },
  {
    id: "safety-analytics",
    icon: "alertTriangle",
    title: "Flight Safety & Compliance Intelligence",
    description:
      "Leverage AI-driven analytics for real-time compliance monitoring. Detect potential risks early through predictive maintenance insights. Track aircraft health, crew reports, and regulatory updates automatically. Maintain international safety standards with precision reporting. Ensure a proactive approach to aviation risk and incident prevention.",
  },
  {
    id: "fuel-optimization",
    icon: "gauge",
    title: "Fuel Efficiency & Operational Cost Control",
    description:
      "Optimize fuel usage with smart tracking and data-driven insights. Analyze consumption trends to minimize operational expenses. Implement AI tools for route planning and in-flight fuel management. Reduce carbon footprint while maintaining high performance standards. Achieve significant cost savings through real-time analytics dashboards.",
  },
],
ctaText: "GET AVIATION SOFTWARE DEVELOPERS",
onCtaClick: () => {},
  },

  
  managementSolutionsTwo: {
  title: "Aviation Management Software Solutions",
  subtitle:
    "Our aviation software developers deliver modern solutions to optimize flight operations, streamline maintenance, and enhance passenger experience through digital innovation.",
  subtitleLink: { text: "aviation management software", url: "#" },
  laptopImage: "https://i.pinimg.com/736x/42/65/c9/4265c99ba276f5e8b1ecbf8a11dac164.jpg",
  mobileImage: "https://i.pinimg.com/736x/42/65/c9/4265c99ba276f5e8b1ecbf8a11dac164.jpg",
  topFeatures: [
    {
      id: "flight-operations",
      icon: "Airplane",
      title: "Flight Operations & Scheduling Systems",
      description:
        "Automate flight planning, route optimization, and real-time scheduling. Enhance operational efficiency while minimizing fuel and delay costs.",
      link: { text: "flight operations software", url: "#" },
    },
    {
      id: "fleet-tracking",
      icon: "Radar",
      title: "Fleet Tracking & Monitoring Platforms",
      description:
        "Track aircraft health, performance, and flight data in real time. Enable predictive maintenance and reduce downtime across the fleet.",
      link: { text: "fleet tracking platforms", url: "#" },
    },
    {
      id: "crew-management",
      icon: "Users",
      title: "Crew Management & Roster Systems",
      description:
        "Manage pilot schedules, certifications, and duty hours seamlessly. Improve crew coordination and regulatory compliance across operations.",
      link: { text: "crew management systems", url: "#" },
    },
    {
      id: "maintenance",
      icon: "Wrench",
      title: "Aircraft Maintenance Management",
      description:
        "Streamline MRO workflows with digital inspection and task tracking. Increase aircraft availability and reduce operational disruptions.",
      link: { text: "aircraft maintenance systems", url: "#" },
    },
  ],


    bottomFeatures: [
  {
    id: "flight-planning",
    icon: "Map",
    title: "Flight Planning & Scheduling Systems",
    description:
      "We build intelligent flight planning tools with real-time route optimization and airspace management for precise scheduling.",
  },
  {
    id: "air-traffic",
    icon: "Radar",
    title: "Air Traffic Control Software",
    description:
      "Our ATC solutions enhance situational awareness, automate radar tracking, and support safe, efficient flight coordination.",
  },
  {
    id: "maintenance",
    icon: "Wrench",
    title: "Aircraft Maintenance Tracking",
    description:
      "We develop MRO software to manage inspections, maintenance logs, and predictive analytics for aircraft reliability.",
  },
  {
    id: "crew-management",
    icon: "Users",
    title: "Crew Scheduling & Management Systems",
    description:
      "Our systems automate pilot and crew assignments, ensuring regulatory compliance and optimal resource allocation.",
  },
  
  
],
ctaText: "GET AVIATION SOFTWARE DEVELOPERS",
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
