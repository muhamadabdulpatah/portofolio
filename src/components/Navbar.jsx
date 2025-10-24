import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b
        ${theme === "dark" ? "border-gray-800 bg-[#0F172A]/60" : "border-gray-200 bg-white/70"}
        transition-all duration-500 shadow-sm`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text select-none cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 160 160"
            role="img"
            aria-labelledby="titleB"
          >
            <title id="titleB">MAP badge</title>
            <circle cx="80" cy="80" r="72" fill="#06B6D4" />
            <g fill="#0F172A">
              <path d="M34 104 L34 56 L46 56 L62 92 L78 56 L92 56 L92 104 L80 104 L80 78 L66 104 L54 78 L54 104 Z" />
              <path d="M100 56h22c8 0 14 6 14 14s-6 14-14 14H100V56zm0 28h22c4 0 8-4 8-8s-4-8-8-8H100v16z" />
            </g>
          </svg>
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              className={`relative font-medium text-sm transition-colors duration-300
                ${theme === "dark" ? "text-gray-300 hover:text-accent" : "text-gray-700 hover:text-accent"}`}
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full border transition-all duration-300
              ${
                theme === "dark"
                  ? "border-gray-700 hover:bg-gray-800"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-700" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-accent focus:outline-none p-2 rounded-lg hover:bg-accent/10 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden border-t ${
              theme === "dark"
                ? "border-gray-800 bg-[#0F172A]/90"
                : "border-gray-200 bg-white/90"
            } backdrop-blur-lg px-6 py-4 space-y-4 flex flex-col items-center shadow-lg`}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.05 }}
                className={`block text-base font-medium transition-colors duration-300
                  ${
                    theme === "dark"
                      ? "text-gray-300 hover:text-accent"
                      : "text-gray-700 hover:text-accent"
                  }`}
              >
                {link.name}
              </motion.a>
            ))}

            {/* Toggle inside menu */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className={`mt-4 p-2 rounded-full border transition-all duration-300
                ${
                  theme === "dark"
                    ? "border-gray-700 hover:bg-gray-800"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
            >
              {theme === "dark" ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
