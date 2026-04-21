import React, { useEffect, useRef, useState } from "react";
import {
  FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub,
  FaArrowRight, FaCheckCircle, FaExclamationCircle,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

// ── EmailJS credentials ─────────────────────────────────────
const SERVICE_ID  = "service_99j02sn";
const TEMPLATE_ID = "template_508z7ke";
const PUBLIC_KEY  = "sbKfMdUCZ9xYncpz6"; // ← replace with your actual Public Key
// ───────────────────────────────────────────────────────────

const INITIAL_FORM = {
  first_name: "",
  last_name:  "",
  from_email: "",
  subject:    "",
  message:    "",
};

export default function Contact() {
  const sectionRef = useRef(null);
  const [form,     setForm]     = useState(INITIAL_FORM);
  const [status,   setStatus]   = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  /* ── Scroll reveal ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* ── Handle input changes ── */
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /* ── Send via EmailJS ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    // Build the template params object — keys must match your EmailJS template variables
    const templateParams = {
      first_name: form.first_name,
      last_name:  form.last_name,
      from_email: form.from_email,
      subject:    form.subject,
      message:    form.message,
      to_email:   "rajasekarvr9@gmail.com",   // always deliver to your inbox
      reply_to:   form.from_email,             // reply goes back to the sender
    };

    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log("EmailJS success:", result.text);
      setStatus("success");
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrorMsg(err?.text || "Something went wrong. Please try again.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  /* ── Button states ── */
  const btnContent = {
    idle:    <><FaArrowRight /> Send Message</>,
    sending: <><span className="spinner" /> Sending...</>,
    success: <><FaCheckCircle /> Message Sent!</>,
    error:   <><FaExclamationCircle /> Failed — Try Again</>,
  };
  const btnStyle = {
    idle:    {},
    sending: { opacity: 0.75, cursor: "not-allowed" },
    success: { background: "linear-gradient(135deg, #10b981, #059669)" },
    error:   { background: "linear-gradient(135deg, #ef4444, #dc2626)" },
  };

  return (
    <section id="contact">
      <div className="section-inner" ref={sectionRef}>

        {/* Heading */}
        <div className="reveal">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">
            Let's <span className="grad">Work Together</span>
          </h2>
        </div>

        <div className="contact-grid">

          {/* ── Left: contact info cards ── */}
          <div className="contact-info reveal">
            <h3>Ready to transform your contact center?</h3>
            <p className="contact-info-text">
              Whether you need to architect a cloud contact center, migrate legacy IVR
              systems, or design intelligent self-service solutions — I bring 13+ years
              of proven expertise. Let's connect and make it happen.
            </p>

            <div className="contact-cards">
              <a href="mailto:rajasekarvr9@gmail.com" className="contact-card">
                <div className="contact-icon-wrap ci-email"><FaEnvelope /></div>
                <div className="contact-card-text">
                  <small>Email</small>
                  <strong>rajasekarvr9@gmail.com</strong>
                </div>
                <FaArrowRight className="contact-arrow" />
              </a>

              <a href="tel:+14799669646" className="contact-card">
                <div className="contact-icon-wrap ci-phone"><FaPhoneAlt /></div>
                <div className="contact-card-text">
                  <small>Phone</small>
                  <strong>+1 (479)-966-9646</strong>
                </div>
                <FaArrowRight className="contact-arrow" />
              </a>

              <a
                href="https://www.linkedin.com/in/raja-sekhar-607195a8"
                target="_blank" rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon-wrap ci-linkedin"><FaLinkedin /></div>
                <div className="contact-card-text">
                  <small>LinkedIn</small>
                  <strong>Rajasekhar Reddy</strong>
                </div>
                <FaArrowRight className="contact-arrow" />
              </a>

              <a
                href="https://github.com/rajasekarvr9"
                target="_blank" rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon-wrap ci-github"><FaGithub /></div>
                <div className="contact-card-text">
                  <small>GitHub</small>
                  <strong>rajasekarvr9</strong>
                </div>
                <FaArrowRight className="contact-arrow" />
              </a>
            </div>
          </div>

          {/* ── Right: contact form ── */}
          <div className="contact-form-card reveal">
            <div className="contact-form-title">Send Me a Message</div>

            <form onSubmit={handleSubmit} noValidate>

              {/* Name row */}
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="John"
                    value={form.first_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Doe"
                    value={form.last_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="john@company.com"
                  value={form.from_email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Subject */}
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Contact Center Project / Consultation"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or how I can help..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Error banner */}
              {status === "error" && (
                <div className="form-error-banner">
                  <FaExclamationCircle /> {errorMsg}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="form-submit-btn"
                style={btnStyle[status]}
                disabled={status === "sending"}
              >
                {btnContent[status]}
              </button>

            </form>
          </div>
        </div>
      </div>

      <style>{`
        .spinner {
          display: inline-block;
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .form-error-banner {
          display: flex; align-items: center; gap: 8px;
          padding: 12px 16px; border-radius: 10px;
          background: rgba(239,68,68,0.12);
          border: 1px solid rgba(239,68,68,0.3);
          color: #f87171; font-size: 0.85rem;
          margin-bottom: 16px;
        }
      `}</style>
    </section>
  );
}
