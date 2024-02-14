/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ybsgxbwroouqabsywdht.supabase.co",
        port: "",
        pathname: "/*/**"
      }
    ]
  }
};

export default nextConfig;
