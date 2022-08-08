/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    sw: 'service-worker.js',
  },
reactStrictMode: true,
    i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  env:{
    MongoDb:"mongodb+srv://Karnosh:Mohamad-11717805@cluster0.00c4z.mongodb.net/?retryWrites=true&w=majority"
  },
  images:{
   domains:[
     "chtstudio.com","ae01.alicdn.com"
   ]
  }
});

