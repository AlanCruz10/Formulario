import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: true,
  base:'/Formulario/',
  plugins: [react()],
})
