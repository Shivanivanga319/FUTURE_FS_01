import React from 'react';
import './index.css'; 

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <h2>VANGA CHAITRA SHIVANI</h2>
    </div>
    <ul className="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#resume">Resume</a></li>
    </ul>
  </nav>
);

const About = () => (
  <section id="about" className="section">
    <h2>About Me</h2>
    <p>
      I am a final-year B.Tech Computer Science student building a solid foundation in software development. 
      My current focus spans full-stack web development 
    </p>
    <p>
      I enjoy creating practical, real-world projects and am actively expanding my knowledge through coursework 
      in emerging fields Quantum Computing.
    </p>
  </section>
);

const Skills = () => {
  const technicalSkills = [
    'HTML & CSS', 'JavaScript', 'React',  
    'Node.js', 'MongoDB', 'Python',
     'GitHub'
  ];
  
  return (
    <section id="skills" className="section">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {technicalSkills.map((skill, index) => (
          <div key={index} className="skill-badge">{skill}</div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projectList = [
    {
      title: 'Mini CRM',
      description: 'A full-stack Client Lead Management System (Mini CRM) designed to securely store, track, and manage incoming prospect inquiries using a protected admin panel with real-time database syncing, dynamic search filtering, live analytics, and interactive follow-up note logging.',
      tech: 'React, Node.js, mongoDB, CSS'
    },
    {
      title:'Portfolio',
      description: 'A simple, responsive personal website built with React to showcase my projects, resume, and technical skills.',
      tech:'React, CSS'
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-container">
        {projectList.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-stack">
              {proj.tech.split(', ').map((t, i) => (
                <span key={i} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Resume = () => (
  <section id="resume" className="section center-content">
    <h2>Resume</h2>
    <div className="resume-card">
      <h3>Want the full details?</h3>
      <p>Click below to view or download my complete academic and professional qualifications.</p>
      <a 
        href="/Resume.pdf" 
        target="_blank" 
        rel="noreferrer noopener" 
        className="btn-view-resume"
      >
        View Resume PDF
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>© 2026 Vanga Chaitra Shivani. Built with React.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/vanga-chaitra-shivani-1859bb2b9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Shivanivanga319" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default App;