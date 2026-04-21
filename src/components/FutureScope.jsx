import React, { useEffect, useRef } from "react";

export default function FutureScope() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const futureTags = [
    "AI-Driven IVR Personalization", "Generative AI in CX", "Amazon Q for Contact Centers",
    "Predictive Call Routing", "Real-Time Sentiment Analysis", "Autonomous Contact Centers",
    "Conversational AI", "Omni-Channel Orchestration", "Cloud-Native Architectures",
    "Voice Biometrics", "LLM-Powered Self-Service",
  ];

  return (
    <section id="future">
      <div className="section-inner" ref={ref}>
        <div className="reveal">
          <div className="section-label">Vision</div>
          <h2 className="section-title">Future <span className="grad">Scope</span></h2>
        </div>
        <div className="future-card reveal">
          <div className="future-icon">🚀</div>
          <h3>The Next Generation of Intelligent Contact Centers</h3>
          <p>
            Leveraging AI-driven IVR personalization and cloud-native architectures to design and implement
            next-generation Contact Center solutions that deliver intelligent call routing, predictive analytics,
            real-time decision-making, and seamless omni-channel automation. These solutions enable enterprises
            to optimize customer interactions, enhance operational efficiency, and provide hyper-personalized,
            adaptive experiences at scale — integrating advanced AI, machine learning, and cloud orchestration
            for future-ready customer engagement platforms.
          </p>
          <div className="future-tags">
            {futureTags.map((t, i) => (
              <span className="future-tag" key={i}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
