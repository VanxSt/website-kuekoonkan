import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
        },
      },
    },
    // Target modern browsers for smaller output
    target: 'es2020',
    // Minify with esbuild (faster than terser)
    minify: 'esbuild',
  },
})
