import React, { useEffect, useState, useRef } from "react";

const trailColors = [
  "#3b82f6", // blue-500
  "#2563eb", // blue-600
  "#1e40af", // blue-800
  "#60a5fa", // blue-400
  "#93c5fd", // blue-300
];

const About = () => {
  const [positions, setPositions] = useState(
    trailColors.map(() => ({ x: -100, y: -100 }))
  );

  const containerRef = useRef(null);

  // Update trail positions with smoothing
  useEffect(() => {
    let animationFrameId;
    let lastCursorPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      lastCursorPos = { x, y };
    };

    const lerp = (start, end, amt) => start + (end - start) * amt;

    const animate = () => {
      setPositions((prevPositions) => {
        const newPositions = [...prevPositions];
        let prevX = lastCursorPos.x;
        let prevY = lastCursorPos.y;

        // Each circle moves towards the previous circle's position with smoothing
        newPositions.forEach((pos, i) => {
          pos.x = lerp(pos.x, prevX, 0.25 - i * 0.05);
          pos.y = lerp(pos.y, prevY, 0.25 - i * 0.05);
          prevX = pos.x;
          prevY = pos.y;
        });

        return newPositions;
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    containerRef.current.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-24 px-6 text-center overflow-hidden bg-blue-50"
    >
      {/* Colored trailing circles */}
      {positions.map((pos, i) => (
        <span
          key={i}
          style={{
            left: pos.x,
            top: pos.y,
            backgroundColor: trailColors[i],
            opacity: (trailColors.length - i) / trailColors.length,
            transform: `translate(-50%, -50%) scale(${1 - i * 0.15})`,
            transition: "background-color 0.3s ease",
          }}
          className="pointer-events-none absolute rounded-full w-8 h-8 blur-sm mix-blend-multiply"
        />
      ))}

      <h2 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 tracking-tight drop-shadow-md">
        Hi, I'm Ajeet <span className="inline-block animate-wave">👋</span>
      </h2>
      <div className="mx-auto mb-8 max-w-3xl border-b-4 border-blue-400 w-24 md:w-32 rounded-md"></div>
      <p className="text-xl md:text-2xl text-blue-900 max-w-xl mx-auto leading-relaxed font-light tracking-wide">
        I'm a Full Stack Developer skilled in{" "}
        <span className="font-semibold">Java</span>,{" "}
        <span className="font-semibold">Spring Boot</span>,{" "}
        <span className="font-semibold">React</span>, and{" "}
        <span className="font-semibold">SQL</span>. Passionate about building
        web apps and solving real-world problems with code.
      </p>
    </section>
  );
};

export default About;
