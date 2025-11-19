import { SolutionConfig } from "@/types/solutions";

export const aws: SolutionConfig = {
  slug: "aws",

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
        "Deploy highly scalable compute resources through Amazon EC2, ECS, and Lambda for optimal workload flexibility. Automatically adjust capacity based on demand and minimize downtime. Achieve faster performance while optimizing cloud costs across all environments.",
    },
    {
      id: "storage",
      icon: "Shield",
      title: "Data Storage & Backup",
      subtitle: "Reliable Data Management",
      description:
        "Securely manage structured and unstructured data with Amazon S3, EBS, and Glacier. Benefit from automated data lifecycle policies and tiered storage options. Ensure business continuity with high availability and intelligent backup solutions.",
    },
    {
      id: "security",
      icon: "Shield",
      title: "Security & Compliance",
      subtitle: "Enterprise-Grade Protection",
      description:
        "Strengthen your cloud defenses using AWS IAM, KMS, and GuardDuty for identity, encryption, and threat management. Maintain compliance with global standards like ISO, HIPAA, and GDPR. Safeguard workloads with real-time security monitoring and alerts.",
    },
    {
      id: "machine-learning",
      icon: "Shield",
      title: "AI & Machine Learning",
      subtitle: "Intelligent Cloud Systems",
      description:
        "Build and deploy AI-driven applications using Amazon SageMaker, Rekognition, and Comprehend. Leverage predictive analytics for smarter business insights. Automate workflows with machine learning models that evolve continuously with your data.",
    },
    {
      id: "networking",
      icon: "Shield",
      title: "Networking & Content Delivery",
      subtitle: "Faster Global Reach",
      description:
        "Deliver seamless connectivity and low-latency experiences using AWS CloudFront, Route 53, and VPC. Optimize network routing for high-speed content delivery worldwide. Enhance scalability and availability with robust global infrastructure.",
    },
    {
      id: "monitoring",
      icon: "Shield",
      title: "Monitoring & Performance",
      subtitle: "Real-Time Cloud Insights",
      description:
        "Gain full operational visibility through AWS CloudWatch and X-Ray. Track application metrics, detect anomalies, and resolve issues proactively. Improve reliability and performance with continuous monitoring and automated alerts.",
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
    laptopImage: "https://i.pinimg.com/736x/34/16/90/341690eb33f2fd5749851cb031ac5a1f.jpg",
    mobileImage: "https://i.pinimg.com/736x/3d/f1/be/3df1be1c703f55ffd5cef47a3ad4ef12.jpg",
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
      "Protect your critical workloads with multi-region backup and failover strategies powered by AWS Backup and CloudEndure. Minimize downtime through automated recovery and rapid data restoration. Maintain operational resilience with real-time replication and monitoring tools.",
  },
  {
    id: "integration",
    icon: "map",
    title: "Integration with Third-Party Tools",
    description:
      "Seamlessly connect AWS environments with CI/CD pipelines, CRM platforms, and analytics tools. Enhance collaboration across teams through unified data flow and process automation. Drive continuous innovation with scalable integrations that adapt to business growth.",
  },
  {
    id: "compliance",
    icon: "map",
    title: "Compliance & Governance",
    description:
      "Achieve full compliance with global standards like GDPR, HIPAA, and SOC 2 using AWS governance frameworks. Implement policy-based access, auditing, and data encryption at every layer. Maintain transparency with automated compliance reporting and real-time insights.",
  },
  {
    id: "automation",
    icon: "map",
    title: "Workflow Automation",
    description:
      "Automate repetitive operations using AWS Step Functions and EventBridge for seamless orchestration. Improve system reliability through intelligent event-driven workflows. Accelerate deployment cycles while reducing manual effort and operational costs.",
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
