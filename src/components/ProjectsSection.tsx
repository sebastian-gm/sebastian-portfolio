import type { LucideIcon } from 'lucide-react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TechChip from './TechChip';

type ProjectMetric = {
  label: string;
  value: string;
  caption?: string;
};

type ProjectLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type FeaturedProject = {
  title: string;
  status?: string;
  tagline: string;
  summary: string;
  highlights: string[];
  metrics?: ProjectMetric[];
  technologies: string[];
  deliverables?: string[];
  links: ProjectLink[];
  gradient: string;
};

const ProjectsSection = () => {
  const mainProjects: FeaturedProject[] = [
    {
      title: 'Network Security Phishing Detection System',
      tagline: 'Containerised ML + MLOps pipeline with drift monitoring, MLflow experiment tracking, and FastAPI deployment to AWS ECS',
      summary:
        'Production-shaped phishing detection workflow: MongoDB ingestion, schema validation & drift checks, scikit-learn training, model registry, and realtime inference API. Deployed through Docker + GitHub Actions into AWS ECS.',
      highlights: [
        'Implemented YAML-driven schema validation and KS drift monitoring before each training run; failures halt the pipeline with actionable error messaging.',
        'Automated feature engineering (KNN imputation + scaling) wrapped in a persisted preprocessing pipeline for training/inference parity.',
        'Packaged FastAPI scoring service with structured logging, exception handling, and CI/CD promotion gates based on MLflow metrics.',
      ],
      metrics: [
        { label: 'Precision @ prod', value: '0.94', caption: 'On hold-out phishing URLs' },
        { label: 'Manual review reduction', value: '–37%', caption: 'Versus legacy regex rules' },
        { label: 'Build → deploy', value: '23 min', caption: 'CI/CD pipeline duration' },
      ],
      technologies: ['Python', 'FastAPI', 'MLflow', 'MongoDB', 'AWS', 'Docker', 'GitHub Actions'],
      deliverables: ['Training pipeline', 'Inference API', 'AWS ECS deployment runbook'],
      links: [
        { label: 'Code', href: 'https://github.com/sebastian-gm/networksecurity', icon: Github },
        { label: 'Docs', href: 'https://github.com/sebastian-gm/networksecurity#readme', icon: ExternalLink },
      ],
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      title: 'Olist Commerce – Azure Medallion Analytics',
      tagline: 'ADF ingestion → Databricks Delta Lake (Bronze/Silver/Gold) → Synapse serverless for Power BI and SQL consumers',
      summary:
        'Azure-first analytics platform for commerce KPIs. Automated batch + incremental ingestion, curated Delta tables with quality rules, and Synapse views consumed by BI teams for GMV, repeat purchase, and fulfilment SLAs.',
      highlights: [
        'Engineered notebooks that enforce explicit schemas, deduplication, and string hygiene across Bronze/Silver layers.',
        'Published Gold star schema (dim_customer, dim_product, fact_order_items) with freshness metadata for Tableau/Power BI teams.',
        'Introduced Delta maintenance scripts (OPTIMIZE, Z-ORDER, VACUUM) and DQ audit logs captured alongside pipeline runs.',
      ],
      metrics: [
        { label: 'Refresh cadence', value: '30 min', caption: 'Bronze → Gold pipeline runtime' },
        { label: 'Duplicate purge', value: '99.2%', caption: 'Orders resolved in Silver layer' },
        { label: 'Analyst time saved', value: '12 hrs/wk', caption: 'Manual Excel prep eliminated' },
      ],
      technologies: ['Azure', 'ADF', 'Databricks', 'Spark', 'Delta Lake', 'Synapse'],
      deliverables: ['ADF pipeline', 'Databricks notebooks', 'Synapse external tables'],
      links: [{ label: 'Code', href: 'https://github.com/sebastian-gm/Olist_ecommerce_Azure_project', icon: Github }],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'IBKR Lakehouse (AWS)',
      status: 'In Progress',
      tagline: 'Streaming Kafka (Redpanda/MSK) → Iceberg on S3 → Athena/EMR serverless marts orchestrated with dbt & Great Expectations',
      summary:
        'Standing up an event-driven analytical lakehouse for trade, order, and market data. Focused on reproducible quality gates, governed Iceberg tables, and low-latency marts for risk and trading desks.',
      highlights: [
        'Authoring ingestion contracts and schema registry patterns so trading/risk teams ingest the same canonical events.',
        'Designing dbt-driven semantic marts (PnL, risk factors, execution KPIs) with automated validation via Great Expectations and dbt tests.',
        'Prototyping FastAPI services to expose curated metrics to downstream applications and BI tools.',
      ],
      metrics: [
        { label: 'Target SLA', value: '< 5 min', caption: 'Trade-to-dashboard latency' },
        { label: 'Data quality', value: '34 checks', caption: 'Automated in Bronze/Silver layers' },
        { label: 'Cost guardrail', value: '<$6/hr', caption: 'Serverless & tiered storage' },
      ],
      technologies: ['AWS', 'Kafka', 'Iceberg', 'Athena', 'EMR', 'dbt', 'Great Expectations', 'FastAPI'],
      deliverables: ['Architecture guide', 'Data contract template', 'dbt project plan'],
      links: [{ label: 'See roadmap', href: '/projects/ibkr', icon: ArrowRight }],
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
  ];

  const moreProjects = [
    {
      title: 'HR Attrition Command Center',
      category: 'Power BI · SQL',
      description: 'Semantic model + interactive Power BI dashboard on attrition, DEI mix, and manager scorecards after warehouse clean-up in SQL Server.',
      link: 'https://github.com/sebastian-gm/hr_data_insights',
    },
    {
      title: 'Credit Risk IFRS9 Toolkit',
      category: 'Python · Finance',
      description: 'PD/LGD/EAD notebooks with SHAP explanations and ECL waterfall visuals for finance controllers.',
      link: 'https://github.com/sebastian-gm/credit_risk_IFRS9_ECL_model',
    },
    {
      title: 'Probability of Default Modeling',
      category: 'Python · Explainable ML',
      description: 'German Credit end-to-end modeling with stratified CV, model comparison dashboard, and regulator-ready documentation.',
      link: 'https://github.com/sebastian-gm/pd_predictive_modeling',
    },
    {
      title: 'London Bike Demand Insights',
      category: 'Tableau · Storytelling',
      description: 'Weather-adjusted demand analysis feeding a Tableau executive dashboard for mobility planners.',
      link: 'https://github.com/sebastian-gm/london_bike_sharing',
    },
    {
      title: 'S&P 500 Scenario Planner',
      category: 'Python · Forecasting',
      description: 'Robust regression & LSTM pipeline with walk-forward validation and KPI handoffs for strategy teams.',
      link: 'https://github.com/sebastian-gm/sp500_price_prediction_ml',
    },
    {
      title: 'Quant Edge Research Lab',
      category: 'Real-time Data · Ops',
      description: 'Live-trading prototypes with kill-switch tooling and risk dashboards (Hyperliquid, Binance).',
      link: 'https://github.com/sebastian-gm/quant_edge',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        {/* Main Projects */}
        <div className="space-y-12 mb-20">
          {mainProjects.map((project, index) => (
            <div key={index} className="reveal">
              <div className="project-card card-glass rounded-2xl overflow-hidden">
                <div className="grid lg:grid-cols-[minmax(0,1fr)_420px] xl:grid-cols-[minmax(0,1fr)_440px] gap-10">
                  {/* Content */}
                  <div className="p-8 lg:p-10 order-2 lg:order-1 space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h3>
                        {project.status && (
                          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-accent/15 text-accent rounded-full">
                            {project.status}
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-semibold">{project.tagline}</p>
                      <p className="text-muted-foreground leading-relaxed">{project.summary}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="uppercase text-xs tracking-widest text-muted-foreground">Role & impact</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground/90">
                        {project.highlights.map((item, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/80 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.deliverables && (
                      <div className="space-y-2">
                        <h4 className="uppercase text-xs tracking-widest text-muted-foreground">Key deliverables</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.deliverables.map((deliverable, idx) => (
                            <TechChip key={idx}>{deliverable}</TechChip>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <TechChip key={techIndex}>{tech}</TechChip>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3 pt-1">
                        {project.links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            variant="outline"
                            size="sm"
                            asChild
                            className="btn-outline-glass"
                          >
                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                              <link.icon className="w-4 h-4 mr-2" />
                              {link.label}
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual & metrics */}
                  <div className="relative order-1 lg:order-2">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                    <div className="relative h-full min-h-[320px] lg:min-h-[100%] p-8 flex flex-col justify-between bg-muted/15">
                      <div className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-xl bg-gradient-primary/90 flex items-center justify-center shadow-lg shadow-primary/30">
                          <Github className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm uppercase tracking-wide text-white/70">Snapshot</p>
                          <p className="text-lg font-semibold">{project.title}</p>
                        </div>
                      </div>

                      {project.metrics && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                          {project.metrics.map((metric, metricIdx) => (
                            <div
                              key={metricIdx}
                              className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                            >
                              <p className="text-sm uppercase tracking-wide text-white/60">{metric.label}</p>
                              <p className="text-2xl font-semibold text-white mt-1">{metric.value}</p>
                              {metric.caption && (
                                <p className="text-xs text-white/70 mt-1 leading-snug">{metric.caption}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Grid */}
        <div className="reveal">
          <h3 className="text-2xl font-bold text-center mb-8">Analytics & BI Case Studies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {moreProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass rounded-xl p-6 hover:scale-[1.02] transition-transform text-left border border-white/10"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-semibold text-lg">{project.title}</h4>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
                <span className="inline-block mt-3 mb-4 px-3 py-1 text-xs bg-primary/15 text-primary rounded-full uppercase tracking-wide">
                  {project.category}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </a>
            ))}
          </div>

          <div className="text-center space-y-3">
            <p className="text-sm text-muted-foreground">
              Want the full context? Explore detailed walkthroughs, notebooks, and dashboards on GitHub.
            </p>
            <Button variant="outline" asChild className="btn-outline-glass">
              <a href="https://github.com/sebastian-gm" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Browse full portfolio
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
