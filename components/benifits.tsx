import React from "react";
import { TrendingUp, Clock, Rocket } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    percentage: "80%",
    title: "ROI",
    subtitle: "INCREASE",
    label: "Return on Investment Boost",
    description:
      "Our innovative solutions deliver measurable results, maximizing your investment with cutting-edge technology and strategic implementation.",
    color: "from-[#FCA311] to-[#FCA311]/70",
  },
  {
    icon: Rocket,
    percentage: "60%",
    title: "FASTER",
    subtitle: "DELIVERY",
    label: "Accelerated Time to Market",
    description:
      "Launch your products faster with our agile methodology and experienced team. Stay ahead of competition with rapid development cycles.",
    color: "from-[#14213D] to-[#14213D]/70",
  },
  {
    icon: Clock,
    percentage: "40%",
    title: "TIME",
    subtitle: "SAVED",
    label: "Efficiency Optimization",
    description:
      "Streamline operations and reduce overhead with our automated solutions and industry best practices, focusing on what matters most.",
    color: "from-[#FCA311] to-[#FCA311]/70",
  },
];

export default function RWorldBenefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#14213D] mb-6">
            Accelerate Your <span className="text-[#FCA311]">Success</span>
          </h2>
          <p className="text-xl text-[#14213D]/70 max-w-3xl mx-auto">
            Transform your business with data-driven solutions and measurable
            results
          </p>
        </div>

        {/* Main Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8 ">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                {/* Top Section with Percentage + Icon */}
                <div className="flex items-center justify-between mb-6">
                  {/* Percentage + Title */}
                  <div>
                    <div className="text-6xl font-black bg-gradient-to-r from-[#FCA311] to-[#FCA311]/70 bg-clip-text text-transparent">
                      {benefit.percentage}
                    </div>
                    <h3 className="text-3xl font-bold text-[#14213D] mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-lg font-semibold text-[#FCA311]">
                      {benefit.subtitle}
                    </p>
                  </div>

                  {/* Icon on Right */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#14213D] to-[#14213D]/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-[#FCA311]" />
                  </div>
                </div>

                {/* Divider */}
                <div className="w-16 h-1 bg-[#FCA311] mb-4 group-hover:w-full transition-all duration-300"></div>

                {/* Label */}
                <h4 className="text-lg font-bold text-[#14213D] mb-3">
                  {benefit.label}
                </h4>

                {/* Description */}
                <p className="text-[#14213D]/70 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FCA311]/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
