import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaPhp,
  FaPython,
  FaLaravel,
} from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { SiTailwindcss, SiVite } from "react-icons/si";

const skills = [
  { name: "React", level: 70, icon: <FaReact className="text-sky-400" /> },
  {
    name: "Tailwind CSS",
    level: 40,
    icon: <SiTailwindcss className="text-sky-300" />,
  },
  {
    name: "JavaScript",
    level: 80,
    icon: <FaJsSquare className="text-yellow-400" />,
  },
  { name: "Node.js", level: 70, icon: <FaNodeJs className="text-green-500" /> },
  { name: "HTML5", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Git", level: 80, icon: <FaGitAlt className="text-red-500" /> },
  {
    name: "TypeScript",
    level: 40,
    icon: <FaJsSquare className="text-blue-500" />,
  },
  { name: "PHP", level: 80, icon: <FaPhp className="text-blue-500" /> },
  { name: "Laravel", level: 80, icon: <FaLaravel className="text-blue-500" /> },
  {
    name: "CodeIgniter",
    level: 80,
    icon: <DiCodeigniter className="text-blue-500" />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto py-20 px-6 text-center scroll-mt-20
      transition-colors duration-500"
    >
      <motion.h2
        className="text-3xl font-semibold mb-12 text-accent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl shadow-lg flex flex-col items-start space-y-4
            hover:shadow-accent/30 transition-all duration-300
            bg-gray-100 dark:bg-[#1E293B]"
          >
            {/* Header */}
            <div className="flex items-center space-x-3">
              <div className="text-4xl">{skill.icon}</div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 transition-colors duration-500">
                {skill.name}
              </h3>
            </div>

            {/* Progress bar background */}
            <div className="w-full bg-gray-300 dark:bg-gray-700/50 rounded-full h-3 mt-2 overflow-hidden transition-colors duration-500">
              <motion.div
                className="bg-accent h-3 rounded-full shadow-[0_0_10px_2px_rgba(56,189,248,0.5)]"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>

            {/* Level label */}
            <p className="text-sm text-gray-600 dark:text-gray-400 text-right w-full transition-colors duration-500">
              {skill.level}%
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
