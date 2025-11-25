import React from "react";
import { Star } from "lucide-react";
import Link from "next/link";

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
    name: "Ravi Kumar",
    company: "Sri Manjunatha Marbles",
    position: "Owner",
    rating: 5,
    review:
      "R-World Software Solutions helped us digitize our operations smoothly. Their team is skilled and always ready to support. Highly reliable!",
    date: "January 2025",
  },
  {
    id: 2,
    name: "Imran Sheikh",
    company: "Dilli Darbar",
    position: "Director",
    rating: 5,
    review:
      "We needed a custom restaurant management solution, and R-World delivered beyond expectations. Excellent UI, fast system, and great support.",
    date: "December 2024",
  },
  {
    id: 3,
    name: "Prakash Sharma",
    company: "SEMRI INDIAN SERVICE",
    position: "Manager",
    rating: 5,
    review:
      "Their software helped us streamline our service operations. Professional team and very responsive.",
    date: "November 2024",
  },
  {
    id: 4,
    name: "Rohan Patel",
    company: "Hi Tech Solutions",
    position: "Founder",
    rating: 5,
    review:
      "R-World built a powerful CRM tool for our business. The quality and performance are outstanding.",
    date: "October 2024",
  },
  {
    id: 5,
    name: "Amit Yadav",
    company: "Mahakal Trading Company",
    position: "Proprietor",
    rating: 5,
    review:
      "Very professional team—helped us automate billing and inventory. Completely satisfied with the service.",
    date: "September 2024",
  },
  {
    id: 6,
    name: "Rahul Verma",
    company: "Desert Food Pvt Ltd",
    position: "Operations Head",
    rating: 5,
    review:
      "They developed a custom ERP for our food company. Smooth workflow and great long-term support.",
    date: "August 2024",
  },
  {
    id: 7,
    name: "Kiran Joshi",
    company: "Mahalaxmi Traders",
    position: "Partner",
    rating: 5,
    review:
      "The R-World team understands business needs very well. Our trading system runs 10x better now.",
    date: "July 2024",
  },
  {
    id: 8,
    name: "Arshad Ali",
    company: "A S Export",
    position: "Export Manager",
    rating: 5,
    review:
      "Fantastic experience! The export management software they built is fast, secure, and extremely useful.",
    date: "June 2024",
  },
  {
    id: 9,
    name: "Dr. Nirmala Singh",
    company: "Niramya Kids Clinic",
    position: "Paediatrician",
    rating: 5,
    review:
      "They created a smooth appointment and patient record system for our clinic. Very helpful and easy to use.",
    date: "May 2024",
  },
  {
    id: 10,
    name: "Sandeep Kumar",
    company: "Sai Mobile",
    position: "Owner",
    rating: 5,
    review:
      "R-World developed a POS and inventory system for us. It has made our work much easier.",
    date: "April 2024",
  },
  {
    id: 11,
    name: "Vikas Khajuria",
    company: "Khajuria Steels Trading",
    position: "Director",
    rating: 5,
    review:
      "Excellent software solutions for steel trading. Strongly recommend R-World.",
    date: "March 2024",
  },
  {
    id: 12,
    name: "Deepak Singh",
    company: "D.S. Enterprises",
    position: "Founder",
    rating: 5,
    review:
      "Professional, timely, and very supportive. R-World helped digitize our entire workflow.",
    date: "February 2024",
  },
  {
    id: 13,
    name: "Harsh Trivedi",
    company: "Satva Dry Fruits",
    position: "Owner",
    rating: 5,
    review:
      "Their e-commerce and inventory system has greatly boosted our efficiency. Amazing work!",
    date: "January 2024",
  },
  {
    id: 14,
    name: "Manish Gupta",
    company: "Globe Mobile Accessories",
    position: "Manager",
    rating: 5,
    review:
      "We needed a custom solution for our accessories business, and R-World provided exactly what we required.",
    date: "December 2023",
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
              Don&#39;t just take our word for it - hear what our clients have
              to say about their experience working with R-World Software
              Solutions
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
                  {getInitials(review.company)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-blue-600">
                    {review.company}
                  </h3>
                  <p className="text-sm text-gray-600">{review.position}</p>
                  {/* <p className="text-sm text-blue-600 font-medium">
                    {review.company}
                  </p> */}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 flex-grow leading-relaxed">
                &#34;{review.review}&#34;
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
              <div className="text-4xl font-bold text-amber-400 mb-2">
                1000+
              </div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">
                4.9/5
              </div>
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
            <Link href="/contact-us" className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewsPage;
