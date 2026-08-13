import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'virus-icon.svg'],
      manifest: {
        name: 'Chandipura Virus Research',
        short_name: 'CHPV',
        description: 'Comprehensive scientific overview of Chandipura Virus',
        theme_color: '#1a1d2e',
        background_color: '#1a1d2e',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.jpg',
            sizes: '192x192',
            type: 'image/jpeg',
            purpose: 'any maskable'
          },
          {
            src: 'pwa-512x512.jpg',
            sizes: '512x512',
            type: 'image/jpeg',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
