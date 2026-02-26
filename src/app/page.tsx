"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const ROLES = [
  "Full Stack Developer",
  "React.js Engineer",
  "Spring Boot Dev",
  "Problem Solver",
];

const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "15+", label: "Technologies" },
];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.substring(0, text.length + 1));
          if (text === current) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setText(current.substring(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setWordIndex((i) => i + 1);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; color: string;
    }[] = [];

    const colors = ["#22c55e", "#16a34a", "#4ade80", "#86efac", "#ffffff"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      // Draw connections
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(34,197,94,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const role = useTypewriter(ROLES);

  useEffect(() => {
    setMounted(true);
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Particle canvas */}
      <ParticleField />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] transition-transform duration-700 ease-out"
          style={{
            background: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)",
            top: "10%", left: "20%",
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] transition-transform duration-700 ease-out"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
            bottom: "10%", right: "15%",
            transform: `translate(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px)`,
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full py-20 lg:py-0">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left: Text content */}
            <div className={`lg:w-3/5 space-y-8 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-4 py-2 mt-2 rounded-full text-green-400 text-sm font-medium"
                style={{ animationDelay: "0.1s" }}>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for opportunities
              </div>

              {/* Name */}
              <div className="space-y-2">
                <p className="text-gray-400 text-lg tracking-widest uppercase font-light">Hello, I'm</p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
                  <span className="block text-white">Aditya</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 animate-gradient-x">
                    Swain
                  </span>
                </h1>
              </div>

              {/* Typewriter role */}
              <div className="flex items-center gap-3 text-xl md:text-2xl text-gray-300">
                <span className="text-green-400 font-mono font-bold">&gt;</span>
                <span className="font-mono">
                  {role}
                  <span className="inline-block w-0.5 h-6 bg-green-400 ml-1 animate-blink align-middle" />
                </span>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                Crafting scalable full-stack applications with clean architecture.
                I turn complex problems into elegant, performant solutions — from
                pixel-perfect UIs to robust backend systems.
              </p>

              {/* Stats */}
              <div className="flex gap-8">
                {STATS.map((s, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl font-black text-green-400">{s.value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="group relative flex items-center gap-2 bg-green-600 hover:bg-green-500 px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <a
                  href="/aditya_resume.pdf"
                  download
                  className="group flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-green-500/50 px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  <FaDownload className="h-4 w-4 text-green-400" />
                  Download CV
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4 pt-2 mb-3">
                <span className="text-gray-600 text-sm">Find me on</span>
                <div className="flex gap-3">
                  {[
                    { href: "https://github.com/Aditya-Swain", icon: <FaGithub className="h-5 w-5" />, label: "GitHub" },
                    { href: "https://www.linkedin.com/in/aditya-swain-647563289", icon: <FaLinkedin className="h-5 w-5" />, label: "LinkedIn" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-green-500/20 border border-gray-700 hover:border-green-500/40 p-2.5 rounded-lg text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Decorative code block */}
            <div className={`lg:w-2/5 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="relative">
                {/* Glow behind card */}
                <div className="absolute -inset-4 bg-green-500/10 rounded-3xl blur-2xl" />

                <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700/60 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Terminal bar */}
                  <div className="flex items-center gap-2 bg-gray-900/80 px-4 py-3 border-b border-gray-700/50">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-gray-500 text-xs ml-2 font-mono">portfolio.tsx</span>
                  </div>

                  {/* Code content */}
                  <div className="p-6 font-mono text-sm leading-relaxed">
                    <div className="space-y-1">
                      <p><span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> <span className="text-white">= {"{"}</span></p>
                      <p className="pl-4"><span className="text-green-300">name</span><span className="text-white">:</span> <span className="text-yellow-300">"Aditya Swain"</span><span className="text-white">,</span></p>
                      <p className="pl-4"><span className="text-green-300">role</span><span className="text-white">:</span> <span className="text-yellow-300">"Full Stack Dev"</span><span className="text-white">,</span></p>
                      <p className="pl-4"><span className="text-green-300">skills</span><span className="text-white">: [</span></p>
                      <p className="pl-8"><span className="text-yellow-300">"React"</span><span className="text-white">,</span> <span className="text-yellow-300">"Spring Boot"</span><span className="text-white">,</span></p>
                      <p className="pl-8"><span className="text-yellow-300">"Django"</span><span className="text-white">,</span> <span className="text-yellow-300">"MySQL"</span><span className="text-white">,</span></p>
                      <p className="pl-4"><span className="text-white">],</span></p>
                      <p className="pl-4"><span className="text-green-300">available</span><span className="text-white">:</span> <span className="text-orange-400">true</span><span className="text-white">,</span></p>
                      <p className="pl-4"><span className="text-green-300">passion</span><span className="text-white">:</span> <span className="text-yellow-300">"Building things"</span><span className="text-white">,</span></p>
                      <p><span className="text-white">{"}"}</span></p>
                      <br />
                      <p>
                        <span className="text-purple-400">export default</span>
                        <span className="text-white"> developer</span>
                        <span className="inline-block w-0.5 h-4 bg-green-400 ml-1 animate-blink align-middle" />
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-black text-xs font-black px-3 py-1.5 rounded-lg rotate-3 shadow-lg">
                  OPEN TO WORK
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gray-700 border border-gray-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg -rotate-2 shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  2+ yrs experience
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
        </div> */}

      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </main>
  );
}