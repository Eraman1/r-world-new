import { SolutionConfig } from "@/types/solutions";

export const locationBasedService: SolutionConfig = {
  slug: "location-based-service",

  banner: {
    title: "Enhance Business Operations with",
    highlight: "Location-Based Services & GPS Solutions",
    subtitle:
      "Leverage advanced geolocation, GPS tracking, and mapping technologies to optimize routes, manage assets, and deliver real-time insights for smarter decision-making.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Location-Based Solutions",
  },

  developerDetails: {
    heading: "Experts in GPS, Mapping & Geospatial Technology",
    subheading:
      "We design and integrate advanced GPS and GIS systems to provide precision tracking, route optimization, and geo-intelligence across industries.",
    mainTitle: "Custom Location-Based Software Development",
    mainDescription:
      "Our developers create scalable GPS and location-based platforms for logistics, transportation, field service, agriculture, and smart cities. We specialize in building applications that provide accurate real-time data for operational efficiency.",
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    services: [
      {
        id: 1,
        title: "Real-Time GPS Tracking",
        description:
          "Monitor vehicles, assets, and field operations with precision GPS tracking integrated with mobile and web platforms.",
        icon: "/icons/location.svg",
      },
      {
        id: 2,
        title: "Route Optimization Systems",
        description:
          "We develop intelligent route optimization algorithms to minimize fuel costs and improve delivery times.",
        icon: "/icons/map.svg",
      },
      {
        id: 3,
        title: "Geofencing & Alerts",
        description:
          "Set up virtual boundaries and receive automatic alerts when assets enter or leave specific areas.",
        icon: "/icons/bell.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Innovative Location Intelligence Solutions",
    mainDescription:
      "Empower your business with location-based insights through smart geospatial systems. Our solutions enable seamless tracking, planning, and analytics powered by real-time data.",
    items: [
      {
        id: "fleet-management",
        icon: "Leaf",
        title: "Fleet Management",
        subtitle: "Real-Time Vehicle Monitoring",
        description:
          "Monitor your fleet in real-time to track vehicle locations, performance metrics, and driver behavior. Use automated reporting and route history to optimize efficiency. Ensure timely deliveries and reduce operational costs across your fleet.",
      },
      {
        id: "asset-tracking",
        icon: "Leaf",
        title: "Asset Tracking & Monitoring",
        subtitle: "End-to-End Visibility",
        description:
          "Track valuable assets with IoT-enabled GPS devices for complete visibility. Receive predictive alerts to prevent theft or misplacement. Optimize resource usage and enhance accountability across all asset movements.",
      },
      {
        id: "geo-analytics",
        icon: "Leaf",
        title: "Geo-Analytics & Insights",
        subtitle: "Data-Driven Location Intelligence",
        description:
          "Analyze spatial and location data to make informed decisions in logistics, marketing, and infrastructure. Gain insights into trends, patterns, and performance. Use analytics to improve operational efficiency and strategic planning.",
      },
      {
        id: "navigation-systems",
        icon: "Leaf",
        title: "Smart Navigation Systems",
        subtitle: "Real-Time Traffic & Route Guidance",
        description:
          "Provide accurate, real-time route recommendations to optimize travel and delivery times. Utilize AI-based navigation that adapts to traffic conditions dynamically. Reduce delays and improve route planning across your operations.",
      },
      {
        id: "delivery-optimization",
        icon: "Leaf",
        title: "Delivery Optimization Platforms",
        subtitle: "Efficient Logistics Operations",
        description:
          "Enhance delivery efficiency with geofencing, dynamic routing, and proof-of-delivery tracking. Optimize schedules to reduce operational costs and time. Ensure timely and accurate deliveries while maintaining customer satisfaction.",
      },
      {
        id: "gis-integration",
        icon: "Leaf",
        title: "GIS Mapping Integration",
        subtitle: "Custom Map-Based Applications",
        description:
          "Integrate advanced GIS mapping solutions to visualize and manage spatial data effectively. Enable analysis and decision-making based on geographic information. Tailor custom map applications for enhanced operational insights and planning.",
      },
    ],
    linkText: "Explore Our GPS Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Location Data Management Platforms",
    subtitle:
      "Simplify your spatial data handling with centralized location management, analytics dashboards, and cloud-based integration.",
    subtitleLink: { text: "location intelligence platforms", url: "#" },
    laptopImage:
      "https://i.pinimg.com/1200x/07/c1/17/07c11726117106b8ea4d340cb6152e7d.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/76/55/87/765587e389328e851fb9b1a5528fec76.jpg",
    topFeatures: [
      {
        id: "dashboard",
        icon: "map",
        title: "Centralized Control Dashboard",
        description:
          "Access all tracking and location data from a single dashboard with map-based visualization and custom analytics filters.",
      },
      {
        id: "reporting",
        icon: "map",
        title: "Automated Reporting & Analytics",
        description:
          "Generate reports on movement patterns, delivery times, and asset utilization automatically using location-based intelligence.",
      },
      {
        id: "cloud-storage",
        icon: "map",
        title: "Secure Cloud-Based Data Storage",
        description:
          "Store GPS logs, maps, and analytics securely with scalable cloud infrastructure for global accessibility.",
      },
    ],
    bottomFeatures: [
      {
        id: "integration",
        icon: "map",
        title: "API & IoT Integration",
        description:
          "Seamlessly integrate GPS hardware, IoT sensors, and APIs into your existing systems. Collect real-time data efficiently for accurate monitoring and reporting. Ensure smooth interoperability between devices, software, and analytics platforms for smarter operations.",
      },
      {
        id: "mobile-access",
        icon: "map",
        title: "Mobile Accessibility",
        description:
          "Monitor assets and operations on the go with Android and iOS mobile applications. Receive live updates, notifications, and alerts in real-time. Empower your team to respond quickly and maintain operational efficiency from anywhere.",
      },
      {
        id: "security",
        icon: "map",
        title: "Data Security & Privacy Controls",
        description:
          "Protect sensitive GPS and location data with encryption and advanced access controls. Ensure compliance with global security standards and privacy regulations. Maintain secure storage and controlled access to prevent unauthorized usage and breaches.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Automated Workflow Integration",
        description:
          "Automate key workflows using real-time location and sensor data to trigger actions and alerts. Reduce manual effort while improving efficiency and accuracy. Optimize business processes with intelligent automation for smarter decision-making.",
      },
    ],
    ctaText: "Get GPS Experts Consultation",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What industries can benefit from location-based services?",
        answer:
          "Industries such as logistics, transportation, agriculture, retail, and field services can use LBS for tracking, route optimization, and operational efficiency.",
      },
      {
        id: "2",
        question: "Can you integrate GPS tracking with mobile apps?",
        answer:
          "Yes, we build custom mobile apps that integrate GPS tracking for real-time updates, alerts, and data visualization.",
      },
      {
        id: "3",
        question: "Do you provide geofencing and alert systems?",
        answer:
          "Absolutely. Our systems include dynamic geofencing capabilities that trigger automated alerts for movement in or out of predefined zones.",
      },
      {
        id: "4",
        question: "Is my GPS data secure?",
        answer:
          "Yes, all data is encrypted and stored securely with role-based access control to ensure full compliance with data privacy regulations.",
      },
      {
        id: "5",
        question: "Can I track multiple assets at once?",
        answer:
          "Yes, our platform supports multi-asset tracking, enabling you to monitor fleets, equipment, or personnel simultaneously.",
      },
      {
        id: "6",
        question: "Do you support custom map or GIS integration?",
        answer:
          "Yes, we can integrate with Google Maps, Mapbox, or custom GIS layers to provide tailored mapping experiences.",
      },
    ],
  },
};
