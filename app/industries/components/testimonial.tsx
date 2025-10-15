"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: string;
  text: string;
  author: string;
  position: string;
  industry: string;
  rating?: number;
  avatar?: string;
}

interface TestimonialsProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function Testimonials({
  title,
  subtitle,
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length, autoPlayInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 2; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {getVisibleTestimonials().map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="group relative animate-in fade-in duration-500"
              >
                {/* Card Background with gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>

                <div className="relative bg-slate-700/50 backdrop-blur-xl border border-slate-600/50 group-hover:border-teal-500/50 rounded-2xl p-8 md:p-10 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20">
                  {/* Star Rating */}
                  {testimonial.rating && (
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  )}

                  {/* Opening Quote Mark */}
                  <div className="mb-6">
                    <svg
                      className="w-16 h-16 text-teal-400/30 group-hover:text-teal-400/60 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M4 8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4v4c0 1.1-.9 2-2 2H2v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2H4v-4zm16 0c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4v4c0 1.1-.9 2-2 2h-4v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-8v-4z" />
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-200 leading-relaxed mb-8 flex-grow text-base md:text-lg font-light">
                    {testimonial.text}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-teal-500/20 to-blue-500/20 mb-8"></div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {testimonial.avatar && (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-14 h-14 rounded-full object-cover border-2 border-teal-400/30"
                      />
                    )}
                    <div>
                      <p className="font-bold text-white text-lg">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-slate-400">
                        {testimonial.position}
                      </p>
                      <p className="text-xs text-teal-400 font-medium">
                        {testimonial.industry}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={goToPrevious}
              className="p-3 bg-slate-700/50 hover:bg-teal-500 text-slate-300 hover:text-white border border-slate-600 hover:border-teal-500 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-teal-500 w-8 h-3 shadow-lg shadow-teal-500/50"
                      : "bg-slate-600 hover:bg-slate-500 w-3 h-3"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 bg-slate-700/50 hover:bg-teal-500 text-slate-300 hover:text-white border border-slate-600 hover:border-teal-500 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-8">
            <p className="text-slate-400 text-sm">
              <span className="text-teal-400 font-bold">
                {currentIndex + 1}
              </span>{" "}
              / <span>{testimonials.length}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
