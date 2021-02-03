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
  // print(mouseX, mouseY)
  background(255);
  // eerste rij
  fill(0, 255, 0);
  rect(50, 50, 100, 75);
  fill(255, 0, 255);
  rect(175, 50, 100, 75);
  fill(255, 0, 0);
  rect(300, 50, 100, 75);
  fill(0, 0, 255);
  rect(425, 50, 100, 75);
  // tweede rij
  fill(0, 255, 0);
  rect(50, 150, 100, 75);
  fill(255, 0, 255);
  rect(175, 150, 100, 75);
  fill(255, 0, 0);
  rect(300, 150, 100, 75);
  fill(0, 0, 255);
  rect(425, 150, 100, 75);
}

function mousePressed() {
  if (screen == 0) {
    screen = 1
  } else if (screen == 1) {
    screen = 2
  }
}
