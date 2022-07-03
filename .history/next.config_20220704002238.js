/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
module.exports = withPWA({
  pwa: {
    dest: "SW",
    register: true,
    skipWaiting: true,
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
     "chtstudio.com"
   ]
  }
});

