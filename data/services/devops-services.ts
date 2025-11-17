import { ServiceConfig } from "./services";

export const devopsServices: ServiceConfig = {
  slug: "devops-services",
  banner: {
    title: "Accelerate Delivery with",
    highlight: "Professional DevOps Services",
    subtitle:
      "Optimize software development and operations with our end-to-end DevOps services. Ensure continuous integration, deployment, monitoring, and automation for reliable and scalable applications.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get DevOps Solutions",
  },
  developerDetails: {
    heading: "Expert DevOps Engineers",
    subheading:
      "Our DevOps team bridges development and operations, automating processes, managing infrastructure, and improving software delivery cycles using best practices and modern tools.",
    mainTitle: "Professional DevOps Services",
    mainDescription:
      "We provide complete DevOps solutions to accelerate development, deployment, and maintenance. Our services include CI/CD, infrastructure as code, cloud management, containerization, and monitoring to ensure efficient software delivery.",
    image: "/images/devops-laptop.png",
    services: [
      {
        id: 1,
        title: "CI/CD Pipeline Setup",
        description:
          "Design and implement automated CI/CD pipelines using Jenkins, GitLab, or GitHub Actions. Automate code builds, tests, and deployments. Ensure fast and reliable software delivery.",
        icon: "/icons/ci-cd.svg",
      },
      {
        id: 2,
        title: "Cloud Infrastructure Management",
        description:
          "Manage cloud environments on AWS, Azure, or GCP. Provision scalable and secure infrastructure. Monitor performance and optimize resources. Automate deployments and backups.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 3,
        title: "Containerization & Orchestration",
        description:
          "Deploy applications using Docker and Kubernetes for consistency across environments. Automate scaling, load balancing, and updates. Ensure faster release cycles and rollback capabilities. Isolate applications for security and stability.",
        icon: "/icons/container.svg",
      },
    ],
  },
  solutions: {
  mainTitle: "Comprehensive DevOps Solutions",
  mainDescription:
    "We deliver end-to-end DevOps services to streamline software development and operations. Our solutions enhance automation, scalability, and reliability while reducing risks and improving collaboration.",
  
  items: [
    {
      id: "automation",
      icon: "Leaf",
      title: "Infrastructure Automation",
      subtitle: "",
      description:
        "Automate infrastructure provisioning using IaC tools like Terraform and Ansible. \nEnsure consistent and repeatable environments across all stages. \nReduce manual errors and save setup time for teams. \nImprove operational efficiency and deployment speed. \nEnable rapid scaling and reliable reproducibility for all projects.",
    },
    {
      id: "monitoring",
      icon: "Leaf",
      title: "Monitoring & Logging",
      subtitle: "",
      description:
        "Implement application and infrastructure monitoring with Prometheus, Grafana, or ELK Stack. \nTrack key metrics, logs, and alerts in real-time. \nDetect and troubleshoot issues proactively before they escalate. \nOptimize uptime and maintain high reliability. \nEnable data-driven decisions for scaling and maintenance.",
    },
    {
      id: "security",
      icon: "Leaf",
      title: "DevSecOps & Compliance",
      subtitle: "",
      description:
        "Integrate security directly into CI/CD pipelines to prevent vulnerabilities. \nPerform automated code analysis and security scanning. \nEnsure compliance with standards like ISO, SOC2, and GDPR. \nAutomate patching and vulnerability mitigation processes. \nProtect applications while maintaining trust and regulatory adherence.",
    },
    {
      id: "cloud-optimization",
      icon: "Leaf",
      title: "Cloud & Cost Optimization",
      subtitle: "",
      description:
        "Optimize cloud resource usage and reduce overall costs. \nImplement auto-scaling and load balancing for efficiency. \nMonitor utilization and adjust resources dynamically. \nPrevent wastage and maximize infrastructure ROI. \nEnsure reliable, cost-effective, and high-performance cloud operations.",
    },
    {
      id: "ci-cd",
      icon: "Leaf",
      title: "Continuous Integration & Deployment",
      subtitle: "",
      description:
        "Automate the build, test, and deployment pipelines for software projects. \nEnable rapid code integration with reduced errors. \nFacilitate consistent releases across environments. \nAccelerate time-to-market and release cycles. \nMaintain quality and reliability with automated testing at every stage.",
    },
    {
      id: "incident-management",
      icon: "Leaf",
      title: "Incident Management & Response",
      subtitle: "",
      description:
        "Implement a structured approach to detect and resolve incidents quickly. \nTrack, prioritize, and respond to system failures in real-time. \nUse alerts and automation to mitigate critical downtime. \nAnalyze incidents for root causes and improvements. \nStrengthen operational resilience and ensure business continuity.",
    },
  ],
  linkText: "Get DevOps Solutions",
  linkUrl: "/contact-us",
},
solutionsTwo: {
  mainTitle: "End-to-End DevOps Services & Cloud Automation",
  mainDescription:
    "We deliver reliable DevOps solutions that streamline development, automate deployment, and optimize cloud operations. Our DevOps experts integrate CI/CD, monitoring, and security to accelerate delivery, improve scalability, and ensure system stability across all environments.",

  items: [
    {
      id: "ci-cd",
      icon: "Leaf",
      title: "Continuous Integration & Continuous Deployment (CI/CD)",
      subtitle: "",
      description:
        "Automate code integration, testing, and deployment pipelines seamlessly. \nEnsure faster releases with zero downtime and improved code reliability. \nOur DevOps engineers design CI/CD workflows tailored for scalability. \nIntegrate automation tools like Jenkins, GitLab, and Azure DevOps. \nAccelerate delivery cycles while maintaining consistent quality standards.",
    },
    {
      id: "infrastructure-automation",
      icon: "Leaf",
      title: "Infrastructure as Code (IaC) & Cloud Automation",
      subtitle: "",
      description:
        "Simplify infrastructure management using Terraform, Ansible, or CloudFormation. \nDeploy, scale, and configure resources automatically across cloud platforms. \nEliminate manual errors with reproducible, version-controlled setups. \nEnable hybrid or multi-cloud operations with secure orchestration. \nAchieve agility and control through fully automated infrastructure workflows.",
    },
    {
      id: "monitoring-logging",
      icon: "Leaf",
      title: "Monitoring, Logging & Performance Optimization",
      subtitle: "",
      description:
        "Get real-time visibility into your applications, servers, and containers. \nWe integrate tools like Prometheus, Grafana, and ELK Stack for insights. \nDetect performance bottlenecks and resolve issues proactively. \nOptimize uptime, reliability, and resource utilization effectively. \nEmpower teams with actionable data for faster decision-making.",
    },
    {
      id: "cloud-migration",
      icon: "Leaf",
      title: "Cloud Migration & Container Orchestration",
      subtitle: "",
      description:
        "Migrate your applications securely to AWS, Azure, or Google Cloud. \nWe modernize legacy systems using Docker and Kubernetes orchestration. \nReduce downtime with structured migration and automated deployment. \nEnhance scalability, resilience, and global availability on demand. \nStreamline your digital transformation with cloud-native architecture.",
    },
    {
      id: "devsecops",
      icon: "Leaf",
      title: "DevSecOps & Automated Security Integration",
      subtitle: "",
      description:
        "Embed security at every stage of your DevOps pipeline automatically. \nWe integrate vulnerability scanning, compliance, and threat detection. \nAutomate patching, code review, and encryption enforcement workflows. \nEnsure secure releases without compromising delivery speed. \nMaintain compliance and security posture across all cloud systems.",
    },
    {
      id: "site-reliability",
      icon: "Leaf",
      title: "Site Reliability Engineering (SRE) Solutions",
      subtitle: "",
      description:
        "Ensure high system availability and resilience through automated SRE practices. \nWe implement observability, fault tolerance, and performance tuning. \nUse SLAs, SLOs, and SLIs to maintain reliability and service continuity. \nReduce incidents with proactive monitoring and intelligent alerting. \nDeliver stability, speed, and scalability across modern digital ecosystems.",
    },
  ],

  linkText: "Accelerate Your DevOps Journey",
  linkUrl: "/contact-us",
},


  managementSolutions: {
    title: "DevOps Project Management Tools",
    subtitle:
      "Streamline workflow, collaboration, and deployment processes with our DevOps management solutions for teams of any size.",
    subtitleLink: { text: "DevOps management software", url: "#" },
    laptopImage: "https://i.pinimg.com/736x/b7/04/c9/b704c9b260d6e670a02f9bdbbe4d9e67.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "pipeline-monitoring",
        icon: "map",
        title: "Pipeline Monitoring & Alerts",
        description:
          "Track CI/CD pipeline performance and status in real-time. Set up automated alerts for failures. Ensure timely intervention and resolution. Monitor deployments, builds, and test results.",
      },
      {
        id: "collaboration-tools",
        icon: "map",
        title: "Team Collaboration & Tracking",
        description:
          "Enable seamless communication between developers, operations, and QA teams. Share updates, logs, and reports. Assign tasks and track progress efficiently. Reduce miscommunication and enhance accountability.",
      },
      {
        id: "analytics-reporting",
        icon: "map",
        title: "Analytics & Reporting",
        description:
          "Analyze performance metrics, deployment frequency, and error rates. Generate actionable insights to improve processes. Identify bottlenecks and risks.",
      },
    ],
    ctaText: "Get DevOps Experts",
    onCtaClick: () => {},
  },
  faq: {
    title: "FAQ - DevOps Services",
    items: [
      {
        id: "1",
        question: "What is included in your DevOps services?",
        answer:
          "Our DevOps services cover CI/CD pipeline setup, cloud management, containerization, monitoring, automation, and security integrations.",
      },
      {
        id: "2",
        question: "Can you implement CI/CD pipelines for my project?",
        answer:
          "Yes, we design and deploy fully automated CI/CD pipelines to streamline code integration, testing, and deployment across environments.",
      },
      {
        id: "3",
        question: "Do you manage cloud infrastructure?",
        answer:
          "Absolutely. We manage AWS, Azure, and GCP environments, optimizing performance, cost, and scalability.",
      },
      {
        id: "4",
        question: "Can you integrate DevOps with Agile workflows?",
        answer:
          "Yes, our DevOps practices integrate seamlessly with Agile and Scrum methodologies for continuous delivery and iterative improvements.",
      },
      {
        id: "5",
        question: "Do you provide monitoring and alerting solutions?",
        answer:
          "Yes, we implement monitoring, logging, and alerting to ensure uptime, performance, and quick issue resolution across all systems.",
      },
    ],
  },
};
