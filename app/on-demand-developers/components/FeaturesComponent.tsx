import React from "react";
import { OnDemandDevelopersConfig } from "@/types/onDemandDevelopers";
import { Code, MessageSquare, Users, Search } from "lucide-react";

interface FeaturesProps {
  features?: OnDemandDevelopersConfig["features"];
}
const iconsMap: Record<string, React.ReactNode> = {
  code: <Code className="w-8 h-8 text-amber-500" />,
  messageSquare: <MessageSquare className="w-8 h-8 text-amber-500" />,
  users: <Users className="w-8 h-8 text-amber-500" />,
  search: <Search className="w-8 h-8 text-amber-500" />,
};

const FeaturesComponent: React.FC<FeaturesProps> = ({ features = [] }) => {
  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-100 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-gradient-to-br from-[#14213D] to-[#14213D]/80 p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {iconsMap[feature.icon]}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-extrabold text-gray-900 tracking-wider uppercase leading-tight">
                    {feature.title}
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#FCA311] to-[#FCA311]/70 rounded-full mx-auto group-hover:w-24 transition-all duration-300" />
                </div>

                <div className="space-y-3 pt-2">
                  {feature.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start space-x-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${itemIndex * 50}ms` }}
                    >
                      <div className="mt-1.5 w-2 h-2 bg-amber-500 rounded-full flex-shrink-0" />
                      <p className="text-sm text-gray-800 leading-snug font-medium text-left">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-400/10 to-transparent rounded-bl-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesComponent;
