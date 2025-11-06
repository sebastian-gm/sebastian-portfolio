import { ArrowLeft, ArrowUpRight, ExternalLink, Github, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TechChip from '@/components/TechChip';

const METRICS = [
  { label: 'Precision @ production', value: '0.94', detail: 'Measured on 20% hold-out phishing validation set' },
  { label: 'Manual review reduction', value: '–37%', detail: 'Drop in URLs escalated to analysts vs. regex-only rules' },
  { label: 'Build → deploy cycle', value: '23 min', detail: 'GitHub Actions pipeline into AWS ECS' },
];

const STACK = [
  'Python',
  'FastAPI',
  'scikit-learn',
  'MLflow',
  'Great Expectations',
  'MongoDB',
  'AWS ECS',
  'AWS S3',
  'Docker',
  'GitHub Actions',
];

const RESOURCES = [
  { label: 'GitHub repository', href: 'https://github.com/sebastian-gm/networksecurity', icon: Github },
  { label: 'Technical README', href: 'https://github.com/sebastian-gm/networksecurity#readme', icon: ExternalLink },
  { label: 'FastAPI service', href: 'https://github.com/sebastian-gm/networksecurity/blob/main/app.py', icon: ExternalLink },
];

const TOC = [
  { label: 'Project Background', href: '#project-background' },
  { label: 'Executive Summary', href: '#executive-summary' },
  { label: 'Pipeline & Architecture', href: '#pipeline' },
  { label: 'Model Governance & Monitoring', href: '#governance' },
  { label: 'Insights & Outcomes', href: '#outcomes' },
  { label: 'Recommendations & Iterations', href: '#next-steps' },
  { label: 'Assumptions & Caveats', href: '#assumptions' },
];

const PIPELINE_STEPS = [
  {
    title: 'Data ingestion & validation',
    description:
      'Suspicious URLs land in MongoDB. A scheduled ingestion container exports fresh batches, enforces YAML schema contracts, and blocks malformed records before they reach the feature store.',
    bullets: [
      'Versioned schema checks with type/null guardrails',
      'Baseline profile logged to MLflow for drift comparison',
      'Failure events notify the training job and park raw files for inspection',
    ],
  },
  {
    title: 'Feature engineering',
    description:
      'A scikit-learn Pipeline keeps training and inference transformations identical so analysts can trust every score.',
    bullets: [
      'KNN imputation (k=3) for sparse WHOIS and SSL metadata',
      'Frequency encoding for URL structure, hosting ASN, and certificate fields',
      'Persisted NumPy arrays + pickled transformers for reproducibility',
    ],
  },
  {
    title: 'Model training & selection',
    description:
      'Gradient Boosting, Random Forest, Logistic Regression, and AdaBoost compete via GridSearchCV with stratified folds.',
    bullets: [
      'Primary KPI: F1; precision/recall logged to MLflow for governance',
      'SHAP summaries generated for every run to inform analyst playbooks',
      'Winning model wrapped with the preprocessor in a custom estimator',
    ],
  },
  {
    title: 'Deployment & monitoring',
    description:
      'Dockerised FastAPI service sits behind an AWS Application Load Balancer with structured logging and health checks.',
    bullets: [
      'GitHub Actions builds, tests, and promotes containers to ECS',
      'Drift reports and metrics versioned in S3 alongside model binaries',
      'Alert hooks ready for Slack/Email integration when KPIs degrade',
    ],
  },
];

const NetworkSecurityPhishing = () => (
  <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
    <div className="relative overflow-hidden pb-24">
      <div className="absolute inset-x-0 -top-20 h-72 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.2),transparent)] blur-3xl" />

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
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-widest text-emerald-200">
              <ShieldCheck className="w-4 h-4" />
              Fraud & Security Analytics
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Network Security Phishing Detection System</h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Solo build of a production-shaped phishing scorer: ingest suspicious URLs, enforce data quality gates, train
              explainable ensemble models, and deploy a FastAPI service to AWS ECS. The platform trims noisy alerts while
              keeping every model decision audit-ready.
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
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm shadow-lg shadow-emerald-500/10"
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
                <a className="hover:text-emerald-200 transition" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="project-background" className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="text-sm font-mono uppercase tracking-[0.3em] text-emerald-200">1.</span>
              Project background
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Security teams were ingesting thousands of suspected phishing URLs per week. Regex heuristics flooded the
              analysts with false positives and slowed takedown requests. I built a new scorer that could automatically
              prioritise high-risk URLs, remain explainable for audit, and integrate cleanly with existing security
              operations tooling—end-to-end as a solo engineer.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3">
              <h3 className="text-sm uppercase tracking-widest text-slate-200">Success criteria</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>⬩ Precision ≥ 0.9 so analysts focus on true phishing attempts.</li>
                <li>⬩ Automated validation that stops dirty data before training.</li>
                <li>⬩ Deployment pipeline that only promotes models beating live KPIs.</li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
            <h3 className="text-sm uppercase tracking-widest text-emerald-200">My role</h3>
            <p className="text-slate-100 font-medium mt-2">Independent build</p>
            <p className="text-sm text-emerald-100/80 leading-relaxed mt-3">
              Owned discovery, data engineering, model experimentation, infrastructure, and documentation. Used public
              phishing corpora and manual labelling to calibrate performance targets.
            </p>
          </div>
        </section>

        <section id="executive-summary" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="text-sm font-mono uppercase tracking-[0.3em] text-emerald-200">2.</span>
              Executive summary
            </h2>
            <p className="text-slate-300 leading-relaxed">
              The platform ingests suspicious URLs from MongoDB, validates them via schema contracts, engineers features,
              and trains ensemble models. Gradient Boosting delivers 0.94 precision and 0.91 recall, cutting noisy alerts by
              37%. Every training run is tracked in MLflow/DagsHub, and successful builds deploy automatically to AWS ECS in
              under 25 minutes. Artefacts—preprocessors, models, drift reports—are versioned in S3, giving stakeholders a
              reproducible, audit-friendly pipeline.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-2">
              <h3 className="text-sm uppercase tracking-widest text-slate-200">Why it matters</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Analysts receive a prioritised queue with explanations, shrinking investigation time and accelerating
                takedowns.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-2">
              <h3 className="text-sm uppercase tracking-widest text-slate-200">Auditability by design</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Validation reports, experiment metadata, and SHAP plots sit beside every model for compliance walkthroughs.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-2">
              <h3 className="text-sm uppercase tracking-widest text-slate-200">Operate & extend</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Containerised services and modular components keep new features and experiments low-risk.
              </p>
            </div>
          </div>
        </section>

        <section id="pipeline" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="text-sm font-mono uppercase tracking-[0.3em] text-emerald-200">3.</span>
              Pipeline & architecture
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Each stage emits structured logs and artefacts so runs can be replayed, audited, or rolled back. The modular
              design lets me swap storage or modelling components without rewriting the pipeline.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {PIPELINE_STEPS.map((step) => (
              <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <ArrowUpRight className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="governance" className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="text-sm font-mono uppercase tracking-[0.3em] text-emerald-200">4.</span>
              Model governance & monitoring
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Every production run leaves a paper trail: validation reports, experiment metadata, and SHAP explanations sit
              next to the deployed model. Drift monitoring compares live traffic with the last approved training set so I
              can retrain before metrics deteriorate.
            </p>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>⬩ Feature importance plots and cohort breakdowns published to MLflow for analyst review.</li>
              <li>
                ⬩ Drift reports compare inference traffic with the training baseline via Kolmogorov–Smirnov tests by feature.
              </li>
              <li>⬩ Alerts hook into CI to halt deploys when precision or F1 falls below target thresholds.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3">
            <h3 className="text-sm uppercase tracking-widest text-slate-200">CI/CD guardrails</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>⬩ Pytest suite covers validation utilities and model wrappers on every push.</li>
              <li>⬩ Smoke tests hit a staging FastAPI container before production promotion.</li>
              <li>⬩ Deployment only proceeds when new metrics beat the live MLflow baseline.</li>
            </ul>
          </div>
        </section>

        <section id="outcomes" className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <span className="text-sm font-mono uppercase tracking-[0.3em] text-emerald-200">5.</span>
            Insights & outcomes
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-2">
              <h3 className="text-lg font-semibold text-white">Security operations</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Prioritised queue with explanations trims low-value investigations and speeds takedown requests.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-2">
              <h3 className="text-lg font-semibold text-white">Compliance</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Timestamped logs, artefacts, and drift reports simplify audit walkthroughs and model approvals.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-2">
              <h3 className="text-lg font-semibold text-white">Engineering</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Infrastructure-as-code workflow makes releases predictable and gives room for rapid experimentation.
              </p>
            </div>
          </div>
        </section>

        <section id="next-steps" className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <span className="text-sm font-mono uppercase tracking-[0.3em] text-emerald-200">6.</span>
            Recommendations & iterations
          </h2>
          <ul className="space-y-2 text-slate-300 text-sm leading-relaxed">
            <li>⬩ Add a Redis Streams-backed feature store for sub-second, event-driven scoring.</li>
            <li>⬩ Capture analyst feedback in-app to label edge cases and retrain faster.</li>
            <li>⬩ Layer a lightweight dashboard with operational KPIs (alert-to-resolution time, takedown win rate).</li>
          </ul>
        </section>

        <section id="assumptions" className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <span className="text-sm font-mono uppercase tracking-[0.3em] text-emerald-200">7.</span>
            Assumptions & caveats
          </h2>
          <ul className="space-y-2 text-slate-300 text-sm leading-relaxed">
            <li>
              ⬩ Combined open phishing corpora and assumed label accuracy; spot-checked samples manually to calibrate the
              baseline.
            </li>
            <li>
              ⬩ Attackers adapt URL patterns quickly—drift monitoring mitigates this, but human review remains necessary for
              zero-day tactics.
            </li>
            <li>
              ⬩ Performance figures reference benchmark datasets; production metrics depend on the organisation’s traffic mix
              and labelling maturity.
            </li>
          </ul>
        </section>
      </main>
    </div>
  </div>
);

export default NetworkSecurityPhishing;
