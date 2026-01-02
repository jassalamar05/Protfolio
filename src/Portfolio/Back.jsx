import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Background() {
    const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 70; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: Math.random() - 0.5,
    vy: Math.random() - 0.5,
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#999";
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      let dx = p.x - particles[j].x;
      let dy = p.y - particles[j].y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 150) {
        ctx.strokeStyle = "rgba(150,150,250,0.3)";
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(animate);
}

animate();

 const particlesInit = async (engine) => {
    await loadSlim(engine);
  };


  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true},
        particles: {
          number: { value: 60 },
          color: { value: "#7C3AED" }, // violet-600
          links: {
            enable: true,
            color: "#6D28D9",
            distance: 150,
            opacity: 0.4,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: { value: 2 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
        },
      }}
    />
  );
}
