import { SolutionConfig } from "@/types/solutions";

export const iotM2m: SolutionConfig = {
  slug: "iot-m2m",

  banner: {
    title: "Connect the Future with",
    highlight: "IoT & M2M Communication Solutions",
    subtitle:
      "Empower your business with intelligent IoT and M2M systems that connect devices, streamline operations, and enable real-time decision-making.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore IoT Solutions",
  },

  developerDetails: {
    heading: "Smart Connectivity for a Connected World",
    subheading:
      "Our IoT and M2M experts design connected ecosystems that enable devices to communicate, analyze, and act autonomously — enhancing efficiency and scalability.",
    mainTitle: "Comprehensive IoT & M2M Development Services",
    mainDescription:
      "We build intelligent solutions that bridge the digital and physical worlds through sensor networks, real-time analytics, and secure communication protocols. From smart manufacturing to logistics tracking, we help businesses harness the power of connected data.",
    image: "/images/iot-dashboard-laptop.png",
    services: [
      {
        id: 1,
        title: "IoT Device Integration",
        description:
          "We connect and manage devices across platforms using standardized IoT protocols like MQTT, CoAP, and HTTP for seamless data flow.",
        icon: "/icons/network.svg",
      },
      {
        id: 2,
        title: "M2M Communication Systems",
        description:
          "Our M2M solutions enable direct device-to-device communication for automated monitoring and real-time control in industrial settings.",
        icon: "/icons/wifi.svg",
      },
      {
        id: 3,
        title: "Edge Computing Solutions",
        description:
          "We design edge systems that process data locally on IoT devices to reduce latency, improve speed, and ensure reliability in critical applications.",
        icon: "/icons/cpu.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "IoT & M2M Technology Solutions",
    mainDescription:
      "Transform your operations with smart connectivity. Our IoT & M2M solutions empower industries to automate workflows, monitor assets, and extract insights from data in real-time.",
    items: [
      {
        id: "smart-industry",
        icon: "Leaf",
        title: "Industrial IoT (IIoT)",
        subtitle: "Automation & Predictive Maintenance",
        description:
          "Integrate IoT-enabled devices to monitor equipment health and optimize industrial performance. Predict failures before they occur with real-time analytics. Enhance efficiency through data-driven automation and intelligent maintenance scheduling.",
      },
      {
        id: "fleet-management",
        icon: "Leaf",
        title: "Fleet & Asset Management",
        subtitle: "Track, Analyze, Optimize",
        description:
          "Leverage IoT sensors and GPS tracking to monitor fleets and logistics operations in real time. Gain actionable insights into performance, routes, and utilization. Reduce fuel costs and improve asset lifespan through predictive analytics.",
      },
      {
        id: "smart-cities",
        icon: "Leaf",
        title: "Smart City Infrastructure",
        subtitle: "Connected Urban Ecosystems",
        description:
          "Build intelligent urban systems for lighting, traffic, waste, and air quality management. Enhance sustainability and public safety using connected IoT networks. Empower city administrators with live dashboards for smarter decision-making.",
      },
      {
        id: "energy-monitoring",
        icon: "Leaf",
        title: "Energy & Utility Monitoring",
        subtitle: "Data-Driven Efficiency",
        description:
          "Monitor power usage and utility consumption with advanced IoT analytics. Detect inefficiencies and automate energy distribution for optimal performance. Reduce costs and promote green energy initiatives through real-time data insights.",
      },
      {
        id: "agriculture",
        icon: "Leaf",
        title: "Smart Agriculture",
        subtitle: "Data-Driven Farming",
        description:
          "Deploy IoT sensors to track soil health, moisture levels, and weather conditions. Automate irrigation systems for improved crop yield and resource management. Empower farmers with real-time insights to achieve precision agriculture.",
      },
      {
        id: "healthcare",
        icon: "Leaf",
        title: "IoT Healthcare Systems",
        subtitle: "Remote Monitoring & Insights",
        description:
          "Connect medical devices and sensors to enable continuous patient monitoring and data sharing. Detect health anomalies instantly for faster intervention. Support healthcare providers with predictive insights for proactive care delivery.",
      },
    ],
    linkText: "Get IoT Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "IoT Device Management & Analytics Platforms",
    subtitle:
      "Centralized platforms to connect, control, and analyze all your IoT devices and M2M communications in one place.",
    subtitleLink: { text: "IoT management systems", url: "#" },
    laptopImage:
      "https://i.pinimg.com/1200x/bd/c9/e8/bdc9e863783b7cf6781fde6ce66afac4.jpg",
    mobileImage:
      "https://i.pinimg.com/1200x/fc/0d/56/fc0d56d007c94839e316ebbe5e3a65f8.jpg",
    topFeatures: [
      {
        id: "monitoring",
        icon: "map",
        title: "Real-Time Device Monitoring",
        description:
          "Track the status, performance, and connectivity of thousands of devices in real-time from a unified dashboard.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Automated Control Systems",
        description:
          "Enable rule-based automation where devices communicate and act independently to optimize processes.",
      },
      {
        id: "security",
        icon: "map",
        title: "End-to-End Data Security",
        description:
          "Ensure secure communication with encryption, device authentication, and role-based access control.",
      },
    ],
    bottomFeatures: [
      {
        id: "data-analytics",
        icon: "map",
        title: "IoT Data Analytics",
        description:
          "Collect, process, and visualize IoT data through interactive dashboards for actionable insights. Identify patterns, trends, and anomalies across connected devices. Empower decision-making with real-time operational intelligence and predictive analytics.",
      },
      {
        id: "cloud-integration",
        icon: "map",
        title: "Cloud Integration",
        description:
          "Seamlessly connect IoT devices to cloud platforms like AWS IoT Core, Azure IoT Hub, or Google Cloud IoT. Enable scalable device management, storage, and computation. Optimize performance and accessibility with reliable cloud-based infrastructure.",
      },
      {
        id: "api",
        icon: "map",
        title: "Custom API & Integration Support",
        description:
          "Integrate IoT systems with ERP, CRM, and AI analytics platforms using secure, RESTful APIs. Facilitate smooth data exchange and workflow automation. Enhance connectivity and interoperability across your digital ecosystem.",
      },
      {
        id: "alerting",
        icon: "map",
        title: "Intelligent Alert & Notification System",
        description:
          "Receive real-time notifications for device anomalies, performance drops, or predictive maintenance alerts. Customize alerts based on thresholds and business rules. Proactively manage devices to reduce downtime and improve operational efficiency.",
      },
    ],
    ctaText: "Get IoT Development Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is the difference between IoT and M2M?",
        answer:
          "IoT connects devices through the internet for remote control and data analysis, while M2M focuses on direct device-to-device communication without human input.",
      },
      {
        id: "2",
        question: "Which industries can benefit from IoT and M2M solutions?",
        answer:
          "Industries like manufacturing, logistics, healthcare, agriculture, and energy use IoT and M2M to improve efficiency and reduce costs.",
      },
      {
        id: "3",
        question: "Can you build custom IoT platforms?",
        answer:
          "Yes, we design and develop tailored IoT platforms with real-time dashboards, device management, and API integrations for specific business needs.",
      },
      {
        id: "4",
        question: "Do your IoT solutions support cloud connectivity?",
        answer:
          "Absolutely. We integrate with AWS IoT, Azure IoT Hub, and Google Cloud IoT for scalable, secure cloud operations.",
      },
      {
        id: "5",
        question: "How do you ensure IoT data security?",
        answer:
          "Our IoT architecture includes encryption, token-based authentication, and continuous monitoring to prevent unauthorized access.",
      },
      {
        id: "6",
        question: "Do you provide IoT hardware and firmware development?",
        answer:
          "Yes, we offer end-to-end IoT solutions including hardware integration, firmware programming, and sensor network design.",
      },
    ],
  },
};
