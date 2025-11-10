import { IndustryConfig } from "@/types/industries";

export const nonprofit: IndustryConfig = {
  slug: "nonprofit",
  banner: {
    title: "Transform Nonprofit Operations with",
    highlight: "AI-Powered Nonprofit Management Software",
    subtitle:
      "Empower nonprofits with intelligent automation, donor management, and operational analytics. Streamline fundraising, volunteer management, and program tracking to maximize impact.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Nonprofit Solutions",
  },

  techHero: {
    heading: "Hire Expert Nonprofit Software Developers",
    description:
      "We build AI-driven platforms that streamline donor management, fundraising campaigns, and volunteer coordination. Enable your nonprofit to optimize operations, engage supporters, and measure impact effectively.",
    services: [
      {
        id: "donor-management",
        title: "Donor Management & CRM Platforms",
        icon: "Tractor", //User
        position: "left",
      },
      {
        id: "fundraising-automation",
        title: "AI-Powered Fundraising Campaigns",
        icon: "Tractor", //Gift
        position: "left",
      },
      {
        id: "volunteer-management",
        title: "Volunteer Coordination & Tracking",
        icon: "Tractor", //Users
        position: "left",
      },
      {
        id: "grant-management",
        title: "Grant & Program Management Systems",
        icon: "Tractor", //FileText
        position: "left",
      },
      {
        id: "analytics-reporting",
        title: "Impact Analytics & Reporting Dashboards",
        icon: "Tractor", //BarChart
        position: "right",
      },
      {
        id: "compliance-security",
        title: "Nonprofit Compliance & Data Security",
        icon: "Tractor", //ShieldCheck
        position: "right",
      },
      {
        id: "event-management",
        title: "Event & Campaign Management Tools",
        icon: "Tractor", //Calendar
        position: "right",
      },
      {
        id: "mobile-apps",
        title: "Mobile Donor & Volunteer Apps",
        icon: "Tractor", //Smartphone
        position: "right",
      },
    ],
  },

  solutions: {
  mainTitle: "AI, Cloud & Automation Solutions for Nonprofits",
  mainDescription:
    "We create intelligent nonprofit platforms that streamline donor engagement, fundraising, program management, and compliance. Leverage AI, analytics, and digital tools to improve efficiency and maximize social impact.",
  items: [
    {
      id: "donor-crm",
      icon: "Leaf", //User
      title: "Donor Management & CRM Systems",
      subtitle: "",
      description:
        "Track donor profiles, giving history, and communication preferences with precision. Automate reminders, thank-you notes, and personalized outreach for each contributor. Use predictive analytics to identify high-value donors and retention opportunities. Centralize donation data for easy reporting and performance tracking. Strengthen relationships and improve donor satisfaction through transparency and insight.",
    },
    {
      id: "fundraising-automation",
      icon: "Leaf", //Gift
      title: "AI-Powered Fundraising Campaigns",
      subtitle: "",
      description:
        "Automate campaign creation, segmentation, and multi-channel outreach effortlessly. Harness AI-driven insights to target the right audience at the right time. Track campaign progress with real-time analytics and donation forecasting. Personalize messaging to increase engagement and conversion rates. Boost fundraising success while reducing manual effort and operational costs.",
    },
    {
      id: "volunteer-platform",
      icon: "Leaf", //Users
      title: "Volunteer Management Platforms",
      subtitle: "",
      description:
        "Simplify volunteer scheduling, tracking, and communication in one unified platform. Match volunteers to suitable roles using skill-based AI recommendations. Provide real-time updates and task alerts for better coordination. Analyze participation data to improve volunteer engagement strategies. Empower your community with a smooth and rewarding volunteering experience.",
    },
    {
      id: "grant-tracking",
      icon: "Leaf", //FileText
      title: "Grant & Program Management",
      subtitle: "",
      description:
        "Streamline grant applications, reviews, and reporting in a centralized system. Automate compliance tracking and funding distribution workflows. Monitor project milestones with detailed dashboards and notifications. Leverage AI to identify funding opportunities aligned with your mission. Simplify management while ensuring transparency and accountability.",
    },
    {
      id: "analytics-reporting",
      icon: "Leaf", //BarChart
      title: "Impact Analytics & Reporting",
      subtitle: "",
      description:
        "Visualize program impact and fundraising performance in real time. Access customizable dashboards for donors, campaigns, and operations. Use data-driven insights to guide strategic decisions and resource allocation. Generate automated reports that showcase measurable community outcomes. Strengthen credibility and attract more supporters through transparent analytics.",
    },
    {
      id: "event-management",
      icon: "Leaf", //Calendar
      title: "Event & Campaign Management",
      subtitle: "",
      description:
        "Plan, organize, and execute virtual or in-person events with smart automation. Simplify registration, ticketing, and communication workflows effortlessly. Track attendance, donations, and engagement from a single dashboard. Analyze post-event data to measure effectiveness and ROI. Deliver seamless experiences that inspire donors and build long-term loyalty.",
    },
  ],
  linkText: "Get AI-Powered Nonprofit Solutions",
  linkUrl: "/contact-us",
},

  managementSolutions: {
    title: "End-to-End Nonprofit Management Software",
    subtitle:
      "We design intelligent nonprofit ecosystems that integrate donor management, fundraising, volunteer coordination, and analytics to help organizations scale impact efficiently.",
    subtitleLink: { text: "nonprofit management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "workflow-automation",
        icon: "map", //Settings
        title: "Workflow Automation & Task Management",
        description:
          "Automate daily operations, volunteer assignments, and campaign tasks to improve efficiency and reduce manual effort.",
        link: { text: "nonprofit workflow automation", url: "#" },
      },
      {
        id: "analytics-dashboard",
        icon: "map", //BarChart3
        title: "Real-Time Analytics & Performance Dashboards",
        description:
          "Monitor fundraising KPIs, donor engagement, and program impact through dynamic dashboards.",
      },
      {
        id: "mobile-access",
        icon: "map", //Smartphone
        title: "Mobile Apps & Volunteer Portals",
        description:
          "Enable donors and volunteers to engage, donate, and participate via mobile platforms with real-time updates.",
      },
    ],
    bottomFeatures: [
  {
    id: "ai-assistants",
    icon: "map", //Cpu
    title: "AI Chatbots & Donor Assistants",
    description:
      "Offer round-the-clock assistance to donors and volunteers through intelligent AI chatbots. " +
      "Automate FAQs, guide users through donation steps, and simplify event registration. " +
      "Enhance donor satisfaction with personalized, data-driven conversations. " +
      "Reduce response times and administrative load for your nonprofit team. " +
      "Create meaningful engagement that builds stronger community connections.",
  },
  {
    id: "compliance-security",
    icon: "map", //Shield
    title: "Compliance & Data Security",
    description:
      "Safeguard donor and volunteer data with enterprise-grade encryption and secure access. " +
      "Maintain GDPR and HIPAA compliance to ensure complete trust and transparency. " +
      "Implement role-based permissions to prevent unauthorized data exposure. " +
      "Regular audits and monitoring keep your systems safe from breaches. " +
      "Build a reputation for integrity through robust data governance practices.",
  },
  {
    id: "fundraising-optimization",
    icon: "map", //TrendingUp
    title: "Fundraising & Campaign Optimization",
    description:
      "Utilize AI-powered analytics to track and refine fundraising campaigns effectively. " +
      "Identify top-performing channels and high-value donor segments with precision. " +
      "Automate outreach and communication to maximize contributions and engagement. " +
      "Measure campaign performance with real-time dashboards and insights. " +
      "Turn every donation drive into a strategic, data-backed success story.",
  },
  {
    id: "impact-reporting",
    icon: "map", //PieChart
    title: "Impact Reporting & Transparency",
    description:
      "Create visually engaging and detailed reports on your nonprofit’s key initiatives. " +
      "Showcase how funds are utilized and the measurable outcomes achieved. " +
      "Offer transparency that inspires donor confidence and long-term loyalty. " +
      "Generate real-time dashboards for internal and external stakeholders. " +
      "Build accountability by communicating results with clarity and precision.",
  },
],
ctaText: "BUILD YOUR NONPROFIT SOFTWARE SOLUTION",
onCtaClick: () => {},
  },
