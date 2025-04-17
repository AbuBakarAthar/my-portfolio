import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaGithub, FaTiktok, FaBehance } from "react-icons/fa";

 function Contacts
 () {
  return (
    <section className="bg-gradient-to-b from-[#1A0531] to-[#0A011A] text-white py-16 px-6 flex flex-col items-center">
      {/* Title Section */}
      <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>
      <p className="text-gray-400 mt-2">If you want to avail my services you can contact me at the links below.</p>

      {/* Contact Card */}
      <motion.div
        className="mt-10 bg-gray-900/80 backdrop-blur-lg shadow-lg rounded-2xl p-8 w-full max-w-2xl text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold">Let’s try my service now!</h3>
        <p className="text-gray-400 mt-2">Let’s work together and make everything super cute and super useful.</p>

        {/* Get Started Button */}
        <motion.a
          href="#"
          className="mt-4 inline-block bg-blue-400 hover:bg-blue-500 text-black font-semibold px-6 py-2 rounded-full shadow-md transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.a>

        {/* Divider Line */}
        <div className="mt-6 border-t border-gray-600"></div>

        {/* Social Links */}
        <h3 className="mt-6 text-xl font-semibold">Social Links</h3>
        <div className="flex justify-center space-x-4 mt-4">
          {[FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaGithub, FaTiktok, FaBehance].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="text-gray-400 hover:text-white text-2xl transition"
              whileHover={{ scale: 1.2 }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
export default  Contacts;