import { IndustryConfig } from "@/types/industries";
 
export const healthcare: IndustryConfig = {
  slug: "healthcare",
  banner: {
    title: "Revolutionize Patient Care with",
    highlight: "AI-Powered Healthcare & Telemedicine Software Solutions",
    subtitle:
      "Empower hospitals, clinics, and healthcare startups with intelligent, secure, and interoperable digital health platforms. From patient monitoring to predictive diagnostics, we enable seamless healthcare delivery powered by innovation and automation.",
    image:
      "/industry/industryHealthcareBanner.webp",
    linkText: "Get Healthcare Solutions",
  },
 
  techHero: {
    heading: "Hire Expert Healthcare Software Developers",
    description:
      "Our developers build HIPAA-compliant, AI-driven healthcare software that enhances patient outcomes, optimizes hospital operations, and enables connected care. We integrate telemedicine, IoT devices, and analytics for smarter, more accessible healthcare systems.",
    services: [
      {
        id: "telemedicine",
        title: "Telemedicine & Virtual Care Platforms",
        icon: "Tractor", //Video
        position: "left",
      },
      {
        id: "ehr",
        title: "Electronic Health Record (EHR) Systems",
        icon: "Tractor", //FileText
        position: "left",
      },
      {
        id: "ai-diagnostics",
        title: "AI-Based Diagnostics & Imaging Analysis",
        icon: "Tractor", //Brain
        position: "left",
      },
      {
        id: "hospital-management",
        title: "Hospital Management Software (HMS)",
        icon: "Tractor", //Building
        position: "left",
      },
      {
        id: "iot-monitoring",
        title: "IoT-Enabled Patient Monitoring",
        icon: "Tractor", //Activity
        position: "right",
      },
      {
        id: "pharmacy",
        title: "Pharmacy & Inventory Management",
        icon: "Tractor", //Package
        position: "right",
      },
      {
        id: "patient-portal",
        title: "Patient Engagement & Portal Systems",
        icon: "Tractor", //Users
        position: "right",
      },
      {
        id: "analytics",
        title: "Healthcare Analytics & BI Dashboards",
        icon: "Tractor", //BarChart3
        position: "right",
      },
    ],
     deviceImages: {
      laptop: "/industry/industryHealthcareBanner.webp",
      tablet: "/industry/industryHealthcareBanner.webp",
      mobile: "/industry/industryHealthcareBanner.webp",
    },
  },
 
  solutions: {
  mainTitle: "AI, IoT & Cloud Solutions for Modern Healthcare",
  mainDescription:
    "We design smart, secure, and scalable healthcare software powered by AI and IoT. From predictive diagnostics to connected care, our solutions improve clinical efficiency, patient experience, and operational excellence across the medical ecosystem.",
  items: [
    {
      id: "diagnostics",
      icon: "Leaf",
      title: "AI Diagnostics & Medical Imaging",
      subtitle: "",
      description:
        "Empower healthcare professionals with intelligent image analysis tools. Use deep learning models to detect diseases from X-rays, MRIs, and CT scans. Automate radiology workflows and reduce human error in diagnostics. Enable faster, data-backed clinical decisions through visual insights. Improve patient outcomes with accurate, early-stage disease detection.",
    },
    {
      id: "remote-monitoring",
      icon: "Leaf",
      title: "Remote Patient Monitoring Systems",
      subtitle: "",
      description:
        "Leverage IoT-enabled wearables to continuously track patient vitals. Connect devices to secure cloud dashboards for real-time monitoring. Reduce hospital readmissions through proactive health interventions. Empower clinicians with instant alerts and trend-based insights. Deliver continuous, preventive care beyond traditional facilities.",
    },
    {
      id: "appointment-scheduling",
      icon: "Leaf",
      title: "Smart Appointment & Workflow Automation",
      subtitle: "",
      description:
        "Automate patient scheduling and streamline clinical operations. Reduce administrative workload through intelligent process management. Integrate billing, records, and notifications into one seamless flow. Minimize patient wait times and boost satisfaction levels. Optimize staff utilization for greater operational efficiency.",
    },
    {
      id: "predictive-analytics",
      icon: "Leaf",
      title: "Predictive Healthcare Analytics",
      subtitle: "",
      description:
        "Transform healthcare data into actionable insights using AI analytics. Identify high-risk patients through predictive modeling techniques. Support personalized medicine with accurate treatment forecasting. Reduce costs by preventing complications and avoidable readmissions. Empower providers with real-time, data-driven clinical intelligence.",
    },
    {
      id: "drug-discovery",
      icon: "Leaf",
      title: "AI in Drug Discovery & Research",
      subtitle: "",
      description:
        "Accelerate R&D pipelines with AI-based molecular modeling and screening. Use predictive algorithms to identify effective compounds faster. Optimize clinical trial designs and improve approval success rates. Integrate data from labs, trials, and genomics for unified insights. Reduce costs while enabling faster, safer drug development cycles.",
    },
    {
      id: "compliance-security",
      icon: "Leaf",
      title: "Compliance & Data Security Platforms",
      subtitle: "",
      description:
        "Protect sensitive healthcare data with end-to-end encryption systems. Maintain full regulatory compliance with HIPAA, GDPR, and HL7 standards. Monitor access, detect threats, and prevent unauthorized breaches. Implement automated auditing and security governance tools. Build trust through secure, compliant digital healthcare platforms.",
    },
  ],
  linkText: "Get AI-Powered Healthcare Solutions",
  linkUrl: "/contact-us",
},

 
  managementSolutions: {
    title: "Healthcare Management & Analytics Solutions",
    subtitle:
      "We build end-to-end healthcare management platforms that integrate telehealth, EHR, and predictive analytics to improve care quality and efficiency.",
    subtitleLink: { text: "healthcare management software", url: "#" },
    laptopImage: "https://i.pinimg.com/736x/10/6d/8f/106d8f44e6553b17498896984376bb62.jpg",
    mobileImage: "https://i.pinimg.com/736x/e4/75/a2/e475a274839246482835e19e5c6a0301.jpg",
    topFeatures: [
      {
        id: "ehr-integration",
        icon: "map",
        title: "EHR / EMR Integration & Interoperability",
        description:
          "Seamlessly integrate patient records across hospitals, labs, and clinics with secure, interoperable APIs.",
        link: { text: "EHR development services", url: "#" },
      },
      {
        id: "telehealth",
        icon: "map",
        title: "Telehealth & Video Consultation Platforms",
        description:
          "Deliver remote consultations, prescriptions, and follow-ups via encrypted, real-time video and chat systems.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Workflow Automation & Billing Systems",
        description:
          "Automate patient admissions, claims, and billing to improve accuracy and reduce administrative workload.",
      },
    ],
    bottomFeatures: [
  {
    id: "population-health",
    icon: "map",
    title: "Population Health & Analytics Dashboards",
    description:
      "Visualize vital healthcare KPIs like recovery rates, readmission trends, and treatment effectiveness. " +
      "Monitor operational efficiency and staff performance in real time. " +
      "Gain actionable insights through data-driven analytics. " +
      "Improve patient outcomes with predictive health models. " +
      "Make informed strategic decisions with centralized dashboards.",
  },
  {
    id: "security",
    icon: "map",
    title: "Cybersecurity & HIPAA Compliance",
    description:
      "Implement multi-layered security frameworks to protect sensitive patient data. " +
      "Use encryption, secure logins, and audit trails to maintain integrity. " +
      "Ensure full compliance with HIPAA and global healthcare standards. " +
      "Identify and respond to security threats proactively. " +
      "Build trust through privacy-first healthcare software systems.",
  },
  {
    id: "mobile-health",
    icon: "map",
    title: "mHealth & Wearable App Development",
    description:
      "Develop smart mobile and wearable health apps for patient engagement. " +
      "Enable real-time monitoring of vitals, fitness, and medication adherence. " +
      "Integrate data from wearables and IoT devices seamlessly. " +
      "Enhance chronic disease management through continuous tracking. " +
      "Empower patients with self-care tools and health insights.",
  },
  {
    id: "ai-decision",
    icon: "map",
    title: "AI-Powered Decision Support Systems",
    description:
      "Leverage AI algorithms to assist healthcare professionals in diagnosis. " +
      "Analyze large-scale data for treatment planning and risk assessment. " +
      "Deliver predictive insights for preventive care and outcomes. " +
      "Improve clinical precision with real-time recommendations. " +
      "Transform patient care through intelligent, data-driven decisions.",
  },
],
ctaText: "BUILD YOUR HEALTHCARE SOFTWARE SOLUTION",
onCtaClick: () => {},
  },
  managementSolutionsTwo: {
  title: "Healthcare Management Software Solutions",
  subtitle:
    "Our healthcare software developers build intelligent digital systems to streamline hospital operations, enhance patient care, and improve overall clinical efficiency.",
  subtitleLink: { text: "healthcare management software", url: "#" },
  laptopImage: "https://i.pinimg.com/1200x/ba/52/89/ba528974ead83742fe6661d3f783af08.jpg",
  mobileImage: "/images/healthcare-management-mobile.jpg",

  topFeatures: [
    {
      id: "patient-care",
      icon: "HeartPulse",
      title: "Patient Care & Monitoring Systems",
      description:
        "Track patient vitals, treatment progress, and history in real time. Enhance care coordination with smart monitoring dashboards.",
      link: { text: "patient management software", url: "#" },
    },
    {
      id: "ehr-systems",
      icon: "FileText",
      title: "Electronic Health Record (EHR) Platforms",
      description:
        "Digitize medical records for secure and quick access. Enable seamless data sharing between doctors, labs, and pharmacies.",
      link: { text: "ehr software", url: "#" },
    },
    {
      id: "appointment-scheduling",
      icon: "CalendarCheck",
      title: "Appointment & Resource Scheduling Systems",
      description:
        "Simplify patient booking and doctor scheduling. Reduce wait times and improve hospital resource utilization efficiently.",
      link: { text: "appointment management system", url: "#" },
    },
    {
      id: "billing-insurance",
      icon: "CreditCard",
      title: "Billing & Insurance Management Solutions",
      description:
        "Automate medical billing, claims, and insurance processing. Ensure accurate payments and faster reimbursements for providers.",
      link: { text: "medical billing software", url: "#" },
    },
  ],

  bottomFeatures: [
    {
      id: "telemedicine",
      icon: "Video",
      title: "Telemedicine & Virtual Consultation Apps",
      description:
        "Connect patients and doctors remotely via secure video calls. Expand care access and improve engagement through telehealth.",
    },
    {
      id: "inventory-tracking",
      icon: "Box",
      title: "Pharmacy & Inventory Tracking Systems",
      description:
        "Monitor drug stocks, expiries, and supplies in real time. Optimize procurement and ensure medication availability anytime.",
    },
    {
      id: "analytics",
      icon: "BarChart3",
      title: "Healthcare Analytics & Reporting Tools",
      description:
        "Generate reports on patient outcomes and performance KPIs. Leverage data-driven insights for better clinical decisions.",
    },
    {
      id: "admin-dashboard",
      icon: "Settings",
      title: "Hospital Administration Dashboards",
      description:
        "Centralize staff, patient, and department management. Gain full visibility into operations with automated reporting tools.",
    },
  ],

  ctaText: "GET HEALTHCARE SOFTWARE DEVELOPERS",
  onCtaClick: "/contact-us",
},

 faq:{
  title: "Healthcare FAQ",
  items: [
    {
      id: "1",
      question: "What is digital healthcare?",
      answer:
        "Digital healthcare involves the use of technology such as telemedicine, electronic health records (EHR), mobile health apps, and AI-powered diagnostic tools to enhance patient care, streamline workflows, and improve medical outcomes.",
    },
    {
      id: "2",
      question: "How does telemedicine work?",
      answer:
        "Telemedicine allows patients to consult with healthcare professionals remotely through video calls, chat, or mobile apps. It provides convenient access to care, reduces travel time, and enables real-time monitoring of chronic conditions.",
    },
    {
      id: "3",
      question: "What are the benefits of Electronic Health Records (EHR)?",
      answer:
        "EHR systems centralize patient data, making it accessible to authorized medical staff across multiple departments. They improve diagnosis accuracy, reduce paperwork, enable better care coordination, and enhance patient safety.",
    },
    {
      id: "4",
      question: "How is AI used in healthcare?",
      answer:
        "AI supports healthcare through predictive analytics, early disease detection, personalized treatment plans, and workflow automation. Machine learning algorithms analyze medical images, patient history, and clinical data to assist doctors in decision-making.",
    },
    {
      id: "5",
      question: "What is remote patient monitoring?",
      answer:
        "Remote patient monitoring uses wearable devices, mobile apps, and connected sensors to track vital signs such as heart rate, blood pressure, and glucose levels. Data is transmitted to healthcare providers for timely intervention and proactive care.",
    },
    {
      id: "6",
      question: "How do healthcare platforms ensure patient data security?",
      answer:
        "Healthcare platforms follow strict security protocols, including HIPAA/GDPR compliance, encryption, role-based access, and secure cloud storage, ensuring sensitive patient data remains private and protected from unauthorized access.",
    },
    {
      id: "7",
      question: "Can digital healthcare solutions integrate with existing hospital systems?",
      answer:
        "Yes. Modern healthcare software can integrate with hospital management systems, lab systems, pharmacy management, and EHR platforms to enable seamless data flow, unified reporting, and efficient care delivery.",
    },
    {
      id: "8",
      question: "What features make a healthcare platform effective?",
      answer:
        "Key features include telemedicine consultations, patient portals, appointment scheduling, EHR integration, analytics dashboards, automated reminders, and secure messaging. These features improve patient engagement, operational efficiency, and care quality.",
    },
    {
      id: "9",
      question: "How can healthcare apps improve patient engagement?",
      answer:
        "Healthcare apps allow patients to book appointments, access medical records, receive health tips, track medication schedules, and communicate with providers. This increases adherence to treatment plans and fosters proactive health management.",
    },
    {
      id: "10",
      question: "What is the future of healthcare technology?",
      answer:
        "The future of healthcare technology focuses on AI-driven diagnostics, precision medicine, wearable health devices, virtual care, and interoperable systems. These innovations aim to deliver faster, safer, and more personalized patient care.",
    },
  ],
},

};