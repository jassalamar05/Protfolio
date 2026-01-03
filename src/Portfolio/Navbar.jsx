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
  <nav className="fixed inset-0 z-50 bg-white lg:hidden">
    
    {/* TOP BAR */}
    <div className="flex justify-between items-center px-6 py-4 border-b">
      
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <button onClick={handleSubmit}>
          <i className="fa-solid fa-bars-staggered text-2xl"></i>
        </button>

        <div className="flex items-center gap-2">
          <div className="bg-purple-700 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="font-semibold">AMARDEEP SINGH</span>
        </div>
      </div>

      {/* RIGHT */}
      <button className="bg-violet-700 text-white px-4 py-1 rounded font-bold">
        Contact
      </button>
    </div>

    {/* MENU LIST */}
    <ul className="mt-6 px-6">
      <li className="px-4 py-3 bg-violet-700 text-white font-bold rounded">
        Home
      </li>

      <li className="px-4 py-3 font-bold hover:bg-violet-100 hover:text-violet-700 rounded">
        About
      </li>

      <li className="px-4 py-3 font-bold hover:bg-violet-100 hover:text-violet-700 rounded">
        Process
      </li>

      <li className="px-4 py-3 font-bold hover:bg-violet-100 hover:text-violet-700 rounded">
        Builds
      </li>

      <li className="px-4 py-3 font-bold hover:bg-violet-100 hover:text-violet-700 rounded">
        Projects
      </li>
    </ul>

  </nav>
)}

            {/* navbar */}
            <nav className="bg-white flex justify-between px-10 pt-5">
                <div className="flex gap-2 md:gap-1">
                <div className="block lg:hidden cursor-pointer">
                    <button onClick={handleSubmit}>
                  <i className="fa-solid fa-bars-staggered sm:text-3xl text-xl"></i>
                    </button>
                </div>
                <div className="bg-purple-700 rounded-[100%] px-3 py-1 md:px-6 md:py-4 flex items-center text-white justify-center text-2xl font-bold ">A</div>
                <div className="flex items-center text-sm font-semibold  md:text-xl lg:text-2xl">AMARDEEP SINGH</div>
                </div>

                <div className="flex justify-center items-center gap-3">
                    <ul className=" hidden  gap- cursor-pointer gap-8 sm:hidden md:hidden lg:flex">
                        <li className="bg-violet-700  text-white rounded py-3 px-4 flex items-center justify-center font-bold">Home</li>
                        <li className=" hover:text-violet-700 hover:bg-slate-200 px-4 py-3  rounded flex items-center justify-center font-bold">About</li>
                        <li className=" hover:text-violet-700 hover:bg-slate-200 px-4 py-3  rounded  flex items-center justify-center font-bold">Process</li>
                        <li className=" hover:text-violet-700 hover:bg-slate-200 px-4 py-3  rounded flex items-center justify-center font-bold">Skills</li>
                        <li className=" hover:text-violet-700 hover:bg-slate-200 px-4 py-3  rounded flex items-center justify-center font-bold">Builds</li>
                    </ul>
                    <li className=" bg-violet-700 hover:scale-105 transition-transform duration-700  text-white px-2 py-2  rounded flex items-center justify-center font-bold md:px-5 md:py-4">Contact</li>
                </div>

            </nav>
        </section>
        </>
    )
}