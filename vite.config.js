import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "locomotive-scroll": "locomotive-scroll/dist/locomotive-scroll.esm.js", // Ensure the correct file path
    },
  },
});
