import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A clean and modern personal website built with React & Tailwind CSS.",
  },
  {
    title: "E-Commerce UI",
    desc: "A shopping interface with beautiful product cards and smooth animations.",
  },
  {
    title: "Analytics Dashboard",
    desc: "A minimal admin dashboard for data visualization and tracking.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-20 px-6 text-center scroll-mt-20 transition-colors duration-500"
    >
      <motion.h2
        className="text-3xl font-semibold mb-12 text-accent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="
              relative p-[1px] rounded-2xl overflow-hidden shadow-lg
              bg-gradient-to-r from-sky-400/40 to-cyan-500/30 dark:from-sky-500/40 dark:to-cyan-600/30
              hover:shadow-accent/40 transition-all duration-300
            "
          >
            <div
              className="
                bg-white dark:bg-[#1E293B] rounded-2xl p-6 h-full flex flex-col justify-between
                transition-colors duration-500
              "
            >
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 transition-colors duration-500">
                  {proj.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-500">
                  {proj.desc}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
              >
                View Details →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
