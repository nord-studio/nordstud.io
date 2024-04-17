/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/projects",
                destination:
                    "https://github.com/orgs/nord-studio/repositories?type=source",
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
