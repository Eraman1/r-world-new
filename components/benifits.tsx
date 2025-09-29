import React from 'react';
import { Zap, TrendingUp, Clock, Code, Rocket, Shield } from 'lucide-react';

const benefits = [
    {
        icon: TrendingUp,
        percentage: "80%",
        title: "ROI",
        subtitle: "INCREASE",
        label: "Return on Investment Boost",
        description: "Our innovative solutions deliver measurable results, maximizing your investment with cutting-edge technology and strategic implementation.",
        color: "from-[#FCA311] to-[#FCA311]/70"
    },
    {
        icon: Rocket,
        percentage: "60%",
        title: "FASTER",
        subtitle: "DELIVERY",
        label: "Accelerated Time to Market",
        description: "Launch your products faster with our agile methodology and experienced team. Stay ahead of competition with rapid development cycles.",
        color: "from-[#14213D] to-[#14213D]/70"
    },
    {
        icon: Clock,
        percentage: "40%",
        title: "TIME",
        subtitle: "SAVED",
        label: "Efficiency Optimization",
        description: "Streamline operations and reduce overhead with our automated solutions and industry best practices, focusing on what matters most.",
        color: "from-[#FCA311] to-[#FCA311]/70"
    }
];

const features = [
    {
        icon: Code,
        title: "Modern Technology Stack",
        description: "Leverage latest frameworks and tools"
    },
    {
        icon: Shield,
        title: "Enterprise-Grade Security",
        description: "Bank-level encryption and protection"
    },
    {
        icon: Zap,
        title: "Scalable Infrastructure",
        description: "Grow seamlessly with your business"
    }
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
                        Transform your business with data-driven solutions and measurable results
                    </p>
                </div>

                {/* Main Benefits Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                                
                                {/* Icon */}
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#14213D] to-[#14213D]/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-10 h-10 text-[#FCA311]" />
                                    </div>
                                </div>

                                {/* Percentage */}
                                <div className="mb-4">
                                    <div className="text-6xl font-black bg-gradient-to-r from-[#FCA311] to-[#FCA311]/70 bg-clip-text text-transparent">
                                        {benefit.percentage}
                                    </div>
                                </div>

                                {/* Title */}
                                <div className="mb-4">
                                    <h3 className="text-3xl font-bold text-[#14213D] mb-1">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-lg font-semibold text-[#FCA311]">
                                        {benefit.subtitle}
                                    </p>
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

                {/* Features Section */}
                <div className="bg-[#14213D] rounded-3xl p-12 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FCA311]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FCA311]/10 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                            Powered by <span className="text-[#FCA311]">Innovation</span>
                        </h3>

                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center text-center group"
                                    >
                                        <div className="w-16 h-16 rounded-xl bg-[#FCA311]/10 flex items-center justify-center mb-4 group-hover:bg-[#FCA311]/20 transition-colors duration-300">
                                            <Icon className="w-8 h-8 text-[#FCA311]" />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-2">
                                            {feature.title}
                                        </h4>
                                        <p className="text-white/70">
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div className="text-center mt-12">
                            <button className="group relative px-10 py-4 bg-[#FCA311] text-[#14213D] rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#FCA311]/50">
                                <span className="relative z-10">Start Your Journey</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                    {[
                        { number: "500+", label: "Projects Delivered" },
                        { number: "98%", label: "Client Satisfaction" },
                        { number: "50+", label: "Expert Team" },
                        { number: "24/7", label: "Support Available" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-4xl font-black text-[#FCA311] mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm font-semibold text-[#14213D]/70">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}