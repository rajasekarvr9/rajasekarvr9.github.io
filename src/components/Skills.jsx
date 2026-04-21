import React, { useEffect, useRef, useState } from "react";

// ── BASE_URL handles the /my-portfolio/ base path in vite.config.js ──
// In dev:  BASE_URL = "/"               → /logos/avaya.png
// In prod: BASE_URL = "/my-portfolio/"  → /my-portfolio/logos/avaya.png
const base = import.meta.env.BASE_URL;

const logo = (file) => `${base}logos/${file}`;

const skills = [
  {
    logo: logo("avaya.png"),
    fallbackIcon: "fas fa-headset",
    fallbackColor: "#ef4444",
    fallbackBg: "rgba(239,68,68,0.12)",
    title: "Avaya Products",
    items: [
      "Avaya IVR", "Orchestration Designer (OD)", "Aura Experience Portal (AAEP)",
      "POM", "Control Manager", "AES", "WFO", "ACR", "QM",
      "CMS", "CM", "SMGR", "Dialer", "Media Gateways G450/G650",
    ],
  },
  {
    logo: logo("amazon-connect.png"),
    fallbackIcon: "fas fa-phone-volume",
    fallbackColor: "#ff9900",
    fallbackBg: "rgba(255,153,0,0.12)",
    title: "Amazon Connect",
    items: [
      "Amazon Connect", "Contact Flows", "Amazon Lex", "Amazon Polly",
      "Lambda", "DynamoDB", "Kinesis", "S3", "SNS/SQS",
      "Contact Lens", "Amazon Q", "EventBridge", "CloudFormation",
    ],
  },
  {
    logo: logo("huawei.png"),
    fallbackIcon: "fas fa-network-wired",
    fallbackColor: "#e11d48",
    fallbackBg: "rgba(225,29,72,0.12)",
    title: "Huawei Products",
    items: ["IPCC U2980", "CTI", "WAS", "IVR", "Agent Gateway", "ICI"],
  },
  {
    logo: logo("salesforce.png"),
    fallbackIcon: "fas fa-cloud",
    fallbackColor: "#00a2ff",
    fallbackBg: "rgba(0,162,255,0.12)",
    title: "Salesforce",
    items: [
      "Service Cloud Voice (SCV)", "Salesforce CRM",
      "Salesforce Lightning", "Cloud Voice Contact Center",
    ],
  },
  {
    logo: logo("nice.png"),
    fallbackIcon: "fas fa-microphone-alt",
    fallbackColor: "#8b5cf6",
    fallbackBg: "rgba(139,92,246,0.12)",
    title: "NICE Products",
    items: ["NICE InContact", "NICE IVR", "NICE Loggers", "Workforce Optimization"],
  },
  {
    logo: logo("verint.png"),
    fallbackIcon: "fas fa-record-vinyl",
    fallbackColor: "#06b6d4",
    fallbackBg: "rgba(6,182,212,0.12)",
    title: "Verint Recorders",
    items: [
      "Workforce Management (WFM)", "Quality Management",
      "Customer Engagement & Self-Service", "Verint Recorders",
    ],
  },
  {
    logo: logo("aws.png"),
    fallbackIcon: "fab fa-aws",
    fallbackColor: "#ff9900",
    fallbackBg: "rgba(255,153,0,0.12)",
    title: "AWS Cloud Services",
    items: [
      "EC2", "VPC", "EBS / ELB", "S3 / S3 Glacier", "Route 53",
      "QuickSight", "Kinesis", "Lambda", "RDS", "CloudWatch",
      "IAM", "Auto Scaling", "NAT Gateway", "Terraform",
    ],
  },
  {
    logo: logo("project-mgmt.png"),
    fallbackIcon: "fas fa-tasks",
    fallbackColor: "#10b981",
    fallbackBg: "rgba(16,185,129,0.12)",
    title: "Project Management",
    items: ["Incident Management", "Problem Management", "Change Management", "ITIL Framework"],
  },
  {
    logo: logo("tools.png"),
    fallbackIcon: "fas fa-tools",
    fallbackColor: "#f59e0b",
    fallbackBg: "rgba(245,158,11,0.12)",
    title: "Tools & Productivity",
    items: ["Jira", "ServiceNow", "Remedy", "MS Visio", "MS Project", "Citrix", "PAM Access"],
  },
  {
    logo: logo("os.png"),
    fallbackIcon: "fas fa-server",
    fallbackColor: "#64748b",
    fallbackBg: "rgba(100,116,139,0.12)",
    title: "Operating Systems & Servers",
    items: ["Windows Server 2008–2016", "Linux", "Unix", "MacOS", "Windows 10/8/7"],
  },
  {
    logo: logo("languages.png"),
    fallbackIcon: "fas fa-code",
    fallbackColor: "#00c2ff",
    fallbackBg: "rgba(0,194,255,0.12)",
    title: "Languages & Frameworks",
    items: ["Java", "JavaScript", "React", "Node.js", "JSON", "HTML", "VXML", "CCXML", "CSS"],
  },
];

/* ── Single skill card ── */
function SkillCard({ skill, delay }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="skill-card reveal" style={{ transitionDelay: `${delay}s` }}>

      {/* Logo — falls back to FA icon automatically if image fails */}
      <div className="sk-logo-wrap">
        {!imgError ? (
          <img
            src={skill.logo}
            alt={skill.title}
            className="sk-logo-img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="sk-icon-fallback"
            style={{ background: skill.fallbackBg, color: skill.fallbackColor }}
          >
            <i className={skill.fallbackIcon} />
          </div>
        )}
      </div>

      <div className="skill-title">{skill.title}</div>

      <div className="skill-pills">
        {skill.items.map((item, i) => (
          <span className="skill-pill" key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}

/* ── Skills section ── */
export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="section-inner" ref={ref}>

        <div className="reveal">
          <div className="section-label">Expertise</div>
          <h2 className="section-title">
            Skills & <span className="grad">Technical Stack</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} delay={(idx % 4) * 0.07} />
          ))}
        </div>

      </div>

      <style>{`
        .sk-logo-wrap {
          height: 56px;
          display: flex;
          align-items: center;
          margin-bottom: 16px;
        }
        .sk-logo-img {
          max-height: 52px;
          max-width: 160px;
          object-fit: contain;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }
        .skill-card:hover .sk-logo-img {
          opacity: 1;
        }
        .sk-icon-fallback {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
        }
      `}</style>
    </section>
  );
}
