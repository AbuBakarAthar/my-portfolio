import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
 function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-lg shadow-lg text-white px-6 md:px-16 py-4 flex justify-between items-center z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.a
        href="#"
        className="text-2xl font-bold text-blue-400"
        whileHover={{ scale: 1.1 }}
      >
        MyPortfolio
      </motion.a>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-gray-300">
        {["Home", "About", "Services", "Portfolio", "Contact"].map((item, index) => (
          <motion.a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="hover:text-white transition"
            whileHover={{ scale: 1.1 }}
          >
            {item}
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-xl">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 py-6 md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["Home", "About", "Services", "Portfolio", "Contact"].map((item, index) => (
            <a key={index} href={`#${item.toLowerCase()}`} className="text-lg hover:text-blue-400 transition">
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
export default Navbar;
