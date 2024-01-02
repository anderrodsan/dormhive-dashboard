/** @type {import('next').NextConfig} */
const nextConfig = {}

//module.exports = nextConfig

// This is just a test for images
module.exports = {
    images: {
        domains: ['i.pinimg.com'],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
}


