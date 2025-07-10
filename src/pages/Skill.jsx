import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const skills = [
  { name: "Upwork", level: "99%", icon: "/icons/upwork.png" },
  { name: "Freelancer", level: "80%", icon: "/icons/freelancer.png" },
  { name: "LinkedIn", level: "84%", icon: "/icons/linkedin.png" },
  { name: "Fiverr", level: "95%", icon: "/icons/fiverr.png" },
  { name: "GlassDoor", level: "84%", icon: "/icons/glassdoor.png" },
  { name: "Wellfound", level: "90%", icon: "/icons/wellfound.png" },
  { name: "AI", level: "95%", icon: "/icons/ai.png" },
  { name: "Remote Jobs", level: "88%", icon: "/icons/remote.png" },
];

const services = [
  {
    title: "Web Development",
    description: "Profile optimization, bidding strategy, job management, and client communication on Upwork platform."
  },
  {
    title: "Website Maintenance",
    description: "Gig creation, keyword research, customer handling, and top-rated seller strategies."
  },
  {
    title: "AI Development",
    description: "Lead generation, connection building, InMail strategy, and profile growth techniques."
  },
  {
    title: "Marketing Services",
    description: "Guiding startups and freelancers with personalized strategies to scale operations and close more deals."
  }
];

export default function SkillsExperience() {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <motion.h2 
            className="text-sm sm:text-base font-medium text-gray-400 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            My Skills
          </motion.h2>
          
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Let's Explore Popular <span className="text-green-500">Skills & Experience</span>
          </motion.h1>
          
          <motion.p
            className="text-gray-300 mt-4 mb-6 text-base sm:text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Comprehensive expertise across all major freelancing platforms including Upwork, Freelancer, LinkedIn, Fiverr, and remote job platforms like GlassDoor and WellFound.
          </motion.p>

          <motion.button
            className="mt-6 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full flex items-center gap-2 font-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Contact <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-gray-800/50 hover:bg-gray-800 p-4 sm:p-5 rounded-lg flex flex-col items-center text-center border border-gray-700 hover:border-green-500/30 transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + (i * 0.05) }}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="h-10 w-10 sm:h-12 sm:w-12 mb-3 object-contain" 
                loading="lazy"
              />
              <h3 className="font-medium text-white mb-2 text-sm sm:text-base">{skill.name}</h3>
              <div className="bg-black/70 text-green-400 px-3 py-1 rounded-full font-bold text-xs sm:text-sm">
                {skill.level}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Services
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/50 hover:bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-all duration-300"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + (index * 0.1) }}
              >
                <h3 className="text-xl font-semibold text-green-400 mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}