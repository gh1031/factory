import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/proxy': {
        target: 'http://localhost:3003',
        secure: false,
        ws: true,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/proxy/, ''),
      }
    }
  }
})
