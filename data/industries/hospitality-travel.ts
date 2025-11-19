import { IndustryConfig } from "@/types/industries";
 
export const hospitalitytravel: IndustryConfig = {
  slug: "hospitality-travel",
  banner: {
    title: "Transform Guest Experiences with",
    highlight: "AI-Powered Hospitality & Travel Software Solutions",
    subtitle:
      "Reimagine the travel and hospitality industry with intelligent automation, seamless booking systems, and personalized guest engagement. From smart hotels to travel analytics, enhance operational efficiency and create unforgettable experiences.",
    image:
      "/industry/industryHospitalitytravelBanner.webp",
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
     deviceImages: {
      laptop: "/industry/industryHospitalitytravelBanner.webp",
      tablet: "/industry/industryHospitalitytravelBanner.webp",
      mobile: "/industry/industryHospitalitytravelBanner.webp",
    },
  },
 
  solutions: {
  mainTitle: "AI, IoT & Cloud Solutions for the Hospitality & Travel Sector",
  mainDescription:
    "We build intelligent, scalable, and cloud-based hospitality and travel solutions to optimize bookings, automate operations, and enhance guest experiences. Our AI-powered systems bring personalization, efficiency, and sustainability to the forefront of hospitality innovation.",
  items: [
    {
      id: "smart-hotel",
      icon: "Leaf", // Home
      title: "Smart Hotel Management Platforms",
      subtitle: "",
      description:
        "Automate front desk tasks, housekeeping, and maintenance with real-time IoT connectivity. \n" +
        "Gain full visibility across departments through unified dashboards and analytics. \n" +
        "Enhance guest comfort using AI-driven room controls and smart alerts. \n" +
        "Reduce manual workload with automated workflows and predictive maintenance. \n" +
        "Transform traditional hotel operations into efficient, data-driven environments.",
    },
    {
      id: "booking-systems",
      icon: "Leaf", // Plane
      title: "End-to-End Booking & Reservation Systems",
      subtitle: "",
      description:
        "Offer seamless, multi-channel booking experiences for hotels, flights, and tours. \n" +
        "Integrate secure payment gateways with real-time availability updates. \n" +
        "Enable customers to plan, pay, and confirm instantly from any device. \n" +
        "Automate cancellations, refunds, and itinerary changes with ease. \n" +
        "Empower businesses with data insights to refine pricing and promotions.",
    },
    {
      id: "personalization",
      icon: "Leaf", // User
      title: "AI-Powered Guest Personalization Engines",
      subtitle: "",
      description:
        "Deliver personalized offers, recommendations, and experiences using AI insights. \n" +
        "Analyze guest behavior to tailor services that enhance satisfaction. \n" +
        "Automate messaging and loyalty programs based on travel preferences. \n" +
        "Predict future needs and trends through real-time behavioral learning. \n" +
        "Build stronger guest relationships through intelligent personalization.",
    },
    {
      id: "revenue-optimization",
      icon: "Leaf", // TrendingUp
      title: "Revenue Optimization & Predictive Analytics",
      subtitle: "",
      description:
        "Leverage advanced analytics to forecast demand and pricing trends accurately. \n" +
        "Adjust room rates dynamically for maximum occupancy and profitability. \n" +
        "Monitor performance metrics through interactive dashboards and AI insights. \n" +
        "Identify seasonal opportunities using predictive modeling tools. \n" +
        "Ensure strategic decision-making with real-time, data-backed intelligence.",
    },
    {
      id: "travel-ecosystem",
      icon: "Leaf", // Globe
      title: "Integrated Travel Ecosystem Platforms",
      subtitle: "",
      description:
        "Connect hotels, airlines, and travel agencies under one unified ecosystem. \n" +
        "Facilitate seamless communication and data sharing across providers. \n" +
        "Improve coordination between bookings, schedules, and itineraries. \n" +
        "Enhance the traveler journey with transparent, connected services. \n" +
        "Empower operators with integrated dashboards for complete visibility.",
    },
    {
      id: "sustainability",
      icon: "Leaf",
      title: "Sustainability & Energy Efficiency Systems",
      subtitle: "",
      description:
        "Implement IoT-based energy monitoring to reduce waste and costs. \n" +
        "Promote green hospitality with automated water and power management. \n" +
        "Track environmental impact through intelligent sustainability reports. \n" +
        "Optimize resource consumption using data from connected devices. \n" +
        "Achieve eco-friendly operations while maintaining superior guest comfort.",
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
    laptopImage: "https://i.pinimg.com/1200x/4a/a0/44/4aa0449bc784972b55bd626a44260970.jpg",
    mobileImage: "https://i.pinimg.com/1200x/5d/d4/6c/5dd46c6c051ad705b98074b2331e2a1d.jpg",
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
    icon: "map",
    title: "Error Analytics & Performance Dashboards",
    description:
      "Track document accuracy, correction frequency, and team productivity with smart dashboards. Identify recurring issues and automate error pattern detection. Gain actionable insights to reduce rework and time spent on manual reviews. Visualize real-time metrics for correction efficiency and precision. Make informed decisions backed by continuous data-driven improvement.",
  },
  {
    id: "security",
    icon: "map",
    title: "Data Integrity & Compliance Protection",
    description:
      "Safeguard sensitive correction data using advanced encryption systems. Maintain GDPR and HIPAA compliance through automated audit trails. Restrict unauthorized access with multi-level authentication protocols. Detect and prevent data manipulation in real-time for full accuracy. Ensure correction workflows adhere to global data protection standards.",
  },
  {
    id: "mobile-apps",
    icon: "map",
    title: "Mobile Correction & Review Applications",
    description:
      "Enable on-the-go error correction, approvals, and quality checks via mobile. Provide editors and reviewers with real-time collaboration tools. Sync updates instantly across teams and systems for unified visibility. Empower users to annotate, highlight, and revise documents seamlessly. Improve turnaround time with faster review and approval cycles.",
  },
  {
    id: "ai-operations",
    icon: "map",
    title: "AI-Powered Correction & Quality Optimization",
    description:
      "Use artificial intelligence to detect and correct contextual inaccuracies. Train machine learning models for continuous accuracy enhancement. Leverage NLP to refine grammar, tone, and compliance consistency. Automate repetitive review tasks to reduce manual workload. Improve correction speed while maintaining precision and reliability.",
  },
],
ctaText: "BUILD YOUR INTELLIGENT CORRECTION SYSTEM",
onCtaClick: () => {},
},

managementSolutionsTwo: {
  title: "Hospitality & Travel Management Software Solutions",
  subtitle:
    "Our hospitality and travel software experts build smart systems that enhance guest experiences, streamline operations, and drive bookings through digital transformation.",
  subtitleLink: { text: "hospitality management software", url: "#" },
  laptopImage: "https://i.pinimg.com/736x/31/22/23/31222349f9745d7403e2b80a4dc55265.jpg",
  mobileImage: "/images/hospitality-travel-mobile.jpg",

  topFeatures: [
    {
      id: "booking-management",
      icon: "CalendarCheck",
      title: "Booking & Reservation Management Systems",
      description:
        "Automate hotel, flight, and tour bookings with real-time availability. Simplify guest check-ins and cancellations from one platform.",
      link: { text: "booking management software", url: "#" },
    },
    {
      id: "guest-loyalty",
      icon: "Gift",
      title: "Guest Loyalty & Rewards Platforms",
      description:
        "Create personalized loyalty programs for frequent travelers. Reward customers through points, offers, and membership tiers.",
      link: { text: "guest loyalty software", url: "#" },
    },
    {
      id: "payment-solutions",
      icon: "CreditCard",
      title: "Payment & Billing Automation Solutions",
      description:
        "Enable fast, secure transactions across hotels and travel agencies. Support multiple currencies and global payment gateways.",
      link: { text: "payment automation systems", url: "#" },
    },
    {
      id: "travel-analytics",
      icon: "BarChart3",
      title: "Travel & Hospitality Analytics Systems",
      description:
        "Gain actionable insights into occupancy, revenue, and guest behavior. Make data-driven decisions to improve business performance.",
      link: { text: "travel analytics software", url: "#" },
    },
  ],

  bottomFeatures: [
    {
      id: "property-management",
      icon: "Building2",
      title: "Hotel & Property Management Software",
      description:
        "Manage rooms, inventory, and housekeeping in one place. Boost staff efficiency with automated scheduling and alerts.",
    },
    {
      id: "tour-operations",
      icon: "Map",
      title: "Tour & Travel Operations Management",
      description:
        "Coordinate tours, transport, and guides effortlessly. Offer customers seamless itinerary planning and instant confirmations.",
    },
    {
      id: "customer-engagement",
      icon: "Users",
      title: "Customer Engagement & CRM Tools",
      description:
        "Track guest preferences, feedback, and communications. Enhance satisfaction with tailored marketing and service delivery.",
    },
    {
      id: "revenue-optimization",
      icon: "TrendingUp",
      title: "Revenue & Channel Optimization Platforms",
      description:
        "Optimize room rates and bookings across OTAs and websites. Use AI-driven tools to maximize occupancy and profitability.",
    },
  ],

  ctaText: "GET HOSPITALITY SOFTWARE DEVELOPERS",
  onCtaClick: "/contact-us",
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