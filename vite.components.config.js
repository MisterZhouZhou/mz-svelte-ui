import { defineConfig } from 'vite'

import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [svelte({
    include: ['src/packages/**/*.svelte', 'node_modules/**/*.svelte'],
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'mz',
      formats: ['iife']
    },
  },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default defineConfig(config);
