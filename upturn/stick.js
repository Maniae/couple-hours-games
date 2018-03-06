class Stick {
	constructor(y) {
		this.minWidth = 100;
		this.maxWidth = 400;
		this.x = random(width - this.minWidth);
		this.y = y;
		this.w = random(this.minWidth, this.maxWidth);
		this.h = 10;
	}

	update() {
		this.y += velocity;
	}

	checkCollision(player) {
		if (player.x > this.x - player.radius / 2
				&& player.x < this.x + player.radius / 2 + this.w
				&& player.y > this.y - player.radius / 2
				&& player.y < this.y + this.h + player.radius / 2) {
			this.hit = true;
			velocity *= -1;

			if (player.x < this.x + player.radius / 2 && player.vx > 0
				|| player.x > this.x + this.w - player.radius / 2 && player.vx < 0) {
				player.vx *= -1;
			}
		}
	}

	draw() {
		fill(this.hit ? "red" : "blue");
		this.hit = false;
		rect(this.x, this.y, this.w, this.h);
	}
}