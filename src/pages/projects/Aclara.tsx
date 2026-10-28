import CaseStudyLayout from "@/components/CaseStudyLayout";
import VideoDemo from "@/components/VideoDemo";
const repo =
  "https://github.com/sebastian-gm/factored-hackathon-2026-sebastian";
export default function Aclara() {
  const flow = [
    [
      "Understand",
      "Interpret the request in Spanish or Portuguese and clarify the unfamiliar charge.",
    ],
    [
      "Decide",
      "Combine scoped transaction data with deterministic workflow and policy checks.",
    ],
    [
      "Confirm",
      "Request confirmation and the appropriate verification before a sensitive action.",
    ],
    ["Act", "Execute the dispute workflow through the service layer."],
    ["Verify", "Read back the action result before reporting completion."],
    [
      "Escalate",
      "Give a person the facts, evidence, actions, and unresolved questions.",
    ],
  ];
  return (
    <CaseStudyLayout
      title="A clearer path from question to resolution."
      category="Aclara / Applied AI / Fintech"
      intro="I built Aclara to connect the conversation to the next step. It brings transaction data and dispute workflows into one banking service prototype."
      stack="Python · FastAPI · PostgreSQL · Gemini · Azure"
      repo={repo}
    >
      <section className="case-section">
        <h2>The opportunity</h2>
        <p>
          An unfamiliar card charge creates a simple question for the customer
          and a complex workflow behind the scenes. I brought the conversation
          and operational steps together in a focused banking service prototype
          for the Factored AI & Data Hackathon.
        </p>
        <p>
          My work spans the customer and operator interfaces, transaction data
          pipeline, service controls, dispute workflow, and evaluation tooling.
        </p>
      </section>
      <section className="case-section">
        <h2>See the experience</h2>
        <VideoDemo />
        <p className="video-context">
          Original hackathon pitch, using the earlier v4 results. The later
          evaluation and remaining limitations are summarized below.
        </p>
        <p>
          <a
            href="https://youtu.be/sgtShebCbyM"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>{" "}
          ·{" "}
          <a
            href={`${repo}/blob/main/docs/submission/Aclara-slides.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            View the presentation
          </a>
        </p>
      </section>
      <section className="case-section">
        <h2>The engineering behind the conversation</h2>
        <p>
          The model handles language. Application services handle scoped data
          access, policy checks, confirmation, execution, and readback. That
          separation lets the conversational experience sit on top of an
          explicit operational workflow.
        </p>
        <ol className="case-flow">
          {flow.map(([title, text], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <p>
          Spanish and Portuguese interactions share the same workflow. The
          public local demo uses authored fixtures and is available through the
          documented <code>make demo</code> command.
        </p>
      </section>
      <section className="case-section">
        <h2>Measured, then improved.</h2>
        <p>
          I compared the proposed system with a deterministic baseline on
          matched offline workloads, then used the failure analysis to improve
          the controls.
        </p>
        <div
          className="table-scroll"
          role="region"
          aria-label="Offline evaluation results"
          tabIndex={0}
        >
          <table>
            <caption>
              Full case requirements passed · 100 cases per workload
            </caption>
            <thead>
              <tr>
                <th scope="col">Evaluation</th>
                <th scope="col">Proposed system</th>
                <th scope="col">Baseline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Original v4</th>
                <td>88 / 100</td>
                <td>62 / 100</td>
              </tr>
              <tr>
                <th scope="row">New blind v5</th>
                <td>73 / 100</td>
                <td>47 / 100</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The v5 workload was authored by separate agents without access to
          product code or the earlier suites. Both systems saw the same cases.
          These are synthetic offline results. Neither run passed the full
          safety gate.
        </p>
        <p>
          Follow-up work strengthened cross-account handling, escalation
          routing, and context retention. The replay of the now-seen v5 cases
          reached 85/100 full-case passes. That measures regression progress
          rather than fresh held-out performance.
        </p>
        <details className="technical-details">
          <summary>Evaluation details and prototype boundaries</summary>
          <div>
            <p>
              The original blind v5 run recorded 10 materially incorrect
              outcomes and 2 unauthorized-action flags across 99 executed cases,
              plus 11 missed transfers out of 46 required. The follow-up v5
              replay recorded zero unauthorized-action flags, but neither
              replayed suite passed every safety requirement.
            </p>
            <p>
              The pitch’s zero-material-error statement applies only to the
              earlier v4 run and its specific metric. The later blind results do
              not support a general zero-risk claim.
            </p>
            <p>
              The supplied corpus is primarily Spanish. Portuguese capability is
              supported through the model and authored scenarios, not Portuguese
              training data in the supplied corpus. Banking actions are sandbox
              operations, with no real money movement.
            </p>
            <p>
              <a
                href={`${repo}/blob/main/docs/evaluation/final-v4-results.md`}
                target="_blank"
                rel="noreferrer"
              >
                v4 results
              </a>{" "}
              ·{" "}
              <a
                href={`${repo}/blob/main/docs/evaluation/final-v5-results.md`}
                target="_blank"
                rel="noreferrer"
              >
                Blind v5 evaluation
              </a>{" "}
              ·{" "}
              <a
                href={`${repo}/blob/main/docs/evaluation/post-v5-fixes.md`}
                target="_blank"
                rel="noreferrer"
              >
                Follow-up improvements
              </a>
            </p>
          </div>
        </details>
      </section>
      <section className="case-section">
        <h2>What this work brings together</h2>
        <p>
          Product thinking, data engineering, service design, and applied AI in
          one working prototype. I connected the customer conversation to a
          workflow, then tested what happened and kept improving it.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
