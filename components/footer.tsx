import React from "react";
import { MapPin, Youtube } from "lucide-react";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

// interface FooterSection {
//     title: string;
//     links: FooterLink[];
// }

const Footer: React.FC = () => {
  const quickLinks: FooterLink[] = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "On-Demand Developers", href: "/developers" },
    { label: "Partners & Affiliations", href: "/partners" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
  ];

  const industries: FooterLink[] = [
    { label: "Agriculture", href: "/industries/agriculture" },
    { label: "Aviation", href: "/industries/aviation" },
    { label: "Casino", href: "/industries/casino" },
    { label: "Construction", href: "/industries/construction" },
    { label: "Corrections", href: "/industries/corrections" },
    { label: "E-Learning", href: "/industries/e-learning" },
    { label: "Energy", href: "/industries/energy" },
    { label: "Environmental", href: "/industries/environmental" },
    { label: "Finance", href: "/industries/finance" },
    { label: "Food & Beverage", href: "/industries/food-beverage" },
    { label: "Gaming", href: "/industries/gaming" },
  ];

  const additionalIndustries: FooterLink[] = [
    { label: "HCM", href: "/industries/hcm" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Hospitality", href: "/industries/hospitality" },
    { label: "Insurance", href: "/industries/insurance" },
    { label: "Legal", href: "/industries/legal" },
    { label: "Lending", href: "/industries/lending" },
    { label: "Oil & Gas", href: "/industries/oil-gas" },
    { label: "Payments", href: "/industries/payments" },
    { label: "Retail", href: "/industries/retail" },
    { label: "Sports", href: "/industries/sports" },
    { label: "Supply Chain", href: "/industries/supply-chain" },
  ];

  const bottomLinks: FooterLink[] = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Legal Policy", href: "/legal" },
    { label: "Careers", href: "/careers" },
    { label: "Sitemap", href: "/sitemap" },
    { label: "Referral", href: "/referral" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-100 relative">
      {/* Teal accent bar */}
      <div className="h-2 bg-sky-600"></div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-gray-800 mb-4">COMPANY</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                <div className="text-gray-700 text-sm">
                  <div>1500 Concord Ter.</div>
                  <div>Suite 100,</div>
                  <div>Sunrise, FL 33323</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700 text-sm">
                    Phone: 954 342 5676
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700 text-sm">
                    Phone: +44 137 243 2466
                  </span>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-block mt-6 px-6 py-2 border-2 border-amber-500 text-amber-500 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-colors duration-300"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-sky-600 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries - Column 1 */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-gray-800 mb-4">INDUSTRIES</h3>
            <ul className="space-y-2">
              {industries.map((industry, index) => (
                <li key={index}>
                  <Link
                    href={industry.href}
                    className="text-gray-700 hover:text-sky-600 transition-colors duration-200 text-sm"
                  >
                    {industry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries - Column 2 */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-gray-800 mb-4 lg:text-transparent">
              INDUSTRIES
            </h3>
            <ul className="space-y-2">
              {additionalIndustries.map((industry, index) => (
                <li key={index}>
                  <Link
                    href={industry.href}
                    className="text-gray-700 hover:text-sky-600 transition-colors duration-200 text-sm"
                  >
                    {industry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              CONNECT WITH US
            </h3>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors duration-300"
              >
                <span className="text-white font-bold text-sm">in</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors duration-300"
              >
                <span className="text-white font-bold text-sm">X</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors duration-300"
              >
                <span className="text-white font-bold text-sm">f</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors duration-300"
              >
                <span className="text-white text-xl">
                  <Youtube />{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-1 text-sm text-gray-600">
              {bottomLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-teal-600 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                  {index < bottomLinks.length - 1 && <span>|</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="text-sm text-gray-600">
              Copyright © 2000- 2025 r-world. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
