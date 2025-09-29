// components/Navbar.tsx
'use client';

import { ChevronDownIcon, ChevronUp, ChevronUpIcon, Phone, SearchIcon } from 'lucide-react';
import { useState } from 'react';


interface MegaMenuData {
    [key: string]: {
        title: string;
        items: string[];
    };
}

const megaMenuData: MegaMenuData = {
    industries: {
        title: 'Industries',
        items: [
            'Agriculture',
            'Aviation',
            'Banking',
            'Casino Games',
            'Construction',
            'Corrections',
            'E-Learning & Education',
            'Energy & Utilities',
            'Environmental Management',
            'Finance',
            'Food & Beverage',
            'Gaming',
            'Healthcare',
            'Hospitality & Travel',
            'Human Capital Management (HCM)',
            'Insurance',
            'Legal',
            'Lending',
            'Media & Entertainment',
            'Meetings & Events',
            'Mortgage',
            'Nonprofit',
            'Oil & Gas',
            'Payments',
            'Political Campaigns',
            'Retail',
            'Real Estate',
            'Sports',
            'Supply Chain',
            'Telecommunications',
            'Transportation'
        ]
    },
    solutions: {
        title: 'Solutions',
        items: [
            'Animation & Graphic Design',
            'Artificial Intelligence',
            'Asset Tracking (RFID & Barcode)',
            'AR / VR',
            'Biometrics',
            'Blockchain',
            'Business Intelligence & Analytics',
            'Cloud',
            'CMS',
            'CRM',
            'Database',
            'Digital Asset Management',
            'Digital Signage',
            'Document Management',
            'Embedded Software',
            'ERP',
            'Facilities Management',
            'Field Service Management',
            'Firmware',
            'Franchise Management',
            'Fraud Protection',
            'GIS',
            'IOT & M2M',
            'IT Service Management',
            'Kiosk',
            'Legacy',
            'Location Based Services',
            'Middleware',
            'Mobile & Tablet',
            'Open Source',
            'POS / Payment Processing',
            'Sales Management',
            'Telephony',
            'Ticketing',
            'UI / UX',
            'Wearable Technology',
            'Web Development'
        ]
    },
    services: {
        title: 'Services',
        items: [
            'Custom Software Development',
            'Mobile App Development',
            'Web Development',
            'Software Testing & QA',
            'UI/UX Design',
            'DevOps Services',
            'Cloud Migration',
            'API Development',
            'Database Design & Management',
            'Enterprise Software Solutions',
            'E-commerce Development',
            'CRM Development',
            'ERP Implementation',
            'Business Intelligence',
            'Data Analytics',
            'Machine Learning',
            'Artificial Intelligence',
            'Blockchain Development',
            'IoT Solutions',
            'Cybersecurity Services',
            'Digital Transformation',
            'Software Modernization',
            'System Integration',
            'Technical Consulting'
        ]
    },
    developers: {
        title: 'On-Demand Developers',
        items: [
            '.NET Developers',
            'Java Developers',
            'Python Developers',
            'PHP Developers',
            'React Developers',
            'Angular Developers',
            'Vue.js Developers',
            'Node.js Developers',
            'iOS Developers',
            'Android Developers',
            'Flutter Developers',
            'React Native Developers',
            'Unity Developers',
            'Salesforce Developers',
            'SharePoint Developers',
            'WordPress Developers',
            'Magento Developers',
            'Shopify Developers',
            'AWS Developers',
            'Azure Developers',
            'DevOps Engineers',
            'QA Engineers',
            'UI/UX Designers',
            'Data Scientists',
            'Machine Learning Engineers',
            'Blockchain Developers',
            'Game Developers',
            'Full Stack Developers'
        ]
    },
    company: {
        title: 'Company',
        items: [
            'About us',
            'Analyst Recognition',
            'Awards',
            'Careers',
            'Charitable Initiatives',
            'Events',
            'History',
            'Locations',
            'Newsroom',
            'Partners & Affiliations',
            'People and Culture',
            'Reviews'
        ]
    },
    portfolio: {
        title: 'Portfolio',
        items: [
            'Our Clients',
            'Our Work'
        ]
    }
};

const strategicPartners = [
    'Autodesk', 'AWS', 'Google Cloud', 'IBM', 'Microsoft',
    'NetSuite', 'Oracle', 'Salesforce', 'SAP', 'UKG', 'UiPath'
];

