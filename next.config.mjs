/** @type {import('next').NextConfig} */
const nextConfig = {
        env: {
            STORYBLOK_ACCESS_TOKEN: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN


        },
    }

export default nextConfig;
