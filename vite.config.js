import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './',
  server: { port: 4173, host: true },
  preview: { port: 4173, host: true },
  build: {
    // 单文件版：所有 JS/CSS 内联进 dist/index.html，可 file:// 双击直接打开
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
  },
})
