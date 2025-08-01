"use client";
import { FaNodeJs,FaServer, FaReact, FaDatabase, FaCode } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTypescript } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="h-8 w-8" />,
      skills: ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript",],
    },
    {
      title: "Backend",
      icon: <FaServer className="h-8 w-8" />,
      skills: ["Spring Boot", "Django REST", "Java", "Python", "MVC", "REST APIs"],
    },
    {
      title: "Database",
      icon: <FaDatabase className="h-8 w-8" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      title: "Tools & Others",
      icon: <FaCode className="h-8 w-8" />,
      skills: ["Git", "VS Code", "Postman", "IntelliJ IDEA"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="text-green-500 mr-3">{category.icon}</div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-600 rounded-lg p-4 hover:bg-gray-500 transition duration-300"
                  >
                    <div className="text-lg font-medium">{skill}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Level Indicator */}
        <div className="mt-16 bg-gray-700 rounded-lg p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Experience Level</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span>Full Stack</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Frontend Development</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Backend Development</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
