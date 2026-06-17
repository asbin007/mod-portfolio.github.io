import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer (Freelance)",
      company: "Freelance",
      duration: "Present",
      period: "2023 - Present",
      description: "Working as a freelance full-stack developer focusing on the MERN ecosystem.",
      achievements: [
        "Architected and deployed full-stack web applications using the MERN ecosystem.",
        "Developed secure RESTful APIs with Node.js/Express and optimized MongoDB schemas.",
        "Managed version control and team-based workflows using Git."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"]
    },
    {
      title: "MERN Stack Training",
      company: "Digital Pathshala",
      duration: "2023",
      period: "2023",
      description: "Completed intensive development training; integrated TypeScript for robust code maintainability.",
      achievements: [
        "Completed intensive development training",
        "Integrated TypeScript for robust code maintainability"
      ],
      technologies: ["TypeScript", "MERN Stack"]
    }
  ];

  const education = [
    {
      degree: "BSc. Computer Science & IT",
      institution: "Prithvi Narayan Campus",
      duration: "2022 - 2026",
      status: "Final Year Project: E-Commerce Shoe Store",
      relevantCourses: [
        "Web Technology",
        "Database Management System",
        "Software Engineering",
        "Data Structures and Algorithms",
        "Computer Networks",
        "Operating Systems"
      ]
    },
    {
      degree: "High School (+2)",
      institution: "Janta School",
      duration: "2016 - 2021",
      status: "Completed",
      relevantCourses: []
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="section-title">Experience & Education</h1>
        
        {/* Work Experience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Work Experience
          </h2>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-8"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-200 dark:bg-accent-700"></div>
              
              {/* Timeline Dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-accent-500 rounded-full border-4 border-white dark:border-gray-800"></div>
              
              {/* Content */}
              <div className="ml-16">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold mb-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {exp.period}
                      </p>
                      <p className="text-sm text-accent-500 font-medium">
                        {exp.duration}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-accent-500 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Education
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-8 shadow-lg"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-col items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-4">
                    <span>{edu.duration}</span>
                    <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full font-medium">
                      {edu.status}
                    </span>
                  </div>
                </div>
                
                {edu.relevantCourses.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-4 text-center">
                      Relevant Courses:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {edu.relevantCourses.map((course, idx) => (
                        <div
                          key={idx}
                          className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                          <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                            {course}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
