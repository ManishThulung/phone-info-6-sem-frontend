/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "www.zdnet.com",
  //       port: "",
  //       pathname: "",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "res.cloudinary.com",
  //       port: "",
  //       pathname: "",
  //     },
  //   ],
  // },
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "www.zdnet.com",
    //     port: "",
    //     pathname: "",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "res.cloudinary.com",
    //     port: "",
    //     pathname: "",
    //   },
    // ],
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
