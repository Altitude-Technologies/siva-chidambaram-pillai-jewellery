import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // served from https://altitude-technologies.github.io/<repo>/ on GitHub Pages
  base: '/siva-chidambaram-pillai-jewellery/',
  plugins: [react()],
})
