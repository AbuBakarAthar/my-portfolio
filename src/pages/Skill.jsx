import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  FaCode,
  FaTools,
  FaBrain,
  FaBullhorn,
  FaLinkedin,
  FaGlassCheers,
  FaRobot,
  FaLaptopHouse,
  FaHandshake,
  FaUsers,
  FaProjectDiagram,
  FaCalendarCheck
} from "react-icons/fa";
import { SiUpwork, SiFreelancer, SiWellfound } from "react-icons/si";

const skills = [
  { name: "Upwork", level: "99%", icon: <SiUpwork size={32} className="text-green-400" /> },
  { name: "Freelancer", level: "80%", icon: <SiFreelancer size={32} className="text-green-400" /> },
  { name: "LinkedIn", level: "84%", icon: <FaLinkedin size={32} className="text-green-400" /> },
  { name: "Fiverr", level: "95%", icon: <FaHandshake size={32} className="text-green-400" /> },

]
const businessSkills = [
  { name: "Business Development", level: "Expert", icon: <FaBullhorn size={32} className="text-green-400" /> },
  { name: "Project Management", level: "Advanced", icon: <FaProjectDiagram size={32} className="text-green-400" /> },
  { name: "Team Leadership", level: "Expert", icon: <FaUsers size={32} className="text-green-400" /> },
  { name: "Event Organizer", level: "Pro", icon: <FaCalendarCheck size={32} className="text-green-400" /> },
];

export default function SkillsExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section
      ref={ref}
      className="bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-12 md:mb-16"
        >
          <motion.h2
            className="text-sm sm:text-base font-medium text-gray-400 mb-3"
            variants={itemVariants}
          >
            My Skills
          </motion.h2>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            variants={itemVariants}
          >
            Let's Explore Popular{" "}
            <span className="text-green-500">Skills & Experience</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 mt-4 mb-6 text-base sm:text-lg max-w-2xl"
            variants={itemVariants}
          >
            I have hands-on experience in freelancing platforms, business
            development, project management, and organizing impactful tech
            events — empowering people and solving real-world problems.
          </motion.p>

          <motion.button
            className="mt-6 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full flex items-center gap-2 font-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* Freelancing Skills Grid */}
        <motion.h3
          className="text-xl sm:text-2xl font-semibold mb-4 text-green-400"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          Freelancing Platforms
        </motion.h3>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-gray-800/50 hover:bg-gray-800 p-4 sm:p-5 rounded-lg flex flex-col items-center text-center border border-gray-700 hover:border-green-500/30 transition-all duration-300"
              whileHover={{ y: -5 }}
              custom={i}
              variants={skillItemVariants}
            >
              <div className="mb-3">
                {skill.icon}
              </div>
              <h3 className="font-medium text-white mb-2 text-sm sm:text-base">
                {skill.name}
              </h3>
              <div className="bg-black/70 text-green-400 px-3 py-1 rounded-full font-bold text-xs sm:text-sm">
                {skill.level}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Business & Management Skills */}
        <motion.h3
          className="text-xl sm:text-2xl font-semibold mb-4 text-green-400"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          Business & Management
        </motion.h3>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {businessSkills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-gray-800/50 hover:bg-gray-800 p-4 sm:p-5 rounded-lg flex flex-col items-center text-center border border-gray-700 hover:border-green-500/30 transition-all duration-300"
              whileHover={{ y: -5 }}
              custom={i}
              variants={skillItemVariants}
            >
              <div className="mb-3">
                {skill.icon}
              </div>
              <h3 className="font-medium text-white mb-2 text-sm sm:text-base">
                {skill.name}
              </h3>
              <div className="bg-black/70 text-green-400 px-3 py-1 rounded-full font-bold text-xs sm:text-sm">
                {skill.level}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
