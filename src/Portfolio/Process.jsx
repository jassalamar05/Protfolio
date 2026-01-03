import { NotebookPen, BarChart3, Pencil, Rocket } from "lucide-react";

export default function WorkProcess() {
  return (
    <section className=" bg-gray-100 py-5 px-6 lg:mt-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-violet-700 pt-5 py-5">
            Work Process
          </h2>

          <p className="text-gray-600 leading-7  max-w-xl lg:py-10">
            Driven by design and powered by code, I create digital interfaces
            that feel intuitive and perform seamlessly. Every layout,
            animation, and component is crafted with intention — merging
            usability with visual clarity.
          </p>

          <p className="text-gray-600 leading-7 max-w-xl">
            I blend clean design with efficient code to build engaging,
            user-friendly web experiences that stand out.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:bg-violet-300 transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-6">
              <NotebookPen size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">1. Research</h3>
            <p className="text-gray-600 leading-7">
              Design meets function in every pixel, blending clarity with
              intuitive motion.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:bg-violet-300 transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-6">
              <BarChart3 size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">2. Analyze</h3>
            <p className="text-gray-600 leading-7">
              Crafting clean, thoughtful interfaces where form flows seamlessly
              into function and clarity.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:bg-violet-300 transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-6">
              <Pencil size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">3. Design</h3>
            <p className="text-gray-600 leading-7">
              I design seamless digital experiences focused on usability,
              consistency, and aesthetics.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:bg-violet-300 transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-6">
              <Rocket size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">4. Launch</h3>
            <p className="text-gray-600 leading-7">
              Delivering high-quality, scalable products ready for real-world
              performance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
