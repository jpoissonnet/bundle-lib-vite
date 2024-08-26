import { defineConfig } from "vite";
import linaria from "@wyw-in-js/vite";
import react from "@vitejs/plugin-react";
import { glob } from "glob";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig(() => ({
  build: {
    lib: {
      entry: resolve(__dirname, "packages/tornado/index.js"),
      formats: ["es"],
      name: "tornado",
      fileName: "tornadoIndex",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob
          .sync("packages/**/*.jsx", {
            ignore: ["packages/**/*.d.ts"],
          })
          .map((file) => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative(
              "packages",
              file.slice(0, file.length - extname(file).length),
            ),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [react(), linaria(), libInjectCss()],
}));
