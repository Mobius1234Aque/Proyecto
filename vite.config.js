import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  build: {
    outDir: 'builds', // Cambia 'builds' al nombre de la carpeta que prefieras
  },
});
