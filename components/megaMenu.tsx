"use client";

import React from "react";
import Link from "next/link";

const MegaMenu = () => {
    return (
        <div className="absolute left-0 top-full mt-2 w-[600px] bg-white shadow-lg border rounded-lg p-6 grid grid-cols-3 gap-6 z-50">
            {/* Column 1 */}
            <div>
                <h4 className="font-semibold mb-3">Development</h4>
                <ul className="space-y-2">
                    <li><Link href="/services/web" className="hover:text-blue-600">Web Development</Link></li>
                    <li><Link href="/services/mobile" className="hover:text-blue-600">Mobile Apps</Link></li>
                    <li><Link href="/services/api" className="hover:text-blue-600">API Integration</Link></li>
                </ul>
            </div>

            {/* Column 2 */}
            <div>
                <h4 className="font-semibold mb-3">Design</h4>
                <ul className="space-y-2">
                    <li><Link href="/services/ui-ux" className="hover:text-blue-600">UI/UX Design</Link></li>
                    <li><Link href="/services/branding" className="hover:text-blue-600">Branding</Link></li>
                    <li><Link href="/services/graphics" className="hover:text-blue-600">Graphics</Link></li>
                </ul>
            </div>

            {/* Column 3 */}
            <div>
                <h4 className="font-semibold mb-3">Cloud</h4>
                <ul className="space-y-2">
                    <li><Link href="/services/aws" className="hover:text-blue-600">AWS Solutions</Link></li>
                    <li><Link href="/services/azure" className="hover:text-blue-600">Azure</Link></li>
                    <li><Link href="/services/devops" className="hover:text-blue-600">DevOps</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default MegaMenu;
