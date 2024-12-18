/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
    experimental: {
      optimizePackageImports: ['@supabase/supabase-js'],
    },
  };
