import React, { useEffect, useState } from 'react';


export function IVRFlowAnimated() {
const [step, setStep] = useState(0);
useEffect(() => {
const t = setInterval(() => setStep((s) => (s + 1) % 6), 1200);
return () => clearInterval(t);
}, []);


return (
<section id="ivr-animated">
<h2>Utility Industry – Animated IVR Flow</h2>
<div className="ivr-canvas">
<svg viewBox="0 0 900 420" className="ivr-svg">
<rect x="390" y="20" width="140" height="40" rx="6" className="node start" />
<text x="460" y="45" textAnchor="middle" className="node-text">Start</text>


<rect x="330" y="90" width="260" height="50" rx="6" className="node" />
<text x="460" y="122" textAnchor="middle" className="node-text">Welcome – Utility IVR</text>


<rect x="40" y="200" width="220" height="50" rx="6" className="node" />
<text x="150" y="232" textAnchor="middle" className="node-text">Outage Reporting</text>


<rect x="340" y="200" width="240" height="50" rx="6" className="node" />
<text x="460" y="232" textAnchor="middle" className="node-text">Bill & Payments</text>


<rect x="640" y="200" width="220" height="50" rx="6" className="node" />
<text x="750" y="232" textAnchor="middle" className="node-text">New Service Request</text>


<rect x="390" y="320" width="140" height="40" rx="6" className="node end" />
<text x="460" y="347" textAnchor="middle" className="node-text">Agent</text>


<line x1="460" y1="60" x2="460" y2="90" className={`conn ${step===0?'glow':''}`} />
<line x1="460" y1="140" x2="150" y2="200" className={`conn ${step===1?'glow':''}`} />
<line x1="460" y1="140" x2="460" y2="200" className={`conn ${step===2?'glow':''}`} />
<line x1="460" y1="140" x2="750" y2="200" className={`conn ${step===3?'glow':''}`} />
<line x1="150" y1="250" x2="460" y2="320" className={`conn ${step===4?'glow':''}`} />
<line x1="460" y1="250" x2="460" y2="320" className={`conn ${step===5?'glow':''}`} />
</svg>
</div>
<p className="ivr-note">Animated utility IVR: Outage reporting → Billing → New service → Agent.</p>
</section>
);
}

