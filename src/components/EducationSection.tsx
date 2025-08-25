const EducationSection = () => {
  const education = [
    {
      school: 'Douglas College',
      degree: 'Postgraduate Diploma in Computer & Information Systems',
      country: 'Canada',
      period: '2022–2023'
    },
    {
      school: 'European University of Madrid',
      degree: 'Master of Business Administration (MBA)',
      country: 'Spain',
      period: '2016–2017'
    },
    {
      school: 'Andres Bello University',
      degree: 'BSc Economics (Concentration in Finance & Statistics)',
      country: 'Chile',
      period: '2012–2015'
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="reveal card-glass rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.school}</h3>
                      <p className="text-primary font-medium">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground font-medium">{edu.country}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;