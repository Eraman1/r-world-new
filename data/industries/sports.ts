import { IndustryConfig } from "@/types/industries";

export const sports: IndustryConfig = {
  slug: "sports",

  banner: {
    title: "Revolutionize Sports Operations with",
    highlight: "AI-Powered Sports Management & Analytics Solutions",
    subtitle:
      "Empower sports teams, leagues, and venues with advanced data analytics, fan engagement tools, and performance tracking systems. From athlete monitoring to event automation, we build next-gen sports technology that drives success on and off the field.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Sports Solutions",
  },

  techHero: {
    heading: "Hire Expert Developers for Sports Technology Solutions",
    description:
      "We develop innovative software for the sports industry — including player analytics, fan engagement apps, and sports event management systems — helping organizations enhance performance, engagement, and revenue.",
    services: [
      {
        id: "player-analytics",
        title: "Athlete Performance Analytics",
        icon: "Tractor", //Activity
        position: "left",
      },
      {
        id: "team-management",
        title: "Team & League Management Systems",
        icon: "Tractor", //Users
        position: "left",
      },
      {
        id: "event-management",
        title: "Sports Event & Tournament Platforms",
        icon: "Tractor", //Calendar
        position: "left",
      },
      {
        id: "training-ai",
        title: "AI-Powered Training Optimization",
        icon: "Tractor", //Cpu
        position: "left",
      },
      {
        id: "fan-engagement",
        title: "Fan Engagement & Loyalty Apps",
        icon: "Tractor", //HeartHandshake
        position: "right",
      },
      {
        id: "ticketing",
        title: "Smart Ticketing & Access Control Systems",
        icon: "Tractor", //Ticket
        position: "right",
      },
      {
        id: "broadcast-analytics",
        title: "Sports Streaming & Broadcast Analytics",
        icon: "Tractor", //Tv
        position: "right",
      },
      {
        id: "sponsorship",
        title: "Sponsorship & Revenue Management",
        icon: "Tractor", //DollarSign
        position: "right",
      },
    ],
  },

  solutions: {
    mainTitle: "Next-Gen Sports Management & Analytics Solutions",
    mainDescription:
      "Leverage AI, IoT, and cloud technology to transform every aspect of sports — from training and performance monitoring to fan engagement and digital ticketing.",
    items: [
      {
        id: "player-performance",
        icon: "Leaf", //BarChart3
        title: "Player Performance Tracking",
        subtitle: "",
        description:
          "Collect and analyze real-time performance data to improve training, recovery, and tactical decisions.",
      },
      {
        id: "club-management",
        icon: "Leaf", //Shield
        title: "Club & League Management Systems",
        subtitle: "",
        description:
          "Simplify scheduling, roster management, communication, and finances with unified sports management software.",
      },
      {
        id: "smart-ticketing",
        icon: "Leaf", //Ticket
        title: "Digital Ticketing & Venue Access",
        subtitle: "",
        description:
          "Offer secure and paperless entry through mobile ticketing integrated with RFID and facial recognition systems.",
      },
      {
        id: "fan-platforms",
        icon: "Leaf", //Users
        title: "Fan Experience & Engagement Platforms",
        subtitle: "",
        description:
          "Boost fan loyalty with personalized content, live stats, social integration, and gamified experiences.",
      },
      {
        id: "sports-analytics",
        icon: "Leaf", //Cpu
        title: "Sports Data Analytics & BI Dashboards",
        subtitle: "",
        description:
          "Use data visualization and AI to analyze performance trends, predict outcomes, and improve coaching strategies.",
      },
      {
        id: "broadcast-tools",
        icon: "Leaf", //Video
        title: "Live Streaming & Broadcast Tools",
        subtitle: "",
        description:
          "Deliver high-quality, real-time streaming experiences with integrated analytics and engagement features.",
      },
    ],
    linkText: "Explore Sports Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Comprehensive Sports Management Ecosystem",
    subtitle:
      "Digitize and optimize every aspect of sports management — from player performance and team operations to fan experience and sponsorship growth.",
    subtitleLink: { text: "sports management software", url: "#" },
    laptopImage: "/images/sports-laptop.jpg",
    mobileImage: "/images/sports-mobile.jpg",
    topFeatures: [
      {
        id: "match-analytics",
        icon: "map", //TrendingUp
        title: "Match & Performance Analytics",
        description:
          "Track in-game statistics, analyze team dynamics, and generate post-match insights with AI-driven dashboards.",
      },
      {
        id: "training-management",
        icon: "map", //ClipboardList
        title: "Training & Fitness Management",
        description:
          "Plan, track, and optimize athlete training sessions using data from wearables and motion sensors.",
      },
      {
        id: "communication-platform",
        icon: "map", //MessageSquare
        title: "Centralized Communication Platform",
        description:
          "Unify communication among coaches, players, and management for seamless coordination and decision-making.",
      },
    ],
    bottomFeatures: [
      {
        id: "fan-insights",
        icon: "map", //PieChart
        title: "Fan Behavior & Marketing Insights",
        description:
          "Understand audience preferences and engagement patterns to personalize campaigns and maximize attendance.",
      },
      {
        id: "data-security",
        icon: "map", //Shield
        title: "Data Security & Compliance",
        description:
          "Ensure privacy and integrity of athlete and fan data with encryption, secure access, and GDPR compliance.",
      },
      {
        id: "mobile-experience",
        icon: "map", //Smartphone
        title: "Mobile Experience for Teams & Fans",
        description:
          "Offer mobile-first access to schedules, analytics, updates, and community engagement tools.",
      },
      {
        id: "sponsorship-analytics",
        icon: "map", //DollarSign
        title: "Sponsorship Analytics & ROI Tracking",
        description:
          "Track brand exposure, engagement, and revenue impact for sponsors using real-time analytics.",
      },
    ],
    ctaText: "BUILD YOUR SPORTS PLATFORM",
    onCtaClick: () => {},
  },
  faq : {
  title: "Sports Industry FAQ",
  items: [
    {
      id: "1",
      question: "How can technology improve sports performance and management?",
      answer:
        "Technology enhances sports performance by tracking athlete metrics, analyzing gameplay, and optimizing training plans. Sports management systems also streamline event scheduling, team coordination, and fan engagement through real-time data insights.",
    },
    {
      id: "2",
      question: "What is sports analytics and how is it used by teams?",
      answer:
        "Sports analytics involves collecting and analyzing performance data to improve decision-making. Coaches and analysts use it to assess player efficiency, develop strategies, predict outcomes, and prevent injuries through data-driven insights.",
    },
    {
      id: "3",
      question: "Can AI and machine learning be applied in sports?",
      answer:
        "Yes. AI and machine learning power predictive models, video analysis, and performance tracking tools. These technologies identify patterns, evaluate opponent tactics, and help coaches and athletes make smarter, faster decisions.",
    },
    {
      id: "4",
      question: "How do digital platforms enhance fan engagement in sports?",
      answer:
        "Digital sports platforms create immersive fan experiences with live stats, interactive content, fantasy leagues, and social media integration. They enable fans to connect deeply with their favorite teams and events in real time.",
    },
    {
      id: "5",
      question: "What role does data security play in sports technology?",
      answer:
        "Sports data includes sensitive athlete performance and health information. Secure platforms use encryption, access control, and compliance protocols to safeguard this data, ensuring integrity and privacy for all stakeholders.",
    },
    {
      id: "6",
      question: "How can sports organizations benefit from custom software solutions?",
      answer:
        "Custom sports software helps organizations manage tournaments, player contracts, ticketing, and sponsorships efficiently. Tailored platforms integrate analytics, CRM, and media tools to deliver end-to-end operational excellence.",
    },
    {
      id: "7",
      question: "What technologies are shaping the future of sports?",
      answer:
        "Emerging technologies like VR training, wearable sensors, blockchain ticketing, and AI analytics are redefining sports. These innovations enhance performance, transparency, and fan interaction on and off the field.",
    },
    {
      id: "8",
      question: "How do wearable devices contribute to athlete development?",
      answer:
        "Wearables collect real-time biometric data such as heart rate, movement, and fatigue levels. This information helps coaches monitor fitness, prevent injuries, and customize training programs for peak performance.",
    },
    {
      id: "9",
      question: "Can technology assist in organizing large sports events?",
      answer:
        "Absolutely. Sports event management software automates registration, scheduling, ticketing, and live updates. It ensures smooth coordination among teams, sponsors, and fans while enhancing the overall event experience.",
    },
    {
      id: "10",
      question: "What is the impact of virtual and augmented reality in sports?",
      answer:
        "VR and AR are revolutionizing sports by enabling immersive training simulations, interactive broadcasts, and fan experiences. They allow athletes to practice scenarios safely and fans to engage with the game like never before.",
    },
  ],
},

};
