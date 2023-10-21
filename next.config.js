/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "img.clerk.com",
      "picsum.photos",
      "avatars.githubusercontent.com",
      "cloudflare-ipfs.com",
      "loremflickr.com",
    ],
  },
};

module.exports = nextConfig;
