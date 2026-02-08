"use client";
import Image from "next/image";
import {
  FaGraduationCap,
  FaLanguage,
  FaTools,
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
// import mine from "../../../public/images/mine.jpg";

// --- Data Definitions ---

const CONTACT_INFO = [
  { icon: FaMapMarkerAlt, label: "Location", value: "Bhubaneswar, Odisha" },
  { icon: FaEnvelope, label: "Email", value: "adityaswain817@gmail.com" },
  { icon: FaPhone, label: "Phone", value: "+91-7846931220" },
  { icon: FaUser, label: "Role", value: "Full Stack Developer" },
];

const EDUCATION_DATA = [
  {
    title: "B.Sc (Mathematics)",
    institution: "Berhampur University",
    year: "2020-2023",
  },
  {
    title: "Intermediate of Science",
    institution: "R.C.M Science College, Khallikote",
    year: "2018-2020",
  },
];

const EXPERIENCE_DATA = [
  {
    role: "Frontend Developer",
    company: "CPS Private Limited",
    period: "Aug, 2025 - Present",
    points: [
      "Developed cross-platform mobile and web applications using React Native and Expo, ensuring consistent performance and user experience.",
      "Built reusable, scalable, and maintainable UI components to accelerate development and improve code quality.",
      "Implemented responsive designs and optimized screens for multiple device sizes across Android and web platforms.",
      "Integrated REST APIs and handled asynchronous data flows to deliver dynamic, data-driven applications.",
      "Enhanced application performance by optimizing rendering, reducing load times, and minimizing unnecessary re-renders.",
      "Collaborated closely with designers, backend developers, and stakeholders in agile environments to deliver production-ready features.",
      "Debugged and resolved complex UI and platform-specific issues to maintain application stability.",
      "Participated in code reviews and followed best practices for version control, clean architecture, and modern frontend development."
    ],
  },
  {
    role: "Software Developer",
    company: "NobX IT Solutions",
    period: "Jun, 2024 - Aug, 2025",
    points: [
      "Built reusable and modular React.js components to enhance maintainability and performance across multiple projects.",
      "Developed RESTful APIs using Django REST Framework and Spring Boot for scalable microservices.",
      "Integrated Google Drive, Dropbox, and OneDrive APIs to perform file operations (copy, move, delete) across multiple cloud platforms.",
      "Implemented asynchronous task execution with Spring Boot Batch and ExecutorService, improving concurrency and backend efficiency.",
      "Designed full-stack solutions for invoice management, including CSV bulk upload, PDF generation, and email integration.",
      "Collaborated with team members in code reviews, Git version control, and agile sprint meetings to ensure high-quality deliverables.",
      "Performed debugging, troubleshooting, and performance tuning of both frontend and backend components.",
      "Created custom components, forms, and interfaces for user applications.",
    ],
  },
  {
    role: "Student Intern",
    company: "QSpiders, Bhubaneswar",
    period: "Jun, 2023 - Feb, 2024",
    points: [
      "Developed applications using Java, Spring MVC, Hibernate and Spring Boot.",
      "Optimized SQL queries to improve the application's speed and scalability.",
      "Designed and maintained user-facing webpages using HTML, CSS, JavaScript and jQuery.",
      "Created custom responsive designs that optimized the website layout for various devices.",
      "Debugged existing code to identify and fix bugs or performance issues.",
      "Developed stored procedures, functions and triggers to support application requirements.",
    ],
  },
];

const SKILLS_DATA = {
  frontend: [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "Bootstrap5", level: 85, icon: "🅱️" },
    { name: "Tailwind CSS", level: 85, icon: "🎨" },
    { name: "HTML5/CSS3", level: 90, icon: "🌐" },
    { name: "JavaScript", level: 95, icon: "⚡" },
    { name: "jQuery", level: 85, icon: "🌀" },

  ],
  backend: [
    { name: "Spring Boot", level: 85, icon: "🍃" },
    { name: "Java", level: 85, icon: "☕" },
    { name: "Django", level: 85, icon: "🟩" },
    { name: "REST API", level: 85, icon: "🔌" },
    { name: "MySQL", level: 90, icon: "🐬" },
    { name: "PostgreSQL", level: 75, icon: "🐘" },
  ],
};

