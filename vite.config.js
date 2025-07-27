import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/',
   server:{
    port:3000,
    proxy: {
      '/api': {
        target: 'https://foodapp-backend-production-d265.up.railway.app',
        changeOrigin: true,
      }
    }
   }
})
