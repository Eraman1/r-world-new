import { SolutionConfig } from "@/types/solutions";

export const firmware: SolutionConfig = {
  slug: "firmware",
  banner: {
    title: "Power Devices with",
    highlight: "Robust Firmware & Embedded Software",
    subtitle:
      "Design, build, and maintain reliable firmware for IoT, industrial controllers, consumer electronics, and safety-critical devices — from prototype to production.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Firmware Solutions",
  },

  developerDetails: {
    heading: "Firmware & Embedded Systems Engineers",
    subheading:
      "Experienced embedded engineers focusing on performance, low-power design, real-time systems, and hardware/software co-design.",
    mainTitle: "Full-Stack Firmware Development Services",
    mainDescription:
      "We deliver end-to-end firmware engineering: device drivers, RTOS-based applications, bootloaders, secure OTA, hardware bring-up, and validation. Our team supports multiple microcontroller families and SoCs, enabling fast time-to-market while ensuring robustness and regulatory compliance.",
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    services: [
      {
        id: 1,
        title: "Bootloader & BSP Development",
        description:
          "Custom bootloaders, board support packages, and low-level drivers to initialize hardware and provide a stable runtime environment.",
        icon: "/icons/boot.svg",
      },
      {
        id: 2,
        title: "RTOS & Bare-Metal Applications",
        description:
          "Real-time solutions using FreeRTOS, Zephyr, ThreadX, or bare-metal stacks optimized for deterministic performance and low latency.",
        icon: "/icons/rtos.svg",
      },
      {
        id: 3,
        title: "Secure OTA & Device Lifecycle",
        description:
          "End-to-end secure firmware update pipelines, rollback protection, and version management for long-lived connected devices.",
        icon: "/icons/update.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Embedded Software & Firmware Solutions",
    mainDescription:
      "From sensor interfacing to complex connectivity stacks, we build firmware that is secure, efficient, and maintainable. Our solutions cover connectivity (BLE, Wi-Fi, LoRa, NB-IoT), power optimization, field diagnostics, and regulatory-ready features.",
    items: [
      {
        id: "hardware-bringup",
        icon: "Leaf",
        title: "Hardware Bring-up & Board Support",
        subtitle: "Get devices production-ready",
        description:
          "We validate hardware and integrate low-level drivers to ensure reliable system behavior. Our team handles peripheral configuration, memory mapping, and timing calibration. This guarantees smooth performance across device revisions and production runs.",
      },
      {
        id: "connectivity-stacks",
        icon: "Leaf",
        title: "Connectivity & Protocol Implementations",
        subtitle: "BLE, Wi-Fi, Thread, LoRa, Cellular",
        description:
          "We implement optimized wireless connectivity stacks with secure provisioning and power management. Our experts tailor protocols for real-world performance and certification. Deliver seamless device-to-cloud communication across multiple networks.",
      },
      {
        id: "power-optimization",
        icon: "Leaf",
        title: "Power Management & Low-Power Design",
        subtitle: "Maximize battery life",
        description:
          "Our engineers design energy-efficient architectures to extend battery life. We develop deep-sleep algorithms, wake-up strategies, and adaptive scheduling. The result is optimal performance even in energy-constrained embedded systems.",
      },
      {
        id: "security",
        icon: "Leaf",
        title: "Embedded Security & Hardware Trust",
        subtitle: "Secure boot, encryption, TPM/SE",
        description:
          "We build end-to-end firmware security frameworks with encryption and authentication. Secure boot, key management, and TPM-based trust anchors protect data integrity. Ensure compliance and protection across connected IoT and embedded products.",
      },
      {
        id: "validation",
        icon: "Leaf",
        title: "Testing, CI/CD & Certification",
        subtitle: "Automated firmware quality pipelines",
        description:
          "Automate firmware validation through hardware-in-loop (HIL) testing and regression workflows. Our CI/CD setups accelerate release cycles with quality assurance built-in. We assist in achieving compliance with IEC, ISO, and FCC standards.",
      },
      {
        id: "diagnostics",
        icon: "Leaf",
        title: "Remote Diagnostics & Telemetry",
        subtitle: "Field troubleshooting & observability",
        description:
          "Enable real-time insights into device performance with remote telemetry tools. Our diagnostic layers capture logs, monitor sensors, and detect anomalies. Reduce downtime and maintenance costs through predictive remote monitoring systems.",
      },
    ],
    linkText: "Discuss Firmware Project",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Firmware Development & Release Management",
    subtitle:
      "Processes and platforms to manage firmware builds, regression testing, secure OTA, and device fleet operations throughout product lifecycle.",
    subtitleLink: { text: "firmware lifecycle management", url: "#" },
<<<<<<< HEAD
    laptopImage: "https://i.pinimg.com/736x/03/7d/4a/037d4a5c79a23ea23b850d9b2980078e.jpg",
    mobileImage: "https://i.pinimg.com/736x/31/c2/fa/31c2faef44918b5e642f118162380204.jpg",
=======
    laptopImage:
      "https://i.pinimg.com/736x/03/7d/4a/037d4a5c79a23ea23b850d9b2980078e.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/31/c2/fa/31c2faef44918b5e642f118162380204.jpg",
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
    topFeatures: [
      {
        id: "ci-cd",
        icon: "map",
        title: "CI/CD for Embedded",
        description:
          "Automate cross-compiler builds, unit tests, static analysis, artifact signing, and packaging for multiple MCU targets.",
        link: { text: "embedded CI/CD", url: "#" },
      },
      {
        id: "fleet-management",
        icon: "map",
        title: "Device Fleet & OTA Management",
        description:
          "Manage staged rollouts, canary updates, rollback strategies, and analytics for devices in the field.",
      },
      {
        id: "traceability",
        icon: "map",
        title: "Traceability & Documentation",
        description:
          "Maintain reproducible builds, release notes, change logs, and traceability for safety and compliance audits.",
      },
    ],
    bottomFeatures: [
      {
        id: "debug-tools",
        icon: "map",
        title: "Hardware Debug & JTAG Support",
        description:
          "Accelerate hardware development with integrated in-circuit debugging and real-time trace analysis. Utilize JTAG/SWD interfaces to pinpoint and resolve complex firmware issues efficiently. Reduce turnaround time with precise diagnostic and testing workflows.",
      },
      {
        id: "scalability",
        icon: "map",
        title: "Scalable Firmware Architectures",
        description:
          "Design modular and layered firmware systems built for flexibility and future growth. Support multiple product variants without redundant development effort. Ensure long-term maintainability and easy updates through structured architecture patterns.",
      },
      {
        id: "support",
        icon: "map",
        title: "Field Support & Maintenance",
        description:
          "Maintain product reliability with SLA-backed support and proactive maintenance cycles. Deliver secure firmware patches and version updates to deployed devices. Minimize downtime and enhance customer trust through responsive technical support.",
      },
      {
        id: "compliance",
        icon: "map",
        title: "Regulatory & Safety Compliance",
        description:
          "Implement firmware aligned with global safety and quality standards across industries. Ensure compliance for medical, automotive, and industrial devices through rigorous validation. Achieve certification readiness with expert documentation and testing practices.",
      },
    ],
    ctaText: "Start Firmware Project",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "Which microcontrollers and SoCs do you work with?",
        answer:
          "We have experience with a broad range of MCUs and SoCs including ARM Cortex-M series, ESP32, nRF52, STM32, TI Sitara, NXP i.MX, and more. We choose the right platform based on cost, performance, power, and ecosystem.",
      },
      {
        id: "2",
        question: "Do you provide secure OTA update solutions?",
        answer:
          "Yes. We design secure OTA pipelines with signed firmware binaries, staged rollouts, integrity checks, and rollback mechanisms to ensure safe updates in the field.",
      },
      {
        id: "3",
        question: "How do you ensure firmware reliability and quality?",
        answer:
          "We adopt unit testing, hardware-in-the-loop (HIL) testing, static analysis, fuzzing for protocol handlers, and automated regression in CI to catch issues early and ensure high quality.",
      },
      {
        id: "4",
        question: "Can you optimize firmware for low power consumption?",
        answer:
          "Absolutely. We profile power usage, implement low-power modes, optimize peripheral usage, and tune wake/sleep cycles to maximize battery life for portable devices.",
      },
      {
        id: "5",
        question:
          "Do you assist with hardware bring-up and driver development?",
        answer:
          "Yes. We perform board bring-up, write device drivers for sensors and peripherals, tune interfaces (I2C, SPI, UART), and validate signal integrity with tests.",
      },
      {
        id: "6",
        question: "Do you support certifications and compliance testing?",
        answer:
          "We support preparation for regulatory testing (EMC, safety, medical, automotive) and provide documentation, test harnesses, and reproducible artifacts required by certification bodies.",
      },
    ],
  },
};
