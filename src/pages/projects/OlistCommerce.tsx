import CaseStudyLayout from "@/components/CaseStudyLayout";
const repo = "https://github.com/sebastian-gm/Olist_ecommerce_Azure_project";
export default function OlistCommerce() {
  return (
    <CaseStudyLayout
      title="Olist turns raw commerce data into analytics tables."
      category="Data engineering / Azure"
      intro="An independent data-engineering project using the public Olist dataset to practice ingestion, transformation, data-quality checks, and analytics modeling."
      stack="ADF · ADLS Gen2 · Databricks · Delta Lake · Synapse"
      repo={repo}
    >
      <section className="case-section">
        <h2>The engineering problem</h2>
        <p>
          Orders, customers, products, and payments arrive as separate data
          files. Analytics needs consistent types, controlled duplicates, and
          tables that can be joined without repeatedly rebuilding the
          preparation logic.
        </p>
      </section>
      <section className="case-section">
        <h2>The pipeline</h2>
        <ol className="case-flow">
          <li>
            <span>01 / Bronze</span>
            <strong>Land source data</strong>
            <p>
              ADF orchestration and Databricks batch ingestion into ADLS and
              Delta tables.
            </p>
          </li>
          <li>
            <span>02 / Silver</span>
            <strong>Clean and reconcile</strong>
            <p>
              Type normalization, trimming, deduplication, and merge examples
              for updates.
            </p>
          </li>
          <li>
            <span>03 / Gold</span>
            <strong>Model for analysis</strong>
            <p>
              Daily aggregates and customer, product, and order-item tables
              exposed through Synapse.
            </p>
          </li>
        </ol>
        <p>
          The repository includes optional Auto Loader ingestion, a data-quality
          audit notebook, and maintenance examples for Delta tables. These are
          engineering patterns demonstrated on a public dataset.
        </p>
      </section>
      <section className="case-section">
        <h2>Inspect the implementation</h2>
        <ul>
          <li>
            <a
              href={`${repo}/blob/main/adf/pipeline_PL_Databricks_Bronze_Silver_Gold.json`}
              target="_blank"
              rel="noreferrer"
            >
              ADF pipeline definition
            </a>
          </li>
          <li>
            <a
              href={`${repo}/tree/main/databricks`}
              target="_blank"
              rel="noreferrer"
            >
              Ingestion, transformation, and quality notebooks
            </a>
          </li>
          <li>
            <a
              href={`${repo}/blob/main/synapse/external_objects.sql`}
              target="_blank"
              rel="noreferrer"
            >
              Synapse external objects
            </a>
          </li>
        </ul>
      </section>
      <section className="case-section">
        <h2>A practical data foundation</h2>
        <div className="evidence-note">
          <p>
            This independent project uses public Olist data to demonstrate the
            path from source files to analytics. The Azure execution is
            reproducible with the documented cloud resources and credentials.
          </p>
        </div>
        <p>
          The relevant evidence is the pipeline, transformation logic, and
          quality checks. The next meaningful validation would be a documented
          rerun with input fingerprints, row counts at each layer, and measured
          runtime and cost.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
