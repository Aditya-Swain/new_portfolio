"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FaGraduationCap, FaLanguage, FaTools, FaUser,
  FaMapMarkerAlt, FaEnvelope, FaPhone, FaDownload,
  FaGithub, FaLinkedin, FaBriefcase,
} from "react-icons/fa";

// ─── Data ────────────────────────────────────────────────────────────────────

const CONTACT_INFO = [
  { icon: FaMapMarkerAlt, label: "Location", value: "Bhubaneswar, Odisha" },
  { icon: FaEnvelope,     label: "Email",    value: "adityaswain817@gmail.com" },
  { icon: FaPhone,        label: "Phone",    value: "+91-7846931220" },
  { icon: FaUser,         label: "Role",     value: "Full Stack Developer" },
];

const EDUCATION_DATA = [
  { title: "B.Sc (Mathematics)", institution: "Berhampur University", year: "2020-2023" },
  { title: "Intermediate of Science", institution: "R.C.M Science College, Khallikote", year: "2018-2020" },
];

const EXPERIENCE_DATA = [
  {
    role: "Frontend Developer", company: "CPS Private Limited", period: "Aug, 2025 - Present",
    tag: "Current",
    points: [
      "Built cross-platform mobile & web apps with React Native and Expo.",
      "Created reusable, scalable UI component libraries.",
      "Integrated REST APIs and optimized async data flows.",
      "Enhanced performance by reducing render times and load latency.",
      "Participated in code reviews and agile sprint planning.",
    ],
  },
  {
    role: "Software Developer", company: "NobX IT Solutions", period: "Jun, 2024 - Aug, 2025",
    tag: "1+ yr",
    points: [
      "Built modular React.js components across multiple projects.",
      "Developed RESTful APIs with Django REST and Spring Boot.",
      "Integrated Google Drive, Dropbox, and OneDrive APIs.",
      "Implemented async task execution with Spring Boot Batch.",
      "Designed full-stack invoice management with PDF & email features.",
    ],
  },
  {
    role: "Student Intern", company: "QSpiders, Bhubaneswar", period: "Jun, 2023 - Feb, 2024",
    tag: "Internship",
    points: [
      "Built Java applications with Spring MVC, Hibernate, and Spring Boot.",
      "Optimized SQL queries for performance and scalability.",
      "Designed responsive UIs with HTML, CSS, JavaScript & jQuery.",
      "Developed stored procedures, functions and triggers.",
    ],
  },
];

const SKILLS_DATA = {
  frontend: [
    { name: "React.js",      level: 90, icon: "⚛️" },
    { name: "JavaScript",    level: 95, icon: "⚡" },
    { name: "HTML5/CSS3",    level: 90, icon: "🌐" },
    { name: "Tailwind CSS",  level: 85, icon: "🎨" },
    { name: "Bootstrap5",    level: 85, icon: "🅱️" },
    { name: "jQuery",        level: 85, icon: "🌀" },
  ],
  backend: [
    { name: "Spring Boot",   level: 85, icon: "🍃" },
    { name: "Java",          level: 85, icon: "☕" },
    { name: "Django",        level: 85, icon: "🟩" },
    { name: "REST API",      level: 85, icon: "🔌" },
    { name: "MySQL",         level: 90, icon: "🐬" },
    { name: "PostgreSQL",    level: 75, icon: "🐘" },
  ],
};

const LANGUAGES_DATA = [
  { name: "English", level: "Professional", percentage: 80, icon: "🇬🇧" },
  { name: "Hindi",   level: "Professional", percentage: 80, icon: "🇮🇳" },
  { name: "Odia",    level: "Native",       percentage: 95, icon: "🏳️" },
];

const SOFT_SKILLS_DATA = [
  { name: "Problem Solving", icon: "🧩" },
  { name: "Team Leadership", icon: "👥" },
  { name: "Communication",   icon: "💬" },
  { name: "Time Management", icon: "⏰" },
  { name: "Multi-tasking",   icon: "🔄" },
  { name: "Adaptability",    icon: "🦋" },
  { name: "Critical Thinking", icon: "🤔" },
  { name: "Creativity",      icon: "🎨" },
];

