
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"



export default function Thread(){
    const particles=async (engine)=>{
        await loadSlim(engine)
    }
    return(
        <>
        <div className="w-full h-96 overflow-hidden relative">
        <Particles init={particles} 
        className="absolute inset-0 pointer-events-auto" 
        options={{
            fullScreen:{enable:false},
            particles:{
                number:{value:40},
                color:{value:"#7C3AED"},
                links:{
                    enable:true,
                    distance:150,
                    color:"6D28D9",
                    opacity:0.4
                },
                size:{value:2},
                move:{
                    enable:true,
                    speed:0.3
                },
            },
            interactivity:{
                events:{
                    onHover:{enable:true,mode:["repulse","bubble"]},
                },
                 modes:{
                  bubble:{
                        distance:200,
                        size:14,
                        duration:2,
                        opacity:1,
                   }
            }
            },
           

        }}/>
        
        </div>
        
        </>
    )



    
}