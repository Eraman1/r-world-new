"use client";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  Phone,
  Mail,
  MessageSquare,
  ChevronDown,
  Calendar,
  Clock,
  AlertCircle,
} from "lucide-react";
import { EnquiryFormData } from "@/types/enquiry";
import { createEnquiry } from "@/lib/enquiryService";

// ============= TYPES =============
interface FormData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  company: string;
  message: string;
  bookCall: boolean;
  callDate: string;
  callTime: string;
  timezone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  callDate?: string;
  callTime?: string;
}

// ============= CONSTANTS =============
const COUNTRY_CODES = [
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
];

const TIMEZONES = [
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

// ============= VALIDATION UTILS =============
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{7,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

const validateName = (name: string): boolean => {
  return name.trim().length >= 2;
};

const validateForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!validateName(formData.name)) {
    errors.name = "Name must be at least 2 characters long";
  }

  if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!validatePhone(formData.phone)) {
    errors.phone = "Please enter a valid phone number (7-15 digits)";
  }

  if (formData.bookCall) {
    const selectedDate = new Date(formData.callDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      errors.callDate = "Please select a future date";
    }

    if (!formData.callTime) {
      errors.callTime = "Please select a time for the call";
    }
  }

  return errors;
};

// ============= CONTACT INFO COMPONENT =============
const ContactInfo = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md border border-gray-200">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Get In Touch</h3>
      <div className="space-y-4">
        <a
          href="tel:918377832378"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-colors group"
        >
          <div className="bg-amber-100 p-2 rounded-full group-hover:bg-amber-200 transition-colors">
            <Phone className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Phone</p>
            <p className="text-gray-700 font-semibold">+91-8377832378</p>
          </div>
        </a>

        <a
          href="mailto:sales@rworldsoftware.in"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-colors group"
        >
          <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
            <Mail className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Email</p>
            <p className="text-gray-700 font-semibold break-all">
              sales@rworldsoftware.in
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

// ============= LOCATIONS COMPONENT =============
const Locations = () => {
  const locations = {
    headquarters: [
      {
        id: "hq-1",
        name: "Headquarters Office",
        address: "Noida Sector 62 Rd, C Block, Phase 2",
        city: "Noida, Uttar Pradesh, India",
        zipCode: "201301",
      },
    ],
    branches: [
      {
        id: "branch-1",
        name: "Branch Office & Development Center",
        address:
          "C-138/6, 2nd Floor Near Bhajanpura Thana, Main Road, BhajanPura",
        city: "Delhi, India",
        zipCode: "110053",
      },
    ],
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-amber-600 mb-6">LOCATIONS</h2>

      <div className="space-y-6">
        {/* Headquarters */}
        <div>
          <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
            <span className="text-blue-600">🏢</span> HEADQUARTERS
          </h3>
          {locations.headquarters.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>

        {/* Branches */}
        <div>
          <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
            <span className="text-green-600">🌏</span> INDIA
          </h3>
          {locations.branches.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface LocationCardProps {
  name: string;
  address: string;
  city: string;
  zipCode: string;
}
const LocationCard = ({ location }: { location: LocationCardProps }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <h4 className="font-semibold text-gray-900 mb-2">{location.name}</h4>
      <div className="space-y-1 text-sm text-gray-600">
        <p>{location.address}</p>
        <p>{location.city}</p>
        <p className="font-medium text-gray-700">{location.zipCode}</p>
      </div>
    </div>
  );
};

// ============= INPUT FIELD COMPONENT =============
interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  error,
  disabled = false,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded-lg  focus:border-gray-500 transition-colors ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        disabled={disabled}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="h-4 w-4" />
          {error}
        </p>
      )}
    </div>
  );
};

// ============= PHONE INPUT COMPONENT =============
interface PhoneInputProps {
  countryCode: string;
  phone: string;
  onCountryCodeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  countryCode,
  phone,
  onCountryCodeChange,
  onPhoneChange,
  error,
  disabled = false,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Phone <span className="text-orange-500">*</span>
      </label>
      <div className="flex gap-2">
        <div className="relative w-32">
          <select
            name="countryCode"
            value={countryCode}
            onChange={onCountryCodeChange}
            className="w-full px-2 py-3 border border-gray-300 rounded-lg  focus:border-gray-500 appearance-none bg-white cursor-pointer"
            disabled={disabled}
          >
            {COUNTRY_CODES.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.code}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
        </div>
        <div className="flex-1">
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={onPhoneChange}
            placeholder="1234567890"
            className={`w-full px-4 py-3 border rounded-lg  focus:border-gray-500 transition-colors ${
              error ? "border-red-500" : "border-gray-300"
            }`}
            disabled={disabled}
          />
        </div>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="h-4 w-4" />
          {error}
        </p>
      )}
    </div>
  );
};

