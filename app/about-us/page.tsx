import AboutAll from "@/components/about";
import Banner from "@/components/bannerForAbout";
import EmployeeTestimonials from "@/components/employeeTestimonial";
import StrategicPartners from "@/components/StrategicPartners";
import Testimonials from "@/components/testimonialAbout";
import VerifiedBy from "@/components/verified";
import React from "react";

export default function page() {
  return (
    <div>
      <Banner />
      <AboutAll/>
      <Testimonials/>
      <EmployeeTestimonials/>
      {/* <PartnersSection/> */}
      <StrategicPartners/>
      <VerifiedBy/>
    </div>
  );
}
