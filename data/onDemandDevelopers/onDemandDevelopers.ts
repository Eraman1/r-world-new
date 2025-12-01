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
import { shopify } from "./shopify";
import { aws } from "./AWS";
import { azure } from "./azure";
import { devops } from "./DevOps";
import { qaEngineer } from "./Qa";
import { uiuxDesigners } from "./ui-ux";
import { dataScience } from "./dataScience";
import { machineLearning } from "./machineLearning";
import { blockchain } from "./blockchain";
import { game } from "./game";
import { fullstack } from "./fullstack";
// import { OnDemandDevelopers } from "./on-demand-developers";

export const onDemandDevelopersData: Record<string, OnDemandDevelopersConfig> =
  {
    dotnet: dotNetDevelopers,
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
    "react-native": reactnative,
    unity,
    salesforce,
    sharepoint,
    wordpress,
    magento,
    shopify,
    aws,
    azure,
    devops,
    qa: qaEngineer,
    "ui-ux": uiuxDesigners,
    "data-scientists": dataScience,
    "ml-engineers": machineLearning,
    blockchain,
    game,
    "full-stack": fullstack,
  };

export type { OnDemandDevelopersConfig };
