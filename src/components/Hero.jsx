import React, { useEffect, useRef } from "react";
import ProfileImage from "/profile-img.png";

const Hero = () => {
  const statRefs = useRef([]);

  useEffect(() => {
    // Animate stat counters on mount
    const targets = [13, 50, 12, 11];
    const suffixes = ["+", "+", "+", "+"];
    const labels = statRefs.current;
    targets.forEach((target, i) => {
      if (!labels[i]) return;
      let count = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        count = Math.min(count + step, target);
        labels[i].textContent = count + suffixes[i];
        if (count >= target) clearInterval(timer);
      }, 30);
    });
  }, []);

  return (
    <div className="hero-wrapper">
      {/* Animated background blobs */}
      <div className="hero-blobs">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>

      <div className="hero-container">
        {/* Left: Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Open to New Opportunities
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="name-grad">Rajasekhar Reddy</span>
          </h1>

          <p className="hero-subtitle">
            IVR Engineer · Contact Center Architect · Cloud Solutions Specialist with{" "}
            <strong style={{ color: "var(--text)" }}>13+ years</strong> of experience designing
            enterprise-grade voice, telephony, and customer engagement platforms on{" "}
            <strong style={{ color: "var(--text)" }}>Amazon Connect, Avaya & AWS</strong>.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <i className="fas fa-paper-plane" /> Work with Me
            </button>
            <a
              href={`${import.meta.env.BASE_URL}Rajasekhar_AvayaContactCenterEngineer_Resume.docx`}
              download="Rajasekhar_AvayaContactCenterEngineer_Resume.docx"
              className="btn-secondary"
            >
              <i className="fas fa-download" /> Download Resume
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num" ref={el => statRefs.current[0] = el}>13+</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num" ref={el => statRefs.current[1] = el}>15+</div>
              <div className="hero-stat-label">Projects Delivered</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num" ref={el => statRefs.current[2] = el}>12+</div>
              <div className="hero-stat-label">Enterprise Clients</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num" ref={el => statRefs.current[3] = el}>11+</div>
              <div className="hero-stat-label">Certifications</div>
            </div>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="hero-image-wrapper">
          <div className="hero-img-frame">
            <img src={ProfileImage} alt="Rajasekhar Reddy" className="hero-image" />
            <div className="hero-img-badge b1">
              <i className="fas fa-phone-volume" />
              <span>IVR Architect</span>
            </div>
            <div className="hero-img-badge b2">
              <i className="fas fa-cloud" />
              <span>AWS Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
