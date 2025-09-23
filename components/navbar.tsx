"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

interface NavItem {
    title: string;
    href?: string;
    items?: { title: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
    {
        title: "INDUSTRIES",
        items: [
            { title: "Healthcare", href: "/industries/healthcare", description: "Digital health solutions" },
            { title: "Finance", href: "/industries/finance", description: "Fintech applications" },
            { title: "E-commerce", href: "/industries/ecommerce", description: "Online retail platforms" },
            { title: "Education", href: "/industries/education", description: "Learning management systems" },
        ],
    },
    {
        title: "SOLUTIONS",
        items: [
            { title: "Web Development", href: "/solutions/web-development", description: "Custom web applications" },
            { title: "Mobile Apps", href: "/solutions/mobile-apps", description: "iOS & Android development" },
            { title: "Cloud Services", href: "/solutions/cloud-services", description: "Scalable cloud solutions" },
            { title: "AI/ML", href: "/solutions/ai-ml", description: "Artificial intelligence solutions" },
        ],
    },
    {
        title: "SERVICES",
        items: [
            { title: "Consulting", href: "/services/consulting", description: "Strategic technology consulting" },
            { title: "Development", href: "/services/development", description: "Full-stack development" },
            { title: "Testing", href: "/services/testing", description: "Quality assurance & testing" },
            { title: "Support", href: "/services/support", description: "24/7 technical support" },
        ],
    },
    {
        title: "ON-DEMAND DEVELOPERS",
        items: [
            { title: "Frontend Developers", href: "/developers/frontend", description: "React, Vue, Angular experts" },
            { title: "Backend Developers", href: "/developers/backend", description: "Node.js, Python, Java experts" },
            { title: "Full-stack Developers", href: "/developers/fullstack", description: "End-to-end development" },
            { title: "DevOps Engineers", href: "/developers/devops", description: "CI/CD and infrastructure" },
        ],
    },
    {
        title: "PORTFOLIO",
        items: [
            { title: "Web Applications", href: "/portfolio/web", description: "Our web development projects" },
            { title: "Mobile Applications", href: "/portfolio/mobile", description: "Our mobile app projects" },
            { title: "Enterprise Solutions", href: "/portfolio/enterprise", description: "Large-scale enterprise projects" },
            { title: "Case Studies", href: "/portfolio/case-studies", description: "Detailed project breakdowns" },
        ],
    },
    {
        title: "COMPANY",
        items: [
            { title: "About Us", href: "/company/about", description: "Our story and mission" },
            { title: "Team", href: "/company/team", description: "Meet our experts" },
            { title: "Careers", href: "/company/careers", description: "Join our team" },
            { title: "Contact", href: "/company/contact", description: "Get in touch" },
        ],
    },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] shadow-lg">
            {/* Top bar */}
            <div className="hidden lg:block  pt-2 px-4">
                <div className="mx-auto flex justify-end items-center space-x-6 text-white text-sm px-4">
                    <span className="flex items-center space-x-1">
                        <span>Let's Talk!</span>
                    </span>
                    <span className="flex items-center space-x-1">
                        <span className="text-xs">🇺🇸</span>
                        <Phone className="h-3 w-3" />
                        <span>954 342 5676</span>
                    </span>
                    <span className="flex items-center space-x-1">
                        <span className="text-xs">🇬🇧</span>
                        <Phone className="h-3 w-3" />
                        <span>+44 137 243 2466</span>
                    </span>

                </div>
            </div>

            {/* Main navigation */}
            <div className=" mx-auto px-4 pt-0">
                <div className="flex items-center justify-between h-20">
                    {/* Logo with glow */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="relative">

                            <Image src="/logo.png" alt="R-World Logo" width={90} height={70} className="relative z-10" />

                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {navItems.map((item) => (
                                    <NavigationMenuItem key={item.title}>
                                        <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white text-sm font-medium">
                                            {item.title}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="grid w-[400px] gap-3 p-4 bg-white">
                                                {item.items?.map((subItem) => (
                                                    <NavigationMenuLink key={subItem.title} asChild>
                                                        <Link
                                                            href={subItem.href}
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6BCBFF]/20 hover:text-[#004AAD]"
                                                        >
                                                            <div className="text-sm font-medium leading-none text-gray-900">
                                                                {subItem.title}
                                                            </div>
                                                            {subItem.description && (
                                                                <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                                                    {subItem.description}
                                                                </p>
                                                            )}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* Blog Link */}
                        <Link
                            href="/blog"
                            className="text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            BLOG
                        </Link>
                    </div>

                    {/* Right side buttons */}
                    <div className="flex items-center space-x-3">
                        {/* Search Icon */}
                        <Button variant="ghost" size="sm" className="hidden lg:flex text-white hover:bg-white/10">
                            <Search className="h-4 w-4" />
                        </Button>

                        {/* Contact Us Button */}
                        <Button className="hidden lg:flex bg-white text-[#004AAD] hover:bg-[#6BCBFF]/20 font-medium px-6">
                            CONTACT US
                        </Button>

                        {/* Mobile menu trigger */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="sm" className="lg:hidden text-white hover:bg-white/10">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-80 bg-white">
                                <SheetHeader>
                                    <SheetTitle className="text-left text-[#004AAD]">R-World</SheetTitle>
                                </SheetHeader>
                                <div className="mt-6 space-y-4">
                                    {navItems.map((item) => (
                                        <div key={item.title} className="space-y-2">
                                            <h3 className="font-medium text-gray-900 text-sm">{item.title}</h3>
                                            <div className="ml-4 space-y-2">
                                                {item.items?.map((subItem) => (
                                                    <Link
                                                        key={subItem.title}
                                                        href={subItem.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="block text-sm text-gray-600 hover:text-[#004AAD] transition-colors"
                                                    >
                                                        {subItem.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                    <div className="pt-4 border-t">
                                        <Link
                                            href="/blog"
                                            onClick={() => setIsOpen(false)}
                                            className="block font-medium text-gray-900 text-sm hover:text-[#004AAD] transition-colors"
                                        >
                                            BLOG
                                        </Link>
                                    </div>
                                    <div className="pt-4">
                                        <Button className="w-full bg-[#004AAD] hover:bg-[#00CFFF] text-white">
                                            CONTACT US
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
