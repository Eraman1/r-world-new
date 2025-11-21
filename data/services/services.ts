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
import { blockchainDevelopment } from "./blockchainDevelopment";
import { iotSolutions } from "./iotSolutions";
import { cybersecurity } from "./cybersecurity";
import { digitalTransformation } from "./digitalTransformation";
import { softwareModernization } from "./softwareModernization";
import { systemIntegration } from "./systemIntegration";
import { technicalConsulting } from "./technicalConsulting";

export const servicesData: Record<string, ServiceConfig> = {
  "custom-software-development": customSoftwareDevelopment,
  "mobile-app-development": mobileappdevelopment,
  "web-development": webdevelopment,
  "software-testing-qa": softwareTestingQA,
  "ui-ux-design": uiUxDesign,
  "devops-services": devopsServices,
  "cloud-migration": cloudMigration,
  "api-development": apiDevelopment,
  "database-design": databaseDesignManagement,
  "enterprise-software": enterpriseSoftwareSolution,
  "ecommerce-development": ecommerceDevelopment,
  "crm-development": crmDevelopment,
  "erp-implementation": erpImplementation,
  "business-intelligence": businessIntelligence,
  "data-analytics": dataAnalytics,
  "machine-learning": machinelearning,
  "artificial-intelligence": artificialIntelligence,
  "blockchain-development": blockchainDevelopment,
  "iot-solutions": iotSolutions,
  cybersecurity: cybersecurity,
  "digital-transformation": digitalTransformation,
  "software-modernization": softwareModernization,
  "system-integration": systemIntegration,
  "technical-consulting": technicalConsulting,
};

export type { ServiceConfig };
