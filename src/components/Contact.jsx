import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SOCIALS = [
  {
    label: "GitHub",
    handle: "@official-ajeet",
    href: "https://github.com/official-ajeet",
    icon: FaGithub,
    color: "hover:border-gray-400 hover:text-gray-900",
  },
  {
    label: "LinkedIn",
    handle: "in/ajeet15",
    href: "https://www.linkedin.com/in/ajeet15/",
    icon: FaLinkedin,
    color: "hover:border-blue-400 hover:text-blue-600",
  },
  {
    label: "Email",
    handle: "m.ajeet15801@gmail.com",
    href: "mailto:m.ajeet15801@gmail.com",
    icon: FaEnvelope,
    color: "hover:border-red-300 hover:text-red-500",
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("m.ajeet15801@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-6 bg-gray-50" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">
          Get in touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
          Let's connect
        </h2>
        <div
          className="mx-auto mb-6 h-0.5 w-10 rounded-full"
          style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }}
        />
        <p className="text-gray-500 text-base leading-relaxed mb-10">
          I'm actively looking for SDE and AI/LLM roles. Whether you're a
          recruiter, a fellow developer, or someone who wants to build something
          — I'd love to hear from you.
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
          <a
            href="mailto:m.ajeet15801@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors duration-150"
          >
            <FaEnvelope size={14} />
            Send me an email
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-600 text-sm font-medium px-6 py-3 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-150"
          >
            {copied ? (
              <>✅ Copied!</>
            ) : (
              <>📋 Copy email address</>
            )}
          </button>
        </div>

        {/* Social cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {SOCIALS.map(({ label, handle, href, icon: Icon, color }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`bg-white border border-gray-100 rounded-2xl px-5 py-5 flex flex-col items-center gap-2 transition-all duration-150 group ${color}`}
            >
              <Icon size={22} className="text-gray-400 group-hover:scale-110 transition-transform duration-150" />
              <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                {label}
              </p>
              <p className="text-xs text-gray-400 break-all text-center">
                {handle}
              </p>
            </a>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-12 text-xs text-gray-300">
          Built by Ajeet Maurya · Ghaziabad, India ·{" "}
          <a
            href="https://gymboss.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            gymboss.in
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;