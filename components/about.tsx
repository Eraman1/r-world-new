import React from 'react';
import { Clock, TrendingUp, Shield, Headphones } from 'lucide-react';

const AboutAll: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#E5E5E5]">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[#14213D] text-4xl lg:text-5xl font-bold mb-6">
                Who is R-World?
              </h2>
              <p className="text-[#000000] text-lg leading-relaxed text-justify">
                R-World is a leading IT solutions provider specializing in delivering innovative 
                technology services to businesses worldwide. As a comprehensive software development 
                and IT consulting company with a team of highly skilled professionals, R-World combines 
                technical excellence, industry expertise, and a commitment to innovation to deliver 
                enterprise-grade solutions that drive digital transformation.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Feature 1 */}
              <div className="space-y-3">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <Clock className="w-8 h-8 text-[#FCA311]" />
                </div>
                <h3 className="text-[#000000] text-xl font-bold">
                  Real-Time Communication
                </h3>
                <p className="text-[#000000] text-base leading-relaxed text-justify">
                  Our development team works within your time zone to enable seamless real-time 
                  collaboration and ensure a true "branch location" experience with direct access 
                  to our experts.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-3">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <TrendingUp className="w-8 h-8 text-[#FCA311]" />
                </div>
                <h3 className="text-[#000000] text-xl font-bold">
                  Scalability & Support
                </h3>
                <p className="text-[#000000] text-base leading-relaxed text-justify">
                  We work with you based on your software development objectives to bring you the 
                  most value and the quickest return on investment possible.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-3">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <Shield className="w-8 h-8 text-[#FCA311]" />
                </div>
                <h3 className="text-[#000000] text-xl font-bold">
                  Security First
                </h3>
                <p className="text-[#000000] text-base leading-relaxed text-justify">
                  We implement industry-leading security protocols and best practices to ensure 
                  your data and applications are protected at every stage of development and deployment.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="space-y-3">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <Headphones className="w-8 h-8 text-[#FCA311]" />
                </div>
                <h3 className="text-[#000000] text-xl font-bold">
                  24/7 Dedicated Support
                </h3>
                <p className="text-[#000000] text-base leading-relaxed text-justify">
                  Our commitment extends beyond deployment with round-the-clock technical support 
                  and maintenance services to keep your systems running smoothly.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Video/Image placeholder */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#14213D] to-[#000000] rounded-2xl shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
              {/* Decorative elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#FCA311] rounded-full"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#FCA311] rounded-full blur-2xl"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center space-y-4 p-8">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-[#FCA311] text-6xl lg:text-7xl font-bold">R</span>
                  <span className="text-white text-6xl lg:text-7xl font-bold">World</span>
                </div>
                <h3 className="text-white text-2xl lg:text-3xl font-bold">
                  World-Class IT Solutions
                </h3>
                <p className="text-[#E5E5E5] text-base lg:text-lg max-w-md mx-auto">
                  Empowering businesses through innovative technology and exceptional service delivery
                </p>
                
                {/* Play button simulation */}
                <div className="pt-6">
                  <button className="w-16 h-16 bg-[#FCA311] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 mx-auto shadow-lg">
                    <svg className="w-6 h-6 text-[#14213D] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Video time indicator */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center justify-between">
                <span className="text-white text-sm">0:00 / 1:15</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div className="w-0 h-full bg-[#FCA311]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border-l-4 border-[#FCA311]">
              <div className="text-3xl font-bold text-[#14213D]">500+</div>
              <div className="text-sm text-gray-600 font-semibold">Projects Delivered</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border-l-4 border-[#FCA311]">
              <div className="text-3xl font-bold text-[#14213D]">98%</div>
              <div className="text-sm text-gray-600 font-semibold">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAll;