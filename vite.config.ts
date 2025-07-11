import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import devServer from '@hono/vite-dev-server'
import { getPlatformProxy } from 'wrangler'

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [
        vue(),
        vueDevTools(),
        tailwindcss()
      ],
      server: {
        proxy: {
          '/api': {
            target: 'http://localhost:3001',
            changeOrigin: true,
            rewrite: (path: string) => path.replace(/^\/api/, '/api'),
          }
        },
      },
    }
  } else {
    const isDev = process.env.NODE_ENV === 'development';
    let devServerPlugin;
    if (isDev) {
      const { env, dispose } = await getPlatformProxy();
      devServerPlugin = devServer({
        entry: './src/api/index.ts',
        adapter: {
          env,
          onServerClose: dispose
        },
      });
    }

    return {
      plugins: [
        devServerPlugin,
      ],
      server: {
        port: 3001,
      },
    }
  }
});
