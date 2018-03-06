class Player {
	constructor() {
		this.radius = 24;
		this.x = width / 2;
		this.y = height - yOffset;
		this.vx = 0;
	}

	update() {
		this.handleKeysDown();
		this.handleBorderBounce();
		this.x += this.vx;
	}

	handleKeysDown() {
		if (keyIsDown(LEFT_ARROW) && this.vx > -10) {
			this.vx -= 1;
		}
		if (keyIsDown(RIGHT_ARROW) && this.vx < 10) {
			this.vx += 1;
		}
	}

	handleBorderBounce() {
		if (this.x > width - this.radius / 2) {
			this.vx = -Math.abs(this.vx);
		}
		if (this.x < this.radius / 2) {
			this.vx = Math.abs(this.vx);
		}
	}

	draw() {
		fill("green");
		ellipse(this.x, this.y, this.radius, this.radius);
	}
}