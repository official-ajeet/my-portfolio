import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-6 px-8 flex justify-between items-center sticky top-0 z-40">
      <h1 className="text-2xl font-semibold text-blue-600 tracking-wide cursor-default">
        Ajeet Maurya
      </h1>
      <nav className="space-x-8">
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
