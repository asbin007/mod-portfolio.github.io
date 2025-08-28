import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Experience() {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "Digital Patshala",
      duration: "3 Months",
      period: "2024",
      description: "Completed a comprehensive 3-month internship program focused on modern web development technologies and best practices.",
      achievements: [
        "Gained hands-on experience with MERN stack development",
        "Learned modern web development workflows and tools",
        "Completed real-world projects under mentorship",
        "Received internship completion certificate"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"]
    }
  ];

  const education = {
    degree: "Bachelor of Science in Computer Science and Information Technology (BSc CSIT)",
    institution: "Tribhuvan University",
    duration: "2021 - Present",
    status: "Currently Enrolled",
    relevantCourses: [
      "Web Technology",
      "Database Management System",
      "Software Engineering",
      "Data Structures and Algorithms",
      "Computer Networks",
      "Operating Systems"
    ]
  };

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
                      Key Achievements:
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
          
          {/* No Job Experience Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center py-8"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Currently seeking full-time opportunities to apply my skills and continue learning
            </p>
          </motion.div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Education
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-8 shadow-lg"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {education.degree}
              </h3>
              <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold mb-2">
                {education.institution}
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <span>{education.duration}</span>
                <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full font-medium">
                  {education.status}
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4 text-center">
                Relevant Courses Completed:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {education.relevantCourses.map((course, idx) => (
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
