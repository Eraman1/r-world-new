import { IndustryConfig } from "@/types/industries";
 
export const aviation: IndustryConfig = {
    slug: "aviation",
    banner: {
      title: "Take Flight with",
      highlight: "Next-Gen Aviation Software Solutions",
      subtitle:
        "Empower your aviation business with intelligent, scalable, and data-driven software systems. From flight operations and maintenance to safety and analytics, streamline workflows, enhance passenger experiences, and optimize every aspect of your fleet management.",
      image:
        "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
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
  };