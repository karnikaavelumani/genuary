function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);

  this.starColor = color(random(255), random(255), random(255));

  this.update = function () {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);

      this.starColor = color(random(255), random(255), random(255));
    }
  };

  this.show = function () {
    fill(this.starColor);
    noStroke();

    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);

    let r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);
  };
}
