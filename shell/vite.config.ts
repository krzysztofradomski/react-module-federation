import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import federation from "@originjs/vite-plugin-federation"
import modules from "./modules.json"
import { fileURLToPath } from "url"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      filename: "shell.js",
      remotes: modules,
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      // for TypeScript path alias import like : @/x/y/z
      src: fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
