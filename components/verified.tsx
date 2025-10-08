"use client";

import Image from "next/image";
import React from "react";

const VerifiedBy: React.FC = () => {
  const certifications = [
    {
      id: 1,
      src: "/partners/googlePartner.png",
      alt: "Google Partner",
    },
    {
      id: 2,
      src: "/partners/iso.png",
      alt: "ISO 9001:2015 Certified",
    },
    {
      id: 3,
      src: "/partners/soc.jpeg",
      alt: "SOC 2 Type 2",
    },
    {
      id: 4,
      src: "/partners/great-place-to-work.jpeg",
      alt: "Great Place to Work Certified",
    },
  ];

  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900/80 mb-8">
          VERIFIED BY
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {certifications.map((item) => (
            <div key={item.id} className="relative w-40 h-20 md:w-48 md:h-24">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 160px, 200px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerifiedBy;
