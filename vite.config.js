import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/portfolio/', // Замените 'portfolio' на имя вашего репозитория на GitHub
	plugins: [react()],
})
