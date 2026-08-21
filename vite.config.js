import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

// Set VITE_BASE_PATH=/your-repo/ when deploying to a GitHub Pages project site.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        privacy: resolve(rootDir, 'privacy/index.html'),
      },
    },
  },
})
