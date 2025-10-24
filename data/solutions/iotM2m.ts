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
          "We deploy IoT-enabled industrial systems to monitor machinery, reduce downtime, and optimize performance using AI-driven analytics.",
      },
      {
        id: "fleet-management",
        icon: "Leaf",
        title: "Fleet & Asset Management",
        subtitle: "Track, Analyze, Optimize",
        description:
          "Monitor vehicle fleets, logistics operations, and mobile assets in real-time using GPS and IoT sensors for smarter transportation management.",
      },
      {
        id: "smart-cities",
        icon: "Leaf",
        title: "Smart City Infrastructure",
        subtitle: "Connected Urban Ecosystems",
        description:
          "We develop IoT solutions for smart lighting, traffic systems, waste management, and environmental monitoring to improve city life.",
      },
      {
        id: "energy-monitoring",
        icon: "Leaf",
        title: "Energy & Utility Monitoring",
        subtitle: "Data-Driven Efficiency",
        description:
          "Our IoT systems track energy usage, detect anomalies, and automate utility distribution for cost savings and sustainability.",
      },
      {
        id: "agriculture",
        icon: "Leaf",
        title: "Smart Agriculture",
        subtitle: "Data-Driven Farming",
        description:
          "We create IoT-enabled solutions for soil monitoring, irrigation automation, and crop analytics to boost yield and sustainability.",
      },
      {
        id: "healthcare",
        icon: "Leaf",
        title: "IoT Healthcare Systems",
        subtitle: "Remote Monitoring & Insights",
        description:
          "Our IoT-based healthcare systems enable real-time patient monitoring, device connectivity, and automated alerts for medical teams.",
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
    laptopImage: "/images/iot-management-laptop.jpg",
    mobileImage: "/images/iot-management-mobile.jpg",
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
          "Collect and visualize IoT data through interactive dashboards that help uncover trends and operational insights.",
      },
      {
        id: "cloud-integration",
        icon: "map",
        title: "Cloud Integration",
        description:
          "Connect IoT devices with AWS IoT Core, Azure IoT Hub, or Google Cloud IoT for scalable cloud-based management.",
      },
      {
        id: "api",
        icon: "map",
        title: "Custom API & Integration Support",
        description:
          "Integrate IoT systems with ERP, CRM, or AI analytics tools using RESTful APIs and secure data bridges.",
      },
      {
        id: "alerting",
        icon: "map",
        title: "Intelligent Alert & Notification System",
        description:
          "Receive instant alerts for device anomalies, performance drops, or predictive failure indicators.",
      },
    ],
    ctaText: "Get IoT Development Experts",
    onCtaClick: () => {},
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
