import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6
      bg-gradient-to-b from-white to-gray-100 dark:from-[#0F172A] dark:to-[#1E293B]
      transition-colors duration-500"
    >
      {/* Teks Utama */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6
        text-gray-900 dark:text-white transition-colors duration-500"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m{" "}
        <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Muhamad Abdul Patah
        </span>
      </motion.h1>

      {/* Typing Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <TypeAnimation
          sequence={[
            "Full Stack Developer 💻",
            2000,
            "Backend & Frontend Engineer ⚙️",
            2000,
            "Laravel • CodeIgniter • React.js 🚀",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-medium transition-colors duration-500"
        />
      </motion.div>

      {/* Deskripsi singkat */}
      <motion.p
        className="max-w-xl text-gray-600 dark:text-gray-400 mt-6 leading-relaxed transition-colors duration-500"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        I build efficient, scalable, and user-friendly web applications with
        clean architecture and reliable functionality. My focus is on developing
        responsive interfaces and robust backend systems using Laravel,
        CodeIgniter, and React.js to deliver seamless user experiences and
        optimized performance.
      </motion.p>

      {/* Tombol CTA */}
      <motion.div
        className="flex space-x-4 mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <a
          href="#projects"
          className="bg-accent text-black dark:text-white px-6 py-3 rounded-full font-medium
          hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] hover:scale-105
          transition-all duration-300"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-accent text-accent px-6 py-3 rounded-full font-medium
          hover:bg-accent hover:text-black dark:hover:text-white transition-all duration-300"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Subtle Glow */}
      <div className="absolute bottom-0 w-[600px] h-[200px] bg-cyan-400/20 dark:bg-cyan-500/10 blur-[100px] rounded-full transition-all duration-500"></div>
    </section>
  );
};

export default Hero;
