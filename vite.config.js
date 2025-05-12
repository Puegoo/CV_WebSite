import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      webp: { quality: 75 },
    })
  ],
  // Pozyskaj nazwę repozytorium z package.json lub ustaw ją bezpośrednio
  // Dla GitHub Pages: /{nazwa-repozytorium}/
  base: '/CV_WebSite/',
  build: {
    outDir: 'dist',
    // Generowanie pliku 404.html, który przekieruje na index.html (dla routingu React)
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})