class Level {
	constructor(difficulty) {
		this.length = 2000 + difficulty * 500;
		this.sticks = [];
		const stickSpace = 100;
		for (let i = 0; i < Math.floor((this.length - height) / stickSpace); i++) {
			this.sticks.push(new Stick(-stickSpace * i))
		}
	}

	update() {
		this.sticks.map(it => it.update());
		this.sticks.map(it => it.checkCollision(player));
	}

	draw() {
		this.sticks.map(it => it.draw());
	}
}