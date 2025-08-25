import TechChip from './TechChip';

const AboutSection = () => {
  const technologies = [
    'Spark', 'Airflow', 'Databricks', 'dbt', 'MLflow', 'Great Expectations',
    'AWS', 'Azure', 'Docker', 'PostgreSQL', 'MongoDB', 'Power BI', 'Tableau'
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 reveal">
          {/* Journey */}
          <div className="card-glass rounded-lg p-8">
            <p className="text-lg text-accent font-medium mb-4">
              Started as a Data Scientist, then transitioned into Data Engineering to build scalable, production-ready data systems.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I'm a data engineer with experience in ETL/ELT, cloud data platforms, and model deployment. 
              I've built ingestion pipelines (AWS & Azure), implemented data validation and drift detection, 
              and delivered real-time dashboards and ML APIs. I focus on reliability, observability, and business impact.
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <TechChip key={index}>
                  {tech}
                </TechChip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;