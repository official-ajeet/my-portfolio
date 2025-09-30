import React from "react";

const Skills = () => {
  return (
    <section className="py-20 px-8 bg-blue-50" id="skills">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <span className="bg-white py-4 px-6 rounded-xl shadow">Java</span>
        <span className="bg-white py-4 px-6 rounded-xl shadow">JavaScript</span>
        <span className="bg-white py-4 px-6 rounded-xl shadow">Spring Boot</span>
        <span className="bg-white py-4 px-6 rounded-xl shadow">Jpa / Hibernate</span>
        <span className="bg-white py-4 px-6 rounded-xl shadow">React</span>
        <span className="bg-white py-4 px-6 rounded-xl shadow">SQL</span>
        <span className="bg-white py-4 px-6 rounded-xl shadow">No Sql</span>
        <span className="bg-white py-4 px-6 rounded-xl shadow">CI / CD</span>
        <span className="bg-white py-4 px-6 rounded-xl shadow">DSA</span>
        <span className="bg-white py-4 px-6 rounded-xl shadow">Git</span>
        <span className="bg-white py-4 px-6 rounded-xl shadow">HTML & CSS</span>
        <span className="bg-white py-4 px-6 rounded-xl shadow">Tailwind CSS</span>
      </div>
    </section>
  );
};

export default Skills;
