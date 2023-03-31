import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// 单独配置，在根目录下导出docs, sveltekit默认导出到.svelte-kit
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [svelte()],
  base: './',
  build: {
    outDir: './docs',
    emptyOutDir: true
  },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default defineConfig(config);
