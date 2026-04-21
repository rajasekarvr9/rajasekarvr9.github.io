import React, { useEffect, useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const projects = [
    {
      icon: "📞",
      bg: "linear-gradient(135deg, #041520, #0a2010)",
      title: "Smart Customer Support IVR",
      desc: "Built an intelligent IVR system with dynamic routing, NLP-powered intent recognition, real-time analytics integration, and seamless agent escalation. Reduced call handle time by 35%.",
      tags: [{ label: "Amazon Connect", cls: "tag-aws" }, { label: "AWS Lambda", cls: "tag-aws" }, { label: "Amazon Lex", cls: "tag-ai" }, { label: "IVR", cls: "tag-ivr" }],
      link: "https://github.com/rajasekarvr9",
    },
    {
      icon: "💳",
      bg: "linear-gradient(135deg, #150a05, #1a0520)",
      title: "Automated Billing IVR",
      desc: "Designed and deployed an automated billing and payment IVR system with voice verification, DTMF input, secure payment gateway integration, and real-time account lookup via REST APIs.",
      tags: [{ label: "Avaya AAEP", cls: "tag-avaya" }, { label: "VXML", cls: "tag-ivr" }, { label: "CTI", cls: "tag-ivr" }, { label: "REST API", cls: "tag-cloud" }],
      link: "https://github.com/",
    },
    {
      icon: "☁️",
      bg: "linear-gradient(135deg, #050a20, #0a0520)",
      title: "Cloud Contact Center Architecture",
      desc: "Architected a fully cloud-native contact center on Amazon Connect for a Fortune 500 client. Implemented Salesforce Service Cloud Voice integration, Kinesis-based analytics, and multi-queue routing.",
      tags: [{ label: "Amazon Connect", cls: "tag-aws" }, { label: "Salesforce SCV", cls: "tag-sf" }, { label: "Kinesis", cls: "tag-cloud" }, { label: "CloudFormation", cls: "tag-cloud" }],
      link: "https://github.com/",
    },
    {
      icon: "🤖",
      bg: "linear-gradient(135deg, #0a0520, #150520)",
      title: "AI-Powered Self-Service Bot",
      desc: "Developed a conversational AI self-service bot using Amazon Lex and Lambda for a utility company. Handles outage reporting, billing inquiries, and service requests — deflecting 60% of live agent calls.",
      tags: [{ label: "Amazon Lex", cls: "tag-ai" }, { label: "AWS Lambda", cls: "tag-aws" }, { label: "DynamoDB", cls: "tag-aws" }, { label: "NLP", cls: "tag-ai" }],
      link: "https://github.com/",
    },
    {
      icon: "📊",
      bg: "linear-gradient(135deg, #050a15, #0a1505)",
      title: "Real-Time Contact Center Dashboard",
      desc: "Built a live operations dashboard displaying agent performance, call queue metrics, and SLA compliance in real time using Amazon Kinesis, CloudWatch, and QuickSight.",
      tags: [{ label: "Kinesis", cls: "tag-cloud" }, { label: "QuickSight", cls: "tag-aws" }, { label: "CloudWatch", cls: "tag-cloud" }, { label: "React", cls: "tag-ivr" }],
      link: "https://github.com/",
    },
    {
      icon: "🔐",
      bg: "linear-gradient(135deg, #0a0505, #050a20)",
      title: "Voice Authentication System",
      desc: "Implemented a secure voice biometric authentication system for a financial client, replacing legacy PIN-based verification with voice print analysis and multi-factor authentication.",
      tags: [{ label: "Voice Biometrics", cls: "tag-voice" }, { label: "SIP", cls: "tag-ivr" }, { label: "AWS", cls: "tag-aws" }, { label: "Security", cls: "tag-cloud" }],
      link: "https://github.com/",
    },
  ];

  return (
    <section id="projects">
      <div className="section-inner" ref={ref}>
        <div className="reveal">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Featured <span className="grad">Projects</span></h2>
        </div>
        <div className="projects-grid">
          {projects.map((p, idx) => (
            <div className="project-card reveal" key={idx} style={{ transitionDelay: `${(idx % 3) * 0.08}s` }}>
              <div className="project-thumb">
                <div className="project-thumb-bg" style={{ background: p.bg }} />
                <div className="project-thumb-icon">{p.icon}</div>
                <div className="project-overlay">
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj-overlay-btn">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-body">
                <div className="project-tags-row">
                  {p.tags.map((t, i) => (
                    <span className={`proj-tag ${t.cls}`} key={i}>{t.label}</span>
                  ))}
                </div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-footer">
                  <div className="project-links-row">
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      <i className="fab fa-github" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
