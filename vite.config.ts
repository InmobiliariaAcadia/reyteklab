import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // Definimos como externas las librerías que el navegador resolverá vía importmap.
      // Esto previene que Vite intente instalarlas/empaquetarlas localmente,
      // resolviendo el conflicto de versiones entre React 18 y 19.
      external: [
        'react',
        'react-dom',
        'three',
        '@react-three/fiber',
        '@react-three/drei',
        '@google/genai'
      ],
      output: {
        // Mantenemos el formato ESM para compatibilidad nativa con el navegador.
        format: 'esm',
        paths: {
          'react': 'https://esm.sh/react@18.3.1',
          'react-dom': 'https://esm.sh/react-dom@18.3.1',
          'three': 'https://esm.sh/three@0.169.0',
          '@react-three/fiber': 'https://esm.sh/@react-three/fiber@8.17.10',
          '@react-three/drei': 'https://esm.sh/@react-three/drei@9.114.0',
          '@google/genai': 'https://esm.sh/@google/genai@0.21.0'
        }
      }
    }
  }
});