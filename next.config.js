/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add remote patterns here if images are hosted externally later.
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
