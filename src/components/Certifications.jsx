import React, { useEffect, useRef } from "react";

export default function Certifications() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const certs = [
    {
      logo: "https://images.credly.com/size/680x680/images/c2e730b8-ec46-40ff-b0d9-c3df3fa7d8cc/blob",
      title: "ACDS — Amazon Connect Developer Specialist",
      issuer: "AWS Training & Certification",
      earned: true,
    },
    {
      logo: "https://images.credly.com/size/680x680/images/7296c476-fb6a-44bf-a802-2cc75b870d66/blob",
      title: "ACCS — Amazon Connect Communications Specialist",
      issuer: "AWS Training & Certification",
      earned: true,
    },
    {
      logo: "https://mms.businesswire.com/media/20240325264914/en/814330/4/Avaya_Logo-01.jpg",
      title: "71201T — Avaya Aura® Core Components Implementation",
      issuer: "Avaya Training & Certification",
      earned: true,
    },
    {
      logo: "https://mms.businesswire.com/media/20240325264914/en/814330/4/Avaya_Logo-01.jpg",
      title: "ASTA 9090 — Avaya CMS Technical Associate",
      issuer: "Avaya Training & Certification",
      earned: true,
    },
    {
      logo: "https://mms.businesswire.com/media/20240325264914/en/814330/4/Avaya_Logo-01.jpg",
      title: "ASPS — Avaya CMS Implementation & Maintenance",
      issuer: "Avaya Training & Certification",
      earned: true,
    },
    {
      logo: "https://mms.businesswire.com/media/20240325264914/en/814330/4/Avaya_Logo-01.jpg",
      title: "AIPS — Avaya AES Admin & Implementation",
      issuer: "Avaya Training & Certification",
      earned: true,
    },
    {
      logo: "https://mms.businesswire.com/media/20240325264914/en/814330/4/Avaya_Logo-01.jpg",
      title: "ACSS-3305 — Avaya Aura® Certified Support Specialist (AEP & POM)",
      issuer: "Avaya Training & Certification",
      earned: false,
    },
    {
      logo: "https://mms.businesswire.com/media/20240325264914/en/814330/4/Avaya_Logo-01.jpg",
      title: "ACSS-3308 — Avaya Aura® Certified Support Specialist (WFO)",
      issuer: "Avaya Training & Certification",
      earned: false,
    },
    {
      logo: "https://d2908q01vomqb2.cloudfront.net/c5b76da3e608d34edb07244cd9b875ee86906328/2021/02/08/amazon-connect.jpg",
      title: "Amazon Connect: Create & Manage a Contact Center",
      issuer: "AWS Training & Certification",
      earned: true,
    },
    {
      logo: "https://mms.businesswire.com/media/20210406005728/en/532501/4/NICE-LOGO-300px-web.jpg",
      title: "NICE InContact — Basic Knowledge Transfer",
      issuer: "NICE InContact Team",
      earned: true,
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Oracle_logo.svg",
      title: "1Z0-1085 — Oracle Cloud Infrastructure 2022 Foundations Associate",
      issuer: "Oracle University",
      earned: true,
    },
  ];

  return (
    <section id="certifications">
      <div className="section-inner" ref={ref}>
        <div className="reveal">
          <div className="section-label">Credentials</div>
          <h2 className="section-title">Certifications & <span className="grad">Training</span></h2>
        </div>
        <div className="cert-grid">
          {certs.map((cert, idx) => (
            <div className="cert-card reveal" key={idx} style={{ transitionDelay: `${(idx % 3) * 0.07}s` }}>
              <div className="cert-logo-box">
                <img src={cert.logo} alt={cert.issuer} />
              </div>
              <div className="cert-info">
                <div className="cert-title">{cert.title}</div>
                <div className="cert-issuer">{cert.issuer}</div>
                <div className={`cert-badge ${cert.earned ? "earned" : "training"}`}>
                  {cert.earned ? "✓ Certified" : "⏳ Training Completed"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
