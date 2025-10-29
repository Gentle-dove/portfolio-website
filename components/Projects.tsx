// components/Projects.tsx
'use client';
import { title } from 'process';
import React from 'react';

const projects = [
  { title: 'Project 1', desc: 'Age Calculator', href: 'https://age-calculator-nu-smoky.vercel.app/' },
  { title: 'Project 2', desc: 'To-do List website', href: 'https://to-do-list-xi-six-69.vercel.app/' },
  {title: 'Project 3', desc: 'Nextjs To-do List website', href: 'https://next-todo-gstf.vercel.app/' },
  { title: 'Project 4', desc: 'Portfolio Website', href: '#' },
];

const Projects: React.FC = () => {
  return (
    <div className="py-8">
      <h3>My Projects</h3>
      <div className="project-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <a href={p.href} target="_blank" rel="noopener noreferrer">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
