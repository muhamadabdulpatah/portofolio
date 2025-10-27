import { motion } from "framer-motion";
import profile from "../assets/profile.png"; // ganti dengan foto kamu di folder src/assets

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto py-20 px-6 scroll-mt-20">
      <motion.h2
        className="text-3xl font-semibold text-accent text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Gambar Profil */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative w-56 h-56 md:w-60 md:h-80 rounded-3xl overflow-hidden shadow-lg shadow-accent/10">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 to-transparent"></div>
          </div>
        </motion.div>

        {/* Deskripsi */}
        <motion.div
          className="space-y-6 text-gray-300 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white">
            Hi, I’m <span className="text-accent">Muhamad Abdul Patah</span> 👋
          </h3>
          <p className="leading-relaxed text-gray-400">
            a passionate{" "}
            <span className="text-accent">Full Stack Developer</span> with over
            6 years of experience in building and maintaining web-based systems.
            I specialize in
            <span className="text-accent">
              {" "}
              Laravel, CodeIgniter, React.js
            </span>{" "}
            and
            <span className="text-accent"> JavaScript</span>, with strong
            expertise in backend architecture, API integration, and responsive
            front-end development.
          </p>
          <p className="leading-relaxed text-gray-400">
            I love transforming business requirements into efficient,
            user-friendly solutions — from designing scalable systems to
            deploying production-ready apps. As a fast learner and proactive
            problem solver, I’m always exploring new technologies to enhance
            productivity and deliver better user experiences. Currently, I’m
            leading a team as IT Programmer Supervisor at Inti Surya
            Laboratorium, focusing on improving internal systems, automation,
            and scalable software solutions.
          </p>

          <div className="pt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-accent text-black font-medium py-3 px-6 rounded-full shadow-md hover:shadow-accent/30 transition-all"
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
