"use client";

import Image from "next/image";
import React from "react";

interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
}

const StrategicPartners: React.FC = () => {
  const partners: Partner[] = [
    {
      id: 1,
      name: "Google Partner",
      logo: "/partners/googlePartner.png",
      description:
        "Google partner that offers consulting, implementation, and managed services for Salesforce products and solutions.",
    },
    {
      id: 2,
      name: "Heyo",
      logo: "/partners/heyo.png",
      description:
        "Heyo partner that offers consulting, implementation, and managed services for Salesforce products and solutions.",
    },
    {
      id: 3,
      name: "Razorpay",
      logo: "/partners/razorpay.png",
      description:
        "Razorpay partner that offers consulting, implementation, and managed services for Salesforce products and solutions.",
    },
    {
      id: 4,
      name: "GoDaddy",
      logo: "/partners/godaddy.png",
      description:
        "GoDaddy partner that offers consulting, implementation, and managed services for Salesforce products and solutions.",
    },
    {
      id: 5,
      name: "milesweb",
      logo: "/partners/milesweb.png",
      description:
        "Milesweb partner that offers consulting, implementation, and managed services for Salesforce products and solutions.",
    },
    {
      id: 6,
      name: "India Mart",
      logo: "/partners/indiaMart.png",
      description:
        "India Mart alliance partner offers comprehensive cloud services, including consulting, implementation and integration for NetSuite products.",
    },
    {
      id: 7,
      name: "Microsoft",
      logo: "/partners/microsoft.png",
      description:
        "Microsoft gold partners provide custom consulting for Microsoft products like Azure and Dynamics, ensuring robust and scalable business solutions.",
    },
    {
      id: 8,
      name: "Adobe",
      logo: "/partners/adobe.png",
      description:
        "Adobe partner that offers consulting, implementation, and managed services for Adobe products and solutions.",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
          Our Strategic Partners
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-left text-left group"
            >
              <div className="relative w-28 h-16 mb-4 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 200px, 350px"
                />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPartners;
