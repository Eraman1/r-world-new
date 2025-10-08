import { IndustryConfig } from "@/types/industries";

export const agriculture: IndustryConfig = {
  slug: "agriculture",
  banner: {
    title: "Drive Innovation with",
    highlight: "World-Class Software Development",
    subtitle:
      "Partner with expert developers to build custom, scalable, and reliable  software solutions that accelerate your business growth.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Agri Solutions",
  },
  techHero: {
    heading: "Hire Experienced and Dedicated AgTech Software Developers",
    description:
      "AgTech solutions encompass innovative technologies transforming agriculture, boosting efficiency, profitability, and sustainability.",
    services: [
      {
        id: "land",
        title: "Land Management",
        icon: "Tractor",
        position: "left",
      },
      {
        id: "livestock",
        title: "Livestock Management",
        icon: "Beef",
        position: "left",
      },
      {
        id: "farm",
        title: "Farm Management",
        icon: "Warehouse",
        position: "left",
      },
      {
        id: "precision",
        title: "Precision Agriculture",
        icon: "Wheat",
        position: "left",
      },
      {
        id: "aquaculture",
        title: "Aquaculture",
        icon: "Fish",
        position: "right",
      },
      {
        id: "seed",
        title: "Seed-to-Sale Solutions",
        icon: "ShoppingCart",
        position: "right",
      },
      {
        id: "drone",
        title: "Agriculture Drone Software",
        icon: "PlaneTakeoff",
        position: "right",
      },
      {
        id: "food",
        title: "Food Safety & Compliance",
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
    mainTitle: "AI Solutions For Precision Agriculture",
    mainDescription:
      "AI Solutions For Precision Agriculture Our developers can implement Artificial Intelligence (AI) that analyzes data from satellites, drones, and sensors to provide real-time insights about soil conditions, moisture levels, and crop health. This data can be used to optimize irrigation, fertilization, and pest control, leading to increased yields and resource savings. Revolutionize agriculture through invaluable technology and insights that allow you to enhance productivity and resource allocation while minimizing environmental impact. Our AI solutions provide real-time data analysis, precision agriculture, and advanced crop management, enabling farmers to optimize their operations and reduce costs.",
    items: [
      {
        id: "crop-yield",
        icon: "Warehouse",
        title: "Crop Yield",
        subtitle: "Prediction & Price Forecast AI",
        description:
          "Our experts can implement AI features that predict crop yield and price. These models analyze previous data to forecast future crop yields. These predictions assist farmers in planning harvests, optimizing storage, and managing supply chains. Additionally, AI can predict price forecasts by analyzing market trends, helping farmers decide when to sell their products at the most optimal time. These factors are ever-changing, and being able to predict yield will improve crop management.",
      },
      {
        id: "chemical-spraying",
        icon: "Sprout",
        title: "Intelligent Chemical",
        subtitle: "Spraying Systems",
        description:
          "Our expert developers integrate AI technology to create advanced chemical spraying systems. With machine learning, data about temperature, soil, usage of water, and weather conditions is used to obtain useful insights to make accurate analyses. This system reduces the use of chemicals, minimizing environmental impact. It enhances crop protection while reducing the risks associated with excessive pesticide usage.",
      },
      {
        id: "seed-sowing",
        icon: "Leaf",
        title: "Predictive Analytic",
        subtitle: "Tools for Seed Sowing",
        description:
          "Our AI experts implement predictive analytics to determine the best time for seed sowing. AI analyzes data like soil health and gives fertilizer recommendations. It uses sensors that measure nutrient levels, pH, and other indicators to make these predictions, providing accurate crop insights. Additionally, it analyzes weather conditions and soil moisture levels to provide insights into optimal plating windows. This technology leads to better germination rates, healthier crops, and improved resource use.",
      },
      {
        id: "autonomous-harvesting",
        icon: "Tractor",
        title: "Autonomous",
        subtitle: "Harvesting Solutions",
        description:
          "Our developers are familiar with leveraging AI to create automated tasks. We develop autonomous harvesting solutions that utilize computer vision and machine learning algorithms to identify ripe crops and harvest them efficiently. These systems can work around the clock, reducing labor costs and improving harvest timing for optimal crop quality.",
      },
      {
        id: "crop-monitoring",
        icon: "Shield",
        title: "AI-Driven Crop",
        subtitle: "and Soil Monitoring",
        description:
          "We create AI-powered crop and soil monitoring systems to ensure crops thrive and yield a big crop yield. We use data from IoT sensors, drones, and satellite imagery to continuously monitor crop health, soil conditions, and environmental factors. This real-time monitoring enables proactive decision-making and early detection of potential issues.",
      },
      {
        id: "disease-diagnosis",
        icon: "Bug",
        title: "Machine Learning",
        subtitle: "for Disease Diagnosis",
        description:
          "Our developers are very familiar with machine learning, one of AI's powerful subsets. Machine learning is trained on datasets containing images of healthy and diseased plants to accurately identify plant diseases early. This early detection system helps farmers take immediate action, preventing crop losses and reducing the need for widespread pesticide application.",
      },
    ],
    linkText: "Get AI-Powered Agriculture Solutions",
    linkUrl: "/contact-us",
  },
  managementSolutions: {
    title: "Land Management Software Solutions",
    subtitle:
      "Chetu's land management software developers have vast agricultural industry-experience and first-hand knowledge of how to develop world-class solutions for agricultural operations.",
    subtitleLink: { text: "land management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "mapping",
        icon: "map",
        title: "Land Mapping & GPS Software",
        description:
          "We program GIS & GPS technologies and integrate them with your current systems for site-specific data mapping optimization and accurate yield forecasting.",
        link: { text: "GIS & GPS technologies", url: "#" },
      },
      {
        id: "3d-design",
        icon: "box",
        title: "3D Field Design Applications",
        description:
          "We engineer custom 3D field design apps to seamlessly integrate with topography mapping software for added visualization and management of all land areas.",
      },
      {
        id: "sensors",
        icon: "sliders",
        title: "Smart Controllers & Sensors",
        description:
          "We implement smart controllers & sensors that screen the yields for changes in temperature, light, humidity, weather patterns, and other environmental factors.",
      },
    ],
    bottomFeatures: [
      {
        id: "autonomous",
        icon: "monitor",
        title: "Autonomous Farming Management Systems",
        description:
          "We incorporate prescriptive technology, harvesting & crop management modules, and decision support systems (DSS) to maximize operational performance for autonomous farming.",
      },
      {
        id: "irrigation",
        icon: "droplets",
        title: "Irrigation System Management",
        description:
          "We design our irrigation software with computer-aided designs (CAD), digital terrain modeling (DTM), hydraulic systems, and irrigation patterns.",
        link: { text: "irrigation software", url: "#" },
      },
      {
        id: "agronomy",
        icon: "testTube",
        title: "Agronomy Software Solutions",
        description:
          "We develop agronomy software solutions covering everything from soil sampling and collection to GIS mapping, subsurface drainage, and soil fertility automation.",
      },
      {
        id: "operations",
        icon: "settings",
        title: "Operations Management",
        description:
          "We integrate unmanned aerial vehicle (UAV) software with third-party APIs for irrigation management to streamline consistent operational workflows.",
      },
    ],
    ctaText: "GET LAND MGMT SOFTWARE DEVELOPERS",
    onCtaClick: () => {},
  },
  managementSolutionsTwo: {
    title: "Land Management Software Solutions-testing",
    subtitle:
      "Chetu's land management software developers have vast agricultural industry-experience and first-hand knowledge of how to develop world-class solutions for agricultural operations.",
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
};
