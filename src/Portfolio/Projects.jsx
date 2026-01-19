import img from "/public/engg.jpeg"

const projects = [
  {
    title: "Project 1",
    image: img,
    link:  "https://engghub.onrender.com",
    link1:"https://github.com/jassalamar05/Protfolio"
  },
    {
    title: "Project 1",
    image: img,
    link:  "https://engghub.onrender.com",
    link1:"https://github.com/jassalamar05/Protfolio"
  },
    {
    title: "Project 1",
    image: img,
    link:  "https://engghub.onrender.com",
    link1:"https://github.com/jassalamar05/Protfolio"
  },
    {
    title: "Project 1",
    image: img,
    link:  "https://engghub.onrender.com",
    link1:"https://github.com/jassalamar05/Protfolio"
  }
];

export default function Projects() {
  return (
      <>
    <div>
    <p className="flex items-center justify-center lg:text-5xl text-violet-5 
    00 font-bold lg:mt-20"><i class="fa-solid fa-laptop"></i>Projects Made</p>
      <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 py-10 px-10 lg:px-20 lg:py-5" id="Builds">
      {projects.map((projects,index)=>(
        <div className="relative group overflow-hidden  rounded-lg py-2 lg:py-10 lg:px-2" key={index}>

        <img
          src={projects.image}
          className="h-60 w-full object-cover "
        />

        {/* Overlay (starts from bottom) */}
        <div className=" absolute inset-0 
            translate-y-72 group-hover:translate-y-10 lg:group-hover:translate-y-24
            transition-all duration-500 ease-linear bg-violet-500 hover:px-5">
        <div>
         <p className=" w-full h-10 bg-gray-400 text-violet-700 font-bold flex items-center justify-center text-xl">ENGINEERING HUB</p>
        </div>

        <div>
        <p className="text-black z-10">
        Full-Stack Enginnering hub built using MERN stack and realtime chat with the help of socket.iO
        </p>
        </div>

        <div className="flex justify-between items-center py-10">
           <a href={projects.link}> <button className="bg-violet-400 hover:bg-violet-300 text-black h-10 w-20">View</button></a>  
          <a href={projects.link1}> <button className="bg-violet-400 hover:bg-violet-300 text-black h-10 w-20">Code</button></a> 
        </div>
    </div>
 </div>

      ))}

    </section>
    </div>
     </>
  );
}
