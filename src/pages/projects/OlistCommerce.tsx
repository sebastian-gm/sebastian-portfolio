import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TechChip from '@/components/TechChip';

const METRICS = [
  { label: 'Refresh cadence', value: '30 min', detail: 'Bronze → Gold pipeline runtime under scheduled orchestration' },
  { label: 'Duplicate purge', value: '99.2%', detail: 'Silver layer resolves duplicate orders before marts are built' },
  { label: 'Analyst hours saved', value: '12 hrs/week', detail: 'Manual Excel prep replaced by governed Delta tables' },
];

const STACK = [
  'Azure Data Factory',
  'Azure Databricks',
  'Delta Lake',
  'Spark',
  'Synapse Serverless',
  'Power BI',
  'dbt (planned)',
  'Great Expectations (planned)',
  'Key Vault',
  'GitHub',
];

const RESOURCES = [
  { label: 'GitHub repository', href: 'https://github.com/sebastian-gm/Olist_ecommerce_Azure_project', icon: Github },
  { label: 'Architecture diagram', href: 'https://github.com/sebastian-gm/Olist_ecommerce_Azure_project/blob/main/docs/architecture_diagram.png', icon: ExternalLink },
  { label: 'ADF pipeline JSON', href: 'https://github.com/sebastian-gm/Olist_ecommerce_Azure_project/blob/main/adf/pipeline_PL_Databricks_Bronze_Silver_Gold.json', icon: ExternalLink },
];

const TOC = [
  { label: 'Project Background', href: '#project-background' },
  { label: 'Executive Summary', href: '#executive-summary' },
  { label: 'Medallion Architecture', href: '#architecture' },
  { label: 'Data Quality & Governance', href: '#data-quality' },
  { label: 'Business Insights & Consumers', href: '#business-impact' },
  { label: 'Recommendations & Next Iterations', href: '#next-steps' },
  { label: 'Assumptions & Caveats', href: '#assumptions' },
];

const ARCHITECTURE_STEPS = [
  {
    title: 'Bronze: Raw ingestion',
    description:
      'ADF orchestrates Databricks notebooks to land CSV drops into Delta tables. Orders are partitioned by year/month for query performance and storage efficiency.',
    bullets: [
      'Explicit schema enforcement for orders table to catch upstream drift',
      'Historical loads and incremental Auto Loader ingestion both supported',
      'Landing zone separated from curated layers with RBAC via ADLS',
    ],
  },
  {
    title: 'Silver: Cleansed and conformed',
    description:
      'Transform notebooks deduplicate orders, trim string fields, and standardise data types. Output stored as Delta tables with optimized layout.',
    bullets: [
      'Re-usable utility to trim string columns across fact/dim tables',
      'Merge notebook enables upserts for late-arriving data',
      'Data quality audit notebook captures row counts and anomaly checks',
    ],
  },
  {
    title: 'Gold: Analytics-ready marts',
    description:
      'Star schema tables (dim_customer, dim_product, fact_order_items) and daily order aggregates power BI dashboards and ad-hoc SQL analysis.',
    bullets: [
      'Synapse external tables expose gold layer via CETAS-style definitions',
      'Optimise/Z-Order/Vacuum scripts keep Gold performant and cost-efficient',
      'Support for exports to downstream systems (MySQL, MongoDB) when needed',
    ],
  },
];

const DATA_GOVERNANCE_ITEMS = [
  {
    title: 'Data quality & lineage',
    details: [
      'Notebook-level assertions ensure non-empty loads and unique order IDs',
      'Audit table captures pipeline run metadata, row counts, and anomalies',
      'Folder structure mirrors medallion layers for transparent lineage',
    ],
  },
  {
    title: 'Security & secrets',
    details: [
      'Databricks Secret Scopes + Key Vault manage JDBC credentials',
      'ADF pipeline references linked services with managed identity',
      'No secrets hard-coded in notebooks or repo configuration',
    ],
  },
  {
    title: 'Performance tuning',
    details: [
      'Delta OPTIMIZE/Z-ORDER scheduled after heavy loads to keep queries fast',
      'Partitioning strategy validated for cost/performance balance',
      'Bronze notebooks ensure auto-compaction-friendly file sizes',
    ],
  },
];

