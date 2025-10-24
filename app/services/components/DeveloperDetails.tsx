"use client";

import { ServiceConfig } from "@/types/services";
import Image from "next/image";
import React from "react";


const DeveloperDetails: React.FC<{ developerDetails: ServiceConfig["developerDetails"] }> = ({ developerDetails }) => {
  if (
    !developerDetails ||
    !developerDetails.heading ||
    !developerDetails.subheading ||
    !developerDetails.mainTitle ||
    !developerDetails.mainDescription
  ) {
    return null;
  }

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mx-auto max-w-5xl mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {developerDetails.heading}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {developerDetails.subheading}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {developerDetails.mainTitle}
            </h3>
            <p className="text-gray-600 mb-8">
              {developerDetails.mainDescription}
            </p>

            <div className="space-y-6">
              {developerDetails.services?.map((service) => (
                <div key={service.id} className="flex items-start gap-4">
                  <div className="w-12 h-12 flex justify-center items-center border-2 border-blue-400 rounded-lg">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Laptop Image */}
          <div className="flex justify-center">
            <Image
              src={developerDetails.image}
              alt={developerDetails.mainTitle}
              width={700}
              height={450}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperDetails;
