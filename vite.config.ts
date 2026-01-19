import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const apiBaseUrl = mode === "development" ? "/api/v1" : "https://app.deshare.finance/api/v1"
  return {
    plugins: [react()],
    define: {
      "import.meta.env.VITE_API_BASE_URL": JSON.stringify(apiBaseUrl),
    },
    css: {
      postcss: './postcss.config.js',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 5173,
      strictPort: false,
      open: true,
      proxy: {
        "/api": {
          target: "https://app.deshare.finance",
          changeOrigin: true,
        },
      },
    },
  }
})
