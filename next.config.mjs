/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'upload.wikimedia.org' },
            { hostname: 'tricky-photoshop.com' },
            { hostname: 'images.pexels.com' },
        ],
    },
};

export default nextConfig;
