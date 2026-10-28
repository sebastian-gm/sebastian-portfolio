import CaseStudyLayout from "@/components/CaseStudyLayout";
const repo = "https://github.com/sebastian-gm/networksecurity";
export default function NetworkSecurityPhishing() {
  return (
    <CaseStudyLayout
      title="Phishing detection & ML pipelines."
      category="Machine learning / Supporting project"
      intro="An independent project exploring the path from security data to a classifier and a prediction API. It complements my data-engineering work with model-training and serving practice."
      stack="Python · scikit-learn · FastAPI · Docker"
      repo={repo}
    >
      <section className="case-section">
        <h2>The engineering focus</h2>
        <p>
          Organize data ingestion, validation, preprocessing, model training,
          and inference as a repeatable workflow. The serving interface exposes
          predictions through FastAPI rather than leaving the result in a
          training notebook.
        </p>
      </section>
      <section className="case-section">
        <h2>Inspect the work</h2>
        <p>
          The repository is the reference for pipeline stages, environment
          setup, and model artifacts.{" "}
          <a href={`${repo}/blob/main/app.py`} target="_blank" rel="noreferrer">
            Inspect the API entrypoint
          </a>{" "}
          or{" "}
          <a href={`${repo}#readme`} target="_blank" rel="noreferrer">
            read the technical overview
          </a>
          .
        </p>
        <div className="evidence-note">
          <p>
            This page does not claim production precision, a reduction in
            analyst workload, or a validated deployment SLA. Those claims
            require a frozen test set and measured operational evidence.
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
