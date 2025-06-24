import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import viteImagemin from "vite-plugin-imagemin";
import compression from "vite-plugin-compression";
import purgecss from "vite-plugin-purgecss";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    server: {
      port: 9000,
      host: "localhost",
    },
    plugins: [
      react(),
      svgr(),
      viteImagemin({
        gifsicle: { optimizationLevel: 7, interlaced: false },
        optipng: { optimizationLevel: 7 },
        mozjpeg: false,
        pngquant: { quality: [0.65, 0.8], speed: 4 },
        webp: { quality: 75 },
        svgo: {
          plugins: [
            { name: "removeViewBox", active: false },
            { name: "removeEmptyAttrs", active: false },
          ],
        },
      }),
      compression({ algorithm: "gzip", ext: ".gz", threshold: 1024 }),
      compression({ algorithm: "brotliCompress", ext: ".br", threshold: 1024 }),
      ...(isProd
        ? [
            purgecss({
              content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
              safelist: [
                /^sc-/,
                /^bg-/,
                /^text-/,
                /^hover:/,
                "hidden",
                "block",
              ],
            }),
          ]
        : []),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
