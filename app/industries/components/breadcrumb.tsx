"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>

          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/");
            const isLast = index === segments.length - 1;

            return (
              <div key={href} className="flex items-center space-x-2">
                <ChevronRight size={14} className="text-gray-400" />
                {isLast ? (
                  <span className="font-semibold text-gray-900 capitalize">
                    {decodeURIComponent(segment)}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-gray-600 hover:text-gray-900 capitalize"
                  >
                    {decodeURIComponent(segment)}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