const STATS = [
  { value: 2,  suffix: "+", label: "Years Exp." },
  { value: 10, suffix: "+", label: "Projects" },
  { value: 15, suffix: "+", label: "Technologies" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function useInView(ref: React.RefObject<Element>, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref as React.RefObject<Element>);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(target / 30);
    const t = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(t); }
      else setCount(start);
    }, 40);
    return () => clearInterval(t);
  }, [visible, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function SkillBar({ name, level, icon }: { name: string; level: number; icon: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref as React.RefObject<Element>);
  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="font-medium text-sm text-gray-300">{name}</span>
        </div>
        <span className="text-green-400 font-bold text-sm">{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-600 to-emerald-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-gray-800 text-white py-24 relative overflow-hidden">
      {/* BG decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <div className={`flex flex-col lg:flex-row items-center gap-14 mb-24 transition-all duration-800 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          {/* Photo */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 lg:w-72 lg:h-72 group">
              <Image
                src="/images/mine.jpg"
                alt="Aditya Swain"
                fill
                className="rounded-2xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {/* Offset borders */}
              <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-green-500/50 rounded-2xl -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-gray-600/50 rounded-2xl -z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />
              {/* Available pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gray-900 border border-green-500/40 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Available for Work
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:w-2/3 space-y-7 text-center lg:text-left">
            <div>
              <p className="text-green-400 text-sm tracking-widest uppercase font-semibold mb-2">Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight mb-3">Aditya Swain</h1>
              <p className="text-xl text-gray-400">Full Stack Developer</p>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A passionate developer focused on creating efficient, scalable web applications.
              I combine technical depth with creative problem-solving to deliver exceptional,
              production-ready results.
            </p>

            {/* Stats row */}
            <div className="flex justify-center lg:justify-start gap-10">
              {STATS.map((s, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="text-3xl font-black text-green-400">
                    <AnimatedNumber target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="/aditya_resume.pdf" download
                className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30">
                <FaDownload className="h-4 w-4" /> Download CV
              </a>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/Aditya-Swain", icon: <FaGithub className="h-5 w-5" /> },
                  { href: "https://www.linkedin.com/in/aditya-swain-647563289", icon: <FaLinkedin className="h-5 w-5" /> },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-green-500/20 border border-gray-600 hover:border-green-500/40 p-3 rounded-xl text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-110">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-700/30 border border-gray-600/30 p-6 rounded-2xl">
              {CONTACT_INFO.map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="bg-gray-600/60 group-hover:bg-green-500/20 border border-gray-500/30 group-hover:border-green-500/30 p-2.5 rounded-xl transition-all duration-300">
                    <item.icon className="text-green-500 h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">{item.label}</p>
                    <p className="text-sm text-gray-300">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Content Grid ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── Left Column ─────────────────────────────────────────────────── */}
          <div className="space-y-10">

            {/* Education */}
            <Section icon={FaGraduationCap} title="Education">
              <div className="space-y-8">
                {EDUCATION_DATA.map((edu, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-green-500/30 pb-6 last:pb-0">
                    <div className="absolute w-3.5 h-3.5 bg-green-500 rounded-full -left-[7px] top-1 ring-4 ring-gray-700" />
                    <h3 className="font-bold text-white mb-0.5">{edu.title}</h3>
                    <p className="text-green-400 text-sm font-medium">{edu.institution}</p>
                    <p className="text-gray-500 text-xs mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Experience */}
            <Section icon={FaBriefcase} title="Work Experience">
              <div className="space-y-8">
                {EXPERIENCE_DATA.map((exp, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-green-500/20 hover:border-green-500/50 pb-8 last:pb-0 group transition-colors duration-300">
                    <div className="absolute w-3.5 h-3.5 bg-gray-700 border-2 border-green-500 rounded-full -left-[7px] top-1 group-hover:bg-green-500 transition-colors duration-300 ring-4 ring-gray-800" />

                    <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                      <div>
                        <h3 className="font-bold text-green-400">{exp.role}</h3>
                        <p className="text-gray-400 text-sm">{exp.company} · {exp.period}</p>
                      </div>
                      <span className="bg-green-500/10 border border-green-500/20 text-green-400 text-xs px-2.5 py-1 rounded-full font-semibold">
                        {exp.tag}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="text-green-500 mt-1 flex-shrink-0">›</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* ── Right Column ────────────────────────────────────────────────── */}
          <div className="space-y-10">

            {/* Technical skills */}
            <Section icon={FaTools} title="Technical Skills">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-5 bg-green-500 rounded-full" />
                    <h3 className="text-sm font-bold text-green-400 uppercase tracking-wider">Frontend</h3>
                  </div>
                  {SKILLS_DATA.frontend.map((s) => <SkillBar key={s.name} {...s} />)}
                </div>
                <div className="space-y-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-5 bg-emerald-400 rounded-full" />
                    <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Backend</h3>
                  </div>
                  {SKILLS_DATA.backend.map((s) => <SkillBar key={s.name} {...s} />)}
                </div>
              </div>
            </Section>

            {/* Languages */}
            <Section icon={FaLanguage} title="Languages">
              <div className="grid grid-cols-3 gap-4">
                {LANGUAGES_DATA.map((lang) => (
                  <div key={lang.name}
                    className="bg-gray-600/40 hover:bg-gray-600/60 border border-gray-500/20 hover:border-green-500/30 rounded-xl p-5 text-center transition-all duration-300 hover:scale-105 group">
                    <span className="text-3xl mb-3 block">{lang.icon}</span>
                    <p className="font-semibold text-sm mb-1">{lang.name}</p>
                    <p className="text-green-400 text-xs mb-3">{lang.level}</p>
                    <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                        style={{ width: `${lang.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Soft Skills */}
            <Section icon={FaUser} title="Soft Skills">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SOFT_SKILLS_DATA.map((skill) => (
                  <div key={skill.name}
                    className="bg-gray-600/40 hover:bg-green-500/10 border border-gray-500/20 hover:border-green-500/30 rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 group">
                    <span className="text-2xl mb-2 block">{skill.icon}</span>
                    <p className="text-xs text-gray-400 group-hover:text-green-400 transition-colors duration-200 font-medium leading-tight">{skill.name}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────────────────

function Section({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref as React.RefObject<Element>);

  return (
    <div
      ref={ref}
      className={`bg-gray-700/40 border border-gray-600/30 hover:border-green-500/20 rounded-2xl p-8 shadow-xl transition-all duration-700 relative overflow-hidden group ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/3 rounded-full blur-3xl pointer-events-none" />
      <div className="flex items-center gap-4 mb-7 relative z-10">
        <div className="bg-green-500/10 border border-green-500/20 p-3 rounded-xl group-hover:bg-green-500/20 transition-colors duration-300">
          <Icon className="h-6 w-6 text-green-500" />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}