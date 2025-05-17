
import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1e33] text-white py-12 relative backdrop-blur-md border-t border-blue-900/30 shadow-[inset_0_1px_0_#1a2a40]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Logo and Description */}
          <div>
            <Link to="hero" smooth={true} duration={500}>
              <div className="flex items-center cursor-pointer">
                <img src="/logo-removebg-preview.png" alt="Logo" className="h-20 w-auto drop-shadow-lg" />
              </div>
            </Link>
            <p className="mt-4 text-blue-100 text-sm leading-relaxed">
              Patient-first appointment system built for simplicity and real-time WhatsApp coordination. Welcome to the future of care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="features"
                  smooth={true}
                  duration={500}
                  className="text-blue-100 hover:text-cyan-300 transition-all duration-300 cursor-pointer"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="how-it-works"
                  smooth={true}
                  duration={500}
                  className="text-blue-100 hover:text-cyan-300 transition-all duration-300 cursor-pointer"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-blue-100 hover:text-cyan-300 transition-all duration-300 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 tracking-wider">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-blue-100 hover:text-cyan-300 transition-all duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-cyan-300 transition-all duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-cyan-300 transition-all duration-300">
                  HIPAA Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-blue-800/30 pt-6 text-center text-blue-300 text-xs">
          <p>
            &copy; {currentYear} <span className="text-white font-semibold">DocCareHub Connect</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
