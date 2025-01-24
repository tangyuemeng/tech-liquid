import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/tech-liquid/',
  plugins: [vue()],
  build: {
    outDir: 'dist', // 输出目录（保持与部署脚本一致）
  },
})
