import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaLinkedin, FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-900 text-white">
      
      <motion.p
        className="text-sm sm:text-base text-gray-400 mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        Business Developer & AI Developer
      </motion.p>

      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hello I'm <br />
        <span className=" bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
          Abu Bakar Athar
        </span>
      </motion.h1>

      <motion.p
        className="text-gray-300 mt-4 text-base sm:text-lg max-w-lg mx-auto lg:mx-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        I’m a Business Developer and AI Developer passionate about solving real-world problems through AI. I also organize tech education events to inspire innovation and learning.
      </motion.p>

      {/* Social Buttons */}
      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a
          href="https://www.linkedin.com/in/abu-bakar-athar-98b722242"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm sm:text-base transition"
        >
          <FaLinkedin className="mr-2" /> LinkedIn
        </a>
        <a
          href="https://github.com/AbuBakarAthar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white text-sm sm:text-base transition"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>
      </motion.div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <a
          href="#about"
          className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm sm:text-base font-medium transition duration-300"
        >
          Learn More <FaArrowDown className="ml-2" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
