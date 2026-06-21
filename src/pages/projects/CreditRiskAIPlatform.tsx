import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TechChip from '@/components/TechChip';

const METRICS = [
  { label: 'RAG eval', value: '1.00', detail: 'Retrieval hit rate @5 across curated test questions' },
  { label: 'Foundry eval', value: '2/2', detail: 'Hosted agent smoke cases passed in Azure AI Foundry' },
  { label: 'SQL rows', value: '29k+', detail: 'Synthetic credit-risk records loaded into Azure SQL' },
  { label: 'Controls', value: '4 tables', detail: 'Registry, checklist, prompt library, and audit log' },
];

const STACK = [
  'Azure Data Lake Gen2',
  'Azure SQL',
  'Azure AI Foundry',
  'Azure AI Search',
  'Azure OpenAI',
  'Document Intelligence',
  'Terraform',
  'Python',
  'Key Vault',
  'Application Insights',
  'Power BI-ready',
];

const RESOURCES = [
  { label: 'GitHub repository', href: 'https://github.com/sebastian-gm/credit-risk-ai-platform', icon: Github },
  {
    label: 'Demo package',
    href: 'https://github.com/sebastian-gm/credit-risk-ai-platform/blob/main/docs/demo-package.md',
    icon: ExternalLink,
  },
  {
    label: 'Evaluation docs',
    href: 'https://github.com/sebastian-gm/credit-risk-ai-platform/blob/main/docs/evaluation.md',
    icon: ExternalLink,
  },
  {
    label: 'Governance docs',
    href: 'https://github.com/sebastian-gm/credit-risk-ai-platform/blob/main/docs/governance.md',
    icon: ExternalLink,
  },
];

