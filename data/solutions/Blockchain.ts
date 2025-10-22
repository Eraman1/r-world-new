import { SolutionConfig } from "@/types/solutions";

export const blockchain: SolutionConfig = {
  slug: "blockchain",

  banner: {
    title: "Revolutionize Transactions with",
    highlight: "Blockchain Technology Solutions",
    subtitle:
      "Empower your business with secure, transparent, and decentralized blockchain development for financial, enterprise, and digital ecosystems.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore Blockchain Solutions",
  },

  developerDetails: {
    heading: "Blockchain Developers for Secure & Decentralized Systems",
    subheading:
      "Our expert blockchain engineers build robust, scalable, and transparent systems that redefine trust, efficiency, and automation across industries.",
    mainTitle: "End-to-End Blockchain Development Services",
    mainDescription:
      "From smart contracts to decentralized applications (dApps) and enterprise blockchain integrations, we help organizations harness blockchain’s potential to increase transparency, security, and performance.",
    image: "/images/blockchain-laptop.png",
    services: [
      {
        id: 1,
        title: "Smart Contract Development",
        description:
          "We create secure and automated smart contracts on Ethereum, Binance Smart Chain, and Solana for seamless decentralized transactions.",
        icon: "/icons/code.svg",
      },
      {
        id: 2,
        title: "dApp Development",
        description:
          "Our team designs and builds decentralized applications with intuitive interfaces and reliable blockchain backends.",
        icon: "/icons/network.svg",
      },
      {
        id: 3,
        title: "Tokenization & NFTs",
        description:
          "We develop custom tokens (ERC-20, BEP-20) and NFT marketplaces with secure ownership and real-time trading features.",
        icon: "/icons/currency.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Blockchain Solutions for Every Industry",
    mainDescription:
      "We design and develop blockchain solutions that optimize workflows, eliminate intermediaries, and foster trust across finance, supply chain, healthcare, and governance sectors.",
    items: [
      {
        id: "fintech",
        icon: "Leaf",
        title: "FinTech & DeFi Solutions",
        subtitle: "Empowering Digital Finance",
        description:
          "Build decentralized finance (DeFi) platforms with lending, staking, and trading features using secure smart contracts.",
      },
      {
        id: "supply-chain",
        icon: "Leaf",
        title: "Supply Chain Transparency",
        subtitle: "Track Goods in Real-Time",
        description:
          "Enable transparent supply chains with blockchain-based tracking, ensuring product authenticity and accountability.",
      },
      {
        id: "healthcare",
        icon: "Leaf",
        title: "Blockchain in Healthcare",
        subtitle: "Securing Medical Records",
        description:
          "Protect patient data and enhance interoperability between medical systems using blockchain-based record management.",
      },
      {
        id: "nft-marketplace",
        icon: "Leaf",
        title: "NFT Marketplace Development",
        subtitle: "Digital Asset Ownership",
        description:
          "Launch your NFT marketplace with seamless minting, auctions, and trading features backed by smart contracts.",
      },
      {
        id: "governance",
        icon: "Leaf",
        title: "Blockchain for e-Governance",
        subtitle: "Digital Trust & Transparency",
        description:
          "Implement transparent voting, recordkeeping, and document verification systems using blockchain technology.",
      },
      {
        id: "ai-integration",
        icon: "Leaf",
        title: "AI-Driven Blockchain Systems",
        subtitle: "Predictive Analytics & Automation",
        description:
          "Integrate artificial intelligence with blockchain for fraud detection, data analytics, and smart automation.",
      },
    ],
    linkText: "Get Blockchain Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Blockchain Management & Infrastructure",
    subtitle:
      "Manage decentralized systems efficiently with our blockchain infrastructure, monitoring, and integration tools.",
    subtitleLink: { text: "blockchain infrastructure management", url: "#" },
    laptopImage: "/images/management-blockchain.jpg",
    mobileImage: "/images/management-blockchain-mobile.jpg",
    topFeatures: [
      {
        id: "wallet",
        icon: "map",
        title: "Crypto Wallet Development",
        description:
          "Build secure crypto wallets with features like multi-currency support, two-factor authentication, and cold storage.",
      },
      {
        id: "node",
        icon: "map",
        title: "Node Deployment & Maintenance",
        description:
          "Deploy and manage blockchain nodes on Ethereum, Polygon, or Hyperledger for enhanced reliability and scalability.",
      },
      {
        id: "api",
        icon: "map",
        title: "Blockchain API Integration",
        description:
          "Integrate blockchain APIs with your existing web or mobile apps to enable decentralized functionalities.",
      },
    ],
    bottomFeatures: [
      {
        id: "analytics",
        icon: "map",
        title: "Blockchain Analytics Dashboard",
        description:
          "Monitor real-time transactions, smart contract performance, and network activity through data dashboards.",
      },
      {
        id: "security",
        icon: "map",
        title: "End-to-End Security",
        description:
          "Protect decentralized systems using cryptographic standards, multi-signature wallets, and vulnerability audits.",
      },
      {
        id: "integration",
        icon: "map",
        title: "Enterprise System Integration",
        description:
          "Integrate blockchain with ERP, CRM, and data management systems to enhance traceability and efficiency.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Process Automation",
        description:
          "Automate repetitive processes with blockchain-powered workflows and AI-driven verification.",
      },
    ],
    ctaText: "Consult Blockchain Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What industries can benefit from blockchain technology?",
        answer:
          "Blockchain is transforming industries like finance, supply chain, real estate, healthcare, logistics, and e-governance by improving transparency and efficiency.",
      },
      {
        id: "2",
        question: "Do you build custom smart contracts?",
        answer:
          "Yes, our blockchain developers design and deploy custom smart contracts tailored for business logic, automation, and DeFi applications.",
      },
      {
        id: "3",
        question: "Can blockchain integrate with existing business systems?",
        answer:
          "Absolutely. We integrate blockchain with ERP, CRM, and legacy databases to create hybrid systems that combine transparency with control.",
      },
      {
        id: "4",
        question: "What blockchain networks do you support?",
        answer:
          "We work with Ethereum, Polygon, Binance Smart Chain, Solana, Hyperledger, and Avalanche depending on your project needs.",
      },
      {
        id: "5",
        question: "Is blockchain suitable for small businesses?",
        answer:
          "Yes. We offer cost-effective blockchain solutions that automate workflows and enhance security, even for startups and SMEs.",
      },
      {
        id: "6",
        question: "Do you provide ongoing blockchain maintenance?",
        answer:
          "Yes, we provide continuous monitoring, node maintenance, and performance optimization for deployed blockchain networks.",
      },
    ],
  },
};
