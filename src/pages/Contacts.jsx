import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaGithub, FaTiktok, FaBehance } from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebook, color: "hover:text-blue-600", name: "Facebook", url: "https://www.facebook.com/bakar.athar" },
  { icon: FaInstagram, color: "hover:text-pink-500", name: "Instagram", url: "https://www.instagram.com/abu5873bakar?igsh=MWdja3YyNmxvMHc4bw==" },
  { icon: FaLinkedin, color: "hover:text-blue-400", name: "LinkedIn", url: "https://www.linkedin.com/in/abu-bakar-athar-98b722242?" },
  { icon: FaYoutube, color: "hover:text-red-500", name: "YouTube", url: "https://youtube.com/@softsincs" },
  { icon: FaWhatsapp, color: "hover:text-green-500", name: "WhatsApp", url: "https://wa.me/923098506598" },
  { icon: FaGithub, color: "hover:text-gray-300", name: "GitHub", url: "https://github.com/AbuBakarAthar" },
  
];

function Contacts() {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Connect with me through these platforms to discuss your project or inquire about my services.
          </motion.p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          className="w-full max-w-3xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 sm:p-8 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ y: -5 }}
        >
          <div className="text-center">
            <motion.h3
              className="text-2xl sm:text-3xl font-semibold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Let's Work Together!
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              I'm ready to bring your ideas to life with professional digital solutions.
            </motion.p>

            {/* Get Started Button */}
            <motion.a
              href="#"
              className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Get Started
            </motion.a>

            {/* Divider */}
            <motion.div
              className="my-8 border-t border-gray-700"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            />

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 text-2xl p-2 rounded-full transition-colors ${social.color}`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8 + index * 0.1 }}
                    aria-label={social.name}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contacts;
