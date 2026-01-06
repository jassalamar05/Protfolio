
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"



export default function Lines(){
    const particles=async (engine)=>{
        await loadSlim(engine)
    }
    return(
        <>
        <div className="w-full h-96 overflow-hidden relative">
<Particles
  init={particles}
  className="absolute inset-0 pointer-events-auto"
  options={{
    fullScreen: { enable: false },

    background: {
      color: {
        value: "#020617",
      },
    },

    particles: {
      number: {
        value: 10,
        density: { enable: true, area: 100},
      },
      color: { value: "#FDE68A" },
      shape: { type: "star" },
      opacity: { value: { min: 0.3, max: 0.8 } },
      size: { value: { min: 2, max: 6 } },

      links: {
        enable: true,
        distance: 160,
        color: "#FBBF24",
        opacity: 0.3,
      },

      move: {
        enable: true,
        speed: 0.4,
        direction: "bottom",
        random: true,
        outModes: { default: "in" },
        attract: {
          enable: true,
        },
      },
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: ["repulse", "grab"],
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: { opacity: 0.6 },
        },
      },
    },
  }}
/>










        </div>
        </>

    )

}