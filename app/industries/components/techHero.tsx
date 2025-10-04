import React from "react";
import {
  Tractor,
  Beef,
  Warehouse,
  Wheat,
  Fish,
  ShoppingCart,
  PlaneTakeoff,
  FileCheck,
} from "lucide-react";
import Image from "next/image";
import { IndustryConfig } from "@/types/industries";

const iconMap: Record<string, React.ReactNode> = {
  Tractor: <Tractor className="w-12 h-12 text-amber-500" />,
  Beef: <Beef className="w-12 h-12 text-amber-500" />,
  Warehouse: <Warehouse className="w-12 h-12 text-amber-500" />,
  Wheat: <Wheat className="w-12 h-12 text-amber-500" />,
  Fish: <Fish className="w-12 h-12 text-amber-500" />,
  ShoppingCart: <ShoppingCart className="w-12 h-12 text-amber-500" />,
  PlaneTakeoff: <PlaneTakeoff className="w-12 h-12 text-amber-500" />,
  FileCheck: <FileCheck className="w-12 h-12 text-amber-500" />,
};

const TechHero: React.FC<{ data: IndustryConfig["techHero"] }> = ({ data }) => {
  if (!data) return null; 
  const { heading, description, services = [], deviceImages } = data;

  return (
    <div className="w-full bg-white py-12 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {heading}
          </h1>

          <p className="text-sm sm:text-base text-gray-700 max-w-6xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Services and Devices Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-16">
          {/* Left Services */}
          <div className="lg:col-span-3 space-y-10">
            {services
              .filter((s) => s.position === "left")
              .map((service) => (
                <div
                  key={service.id}
                  className="flex items-center gap-4 bg-white shadow-md p-4 rounded-xl"
                >
                  {iconMap[service.icon]}
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                </div>
              ))}
          </div>

          {/* Center Devices Mockup */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            <div className="relative w-full max-w-4xl">
              {/* Laptop */}
              <div className="relative z-10">
                <div className="bg-gray-900 rounded-t-2xl p-2 shadow-2xl">
                  <div className="bg-white rounded-lg overflow-hidden aspect-video">
                    {deviceImages?.laptop ? (
                      <Image
                        src={deviceImages.laptop} // 👈 fallback if not provided
                        alt="Laptop dashboard"
                        width={600} // set appropriate width
                        height={400} // set appropriate height
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-2 p-4 w-full h-full">
                          <div className="bg-white rounded shadow p-2">
                            <div className="h-full bg-gradient-to-br from-green-400 to-green-500 rounded"></div>
                          </div>
                          <div className="bg-white rounded shadow p-2 space-y-2">
                            <div className="h-1/2 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded"></div>
                            <div className="h-1/2 bg-gradient-to-br from-lime-400 to-lime-500 rounded"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-gray-800 h-3 rounded-b-2xl shadow-lg"></div>
              </div>

              {/* Tablet */}
              <div className="absolute bottom-0 left-0 w-1/3 z-20 transform translate-y-8 -translate-x-4">
                <div className="bg-gray-900 rounded-2xl p-3 shadow-2xl">
                  <div className="bg-white rounded-lg overflow-hidden aspect-[3/4]">
                    {deviceImages?.tablet ? (
                      <img
                        src={deviceImages.tablet}
                        alt="Tablet dashboard"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center p-3">
                        <div className="w-full h-full space-y-2">
                          <div className="h-1/3 bg-white rounded shadow"></div>
                          <div className="h-1/3 bg-white rounded shadow"></div>
                          <div className="h-1/3 bg-white rounded shadow"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile */}
              <div className="absolute bottom-0 left-1/4 w-1/6 z-30 transform translate-y-16">
                <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden aspect-[9/19]">
                    {deviceImages?.mobile ? (
                      <img
                        src={deviceImages.mobile}
                        alt="Mobile dashboard"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-50"></div>
                    )}
                  </div>
                </div>
              </div>

              {/* Desktop Monitor */}
              <div className="absolute bottom-0 right-0 w-2/5 z-20 transform translate-y-12 translate-x-4">
                <div className="bg-gray-900 rounded-t-xl p-2 shadow-2xl">
                  <div className="bg-white rounded-lg overflow-hidden aspect-[4/3]">
                    {deviceImages?.laptop ? (
                      <img
                        src={deviceImages.laptop}
                        alt="Desktop dashboard"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center p-2">
                        <div className="grid grid-cols-2 gap-2 w-full h-full">
                          <div className="space-y-1">
                            <div className="h-1/3 bg-white rounded shadow"></div>
                            <div className="h-2/3 bg-white rounded shadow"></div>
                          </div>
                          <div className="bg-white rounded shadow"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-gray-800 h-2 rounded-b-xl shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Right Services */}
          <div className="lg:col-span-3 space-y-8">
            {services
              .filter((s) => s.position === "right")
              .map((service) => (
                <div
                  key={service.id}
                  className="flex items-center gap-4 bg-white shadow-md p-4 rounded-xl"
                >
                  {iconMap[service.icon]}
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechHero;
