let particles = [];
let attractors = [];
let mouseAttractor;

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(random(width), random(height))); 
  }
  attractors.push(new Attractor(width / 2, height / 2));

  mouseAttractor = new Attractor(mouseX, mouseY); 
}

