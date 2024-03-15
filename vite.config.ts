import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import million from "million/compiler";

export default defineConfig({
  plugins: [million.vite({ auto: true }), react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})