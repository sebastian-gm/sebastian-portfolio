import { useState } from "react";
import { PiArrowUpRight } from "react-icons/pi";

const experience = [
  {
    title: "Give people their time back.",
    category: "Business automation",
    text: "I build automation for a multinational company. Invoices, approvals, document routing and alerts. Less chasing things down, more time for the work that matters.",
    tools: "Power Automate · AI Builder · Python · Microsoft Graph",
  },
  {
    title: "Put AI to work.",
    category: "Applied AI",
    text: "I turn documents into usable data, make credit policies easier to find, and protect sensitive text in English and Spanish. With clear rules and human review where they’re needed.",
    tools: "Azure AI · Foundry · AI Search · Document Intelligence",
  },
  {
    title: "Make the numbers make sense.",
    category: "Cloud, data & BI",
    text: "I build Azure data pipelines, cloud integrations and automated workflows. Then I turn data from APIs and business systems into financial and operational reporting teams can use.",
    tools: "Azure Functions · Data Factory · ADLS · SQL · Power BI",
  },
  {
    title: "Bring the finance perspective.",
    category: "Finance & fintech",
    text: "I’ve worked across credit risk, auto finance and consumer lending. I use Python and SQL to understand borrower behaviour, approval patterns and portfolio exposure.",
    tools: "Python · SQL · Credit risk · Portfolio analytics",
  },
];

export default function ExperienceSection() {
  const [selected, setSelected] = useState<number | null>(0);
  return (
    <section
      id="experience"
      className="section experience-section"
      aria-labelledby="experience-title"
    >
      <div className="page-width experience-layout">
        <div className="experience-intro">
          <h2 id="experience-title">
            Less busywork.
            <br />
            More room to think.
          </h2>
          <p>
            I get into the process, find what’s slowing people down, and build
            something that helps.
          </p>
          <a
            className="text-link"
            href="/resumes/Sebastian_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            My experience on paper <PiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="experience-accordion">
          {experience.map((item, i) => (
            <article
              key={item.category}
              className={`experience-item ${selected === i ? "is-open" : ""}`}
            >
              <h3>
                <button
                  type="button"
                  id={`experience-trigger-${i}`}
                  aria-expanded={selected === i}
                  aria-controls={`experience-panel-${i}`}
                  onClick={() => setSelected(selected === i ? null : i)}
                >
                  <span>{item.category}</span>
                  <span className="accordion-toggle" aria-hidden="true">
                    <i />
                    <i />
                  </span>
                </button>
              </h3>
              <div
                id={`experience-panel-${i}`}
                role="region"
                aria-labelledby={`experience-trigger-${i}`}
                aria-hidden={selected !== i}
                className="experience-panel"
              >
                <div className="experience-panel-clip">
                  <div className="experience-panel-content">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                    <p className="tool-line">{item.tools}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
