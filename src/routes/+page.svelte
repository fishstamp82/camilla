<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="hero">
	<h1>🌟 Welcome to Camilla's World!</h1>
	<p class="subtitle">This is my super cool website where you can play games!</p>

	<div class="card-grid">
		<a href="{base}/games/" class="card">
			<span class="card-icon">🎮</span>
			<h2>Play Games</h2>
			<p>Check out all the games I made!</p>
		</a>

		<a href="{base}/games/" class="card">
			<span class="card-icon">✨</span>
			<h2>New Stuff</h2>
			<p>I'm always adding new things</p>
		</a>

		<a href="{base}/games/" class="card coming-soon">
			<span class="card-icon">🚀</span>
			<h2>Coming Soon</h2>
			<p>More games on the way!</p>
		</a>
	</div>
</div>

<div class="fun-section">
	<h2>✨ What's this all about?</h2>
	<p>I'm learning to make websites and games! This is my little corner of the internet where I can share what I build.</p>
	<p>Every game here is made with love (and a little bit of code 💻)</p>
</div>

<style>
	.hero {
		text-align: center;
		padding: 2rem 0;
	}

	.hero h1 {
		font-size: 2.5rem;
		color: #3d405b;
		margin: 0 0 0.5rem;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin: 0 0 2rem;
	}

	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.card {
		background: white;
		border-radius: 16px;
		padding: 1.8rem 1.5rem;
		text-decoration: none;
		color: #333;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
		transition: all 0.25s ease;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.card:hover {
		transform: translateY(-6px);
		box-shadow: 0 8px 28px rgba(0, 0, 0, 0.15);
	}

	.card-icon {
		font-size: 2.5rem;
		margin-bottom: 0.8rem;
	}

	.card h2 {
		margin: 0 0 0.4rem;
		font-size: 1.2rem;
		color: #e07a5f;
	}

	.card p {
		margin: 0;
		font-size: 0.9rem;
		color: #888;
	}

	.coming-soon {
		opacity: 0.7;
	}

	.fun-section {
		background: rgba(255, 255, 255, 0.7);
		border-radius: 16px;
		padding: 2rem;
		margin: 2rem 0;
		text-align: center;
	}

	.fun-section h2 {
		color: #3d405b;
		margin: 0 0 1rem;
	}

	.fun-section p {
		color: #555;
		line-height: 1.6;
		max-width: 600px;
		margin: 0 auto 0.5rem;
	}
</style>
