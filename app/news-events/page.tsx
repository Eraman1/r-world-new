"use client";

import React, { useState } from "react";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  author: string;
  link: string; // <-- added
}

interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: string;
}

const NewsEventsComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"news" | "events">("news");

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title:
        "R-World Strengthens Its Global IT Presence With Enhanced Security, Scalability, and Real-Time Support",
      excerpt:
        "In a period marked by rising digital demands and accelerated technological shifts, Noida-based R-World has emerged as a steady presence in the software development and IT consulting space. ",
      date: "Nov 17, 2025",
      category: "Company News",
      image: "/news/digitalScoop.png",
      author: "Digital Scpoop India",
      link: "https://digitalscoopindia.in/r-world-strengthens-its-global-it-presence-with-enhanced-security-scalability-and-real-time-support/",
    },
    {
      id: 2,
      title:
        "R-World Broadens Global IT Reach, Prioritizing Security, Scalability, and Instant Support",
      excerpt:
        "R-World Expands Global IT Presence with Focus on Security, Scalability, and Real-Time Support R-World Strengthens Its Global IT Services Portfolio Amid Rising Digital Demands.",
      date: "Nov 18, 2025",
      category: "Business Updates",
      image: "/news/FilmyBeat.png",
      author: "The Flimy Beat",
      link: "https://thefilmybeat.com/r-world-broadens-global-it-reach-prioritizing-security-scalability-and-instant-support/",
    },
    {
      id: 3,
      title:
        "R-World Expands Worldwide IT Operations, Emphasizing Security, Scalable Solutions, and Real-Time Assistance",
      excerpt:
        "In a period marked by rising digital demands and accelerated technological shifts, Noida-based R-World has emerged as a steady presence in the software development and IT consulting space.",
      date: "Nov 18, 2025",
      category: "Business Updates",
      image: "/news/BharatExclusive.png",
      author: "Bharat Exclusive",
      link: "https://bharatexclusive.com/r-world-expands-worldwide-it-operations-emphasizing-security-scalable-solutions-and-real-time-assistance/",
    },
    {
      id: 4,
      title:
        "R-World Advances Its International IT Services Strategy With Emphasis on Security, Scalability, and Real-Time Collaboration",
      excerpt:
        "R-World’s solution catalogue covers more than 40 domains, including cloud computing, CRM, ERP, GIS, telephony, digital asset management, wearable technology, mobile applications, document management, kiosk systems, animation and graphic design, and field service management.",
      date: "Nov 18, 2025",
      category: "Business Updates",
      image: "/news/TheEntrepreneurBytes.png",
      author: "The Entrepreneur Bytes",
      link: "https://medium.com/@theentrepreneurbytes.in/r-world-advances-its-international-it-services-strategy-with-emphasis-on-security-scalability-and-f7eef85d326f?postPublishedType=initial",
    },
    {
      id: 5,
      title:
        "R-World Expands Its Footprint in Global IT Services With Focus on Security, Scalability, and Real-Time Support",
      excerpt:
        "Founded as a full-service IT solutions provider, R-World delivers a broad spectrum of services—from custom software development and cloud solutions to advanced technology areas such as artificial intelligence, blockchain, AR/VR, biometrics, embedded systems, and IoT.",
      date: "Nov 18, 2025",
      category: "Business Updates",
      image: "/news/TheEntrepreneurBytesWeb.png",
      author: " The Entrepreneur Bytes",
      link: "https://theentrepreneurbytes.com/r-world-expands-its-footprint-in-global-it-services-with-focus-on-security-scalability-and-real-time-support/",
    },
    {
      id: 6,
      title:
        "R-World Boosts Its Global IT Services Portfolio With a Focus on Security, Scalability, and Live Support",
      excerpt:
        "The firm’s partnerships span leading global technology providers—AWS, Google Cloud, Microsoft, Autodesk, IBM, SAP, Oracle, Salesforce, and others—allowing its teams to work within established enterprise ecosystems.",
      date: "Nov 18, 2025",
      category: "Business Updates",
      image: "/news/IndianXpress.png",
      author: "Indian Xpress",
      link: "https://indian-xpress.com/blog/2025/11/18/r-world-boosts-its-global-it-services-portfolio-with-a-focus-on-security-scalability-and-live-support/",
    },
    {
      id: 7,
      title:
        "R-World Expands Its Footprint in Global IT Services With Focus on Security, Scalability, and Real-Time Support",
      excerpt:
        "In a period marked by rising digital demands and accelerated technological shifts, Noida-based R-World has emerged as a steady presence in the software development and IT consulting space. ",
      date: "Nov 18, 2025",
      category: "Business Updates",
      image: "/news/IndianFLux.png",
      author: "Indian Flux",
      link: "https://indianflux.com/r-world-expands-its-footprint-in-global-it-services-with-focus-on-security-scalability-and-real-time-support/",
    },
    {
      id: 8,
      title:
        "R-World Expands Its Footprint in Global IT Services With Focus on Security, Scalability, and Real-Time Support",
      excerpt:
        "In a period marked by rising digital demands and accelerated technological shifts, Noida-based R-World has emerged as a steady presence in the software development and IT consulting space. ",
      date: "Nov 18, 2025",
      category: "Business Updates",
      image: "/news/WebStoriesIndia.png",
      author: "Web Stories India",
      link: "https://webstoriesindia.com/r-world-expands-its-footprint-in-global-it-services-with-focus-on-security-scalability-and-real-time-support/",
    },
    {
      id: 9,
      title:
        "R-World Expands Its Footprint in Global IT Services With Focus on Security, Scalability, and Real-Time Support",
      excerpt:
        "In a period marked by rising digital demands and accelerated technological shifts, Noida-based R-World has emerged as a steady presence in the software development and IT consulting space. ",
      date: "Nov 18, 2025",
      category: "Business Updates",
      image: "/news/XpressTimes.png",
      author: "Xpress Times",
      link: "https://xpresstimes.in/r-world-expands-its-footprint-in-global-it-services-with-focus-on-security-scalability-and-real-time-support/",
    },
    {
      id: 10,
      title:
        "R-World Expands Its Footprint in Global IT Services With Focus on Security, Scalability, and Real-Time Support",
      excerpt:
        "In a period marked by rising digital demands and accelerated technological shifts, Noida-based R-World has emerged as a steady presence in the software development and IT consulting space. ",
      date: "Nov 18, 2025",
      category: "Business Updates",
      image: "/news/BestOfHindustan.png",
      author: "Best of Hindustan",
      link: "https://bestofhindustan.com/r-world-expands-its-footprint-in-global-it-services-with-focus-on-security-scalability-and-real-time-support/",
    },
    {
      id: 11,
      title:
        "R-World Software Solutions Accelerates Global IT Expansion, Centering on Robust Security, Scalable Solutions, and Continuous Support",
      excerpt:
        "In a period marked by rising digital demands and accelerated technological shifts, Noida-based R-World has emerged as a steady presence in the software development and IT consulting space.",
      date: "Nov 18, 2025",
      category: "Business Updates",
      image: "/news/FoxStoryIndia.png",
      author: "Fox Story India",
      link: "https://foxstoryindia.com/2025/11/18/r-world-software-solutions-accelerates-global-it-expansion-centering-on-robust-security-scalable-solutions-and-continuous-support/",
    },
  ];

  const events: EventItem[] = [
    // Empty for now
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            <span className="text-gradient-to-r from-blue-500 to-blue-700">
              News & Events
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings, announcements, and upcoming
            events at R-World
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-md inline-flex">
            <button
              onClick={() => setActiveTab("news")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "news"
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Latest News
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "events"
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Upcoming Events
            </button>
          </div>
        </div>

        {/* Content Area */}
        {activeTab === "news" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <Link href={item.link} target="_blank">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Tag size={14} />
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-slate-500 mb-3">
                      <Clock size={16} className="mr-2" />
                      {item.date} • {item.author}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-amber-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>

                    {/* Read More Link */}

                    <button className="text-amber-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          /* EVENTS SECTION */
          <div className="space-y-6">
            {events.length === 0 ? (
              <div className="bg-white text-center rounded-2xl shadow-lg p-10">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  No Upcoming Events
                </h3>
                <p className="text-slate-600">
                  There are currently no scheduled events. Please check back
                  later for updates.
                </p>
              </div>
            ) : (
              events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 text-center min-w-[140px]">
                      <div className="text-3xl font-bold mb-1">
                        {event.date.split(" ")[1].replace(",", "")}
                      </div>
                      <div className="text-sm opacity-90">
                        {event.date.split(" ")[0]} {event.date.split(" ")[2]}
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {event.type}
                        </span>
                        <div className="flex items-center text-slate-600 text-sm">
                          <Clock size={16} className="mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-slate-600 text-sm">
                          <Calendar size={16} className="mr-2" />
                          {event.location}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        {event.title}
                      </h3>
                      <p className="text-slate-600 mb-4">{event.description}</p>

                      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                        Register Now <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsEventsComponent;
