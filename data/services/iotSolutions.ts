import { ServiceConfig } from "./services";

export const iotSolutions: ServiceConfig = {
  slug: "iot-solutions",
  banner: {
    title: "Transform Your Business with",
    highlight: "Smart IoT Solutions",
    subtitle:
      "Unlock the power of connected devices and real-time data with our end-to-end IoT development services. We build secure, scalable, and intelligent IoT ecosystems for industries worldwide.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get IoT Solutions",
  },

  developerDetails: {
    heading: "Expert IoT Developers & Engineers",
    subheading:
      "Our IoT experts design, build, and integrate smart device ecosystems that connect people, machines, and data for seamless automation and insight-driven decisions.",
    mainTitle: "Professional IoT Development & Integration Services",
    mainDescription:
      "We deliver end-to-end IoT solutions — from sensor integration and cloud connectivity to data analytics and automation. Our team ensures robust security, scalability, and real-time data performance across industries.",
<<<<<<< HEAD
    image: "/images/iot-development-laptop.png",
=======
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
    services: [
      {
        id: 1,
        title: "IoT Device Integration",
        description:
          "Connect sensors, devices, and gateways for real-time data exchange. Ensure compatibility with IoT protocols like MQTT and CoAP. Implement secure communication and cloud syncing. Streamline device management.",
        icon: "/icons/iot-device.svg",
      },
      {
        id: 2,
        title: "IoT Platform Development",
        description:
          "Build scalable IoT platforms for managing devices, users, and analytics. Enable centralized dashboards and cloud-based control. Integrate APIs and edge computing capabilities. ",
        icon: "/icons/iot-platform.svg",
      },
      {
        id: 3,
        title: "Industrial IoT Solutions",
        description:
          "Develop IIoT applications for smart manufacturing, energy, logistics, and healthcare. Enable predictive maintenance and process automation. Collect and analyze real-time data.",
        icon: "/icons/industrial-iot.svg",
      },
    ],
  },

  solutions: {
<<<<<<< HEAD
  mainTitle: "Comprehensive IoT Development Solutions",
  mainDescription:
    "Our IoT solutions connect devices, data, and people seamlessly. We empower enterprises to build smart ecosystems that improve efficiency, automation, and innovation.",
  

  items: [
    {
      id: "iot-apps",
      icon: "Leaf",
      title: "IoT Application Development",
      subtitle: "",
      description:
        "Design and build scalable IoT applications for connected devices. \nEnable real-time monitoring, control, and performance insights. \nIntegrate APIs and automation workflows for seamless operations. \nVisualize key metrics through advanced dashboards. \nDeliver reliable, cloud-ready IoT ecosystems for enterprises.",
    },
    {
      id: "edge-computing",
      icon: "Leaf",
      title: "Edge Computing Solutions",
      subtitle: "",
      description:
        "Boost performance by processing data at the network edge. \nReduce latency and dependency on cloud infrastructure. \nImprove decision-making for time-critical operations. \nOptimize bandwidth and system responsiveness. \nEnsure reliability for industrial and remote IoT environments.",
    },
    {
      id: "iot-security",
      icon: "Leaf",
      title: "IoT Security Solutions",
      subtitle: "",
      description:
        "Safeguard connected systems against evolving cyber threats. \nImplement encryption, secure authentication, and threat detection. \nMaintain compliance with global IoT security standards. \nMonitor vulnerabilities and respond proactively. \nBuild user trust through consistent data protection.",
    },
    {
      id: "data-analytics",
      icon: "Leaf",
      title: "IoT Data Analytics",
      subtitle: "",
      description:
        "Leverage real-time IoT data for actionable business intelligence. \nUse AI and ML models for predictive analytics and maintenance. \nTransform raw data into visual insights through dashboards. \nEnable faster, evidence-based decision-making. \nUnlock hidden opportunities to optimize performance.",
    },
    {
      id: "smart-home",
      icon: "Leaf",
      title: "Smart Home & Consumer IoT",
      subtitle: "",
      description:
        "Create intelligent home ecosystems for modern living. \nIntegrate sensors, smart assistants, and connected appliances. \nEnhance energy efficiency and device control remotely. \nDeliver seamless connectivity via mobile and cloud apps. \nImprove comfort, safety, and overall user experience.",
    },
    {
      id: "industrial-iot",
      icon: "Leaf",
      title: "Industrial IoT Solutions",
      subtitle: "",
      description:
        "Deploy IoT solutions to transform industrial operations. \nAutomate production lines and supply chain processes. \nUtilize predictive maintenance to reduce downtime. \nEnable real-time monitoring for asset performance. \nEnhance efficiency, safety, and operational visibility.",
    },
  ],
  linkText: "Get IoT Solutions",
  linkUrl: "/contact-us",
},

solutionsTwo: {
  mainTitle: "Next-Generation IoT Software Solutions",
  mainDescription:
    "We design intelligent IoT ecosystems that connect devices, systems, and data in real time. Our IoT solutions enable automation, monitoring, and analytics for smart industries. Empower your organization to operate efficiently and make data-driven decisions with connected intelligence.",

  items: [
    {
      id: "smart-manufacturing",
      icon: "Leaf",
      title: "Smart Manufacturing & Industrial IoT Systems",
      subtitle: "",
      description:
        "Integrate connected machinery and sensors across your production floor. \nMonitor performance, predict equipment failures, and optimize workflows. \nOur IIoT systems enhance visibility and reduce downtime through automation. \nUse real-time analytics to maintain consistent quality and safety. \nTransform factories into intelligent, self-optimizing operations.",
    },
    {
      id: "smart-cities",
      icon: "Leaf",
      title: "Smart City Infrastructure & Urban Automation",
      subtitle: "",
      description:
        "Deploy IoT-powered systems for traffic, lighting, and public utilities. \nEnhance urban management through predictive maintenance and analytics. \nCollect and analyze real-time data from connected devices across cities. \nImprove sustainability, energy efficiency, and citizen safety. \nBuild intelligent cities that respond dynamically to human needs.",
    },
    {
      id: "fleet-monitoring",
      icon: "Leaf",
      title: "Fleet Management & Vehicle Telematics",
      subtitle: "",
      description:
        "Track vehicles, routes, and drivers in real time using IoT telemetry. \nOptimize delivery times, fuel usage, and maintenance schedules efficiently. \nIntegrate GPS, RFID, and sensor data for complete visibility and control. \nGet predictive alerts to prevent delays or mechanical failures. \nStreamline logistics with intelligent, connected fleet solutions.",
    },
    {
      id: "energy-automation",
      icon: "Leaf",
      title: "Energy Management & Smart Grid Automation",
      subtitle: "",
      description:
        "Monitor and optimize energy flow through connected smart grids. \nUse IoT devices to track power usage and detect inefficiencies instantly. \nAutomate grid operations with predictive analytics and real-time control. \nIntegrate renewable sources for sustainable power distribution. \nReduce energy costs while ensuring reliability and efficiency.",
    },
    {
      id: "healthcare-iot",
      icon: "Leaf",
      title: "Connected Healthcare & Remote Monitoring",
      subtitle: "",
      description:
        "Enable patient monitoring through wearable and IoT-connected devices. \nCollect and transmit health data securely for real-time diagnostics. \nUse predictive alerts to detect abnormalities before emergencies occur. \nEnhance care efficiency through automation and continuous data flow. \nEmpower providers with connected, patient-centric healthcare insights.",
    },
    {
      id: "agriculture-iot",
      icon: "Leaf",
      title: "Smart Agriculture & Environmental Monitoring",
      subtitle: "",
      description:
        "Leverage IoT sensors to monitor soil, crops, and weather conditions. \nAutomate irrigation, fertilizer use, and yield optimization with AI insights. \nGather precise data for sustainable and profitable farming practices. \nReduce resource waste while improving output consistency. \nCultivate smarter farms with connected, data-driven decision systems.",
    },
  ],

  linkText: "Build Your IoT Solution Today",
  linkUrl: "/contact-us",
},


=======
    mainTitle: "Comprehensive IoT Development Solutions",
    mainDescription:
      "Our IoT solutions connect devices, data, and people seamlessly. We empower enterprises to build smart ecosystems that improve efficiency, automation, and innovation.",

    items: [
      {
        id: "iot-apps",
        icon: "Leaf",
        title: "IoT Application Development",
        subtitle: "",
        description:
          "Design and build scalable IoT applications for connected devices. \nEnable real-time monitoring, control, and performance insights. \nIntegrate APIs and automation workflows for seamless operations. \nVisualize key metrics through advanced dashboards. \nDeliver reliable, cloud-ready IoT ecosystems for enterprises.",
      },
      {
        id: "edge-computing",
        icon: "Leaf",
        title: "Edge Computing Solutions",
        subtitle: "",
        description:
          "Boost performance by processing data at the network edge. \nReduce latency and dependency on cloud infrastructure. \nImprove decision-making for time-critical operations. \nOptimize bandwidth and system responsiveness. \nEnsure reliability for industrial and remote IoT environments.",
      },
      {
        id: "iot-security",
        icon: "Leaf",
        title: "IoT Security Solutions",
        subtitle: "",
        description:
          "Safeguard connected systems against evolving cyber threats. \nImplement encryption, secure authentication, and threat detection. \nMaintain compliance with global IoT security standards. \nMonitor vulnerabilities and respond proactively. \nBuild user trust through consistent data protection.",
      },
      {
        id: "data-analytics",
        icon: "Leaf",
        title: "IoT Data Analytics",
        subtitle: "",
        description:
          "Leverage real-time IoT data for actionable business intelligence. \nUse AI and ML models for predictive analytics and maintenance. \nTransform raw data into visual insights through dashboards. \nEnable faster, evidence-based decision-making. \nUnlock hidden opportunities to optimize performance.",
      },
      {
        id: "smart-home",
        icon: "Leaf",
        title: "Smart Home & Consumer IoT",
        subtitle: "",
        description:
          "Create intelligent home ecosystems for modern living. \nIntegrate sensors, smart assistants, and connected appliances. \nEnhance energy efficiency and device control remotely. \nDeliver seamless connectivity via mobile and cloud apps. \nImprove comfort, safety, and overall user experience.",
      },
      {
        id: "industrial-iot",
        icon: "Leaf",
        title: "Industrial IoT Solutions",
        subtitle: "",
        description:
          "Deploy IoT solutions to transform industrial operations. \nAutomate production lines and supply chain processes. \nUtilize predictive maintenance to reduce downtime. \nEnable real-time monitoring for asset performance. \nEnhance efficiency, safety, and operational visibility.",
      },
    ],
    linkText: "Get IoT Solutions",
    linkUrl: "/contact-us",
  },

  solutionsTwo: {
    mainTitle: "Next-Generation IoT Software Solutions",
    mainDescription:
      "We design intelligent IoT ecosystems that connect devices, systems, and data in real time. Our IoT solutions enable automation, monitoring, and analytics for smart industries. Empower your organization to operate efficiently and make data-driven decisions with connected intelligence.",

    items: [
      {
        id: "smart-manufacturing",
        icon: "Leaf",
        title: "Smart Manufacturing & Industrial IoT Systems",
        subtitle: "",
        description:
          "Integrate connected machinery and sensors across your production floor. \nMonitor performance, predict equipment failures, and optimize workflows. \nOur IIoT systems enhance visibility and reduce downtime through automation. \nUse real-time analytics to maintain consistent quality and safety. \nTransform factories into intelligent, self-optimizing operations.",
      },
      {
        id: "smart-cities",
        icon: "Leaf",
        title: "Smart City Infrastructure & Urban Automation",
        subtitle: "",
        description:
          "Deploy IoT-powered systems for traffic, lighting, and public utilities. \nEnhance urban management through predictive maintenance and analytics. \nCollect and analyze real-time data from connected devices across cities. \nImprove sustainability, energy efficiency, and citizen safety. \nBuild intelligent cities that respond dynamically to human needs.",
      },
      {
        id: "fleet-monitoring",
        icon: "Leaf",
        title: "Fleet Management & Vehicle Telematics",
        subtitle: "",
        description:
          "Track vehicles, routes, and drivers in real time using IoT telemetry. \nOptimize delivery times, fuel usage, and maintenance schedules efficiently. \nIntegrate GPS, RFID, and sensor data for complete visibility and control. \nGet predictive alerts to prevent delays or mechanical failures. \nStreamline logistics with intelligent, connected fleet solutions.",
      },
      {
        id: "energy-automation",
        icon: "Leaf",
        title: "Energy Management & Smart Grid Automation",
        subtitle: "",
        description:
          "Monitor and optimize energy flow through connected smart grids. \nUse IoT devices to track power usage and detect inefficiencies instantly. \nAutomate grid operations with predictive analytics and real-time control. \nIntegrate renewable sources for sustainable power distribution. \nReduce energy costs while ensuring reliability and efficiency.",
      },
      {
        id: "healthcare-iot",
        icon: "Leaf",
        title: "Connected Healthcare & Remote Monitoring",
        subtitle: "",
        description:
          "Enable patient monitoring through wearable and IoT-connected devices. \nCollect and transmit health data securely for real-time diagnostics. \nUse predictive alerts to detect abnormalities before emergencies occur. \nEnhance care efficiency through automation and continuous data flow. \nEmpower providers with connected, patient-centric healthcare insights.",
      },
      {
        id: "agriculture-iot",
        icon: "Leaf",
        title: "Smart Agriculture & Environmental Monitoring",
        subtitle: "",
        description:
          "Leverage IoT sensors to monitor soil, crops, and weather conditions. \nAutomate irrigation, fertilizer use, and yield optimization with AI insights. \nGather precise data for sustainable and profitable farming practices. \nReduce resource waste while improving output consistency. \nCultivate smarter farms with connected, data-driven decision systems.",
      },
    ],

    linkText: "Build Your IoT Solution Today",
    linkUrl: "/contact-us",
  },
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6

  managementSolutions: {
    title: "IoT Device Management & Monitoring",
    subtitle:
      "Our IoT management tools ensure smooth device onboarding, data monitoring, and secure communication across large-scale deployments.",
    subtitleLink: { text: "IoT management systems", url: "#" },
<<<<<<< HEAD
    laptopImage: "https://i.pinimg.com/736x/c8/57/32/c857320ae95f62dd27b4d002810cdf3d.jpg",
=======
    laptopImage:
      "https://i.pinimg.com/736x/c8/57/32/c857320ae95f62dd27b4d002810cdf3d.jpg",
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
    mobileImage: "/images/iot-management-mobile.jpg",
    topFeatures: [
      {
        id: "device-tracking",
        icon: "map",
        title: "Device Tracking & Monitoring",
        description:
          "Track device status and connectivity in real-time. Manage firmware updates remotely. Detect and resolve faults instantly. Optimize uptime and operational health. Enable proactive issue detection across connected devices.",
      },
      {
        id: "data-visualization",
        icon: "map",
        title: "Data Visualization & Control Dashboards",
        description:
          "Monitor IoT data streams via custom dashboards. Analyze trends and anomalies in real-time. Gain full visibility into your network. Control device actions remotely. Simplify complex IoT analytics and control in one place.",
      },
      {
        id: "automation-tools",
        icon: "map",
        title: "Automation & Alert Systems",
        description:
          "Set automated triggers and workflows for IoT devices. Receive alerts for anomalies, faults, or performance issues. Ensure timely response actions. Increase operational safety and reliability. Enable self-healing IoT environments.",
      },
    ],
    ctaText: "Get IoT Experts",
<<<<<<< HEAD
    onCtaClick: () => {},
=======
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
  },

  faq: {
    title: "FAQ - IoT Development & Integration Services",
    items: [
      {
        id: "1",
        question: "What industries can benefit from IoT solutions?",
        answer:
          "IoT benefits industries like manufacturing, logistics, healthcare, retail, smart homes, and energy by enabling automation, monitoring, and data-driven operations.",
      },
      {
        id: "2",
        question: "Do you provide end-to-end IoT development?",
        answer:
          "Yes, we handle everything from hardware integration and firmware development to cloud connectivity, analytics, and mobile dashboard applications.",
      },
      {
        id: "3",
        question: "Can IoT systems work offline or without internet?",
        answer:
          "Absolutely. Our IoT architectures include edge and local computing capabilities that allow systems to function even without continuous internet connectivity.",
      },
      {
        id: "4",
        question: "How do you ensure IoT data security?",
        answer:
          "We use encryption, authentication, and secure data transmission protocols to safeguard IoT networks from unauthorized access and cyber threats.",
      },
      {
        id: "5",
        question: "Can you integrate IoT with existing enterprise systems?",
        answer:
          "Yes, our experts integrate IoT solutions with ERP, CRM, and legacy systems to create unified and intelligent business ecosystems.",
      },
      {
        id: "6",
        question: "Do you offer IoT maintenance and monitoring?",
        answer:
          "Yes, we provide continuous device monitoring, firmware updates, and data management to ensure smooth and secure IoT operations post-deployment.",
      },
    ],
  },
};
