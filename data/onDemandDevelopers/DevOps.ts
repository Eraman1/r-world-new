import { OnDemandDevelopersConfig } from "@/types/onDemandDevelopers";

export const devops: OnDemandDevelopersConfig = {
  slug: "devops",
  banner: {
    title: "Empower Your Infrastructure with",
    highlight: "Expert DevOps Engineers",
    subtitle:
      "Hire experienced DevOps developers to streamline your CI/CD pipelines, automate cloud deployments, and ensure continuous integration and delivery for faster, more reliable software releases.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Hire DevOps Developers",
  },

  features: [
    {
      icon: "code",
      title: "COST-EFFICIENT, SCALABLE SERVICES:",
      items: [
        "Pay only for actual engineering hours with transparent billing and no hidden costs.",
        "Free project management and QA support included for smooth delivery.",
        "Save up to 70% on infrastructure and DevOps automation costs with our experts.",
      ],
    },
    {
      icon: "messageSquare",
      title: "COLLABORATIVE DELIVERY MODEL:",
      items: [
        "Real-time collaboration with clients across all time zones using agile workflows.",
        "Transparent communication channels for faster updates and decision-making.",
        "Dedicated DevOps specialists aligned to your team’s goals and delivery roadmap.",
      ],
    },
    {
      icon: "users",
      title: "FULL-SERVICE DEVOPS TEAM:",
      items: [
        "Access to certified DevOps engineers, cloud architects, and automation experts.",
        "Cover every aspect — CI/CD, monitoring, containerization, and cloud security.",
        "Cross-functional team support for enterprise, SaaS, and multi-cloud projects.",
      ],
    },
    {
      icon: "search",
      title: "ON-DEMAND ENGAGEMENT MODEL:",
      items: [
        "Kickstart your DevOps automation or migration project in under 48 hours.",
        "Flexible engagement models for startups, SMBs, and large enterprises.",
        "Proven expertise with 20+ years delivering DevOps and cloud-based solutions.",
      ],
    },
  ],

  solutions: {
  mainTitle: "Custom DevOps Development Solutions",
  mainDescription:
    "We deliver end-to-end DevOps automation, CI/CD implementation, and cloud migration solutions. Our experts focus on speed, stability, and security—helping businesses release faster, scale effortlessly, and maintain operational excellence.",
  items: [
    {
      id: "ci-cd",
      icon: "Leaf",
      title: "CI/CD Pipeline Automation",
      description:
        "Automate build, test, and deployment workflows using Jenkins or GitLab CI.  Eliminate manual bottlenecks and reduce human error in delivery. Enable faster releases with continuous integration strategies. Ensure consistent deployment across multiple environments. Improve collaboration between development and operations teams.",
    },
    {
      id: "cloud-migration",
      icon: "Leaf",
      title: "Cloud Infrastructure & Migration",
      description:
        "Migrate workloads seamlessly to AWS, Azure, or Google Cloud.  Optimize infrastructure for performance, scalability, and uptime. Implement hybrid and multi-cloud strategies efficiently. Ensure secure and compliant data migration with zero downtime. Reduce cloud costs with right-sized resource allocation.",
    },
    {
      id: "containerization",
      icon: "Leaf",
      title: "Containerization & Orchestration",
      description:
        "Deploy applications using Docker and Kubernetes for consistency.  Simplify management of microservices across multiple clusters. Automate scaling and updates for continuous service delivery. Achieve faster rollbacks, updates, and resource optimization. Build a stable, portable, and high-availability infrastructure.",
    },
    {
      id: "monitoring",
      icon: "Leaf",
      title: "Monitoring & Performance Optimization",
      description:
        "Integrate monitoring tools like Prometheus, Grafana, and ELK Stack. Gain real-time visibility into system performance and uptime. Detect and resolve issues before they impact end users.  Automate alerts and anomaly detection with observability tools. Ensure infrastructure health and application stability 24/7.",
    },
    {
      id: "security",
      icon: "Leaf",
      title: "DevSecOps & Cloud Security",
      description:
        "Embed security checks within your CI/CD and DevOps lifecycle. Automate vulnerability scanning and compliance enforcement. Protect workloads with IAM, encryption, and threat detection.  Maintain data integrity and regulatory adherence across clouds. Foster a security-first culture across all DevOps processes.",
    },
    {
      id: "automation",
      icon: "Leaf",
      title: "Infrastructure as Code (IaC)",
      description:
        "Automate infrastructure setup using Terraform, Ansible, or CloudFormation. Manage environments through code for version control and repeatability. Deploy consistent infrastructure across multiple cloud platforms.  Reduce provisioning time and eliminate manual misconfigurations. Improve reliability through fully automated system management.",
    },
  ],
  linkText: "Hire Expert DevOps Engineers",
  linkUrl: "/contact-us",
},

topSkill: {
  mainTitle: "Expert DevOps Development Skills",
  mainDescription:
    "Our DevOps engineers master automation, CI/CD, and cloud scalability. We streamline development workflows, boost productivity, and ensure your systems are secure, fast, and reliable across all environments.",
  items: [
    {
      id: "ci-cd",
      icon: "Leaf",
      title: "CI/CD Pipeline Automation",
      link: "/contact-us",
      description:
        "Build automated CI/CD pipelines with Jenkins, GitLab CI, or GitHub Actions. Reduce release cycles through continuous testing and deployment. Ensure consistent builds and reliable version rollouts. Improve visibility into build metrics and deployment status. Achieve seamless delivery across staging and production.",
    },
    {
      id: "cloud-migration",
      icon: "Leaf",
      title: "Cloud Infrastructure & Migration",
      link: "/contact-us",
      description:
        "Design, deploy, and manage scalable cloud environments efficiently. Migrate on-premise systems to AWS, Azure, or Google Cloud. Optimize workloads for performance and resource utilization. Implement disaster recovery and backup automation strategies. Minimize downtime while maintaining full data security.",
    },
    {
      id: "containerization",
      icon: "Leaf",
      title: "Containerization & Orchestration",
      link: "/contact-us",
      description:
        "Leverage Docker and Kubernetes for consistent deployment environments. Automate scaling and load balancing across containers seamlessly. Simplify updates and rollbacks with Helm and Kubernetes manifests. Improve portability across cloud and hybrid infrastructures. Enable microservice efficiency through orchestration workflows.",
    },
    {
      id: "monitoring",
      icon: "Leaf",
      title: "Monitoring & Optimization",
      link: "/contact-us",
      description:
        "Integrate real-time monitoring using ELK, Grafana, and Prometheus. Track system health, latency, and application performance. Detect anomalies early through automated alert systems. Optimize resource usage with performance visualization dashboards. Maintain maximum uptime through proactive infrastructure tuning.",
    },
    {
      id: "security",
      icon: "Leaf",
      title: "DevSecOps & Security Automation",
      link: "/contact-us",
      description:
        "Embed security practices into the DevOps lifecycle by design. Automate compliance scans using tools like SonarQube and Snyk. Implement threat detection, audit trails, and data encryption. Continuously monitor for vulnerabilities and code weaknesses. Ensure a secure CI/CD pipeline with zero compromise on agility.",
    },
    {
      id: "automation",
      icon: "Leaf",
      title: "Infrastructure as Code (IaC)",
      link: "/contact-us",
      description:
        "Define and manage infrastructure using Terraform or Ansible scripts. Automate environment provisioning for consistent deployment results. Enable version-controlled infrastructure management across teams. Ensure reproducible environments with full traceability. Boost delivery speed while maintaining infrastructure reliability.",
    },
  ],
  linkText: "Hire Expert DevOps Developers",
  linkUrl: "/contact-us",
},


  faq: {
    title: "FAQ - On-Demand DevOps Development Services",
    items: [
      {
        id: "1",
        question: "What DevOps services do you provide?",
        answer:
          "We offer CI/CD automation, cloud migration, containerization, monitoring, and security integration. Our team ensures fast and reliable software delivery through modern DevOps practices.",
      },
      {
        id: "2",
        question: "Do you support multi-cloud or hybrid infrastructure?",
        answer:
          "Yes, we specialize in managing hybrid and multi-cloud environments across AWS, Azure, and Google Cloud. We ensure optimized cost and resource utilization for each platform.",
      },
      {
        id: "3",
        question: "Can you automate my existing infrastructure?",
        answer:
          "Absolutely. We implement Infrastructure as Code (IaC) using Terraform, Ansible, or CloudFormation to automate provisioning, scaling, and deployment workflows.",
      },
      {
        id: "4",
        question: "How do you ensure DevOps security?",
        answer:
          "We adopt a DevSecOps approach, embedding security checks, compliance scanning, and automated vulnerability detection directly into CI/CD pipelines.",
      },
      {
        id: "5",
        question: "Do you offer post-deployment monitoring and support?",
        answer:
          "Yes, we provide continuous monitoring, system health tracking, and 24/7 performance support to ensure smooth operations and maximum uptime.",
      },
      {
        id: "6",
        question: "How soon can your DevOps developers start?",
        answer:
          "Our DevOps engineers can begin within 48 hours of project confirmation, ensuring a quick and efficient onboarding process.",
      },
    ],
  },
};
