"use client";
import React from "react";
import {
  Map,
  Box,
  Sliders,
  Monitor,
  Droplets,
  TestTube,
  Settings,
} from "lucide-react";
import { ServiceConfig } from "@/types/services";

const iconsMap: Record<string, React.ReactNode> = {
  map: <Map className="w-16 h-16 text-amber-500" />,
  box: <Box className="w-16 h-16 text-amber-500" />,
  sliders: <Sliders className="w-16 h-16 text-amber-500" />,
  monitor: <Monitor className="w-16 h-16 text-amber-500" />,
  droplets: <Droplets className="w-16 h-16 text-amber-500" />,
  testTube: <TestTube className="w-16 h-16 text-amber-500" />,
  settings: <Settings className="w-16 h-16 text-amber-500" />,
};

const ManagementSolutions: React.FC<{
  managementSolutions: ServiceConfig["managementSolutions"];
}> = ({ managementSolutions }) => {
  if (!managementSolutions || !managementSolutions.topFeatures) return null;
  const renderDescription = (
    description: string,
    link?: { text: string; url: string }
  ) => {
    if (!link) return description;

    const parts = description.split(link.text);
    return (
      <>
        {parts[0]}
        <a
          href={link.url}
          className="text-cyan-600 hover:text-cyan-700 font-medium"
        >
          {link.text}
        </a>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {managementSolutions.title}
          </h1>
          {managementSolutions.subtitle}
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Laptop Mockup */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <div className="bg-gray-900 rounded-t-2xl p-3 shadow-2xl">
                <div className="bg-white rounded-lg overflow-hidden aspect-video">
                  {managementSolutions.laptopImage ? (
                    <img
                      src={managementSolutions.laptopImage}
                      alt="Land management dashboard"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
                      <div className="grid grid-cols-3 gap-2 w-full h-full">
                        <div className="bg-white rounded shadow p-2 flex flex-col gap-1">
                          <div className="h-8 bg-gray-200 rounded"></div>
                          <div className="flex-1 bg-green-400 rounded"></div>
                        </div>
                        <div className="col-span-2 grid grid-rows-2 gap-2">
                          <div
                            className="bg-white rounded shadow"
                            style={{
                              backgroundImage:
                                "linear-gradient(to bottom, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1))",
                            }}
                          ></div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-white rounded shadow"></div>
                            <div className="bg-white rounded shadow"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-gray-800 h-4 rounded-b-2xl shadow-lg"></div>
            </div>
          </div>

          {/* Top Features */}
          <div className="space-y-8">
            {managementSolutions?.topFeatures.map((feature) => (
              <div key={feature.id} className="flex gap-6 group">
                <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {iconsMap[feature.icon]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {renderDescription(feature.description, feature.link)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button
            onClick={managementSolutions.onCtaClick}
            className="inline-block px-12 py-4 border-2 border-orange-500 text-orange-500 font-bold text-lg rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            {managementSolutions.ctaText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagementSolutions;
