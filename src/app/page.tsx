"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic gradient blobs that move with mouse */}
        <div
          className="absolute w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${
              mousePosition.y * 20
            }px)`,
            top: "20%",
            left: "30%",
          }}
        ></div>
        <div
          className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${
              mousePosition.y * -20
            }px)`,
            top: "40%",
            right: "20%",
          }}
        ></div>
        <div
          className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${
              mousePosition.y * 15
            }px)`,
            bottom: "20%",
            left: "40%",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="space-y-8 max-w-3xl">
          <div className="space-y-4">
            <h2 className="text-2xl text-green-400 font-medium tracking-wide animate-fade-in-up">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-green-400 to-green-600 animate-fade-in-up animation-delay-200">
              Aditya Swain
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 animate-fade-in-up animation-delay-400">
              Full Stack Developer crafting modern web experiences
            </p>
          </div>

          <div className="flex gap-6 animate-fade-in-up animation-delay-600">
            <Link
              href="/projects"
              className="group flex items-center gap-2 bg-green-600/90 hover:bg-green-600 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              View My Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/about"
              className="group flex items-center gap-2 bg-gray-800/90 hover:bg-gray-800 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              About Me
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Add this to your global CSS file (globals.css) */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </main>
  );
}
