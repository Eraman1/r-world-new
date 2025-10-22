import { IndustryConfig } from "@/types/industries";

export const meetingsEvents: IndustryConfig = {
  slug: "meetings-events",
  banner: {
    title: "Transform Meetings & Events with",
    highlight: "AI-Powered Event Management Software Solutions",
    subtitle:
      "Reimagine how organizations plan, manage, and execute events with intelligent automation, real-time analytics, and attendee engagement tools. From corporate meetings to global conferences, our solutions optimize operations and enhance experiences.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get EventTech Solutions",
  },

  techHero: {
    heading: "Hire Expert Meetings & Events Software Developers",
    description:
      "We build AI-driven platforms that streamline event planning, attendee engagement, and operations. From virtual conferences to hybrid events, our solutions ensure seamless scheduling, real-time analytics, and personalized experiences.",
    services: [
      {
        id: "event-management",
        title: "End-to-End Event Management Systems",
        icon: "Tractor", //Calendar
        position: "left",
      },
      {
        id: "attendee-engagement",
        title: "Attendee Engagement & Interaction Tools",
        icon: "Tractor", //Users
        position: "left",
      },
      {
        id: "virtual-events",
        title: "Virtual & Hybrid Event Platforms",
        icon: "Tractor", //Globe
        position: "left",
      },
      {
        id: "registration-ticketing",
        title: "Online Registration & Ticketing Solutions",
        icon: "Tractor", //FileText
        position: "left",
      },
      {
        id: "analytics-reporting",
        title: "Event Analytics & Reporting Dashboards",
        icon: "Tractor", //BarChart
        position: "right",
      },
      {
        id: "sponsor-management",
        title: "Sponsor & Exhibitor Management Platforms",
        icon: "Tractor", //Gift
        position: "right",
      },
      {
        id: "compliance-security",
        title: "Event Security & Compliance Tools",
        icon: "Tractor", //Shield
        position: "right",
      },
      {
        id: "mobile-apps",
        title: "Mobile Apps & On-Site Event Tools",
        icon: "Tractor", //Smartphone
        position: "right",
      },
    ],
  },

  solutions: {
    mainTitle: "AI, Cloud & Automation Solutions for Meetings & Events",
    mainDescription:
      "Our platforms optimize event lifecycle management, automate workflows, and enhance attendee experiences. We empower organizers with AI analytics, virtual engagement tools, and integrated operational dashboards for maximum efficiency.",
    items: [
      {
        id: "event-lifecycle",
        icon: "Leaf", //CalendarDays
        title: "Event Lifecycle Management Platforms",
        subtitle: "",
        description:
          "Plan, schedule, and execute events with automated task tracking, resource allocation, and workflow management.",
      },
      {
        id: "attendee-analytics",
        icon: "Leaf", //Users
        title: "Attendee Analytics & Engagement Insights",
        subtitle: "",
        description:
          "Track participation, engagement, and feedback with real-time dashboards and predictive analytics to improve future events.",
      },
      {
        id: "virtual-event-platforms",
        icon: "Leaf", //Globe
        title: "Virtual & Hybrid Event Platforms",
        subtitle: "",
        description:
          "Deliver immersive virtual experiences, webinars, and hybrid conferences with AI-driven networking and interactivity.",
      },
      {
        id: "ticketing-registration",
        icon: "Leaf", //FileText
        title: "Online Ticketing & Registration Solutions",
        subtitle: "",
        description:
          "Automate attendee registration, ticket issuance, and payment processing with secure, scalable systems.",
      },
      {
        id: "sponsor-exhibitor",
        icon: "Leaf", //Gift
        title: "Sponsor & Exhibitor Management Systems",
        subtitle: "",
        description:
          "Manage sponsors, exhibitors, and partnerships with engagement tracking, reporting, and automated communications.",
      },
      {
        id: "security-compliance",
        icon: "Leaf", //ShieldCheck
        title: "Event Security & Compliance Management",
        subtitle: "",
        description:
          "Ensure attendee safety, data privacy, and regulatory compliance with integrated security monitoring and audit tools.",
      },
    ],
    linkText: "Get AI-Powered Event Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Comprehensive Meetings & Event Management Software",
    subtitle:
      "We develop robust software that automates planning, registration, and operational workflows, providing seamless attendee experiences and actionable insights.",
    subtitleLink: { text: "event management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "workflow-automation",
        icon: "map", //Settings
        title: "Workflow Automation & Task Management",
        description:
          "Automate planning, scheduling, and on-site operations to enhance efficiency and reduce human error.",
        link: { text: "event workflow automation", url: "#" },
      },
      {
        id: "analytics-dashboard",
        icon: "map", //BarChart3
        title: "Real-Time Analytics & Performance Dashboards",
        description:
          "Monitor attendee engagement, ticket sales, and operational KPIs through dynamic dashboards.",
      },
      {
        id: "mobile-access",
        icon: "map", //Smartphone
        title: "Mobile Apps & On-Site Engagement Tools",
        description:
          "Empower attendees with event apps, networking features, and real-time updates during live or hybrid events.",
      },
    ],
    bottomFeatures: [
      {
        id: "ai-chatbots",
        icon: "map", //Cpu
        title: "AI Chatbots & Virtual Assistants",
        description:
          "Provide instant attendee support, FAQs, and schedule guidance with AI-powered assistants.",
      },
      {
        id: "sponsor-tools",
        icon: "map", //Gift
        title: "Sponsor & Exhibitor Engagement Tools",
        description:
          "Enable sponsors to track engagement, manage campaigns, and measure ROI within your event ecosystem.",
      },
      {
        id: "security-compliance",
        icon: "map", //Shield
        title: "Event Security & Compliance Monitoring",
        description:
          "Ensure secure access, GDPR compliance, and safe event execution with integrated monitoring systems.",
      },
      {
        id: "immersive-experience",
        icon: "map", //Globe
        title: "Immersive & Interactive Experiences",
        description:
          "Deliver virtual, hybrid, and AR/VR engagement to make meetings and events more memorable.",
      },
    ],
    ctaText: "BUILD YOUR EVENT SOFTWARE SOLUTION",
    onCtaClick: () => {},
  },
  faq : {
  title: "Meetings & Events FAQ",
  items: [
    {
      id: "1",
      question: "What types of events can be managed with an event platform?",
      answer:
        "Event management platforms support a wide range of events including corporate meetings, conferences, trade shows, workshops, webinars, and hybrid events. They streamline planning, registration, attendee engagement, and analytics.",
    },
    {
      id: "2",
      question: "How can technology improve event planning and execution?",
      answer:
        "Technology automates tasks such as attendee registration, ticketing, scheduling, and venue management. Advanced platforms offer real-time analytics, virtual event streaming, networking tools, and AI-driven recommendations to optimize engagement and ROI.",
    },
    {
      id: "3",
      question: "What features are essential in a meetings and events platform?",
      answer:
        "Essential features include online registration, agenda management, attendee tracking, virtual meeting rooms, live polling, surveys, networking tools, and analytics dashboards. Integration with CRM and marketing tools further enhances event success.",
    },
    {
      id: "4",
      question: "Can I host virtual or hybrid events using the platform?",
      answer:
        "Yes. Modern event platforms support virtual and hybrid events, enabling remote attendees to join live sessions, interact via chat and Q&A, participate in polls, and access recorded content after the event.",
    },
    {
      id: "5",
      question: "How do event platforms help improve attendee engagement?",
      answer:
        "Platforms provide interactive features like live polls, Q&A sessions, networking lounges, gamification, and personalized agendas. These tools enhance participation, foster connections, and increase overall satisfaction for both in-person and virtual attendees.",
    },
    {
      id: "6",
      question: "Is data from events secure and private?",
      answer:
        "Yes. Event platforms implement secure login, encrypted data storage, and GDPR-compliant systems to protect attendee information. Administrators can control access levels and ensure data privacy for all participants.",
    },
    {
      id: "7",
      question: "Can event platforms integrate with existing business tools?",
      answer:
        "Absolutely. Most platforms integrate with CRMs, marketing automation tools, calendars, and payment gateways to streamline workflows, synchronize data, and enhance the overall management of meetings and events.",
    },
    {
      id: "8",
      question: "How can I measure the success of an event?",
      answer:
        "Platforms offer real-time analytics on attendance, engagement, session popularity, feedback, and ROI. These insights help organizers evaluate event performance and plan improvements for future events.",
    },
    {
      id: "9",
      question: "Do event platforms support mobile access for attendees?",
      answer:
        "Yes. Most platforms provide mobile-friendly apps or responsive web interfaces, allowing attendees to view agendas, join sessions, network with others, and receive notifications on-the-go.",
    },
    {
      id: "10",
      question: "What is the future of meetings and events technology?",
      answer:
        "The future includes AI-powered personalized agendas, immersive virtual experiences using AR/VR, advanced networking tools, and predictive analytics to anticipate attendee behavior and optimize event planning.",
    },
  ],
},

};
