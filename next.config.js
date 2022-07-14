/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: 'cloudinary',
    domains: ['res-5.cloudinary.com', 'static.ghost.org'],
  }
}

module.exports = nextConfig
