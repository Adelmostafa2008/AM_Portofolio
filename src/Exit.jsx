import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Exit() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 md:py-32 flex items-center">
      {/* Background signature */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[80vw] md:text-[45vw] font-black leading-none tracking-[-0.15em] text-white/[0.025]">
          AM
        </span>
      </div>

      {/* Section number */}
      <div className="absolute top-8 right-8 md:top-10 md:right-12 text-xs tracking-[0.25em] text-neutral-600">
        06 / 06
      </div>

      <div className="relative max-w-7xl w-full mx-auto">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-10"
        >
          The Introduction
        </motion.p>

        {/* First statement */}
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-[clamp(3rem,13.3vw,12rem)] leading-[0.8] font-black tracking-[-0.065em] uppercase break-words"
        >
          THE
          <br />
          INTRO
          <br />
          <span className="text-neutral-600">IS OVER.</span>
        </motion.h2>

        {/* Final punch */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-24 md:mt-32"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-600 mb-8">
            What's next?
          </p>

          <h3 className="text-[clamp(3rem,12.2vw,11rem)] leading-[0.82] font-black tracking-[-0.06em] uppercase">
            SEE YOU
            <br />
            <span className="text-neutral-500">AT WORK.</span>
          </h3>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 border-t border-white/10"
        >
          {/* GitHub */}
          <a
            href="https://github.com/Adelmostafa2008"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between border-b md:border-b-0 md:border-r border-white/10 py-8 md:px-8 transition-colors hover:bg-white/[0.03]"
          >
            <div className="flex items-center gap-4 ">
              <FaGithub
                size={22}
                className="text-neutral-500 group-hover:text-white transition-colors"
              />

              <span className="uppercase tracking-[0.2em] text-sm">GitHub</span>
            </div>

            <ArrowUpRight
              size={20}
              className="text-neutral-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/adel-moatafa-saber-mohamed-7a2705332/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between border-b md:border-b-0 md:border-r border-white/10 py-8 md:px-8 transition-colors hover:bg-white/[0.03]"
          >
            <div className="flex items-center gap-4">
              <FaLinkedin
                size={22}
                className="text-neutral-500 group-hover:text-white transition-colors"
              />

              <span className="uppercase tracking-[0.2em] text-sm">
                LinkedIn
              </span>
            </div>

            <ArrowUpRight
              size={20}
              className="text-neutral-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
            />
          </a>

          {/* Email */}
          <a
            href="mailto:adel.0523035@gmail.com"
            className="group flex items-center justify-between border-b md:border-b-0  border-white/10 py-8 md:px-8 transition-colors hover:bg-white/[0.03]"
          >
            <div className="flex items-center gap-4">
              <Mail
                size={22}
                className="text-neutral-500 group-hover:text-white transition-colors"
              />

              <span className="uppercase tracking-[0.2em] text-sm">
                Email Me
              </span>
            </div>

            <ArrowUpRight
              size={20}
              className="text-neutral-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
            />
          </a>
        </motion.div>

        {/* Tiny signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs uppercase tracking-[0.25em] text-neutral-600"
        >
          <span>ADEL MOSTAFA</span>

          <span>BUILD. LEARN. REPEAT.</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Exit;
