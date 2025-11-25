import { SolutionConfig } from "@/types/solutions";

export const documentManagement: SolutionConfig = {
  slug: "document-management",

  banner: {
    title: "Optimize Workflow with",
    highlight: "Advanced Document Management Solutions",
    subtitle:
      "Secure, organize, and streamline your digital documents with our scalable document management systems for businesses of all sizes.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Document Management Solutions",
  },

  developerDetails: {
    heading: "Expert Developers in Document Management",
    subheading:
      "Our team specializes in creating secure, efficient, and fully customizable document management systems tailored to your business needs.",
    mainTitle: "Comprehensive Document Management Services",
    mainDescription:
      "We build solutions for storing, tracking, versioning, and collaborating on documents digitally. Our systems help organizations reduce paper usage, improve security, and enhance productivity.",
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    services: [
      {
        id: 1,
        title: "Document Storage & Organization",
        description:
          "Securely store all your files in a centralized repository with advanced organization and search capabilities.",
        icon: "/icons/folder.svg",
      },
      {
        id: 2,
        title: "Version Control & Tracking",
        description:
          "Keep track of all document versions, changes, and approvals with audit trails for regulatory compliance.",
        icon: "/icons/file.svg",
      },
      {
        id: 3,
        title: "Collaboration & Sharing",
        description:
          "Enable teams to collaborate on documents in real-time, manage access permissions, and track changes efficiently.",
        icon: "/icons/users.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "End-to-End Document Management Solutions",
    mainDescription:
      "Our document management solutions empower businesses to handle files securely, improve workflow efficiency, and ensure compliance. Automate repetitive tasks, streamline approvals, and track document lifecycles effectively.",
    items: [
      {
        id: "secure-storage",
        icon: "Leaf",
        title: "Secure Document Storage",
        subtitle: "Centralized & Protected",
        description:
          "Safeguard your data with encrypted cloud-based storage that ensures confidentiality and accessibility. Manage user permissions with role-based controls to prevent unauthorized access. Maintain document integrity while ensuring scalability for enterprise needs.",
      },
      {
        id: "workflow-automation",
        icon: "Leaf",
        title: "Workflow Automation",
        subtitle: "Simplify Approvals & Processes",
        description:
          "Automate document creation, routing, and approval workflows to minimize delays. Eliminate manual handling with intelligent triggers and notifications. Improve collaboration and ensure consistent process compliance across departments.",
      },
      {
        id: "digital-signature",
        icon: "Leaf",
        title: "Digital Signatures",
        subtitle: "Legally Binding & Secure",
        description:
          "Enable electronic signing of contracts and documents with legally recognized e-signature technology. Protect signers’ identities using encryption and multi-factor verification. Speed up agreement cycles while maintaining full legal compliance.",
      },
      {
        id: "search-analytics",
        icon: "Leaf",
        title: "Advanced Search & Analytics",
        subtitle: "Find Documents Instantly",
        description:
          "Quickly locate any file using intelligent search powered by metadata, tags, and OCR. Analyze document usage patterns and workflow efficiency through built-in analytics. Save time and make data-driven decisions with detailed visibility.",
      },
      {
        id: "compliance-management",
        icon: "Leaf",
        title: "Compliance Management",
        subtitle: "Stay Audit-Ready",
        description:
          "Maintain full regulatory compliance with audit trails, access logs, and version tracking. Implement retention policies to meet industry standards and avoid penalties. Ensure transparency and accountability in every document transaction.",
      },
      {
        id: "integration-support",
        icon: "Leaf",
        title: "Integration with Other Tools",
        subtitle: "Seamless System Connectivity",
        description:
          "Connect your document workflows with CRM, ERP, and email systems for unified data access. Sync cloud storage and productivity platforms for better collaboration. Enhance overall efficiency with smooth cross-platform integration.",
      },
    ],
    linkText: "Get Document Management Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Document Workflow & Management Software",
    subtitle:
      "Manage, track, and optimize your document processes using our feature-rich management software.",
    subtitleLink: { text: "document management software", url: "#" },
    laptopImage:
      "https://i.pinimg.com/1200x/5b/d0/87/5bd087f416f595447017841c2a6e6c84.jpg",
    mobileImage:
      "https://i.pinimg.com/1200x/0a/0e/dd/0a0edd40d7d14b7b25ac6bcf68ae814e.jpg",
    topFeatures: [
      {
        id: "cloud-storage",
        icon: "map",
        title: "Cloud-Based Document Storage",
        description:
          "Access, store, and manage documents securely from any device with full synchronization.",
      },
      {
        id: "access-control",
        icon: "map",
        title: "Role-Based Access Control",
        description:
          "Ensure only authorized personnel can view, edit, or share sensitive documents.",
      },
      {
        id: "audit-trails",
        icon: "map",
        title: "Audit Trails & Compliance",
        description:
          "Track changes and maintain regulatory compliance with detailed audit reports.",
      },
    ],
    bottomFeatures: [
      {
        id: "automation",
        icon: "map",
        title: "Workflow Automation",
        description:
          "Automate repetitive tasks, document routing, and approval cycles with intelligent workflows. Reduce manual errors while improving speed and accountability across teams. Enhance overall productivity through rule-based automation and real-time tracking.",
      },
      {
        id: "collaboration",
        icon: "map",
        title: "Team Collaboration",
        description:
          "Empower teams to work together with real-time editing, in-document commenting, and live notifications. Ensure transparency and version control throughout the document lifecycle. Boost productivity through centralized collaboration and seamless communication.",
      },
      {
        id: "security",
        icon: "map",
        title: "Data Security & Backup",
        description:
          "Safeguard all your digital assets with end-to-end encryption and secure access management. Schedule automatic backups to prevent data loss and ensure quick recovery. Maintain compliance with global data protection and privacy standards.",
      },
      {
        id: "integration",
        icon: "map",
        title: "API & Third-Party Integration",
        description:
          "Easily connect with ERP, CRM, and major cloud platforms for unified operations. Enable automated data synchronization and workflow continuity across systems. Simplify complex processes with powerful API integrations and seamless interoperability.",
      },
    ],
    ctaText: "Get Document Management Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is a document management system (DMS)?",
        answer:
          "A DMS is software that stores, organizes, tracks, and manages electronic documents, allowing businesses to improve efficiency and maintain compliance.",
      },
      {
        id: "2",
        question: "Can I access documents remotely?",
        answer:
          "Yes, our cloud-based document management solutions allow secure remote access from any device.",
      },
      {
        id: "3",
        question: "Does the system support version control?",
        answer:
          "Absolutely. All changes are tracked, and previous versions are stored for easy retrieval and auditing.",
      },
      {
        id: "4",
        question: "Is document collaboration supported?",
        answer:
          "Yes, multiple users can collaborate on documents with real-time updates, comments, and notifications.",
      },
      {
        id: "5",
        question: "Can the system integrate with other software?",
        answer:
          "Yes, our DMS can integrate with CRM, ERP, cloud storage, and email platforms for seamless workflow automation.",
      },
      {
        id: "6",
        question: "How secure is the document management system?",
        answer:
          "We implement encryption, access controls, and regular backups to ensure all your documents remain secure and compliant.",
      },
    ],
  },
};
