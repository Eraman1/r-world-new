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
    image: "/images/iot-development-laptop.png",
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
  mainTitle: "Comprehensive IoT Development Solutions",
  mainDescription:
    "Our IoT solutions connect devices, data, and people seamlessly. We empower enterprises to build smart ecosystems that improve efficiency, automation, and innovation.",
  linkText: "Get IoT Solutions",
  linkUrl: "/contact-us",

  items: [
    {
      id: "iot-apps",
      icon: "Leaf",
      title: "IoT Application Development",
      subtitle: "Custom IoT Software & Dashboards",
      description:
        "Design and build scalable IoT applications for connected devices. \nEnable real-time monitoring, control, and performance insights. \nIntegrate APIs and automation workflows for seamless operations. \nVisualize key metrics through advanced dashboards. \nDeliver reliable, cloud-ready IoT ecosystems for enterprises.",
    },
    {
      id: "edge-computing",
      icon: "Leaf",
      title: "Edge Computing Solutions",
      subtitle: "Process Data Closer to Devices",
      description:
        "Boost performance by processing data at the network edge. \nReduce latency and dependency on cloud infrastructure. \nImprove decision-making for time-critical operations. \nOptimize bandwidth and system responsiveness. \nEnsure reliability for industrial and remote IoT environments.",
    },
    {
      id: "iot-security",
      icon: "Leaf",
      title: "IoT Security Solutions",
      subtitle: "Protect Connected Ecosystems",
      description:
        "Safeguard connected systems against evolving cyber threats. \nImplement encryption, secure authentication, and threat detection. \nMaintain compliance with global IoT security standards. \nMonitor vulnerabilities and respond proactively. \nBuild user trust through consistent data protection.",
    },
    {
      id: "data-analytics",
      icon: "Leaf",
      title: "IoT Data Analytics",
      subtitle: "Turn Data into Insights",
      description:
        "Leverage real-time IoT data for actionable business intelligence. \nUse AI and ML models for predictive analytics and maintenance. \nTransform raw data into visual insights through dashboards. \nEnable faster, evidence-based decision-making. \nUnlock hidden opportunities to optimize performance.",
    },
    {
      id: "smart-home",
      icon: "Leaf",
      title: "Smart Home & Consumer IoT",
      subtitle: "Connected Living Experiences",
      description:
        "Create intelligent home ecosystems for modern living. \nIntegrate sensors, smart assistants, and connected appliances. \nEnhance energy efficiency and device control remotely. \nDeliver seamless connectivity via mobile and cloud apps. \nImprove comfort, safety, and overall user experience.",
    },
    {
      id: "industrial-iot",
      icon: "Leaf",
      title: "Industrial IoT Solutions",
      subtitle: "Empower Smart Industries",
      description:
        "Deploy IoT solutions to transform industrial operations. \nAutomate production lines and supply chain processes. \nUtilize predictive maintenance to reduce downtime. \nEnable real-time monitoring for asset performance. \nEnhance efficiency, safety, and operational visibility.",
    },
  ],
},


  managementSolutions: {
    title: "IoT Device Management & Monitoring",
    subtitle:
      "Our IoT management tools ensure smooth device onboarding, data monitoring, and secure communication across large-scale deployments.",
    subtitleLink: { text: "IoT management systems", url: "#" },
    laptopImage: "/images/iot-management.jpg",
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
    onCtaClick: () => {},
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
