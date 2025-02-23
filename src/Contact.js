import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperclip, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const contactInfo = {
  phone: "+91 7870503085",
  email: "chiranjeeviraj109@gmail.com",
  location: "India",
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com/in/your-profile", icon: <FaLinkedin size={24} /> },
    { name: "GitHub", href: "https://github.com/your-profile", icon: <FaGithub size={24} /> },
  ],
};

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      console.log("Form Submitted:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "", file: null });
      setTimeout(() => setStatus(""), 3000);
    }, 1000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 py-12 md:py-20 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section: Contact Info */}
        <motion.div
          className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h1
              className="text-3xl md:text-4xl font-bold tracking-tight"
              variants={fadeInUp}
            >
              Let’s Connect
            </motion.h1>
            <motion.p
              className="text-gray-400 mt-3 text-sm md:text-base"
              variants={fadeInUp}
            >
              Got a project idea or just want to say hi? I’m all ears!
            </motion.p>
            <motion.div className="mt-8 space-y-6" variants={staggerContainer}>
              <motion.div className="flex items-center gap-4" variants={fadeInUp}>
                <FaMapMarkerAlt className="text-green-400 flex-shrink-0" size={20} />
                <span className="text-gray-200">{contactInfo.location}</span>
              </motion.div>
              <motion.div className="flex items-center gap-4" variants={fadeInUp}>
                <FaPhone className="text-green-400 flex-shrink-0" size={20} />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-200 hover:text-green-400 transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </motion.div>
              <motion.div className="flex items-center gap-4" variants={fadeInUp}>
                <FaEnvelope className="text-green-400 flex-shrink-0" size={20} />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-200 hover:text-green-400 transition-colors duration-200 break-all"
                >
                  {contactInfo.email}
                </a>
              </motion.div>
            </motion.div>
          </div>
          <motion.div className="mt-10 flex gap-6" variants={fadeInUp}>
            {contactInfo.socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section: Contact Form */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6"
            variants={fadeInUp}
          >
            Send Me a Message
          </motion.h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent focus:outline-none transition-all duration-200"
              required
              variants={fadeInUp}
              whileFocus={{ scale: 1.01, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent focus:outline-none transition-all duration-200"
              required
              variants={fadeInUp}
              whileFocus={{ scale: 1.01, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent focus:outline-none transition-all duration-200 resize-none"
              required
              variants={fadeInUp}
              whileFocus={{ scale: 1.01, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}
            />
            <motion.label
              className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-green-600 transition-colors duration-200 text-sm"
              variants={fadeInUp}
            >
              <FaPaperclip size={18} />
              <span>{formData.file ? `Attached: ${formData.file.name}` : "Attach a File"}</span>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="hidden"
              />
            </motion.label>
            <motion.button
              type="submit"
              disabled={status === "sending"}
              className={`w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
                status === "sending"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              }`}
              variants={fadeInUp}
              whileHover={{ scale: status === "sending" ? 1 : 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: status === "sending" ? 1 : 0.95 }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
          {status === "success" && (
            <motion.p
              className="mt-4 text-green-600 text-center font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Message sent successfully!
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              className="mt-4 text-red-600 text-center font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Oops! Something went wrong. Try again.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}