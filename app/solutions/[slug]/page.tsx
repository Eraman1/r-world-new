"use client";
import React from "react";
import Banner from "@/app/industries/components/banner";
import Breadcrumb from "@/app/industries/components/breadcrumb";

import { notFound } from "next/navigation";
import { solutionsData } from "@/data/solutions/solutions";
import CRMServices from "../components/coustomSolution";

import DeveloperDetails from "../components/DeveloperDetails";

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

      <CRMServices />

       {solutions.developerDetails && (
        <DeveloperDetails developerDetails={solutions.developerDetails} />
      )}
    </div>
  );
}
