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
            Alozie Royal Chiagozie is a passionate and driven web developer from Nigeria, specializing in front-end
            development and actively working towards becoming a full-stack developer. With a strong foundation in HTML, CSS, JavaScript, 
            and React, I love crafting beautiful, responsive websites that are both visually engaging and functionally 
            robust. I&apos;m currently honing my skills at ALT School, where
            I&apos;m learning best practices and deepening my expertise in modern front-end technologies. I bring my projects to life using VS Code, manage code efficiently with Git, 
            and continuously sharpen my problem-solving skills by tackling challenges on LeetCode. I&apos;m committed to writing clean, optimized code and building intuitive, user-centered experiences. 
            Beyond coding, I&apos;m passionate about using technology to solve real-world problems and improve lives. From developing interactive web apps to collaborating on exciting projects or diving into complex algorithms, 
            I&apos;m always eager to grow and explore new possibilities. Let&apos;s connect! If you&apos;re interested in teaming up, 
            exchanging ideas, or just chatting about tech — I&apos;m all in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
