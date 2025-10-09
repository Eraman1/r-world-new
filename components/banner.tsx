"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg" // 👈 replace with your image path
        alt="Banner Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-blue-900/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold leading-snug">
          Drive Innovation with{" "}
          <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
            World-Class Software Development
          </span>
        </h1>

        <p className="text-base md:text-lg text-blue-100 max-w-xl mx-auto">
          Partner with expert developers to build custom, scalable, and reliable
          software solutions that accelerate your business growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact-us"
            className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition flex items-center gap-2"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/On-Demand-Developers"
            className="px-6 py-3 border border-amber-500 text-white font-medium rounded-full hover:bg-blue-500/10 transition"
          >
            Hire Developers on Demand
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
