/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/client-portfolio',
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
};

export default nextConfig;
