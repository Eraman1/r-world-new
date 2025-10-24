import { SolutionConfig } from "@/types/solutions";

export const posPaymentProcessing: SolutionConfig = {
  slug: "pos-payment-processing",

  banner: {
    title: "Streamline Your Transactions with",
    highlight: "POS & Payment Processing Solutions",
    subtitle:
      "Simplify payments, manage sales, and enhance customer experience with our advanced point-of-sale and payment processing platforms.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get POS Solutions",
  },

  developerDetails: {
    heading: "Experts in POS Systems & Payment Processing",
    subheading:
      "Our team delivers robust POS solutions and payment gateways that ensure fast, secure, and seamless transactions for retail, hospitality, and service industries.",
    mainTitle: "Custom POS & Payment Platform Development",
    mainDescription:
      "We build scalable POS systems, integrated with payment processing, inventory management, and reporting features. Our solutions help businesses reduce transaction time, prevent errors, and provide real-time insights for smarter operations.",
    image: "/images/pos-laptop.png",
    services: [
      {
        id: 1,
        title: "POS System Development",
        description:
          "Customizable point-of-sale software tailored for retail, restaurants, or service industries with inventory, reporting, and analytics features.",
        icon: "/icons/pos.svg",
      },
      {
        id: 2,
        title: "Payment Gateway Integration",
        description:
          "Integrate secure and reliable payment gateways supporting cards, UPI, wallets, and other digital payment methods.",
        icon: "/icons/payment.svg",
      },
      {
        id: 3,
        title: "Inventory & Sales Management",
        description:
          "Track stock, manage orders, and generate detailed sales reports to optimize operations and improve profitability.",
        icon: "/icons/inventory.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Advanced POS & Payment Solutions",
    mainDescription:
      "Our POS and payment processing platforms streamline business operations, reduce transaction errors, and enhance customer satisfaction with fast, secure, and reliable technology.",
    items: [
      {
        id: "retail-pos",
        icon: "Leaf",
        title: "Retail POS Systems",
        subtitle: "Efficient Store Operations",
        description:
          "Simplify checkout, inventory management, and reporting for retail stores with an intuitive POS interface and fast payment processing.",
      },
      {
        id: "restaurant-pos",
        icon: "Leaf",
        title: "Restaurant POS Solutions",
        subtitle: "Seamless Order & Payment Handling",
        description:
          "Manage tables, orders, and bills efficiently while integrating multiple payment options for diners.",
      },
      {
        id: "mobile-pos",
        icon: "Leaf",
        title: "Mobile POS & Wallets",
        subtitle: "Accept Payments Anywhere",
        description:
          "Enable sales and payments on the go with mobile POS apps, QR payments, and contactless transactions.",
      },
      {
        id: "ecommerce-payment",
        icon: "Leaf",
        title: "E-Commerce Payment Gateways",
        subtitle: "Secure Online Transactions",
        description:
          "Integrate reliable payment gateways for your online store to ensure smooth, secure, and fast checkout experiences.",
      },
      {
        id: "loyalty-programs",
        icon: "Leaf",
        title: "Loyalty & Rewards Management",
        subtitle: "Boost Customer Retention",
        description:
          "Incorporate reward points, discounts, and loyalty programs directly into your POS system for repeat business.",
      },
      {
        id: "analytics-dashboard",
        icon: "Leaf",
        title: "Sales Analytics & Reporting",
        subtitle: "Data-Driven Decisions",
        description:
          "Track sales, customer trends, and revenue performance with comprehensive dashboards and reports.",
      },
    ],
    linkText: "Get POS & Payment Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "POS Management & Payment Platforms",
    subtitle:
      "Centralize your sales, inventory, and payment processing with secure, cloud-based POS management solutions.",
    subtitleLink: { text: "POS management software", url: "#" },
    laptopImage: "/images/pos-management-laptop.jpg",
    mobileImage: "/images/pos-management-mobile.jpg",
    topFeatures: [
      {
        id: "central-dashboard",
        icon: "map",
        title: "Centralized POS Dashboard",
        description:
          "Monitor all your stores, transactions, and inventory in real-time from a single dashboard.",
      },
      {
        id: "secure-payments",
        icon: "map",
        title: "Secure Payment Processing",
        description:
          "Ensure all transactions are encrypted, PCI-compliant, and processed securely for customer trust.",
      },
      {
        id: "inventory-management",
        icon: "map",
        title: "Automated Inventory Management",
        description:
          "Track stock levels automatically and get notifications for low inventory or restocking requirements.",
      },
    ],
    bottomFeatures: [
      {
        id: "workflow-automation",
        icon: "map",
        title: "Workflow Automation",
        description:
          "Automate routine tasks such as billing, invoice generation, and report scheduling for operational efficiency.",
      },
      {
        id: "multi-channel",
        icon: "map",
        title: "Multi-Channel Integration",
        description:
          "Connect your physical stores, e-commerce platforms, and mobile POS for unified sales and inventory management.",
      },
      {
        id: "cloud-sync",
        icon: "map",
        title: "Cloud & Mobile Access",
        description:
          "Access your POS system remotely via cloud applications or mobile devices to monitor sales anytime, anywhere.",
      },
      {
        id: "alerts",
        icon: "map",
        title: "Real-Time Alerts & Notifications",
        description:
          "Receive notifications for transaction failures, stock levels, and operational anomalies instantly.",
      },
    ],
    ctaText: "Get POS & Payment Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What types of businesses benefit from POS systems?",
        answer:
          "Retail stores, restaurants, e-commerce businesses, hospitality, and service providers can leverage POS solutions to streamline sales and payments.",
      },
      {
        id: "2",
        question: "Do you provide online and offline POS systems?",
        answer:
          "Yes, we develop POS solutions that work both online and offline, ensuring uninterrupted operations even without internet connectivity.",
      },
      {
        id: "3",
        question: "Can I integrate multiple payment methods?",
        answer:
          "Absolutely. Our systems support cards, UPI, wallets, net banking, and contactless payments for convenience and flexibility.",
      },
      {
        id: "4",
        question: "Do you offer inventory management with POS?",
        answer:
          "Yes, our POS platforms include inventory tracking, stock alerts, and reporting tools to optimize business operations.",
      },
      {
        id: "5",
        question: "Is the payment processing secure and compliant?",
        answer:
          "All transactions are encrypted and PCI-compliant, ensuring secure and reliable payment processing for your customers.",
      },
      {
        id: "6",
        question: "Can I access POS data remotely?",
        answer:
          "Yes, cloud-based POS solutions allow you to monitor sales, inventory, and transactions from any device with secure login access.",
      },
    ],
  },
};
