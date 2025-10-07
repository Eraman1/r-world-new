"use client";

import React, { useState, useEffect } from "react";
import { Clock, Wrench, ArrowLeft } from "lucide-react";
import Link from "next/link";


interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ComingSoonPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // ✅ Read title & description from query params (sent by middleware)
 
  const title =  "New Page Coming Soon";
  const description ="We are working hard to bring you an amazing experience. Stay tuned for something special!";

  // ✅ Countdown logic
  useEffect(() => {
    const targetDate = new Date("2025-11-06T12:00:00");

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="absolute top-8 left-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Maintenance Badge */}
        <div className="flex items-center gap-2 bg-amber-100 px-6 py-3 rounded-full border-2 border-amber-300 mb-8 animate-fade-in animation-delay-200">
          <Wrench className="w-5 h-5 text-amber-600 animate-pulse" />
          <span className="text-amber-700 font-semibold">
            Under Maintenance
          </span>
        </div>

        {/* Title */}
        <h1 className="text-xl md:text-3xl font-bold text-gray-900 text-center mb-6 animate-fade-in animation-delay-400">
          {title}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mb-12 leading-relaxed animate-fade-in animation-delay-800">
          {description}
        </p>

        {/* Coming Soon Label */}
        <div className="flex items-center justify-center mb-8 animate-fade-in animation-delay-600">
          <span className="text-amber-600 font-bold text-5xl md:text-7xl">
            Coming Soon
          </span>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 md:gap-8 mb-12 animate-fade-in animation-delay-1000">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={item.label}
              className="flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${1000 + index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-gray-200 shadow-xl min-w-[80px] md:min-w-[120px] hover:scale-105 hover:shadow-2xl transition-all">
                <div className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-gray-500 text-sm md:text-base uppercase tracking-wider font-semibold">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Launch Info */}
        <div className="mb-8 animate-fade-in animation-delay-900">
          <p className="text-sm text-gray-600 text-center">
            Launching on{" "}
            <span className="font-bold text-blue-900/80">November 6, 2025</span>
          </p>
        </div>

        {/* Maintenance Message */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl max-w-2xl animate-fade-in animation-delay-1400">
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                We&#39;re Building Something Amazing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team is currently working on this page to bring you the best
                experience possible. We appreciate your patience and can&#39;t
                wait to share what we&#39;ve been working on!
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center animate-fade-in animation-delay-1600">
          <p className="text-gray-600 mb-4 font-medium">
            Need immediate assistance?
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:support@rwoldsoftware.in"
              className="px-6 py-3 bg-white rounded-full border-2 border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all hover:scale-105 shadow-md font-medium"
            >
              support@rwoldsoftware.in
            </a>
            <a
              href="tel:+918377832378"
              className="px-6 py-3 bg-white rounded-full border-2 border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all hover:scale-105 shadow-md font-medium"
            >
              +91-8377832378
            </a>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1400 {
          animation-delay: 1.4s;
        }

        .animation-delay-1600 {
          animation-delay: 1.6s;
        }
      `}</style>
    </div>
  );
};

export default ComingSoonPage;
