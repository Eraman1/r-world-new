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
          "Develop interactive map platforms with layered data visualization for monitoring assets, logistics, and environmental changes.",
      },
      {
        id: "location-intelligence",
        icon: "Leaf",
        title: "Location Intelligence Systems",
        subtitle: "Data-Driven Spatial Insights",
        description:
          "Analyze geographic patterns to improve decision-making in logistics, real estate, and disaster management.",
      },
      {
        id: "geospatial-analytics",
        icon: "Leaf",
        title: "Geospatial Analytics & Forecasting",
        subtitle: "Predictive Spatial Modeling",
        description:
          "Use AI and machine learning to predict patterns in land use, traffic, and environmental changes with real-time geospatial data.",
      },
      {
        id: "asset-tracking",
        icon: "Leaf",
        title: "Asset Tracking & Field Operations",
        subtitle: "Optimize Mobility & Maintenance",
        description:
          "Track vehicles, workers, and assets using GPS-enabled GIS tools for efficient routing and maintenance scheduling.",
      },
      {
        id: "remote-sensing",
        icon: "Leaf",
        title: "Remote Sensing & Satellite Imagery",
        subtitle: "High-Precision Image Analysis",
        description:
          "Process satellite imagery for environmental monitoring, agriculture planning, and infrastructure development.",
      },
      {
        id: "spatial-database",
        icon: "Leaf",
        title: "Spatial Database Management",
        subtitle: "Centralized GIS Data Storage",
        description:
          "Implement spatial databases using PostgreSQL/PostGIS for scalable, efficient storage and retrieval of geospatial data.",
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
    laptopImage: "/images/gis-management.jpg",
    mobileImage: "/images/gis-management-mobile.jpg",
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
          "Automate repetitive mapping and geoprocessing tasks using AI and scripting tools.",
      },
      {
        id: "analytics-dashboard",
        icon: "map",
        title: "Geospatial Analytics Dashboard",
        description:
          "Visualize and analyze key metrics through custom dashboards powered by GIS and BI integration.",
      },
      {
        id: "security",
        icon: "map",
        title: "Data Security & Compliance",
        description:
          "Ensure sensitive spatial data is protected with encryption, access control, and compliance with global GIS standards.",
      },
      {
        id: "reporting",
        icon: "map",
        title: "Automated Reporting & Insights",
        description:
          "Generate insightful GIS reports for planning, resource management, and policy analysis.",
      },
    ],
    ctaText: "Connect with GIS Experts",
    onCtaClick: () => {},
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
