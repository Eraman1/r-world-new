"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
type BannerProps = {
  data: {
    title: string;
    subtitle?: string;
    image?: string;
    linkText?: string;
    highlight?: string;
  };
};

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={
          data.image ||
          "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg"
        } // 👈 replace with your image path
        alt="{data.title}"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-blue-900/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold leading-snug">
          {data.title}{" "}
          {data.highlight && (
            <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
              {data.highlight}
            </span>
          )}
        </h1>

        <p className="text-base md:text-lg text-blue-100 max-w-xl mx-auto">
          {data.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact-us"
            className="px-6 py-3 border border-amber-500 text-white font-medium rounded-full hover:bg-blue-500/10 transition"
          >
            {data.linkText || "Contact Us"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
