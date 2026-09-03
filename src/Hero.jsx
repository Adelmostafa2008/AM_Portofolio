import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

function Hero() {
    return (
    <section className="relative min-h-screen overflow-hidden flex items-center px-6 py-10">

      {/* Background signature */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[45vw] font-black tracking-[-0.15em] text-white/[0.025]">
          AM
        </span>
      </div>

      {/* Section number */}
      <div className="absolute top-8 right-8 md:top-10 md:right-12 text-xs tracking-[0.25em] text-neutral-600">
        01 / 06
      </div>

      <div className="relative max-w-7xl w-full mx-auto flex flex-col">

        {/* My name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-sm md:text-base tracking-[0.4em] uppercase text-neutral-400">
            Adel Mostafa
          </p>

          <p className="mt-2 text-[10px] md:text-xs tracking-[0.25em] uppercase text-neutral-600">
            Full-Stack Developer
          </p>
        </motion.div>

        {/* Main statement */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-[clamp(2.7rem,12.2vw,11rem)] leading-[0.82] font-black tracking-[-0.06em] uppercase"
        >
          I BUILD
          <br />
          SH!T THAT
          <br />
          WORKS.
        </motion.h1>

        {/* Bottom area */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-auto pt-10 flex items-center gap-4 text-neutral-500"
        >
          <span className="uppercase tracking-[0.25em] text-xs">
            Don't believe me?
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;