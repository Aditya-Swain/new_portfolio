"use client";
import { useEffect, useRef, useState } from "react";
import { FaServer, FaReact, FaDatabase, FaCode } from "react-icons/fa";

// ─── Data ─────────────────────────────────────────────────────────────────────

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaReact className="h-7 w-7" />,
    color: "from-cyan-500/20 to-green-500/10",
    skills: [
      { name: "React.js",     icon: "⚛️" },
      { name: "HTML5",        icon: "🌐" },
      { name: "CSS3",         icon: "🎨" },
      { name: "Bootstrap",    icon: "🅱️" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "JavaScript",   icon: "⚡" },
    ],
  },
  {
    title: "Backend",
    icon: <FaServer className="h-7 w-7" />,
    color: "from-green-500/20 to-emerald-500/10",
    skills: [
      { name: "Spring Boot", icon: "🍃" },
      { name: "Django REST", icon: "🟩" },
      { name: "Java",        icon: "☕" },
      { name: "Python",      icon: "🐍" },
      { name: "MVC",         icon: "🏗️" },
      { name: "REST APIs",   icon: "🔌" },
    ],
  },
  {
    title: "Database",
    icon: <FaDatabase className="h-7 w-7" />,
    color: "from-violet-500/20 to-green-500/10",
    skills: [
      { name: "MongoDB",    icon: "🍃" },
      { name: "MySQL",      icon: "🐬" },
      { name: "PostgreSQL", icon: "🐘" },
    ],
  },
  {
    title: "Tools & Others",
    icon: <FaCode className="h-7 w-7" />,
    color: "from-orange-500/20 to-green-500/10",
    skills: [
      { name: "Git",           icon: "🔀" },
      { name: "VS Code",       icon: "💻" },
      { name: "Postman",       icon: "📬" },
      { name: "IntelliJ IDEA", icon: "🧠" },
    ],
  },
];

const experienceBars = [
  { label: "Full Stack",           percentage: 90 },
  { label: "Frontend Development", percentage: 80 },
  { label: "Backend Development",  percentage: 75 },
];

// ─── Hook ─────────────────────────────────────────────────────────────────────

function useInView(ref: React.RefObject<Element>, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

// ─── Experience Bar ───────────────────────────────────────────────────────────

function ExperienceBar({ label, percentage, index }: { label: string; percentage: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref as React.RefObject<Element>);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex justify-between items-center mb-2.5">
        <span className="font-medium text-gray-200">{label}</span>
        <span
          className={`text-green-400 font-bold text-sm bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 transition-all duration-500 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
          style={{ transitionDelay: `${index * 150 + 500}ms` }}
        >
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-600 rounded-full h-2.5 overflow-hidden">
        <div
          className="h-full rounded-full relative transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${percentage}%` : "0%",
            transitionDelay: `${index * 150 + 200}ms`,
            background: "linear-gradient(90deg, #16a34a, #22c55e, #34d399)",
          }}
        >
          <div className="absolute inset-0 bg-white/10 rounded-full" />
          {/* Shimmer sweep on load */}
          <div
            className={`absolute inset-0 rounded-full transition-opacity duration-300 ${visible ? "animate-shimmer-bar" : "opacity-0"}`}
            style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)" }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Skill Card ───────────────────────────────────────────────────────────────

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref as React.RefObject<Element>);

  return (
    <div
      ref={ref}
      className={`bg-gray-700 rounded-2xl p-8 shadow-xl relative overflow-hidden group border border-gray-600/30 hover:border-green-500/30 hover:scale-[1.02] hover:shadow-green-500/10 hover:shadow-2xl transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.97]"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Hover gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
      {/* Corner glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl pointer-events-none" />
      {/* Big index watermark */}
      <div className="absolute bottom-3 right-5 text-7xl font-black text-white/[0.025] select-none pointer-events-none">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative z-10">
        {/* Card header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-green-500/10 border border-green-500/20 p-3 rounded-xl text-green-400 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
            {category.icon}
          </div>
          <div>
            <h2 className="text-xl font-bold">{category.title}</h2>
            <p className="text-gray-400 text-sm">{category.skills.length} technologies</p>
          </div>
        </div>

        {/* Skill pills — each staggered */}
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill, skillIndex) => (
            <div
              key={skillIndex}
              className={`flex items-center gap-2 bg-gray-600/60 hover:bg-gray-600 border border-gray-500/30 hover:border-green-500/40 rounded-xl px-4 py-2.5 hover:scale-105 hover:-translate-y-0.5 cursor-default group/skill transition-all duration-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${index * 120 + skillIndex * 55 + 200}ms`,
                transitionDuration: "500ms",
              }}
            >
              <span className="text-base leading-none">{skill.icon}</span>
              <span className="text-sm font-medium text-gray-200 group-hover/skill:text-white transition-colors duration-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Experience section (separate so InView triggers independently) ────────────

function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref as React.RefObject<Element>);

  return (
    <div
      ref={ref}
      className={`bg-gray-700/50 border border-gray-600/30 rounded-2xl p-8 shadow-xl relative overflow-hidden transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-400 rounded-full" />
          <h2 className="text-2xl font-bold">Experience Level</h2>
        </div>
        <div className="space-y-7">
          {experienceBars.map((bar, i) => (
            <ExperienceBar key={i} {...bar} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Skills() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerVisible = useInView(headerRef as React.RefObject<Element>, 0.3);

  return (
    <div className="min-h-screen bg-gray-800 text-white py-24 relative overflow-hidden">
      {/* BG blobs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(34,197,94,0.8) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-green-400 text-xs font-bold tracking-[0.4em] uppercase mb-3">What I Work With</p>
          <h1 className="text-5xl font-black tracking-tight mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Skills
            </span>
          </h1>
          <p className="text-gray-400 max-w-md mx-auto mb-5">
            Technologies and tools I use to bring ideas to life — from pixel-perfect UIs to scalable backend systems.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full" />
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* Experience bars */}
        <ExperienceSection />
      </div>

      <style jsx global>{`
        @keyframes shimmer-bar {
          0%   { transform: translateX(-100%); opacity: 1; }
          100% { transform: translateX(200%);  opacity: 0; }
        }
        .animate-shimmer-bar {
          animation: shimmer-bar 1.2s ease-in-out 0.8s 1 forwards;
        }
      `}</style>
    </div>
  );
}