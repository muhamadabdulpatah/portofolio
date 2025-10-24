import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-8 border-t border-gray-300 dark:border-gray-800 text-center text-sm transition-colors duration-500"
    >
      <p className="text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-accent">Abdul</span> — Built with{" "}
        <span className="text-red-500">❤️</span> using{" "}
        <span className="font-semibold text-blue-500">React</span> &{" "}
        <span className="font-semibold text-cyan-400">Tailwind CSS</span>
      </p>

      <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
        Designed with passion and precision ✨
      </p>
    </motion.footer>
  );
};

export default Footer;
