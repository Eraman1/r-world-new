import React from "react";
import { Instagram, MapPin, Youtube, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
            {/* Logo */}

            <h3 className="text-lg font-bold text-gray-800 mb-4">COMPANY</h3>
            <div className="mb-6">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="R-World Software"
                  width={160}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <div className="space-y-4">
              {/* Head Office */}
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                <div className="text-gray-700 text-sm">
                  <div className="font-semibold text-gray-800 mb-1">
                    Head Office:
                  </div>
                  <div>Noida Sector 62 Rd,</div>
                  <div>C Block, Phase 2,</div>
                  <div>UP, India</div>
                </div>
              </div>

              {/* Branch Office */}
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-700 text-sm">
                  <div className="font-semibold text-gray-800 mb-1">
                    Branch Office:
                  </div>
                  <div>C- 138/6, 2nd Floor</div>
                  <div>Near Bhajanpura Thana,</div>
                  <div>Main Road, BhajanPura</div>
                  <div>Delhi-110053</div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center space-x-2">
                  <Link
                    href="tel:8377832378"
                    className="text-gray-700 text-sm hover:text-sky-600 transition-colors"
                  >
                    Phone: +91-8377832378
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <Link
                    href="mailto:support@rwoldsoftware.in"
                    className="text-gray-700 text-sm hover:text-sky-600 transition-colors"
                  >
                    Mail: support@rwoldsoftware.in
                  </Link>
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
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://linkedin.com/company/r-world-software"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center hover:bg-[#006399] hover:scale-110 transition-all duration-300 shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Link>

              <Link
                href="https://x.com/RworldSoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 hover:scale-110 transition-all duration-300 shadow-md"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>

              <Link
                href="https://www.facebook.com/people/Stock-it-Inventory-manager-app/61556269179445"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1877F2] rounded-lg flex items-center justify-center hover:bg-[#0d65d9] hover:scale-110 transition-all duration-300 shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </Link>

              <Link
                href="https://www.youtube.com/@stock-it"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#FF0000] rounded-lg flex items-center justify-center hover:bg-[#cc0000] hover:scale-110 transition-all duration-300 shadow-md"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </Link>

              <Link
                href="https://www.instagram.com/stock.it.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
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
