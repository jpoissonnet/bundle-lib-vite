import { defineConfig } from "vite";
import linaria from "@wyw-in-js/vite";
import react from "@vitejs/plugin-react";
import { glob } from "glob";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: glob
          .sync("packages/tornado/**/*/index.js")
          .map((barrel) => resolve(__dirname, barrel)),
        formats: ["es"],
      },
      rollupOptions: {
        external: [
          "react",
          "react/jsx-runtime",
          "@linaria/react",
          "styled-components",
        ],
        input: Object.fromEntries(
          glob
            .sync("packages/**/*/index.js")
            .map((file) => [
              relative(
                "packages",
                file.slice(0, file.length - extname(file).length),
              ),
              fileURLToPath(new URL(file, import.meta.url)),
            ]),
        ),
        output: {
          assetFileNames: "[name][extname]",
          entryFileNames: "[name].js",
        },
      },
    },
    plugins: [react(), linaria(), libInjectCss()],
  };
});
