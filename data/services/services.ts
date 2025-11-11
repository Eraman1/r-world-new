"use client";

import { ServiceConfig } from "@/types/services";
import { customSoftwareDevelopment } from "./custom-software-development";
import { mobileappdevelopment } from "./mobile-app-development";
import { webdevelopment } from "./webdevelopment";
import { softwareTestingQA } from "./software-testing-qa";
import { uiUxDesign } from "./ui-ux-design";
import { devopsServices } from "./devops-services";
import { cloudMigration } from "./cloud-migration";
import { apiDevelopment } from "./api-development";
import { databaseDesignManagement } from "./database-design & management";
import { enterpriseSoftwareSolution } from "./enterpriseSoftwareSolution";
import { ecommerceDevelopment } from "./ecommerceDevelopment";
import { crmDevelopment } from "./crmDevelopment";
import { erpImplementation } from "./erpImplementation";
import { businessIntelligence } from "./businessIntelligence";
import { dataAnalytics } from "./dataAnalytics";
import { machinelearning } from "./machinelearning";
import { artificialIntelligence } from "./artificialIntelligence";
import { blockchain } from "../onDemandDevelopers/blockchain";
import { blockchainDevelopment } from "./blockchainDevelopment";
import { iotSolutions } from "./iotSolutions";
import { cybersecurity } from "./cybersecurity";
import { digitalTransformation } from "./digitalTransformation";
import { softwareModernization } from "./softwareModernization";
import { systemIntegration } from "./systemIntegration";
import { technicalConsulting } from "./technicalConsulting";

export const servicesData: Record<string, ServiceConfig> = {
  "custom-software-development": customSoftwareDevelopment,
  mobileappdevelopment,
  webdevelopment,
  softwareTestingQA,
  uiUxDesign,
  devopsServices,
  cloudMigration,
  apiDevelopment,
  databaseDesignManagement,
  enterpriseSoftwareSolution,
  ecommerceDevelopment,
  crmDevelopment,
  erpImplementation,
  businessIntelligence,
  dataAnalytics,
  machinelearning,
  artificialIntelligence,
  blockchainDevelopment,
  iotSolutions,
  cybersecurity,
  digitalTransformation,
  softwareModernization,
  systemIntegration,
  technicalConsulting,
};

export type { ServiceConfig };
