import { motion } from "framer-motion";

function RoadAhead() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 md:py-32">

      {/* Section number */}
      <div className="absolute top-8 right-8 md:top-10 md:right-12 text-xs tracking-[0.25em] text-neutral-600">
        05 / 06
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
            The Road Ahead
          </p>

          <h2 className="text-[clamp(3.75rem,13.3vw,12rem)] leading-[0.78] font-black tracking-[-0.07em] uppercase">
            I'M NOT
            <br />

            <span className="text-neutral-600">
              DONE.
            </span>
          </h2>
        </motion.div>


        {/* The build-up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-24 max-w-4xl"
        >

          <p className="text-2xl md:text-4xl leading-tight text-neutral-300">
            I don't have decades of experience.
          </p>

          <p className="mt-6 text-2xl md:text-4xl leading-tight text-neutral-500">
            I'm not going to pretend that I do.
          </p>

        </motion.div>


        {/* ONE PROJECT / SO FAR */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-32 md:mt-48"
        >

          <p className="text-xs uppercase tracking-[0.35em] text-neutral-600 mb-6">
            The story so far
          </p>

          <h3 className="text-[clamp(3rem,15.6vw,14rem)] leading-[0.72] font-black tracking-[-0.08em] uppercase">
            ONE
            <br />

            PROJECT.

            <br />

            <span className="text-neutral-600">
              SO FAR.
            </span>
          </h3>

        </motion.div>


        {/* Momentum */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
          }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24"
        >

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-6">
              What matters
            </p>

            <p className="text-2xl md:text-3xl text-neutral-300 leading-relaxed">
              Questify started as an idea.
              <br />
              Then it became a project.
              <br />
              Then it went live.
            </p>
          </div>


          <div className="flex items-end">
            <p className="text-xl md:text-2xl text-neutral-500 leading-relaxed">
              I'm not interested in pretending that I've already built
              everything.
              <br />
              <br />
              I'm interested in finding the next problem worth solving.
            </p>
          </div>

        </motion.div>


        {/* The punch */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-32 md:mt-48 border-y border-white/10 py-20 md:py-32"
        >

          <p className="text-xs uppercase tracking-[0.35em] text-neutral-600 mb-10">
            What's next
          </p>

          <h3 className="max-w-6xl text-[clamp(1.95rem,10.6vw,11rem)] leading-[0.78] font-black tracking-[-0.07em] uppercase">
            THE BEST
            <br />

            PROJECT I'VE
            <br />

            BUILT

            <br />

            <span className="text-neutral-600">
              DOESN'T EXIST
              <br />
              YET.
            </span>
          </h3>

        </motion.div>


        {/* Final line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 max-w-3xl"
        >

          <p className="text-2xl md:text-4xl font-medium leading-tight text-neutral-300">
            So no.
            <br />

            <span className="font-black text-white">
              I'm not done.
            </span>
          </p>

          <p className="mt-8 text-xl md:text-2xl text-neutral-500">
            I'm just getting started.
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default RoadAhead;