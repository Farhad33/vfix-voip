/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
module.exports = {
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      })
  
      return config
    },
  }