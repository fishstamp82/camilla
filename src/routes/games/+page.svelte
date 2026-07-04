<script lang="ts">
</script>

<div class="games-header">
	<h1>🎮 Game Zone</h1>
	<p>Pick a game and play!</p>
</div>

<div class="games-grid">
	<a href="/games/dino/" class="game-card">
		<div class="game-preview dino-preview">
			<span class="big-emoji">🦖</span>
		</div>
		<div class="game-info">
			<h2>Dino Jumper</h2>
			<p>Jump over cacti like the classic Chrome dino game!</p>
			<span class="play-badge">▶ Play</span>
		</div>
	</a>

	<!-- Placeholder for future games -->
	<div class="game-card placeholder">
		<div class="game-preview">
			<span class="big-emoji">🔧</span>
		</div>
		<div class="game-info">
			<h2>More coming!</h2>
			<p>I'm working on new games...</p>
		</div>
	</div>
</div>

<style>
	.games-header {
		text-align: center;
		padding: 1rem 0 2rem;
	}

	.games-header h1 {
		font-size: 2.2rem;
		color: #3d405b;
		margin: 0;
	}

	.games-header p {
		color: #666;
		margin: 0.5rem 0 0;
	}

	.games-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.5rem;
	}

	.game-card {
		background: white;
		border-radius: 16px;
		overflow: hidden;
		text-decoration: none;
		color: #333;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
		transition: all 0.25s ease;
	}

	.game-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
	}

	.game-preview {
		height: 160px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
	}

	.dino-preview {
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
	}

	.big-emoji {
		font-size: 3.5rem;
	}

	.game-info {
		padding: 1.2rem;
	}

	.game-info h2 {
		margin: 0 0 0.3rem;
		font-size: 1.2rem;
		color: #e07a5f;
	}

	.game-info p {
		margin: 0 0 0.8rem;
		font-size: 0.9rem;
		color: #777;
	}

	.play-badge {
		display: inline-block;
		background: #e07a5f;
		color: white;
		padding: 0.35rem 1rem;
		border-radius: 20px;
		font-size: 0.85rem;
		font-weight: 600;
	}

	.placeholder {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
