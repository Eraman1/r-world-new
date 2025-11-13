"use client";
import React, { useState } from "react";
import {
  Briefcase,
  Users,
  TrendingUp,
  Award,
  Coffee,
  Heart,
  Zap,
  Globe,
  Mail,
  MessageCircle,
  X,
  MapPin,
  Timer,
  ChartArea,
} from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
}

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CareersPage: React.FC = () => {
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<string>("");

  const jobOpenings: JobOpening[] = [
    {
      id: "1",
      title: "SEO Specialist",
      department: "Digital Marketing",
      location: "Remote / Hybrid",
      type: "Full-time/Part-time",
      experience: "1+ years",
    },
    {
      id: "5",
      title: "React Native Developer",
      department: "Engineering",
      location: "Remote| Hybrid | On-site",
      type: "Full-time",
      experience: "Freshers - 2 years",
    },
  ];

  const benefits: Benefit[] = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance and wellness programs for you and your family",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description:
        "Continuous learning opportunities and clear career progression paths",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Work-Life Balance",
      description:
        "Flexible working hours and remote work options to suit your lifestyle",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Competitive Compensation",
      description:
        "Industry-leading salaries with performance bonuses and equity options",
    },
  ];

  const values: Value[] = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies and encourage creative problem-solving",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Culture",
      description:
        "We believe in teamwork and value every voice in our diverse team",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact",
      description:
        "Build solutions that make a difference for clients worldwide",
    },
  ];

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setShowResumeModal(true);
  };

  const handleSendEmail = () => {
    const subject = `Application for ${selectedJob}`;
    const body = `Hi,\n\nI am interested in applying for the position of ${selectedJob} at R-World Software Solutions.\n\nPlease find my resume attached.\n\nBest regards`;
    window.location.href = `mailto:support@rworldsoftware.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSendWhatsApp = () => {
    const message = `Hi, I am interested in applying for the position of ${selectedJob} at R-World Software Solutions. I would like to share my resume with you.`;
    window.open(
      `https://wa.me/918377832378?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900/80 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our World-Class Team
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Build innovative software solutions that drive business growth
              worldwide
            </p>
            <a
              href="#openings"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&#39;re not just building software—we&#39;re building careers,
              fostering innovation, and creating impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-amber-500 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="culture" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <div className="bg-amber-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your next opportunity and make an impact
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-lg  hover:shadow-lg transition-shadow border border-yellow-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Timer className="w-4 h-4" /> {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <ChartArea className="w-4 h-4" /> {job.experience}
                      </span>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => handleApplyClick(job.title)}
                      className="bg-amber-500 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-semibold transition-colors whitespace-nowrap"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900/80 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Don&#39;t See The Right Role?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We&#39;re always looking for talented individuals. Send us your
            resume and let&#39;s explore how you can contribute to our team.
          </p>
          <button
            onClick={() => handleApplyClick("General Application")}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
          >
            Send Your Resume
          </button>
        </div>
      </section>

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowResumeModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Submit Your Application
            </h3>
            <p className="text-gray-600 mb-6">
              Position: <span className="font-semibold">{selectedJob}</span>
            </p>

            <div className="space-y-4">
              <p className="text-gray-700 text-sm mb-6">
                Choose how you&#39;d like to send your resume:
              </p>

              <button
                onClick={handleSendEmail}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-md font-semibold transition-colors flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Send via Email
              </button>

              <button
                onClick={handleSendWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-md font-semibold transition-colors flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
              </button>
            </div>

            <p className="text-gray-500 text-xs mt-6 text-center">
              Email: support@rworldsoftware.in
              <br />
              WhatsApp: +91-8377832378
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;
