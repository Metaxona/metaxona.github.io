import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html',
			precompress: false,
            strict: true
		}),
		paths: {
			base: ""
		},
		alias: {
			"@/*": "./"
		}
	},
	prerender: {
		crawl: true,
		enabled: true,
	},
	preprocess: [vitePreprocess()]
};

export default config;
