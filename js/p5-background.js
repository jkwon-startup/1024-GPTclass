// P5.js Gradient Wave Background Animation
// Inspired by awwwards-winning designs with blue-green color palette

let waves = [];
let particles = [];
const numWaves = 3;
const numParticles = 50;

function setup() {
    // Create canvas and attach to specific div
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-background');

    // Initialize waves with different properties
    for (let i = 0; i < numWaves; i++) {
        waves.push(new Wave(i));
    }

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
    }

    noStroke();
}

function draw() {
    // Subtle gradient background
    setGradientBackground();

    // Draw waves
    for (let wave of waves) {
        wave.update();
        wave.display();
    }

    // Draw particles
    for (let particle of particles) {
        particle.update();
        particle.display();
    }
}

function setGradientBackground() {
    // Create gradient from top to bottom
    for (let y = 0; y < height; y++) {
        let inter = map(y, 0, height, 0, 1);
        let c = lerpColor(color(255, 255, 255, 250), color(245, 250, 255, 250), inter);
        stroke(c);
        line(0, y, width, y);
    }
    noStroke();
}

// Wave class for organic wave animations
class Wave {
    constructor(index) {
        this.index = index;
        this.yOffset = index * 200 + 100;
        this.amplitude = 60 + index * 20;
        this.frequency = 0.003 - index * 0.0005;
        this.speed = 0.02 + index * 0.01;
        this.time = random(1000);

        // Color palette: Blue to Green gradient
        this.colors = [
            { r: 0, g: 122, b: 255, a: 20 },      // Blue primary
            { r: 90, g: 200, b: 250, a: 15 },     // Blue light
            { r: 52, g: 199, b: 89, a: 18 },      // Green primary
            { r: 99, g: 230, b: 166, a: 12 }      // Green light
        ];

        this.color = this.colors[index % this.colors.length];
    }

    update() {
        this.time += this.speed;
    }

    display() {
        push();
        fill(this.color.r, this.color.g, this.color.b, this.color.a);

        beginShape();
        // Start from left edge
        vertex(0, height);

        // Create wave points
        for (let x = 0; x <= width; x += 10) {
            let y = this.yOffset +
                    sin(x * this.frequency + this.time) * this.amplitude +
                    cos(x * this.frequency * 0.5 + this.time * 0.7) * (this.amplitude * 0.5);
            vertex(x, y);
        }

        // Complete the shape to bottom right
        vertex(width, height);
        endShape(CLOSE);
        pop();
    }
}

// Particle class for floating dots
class Particle {
    constructor() {
        this.reset();
        this.y = random(height);
    }

    reset() {
        this.x = random(width);
        this.y = -20;
        this.size = random(2, 6);
        this.speedY = random(0.3, 1.2);
        this.speedX = random(-0.3, 0.3);
        this.opacity = random(100, 200);

        // Random color from blue-green palette
        let colorChoice = random();
        if (colorChoice < 0.5) {
            // Blue tones
            this.color = color(0, 122, 255, this.opacity);
        } else {
            // Green tones
            this.color = color(52, 199, 89, this.opacity);
        }
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // Gentle floating motion
        this.x += sin(frameCount * 0.02 + this.y) * 0.5;

        // Reset when particle goes off screen
        if (this.y > height + 20) {
            this.reset();
        }

        if (this.x < -20 || this.x > width + 20) {
            this.x = random(width);
        }
    }

    display() {
        push();
        fill(this.color);
        noStroke();

        // Draw particle with subtle glow effect
        for (let i = 3; i > 0; i--) {
            let alpha = this.opacity / (i * 3);
            fill(red(this.color), green(this.color), blue(this.color), alpha);
            circle(this.x, this.y, this.size * i * 0.8);
        }

        pop();
    }
}

// Responsive canvas
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
