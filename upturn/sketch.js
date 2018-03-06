let player, level;
let velocity = 5;
let score = 0, distance = 0, bottomBorder = 0, levelNumber = 0, bestScore = -Infinity, bestDistance = 0;
let yOffset = 64;

function setup() {
  const canvas = createCanvas(800, 600);
  canvas.parent("canvas");
  background("#cccccc");
  player = new Player();
  level = new Level(levelNumber);
  textSize(32);
}

function draw() {
  background(10 * levelNumber + 50);
  drawPreviousLevel();
  if (distance < bottomBorder) velocity *= -1;
  level.update();
  level.draw();
  player.update();
  player.draw();
  distance += velocity;
  updateUI();
  updateLevel();
}

function keyPressed() {
  if (key === " ") {
    reset();
  }
}

function updateUI() {
  score += velocity > 0 ? velocity : 4 * velocity;
  document.getElementById("level").innerHTML = "Level: " + levelNumber;
  document.getElementById("score").innerHTML = "score: " + score;
  document.getElementById("distance").innerHTML = "distance: " + distance;
}

function updateLevel() {
  if (distance - bottomBorder > level.length) {
    bottomBorder = distance;
    velocity += 1;
    level = new Level(++levelNumber);
  }
}

function drawPreviousLevel() {
  fill(10 * (levelNumber - 1) + 50);
  rect(0, height + (distance - bottomBorder) - yOffset, width, yOffset);
}

function reset() {
  if (score > bestScore) {
    document.getElementById("best-score").innerHTML = "best score: " + score;
    bestScore = score;
  }
  if (distance > bestDistance) {
    document.getElementById("best-distance").innerHTML = "best distance: " + distance;
    bestDistance = distance;
  }
  score = 0, distance = 0, bottomBorder = 0, levelNumber = 0;
  setup();
}