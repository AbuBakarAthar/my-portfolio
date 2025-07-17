import { motion } from "framer-motion";
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaWhatsapp, 
  FaGithub, 
  FaTiktok, 
  FaBehance,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const socialLinks = [
  { icon: FaFacebook, color: "hover:text-blue-500", name: "Facebook" },
  { icon: FaInstagram, color: "hover:text-pink-500", name: "Instagram" },
  { icon: FaLinkedin, color: "hover:text-blue-400", name: "LinkedIn" },
  { icon: FaYoutube, color: "hover:text-red-500", name: "YouTube" },
  { icon: FaWhatsapp, color: "hover:text-green-500", name: "WhatsApp" },
  { icon: FaGithub, color: "hover:text-gray-300", name: "GitHub" },
  { icon: FaTiktok, color: "hover:text-black hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500", name: "TikTok" },
  { icon: FaBehance, color: "hover:text-blue-600", name: "Behance" },
];

const footerLinks = [
  { title: "Home", href: "#" },
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Work", href: "#projects" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "Contact", href: "#contact" },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-green-500 filter blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 rounded-full bg-blue-500 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 h-28 rounded-full bg-purple-500 filter blur-3xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Contact Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's Build Something Amazing
          </motion.h2>
          
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-8 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3">
              <FaEnvelope className="text-green-400 text-xl" />
              <span>hello@example.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FaPhone className="text-green-400 text-xl" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt className="text-green-400 text-xl" />
              <span>San Francisco, CA</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href="#"
                className={`text-gray-400 text-2xl p-3 rounded-full transition-all ${social.color} hover:bg-gray-800 hover:scale-110`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                aria-label={social.name}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          viewport={{ once: true }}
        >
          {footerLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors relative group"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.05 }}
              viewport={{ once: true }}
            >
              {link.title}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright & Back to Top */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top
            <span className="bg-gray-800 group-hover:bg-green-500 p-2 rounded-full transition-all duration-300">
              <FiArrowUp className="group-hover:animate-bounce" />
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute bottom-10 right-10 w-12 h-12 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-20 left-10 w-8 h-8 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30"
        animate={{
          y: [0, 10, -5, 0],
          x: [0, 5, -5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </footer>
  );
}

export default Footer;