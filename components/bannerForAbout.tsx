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
        src="https://cdn.pixabay.com/photo/2019/09/30/15/22/businesswoman-4516040_1280.jpg" // 👈 replace with your image path
        alt="Banner Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gray-900/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold leading-snug">
          We are{" "}
          <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
            Building Smarter Digital Solutions
          </span>
        </h1>

        <p className="text-base md:text-lg text-blue-100 max-w-xl mx-auto">
          We combine bold ideas and smart technology to build agile, scalable,
          and impactful products that drive growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition flex items-center gap-2"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
         
        </div>
      </div>
    </section>
  );
};

export default Banner;
