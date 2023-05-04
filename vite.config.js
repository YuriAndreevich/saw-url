import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    watch: {
      usePolling: true
    }
  },
  plugins: [react({
    exclude: /\.stories\.(t|j)sx?$/,
    include: '**/*.tsx',
  }),
  ],

  base: '/',
  resolve: {
    alias: {
      components: '/src/components',
      hooks: '/src/hooks',
      assets: '/src/assets',
      store: '/src/store',
    },
  },
  define: {
    'process.env': process.env
  }
})

