"use client";

import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
  url?: string;
}

const partners: Partner[] = [
  {
    name: "Heyo",
    logo: "/partners/heyo.png",
    url: "https://cloud.google.com",
  },
  {
    name: "Make in india",
    logo: "/partners/make-in-india.webp",
    url: "https://azure.microsoft.com",
  },
  {
    name: "Skill India",
    logo: "/partners/skill-india.png",
    url: "https://aws.amazon.com",
  },
  {
    name: "IBM Cloud",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    url: "https://www.ibm.com/cloud",
  },
];

export default function PartnersMarquee() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">


        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-12 animate-marquee py-3">
            {[...partners, ...partners].map((partner, idx) => (
              <a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-40 h-20 bg-white shadow rounded-xl p-4"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={50}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animation */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
