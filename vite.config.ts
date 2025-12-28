import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Eliminamos rollupOptions.external para asegurar que todas las dependencias
    // se incluyan en el build final, evitando errores de "módulo no encontrado" en el navegador.
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'three-core': ['three', '@react-three/fiber', '@react-three/drei']
        }
      }
    }
  },
  server: {
    port: 3000,
    strictPort: true
  }
});