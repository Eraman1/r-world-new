import { IndustryConfig } from "@/types/industries";
 
export const construction: IndustryConfig = {
    slug: "construction",
    banner: {
      title: "Build Smarter with",
      highlight: "Next-Gen Construction Software Solutions",
      subtitle:
        "Empower your construction business with intelligent, scalable, and data-driven management systems. From project planning to real-time site monitoring, streamline operations, enhance collaboration, and deliver projects on time and within budget.",
      image:
        "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
        linkText: "Get Construction Solutions",
    },
    techHero: {
      heading: "Hire Expert Construction Software Developers",
      description:
        "Our construction software developers create powerful digital solutions for project management, equipment tracking, and workforce coordination. We help construction firms boost productivity, ensure safety compliance, and achieve seamless project delivery.",
      services: [
        {
          id: "land",
          title: "Project Management Systems",
          icon: "Tractor",
          position: "left",
        },
        {
          id: "livestock",
          title: "Equipment Tracking Software",
          icon: "Beef",
          position: "left",
        },
        {
          id: "farm",
          title: "Material & Inventory Management",
          icon: "Warehouse",
          position: "left",
        },
        {
          id: "precision",
          title: "Site Monitoring & Automation",
          icon: "Wheat",
          position: "left",
        },
        {
          id: "aquaculture",
          title: "Cost Estimation & Budgeting",
          icon: "Fish",
          position: "right",
        },
        {
          id: "seed",
          title: "BIM Integration & Design Tools",
          icon: "ShoppingCart",
          position: "right",
        },
        {
          id: "drone",
          title: "Workforce Management",
          icon: "PlaneTakeoff",
          position: "right",
        },
        {
          id: "food",
          title: "Safety & Compliance Systems",
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
      mainTitle: "AI & IoT Solutions for Modern Construction",
      mainDescription:
        "Leverage AI, IoT, and cloud-based systems to enhance every stage of your construction lifecycle. Our intelligent solutions optimize resource allocation, predict risks, and improve efficiency across projects. Build smarter, faster, and more sustainably with cutting-edge technology.",
 
      items: [
        {
          id: "crop-yield",
          icon: "Warehouse",
          title: "AI-Powered Project Planning",
          subtitle: "",
          description:
             "Utilize AI algorithms to optimize timelines, resource allocation, and risk prediction. Ensure faster decision-making and higher project accuracy for efficient delivery.",
        },
        {
          id: "chemical-spraying",
          icon: "Sprout",
          title: "IoT-Based Site Monitoring",
          subtitle: "",
          description:
            "Monitor equipment, workforce, and environmental conditions in real time. IoT sensors provide data-driven insights that enhance safety and productivity on-site.",
        },
        {
          id: "seed-sowing",
          icon: "Leaf",
          title: "Predictive Maintenance Systems",
          subtitle: "",
          description:
            "Reduce equipment downtime and costs with smart maintenance alerts. AI identifies potential issues before they cause delays, ensuring smooth operations.",
 
 
        },
        {
          id: "autonomous-harvesting",
          icon: "Tractor",
          title: "Automation & Robotics Integration",
          subtitle: "",
          description:
             "Implement automated systems and robotics to boost construction speed and precision. Achieve consistent quality and lower operational costs with intelligent automation.",
 
        },
        {
          id: "crop-monitoring",
          icon: "Shield",
          title: "Real-Time Analytics Dashboard",
          subtitle: "",
          description:
            "Access real-time insights into budgets, progress, and resource utilization. Improve transparency and collaboration with centralized project dashboards.",
 
        },
        {
          id: "disease-diagnosis",
          icon: "Bug",
          title: "Sustainability & Green Building Tools",
          subtitle: "",
          description:
             "Adopt eco-friendly design tools and analytics to reduce waste and emissions. Align your construction practices with global sustainability goals.",
        },
      ],
      linkText: "Get AI-Powered Construction Solutions",
      linkUrl: "/contact-us",
    },
    managementSolutions: {
      title: "Construction Management Solutions",
      subtitle:
         "Streamline your construction operations with end-to-end management tools designed to improve efficiency, collaboration, and profitability.",
      subtitleLink: { text: "land management software", url: "#" },
      laptopImage: "/images/management-solutions.jpg",
      mobileImage: "/images/management-solutions-mobile.jpg",
      topFeatures: [
        {
          id: "mapping",
          icon: "map",
          title: "Project Scheduling & Planning",
          description:
            "Plan, schedule, and track projects with intelligent tools to prevent delays and ensure timely completion.",
          link: { text: "GIS & GPS technologies", url: "#" },
        },
        {
          id: "3d-design",
          icon: "box",
          title: "3D Modeling & BIM Integration",
          description:
             "Integrate Building Information Modeling for design accuracy, collaboration, and efficient resource utilization.",
        },
        {
          id: "sensors",
          icon: "sliders",
          title: "IoT-Based Equipment Monitoring",
          description:
              "Track equipment performance and health in real-time using IoT sensors and predictive maintenance analytics.",
        },
      ],
      bottomFeatures: [
        {
          id: "autonomous",
          icon: "monitor",
          title: "Workforce Productivity Tools",
          description:
            "Enhance labor efficiency with attendance tracking, performance analytics, and workforce coordination systems.",
        },
        {
          id: "irrigation",
          icon: "droplets",
          title: "Resource & Material Management",
          description:
              "Automate inventory tracking, procurement, and logistics to prevent shortages and ensure timely supply.",
          link: { text: "irrigation software", url: "#" },
        },
        {
          id: "agronomy",
          icon: "testTube",
          title: "Compliance & Safety Monitoring",
          description:
             "Ensure workplace safety with compliance tracking and real-time alerts for hazardous conditions.",
        },
        {
          id: "operations",
          icon: "settings",
          title: "Cost Estimation & Budget Control",
          description:
             "Optimize budgets and forecasts with AI-powered cost estimation and real-time expense monitoring tools.",
        },
      ],
      ctaText: "GET CONSTRUCTION SOFTWARE DEVELOPERS",
      onCtaClick: () => {},
    },
  };