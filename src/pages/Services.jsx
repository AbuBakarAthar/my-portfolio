import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaLaptopCode,
  FaBullhorn,
  FaRobot,
  FaMobileAlt,
  FaGlobe,
  FaPaintBrush,
  FaFacebook,
  FaVideo,
  FaComments,
  FaChartLine
} from "react-icons/fa";

const services = [
  {
    title: "Web & Mobile Development",
    description: "Full-stack development for web and mobile apps using modern tech.",
    icon: <FaLaptopCode />,
    skills: [
      { name: "React/Next.js", icon: <FaGlobe className="text-blue-400" /> },
      { name: "React Native", icon: <FaMobileAlt className="text-purple-400" /> },
      { name: "Node.js Backends", icon: <FaLaptopCode className="text-green-400" /> },
      { name: "UI/UX Design", icon: <FaPaintBrush className="text-pink-400" /> }
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Digital Marketing",
    description: "Strategies to boost online presence & customer engagement.",
    icon: <FaBullhorn />,
    skills: [
      { name: "Social Media Marketing", icon: <FaFacebook className="text-blue-600" /> },
      { name: "Content Creation", icon: <FaPaintBrush className="text-yellow-400" /> },
      { name: "Video Marketing", icon: <FaVideo className="text-red-400" /> },
      { name: "SEO Optimization", icon: <FaChartLine className="text-green-400" /> }
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "AI Solutions",
    description: "AI-powered solutions to automate and enhance workflows.",
    icon: <FaRobot />,
    skills: [
      { name: "Chatbot Development", icon: <FaComments className="text-purple-400" /> },
      { name: "Machine Learning", icon: <FaRobot className="text-blue-400" /> },
      { name: "Data Analysis", icon: <FaChartLine className="text-green-400" /> },
      { name: "Process Automation", icon: <FaLaptopCode className="text-red-400" /> }
    ],
    color: "from-purple-500 to-violet-500"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const skillItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.4
    }
  })
};

const ServicesSection = () => (
  <section
    id="services"
    className="relative bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
  >
    {/* Background Blurred Circles (From Skills Component) */}
    <motion.div
      className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.05 }}
      transition={{ duration: 2 }}
    >
      {["bg-green-500", "bg-blue-500", "bg-purple-500"].map((bg, idx) => (
        <div
          key={idx}
          className={`absolute rounded-full filter blur-3xl ${bg}`}
          style={{
            top: `${idx * 30 + 10}%`,
            left: `${(idx % 2 === 0 ? 25 : 50)}%`,
            width: `${idx === 1 ? 160 : 128}px`,
            height: `${idx === 1 ? 160 : 128}px`
          }}
        />
      ))}
    </motion.div>

    {/* Header */}
    <motion.div
      className="text-center mb-16 relative z-10"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        My Services
      </h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        Solutions tailored to your business needs — development, marketing, and AI.
      </p>
    </motion.div>

    {/* Services Grid */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {services.map(({ title, description, icon, skills, color }, index) => (
        <motion.div key={index} variants={cardVariants}>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="h-full">
            <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-green-500/30 transition-all duration-300 h-full flex flex-col shadow-lg">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
              />
              <div className="p-8 flex-1 flex flex-col">
                <motion.div
                  className={`w-16 h-16 mb-6 rounded-lg flex items-center justify-center bg-gradient-to-br ${color} text-white text-2xl`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  {icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{description}</p>

                <div className="mt-auto">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">
                    Includes:
                  </h4>
                  <ul className="space-y-3">
                    {skills.map((skill, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 text-gray-200"
                        variants={skillItemVariants}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-lg">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.button
                  className={`bg-gradient-to-r ${color} text-white px-6 py-2 rounded-lg font-medium pointer-events-auto`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </Tilt>
        </motion.div>
      ))}
    </motion.div>

    {/* CTA Button */}
    <motion.div
      className="text-center mt-20 relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.a
        href="#contact"
        className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">Get Started With My Services</span>
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </motion.a>
    </motion.div>
  </section>
);

export default ServicesSection;
