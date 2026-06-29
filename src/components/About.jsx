import React, { useEffect, useState, useRef } from "react";

const trailColors = ["#3b82f6", "#2563eb", "#1e40af", "#60a5fa", "#93c5fd"];

const About = () => {
  const [positions, setPositions] = useState(
    trailColors.map(() => ({ x: -200, y: -200 }))
  );
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: -200, y: -200 });

  useEffect(() => {
    let rafId;
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouseRef.current = { x: -200, y: -200 };
    };
    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      setPositions((prev) => {
        const next = prev.map((p) => ({ ...p }));
        let px = mouseRef.current.x;
        let py = mouseRef.current.y;
        next.forEach((p, i) => {
          p.x = lerp(p.x, px, 0.22 - i * 0.03);
          p.y = lerp(p.y, py, 0.22 - i * 0.03);
          px = p.x;
          py = p.y;
        });
        return next;
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-28 px-6 text-center overflow-hidden bg-white"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 70% 50% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 50% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute -top-24 -left-20 w-96 h-96 bg-blue-300 rounded-full opacity-[0.07] pointer-events-none"
        style={{ filter: "blur(80px)" }}
      />
      <div
        className="absolute -bottom-20 -right-16 w-80 h-80 bg-purple-400 rounded-full opacity-[0.07] pointer-events-none"
        style={{ filter: "blur(80px)" }}
      />

      {/* Cursor trail */}
      {positions.map((pos, i) => (
        <span
          key={i}
          style={{
            left: pos.x,
            top: pos.y,
            backgroundColor: trailColors[i],
            opacity: ((trailColors.length - i) / trailColors.length) * 0.4,
            transform: `translate(-50%, -50%) scale(${1 - i * 0.12})`,
            width: `${28 - i * 4}px`,
            height: `${28 - i * 4}px`,
          }}
          className="pointer-events-none absolute rounded-full mix-blend-multiply"
        />
      ))}

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Avatar */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="w-full h-full rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-lg font-semibold text-blue-600">
            AM
          </div>
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              padding: "1.5px",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
            }}
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3 leading-tight">
          Hi, I'm{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ajeet
          </span>{" "}
          👋
        </h1>

        {/* Role subtitle */}
        <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-8">
          Full Stack Developer
          <span className="mx-2 opacity-30">·</span>
          SaaS Builder
          <span className="mx-2 opacity-30">·</span>
          Solo Founder
        </p>

        {/* Bio — tight, single paragraph */}
        <p className="text-base text-gray-500 leading-relaxed mb-8">
          I think like a founder and build like an engineer. Shipped{" "}
          <span className="font-semibold text-gray-800">GymBoss</span> — a live
          gym management SaaS with real paying clients in India — and{" "}
          <span className="font-semibold text-gray-800">Feel &amp; Write</span>,
          an AI-powered writing app, all solo as a fresher.
        </p>

        {/* CTAs */}
        <div className="flex justify-center gap-3 flex-wrap mb-8">
          <a
            href="https://gymboss.in"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-150"
          >
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            GymBoss
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
              NEW
            </span>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-600 text-sm font-semibold px-5 py-2.5 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors duration-150"
          >
            View Projects
          </a>
        </div>

        {/* Status badges — minimal row */}
        <div className="flex flex-wrap justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-medium px-3 py-1 rounded-full bg-gray-50 border border-gray-100">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Open to SDE &amp; AI/LLM roles
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-medium px-3 py-1 rounded-full bg-gray-50 border border-gray-100">
            🚀 Entrepreneur at heart
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-medium px-3 py-1 rounded-full bg-gray-50 border border-gray-100">
            📍 Ghaziabad, India
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;