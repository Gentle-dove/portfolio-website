// components/Skills.tsx
'use client';
import React from 'react';

const skills = [
  { img: '/js.jpg', name: 'JavaScript' },
  { img: '/html.jpg', name: 'HTML' },
  { img: '/css.jpg', name: 'CSS' },
  { img: '/vscode.jpg', name: 'VS Code' },
  { img: '/github.jpg', name: 'GitHub' },
];

const Skills: React.FC = () => {
  return (
    <div className="py-8">
      <h3>My Skills</h3>
      <div className="skill-grid">
        {skills.map((s) => (
          <div key={s.name}>
            <a href="#" aria-label={s.name}>
              <img src={s.img} alt={s.name} />
              <p>{s.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
