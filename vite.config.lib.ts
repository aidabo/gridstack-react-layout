import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    dts({rollupTypes: true, tsconfigPath: "tsconfig.lib.json"}),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'GridStackPage',
      fileName: (format) => `gridstack-page.${format}.js`,
      formats: ['es', 'umd']
    },
    outDir: path.resolve(__dirname, 'dist/lib'),
    rollupOptions: {
      external: ['react', 'react-dom', 'gridstack'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          gridstack: 'GridStack'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});