const LANGUAGES_DATA = [
  { name: "English", level: "Professional", percentage: 80, icon: "🇬🇧" },
  { name: "Hindi", level: "Professional", percentage: 80, icon: "🇮🇳" },
  { name: "Odia", level: "Native", percentage: 95, icon: "🇮🇳" },
];

const SOFT_SKILLS_DATA = [
  { name: "Problem Solving", icon: "🧩" },
  { name: "Team Leadership", icon: "👥" },
  { name: "Communication", icon: "💬" },
  { name: "Time Management", icon: "⏰" },
  { name: "Multi-tasking", icon: "🔄" },
  { name: "Adaptability", icon: "🦋" },
  { name: "Critical Thinking", icon: "🤔" },
  { name: "Creativity", icon: "🎨" },
];



// --- Reusable Components ---

// 1. Add "any" type to the props to satisfy TypeScript
const ContactItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-center gap-3 group">
    <div className="bg-gray-600 p-3 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
      <Icon className="text-green-500 h-5 w-5" />
    </div>
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-base">{value}</p>
    </div>
  </div>
);

const SectionCard = ({ icon: Icon, title, children, className = "" }: { icon: any, title: string, children: React.ReactNode, className?: string }) => (
  <div
    className={`bg-gray-700 rounded-2xl p-8 shadow-xl transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden ${className}`}
  >
    {/* Decorative Backgrounds */}
    {className.includes("relative") && (
      <>
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>
      </>
    )}

    <div className="flex items-center gap-4 mb-8">
      <div className="bg-green-500/10 p-3 rounded-xl">
        <Icon className="h-8 w-8 text-green-500" />
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    {children}
  </div>
);

