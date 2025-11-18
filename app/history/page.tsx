import React from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string[];
}

interface Service {
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

const CompanyHistory: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      year: "2020",
      title: "The Foundation",
      description: [
        "Our journey officially started in a small office space in Noida with just a handful of dedicated team members and a strong determination to succeed. We began providing essential digital services such as website development, basic software solutions, and IT support.",
        "Word-of-mouth referrals played a crucial role in our early growth as businesses appreciated our honesty, timely delivery, and professional approach.",
      ],
    },
    {
      year: "2021",
      title: "Expansion & Innovation",
      description: [
        "We expanded our capabilities into mobile app development, custom software development, and UI/UX design, helping businesses digitize operations and streamline internal processes.",
        "This period marked the beginning of our investment in research, new technologies, and skill development. We made it a priority to stay updated with modern tools, programming languages, architecture patterns, and security standards.",
      ],
    },
    {
      year: "2024",
      title: "Geographic Growth",
      description: [
        "As our client base grew, we opened our second branch in Delhi to support the growing demand. This strategic move helped us expand geographically and improve accessibility for clients.",
        "Our Delhi branch focuses on client engagement, support services, and business development, while the Noida office acts as our core development center.",
      ],
    },
    {
      year: "2025",
      title: "The Journey Continues",
      description: [
        "Today, we stand as a growing IT organization with offices in Noida and Delhi, built on trust, quality, and innovation. We've worked with clients from multiple industries including retail, manufacturing, healthcare, education, logistics, and hospitality.",
        "Every milestone achieved reminds us of the responsibility we carry—to help businesses unlock their full potential through technology.",
      ],
    },
  ];

  const services: Service[] = [
    {
      title: "ERP Systems",
      description: "Enterprise resource planning solutions",
    },
    {
      title: "Cloud Services",
      description: "Migration and infrastructure setup",
    },
    {
      title: "E-commerce Platforms",
      description: "Complete online store solutions",
    },
    { title: "Custom Systems", description: "Billing, accounting & inventory" },
    { title: "API Development", description: "Integration and automation" },
    { title: "IT Consulting", description: "Security and strategic guidance" },
    { title: "AI & ML", description: "Intelligent automation solutions" },
    { title: "Branding & Design", description: "Graphic design services" },
  ];

  const stats: Stat[] = [
    { value: "2020", label: "Year Founded" },
    { value: "2", label: "Office Locations" },
    { value: "5+", label: "Years of Excellence" },
    { value: "100+", label: "Happy Clients" },
  ];

  return (
    <div className="min-h-screen bg-blue-200">
      {/* Header */}
      <header className="text-center py-16 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white  mb-4 drop-shadow-lg">
          Our Journey
        </h1>
        <p className="text-xl md:text-2xl text-white font-semibold drop-shadow-lg ">
          From Vision to Reality: The Story of Innovation and Growth
        </p>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Intro Section */}
          <div className="bg-blue-900/80 text-white rounded-2xl p-8 md:p-10 mb-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Where It All Began
            </h2>
            <p className="text-lg leading-relaxed">
              Founded in 2020, our company began with a simple yet powerful
              vision—to deliver world-class Information Technology solutions
              that empower businesses to work smarter, faster, and more
              efficiently. What started as a small team of passionate IT
              professionals in Noida has now evolved into a trusted and steadily
              growing technology company serving clients across India and
              abroad.
            </p>
          </div>

          {/* Timeline Section */}
          <div className="relative py-12">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {timelineData.map((item, index) => (
              <div key={item.year} className="relative mb-12 md:mb-16">
                {/* Year Badge */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-20 h-20 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-white shadow-lg z-10">
                  {item.year}
                </div>

                {/* Content */}
                <div
                  className={`ml-32 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-16"
                      : "md:ml-auto md:pl-16"
                  }`}
                >
                  <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">
                      {item.title}
                    </h3>
                    {item.description.map((para, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed mb-3">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 md:p-10 my-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our Advanced IT Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-blue-200 text-blue-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </h3>
                <p className="text-amber/90 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="bg-white text-blue-900 rounded-2xl p-8 md:p-12 my-12 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              To deliver modern, scalable, and cost-effective IT solutions that
              empower businesses and create digital transformation. We firmly
              believe that technology is the backbone of future businesses, and
              we aim to help companies adopt the right solutions through expert
              guidance, development, and long-term support.
            </p>
          </div>

          {/* Commitment Section */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-2xl p-8 md:p-10 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Commitment
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              One of our biggest strengths is our team. We have built a strong
              workforce of skilled developers, designers, testers, project
              managers, and support engineers who are passionate about
              delivering excellence. Our work culture emphasizes transparency,
              responsibility, teamwork, and customer satisfaction.
            </p>
            <p className="text-lg leading-relaxed">
              Looking ahead, we are committed to expanding our presence,
              strengthening our team, introducing more innovative solutions, and
              continuing our journey as a reliable IT partner. From 2020 to
              today, our story has been one of growth, commitment, and
              continuous improvement. And this is just the beginning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;


