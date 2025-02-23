import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

// Experience Data
const experienceData = [
  {
    year: "2022 - Present",
    role: "Mobile Developer",
    company: "Tech Innovate",
    description: "Led development of cross-platform apps using React Native and integrated REST APIs.",
  },
  {
    year: "2021 - 2022",
    role: "Junior Mobile Developer",
    company: "AppWorks",
    description: "Built native iOS and Android apps with Swift and Kotlin, focusing on UI/UX.",
  },
  {
    year: "2020 - 2021",
    role: "Software Intern",
    company: "CodeCraft",
    description: "Assisted in developing mobile prototypes and Firebase integrations.",
  },
];

export default function About() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <motion.div
        className="text-center md:text-left"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900"
          variants={fadeIn}
        >
          About Me
        </motion.h1>
        <motion.h2
          className="mt-2 text-2xl md:text-3xl font-semibold text-green-600"
          variants={fadeIn}
        >
          Chiranjeevi Kumar
        </motion.h2>
        <motion.p
          className="mt-2 text-base md:text-lg text-gray-600 italic"
          variants={fadeIn}
        >
          Mobile Developer based in <span className="font-medium">India</span>
        </motion.p>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-700"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex items-center gap-3" variants={fadeIn}>
          <FaPhone className="text-green-600" />
          <span>+91 7870503085</span>
        </motion.div>
        <motion.div className="flex items-center gap-3" variants={fadeIn}>
          <FaMapMarkerAlt className="text-green-600" />
          <span>India</span>
        </motion.div>
        <motion.div className="flex items-center gap-3" variants={fadeIn}>
          <FaEnvelope className="text-green-600" />
          <span>chiranjeeviraj109@gmail.com</span>
        </motion.div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          className="text-lg font-semibold text-gray-800"
          variants={fadeIn}
        >
          Experience
        </motion.h3>
        <motion.p
          className="mt-2 text-base md:text-lg text-gray-600 max-w-2xl"
          variants={fadeIn}
        >
          Hi! I’m Chiranjeevi Kumar, a passionate mobile developer with 3 years of experience crafting seamless applications for iOS and Android.
        </motion.p>
        <motion.a
          href="/resume.pdf"
          download
          className="mt-4 inline-block px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-300"
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>

        <div className="mt-8 space-y-6">
          {experienceData.map(({ year, role, company, description }) => (
            <motion.div key={role} className="space-y-1" variants={fadeIn}>
              <p className="text-sm text-gray-500">{year}</p>
              <h4 className="text-xl font-semibold text-gray-900">{role}</h4>
              <p className="text-gray-700">{company}</p>
              <p className="text-gray-600 text-sm">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}