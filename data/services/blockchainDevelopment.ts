import { ServiceConfig } from "./services";

export const blockchainDevelopment: ServiceConfig = {
  slug: "blockchain-development",
  banner: {
    title: "Empower Your Business with",
    highlight: "Secure Blockchain Development Solutions",
    subtitle:
      "Build decentralized, transparent, and tamper-proof systems powered by blockchain technology. We create smart contracts, crypto wallets, and dApps that redefine digital trust.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Blockchain Solutions",
  },

  developerDetails: {
    heading: "Expert Blockchain Developers",
    subheading:
      "Our blockchain experts design and develop secure decentralized applications, smart contracts, and enterprise blockchain systems using top frameworks like Ethereum, Hyperledger, and Solana.",
    mainTitle: "Professional Blockchain Development Services",
    mainDescription:
      "We provide end-to-end blockchain development services — from strategy and architecture to deployment and maintenance. Our blockchain solutions enhance transparency, security, and efficiency across industries.",
    image: "/images/blockchain-development-laptop.png",
    services: [
      {
        id: 1,
        title: "Smart Contract Development",
        description:
          "Design and deploy tamper-proof smart contracts on Ethereum, BNB Chain, or Polygon. Automate business transactions securely. Ensure accuracy, transparency, and immutability.",
        icon: "/icons/smart-contract.svg",
      },
      {
        id: 2,
        title: "Decentralized App (dApp) Development",
        description:
          "Build user-friendly decentralized applications for finance, supply chain, or gaming. Integrate Web3, wallets, and smart contracts. Ensure scalability and security. Deliver intuitive UI/UX for blockchain users.",
        icon: "/icons/dapp.svg",
      },
      {
        id: 3,
        title: "Crypto Wallet & Exchange Development",
        description:
          "Develop secure multi-currency wallets and crypto exchange platforms. Implement encryption, authentication, and real-time transaction processing. Enable smooth trading experiences. Ensure compliance with global crypto standards.",
        icon: "/icons/wallet.svg",
      },
    ],
  },

  solutions: {
  mainTitle: "Comprehensive Blockchain Solutions",
  mainDescription:
    "We deliver enterprise-grade blockchain solutions that enhance transparency, automation, and security. From decentralized finance to NFT ecosystems, our blockchain products empower global innovation.",
  linkText: "Get Blockchain Solutions",
  linkUrl: "/contact-us",

  items: [
    {
      id: "smart-contracts",
      icon: "Leaf",
      title: "Smart Contract Development",
      subtitle: "Automate Business Logic",
      description:
        "Develop secure, self-executing smart contracts across Ethereum, Polygon, and Hyperledger. \nAutomate complex workflows and reduce manual dependencies. \nEnsure transparency, immutability, and trustless execution. \nProtect agreements from tampering and fraud. \nEmpower businesses with reliable decentralized automation.",
    },
    {
      id: "dapp-development",
      icon: "Leaf",
      title: "dApp Development",
      subtitle: "Build Decentralized Apps",
      description:
        "Design scalable and user-centric dApps for multiple industries. \nIntegrate wallets, APIs, and smart contract interactions seamlessly. \nEnhance user autonomy and privacy through decentralized logic. \nSupport multi-chain and cross-platform functionality. \nDeliver smooth blockchain-powered user experiences at scale.",
    },
    {
      id: "nft-solutions",
      icon: "Leaf",
      title: "NFT Development",
      subtitle: "Tokenize Digital Assets",
      description:
        "Create NFT marketplaces for creators, collectors, and enterprises. \nEnable asset tokenization using ERC-721 and ERC-1155 standards. \nIntegrate wallets, auctions, and royalty features effortlessly. \nEnsure transparent ownership and traceable authenticity. \nEmpower digital creators to monetize unique assets globally.",
    },
    {
      id: "blockchain-consulting",
      icon: "Leaf",
      title: "Blockchain Consulting",
      subtitle: "Strategize & Implement Solutions",
      description:
        "Provide expert consulting to plan blockchain adoption strategies. \nEvaluate use cases, ROI, and technical feasibility in depth. \nArchitect scalable, secure, and compliant decentralized systems. \nGuide enterprises through implementation and integration phases. \nDrive innovation through tailored blockchain transformation plans.",
    },
    {
      id: "defi-solutions",
      icon: "Leaf",
      title: "DeFi & Token Development",
      subtitle: "Empower Financial Innovation",
      description:
        "Build decentralized financial ecosystems for global accessibility. \nEnable secure lending, staking, and yield farming modules. \nDesign tokenomics that balance liquidity and governance. \nImplement smart contracts to ensure transparent operations. \nDeliver intuitive and compliant DeFi platforms for users worldwide.",
    },
    {
      id: "blockchain-integration",
      icon: "Leaf",
      title: "Blockchain Integration",
      subtitle: "Connect Existing Systems",
      description:
        "Integrate blockchain into ERP, CRM, and payment infrastructures. \nEnable real-time verification and transaction tracking securely. \nEnhance transparency and trust across business workflows. \nFacilitate interoperability between legacy and distributed systems. \nTransform data handling with seamless decentralized integration.",
    },
  ],
},


  managementSolutions: {
    title: "Blockchain Network Management Tools",
    subtitle:
      "Monitor, analyze, and optimize blockchain performance with advanced management solutions for enterprises and developers.",
    subtitleLink: { text: "blockchain management software", url: "#" },
    laptopImage: "/images/blockchain-management.jpg",
    mobileImage: "/images/blockchain-management-mobile.jpg",
    topFeatures: [
      {
        id: "network-monitoring",
        icon: "map",
        title: "Blockchain Network Monitoring",
        description:
          "Track node performance and transaction health in real-time. Detect network congestion or anomalies. Ensure uptime and reliability. Analyze block creation trends. Improve transparency and operational visibility.",
      },
      {
        id: "wallet-analytics",
        icon: "map",
        title: "Wallet & Transaction Analytics",
        description:
          "Monitor crypto wallet activity securely. Analyze token movements, fees, and transaction volumes. Generate actionable insights for businesses. Detect suspicious activities. Improve decision-making with blockchain data analytics.",
      },
      {
        id: "smart-contract-audit",
        icon: "map",
        title: "Smart Contract Auditing Tools",
        description:
          "Audit and validate smart contracts for vulnerabilities. Ensure compliance with security standards. Detect logic flaws and gas inefficiencies. Generate detailed reports for optimization. Strengthen blockchain reliability and trust.",
      },
    ],
    ctaText: "Hire Blockchain Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ - Blockchain Development Services",
    items: [
      {
        id: "1",
        question: "What blockchain platforms do you work with?",
        answer:
          "We develop solutions on Ethereum, Hyperledger, Binance Smart Chain, Polygon, Solana, and private blockchain frameworks.",
      },
      {
        id: "2",
        question: "Can you build custom smart contracts?",
        answer:
          "Yes, we design and deploy custom smart contracts for automation, tokenization, and decentralized applications tailored to your business needs.",
      },
      {
        id: "3",
        question: "Do you provide blockchain consulting?",
        answer:
          "Absolutely. We offer consulting to help you identify the right blockchain use cases, choose platforms, and design scalable architectures.",
      },
      {
        id: "4",
        question: "Can you integrate blockchain with existing systems?",
        answer:
          "Yes, we integrate blockchain solutions with ERP, CRM, and other enterprise systems to enhance transparency and traceability.",
      },
      {
        id: "5",
        question: "Do you offer NFT and DeFi development?",
        answer:
          "Yes, we develop NFT marketplaces, token systems, and DeFi platforms for lending, staking, and liquidity management.",
      },
      {
        id: "6",
        question: "How secure are your blockchain solutions?",
        answer:
          "We follow industry best practices, conduct security audits, and use encryption to ensure complete safety of blockchain transactions and smart contracts.",
      },
      {
        id: "7",
        question: "Do you provide post-deployment support?",
        answer:
          "Yes, we offer ongoing maintenance, updates, and technical support to keep your blockchain networks running efficiently.",
      },
    ],
  },
};
