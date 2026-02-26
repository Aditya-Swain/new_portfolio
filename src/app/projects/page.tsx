"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaCode } from "react-icons/fa";
import { StaticImageData } from "next/image";
import image1 from "../../../public/images/project/inv_rocket_1.png";
import image2 from "../../../public/images/project/cloud.png";
import image3 from "../../../public/images/project/your_stock.png";
import image4 from "../../../public/images/project/banking.png";
import image5 from "../../../public/images/project/barber_shop.png";
import image6 from "../../../public/images/project/stock1.png";
import image7 from "../../../public/images/project/smart_reply.png";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: StaticImageData | string;
  github: string;
  demo: string;
  features: string[];
  category: string;
  badge?: string;
};

const projects: Project[] = [
  {
    title: "SmartReply Chrome Extension",
    description:
      "An AI-powered Chrome extension for Gmail and LinkedIn that generates context-aware replies with selectable tones using the Gemini API.",
    technologies: ["JavaScript", "HTML", "CSS", "Spring Boot", "Gemini API", "Chrome Extension MV3", "DOM Manipulation"],
    image: image7,
    github: "https://github.com/Aditya-Swain/smart-reply-extension",
    demo: "https://www.linkedin.com/posts/aditya-swain-647563289_ai-geminiai-chromeextension-activity-7359199294962171904-dCKC",
    features: [
      "Custom 'AI Reply' button injected into Gmail and LinkedIn UI",
      "Dropdown tone selector: Professional, Casual, Friendly",
      "Real-time AI responses via Gemini API + Spring Boot backend",
      "Seamless integration without disrupting native UI",
      "Lightweight Manifest V3 architecture",
    ],
    category: "AI/Extension",
    badge: "🤖 AI Powered",
  },
  {
    title: "Cloud Drive",
    description:
      "A multi-cloud file manager connecting Google Drive, Dropbox, and OneDrive. Supports async file operations with real-time task tracking.",
    technologies: ["React.js", "Spring Boot", "Django REST", "OAuth 2.0", "MySQL", "Tailwind CSS", "MUI", "Google Drive API"],
    image: image2,
    github: "https://github.com/Aditya-Swain/cloud-drive-frontend",
    demo: "#",
    features: [
      "OAuth 2.0 for secure multi-cloud account linking",
      "File operations: copy, move, delete across platforms",
      "Async processing with Spring Boot Batch & ExecutorService",
      "Real-time task tracking with Django + MySQL backend",
      "RESTful microservice architecture",
    ],
    category: "Full Stack",
    badge: "☁️ Multi-Cloud",
  },
  {
    title: "Invoice Billing Application",
    description:
      "A full-stack invoice management system with PDF generation, CSV bulk upload, email integration, and interactive dashboards.",
    technologies: ["React.js", "Django REST", "MySQL", "AG-Grid", "Tailwind CSS", "MUI", "Recharts"],
    image: image1,
    github: "#",
    demo: "https://invoice-rocket.blogswrite.com",
    features: [
      "Create, edit, delete invoices with itemized line items",
      "One-click professional PDF generation",
      "Email invoices directly to clients",
      "Bulk CSV upload for batch processing",
      "Dynamic AG-Grid tables with sorting & filtering",
    ],
    category: "Full Stack",
    badge: "🚀 Live",
  },
  {
    title: "Stock Management & Recovery App",
    description:
      "Real-time stock tracking with trade analysis, recovery calculation, and live Yahoo Finance data integration.",
    technologies: ["React.js", "Django REST", "PostgreSQL", "MUI", "AG-Grid", "Tailwind CSS", "Recharts", "Yahoo Finance API"],
    image: image3,
    github: "https://github.com/Aditya-Swain/stock-analysis-frontend",
    demo: "#",
    features: [
      "Live stock prices from Yahoo Finance API",
      "Manual & CSV bulk trade entry",
      "Recovery & profit/loss calculations",
      "Interactive Recharts visualizations",
      "JWT-authenticated user accounts",
    ],
    category: "Full Stack",
    badge: "📈 Finance",
  },
  {
    title: "Online Banking System",
    description:
      "A comprehensive banking platform with customer and admin dashboards for account management, fund transfers, and transaction tracking.",
    technologies: ["Spring Boot", "CSS3", "Bootstrap", "JSP", "MySQL"],
    image: image4,
    github: "https://github.com/Aditya-Swain/online_banking",
    demo: "#",
    features: [
      "Secure ATM PIN verification",
      "Balance checks & transaction history",
      "Inter-account fund transfers",
      "Admin account management dashboard",
      "Checkbook request workflow",
    ],
    category: "Backend",
    badge: "🏦 Banking",
  },
  {
    title: "Barber Shop Website",
    description:
      "A responsive, SEO-friendly website for a local barbershop featuring service listings and contact information.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    image: image5,
    github: "https://github.com/Aditya-Swain/Barber_shop_",
    demo: "https://barbershopgg.netlify.app",
    features: [
      "Fully responsive across all devices",
      "Clean service listing layout",
      "Location & contact integration",
      "Fast-loading static site",
      "SEO-optimized structure",
    ],
    category: "Frontend",
    badge: "✂️ Live",
  },
  {
    title: "Stock Tracking Dashboard",
    description:
      "A real-time Indian stock market dashboard with live price updates, interactive charts and trend visualization.",
    technologies: ["React.js", "FastAPI", "Yahoo Finance API", "Chart.js", "Tailwind CSS", "lucide-react"],
    image: image6,
    github: "https://github.com/Aditya-Swain/stock-dashboard-frontend",
    demo: "https://trackstockhistory.netlify.app",
    features: [
      "Real-time Indian market stock prices",
      "Interactive Chart.js visualizations",
      "FastAPI backend for fast data fetching",
      "Clean Tailwind UI with lucide icons",
      "Lightweight & fast-loading",
    ],
    category: "Full Stack",
    badge: "📊 Live",
  },
];

