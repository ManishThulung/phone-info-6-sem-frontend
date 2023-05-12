/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.zdnet.com",
        port: "",
        pathname: "",
      },
    ],
  },
};

module.exports = nextConfig;
