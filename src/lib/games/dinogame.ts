import kaplay from 'kaplay';

export interface GameInstance {
	destroy: () => void;
}

/**
 * Launch the Dino Jumper game (Chrome T-Rex style) in a container.
 */
export function launchDinoGame(container: HTMLElement): GameInstance {
	const k = kaplay({
		root: container,
		width: 600,
		height: 240,
		background: [245, 245, 245] as const,
		global: false,
		debug: false,
		buttons: {
			jump: {
				keyboard: ['space', 'up'],
				mouse: 'left',
				touch: true as const
			}
		}
	});

	// Load sprites from SVG files in static/
	k.loadSprite('dino', '/dino.svg');
	k.loadSprite('cactus', '/cactus.svg');

	// --- Game state ---
	let score = 0;
	let isGameOver = false;
	let speed = 200;

	k.scene('game', () => {
		score = 0;
		isGameOver = false;
		speed = 200;
		const obstacles: ReturnType<typeof k.add>[] = [];

		// Background
		k.add([
			k.rect(k.width(), k.height()),
			k.color(245, 245, 245),
			k.pos(0, 0),
			k.fixed()
		]);

		// Ground
		k.add([
			k.rect(k.width(), 4),
			k.color(80, 80, 80),
			k.pos(0, k.height() - 24),
			k.area(),
			k.solid(),
			'ground'
		]);

		// Dino (player)
		const dino = k.add([
			k.sprite('dino'),
			k.pos(80, k.height() - 24),
			k.anchor('bot'),
			k.area({ scale: 0.7 }),
			k.body({ jumpForce: 520 }),
			k.scale(1.8),
			'player'
		]);

		// Score display
		const scoreLabel = k.add([
			k.text('0', { size: 20 }),
			k.pos(k.width() - 20, 12),
			k.anchor('topright'),
			k.color(80, 80, 80),
			k.fixed()
		]);

		// Jump on press
		k.onButtonPress('jump', () => {
			if (!isGameOver && dino.isGrounded()) {
				dino.jump();
			}
		});

		// Spawn obstacles
		k.loop(k.rand(0.8, 1.6), () => {
			if (isGameOver) return;

			const c = k.add([
				k.sprite('cactus'),
				k.pos(k.width() + 20, k.height() - 24),
				k.anchor('bot'),
				k.area({ scale: 0.7 }),
				k.move(k.LEFT, speed),
				k.scale(k.rand(0.9, 1.3)),
				'obstacle'
			]);
			obstacles.push(c);

			// When obstacle passes off-screen, score points
			c.onUpdate(() => {
				if (c.pos.x < -60) {
					c.destroy();
					if (!isGameOver) {
						score += 10;
						scoreLabel.text = String(score);
						// Gradually increase speed
						speed = Math.min(speed + 2, 400);
					}
				}
			});
		});

		// Ground collision for points
		dino.onCollide('obstacle', () => {
			isGameOver = true;

			// Stop everything
			for (const obs of obstacles) {
				if (obs.exists()) obs.paused = true;
			}

			// Show game over UI
			k.add([
				k.text('GAME OVER!', { size: 28 }),
				k.pos(k.width() / 2, k.height() / 2 - 30),
				k.anchor('center'),
				k.color(180, 50, 50),
				k.fixed()
			]);

			k.add([
				k.text(`Score: ${score}`, { size: 16 }),
				k.pos(k.width() / 2, k.height() / 2 + 5),
				k.anchor('center'),
				k.color(100, 100, 100),
				k.fixed()
			]);

			k.add([
				k.text('Tap / Space to restart', { size: 14 }),
				k.pos(k.width() / 2, k.height() / 2 + 30),
				k.anchor('center'),
				k.color(140, 140, 140),
				k.fixed()
			]);

			// Restart on press
			const restartHandler = () => {
				k.go('game');
			};
			k.onButtonPress('jump', restartHandler);
		});

		// Fall off screen = restart
		dino.onUpdate(() => {
			if (dino.pos.y > k.height() + 50) {
				k.go('game');
			}
		});
	});

	k.go('game');

	return {
		destroy: () => k.destroy()
	};
}
