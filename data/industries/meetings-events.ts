import { IndustryConfig } from "@/types/industries";

export const meetingsEvents: IndustryConfig = {
  slug: "meetings-events",
  banner: {
    title: "Transform Meetings & Events with",
    highlight: "AI-Powered Event Management Software Solutions",
    subtitle:
      "Reimagine how organizations plan, manage, and execute events with intelligent automation, real-time analytics, and attendee engagement tools. From corporate meetings to global conferences, our solutions optimize operations and enhance experiences.",
    image: "/industry/industryMeetings&EventsBanner.webp",
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
    deviceImages: {
      laptop: "/industry/industryMeetings&EventsBanner.webp",
      tablet: "/industry/industryMeetings&EventsBanner.webp",
      mobile: "/industry/industryMeetings&EventsBanner.webp",
    },
  },

  solutions: {
    mainTitle: "AI, Cloud & Automation Solutions for Meetings & Events",
    mainDescription:
      "Our intelligent platforms streamline the entire event lifecycle — from planning to post-event analysis. We automate workflows, enhance attendee experiences, and provide unified dashboards for smarter decision-making. Harness the power of AI analytics, real-time engagement tools, and integrated systems to maximize event success.",
    items: [
      {
        id: "event-lifecycle",
        icon: "Leaf", //CalendarDays
        title: "Event Lifecycle Management Platforms",
        subtitle: "",
        description:
          "Plan and execute events with complete automation from start to finish. \n" +
          "Streamline scheduling, budgeting, and vendor coordination in real time. \n" +
          "Assign resources efficiently with cloud-enabled workflow automation. \n" +
          "Use AI to predict bottlenecks and optimize task completion timelines. \n" +
          "Ensure flawless event delivery through unified planning dashboards.",
      },
      {
        id: "attendee-analytics",
        icon: "Leaf", //Users
        title: "Attendee Analytics & Engagement Insights",
        subtitle: "",
        description:
          "Capture attendee behavior, engagement, and feedback across all channels. \n" +
          "Use predictive analytics to improve event content and participation rates. \n" +
          "Get real-time dashboards with AI-powered sentiment and trend tracking. \n" +
          "Personalize event experiences using data-driven audience insights. \n" +
          "Make every event smarter with continuous engagement optimization.",
      },
      {
        id: "virtual-event-platforms",
        icon: "Leaf", //Globe
        title: "Virtual & Hybrid Event Platforms",
        subtitle: "",
        description:
          "Host seamless virtual and hybrid events with high-quality streaming tools. \n" +
          "Enhance attendee interaction through live chats, polls, and breakout rooms. \n" +
          "Integrate AI-driven matchmaking to connect attendees with shared interests. \n" +
          "Enable cross-platform accessibility for global participants in any timezone. \n" +
          "Deliver immersive digital experiences powered by automation and cloud tech.",
      },
      {
        id: "ticketing-registration",
        icon: "Leaf", //FileText
        title: "Online Ticketing & Registration Solutions",
        subtitle: "",
        description:
          "Simplify attendee registration with automated ticketing workflows. \n" +
          "Offer secure online payments, multi-currency options, and QR-based access. \n" +
          "Integrate with CRM and marketing systems for unified attendee data. \n" +
          "Monitor sales performance and attendance metrics in real time. \n" +
          "Reduce manual errors with fully cloud-based registration automation.",
      },
      {
        id: "sponsor-exhibitor",
        icon: "Leaf", //Gift
        title: "Sponsor & Exhibitor Management Systems",
        subtitle: "",
        description:
          "Manage sponsor relationships and exhibitor profiles with ease. \n" +
          "Automate communications, booth assignments, and digital showcases. \n" +
          "Track engagement metrics and ROI through AI-powered reporting tools. \n" +
          "Provide sponsors with real-time visibility into attendee interactions. \n" +
          "Strengthen partnerships with transparent and data-driven management.",
      },
      {
        id: "security-compliance",
        icon: "Leaf", //ShieldCheck
        title: "Event Security & Compliance Management",
        subtitle: "",
        description:
          "Ensure complete event security with integrated monitoring solutions. \n" +
          "Protect attendee data through encryption and GDPR-compliant systems. \n" +
          "Automate access control and risk detection with AI-based threat alerts. \n" +
          "Simplify audit reporting through centralized compliance dashboards. \n" +
          "Maintain trust with end-to-end safety and regulatory assurance.",
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
    laptopImage:
      "https://i.pinimg.com/736x/f7/6c/c4/f76cc4b2138106a22782f76b9b2d5ec0.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/10/e2/8b/10e28b075799da6ba6cfd3f56bba34a7.jpg",
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
          "Empower attendees with real-time, automated assistance using AI chatbots. Provide instant answers to FAQs and personalized event guidance. Offer schedule reminders, navigation support, and language translation. Enhance engagement with conversational interfaces and quick response times. Reduce manual support efforts while improving attendee satisfaction.",
      },
      {
        id: "sponsor-tools",
        icon: "map", //Gift
        title: "Sponsor & Exhibitor Engagement Tools",
        description:
          "Enable sponsors to manage profiles, campaigns, and booth interactions seamlessly. Track engagement metrics and optimize marketing efforts in real time. Provide analytics dashboards for visibility into audience interest and ROI. Facilitate lead generation and targeted promotional opportunities. Strengthen sponsor relationships through measurable engagement insights.",
      },
      {
        id: "security-compliance",
        icon: "map", //Shield
        title: "Event Security & Compliance Monitoring",
        description:
          "Ensure data security, access control, and GDPR compliance across platforms. Automate participant verification and real-time threat detection systems. Maintain audit trails and incident tracking for transparent operations. Protect attendee data with end-to-end encrypted communications. Deliver a safe, compliant, and trustworthy event experience for all users.",
      },
      {
        id: "immersive-experience",
        icon: "map", //Globe
        title: "Immersive & Interactive Experiences",
        description:
          "Transform events into dynamic virtual or hybrid experiences with AR/VR. Offer 3D environments, interactive sessions, and gamified participation. Engage global audiences with real-time streaming and networking tools. Create personalized journeys for attendees using data-driven insights. Enhance brand visibility through visually stunning immersive setups.",
      },
    ],
    ctaText: "BUILD YOUR EVENT SOFTWARE SOLUTION",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },

  managementSolutionsTwo: {
    title: "Meetings & Events Management Software Solutions",
    subtitle:
      "Our meetings and events software developers build smart platforms to streamline event planning, attendee engagement, and scheduling with real-time collaboration and automation tools.",
    subtitleLink: { text: "event management software", url: "#" },
    laptopImage:
      "https://i.pinimg.com/1200x/54/25/95/5425959122bfbe622b9aef01977f60cf.jpg",
    mobileImage: "/images/meetings-events-mobile.jpg",

    topFeatures: [
      {
        id: "event-planning",
        icon: "Calendar",
        title: "Event Planning & Scheduling Systems",
        description:
          "Automate event scheduling, resource booking, and reminders. Simplify end-to-end management with real-time updates and coordination tools.",
        link: { text: "event planning software", url: "#" },
      },
      {
        id: "attendee-engagement",
        icon: "Users",
        title: "Attendee Engagement & Networking Tools",
        description:
          "Boost participation through live chats, polls, and virtual meetups. Personalize attendee journeys for higher engagement and satisfaction.",
        link: { text: "attendee engagement software", url: "#" },
      },
      {
        id: "venue-management",
        icon: "MapPin",
        title: "Venue & Resource Management Platforms",
        description:
          "Manage venue layouts, logistics, and vendor coordination effortlessly. Track availability, capacity, and equipment in real time.",
        link: { text: "venue management platform", url: "#" },
      },
      {
        id: "analytics-reporting",
        icon: "BarChart2",
        title: "Event Analytics & Reporting Dashboards",
        description:
          "Gain insights into attendance, engagement, and ROI metrics. Use custom dashboards to make data-driven event decisions.",
        link: { text: "event analytics software", url: "#" },
      },
    ],

    bottomFeatures: [
      {
        id: "registration-ticketing",
        icon: "Ticket",
        title: "Online Registration & Ticketing Systems",
        description:
          "Simplify attendee registration with secure payment options. Manage ticket sales, discounts, and seat allocations effortlessly.",
      },
      {
        id: "virtual-hybrid-events",
        icon: "Monitor",
        title: "Virtual & Hybrid Event Solutions",
        description:
          "Host interactive online and hybrid events with streaming tools. Offer networking, live sessions, and sponsor booths virtually.",
      },
      {
        id: "speaker-management",
        icon: "Mic",
        title: "Speaker & Agenda Management Software",
        description:
          "Organize speaker profiles, bios, and schedules efficiently. Enable easy updates and real-time agenda modifications during events.",
      },
      {
        id: "feedback-automation",
        icon: "MessageSquare",
        title: "Post-Event Feedback & Automation Tools",
        description:
          "Collect attendee feedback through surveys and AI insights. Automate reports to measure satisfaction and improve future events.",
      },
    ],

    ctaText: "GET EVENT SOFTWARE DEVELOPERS",
    onCtaClick: "/contact-us",
  },

  faq: {
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
        question:
          "What features are essential in a meetings and events platform?",
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
