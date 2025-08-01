'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AuroraBackground from '@/components/AuroraBackground';

export default function Home() {
  return (
    <div className="space-y-32 mb-32">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
          <div className="absolute inset-0">
            <AuroraBackground />
          </div>
        </div>
        <div className="relative z-10 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-6xl font-bold text-white mb-6"
            >
              Hi, I'm <span className="text-cyan-400">Your Name</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-200 mb-4"
            >
              Automating Infrastructure • Scaling Applications • Building Reliable Systems
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Specializing in cloud infrastructure, CI/CD pipelines, and building scalable, resilient systems that empower teams to deliver faster.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-4"
            >
              <motion.a
                href="#projects"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 1)', color: '#2563eb' }}
                transition={{ duration: 0.2 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 1)', color: '#2563eb' }}
                transition={{ duration: 0.2 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="about" 
        className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-6"
            >
              I'm a passionate full-stack developer with experience in building web applications
              using modern technologies. I love solving complex problems and creating intuitive
              user experiences.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-6"
            >
              My journey in web development started X years ago, and since then, I've worked
              on various projects ranging from small business websites to complex enterprise
              applications.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-64 md:h-full"
          >
            <div className="bg-gray-200 w-full h-full rounded-lg"></div>
            {/* Add your image here */}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="projects" 
        className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card */}
          {[1, 2, 3].map((project, index) => (
            <motion.div
              key={project}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gray-200"></div>
                {/* Add project image here */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-600 mb-4">
                  A brief description of the project and what technologies were used.
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo
                  </a>
                  <span className="text-gray-300">|</span>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <section id="skills" className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            'JavaScript',
            'TypeScript',
            'React',
            'Node.js',
            'Python',
            'Docker',
            'AWS',
            'Git',
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-gray-800 font-medium">{skill}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
