const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubActions ? 'export' : undefined,
  basePath: isGithubActions ? '/client-portfolio' : '',
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
};

export default nextConfig;
