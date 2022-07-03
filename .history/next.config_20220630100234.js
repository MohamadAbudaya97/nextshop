/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MongoDb:"mongodb+srv://Karnosh:-11717805@cluster0..mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
