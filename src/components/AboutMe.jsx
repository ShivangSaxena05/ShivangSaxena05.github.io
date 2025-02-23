import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const aboutMePoints = [
    { title: '3rd-year B.Tech CSE student', description: 'at GL Bajaj Group of Institutions.' },
    { title: 'Web Development Expertise', description: 'Proficient in HTML, CSS, JavaScript, and MERN stack.' },
    { title: 'Programming Skills', description: 'Experienced in Java, Python, and C.' },
    { title: 'AI Enthusiast', description: "Passionate about exploring emerging technologies, including Meta's AI advancements." },
    { title: 'Skill Upgradation', description: 'Actively engage in activities like karate, working out, and drawing.' },
    { title: 'Adaptable', description: 'Easily adjust to new environments and build connections quickly.' },
    { title: 'Self-Motivated', description: 'Overcome self-doubt through music and continuous growth.' },
    { title: 'Growth Mindset', description: 'Always eager to embrace new challenges and opportunities.' },
  ];

  return (
    <section id="content" className="py-12 text-white mt-12">
      <div className="container mx-auto p-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-8"
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto p-6" style={{ height: 'auto' }}>
          {aboutMePoints.map((point, index) => (
            <div key={index} className=" py-4 border-b border-gray-300 last:border-b-0">
              <p className="font-bold text-lg">{point.title}</p>
              <p className="mt-2 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
