let font;
function preload() {
  font = loadFont("Gumball.otf");
}

function Title() {
  textFont(font);
  textSize(80);
  stroke(0);
  fill(color(random(255), random(255), random(255)));
  text("G", 55, 255);
  fill(color(random(255), random(255), random(255)));
  text("U", 100, 255);
  fill(color(random(255), random(255), random(255)));
  text("M", 145, 255);
  fill(color(random(255), random(255), random(255)));
  text("B", 195, 255);
  fill(color(random(255), random(255), random(255)));
  text("A", 240, 255);
  fill(color(random(255), random(255), random(255)));
  text("L", 285, 255);
  fill(color(random(255), random(255), random(255)));
  text("L", 320, 255);
}
