import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-toastify': 'react-toastify/dist/index.js',
    },
  },
})
export default {
  base: 'https://workshala-eight.vercel.app'
};
