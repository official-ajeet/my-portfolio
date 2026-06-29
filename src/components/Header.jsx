import React, { useState, useEffect } from "react";

const NAV_ITEMS = ["About", "Projects", "Skills", "Contact"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on nav click
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#about"
          className="text-lg font-bold text-gray-900 tracking-tight hover:text-blue-600 transition-colors"
        >
          Ajeet Maurya
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-gray-500 hover:text-gray-900 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-150"
            >
              {item}
            </a>
          ))}

          {/* Divider */}
          <span className="mx-2 h-4 w-px bg-gray-200" />

          {/* Featured project */}
          <a
            href="https://www.feelandwrite.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors duration-150"
          >
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Feel &amp; Write
            
          </a>

          <a
            href="https://gymboss.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors duration-150 ml-1"
          >
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            GymBoss
            
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 bg-gray-700 transition-all duration-200 ${
              menuOpen ? "w-5 rotate-45 translate-y-2" : "w-5"
            }`}
          />
          <span
            className={`block h-0.5 bg-gray-700 transition-all duration-200 ${
              menuOpen ? "opacity-0 w-0" : "w-4"
            }`}
          />
          <span
            className={`block h-0.5 bg-gray-700 transition-all duration-200 ${
              menuOpen ? "w-5 -rotate-45 -translate-y-2" : "w-5"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ${
          menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-3 gap-1 bg-white">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleNavClick}
              className="text-sm text-gray-600 hover:text-gray-900 font-medium px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="h-px bg-gray-100 my-2" />
          <a
            href="https://www.feelandwrite.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl"
          >
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Feel &amp; Write
            <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              NEW
            </span>
          </a>
          <a
            href="https://gymboss.in"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-4 py-2.5 rounded-xl"
          >
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            GymBoss
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;