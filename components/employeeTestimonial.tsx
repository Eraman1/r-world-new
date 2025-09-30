'use client';
import React, { useState } from 'react';
import { Quote } from 'lucide-react';

const EmployeeTestimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Director of Operations",
      image: "RK",
      quote: "R-World promotes an atmosphere that embraces continual learning at both the industrial and technological levels. The fact that each day I am faced with a new opportunity to learn and grow is one reason I love working at R-World."
    },
    {
      name: "Priya Sharma",
      position: "Senior Software Engineer",
      image: "PS",
      quote: "The collaborative environment at R-World has been instrumental in my professional growth. Working with cutting-edge technologies and talented colleagues makes every project exciting and rewarding."
    },
    {
      name: "Amit Patel",
      position: "Project Manager",
      image: "AP",
      quote: "R-World's commitment to innovation and employee development is unmatched. The leadership team truly values our input and provides the resources we need to excel in our roles."
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#14213D] text-4xl lg:text-5xl font-bold mb-6">
            Employee Testimonials
          </h2>
          <p className="text-[#000000] text-lg max-w-4xl mx-auto leading-relaxed">
            R-World promotes an atmosphere that embraces continual learning at both the industrial and 
            technological levels. The fact that each day I am faced with a new opportunity to learn and 
            grow is one reason I love working at R-World.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Testimonial Cards */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeTestimonial === index ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="bg-[#E5E5E5] rounded-2xl p-6 relative">
                  {/* Quote icon */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#14213D] rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-[#FCA311]" />
                  </div>

                  <div className="flex items-start gap-4">
                    {/* Profile Image */}
                    <div className="w-20 h-20 bg-gradient-to-br from-[#14213D] to-[#FCA311] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg">
                      {testimonial.image}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-[#000000] text-base leading-relaxed mb-3">
                        {testimonial.quote}
                      </p>
                      <div>
                        <p className="text-[#14213D] font-bold text-lg">{testimonial.name}</p>
                        <p className="text-[#FCA311] font-semibold text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Video */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#14213D] to-[#000000] rounded-2xl shadow-2xl overflow-hidden aspect-video">
              {/* Video placeholder with office background simulation */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400">
                {/* Window effect */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-200 to-blue-100 opacity-40"></div>
                
                {/* Person silhouette area */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Person placeholder */}
                    <div className="w-48 h-48 bg-[#14213D] rounded-full opacity-30 blur-2xl"></div>
                    
                    {/* Play button */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <button className="w-20 h-20 bg-[#FCA311] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl group">
                        <svg className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Name overlay */}
                <div className="absolute bottom-20 right-8 bg-black/60 backdrop-blur-sm px-4 py-2 rounded text-white text-sm">
                  {testimonials[activeTestimonial].name}
                </div>
              </div>
              
              {/* Video controls */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-between">
                <button className="text-white hover:text-[#FCA311] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
                <span className="text-white text-sm font-medium">0:00 / 1:38</span>
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
          </div>
        </div>

        {/* Navigation dots */}
        {/* <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeTestimonial === index 
                  ? 'bg-[#FCA311] w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default EmployeeTestimonials;