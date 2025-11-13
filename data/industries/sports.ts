import { IndustryConfig } from "@/types/industries";

export const sports: IndustryConfig = {
  slug: "sports",

  banner: {
    title: "Revolutionize Sports Operations with",
    highlight: "AI-Powered Sports Management & Analytics Solutions",
    subtitle:
      "Empower sports teams, leagues, and venues with advanced data analytics, fan engagement tools, and performance tracking systems. From athlete monitoring to event automation, we build next-gen sports technology that drives success on and off the field.",
    image: "https://stockit.rworldsoftware.in/images/industrySportsBanner.webp",
    linkText: "Get Sports Solutions",
  },

  techHero: {
    heading: "Hire Expert Developers for Sports Technology Solutions",
    description:
      "We develop innovative software for the sports industry — including player analytics, fan engagement apps, and sports event management systems — helping organizations enhance performance, engagement, and revenue.",
    services: [
      {
        id: "player-analytics",
        title: "Athlete Performance Analytics",
        icon: "Tractor", //Activity
        position: "left",
      },
      {
        id: "team-management",
        title: "Team & League Management Systems",
        icon: "Tractor", //Users
        position: "left",
      },
      {
        id: "event-management",
        title: "Sports Event & Tournament Platforms",
        icon: "Tractor", //Calendar
        position: "left",
      },
      {
        id: "training-ai",
        title: "AI-Powered Training Optimization",
        icon: "Tractor", //Cpu
        position: "left",
      },
      {
        id: "fan-engagement",
        title: "Fan Engagement & Loyalty Apps",
        icon: "Tractor", //HeartHandshake
        position: "right",
      },
      {
        id: "ticketing",
        title: "Smart Ticketing & Access Control Systems",
        icon: "Tractor", //Ticket
        position: "right",
      },
      {
        id: "broadcast-analytics",
        title: "Sports Streaming & Broadcast Analytics",
        icon: "Tractor", //Tv
        position: "right",
      },
      {
        id: "sponsorship",
        title: "Sponsorship & Revenue Management",
        icon: "Tractor", //DollarSign
        position: "right",
      },
    ],
  },

  solutions: {
    mainTitle: "Next-Gen Sports Management & Analytics Solutions",
    mainDescription:
      "Leverage AI, IoT, and cloud technology to transform every aspect of sports — from training and performance monitoring to fan engagement and digital ticketing.",
    items: [
      {
        id: "player-performance",
        icon: "Leaf", //BarChart3
        title: "Player Performance Tracking",
        subtitle: "",
        description:
          "Collect real-time data on player movements, stamina, and skills. Analyze metrics to optimize training sessions and recovery plans. " +
          "Identify performance patterns and track improvements over time. Use predictive insights to inform tactical decisions. " +
          "Ensure players achieve peak performance while minimizing injury risks.",
      },
      {
        id: "club-management",
        icon: "Leaf", //Shield
        title: "Club & League Management Systems",
        subtitle: "",
        description:
          "Simplify scheduling for matches, practices, and events across teams. Manage rosters, player stats, and contracts efficiently. " +
          "Streamline communications among staff, players, and stakeholders. Monitor financials and budgets in real time. " +
          "Maintain compliance with league rules and performance standards.",
      },
      {
        id: "smart-ticketing",
        icon: "Leaf", //Ticket
        title: "Digital Ticketing & Venue Access",
        subtitle: "",
        description:
          "Offer secure, paperless ticketing for all sports events. Integrate mobile tickets with RFID and facial recognition. " +
          "Enable fast and contactless venue entry for fans. Monitor attendance and access patterns efficiently. " +
          "Provide personalized offers and seamless event experiences.",
      },
      {
        id: "fan-platforms",
        icon: "Leaf", //Users
        title: "Fan Experience & Engagement Platforms",
        subtitle: "",
        description:
          "Deliver personalized content and interactive experiences to fans. Offer live statistics, polls, and gamified challenges. " +
          "Encourage social sharing and community interaction. Track engagement and preferences for better targeting. " +
          "Strengthen loyalty and grow your fan base through immersive digital experiences.",
      },
      {
        id: "sports-analytics",
        icon: "Leaf", //Cpu
        title: "Sports Data Analytics & BI Dashboards",
        subtitle: "",
        description:
          "Collect and visualize key performance metrics across players and teams. Use AI and machine learning for trend prediction. " +
          "Generate actionable insights for coaching and strategy development. Compare historical data to current performance. " +
          "Empower decision-makers with interactive, real-time dashboards.",
      },
      {
        id: "broadcast-tools",
        icon: "Leaf", //Video
        title: "Live Streaming & Broadcast Tools",
        subtitle: "",
        description:
          "Deliver high-quality live streaming for games and events. Integrate real-time stats and interactive features. " +
          "Engage remote audiences through chat, polls, and instant replays. Monitor viewership and analytics for better insights. " +
          "Provide seamless experiences across web and mobile platforms.",
      },
    ],
    linkText: "Explore Sports Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Comprehensive Sports Management Ecosystem",
    subtitle:
      "Digitize and optimize every aspect of sports management — from player performance and team operations to fan experience and sponsorship growth.",
    subtitleLink: { text: "sports management software", url: "#" },
    laptopImage: "/images/sports-laptop.jpg",
    mobileImage: "/images/sports-mobile.jpg",
    topFeatures: [
      {
        id: "match-analytics",
        icon: "map", //TrendingUp
        title: "Match & Performance Analytics",
        description:
          "Track in-game statistics, analyze team dynamics, and generate post-match insights with AI-driven dashboards.",
      },
      {
        id: "training-management",
        icon: "map", //ClipboardList
        title: "Training & Fitness Management",
        description:
          "Plan, track, and optimize athlete training sessions using data from wearables and motion sensors.",
      },
      {
        id: "communication-platform",
        icon: "map", //MessageSquare
        title: "Centralized Communication Platform",
        description:
          "Unify communication among coaches, players, and management for seamless coordination and decision-making.",
      },
    ],
    bottomFeatures: [
      {
        id: "fan-insights",
        icon: "map", //PieChart
        title: "Fan Behavior & Marketing Insights",
        description:
          "Gain a deep understanding of fan preferences, habits, and engagement trends. " +
          "Analyze attendance patterns and content interaction across all channels. " +
          "Segment your audience for highly targeted campaigns. " +
          "Use insights to boost ticket sales, merchandise, and event participation. " +
          "Drive better marketing decisions and increase overall fan loyalty.",
      },
      {
        id: "data-security",
        icon: "map", //Shield
        title: "Data Security & Compliance",
        description:
          "Protect athlete and fan information with state-of-the-art encryption. " +
          "Implement secure access protocols for all platforms and devices. " +
          "Ensure compliance with GDPR and other privacy regulations. " +
          "Regularly audit systems to prevent breaches and unauthorized access. " +
          "Maintain trust and integrity across all sports data management activities.",
      },
      {
        id: "mobile-experience",
        icon: "map", //Smartphone
        title: "Mobile Experience for Teams & Fans",
        description:
          "Deliver a seamless mobile-first experience for fans and team members. " +
          "Provide instant access to schedules, analytics, and live updates. " +
          "Enable interactive features like fan polls, messaging, and content sharing. " +
          "Optimize performance across devices for smooth engagement. " +
          "Enhance fan satisfaction and increase team interaction on the go.",
      },
      {
        id: "sponsorship-analytics",
        icon: "map", //DollarSign
        title: "Sponsorship Analytics & ROI Tracking",
        description:
          "Measure brand visibility and engagement from sponsorships in real time. " +
          "Track conversion metrics and revenue generated from campaigns. " +
          "Evaluate audience interactions and demographic impact. " +
          "Provide detailed reporting for sponsors to optimize future deals. " +
          "Maximize ROI and strengthen long-term sponsorship relationships.",
      },
    ],
    ctaText: "BUILD YOUR SPORTS PLATFORM",
    onCtaClick: () => {},
  },

  managementSolutionsTwo: {
    title: "Sports Management Software Solutions",
    subtitle:
      "Our sports software developers create advanced platforms to manage leagues, teams, and tournaments efficiently. Enhance fan engagement and optimize sports operations digitally.",
    subtitleLink: { text: "sports management software", url: "#" },
    laptopImage: "/images/sports-management.jpg",
    mobileImage: "/images/sports-management-mobile.jpg",

    topFeatures: [
      {
        id: "team-management",
        icon: "Users",
        title: "Team & Player Management Systems",
        description:
          "Track player stats, attendance, and performance efficiently. Streamline team rosters, training schedules, and transfers.",
        link: { text: "team management software", url: "#" },
      },
      {
        id: "tournament-platform",
        icon: "Calendar",
        title: "Tournament & League Management Platforms",
        description:
          "Organize tournaments, fixtures, and standings seamlessly. Automate scheduling and scoring for leagues of all sizes.",
        link: { text: "tournament software", url: "#" },
      },
      {
        id: "fan-engagement",
        icon: "Heart",
        title: "Fan Engagement & Loyalty Tools",
        description:
          "Enhance fan interaction with live scores, notifications, and polls. Reward loyal fans with gamified experiences and promotions.",
        link: { text: "fan engagement software", url: "#" },
      },
      {
        id: "analytics-insights",
        icon: "BarChart",
        title: "Sports Analytics & Performance Insights",
        description:
          "Monitor player performance, match statistics, and trends. Use insights to improve strategies and team performance.",
        link: { text: "sports analytics software", url: "#" },
      },
    ],

    bottomFeatures: [
      {
        id: "custom-apps",
        icon: "Smartphone",
        title: "Custom Sports App Development",
        description:
          "Build apps for fans, players, and coaches. Ensure smooth experience across mobile and web platforms.",
      },
      {
        id: "live-tracking",
        icon: "Radar",
        title: "Live Match & Score Tracking Tools",
        description:
          "Provide real-time match updates and scores. Keep fans informed and engaged throughout the game.",
      },
      {
        id: "rewards-system",
        icon: "Trophy",
        title: "Player & Fan Rewards Management",
        description:
          "Automate rewards, points, and achievements. Encourage participation and loyalty for players and fans.",
      },
      {
        id: "admin-dashboard",
        icon: "Settings",
        title: "Sports Administration Dashboards",
        description:
          "Manage teams, tournaments, and payments from one place. Gain quick insights with reports and analytics.",
      },
    ],

    ctaText: "GET SPORTS SOFTWARE DEVELOPERS",
    onCtaClick: "/contact-us",
  },

  faq: {
    title: "Sports Industry FAQ",
    items: [
      {
        id: "1",
        question:
          "How can technology improve sports performance and management?",
        answer:
          "Technology enhances sports performance by tracking athlete metrics, analyzing gameplay, and optimizing training plans. Sports management systems also streamline event scheduling, team coordination, and fan engagement through real-time data insights.",
      },
      {
        id: "2",
        question: "What is sports analytics and how is it used by teams?",
        answer:
          "Sports analytics involves collecting and analyzing performance data to improve decision-making. Coaches and analysts use it to assess player efficiency, develop strategies, predict outcomes, and prevent injuries through data-driven insights.",
      },
      {
        id: "3",
        question: "Can AI and machine learning be applied in sports?",
        answer:
          "Yes. AI and machine learning power predictive models, video analysis, and performance tracking tools. These technologies identify patterns, evaluate opponent tactics, and help coaches and athletes make smarter, faster decisions.",
      },
      {
        id: "4",
        question: "How do digital platforms enhance fan engagement in sports?",
        answer:
          "Digital sports platforms create immersive fan experiences with live stats, interactive content, fantasy leagues, and social media integration. They enable fans to connect deeply with their favorite teams and events in real time.",
      },
      {
        id: "5",
        question: "What role does data security play in sports technology?",
        answer:
          "Sports data includes sensitive athlete performance and health information. Secure platforms use encryption, access control, and compliance protocols to safeguard this data, ensuring integrity and privacy for all stakeholders.",
      },
      {
        id: "6",
        question:
          "How can sports organizations benefit from custom software solutions?",
        answer:
          "Custom sports software helps organizations manage tournaments, player contracts, ticketing, and sponsorships efficiently. Tailored platforms integrate analytics, CRM, and media tools to deliver end-to-end operational excellence.",
      },
      {
        id: "7",
        question: "What technologies are shaping the future of sports?",
        answer:
          "Emerging technologies like VR training, wearable sensors, blockchain ticketing, and AI analytics are redefining sports. These innovations enhance performance, transparency, and fan interaction on and off the field.",
      },
      {
        id: "8",
        question: "How do wearable devices contribute to athlete development?",
        answer:
          "Wearables collect real-time biometric data such as heart rate, movement, and fatigue levels. This information helps coaches monitor fitness, prevent injuries, and customize training programs for peak performance.",
      },
      {
        id: "9",
        question: "Can technology assist in organizing large sports events?",
        answer:
          "Absolutely. Sports event management software automates registration, scheduling, ticketing, and live updates. It ensures smooth coordination among teams, sponsors, and fans while enhancing the overall event experience.",
      },
      {
        id: "10",
        question:
          "What is the impact of virtual and augmented reality in sports?",
        answer:
          "VR and AR are revolutionizing sports by enabling immersive training simulations, interactive broadcasts, and fan experiences. They allow athletes to practice scenarios safely and fans to engage with the game like never before.",
      },
    ],
  },
};
