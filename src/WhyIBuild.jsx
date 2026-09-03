import { motion } from "framer-motion";

function WhyIBuild() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 py-20 md:px-10 md:py-32">

      {/* Section number */}
      <div className="absolute top-8 right-8 md:top-10 md:right-12 text-xs tracking-[0.25em] text-neutral-600">
        03 / 06
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-8"
        >
          Why I Build
        </motion.p>


        {/* Main statement */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h2 className="text-[clamp(3rem,13.3vw,12rem)] leading-[0.8] font-black tracking-[-0.065em] uppercase break-words">

            I HAVE
            <br />

            <span className="text-neutral-600">
              AN IDEA.
            </span>

            <br />

            I MAKE
            <br />

            IT REAL.

          </h2>
        </motion.div>


        {/* The story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24"
        >

          {/* Left side */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-6">
              The reason
            </p>

            <p className="text-2xl md:text-3xl leading-relaxed text-neutral-300">
              I fell in love with programming when I realized what it
              actually gives me.
            </p>
          </div>


          {/* Right side */}
          <div className="space-y-8 text-neutral-400 text-lg md:text-xl leading-relaxed">

            <p>
              I can take something that exists only inside my head and
              make it real.
            </p>

            <p>
              A machine made of metal and electricity can execute an idea
              exactly the way I tell it to.
            </p>

            <p>
              That feeling never stopped being powerful.
            </p>

          </div>

        </motion.div>


        {/* The philosophy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-24 md:mt-32 border-y border-white/10 py-14 md:py-24"
        >

          <p className="text-xs uppercase tracking-[0.35em] text-neutral-600 mb-8">
            The philosophy
          </p>

          <h3 className="text-[clamp(3rem,13.3vw,12rem)] leading-[0.8] font-black tracking-[-0.065em] uppercase break-words">
            Think.
            <br />

            Build.
            <br />

            <span className="text-neutral-500">
              Make it work.
            </span>
          </h3>

        </motion.div>


        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 max-w-2xl"
        >

          <p className="text-xl md:text-2xl leading-relaxed text-neutral-400">
            No permission. No waiting for someone else to build it for me.
          </p>

          <p className="mt-6 text-xl md:text-2xl leading-relaxed text-white">
            I have an idea.
            <br />
            I build it.
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default WhyIBuild;