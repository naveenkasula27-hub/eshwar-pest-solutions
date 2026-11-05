import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Standalone single-file build — everything (JS, CSS, images) inlined into
// one index.html so it can be opened directly by double-clicking, with no
// dev server and no "npm run dev" required. Used only for quick previews;
// the real production build uses vite.config.js.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), viteSingleFile()],
  build: {
    outDir: "preview-build",
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
    rollupOptions: {
      input: "index.preview.html",
    },
  },
})
