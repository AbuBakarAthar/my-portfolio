import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail, Phone } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <motion.h2 
            className="text-sm sm:text-base font-medium text-gray-400 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About me
          </motion.h2>
          
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Professional <span className="text-green-500">Problem Solutions</span> For
            <br className="hidden sm:block" /> Business Development
          </motion.h1>
          
          <motion.p
            className="text-gray-300 mt-4 mb-6 text-base sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            I offer comprehensive services to businesses including Upwork/Freelancer bidding, profile optimization, client acquisition strategies, LinkedIn outreach, and deal closing.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            {[
              "Upwork Services",
              "Fiverr Services",
              "LinkedIn Services",
              "Business Consultant",
            ].map((service, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">{service}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <motion.div
              className="bg-gray-800/50 hover:bg-gray-800 p-4 rounded-lg flex items-center gap-4 border border-gray-700 hover:border-green-500/30 transition-all duration-300 flex-1"
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
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative rounded-xl overflow-hidden aspect-square">
            <img
              src="/my pic.jpg"
              alt="Abu Bakar"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Floating Badge */}
            <motion.div
              className="absolute bottom-4 left-4 bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/my pic.jpg"
                alt="Abu Bakar"
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="font-medium text-xs sm:text-sm">Abu Bakar</span>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 border-2 border-green-500/20 rounded-xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}