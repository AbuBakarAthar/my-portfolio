import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// Project Data
const projects = [
  {
    id: 1,
    title: "Burger Restaurant Website",
    description: "A modern restaurant website with online ordering system and table reservation features.",
    tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    github: "#",
    live: "#",
    imageId: "100"
  },
  {
    id: 2,
    title: "Finance Dashboard",
    description: "Comprehensive financial dashboard with real-time analytics and data visualization.",
    tags: ["React", "TypeScript", "Chart.js", "Firebase"],
    github: "#",
    live: "#",
    imageId: "200"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-featured online store with product management and payment integration.",
    tags: ["Next.js", "Node.js", "MongoDB", "PayPal"],
    github: "#",
    live: "#",
    imageId: "300"
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Productivity application with team collaboration features and progress tracking.",
    tags: ["React", "Redux", "Express", "PostgreSQL"],
    github: "#",
    live: "#",
    imageId: "400"
  },
  {
    id: 5,
    title: "Travel Booking System",
    description: "Complete travel booking platform with hotel, flight, and activity reservations.",
    tags: ["Vue.js", "Nuxt", "GraphQL", "Stripe"],
    github: "#",
    live: "#",
    imageId: "500"
  },
  {
    id: 6,
    title: "Health & Fitness Tracker",
    description: "Mobile-first application for tracking workouts, nutrition, and health metrics.",
    tags: ["React Native", "Firebase", "D3.js", "Apple Health"],
    github: "#",
    live: "#",
    imageId: "600"
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: "beforeChildren" }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const overlayVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

const imageHoverVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const ProjectsSection = () => {
  return (
    <section
     id="projects"  // This matches the id used in the navbar
      className="relative bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Animated Circles (Same as Skills Component) */}
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            My Portfolio
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Each project represents a unique challenge and solution. Hover over cards to see details.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative rounded-xl border border-gray-700 hover:border-green-500/30 bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 shadow-lg h-full"
              variants={itemVariants}
              whileHover="hover"
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div className="h-full flex flex-col overflow-hidden">
                  {/* Image */}
                  <div className="overflow-hidden h-48">
                    <motion.img
                      src={`https://picsum.photos/seed/${project.imageId}/600/400`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      variants={imageHoverVariants}
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 flex-1">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-200"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 mt-auto">
                      <motion.a
                        href={project.github}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 3 }}
                      >
                        <FiGithub className="text-lg" />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 3 }}
                      >
                        <FiExternalLink className="text-lg" />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none"
                    initial="hidden"
                    animate="hidden"
                    whileHover="visible"
                    variants={overlayVariants}
                  >
                    <motion.div>
                      <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-200 mb-4">{project.description}</p>
                      <motion.button
                        className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg pointer-events-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View All Projects</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;