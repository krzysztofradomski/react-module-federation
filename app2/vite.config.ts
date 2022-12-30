import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import typescript from "@rollup/plugin-typescript";
import { typescriptPaths } from "rollup-plugin-typescript-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    typescriptPaths({
      preserveExtensions: true,
    }),
    typescript({
      sourceMap: false,
      declaration: true,
      outDir: "dist/types",
    }),
    react(),
    federation({
      name: "app2",
      filename: "app2.js",
      exposes: {
        "./App": "./src/App.tsx",
        "./Button": "./src/Button.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
