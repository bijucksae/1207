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

function draw() {
  background(0, 50);
  
  for (let attractor of attractors) {
    attractor.display(); 
  }

  mouseAttractor.pos.set(mouseX, mouseY); 
  mouseAttractor.display(); 
  
  for (let particle of particles) {
    particle.applyForce(createVector(0, 0.05));
    
    for (let attractor of attractors) {
      let force = attractor.attract(particle);
      particle.applyForce(force);
    }
    
    let mouseForce = mouseAttractor.attract(particle);
    particle.applyForce(mouseForce);
    
    particle.update(); 
    particle.display(); 
  }
}
