"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  image: string;
  title: string;
  quote: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=1000&fit=crop",
    title: "Innovation Meets Excellence",
    quote:
      "R-World transformed our digital landscape with cutting-edge solutions that exceeded expectations. Their commitment to quality and innovation set them apart.",
    author: "Sarah Mitchell",
    position: "Chief Executive Officer",
    company: "TechVision Inc",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop",
    title: "Exceptional Partnership",
    quote:
      "Working with R-World has been transformative. Their expertise and dedication helped us achieve milestones we thought were years away.",
    author: "Marcus Chen",
    position: "VP of Innovation",
    company: "Digital Dynamics",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1000&fit=crop",
    title: "Beyond Expectations",
    quote:
      "R-World doesn’t just deliver projects—they deliver excellence. Their innovative approach made them an invaluable partner in our growth journey.",
    author: "Jennifer Torres",
    position: "Product Director",
    company: "NextGen Solutions",
  },
];

export default function RWorldTestimonial() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-[#E5E5E5] flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#14213D] mb-4">
            Quality Software{" "}
            <span className="text-[#FCA311]">Matters to Us</span>
          </h2>
          <div className="w-20 h-1 bg-[#FCA311] mx-auto mt-4"></div>
        </div>

        {/* Carousel */}
        <div className="relative bg-[#14213D] rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Image */}
            <div className="relative h-[400px] md:h-[600px]">
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#14213D]/60"></div>

              {/* Image overlay title */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-semibold text-white drop-shadow-md">
                  {testimonials[current].title}
                </h3>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="p-6 md:p-12 flex flex-col justify-between">
              <div>
                {/* Quote */}
                <div className="mb-8">
                  <svg
                    className="w-12 h-12 text-[#FCA311] opacity-30 mb-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                  <p className="text-lg md:text-xl text-[#E5E5E5] leading-relaxed font-light">
                    {testimonials[current].quote}
                  </p>
                </div>

                {/* Author Info */}
                <div className="space-y-1 mb-8">
                  <p className="text-xl font-bold text-white">
                    {testimonials[current].author}
                  </p>
                  <p className="text-md text-[#FCA311]">
                    {testimonials[current].position}
                  </p>
                  <p className="text-sm text-[#E5E5E5]/70">
                    {testimonials[current].company}
                  </p>
                </div>

                {/* CTA Button */}
                <button className="group relative px-8 py-3 bg-transparent border-2 border-[#FCA311] text-[#FCA311] rounded-full font-medium text-md overflow-hidden transition-all duration-300 hover:text-black">
                  <span className="relative z-10">VIEW CASE STUDY</span>
                  <div className="absolute inset-0 bg-[#FCA311] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10">
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`rounded-full transition-all duration-300 ${
                        idx === current
                          ? "bg-[#FCA311] w-10 h-2"
                          : "bg-[#E5E5E5]/30 w-2 h-2 hover:bg-[#E5E5E5]/50"
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={prev}
                    className="p-2 rounded-full bg-black text-[#FCA311] hover:bg-[#FCA311] hover:text-black transition-all duration-300 border border-[#FCA311]"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    className="p-2 rounded-full bg-[#FCA311] text-black hover:bg-black hover:text-[#FCA311] transition-all duration-300 border border-[#FCA311]"
                    aria-label="Next"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
