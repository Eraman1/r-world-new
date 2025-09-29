"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Calendar,
  Clock,
} from "lucide-react";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  bookCall: boolean;
  callDate: string;
  callTime: string;
  timezone: string;
}

interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  zipCode: string;
  image: string;
  isExpanded: boolean;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    bookCall: false,
    callDate: "2025-09-26",
    callTime: "6:15 PM",
    timezone: "(UTC-05:00) New York, Washington DC, Toronto, Montreal, Atlanta",
  });

  const [locations] = useState<{ [key: string]: Location[] }>({
    headquarters: [
      {
        id: "hq-1",
        name: "Headquarters & Delivery Center",
        address: "1500 Concord Terrace",
        city: "Suite 100, Sunrise FL",
        zipCode: "33323",
        image: "/api/placeholder/300/200",
        isExpanded: true,
      },
    ],
    unitedStates: [
      {
        id: "us-1",
        name: "New York Office",
        address: "123 Broadway",
        city: "New York, NY",
        zipCode: "10001",
        image: "/api/placeholder/300/200",
        isExpanded: false,
      },
      {
        id: "us-2",
        name: "California Office",
        address: "456 Tech Street",
        city: "San Francisco, CA",
        zipCode: "94105",
        image: "/api/placeholder/300/200",
        isExpanded: false,
      },
    ],
    europe: [
      {
        id: "eu-1",
        name: "London Office",
        address: "789 Business District",
        city: "London, UK",
        zipCode: "EC1A 1BB",
        image: "/api/placeholder/300/200",
        isExpanded: false,
      },
    ],
    asia: [
      {
        id: "asia-1",
        name: "Singapore Office",
        address: "321 Marina Bay",
        city: "Singapore",
        zipCode: "018956",
        image: "/api/placeholder/300/200",
        isExpanded: false,
      },
    ],
  });

  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    headquarters: true,
    unitedStates: false,
    europe: false,
    asia: false,
  });

  const timezones = [
    "(UTC-05:00) New York, Washington DC, Toronto, Montreal, Atlanta",
    "(UTC-08:00) Los Angeles, San Francisco, Seattle, Vancouver",
    "(UTC-06:00) Chicago, Dallas, Mexico City, Guatemala",
    "(UTC+00:00) London, Dublin, Lisbon, Reykjavik",
    "(UTC+01:00) Paris, Berlin, Rome, Madrid, Amsterdam",
    "(UTC+08:00) Singapore, Beijing, Hong Kong, Manila",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleBookCall = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking call:", formData);
    // Handle call booking logic here
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#14213d] mb-6">
            Let&#39;s Talk Solutions.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form and we&#39;ll connect you with a dedicated
            software expert within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 ">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="E.g. John Smith"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Contact Email <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E.g. you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Phone and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="E.g. (555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="E.g. Acme Corp"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
                />
              </div>

              {/* Book Call Checkbox */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="bookCall"
                  name="bookCall"
                  checked={formData.bookCall}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-amber-300 rounded"
                />
                <label
                  htmlFor="bookCall"
                  className="text-amber-600 font-medium"
                >
                  If you want to Book 20 min call
                </label>
              </div>

              {/* Call Booking Section */}
              {formData.bookCall && (
                <div className="space-y-4 p-6 bg-white rounded-lg border border-gray-200">
                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="date"
                        name="callDate"
                        value={formData.callDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pr-10"
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <input
                        type="time"
                        name="callTime"
                        value={formData.callTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pr-10"
                      />
                      <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Timezone */}
                  <div className="relative">
                    <select
                      name="timezone"
                      value={formData.timezone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none"
                    >
                      {timezones.map((tz, index) => (
                        <option key={index} value={tz}>
                          {tz}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#14213d] hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  SUBMIT
                </button>
                {formData.bookCall && (
                  <button
                    onClick={handleBookCall}
                    className="flex-1 bg-[#fca311] hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    BOOK 20 MIN CALL
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Contact Information & Locations */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-[#e5e5e5] rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-amber-600" />
                  </div>
                  <span className="text-gray-700">Phone: 954 342 5676</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-amber-600" />
                  </div>
                  <span className="text-gray-700">Phone: +44 137 243 2466</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="">
                    <MessageSquare className="h-5 w-5 text-amber-600" />
                  </div>
                  <span className="text-gray-700">(954) 800 2477</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">sales@chetu.com</span>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="bg-[#e5e5e5] rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                LOCATIONS
              </h2>

              {/* Headquarters */}
              <div className="space-y-4">
                <div>
                  <button
                    onClick={() => toggleSection("headquarters")}
                    className="w-full flex items-center justify-between py-3 border-b border-gray-200"
                  >
                    <span className="font-semibold text-gray-900">
                      HEADQUARTERS
                    </span>
                    {expandedSections.headquarters ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>

                  {expandedSections.headquarters && (
                    <div className="mt-4">
                      {locations.headquarters.map((location) => (
                        <div key={location.id} className="flex space-x-4">
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">
                              {location.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {location.address}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {location.city}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {location.zipCode}
                            </p>
                          </div>
                          <Image
                            width={80}
                            height={64}
                            src={location.image}
                            alt={location.name}
                            className="object-cover rounded"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* United States */}
                <div>
                  <button
                    onClick={() => toggleSection("unitedStates")}
                    className="w-full flex items-center justify-between py-3 border-b border-gray-200"
                  >
                    <span className="font-semibold text-gray-900">
                      UNITED STATES
                    </span>
                    {expandedSections.unitedStates ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>

                  {expandedSections.unitedStates && (
                    <div className="mt-4 space-y-4">
                      {locations.unitedStates.map((location) => (
                        <div key={location.id} className="flex space-x-4">
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">
                              {location.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {location.address}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {location.city}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {location.zipCode}
                            </p>
                          </div>
                          <Image
                            width={80}
                            height={64}
                            src={location.image}
                            alt={location.name}
                            className="w-20 h-16 object-cover rounded"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Europe */}
                <div>
                  <button
                    onClick={() => toggleSection("europe")}
                    className="w-full flex items-center justify-between py-3 border-b border-gray-200"
                  >
                    <span className="font-semibold text-gray-900">EUROPE</span>
                    {expandedSections.europe ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>

                  {expandedSections.europe && (
                    <div className="mt-4">
                      {locations.europe.map((location) => (
                        <div key={location.id} className="flex space-x-4">
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">
                              {location.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {location.address}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {location.city}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {location.zipCode}
                            </p>
                          </div>
                          <Image
                            width={80}
                            height={64}
                            src={location.image}
                            alt={location.name}
                            className="object-cover rounded"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Asia */}
                <div>
                  <button
                    onClick={() => toggleSection("asia")}
                    className="w-full flex items-center justify-between py-3"
                  >
                    <span className="font-semibold text-gray-900">ASIA</span>
                    {expandedSections.asia ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>

                  {expandedSections.asia && (
                    <div className="mt-4">
                      {locations.asia.map((location) => (
                        <div key={location.id} className="flex space-x-4">
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">
                              {location.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {location.address}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {location.city}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {location.zipCode}
                            </p>
                          </div>
                          <Image
                            width={80}
                            height={64}
                            src={location.image}
                            alt={location.name}
                            className="object-cover rounded"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
