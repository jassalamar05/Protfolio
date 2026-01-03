import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import img from "../assets/Img/unnamed.jpg"

export default function Backs() {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    // 🔥 HEIGHT CONTROL YAHAN HAI
  
    <div className="relative w-full h-[500px] overflow-hidden">
         {/* 👆 h-screen / h-[600px] / jo chaaho */}
        <section>
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-20 px-2">
                      <div className="lg:col-span-1 pt-6">
                           <p className="text-sm lg:text-4xl font-bold lg:pt-40 text-center sm:text-xl lg:text-justify"> <span className="text-purple-700">Hi There,</span> <br /><span className=""> I'm </span><span className="text-violet-700"> Amardeep Singh </span> <br /><span className="">I Am Into Full Stack Development</span></p>   
                      </div>

        <div className="flex justify-center px-1 lg:pt-10 pt-20">
        <div className="relative glow-box rounded-[100%]">
          <img src={img} alt="profile"
            className="w-52 h-52 lg:w-96 transition-transform duration-1000 hover:animate-pulse lg:h-96 rounded-[100%] bg-[#142d4a] relative z-10 hover:scale-105" />
              </div>
            </div>
          </div>
      </section>
      
     

      <Particles
        init={particlesInit}
        className="absolute inset-0"   // 🔥 MOST IMPORTANT
        options={{
          fullScreen: { enable: false }, // already correct
          particles: {
            number: { value: 40 },
            color: { value: "#7C3AED" },
            links: {
              enable: true,
              color: "#6D28D9",
              distance: 150,
              opacity: 0.4,
            },
            move: {
              enable: true,
              speed: 0.4,
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
    </div>

  );
}
