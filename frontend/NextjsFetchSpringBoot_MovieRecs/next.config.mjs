/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        // pathname: "/images/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
