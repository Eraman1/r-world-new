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
 faq : {
  title: "Hospitality & Travel FAQ",
  items: [
    {
      id: "1",
      question: "What are Hospitality & Travel Management Solutions?",
      answer:
        "These are digital platforms designed to streamline hotel, resort, and travel operations. They help manage bookings, customer engagement, staff workflows, and analytics to improve service quality and operational efficiency.",
    },
    {
      id: "2",
      question: "How do online booking systems benefit hotels and travel agencies?",
      answer:
        "Online booking systems simplify reservations, reduce overbooking errors, and provide real-time availability. They also allow guests to book from any device, improving customer convenience and increasing direct bookings.",
    },
    {
      id: "3",
      question: "What technologies are used in modern hospitality solutions?",
      answer:
        "Modern hospitality platforms use AI for personalized guest experiences, IoT for smart room management, and cloud solutions for scalable operations. Analytics and CRM integrations help track guest preferences and optimize services.",
    },
    {
      id: "4",
      question: "Can travel and hospitality platforms improve customer engagement?",
      answer:
        "Yes. These platforms offer loyalty programs, automated communication, personalized recommendations, and targeted promotions, creating a more engaging and satisfying guest experience.",
    },
    {
      id: "5",
      question: "How does AI enhance the hospitality and travel experience?",
      answer:
        "AI can predict guest preferences, optimize pricing, automate check-in/check-out, and provide virtual concierge services. It enables hotels and travel companies to offer personalized experiences while improving operational efficiency.",
    },
    {
      id: "6",
      question: "Are these platforms mobile-friendly?",
      answer:
        "Absolutely. Most hospitality and travel management solutions are optimized for mobile devices, allowing travelers to book, check-in, and access services on the go, enhancing convenience and satisfaction.",
    },
    {
      id: "7",
      question: "How is guest data secured in hospitality platforms?",
      answer:
        "Platforms use encryption, secure authentication, and role-based access controls to protect guest information. Compliance with GDPR and other privacy regulations ensures safe and legal data handling.",
    },
    {
      id: "8",
      question: "Can these platforms integrate with existing hotel or travel systems?",
      answer:
        "Yes. Modern solutions can integrate with property management systems (PMS), channel managers, CRM, and payment gateways for a seamless operational workflow and improved data accuracy.",
    },
    {
      id: "9",
      question: "What features make a hospitality platform effective?",
      answer:
        "Key features include booking management, guest relationship management, automated notifications, analytics dashboards, mobile access, loyalty programs, and multi-channel support for both staff and guests.",
    },
    {
      id: "10",
      question: "What is the future of digital solutions in hospitality and travel?",
      answer:
        "The future lies in AI-powered personalization, voice-enabled assistants, IoT-enabled smart rooms, AR/VR travel experiences, and sustainable, data-driven operations that enhance both guest satisfaction and operational efficiency.",
    },
  ],
},

};