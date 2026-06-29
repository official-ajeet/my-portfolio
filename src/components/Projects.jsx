import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FEATURED = {
  title: "GymBoss",
  tagline: "Gym Management SaaS · Live product",
  description:
    "A full-stack SaaS platform that helps gym owners digitally manage their business — member records, billing, attendance tracking, subscription management, and more. Built solo, end-to-end, with real paying clients across India.",
  stack: ["Java", "Spring Boot", "React.js", "MySQL", "JWT", "Tailwind CSS"],
  demo: "https://gymboss.in",
  linkedinPost:
    "https://www.linkedin.com/in/ajeet15/",
  stats: [
    { value: "Live", label: "Status" },
    { value: "Real", label: "Clients" },
    { value: "Solo", label: "Built by" },
  ],
};

const PROJECTS = [
  {
    title: "Feel and Write",
    description:
      "A creative writing and journaling web app powered by the OpenAI API. Users express thoughts, share emotions, and overcome writer's block with AI-assisted prompts.",
    stack: ["React.js", "OpenAI API", "Spring Boot"],
    demo: "https://www.feelandwrite.com/",
    linkedinPost:
      "https://www.linkedin.com/posts/ajeet15_feelandwrite-writingcommunity-secureplatform-activity-7377246810701971456-MhHn",
    badge: "AI",
    badgeColor: "purple",
  },
  {
    title: "Secure Note Taking App",
    description:
      "Spring Boot app with encrypted note storage, password-protected notes, and email verification.",
    stack: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/official-ajeet/SecureNoteTaking",
    linkedinPost:
      "https://www.linkedin.com/posts/ajeet15_springboot-webdevelopment-security-activity-7246808335616774145-07Ho",
  },
  {
    title: "Tracksy — Employee Manager",
    description:
      "Modern employee management system with admin/employee login and task tracking.",
    stack: ["React.js", "Spring Boot", "Tailwind CSS"],
    github: "https://github.com/official-ajeet/Tracksy",
    demo: "https://official-ajeet.github.io/Tracksy/",
    linkedinPost:
      "https://www.linkedin.com/posts/ajeet15_reactjs-tailwindcss-employeemanagement-activity-7336370802189086720-7Iin",
  },
  {
    title: "Digital Library System",
    description:
      "Library management app with sorting, filtering, admin/student login, and CRUD operations.",
    stack: ["Java", "Spring Boot", "MySQL"],
    github:
      "https://github.com/official-ajeet/Digital-library-Managment-System",
    linkedinPost:
      "https://www.linkedin.com/posts/ajeet15_java-spring-springboot-activity-7174030057689010176-O4Co",
  },
  {
    title: "Smart Bus Card System",
    description:
      "Digital payment solution for public transport — swipe in/out with automatic fare calculation.",
    stack: ["Java", "Spring Boot"],
    github: "https://github.com/official-ajeet/SmartBusCardSystem",
    linkedinPost:
      "https://www.linkedin.com/posts/ajeet15_github-official-ajeetsmartbuscardsystem-activity-7292834796467068928-QGUl",
  },
  {
    title: "Listify",
    description:
      "User-friendly task and to-do list management app with local storage support.",
    stack: ["React.js", "JavaScript"],
    github: "https://github.com/official-ajeet/Listify",
    demo: "https://official-ajeet.github.io/Listify/",
    linkedinPost:
      "https://www.linkedin.com/posts/ajeet15_react-javascript-webdevelopment-activity-7293172821906669568-ZR_g",
  },
  {
    title: "Task Manager API",
    description:
      "RESTful Task Manager backend built using Java Spring Boot as part of a backend developer assessment.",
    stack: ["Java", "Spring Boot", "REST API"],
    github: "https://github.com/official-ajeet/Task-Manager",
  },
  {
    title: "Institute Management Software",
    description:
      "Comprehensive system to manage student records, courses, and faculty built with Java.",
    stack: ["Java"],
    github:
      "https://github.com/official-ajeet/institute-management-software",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Classic Tic Tac Toe game built using React with interactive UI and state management.",
    stack: ["React.js"],
    github: "https://github.com/official-ajeet/tic-tac-toe",
    demo: "https://official-ajeet.github.io/tic-tac-toe/",
    linkedinPost:
      "https://www.linkedin.com/posts/ajeet15_webdevelopment-javascript-html-activity-7185537511601946625-U1lo",
  },
];

const badgeColorMap = {
  purple: "bg-purple-50 border-purple-100 text-purple-600",
  blue: "bg-blue-50 border-blue-100 text-blue-600",
};

const ProjectCard = ({ title, description, stack, github, demo, linkedinPost, badge, badgeColor }) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col hover:shadow-md hover:border-gray-200 transition-all duration-200 group">
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
        {title}
      </h3>
      {badge && (
        <span
          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ml-2 shrink-0 ${
            badgeColorMap[badgeColor] || badgeColorMap.blue
          }`}
        >
          {badge}
        </span>
      )}
    </div>

    <p className="text-xs text-gray-400 leading-relaxed mb-4 flex-1">
      {description}
    </p>

    {/* Stack */}
    <div className="flex flex-wrap gap-1.5 mb-4">
      {stack.map((s) => (
        <span
          key={s}
          className="text-[10px] font-medium bg-gray-50 border border-gray-100 text-gray-400 px-2 py-0.5 rounded-md"
        >
          {s}
        </span>
      ))}
    </div>

    {/* Links */}
    <div className="flex gap-2 flex-wrap">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium bg-gray-900 hover:bg-gray-700 text-white px-3 py-1.5 rounded-lg transition-colors"
        >
          <FaGithub size={11} /> Code
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg transition-colors"
        >
          Live Demo
        </a>
      )}
      {linkedinPost && (
        <a
          href={linkedinPost}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium border border-gray-200 hover:border-blue-300 text-gray-400 hover:text-blue-600 px-3 py-1.5 rounded-lg transition-colors"
        >
          <FaLinkedin size={11} /> Post
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? PROJECTS : PROJECTS.slice(0, 6);

  return (
    <section className="py-20 px-6 bg-white" id="projects">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">
            What I've shipped
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Projects
          </h2>
          <div
            className="mx-auto mt-4 h-0.5 w-10 rounded-full"
            style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }}
          />
        </div>

        {/* Featured — GymBoss hero card */}
        <div className="relative bg-gray-900 rounded-2xl p-7 md:p-8 mb-8 overflow-hidden">
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Glow */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #3b82f6, transparent)",
              filter: "blur(40px)",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-3 py-1 rounded-full mb-4">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Featured Project · Live SaaS
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                {FEATURED.title}
              </h3>
              <p className="text-white/50 text-xs font-medium uppercase tracking-widest mb-4">
                {FEATURED.tagline}
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-lg">
                {FEATURED.description}
              </p>

              {/* Stack chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {FEATURED.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium bg-white/10 border border-white/20 text-white/70 px-2.5 py-1 rounded-lg"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex gap-3 flex-wrap">
                <a
                  href={FEATURED.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Visit gymboss.in
                </a>
                <a
                  href={FEATURED.linkedinPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors"
                >
                  <FaLinkedin size={13} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="flex md:flex-col gap-4 md:gap-3">
              {FEATURED.stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center min-w-[80px]"
                >
                  <p className="text-lg font-bold text-white">{value}</p>
                  <p className="text-[10px] text-white/50 font-medium uppercase tracking-wider">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        {/* Show more */}
        {PROJECTS.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 border border-gray-200 hover:border-gray-300 px-6 py-2.5 rounded-xl transition-all duration-150"
            >
              {showAll ? "Show less" : `Show all ${PROJECTS.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;