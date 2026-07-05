<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { launchDinoGame } from '$lib/games/dinogame';

	let gameContainer: HTMLDivElement;
	let gameInstance: ReturnType<typeof launchDinoGame> | null = null;

	onMount(() => {
		// Wait for the container to be in the DOM, then launch the game
		if (gameContainer) {
			gameInstance = launchDinoGame(gameContainer);
		}

		return () => {
			// Clean up when navigating away
			gameInstance?.destroy();
		};
	});
</script>

<div class="game-page">
	<div class="game-header">
		<a href="{base}/games/" class="back-link">← Tillbaka till spel</a>
		<h1>🦖 Dino Jumper</h1>
		<p>Tryck Space, Uppil, eller klicka för att hoppa över kaktusarna!</p>
	</div>

	<div class="game-wrapper">
		<div bind:this={gameContainer} class="kaplay-container"></div>
	</div>
</div>

<style>
	.game-page {
		text-align: center;
	}

	.game-header {
		margin-bottom: 1.5rem;
	}

	.game-header h1 {
		margin: 0.3rem 0;
		color: #3d405b;
	}

	.game-header p {
		margin: 0;
		color: #777;
		font-size: 0.95rem;
	}

	.back-link {
		display: inline-block;
		color: #e07a5f;
		text-decoration: none;
		font-weight: 500;
		font-size: 0.9rem;
	}

	.back-link:hover {
		text-decoration: underline;
	}

	.game-wrapper {
		display: flex;
		justify-content: center;
	}

	.kaplay-container {
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
		max-width: 100%;
	}

	.kaplay-container :global(canvas) {
		display: block;
		max-width: 100%;
	}
</style>
