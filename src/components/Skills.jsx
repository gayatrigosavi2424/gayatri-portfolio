// src/components/Skills.jsx
import React from 'react';

const skills = [
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', desc: 'Semantic structure for web pages' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', desc: 'Styling and responsive design' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', desc: 'Core scripting language for interactivity' },
  { name: 'ReactJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'Component-based frontend library' },
  { name: 'NodeJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', desc: 'Backend runtime for JS applications' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', desc: 'NoSQL database for dynamic data' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', desc: 'Scripting and AI/ML development' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', desc: 'Object-oriented programming language' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', desc: 'Relational database management' }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills & Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg hover:scale-105 transition duration-300">
            <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-400">{skill.name}</h3>
              <p className="text-sm text-gray-300">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;