import { SolutionConfig } from "@/types/solutions";

export const embeddedSoftware: SolutionConfig = {
  slug: "embedded-software",

  banner: {
    title: "Power Your Devices with",
    highlight: "Reliable Embedded Software Solutions",
    subtitle:
      "Design and develop software for IoT, industrial systems, consumer electronics, and more with high performance and safety standards.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Embedded Solutions",
  },

  developerDetails: {
    heading: "Expert Developers in Embedded Systems & IoT",
    subheading:
      "Our team specializes in developing firmware, real-time software, and device drivers for embedded platforms, ensuring optimized performance and reliability.",
    mainTitle: "Embedded Software Development Services",
    mainDescription:
      "We provide end-to-end embedded software solutions for IoT, automotive, robotics, consumer electronics, and industrial automation. Our expertise ensures high efficiency, safety compliance, and seamless integration with hardware platforms.",
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    services: [
      {
        id: 1,
        title: "Firmware Development",
        description:
          "We develop efficient firmware for microcontrollers and SoCs, ensuring stable and fast device performance across applications.",
        icon: "/icons/chip.svg",
      },
      {
        id: 2,
        title: "RTOS & Real-Time Systems",
        description:
          "Our team implements real-time operating systems for time-critical applications, guaranteeing deterministic behavior and reliability.",
        icon: "/icons/clock.svg",
      },
      {
        id: 3,
        title: "Device Drivers & Middleware",
        description:
          "We create custom device drivers and middleware to enable hardware-software integration for a wide range of embedded platforms.",
        icon: "/icons/settings.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Advanced Embedded & IoT Software Solutions",
    mainDescription:
      "From IoT devices to industrial automation, we develop embedded software that ensures high reliability, performance, and security across hardware platforms.",
    items: [
      {
        id: "iot-development",
        icon: "Leaf",
        title: "IoT Software Development",
        subtitle: "Connect, Monitor & Control Devices",
        description:
          "We create IoT-enabled embedded software that connects seamlessly with cloud services, sensors, and mobile apps. Our systems allow remote monitoring, real-time data processing, and intelligent device control. Enhance operational efficiency through smart connectivity and automation.",
      },
      {
        id: "industrial-automation",
        icon: "Leaf",
        title: "Industrial Automation",
        subtitle: "Optimize Processes & Operations",
        description:
          "We build automation systems using embedded controllers, sensors, and actuators for manufacturing and industrial plants. Our software improves accuracy, reduces downtime, and ensures real-time responsiveness. Achieve higher productivity through reliable process optimization.",
      },
      {
        id: "automotive-embedded",
        icon: "Leaf",
        title: "Automotive Embedded Systems",
        subtitle: "Safety & Infotainment Integration",
        description:
          "Our team develops ECU software, ADAS modules, and in-vehicle infotainment platforms that meet global automotive standards. We focus on safety, performance, and seamless integration across components. Deliver smarter and more connected driving experiences.",
      },
      {
        id: "consumer-electronics",
        icon: "Leaf",
        title: "Consumer Electronics",
        subtitle: "Smart Devices & Wearables",
        description:
          "We design embedded software for next-generation consumer electronics like smart home devices, wearables, and entertainment systems. Our solutions ensure high responsiveness and energy efficiency. Enhance user satisfaction through intelligent device functionality and design.",
      },
      {
        id: "real-time-control",
        icon: "Leaf",
        title: "Real-Time Control Systems",
        subtitle: "Precision & Determinism",
        description:
          "We develop real-time embedded systems for robotics, automation, and critical control applications. Our solutions guarantee deterministic performance and ultra-low latency. Achieve precise timing, fault tolerance, and high reliability in mission-critical environments.",
      },
      {
        id: "security-embedded",
        icon: "Leaf",
        title: "Embedded Security Solutions",
        subtitle: "Protect Hardware & Data",
        description:
          "We implement end-to-end embedded security through encryption, secure boot, and hardware authentication. Our solutions defend against cyber threats and unauthorized access. Safeguard devices and networks with advanced firmware and chip-level protection.",
      },
    ],
    linkText: "Get Embedded Software Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Embedded Device Management Platforms",
    subtitle:
      "Manage firmware updates, monitoring, and device control with integrated embedded management systems.",
    subtitleLink: { text: "embedded device management", url: "#" },
<<<<<<< HEAD
    laptopImage: "https://i.pinimg.com/736x/e9/e2/a0/e9e2a0676dc30caf65c2ec77f6be6204.jpg",
    mobileImage: "https://i.pinimg.com/736x/cf/68/04/cf6804df1ad8de315cb8028163e4a048.jpg",
=======
    laptopImage:
      "https://i.pinimg.com/736x/e9/e2/a0/e9e2a0676dc30caf65c2ec77f6be6204.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/cf/68/04/cf6804df1ad8de315cb8028163e4a048.jpg",
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
    topFeatures: [
      {
        id: "firmware-updates",
        icon: "map",
        title: "Remote Firmware Updates",
        description:
          "Seamlessly update device firmware over-the-air (OTA) with safety checks and rollback mechanisms.",
      },
      {
        id: "device-monitoring",
        icon: "map",
        title: "Device Monitoring & Diagnostics",
        description:
          "Real-time monitoring of devices for performance metrics, error detection, and predictive maintenance.",
      },
      {
        id: "cloud-integration",
        icon: "map",
        title: "Cloud & Edge Integration",
        description:
          "Connect embedded devices to cloud platforms or edge computing systems for advanced data processing and analytics.",
      },
    ],
    bottomFeatures: [
      {
        id: "security",
        icon: "map",
        title: "Device Security & Encryption",
        description:
          "Protect embedded systems with end-to-end encryption and secure boot mechanisms. Prevent unauthorized access through hardware-level authentication and key management. Ensure system integrity and safeguard sensitive data from potential threats.",
      },
      {
        id: "analytics",
        icon: "map",
        title: "Performance Analytics",
        description:
          "Monitor device performance in real time with built-in analytics and diagnostic tools. Identify system bottlenecks early to enhance efficiency and uptime. Use predictive insights to enable proactive maintenance and continuous optimization.",
      },
      {
        id: "scalability",
        icon: "map",
        title: "Scalable Embedded Platforms",
        description:
          "Develop robust architectures that efficiently handle thousands of connected devices. Maintain high performance and low latency across diverse operating environments. Ensure reliability and adaptability as your device network grows globally.",
      },
      {
        id: "api-support",
        icon: "map",
        title: "API & Integration Support",
        description:
          "Enable seamless connectivity between embedded systems and third-party applications. Integrate with mobile apps, analytics dashboards, and IoT ecosystems effortlessly. Simplify device management and data flow through secure, well-documented APIs.",
      },
    ],
    ctaText: "Talk to Embedded Software Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What types of embedded systems do you develop?",
        answer:
          "We develop firmware, device drivers, real-time control systems, IoT solutions, automotive ECUs, and industrial automation software.",
      },
      {
        id: "2",
        question: "Do you provide IoT software integration?",
        answer:
          "Yes, we connect embedded devices to cloud platforms, apps, and other devices using secure protocols and APIs.",
      },
      {
        id: "3",
        question: "Can you develop software for safety-critical applications?",
        answer:
          "Absolutely. Our team follows industry standards for safety, reliability, and real-time performance in mission-critical applications.",
      },
      {
        id: "4",
        question: "What hardware platforms do you support?",
        answer:
          "We support microcontrollers, SoCs, ARM-based devices, IoT modules, and custom hardware platforms.",
      },
      {
        id: "5",
        question: "Do you offer remote firmware updates?",
        answer:
          "Yes. We implement OTA firmware updates with safety, rollback, and version control features.",
      },
      {
        id: "6",
        question: "Can you help with embedded device security?",
        answer:
          "Yes, we implement secure boot, encryption, authentication, and other measures to protect embedded devices from threats.",
      },
    ],
  },
};
