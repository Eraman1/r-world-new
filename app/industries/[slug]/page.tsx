"use client";
import React from "react";
import Banner from "@/app/industries/components/banner";
import Breadcrumb from "@/app/industries/components/breadcrumb";
import ManagementSolutions from "@/app/industries/components/managementSolutions";
import ManagementSolutionsTwo from "@/app/industries/components/managementSolutionsTwo";
import Solutions from "@/app/industries/components/solutions";
import TechHero from "@/app/industries/components/techHero";
import { notFound } from "next/navigation";
import { industriesData } from "@/data/industries";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function Page({ params }: Props) {
  const { slug } = React.use(params);
  const industry = industriesData[slug];

  if (!industry) return notFound();

  return (
    <div>
      <Banner data={industry.banner} />
      <Breadcrumb />

      {industry.techHero && <TechHero data={industry.techHero} />}

      {industry.solutions && (
        <Solutions
          mainTitle={industry.solutions.mainTitle}
          mainDescription={industry.solutions.mainDescription}
          solutions={industry.solutions.items}
          linkText={industry.solutions.linkText}
          linkUrl={industry.solutions.linkUrl}
        />
      )}

      {industry.managementSolutions && (
        <ManagementSolutions
          managementSolutions={industry.managementSolutions}
          slug={slug}
          banner={{
            title: "",
            highlight: undefined,
            subtitle: undefined,
            image: undefined,
            linkText: undefined,
          }}
        />
      )}

     {industry.managementSolutionsTwo && (
        <ManagementSolutionsTwo
          managementSolutionsTwo={industry.managementSolutionsTwo}
          slug={slug}
          banner={{
            title: "",
            highlight: undefined,
            subtitle: undefined,
            image: undefined,
            linkText: undefined,
          }}
        />
      )}
    </div>
  );
}
