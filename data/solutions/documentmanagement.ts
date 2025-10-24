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
    image: "/images/document-management-laptop.png",
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
          "Store all documents in an encrypted cloud repository with role-based access controls to protect sensitive information.",
      },
      {
        id: "workflow-automation",
        icon: "Leaf",
        title: "Workflow Automation",
        subtitle: "Simplify Approvals & Processes",
        description:
          "Automate document routing, approvals, and notifications to reduce manual errors and accelerate business operations.",
      },
      {
        id: "digital-signature",
        icon: "Leaf",
        title: "Digital Signatures",
        subtitle: "Legally Binding & Secure",
        description:
          "Enable secure digital signing of contracts and forms directly within the system, ensuring authenticity and compliance.",
      },
      {
        id: "search-analytics",
        icon: "Leaf",
        title: "Advanced Search & Analytics",
        subtitle: "Find Documents Instantly",
        description:
          "Use powerful search tools, filters, and metadata analytics to locate and analyze documents quickly and efficiently.",
      },
      {
        id: "compliance-management",
        icon: "Leaf",
        title: "Compliance Management",
        subtitle: "Stay Audit-Ready",
        description:
          "Track document history and maintain regulatory compliance with audit trails, retention policies, and reporting tools.",
      },
      {
        id: "integration-support",
        icon: "Leaf",
        title: "Integration with Other Tools",
        subtitle: "Seamless System Connectivity",
        description:
          "Integrate with CRM, ERP, email platforms, and cloud storage services for a connected document workflow.",
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
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
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
          "Automate repetitive tasks and approvals to improve efficiency and reduce errors.",
      },
      {
        id: "collaboration",
        icon: "map",
        title: "Team Collaboration",
        description:
          "Collaborate seamlessly with real-time document editing, commenting, and notifications.",
      },
      {
        id: "security",
        icon: "map",
        title: "Data Security & Backup",
        description:
          "Keep documents safe with encrypted storage, backup systems, and disaster recovery plans.",
      },
      {
        id: "integration",
        icon: "map",
        title: "API & Third-Party Integration",
        description:
          "Connect with ERP, CRM, and cloud storage systems to create a seamless workflow.",
      },
    ],
    ctaText: "Get Document Management Experts",
    onCtaClick: () => {},
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
