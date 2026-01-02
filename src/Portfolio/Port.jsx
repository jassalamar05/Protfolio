export default function Port(){
    return(
        <>
        {/* navbar */}
        <section>
            {/* navbar par inset lagana taki sara background over a jaye parent ke  */}
    <nav className="fixed inset-0 bg-white lg:hidden">  
         <div className="flex items-center justify-between px-12 py-5">
            <div className="flex items-center justify-center gap-5">

                
            {/* MENU ICON */}
            <div className="relative group">
            <i className="fa-solid fa-bars-staggered text-2xl cursor-pointer"></i>
            {/* DROPDOWN MENU */}
            <ul className="lg:absolute bg-white shadow-xl  rounded hidden  group-hover:block pt-5 fixed  left-0 w-full px-12">
                <li className="px-4 py-3 bg-violet-700 text-white font-bold rounded-t">Home</li>
                <li className="px-4 py-3 hover:bg-slate-200 hover:text-violet-700 font-bold">About</li>
                <li className="px-4 py-3 hover:bg-slate-200 hover:text-violet-700 font-bold">Process</li>
                <li className="px-4 py-3 hover:bg-slate-200 hover:text-violet-700 font-bold">Portfolio</li>
                <li className="px-4 py-3 hover:bg-slate-200 hover:text-violet-700 font-bold">Blog</li>
                <li className="px-4 py-3 hover:bg-slate-200 hover:text-violet-700 font-bold rounded-b">Services</li>
            </ul>
            </div>

            {/* LOGO + NAME */}
           
            <div className="bg-purple-700 h-8 w-8 rounded-full flex items-center justify-center text-white text-xl font-bold"> A</div>
            <span className="font-semibold text-sm md:text-lg"> AMARDEEP SINGH</span>
            </div>

            {/* CONTACT BUTTON */}
            <div className="flex items-center">
            <button className="bg-violet-700 text-white px-4 py-2 z-10 rounded font-bold hover:scale-105 transition">Contact </button>
            </div>
        </div>
</nav>


            {/* navbar */}
            <nav className="bg-white flex justify-between px-10 pt-5">
                <div className="flex gap-2 md:gap-1">
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