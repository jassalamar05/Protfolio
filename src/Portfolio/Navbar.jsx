import { useState } from "react"


export default function Nav(){
    const[isOpen,isSetOpen]=useState(false)
    const handleSubmit=()=>{
       isSetOpen(!isOpen)
    }
    return(
        <>
        {/* navbar */}
        <section>
{/* navbar par inset lagana taki sara background over a jaye parent ke  */}
{isOpen && (
  <nav className="fixed inset-0 z-50 opacity-55 lg:hidden">
    
    {/* TOP BAR */}
    <div className="flex justify-between items-center px-1 py-6">
      
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <button onClick={handleSubmit}>
          <i className="fa-regular fa-circle-xmark text-2xl animate-spin hover:text-violet-700"></i>
        </button>

        <div className="flex items-center gap-2">
          {/* <div className="bg-purple-700 h-8 w-12 rounded-full flex items-center justify-center text-white font-bold">
            A
          </div> */}
          {/* <span className="font-semibold text-sm">AMARDEEP SINGH</span> */}
        </div>
      </div>

      {/* RIGHT */}
      {/* <button className="bg-violet-700 text-white px-3 py-1 rounded font-bold">
        Contact
      </button> */}
    </div>

    {/* MENU LIST */}
    <ul className="mt-1 px-1 sm:px-6">
      <li className="px-4 py-3 bg-violet-700 text-white font-bold rounded"><a href="#home">Home</a>
      </li>

      <li className="px-4 py-3 font-bold hover:bg-violet-100 hover:text-violet-700 rounded"><a href="#about">About</a>
      </li>

      <li className="px-4 py-3 font-bold hover:bg-violet-100 hover:text-violet-700 rounded"><a href="#process">Process</a>
      </li>

      <li className="px-4 py-3 font-bold hover:bg-violet-100 hover:text-violet-700 rounded"><a href="#builds">Builds</a>
      </li>

      <li className="px-4 py-3 font-bold hover:bg-violet-100 hover:text-violet-700 rounded"><a href="#skills">Skills</a>
      </li>
    </ul>

  </nav>
)}

            {/* navbar */}
            <nav className="bg-white flex justify-between px-1 sm:px-5 md:px-7 pt-5" id="home">
                <div className="flex gap-2 md:gap-1">
                <div className="flex lg:hidden cursor-pointer">
                    <button onClick={handleSubmit}>
                  <i className="fa-solid fa-bars-staggered sm:text-2xl text-xl"></i>
                    </button>
                </div>
                <div className="bg-purple-700 rounded-[100%] px-3 py-1 md:px-4 md:py-2 flex items-center text-white justify-center text-2xl font-bold ">A</div>
                <div className="flex items-center text-sm font-semibold  md:text-xl lg:text-2xl">AMARDEEP SINGH</div>
                </div>

                <div className="flex justify-center items-center gap-5 scroll-smooth">
                    <ul className=" hidden  gap- cursor-pointer gap-3 sm:hidden md:hidden lg:flex">
                        <li><a href="#home" className="bg-violet-700  text-white rounded py-3 px-4 flex items-center justify-center font-bold">Home</a></li>
                        <li><a href="#about" className=" hover:text-violet-700 hover:bg-slate-200 px-4 py-3  rounded flex items-center justify-center font-bold">About</a></li>
                        <li><a href="#process" className=" hover:text-violet-700 hover:bg-slate-200 px-4 py-3  rounded flex items-center justify-center font-bold">Process</a></li>
                        <li><a href="#skills" className=" hover:text-violet-700 hover:bg-slate-200 px-4 py-3  rounded flex items-center justify-center font-bold">Skills</a></li>
                        <li><a href="#Builds" className=" hover:text-violet-700 hover:bg-slate-200 px-4 py-3  rounded flex items-center justify-center font-bold">Builds</a></li>
                    </ul>
                    <li className=" bg-violet-700 hover:scale-105 transition-transform duration-700  text-white px-1 py-1  rounded flex items-center justify-center font-bold md:px-5 md:py-4">Contact</li>
                </div>

            </nav>
        </section>
        </>
    )
}