import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import datiVetro from './scripts/vite-plugin-dati-vetro.mjs';

// In build (GitHub Pages) il sito è pubblicato sotto /catalogo/;
// in sviluppo resta sulla radice.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Catalogo/' : '/',
  plugins: [react(), datiVetro({ radice: __dirname })],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        vetro: resolve(__dirname, 'vetro.html'),
      },
    },
  },
}));
