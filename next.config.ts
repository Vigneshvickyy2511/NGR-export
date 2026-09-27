import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Direct alias redirects to /export routes
      { source: "/red-chilli", destination: "/export/red-chilli", permanent: true },
      { source: "/mango-pulp", destination: "/export/mango-pulp", permanent: true },
      { source: "/quality-rice", destination: "/export/quality-rice", permanent: true },
      { source: "/sesame-seed", destination: "/export/sesame-seed", permanent: true },
      { source: "/sesame-seeds", destination: "/export/sesame-seed", permanent: true },
      { source: "/silage-making", destination: "/export/silage-making", permanent: true },
      { source: "/export/rice-ddgs", destination: "/#products", permanent: false },

      // Direct alias redirects to /import routes
      { source: "/metal-scrap", destination: "/import/metal-scrap", permanent: true },
      { source: "/acids", destination: "/import/acids", permanent: true },
      { source: "/cosmetic-chemical", destination: "/import/cosmetic-chemical", permanent: true },
      { source: "/import/plastic-chemical", destination: "/#products", permanent: false },
    ];
  },
};

export default nextConfig;
