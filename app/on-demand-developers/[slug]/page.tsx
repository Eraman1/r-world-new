"use client";
import React from "react";
import Banner from "@/app/industries/components/banner";
import Breadcrumb from "@/app/industries/components/breadcrumb";

import { notFound } from "next/navigation";
import { onDemandDevelopersData } from "@/data/onDemandDevelopers/onDemandDevelopers";
import FAQ from "@/app/industries/components/faqItem";
import FeaturesComponent from "../components/FeaturesComponent";
import Solutions from "../components/solutions";
import TopSkill from "../components/TopSkill";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function Page({ params }: Props) {
  const { slug } = React.use(params);
  const onDemandDevelopers = onDemandDevelopersData[slug];

  if (!onDemandDevelopers) return notFound();

  return (
    <div>
      <Banner data={onDemandDevelopers.banner} />
      <Breadcrumb />
      <FeaturesComponent features={onDemandDevelopers.features} />
      {onDemandDevelopers.solutions && (
        <Solutions
          mainTitle={onDemandDevelopers.solutions.mainTitle}
          mainDescription={onDemandDevelopers.solutions.mainDescription}
          solutions={onDemandDevelopers.solutions.items}
          linkText={onDemandDevelopers.solutions.linkText}
          linkUrl={onDemandDevelopers.solutions.linkUrl}
        />
      )}
      {onDemandDevelopers.topSkill && (
        <TopSkill
          mainTitle={onDemandDevelopers.topSkill.mainTitle}
          mainDescription={onDemandDevelopers.topSkill.mainDescription}
          solutions={onDemandDevelopers.topSkill.items}
          linkText={onDemandDevelopers.topSkill.linkText}
          linkUrl={onDemandDevelopers.topSkill.linkUrl}
        />
      )}

      {onDemandDevelopers.faq && (
        <FAQ
          title={onDemandDevelopers.faq.title}
          items={onDemandDevelopers.faq.items}
        />
      )}
    </div>
  );
}
