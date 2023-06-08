/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
};

const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);
