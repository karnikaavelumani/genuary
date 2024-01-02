let rainbow;
let title;
let filming = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  Rainbow();
  Title();
}

function mousePressed() {
  if (!filming) {
    saveGif("genuary-2024-01-02.gif", 100, { units: "frames", delay: 0 });
    filming = true;
  }
}