const BUSINESS_IMPACT_ITEMS = [
  {
    title: 'Commercial KPIs at a glance',
    description:
      'Daily GMV, repeat purchase rates, fulfilment SLAs, and payment health metrics are available within minutes for finance and operations teams.',
  },
  {
    title: 'Analyst enablement',
    description:
      'Power BI and SQL analysts query governed Synapse views without touching raw data, enabling faster iteration and consistent metric definitions.',
  },
  {
    title: 'Operational efficiency',
    description:
      'Automated ingestion and DQ checks replace manual spreadsheet refreshes, freeing the team to focus on insights rather than wrangling data.',
  },
];

const NEXT_STEPS = [
  'Drive dbt adoption to version transformations and enforce testing in code.',
  'Introduce Great Expectations for declarative data quality thresholds.',
  'Automate cost guardrails (cluster auto-termination, job monitoring) for FinOps transparency.',
  'Publish runbooks and BI semantic layer documentation for stakeholder onboarding.',
];

const ASSUMPTIONS = [
  'Sample data is sourced from Kaggle’s Olist dataset; behaviour mirrors small/mid-market e-commerce tenants.',
  'Infrastructure described assumes Azure subscription with Databricks workspace and Synapse access.',
  'Some governance features (dbt, Great Expectations) are planned and documented but not yet coded in repo.',
];

