"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  items: FAQItem[];
}

export default function FAQ({ title, items }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Split FAQ items evenly into 2 columns
  const midIndex = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, midIndex);
  const rightItems = items.slice(midIndex);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        {title}
      </h1>

      {/* Two independent columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[leftItems, rightItems].map((columnItems, colIndex) => (
          <div key={colIndex} className="flex flex-col space-y-4">
            {columnItems.map((item) => (
              <div
                key={item.id}
                className="border-b-2 border-amber-600 transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex items-center justify-between w-full py-4 px-0 hover:bg-gray-50 transition-colors"
                  aria-expanded={openId === item.id}
                >
                  <h2 className="text-left text-lg font-semibold text-gray-900 flex-1">
                    {item.question}
                  </h2>
                  {openId === item.id ? (
                    <ChevronUp className="w-6 h-6 text-amber-600 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-amber-600 flex-shrink-0 ml-4" />
                  )}
                </button>

                {/* Animated answer expansion */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openId === item.id ? "max-h-40 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
