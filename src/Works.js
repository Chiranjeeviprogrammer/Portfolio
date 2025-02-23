import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

// Data
const PROJECTS = [
  { id: 1, title: "EV Charging App", category: "Mobile App", image: "/your-image-path1.jpg" },
  { id: 2, title: "Fintech Wallet", category: "Mobile App", image: "/your-image-path2.jpg" },
  { id: 3, title: "E-commerce App", category: "Mobile App", image: "/your-image-path3.jpg" },
  { id: 4, title: "Bally Website Research", category: "UX Case Study", image: "/your-image-path4.jpg" },
];

const TESTIMONIALS = [
  {
    id: 1,
    quote: "File storage made easy – including powerful features you won’t find anywhere else.",
    author: "Larry Diamond",
    position: "Chief Executive Officer, Besnik",
    image: "/your-testimonial-image.jpg",
  },
  {
    id: 2,
    quote: "Great design work! It has helped improve our brand and user experience significantly.",
    author: "Jessica Smith",
    position: "Product Manager, TechCorp",
    image: "/your-testimonial-image2.jpg",
  },
];

// Reusable Components
const ProjectCard = ({ project }) => (
  <motion.div
    className="flex flex-col group"
    variants={fadeInUp}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <img
      src={project.image}
      alt={project.title}
      className="rounded-lg shadow-lg object-cover w-full h-64 transition-transform group-hover:scale-105"
    />
    <div className="mt-4">
      <p className="text-gray-500 text-sm uppercase tracking-wide">{project.category}</p>
      <h3 className="text-xl font-semibold flex items-center gap-2 group-hover:text-green-600 transition-colors">
        {project.title}
        <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
      </h3>
    </div>
  </motion.div>
);

const TestimonialCard = ({ testimonial, onPrev, onNext }) => (
  <motion.div
    className="mt-12 p-8 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white flex flex-col md:flex-row items-center gap-6 shadow-xl"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
  >
    <img
      src={testimonial.image}
      alt={testimonial.author}
      className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg object-cover"
    />
    <div className="flex-1">
      <span className="text-sm uppercase tracking-wide opacity-75">Testimonial</span>
      <h2 className="text-2xl md:text-4xl font-bold mt-1 mb-4">What They Say</h2>
      <blockquote className="text-lg italic">“{testimonial.quote}”</blockquote>
      <p className="mt-4 font-semibold">{testimonial.author}</p>
      <p className="text-sm opacity-75">{testimonial.position}</p>
      <div className="flex gap-3 mt-6">
        <button
          onClick={onPrev}
          className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          aria-label="Previous testimonial"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={onNext}
          className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          aria-label="Next testimonial"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  </motion.div>
);

export default function Works() {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleLoadMore = () => setVisibleProjects((prev) => Math.min(prev + 2, PROJECTS.length));
  const handleNextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  const handlePrevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.header
          className="mb-12 text-center lg:text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="text-gray-500 text-sm italic tracking-wide" variants={fadeInUp}>
            Work
          </motion.span>
          <motion.h1
            className="text-3xl md:text-5xl font-bold mt-1 text-gray-900"
            variants={fadeInUp}
          >
            Recent Projects
          </motion.h1>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {PROJECTS.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {visibleProjects < PROJECTS.length && (
          <motion.button
            onClick={handleLoadMore}
            className="mx-auto flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More <FaArrowRight />
          </motion.button>
        )}

        <TestimonialCard
          testimonial={TESTIMONIALS[currentTestimonial]}
          onPrev={handlePrevTestimonial}
          onNext={handleNextTestimonial}
        />
      </div>
    </section>
  );
}