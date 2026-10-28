import CaseStudyLayout from "@/components/CaseStudyLayout";
const repo = "https://github.com/sebastian-gm/credit-risk-ai-platform";
export default function CreditRiskAIPlatform() {
  return (
    <CaseStudyLayout
      title="Intelligence with context."
      category="Credit Risk AI Platform / Applied AI"
      intro="I brought credit policy retrieval, document extraction, and governance into an Azure AI prototype designed around analyst review."
      stack="Azure AI Search · Foundry · Azure OpenAI · Terraform"
      repo={repo}
    >
      <section className="case-section">
        <h2>From information to useful answers</h2>
        <p>
          Analysts work across policies, underwriting notes, and financial
          documents. I built a platform that connects those sources to cited
          answers and structured extraction, using synthetic lending data to
          demonstrate the workflow.
        </p>
      </section>
      <section className="case-section">
        <h2>What I built</h2>
        <ul>
          <li>
            <strong>A shared data foundation.</strong> ADLS and Azure SQL
            organize documents, metadata, analytical data, and governance
            records.
          </li>
          <li>
            <strong>Retrieval with context.</strong> Azure AI Search combines
            keyword and vector retrieval while retaining source paths and
            document metadata.
          </li>
          <li>
            <strong>A policy assistant.</strong> Azure OpenAI and Foundry
            connect retrieved material to answers with source citations.
          </li>
          <li>
            <strong>Document extraction.</strong> Document Intelligence turns
            invoice content into structured fields for review.
          </li>
          <li>
            <strong>Repeatable infrastructure.</strong> Terraform defines the
            Azure environment, with Key Vault supporting secret configuration.
          </li>
        </ul>
      </section>
      <section className="case-section">
        <h2>Designed for review</h2>
        <p>
          I included prompt records, evaluation documentation, a use-case
          registry, and audit tracking alongside the prototype. The workflow
          supports an analyst’s decision rather than making a live credit
          approval.
        </p>
        <details className="technical-details">
          <summary>Evaluation scope</summary>
          <div>
            <p>
              The documented evaluation includes curated retrieval checks and
              two passing hosted-agent smoke cases. Those demonstrate
              integration on the sampled cases. Broader accuracy and
              generalization remain to be evaluated. All demonstration data is
              synthetic.
            </p>
          </div>
        </details>
      </section>
      <section className="case-section">
        <h2>Explore the implementation</h2>
        <p>
          <a
            href={`${repo}/blob/main/docs/demo-package.md`}
            target="_blank"
            rel="noreferrer"
          >
            Demo package
          </a>{" "}
          ·{" "}
          <a
            href={`${repo}/blob/main/docs/evaluation.md`}
            target="_blank"
            rel="noreferrer"
          >
            Evaluation
          </a>{" "}
          ·{" "}
          <a
            href={`${repo}/blob/main/docs/governance.md`}
            target="_blank"
            rel="noreferrer"
          >
            Governance
          </a>
        </p>
      </section>
    </CaseStudyLayout>
  );
}
