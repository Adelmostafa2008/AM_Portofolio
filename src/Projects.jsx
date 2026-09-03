import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import questifyImage from "./assets/questify.png";

function Projects() {
  return (
    <section className="relative min-h-screen px-6 py-24 md:py-32 overflow-hidden">

      {/* Section number */}
      <div className="absolute top-8 right-8 md:top-10 md:right-12 text-xs tracking-[0.25em] text-neutral-600">
        02 / 06
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-6">
            The Receipts
          </p>

          <h2 className="text-[clamp(1.6rem,8.8vw,8rem)] font-black tracking-[-0.06em] leading-[0.85] uppercase">
            Talk is cheap.
            <br />
            <span className="text-neutral-600">
              Here's the proof.
            </span>
          </h2>
        </motion.div>


        {/* Project */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-24"
        >

          {/* Project title */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-8">

            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-neutral-600 mb-3">
                Project 01
              </p>

              <h3 className="text-[clamp(2.7rem,6.7vw,6rem)] font-black tracking-[-0.06em] uppercase">
                Questify.
              </h3>
            </div>


            <p className="max-w-md text-neutral-400 leading-relaxed">
              A platform designed to help people build real-world
              professional skills by completing practical tasks and
              gaining hands-on experience.
            </p>

          </div>


          {/* Screenshot */}
          <div className="group relative border border-white/10 overflow-hidden bg-neutral-900">

            <img
              src={questifyImage}
              alt="Questify platform preview"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]"
            />

            <div className="absolute inset-0 border border-white/5 pointer-events-none" />

          </div>


          {/* Project info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Description */}
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-600 mb-4">
                The idea
              </p>

              <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed">
                I wanted to create something beyond tutorials and
                theory , a platform where people can actually practice
                professional skills through realistic tasks.
              </p>
            </div>


            {/* Tech + Links */}
            <div className="flex flex-col md:items-end">

              <div className="flex flex-wrap gap-3 md:justify-end">

                {[
                  "React",
                  ".NET",
                  "MySQL",
                  "Tailwind",
                  "REST API",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="border border-white/10 px-4 py-2 text-xs uppercase tracking-wider text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}

              </div>


              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="https://questify-green.vercel.app/"
                  className="flex items-center gap-2 border border-white px-5 py-3 text-sm uppercase tracking-wider transition hover:bg-white hover:text-black"
                >
                  Live Site
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="https://github.com/Adelmostafa2008/Questify"
                  className="flex items-center gap-2 border border-white/15 px-5 py-3 text-sm uppercase tracking-wider text-neutral-300 transition hover:border-white"
                >
                  GitHub
                  <FaGithub size={16} />
                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Projects;