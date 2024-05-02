/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: 'upload.wikimedia.org' }, { hostname: 'tricky-photoshop.com' }],
    },
};

export default nextConfig;