const NewNavbar = () => {
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuHover = (menu: string) => {
        setActiveMegaMenu(menu);
    };

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
        { name: 'INDUSTRIES', hasDropdown: true, hasMegaMenu: true, menuKey: 'industries' },
        { name: 'SOLUTIONS', hasDropdown: true, hasMegaMenu: true, menuKey: 'solutions' },
        { name: 'SERVICES', hasDropdown: true, hasMegaMenu: true, menuKey: 'services' },
        { name: 'ON-DEMAND DEVELOPERS', hasDropdown: true, hasMegaMenu: true, menuKey: 'developers' },
        { name: 'PORTFOLIO', hasDropdown: true, hasMegaMenu: true, menuKey: 'portfolio' },
        { name: 'COMPANY', hasDropdown: true, hasMegaMenu: true, menuKey: 'company' },
        { name: 'BLOG', hasDropdown: false }
    ];

    return (
        <div className="relative sticky top-0 z-50 w-full bg-blue-900/80 backdrop-blur-md shadow-md">
            {/* Top bar with phone numbers */}
            <div className="hidden lg:block text-white py-2 px-4">
                <div className="container mx-auto flex justify-end items-center space-x-8 text-sm">
                    <div className="flex items-center space-x-2">
                        <span>Let's Talk !</span>
                        <span className="text-xs">🇺🇸</span>
                        <Phone className="h-3 w-3" />
                        <span>954 342 5676</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-xs">🇬🇧</span>
                        <Phone className="h-3 w-3" />
                        <span>+44 137 243 2466</span>
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <nav className="relative z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="text-white text-3xl font-bold">
                                <span className="text-3xl mb-0 font-extrabold text-white group-hover:text-blue-300 transition-colors">
                                    R-World
                                </span>
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
                                        {item.hasDropdown && (
                                            activeMegaMenu === item.menuKey && item.hasMegaMenu ? (
                                                <ChevronUpIcon className="h-4 w-4" />
                                            ) : (
                                                <ChevronDownIcon className="h-4 w-4" />
                                            )
                                        )}
                                    </button>
                                </div>
                            ))}

                            <button className="cursor-pointer bg-white text-[#fca311]/90 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors duration-200">
                                CONTACT US
                            </button>

                            <button className="text-white hover:text-amber-400 transition-colors duration-200">
                                <SearchIcon className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden flex items-center space-x-4">
                            <button className="text-white hover:text-amber-400 transition-colors duration-200">
                                <SearchIcon className="h-5 w-5" />
                            </button>
                            <button
                                onClick={toggleMobileMenu}
                                className="text-white p-2"
                            >
                                <div className="w-6 h-6 flex flex-col justify-center items-center">
                                    <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                                    <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                    <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
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
                                <div key={index} className="border-b border-white/10 last:border-b-0">
                                    <button
                                        onClick={() => handleMenuClick(item.menuKey)}
                                        className="w-full text-left px-3 py-3 text-white hover:bg-white/10 transition-colors duration-200 flex items-center justify-between"
                                    >
                                        <span className="font-medium text-sm">{item.name}</span>
                                        {item.hasDropdown && (
                                            activeMegaMenu === item.menuKey && item.hasMegaMenu ? (
                                                <ChevronUpIcon className="h-4 w-4" />
                                            ) : (
                                                <ChevronDownIcon className="h-4 w-4" />
                                            )
                                        )}
                                    </button>

                                    {/* Mobile Submenu */}
                                    {activeMegaMenu === item.menuKey && item.hasMegaMenu && (
                                        <div className="bg-white/5 px-3 pb-3">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {megaMenuData[activeMegaMenu]?.items.map((subItem, subIndex) => (
                                                    <a
                                                        key={subIndex}
                                                        href="#"
                                                        className="text-blue-200 hover:text-white text-xs py-1 block transition-colors duration-200"
                                                    >
                                                        {subItem}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div className="pt-4 pb-2">
                                <button className="w-full bg-white text-[#fca311]/90 px-4 py-3 rounded font-semibold hover:bg-gray-100 transition-colors duration-200">
                                    CONTACT US
                                </button>
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
                        {activeMegaMenu === 'solutions' ? (
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
                                                    href="#"
                                                    className="text-gray-600 hover:text-amber-600 transition-colors duration-200 text-sm"
                                                >
                                                    {partner}
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
                                                {megaMenuData.solutions.items.slice(0, 12).map((item, index) => (
                                                    <li key={index}>
                                                        <a
                                                            href="#"
                                                            className="text-gray-600 hover:text-amber-600 transition-colors duration-200 text-sm block"
                                                        >
                                                            {item}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Second Column */}
                                        <div>
                                            <ul className="space-y-2">
                                                {megaMenuData.solutions.items.slice(12, 24).map((item, index) => (
                                                    <li key={index}>
                                                        <a
                                                            href="#"
                                                            className="text-gray-600 hover:text-amber-600 transition-colors duration-200 text-sm block"
                                                        >
                                                            {item}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Third Column */}
                                        <div>
                                            <ul className="space-y-2">
                                                {megaMenuData.solutions.items.slice(24).map((item, index) => (
                                                    <li key={index}>
                                                        <a
                                                            href="#"
                                                            className="text-gray-600 hover:text-amber-600 transition-colors duration-200 text-sm block"
                                                        >
                                                            {item}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : activeMegaMenu === 'portfolio' ? (
                            // Special layout for Portfolio (fewer items)
                            <div>
                                <h3 className="text-lg font-semibold text-[#14213d] mb-4 border-b border-gray-200 pb-2">
                                    {megaMenuData[activeMegaMenu]?.title}
                                </h3>
                                <div className="grid grid-cols-2 gap-6 max-w-md">
                                    {megaMenuData[activeMegaMenu]?.items.map((item, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="text-gray-600 hover:text-amber-600 transition-colors duration-200 text-sm block py-2 px-4 border border-gray-200 rounded hover:border-amber-600 hover:bg-amber-50"
                                        >
                                            {item}
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
                                        const itemsPerColumn = Math.ceil(megaMenuData[activeMegaMenu]?.items.length / 4);
                                        const startIndex = colIndex * itemsPerColumn;
                                        const endIndex = startIndex + itemsPerColumn;
                                        const columnItems = megaMenuData[activeMegaMenu]?.items.slice(startIndex, endIndex) || [];

                                        return (
                                            <div key={colIndex}>
                                                <ul className="space-y-2">
                                                    {columnItems.map((item, index) => (
                                                        <li key={index}>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-amber-600 transition-colors duration-200 text-sm block"
                                                            >
                                                                {item}
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