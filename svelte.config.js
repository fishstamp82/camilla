import adapter from '@sveltejs/adapter-static';

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
		// Prepend paths when deploying to a subdirectory (like GitHub Pages project site)
		// For username.github.io/camilla/ uncomment below and set to '/camilla/'
		// paths: {
		// 	base: '/camilla'
		// }
	}
};

export default config;
