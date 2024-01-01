let stars = [];
let speed;
let filming = false;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 5000; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  speed = 3;
  background(0);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function mousePressed() {
  if (!filming) {
    saveGif("genuary-2024-01-01.gif", 100, { units: "frames", delay: 0 });
    filming = true;
  }
}
