import React, { useEffect, useState, useRef } from "react";

export default function IVRFlow() {
  const [playing, setPlaying] = useState(false);
  const [step, setStep] = useState(0);
  const [speed, setSpeed] = useState(1200);
  const timerRef = useRef(null);
  const maxStep = 5;

  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(() => {
        setStep((s) => {
          if (s >= maxStep) { setPlaying(false); return s; }
          return s + 1;
        });
      }, speed);
    }
    return () => clearInterval(timerRef.current);
  }, [playing, speed]);

  const reset = () => { setStep(0); setPlaying(false); };
  const playPause = () => setPlaying((p) => !p);
  const next = () => setStep((s) => Math.min(maxStep, s + 1));
  const prev = () => setStep((s) => Math.max(0, s - 1));

  const show = (min) => step >= min ? "visible" : "hidden";
  const glowOn = (s) => step === s ? "glow" : "";

  const stepLabels = ["Idle", "Start Call", "Welcome Prompt", "Report Outage (1)", "Billing & Payments (2)", "Agent Transfer"];

  return (
    <section id="ivr">
      <div className="section-inner">
        <div className="ivr-header reveal">
          <div className="section-label">Interactive Demo</div>
          <h2 className="section-title">Sample IVR Flow — <span className="grad">Utility Industry</span></h2>
        </div>

        <div className="ivr-controls">
          <button className="ivr-btn" onClick={reset}>↺ Reset</button>
          <button className="ivr-btn" onClick={prev} disabled={step === 0}>‹ Prev</button>
          <button className="ivr-btn primary" onClick={playPause}>
            {playing ? "⏸ Pause" : "▶ Play"}
          </button>
          <button className="ivr-btn" onClick={next} disabled={step === maxStep}>Next ›</button>
          <div className="ivr-speed-wrap">
            <span>Speed:</span>
            <input
              type="range" min="400" max="2400" step="100"
              value={speed} onChange={(e) => setSpeed(Number(e.target.value))}
            />
            <span>{(speed / 1000).toFixed(1)}s</span>
          </div>
        </div>

        <div className="ivr-canvas">
          <svg viewBox="0 0 900 420" className="ivr-svg">
            {/* Start node */}
            <g className={`pulse ${show(0)}`}>
              <rect x="380" y="10" width="140" height="45" rx="8" className="node start" />
              <text x="450" y="38" textAnchor="middle" className="node-text">Start Call</text>
            </g>

            {/* Welcome */}
            <g className={`${show(1)} fade-in`}>
              <rect x="310" y="80" width="280" height="50" rx="8" className="node" />
              <text x="450" y="110" textAnchor="middle" className="node-text">Welcome to Demo Utility System</text>
            </g>

            {/* Outage branch */}
            <g className={`${show(2)} slide-left`}>
              <rect x="60" y="190" width="220" height="48" rx="8" className="node" />
              <text x="170" y="219" textAnchor="middle" className="node-text">Report Power Outage (1)</text>
            </g>

            {/* Billing branch */}
            <g className={`${show(3)} slide-up`}>
              <rect x="330" y="190" width="240" height="48" rx="8" className="node" />
              <text x="450" y="219" textAnchor="middle" className="node-text">Billing &amp; Payments (2)</text>
            </g>

            {/* Support branch */}
            <g className={`${show(4)} slide-right`}>
              <rect x="600" y="190" width="240" height="48" rx="8" className="node" />
              <text x="720" y="219" textAnchor="middle" className="node-text">Technical Support (3)</text>
            </g>

            {/* Agent */}
            <g className={`${show(5)} pulse`}>
              <rect x="370" y="310" width="160" height="48" rx="8" className="node end" />
              <text x="450" y="340" textAnchor="middle" className="node-text">🎧 Connect to Agent</text>
            </g>

            {/* Connectors */}
            <line x1="450" y1="55" x2="450" y2="80" className={`conn ${glowOn(1)}`} />
            <line x1="450" y1="130" x2="170" y2="190" className={`conn ${glowOn(2)}`} />
            <line x1="450" y1="130" x2="450" y2="190" className={`conn ${glowOn(3)}`} />
            <line x1="450" y1="130" x2="720" y2="190" className={`conn ${glowOn(4)}`} />
            <line x1="170" y1="238" x2="450" y2="310" className={`conn ${step >= 5 ? "glow" : ""}`} />
            <line x1="450" y1="238" x2="450" y2="310" className={`conn ${step >= 5 ? "glow" : ""}`} />
            <line x1="720" y1="238" x2="450" y2="310" className={`conn ${step >= 5 ? "glow" : ""}`} />
          </svg>
        </div>

        <div className="ivr-note">Step {step} of {maxStep} — {stepLabels[step]}</div>
        <div className="ivr-step-dots">
          {Array.from({ length: maxStep + 1 }, (_, i) => (
            <div key={i} className={`step-dot ${step >= i ? "active" : ""}`} onClick={() => setStep(i)} style={{ cursor: "pointer" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
