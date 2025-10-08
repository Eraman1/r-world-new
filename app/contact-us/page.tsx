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
import Link from "next/link";
import { createEnquiry } from "@/lib/enquiryService";
import { EnquiryFormData } from "@/types/enquiry";

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
    callTime: "18:15",
    timezone: "(UTC+05:30) India Standard Time - New Delhi, Mumbai, Kolkata, Chennai, Bengaluru",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [locations] = useState<{ [key: string]: Location[] }>({
    headquarters: [
      {
        id: "hq-1",
        name: "Headquarters Office",
        address: "Noida Sector 62 Rd,C Block, Phase 2",
        city: "Noida, Uttar Pradesh, India",
        zipCode: "201301",
        image: "/api/placeholder/300/200",
        isExpanded: true,
      },
    ],
    asia: [
      {
        id: "asia-1",
        name: "Branch Office & Development Center",
        address:
          "C- 138/6, 2nd Floor Near Bhajanpura Thana, Main Road, BhajanPura",
        city: "Delhi, India",
        zipCode: "110053",
        image: "/api/placeholder/300/200",
        isExpanded: false,
      },
    ],
  });

  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    headquarters: true,
    asia: false,
  });

  const timezones = [
    "(UTC+05:30) India Standard Time - New Delhi, Mumbai, Kolkata, Chennai, Bengaluru",
    "(UTC-08:00) Pacific Time - Los Angeles, San Francisco, Seattle, Vancouver",
    "(UTC-07:00) Mountain Time - Denver, Phoenix, Calgary",
    "(UTC-06:00) Central Time - Chicago, Dallas, Mexico City",
    "(UTC-05:00) Eastern Time - New York, Washington DC, Toronto, Miami",
    "(UTC+00:00) Western Europe Time - London, Dublin, Lisbon",
    "(UTC+01:00) Central Europe Time - Paris, Berlin, Rome, Madrid, Amsterdam",
    "(UTC+02:00) Eastern Europe Time - Athens, Helsinki, Bucharest, Kyiv",
    "(UTC+03:00) Moscow Time - Moscow, Istanbul, Minsk",
    "(UTC+08:00) Western Australia Time - Perth",
    "(UTC+09:30) Central Australia Time - Adelaide, Darwin",
    "(UTC+10:00) Eastern Australia Time - Sydney, Melbourne, Brisbane",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Prepare data according to EnquiryFormData interface
      const enquiryData: EnquiryFormData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || undefined,
        message: formData.message || undefined,
        path: window.location.pathname, // Current page path
        bookCall: formData.bookCall,
        callDate: formData.bookCall ? formData.callDate : undefined,
        callTime: formData.bookCall ? formData.callTime : undefined,
        timezone: formData.bookCall ? formData.timezone : undefined,
      };

      const response = await createEnquiry(enquiryData);
      
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your enquiry has been submitted successfully. We'll get back to you soon.",
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        bookCall: false,
        callDate: "2025-09-26",
        callTime: "18:15",
        timezone: "(UTC+05:30) India Standard Time - New Delhi, Mumbai, Kolkata, Chennai, Bengaluru",
      });

      console.log("Enquiry created successfully:", response);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to submit enquiry. Please try again.",
      });
      console.error("Error submitting enquiry:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookCall = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.bookCall) {
      setSubmitStatus({
        type: "error",
        message: "Please check the 'Book a call' option first.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const enquiryData: EnquiryFormData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || undefined,
        message: formData.message || undefined,
        path: window.location.pathname,
        bookCall: true,
        callDate: formData.callDate,
        callTime: formData.callTime,
        timezone: formData.timezone,
      };

      const response = await createEnquiry(enquiryData);
      
      setSubmitStatus({
        type: "success",
        message: "Your call has been booked successfully! We'll send you a confirmation shortly.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        bookCall: false,
        callDate: "2025-09-26",
        callTime: "18:15",
        timezone: "(UTC+05:30) India Standard Time - New Delhi, Mumbai, Kolkata, Chennai, Bengaluru",
      });

      console.log("Call booked successfully:", response);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to book call. Please try again.",
      });
      console.error("Error booking call:", error);
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="lg:col-span-2">
            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-50 border border-green-200 text-green-800"
                    : "bg-red-50 border border-red-200 text-red-800"
                }`}
              >
                <p className="font-medium">{submitStatus.message}</p>
              </div>
            )}

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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>

              {/* Book Call Checkbox */}
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                <input
                  type="checkbox"
                  id="bookCall"
                  name="bookCall"
                  checked={formData.bookCall}
                  onChange={handleInputChange}
                  className="h-5 w-5 text-amber-600 focus:ring-amber-500 border-amber-400 rounded cursor-pointer"
                  disabled={isSubmitting}
                />
                <label
                  htmlFor="bookCall"
                  className="text-amber-700 font-semibold text-base cursor-pointer flex items-center gap-2"
                >
                  <MessageSquare className="h-5 w-5" />
                  Book a 20-minute consultation call
                </label>
              </div>

              {/* Call Booking Section */}
              {formData.bookCall && (
                <div className="space-y-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    Schedule Your Call
                  </h3>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Date
                      </label>
                      <input
                        type="date"
                        name="callDate"
                        value={formData.callDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm hover:border-blue-400 transition-colors"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Time
                      </label>
                      <input
                        type="time"
                        name="callTime"
                        value={formData.callTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm hover:border-blue-400 transition-colors"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Timezone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time Zone
                    </label>
                    <div className="relative">
                      <select
                        name="timezone"
                        value={formData.timezone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white shadow-sm hover:border-blue-400 transition-colors cursor-pointer"
                        disabled={isSubmitting}
                      >
                        {timezones.map((tz, index) => (
                          <option key={index} value={tz}>
                            {tz}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500 pointer-events-none" />
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-300">
                    <p className="text-sm text-blue-800 flex items-start gap-2">
                      <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>
                        Our team will reach out to confirm your call appointment
                        shortly after submission.
                      </span>
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#14213d] hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                </button>
                {formData.bookCall && (
                  <button
                    onClick={handleBookCall}
                    disabled={isSubmitting}
                    className="flex-1 bg-[#fca311] hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "BOOKING..." : "BOOK 20 MIN CALL"}
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
                <Link
                  href="tel:918377832378"
                  className="flex items-center space-x-3"
                >
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-amber-600" />
                  </div>
                  <span className="text-gray-700">Phone: +91-8377832378</span>
                </Link>

                <Link
                  href="mailto:sales@rworldsoftware.in"
                  className="flex items-center space-x-3"
                >
                  <Mail className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">sales@rworldsoftware.in</span>
                </Link>
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

                {/* Asia */}
                <div>
                  <button
                    onClick={() => toggleSection("asia")}
                    className="w-full flex items-center justify-between py-3"
                  >
                    <span className="font-semibold text-gray-900">India</span>
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