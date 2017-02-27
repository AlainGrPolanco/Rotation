var angle = 0;

function setup() {
  createCanvas(800, 600)
  rectMode(CENTER)
}

function draw() {
  background(150, 150, 100);

  push();
  translate(width / 2, height / 2);
  rotate(angle)
  fill(255, 0, 0);
  ellipse(0, 0, 50, 250);
  fill(0, 255, 0);
  rect(0, 0, 50, 50);
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(angle);
  fill(100, 50, 100);
  rect(width / 4, height / 4, 50, 50);
  pop();

  noCursor();
  push();
  translate(mouseX, mouseY);
  rotate(angle)
  fill(50, 100, 200);
  rect(0, 0, 50, 50);
  pop();


  angle += .05;

}