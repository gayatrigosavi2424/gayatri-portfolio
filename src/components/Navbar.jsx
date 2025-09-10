// src/components/Navbar.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => (
  <nav className="bg-gray-900 text-white px-6 py-4 fixed w-full top-0 shadow-lg z-50 animate-fade-in-down">
    <div className="flex justify-between items-center">
      <div className="text-2xl font-bold text-yellow-400 animate-pulse">Gayatri</div>
      <ul className="flex gap-6 text-lg font-semibold">
        {menuItems.map((item, index) => (
          <li key={index} className="hover:text-yellow-400 transition duration-300 hover:scale-110">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;