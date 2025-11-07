import { OnDemandDevelopersConfig } from "@/types/onDemandDevelopers";

export const aws: OnDemandDevelopersConfig = {
  slug: "aws",
  banner: {
    title: "Empower Your Business with",
    highlight: "AWS Cloud Development Experts",
    subtitle:
      "Hire top-tier AWS developers to design, deploy, and scale secure cloud applications. We help you build resilient infrastructures and optimize workloads for cost efficiency, performance, and reliability.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Hire AWS Developers",
  },

  features: [
    {
      icon: "cloud",
      title: "COST-EFFICIENT CLOUD SOLUTIONS:",
      items: [
        "Pay only for resources you use with fully optimized AWS architectures.",
        "Reduce operational overhead through automation and serverless setups.",
        "Save up to 70% on infrastructure costs while improving scalability and uptime.",
      ],
    },
    {
      icon: "shield",
      title: "SECURITY-FIRST CLOUD DEVELOPMENT:",
      items: [
        "Implement identity and access management with AWS IAM and Cognito.",
        "Encrypt data in transit and at rest using AWS KMS and security best practices.",
        "Ensure compliance with ISO, SOC, and GDPR standards for your cloud workloads.",
      ],
    },
    {
      icon: "users",
      title: "DEDICATED CLOUD DEVELOPMENT TEAM:",
      items: [
        "Access certified AWS architects, developers, and DevOps specialists.",
        "Collaborate directly with experts through agile development sprints.",
        "Scale your team up or down depending on project requirements and timelines.",
      ],
    },
    {
      icon: "server",
      title: "END-TO-END CLOUD SERVICES:",
      items: [
        "From migration and infrastructure setup to monitoring and automation.",
        "Deliver high-availability systems across EC2, ECS, Lambda, and Kubernetes.",
        "Leverage over a decade of experience in enterprise-grade AWS deployments.",
      ],
    },
  ],

  solutions: {
  mainTitle: "Custom AWS Development Solutions",
  mainDescription:
    "We provide complete AWS development services — from cloud-native application design to enterprise migration and automation. Our team builds scalable, reliable, and secure architectures tailored to your business needs. Each solution focuses on performance optimization, automation, and cost control. We ensure seamless integration, high uptime, and long-term scalability across all AWS environments.",
  items: [
    {
      id: "cloud-apps",
      icon: "Leaf",
      title: "Cloud Application Development",
      description:
        "Build and deploy scalable, fault-tolerant applications using AWS Lambda, EC2, and ECS. Design resilient architectures that handle traffic surges and ensure business continuity. Implement high availability and load balancing for uninterrupted performance. Optimize compute resources to minimize cloud expenses and maximize ROI.  Deliver secure, cloud-native apps that scale effortlessly with your growth.",
    },
    {
      id: "migration",
      icon: "Leaf",
      title: "Cloud Migration & Modernization",
      description:
        "Migrate legacy infrastructure to AWS with minimal downtime and zero data loss. Refactor applications into microservices for improved agility and maintainability. Adopt modern frameworks optimized for the AWS ecosystem and services. Enhance app performance through cloud-native modernization and automation.  Ensure smooth transitions backed by migration blueprints and best practices.",
    },
    {
      id: "devops",
      icon: "Leaf",
      title: "AWS DevOps Automation",
      description:
        "Implement automated pipelines with AWS CodePipeline, CloudFormation, and Terraform. Accelerate software delivery with CI/CD integrations and rollback mechanisms. Monitor builds, testing, and deployments in real time for continuous delivery. Reduce human error by automating repetitive operational tasks effectively.  Achieve higher productivity with scalable and reliable DevOps workflows.",
    },
    {
      id: "security",
      icon: "Leaf",
      title: "Cloud Security & Compliance",
      description:
        "Strengthen cloud security with IAM, GuardDuty, and KMS encryption. Establish zero-trust frameworks and multi-layer access controls. Monitor threats and respond using AWS Security Hub and CloudTrail. Ensure compliance with ISO, GDPR, and HIPAA-certified cloud standards. Build a robust defense against evolving cyber threats and vulnerabilities.",
    },
    {
      id: "data-analytics",
      icon: "Leaf",
      title: "Big Data & Analytics on AWS",
      description:
        "Design and deploy analytics pipelines using Redshift, Glue, and Athena. Process structured and unstructured data for powerful business insights. Enable real-time dashboards and visualizations through QuickSight. Build machine learning workflows with SageMaker for predictive modeling. Empower smarter decisions with scalable and automated data solutions.",
    },
    {
      id: "support",
      icon: "Leaf",
      title: "Cloud Support & Optimization",
      description:
        "Monitor system performance through CloudWatch and AWS Trusted Advisor. Identify inefficiencies and optimize cost allocation for better ROI. Automate scaling and backups to maintain continuous application health. Apply patch management and updates without service interruptions. Ensure 24/7 support, maximum uptime, and infrastructure resilience.",
    },
  ],
  linkText: "Hire AWS Cloud Developers",
  linkUrl: "/contact-us",
},

topSkill: {
  mainTitle: "Expert AWS Development Skills",
  mainDescription:
    "Our certified AWS developers bring hands-on expertise across the entire cloud lifecycle. From architecture design and DevOps automation to analytics and security, we deliver high-performance cloud solutions. We specialize in cost optimization, scalability, and continuous delivery. Every project aligns with AWS best practices and your organization’s digital transformation goals.",
  items: [
    {
      id: "serverless",
      icon: "Leaf",
      title: "Serverless Architecture Development",
      link: "/contact-us",
      description:
        "Build event-driven apps using AWS Lambda and API Gateway for cost efficiency. Eliminate server management and scale functions dynamically with demand. Improve performance consistency with managed services and event triggers.  Simplify infrastructure by focusing solely on logic and application flow. Ensure faster time-to-market through a fully serverless ecosystem.",
    },
    {
      id: "infrastructure",
      icon: "Leaf",
      title: "Infrastructure as Code (IaC)",
      link: "/contact-us",
      description:
        "Automate infrastructure creation using CloudFormation and Terraform scripts. Define reproducible environments for testing, staging, and production. Enhance deployment reliability through version-controlled configurations.  Reduce manual setup errors with declarative, scalable provisioning. Enable consistent and secure infrastructure management across regions.",
    },
    {
      id: "containerization",
      icon: "Leaf",
      title: "Containerization with AWS ECS & EKS",
      link: "/contact-us",
      description:
        "Deploy and manage containers using Docker, ECS, and Kubernetes (EKS). Streamline microservice deployment with efficient orchestration tools. Automate scaling and updates for smooth multi-environment rollouts.  Integrate with CI/CD pipelines for faster build and deployment cycles. Enhance reliability, portability, and infrastructure flexibility.",
    },
    {
      id: "security",
      icon: "Leaf",
      title: "Cloud Security Implementation",
      link: "/contact-us",
      description:
        "Secure applications using IAM roles, security groups, and encryption tools. Implement identity federation and least-privilege access principles. Automate vulnerability scanning and threat detection across workloads. Ensure compliance with industry standards like SOC 2 and GDPR. Maintain a proactive defense posture through continuous monitoring.",
    },
    {
      id: "automation",
      icon: "Leaf",
      title: "DevOps & Automation Solutions",
      link: "/contact-us",
      description:
        "Automate CI/CD workflows using AWS CodeBuild, Jenkins, and CloudWatch. Implement test automation for faster, bug-free deployments. Enable auto-scaling and recovery using event-driven configurations. Integrate performance monitoring with alert-based notifications. Ensure stable, high-velocity releases with minimal downtime.",
    },
    {
      id: "data",
      icon: "Leaf",
      title: "Data Engineering & Analytics",
      link: "/contact-us",
      description:
        "Build cloud-native data lakes using Glue, S3, and Redshift clusters. Transform raw data into actionable insights using Athena and QuickSight. Create automated ETL pipelines optimized for real-time analytics. Integrate ML models for predictive and prescriptive data outcomes. Empower data-driven decisions through scalable AWS architectures.",
    },
  ],
  linkText: "Hire Certified AWS Developers",
  linkUrl: "/contact-us",
},


  faq: {
    title: "FAQ - On-Demand AWS Development Services",
    items: [
      {
        id: "1",
        question: "What services do your AWS developers offer?",
        answer:
          "Our AWS developers handle cloud application design, migration, DevOps automation, and infrastructure optimization. We provide end-to-end cloud development and maintenance services.",
      },
      {
        id: "2",
        question: "Can you migrate existing systems to AWS?",
        answer:
          "Yes. We perform secure, zero-downtime migrations from on-premise or other cloud providers to AWS. Our team ensures minimal disruption during transition and post-deployment stability.",
      },
      {
        id: "3",
        question: "Do you provide ongoing cloud monitoring and support?",
        answer:
          "Absolutely. We offer 24/7 monitoring, security management, and performance optimization for AWS environments to ensure consistent uptime and efficiency.",
      },
      {
        id: "4",
        question: "How experienced are your AWS developers?",
        answer:
          "Our AWS-certified developers have over 8+ years of experience building and managing scalable cloud infrastructures for startups, enterprises, and SaaS platforms.",
      },
      {
        id: "5",
        question: "Which AWS services do you specialize in?",
        answer:
          "We specialize in EC2, S3, Lambda, RDS, CloudFormation, ECS, EKS, and Redshift, offering full-stack cloud expertise across the AWS ecosystem.",
      },
      {
        id: "6",
        question: "How quickly can an AWS developer join my project?",
        answer:
          "Our AWS developers can be onboarded within 48 hours after project approval, ensuring rapid initiation and seamless integration with your existing team.",
      },
    ],
  },
};
