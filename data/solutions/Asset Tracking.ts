import { SolutionConfig } from "@/types/solutions";

export const assetTracking: SolutionConfig = {
  slug: "asset-tracking",

  banner: {
    title: "Streamline Operations with",
    highlight: "RFID & Barcode Asset Tracking Systems",
    subtitle:
      "Automate inventory, asset monitoring, and logistics with real-time RFID and barcode tracking for smarter and faster operations.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore Asset Tracking Solutions",
  },

  developerDetails: {
    heading: "Next-Gen RFID & Barcode Tracking Systems",
    subheading:
      "We design and develop intelligent asset tracking systems powered by RFID and barcode technologies to enhance visibility, security, and efficiency.",
    mainTitle: "Smart Asset & Inventory Tracking Software",
    mainDescription:
      "Our asset tracking solutions automate item identification, location tracking, and lifecycle management across warehouses, logistics, retail, and enterprise operations. Integrated analytics help reduce losses and improve resource utilization.",
    image: "/images/asset-tracking-laptop.png",
    services: [
      {
        id: 1,
        title: "RFID Integration",
        description:
          "We build RFID-enabled systems that capture and transmit data in real-time to monitor asset movements and prevent misplacement.",
        icon: "/icons/rfid.svg",
      },
      {
        id: 2,
        title: "Barcode & QR Code Systems",
        description:
          "Our barcode and QR-based tracking solutions simplify inventory audits, product labeling, and item identification across workflows.",
        icon: "/icons/barcode.svg",
      },
      {
        id: 3,
        title: "IoT Device Connectivity",
        description:
          "Integrate IoT sensors and RFID readers to enable automated scanning, data syncing, and environment-based alerts.",
        icon: "/icons/sensor.svg",
      },
    ],
  },

  solutions: {
  mainTitle: "End-to-End Asset Tracking Solutions",
  mainDescription:
    "Our RFID and barcode tracking systems provide real-time insights into asset location, condition, and usage. From hardware integration to analytics dashboards, we deliver full-stack tracking ecosystems for every industry.",
  items: [
    {
      id: "inventory-management",
      icon: "Leaf",
      title: "Inventory Management",
      subtitle: "Automated Stock Visibility",
      description:
        "Gain complete visibility into product quantities, locations, and movements across warehouses in real time. Automate stock tracking with RFID and barcode systems to minimize human error. Improve forecasting accuracy and maintain balanced inventory levels effortlessly.",
    },
    {
      id: "equipment-tracking",
      icon: "Leaf",
      title: "Equipment Tracking",
      subtitle: "Monitor Critical Assets",
      description:
        "Monitor high-value tools, vehicles, and IT equipment through real-time tracking and smart identification. Receive instant alerts for movement or unauthorized usage. Enhance accountability and prevent asset loss with precision location data.",
    },
    {
      id: "warehouse-automation",
      icon: "Leaf",
      title: "Warehouse Automation",
      subtitle: "Smart Operations",
      description:
        "Transform warehouse operations with RFID scanners, conveyor systems, and automated data capture. Eliminate manual errors and speed up order processing. Achieve real-time synchronization between storage, picking, and dispatch operations.",
    },
    {
      id: "field-asset-monitoring",
      icon: "Leaf",
      title: "Field Asset Monitoring",
      subtitle: "Remote Asset Visibility",
      description:
        "Track outdoor and mobile assets using GPS-enabled RFID technology for accurate location monitoring. Improve operational transparency and resource allocation. Ensure field teams stay efficient with instant asset data and remote visibility.",
    },
    {
      id: "asset-lifecycle",
      icon: "Leaf",
      title: "Asset Lifecycle Management",
      subtitle: "Maintenance & Depreciation Tracking",
      description:
        "Oversee the complete lifecycle of assets from acquisition to disposal with real-time tracking tools. Schedule preventive maintenance and manage depreciation efficiently. Optimize utilization rates while maintaining compliance and reducing costs.",
    },
    {
      id: "analytics-dashboard",
      icon: "Leaf",
      title: "Analytics & Reporting Dashboard",
      subtitle: "Data-Driven Decisions",
      description:
        "Access powerful dashboards for visualizing asset performance, utilization, and condition trends. Generate detailed custom reports to support data-driven decision-making. Gain insights that enhance productivity and strategic resource planning.",
    },
  ],
  linkText: "Get Asset Tracking Solutions",
  linkUrl: "/contact-us",
},


  managementSolutions: {
    title: "Integrated Asset Management Systems",
    subtitle:
      "Enhance visibility and control with centralized asset tracking software, integrated with ERP, warehouse, and IoT platforms.",
    subtitleLink: { text: "integrated asset management", url: "#" },
    laptopImage: "/images/management-asset-tracking.jpg",
    mobileImage: "/images/management-asset-tracking-mobile.jpg",
    topFeatures: [
      {
        id: "cloud-tracking",
        icon: "map",
        title: "Cloud-Based Tracking",
        description:
          "Access asset data securely from anywhere with centralized cloud-based dashboards and real-time updates.",
      },
      {
        id: "multi-location",
        icon: "map",
        title: "Multi-Location Visibility",
        description:
          "Manage and monitor asset locations across branches, warehouses, or field sites using GPS and RFID data.",
      },
      {
        id: "real-time-alerts",
        icon: "map",
        title: "Real-Time Alerts & Notifications",
        description:
          "Receive automated alerts for unauthorized movement, asset inactivity, or environmental condition changes.",
      },
    ],
    bottomFeatures: [
  {
    id: "integration",
    icon: "map",
    title: "ERP & CRM Integration",
    description:
      "Integrate seamlessly with ERP, SAP, or CRM platforms to ensure real-time synchronization of asset and operational data. Enhance financial accuracy through automated updates and unified dashboards. Improve decision-making with centralized data visibility across departments.",
  },
  {
    id: "security",
    icon: "map",
    title: "Data Security & Encryption",
    description:
      "Protect all tracking and operational data with enterprise-grade encryption and secure communication protocols. Enforce strict access controls to prevent unauthorized activity. Maintain compliance with global data protection and cybersecurity standards.",
  },
  {
    id: "reporting",
    icon: "map",
    title: "Custom Reporting Tools",
    description:
      "Generate real-time performance reports, asset utilization summaries, and compliance insights. Customize dashboards to track KPIs and business metrics effectively. Simplify audits and strategic planning with clear, data-driven visualization tools.",
  },
  {
    id: "api-support",
    icon: "map",
    title: "API Integration Support",
    description:
      "Connect effortlessly with external systems such as IoT devices, analytics platforms, and inventory solutions. Enable smooth data exchange through secure, scalable APIs. Streamline workflows and expand functionality with cross-platform integration support.",
  },
],
ctaText: "Talk to Our Asset Tracking Experts",
onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is RFID-based asset tracking?",
        answer:
          "RFID asset tracking uses radio frequency identification to automatically capture data about tagged items, enabling instant location and movement tracking.",
      },
      {
        id: "2",
        question: "How does barcode tracking differ from RFID?",
        answer:
          "Barcode tracking requires line-of-sight scanning, while RFID enables wireless, bulk scanning of multiple assets simultaneously without direct visibility.",
      },
      {
        id: "3",
        question: "Can RFID and barcode systems work together?",
        answer:
          "Yes. Hybrid systems can use both technologies, providing flexibility for asset types, environments, and cost efficiency.",
      },
      {
        id: "4",
        question: "Which industries benefit most from RFID tracking?",
        answer:
          "Industries like logistics, manufacturing, healthcare, retail, and construction use RFID to improve efficiency, accuracy, and security.",
      },
      {
        id: "5",
        question: "Is the system compatible with existing ERP or inventory software?",
        answer:
          "Absolutely. Our solutions integrate with ERP, CRM, and warehouse management systems for unified data and operations.",
      },
      {
        id: "6",
        question: "Do you offer hardware setup along with software?",
        answer:
          "Yes, we provide end-to-end implementation including RFID readers, scanners, labels, and integration with our software platform.",
      },
    ],
  },
};
