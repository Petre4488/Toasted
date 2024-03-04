import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      // This section in your Vite configuration specifically focuses on how the server should handle MIME types.
      'text/javascript': 'application/javascript' // Ensure JavaScript files have the correct MIME type
      // You're explicitly telling Vite: "If you encounter a
      // file that is supposed to be plain text JavaScript, please assign it the MIME type 'application/javascript'".
    }
  }
})
