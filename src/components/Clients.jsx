import React, { useEffect, useRef } from "react";

export default function Clients() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const clients = [
    { name: "ONE Gas", logo: "https://s23.q4cdn.com/945657003/files/design/client-logo.png", url: "https://www.onegas.com" },
    { name: "SYSRS IT Services", logo: "https://www.sysrs.com/images/logo.png", url: "https://www.sysrs.com" },
    { name: "Zebra Technologies", logo: "https://www.zebra.com/content/experience-fragments/zebra1/us/en/header/master/_jcr_content/root/image.coreimg.svg/1757099569592/zebra-logo-horizontal.svg", url: "https://www.zebra.com" },
    { name: "Caterpillar", logo: "https://s7d2.scene7.com/is/image/Caterpillar/CM20220222-5c3c2-280a8?fmt=png-alpha", url: "https://www.caterpillar.com" },
    { name: "Tech Mahindra", logo: "https://insights.techmahindra.com/styles/default/s3/images/techm-red-white-logo.png.webp", url: "https://www.techmahindra.com" },
    { name: "Avaya", logo: "https://www.avaya.com/content/experience-fragments/aem-avaya-portal/locale-sites/en_us/site/footer/master/_jcr_content/root/column_container/item_1749207819737/image.coreimg.svg/1775569384250/avaya-logored.svg", url: "https://www.avaya.com" },
    { name: "Ethiopian Electric Utility", logo: "https://www.eeu.gov.et/images/logo.png?20283a30cdedd9d88649256801e667c6", url: "https://www.eeu.gov.et" },
    { name: "Prudential Asia", logo: "https://www.prudentialplc.com/content/dam/prudential-aem-common/header/Prudential-Logo.svg", url: "https://www.prudentialplc.com" },
    { name: "DXC Technology", logo: "https://dxc.com/content/dam/dxc/projects/dxc-com/us/images/about-us/newsroom/logos-for-media/vertical/DXC%20Logo_Purple+Black%20RGB.png", url: "https://www.dxc.com" },
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", url: "https://www.infosys.com" },
    { name: "HP", logo: "https://www.hp.com/us-en/home.html", url: "https://www.hp.com" },
    { name: "HPE", logo: "https://www.hpe.com/us/en/home.html", url: "https://www.hpe.com" },
    
  ];

  return (
    <section id="clients">
      <div className="section-inner" ref={ref}>
        <div className="reveal">
          <div className="section-label">Enterprise Clients</div>
          <h2 className="section-title">Trusted by <span className="grad">Global Leaders</span></h2>
        </div>
        <div className="clients-grid">
          {clients.map((c, idx) => (
            <a
              href={c.url} target="_blank" rel="noopener noreferrer"
              className="client-tile reveal" key={idx}
              style={{ transitionDelay: `${(idx % 4) * 0.06}s` }}
            >
              <div className="client-logo-wrap">
                <img src={c.logo} alt={c.name} />
              </div>
              <div className="client-name">{c.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
