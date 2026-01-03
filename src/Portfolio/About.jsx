import img from "../assets/Img/Amar.jpeg";

export default function About(){
    return(
        <>
        <section className="bg-white h-fit" id="about">
             <div className="flex items-center justify-center lg:pt-10 gap-1">
                  <div className="hover:bg-violet-300 bg-slate-300 rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center"><i className="fa-brands fa-twitter lg:text-2xl text-xl"></i></div>
                  <div className="hover:bg-violet-300 bg-slate-300 rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center"><i className="fa-brands fa-github lg:text-2xl text-xl"></i></div>
                  <div className="hover:bg-violet-300 bg-slate-300 rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center"><i class="fa-brands fa-linkedin-in lg:text-2xl text-xl"></i></div>
                  <div className="hover:bg-violet-300 bg-slate-300 rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center"><i class="fa-brands fa-facebook-f lg:text-2xl text-xl"></i></div>
                  <div className="hover:bg-violet-300 bg-slate-300 rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center"><i class="fa-brands fa-dev lg:text-2xl text-xl"></i></div>
                </div>

                <div className="flex items-center justify-center lg:pt-20 pt-20 md:pt-10 gap-4 lg:gap-10">
                    <i className="fa-solid fa-user text-2xl text-gray-800 lg:text-4xl"></i>
                    <p className="lg:text-3xl text-violet-700 text-xl font-bold sm:text-2xl">About Me</p>
                </div>

                <div>
     <section className="w-full pt-5 bg-white flex items-center justify-center lg:pt-10">

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:gap-10 items-center">
        {/* LEFT IMAGE CARD */}
      <div className="flex justify-center px-1">
  <div className="relative glow-box rounded-[50px]">
    <img
      src={img}
      alt="profile"
      className="w-[320px]  lg:w-[360px]  lg:h-[370px]  aspect-square  rounded-[50px]  object-cover  bg-[#142d4a] relative z-10 " />
  </div>
</div>

        {/* RIGHT CONTENT */}
        <div className="px-5 sm:px-10">
          <p className="lg:text-base text-sm lg:leading-6 sm:leading-5 text-gray-800 text-justify lg:text-justify pt-10">
          I'm a <span className="text-violet-700">Full-Stack Developer </span> based in Punjab, India. I have completed my Bachelor's 
          degree in Information Technology from PTU. I'm deeply passionate about building scalable,
           user-friendly web applications and continuously improving my technical skills. I specialize in 
           developing modern web apps and websites using the MERN stack, and I enjoy turning ideas into high-quality
           , real-world products through clean and efficient code.
          </p>

          <div className="flex items-center justify-center pt-5 lg:block">
          <p className="text-violet-700 text-sm">
            Email : <span className="text-gray-900">amardeepsingh786786@gmail.com</span>
          </p>
            </div>

           <div className="flex items-center justify-center pt-5 lg:block">
          <p className="text-violet-700 text-sm">
            Place : <span className="text-gray-900">Punjab ,India -144801</span>
          </p>
          </div>
        

          {/* Resume Button */}
          <div className="flex items-center justify-center">
          <button
            className=" mt-6 inline-flex items-center gap-2 bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold  shadow-lg  hover:bg-violet-800  transition-all ">
            Resume
            <span className="text-xl">›</span>
          </button>
          </div>
        </div>
      </div>
    </section>
 </div>
</section>      
        </>
    )
}