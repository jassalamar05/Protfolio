import img from "../assets/Img/unnamed.jpg"

export default function Home(){

    return(
        <>
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 px-2">
                <div className="lg:col-span-1 pt-6">
                     <p className="text-2xl lg:text-4xl font-bold lg:pt-40 text-center"> <span className="text-purple-700">Hi There,</span> <br /><span className=""> I'm </span><span className="text-violet-700"> Amardeep Singh </span> <br /><span className="">I Am Into Full Stack Development</span></p>   
                </div>

                <div className="col-span-1 pt-10 flex justify-center group">
                    <img src={img} className=" lg:h-96 lg:w-60 h-52 w-52  border-2 border-black shadow-2xl hover:animate-pulse transition-transform duration-1000 rounded-full" alt="" />
                </div>
            </div>

            <div className="flex items-center justify-center pt-10 gap-5">
            <div className="hover:bg-violet-300 bg-slate-300 rounded-full h-10 w-10 flex items-center justify-center"><i className="fa-brands fa-twitter text-2xl"></i></div>
            <div className="hover:bg-violet-300 bg-slate-300 rounded-full h-10 w-10 flex items-center justify-center"><i className="fa-brands fa-github text-2xl"></i></div>
            <div className="hover:bg-violet-300 bg-slate-300 rounded-full h-10 w-10 flex items-center justify-center"><i class="fa-brands fa-linkedin-in text-2xl"></i></div>
            <div className="hover:bg-violet-300 bg-slate-300 rounded-full h-10 w-10 flex items-center justify-center"><i class="fa-brands fa-facebook-f text-2xl"></i></div>
            <div className="hover:bg-violet-300 bg-slate-300 rounded-full h-10 w-10 flex items-center justify-center"><i class="fa-brands fa-dev text-2xl"></i></div>
            </div>
            
        </section>
        
        </>
    )
}