import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import myProfile from "../src/img/myProfile.JPG";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Portfolio() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleGoToProfile = () => {
    setShowPortfolio(true);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center py-12 sm:py-16 md:py-20 lg:py-24">
      {!showPortfolio ? (
        // Welcome Screen with Big Image
        <motion.div
          className="container mx-auto px-4 flex flex-col items-center justify-center h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-2xl border-4 border-gray-200 hover:border-green-400 transition-all duration-300 mb-10"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={myProfile}
              alt="Welcome to My Site"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 tracking-tight mb-8"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Welcome to My Site
          </motion.h1>
          <motion.button
            onClick={handleGoToProfile}
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold text-base sm:text-lg rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Profile
          </motion.button>
        </motion.div>
      ) : (
        // Portfolio Content
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left Section: Text Content */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Name and Title */}
            <div className="text-center lg:text-left">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 tracking-tight"
                variants={fadeInUp}
              >
                Chiranjeevi Kumar
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-2 font-medium"
                variants={fadeInUp}
              >
                Mobile Developer{" "}
                <span className="text-green-600">| React Native, Swift, Kotlin</span>
              </motion.p>
              <motion.p
                className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 mt-4 leading-relaxed"
                variants={fadeInUp}
              >
                Building high-performance mobile applications with expertise in iOS, Android, and API integrations.
              </motion.p>
            </div>

            {/* Skills */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Skills</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                React Native, Swift, Kotlin, Firebase, REST APIs, GraphQL, Redux, TailwindCSS, Payment Gateways
              </p>
            </motion.div>

            {/* Projects */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Recent Projects</h3>
              <ul className="space-y-3 text-gray-600 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-medium">EV Charging App</span> - Real-time station tracking & payments
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-medium">Fintech Wallet</span> - Secure transactions with biometric auth
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-medium">E-commerce App</span> - Stripe-powered checkout experience
                </li>
              </ul>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to="/about"
                className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold text-base rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </NavLink>
            </motion.div>

            {/* Contact & Socials */}
            <motion.div className="space-y-6" variants={staggerContainer}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start flex-wrap">
                <motion.a
                  href="tel:+917870503085"
                  className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors text-base"
                  variants={fadeInUp}
                >
                  <FaPhone className="text-green-600" size={20} />
                  <span>+91 7870503085</span>
                </motion.a>
                <motion.a
                  href="mailto:chiranjeeviraj109@gmail.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors text-base"
                  variants={fadeInUp}
                >
                  <FaEnvelope className="text-green-600" size={20} />
                  <span>chiranjeeviraj109@gmail.com</span>
                </motion.a>
              </div>
              <div className="flex gap-8 justify-center lg:justify-start">
                <motion.a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.15 }}
                >
                  <FaLinkedin size={28} />
                </motion.a>
                <motion.a
                  href="https://github.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.15 }}
                >
                  <FaGithub size={28} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section: Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-gray-200 hover:border-green-400 transition-all duration-300">
              <img
                src={myProfile}
                alt="Chiranjeevi Kumar - Mobile Developer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}