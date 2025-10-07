// components/Navbar.tsx
"use client";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  Mail,
  Phone,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface MegaMenuData {
  [key: string]: {
    title: string;
    items: {
      title: string;
      link: string;
    }[];
  };
}

const megaMenuData: MegaMenuData = {
  industries: {
    title: "Industries",
    items: [
      { title: "Agriculture", link: "/industries/agriculture" },
      { title: "Aviation", link: "/industries/aviation" },
      { title: "Banking", link: "/industries/banking" },
      { title: "Casino Games", link: "/industries/casino-games" },
      { title: "Construction", link: "/industries/construction" },
      { title: "Corrections", link: "/industries/corrections" },
      {
        title: "E-Learning & Education",
        link: "/industries/e-learning-education",
      },
      { title: "Energy & Utilities", link: "/industries/energy-utilities" },
      {
        title: "Environmental Management",
        link: "/industries/environmental-management",
      },
      { title: "Finance", link: "/industries/finance" },
      { title: "Food & Beverage", link: "/industries/food-beverage" },
      { title: "Gaming", link: "/industries/gaming" },
      { title: "Healthcare", link: "/industries/healthcare" },
      { title: "Hospitality & Travel", link: "/industries/hospitality-travel" },
      { title: "Human Capital Management (HCM)", link: "/industries/hcm" },
      { title: "Insurance", link: "/industries/insurance" },
      { title: "Legal", link: "/industries/legal" },
      { title: "Lending", link: "/industries/lending" },
      {
        title: "Media & Entertainment",
        link: "/industries/media-entertainment",
      },
      { title: "Meetings & Events", link: "/industries/meetings-events" },
      { title: "Mortgage", link: "/industries/mortgage" },
      { title: "Nonprofit", link: "/industries/nonprofit" },
      { title: "Oil & Gas", link: "/industries/oil-gas" },
      { title: "Payments", link: "/industries/payments" },
      { title: "Political Campaigns", link: "/industries/political-campaigns" },
      { title: "Retail", link: "/industries/retail" },
      { title: "Real Estate", link: "/industries/real-estate" },
      { title: "Sports", link: "/industries/sports" },
      { title: "Supply Chain", link: "/industries/supply-chain" },
      { title: "Telecommunications", link: "/industries/telecommunications" },
      { title: "Transportation", link: "/industries/transportation" },
    ],
  },

  solutions: {
    title: "Solutions",
    items: [
      {
        title: "Animation & Graphic Design",
        link: "/solutions/animation-graphic-design",
      },
      {
        title: "Artificial Intelligence",
        link: "/solutions/artificial-intelligence",
      },
      {
        title: "Asset Tracking (RFID & Barcode)",
        link: "/solutions/asset-tracking",
      },
      { title: "AR / VR", link: "/solutions/ar-vr" },
      { title: "Biometrics", link: "/solutions/biometrics" },
      { title: "Blockchain", link: "/solutions/blockchain" },
      {
        title: "Business Intelligence & Analytics",
        link: "/solutions/business-intelligence",
      },
      { title: "Cloud", link: "/solutions/cloud" },
      { title: "CMS", link: "/solutions/cms" },
      { title: "CRM", link: "/solutions/crm" },
      { title: "Database", link: "/solutions/database" },
      {
        title: "Digital Asset Management",
        link: "/solutions/digital-asset-management",
      },
      { title: "Digital Signage", link: "/solutions/digital-signage" },
      { title: "Document Management", link: "/solutions/document-management" },
      { title: "Embedded Software", link: "/solutions/embedded-software" },
      { title: "ERP", link: "/solutions/erp" },
      {
        title: "Facilities Management",
        link: "/solutions/facilities-management",
      },
      {
        title: "Field Service Management",
        link: "/solutions/field-service-management",
      },
      { title: "Firmware", link: "/solutions/firmware" },
      {
        title: "Franchise Management",
        link: "/solutions/franchise-management",
      },
      { title: "Fraud Protection", link: "/solutions/fraud-protection" },
      { title: "GIS", link: "/solutions/gis" },
      { title: "IOT & M2M", link: "/solutions/iot-m2m" },
      {
        title: "IT Service Management",
        link: "/solutions/it-service-management",
      },
      { title: "Kiosk", link: "/solutions/kiosk" },
      { title: "Legacy", link: "/solutions/legacy" },
      {
        title: "Location Based Services",
        link: "/solutions/location-based-services",
      },
      { title: "Middleware", link: "/solutions/middleware" },
      { title: "Mobile & Tablet", link: "/solutions/mobile-tablet" },
      { title: "Open Source", link: "/solutions/open-source" },
      {
        title: "POS / Payment Processing",
        link: "/solutions/pos-payment-processing",
      },
      { title: "Sales Management", link: "/solutions/sales-management" },
      { title: "Telephony", link: "/solutions/telephony" },
      { title: "Ticketing", link: "/solutions/ticketing" },
      { title: "UI / UX", link: "/solutions/ui-ux" },
      { title: "Wearable Technology", link: "/solutions/wearable-technology" },
      { title: "Web Development", link: "/solutions/web-development" },
    ],
  },

  services: {
    title: "Services",
    items: [
      {
        title: "Custom Software Development",
        link: "/services/custom-software-development",
      },
      {
        title: "Mobile App Development",
        link: "/services/mobile-app-development",
      },
      { title: "Web Development", link: "/services/web-development" },
      { title: "Software Testing & QA", link: "/services/software-testing-qa" },
      { title: "UI/UX Design", link: "/services/ui-ux-design" },
      { title: "DevOps Services", link: "/services/devops-services" },
      { title: "Cloud Migration", link: "/services/cloud-migration" },
      { title: "API Development", link: "/services/api-development" },
      {
        title: "Database Design & Management",
        link: "/services/database-design",
      },
      {
        title: "Enterprise Software Solutions",
        link: "/services/enterprise-software",
      },
      {
        title: "E-commerce Development",
        link: "/services/ecommerce-development",
      },
      { title: "CRM Development", link: "/services/crm-development" },
      { title: "ERP Implementation", link: "/services/erp-implementation" },
      {
        title: "Business Intelligence",
        link: "/services/business-intelligence",
      },
      { title: "Data Analytics", link: "/services/data-analytics" },
      { title: "Machine Learning", link: "/services/machine-learning" },
      {
        title: "Artificial Intelligence",
        link: "/services/artificial-intelligence",
      },
      {
        title: "Blockchain Development",
        link: "/services/blockchain-development",
      },
      { title: "IoT Solutions", link: "/services/iot-solutions" },
      { title: "Cybersecurity Services", link: "/services/cybersecurity" },
      {
        title: "Digital Transformation",
        link: "/services/digital-transformation",
      },
      {
        title: "Software Modernization",
        link: "/services/software-modernization",
      },
      { title: "System Integration", link: "/services/system-integration" },
      { title: "Technical Consulting", link: "/services/technical-consulting" },
    ],
  },

  developers: {
    title: "On-Demand Developers",
    items: [
      { title: ".NET Developers", link: "/developers/dotnet" },
      { title: "Java Developers", link: "/developers/java" },
      { title: "Python Developers", link: "/developers/python" },
      { title: "PHP Developers", link: "/developers/php" },
      { title: "React Developers", link: "/developers/react" },
      { title: "Angular Developers", link: "/developers/angular" },
      { title: "Vue.js Developers", link: "/developers/vue" },
      { title: "Node.js Developers", link: "/developers/node" },
      { title: "iOS Developers", link: "/developers/ios" },
      { title: "Android Developers", link: "/developers/android" },
      { title: "Flutter Developers", link: "/developers/flutter" },
      { title: "React Native Developers", link: "/developers/react-native" },
      { title: "Unity Developers", link: "/developers/unity" },
      { title: "Salesforce Developers", link: "/developers/salesforce" },
      { title: "SharePoint Developers", link: "/developers/sharepoint" },
      { title: "WordPress Developers", link: "/developers/wordpress" },
      { title: "Magento Developers", link: "/developers/magento" },
      { title: "Shopify Developers", link: "/developers/shopify" },
      { title: "AWS Developers", link: "/developers/aws" },
      { title: "Azure Developers", link: "/developers/azure" },
      { title: "DevOps Engineers", link: "/developers/devops" },
      { title: "QA Engineers", link: "/developers/qa" },
      { title: "UI/UX Designers", link: "/developers/ui-ux" },
      { title: "Data Scientists", link: "/developers/data-scientists" },
      { title: "Machine Learning Engineers", link: "/developers/ml-engineers" },
      { title: "Blockchain Developers", link: "/developers/blockchain" },
      { title: "Game Developers", link: "/developers/game" },
      { title: "Full Stack Developers", link: "/developers/full-stack" },
    ],
  },

  company: {
    title: "Company",
    items: [
      { title: "About us", link: "/company/about" },
      { title: "Analyst Recognition", link: "/company/analyst-recognition" },
      { title: "Awards", link: "/company/awards" },
      { title: "Careers", link: "/company/careers" },
      { title: "Charitable Initiatives", link: "/company/charity" },
      { title: "Events", link: "/company/events" },
      { title: "History", link: "/company/history" },
      { title: "Locations", link: "/company/locations" },
      { title: "Newsroom", link: "/company/newsroom" },
      { title: "Partners & Affiliations", link: "/company/partners" },
      { title: "People and Culture", link: "/company/people-culture" },
      { title: "Reviews", link: "/company/reviews" },
    ],
  },

  portfolio: {
    title: "Portfolio",
    items: [
      { title: "Our Clients", link: "/portfolio/clients" },
      { title: "Our Work", link: "/portfolio/work" },
    ],
  },
};

