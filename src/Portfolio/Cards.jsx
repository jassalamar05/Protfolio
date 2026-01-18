export default function Projects() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 py-10 px-10">
      <div className="relative group overflow-hidden rounded-lg">

        <img
          src="src/assets/Img/engg.jpeg"
          alt=""
          className="h-60 w-full object-cover"
        />

        {/* Overlay (starts from bottom) */}
        <div className=" absolute inset-0
            translate-y-full group-hover:translate-y-10
            transition-all duration-500 ease-linear bg-violet-400 hover:px-5 px-10">
        <div>
         <p className=" w-full h-10 bg-gray-400 text-violet-700 font-bold flex items-center justify-center text-xl">ENGINEERING HUB</p>
        </div>

        <div>
        <p className="text-black z-10">
        Full-Stack Enginnering hub built using MERN stack and realtime chat with the help of socket.iO
        </p>
        </div>

        <div className="flex justify-between items-center py-10">
           <a href="https://engghub.onrender.com"> <button className="bg-violet-500 hover:bg-violet-300 text-black h-10 w-20">View</button></a>  
          <a href=""></a>  <button className="bg-violet-500 hover:bg-violet-300 text-black h-10 w-20">Code</button>
        </div>
        
    </div>
       

      </div>
    </section>
  )
}
