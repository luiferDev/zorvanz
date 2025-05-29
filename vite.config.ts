import { defineConfig } from 'vite'
import { reactRouter } from "@react-router/dev/vite"
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), reactRouter()],
})

