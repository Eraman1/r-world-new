import { SolutionConfig } from "@/types/solutions";

export const telephony: SolutionConfig = {
  slug: "telephony",

  banner: {
    title: "Revolutionize Communication with",
    highlight: "Advanced Telephony Solutions",
    subtitle:
      "Enable seamless voice, messaging, and VoIP solutions to enhance communication, collaboration, and customer engagement across your business.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Telephony Solutions",
  },

  developerDetails: {
    heading: "Experts in Telephony & VoIP Systems",
    subheading:
      "Our team builds scalable telephony platforms, enabling businesses to connect customers and employees with reliable, high-quality voice and messaging services.",
    mainTitle: "Professional Telephony Development Services",
    mainDescription:
      "We provide custom telephony software solutions, including VoIP systems, SIP integration, IVR development, and call center automation. Our expertise ensures seamless communication across all channels.",
    image: "/images/telephony-laptop.png",
    services: [
      {
        id: 1,
        title: "VoIP & SIP Integration",
        description:
          "Implement Voice over IP and SIP protocols for reliable and scalable voice communications across multiple devices and platforms.",
        icon: "/icons/voip.svg",
      },
      {
        id: 2,
        title: "Interactive Voice Response (IVR)",
        description:
          "Design custom IVR systems to automate call routing, improve customer service, and reduce wait times.",
        icon: "/icons/ivr.svg",
      },
      {
        id: 3,
        title: "Call Center Automation",
        description:
          "Enhance call center operations with automated call distribution, analytics, and real-time monitoring for optimal efficiency.",
        icon: "/icons/call-center.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Comprehensive Telephony Solutions",
    mainDescription:
      "Our telephony solutions improve business communications, reduce costs, and increase customer satisfaction. We offer scalable platforms for enterprises, call centers, and small businesses.",
    items: [
      {
        id: "voip-platforms",
        icon: "Leaf",
        title: "VoIP Platforms",
        subtitle: "Flexible & Scalable Communication",
        description:
          "Deploy enterprise-grade VoIP systems that work on web, mobile, and desktop applications for seamless communication.",
      },
      {
        id: "ivr-systems",
        icon: "Leaf",
        title: "IVR Systems",
        subtitle: "Automate Call Routing",
        description:
          "Implement IVR systems that intelligently route calls and provide self-service options to improve customer experience.",
      },
      {
        id: "call-recording",
        icon: "Leaf",
        title: "Call Recording & Monitoring",
        subtitle: "Quality Assurance & Compliance",
        description:
          "Monitor, record, and analyze calls for training, compliance, and performance improvement purposes.",
      },
      {
        id: "messaging-platforms",
        icon: "Leaf",
        title: "Messaging Platforms",
        subtitle: "SMS, MMS & Chat Integration",
        description:
          "Integrate messaging services for notifications, alerts, and customer engagement with full automation and tracking.",
      },
      {
        id: "contact-center",
        icon: "Leaf",
        title: "Contact Center Solutions",
        subtitle: "Omni-Channel Communication",
        description:
          "Manage calls, messages, and social interactions from a unified platform to streamline customer support.",
      },
      {
        id: "analytics-dashboard",
        icon: "Leaf",
        title: "Analytics & Reporting",
        subtitle: "Monitor & Optimize Communication",
        description:
          "Track call volume, wait times, and agent performance with dashboards and actionable insights.",
      },
    ],
    linkText: "Explore Telephony Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Telephony Management Platforms",
    subtitle:
      "Centralize your communication management, monitor usage, and optimize performance with advanced telephony dashboards.",
    subtitleLink: { text: "telephony management systems", url: "#" },
    laptopImage: "/images/telephony-management-laptop.jpg",
    mobileImage: "/images/telephony-management-mobile.jpg",
    topFeatures: [
      {
        id: "dashboard",
        icon: "map",
        title: "Centralized Dashboard",
        description:
          "Monitor call statistics, agent activity, and system performance from a single interface.",
      },
      {
        id: "reporting",
        icon: "map",
        title: "Automated Reporting",
        description:
          "Generate reports on call quality, response times, and customer interactions automatically.",
      },
      {
        id: "security",
        icon: "map",
        title: "Secure Communications",
        description:
          "Ensure encrypted voice and messaging communication with role-based access control and compliance support.",
      },
    ],
    bottomFeatures: [
      {
        id: "integration",
        icon: "map",
        title: "API & System Integration",
        description:
          "Integrate telephony platforms with CRMs, ERP systems, and other business applications seamlessly.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Workflow Automation",
        description:
          "Automate call routing, notifications, and messaging workflows to improve efficiency and reduce manual intervention.",
      },
      {
        id: "cloud-support",
        icon: "map",
        title: "Cloud & On-Premise Solutions",
        description:
          "Deploy telephony infrastructure in cloud, on-premise, or hybrid environments to fit your business needs.",
      },
      {
        id: "alerts",
        icon: "map",
        title: "Real-Time Alerts",
        description:
          "Receive notifications on system errors, call failures, or unusual activity for proactive issue resolution.",
      },
    ],
    ctaText: "Get Telephony Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is telephony software?",
        answer:
          "Telephony software enables businesses to make, receive, and manage calls, messages, and communication workflows across multiple channels.",
      },
      {
        id: "2",
        question: "Can I integrate telephony with my CRM?",
        answer:
          "Yes, we can integrate telephony platforms with CRMs to track customer interactions and improve business communication efficiency.",
      },
      {
        id: "3",
        question: "Do you provide VoIP solutions?",
        answer:
          "Absolutely. We provide enterprise-grade VoIP solutions for scalable, cost-effective, and reliable voice communications.",
      },
      {
        id: "4",
        question: "Is my communication secure?",
        answer:
          "Yes, our telephony solutions ensure end-to-end encryption, secure access, and compliance with industry standards.",
      },
      {
        id: "5",
        question: "Can you automate call center workflows?",
        answer:
          "Yes, we design automated call routing, IVR, and messaging workflows to improve operational efficiency.",
      },
      {
        id: "6",
        question: "Do you offer cloud telephony services?",
        answer:
          "Yes, our solutions support cloud, on-premise, and hybrid deployment models depending on your business needs.",
      },
    ],
  },
};
