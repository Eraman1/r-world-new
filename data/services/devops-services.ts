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
  linkText: "Get DevOps Solutions",
  linkUrl: "/contact-us",
  items: [
    {
      id: "automation",
      icon: "Leaf",
      title: "Infrastructure Automation",
      subtitle: "Provision & Manage Efficiently",
      description:
        "Automate infrastructure provisioning using IaC tools like Terraform and Ansible. \nEnsure consistent and repeatable environments across all stages. \nReduce manual errors and save setup time for teams. \nImprove operational efficiency and deployment speed. \nEnable rapid scaling and reliable reproducibility for all projects.",
    },
    {
      id: "monitoring",
      icon: "Leaf",
      title: "Monitoring & Logging",
      subtitle: "Ensure Application Health",
      description:
        "Implement application and infrastructure monitoring with Prometheus, Grafana, or ELK Stack. \nTrack key metrics, logs, and alerts in real-time. \nDetect and troubleshoot issues proactively before they escalate. \nOptimize uptime and maintain high reliability. \nEnable data-driven decisions for scaling and maintenance.",
    },
    {
      id: "security",
      icon: "Leaf",
      title: "DevSecOps & Compliance",
      subtitle: "Secure & Compliant Systems",
      description:
        "Integrate security directly into CI/CD pipelines to prevent vulnerabilities. \nPerform automated code analysis and security scanning. \nEnsure compliance with standards like ISO, SOC2, and GDPR. \nAutomate patching and vulnerability mitigation processes. \nProtect applications while maintaining trust and regulatory adherence.",
    },
    {
      id: "cloud-optimization",
      icon: "Leaf",
      title: "Cloud & Cost Optimization",
      subtitle: "Efficient Resource Management",
      description:
        "Optimize cloud resource usage and reduce overall costs. \nImplement auto-scaling and load balancing for efficiency. \nMonitor utilization and adjust resources dynamically. \nPrevent wastage and maximize infrastructure ROI. \nEnsure reliable, cost-effective, and high-performance cloud operations.",
    },
    {
      id: "ci-cd",
      icon: "Leaf",
      title: "Continuous Integration & Deployment",
      subtitle: "Faster, Reliable Delivery",
      description:
        "Automate the build, test, and deployment pipelines for software projects. \nEnable rapid code integration with reduced errors. \nFacilitate consistent releases across environments. \nAccelerate time-to-market and release cycles. \nMaintain quality and reliability with automated testing at every stage.",
    },
    {
      id: "incident-management",
      icon: "Leaf",
      title: "Incident Management & Response",
      subtitle: "Minimize Downtime & Risks",
      description:
        "Implement a structured approach to detect and resolve incidents quickly. \nTrack, prioritize, and respond to system failures in real-time. \nUse alerts and automation to mitigate critical downtime. \nAnalyze incidents for root causes and improvements. \nStrengthen operational resilience and ensure business continuity.",
    },
  ],
},

  managementSolutions: {
    title: "DevOps Project Management Tools",
    subtitle:
      "Streamline workflow, collaboration, and deployment processes with our DevOps management solutions for teams of any size.",
    subtitleLink: { text: "DevOps management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
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
