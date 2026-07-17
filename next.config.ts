import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [{ type: "host", value: "fztveyisbozkurt.com" }],
                destination: "https://www.fztveyisbozkurt.com/:path*",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;