const CATEGORIES = ["All", "Full Stack", "AI/Extension", "Frontend", "Backend"];

function useIntersectionObserver(ref: React.RefObject<Element>) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isVisible;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref as React.RefObject<Element>);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      ref={ref}
      className={`group bg-gray-700/50 backdrop-blur-sm border border-gray-600/30 hover:border-green-500/40 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 hover:shadow-green-500/10 hover:shadow-2xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="lg:w-[45%] relative h-64 lg:h-auto overflow-hidden bg-gray-800/50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Image
            src={project.image || ""}
            alt={project.title}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
          {/* Badge */}
          {project.badge && (
            <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm border border-gray-600/50 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              {project.badge}
            </div>
          )}
          {/* Index number */}
          <div className="absolute bottom-4 right-4 text-6xl font-black text-white/5 select-none">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-[55%] p-8 flex flex-col gap-5">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">{project.description}</p>
          </div>

          {/* Tech stack */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2.5 font-semibold">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-600/60 hover:bg-green-500/20 hover:text-green-300 border border-gray-500/30 hover:border-green-500/30 text-gray-300 text-xs rounded-lg px-2.5 py-1 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features — collapsible */}
          <div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider font-semibold hover:text-green-400 transition-colors duration-200 mb-2.5"
            >
              <FaCode className="h-3 w-3" />
              Key Features
              <span className={`transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}>›</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-96" : "max-h-0"}`}>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                    <FaArrowRight className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            {!expanded && (
              <p className="text-xs text-gray-600">{project.features.length} features included</p>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3 mt-auto pt-2">
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-600/60 hover:bg-gray-600 border border-gray-500/30 hover:border-gray-400/50 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
              >
                <FaGithub className="h-4 w-4" />
                Code
              </a>
            )}
            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
              >
                <FaExternalLinkAlt className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-800 text-white py-24 relative overflow-hidden">
      {/* BG effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-green-400 text-xs font-bold tracking-[0.4em] uppercase mb-3">What I've Built</p>
          <h1 className="text-5xl font-black tracking-tight mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            A collection of full-stack applications, tools, and experiments that showcase my technical range.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-5" />
        </div>

        {/* Filter tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-green-600 text-white shadow-lg shadow-green-500/30 scale-105"
                  : "bg-gray-700/60 text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-600/30"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className={`ml-2 text-xs ${activeCategory === cat ? "text-green-200" : "text-gray-600"}`}>
                  {projects.filter((p) => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-8">
          {filtered.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-6xl mb-4">🔍</p>
            <p className="text-lg">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}