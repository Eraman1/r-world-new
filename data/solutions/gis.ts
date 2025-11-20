import { SolutionConfig } from "@/types/solutions";

export const gis: SolutionConfig = {
  slug: "gis",

  banner: {
    title: "Empower Decisions with",
    highlight: "Advanced GIS Mapping & Location Intelligence",
    subtitle:
      "Leverage Geographic Information Systems (GIS) to visualize, analyze, and optimize spatial data for smarter business, urban, and environmental solutions.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore GIS Solutions",
  },

  developerDetails: {
    heading: "Experts in GIS & Geospatial Software Development",
    subheading:
      "We design and integrate powerful GIS applications that bring geospatial insights into your business operations, empowering data-driven decisions.",
    mainTitle: "Custom GIS Application Development",
    mainDescription:
      "Our team builds scalable GIS and mapping platforms that combine spatial analytics, visualization tools, and real-time data for industries like logistics, agriculture, utilities, and urban planning.",
    image: "/images/gis-laptop.png",
    services: [
      {
        id: 1,
        title: "Custom GIS Software Development",
        description:
          "We build tailored GIS platforms that integrate maps, geodatabases, and analytics dashboards for real-time spatial intelligence.",
        icon: "/icons/map.svg",
      },
      {
        id: 2,
        title: "Location Analytics & Insights",
        description:
          "Our analytics systems uncover spatial trends using AI and predictive modeling to enhance planning and business strategies.",
        icon: "/icons/analysis.svg",
      },
      {
        id: 3,
        title: "Geospatial Data Integration",
        description:
          "We integrate multiple data sources — from GPS devices to IoT sensors — for unified spatial data visualization and decision-making.",
        icon: "/icons/dataflow.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Comprehensive GIS & Mapping Solutions",
    mainDescription:
      "We deliver advanced GIS systems that combine visualization, analytics, and automation for industries ranging from agriculture to infrastructure planning.",
    items: [
      {
        id: "mapping-platforms",
        icon: "Leaf",
        title: "Mapping & Visualization Platforms",
        subtitle: "Real-Time Spatial Mapping",
        description:
          "Build interactive map platforms with rich, multi-layered data visualization to monitor assets, logistics, and environmental trends. Enable users to explore live geospatial data dynamically with real-time updates. Improve operational awareness through intuitive dashboards and mapping tools.",
      },
      {
        id: "location-intelligence",
        icon: "Leaf",
        title: "Location Intelligence Systems",
        subtitle: "Data-Driven Spatial Insights",
        description:
          "Transform location data into actionable insights with spatial analytics and AI-driven models. Support smarter decisions in logistics, real estate, and risk assessment. Gain competitive advantages through geographic trend analysis and demographic visualization.",
      },
      {
        id: "geospatial-analytics",
        icon: "Leaf",
        title: "Geospatial Analytics & Forecasting",
        subtitle: "Predictive Spatial Modeling",
        description:
          "Leverage AI and machine learning to identify spatial patterns and forecast environmental or urban changes. Combine multiple data layers for precise modeling and simulation. Enable predictive insights for proactive infrastructure and sustainability planning.",
      },
      {
        id: "asset-tracking",
        icon: "Leaf",
        title: "Asset Tracking & Field Operations",
        subtitle: "Optimize Mobility & Maintenance",
        description:
          "Use GPS-enabled GIS tools to track vehicles, personnel, and field assets in real time. Improve resource allocation through route optimization and predictive maintenance. Streamline on-ground operations with automated alerts and live performance metrics.",
      },
      {
        id: "remote-sensing",
        icon: "Leaf",
        title: "Remote Sensing & Satellite Imagery",
        subtitle: "High-Precision Image Analysis",
        description:
          "Analyze high-resolution satellite and aerial imagery to assess environmental changes and land usage. Support sectors like agriculture, forestry, and infrastructure with accurate geospatial mapping. Automate image classification for precise pattern recognition and trend monitoring.",
      },
      {
        id: "spatial-database",
        icon: "Leaf",
        title: "Spatial Database Management",
        subtitle: "Centralized GIS Data Storage",
        description:
          "Develop robust spatial databases with PostgreSQL/PostGIS for efficient data management. Store, query, and visualize massive geospatial datasets with high performance. Ensure data integrity and accessibility for real-time analytics and enterprise applications.",
      },
    ],
    linkText: "Get GIS Development Services",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "GIS Data & Infrastructure Management Systems",
    subtitle:
      "Streamline geospatial data management, collaboration, and decision-making through intelligent GIS management software.",
    subtitleLink: { text: "GIS management platforms", url: "#" },
    laptopImage:
      "https://i.pinimg.com/1200x/be/ab/72/beab72cd6ed23e28f1fd03fb60e4f961.jpg",
    mobileImage:
      "https://i.pinimg.com/1200x/16/7c/2b/167c2b1aa35a07852e242240083514da.jpg",
    topFeatures: [
      {
        id: "data-storage",
        icon: "map",
        title: "Cloud-Based GIS Data Storage",
        description:
          "Store and access geospatial data securely from anywhere with scalable cloud architecture.",
      },
      {
        id: "collaboration-tools",
        icon: "map",
        title: "Collaborative Mapping Tools",
        description:
          "Enable teams to share, annotate, and update maps in real-time for coordinated field operations.",
      },
      {
        id: "integration",
        icon: "map",
        title: "API & IoT Integration",
        description:
          "Integrate GIS with IoT devices, sensors, and third-party APIs for real-time spatial data synchronization.",
      },
    ],
    bottomFeatures: [
      {
        id: "workflow",
        icon: "map",
        title: "Automated Spatial Workflows",
        description:
          "Automate complex geoprocessing and mapping tasks using AI and scripting tools. Streamline repetitive operations for faster project turnaround. Improve accuracy and consistency across environmental data workflows.",
      },
      {
        id: "analytics-dashboard",
        icon: "map",
        title: "Geospatial Analytics Dashboard",
        description:
          "Gain real-time insights through dynamic dashboards integrating GIS and business intelligence. Visualize environmental patterns, risks, and resource utilization effectively. Empower decision-makers with clear, data-driven analytics.",
      },
      {
        id: "security",
        icon: "map",
        title: "Data Security & Compliance",
        description:
          "Protect sensitive environmental and spatial data using enterprise-grade encryption protocols. Maintain compliance with global GIS and environmental data standards. Control access and ensure data integrity across all systems.",
      },
      {
        id: "reporting",
        icon: "map",
        title: "Automated Reporting & Insights",
        description:
          "Generate intelligent GIS-based reports for environmental monitoring and strategic planning. Automate data aggregation and visualization for consistent, actionable insights. Support sustainability goals with accurate performance analysis.",
      },
    ],
    ctaText: "Connect with GIS Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What industries can benefit from GIS solutions?",
        answer:
          "GIS is used across industries like agriculture, transportation, utilities, urban planning, real estate, and environmental monitoring for data-driven insights.",
      },
      {
        id: "2",
        question: "Do you build custom GIS applications?",
        answer:
          "Yes, we develop fully customized GIS applications with mapping, analytics, and integration capabilities tailored to your needs.",
      },
      {
        id: "3",
        question: "Can GIS integrate with IoT or GPS systems?",
        answer:
          "Absolutely. We build GIS platforms that connect seamlessly with GPS tracking, IoT sensors, and satellite data for real-time monitoring.",
      },
      {
        id: "4",
        question: "What technologies do you use for GIS development?",
        answer:
          "We work with technologies like ArcGIS, QGIS, Mapbox, Leaflet, OpenLayers, and PostGIS to build robust and scalable GIS solutions.",
      },
      {
        id: "5",
        question: "Do you provide cloud-based GIS platforms?",
        answer:
          "Yes, we create cloud-enabled GIS systems that allow data access, map visualization, and collaboration from any device.",
      },
      {
        id: "6",
        question: "Can GIS help in urban or environmental planning?",
        answer:
          "Yes. GIS provides spatial analysis and predictive modeling tools to support sustainable urban development and environmental conservation projects.",
      },
    ],
  },
};
