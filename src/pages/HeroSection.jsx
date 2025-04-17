import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function HeroSection() {
    return (
        <section className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6 md:px-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="text-center md:text-left max-w-lg">
                    <p className="text-sm text-gray-400">Software Developer</p>
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold leading-tight mt-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Hello I'm <br />
                        <span className="text-green-500">Abu Bakar</span>
                    </motion.h1>
                    <p className="text-gray-300 mt-4">
                        I excel at crafting elegant digital experiences and am proficient in various programming languages and technologies.
                    </p>

                    {/* Download CV & Social Icons */}
                    <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
                        <motion.a
                            href="#"
                            className="flex items-center gap-2 bg-green-500 text-black px-6 py-2 rounded-full font-semibold shadow-md hover:bg-green-600 transition"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaDownload /> Download CV
                        </motion.a>
                        <div className="flex space-x-4 text-gray-400">
                            <a href="#" className="hover:text-white">
                                <FaGithub size={24} />
                            </a>
                            <a href="#" className="hover:text-white">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="#" className="hover:text-white">
                                <FaTwitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Image with Animated Border */}
                <div className="relative">
                    <motion.img
                        src="/images/profile.png" // Replace with actual image path
                        alt="Luke Coleman"
                        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-gray-700 shadow-lg"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    {/* Animated Circular Border */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full border-4 border-green-500 rounded-full opacity-50"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>

            {/* Stats Section - Positioned Below */}
            <div className="mt-16 flex flex-wrap justify-center gap-12 w-full px-6 text-center">
                {[
                    { number: "12", label: "Years of experience" },
                    { number: "26", label: "Projects completed" },
                    { number: "8", label: "Technologies mastered" },
                    { number: "500", label: "Code commits" },
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        className="text-xl md:text-2xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <span className="text-green-500">{stat.number}</span>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Services Button - Centered */}
            <div className="mt-16 w-full flex justify-center">
                <motion.button
                    className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-green-700 rounded-full shadow-lg hover:shadow-xl transition duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Services
                </motion.button>
            </div>
        </section>
    );
}

export default HeroSection;
