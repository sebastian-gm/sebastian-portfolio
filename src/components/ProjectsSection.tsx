import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TechChip from './TechChip';

const ProjectsSection = () => {
  const mainProjects = [
    {
      title: 'IBKR Lakehouse (AWS)',
      status: 'In Progress',
      tagline: 'Kafka (Redpanda/MSK) → Iceberg on S3 → Athena, EMR Serverless, dbt, Great Expectations, FastAPI',
      description: 'Designing a real-time/near-real-time lakehouse for trade/market events with quality gates and governed tables.',
      technologies: ['AWS', 'Kafka', 'Iceberg', 'Athena', 'EMR', 'dbt', 'Great Expectations', 'FastAPI'],
      links: [
        { label: 'See roadmap', href: '/projects/ibkr', icon: ArrowRight }
      ],
      image: '/api/placeholder/600/300',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Network Security Phishing Detection System',
      tagline: 'End-to-end ML + MLOps pipeline: validation, drift detection, training, FastAPI deployment',
      description: 'Containerized ETL (MongoDB → YAML schema validation + KS drift) → preprocessing (KNN impute) → model; MLflow/DagsHub tracking; artifacts to S3; CI/CD to AWS ECS; strong logging + exceptions.',
      technologies: ['Python', 'FastAPI', 'MLflow', 'MongoDB', 'AWS', 'Docker', 'GitHub Actions'],
      links: [
        { label: 'Code', href: 'https://github.com/sebastian-gm/networksecurity', icon: Github },
        { label: 'Docs', href: 'https://github.com/sebastian-gm/networksecurity#readme', icon: ExternalLink }
      ],
      image: '/api/placeholder/600/300',
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      title: 'End-to-End Data Engineering Pipeline on Azure',
      tagline: 'ADF ingestion → Delta Lake (Bronze/Silver/Gold) on Databricks → Synapse serverless',
      description: 'Batch + incremental (Auto Loader), explicit schemas, Silver dedupe/trim, Gold marts + small star schema; DQ metrics; OPTIMIZE/Z-ORDER/VACUUM; secrets via Key Vault/Secret Scopes; ADF orchestration.',
      technologies: ['Azure', 'ADF', 'Databricks', 'Spark', 'Delta Lake', 'Synapse'],
      links: [
        { label: 'Code', href: 'https://github.com/sebastian-gm/Olist_ecommerce_Azure_project', icon: Github }
      ],
      image: '/api/placeholder/600/300',
      gradient: 'from-purple-500/20 to-pink-500/20'
    }
  ];

  const moreProjects = [
    { title: 'HR Power BI Dashboard', category: 'Data Visualization' },
    { title: 'SQL Data Cleansing', category: 'Notebooks' },
    { title: 'S&P 500 Price Prediction', category: 'Notebooks' },
    { title: 'Diverse Portfolio Optimizer', category: 'Notebooks' },
    { title: 'London Bike Sharing Insights', category: 'Data Visualization' },
    { title: 'Student-Tutor Collaboration Platform', category: 'Web App' }
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
              <div className="project-card card-glass rounded-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Content */}
                  <div className="p-8 order-2 lg:order-1">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        {project.status && (
                          <span className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
                            {project.status}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-primary font-medium">{project.tagline}</p>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech, techIndex) => (
                          <TechChip key={techIndex}>{tech}</TechChip>
                        ))}
                      </div>
                      
                      {/* Links */}
                      <div className="flex flex-wrap gap-3 pt-4">
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
                  
                  {/* Image */}
                  <div className="relative overflow-hidden order-1 lg:order-2">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}></div>
                    <div className="project-image h-64 lg:h-full bg-muted/20 flex items-center justify-center">
                      <div className="text-muted-foreground text-center p-8">
                        <div className="w-16 h-16 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                          <Github className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <p className="font-medium">{project.title}</p>
                        <p className="text-sm opacity-70">Project Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Grid */}
        <div className="reveal">
          <h3 className="text-2xl font-bold text-center mb-8">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {moreProjects.map((project, index) => (
              <div key={index} className="card-glass rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer">
                <h4 className="font-semibold mb-2">{project.title}</h4>
                <span className="inline-block px-3 py-1 text-xs bg-primary/20 text-primary rounded-full">
                  {project.category}
                </span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              variant="outline"
              asChild
              className="btn-outline-glass"
            >
              <a href="https://github.com/sebastian-gm" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                See all on GitHub
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