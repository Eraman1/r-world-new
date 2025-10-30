"use client";

import { ServiceConfig } from "@/types/services";
import { customSoftwareDevelopment } from "./custom-software-development";

export const servicesData: Record<string, ServiceConfig> = {
  "custom-software-development": customSoftwareDevelopment,
};

export type { ServiceConfig };
