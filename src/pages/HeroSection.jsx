import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter, FaCode, FaProjectDiagram, FaClock, FaDatabase } from "react-icons/fa";

function HeroSection() {
    return (
        <section className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24 py-12">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
                {/* Left Content - Full width on mobile, 60% on desktop */}
                <div className="w-full lg:w-[58%] text-center lg:text-left">
                    <motion.p 
                        className="text-sm sm:text-base text-gray-400 mb-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        Software Developer
                    </motion.p>
                    
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Hello I'm <br />
                        <span className="text-green-500 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                            Abu Bakar
                        </span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-gray-300 mt-4 text-base sm:text-lg max-w-lg mx-auto lg:mx-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        I craft elegant digital experiences with cutting-edge technologies and pixel-perfect designs.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div 
                        className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                    >
                        <motion.a
                            href="#"
                            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium sm:font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <FaDownload className="text-sm sm:text-base" /> 
                            <span className="text-sm sm:text-base">Download CV</span>
                        </motion.a>
                        
                        <div className="flex space-x-4 sm:space-x-5">
                            {[
                                { icon: <FaGithub size={18} className="sm:w-5 sm:h-5" />, color: "hover:text-gray-200" },
                                { icon: <FaLinkedin size={18} className="sm:w-5 sm:h-5" />, color: "hover:text-blue-400" },
                                { icon: <FaTwitter size={18} className="sm:w-5 sm:h-5" />, color: "hover:text-sky-400" },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    className={`text-gray-400 transition-colors ${social.color}`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Image - Full width on mobile, 40% on desktop */}
                <motion.div 
                    className="relative w-full lg:w-[42%] flex justify-center mt-10 lg:mt-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                        {/* Profile Image Container */}
                        <motion.div
                            className="w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-xl relative"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            <img
                                src="/my pic.jpg"
                                alt="Abu Bakar"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </motion.div>
                        
                        {/* Subtle Animated Border */}
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-dashed border-green-500/30 pointer-events-none"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        />
                        
                        {/* Floating Tech Badges */}
                        {[
                            { icon: <FaCode size={14} className="text-green-500" />, position: "top-0 left-0", bg: "bg-gray-800" },
                            { icon: <FaProjectDiagram size={14} className="text-blue-400" />, position: "top-0 right-0", bg: "bg-gray-800" },
                            { icon: <FaClock size={14} className="text-yellow-400" />, position: "bottom-0 left-0", bg: "bg-gray-800" },
                            { icon: <FaDatabase size={14} className="text-purple-400" />, position: "bottom-0 right-0", bg: "bg-gray-800" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className={`absolute ${item.position} ${item.bg} p-2.5 rounded-full shadow-md`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ 
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 15,
                                    delay: 0.5 + (index * 0.1)
                                }}
                                whileHover={{ scale: 1.1 }}
                            >
                                {item.icon}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Stats Section - Responsive Grid */}
            <motion.div 
                className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                {[
                    { number: "12+", label: "Years experience", icon: <FaClock size={16} className="text-green-500" /> },
                    { number: "26+", label: "Projects completed", icon: <FaProjectDiagram size={16} className="text-blue-400" /> },
                    { number: "8+", label: "Technologies", icon: <FaCode size={16} className="text-yellow-400" /> },
                    { number: "500+", label: "Code commits", icon: <FaDatabase size={16} className="text-purple-400" /> },
                ].map((stat, index) => (
                    <div 
                        key={index}
                        className="bg-gray-800/50 p-4 sm:p-5 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-green-500/30 transition-all duration-300"
                    >
                        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                            {stat.icon}
                            <span className="text-xl sm:text-2xl font-bold text-white">{stat.number}</span>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
                    </div>
                ))}
            </motion.div>

            {/* Scroll Down Indicator - Only shows on larger screens */}
            <motion.div 
                className="hidden md:flex flex-col items-center mt-12 lg:mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center"
                >
                    <div className="w-1 h-2 bg-gray-400 rounded-full mt-1" />
                </motion.div>
                <p className="text-gray-400 text-xs mt-2">Scroll Down</p>
            </motion.div>
        </section>
    );
}

export default HeroSection;