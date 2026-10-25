import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isProd = process.env.NODE_ENV === "production";
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : isProd
      ? "/KaamKaagaz"
      : "";

/** @type {import("next").NextConfig} */
const nextConfig = {
  trailingSlash: true,
  outputFileTracingRoot: __dirname,
  ...(basePath ? { basePath } : {}),
  ...(isProd ? { output: "export" } : {}),
  ...(!isProd
    ? {
        async rewrites() {
          return [
            {
              source: "/KaamKaagaz",
              destination: "/",
            },
            {
              source: "/KaamKaagaz/:path*",
              destination: "/:path*",
            },
          ];
        },
      }
    : {}),
};

export default nextConfig;

