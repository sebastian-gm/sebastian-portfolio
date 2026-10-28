import { useRef, useState, type FormEvent } from "react";
import { PiArrowRight, PiArrowUpRight } from "react-icons/pi";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const sending = useRef(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (!response.ok || !(await response.json()).ok)
        throw new Error("Delivery not confirmed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timeout);
      sending.current = false;
    }
  }
  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-title"
    >
      <div className="page-width">
        <div className="contact-heading">
          <h2 id="contact-title">Got something in mind?</h2>
          <p>
            A role, a project, or a process that needs a better way. Tell me
            about it.
          </p>
        </div>
        <div className="contact-layout">
          <div className="contact-direct">
            <a
              className="contact-email"
              href="mailto:sebastiangm.dev@gmail.com"
            >
              Email me <PiArrowUpRight aria-hidden="true" />
            </a>
            <span>sebastiangm.dev@gmail.com</span>
            <div className="contact-socials">
              <a
                href="https://www.linkedin.com/in/sebastian-sgm/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="social-logo" aria-hidden="true" />{" "}
                LinkedIn
              </a>
              <a
                href="https://github.com/sebastian-gm"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="social-logo" aria-hidden="true" /> GitHub
              </a>
            </div>
            <a
              className="button button-light resume-download"
              href="/resumes/Sebastian_Resume.pdf"
              download="Sebastian_Resume.pdf"
            >
              Download my resume <PiArrowUpRight aria-hidden="true" />
            </a>
            <p className="resume-caption">AI, automation & data · PDF</p>
          </div>
          <form onSubmit={submit} className="contact-form">
            <div className="form-pair">
              <label>
                Name
                <input
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Your name"
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label>
              What do you have in mind?
              <textarea
                name="message"
                required
                maxLength={5000}
                rows={3}
                placeholder="Tell me a little about it."
              />
            </label>
            <button
              type="submit"
              className="button button-light"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send a message"}
              <PiArrowRight aria-hidden="true" />
            </button>
            <p className="contact-privacy">
              Your message is emailed to me so I can reply.
            </p>
            <div aria-live="polite" className="form-status">
              {status === "sent" && "Message sent. Thanks for reaching out."}
              {status === "error" && (
                <>
                  Delivery couldn’t be confirmed. Please email{" "}
                  <a href="mailto:sebastiangm.dev@gmail.com">
                    sebastiangm.dev@gmail.com
                  </a>{" "}
                  directly.
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
