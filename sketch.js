//let hand;
let bone;
function preload() {
  boxc = loadImage("fact1.jpg");
  bone = loadImage("fact2.png");
}
function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);

  background(0);
  stroke("#AEA294");
  strokeWeight(26);
  translate(width / 2, height - height / 3);
  angleMode(DEGREES);

  boxc.resize(width, 0);
  bone.resize(boxc.width / 4, height * 0.95);
  imageMode(CENTER);
  //branch(300, 4,65);
  frameRate(25);
}

function draw() {
  //resetMatrix()
  background(0);
  image(boxc, width / 2, height / 1.5);
  translate(width / 2 + boxc.width * 0.02, height / 1.5);

  branch(boxc.height * 0.9, 7, frameCount % 360);
}

function branch1(len, d, theta) {
  // exit condition

  if (d == 0) {
    //image(hand,0,0,160,160)
    //ellipse(0,0,20,20)

    return;
  }

  // draw line

  //image(bone, 0, -len / 4);
  //line(0, 0, 0, -len);
  //recursive condition

  // first translate to end of line
  translate(0, -len);

  // srink len
  len *= 0.67;
  // decrement d
  d--;
  // rotate right

  push();
  rotate(theta);

  // call recursive loop
  branch(len, d, theta);
  pop();
  // rotate left
  push();

  rotate(-theta);
  branch(len, d, theta);
  pop();
}

function branch(len, d, theta) {
  if (d == 0) {
    return;
  }

  // Move to end of this branch
  translate(0, -len);

  // Shrink and decrement
  let newLen = len * 0.77;
  let newD = d - 1;

  // Draw right branch
  push();
  rotate(theta);
  branch(newLen, newD, theta);
  pop();

  // Draw left branch
  push();
  rotate(-theta);
  branch(newLen, newD, theta);
  pop();

  // Now draw this branch *after* the children so it's on top
  translate(0, len / 2); // Move back halfway to draw centered
  image(bone, 0, 0, len * 0.5, len * 1); // This gets drawn on top
  translate(0, -len / 2); // Restore position for parent
}
