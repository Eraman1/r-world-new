"use client";

import { ServiceConfig } from "@/types/services";
import { animationGraphicDesign } from "./animation-graphic-design";
import { autodesk } from "./autodesk";
import { aws } from "./AWS";
import { artificialintelligence } from "./artificial-intelligence";
// import { googlecloude } from "./Google-Cloude";
import { ibm } from "./IBM";
import { Microsoft } from "./Microsoft";
import { NetSuit } from "./NetSuit";
import { Oracle } from "./Oracle";
import { Salesforce } from "./Salesforce";
import { SAP } from "./SAP";
import { UKG } from "./UKG";
import { UiPath } from "./UiPath";
// import { assetTracking } from "./Asset-Tracking";
// import { arvr } from "./arvr";
import { Biometrics } from "./Biometrics";
import { blockchain } from "./Blockchain";
import { businessIntelligence } from "./businessIntelligence";
import { cloud } from "./cloud";

export const servicesData: Record<string, ServiceConfig> = {
  "custom-software-development": animationGraphicDesign,
  autodesk,
  aws,
  artificialintelligence,
  // googlecloude,
  ibm,
  Microsoft,
  NetSuit,
  Oracle,
  Salesforce,
  SAP,
  UKG,
  UiPath,
  //  assetTracking,
  // arvr,
  Biometrics,
  blockchain,
  businessIntelligence,
  cloud,
};

export type { ServiceConfig };
