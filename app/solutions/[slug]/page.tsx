"use client";
import React from "react";
import Banner from "@/app/industries/components/banner";
import Breadcrumb from "@/app/industries/components/breadcrumb";

import { notFound } from "next/navigation";
import { solutionsData } from "@/data/solutions/solutions";

import DeveloperDetails from "../components/DeveloperDetails";
import FAQ from "../components/faqItem";
import ManagementSolutions from "../components/managementSolutions";
import Solutions from "../components/solutions";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function Page({ params }: Props) {
  const { slug } = React.use(params);
  const solutions = solutionsData[slug];

  if (!solutions) return notFound();

  return (
    <div>
      <Banner data={solutions.banner} />
      <Breadcrumb />

      {solutions.developerDetails && (
        <DeveloperDetails developerDetails={solutions.developerDetails} />
      )}
      {solutions.solutions && (
        <Solutions
          mainTitle={solutions.solutions.mainTitle}
          mainDescription={solutions.solutions.mainDescription}
          solutions={solutions.solutions.items}
          linkText={solutions.solutions.linkText}
          linkUrl={solutions.solutions.linkUrl}
        />
      )}

      {solutions.managementSolutions && (
        <ManagementSolutions
          managementSolutions={solutions.managementSolutions}
        />
      )}
      {solutions.faq && (
        <FAQ title={solutions.faq.title} items={solutions.faq.items} />
      )}
    </div>
  );
}

