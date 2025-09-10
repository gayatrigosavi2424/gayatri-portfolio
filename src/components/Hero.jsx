import React from 'react'
import avatar from '../assets/icon.png'

const Hero = () => (
  <section id="home" className="min-h-screen bg-gradient-to-tr from-gray-900 via-indigo-900 to-gray-950 text-white flex flex-col justify-center items-center pt-24 px-6 text-center">
    <img
      src={avatar} 
      alt="Gayatri Avatar"
      className="w-32 h-32 rounded-full mb-4 border-4 border-yellow-500 shadow-md"
    />
    <h1 className="text-4xl font-bold animate-bounce">Gayatri Gosavi</h1>
    <p className="mt-2 text-lg italic text-yellow-400">Web Developer</p>
    <p className="mt-4 max-w-2xl text-lg">
      Creative and detail-oriented web developer passionate about turning complex problems into simple, beautiful, and intuitive solutions. Experienced with JavaScript frameworks, backend technologies, and modern design trends.
    </p>
    <a
      href="#projects"
      className="mt-6 px-6 py-2 bg-yellow-500 text-black font-medium rounded hover:bg-yellow-400 transition"
    >
      Explore My Work
    </a>

    
  </section>
);

export default Hero;