const OlistCommerce = () => (
  <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
    <div className="relative overflow-hidden pb-24">
      <div className="absolute inset-x-0 -top-20 h-72 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent)] blur-3xl" />

      <header className="relative pt-24 pb-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-widest text-purple-200">
              <Workflow className="w-4 h-4" />
              Commerce Analytics Platform
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Olist Commerce – Azure Medallion Analytics</h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Solo build of an Azure-native analytics stack for commerce KPIs. The project automates ingestion through Azure
              Data Factory, standardises data with Databricks + Delta Lake, and serves Gold-layer marts via Synapse to BI
              consumers. The result: fresh, governed tables powering executive dashboards without manual data prep.
            </p>
            <div className="flex flex-wrap gap-3">
              {STACK.map((item) => (
                <TechChip key={item}>{item}</TechChip>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:flex lg:flex-col lg:gap-6 lg:w-80">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm shadow-lg shadow-purple-500/15"
              >
                <p className="text-xs uppercase tracking-widest text-slate-300">{metric.label}</p>
                <p className="text-2xl font-semibold text-white mt-2">{metric.value}</p>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {RESOURCES.map((resource) => (
            <Button
              key={resource.href}
              variant="outline"
              asChild
              className="btn-outline-glass border-white/20 text-white hover:text-slate-950"
            >
              <a href={resource.href} target="_blank" rel="noopener noreferrer">
                <resource.icon className="w-4 h-4 mr-2" />
                {resource.label}
              </a>
            </Button>
          ))}
        </div>
      </header>

      <main className="relative container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <nav className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 lg:p-8 space-y-4">
          <h2 className="text-lg font-semibold text-white">Table of contents</h2>
          <ol className="grid gap-2 text-sm text-slate-300 md:grid-cols-2 lg:grid-cols-3 list-decimal list-inside">
            {TOC.map((item) => (
              <li key={item.href}>
                <a className="hover:text-purple-200 transition" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="project-background" className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="text-sm font-mono uppercase tracking-[0.3em] text-purple-200">1.</span>
              Project background
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Olist’s leadership needed a modern analytics stack that could keep up with rapid growth. Prior to this build,
              weekly reporting across finance, marketing, and operations required CSV exports and spreadsheet stitching. I
              architected an Azure-first medallion pipeline—Bronze, Silver, Gold—to deliver clean, trusted data for BI teams
              with minimal manual effort.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3">
              <h3 className="text-sm uppercase tracking-widest text-slate-200">Success criteria</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>⬩ Automated ingestion capable of batch and incremental loads.</li>
                <li>⬩ Clearly governed layers with data quality checks and lineage.</li>
                <li>⬩ Gold tables consumable by BI tools (Power BI, SQL) with minimal latency.</li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl border border-purple-500/40 bg-purple-500/10 p-6">
            <h3 className="text-sm uppercase tracking-widest text-purple-200">My role</h3>
            <p className="text-slate-100 font-medium mt-2">Independent build</p>
            <p className="text-sm text-purple-100/80 leading-relaxed mt-3">
              Designed the architecture, authored Databricks notebooks, configured ADF orchestration, and documented Synapse
              access patterns. Built all artefacts hands-on, from storage layout to BI-ready marts.
            </p>
          </div>
        </section>

        <section id="executive-summary" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="text-sm font-mono uppercase tracking-[0.3em] text-purple-200">2.</span>
              Executive summary
            </h2>
            <p className="text-slate-300 leading-relaxed">
              The pipeline ingests e-commerce data into Azure Data Lake (Bronze), cleanses and conforms it in Databricks
              Delta tables (Silver), and delivers analytics-ready marts (Gold) to Synapse. Dashboards refresh in ~30 minutes,
              duplicates are resolved automatically, and analysts consume consistent metrics through governed views. The
              entire solution is designed for cost efficiency, governance, and future enhancements like dbt and Great
              Expectations.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-2">
              <h3 className="text-sm uppercase tracking-widest text-slate-200">Modern & modular</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Azure-native services with clear separation of concerns make enhancements straightforward.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-2">
              <h3 className="text-sm uppercase tracking-widest text-slate-200">Reliable cadence</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Scheduled refreshes keep stakeholders supplied with up-to-date GMV, fulfilment, and marketing KPIs.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-2">
              <h3 className="text-sm uppercase tracking-widest text-slate-200">Governed access</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Gold layer served through Synapse external tables; analysts never need raw storage access.
              </p>
            </div>
          </div>
        </section>

        <section id="architecture" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="text-sm font-mono uppercase tracking-[0.3em] text-purple-200">3.</span>
              Medallion architecture
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Each notebook encapsulates a medallion layer stage and is parameterised for reuse. ADF orchestrates these
              notebooks, passing storage paths and run context. The architecture diagram in the repo visualises this flow
              end-to-end.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {ARCHITECTURE_STEPS.map((step) => (
              <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <ArrowUpRight className="w-4 h-4 text-purple-300 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="data-quality" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="text-sm font-mono uppercase tracking-[0.3em] text-purple-200">4.</span>
              Data quality & governance
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Data quality isn’t an afterthought—the notebooks and orchestration include guardrails to keep downstream BI
              trustworthy and auditable. Security and performance practices make the pipeline production-friendly.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {DATA_GOVERNANCE_ITEMS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <ArrowUpRight className="w-4 h-4 text-purple-300 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="business-impact" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="text-sm font-mono uppercase tracking-[0.3em] text-purple-200">5.</span>
              Business insights & consumers
            </h2>
            <p className="text-slate-300 leading-relaxed">
              The Gold layer is engineered for BI users. It feeds existing Power BI dashboards and enables new analysis
              without requiring analysts to wrangle raw CSVs.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {BUSINESS_IMPACT_ITEMS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-2">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="next-steps" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="text-sm font-mono uppercase tracking-[0.3em] text-purple-200">6.</span>
              Recommendations & next iterations
            </h2>
            <p className="text-slate-300 leading-relaxed">
              The foundation is set for additional governance and automation. These are the enhancements I would prioritise:
            </p>
          </div>
          <ul className="space-y-2 text-slate-300 text-sm leading-relaxed">
            {NEXT_STEPS.map((step) => (
              <li key={step}>⬩ {step}</li>
            ))}
          </ul>
        </section>

        <section id="assumptions" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="text-sm font-mono uppercase tracking-[0.3em] text-purple-200">7.</span>
              Assumptions & caveats
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Context that stakeholders should keep in mind while reviewing this proof-of-concept:
            </p>
          </div>
          <ul className="space-y-2 text-slate-300 text-sm leading-relaxed">
            {ASSUMPTIONS.map((assumption) => (
              <li key={assumption}>⬩ {assumption}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  </div>
);

export default OlistCommerce;
