import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      workbox: {
        globPatterns: ["**/*"],
      },
      includeAssets: [
        "**/*",
      ],
      manifest: {
        "theme_color": "#ff0000",
        "background_color": "#ff0000",
        "display": "standalone",
        "scope": "/Lab01_VueJs/",
        "start_url": "/Lab01_VueJs/",
        "name": "Boutique Apple",
        "short_name": "Apple Store",
        "description": "Apple store available without network",
        "icons": [
          {
            "src": "/Lab01_VueJs/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/Lab01_VueJs/icons/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "/Lab01_VueJs/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/Lab01_VueJs/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
      }
    }),
  ],
  base: '/Lab01_VueJs/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})