import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left — brand */}
        <p className="text-sm font-semibold text-gray-900">
          Ajeet Maurya
          <span className="mx-2 text-gray-200">·</span>
          <a
            href="https://gymboss.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            gymboss.in
          </a>
        </p>

        {/* Center — copyright */}
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} · Built with React &amp; Tailwind
        </p>

        {/* Right — socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/official-ajeet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/ajeet15/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="mailto:m.ajeet15801@gmail.com"
            className="text-xs text-gray-400 hover:text-gray-700 transition-colors font-medium"
          >
            m.ajeet15801@gmail.com
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;