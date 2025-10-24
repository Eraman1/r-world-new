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
    image: "/images/embedded-laptop.png",
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
          "We develop IoT-enabled embedded software that communicates with cloud platforms, mobile apps, and other devices, enabling remote monitoring and control.",
      },
      {
        id: "industrial-automation",
        icon: "Leaf",
        title: "Industrial Automation",
        subtitle: "Optimize Processes & Operations",
        description:
          "Our embedded solutions help automate manufacturing and industrial processes with sensors, actuators, and real-time control systems.",
      },
      {
        id: "automotive-embedded",
        icon: "Leaf",
        title: "Automotive Embedded Systems",
        subtitle: "Safety & Infotainment Integration",
        description:
          "We develop ECU software, ADAS modules, and infotainment systems that meet automotive standards and provide reliable operation.",
      },
      {
        id: "consumer-electronics",
        icon: "Leaf",
        title: "Consumer Electronics",
        subtitle: "Smart Devices & Wearables",
        description:
          "Embedded software for smart home devices, wearables, and connected gadgets with optimized power consumption and responsiveness.",
      },
      {
        id: "real-time-control",
        icon: "Leaf",
        title: "Real-Time Control Systems",
        subtitle: "Precision & Determinism",
        description:
          "We implement real-time control software for robotics, industrial machinery, and mission-critical applications with strict timing requirements.",
      },
      {
        id: "security-embedded",
        icon: "Leaf",
        title: "Embedded Security Solutions",
        subtitle: "Protect Hardware & Data",
        description:
          "Our software includes secure boot, encryption, authentication, and hardware-based security to protect embedded devices from threats.",
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
    laptopImage: "/images/embedded-management.jpg",
    mobileImage: "/images/embedded-management-mobile.jpg",
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
          "Protect embedded systems using encryption, secure boot, and authentication to prevent unauthorized access.",
      },
      {
        id: "analytics",
        icon: "map",
        title: "Performance Analytics",
        description:
          "Collect device metrics and analyze data for optimization and proactive maintenance.",
      },
      {
        id: "scalability",
        icon: "map",
        title: "Scalable Embedded Platforms",
        description:
          "Design software architectures that support thousands of devices with minimal latency and maximum reliability.",
      },
      {
        id: "api-support",
        icon: "map",
        title: "API & Integration Support",
        description:
          "Enable integration with mobile apps, dashboards, and third-party platforms for seamless device management.",
      },
    ],
    ctaText: "Talk to Embedded Software Experts",
    onCtaClick: () => {},
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
