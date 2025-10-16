"use client";

import Image from "next/image";
import React from "react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string; // you can use lucide-react icons or custom svgs
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Call Center Integrations",
    description:
      "Expertly incorporate call center integrations like Twilio and RingCentral into your customized CRM to schedule inbound and outbound calls, automate routing and call recording, and reduce wait times, greatly elevating overall customer experience.",
    icon: "/icons/call.svg",
  },
  {
    id: 2,
    title: "Opportunity Management",
    description:
      "Enable users to view every critical detail in their client’s activity timeline, including what stage the deal is in, which products are part of the deal, and what moves need to be made to close the deal, while building customer relationships in real-time.",
    icon: "/icons/checklist.svg",
  },
  {
    id: 3,
    title: "Sales Management",
    description:
      "Seamlessly integrate third-party applications, extensions, and plugins to get accurate, up-to-date sales data directly from your custom CRM so your sales team can make better decisions faster and more efficiently.",
    icon: "/icons/sales.svg",
  },
  {
    id: 4,
    title: "Lead Capture",
    description:
      "Gain full visibility and control of client contact information, manage and track marketing campaigns across channels, and implement successful lead management from capture to close.",
    icon: "/icons/lead.svg",
  },
];

const CRMServices: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Custom CRM Development Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Chetu develops <span className="text-blue-500">custom-tailored CRM systems</span>, implementing application development software features & functionalities that drive businesses forward.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center text-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={50}
                height={50}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Image
            src="/images/crm-dashboard.png"
            alt="CRM Dashboard"
            width={700}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CRMServices;
