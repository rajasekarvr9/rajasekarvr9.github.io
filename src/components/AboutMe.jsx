import React, { useEffect, useRef } from "react";

export default function AboutMe() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="section-inner" ref={ref}>
        <div className="about-grid">
          {/* Visual Side */}
          <div className="about-visual-stack reveal">
            <div className="about-exp-card">
              <div className="about-exp-num">13+</div>
              <div className="about-exp-label">Years of Enterprise Experience</div>
              <div className="about-expertise-pills">
                <span className="exp-pill">IVR Engineering</span>
                <span className="exp-pill">Cloud Architecture</span>
                <span className="exp-pill">Contact Center</span>
                <span className="exp-pill">Amazon Connect</span>
                <span className="exp-pill">Avaya</span>
                <span className="exp-pill">Salesforce SCV</span>
              </div>
            </div>
            <div className="about-exp-card" style={{ borderLeftColor: "var(--accent2)" }}>
              <div className="about-exp-num" style={{ background: "var(--grad2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>50+</div>
              <div className="about-exp-label">Enterprise Projects Delivered</div>
              <div className="about-expertise-pills">
                <span className="exp-pill" style={{ background: "rgba(124,58,237,0.1)", borderColor: "rgba(124,58,237,0.2)", color: "var(--accent2)" }}>SIP Trunking</span>
                <span className="exp-pill" style={{ background: "rgba(124,58,237,0.1)", borderColor: "rgba(124,58,237,0.2)", color: "var(--accent2)" }}>PSTN Routing</span>
                <span className="exp-pill" style={{ background: "rgba(124,58,237,0.1)", borderColor: "rgba(124,58,237,0.2)", color: "var(--accent2)" }}>CTI Integration</span>
                <span className="exp-pill" style={{ background: "rgba(124,58,237,0.1)", borderColor: "rgba(124,58,237,0.2)", color: "var(--accent2)" }}>AWS Lambda</span>
              </div>
            </div>
            <div className="about-exp-card" style={{ borderLeftColor: "var(--accent3)" }}>
              <div className="about-exp-num" style={{ background: "var(--grad2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>12+</div>
              <div className="about-exp-label">Global Enterprise Clients Served</div>
              <div className="about-expertise-pills">
                <span className="exp-pill" style={{ background: "rgba(245,158,11,0.1)", borderColor: "rgba(245,158,11,0.2)", color: "var(--accent3)" }}>Zebra Technologies</span>
                <span className="exp-pill" style={{ background: "rgba(245,158,11,0.1)", borderColor: "rgba(245,158,11,0.2)", color: "var(--accent3)" }}>Prudential Asia</span>
                <span className="exp-pill" style={{ background: "rgba(245,158,11,0.1)", borderColor: "rgba(245,158,11,0.2)", color: "var(--accent3)" }}>DXC Technology</span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="about-text reveal">
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              Contact Center <span className="grad">Architect & IVR Specialist</span>
            </h2>
            <p>
              I'm <strong>Rajasekhar Reddy</strong> — a highly driven IVR Engineer, Contact Center Architect,
              and Cloud Solutions Specialist with <strong>13 years</strong> of hands-on experience designing
              and delivering enterprise-grade voice, telephony, and customer engagement platforms.
            </p>
            <p>
              My expertise spans end-to-end IVR engineering including <strong>DTMF/ASR call flow design</strong>,
              SIP trunking, PSTN routing, CTI event handling, and high-availability voice application deployment
              across <strong>Amazon Connect, Avaya Experience Portal, and Huawei IPCC</strong> ecosystems.
            </p>
            <p>
              I specialize in architecting cloud-native, event-driven contact center infrastructures leveraging
              <strong> AWS services</strong> — Lambda, DynamoDB, API Gateway, S3, Kinesis, Lex, and more —
              focused on scalable routing logic, real-time analytics, and fault-tolerant automation.
            </p>

            <div className="about-highlights">
              <div className="about-highlight-item">
                <span className="about-hi-icon">📍</span>
                <div><span className="about-hi-label">Location</span><span className="about-hi-val">United States</span></div>
              </div>
              <div className="about-highlight-item">
                <span className="about-hi-icon">📞</span>
                <div><span className="about-hi-label">Phone</span><span className="about-hi-val">+1 (479)-966-9646</span></div>
              </div>
              <div className="about-highlight-item">
                <span className="about-hi-icon">🏆</span>
                <div><span className="about-hi-label">Certifications</span><span className="about-hi-val">11 Professional Certs</span></div>
              </div>
              <div className="about-highlight-item">
                <span className="about-hi-icon">✅</span>
                <div><span className="about-hi-label">Status</span><span className="about-hi-val">Open to Opportunities</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
