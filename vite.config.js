import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/site": {
        target: "https://19h.amini95.ir",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
