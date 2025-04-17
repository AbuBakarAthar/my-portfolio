import { motion } from "framer-motion";

 function Header() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        Luke<span className="text-green-500">.</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-gray-300">
        {["Home", "Services", "Resume", "Work", "Contact"].map((item, index) => (
          <motion.li
            key={index}
            className="relative cursor-pointer hover:text-white"
            whileHover={{ scale: 1.1 }}
          >
            {item}
            {item === "Home" && (
              <motion.div
                className="absolute left-0 w-full h-0.5 bg-green-500 mt-1"
                layoutId="underline"
              />
            )}
          </motion.li>
        ))}
      </ul>

      {/* Hire Me Button */}
      <motion.button
        className="bg-green-500 text-black px-4 py-2 rounded-full font-semibold shadow-md hidden md:block"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Hire Me
      </motion.button>
    </nav>
  );
}
export default  Header;