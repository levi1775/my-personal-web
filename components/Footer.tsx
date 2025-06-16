"use client";

import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent-500">Vedant Pimple</h3>
            <p className="text-gray-300 leading-relaxed">
              B.Tech student passionate about AI/ML, Data Science and Web development.
              Building the future through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/vedantpimple"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-500 transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/vedantpimple"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-500 transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:vedant.pimple@example.com"
                className="text-gray-400 hover:text-accent-500 transition-colors"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Resume', /*'Blog',*/ 'Contact'].map((link) => ( // Add 'blog' later on once blog is ready
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-300 hover:text-accent-500 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>Indore, Madhya Pradesh, India</p>
              <p>vedantpimple1775@gmail.com</p>
              <p>Available for internships, full time roles and collaborations</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <FiHeart className="text-red-500 mx-2" size={16} /> by Vedant Pimple
            <span className="mx-2">•</span>
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
