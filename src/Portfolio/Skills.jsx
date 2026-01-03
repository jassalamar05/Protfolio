import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAws,
} from "react-icons/fa";

import {
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiPostman,
  SiNextdotjs,
  SiDocker,
  SiKubernetes,
  SiJenkins,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "ReactJS", icon: <FaReact /> },
    { name: "ExpressJS", icon: <SiExpress /> },
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "HTML5", icon: <FaHtml5 /> },

    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Docker", icon: <SiDocker  /> },
    { name: "Kubernetes", icon: <SiKubernetes  /> },
    { name: "Jenkins", icon: <SiJenkins /> },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-gray-300 via-violet-400 to-violet-400 py-16 px-6" id="skills">
      
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-white mb-14 flex justify-center items-center gap-3">
        <span className="text-white"><i className="fa-solid fa-laptop"></i></span>
        Skills & <span className="text-violet-700">Abilities</span>
      </h2>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-purple-900/40 p-8 rounded-2xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              bg-[#0b0b2e]
              rounded-xl
              flex flex-col items-center justify-center
              gap-3
              h-32
              text-white
              shadow-lg
              hover:-translate-y-2
              hover:shadow-purple-500/40
              transition-all duration-300
            "
          >
            <div className="text-4xl text-violet-800">
              {skill.icon}
            </div>
            <p className=" text-white font-bold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
