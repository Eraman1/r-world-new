import React from "react";
import {
  Map,
  Box,
  Sliders,
  Monitor,
  Droplets,
  TestTube,
  Settings,
} from "lucide-react";

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: { text: string; url: string };
}

interface ManagementPropsTwo {
  title?: string;
  subtitle?: string;
  subtitleLink?: { text: string; url: string };
  laptopImage?: string;
  mobileImage?: string;
  topFeatures?: Feature[];
  bottomFeatures?: Feature[];
  ctaText?: string;
  onCtaClick?: () => void;
}

const defaultTopFeatures: Feature[] = [
  {
    id: "mapping",
    icon: <Map className="w-16 h-16 text-cyan-500" />,
    title: "Land Mapping & GPS Software",
    description:
      "We program GIS & GPS technologies and integrate them with your current systems for site-specific data mapping optimization and accurate yield forecasting.",
    link: { text: "GIS & GPS technologies", url: "#" },
  },
  {
    id: "3d-design",
    icon: <Box className="w-16 h-16 text-cyan-500" />,
    title: "3D Field Design Applications",
    description:
      "We engineer custom 3D field design apps to seamlessly integrate with topography mapping software for added visualization and management of all land areas.",
  },
  {
    id: "sensors",
    icon: <Sliders className="w-16 h-16 text-cyan-500" />,
    title: "Smart Controllers & Sensors",
    description:
      "We implement smart controllers & sensors that screen the yields for changes in temperature, light, humidity, weather patterns, and other environmental factors.",
  },
];

const defaultBottomFeatures: Feature[] = [
  {
    id: "autonomous",
    icon: <Monitor className="w-16 h-16 text-cyan-500" />,
    title: "Autonomous Farming Management Systems",
    description:
      "We incorporate prescriptive technology, harvesting & crop management modules, and decision support systems (DSS) to maximize operational performance for autonomous farming.",
  },
  {
    id: "irrigation",
    icon: <Droplets className="w-16 h-16 text-cyan-500" />,
    title: "Irrigation System Management",
    description:
      "We design our irrigation software with computer-aided designs (CAD), digital terrain modeling (DTM), hydraulic systems, and irrigation patterns.",
    link: { text: "irrigation software", url: "#" },
  },
  {
    id: "agronomy",
    icon: <TestTube className="w-16 h-16 text-cyan-500" />,
    title: "Agronomy Software Solutions",
    description:
      "We develop agronomy software solutions covering everything from soil sampling and collection to GIS mapping, subsurface drainage, and soil fertility automation.",
  },
  {
    id: "operations",
    icon: <Settings className="w-16 h-16 text-cyan-500" />,
    title: "Operations Management",
    description:
      "We integrate unmanned aerial vehicle (UAV) software with third-party APIs for irrigation management to streamline consistent operational workflows.",
  },
];

const ManagementSolutionsTwo: React.FC<ManagementPropsTwo> = ({
  title = "Land Management Software Solutions",
  subtitle = "Chetu's land management software developers have vast agricultural industry-experience and first-hand knowledge of how to develop world-class solutions for agricultural operations.",
  subtitleLink = { text: "land management software", url: "#" },
  laptopImage,
  mobileImage,
  topFeatures = defaultTopFeatures,
  bottomFeatures = defaultBottomFeatures,
  ctaText = "GET LAND MGMT SOFTWARE DEVELOPERS",
  onCtaClick,
}) => {
  const renderDescription = (
    description: string,
    link?: { text: string; url: string }
  ) => {
    if (!link) return description;

    const parts = description.split(link.text);
    return (
      <>
        {parts[0]}
        <a
          href={link.url}
          className="text-cyan-600 hover:text-cyan-700 font-medium"
        >
          {link.text}
        </a>
        {parts[1]}
      </>
    );
  };

  const renderSubtitle = () => {
    const parts = subtitle.split(subtitleLink.text);
    return (
      <p className="text-base sm:text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed">
        {parts[0]}
        <a
          href={subtitleLink.url}
          className="text-cyan-600 hover:text-cyan-700 font-medium"
        >
          {subtitleLink.text}
        </a>
        {parts[1]}
      </p>
    );
  };

  return (
    <div className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          {renderSubtitle()}
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Top Features */}
          <div className="space-y-8">
            {topFeatures.map((feature) => (
              <div key={feature.id} className="flex gap-6 group">
                <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {renderDescription(feature.description, feature.link)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Laptop Mockup */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <div className="bg-gray-900 rounded-t-2xl p-3 shadow-2xl">
                <div className="bg-white rounded-lg overflow-hidden aspect-video">
                  {laptopImage ? (
                    <img
                      src={laptopImage}
                      alt="Land management dashboard"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
                      <div className="grid grid-cols-3 gap-2 w-full h-full">
                        <div className="bg-white rounded shadow p-2 flex flex-col gap-1">
                          <div className="h-8 bg-gray-200 rounded"></div>
                          <div className="flex-1 bg-green-400 rounded"></div>
                        </div>
                        <div className="col-span-2 grid grid-rows-2 gap-2">
                          <div
                            className="bg-white rounded shadow"
                            style={{
                              backgroundImage:
                                "linear-gradient(to bottom, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1))",
                            }}
                          ></div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-white rounded shadow"></div>
                            <div className="bg-white rounded shadow"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-gray-800 h-4 rounded-b-2xl shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Bottom Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Laptop Mockup */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <div className="bg-gray-900 rounded-t-2xl p-3 shadow-2xl">
                <div className="bg-white rounded-lg overflow-hidden aspect-video">
                  {laptopImage ? (
                    <img
                      src={laptopImage}
                      alt="Land management dashboard"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
                      <div className="grid grid-cols-3 gap-2 w-full h-full">
                        <div className="bg-white rounded shadow p-2 flex flex-col gap-1">
                          <div className="h-8 bg-gray-200 rounded"></div>
                          <div className="flex-1 bg-green-400 rounded"></div>
                        </div>
                        <div className="col-span-2 grid grid-rows-2 gap-2">
                          <div
                            className="bg-white rounded shadow"
                            style={{
                              backgroundImage:
                                "linear-gradient(to bottom, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1))",
                            }}
                          ></div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-white rounded shadow"></div>
                            <div className="bg-white rounded shadow"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-gray-800 h-4 rounded-b-2xl shadow-lg"></div>
            </div>
          </div>

          {/* Top Features */}
          <div className="space-y-8">
            {topFeatures.map((feature) => (
              <div key={feature.id} className="flex gap-6 group">
                <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {renderDescription(feature.description, feature.link)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button
            onClick={onCtaClick}
            className="inline-block px-12 py-4 border-2 border-orange-500 text-orange-500 font-bold text-lg rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagementSolutionsTwo;
