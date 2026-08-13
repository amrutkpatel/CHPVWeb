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
            src: 'virus-icon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          },
          {
            src: 'virus-icon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
