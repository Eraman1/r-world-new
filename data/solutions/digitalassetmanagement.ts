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
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
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
      "Our DAM solutions empower organizations to efficiently organize, store, and distribute digital content. Streamline creation, collaboration, and delivery while maintaining complete security and scalability. Manage brand assets seamlessly across teams and platforms in real time.",
    items: [
      {
        id: "secure-storage",
        icon: "Leaf",
        title: "Secure Asset Storage",
        subtitle: "Protect Critical Digital Content",
        description:
          "Ensure the safety of your digital assets with advanced encryption and multi-layer access controls. Our storage systems safeguard against unauthorized access, accidental loss, and data corruption. Keep all creative and marketing files protected in one centralized, secure repository.",
      },
      {
        id: "workflow-automation",
        icon: "Leaf",
        title: "Workflow Automation",
        subtitle: "Efficient Collaboration & Approval",
        description:
          "Automate repetitive processes like version approvals, tagging, and asset distribution across teams. Enhance productivity with AI-driven task management and smart notifications. Maintain creative consistency while reducing manual effort and project delays.",
      },
      {
        id: "content-delivery",
        icon: "Leaf",
        title: "Optimized Content Delivery",
        subtitle: "Faster Publishing & Distribution",
        description:
          "Deliver assets instantly across websites, mobile apps, and social platforms with optimized performance. Use intelligent caching and CDN support to ensure speed and reliability. Simplify multi-channel publishing for global audiences with minimal manual effort.",
      },
      {
        id: "analytics-reporting",
        icon: "Leaf",
        title: "Asset Analytics & Reporting",
        subtitle: "Track Asset Usage & Performance",
        description:
          "Gain visibility into asset engagement, downloads, and usage trends through detailed analytics dashboards. Identify top-performing visuals and optimize underutilized content. Use real-time insights to drive smarter content strategies and improve ROI.",
      },
      {
        id: "integration",
        icon: "Leaf",
        title: "Third-Party Integrations",
        subtitle: "Seamless Software Compatibility",
        description:
          "Connect effortlessly with creative suites, CMS platforms, and marketing automation tools. Streamline asset flow between design, production, and publishing systems. Achieve a unified content ecosystem that supports your existing digital infrastructure.",
      },
      {
        id: "scalability",
        icon: "Leaf",
        title: "Scalable Solutions",
        subtitle: "Grow with Your Organization",
        description:
          "Easily scale your DAM platform to accommodate expanding content libraries and teams. Our cloud-ready architecture ensures smooth performance as your business grows. Stay flexible and future-ready with infrastructure built for enterprise-level scalability.",
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
<<<<<<< HEAD
    laptopImage: "https://i.pinimg.com/1200x/45/fd/eb/45fdeb22c49384df0489c279503b268d.jpg",
    mobileImage: "https://i.pinimg.com/736x/5a/f8/c2/5af8c2c5d21275aff74c4f10ba1a68bb.jpg",
=======
    laptopImage:
      "https://i.pinimg.com/1200x/45/fd/eb/45fdeb22c49384df0489c279503b268d.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/5a/f8/c2/5af8c2c5d21275aff74c4f10ba1a68bb.jpg",
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
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
          "Gain deep insights into asset usage, performance trends, and team productivity. Track content engagement and identify optimization opportunities. Use real-time analytics to drive smarter creative and operational decisions.",
      },
      {
        id: "integration",
        icon: "map",
        title: "API Integration",
        description:
          "Seamlessly connect your DAM with marketing, creative, and project management tools. Automate workflows across platforms to reduce manual effort. Enable smooth data exchange for consistent branding and faster execution.",
      },
      {
        id: "security",
        icon: "map",
        title: "Data Security & Backup",
        description:
          "Protect all your digital assets with enterprise-grade encryption and access controls. Schedule automated backups to prevent data loss. Keep your files safe and recoverable with secure cloud-based storage solutions.",
      },
      {
        id: "multi-format",
        icon: "map",
        title: "Multi-Format Support",
        description:
          "Manage and deliver assets across various file types, including images, videos, and 3D models. Optimize every format for web, print, and mobile use. Ensure compatibility and performance across all creative and publishing platforms.",
      },
    ],
    ctaText: "Talk to DAM Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
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
