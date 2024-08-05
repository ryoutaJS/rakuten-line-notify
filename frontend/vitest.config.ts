import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["app/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    exclude: ["node_modules", ".next", ".github"],
    setupFiles: ["./setup.ts"],
    root: path.resolve(__dirname, "./"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
