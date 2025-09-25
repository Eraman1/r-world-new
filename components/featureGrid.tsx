"use client";

import React from "react";

interface Feature {
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        title: "Industry-Specific Teams",
        description:
            "Technical teams experienced in your industry. Understanding your needs faster and adding value to your vision.",
    },
    {
        title: "Flexible Working Models",
        description:
            "We offer onshore, nearshore, and offshore models delivering real-time collaboration.",
    },
    {
        title: "Trustworthy Partner",
        description:
            "24-year-old US Corporation governed by local laws. 2800+ employees.",
    },
    {
        title: "Very Cost-Effective",
        description:
            "For the value we bring, we are the most cost effective software solutions provider.",
    },
];

const FeaturesGrid: React.FC = () => {
    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="border border-blue-600/50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 bg-white/80 hover:bg-blue-50"
                    >
                        <h3 className="text-lg font-semibold text-amber-500 mb-3">
                            {feature.title}
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesGrid;
