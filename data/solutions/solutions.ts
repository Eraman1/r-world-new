"use client";

import { SolutionConfig } from "@/types/solutions";
import { animationGraphicDesign } from "./animation-graphic-design";
import { autodesk } from "./autodesk";
import { aws } from "./AWS";
import { artificialintelligence } from "./artificial-intelligence";
// import { assetTracking } from "./assettracking";
import { arvr } from "./AR-VR";

import { ibm } from "./IBM";
import { Microsoft } from "./Microsoft";
import { NetSuit } from "./NetSuit";
import { Oracle } from "./Oracle";
import { Salesforce } from "./Salesforce";
import { SAP } from "./SAP";
import { UKG } from "./UKG";
import { UiPath } from "./UiPath";
import { Biometrics } from "./Biometrics";
import { blockchain } from "./Blockchain";
import { businessIntelligence } from "./businessIntelligence";
import { cloud } from "./cloud";
import { cms } from "./cms";
import { crm } from "./crm";
import { database } from './Database';
import { digitalAssetManagement } from './digitalassetmanagement';
// import { digitalSignage } from './DigitalSignage';
import { documentManagement } from './documentmanagement';
import { embeddedSoftware } from './embeddedSoftware';
import { erp } from './erp';
import { facilitiesManagement } from './facilities-management';
import { fieldServiceManagement } from './fieldServiceManagement';
import { firmware } from './firmware';
import { franchiseManagement } from './franchiseManagement';
import { fraudProtection } from './fraudProtection';
import { gis } from './gis';
import { iotM2m } from './iotM2m';
import { itServiceManagement } from './itServiceManagement';
import { kiosk } from './kiosk';
import { legacy } from './legacy';
import { locationBasedService } from './locationBasedService';
import { middleware } from './middleware';
import { mobileTablet } from './mobileTablet';
import { openSource } from './openSource';
import { posPaymentProcessing } from './pos-payment-processing';
import { salesManagement } from './sales-management';
import { telephony } from './telephony';
import { ticketing } from './ticketing';
import { uiUx } from './uiux';
import { wearableTechnology } from './wearabletechnology';
import { webDevelopment } from './webdevelopment';

export const solutionsData: Record<string, SolutionConfig> = {
  "animation-graphic-design": animationGraphicDesign,
  autodesk,
  aws,
  "artificial-intelligence": artificialintelligence,
  // assetTracking,
  arvr,
  ibm,
  Microsoft,
  NetSuit,
  Oracle,
  Salesforce,
  SAP,
  UKG,
  UiPath,
  Biometrics,
  blockchain,
  "business-intelligence": businessIntelligence,
  cloud,
  cms,
  crm,
  database,
  digitalAssetManagement,
  // digitalSignage,
  documentManagement,
  embeddedSoftware,
  erp,
  facilitiesManagement,
  fieldServiceManagement,
  firmware,
  franchiseManagement,
  fraudProtection,
  gis,
  iotM2m,
  itServiceManagement,
  kiosk,
  legacy,
  locationBasedService,
  middleware,
  mobileTablet,
  openSource,
  posPaymentProcessing,
  salesManagement,
  telephony,
  ticketing,
  uiUx,
  wearableTechnology,
  webDevelopment,
};

export type { SolutionConfig };
