import { Instagram } from 'lucide-react';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer id="content" className="text-gray-300 py-12 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          

          {/* Quick Links Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-pink-400 transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-pink-400 transition-colors duration-300">About</a></li>
              <li><a href="/projects" className="hover:text-pink-400 transition-colors duration-300">Projects</a></li>
              <li><a href="/contact" className="hover:text-pink-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/shivangsaxena05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/shivang-saxena-699974267/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/godscriptedvansh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="mailto:shivangsaxena40@gmail.com"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Shivang Saxena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;