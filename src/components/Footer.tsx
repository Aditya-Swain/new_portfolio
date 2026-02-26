import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaCode } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ];

  const socials = [
    {
      href: "https://github.com/Aditya-Swain",
      icon: <FaGithub className="h-5 w-5" />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/aditya-swain-647563289",
      icon: <FaLinkedin className="h-5 w-5" />,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com",
      icon: <FaTwitter className="h-5 w-5" />,
      label: "Twitter",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <FaCode className="text-green-400 h-5 w-5" />
              <span className="text-lg font-bold tracking-tight">Aditya Swain</span>
            </div>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200 hover:underline underline-offset-4"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="bg-gray-700 hover:bg-green-500/20 border border-gray-600 hover:border-green-500/40 p-2.5 rounded-xl text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-gray-700/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Aditya Swain. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <FaHeart className="text-green-400 h-3 w-3" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;