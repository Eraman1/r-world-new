import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#14213D] text-4xl lg:text-5xl font-bold mb-6">
            Client Testimonials
          </h2>
          <p className="text-[#000000] text-lg max-w-4xl mx-auto">
            We are trusted by small to mid-sized organizations, Fortune 5000 companies, and major 
            brands to advance their technology objectives through custom software solutions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Video */}
          <div className="space-y-8">
            <div className="relative bg-gradient-to-br from-[#14213D] to-[#000000] rounded-2xl shadow-2xl overflow-hidden aspect-video">
              {/* Video placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  {/* Testimonial preview */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-[#FCA311] rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-white">R</span>
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-[#000000] italic mb-2">
                          "I had a great and pleasurable experience working with R-World and would 
                          highly recommend their services to others."
                        </p>
                        <p className="text-xs font-bold text-[#14213D]">John Anderson</p>
                        <p className="text-xs text-gray-600">VP of Operations at TechCorp</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Play button */}
                  <button className="w-16 h-16 bg-[#FCA311] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 mx-auto shadow-lg">
                    <svg className="w-6 h-6 text-[#14213D] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Video controls */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-between">
                <button className="text-white hover:text-[#FCA311] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
                <span className="text-white text-sm font-medium">0:00 / 1:14</span>
                <div className="flex items-center gap-3">
                  <button className="text-white hover:text-[#FCA311] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                    </svg>
                  </button>
                  <button className="text-white hover:text-[#FCA311] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                    </svg>
                  </button>
                  <button className="text-white hover:text-[#FCA311] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button className="px-8 py-4 bg-white border-4 border-[#FCA311] text-[#000000] font-bold text-lg rounded-lg hover:bg-[#FCA311] hover:text-white transition-all duration-300 shadow-lg">
                SEE MORE CASE STUDIES
              </button>
            </div>
          </div>

          {/* Right side - Testimonials */}
          <div className="space-y-6">
            {/* Testimonial 1 */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#14213D] rounded-full flex items-center justify-center z-10 shadow-lg">
                <Quote className="w-5 h-5 text-[#FCA311]" />
              </div>
              <div className="bg-white border-4 border-[#14213D] rounded-lg p-6 pr-8 shadow-lg">
                <p className="text-[#000000] text-base leading-relaxed mb-4 text-justify">
                  R-World really helped us speed up the development of our new code projects without 
                  taking on expensive new in-house developers. The R-World team has also given us 
                  greater flexibility as we develop new modules and features.
                </p>
                <div className="bg-[#14213D] text-white px-6 py-3 rounded-lg inline-block">
                  <div className="flex items-center gap-2">
                    <Quote className="w-5 h-5 text-[#FCA311]" />
                    <p className="font-bold text-sm">Sarah Mitchell, President of TechFlow Systems</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#14213D] rounded-full flex items-center justify-center z-10 shadow-lg">
                <Quote className="w-5 h-5 text-[#FCA311]" />
              </div>
              <div className="bg-white border-4 border-[#14213D] rounded-lg p-6 pr-8 shadow-lg">
                <p className="text-[#000000] text-base leading-relaxed mb-4 text-justify">
                  R-World seemed too good to be true, but it really was true. I was impressed by the 
                  efficiency of the on-shore/off-shore model, and by the overall methodology and 
                  project management discipline. We will be using R-World again.
                </p>
                <div className="bg-[#14213D] text-white px-6 py-3 rounded-lg inline-block">
                  <div className="flex items-center gap-2">
                    <Quote className="w-5 h-5 text-[#FCA311]" />
                    <p className="font-bold text-sm">Michael Chen, CTO of Digital Innovations</p>
                  </div>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;