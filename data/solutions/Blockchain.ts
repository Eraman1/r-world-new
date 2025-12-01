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
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
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
          "Develop robust DeFi platforms for lending, staking, and digital asset trading powered by smart contracts. Enhance transaction transparency and reduce costs with decentralized architecture. Empower financial institutions to innovate with blockchain-driven automation.",
      },
      {
        id: "supply-chain",
        icon: "Leaf",
        title: "Supply Chain Transparency",
        subtitle: "Track Goods in Real-Time",
        description:
          "Implement blockchain-led traceability for end-to-end supply chain visibility. Authenticate product origins, prevent counterfeiting, and ensure compliance. Improve logistics efficiency through immutable data sharing and trustless collaboration.",
      },
      {
        id: "healthcare",
        icon: "Leaf",
        title: "Blockchain in Healthcare",
        subtitle: "Securing Medical Records",
        description:
          "Safeguard patient information using decentralized, tamper-proof blockchain systems. Enable seamless data sharing between hospitals, labs, and insurers. Enhance security, transparency, and interoperability in digital healthcare ecosystems.",
      },
      {
        id: "nft-marketplace",
        icon: "Leaf",
        title: "NFT Marketplace Development",
        subtitle: "Digital Asset Ownership",
        description:
          "Create next-gen NFT marketplaces for digital art, collectibles, and virtual assets. Integrate minting, auctions, and trading features with secure smart contracts. Offer creators and investors a transparent, royalty-driven ecosystem.",
      },
      {
        id: "governance",
        icon: "Leaf",
        title: "Blockchain for e-Governance",
        subtitle: "Digital Trust & Transparency",
        description:
          "Empower governments with blockchain-enabled voting, verification, and recordkeeping systems. Ensure tamper-proof documentation and citizen trust. Promote transparency, efficiency, and accountability in public administration.",
      },
      {
        id: "ai-integration",
        icon: "Leaf",
        title: "AI-Driven Blockchain Systems",
        subtitle: "Predictive Analytics & Automation",
        description:
          "Combine artificial intelligence with blockchain to enable smarter, data-driven decision-making. Detect fraud, automate processes, and enhance system intelligence. Unlock new levels of efficiency with predictive insights and secure automation.",
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
<<<<<<< HEAD
    laptopImage: "https://i.pinimg.com/1200x/c6/02/7e/c6027ee944961baa460e01a27498e027.jpg",
    mobileImage: "https://i.pinimg.com/736x/7d/e7/85/7de78594889bd88d9c1abcf150ac699f.jpg",
=======
    laptopImage:
      "https://i.pinimg.com/1200x/c6/02/7e/c6027ee944961baa460e01a27498e027.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/7d/e7/85/7de78594889bd88d9c1abcf150ac699f.jpg",
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
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
          "Track blockchain performance with real-time analytics and transaction visualization. Gain insights into network speed, gas fees, and smart contract activities. Empower data-driven decisions with customizable reports and live monitoring tools.",
      },
      {
        id: "security",
        icon: "map",
        title: "End-to-End Security",
        description:
          "Safeguard your decentralized infrastructure using advanced encryption and cryptographic protocols. Implement multi-signature wallets, regular audits, and real-time threat detection. Maintain trust and integrity across all blockchain operations.",
      },
      {
        id: "integration",
        icon: "map",
        title: "Enterprise System Integration",
        description:
          "Connect blockchain solutions with ERP, CRM, and data systems for unified business operations. Enhance traceability and transparency through shared ledgers and smart contracts. Improve data synchronization and reduce operational silos.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Process Automation",
        description:
          "Streamline repetitive business workflows with blockchain-backed automation. Utilize smart contracts for secure, trigger-based transactions and approvals. Combine AI verification to ensure faster, error-free, and transparent processes.",
      },
    ],
    ctaText: "Consult Blockchain Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
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
