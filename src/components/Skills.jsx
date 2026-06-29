import React from "react";

const skillCategories = [
  {
    label: "Backend",
    color: "blue",
    skills: [
      { name: "Java", icon: "☕" },
      { name: "Spring Boot", icon: "🍃" },
      { name: "Spring Security", icon: "🔒" },
      { name: "JPA / Hibernate", icon: "🗄️" },
      { name: "REST APIs", icon: "🔗" },
      { name: "JWT", icon: "🪙" },
    ],
  },
  {
    label: "Frontend",
    color: "purple",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "JavaScript", icon: "🟨" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "HTML & CSS", icon: "🧱" },
    ],
  },
  {
    label: "Database & Infra",
    color: "green",
    skills: [
      { name: "MySQL", icon: "🐬" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Git", icon: "🌿" },
      { name: "CI / CD", icon: "⚙️" },
    ],
  },
  {
    label: "AI & Other",
    color: "amber",
    skills: [
      { name: "OpenAI API", icon: "🤖" },
      { name: "DSA", icon: "🧩" },
      { name: "NoSQL", icon: "📦" },
      { name: "Linux", icon: "🐧" },
    ],
  },
];

const colorMap = {
  blue: {
    header: "bg-blue-50 border-blue-100 text-blue-700",
    dot: "bg-blue-500",
    tag: "bg-blue-50 border-blue-100 text-blue-700 hover:border-blue-300",
  },
  purple: {
    header: "bg-purple-50 border-purple-100 text-purple-700",
    dot: "bg-purple-500",
    tag: "bg-purple-50 border-purple-100 text-purple-700 hover:border-purple-300",
  },
  green: {
    header: "bg-green-50 border-green-100 text-green-700",
    dot: "bg-green-500",
    tag: "bg-green-50 border-green-100 text-green-700 hover:border-green-300",
  },
  amber: {
    header: "bg-amber-50 border-amber-100 text-amber-700",
    dot: "bg-amber-500",
    tag: "bg-amber-50 border-amber-100 text-amber-700 hover:border-amber-300",
  },
};

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-gray-50" id="skills">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">
            What I work with
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Skills &amp; Technologies
          </h2>
          <div
            className="mx-auto mt-4 h-0.5 w-10 rounded-full"
            style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }}
          />
        </div>

        {/* Skill grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map(({ label, color, skills }) => {
            const c = colorMap[color];
            return (
              <div
                key={label}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-sm transition-shadow duration-200"
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-5">
                  <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${c.header}`}
                  >
                    {label}
                  </span>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {skills.map(({ name, icon }) => (
                    <span
                      key={name}
                      className={`inline-flex items-center gap-1.5 border text-xs font-medium px-3 py-1.5 rounded-lg transition-colors duration-150 cursor-default ${c.tag}`}
                    >
                      <span>{icon}</span>
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom stat row */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          {[
            { value: "2+", label: "Live products" },
            { value: "3+", label: "Real clients" },
            { value: "1yr+", label: "Building in public" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="bg-white border border-gray-100 rounded-2xl p-5 text-center"
            >
              <p
                className="text-2xl font-bold mb-1"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {value}
              </p>
              <p className="text-xs text-gray-400 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
