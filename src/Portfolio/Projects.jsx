const projects = [
  {
    title: "Project 1",
    image: "/images/insta.png",
  },
  {
    title: "Project 2",
    image: "/images/dashboard.png",
  },
  {
    title: "Project 3",
    image: "/images/resume.png",
  },
  {
    title: "Project 4",
    image: "/images/react.png",
  },
  {
    title: "Project 5",
    image: "/images/flipkart.png",
  },
  {
    title: "Project 6",
    image: "/images/js.png",
  },
];

export default function Projects() {
  return (
    <section className=" min-h-screen py-16 px-6" id="builds">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

        {projects.map((project, index) => (
          <div
            key={index}
            className=" rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            {/* Yellow Title Bar */}
            <div className="bg-violet-400 py-3 px-4">
              <h3 className="text-black font-bold text-lg">
                {project.title}
              </h3>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
