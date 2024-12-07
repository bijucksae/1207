class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.acc = createVector(0, 0); 
    this.size = random(5, 10); 
  }

  applyForce(force) {
    this.acc.add(force); 
  }

  update() {
    this.vel.add(this.acc); 
    this.pos.add(this.vel); 
    this.acc.mult(0); 
    this.vel.limit(2); 
  }

  display() {
    noStroke();
    fill(255, 150); 
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}