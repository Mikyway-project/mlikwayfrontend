import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import viteImagemin from "vite-plugin-imagemin";
import compression from "vite-plugin-compression";
import { fileURLToPath } from "url";

export default defineConfig(() => {
  return {
    server: {
      port: 9000,
      host: "localhost",
    },
    plugins: [
      react(),
      svgr(),
      viteImagemin({
        /* 이미지 최적화 설정 */
      }),
      compression({ algorithm: "gzip", ext: ".gz", threshold: 1024 }),
      compression({ algorithm: "brotliCompress", ext: ".br", threshold: 1024 }),
      // 🔥 purgecss 제거!
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
