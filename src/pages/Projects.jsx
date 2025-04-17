import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    image: "/images/project1.png", // Replace with actual image path
    alt: "Burger Website",
  },
  {
    id: 2,
    image: "/images/project2.png", // Replace with actual image path
    alt: "Finance App UI",
  },
];

 function ProjectsSection() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Since the beginning of my journey, I have created digital products for business and consumer use. This is a little bit.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default  ProjectsSection;
