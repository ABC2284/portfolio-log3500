import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration Vite : plugin React uniquement, aucun besoin de proxy en dev
// car le formulaire de contact utilise une URL relative ('/api/contact'),
// que Express (en prod) ou un futur proxy (en dev) pourront intercepter.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
