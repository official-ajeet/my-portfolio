import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Secure Note Taking App",
      description:
        "Spring Boot-based app with encrypted note storage, password-protected notes, and email verification.",
      github: "https://github.com/official-ajeet/SecureNoteTaking",
      linkedinPost:
        "https://www.linkedin.com/posts/ajeet15_springboot-webdevelopment-security-activity-7246808335616774145-07Ho?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYJacEBukfQ7HRj9U8ye1efnca3RyLCTeM",
    },
    {
      title: "Digital Library System",
      description:
        "A library management app with sorting, filtering, admin/student login, and CRUD operations.",
      github:
        "https://github.com/official-ajeet/Digital-library-Managment-System",
      linkedinPost:
        "https://www.linkedin.com/posts/ajeet15_java-spring-springboot-activity-7174030057689010176-O4Co?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYJacEBukfQ7HRj9U8ye1efnca3RyLCTeM",
    },
    {
      title: "Tracksy - Employee Manager",
      description:
        "A modern employee management system with admin/employee login and task tracking built in React and Spring Boot.",
      github: "https://github.com/official-ajeet/Tracksy",
      demo: "https://official-ajeet.github.io/Tracksy/",
      linkedinPost:
        "https://www.linkedin.com/posts/ajeet15_reactjs-tailwindcss-employeemanagement-activity-7336370802189086720-7Iin?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYJacEBukfQ7HRj9U8ye1efnca3RyLCTeM",
    },
    {
      title: "Listify",
      description:
        "A user-friendly task and to-do list management app built with React and local storage support.",
      github: "https://github.com/official-ajeet/Listify",
      demo: "https://official-ajeet.github.io/Listify/",
      linkedinPost:
        "https://www.linkedin.com/posts/ajeet15_react-javascript-webdevelopment-activity-7293172821906669568-ZR_g?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYJacEBukfQ7HRj9U8ye1efnca3RyLCTeM",
    },
    {
      title: "Tic Tac Toe",
      description:
        "Classic Tic Tac Toe game built using React with interactive UI and state management.",
        github: "https://github.com/official-ajeet/tic-tac-toe",
        demo: "https://official-ajeet.github.io/tic-tac-toe/",
      linkedinPost:
        "https://www.linkedin.com/posts/ajeet15_webdevelopment-javascript-html-activity-7185537511601946625-U1lo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYJacEBukfQ7HRj9U8ye1efnca3RyLCTeM",
    },
    {
      title: "Institute Management Software",
      description:
        "Comprehensive system to manage student records, courses, and faculty built with Java.",
      github: "https://github.com/official-ajeet/institute-management-software",
    },
    {
      title: "Task Manager",
      description:
        "This is a simple RESTful Task Manager backend built using Java Spring Boot, created as part of a backend developer assessment.",
      github: "https://github.com/official-ajeet/Task-Manager",
    },
    {
      title: "Smart Bus Card System",
      description:
        "The Smart Bus Card System is a digital payment solution for public transportation. It allows users to swipe in and swipe out, automatically calculating fares.",
      github: "https://github.com/official-ajeet/SmartBusCardSystem",
      linkedinPost:
        "https://www.linkedin.com/posts/ajeet15_github-official-ajeetsmartbuscardsystem-activity-7292834796467068928-QGUl?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYJacEBukfQ7HRj9U8ye1efnca3RyLCTeM",
    },
  ];

  return (
    <section className="py-20 px-8 bg-white" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, description, github, demo, linkedinPost }) => (
          <div
            key={title}
            className="bg-gray-100 p-6 rounded-2xl shadow-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <p className="text-sm mb-6">{description}</p>
            </div>
            <div className="flex space-x-4 mt-auto">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
              >
                <FaGithub /> GitHub
              </a>

              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                >
                  Live Demo
                </a>
              )}

              {linkedinPost && (
                <a
                  href={linkedinPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <FaLinkedin /> LinkedIn Post
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
