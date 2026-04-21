import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import AboutMe from './components/AboutMe.jsx';
import Skills from './components/Skills.jsx';
import Certifications from './components/Certifications.jsx';
import Migrations from './components/Migrations.jsx';
import Projects from './components/Projects.jsx';
import Clients from './components/Clients.jsx';
import FutureScope from './components/FutureScope.jsx';
import IVRFlow from './components/IVRFlow.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="app-root">
      {/* Subtle grid background */}
      <div className="hero-grid-bg" />

      <NavBar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Certifications />
        <Migrations />
        <Projects />
        <Clients />
        <FutureScope />
        <IVRFlow />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} <strong>Rajasekhar Reddy</strong> · IVR Engineer &amp; Contact Center Architect
          &nbsp;·&nbsp;
          <a href="https://github.com/rajasekarvr9" target="_blank" rel="noopener noreferrer">GitHub</a>
          &nbsp;·&nbsp;
          <a href="https://www.linkedin.com/in/raja-sekhar-607195a8" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}
