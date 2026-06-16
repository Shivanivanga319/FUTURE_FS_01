import React from 'react';
import './index.css'; // Assume your cool water palette CSS is here

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <h2>VANGA CHAITRA SHIVANI</h2>
    </div>
    <ul className="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
    </ul>
  </nav>
);

const About = () => (
  <section id="about" className="section">
    <h2>About Me</h2>
    <p>
      Final-year B.Tech CSE student passionate about web development and technology. 
      Skilled in React, Python, HTML, CSS, JavaScript, Node.js, and MongoDB. 
      Interested in building real-world projects and continuously learning new technologies like AI and quantum computing.
    </p>
  </section>
);

const Skills = () => {
  const technicalSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'GitHub'];
  
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
      tech:'React,CSS'
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
            <small>{proj.tech}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

const Resume = () => (
  <section id="resume" className="section center-content">
    <h2>Resume</h2>
    <p>View my academic and professional qualifications.</p>
    <a 
      href="/Resume.pdf" 
      target="_blank" 
      rel="noreferrer noopener" 
      className="btn-view-resume"
    >
      View Resume
    </a>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>Connect with me:</p>
    <div className="social-links">
      <a href="https://www.linkedin.com/in/vanga-chaitra-shivani-1859bb2b9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/Shivanivanga319" target="_blank" rel="noopener noreferrer">GitHub</a>
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