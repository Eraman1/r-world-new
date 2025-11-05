"use client";

import { OnDemandDevelopersConfig } from "@/types/onDemandDevelopers";
import { dotNetDevelopers } from "./dotNetDevelopers";
import { java } from "./JavaDevelopers";
import { python } from "./python";
import { php } from "./php";
import { react } from "./react";
import { angular } from "./angular";
import { vue } from "./vue";
import { node } from "./node";
import { ios } from "./ios";
import { android } from "./android";
import { flutter } from "./flutter";
import { reactnative } from "./reactnative";
import { unity } from "./unity";
import { salesforce } from "./salesforce";
import { sharepoint } from "./sharepoint";
import { wordpress } from "./wordpress";
import { magento } from "./magento";
// import { OnDemandDevelopers } from "./on-demand-developers";




export const onDemandDevelopersData: Record<string, OnDemandDevelopersConfig> = {
dotNetDevelopers,
java,
python,
php,
react,
angular,
vue,
node,
ios,
android,
flutter,
reactnative,
unity,
salesforce,
sharepoint,
wordpress,
magento,
};

export type { OnDemandDevelopersConfig };

