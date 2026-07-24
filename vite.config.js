import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In build (GitHub Pages) il sito è pubblicato sotto /catalogo/;
// in sviluppo resta sulla radice.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Catalogo/' : '/',
  plugins: [react()],
}));
