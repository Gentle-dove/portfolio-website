// components/Navbar.tsx
'use client';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul id="ul-list" className="flex justify-center gap-6 md:gap-20">
        <li><a href="#home" className="text-eebbc3 font-bold">Home</a></li>
        <li><a href="#about" className="text-eebbc3 font-bold">About</a></li>
        <li><a href="#skills" className="text-eebbc3 font-bold">Skills</a></li>
        <li><a href="#projects" className="text-eebbc3 font-bold">Projects</a></li>
        <li><a href="#contact" className="text-eebbc3 font-bold">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
