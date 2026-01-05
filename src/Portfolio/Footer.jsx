import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { MessageCircle,X } from "lucide-react";

export default function Footer() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setShow(true);
      } else {
        setShow(false);
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="bg-[#2c3e55] text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-lg">
              A
            </div>
            <h2 className="text-2xl font-semibold">Amardeep Singh</h2>
          </div>

        <div className="scroll-smooth">
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <li> <a href="" id="#home" className="cursor-pointer">Home</a></li>
            <li> <a href="" id="#about" className="cursor-pointer">About</a></li>
            <li>Process</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

          <p className="text-sm text-gray-300">
            © 2026 Amardeep.
          </p>
        </div>
      </footer>

      {/* ✅ Button OUTSIDE footer */}
          {/* Button */}
      <div className={`fixed right-6 z-50 transition-all duration-1000 ease-out
          ${
            show ? "top-[91%] opacity-100 translate-y-0"
              : "top-0 opacity-0 -translate-y-10 pointer-events-none"
          }
        `}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-violet-600 hover:bg-violet-500 text-white p-4 rounded-full shadow-lg"
        >
          {open ? <X size={24} /> :  <ArrowUp size={24} />}
        </button>
      </div>
    </>
  );
}
