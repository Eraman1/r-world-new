"use client";
import React, { useState } from "react";
import {
  Brain,
  BarChart,
  Headphones,
  Monitor,
  ShieldCheck,
  Workflow,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Application Development",
    icon: Workflow,
    description: "Custom software solutions tailored to your needs",
  },
  {
    title: "Application Support",
    icon: Monitor,
    description: "24/7 maintenance and optimization services",
  },
  {
    title: "Business Intelligence & Reporting",
    icon: BarChart,
    description: "Transform data into actionable insights",
  },
  {
    title: "AI/ML and Data Science",
    icon: Brain,
    description: "Cutting-edge artificial intelligence solutions",
  },
  {
    title: "BPO and Non-Technical Processes",
    icon: Headphones,
    description: "Streamlined business process outsourcing",
  },
  {
    title: "Cloud, Infrastructure and Cybersecurity",
    icon: ShieldCheck,
    description: "Secure and scalable cloud solutions",
  },
  {
    title: "Quality Assurance",
    icon: FileCheck,
    description: "Rigorous testing for flawless performance",
  },
  {
    title: "Partner Product Support",
    icon: Monitor,
    description: "Expert third-party product integration",
  },
];

export default function Solutions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-[#E5E5E5] to-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#14213D] mb-6">
            Custom <span className="text-[#FCA311]">Solutions</span> Offerings
          </h2>
          <p className="text-xl text-[#14213D]/70 max-w-3xl mx-auto">
            From Concept to Code - Empowering Your Business with Innovative
            Technology
          </p>
          <div className="w-24 h-1 bg-[#FCA311] mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-white rounded-2xl p-8 transition-all duration-300 cursor-pointer border-2 ${
                  isHovered
                    ? "border-[#FCA311] shadow-2xl -translate-y-2"
                    : "border-[#E5E5E5] shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Decorative corner accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full transition-all duration-300 ${
                    isHovered ? "bg-[#FCA311]/10" : "bg-[#14213D]/5"
                  }`}
                ></div>

                {/* Icon Container */}
                <div className="relative mb-6 flex justify-center">
                  <div
                    className={`relative w-24 h-24 flex items-center justify-center transition-all duration-300 ${
                      isHovered ? "scale-110" : ""
                    }`}
                  >
                    {/* Hexagon background */}
                    <svg
                      className="absolute inset-0 w-full h-full transition-all duration-300"
                      viewBox="0 0 100 100"
                    >
                      <polygon
                        points="50 1 95 25 95 75 50 99 5 75 5 25"
                        className={`transition-all duration-300 ${
                          isHovered ? "fill-[#FCA311]" : "fill-[#14213D]"
                        }`}
                      />
                      <polygon
                        points="50 8 88 28 88 72 50 92 12 72 12 28"
                        className="fill-white"
                      />
                    </svg>

                    {/* Icon */}
                    <Icon
                      className={`w-10 h-10 relative z-10 transition-all duration-300 ${
                        isHovered ? "text-[#FCA311]" : "text-[#14213D]"
                      }`}
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="text-center mb-4">
                  <h3
                    className={`text-lg font-bold transition-colors duration-300 min-h-[3.5rem] flex items-center justify-center ${
                      isHovered ? "text-[#FCA311]" : "text-[#14213D]"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Description - appears on hover */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isHovered ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-[#14213D]/70 text-center mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div
                  className={`flex items-center justify-center gap-2 transition-all duration-300 ${
                    isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                >
                  <span className="text-sm font-semibold text-[#FCA311]">
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#FCA311]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="group relative px-10 py-4 bg-[#14213D] text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <span className="relative z-10 flex items-center gap-2">
              Explore All Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-[#FCA311] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
