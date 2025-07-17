import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Ripple/Wave component
function Ripple({ x, y, onComplete }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0.4 }}
      animate={{ scale: 4, opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 40,
        height: 40,
        backgroundColor: "#22c55e",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 10,
        filter: "blur(2px)",
      }}
      onAnimationComplete={onComplete}
    />
  );
}

function Header() {
  const menuItems = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SERVICES", link: "#services" },
    { name: "WORK", link: "#projects" },
    { name: "TESTIMONIAL", link: "#testimonials" },
    { name: "CONTACT", link: "#contact" },
  ];

  const [activeLink, setActiveLink] = useState("#home");
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sectionOffsets = menuItems.map((item) => {
        const section = document.querySelector(item.link);
        return {
          link: item.link,
          offsetTop: section?.offsetTop || 0,
        };
      });

      const current = sectionOffsets
        .reverse()
        .find((item) => scrollPosition >= item.offsetTop - 80);

      if (current) {
        setActiveLink(current.link);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = Date.now() + Math.random();
    setRipples((prev) => [...prev, { id, x, y }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 800); // match animation duration
  };

  return (
    <nav className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center fixed w-full z-50">
      {/* Logo */}
      <div className="text-2xl font-bold z-20">
        Abu Bakar<span className="text-green-500">.</span>
      </div>

      {/* Navigation Links */}
      <motion.ul
        className="hidden md:flex space-x-8 text-gray-300 relative z-20"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="relative cursor-pointer transition-colors overflow-hidden"
            onClick={(e) => {
              handleRipple(e);
              setActiveLink(item.link);
              document.querySelector(item.link)?.scrollIntoView({ behavior: "smooth" });
            }}
            onMouseEnter={(e) => handleRipple(e)}
          >
            <a
              href={item.link}
              className={`relative px-2 py-1 z-20 ${
                activeLink === item.link ? "text-white" : "hover:text-white"
              } transition-colors duration-300`}
            >
              {item.name}

              {/* Ripple/Wave Layer */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <AnimatePresence>
                  {ripples.map((ripple) => (
                    <Ripple
                      key={ripple.id}
                      x={ripple.x}
                      y={ripple.y}
                      onComplete={() => {
                        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
                      }}
                    />
                  ))}
                </AnimatePresence>
              </div>

              {/* Green underline for active link */}
              {activeLink === item.link && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-1/2 -translate-x-1/2 h-[2px] w-full bg-green-500 rounded-full"
                  style={{ bottom: -6 }}
                />
              )}
            </a>
          </motion.li>
        ))}
      </motion.ul>

      {/* Hire Me Button */}
      <motion.button
        className="bg-green-500 text-black px-4 py-2 rounded-full font-semibold shadow-md hidden md:block z-20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Hire Me
      </motion.button>
    </nav>
  );
}

export default Header;
