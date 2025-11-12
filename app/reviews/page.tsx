import React from "react";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  company: string;
  position: string;
  rating: number;
  review: string;
  image?: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "John Anderson",
    company: "TechCorp Solutions",
    position: "CEO",
    rating: 5,
    review:
      "R-World Software Solutions delivered an exceptional custom software solution that transformed our business operations. Their team's expertise and dedication to quality are unmatched.",
    date: "October 2024",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    company: "Global Innovations Ltd",
    position: "CTO",
    rating: 5,
    review:
      "Working with R-World was a game-changer for our company. They understood our requirements perfectly and delivered a scalable solution that exceeded our expectations.",
    date: "September 2024",
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "StartupHub",
    position: "Founder",
    rating: 5,
    review:
      "The on-demand developers from R-World integrated seamlessly with our team. Their technical skills and communication made the entire process smooth and efficient.",
    date: "August 2024",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    company: "Finance Pro Inc",
    position: "Operations Director",
    rating: 5,
    review:
      "R-World's custom software development services helped us automate complex processes. The ROI has been phenomenal, and their ongoing support is excellent.",
    date: "July 2024",
  },
  {
    id: 5,
    name: "David Thompson",
    company: "RetailMax",
    position: "VP of Technology",
    rating: 5,
    review:
      "Outstanding work! The team delivered our e-commerce platform ahead of schedule with features we didn't even know we needed. Highly recommend their services.",
    date: "June 2024",
  },
  {
    id: 6,
    name: "Lisa Wang",
    company: "HealthTech Solutions",
    position: "Product Manager",
    rating: 5,
    review:
      "R-World's expertise in healthcare software development is impressive. They navigated complex compliance requirements while delivering a user-friendly solution.",
    date: "May 2024",
  },
];

const ClientReviewsPage: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header Section */}
      <div className="bg-blue-900/80  text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client Reviews & Testimonials
            </h1>
            <p className="text-xl text-blue-100">
              Don't just take our word for it - hear what our clients have to
              say about their experience working with R-World Software Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
            >
              {/* Header with Avatar and Info */}
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-white font-semibold mr-4 flex-shrink-0">
                  {getInitials(review.name)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-600">{review.position}</p>
                  <p className="text-sm text-blue-600 font-medium">
                    {review.company}
                  </p>
                </div>
              </div>

             

              {/* Review Text */}
              <p className="text-gray-700 mb-4 flex-grow leading-relaxed">
                "{review.review}"
              </p>

              {/* Date */}
              <p className="text-sm text-gray-500 mt-auto">{review.date}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">1000+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of satisfied clients who have transformed their
            business with our solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg">
              Get Started
            </button>
            <button className="border-2 border-amber-400 text-amber-400 px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewsPage;
