import { SolutionConfig } from "@/types/solutions";

export const digitalAssetManagement: SolutionConfig = {
  slug: "digital-asset-management",

  banner: {
    title: "Optimize Your Workflow with",
    highlight: "Digital Asset Management Solutions",
    subtitle:
      "Centralize, organize, and streamline your digital assets for faster collaboration, better security, and enhanced productivity.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get DAM Solutions",
  },

  developerDetails: {
    heading: "Expert Developers in Digital Asset Management",
    subheading:
      "We help businesses manage their digital content efficiently, enabling teams to access, share, and repurpose assets with ease.",
    mainTitle: "Comprehensive Digital Asset Management Services",
    mainDescription:
      "Our team implements scalable DAM solutions that provide a centralized repository for images, videos, documents, and creative files. Improve collaboration, version control, and content delivery while keeping your digital assets secure.",
    image: "/images/dam-laptop.png",
    services: [
      {
        id: 1,
        title: "Centralized Asset Storage",
        description:
          "Securely store all your digital assets in a single location for easy access, retrieval, and sharing across teams.",
        icon: "/icons/cloud-storage.svg",
      },
      {
        id: 2,
        title: "Metadata & Tagging",
        description:
          "Organize and categorize your assets using customizable metadata, tags, and search functionality to improve discoverability.",
        icon: "/icons/tag.svg",
      },
      {
        id: 3,
        title: "Version Control & Workflow",
        description:
          "Manage asset versions, track changes, and implement approval workflows to streamline collaboration and maintain consistency.",
        icon: "/icons/workflow.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Digital Asset Management for Enterprises & Creatives",
    mainDescription:
      "Our DAM solutions allow teams to manage large volumes of digital content effectively. Streamline content creation, distribution, and archival with security, scalability, and real-time collaboration.",
    items: [
      {
        id: "secure-storage",
        icon: "Leaf",
        title: "Secure Asset Storage",
        subtitle: "Protect Critical Digital Content",
        description:
          "We implement secure storage solutions with encryption and access control, ensuring your digital assets are safe from unauthorized access or loss.",
      },
      {
        id: "workflow-automation",
        icon: "Leaf",
        title: "Workflow Automation",
        subtitle: "Efficient Collaboration & Approval",
        description:
          "Automate repetitive tasks such as asset approvals, notifications, and distribution to save time and maintain consistency across teams.",
      },
      {
        id: "content-delivery",
        icon: "Leaf",
        title: "Optimized Content Delivery",
        subtitle: "Faster Publishing & Distribution",
        description:
          "Distribute assets across multiple platforms, including web, mobile, and social media, ensuring timely content delivery to target audiences.",
      },
      {
        id: "analytics-reporting",
        icon: "Leaf",
        title: "Asset Analytics & Reporting",
        subtitle: "Track Asset Usage & Performance",
        description:
          "Monitor how digital assets are used, viewed, and shared to make informed decisions about content optimization and reuse.",
      },
      {
        id: "integration",
        icon: "Leaf",
        title: "Third-Party Integrations",
        subtitle: "Seamless Software Compatibility",
        description:
          "Integrate your DAM system with creative, marketing, and project management tools to create an end-to-end content ecosystem.",
      },
      {
        id: "scalability",
        icon: "Leaf",
        title: "Scalable Solutions",
        subtitle: "Grow with Your Organization",
        description:
          "Our DAM solutions are designed to handle increasing volumes of digital assets as your organization and content library grow.",
      },
    ],
    linkText: "Get Digital Asset Management Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Enterprise Digital Asset Management Platforms",
    subtitle:
      "Manage, secure, and distribute digital content efficiently across your organization.",
    subtitleLink: { text: "digital asset management platform", url: "#" },
    laptopImage: "/images/dam-management.jpg",
    mobileImage: "/images/dam-management-mobile.jpg",
    topFeatures: [
      {
        id: "central-storage",
        icon: "map",
        title: "Centralized Storage",
        description:
          "All assets in one place with easy search and retrieval capabilities for team members and stakeholders.",
      },
      {
        id: "permissions",
        icon: "map",
        title: "User Permissions & Access",
        description:
          "Define roles and permissions to ensure only authorized users can access, modify, or distribute assets.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Automation & Workflows",
        description:
          "Automate content lifecycle processes such as approvals, notifications, and archiving for greater efficiency.",
      },
    ],
    bottomFeatures: [
      {
        id: "analytics",
        icon: "map",
        title: "Analytics & Reporting",
        description:
          "Gain insights into asset usage, performance, and team activity to optimize workflows and decision-making.",
      },
      {
        id: "integration",
        icon: "map",
        title: "API Integration",
        description:
          "Seamlessly integrate DAM with creative, marketing, and project management platforms for end-to-end workflows.",
      },
      {
        id: "security",
        icon: "map",
        title: "Data Security & Backup",
        description:
          "Ensure your assets are protected with encryption, automated backups, and secure cloud storage solutions.",
      },
      {
        id: "multi-format",
        icon: "map",
        title: "Multi-Format Support",
        description:
          "Store and deliver assets in any format — images, videos, documents, 3D models, or multimedia files.",
      },
    ],
    ctaText: "Talk to DAM Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is Digital Asset Management (DAM)?",
        answer:
          "DAM is a system to organize, store, and retrieve digital assets such as images, videos, documents, and multimedia files efficiently.",
      },
      {
        id: "2",
        question: "Can DAM integrate with my existing software?",
        answer:
          "Yes, DAM solutions can integrate with creative tools, CMS, marketing platforms, and project management software for seamless workflows.",
      },
      {
        id: "3",
        question: "How secure are the assets in a DAM system?",
        answer:
          "Digital assets are protected using encryption, access controls, and secure cloud storage, ensuring data integrity and privacy.",
      },
      {
        id: "4",
        question: "Does DAM support team collaboration?",
        answer:
          "Absolutely. DAM allows multiple users to access, edit, comment, and approve assets in real-time, improving team productivity.",
      },
      {
        id: "5",
        question: "Can I track how my assets are used?",
        answer:
          "Yes, most DAM systems provide analytics and reporting to monitor asset usage, performance, and workflow efficiency.",
      },
      {
        id: "6",
        question: "Is DAM scalable for growing organizations?",
        answer:
          "Yes, DAM platforms are scalable to handle increasing volumes of digital assets as your team and content library grow.",
      },
    ],
  },
};
