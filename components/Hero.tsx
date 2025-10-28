// components/Hero.tsx
'use client';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="intro py-20 text-center">
      <h3 id="hello">Hello 👋</h3>
      <h1 id="im">I&apos;m a <span id="web">Web</span> Developer</h1>
      <p id="build">I build responsive, user-friendly websites.</p>

      <div className="circle-design" aria-hidden />
      <div className="circle-design-2" aria-hidden />
    </div>
  );
};

export default Hero;
