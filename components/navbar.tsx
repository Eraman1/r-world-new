"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Phone, Search} from "lucide-react";
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
        <nav className="sticky top-0 z-50 w-full bg-blue-900/80 backdrop-blur-md shadow-md">
            {/* Top bar */}
            <div className="hidden lg:block pt-2 px-4">
                <div className="mx-auto flex justify-end items-center space-x-6 text-white text-sm px-4">
                    <span className="flex items-center space-x-1">
                        <span>Lets Talk!</span>
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
            <div className="mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex flex-col items-start space-y-0 leading-tight group">
                        <span className="text-3xl mb-0 font-extrabold text-white group-hover:text-blue-300 transition-colors">
                            R-World
                        </span>
                        <span className="text-sm mt-0 tracking-wide text-blue-200/70 group-hover:text-white transition-colors">
                            software solutions
                        </span>
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
                                            <div className="grid w-[400px] gap-3 p-4 bg-white shadow-lg">
                                                {item.items?.map((subItem) => (
                                                    <NavigationMenuLink key={subItem.title} asChild>
                                                        <Link
                                                            href={subItem.href}
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700"
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

                    {/* Right side */}
                    <div className="flex items-center space-x-3">
                        <Button variant="ghost" size="sm" className="hidden lg:flex text-white/90 hover:bg-white/10">
                            <Search className="h-4 w-4" />
                        </Button>

                        <Button className="hidden lg:flex bg-white text-blue-800 hover:bg-blue-100 font-medium px-6">
                            CONTACT US
                        </Button>

                        {/* Mobile menu */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="sm" className="lg:hidden text-white/90 hover:bg-white/10">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-80 bg-white">
                                <SheetHeader>
                                    <SheetTitle className="text-left text-blue-800">R-World</SheetTitle>
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
                                                        className="block text-sm text-gray-600 hover:text-blue-700 transition-colors"
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
                                            className="block font-medium text-gray-900 text-sm hover:text-blue-700 transition-colors"
                                        >
                                            BLOG
                                        </Link>
                                    </div>
                                    <div className="pt-4">
                                        <Button className="w-full bg-blue-800 hover:bg-blue-600 text-white">
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
