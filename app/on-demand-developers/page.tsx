"use client";
import React from "react";
import Banner from "@/app/industries/components/banner";
import Breadcrumb from "@/app/industries/components/breadcrumb";

import FAQ from "@/app/industries/components/faqItem";
import { OnDemandDevelopers } from "@/data/onDemandDevelopers/on-demand-developers";
import FeaturesComponent from "./components/FeaturesComponent";
import Solutions from "./components/solutions";
import TopSkill from "./components/TopSkill";



export default function Page() {
  //   const { slug } = React.use(params);
  //   const onDemandDevelopers = onDemandDevelopersData[slug];

  //   if (!onDemandDevelopers) return notFound();

  return (
    <div>
      <Banner data={OnDemandDevelopers.banner} />
      <Breadcrumb />
      <FeaturesComponent features={OnDemandDevelopers.features} />
      {OnDemandDevelopers.solutions && (
        <Solutions
          mainTitle={OnDemandDevelopers.solutions.mainTitle}
          mainDescription={OnDemandDevelopers.solutions.mainDescription}
          solutions={OnDemandDevelopers.solutions.items}
          linkText={OnDemandDevelopers.solutions.linkText}
          linkUrl={OnDemandDevelopers.solutions.linkUrl}
        />
      )}
      {OnDemandDevelopers.topSkill && (
        <TopSkill
          mainTitle={OnDemandDevelopers.topSkill.mainTitle}
          mainDescription={OnDemandDevelopers.topSkill.mainDescription}
          solutions={OnDemandDevelopers.topSkill.items}
          linkText={OnDemandDevelopers.topSkill.linkText}
          linkUrl={OnDemandDevelopers.topSkill.linkUrl}
        />
      )}
      {OnDemandDevelopers.faq && (
        <FAQ
          title={OnDemandDevelopers.faq.title}
          items={OnDemandDevelopers.faq.items}
        />
      )}
    </div>
  );
}
