"use client";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import image1 from "../../../public/images/project/inv_rocket_1.png"
import image2 from "../../../public/images/project/cloud.png"
import image3 from "../../../public/images/project/your_stock.png"
import image4 from "../../../public/images/project/banking.png"
import image5 from "../../../public/images/project/barber_shop.png"
import image6 from "../../../public/images/project/stock1.png"
import image7 from "../../../public/images/project/smart_reply.png"




const projects = [

  {
    title: "SmartReply Chrome Extension",
    description:
      "An AI-powered Chrome extension for Gmail and LinkedIn that generates context-aware replies with selectable tones. Designed to save time and improve productivity by instantly crafting professional, friendly, or casual responses using the Gemini API, without leaving the current email or chat window.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Spring Boot",
      "Gemini API",
      "Chrome Extension Manifest V3",
      "DOM Manipulation"
    ],
    image: image7,  // Replace with an actual screenshot of your extension
    github: "https://github.com/Aditya-Swain/smart-reply-extension", 
    demo: "https://www.linkedin.com/posts/aditya-swain-647563289_ai-geminiai-chromeextension-activity-7359199294962171904-dCKC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYHCdcB84JYOvuao5zNBx8ZqmSpm70SQm8",  
    features: [
      "Custom 'AI Reply' button injected into Gmail and LinkedIn DM UI",
      "Dropdown tone selector with multiple options like Professional, Casual, and Friendly",
      "Captures current email or DM content and sends it to a Spring Boot backend",
      "Generates AI-powered responses in real-time using Gemini API",
      "Seamlessly integrates with Gmail and LinkedIn without disrupting the native UI",
      "Lightweight, responsive design built with Manifest V3 for Chrome",
      "Improves reply efficiency by reducing manual typing time"
    ]
  },
  {
    title: "Cloud Drive",
    description:
      "A multi-cloud file management application that allows users to connect and manage Google Drive, Dropbox, and OneDrive accounts in one place. It supports asynchronous file operations like copy, move, and delete across cloud platforms with real-time task tracking and status updates.",
    technologies: [
      "React.js",
      "Spring Boot",
      "Django REST",
      "OAuth 2.0",
      "MySQL",
      "Tailwind CSS",
      "Material-UI",
      "Google Drive API",
      "Dropbox API"
    ],
    image: image2,
    github: "https://github.com/Aditya-Swain/cloud-drive-frontend",
    demo: "#",
    features: [
      "OAuth 2.0 authentication to securely connect multiple cloud accounts",
      "View, navigate, and manage files across Google Drive, Dropbox, and OneDrive",
      "Perform file operations: copy, move, and delete across cloud platforms",
      "Asynchronous task processing with Spring Boot Batch & ExecutorService",
      "Real-time task tracking with progress and status updates using Django + MySQL",
      "RESTful microservice architecture for scalability and maintainability"
    ]
  }, {
    title: "Invoice Billing Application",
    description:
      "A full-stack invoice management web application that allows businesses to create, manage, and share invoices seamlessly. The app supports PDF generation, CSV invoice upload, and real-time client communication through email. It features a modern, interactive interface with dynamic tables and charts for better invoice tracking.",
    technologies: [
      "React.js",
      "Django REST",
      "MySQL",
      "AG_Grid",
      "Tailwind CSS",
      "Material-UI",
      "Recharts"
    ],
    image: image1,  // Replace with an actual image if available
    github: "#",  // Add your GitHub repository link
    demo: "https://invoice-rocket.blogswrite.com",  // Add live demo URL if available
    features: [
      "User authentication and secure access to invoices",
      "Create, edit, and delete invoices with itemized details",
      "Generate professional PDF invoices",
      "Send invoices to clients via email directly from the app",
      "Bulk invoice upload through CSV files",
      "Dynamic and interactive tables with AG-Grid",
      "Responsive and modern UI using Tailwind CSS and MUI",
      "REST API backend for scalable and efficient operations"
    ]
  },
  {
    title: "Stock Management & Recovery Calculation App",
    description:
      "A real-time stock management and analysis application that enables users to track their trades, visualize stock trends, and calculate recovery points. Users can manually add trades or upload them in bulk via CSV. The system features a real-time dashboard, recovery/profit calculations, and historical trade tracking using live data from the Yahoo Finance API.",
    technologies: ["React.js", "Django REST", "PostgreSQL", "Material-UI", "AG-Grid", "Tailwind CSS", "Recharts", "Yahoo Finance API"],
    image: image3,
    github: "https://github.com/Aditya-Swain/stock-analysis-frontend",
    demo: "#",
    features: [
      "Secure login and JWT-based authentication for user accounts",
      "Real-time dashboard displaying live stock prices and trends",
      "Add trades manually or via bulk CSV upload for quick portfolio management",
      "Recovery and profit calculation for investment insights",
      "Track historical trades and portfolio performance over time",
      "Live stock data integration with Yahoo Finance API",
      "Interactive charts (Recharts) and dynamic data tables (AG-Grid)",
      "JWT-based authentication for security",
      "Responsive UI with Tailwind CSS",
    ],
  },

  {
    title: "Online Banking System",
    description:
      "TA full-stack online banking application that enables users to manage bank accounts, check balances, view transaction history, and perform essential banking operations. The system provides separate dashboards for customers and admins, offering secure and efficient banking services with a user-friendly interface.",
    technologies: ["Spring Boot", "CSS3", "Bootstrap", "JSP", "MySQL"],
    image: image4,
    github: "https://github.com/Aditya-Swain/online_banking",
    demo: "#",
    features: [
      "Account login and secure ATM PIN verification (Customer Side)",
      "View account balance and detailed transaction history",
      "Transfer funds between accounts",
      "Request checkbook and update account details",
      "Manage customer accounts and verify transactions (Admin Side)",
      "Approve/reject checkbook requests",
      "Monitor and maintain overall banking operations",
      "Backend powered by Spring Boot and MySQL for secure data storage"
    ],
  },
  {
    title: "Barber Shop",
    description:
      "A responsive and user-friendly website designed for a local barber shop to showcase services and contact details. The website provides an engaging front-end experience with a modern layout and smooth navigation across devices.",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    image: image5,
    github: "https://github.com/Aditya-Swain/Barber_shop_",
    demo: "https://barbershopgg.netlify.app",
    features: [
      "Fully responsive design for mobile, tablet, and desktop devices",
      "Service listings",
      "Contact and location information for easy customer access",
      "Smooth navigation and interactive UI elements using JavaScript",
      "Lightweight, fast-loading, and SEO-friendly static website"
    ],
  },
  {
    title: "Stock Tracking App",
    description:
      "A lightweight and responsive real-time stock market dashboard for tracking Indian stocks. Users can view live price updates, analyze stock trends, and interact with visualized data through an intuitive and modern interface.",
    technologies: [
      "React.js",
      "FastAPI",
      "Yahoo Finance API",
      "Chart.js",
      "Tailwind CSS",
      "lucide-react"
    ],
    image: image6,
    github: "https://github.com/Aditya-Swain/stock-dashboard-frontend",
    demo: "https://trackstockhistory.netlify.app",
    features: [
      "Real-time stock price tracking for the Indian market",
      "Interactive and responsive charts using Chart.js",
      "Clean and modern UI built with Tailwind CSS and lucide-react icons",
      "Live data fetching from Yahoo Finance API",
      "Lightweight, fast-loading design for a smooth user experience"
    ],
  }

];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Project Image */}
                <div className="lg:w-1/2 relative h-[300px] lg:h-auto flex justify-center items-center">
                  <Image
                    src={project?.image || ""}
                    alt={project.title}
                    fill
                    className="object-contain w-full h-full"
                  />
                </div>




                {/* Project Details */}
                <div className="lg:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-600 text-sm rounded-full px-3 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-300"
                        >
                          <FaArrowRight className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    {(project.github != '#') && <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      <FaGithub className="h-5 w-5" />
                      <span>View Code</span>
                    </a>}
                    {(project.demo != '#') &&
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors duration-300"
                      >
                        <FaExternalLinkAlt className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
