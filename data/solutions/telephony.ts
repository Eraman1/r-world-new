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
    "Our telephony solutions enhance business communications, reduce operational costs, and boost customer satisfaction. We provide scalable platforms suitable for enterprises, call centers, and small businesses. Our solutions integrate seamlessly with existing infrastructure for maximum efficiency.",
  items: [
    {
      id: "voip-platforms",
      icon: "Leaf",
      title: "VoIP Platforms",
      subtitle: "Flexible & Scalable Communication",
      description:
        "Deploy enterprise-grade VoIP systems across web, mobile, and desktop platforms for smooth communication. Ensure high-quality voice connections with minimal downtime. Scale your system effortlessly as your business grows.",
    },
    {
      id: "ivr-systems",
      icon: "Leaf",
      title: "IVR Systems",
      subtitle: "Automate Call Routing",
      description:
        "Implement intelligent IVR systems that route calls efficiently and reduce wait times. Provide customers with self-service options for faster resolutions. Improve call center efficiency and enhance customer satisfaction.",
    },
    {
      id: "call-recording",
      icon: "Leaf",
      title: "Call Recording & Monitoring",
      subtitle: "Quality Assurance & Compliance",
      description:
        "Monitor, record, and analyze calls to maintain compliance and ensure quality. Use recordings for training and performance improvement. Gain actionable insights to optimize customer interactions and agent productivity.",
    },
    {
      id: "messaging-platforms",
      icon: "Leaf",
      title: "Messaging Platforms",
      subtitle: "SMS, MMS & Chat Integration",
      description:
        "Integrate SMS, MMS, and chat platforms for seamless customer engagement. Automate notifications, alerts, and campaign messaging. Track communication performance for better follow-ups and reporting.",
    },
    {
      id: "contact-center",
      icon: "Leaf",
      title: "Contact Center Solutions",
      subtitle: "Omni-Channel Communication",
      description:
        "Manage calls, messages, and social interactions from a single unified platform. Streamline customer support across multiple channels efficiently. Enhance customer experience and reduce response times with integrated tools.",
    },
    {
      id: "analytics-dashboard",
      icon: "Leaf",
      title: "Analytics & Reporting",
      subtitle: "Monitor & Optimize Communication",
      description:
        "Track call volumes, agent performance, and wait times with interactive dashboards. Generate actionable insights for operational improvements. Make data-driven decisions to optimize communication efficiency and customer satisfaction.",
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
      "Seamlessly integrate your telephony platforms with CRMs, ERP systems, and other business applications. Ensure smooth data flow across multiple systems for better operational efficiency. Enable automated updates and synchronization between platforms for accurate real-time information.",
  },
  {
    id: "automation",
    icon: "map",
    title: "Workflow Automation",
    description:
      "Automate call routing, notifications, and messaging workflows to minimize manual effort. Streamline repetitive processes and improve response times. Enhance team productivity while reducing the risk of human error in communication management.",
  },
  {
    id: "cloud-support",
    icon: "map",
    title: "Cloud & On-Premise Solutions",
    description:
      "Deploy your telephony infrastructure in cloud, on-premise, or hybrid environments to meet specific business requirements. Benefit from scalable resources and flexible deployment options. Ensure high availability, data security, and cost efficiency tailored to your organization.",
  },
  {
    id: "alerts",
    icon: "map",
    title: "Real-Time Alerts",
    description:
      "Receive instant notifications on system errors, call failures, or unusual activity to act proactively. Monitor system performance continuously for uninterrupted communication. Enable faster troubleshooting and maintain seamless business operations across teams.",
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
