class Attractor {
  constructor(x, y) {
    this.pos = createVector(x, y); 
    this.mass = 20; 
  }

  attract(particle) {
    let force = p5.Vector.sub(this.pos, particle.pos);
    let distance = force.mag();
    distance = constrain(distance, 5, 25); 
    force.normalize();
    let strength = (0.4 * this.mass * particle.mass) / (distance * distance); 
    force.mult(strength); 
    return force;
  }

  display() {
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, 20, 20);
  }
}

function mousePressed() {
  attractors.push(new Attractor(mouseX, mouseY));
}

function mouseReleased() {
  if (attractors.length > 1) {
    attractors.pop(); 
  }
}
