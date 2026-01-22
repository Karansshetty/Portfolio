import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useMemo, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { sectionItemVariants } from "../components/animationVariants.js";
import { PROFILE } from "../data/portfolioData.js";

export default function ContactSection() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const emailJsConfig = useMemo(() => {
    const serviceId = String(import.meta.env.VITE_EMAILJS_SERVICE_ID || "").trim();
    const templateId = String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "").trim();
    const publicKey = String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "").trim();

    return {
      serviceId,
      templateId,
      publicKey,
      enabled: Boolean(serviceId && templateId && publicKey),
    };
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    if (emailJsConfig.enabled) {
      setIsSending(true);
      setStatus({ type: "idle", message: "" });

      emailjs
        .sendForm(emailJsConfig.serviceId, emailJsConfig.templateId, e.currentTarget, {
          publicKey: emailJsConfig.publicKey,
        })
        .then(() => {
          setStatus({ type: "success", message: "Message sent — I’ll get back to you soon." });
          setForm({ name: "", email: "", message: "" });
        })
        .catch((err) => {
          // EmailJS errors commonly include { status, text }
          console.error("EmailJS sendForm failed:", err);
          const errText =
            (err && (err.text || err.message)) ? String(err.text || err.message) : "";
          const devHint =
            import.meta.env.DEV && errText
              ? ` (EmailJS: ${errText})`
              : "";

          setStatus({
            type: "error",
            message: `Couldn’t send right now. Email me at ${PROFILE.email}.${devHint}`,
          });
        })
        .finally(() => {
          setIsSending(false);
        });

      return;
    }

    setStatus({
      type: "error",
      message:
        "Email sending isn’t configured yet. Create a .env file in the portfolio folder with VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY, then restart the dev server.",
    });
  }

  return (
    <AnimatedSection id="contact" title="Contact" eyebrow="Let’s build something reliable" withHeroBackground>
      <div className="contact-grid">
        <motion.aside className="contact-aside" variants={sectionItemVariants}>
          <h3 className="contact-title">Let's connect</h3>
          <p className="contact-subtitle contact-message">
            I'm open to collaborating on projects, internships, and entry-level opportunities.
            <br />
            Feel free to reach out if you'd like to discuss ideas, opportunities, or just connect.
          </p>

          <div className="socials" aria-label="Contact links">
            <a className="social" href={PROFILE.socials.github} target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a className="social" href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a className="social" href={`mailto:${PROFILE.email}`}>
              <FiMail aria-hidden="true" />
              <span>Email</span>
            </a>
            {PROFILE.phone ? (
              <a className="social" href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}>
                <FiPhone aria-hidden="true" />
                <span>{PROFILE.phone}</span>
              </a>
            ) : null}
          </div>
        </motion.aside>

        <motion.div className="contact-card contact-formCard" variants={sectionItemVariants}>
          <h3 className="contact-title">Send a message</h3>
          <p className="contact-subtitle">
          </p>

          <form className="contact-form" onSubmit={onSubmit}>
            <input type="hidden" name="from_name" value={form.name} />
            <input type="hidden" name="from_email" value={form.email} />
            <input type="hidden" name="reply_to" value={form.email} />

            <label className="field">
              <span>Name</span>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              />
            </label>

            <label className="field">
              <span>Email</span>
              <input
                name="email"
                type="email"
                placeholder="you@domain.com"
                autoComplete="email"
                required
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              />
            </label>

            <label className="field">
              <span>Message</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me what you're building, timelines, and context."
                required
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              />
            </label>

            <button type="submit" className="btn btn-primary btn-wide" disabled={isSending}>
              {isSending ? "Sending…" : "Send"} <FiMail />
            </button>

            {status.message ? (
              <p className={`form-status ${status.type === "success" ? "is-success" : "is-error"}`}>
                {status.message}
              </p>
            ) : null}
          </form>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
