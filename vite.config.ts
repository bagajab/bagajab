import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'portfolio' with your GitHub repository name
  // If your repo is https://github.com/bagajab/my-site, change this to '/my-site/'
  base: '/portfolio/', 
})