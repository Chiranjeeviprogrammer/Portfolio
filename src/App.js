import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Portfolio from "./Portfolio";
import About from "./About";
import Services from "./Services";
import Works from "./Works";
import Blog from "./Blog";
import Contact from "./Contact";
import YouTube from "./YouTube";

// Centralized Navigation and Social Links
const navigationItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Works", path: "/works" },
  { name: "Blog", path: "/blog" },
  { name: "YouTube", path: "/youtube" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/imchiranjeevi" },
  { icon: <FaGithub size={20} />, href: "https://github.com/your-profile" },
  { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/_imchiranjeevi" },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
        {/* Top Navigation Bar - Fixed Position */}
        <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo or Brand Name - Clickable */}
            <NavLink
              to="/"
              className="text-xl font-bold hover:text-green-400 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)} // Close mobile menu if open
            >
              Chiranjeevi Kumar
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  exact={item.path === "/"}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-gray-700 hover:text-white ${
                      isActive ? "bg-gray-700 text-white" : "text-gray-300"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle menu"
              className="md:hidden p-2 text-white hover:bg-gray-700 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown - Fixed Below Header */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-gray-900 w-full absolute top-full left-0 shadow-lg">
              <nav className="flex flex-col px-4 py-2 space-y-2">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    exact={item.path === "/"}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-gray-700 hover:text-white ${
                        isActive ? "bg-gray-700 text-white" : "text-gray-300"
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          )}
        </header>

        {/* Main Content - Adjusted for Fixed Header */}
        <main className="flex-1 p-6 md:p-12 lg:p-16 bg-white overflow-y-auto mt-16 md:mt-20">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/works" element={<Works />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/youtube" element={<YouTube />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer with Social Links */}
        <footer className="bg-gray-900 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-4">
            <div className="flex gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200 transform hover:scale-105"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Chiranjeevi Kumar. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}