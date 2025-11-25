import { SolutionConfig } from "@/types/solutions";

export const kiosk: SolutionConfig = {
  slug: "kiosk",

  banner: {
    title: "Revolutionize Customer Experience with",
    highlight: "Smart Kiosk Software Solutions",
    subtitle:
      "Empower your business with interactive self-service kiosks designed for seamless transactions, dynamic content, and real-time data integration.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Kiosk Solutions",
  },

  developerDetails: {
    heading: "Experts in Interactive Kiosk Development",
    subheading:
      "We design and develop advanced kiosk systems that improve user engagement, automate operations, and enhance customer service across industries.",
    mainTitle: "End-to-End Custom Kiosk Software Development",
    mainDescription:
      "From touch-enabled interfaces to cloud connectivity, we build kiosk solutions tailored for retail, airports, healthcare, and banking. Our systems support payments, ticketing, check-ins, and dynamic digital displays.",
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    services: [
      {
        id: 1,
        title: "Self-Service Kiosk Software",
        description:
          "Custom-built software that allows customers to browse, order, and pay independently — improving efficiency and user satisfaction.",
        icon: "/icons/touch.svg",
      },
      {
        id: 2,
        title: "Digital Signage & Advertising",
        description:
          "We integrate high-definition displays and dynamic content scheduling for advertising, promotions, and announcements.",
        icon: "/icons/display.svg",
      },
      {
        id: 3,
        title: "POS & Payment Integration",
        description:
          "Enable secure and fast payment options through card readers, QR scanners, NFC, and UPI systems integrated within the kiosk.",
        icon: "/icons/credit-card.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Smart Kiosk Software Solutions for Every Industry",
    mainDescription:
      "Our kiosk software enhances automation, interactivity, and efficiency — helping businesses deliver faster service and better customer engagement through touch-enabled, IoT-powered systems.",
    items: [
      {
        id: "retail-kiosk",
        icon: "Leaf",
        title: "Retail & Shopping Kiosks",
        subtitle: "Empower Customer Self-Service",
        description:
          "From product browsing to in-store payments, our retail kiosks streamline the shopping experience. Customers can quickly find products, compare options, and place orders. Integrated checkout systems reduce wait times and increase satisfaction.",
      },
      {
        id: "banking-kiosk",
        icon: "Leaf",
        title: "Banking & Financial Kiosks",
        subtitle: "24/7 Banking Convenience",
        description:
          "Enable customers to perform transactions like deposits, withdrawals, and balance checks anytime. Kiosks reduce branch congestion and provide secure access to financial services. Staff can focus on higher-value customer support tasks.",
      },
      {
        id: "airport-kiosk",
        icon: "Leaf",
        title: "Airport Check-In Kiosks",
        subtitle: "Faster Passenger Processing",
        description:
          "Streamline passenger check-ins with self-service kiosks for ticket printing and boarding passes. Reduce long queues and waiting times at airports. Enhance passenger satisfaction with faster, hassle-free airport experiences.",
      },
      {
        id: "healthcare-kiosk",
        icon: "Leaf",
        title: "Healthcare Registration Kiosks",
        subtitle: "Patient Self-Check-In & Info Systems",
        description:
          "Simplify hospital workflows with kiosks for appointment booking, registration, and patient data entry. Reduce administrative workload and waiting times. Enable secure, touch-free check-ins for improved patient experience.",
      },
      {
        id: "hospitality-kiosk",
        icon: "Leaf",
        title: "Hospitality & Food Ordering Kiosks",
        subtitle: "Automate Guest Services",
        description:
          "Restaurants and hotels can automate orders, menu browsing, and room service requests. Increase order accuracy and speed up service delivery. Enhance the guest experience with interactive and intuitive interfaces.",
      },
      {
        id: "information-kiosk",
        icon: "Leaf",
        title: "Interactive Information Kiosks",
        subtitle: "Smart Wayfinding & Assistance",
        description:
          "Deploy kiosks for real-time visitor information, ticketing, and directions. Integrate AI chat support for interactive guidance. Improve user engagement with accessible, accurate, and up-to-date information.",
      },
    ],
    linkText: "Request Kiosk Demo",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Kiosk Management & Monitoring Systems",
    subtitle:
      "Control, monitor, and update your kiosk network remotely using our centralized management dashboard.",
    subtitleLink: { text: "kiosk management software", url: "#" },
    laptopImage:
      "https://i.pinimg.com/1200x/99/3f/04/993f04fae7bd2bb190ec0bd278497c2a.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/14/c1/8c/14c18c26374d456ad15c4d1a45d1f8a1.jpg",
    topFeatures: [
      {
        id: "remote-monitoring",
        icon: "map",
        title: "Real-Time Monitoring",
        description:
          "Track device status, performance, and connectivity in real-time from a centralized admin portal.",
      },
      {
        id: "content-management",
        icon: "map",
        title: "Content Management System",
        description:
          "Update multimedia content, menus, and advertisements remotely across multiple kiosks instantly.",
      },
      {
        id: "security-updates",
        icon: "map",
        title: "Security & Access Control",
        description:
          "Protect user data with encrypted transactions, secure logins, and role-based access control.",
      },
    ],
    bottomFeatures: [
      {
        id: "analytics",
        icon: "map",
        title: "Usage Analytics & Reports",
        description:
          "Gain actionable insights into user behavior, peak usage hours, and transaction patterns to improve kiosk efficiency. Monitor performance metrics to identify trends and opportunities. Make informed decisions to optimize operations and enhance the user experience.",
      },
      {
        id: "maintenance",
        icon: "map",
        title: "Remote Maintenance",
        description:
          "Diagnose technical issues and deploy software updates remotely to minimize downtime. Reduce maintenance costs while keeping kiosks fully operational. Ensure consistent performance and reliability across all devices without on-site intervention.",
      },
      {
        id: "multi-language",
        icon: "map",
        title: "Multi-Language Support",
        description:
          "Deliver fully localized kiosk experiences with support for multiple languages. Cater to diverse user groups to improve accessibility and engagement. Enhance customer satisfaction and inclusivity across regions.",
      },
      {
        id: "integration",
        icon: "map",
        title: "API & Third-Party Integration",
        description:
          "Seamlessly connect kiosks with CRM, ERP, and POS systems for efficient data synchronization. Enable automated workflows and real-time updates across platforms. Streamline operations and unify business processes for maximum productivity.",
      },
    ],
    ctaText: "Get Kiosk Management Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What industries can benefit from kiosk solutions?",
        answer:
          "Kiosk software is ideal for retail, banking, airports, healthcare, hospitality, and public information centers — enhancing automation and user experience.",
      },
      {
        id: "2",
        question: "Can the kiosk software support payments?",
        answer:
          "Yes. Our kiosks integrate multiple payment modes like cards, QR codes, UPI, and NFC for quick and secure transactions.",
      },
      {
        id: "3",
        question: "Do you provide hardware with the kiosk software?",
        answer:
          "We primarily focus on software development but can collaborate with hardware vendors for end-to-end kiosk deployment.",
      },
      {
        id: "4",
        question: "Can kiosks be customized for brand identity?",
        answer:
          "Absolutely. We design the kiosk UI and UX according to your brand’s color, logo, and layout requirements.",
      },
      {
        id: "5",
        question: "Do you offer remote kiosk monitoring?",
        answer:
          "Yes. Our management dashboard allows you to monitor, update, and troubleshoot kiosks remotely in real time.",
      },
      {
        id: "6",
        question: "Is the kiosk system secure for user data?",
        answer:
          "Yes. We use data encryption, role-based access, and automatic logouts to ensure privacy and compliance with data protection standards.",
      },
    ],
  },
};
