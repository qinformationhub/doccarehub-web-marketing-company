
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-lg ${
        isScrolled ? "bg-sky-100/90 shadow-md py-1" : "bg-sky-100/80 py-2"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="hero" smooth={true} duration={500}>
              <div className="flex items-center cursor-pointer">
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src="/logo-removebg-preview.png" 
                    alt="Logo" 
                    className="h-10 w-auto sm:h-12 md:h-14 mr-2" 
                  />
                </motion.div>
                <div className="absolute -inset-1 bg-gradient-to-r from-medical-100/40 to-blue-100/40 rounded-full blur-lg -z-10"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
            <Link
              to="features"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active"
              className="text-medical-600 hover:text-medical-900 px-3 py-2 text-sm font-semibold cursor-pointer transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-medical-900 hover:after:w-full after:transition-all"
            >
              Features
            </Link>
            <Link
              to="how-it-works"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active"
              className="text-medical-600 hover:text-medical-900 px-3 py-2 text-sm font-semibold cursor-pointer transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-medical-900 hover:after:w-full after:transition-all"
            >
              How It Works
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active"
              className="text-medical-600 hover:text-medical-900 px-3 py-2 text-sm font-semibold cursor-pointer transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-medical-900 hover:after:w-full after:transition-all"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <motion.div
            className="hidden md:block ml-4"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            >
            <Link to="contact" smooth={true} duration={500}>
              <Button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                Book a Demo
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center mr-5">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="bg-white/40 backdrop-blur-sm rounded-full shadow-sm mobile-menu-container"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg absolute top-full left-0 right-0 overflow-hidden mobile-menu-container"
          >
            <div className="py-4 px-6 space-y-2">
              <Link
                to="features"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="block text-medical-800 hover:text-medical-500 font-medium py-3 px-4 rounded-lg hover:bg-sky-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="how-it-works"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="block text-medical-800 hover:text-medical-500 font-medium py-3 px-4 rounded-lg hover:bg-sky-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="block text-medical-800 hover:text-medical-500 font-medium py-3 px-4 rounded-lg hover:bg-sky-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 pb-1 px-4">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white rounded-full py-3">
                    Book a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
