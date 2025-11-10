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

export const servicesData: Record<string, ServiceConfig> = {
  "custom-software-development": customSoftwareDevelopment,
  mobileappdevelopment,
  webdevelopment,
  softwareTestingQA,
  uiUxDesign,
  devopsServices,
  cloudMigration,
  apiDevelopment,
};

export type { ServiceConfig };
