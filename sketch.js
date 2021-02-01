var screen = 0

function setup() {
  createCanvas(600, 600);
}

function draw() {
  if (screen == 0) {
    startScreen()
  }
  if (screen == 1) {
    levelScreen()
  }
}

function startScreen() {
  background(96, 157, 255);
  fill(255)
  textAlign(CENTER);
  text('WELCOME TO THE GAME', width / 2, height / 2)
  text('click to start', width / 2, height / 2 + 20);
}

function levelScreen() {
  background(100, 100, 100)
}

function mousePressed() {
  if (screen == 0) {
    screen = 1
  } else if (screen == 1) {
    screen = 2
  }
}
