import { motion } from 'framer-motion';

function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      icon: "🎨",
      skills: ["React", "Redux", "TypeScript", "HTML5/CSS3", "JavaScript (ES6+)"]
    },
    {
      name: "Backend", 
      icon: "⚙️",
      skills: ["Node.js", "Express.js"]
    },
    {
      name: "Databases",
      icon: "🗄️",
      skills: ["MongoDB", "PostgreSQL", "SQL", "Supabase"]
    },
    {
      name: "Tools & Other",
      icon: "🛠️",
      skills: ["Git", "RESTful APIs", "JWT Authentication", "C", "C++"]
    },
    {
      name: "Languages",
      icon: "🌐",
      skills: ["Nepali (Native)", "English (Fluent)"]
    },
    {
      name: "Interests",
      icon: "🚀",
      skills: ["Open-Source Contribution", "Algorithmic Trading", "Technical Blogging", "AI & Machine Learning"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="section-title">Skills & Technologies</h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-16">
          Experienced Full Stack Developer with expertise across modern web technologies and best practices.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-center mb-4">
                <span className="text-4xl mb-3 block">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-accent-50 dark:hover:bg-accent-900 transition-colors duration-200"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Active Vibe Coder, contributing to multiple community projects and collaborative builds.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
