import { useState } from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Shoe Store (Final Year Project)",
      description: "Built a full-featured shopping platform with advanced multi-attribute product filtering, persistent cart management, and a secure, multi-step checkout flow.",
      image: "👟",
      category: "fullstack",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/asbin007",
      live: "#",
      features: [
        "Advanced multi-attribute product filtering",
        "Persistent cart management",
        "Secure, multi-step checkout flow"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Stream Me",
      description: "Developed a content streaming platform with an Express-based backend, RESTful API design, and secure session handling for user authentication.",
      image: "🎬",
      category: "fullstack",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/asbin007",
      live: "https://aurascreen.me",
      features: [
        "Content streaming platform",
        "RESTful API design",
        "Secure session handling for user authentication"
      ],
      color: "from-red-500 to-pink-600"
    },
    {
      id: 3,
      title: "Seasonal Jersey Store",
      description: "Built a responsive e-commerce apparel storefront with dynamic, filterable product listings and a streamlined cart-to-checkout flow.",
      image: "👕",
      category: "frontend",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/asbin007",
      live: "https://alexjersey.rocks",
      features: [
        "Dynamic, filterable product listings",
        "Streamlined cart-to-checkout flow",
        "Responsive design"
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      id: 4,
      title: "Cafe Website",
      description: "Built an interactive restaurant site with dynamic menu management and an online table reservation system.",
      image: "☕",
      category: "frontend",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/asbin007",
      live: "#",
      features: [
        "Dynamic menu management",
        "Online table reservation system",
        "Interactive UI design"
      ],
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 5,
      title: "Sports Collection Site",
      description: "Built a merchandise storefront with integrated cart and multi-step checkout workflows.",
      image: "⚽",
      category: "frontend",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/asbin007",
      live: "#",
      features: [
        "Merchandise storefront",
        "Integrated cart system",
        "Multi-step checkout workflows"
      ],
      color: "from-purple-500 to-indigo-600"
    }
  ];
   

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="section-title">My Projects</h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-16">
          Here are some of the projects I've built during my studies and internship
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-accent-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-accent-100 dark:hover:bg-accent-900'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className={`relative h-48 bg-gradient-to-br ${project.color} rounded-t-xl`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl filter drop-shadow-lg">{project.image}</span>
                </div>
                {/* Project Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">
                    {project.category === 'fullstack' ? 'Full Stack' : project.category === 'frontend' ? 'Frontend' : 'Backend'}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-accent-500 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 dark:bg-gray-600 text-white text-center py-3 px-4 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>View Code</span>
                  </a>
                  
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-accent-500 text-white text-center py-3 px-4 rounded-lg hover:bg-accent-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/asbin007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-800 dark:bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View My GitHub Profile</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
