import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2c3e55] text-white relative py-10">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-5 min flex flex-col lg:flex-row items-center justify-between gap-6 ">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-lg">A</div>
          <h2 className="text-2xl font-semibold">Amardeep Singh</h2>
        </div>

        {/* Menu */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <li className="hover:text-purple-400 cursor-pointer">Home</li>
          <li className="hover:text-purple-400 cursor-pointer">About</li>
          <li className="hover:text-purple-400 cursor-pointer">Process</li>
          <li className="hover:text-purple-400 cursor-pointer">Portfolio</li>
          <li className="hover:text-purple-400 cursor-pointer">Blog</li>
          <li className="hover:text-purple-400 cursor-pointer">Services</li>
          <li className="hover:text-purple-400 cursor-pointer">Contact</li>
        </ul>

        {/* Copyright */}
        <p className="text-sm text-gray-300">
          Copyright © 2026 Amardeep
        </p>
      </div>


      {/* Scroll to Top Button */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-700 transition"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
}
