import { IndustryConfig } from "@/types/industries";
 
export const hospitalitytravel: IndustryConfig = {
  slug: "hospitality-travel",
  banner: {
    title: "Transform Guest Experiences with",
    highlight: "AI-Powered Hospitality & Travel Software Solutions",
    subtitle:
      "Reimagine the travel and hospitality industry with intelligent automation, seamless booking systems, and personalized guest engagement. From smart hotels to travel analytics, enhance operational efficiency and create unforgettable experiences.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Hospitality Solutions",
  },
 
  techHero: {
    heading: "Hire Expert Travel & Hospitality Software Developers",
    description:
      "Our developers build advanced travel and hospitality solutions using AI, IoT, and cloud technology. From hotel management and booking systems to personalized guest experiences, we help you automate operations, optimize revenue, and enhance customer satisfaction.",
    services: [
      {
        id: "hotel-management",
        title: "Hotel & Property Management Systems (PMS)",
        icon: "Tractor", //Building
        position: "left",
      },
      {
        id: "booking-engine",
        title: "Online Booking & Reservation Platforms",
        icon: "Tractor", //CalendarDays
        position: "left",
      },
      {
        id: "guest-engagement",
        title: "Guest Experience & Loyalty Platforms",
        icon: "Tractor", //Gift
        position: "left",
      },
      {
        id: "revenue-management",
        title: "Revenue & Yield Management Systems",
        icon: "Tractor", //BarChart
        position: "left",
      },
      {
        id: "travel-portal",
        title: "Travel & Tour Booking Portals",
        icon: "Tractor", //Map
        position: "right",
      },
      {
        id: "ai-chatbots",
        title: "AI Chatbots & Virtual Concierge",
        icon: "Tractor", //MessageSquare
        position: "right",
      },
      {
        id: "iot-room",
        title: "IoT-Based Smart Room Automation",
        icon: "Tractor", //Wifi
        position: "right",
      },
      {
        id: "analytics",
        title: "Hospitality Analytics & BI Dashboards",
        icon: "Tractor", //PieChart
        position: "right",
      },
    ],
  },
 
  solutions: {
    mainTitle: "AI, IoT & Cloud Solutions for the Hospitality & Travel Sector",
    mainDescription:
      "We build intelligent, scalable, and cloud-based hospitality and travel solutions to optimize bookings, automate operations, and enhance guest experiences. Our AI-powered systems bring personalization, efficiency, and sustainability to the forefront of hospitality innovation.",
    items: [
      {
        id: "smart-hotel",
        icon: "Leaf", //Home
        title: "Smart Hotel Management Platforms",
        subtitle: "",
        description:
          "Automate front desk operations, housekeeping, and maintenance using connected IoT systems and smart dashboards.",
      },
      {
        id: "booking-systems",
        icon: "Leaf", //Plane
        title: "End-to-End Booking & Reservation Systems",
        subtitle: "",
        description:
          "Enable real-time room, flight, and activity booking with secure payment gateways and multi-channel integration.",
      },
      {
        id: "personalization",
        icon: "Leaf", //User
        title: "AI-Powered Guest Personalization Engines",
        subtitle: "",
        description:
          "Leverage machine learning to tailor recommendations, promotions, and experiences based on guest preferences and history.",
      },
      {
        id: "revenue-optimization",
        icon: "Leaf", //TrendingUp
        title: "Revenue Optimization & Predictive Analytics",
        subtitle: "",
        description:
          "Use AI-driven analytics to forecast demand, adjust pricing dynamically, and maximize occupancy and revenue potential.",
      },
      {
        id: "travel-ecosystem",
        icon: "Leaf", //Globe
        title: "Integrated Travel Ecosystem Platforms",
        subtitle: "",
        description:
          "Connect hotels, airlines, tour operators, and agencies under one digital ecosystem for seamless data sharing and coordination.",
      },
      {
        id: "sustainability",
        icon: "Leaf",
        title: "Sustainability & Energy Efficiency Systems",
        subtitle: "",
        description:
          "Implement smart energy management and waste reduction software to promote eco-friendly hospitality operations.",
      },
    ],
    linkText: "Get AI-Powered Travel Solutions",
    linkUrl: "/contact-us",
  },
 
  managementSolutions: {
    title: "Hospitality & Travel Management Software Solutions",
    subtitle:
      "We develop end-to-end travel and hospitality management systems that automate booking, enhance guest engagement, and streamline operations for hotels, airlines, and travel agencies.",
    subtitleLink: { text: "hospitality software solutions", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "crm",
        icon: "map", //Users
        title: "Guest CRM & Loyalty Program Management",
        description:
          "Track guest journeys, preferences, and feedback through personalized CRM tools to boost retention and satisfaction.",
        link: { text: "guest management CRM", url: "#" },
      },
      {
        id: "booking-integration",
        icon: "map", //Plug
        title: "Booking Engine & Channel Manager Integration",
        description:
          "Integrate OTAs, GDS, and direct booking engines to centralize inventory, pricing, and reservations in real time.",
      },
      {
        id: "automation",
        icon: "map", //Settings
        title: "Workflow Automation & Service Management",
        description:
          "Automate housekeeping, maintenance, and staff coordination to improve service quality and reduce operational costs.",
      },
    ],
    bottomFeatures: [
      {
        id: "analytics",
        icon: "map", //BarChart3
        title: "Business Intelligence & Performance Dashboards",
        description:
          "Visualize KPIs like occupancy rates, revenue, and guest satisfaction with customizable BI dashboards.",
      },
      {
        id: "security",
        icon: "map", //ShieldCheck
        title: "Data Security & GDPR Compliance",
        description:
          "Ensure secure guest data handling and global compliance with advanced encryption and audit systems.",
      },
      {
        id: "mobile-apps",
        icon: "map", //Smartphone
        title: "Mobile Apps for Guests & Staff",
        description:
          "Offer seamless mobile access for bookings, check-ins, and service requests while empowering staff with digital tools.",
      },
      {
        id: "ai-operations",
        icon: "map", //Cpu
        title: "AI-Driven Operations & Guest Insights",
        description:
          "Analyze guest feedback, social media, and review data to improve service quality and optimize business performance.",
      },
    ],
    ctaText: "BUILD YOUR TRAVEL & HOSPITALITY SOLUTION",
    onCtaClick: () => {},
  },
};