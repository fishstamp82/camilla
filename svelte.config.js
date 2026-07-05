import adapter from '@sveltejs/adapter-static';

const base = process.env.BASE_PATH || '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Use adapter-static so the site builds to static HTML/CSS/JS
		// Perfect for GitHub Pages
		adapter: adapter({
			// Default output is 'build'
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		// BASE_PATH env var sets the path prefix for subdirectory deployments
		// e.g. BASE_PATH=/camilla for fishstamp82.github.io/camilla/
		// Locally, no BASE_PATH = served at /
		paths: {
			base
		}
	}
};

export default config;
