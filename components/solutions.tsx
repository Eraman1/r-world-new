"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, BarChart, Cloud, Headphones, MonitorCog, ShieldCheck, Workflow, FileCheck } from "lucide-react";

const services = [
    { title: "Application Development", icon: Workflow },
    { title: "Application Support", icon: MonitorCog },
    { title: "Business Intelligence & Reporting", icon: BarChart },
    { title: "AI/ML and Data Science", icon: Brain },
    { title: "BPO and Non-Technical Processes", icon: Headphones },
    { title: "Cloud, Infrastructure and Cybersecurity", icon: ShieldCheck },
    { title: "Quality Assurance", icon: FileCheck },
    { title: "Partner Product Support", icon: MonitorCog },
];

const Solutions: React.FC = () => {
    return (
        <section className="py-16 max-w-6xl mx-auto px-6 bg-blue-50 rounded-3xl mb-16">
            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-bold text-slate-700 text-center mb-12">
                Custom <span className="text-amber-400 ">Solutions</span> Offerings From Concept to Code
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        className="bg-blue-50 text-center border-0 shadow-none  transition"
                    >
                        <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                            {/* Icon inside hexagon shape */}
                            <div className="w-20 h-20 flex items-center justify-center relative">
                                <div className="absolute inset-0 clip-hexagon border-2 border-sky-600"></div>
                                <service.icon className="w-10 h-10 text-sky-600 relative z-10" />
                            </div>

                            {/* Title inside rounded rectangle */}
                            <div className="px-5 py-2 border-2 border-amber-500 text-gray-700 rounded-full text-sm font-bold">
                                {service.title}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Solutions;

/* Add Tailwind plugin for hexagon clip */
