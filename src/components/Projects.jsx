import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A clean and modern personal website built with React & Tailwind CSS.",
  },
  {
    title: "IFAMS – Integrated Field Activity Monitoring System",
    desc: "A web and mobile-based platform developed for Samora Group to monitor real-time field activities.Built using Laravel, React.js, and API-driven architecture to synchronize data across field and office environments.",
  },
  {
    title: "YMC1 & YMC2 – Canvassing Application for Yakult",
    desc: "Developed canvassing tools to digitize sales operations and reporting for Yakult field agents, integrating offline data sync and real-time monitoring dashboards.",
  },
  {
    title: "Knowledge Management System – PT. Maybank Indonesia Finance",
    desc: "Created an enterprise system for internal knowledge sharing, including document management, user access control, and full-text search features.",
  },
  {
    title: "Smartshare Learning Center – PT. Bank Tabungan Negara (BTN)",
    desc: "Developed an internal e-learning portal with structured content delivery and user progress tracking.",
  },
  {
    title: "Document & Policy Management System – PT. BFI Finance Indonesia",
    desc: "Implemented a secure, centralized platform for storing and managing corporate documents and policies.",
  },
  {
    title: "Corporate Secretary System – PT. BFI Finance Indonesia",
    desc: "A compliance-focused application that helps manage corporate governance documentation efficiently.",
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
