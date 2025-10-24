import { SolutionConfig } from "@/types/solutions";

export const cloud: SolutionConfig = {
  slug: "cloud",

  banner: {
    title: "Empower Your Business with",
    highlight: "Cloud Computing & Infrastructure Solutions",
    subtitle:
      "Scale, secure, and accelerate your digital operations with our advanced cloud architecture, migration, and management services.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore Cloud Solutions",
  },

  developerDetails: {
    heading: "Certified Cloud Experts & Architects",
    subheading:
      "We design, build, and optimize cloud infrastructures to deliver performance, resilience, and scalability across all business environments.",
    mainTitle: "End-to-End Cloud Development & Management",
    mainDescription:
      "Our certified developers and engineers specialize in cloud-native application development, infrastructure automation, and multi-cloud deployment strategies across AWS, Azure, and Google Cloud Platform.",
    image: "/images/cloud-infrastructure.png",
    services: [
      {
        id: 1,
        title: "Cloud Migration & Modernization",
        description:
          "We ensure a seamless transition of your legacy systems to the cloud with zero downtime and maximum data integrity.",
        icon: "/icons/cloud-upload.svg",
      },
      {
        id: 2,
        title: "DevOps & Automation",
        description:
          "Our DevOps experts implement CI/CD pipelines, containerization, and infrastructure as code for faster and more reliable releases.",
        icon: "/icons/settings.svg",
      },
      {
        id: 3,
        title: "Multi-Cloud Integration",
        description:
          "We integrate AWS, Azure, and Google Cloud platforms to achieve high availability, disaster recovery, and global scalability.",
        icon: "/icons/network.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Advanced Cloud Infrastructure & Services",
    mainDescription:
      "We deliver secure, high-performing, and cost-effective cloud environments. From architecture design to monitoring, our cloud solutions empower enterprises to innovate and scale effortlessly.",
    items: [
      {
        id: "cloud-architecture",
        icon: "Leaf",
        title: "Cloud Architecture Design",
        subtitle: "Custom Multi-Tier Infrastructure",
        description:
          "We design scalable, fault-tolerant, and high-availability architectures tailored to your business workload.",
      },
      {
        id: "cloud-security",
        icon: "Leaf",
        title: "Cloud Security & Compliance",
        subtitle: "Protect Sensitive Business Data",
        description:
          "Our team ensures top-tier security with encryption, access control, and compliance with GDPR, HIPAA, and ISO standards.",
      },
      {
        id: "serverless-computing",
        icon: "Leaf",
        title: "Serverless Computing",
        subtitle: "Pay-as-You-Use Scalability",
        description:
          "We develop lightweight, event-driven applications using AWS Lambda, Azure Functions, and Google Cloud Run for cost efficiency.",
      },
      {
        id: "data-storage",
        icon: "Leaf",
        title: "Cloud Storage & Backup Solutions",
        subtitle: "Secure, Redundant, and Scalable",
        description:
          "Get reliable cloud storage, real-time synchronization, and automated backup systems with instant data recovery.",
      },
      {
        id: "cloud-ai",
        icon: "Leaf",
        title: "AI & ML Cloud Integration",
        subtitle: "Intelligent Cloud Workflows",
        description:
          "We integrate AI/ML pipelines with cloud data lakes to drive insights, automation, and smarter decision-making.",
      },
      {
        id: "cloud-monitoring",
        icon: "Leaf",
        title: "Cloud Monitoring & Optimization",
        subtitle: "Maximize Performance and Uptime",
        description:
          "With real-time analytics and cost tracking, we continuously optimize workloads for performance and cost efficiency.",
      },
    ],
    linkText: "Get Cloud Consultation",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Cloud Management & Automation Platforms",
    subtitle:
      "Simplify cloud operations with our integrated management tools and automation frameworks for continuous delivery and performance monitoring.",
    subtitleLink: { text: "cloud management", url: "#" },
    laptopImage: "/images/cloud-management.jpg",
    mobileImage: "/images/cloud-management-mobile.jpg",
    topFeatures: [
      {
        id: "monitoring",
        icon: "map",
        title: "Centralized Monitoring Dashboard",
        description:
          "Track real-time performance, uptime, and security metrics across multi-cloud environments from a single interface.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Automation & Orchestration",
        description:
          "Automate infrastructure provisioning, patching, and scaling using Terraform, Ansible, and Kubernetes.",
      },
      {
        id: "billing",
        icon: "map",
        title: "Cost & Resource Optimization",
        description:
          "We help you identify underutilized resources and optimize spend with intelligent cost analytics.",
      },
    ],
    bottomFeatures: [
      {
        id: "disaster-recovery",
        icon: "map",
        title: "Disaster Recovery as a Service (DRaaS)",
        description:
          "Protect your business continuity with automated data replication and failover systems.",
      },
      {
        id: "api-integration",
        icon: "map",
        title: "API & DevOps Integration",
        description:
          "Integrate your cloud management with CI/CD tools, monitoring systems, and data analytics pipelines.",
      },
      {
        id: "compliance",
        icon: "map",
        title: "Compliance & Governance Tools",
        description:
          "Ensure adherence to security and regulatory standards with automated auditing and reporting systems.",
      },
      {
        id: "support",
        icon: "map",
        title: "24/7 Cloud Support & Maintenance",
        description:
          "Get around-the-clock support from certified engineers to maintain uptime and respond to incidents instantly.",
      },
    ],
    ctaText: "Talk to Our Cloud Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "Which cloud platforms do you support?",
        answer:
          "We work with AWS, Microsoft Azure, Google Cloud Platform, and hybrid or private cloud infrastructures depending on your business needs.",
      },
      {
        id: "2",
        question: "Can you migrate our on-premise servers to the cloud?",
        answer:
          "Yes, we handle full-scale cloud migration with minimal downtime, ensuring complete data integrity and post-deployment testing.",
      },
      {
        id: "3",
        question: "Do you offer managed cloud services?",
        answer:
          "Absolutely. Our managed services include monitoring, updates, performance tuning, cost optimization, and security management.",
      },
      {
        id: "4",
        question: "What is your approach to cloud security?",
        answer:
          "We apply multi-layered security using encryption, IAM policies, VPNs, and compliance frameworks like ISO 27001 and SOC 2.",
      },
      {
        id: "5",
        question: "Do you support hybrid or multi-cloud setups?",
        answer:
          "Yes, we specialize in hybrid and multi-cloud architectures to combine flexibility, redundancy, and cost efficiency.",
      },
      {
        id: "6",
        question: "Can you automate our cloud workflows?",
        answer:
          "Yes. We use tools like Terraform, Kubernetes, and Jenkins to automate deployments, scaling, and resource management.",
      },
    ],
  },
};
