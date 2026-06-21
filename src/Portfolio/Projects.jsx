import img3 from "/public/engg.jpeg"
import img2 from "/public/mechanic.png"
import img1 from "/public/fitness.png"
import img4 from "/public/portfolio.png"
import img5 from "/public/pgproject.png"

const projects = [
  {
    title: "Fitzen",
    image: img1,
    description: "Fitness website built using modern UI and responsive design.",
    link: "http://13.203.75.40:5000/",
    codelink: "https://github.com/jassalamar05/Protfolio"
  },
  {
    title: "Mechanic",
    image: img2,
    description: "Online mechanic booking system with backend API integration.",
    link: "http://13.203.75.40:5001/",
    codelink: "https://github.com/jassalamar05/Protfolio"
  },
  {
    title: "EnggHub",
    image: img3,
    description: "Full stack engineering resource platform built using MERN stack.",
    link: "http://65.0.74.233:5000/",
    codelink: "https://github.com/jassalamar05/Protfolio"
  },
  {
    title: "PG Booking System",
    image: img5,
    description: "Full stack PG booking platform with login, rooms, categories and admin dashboard.",
    link: "http://13.203.75.40:5004/",
    codelink: "https://github.com/Diya52003sharma/pgprjct"
  },
  {
    title: "Portfolio",
    image: img4,
    description: "Personal developer portfolio built using React and Tailwind CSS.",
    link: "https://amardeep-protfolio.vercel.app/",
    codelink: "https://github.com/jassalamar05/Protfolio"
  },
];

export default function Projects() {
  return (
    <div>

      {/* Title */}
      <p className="flex items-center justify-center lg:text-5xl text-3xl text-violet-500 font-bold lg:mt-20">
        <i className="fa-solid fa-laptop mr-3"></i>Projects Made
      </p>

      {/* Grid */}
      <section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-10 lg:px-20"
        id="Builds"
      >

        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500"
          >

            {/* Image */}
            <img
              src={project.image}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              alt={project.title}
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/70 text-white flex flex-col justify-center items-center text-center p-5 opacity-0 group-hover:opacity-100 transition duration-500"
            >

              <h2 className="text-2xl font-bold mb-3">
                {project.title}
              </h2>

              <p className="text-sm mb-5">
                {project.description}
              </p>

              <div className="flex gap-4">

                <a href={project.link} target="_blank">
                  <button className="bg-violet-500 hover:bg-violet-400 px-4 py-2 rounded text-white">
                    Live
                  </button>
                </a>

                <a href={project.codelink} target="_blank">
                  <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-black">
                    Code
                  </button>
                </a>

              </div>

            </div>

          </div>
        ))}

      </section>

    </div>
  );
}