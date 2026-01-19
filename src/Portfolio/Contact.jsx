import contact from "/public/workds copy.png"

export default function Contact(){
    return(
        <>
            <section>
            <div className="flex items-center justify-center bg-violet-500 pt-5">
                <p className="font-bold text-2xl sm:text-3xl">
                <i class="fa-solid fa-phone px-3"></i>
                Get In <span className="text-violet-800">Touch</span></p>
            </div>
            </section>


       
        <section className=" bg-violet-500 h-[600px] lg:h-[540px] w-screen px-2 md:px-10 grid grid-cols-1 lg:grid-cols-2 ">
            <section className="lg:col-span-1 hidden lg:flex lg:h-[600px]">
                <img src={contact} alt="" className=" object-cover h-[540px] overflow-hidden lg:pl-[200px]" />
            </section>


    <section className="lg:col-span-1">
            <div className="h-[550px] lg:h-[500px] bg-gradient-to-t from-gray-400 to-violet-500 mt-10 lg:px-10">
                <div className="px-2 md:px-10 pt-10 ">
                    {/* feilds */}
                <div className=" flex items-center w-full rounded-xl pt-4 lg:pt-1 group">
                <i className="fa-regular fa-user flex items-center px-2 text-xl group-hover:text-violet-500"></i>  
                <div contentEditable className="w-full border-2 border-gray-300 rounded-xl px-3 py-2
                    focus outline-none hover:border-violet-600">
                    </div>
                </div>       

                <div className=" flex items-center w-full rounded-xl  pt-5 lg:pt-2 group">
                <i className="fa-regular fa-envelope-open flex items-center px-2 text-base group-hover:text-violet-500"></i>
                <div contentEditable className="w-full border-2 border-gray-300 rounded-xl px-3 py-2
                    focus outline-none hover:border-violet-600">
                    </div>
                </div> 


                  <div className=" flex items-center w-full rounded-xl pt-8 lg:pt-2 group">
                    <i className="fa-solid fa-phone flex items-center px-2 group-hover:text-violet-500"></i>
                <div contentEditable className="w-full border-2 border-gray-300 rounded-xl px-3 py-2
                    focus outline-none hover:border-violet-600">
                    </div>
                </div> 


                  <div className=" flex w-full rounded-xl pt-5 lg:pt-2 group">
                    <i className="fa-regular fa-comment-dots px-2 py-5 group-hover:text-violet-500"></i>
                <div contentEditable className="w-full border-2 border-gray-300 rounded-xl px-3 py-2
                    focus outline-none hover:border-violet-600 h-40">
                    </div>
                </div> 
                </div>
        <div className="flex items-center justify-center pt-5 lg:pt-2 group">
            <button className="border-2 border-violet-500 px-3 py-2 sm:px-8 sm:py-3 lg:px-20  lg:mt-5 rounded-2xl group-hover:bg-gradient-to-l from-violet-600 to-gray-400">Submit <i className="fa-solid fa-location-arrow group-hover:translate-x-3 transition-transform duration-1000"></i></button>
        </div>
    </div>
</section>
</section>       
       
        </>
    )
}