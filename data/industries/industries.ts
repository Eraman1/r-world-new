"use client";

import { IndustryConfig } from "@/types/industries";
import { healthcare } from "./health-care";
import { banking } from "./banking";
import { agriculture } from "./agriculture";
import { environmentalManagement } from "./environmental-management";
import { construction } from "./construction";
import { aviation } from "./aviation";
import { casinogames } from "./casino-games";
import { corrections } from "./corrections";
import { eLearningEducation } from "./e-learning-education";
import { energyUtilities } from "./energy-utilities";
import { finance } from "./finance";
import { foodbeverage } from "./food-beverage";
import { gaming } from "./gaming";
import { hospitalitytravel } from "./hospitality-travel";
import { hcm } from "./hcm";
import { insurance } from "./insurance";
import { legal } from "./legal";
import { lending } from "./lending";
import { mediaentertainment } from "./media-entertainment";
import { meetingsEvents } from "./meetings-events";
import { mortgage } from "./mortgage";
import { nonprofit } from "./nonprofit";
import { oilGas } from "./oil-gas";
import { payments } from "./payments";
import { politicalcampaigns } from "./political-campaigns";
import { retail } from "./retail";
import { realEstate } from "./real-estate";
import { sports } from "./sports";
import { supplyChain } from "./supply-chain";
import { telecommunications } from "./telecommunications";
import { transportation } from "./transportation";

export const industriesData: Record<string, IndustryConfig> = {
  agriculture,
  healthcare,
  banking,
  "environmental-management": environmentalManagement,
  construction,
  aviation,
  "casino-games": casinogames,
  corrections,
  "e-learning-education": eLearningEducation,
  "energy-utilities": energyUtilities,
  finance,
  "food-beverage": foodbeverage,
  gaming,
  "hospitality-travel": hospitalitytravel,
  hcm,
  insurance,
  legal,
  lending,
  "media-entertainment": mediaentertainment,
  "meetings-events": meetingsEvents,
  mortgage,
  nonprofit,
  "oil-gas": oilGas,
  payments,
  "political-campaigns": politicalcampaigns,
  retail,
  "real-estate": realEstate,
  sports,
  "supply-chain": supplyChain,
  telecommunications,
  transportation,
};

export type { IndustryConfig };
