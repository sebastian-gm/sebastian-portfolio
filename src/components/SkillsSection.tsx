import TechChip from './TechChip';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Python', 'SQL']
    },
    {
      title: 'Data Eng & MLOps',
      skills: ['Spark', 'Airflow', 'Databricks', 'dbt', 'MLflow', 'DVC', 'Great Expectations']
    },
    {
      title: 'Cloud & Infra',
      skills: ['AWS (S3, Lambda, EMR, Athena)', 'Azure (ADF, Azure SQL)', 'Docker', 'CI/CD (GitHub Actions)']
    },
    {
      title: 'Databases & Tables',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Delta Lake', 'Iceberg']
    },
    {
      title: 'Visualization & BI',
      skills: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="reveal card-glass rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gradient">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <TechChip key={skillIndex}>{skill}</TechChip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;