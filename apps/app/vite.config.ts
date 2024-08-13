import { defineConfig } from "vite";

import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import react from "@vitejs/plugin-react";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": "src",
    },
  },
});
