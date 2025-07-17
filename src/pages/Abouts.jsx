import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail, Phone } from "lucide-react";

// Variants for staggered animation
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AboutMe() {
  return (
    <section id="about" className="relative bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Left Text Section */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <motion.h2 
            className="text-sm sm:text-base font-medium text-gray-400 mb-3"
            variants={itemVariant}
          >
            About me
          </motion.h2>
          
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            variants={itemVariant}
          >
            Professional <span className="text-green-500">Problem Solution</span> For
            <br className="hidden sm:block" /> Business Development
          </motion.h1>
          
          <motion.p
            className="text-gray-300 mt-4 mb-6 text-base sm:text-lg"
            variants={itemVariant}
          >
            I offer comprehensive services to businesses including Upwork/Freelancer bidding, profile optimization, client acquisition strategies, LinkedIn outreach, and deal closing.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
            variants={containerVariant}
          >
            {[
              "Upwork Services",
              "Fiverr Services",
              "LinkedIn Services",
              "Business Consultant",
            ].map((service, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                variants={itemVariant}
              >
                <CheckCircle className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">{service}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={containerVariant}
          >
            <motion.div
              className="bg-gray-800/50 hover:bg-gray-800 p-4 rounded-lg flex items-center gap-4 border border-gray-700 hover:border-green-500/30 transition-all duration-300 flex-1"
              variants={itemVariant}
              whileHover={{ y: -3 }}
            >
              <div className="bg-gray-700 p-2 rounded-full">
                <Mail className="text-green-500 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Email Us</p>
                <p className="font-medium text-green-400 text-sm sm:text-base">
                  info@usamaabubakar.com
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-800/50 hover:bg-gray-800 p-4 rounded-lg flex items-center gap-4 border border-gray-700 hover:border-green-500/30 transition-all duration-300 flex-1"
              variants={itemVariant}
              whileHover={{ y: -3 }}
            >
              <div className="bg-gray-700 p-2 rounded-full">
                <Phone className="text-green-500 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Make A Call</p>
                <p className="font-medium text-green-400 text-sm sm:text-base">
                  +92 310 412 2412
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative rounded-xl overflow-hidden aspect-square group">
            <img
              src="/my pic.jpg"
              alt="Abu Bakar"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Floating Badge */}
            <motion.div
              className="absolute bottom-4 left-4 bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src="/my pic.jpg"
                alt="Abu Bakar"
                className="w-6 h-6 rounded-full object-cover"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
              <span className="font-medium text-xs sm:text-sm">Abu Bakar</span>
            </motion.div>

            {/* Border + Overlay */}
            <div className="absolute inset-0 border-2 border-green-500/20 rounded-xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
