"use client";
import React from "react";
import Banner from "@/app/industries/components/banner";
import Breadcrumb from "@/app/industries/components/breadcrumb";

import { notFound } from "next/navigation";

import DeveloperDetails from "../components/DeveloperDetails";
import FAQ from "../components/faqItem";
import ManagementSolutions from "../components/managementSolutions";
import Solutions from "../components/solutions";
import { servicesData } from "@/data/services/services";
import SolutionsTwo from "../components/solutionsTwo";


type Props = {
  params: Promise<{ slug: string }>;
};

export default function Page({ params }: Props) {
  const { slug } = React.use(params);
  const services = servicesData[slug];

  if (!services) return notFound();

  return (
    <div>
      <Banner data={services.banner} />
      <Breadcrumb />

      {services.developerDetails && (
        <DeveloperDetails developerDetails={services.developerDetails} />
      )}
      {services.solutions && (
        <Solutions
          mainTitle={services.solutions.mainTitle}
          mainDescription={services.solutions.mainDescription}
          solutions={services.solutions.items}
          linkText={services.solutions.linkText}
          linkUrl={services.solutions.linkUrl}
        />
      )}
      {services.solutions && (
        <SolutionsTwo
          mainTitle={services.solutions.mainTitle}
          mainDescription={services.solutions.mainDescription}
          solutions={services.solutions.items}
          linkText={services.solutions.linkText}
          linkUrl={services.solutions.linkUrl}
        />
      )}

      {services.managementSolutions && (
        <ManagementSolutions
          managementSolutions={services.managementSolutions}
        />
      )}
      {services.faq && (
        <FAQ title={services.faq.title} items={services.faq.items} />
      )}
    </div>
  );
}
