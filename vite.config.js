import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		outDir: 'dist', // Określa folder wyjściowy
		rollupOptions: {
			input: './index.html', // Określa plik wejściowy dla Vite
		},
	},
})
