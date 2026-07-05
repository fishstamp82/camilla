<script lang="ts">
	import './app.css';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<title>Camilla's Game Zone</title>
	<meta name="description" content="Camilla's awesome game website — come play!">
	<meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>

<nav>
	<div class="nav-inner">
		<a href="{base}/" class="logo">🌟 Camilla's World</a>
		<div class="links">
			<a href="{base}/">🏠 Home</a>
			<a href="{base}/games/">🎮 Games</a>
		</div>
	</div>
</nav>

<main>
	{@render children()}
</main>

<footer>
	<p>Made with 💖 by Camilla</p>
</footer>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
		background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
		min-height: 100vh;
		color: #333;
	}

	:global(*) {
		box-sizing: border-box;
	}

	nav {
		background: rgba(255, 255, 255, 0.85);
		backdrop-filter: blur(8px);
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.nav-inner {
		max-width: 900px;
		margin: 0 auto;
		padding: 0.8rem 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-size: 1.3rem;
		font-weight: 700;
		text-decoration: none;
		color: #e07a5f;
	}

	.links {
		display: flex;
		gap: 1.5rem;
	}

	.links a {
		text-decoration: none;
		color: #555;
		font-weight: 500;
		padding: 0.3rem 0.6rem;
		border-radius: 8px;
		transition: all 0.2s;
	}

	.links a:hover {
		background: #e07a5f;
		color: white;
	}

	main {
		max-width: 900px;
		margin: 0 auto;
		padding: 1.5rem;
		min-height: calc(100vh - 130px);
	}

	footer {
		text-align: center;
		padding: 1.5rem;
		color: #888;
		font-size: 0.9rem;
	}

	footer p {
		margin: 0;
	}
</style>
