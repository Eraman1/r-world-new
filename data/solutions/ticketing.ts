import { SolutionConfig } from "@/types/solutions";

export const ticketing: SolutionConfig = {
  slug: "ticketing",

  banner: {
    title: "Streamline Your Operations with",
    highlight: "Advanced Ticketing Solutions",
    subtitle:
      "Simplify event management, support systems, and customer interactions with our robust ticketing platforms.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Ticketing Solutions",
  },

  developerDetails: {
    heading: "Experts in Ticketing Systems & Management",
    subheading:
      "We develop scalable ticketing solutions for events, customer support, and enterprise workflows to improve efficiency and user experience.",
    mainTitle: "Professional Ticketing Software Development",
    mainDescription:
      "Our team builds reliable ticketing platforms that handle high volumes of users and transactions. From event ticketing to customer support systems, we provide solutions that enhance engagement and streamline operations.",
    image: "/images/ticketing-laptop.png",
    services: [
      {
        id: 1,
        title: "Event Ticketing Platforms",
        description:
          "Create digital ticketing systems for concerts, conferences, and events with secure booking, QR codes, and real-time tracking.",
        icon: "/icons/event.svg",
      },
      {
        id: 2,
        title: "Support Ticket Management",
        description:
          "Manage customer requests and support tickets efficiently with automated workflows and priority routing.",
        icon: "/icons/support.svg",
      },
      {
        id: 3,
        title: "Analytics & Reporting",
        description:
          "Track ticket sales, customer interactions, and service efficiency with detailed analytics and dashboards.",
        icon: "/icons/analytics.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Innovative Ticketing Solutions",
    mainDescription:
      "Our ticketing solutions enable seamless booking, efficient support, and real-time management. We help businesses and organizations provide smooth experiences for users and customers. Streamline operations while maximizing customer satisfaction and operational efficiency.",
    items: [
      {
        id: "event-booking",
        icon: "Leaf",
        title: "Event Booking System",
        subtitle: "Simplify Event Registrations",
        description:
          "Manage online ticket sales, reservations, and attendee tracking with automated confirmations. Utilize QR code entry for hassle-free check-ins. Optimize event management for both organizers and attendees, reducing manual workload.",
      },
      {
        id: "support-tickets",
        icon: "Leaf",
        title: "Support Ticket System",
        subtitle: "Efficient Customer Service",
        description:
          "Streamline customer support with automated ticket routing and priority assignment. Track resolution timelines and monitor team performance. Ensure faster responses and improved customer satisfaction across all support channels.",
      },
      {
        id: "mobile-ticketing",
        icon: "Leaf",
        title: "Mobile Ticketing",
        subtitle: "On-the-Go Access",
        description:
          "Enable customers to purchase, view, and validate tickets directly from mobile devices. Reduce queues and enhance user convenience with digital ticketing. Provide a seamless mobile-first experience for modern audiences.",
      },
      {
        id: "integration",
        icon: "Leaf",
        title: "Third-Party Integrations",
        subtitle: "Connect With Payment & CRM Systems",
        description:
          "Integrate ticketing platforms with payment gateways, CRM systems, and event management tools. Automate workflows and data synchronization between systems. Ensure seamless operations and a unified technology ecosystem.",
      },
      {
        id: "analytics",
        icon: "Leaf",
        title: "Sales & Performance Analytics",
        subtitle: "Insights to Improve Operations",
        description:
          "Generate detailed reports and dashboards to track sales trends and customer behavior. Monitor operational efficiency and identify growth opportunities. Use actionable insights to make informed business decisions and optimize events.",
      },
      {
        id: "security",
        icon: "Leaf",
        title: "Secure Ticketing",
        subtitle: "Protect Transactions & Data",
        description:
          "Ensure secure payment processing and protect customer data with encryption. Prevent fraud and unauthorized access with advanced security measures. Maintain trust and compliance while safeguarding ticketing operations.",
      },
    ],
    linkText: "Get Ticketing Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Ticket Management Platforms",
    subtitle:
      "Organize, track, and manage tickets efficiently with dashboards, automation, and reporting features.",
    subtitleLink: { text: "ticketing management software", url: "#" },
    laptopImage:
      "https://i.pinimg.com/736x/4a/62/41/4a624121f7ac982d8c85b425eb88369c.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/8b/a4/62/8ba46297ba60b1159aed95b269fc166f.jpg",
    topFeatures: [
      {
        id: "dashboard",
        icon: "map",
        title: "Centralized Dashboard",
        description:
          "Monitor ticket sales, support requests, and attendee activity from a single intuitive dashboard.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Workflow Automation",
        description:
          "Automate ticket assignment, reminders, and follow-ups to increase operational efficiency.",
      },
      {
        id: "analytics",
        icon: "map",
        title: "Detailed Analytics",
        description:
          "Track sales, user engagement, and ticket resolution metrics to optimize your processes.",
      },
    ],
    bottomFeatures: [
      {
        id: "multi-channel",
        icon: "map",
        title: "Multi-Channel Access",
        description:
          "Sell and manage tickets seamlessly across online platforms, mobile apps, and on-site counters. Provide customers with a flexible, convenient booking experience. Ensure consistent service and real-time availability across all channels.",
      },
      {
        id: "security",
        icon: "map",
        title: "Secure Payments & Data",
        description:
          "Protect customer data and payment information with advanced encryption and authentication protocols. Ensure compliance with industry security standards and regulations. Build trust by keeping sensitive information safe from unauthorized access.",
      },
      {
        id: "integration",
        icon: "map",
        title: "CRM & Payment Integration",
        description:
          "Connect your ticketing platform with CRM systems, payment gateways, and event management tools. Streamline workflows to manage customer data, sales, and transactions efficiently. Enable smooth synchronization for seamless operations across all channels.",
      },
      {
        id: "notifications",
        icon: "map",
        title: "Real-Time Notifications",
        description:
          "Send instant updates for ticket confirmations, reminders, and event alerts to customers. Enhance engagement by providing timely, actionable notifications. Reduce no-shows and improve user experience through proactive communication.",
      },
    ],
    ctaText: "Get Ticketing Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What types of ticketing systems do you develop?",
        answer:
          "We develop event ticketing, support ticketing, mobile ticketing, and enterprise ticket management platforms.",
      },
      {
        id: "2",
        question: "Can I sell tickets online and offline?",
        answer:
          "Yes, our systems support online sales, mobile ticketing, and on-site check-in for full flexibility.",
      },
      {
        id: "3",
        question: "Do you provide analytics for ticketing systems?",
        answer:
          "Absolutely. You can track sales, user engagement, and performance metrics with built-in dashboards and reports.",
      },
      {
        id: "4",
        question: "Can ticketing systems integrate with payment gateways?",
        answer:
          "Yes, our solutions integrate securely with all major payment gateways for seamless transactions.",
      },
      {
        id: "5",
        question: "Are ticketing systems secure?",
        answer:
          "Yes, we implement encryption, secure authentication, and fraud prevention measures to protect data and payments.",
      },
      {
        id: "6",
        question: "Do you customize ticketing solutions for businesses?",
        answer:
          "Yes, we offer fully customized ticketing solutions tailored to your business requirements, event types, and workflows.",
      },
    ],
  },
};
