/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "static.wikia.nocookie.net",
    //     pathname: "/chainsaw-man/images/**",
    //   },
    // ],
    domains: ["static.wikia.nocookie.net"],
  },
};

const withMDX = require("@next/mdx")({
  options: {
    providerImportSource: "@mdx-js/react",
  },
});
module.exports = withMDX(nextConfig);
