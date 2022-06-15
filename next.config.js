/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: { webpack5: true },
  env: {
    NEXT_MORALIS_SERVER: process.env.NEXT_MORALIS_SERVER,
    NEXT_PUBLIC_MORALIS_APP_ID: process.env.NEXT_PUBLIC_MORALIS_APP_ID,
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "openseauserdata.com",
      "brand.assets.adidas.com",
      "media0.giphy.com",
      "avatars.dicebear.com",
      "media1.giphy.com",
      "media3.giphy.com",
      "media2.giphy.com",
      "media4.giphy.com",
    ],
  },
};

module.exports = nextConfig;
