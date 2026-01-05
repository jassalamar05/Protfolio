import { ArrowUp } from "lucide-react";

export default function Footer() {
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

          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <li> <a href="" id="home" >Home</a></li>
            <li>About</li>
            <li>Process</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>

          <p className="text-sm text-gray-300">
            © 2026 Amardeep.
          </p>
        </div>
      </footer>

      {/* ✅ Button OUTSIDE footer */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-6 bottom-6 z-50 h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-700 transition"
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
}
