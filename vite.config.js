import { defineConfig } from 'vite'
import {fileURLToPath} from "url";
import path from "path";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
    },
  },
  plugins: [vue()],
  configureWebpack: {
    resolve: {
      alias: {
        vue: path.resolve('./node_modules/vue'),
      }
    }
  }
})