const TimelineItem = ({
  title,
  subtitle,
  date,
  details = [],
  isExperience = false,
}: { title: string, subtitle: string, date: string, details?: string[], isExperience?: boolean }) => (
  <div
    className={`relative pl-8 border-l-2 ${isExperience
      ? "pb-8 border-green-500/20 group hover:border-green-500/40 transition-colors duration-300"
      : "border-green-500"
      }`}
  >
    {/* Dot */}
    <div
      className={`absolute w-4 h-4 rounded-full -left-[9px] ${isExperience
        ? "top-0 bg-gray-800 border-2 border-green-500 group-hover:bg-green-500 transition-colors duration-300"
        : "top-2 bg-green-500"
        }`}
    ></div>

    {/* Content */}
    <div className={isExperience ? "space-y-4" : ""}>
      <div>
        <h3
          className={`text-xl font-semibold ${isExperience ? "text-green-400 font-bold" : ""
            }`}
        >
          {title}
        </h3>
        {isExperience ? (
          <div className="flex items-center gap-2 text-gray-400 mt-1">
            <span className="font-medium">{subtitle}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
        ) : (
          <>
            <p className="text-green-400">{subtitle}</p>
            <p className="text-gray-400">{date}</p>
          </>
        )}
      </div>

      {isExperience && details.length > 0 && (
        <ul className="space-y-3 text-gray-300">
          {details.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const SkillBar = ({ name, level, icon }: { name: string, level: number, icon: string }) => (
  <div className="group">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <span className="text-xl">{icon}</span>
        <span className="font-medium">{name}</span>
      </div>
      <span className="text-green-400 font-medium">{level}%</span>
    </div>
    <div className="w-full h-2.5 bg-gray-600 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-500 group-hover:from-green-400 group-hover:to-green-300"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const SkillCategory = ({ title, skills }: { title: string, skills: any[] }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-3">
      <div className="w-1 h-6 bg-green-500 rounded-full"></div>
      <h3 className="text-xl font-semibold text-green-400">{title}</h3>
    </div>
    <div className="space-y-4">
      {skills.map((skill) => (
        <SkillBar key={skill.name} {...skill} />
      ))}
    </div>
  </div>
);
// --- Main Component ---

export default function About() {
  return (
    <div className="min-h-screen bg-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative">
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Profile Image */}
            <div className="lg:w-1/3">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto group">
                <Image
                  src="/images/mine.jpg"
                  alt="Aditya Swain"
                  fill
                  className="rounded-2xl object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-green-500 rounded-2xl -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
                <div className="absolute -top-4 -left-4 w-full h-full border-4 border-gray-600 rounded-2xl -z-10 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl text-green-400 mb-2">Hello, I'm</h2>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                    Aditya Swain
                  </h1>
                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-300">
                    <span className="text-2xl">Full Stack Developer</span>
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-green-400">Available for Work</span>
                  </div>
                </div>

                <p className="text-xl text-gray-300">
                  A passionate Full Stack Developer focused on creating efficient
                  and scalable web applications. I combine technical expertise
                  with creative problem-solving to deliver exceptional results.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="/aditya_resume.pdf"
                    download
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    <FaDownload className="h-5 w-5" />
                    Download CV
                  </a>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Aditya-Swain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg transition-colors duration-300"
                    >
                      <FaGithub className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aditya-swain-647563289"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg transition-colors duration-300"
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 bg-gray-700/50 p-6 rounded-xl backdrop-blur-sm">
                  {CONTACT_INFO.map((item, index) => (
                    <ContactItem key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">

            {/* Education Section */}
            <SectionCard icon={FaGraduationCap} title="Education">
              <div className="space-y-8">
                {EDUCATION_DATA.map((edu, index) => (
                  <TimelineItem
                    key={index}
                    title={edu.title}
                    subtitle={edu.institution}
                    date={edu.year}
                  />
                ))}
              </div>
            </SectionCard>

            {/* Experience Section */}
            <SectionCard
              icon={FaGraduationCap}
              title="Work Experience"
              className="relative"
            >
              <div className="space-y-8">
                {EXPERIENCE_DATA.map((exp, index) => (
                  <TimelineItem
                    key={index}
                    title={exp.role}
                    subtitle={exp.company}
                    date={exp.period}
                    details={exp.points}
                    isExperience={true}
                  />
                ))}
              </div>
            </SectionCard>
          </div>

          {/* Right Column - Skills Section */}
          <div className="space-y-12">

            {/* Technical Skills */}
            <SectionCard
              icon={FaTools}
              title="Technical Skills"
              className="relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SkillCategory
                  title="Frontend Development"
                  skills={SKILLS_DATA.frontend}
                />
                <SkillCategory
                  title="Backend Development"
                  skills={SKILLS_DATA.backend}
                />
              </div>
            </SectionCard>

            {/* Languages */}
            <div className="bg-gray-700 rounded-2xl p-8 shadow-xl transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="bg-green-500/10 p-3 rounded-xl">
                  <FaLanguage className="h-8 w-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold">Languages</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {LANGUAGES_DATA.map((language) => (
                  <div
                    key={language.name}
                    className="bg-gray-600/50 rounded-xl p-6 hover:bg-gray-600/70 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl"></div>
                    <div className="flex flex-col items-center text-center">
                      <span className="text-4xl mb-4">{language.icon}</span>
                      <h3 className="text-lg font-medium mb-2">
                        {language.name}
                      </h3>
                      <span className="text-green-400 mb-4">
                        {language.level}
                      </span>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-500 group-hover:from-green-400 group-hover:to-green-300"
                          style={{ width: `${language.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-gray-700 rounded-2xl p-8 shadow-xl transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="bg-green-500/10 p-3 rounded-xl">
                  <FaTools className="h-8 w-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold">Soft Skills</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {SOFT_SKILLS_DATA.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-600/50 rounded-xl p-6 text-center hover:bg-gray-600 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl"></div>
                    <span className="text-4xl mb-4 block">{skill.icon}</span>
                    <p className="text-[11px] group-hover:text-green-400 transition-colors duration-300">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}