function Rainbow() {
  frameRate(2);
  noStroke();
  fill(color(random(255), random(255), random(255)));
  arc(width / 2, height / 2, 300, 300, PI, 0);
  fill(color(random(255), random(255), random(255)));
  arc(width / 2, height / 2, 250, 250, PI, 0);
  fill(color(random(255), random(255), random(255)));
  arc(width / 2, height / 2, 200, 200, PI, 0);
  fill(color(random(255), random(255), random(255)));
  arc(width / 2, height / 2, 150, 150, PI, 0);
  fill(0);
  arc(width / 2, height / 2, 100, 100, PI, 0);
}
