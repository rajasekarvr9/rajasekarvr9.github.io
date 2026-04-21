import React, { useEffect, useRef } from "react";

export default function Migrations() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const migrations = [
    {
      icon: "🔄",
      title: "Legacy Avaya → Amazon Connect",
      from: "Avaya On-Premise",
      to: "Amazon Connect (Cloud)",
      desc: "Migrated a complex enterprise IVR system from Avaya Aura Experience Portal to Amazon Connect with zero downtime. Redesigned 40+ call flows, re-engineered CTI integrations, and implemented AWS Lambda-driven routing logic for intelligent call handling.",
      tags: ["Amazon Connect", "Avaya AAEP", "AWS Lambda", "DynamoDB", "Zero Downtime", "CTI Migration"],
    },
    {
      icon: "🌐",
      title: "Huawei IPCC → Cloud Contact Center",
      from: "Huawei IPCC U2980",
      to: "Cloud Contact Center",
      desc: "Migrated a multi-language, multi-region IVR system from Huawei IPCC U2980 to a modern cloud contact center platform. Preserved all business logic while modernizing architecture for scalability and fault-tolerance.",
      tags: ["Huawei IPCC", "SIP Trunking", "PSTN Routing", "Multi-Language IVR", "Cloud Migration", "High Availability"],
    },
  ];

  return (
    <section id="migrations">
      <div className="section-inner" ref={ref}>
        <div className="reveal">
          <div className="section-label">Case Studies</div>
          <h2 className="section-title">Migration <span className="grad">Projects</span></h2>
        </div>
        <div className="migrations-grid">
          {migrations.map((m, idx) => (
            <div className="migration-card reveal" key={idx}>
              <div className="migration-icon">{m.icon}</div>
              <div className="migration-title">{m.title}</div>
              <div className="migration-arrow-row">
                <span className="mig-from">{m.from}</span>
                <span className="mig-arrow">→</span>
                <span className="mig-to">{m.to}</span>
              </div>
              <div className="migration-desc">{m.desc}</div>
              <div className="migration-tags">
                {m.tags.map((t, i) => <span className="migration-tag" key={i}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
