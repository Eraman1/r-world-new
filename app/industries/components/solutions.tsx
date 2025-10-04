import React from "react";
import { Warehouse, Sprout, Leaf, Tractor, Shield, Bug } from "lucide-react";
import Link from "next/link";


interface Solution {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

interface SolutionsProps {
  mainTitle?: string;
  mainDescription?: string;
  solutions?: Solution[];
  linkText?: string;
  linkUrl?: string;
}

const iconsMap: Record<string, React.ReactNode> = {
  Warehouse: <Warehouse className="w-16 h-16 text-amber-500" />,
  Sprout: <Sprout className="w-16 h-16 text-amber-500" />,
  Leaf: <Leaf className="w-16 h-16 text-amber-500" />,
  Tractor: <Tractor className="w-16 h-16 text-amber-500" />,
  Shield: <Shield className="w-16 h-16 text-amber-500" />,
  Bug: <Bug className="w-16 h-16 text-amber-500" />,
};



const Solutions: React.FC<SolutionsProps> = ({
  mainTitle,
  mainDescription,
  solutions,
  linkText,
  linkUrl,
}) => {
  return (
    <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            {mainTitle}
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-6xl mx-auto leading-relaxed">
            {mainDescription}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {solutions && solutions.map((solution) => (
            <div
              key={solution.id}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                 {iconsMap[solution.icon]}
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                {solution.title}
              </h2>

              {/* Subtitle */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                {solution.subtitle}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <Link
          href={linkUrl || ""}
          className="px-6 py-3 border-2 border-amber-500  font-medium rounded-full hover:bg-blue-500/10 transition"
        >
          {linkText || "Learn More"}
        </Link>
      </div>
    </div>
  );
};

export default Solutions;
