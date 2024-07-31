import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "http://localhost:5173/",
  server: {
    port: 5173,
    cors: true,
    origin: "http://localhost:5173",
  },
  build: {
    lib: {
      entry: 'src/main.tsx',
      formats: ['umd'],
    },
  },
});
