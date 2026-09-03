import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const arsenal = [
  {
    number: "01",
    title: "FRONTEND",
    tools: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "BACKEND",
    tools: ["ASP.NET Core", "REST APIs", "Entity Framework Core"],
  },
  {
    number: "03",
    title: "DATA",
    tools: ["MySQL", "SQL", "Database Design"],
  },
  {
    number: "04",
    title: "TOOLS",
    tools: ["Git", "GitHub", "Postman", "Vercel"],
  },
];

function Arsenal() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 md:py-32">

      {/* Section number */}
      <div className="absolute top-8 right-8 md:top-10 md:right-12 text-xs tracking-[0.25em] text-neutral-600">
        04 / 06
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
          <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-8">
            The Arsenal
          </p>

          <h2 className="text-[clamp(2.2rem,11.8vw,12rem)] leading-[0.78] font-black tracking-[-0.07em] uppercase">
            THESE ARE
            <br />

            <span className="text-neutral-600">
              THE WEAPONS.
            </span>
          </h2>

          <p className="mt-12 max-w-2xl text-lg md:text-xl text-neutral-400 leading-relaxed">
            I don't collect technologies like trophies. I learn the tools
            I need to take an idea, build the damn thing, and make it work.
          </p>
        </motion.div>


        {/* Arsenal list */}
        <div className="mt-24 border-t border-white/10">

          {arsenal.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-6 md:gap-10 border-b border-white/10 py-10 md:py-14 cursor-default"
            >

              {/* Number */}
              <span className="text-sm tracking-[0.25em] text-neutral-600 group-hover:text-white transition-colors duration-300">
                {item.number}
              </span>


              {/* Category */}
              <div>
                <h3 className="text-[clamp(2.7rem,9.4vw,4.5rem)] font-black tracking-[-0.06em] uppercase text-neutral-200 transition-all duration-300 group-hover:translate-x-3 group-hover:text-white">
                  {item.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-sm md:text-base uppercase tracking-wider text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>


              {/* Arrow */}
              <div className="hidden md:flex items-start justify-end">
                <ArrowUpRight
                  size={28}
                  className="text-neutral-700 transition-all duration-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>

            </motion.div>
          ))}

        </div>


        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-24 md:mt-32 border-l border-white/20 pl-8"
        >

          <p className="max-w-3xl text-2xl md:text-4xl font-medium leading-tight text-neutral-300">
            The tools change.
            <br />

            <span className="text-white font-black">
              The mission doesn't.
            </span>
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default Arsenal;