import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss(),
    Inspect(),
  ],
  server: {
    host: true,
  },
})
