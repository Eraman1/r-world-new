import { SolutionConfig } from "@/types/solutions";

export const googlecloude: SolutionConfig = {
  slug: "googlecloude",

  banner: {
    title: "Scale Smarter with",
    highlight: "Amazon Web Services (AWS) Cloud Solutions",
    subtitle:
      "Unlock agility, scalability, and innovation with AWS-powered infrastructure, automation, and cloud-native solutions tailored for modern enterprises.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get AWS Solutions",
  },

  developerDetails: {
    heading: "AWS-Certified Cloud Architects & DevOps Engineers",
    subheading:
      "Our AWS specialists help you design, deploy, and manage secure, scalable, and cost-efficient cloud environments using the latest AWS technologies.",
    mainTitle: "End-to-End AWS Cloud Development Services",
    mainDescription:
      "We empower organizations with AWS-based solutions — from cloud migration and serverless applications to AI, data analytics, and DevOps automation. Whether you’re modernizing infrastructure or launching cloud-native apps, we deliver performance and security at scale.",
    image: "/images/aws-laptop.png",
    services: [
      {
        id: 1,
        title: "Cloud Migration Services",
        description:
          "Seamlessly migrate your on-premise systems to AWS with minimal downtime, ensuring improved performance and lower costs.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 2,
        title: "DevOps Automation",
        description:
          "We build CI/CD pipelines on AWS using CodePipeline, CodeBuild, and Elastic Beanstalk for faster, automated deployments.",
        icon: "/icons/settings.svg",
      },
      {
        id: 3,
        title: "Serverless Application Development",
        description:
          "Leverage AWS Lambda, API Gateway, and DynamoDB to create lightweight, event-driven applications that scale automatically.",
        icon: "/icons/server.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "AWS Cloud & Infrastructure Solutions",
    mainDescription:
      "Accelerate innovation with cloud-native AWS solutions — from compute and storage to AI and data analytics — built for scalability, reliability, and cost efficiency.",
    items: [
      {
        id: "compute",
        icon: "Shield",
        title: "Compute & Scalability",
        subtitle: "Elastic Cloud Infrastructure",
        description:
          "Deploy scalable compute resources using Amazon EC2, ECS, and Lambda to handle workloads of any size efficiently.",
      },
      {
        id: "storage",
        icon: "Shield",
        title: "Data Storage & Backup",
        subtitle: "Reliable Data Management",
        description:
          "Use Amazon S3, EBS, and Glacier for secure, redundant, and cost-effective data storage with automated backup solutions.",
      },
      {
        id: "security",
        icon: "Shield",
        title: "Security & Compliance",
        subtitle: "Enterprise-Grade Protection",
        description:
          "Implement IAM, KMS, and GuardDuty to secure your cloud infrastructure and ensure compliance with global standards.",
      },
      {
        id: "machine-learning",
        icon: "Shield",
        title: "AI & Machine Learning",
        subtitle: "Intelligent Cloud Systems",
        description:
          "Utilize Amazon SageMaker and AI services for predictive analytics, personalization, and intelligent automation.",
      },
      {
        id: "networking",
        icon: "Shield",
        title: "Networking & Content Delivery",
        subtitle: "Faster Global Reach",
        description:
          "Optimize performance using AWS CloudFront, Route 53, and VPC for seamless global connectivity and traffic management.",
      },
      {
        id: "monitoring",
        icon: "Shield",
        title: "Monitoring & Performance",
        subtitle: "Real-Time Cloud Insights",
        description:
          "Monitor and optimize system performance using CloudWatch and X-Ray for complete operational visibility.",
      },
    ],
    linkText: "Explore AWS Services",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "AWS Cloud Management & Optimization",
    subtitle:
      "Empower your teams with cloud-native management tools to monitor, optimize, and automate AWS infrastructure for maximum performance.",
    subtitleLink: { text: "AWS cloud management", url: "#" },
    laptopImage: "https://i.pinimg.com/1200x/52/af/00/52af009be59edf67607353fbc610d904.jpg",
    mobileImage: "https://i.pinimg.com/736x/40/19/50/401950f6f52e0594cb763ae089bce8a9.jpg",
    topFeatures: [
      {
        id: "cost-optimization",
        icon: "map",
        title: "Cost Optimization Tools",
        description:
          "Analyze cloud usage patterns and reduce costs using AWS Cost Explorer and Trusted Advisor recommendations.",
      },
      {
        id: "auto-scaling",
        icon: "map",
        title: "Auto Scaling & Load Balancing",
        description:
          "Automatically adjust compute capacity with AWS Auto Scaling and Elastic Load Balancer for stable performance.",
      },
      {
        id: "infrastructure-as-code",
        icon: "map",
        title: "Infrastructure as Code (IaC)",
        description:
          "Automate cloud resource management using AWS CloudFormation and Terraform for versioned, repeatable setups.",
      },
    ],
    bottomFeatures: [
      {
        id: "disaster-recovery",
        icon: "map",
        title: "Disaster Recovery Solutions",
        description:
          "Ensure business continuity with multi-region backup and recovery strategies using AWS Backup and CloudEndure.",
      },
      {
        id: "integration",
        icon: "map",
        title: "Integration with Third-Party Tools",
        description:
          "Connect AWS with CI/CD, CRM, and analytics platforms for streamlined operations and continuous innovation.",
      },
      {
        id: "compliance",
        icon: "map",
        title: "Compliance & Governance",
        description:
          "Meet regulatory standards such as GDPR, HIPAA, and SOC 2 using AWS’s compliance frameworks and audit trails.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Workflow Automation",
        description:
          "Automate recurring operations and system responses with AWS Step Functions and EventBridge.",
      },
    ],
    ctaText: "Get AWS Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What AWS services do you support?",
        answer:
          "We support a full range of AWS services including EC2, S3, RDS, Lambda, CloudFront, DynamoDB, SageMaker, and more — covering compute, storage, AI, and networking.",
      },
      {
        id: "2",
        question: "Can you migrate my on-premise servers to AWS?",
        answer:
          "Yes, we provide end-to-end cloud migration services, ensuring secure, seamless transition with zero data loss and minimal downtime.",
      },
      {
        id: "3",
        question: "Do you provide AWS DevOps and CI/CD automation?",
        answer:
          "Absolutely. We design CI/CD pipelines using AWS CodePipeline, CodeBuild, and Elastic Beanstalk to automate your deployment lifecycle.",
      },
      {
        id: "4",
        question: "How do you ensure cloud security on AWS?",
        answer:
          "We implement AWS IAM, KMS, GuardDuty, and Shield to secure your infrastructure, data, and applications from threats and breaches.",
      },
      {
        id: "5",
        question: "Can AWS reduce infrastructure costs for my business?",
        answer:
          "Yes, AWS offers flexible pay-as-you-go pricing and auto-scaling capabilities, helping you optimize costs based on usage patterns.",
      },
      {
        id: "6",
        question: "Do you offer AWS consultation and support?",
        answer:
          "Yes, our AWS-certified engineers provide architecture planning, cost optimization, deployment support, and continuous monitoring.",
      },
    ],
  },
};
