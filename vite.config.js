// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/CV_Website/',
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      webp: { quality: 75 },
    })
  ],
  // Add asset optimization settings
  build: {
    chunkSizeWarningLimit: 1000, // Increase the size limit warning
    assetsInlineLimit: 4096, // Assets smaller than this (in bytes) will be inlined
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          i18n: ['i18next', 'react-i18next']
        }
      }
    }
  },
  // Add server optimization for development
  server: {
    hmr: true,
    watch: {
      usePolling: false, // Set to true only if HMR doesn't work
    },
  }
})