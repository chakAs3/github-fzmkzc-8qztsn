import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {}
  },
  esbuild: {
    minify: true,
  },
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'OtComponents',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['vue','primevue','primeicons'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css')
            return 'ot-components.css';
          return assetInfo.name;
        },
        // Provide global variables to use in the UMD build
        // for externalized deps
        // globals: {
        //   vue: 'Vue'
        // }
      }
    },
  }
})
