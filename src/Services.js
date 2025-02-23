import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

// Service Data with Detailed Descriptions
const services = [
  {
    title: "Mobile App Development",
    description:
      "I specialize in crafting high-performance, cross-platform mobile applications using React Native, Swift, and Kotlin. My work focuses on delivering scalable, user-friendly apps tailored to client needs. Recent projects include an EV charging app with real-time station tracking and a fintech wallet with secure payment features.",
    image: null, // Replace with "/path/to/mobile-app-image.jpg" if available
  },
  {
    title: "API Integration",
    description:
      "I seamlessly integrate REST APIs and GraphQL into mobile apps to enable robust data flow and advanced functionality. My experience includes connecting apps to Firebase for real-time databases, implementing Stripe for payments, and building custom backend solutions to enhance app performance and reliability.",
    image: null,
  },
  {
    title: "UI/UX Optimization",
    description:
      "I enhance user experiences by designing intuitive, responsive interfaces and optimizing app performance for both iOS and Android platforms. Using tools like TailwindCSS and Redux, I ensure smooth navigation and visually appealing designs. Examples include optimizing checkout flows for e-commerce apps and improving accessibility in fintech solutions.",
    image: null,
  },
  {
    title: "Freelance Consulting",
    description:
      "As a freelance mobile developer with 3 years of experience, I provide end-to-end solutions—from ideation and prototyping to deployment and maintenance. I’ve worked with startups and businesses to deliver MVPs, integrate third-party services like biometric authentication, and offer ongoing support to ensure app success in competitive markets.",
    image: null,
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Services() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center md:text-left mb-12">
        <h2 className="text-lg text-gray-500 italic">Services</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          My Specialties
        </h1>
        <p className="mt-2 text-base md:text-lg text-gray-600 max-w-2xl">
          Explore my expertise as a freelance mobile developer, delivering tailored solutions for modern challenges.
        </p>
      </div>

      <div className="space-y-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-6 last:border-b-0 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div
              className="flex justify-between items-center cursor-pointer px-4 group"
              onClick={() => toggleExpand(index)}
            >
              <h3
                className={`text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-200 ${
                  expanded === index ? "text-green-600" : ""
                }`}
              >
                {service.title}
              </h3>
              <span className="text-gray-600 group-hover:text-green-600 transition-colors duration-200">
                {expanded === index ? <FaMinus size={20} /> : <FaPlus size={20} />}
              </span>
            </div>
            {expanded === index && (
              <motion.div
                className="mt-4 px-4 text-gray-600 flex flex-col md:flex-row gap-6"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                {service.image && (
                  <img
                    src={service.image}
                    alt={`${service.title} example`}
                    className="w-32 md:w-48 rounded-md shadow-md object-cover"
                  />
                )}
                <div className="space-y-2">
                  <p className="text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="/contact"
                    className="inline-block mt-2 text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                  >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}