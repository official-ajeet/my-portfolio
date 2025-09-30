import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-6 px-8 flex justify-between items-center sticky top-0 z-40">
      {/* Your Name */}
      <h1 className="text-2xl font-semibold text-blue-600 tracking-wide cursor-default">
        Ajeet Maurya
      </h1>

      {/* Navigation with feelandwrite first */}
      <nav className="space-x-8 flex items-center">
        {/* Highlighted Project Link with NEW badge */}
        <div className="relative">
          <a
            href="https://www.feelandwrite.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1 rounded-full text-lg font-semibold shadow-md hover:from-indigo-600 hover:to-blue-500 hover:scale-110 transform transition duration-300"
          >
            feelandwrite
          </a>
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md animate-bounce">
            NEW
          </span>
        </div>

        {/* Other nav items */}
        {["About", "Projects", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
