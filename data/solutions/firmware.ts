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
    image: "/images/firmware-laptop.png",
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
          "Perform hardware validation, peripheral bring-up, and low-level driver integration to ensure reliable device operation across manufacturing tolerances.",
      },
      {
        id: "connectivity-stacks",
        icon: "Leaf",
        title: "Connectivity & Protocol Implementations",
        subtitle: "BLE, Wi-Fi, Thread, LoRa, Cellular",
        description:
          "Implement and optimize connectivity stacks, provisioning flows, and power profiles to meet product requirements and certification needs.",
      },
      {
        id: "power-optimization",
        icon: "Leaf",
        title: "Power Management & Low-Power Design",
        subtitle: "Maximize battery life",
        description:
          "Architect deep-sleep strategies, wake-up sources, and energy-aware scheduling to extend battery lifetime in portable and remote devices.",
      },
      {
        id: "security",
        icon: "Leaf",
        title: "Embedded Security & Hardware Trust",
        subtitle: "Secure boot, encryption, TPM/SE",
        description:
          "Design secure boot chains, firmware signing, key management, and hardware-rooted trust using secure elements and TPMs.",
      },
      {
        id: "validation",
        icon: "Leaf",
        title: "Testing, CI/CD & Certification",
        subtitle: "Automated firmware quality pipelines",
        description:
          "Unit/integration testing, hardware-in-the-loop (HIL), automated flashing, regression CI and support for industry certifications (IEC, ISO, FCC).",
      },
      {
        id: "diagnostics",
        icon: "Leaf",
        title: "Remote Diagnostics & Telemetry",
        subtitle: "Field troubleshooting & observability",
        description:
          "Implement remote logging, telemetry, and diagnostic modes so teams can monitor fleet health, run remote debug sessions, and minimize field visits.",
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
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
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
          "In-circuit debugging, trace, and JTAG/SWD integration to accelerate fault diagnosis and development cycles.",
      },
      {
        id: "scalability",
        icon: "map",
        title: "Scalable Firmware Architectures",
        description:
          "Modular firmware patterns and layered abstractions to support product variants and long-term maintenance.",
      },
      {
        id: "support",
        icon: "map",
        title: "Field Support & Maintenance",
        description:
          "SLA-driven support, field patches, and release hygiene to keep device fleets secure and up-to-date.",
      },
      {
        id: "compliance",
        icon: "map",
        title: "Regulatory & Safety Compliance",
        description:
          "Guidance and implementation for relevant industry standards (medical, automotive, industrial) and safety-critical workflows.",
      },
    ],
    ctaText: "Start Firmware Project",
    onCtaClick: () => {},
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
        question: "Do you assist with hardware bring-up and driver development?",
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
