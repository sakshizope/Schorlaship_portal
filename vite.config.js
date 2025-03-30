import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://b232-2401-4900-529b-b579-c10d-241f-bf3d-b6a6.ngrok-free.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});