"use client";

import { IndustryConfig } from "@/types/industries";
import { healthcare } from "./health-care";
import { banking } from "./banking";
import { agriculture } from "./agriculture";
import { environmentalManagement } from "./environmental-management";
import { construction } from "./construction";
import { aviation } from "./aviation";

export const industriesData: Record<string, IndustryConfig> = {
  agriculture,
  healthcare,
  banking,
  "environmental-management": environmentalManagement,
  construction,
  aviation,
};

export type { IndustryConfig };
