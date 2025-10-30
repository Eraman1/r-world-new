"use client";

import { OnDemandDevelopersConfig } from "@/types/onDemandDevelopers";
import { OnDemandDevelopers } from "./on-demand-developers";



export const onDemandDevelopersData: Record<string, OnDemandDevelopersConfig> = {
  "on-demand-developers": OnDemandDevelopers,
};

export type { OnDemandDevelopersConfig };