managementSolutionsTwo: {
  title: "Nonprofit Management Software Solutions",
  subtitle:
    "Our nonprofit software developers build smart digital systems that streamline fundraising, donor engagement, and impact reporting to drive your mission forward.",
  subtitleLink: { text: "nonprofit software solutions", url: "#" },
  laptopImage: "/images/nonprofit-management.jpg",
  mobileImage: "/images/nonprofit-management-mobile.jpg",

  topFeatures: [
    {
      id: "donor-management",
      icon: "Users",
      title: "Donor & Volunteer Management Platforms",
      description:
        "Simplify donor tracking, communication, and volunteer coordination. Manage contributions and engagement through a unified dashboard.",
      link: { text: "donor management software", url: "#" },
    },
    {
      id: "fundraising-tools",
      icon: "HeartHandshake",
      title: "Fundraising & Grant Management Tools",
      description:
        "Automate donation campaigns and grant tracking workflows. Gain real-time visibility into funding performance and outreach impact.",
      link: { text: "fundraising management system", url: "#" },
    },
    {
      id: "program-tracking",
      icon: "ChartLine",
      title: "Program & Impact Tracking Systems",
      description:
        "Monitor project outcomes, KPIs, and community impact effectively. Generate detailed analytics to showcase transparency and results.",
      link: { text: "impact tracking software", url: "#" },
    },
    {
      id: "compliance-security",
      icon: "ShieldCheck",
      title: "Compliance & Data Security Solutions",
      description:
        "Ensure donor data safety and compliance with global standards. Automate audit trails, data encryption, and reporting workflows.",
      link: { text: "nonprofit compliance software", url: "#" },
    },
  ],

  bottomFeatures: [
    {
      id: "crm-integration",
      icon: "Link2",
      title: "CRM & Third-Party Integration Tools",
      description:
        "Integrate with CRM, accounting, and communication systems. Centralize data for seamless nonprofit management and insights.",
    },
    {
      id: "event-management",
      icon: "Calendar",
      title: "Event & Campaign Management Platforms",
      description:
        "Plan, promote, and track fundraising events effortlessly. Manage registrations, donations, and follow-ups in one place.",
    },
    {
      id: "reporting-analytics",
      icon: "BarChart3",
      title: "Real-Time Reporting & Analytics Dashboards",
      description:
        "Access visual dashboards to analyze donations and engagement. Make data-driven decisions to strengthen organizational growth.",
    },
    {
      id: "volunteer-portal",
      icon: "UsersRound",
      title: "Volunteer Coordination Portals",
      description:
        "Enable volunteers to register, manage shifts, and report progress. Foster collaboration and streamline community operations.",
    },
  ],

  ctaText: "GET NONPROFIT SOFTWARE DEVELOPERS",
  onCtaClick: "/contact-us",
},


  faq : {
  title: "Nonprofit & NGO FAQ",
  items: [
    {
      id: "1",
      question: "What is a nonprofit organization?",
      answer:
        "A nonprofit organization is an entity dedicated to advancing a social cause or providing public benefit. Unlike for-profit companies, nonprofits reinvest all revenue into their mission rather than distributing profits to owners or shareholders.",
    },
    {
      id: "2",
      question: "How can technology benefit nonprofits?",
      answer:
        "Technology streamlines operations, enhances donor management, and improves communication. Nonprofits can leverage CRM systems, fundraising platforms, and volunteer management tools to increase efficiency and impact.",
    },
    {
      id: "3",
      question: "What types of fundraising platforms are available for nonprofits?",
      answer:
        "Nonprofits can use online donation portals, crowdfunding platforms, recurring giving tools, and peer-to-peer fundraising software. These platforms make it easy to reach donors, track contributions, and manage campaigns effectively.",
    },
    {
      id: "4",
      question: "How can nonprofits manage volunteers effectively?",
      answer:
        "Volunteer management software allows nonprofits to schedule shifts, track hours, communicate tasks, and recognize contributions. It simplifies engagement, ensuring volunteers remain motivated and aligned with organizational goals.",
    },
    {
      id: "5",
      question: "What role does data analytics play in nonprofit operations?",
      answer:
        "Data analytics provides insights into donor behavior, campaign effectiveness, and program outcomes. By analyzing trends, nonprofits can optimize resource allocation, improve fundraising strategies, and demonstrate impact to stakeholders.",
    },
    {
      id: "6",
      question: "Can nonprofits use social media for fundraising?",
      answer:
        "Absolutely. Social media platforms allow nonprofits to share their mission, launch donation campaigns, engage supporters, and create viral awareness. Integrated tools can track engagement and convert followers into donors.",
    },
    {
      id: "7",
      question: "How do nonprofits ensure transparency and compliance?",
      answer:
        "Nonprofits use financial management software, audit trails, and reporting dashboards to maintain transparency. Compliance with local and international regulations, including tax-exempt laws, is critical for building trust with donors and stakeholders.",
    },
    {
      id: "8",
      question: "What digital tools support nonprofit program management?",
      answer:
        "Nonprofits can utilize project management software, CRM systems, communication platforms, and cloud-based document sharing. These tools enable collaboration, track progress, and ensure programs meet intended goals efficiently.",
    },
    {
      id: "9",
      question: "How can nonprofits measure the impact of their initiatives?",
      answer:
        "Impact measurement involves collecting and analyzing data on program outputs and outcomes. Tools like dashboards, surveys, and analytics platforms help quantify success, improve programs, and report results to donors and stakeholders.",
    },
    {
      id: "10",
      question: "What is the future of digital solutions for nonprofits?",
      answer:
        "Digital transformation in nonprofits is focused on AI-driven donor engagement, cloud-based collaboration, and automated reporting. These innovations enable organizations to scale, improve efficiency, and increase the social impact of their programs.",
    },
  ],
},

};

