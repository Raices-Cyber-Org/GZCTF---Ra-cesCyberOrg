import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import eslint from 'vite-plugin-eslint'
import Pages from 'vite-plugin-pages'
import progress from 'vite-plugin-progress'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  const TARGET = env.VITE_BACKEND_URL ?? 'http://localhost:5000'

  return {
    server: {
      port: 3000,
      proxy: {
        '/api': TARGET,
        '/swagger': TARGET,
        '/assets': TARGET,
        '/hub': { target: TARGET.replace('http', 'ws'), ws: true },
      },
    },
    build: {
      outDir: 'build',
      assetsDir: 'static',
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          chunkFileNames: 'static/[hash].js',
          assetFileNames: 'static/[hash].[ext]',
          entryFileNames: 'static/[name].js',
          compact: true,
        },
      },
    },
    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
    plugins: [
      react(),
      progress(),
      eslint(),
      Pages({
        dirs: [{ dir: 'src/pages', baseRoute: '' }],
      }),
    ],
  };
})