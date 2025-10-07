"use client";

import { IndustryConfig } from "@/types/industries";
import { healthcare } from "./health-care";
import { banking } from "./banking";
import { agriculture } from "./agriculture";

export const industriesData: Record<string, IndustryConfig> = {
  agriculture,
  healthcare,
  banking,
};

export type { IndustryConfig };
