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
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
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
          "We design scalable and fault-tolerant architectures that align with your unique business operations. Our experts ensure seamless load distribution, high availability, and disaster recovery readiness. Each solution is engineered for flexibility, growth, and optimized performance.",
      },
      {
        id: "cloud-security",
        icon: "Leaf",
        title: "Cloud Security & Compliance",
        subtitle: "Protect Sensitive Business Data",
        description:
          "Safeguard your digital assets with advanced encryption, role-based access control, and multi-layer firewalls. We implement compliance standards such as GDPR, HIPAA, and ISO to ensure full regulatory alignment. Continuous monitoring keeps your cloud ecosystem protected around the clock.",
      },
      {
        id: "serverless-computing",
        icon: "Leaf",
        title: "Serverless Computing",
        subtitle: "Pay-as-You-Use Scalability",
        description:
          "Empower your applications with serverless infrastructure for faster deployment and reduced costs. We leverage AWS Lambda, Azure Functions, and Google Cloud Run for dynamic, event-driven systems. Scale seamlessly without managing servers while maintaining high reliability and efficiency.",
      },
      {
        id: "data-storage",
        icon: "Leaf",
        title: "Cloud Storage & Backup Solutions",
        subtitle: "Secure, Redundant, and Scalable",
        description:
          "Store and protect your business-critical data with secure, redundant cloud storage solutions. Our systems feature automated backups, instant recovery options, and seamless synchronization. Access data anytime, anywhere — with total confidence and enterprise-grade reliability.",
      },
      {
        id: "cloud-ai",
        icon: "Leaf",
        title: "AI & ML Cloud Integration",
        subtitle: "Intelligent Cloud Workflows",
        description:
          "Integrate artificial intelligence and machine learning into your cloud environment for predictive insights. Our team builds AI-driven data pipelines that enhance automation and real-time analytics. Turn raw data into actionable intelligence to accelerate smarter business decisions.",
      },
      {
        id: "cloud-monitoring",
        icon: "Leaf",
        title: "Cloud Monitoring & Optimization",
        subtitle: "Maximize Performance and Uptime",
        description:
          "Monitor infrastructure health with real-time performance analytics and predictive alerts. We continuously fine-tune workloads for speed, availability, and cost efficiency. Our proactive optimization ensures uninterrupted operations and a future-ready cloud ecosystem.",
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
<<<<<<< HEAD
    laptopImage: "https://i.pinimg.com/1200x/fa/29/70/fa2970d17e2bbc7603b171ec231b6a4e.jpg",
    mobileImage: "https://i.pinimg.com/736x/43/f6/0d/43f60dba8e0e3cd837697a954dae0915.jpg",
=======
    laptopImage:
      "https://i.pinimg.com/1200x/fa/29/70/fa2970d17e2bbc7603b171ec231b6a4e.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/43/f6/0d/43f60dba8e0e3cd837697a954dae0915.jpg",
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
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
          "Safeguard business operations with real-time data replication and automated failover mechanisms. Minimize downtime during outages with quick recovery protocols. Ensure seamless continuity across all systems, even during unexpected disruptions.",
      },
      {
        id: "api-integration",
        icon: "map",
        title: "API & DevOps Integration",
        description:
          "Connect your cloud environment with CI/CD pipelines, monitoring tools, and analytics systems. Automate deployments and enhance visibility across your development lifecycle. Improve collaboration and accelerate software delivery through unified DevOps practices.",
      },
      {
        id: "compliance",
        icon: "map",
        title: "Compliance & Governance Tools",
        description:
          "Maintain strict adherence to global security and regulatory standards. Automate compliance checks, audits, and detailed reporting. Strengthen data governance with transparent monitoring and real-time policy enforcement.",
      },
      {
        id: "support",
        icon: "map",
        title: "24/7 Cloud Support & Maintenance",
        description:
          "Receive continuous technical assistance from certified cloud experts anytime, anywhere. Monitor system performance proactively to prevent downtime. Ensure uninterrupted business operations with fast incident response and regular maintenance updates.",
      },
    ],
    ctaText: "Talk to Our Cloud Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
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
