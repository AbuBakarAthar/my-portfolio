import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Ali Raza",
    role: "CEO, TechNova",
    feedback:
      "Working with you was a fantastic experience. The website was delivered on time with amazing quality. I would love to work again!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sara Khan",
    role: "Marketing Manager, Creatix",
    feedback:
      "Your branding and AI chatbot development were top-notch. Our customer interaction has improved drastically. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Doe",
    role: "Freelance Client",
    feedback:
      "Super responsive and professional. My mobile app was built beautifully with great attention to detail. A+++",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const testimonialItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="testimonials"
      ref={ref}
      className="bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-12 md:mb-16"
        >
          <motion.h2
            className="text-sm sm:text-base font-medium text-gray-400 mb-3"
            variants={itemVariants}
          >
            Client Feedback
          </motion.h2>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            variants={itemVariants}
          >
            What My <span className="text-green-500">Clients Say</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 mt-4 mb-6 text-base sm:text-lg max-w-2xl"
            variants={itemVariants}
          >
            I’ve had the privilege to work with incredible clients. Here’s what
            a few of them had to say about their experience working with me.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-gray-800/50 hover:bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-all duration-300 shadow-md"
              whileHover={{ y: -5 }}
              custom={i}
              variants={testimonialItemVariants}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
                />
                <div>
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "{testimonial.feedback}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
