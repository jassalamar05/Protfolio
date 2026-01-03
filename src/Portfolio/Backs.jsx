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
      
                      <div className="col-span-1 pt-10 flex justify-center">
                          <img src={img} className=" lg:h-96 lg:w-96 h-52 w-52 sm:h-60 sm:w-60  border-2 rounded-full border-black shadow-2xl    hover:scale-105" alt="" />
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
