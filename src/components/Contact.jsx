import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto py-20 px-6 text-center scroll-mt-20 transition-colors duration-500"
    >
      {/* Title */}
      <motion.h2
        className="text-3xl font-semibold mb-6 text-accent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-600 dark:text-gray-400 mb-10 transition-colors duration-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Have a project in mind or just want to say hello? Let’s connect!
      </motion.p>

      {/* Form */}
      <motion.form
        className="flex flex-col space-y-4"
        onSubmit={(e) => e.preventDefault()}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="bg-gray-100 dark:bg-[#1E293B] text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="bg-gray-100 dark:bg-[#1E293B] text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-500"
        />
        <textarea
          placeholder="Your Message"
          className="bg-gray-100 dark:bg-[#1E293B] text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent h-32 transition-colors duration-500"
        />

        {/* Tombol */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-white font-semibold py-3 rounded-full shadow-md hover:shadow-accent/40 transition-all duration-300"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Decorative Glow */}
      <div className="absolute -z-10 left-1/2 -translate-x-1/2 bottom-10 w-[400px] h-[200px] bg-cyan-400/10 dark:bg-cyan-500/10 blur-[100px] rounded-full"></div>
    </section>
  );
};

export default Contact;