const TOC = [
  { label: 'Plain English', href: '#plain-english' },
  { label: 'Background', href: '#project-background' },
  { label: 'Executive Summary', href: '#executive-summary' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Workflows', href: '#ai-workflows' },
  { label: 'Evaluation & Governance', href: '#governance' },
  { label: 'Portfolio Value', href: '#portfolio-value' },
  { label: 'Next Steps', href: '#next-steps' },
];

const ARCHITECTURE_STEPS = [
  {
    title: 'Governed data foundation',
    description:
      'Terraform provisions the Azure foundation and keeps the environment reproducible. Synthetic lending documents, metadata, and credit-risk analytics are organized through Data Lake and Azure SQL.',
    bullets: [
      'Azure Data Lake Gen2 raw, processed, and curated zones',
      'Azure SQL tables for document registry, credit-risk analytics, governance, and audit logs',
      'Key Vault, monitoring, and budget controls included in the platform baseline',
    ],
  },
  {
    title: 'Hybrid retrieval layer',
    description:
      'Synthetic policies, memos, operational reports, and applications are chunked, embedded, and indexed in Azure AI Search for cited RAG answers.',
    bullets: [
      'Hybrid vector + keyword retrieval with text-embedding-3-small',
      'Source paths, sensitivity labels, owner, department, and document type travel with every chunk',
      'Evaluation confirms expected sources are retrieved within top 5 results',
    ],
  },
  {
    title: 'AI assistant and document extraction',
    description:
      'Azure OpenAI answers policy and workflow questions from retrieved context, Azure AI Foundry hosts a Credit Policy Assistant grounded in Azure AI Search, and Document Intelligence extracts invoice fields for a finance automation scenario.',
    bullets: [
      'Grounded assistant uses gpt-5-mini with strict context and citation behavior',
      'Azure AI Foundry hosted agent returns policy answers with source-path citations and passed the first smoke evaluation',
      'Prebuilt invoice extraction captures vendor, customer, invoice ID, dates, subtotal, tax, and total',
      'No production applicant, customer, or company data is used',
    ],
  },
  {
    title: 'Governance and adoption layer',
    description:
      'The project stores use-case intake, risk classification, prompt metadata, review checks, audit logs, and evaluation metrics.',
    bullets: [
      'Use-case registry marks fully automated loan approval as prohibited and blocked',
      'Prompt library records owner, version, allowed data, and required controls',
      'Audit log seeds representative RAG, evaluation, extraction, and blocked-review events',
    ],
  },
];

const AI_WORKFLOWS = [
  {
    title: 'Credit policy assistant',
    description:
      'Answers questions such as DTI exception rules and missing-document routing from synthetic policies and underwriting memos.',
  },
  {
    title: 'Invoice field extraction',
    description:
      'Uses Azure AI Document Intelligence to extract structured fields from a generated synthetic invoice for AP review.',
  },
  {
    title: 'Governance reporting',
    description:
      'Loads governance tables into Azure SQL so adoption, risk, review status, and audit activity can later feed Power BI.',
  },
];

const NEXT_STEPS = [
  'Add Power BI dashboard pages for adoption, retrieval quality, governance risk, and document quality.',
  'Add more realistic invoice and lending document templates to improve line-item extraction and retrieval coverage.',
  'Capture Azure Portal screenshots as portfolio evidence.',
  'Package a short demo script showing one question, one extraction, one evaluation run, and one governance review.',
];

const CreditRiskAIPlatform = () => (
  <div className="case-study-page credit-risk-page min-h-screen bg-gradient-hero text-foreground">
    <div className="relative overflow-hidden pb-24">
      <div className="absolute inset-x-0 -top-20 h-72 bg-[radial-gradient(ellipse_at_top,rgba(47,112,116,0.14),transparent)] blur-3xl" />

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
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs uppercase tracking-widest text-primary">
              <Workflow className="w-4 h-4" />
              Azure Workflow
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Credit Risk AI Platform
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              A fintech lending demo built on Azure. It brings policies, loan files, invoices, and risk data into one
              controlled workflow so analysts can find trusted answers, review documents faster, and track AI risk.
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
                className="credit-panel rounded-2xl border border-border bg-card/80 p-5 backdrop-blur-sm shadow-sm"
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
              className="btn-outline-glass"
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
        <nav className="credit-panel rounded-2xl border border-border bg-card/80 p-6 lg:p-8 space-y-4">
          <h2 className="text-lg font-semibold text-white">Table of contents</h2>
          <ol className="grid gap-2 text-sm text-slate-300 md:grid-cols-2 lg:grid-cols-3 list-decimal list-inside">
            {TOC.map((item) => (
              <li key={item.href}>
                <a className="hover:text-primary transition" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="plain-english" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="section-number text-sm font-mono font-semibold uppercase tracking-[0.18em]">1.</span>
              What it does
            </h2>
            <p className="text-slate-300 leading-relaxed">
              A lending company usually has policies, loan files, invoices, and risk reports spread across different
              systems. This project puts that information into Azure, makes it searchable, and lets a credit-risk analyst
              ask questions with source citations.
            </p>
            <p className="text-slate-300 leading-relaxed">
              It also reads invoice fields, checks answer quality, and records which AI use cases are approved, reviewed,
              or blocked. The goal is faster work with clear controls, especially for teams dealing with regulated
              financial data.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="credit-panel rounded-2xl border border-border bg-card/80 p-6 space-y-2">
              <h3 className="text-sm uppercase tracking-widest text-slate-200">Find answers</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Analysts can ask policy questions and see which document the answer came from.
              </p>
            </div>
            <div className="credit-panel rounded-2xl border border-border bg-card/80 p-6 space-y-2">
              <h3 className="text-sm uppercase tracking-widest text-slate-200">Review documents</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Finance documents are processed into structured fields for faster review.
              </p>
            </div>
            <div className="credit-panel rounded-2xl border border-border bg-card/80 p-6 space-y-2">
              <h3 className="text-sm uppercase tracking-widest text-slate-200">Control risk</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Risk reviews, prompt ownership, and blocked use cases are stored for reporting.
              </p>
            </div>
          </div>
        </section>

        <section id="project-background" className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="section-number text-sm font-mono font-semibold uppercase tracking-[0.18em]">2.</span>
              Background
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Mid-size lending teams typically have policies, memos, operational reports, invoices, and review notes spread
              across disconnected systems. This project puts those pieces into one Azure demo: organized data, trusted
              search, document extraction, controls, evaluation, and reporting.
            </p>
            <div className="credit-panel rounded-2xl border border-border bg-card/80 p-6 space-y-3">
              <h3 className="text-sm uppercase tracking-widest text-slate-200">Success criteria</h3>
              <ul className="list-disc space-y-2 pl-5 text-slate-300 text-sm">
                <li>Azure resources provisioned with reproducible infrastructure-as-code.</li>
                <li>Assistant answers questions from trusted sources with citations.</li>
                <li>Evaluation and governance evidence exists before calling it a demo.</li>
              </ul>
            </div>
          </div>
          <div className="credit-panel rounded-2xl border border-border bg-card/80 p-6 shadow-sm">
            <h3 className="text-sm uppercase tracking-widest text-primary">My role</h3>
            <p className="text-slate-100 font-medium mt-2">Independent build</p>
            <p className="text-sm text-slate-300 leading-relaxed mt-3">
              Designed the domain, generated safe synthetic data, provisioned Azure resources, implemented data loading,
              built retrieval and assistant scripts, added extraction, and modeled governance tables.
            </p>
          </div>
        </section>

        <section id="executive-summary" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="section-number text-sm font-mono font-semibold uppercase tracking-[0.18em]">3.</span>
              Executive summary
            </h2>
            <p className="text-slate-300 leading-relaxed">
              The platform ingests synthetic credit-risk documents and structured data, builds a governed metadata layer,
              indexes source chunks in Azure AI Search, generates embeddings with Azure OpenAI, and answers questions with
              citations. It also extracts invoice fields with Document Intelligence and loads governance data into SQL so
              adoption and risk can be reported in Power BI.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="credit-panel rounded-2xl border border-border bg-card/80 p-6 space-y-2">
              <h3 className="text-sm uppercase tracking-widest text-slate-200">Cited answers</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Answers are grounded in retrieved documents and print source paths for analyst review.
              </p>
            </div>
            <div className="credit-panel rounded-2xl border border-border bg-card/80 p-6 space-y-2">
              <h3 className="text-sm uppercase tracking-widest text-slate-200">Measured behavior</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                RAG evaluation checks retrieval hit rate, citation rank, non-empty answers, and required term coverage.
              </p>
            </div>
            <div className="credit-panel rounded-2xl border border-border bg-card/80 p-6 space-y-2">
              <h3 className="text-sm uppercase tracking-widest text-slate-200">Governance data</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Risk levels, acceptable-use review, prompt metadata, and audit events are modeled as reportable data.
              </p>
            </div>
          </div>
        </section>

        <section id="architecture" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="section-number text-sm font-mono font-semibold uppercase tracking-[0.18em]">4.</span>
              Architecture
            </h2>
            <p className="text-slate-300 leading-relaxed">
              The architecture is broad enough to show real AI engineering work and small enough to run as a portfolio lab.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {ARCHITECTURE_STEPS.map((step) => (
              <div key={step.title} className="credit-panel rounded-2xl border border-border bg-card/80 p-6 space-y-3">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <ArrowUpRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="ai-workflows" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="section-number text-sm font-mono font-semibold uppercase tracking-[0.18em]">5.</span>
              Workflows
            </h2>
            <p className="text-slate-300 leading-relaxed">
              The workflows are framed around practical business value: faster review, fewer manual lookups, cleaner
              extraction, and visible controls.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {AI_WORKFLOWS.map((item) => (
              <div key={item.title} className="credit-panel rounded-2xl border border-border bg-card/80 p-6 space-y-2">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="governance" className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="section-number text-sm font-mono font-semibold uppercase tracking-[0.18em]">6.</span>
              Evaluation & governance
            </h2>
            <p className="text-slate-300 leading-relaxed">
              The project includes a small but explicit evaluation harness. Current results show 1.00 retrieval hit rate
              at top 5, 1.00 answer term pass rate, and 2 of 2 hosted-agent smoke cases passing in Azure AI Foundry.
              Governance tables track use cases, review checks, prompt metadata, and audit events. A prohibited fully
              automated loan approval use case is intentionally blocked.
            </p>
            <ul className="list-disc space-y-3 pl-5 text-slate-300 text-sm">
              <li>Evaluation cases cover DTI policy, document requirements, routing, and prohibited automation.</li>
              <li>SQL governance tables are designed for Power BI reporting.</li>
              <li>Human review remains required for regulated or customer-impacting workflows.</li>
            </ul>
          </div>
          <div className="credit-panel rounded-2xl border border-border bg-card/80 p-6 space-y-3">
            <h3 className="text-sm uppercase tracking-widest text-slate-200">Current evidence</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>20 embedded search chunks indexed in Azure AI Search.</li>
              <li>29,465 credit-risk rows loaded into Azure SQL.</li>
              <li>6 AI use cases, 6 review checks, 4 prompts, and 4 audit events seeded.</li>
              <li>Invoice extraction succeeded for vendor, customer, dates, subtotal, tax, and total.</li>
              <li>Azure AI Foundry hosted agent passed a 2-case smoke evaluation.</li>
            </ul>
          </div>
        </section>

        <section id="portfolio-value" className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <span className="section-number text-sm font-mono font-semibold uppercase tracking-[0.18em]">7.</span>
            Portfolio value
          </h2>
          <p className="text-slate-300 leading-relaxed">
            This project shows practical AI engineering work: cloud infrastructure, data engineering, retrieval, model
            integration, document extraction, evaluation, security-minded configuration, and governance reporting. It uses
            synthetic data so it can be shared publicly.
          </p>
        </section>

        <section id="next-steps" className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <span className="section-number text-sm font-mono font-semibold uppercase tracking-[0.18em]">8.</span>
            Next steps
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-300 text-sm leading-relaxed">
            {NEXT_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  </div>
);

export default CreditRiskAIPlatform;
