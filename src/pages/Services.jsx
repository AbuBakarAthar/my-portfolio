import { motion } from "framer-motion";

const services = [
  {
    title: "Development",
    description: "Comprehensive development solutions for web and mobile platforms with cutting-edge technologies.",
    icon: "👨‍💻",
    skills: ["Android App", "iOS App", "Web App", "Website"],
    color: "text-green-400"
  },
  {
    title: "Marketing",
    description: "Creative marketing strategies to elevate your brand and reach your target audience effectively.",
    icon: "🎨",
    skills: ["Graphics", "Facebook Marketing", "Video Editing"],
    color: "text-blue-400"
  },
  {
    title: "AI Services",
    description: "Advanced AI solutions including chatbots and data science implementations for your business needs.",
    icon: "🎬",
    skills: ["AI chatbot", "Datascience"],
    color: "text-purple-400"
  },
];

function ServicesSection() {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            What I Can Do?
          </motion.h2>
          <motion.p
            className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Offering a comprehensive range of services including development, marketing, and AI solutions to bring your digital vision to life.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 hover:bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`text-5xl mb-4 ${service.color}`}>{service.icon}</div>
              <h3 className={`text-xl font-semibold mb-3 ${service.color}`}>{service.title}</h3>
              <p className="text-gray-300 mb-5 flex-grow">{service.description}</p>
              
              <div className="mt-auto">
                <h4 className="text-sm font-medium text-gray-400 mb-2">Services Include:</h4>
                <ul className="space-y-2">
                  {service.skills.map((skill, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-center gap-2 text-gray-300 text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-green-400">→</span> {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;