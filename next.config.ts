import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "cdn.pixabay.com",
      "images.unsplash.com",
      "res.cloudinary.com",
    ],
  },
};

export default nextConfig;
