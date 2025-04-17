import { motion } from "framer-motion";

const services = [
  {
    title: "Development",
    description:
      "Are you interested in the great Development Service? Let's make it a reality.",
    icon: "👨‍💻",
    skills: ["Android App", "iOS App", "Web App", "Website"],
  },
  {
    title: "Marketing ",
    description:
      "Are you interested in the great Graphic Design Service? Let's make it a reality.",
    icon: "🎨",
    skills: ["Graphics", "Facebook Marketing", "Video Editing"],
  },
  {
    title: "AI Services",
    description:
      "Are you interested in the great Video Editing Service? Let's make it a reality.",
    icon: "🎬",
    skills: ["AI chatbot", "Datascience"],
  },
];

 function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What I can do?</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Since the beginning of my journey, I've collaborated with diverse
          clients, offering a broad spectrum of services including development,
          Graphic Design, Video Editing, Social Media Management, Digital
          Marketing, and Tutoring.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-400 mt-2">{service.description}</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                {service.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    🚀 {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default  ServicesSection;