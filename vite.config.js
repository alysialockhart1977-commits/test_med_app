import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import viteCompression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [
        react(),
        // viteCompression({ algorithm: 'gzip' }),
    ], 
    esbuild: {
        loader: 'jsx',
        include: /src\/.*\.js$/,
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
    },
  },
},
build: {
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
        output: {
            manualChunks: undefined,
        },
    },
},
css: {
    postcss: {},
  },
});