// ============= CALL BOOKING SECTION =============
interface CallBookingSectionProps {
  formData: FormData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  errors: FormErrors;
  disabled?: boolean;
}

const CallBookingSection: React.FC<CallBookingSectionProps> = ({
  formData,
  onChange,
  errors,
  disabled = false,
}) => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="space-y-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Calendar className="h-5 w-5 text-blue-600" />
        Schedule Your Call
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Date <span className="text-orange-500">*</span>
          </label>
          <input
            type="date"
            name="callDate"
            value={formData.callDate}
            onChange={onChange}
            min={today}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm hover:border-blue-400 transition-colors ${
              errors.callDate ? "border-red-500" : "border-gray-300"
            }`}
            disabled={disabled}
          />
          {errors.callDate && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.callDate}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Time <span className="text-orange-500">*</span>
          </label>
          <input
            type="time"
            name="callTime"
            value={formData.callTime}
            onChange={onChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm hover:border-blue-400 transition-colors ${
              errors.callTime ? "border-red-500" : "border-gray-300"
            }`}
            disabled={disabled}
          />
          {errors.callTime && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {errors.callTime}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Time Zone
        </label>
        <div className="relative">
          <select
            name="timezone"
            value={formData.timezone}
            onChange={onChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white shadow-sm hover:border-blue-400 transition-colors cursor-pointer"
            disabled={disabled}
          >
            {TIMEZONES.map((tz, index) => (
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
            Our team will reach out to confirm your call appointment shortly
            after submission.
          </span>
        </p>
      </div>
    </div>
  );
};

// ============= MAIN CONTACT PAGE =============
const currentDate = new Date().toISOString().split("T")[0];
const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    company: "",
    message: "",
    bookCall: false,
    callDate: currentDate,
    callTime: "14:15",
    timezone: TIMEZONES[0],
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      if (!checked) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.callDate;
          delete newErrors.callTime;
          return newErrors;
        });
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name as keyof FormErrors];
          return newErrors;
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data according to EnquiryFormData interface
      const enquiryData: EnquiryFormData = {
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        countryCode: formData.countryCode,
        company: formData.company || undefined,
        message: formData.message,
        bookCall: formData.bookCall,
        callDate: formData.bookCall ? formData.callDate : "",
        callTime: formData.bookCall ? formData.callTime : "",
        timezone: formData.bookCall ? formData.timezone : "",
      };

      // API CALL
      const response = await createEnquiry(enquiryData);

      console.log("API Response:", response);

      toast.success(
        "Thank you! Your enquiry has been submitted successfully. We'll get back to you soon.",
        { duration: 5000 }
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91",
        company: "",
        message: "",
        bookCall: false,
        callDate: currentDate,
        callTime: "14:15",
        timezone: TIMEZONES[0],
      });

      setErrors({});
    } catch (error) {
      console.error("Enquiry submission failed:", error);
      toast.error("Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#363636",
            padding: "16px",
            borderRadius: "8px",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-amber-500 mb-6">
            Let&#39;s Talk Solutions.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form and we&#39;ll connect you with a dedicated
            software expert within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="E.g. John Smith"
                  required
                  error={errors.name}
                  disabled={isSubmitting}
                />
                <InputField
                  label="Contact Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E.g. you@example.com"
                  required
                  error={errors.email}
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PhoneInput
                  countryCode={formData.countryCode}
                  phone={formData.phone}
                  onCountryCodeChange={handleInputChange}
                  onPhoneChange={handleInputChange}
                  error={errors.phone}
                  disabled={isSubmitting}
                />
                <InputField
                  label="Company Name (Optional)"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="E.g. Acme Corp"
                  disabled={isSubmitting}
                />
              </div>

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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-gray-500 transition-colors resize-none"
                  disabled={isSubmitting}
                />
              </div>

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

              {formData.bookCall && (
                <CallBookingSection
                  formData={formData}
                  onChange={handleInputChange}
                  errors={errors}
                  disabled={isSubmitting}
                />
              )}

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-[#14213d] hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT ENQUIRY"}
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <ContactInfo />
            <Locations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
