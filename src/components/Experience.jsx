// src/components/Experience.jsx
import React from 'react';

const Experience = () => (
  <section id="experience" className="py-16 px-8 bg-gray-900 text-white">
    <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          role: "Smart India Hackathon – Jaldarpan",
          desc: "Frontend Developer | Built real-time data visualizations to improve UX."
        },
        {
          role: "Pixelate Virtual Classroom",
          desc: "Gamified classroom using React, WebSocket, Node.js, MongoDB."
        },
        {
          role: "Marma Point Detection",
          desc: "Used Python, OpenCV, and MediaPipe for face/hand tracking in acupressure detection."
        },
        {
          role: "Volunteer - ACUNETIX @ DIT",
          desc: "Led design team; created event branding and promotional materials."
        }
      ].map((item, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded shadow-lg hover:shadow-yellow-500 transition duration-300">
          <h3 className="text-xl font-semibold text-yellow-400">{item.role}</h3>
          <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;