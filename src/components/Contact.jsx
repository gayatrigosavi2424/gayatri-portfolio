// src/components/Contact.jsx (open Gmail compose instead of Outlook form submit)
import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import resumePDF from "../assets/Gayatri_G Resume.pdf";


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=gayatrigosavi9340@gmail.com&su=Contact from ${name}&body=Name: ${name}%0DEmail: ${email}%0D%0D${message}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section id="contact" className="py-16 px-8 bg-gray-950 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Let's Connect 💬</h2>
      <p className="text-lg mb-2">I'd love to connect and collaborate!</p>
      <p>Email: <a href="mailto:gayatrigosavi9340@gmail.com" className="text-yellow-500">gayatrigosavi9340@gmail.com</a></p>
      <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto">
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} value={formData.name} className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-white" required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} value={formData.email} className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-white" required />
        <textarea name="message" placeholder="Your Message" rows="4" onChange={handleChange} value={formData.message} className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-white" required></textarea>
        <button type="submit" className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition">Send Email</button>
      </form>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Rate My Portfolio ⭐</h3>
        <div className="flex justify-center gap-2 text-yellow-500 text-3xl">
          {[1, 2, 3, 4, 5].map((val) => (
            <button
              key={val}
              onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=gayatrigosavi9340@gmail.com&su=Portfolio Rating&body=My rating is ${val}/5`, '_blank')}
              className={`hover:scale-125 transition ${val <= 0 ? 'text-yellow-400' : 'text-gray-400'}`}
            >★</button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-8 text-2xl">
        <a href="https://github.com/gayatri9340" target="_blank" rel="noreferrer" className="hover:text-yellow-400"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/gayatri-gosavi-31b302257/" target="_blank" rel="noreferrer" className="hover:text-yellow-400"><FaLinkedin /></a>
      </div>

      <div className="mt-6">
        <a href={resumePDF}
        download="Gayatri_G_Resume.pdf"
        className="inline-block px-6 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition"
        >
        Download Resume
        </a>

      </div>
    </section>
  );
};

export default Contact;
