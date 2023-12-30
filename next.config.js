module.exports = {
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi.myvfix.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}