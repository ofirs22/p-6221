
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { componentTagger } from 'lovable-tagger';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    process.env.NODE_ENV === 'development' && componentTagger(),
  ].filter(Boolean),
  server: {
    allowedHosts: ["f41491ab-9b0f-49b3-835f-87e6cb01de35.lovableproject.com"],
    host: "::",
    port: 8080,
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
