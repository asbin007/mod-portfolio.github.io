import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Asbin Xettri
            </h3>
            <p className="text-gray-400">
              Full Stack Web Developer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#hero" className="text-gray-400 hover:text-white transition-colors duration-300">
                Home
              </a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
                Skills
              </a>
              <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300">
                Experience
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>asbin.xettri@gmail.com</p>
              <p>Kathmandu, Nepal</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            &copy; 2024 Asbin Xettri. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
