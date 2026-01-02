import { useState } from "react"

export default function Port(){
    const[setopen,isSetOpen]=useState(false)
    const handleSubmit=()=>{
       isSetOpen(!setopen)
    }
    return(
        <>
        {/* navbar */}
        <section>
            {/* navbar par inset lagana taki sara background over a jaye parent ke  */}
 {setopen&& (
    <nav className="fixed inset-0 bg-white lg:hidden">  
    <div className="flex justify-between relative px-2 py-4 gap-2">
{/* MENU ICON */}
<div className="flex items-center justify-center gap-2">
  {/* DROPDOWN MENU */}
            <button onClick={handleSubmit}>
            <i className="fa-solid fa-bars-staggered sm:text-2xl cursor-pointer"></i>
            </button>


            {/* LOGO + NAME */}
            <div className="flex items-center gap-1">
            <div className="bg-purple-700 h-8 w-8 rounded-full flex items-center justify-center text-white text-xl font-bold"> A</div>
            <span className="font-semibold text-sm md:text-lg"> AMARDEEP SINGH</span>
            </div>
</div>

            {/* CONTACT BUTTON */}
        <div className="flex items-center">
            <button className="bg-violet-700 text-white px-3 py-1 rounded font-bold hover:scale-105 transition">Contact </button>
            </div>
        </div>

        <div>
            <ul>
            <li className="px-4 py-2 bg-violet-700 text-white font-bold rounded-t">Home</li>
            <li className="px-4 py-2 hover:bg-slate-200 hover:text-violet-700 font-bold">About</li>
            <li className="px-4 py-2 hover:bg-slate-200 hover:text-violet-700 font-bold">Process</li>
            <li className="px-4 py-2 hover:bg-slate-200 hover:text-violet-700 font-bold">Portfolio</li>
            <li className="px-4 py-2 hover:bg-slate-200 hover:text-violet-700 font-bold">Blog</li>
            <li className="px-4 py-2 hover:bg-slate-200 hover:text-violet-700 font-bold rounded-b">Services</li>
            </ul>
        </div>
</nav>
)}


            {/* navbar */}
            <nav className="bg-white flex justify-between px-5 pt-5">
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
                    <ul className=" hidden  gap- cursor-pointer gap-3 sm:hidden md:hidden lg:flex">
                        <li className="bg-violet-700  text-white rounded py-3 px-4 flex items-center justify-center font-bold">Home</li>
                        <li className=" hover:text-violet-700 hover:bg-slate-200 px-4 py-3  rounded flex items-center justify-center font-bold">About</li>
                        <li className=" hover:text-violet-700 hover:bg-slate-200 px-4 py-3  rounded  flex items-center justify-center font-bold">Process</li>
                        <li className=" hover:text-violet-700 hover:bg-slate-200 px-4 py-3  rounded flex items-center justify-center font-bold">Portfolio</li>
                        <li className=" hover:text-violet-700 hover:bg-slate-200 px-4 py-3  rounded flex items-center justify-center font-bold">Blog</li>
                        <li className=" hover:text-violet-700 hover:bg-slate-200 px-4 py-3  rounded flex items-center justify-center font-bold">Services</li>
                    </ul>
                    <li className=" bg-violet-700 hover:scale-105 transition-transform duration-700  text-white px-2 py-2  rounded flex items-center justify-center font-bold md:px-5 md:py-4">Contact</li>
                </div>

            </nav>
        </section>
        </>
    )
}