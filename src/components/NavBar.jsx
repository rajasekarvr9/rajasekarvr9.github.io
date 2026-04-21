import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav className="navbar" style={{ background: scrolled ? "rgba(6,13,26,0.97)" : "rgba(6,13,26,0.85)" }}>
      <div className="nav-logo">RR.</div>
      <ul className="nav-links">
        <li><button className="nav-button" onClick={scrollTop}>Home</button></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certifications">Certs</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#contact" className="nav-cta-btn">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
