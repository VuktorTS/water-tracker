import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from 'vite-plugin-svgr';

export default defineConfig({
      plugins: [react(), svgr()],
      build: { sourcemap: true },
      resolve: {
        alias: {
          src: '/src',
          components: '/src/components',
          img: '/src/img',
          pages: '/src/pages',
          redux: '/src/redux',
          services: "/src/services"
        },
      },
    });