const strategicPartners = [
  { name: "Autodesk", link: "https://www.autodesk.com/" },
  { name: "AWS", link: "https://aws.amazon.com/partners/" },
  { name: "Google Cloud", link: "https://cloud.google.com/partners" },
  { name: "IBM", link: "https://www.ibm.com/partnerworld" },
  { name: "Microsoft", link: "https://partner.microsoft.com/" },
  { name: "NetSuite", link: "https://www.netsuite.com/portal/partners.shtml" },
  { name: "Oracle", link: "https://partner.oracle.com/" },
  { name: "Salesforce", link: "https://www.salesforce.com/partners/" },
  { name: "SAP", link: "https://www.sap.com/partner.html" },
  { name: "UKG", link: "https://www.ukg.com/partners" },
  { name: "UiPath", link: "https://www.uipath.com/partners" },
];

const NewNavbar = () => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const handleMenuHover = (menu: string) => {
  //     setActiveMegaMenu(menu);
  // };

  const handleMenuLeave = () => {
    setActiveMegaMenu(null);
  };

  const handleMenuClick = (menuKey: string | undefined) => {
    if (menuKey) {
      setActiveMegaMenu(activeMegaMenu === menuKey ? null : menuKey);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    {
      name: "INDUSTRIES",
      hasDropdown: true,
      hasMegaMenu: true,
      menuKey: "industries",
    },
    {
      name: "SOLUTIONS",
      hasDropdown: true,
      hasMegaMenu: true,
      menuKey: "solutions",
    },
    {
      name: "SERVICES",
      hasDropdown: true,
      hasMegaMenu: true,
      menuKey: "services",
    },
    {
      name: "ON-DEMAND DEVELOPERS",
      hasDropdown: true,
      hasMegaMenu: true,
      menuKey: "developers",
    },
    {
      name: "PORTFOLIO",
      hasDropdown: true,
      hasMegaMenu: true,
      menuKey: "portfolio",
    },
    {
      name: "COMPANY",
      hasDropdown: true,
      hasMegaMenu: true,
      menuKey: "company",
    },
    { name: "BLOG", hasDropdown: false },
  ];

  return (
    <div className="relative sticky top-0 z-50 w-full bg-blue-900/80 backdrop-blur-md shadow-md">
      {/* Top bar with phone numbers */}
      <div className="hidden lg:block text-white py-2 px-4">
        <div className="container mx-auto flex justify-end items-center space-x-8 text-sm">
          <Link href="tel:8377832378" className="flex items-center space-x-2">
            <span>Let&#39;s Talk !</span>
            <span className="text-xs">IN</span>
            <Phone className="h-3 w-3" />
            <span>+91-8377832378</span>
          </Link>
          <Link
            href="mailto: support@rwoldsoftware.in"
            className="flex items-center space-x-2"
          >
            <Mail className="h-3 w-3" />
            <span>support@rwoldsoftware.in</span>
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-white text-3xl font-bold">
                <Link
                  href="/"
                  className="text-3xl mb-0 font-extrabold text-white group-hover:text-blue-300 transition-colors"
                >
                  R-World
                </Link>
                <div className="text-xs font-normal -mt-1">
                  <span className="text-sm mt-0 tracking-wide text-blue-200/70 group-hover:text-white transition-colors">
                    software solutions
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation items - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-md hover:bg-white/10 transition-colors duration-200 px-2"
                >
                  <button
                    className="text-white flex items-center space-x-1 py-2"
                    onClick={() => handleMenuClick(item.menuKey)}
                  >
                    <span className="font-medium text-sm">{item.name}</span>
                    {item.hasDropdown &&
                      (activeMegaMenu === item.menuKey && item.hasMegaMenu ? (
                        <ChevronUpIcon className="h-4 w-4" />
                      ) : (
                        <ChevronDownIcon className="h-4 w-4" />
                      ))}
                  </button>
                </div>
              ))}

              <Link
                href="/contact-us"
                className="cursor-pointer bg-white text-[#fca311]/90 px-3 py-1 rounded font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                CONTACT US
              </Link>

              <button className="text-white hover:text-amber-400 transition-colors duration-200">
                <SearchIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button className="text-white hover:text-amber-400 transition-colors duration-200">
                <SearchIcon className="h-5 w-5" />
              </button>
              <button onClick={toggleMobileMenu} className="text-white p-2">
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                      isMobileMenuOpen
                        ? "rotate-45 translate-y-1"
                        : "-translate-y-0.5"
                    }`}
                  ></span>
                  <span
                    className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                      isMobileMenuOpen
                        ? "-rotate-45 -translate-y-1"
                        : "translate-y-0.5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-blue-900/95 backdrop-blur-md border-t border-white/20">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-white/10 last:border-b-0"
                >
                  <button
                    onClick={() => handleMenuClick(item.menuKey)}
                    className="w-full text-left px-3 py-3 text-white hover:bg-white/10 transition-colors duration-200 flex items-center justify-between"
                  >
                    <span className="font-medium text-sm">{item.name}</span>
                    {item.hasDropdown &&
                      (activeMegaMenu === item.menuKey && item.hasMegaMenu ? (
                        <ChevronUpIcon className="h-4 w-4" />
                      ) : (
                        <ChevronDownIcon className="h-4 w-4" />
                      ))}
                  </button>

                  {/* Mobile Submenu */}
                  {activeMegaMenu === item.menuKey && item.hasMegaMenu && (
                    <div className="bg-white/5 px-3 pb-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {megaMenuData[activeMegaMenu]?.items.map(
                          (subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.link}
                              className="text-blue-200 hover:text-white text-xs py-1 block transition-colors duration-200"
                            >
                              {subItem.title}
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 pb-2">
                <Link
                  href="/contact-us"
                  className="w-full bg-white text-[#fca311]/90 px-4 py-3 rounded font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Mega Menu */}
      {activeMegaMenu && (
        <div
          className="hidden lg:block absolute top-full left-0 w-full bg-white shadow-2xl z-40 border-t-4 border-amber-500"
          onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
          onMouseLeave={handleMenuLeave}
        >
          <div className="container mx-auto px-4 py-8">
            {activeMegaMenu === "solutions" ? (
              <div className="grid grid-cols-4 gap-8">
                {/* Strategic Partners */}
                <div>
                  <h3 className="text-lg font-semibold text-[#14213d] mb-4 border-b border-gray-200 pb-2">
                    Strategic Partners
                  </h3>
                  <ul className="space-y-2">
                    {strategicPartners.map((partner, index) => (
                      <li key={index}>
                        <a
                          href={partner.link}
                          className="text-gray-600 hover:text-amber-600 transition-colors duration-200 text-sm"
                        >
                          {partner.name}
                        </a>
                      </li>
                    ))}
                    <li className="text-gray-500 text-sm italic pt-2">
                      and more...
                    </li>
                  </ul>
                </div>

                {/* Solutions - Split into 3 columns */}
                <div className="col-span-3">
                  <h3 className="text-lg font-semibold text-[#14213d] mb-4 border-b border-gray-200 pb-2">
                    Solutions
                  </h3>
                  <div className="grid grid-cols-3 gap-6">
                    {/* First Column */}
                    <div>
                      <ul className="space-y-2">
                        {megaMenuData.solutions.items
                          .slice(0, 12)
                          .map((item, index) => (
                            <li key={index}>
                              <a
                                href={item.link}
                                className="text-gray-600 hover:text-amber-600 transition-colors duration-200 text-sm block"
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* Second Column */}
                    <div>
                      <ul className="space-y-2">
                        {megaMenuData.solutions.items
                          .slice(12, 24)
                          .map((item, index) => (
                            <li key={index}>
                              <a
                                href={item.link}
                                className="text-gray-600 hover:text-amber-600 transition-colors duration-200 text-sm block"
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* Third Column */}
                    <div>
                      <ul className="space-y-2">
                        {megaMenuData.solutions.items
                          .slice(24)
                          .map((item, index) => (
                            <li key={index}>
                              <a
                                href={item.link}
                                className="text-gray-600 hover:text-amber-600 transition-colors duration-200 text-sm block"
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : activeMegaMenu === "portfolio" ? (
              // Special layout for Portfolio (fewer items)
              <div>
                <h3 className="text-lg font-semibold text-[#14213d] mb-4 border-b border-gray-200 pb-2">
                  {megaMenuData[activeMegaMenu]?.title}
                </h3>
                <div className="grid grid-cols-2 gap-6 max-w-md">
                  {megaMenuData[activeMegaMenu]?.items.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="text-gray-600 hover:text-amber-600 transition-colors duration-200 text-sm block py-2 px-4 border border-gray-200 rounded hover:border-amber-600 hover:bg-amber-50"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              // Generic mega menu for other items
              <div>
                <h3 className="text-lg font-semibold text-[#14213d] mb-4 border-b border-gray-200 pb-2">
                  {megaMenuData[activeMegaMenu]?.title}
                </h3>
                <div className="grid grid-cols-4 gap-6">
                  {/* Split items into 4 columns */}
                  {Array.from({ length: 4 }).map((_, colIndex) => {
                    const itemsPerColumn = Math.ceil(
                      megaMenuData[activeMegaMenu]?.items.length / 4
                    );
                    const startIndex = colIndex * itemsPerColumn;
                    const endIndex = startIndex + itemsPerColumn;
                    const columnItems =
                      megaMenuData[activeMegaMenu]?.items.slice(
                        startIndex,
                        endIndex
                      ) || [];

                    return (
                      <div key={colIndex}>
                        <ul className="space-y-2">
                          {columnItems.map((item, index) => (
                            <li key={index}>
                              <a
                                href={item.link}
                                className="text-gray-600 hover:text-amber-600 transition-colors duration-200 text-sm block"
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewNavbar;
