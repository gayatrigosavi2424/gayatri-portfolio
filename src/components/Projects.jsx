// src/components/Projects.jsx
import React from 'react';
import ecommerceImg from '../assets/ecommerce.png'
import marmaPt from '../assets/marma-points.jpg'
import english from '../assets/speakAndImprove.png'
import jaldarpan from '../assets/jaldarpan.png'

const projects = [
  {
    title: 'Post-Quantum Cryptography Secure Data Transfer',
    desc: 'Post-Quantum Cryptography secure data transfer system for federated learning.',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
    code: 'https://github.com/gayatrigosavi2424/pqc-secure-transfer',
    live: 'https://github.com/gayatrigosavi2424/pqc-secure-transfer'
  },
  {
    title: 'E-Commerce Website',
    desc: 'Built with React.js + Vite. Features include product browsing, cart management, and payment simulation.',
    img: ecommerceImg,
    code: 'https://github.com/gayatri/ecommerce',
    live: 'https://ecommerce-seven-beryl.vercel.app/'
  },
  {
    title: 'Marma Point Detection',
    desc: 'AI-powered facial recognition for acupressure points using OpenCV and MediaPipe.',
    img: marmaPt,
    code: 'https://github.com/gayatri/marma-point',
    live: 'https://marma-demo.vercel.app/'
  },
  {
    title: 'English Speak And Improve',
    desc: 'English speaking app to improve english and grammar skills using React and OpenAI API.',
    img: english,
    code: english,
    live: 'https://fluentease-english-learning.vercel.app/'
  },
  {
    title: 'JALDARPAN (Smart India Hackathon 2024 Project)',
    desc: 'Real-time groundwater data platform with dynamic charts and sensor integration.',
    img: jaldarpan,
    code: 'https://github.com/gayatri/jaldarpan',
    live: 'https://jaldarpan-sih.vercel.app'
  }
];

const Projects = () => (
  <section id="projects" className="py-16 px-8 bg-gray-950 text-white">
    <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">{project.title}</h3>
            <p className="mb-4 text-sm text-gray-300">{project.desc}</p>
            <div className="flex justify-between">
              <a href={project.code} className="px-3 py-1 bg-yellow-600 text-black rounded hover:bg-yellow-500" target="_blank">Code</a>
              <a href={project.live} className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-500" target="_blank">Live</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;