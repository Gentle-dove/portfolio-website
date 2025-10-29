// components/About.tsx
'use client';
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h3>About Me</h3>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap: '1rem', width: '100%'}}>
        <div className="about-image" style={{display: 'none'}}>
          {/* If you want the circular image to show on desktop, remove display:none in CSS or adjust here */}
          <img src="/me.jpg" alt="Alozie Royal Chiagozie" id="my-image" width={200} height={250}/>
        </div>

        <div className="about-text">
          <p>
            Alozie Royal Chiagozie is a passionate and detail-oriented web developer from Nigeria,
             specializing in front-end development and advancing toward full-stack expertise. With a strong command of HTML, CSS, JavaScript, and React,
              I focus on building responsive, visually appealing, and user-friendly web applications that deliver seamless digital experiences.<br></br>

I am a graduate of the Frontend Engineering program at ALT School Africa, where I developed a deep understanding of modern frontend technologies, clean 
coding standards, and user-centered design principles. I leverage tools like VS Code for efficient development, Git and GitHub for version control, and 
continuously enhance my problem-solving skills through real-world projects and coding challenges.<br></br>

Beyond coding, I am driven by a desire to use technology as a tool for solving real-world problems and
 improving everyday life. Through my brand, GentleDev, I aim to create, teach, and collaborate on impactful software solutions that inspire growth and innovation.<br></br>

Let&apos;s connect — whether you&apos;re interested in collaborating, exchanging ideas, or exploring new 
opportunities in tech, I&apos;m always open to meaningful professional conversations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
