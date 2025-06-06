import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 px-8 bg-white" id="contact">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
      <div className="flex justify-center space-x-8 text-2xl">
        <a
          href="https://github.com/official-ajeet"
          className="hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ajeet15/"
          className="hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:m.ajeet15801@gmail.com" className="hover:text-blue-600">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
