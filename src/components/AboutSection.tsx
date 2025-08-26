const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: text */}
          <div className="card-glass rounded-2xl p-6 md:p-8">
            <p className="text-lg font-semibold text-gradient mb-3">
              Started as a Data Scientist, then transitioned into Data Engineering to build scalable, production-ready data systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I’m a data engineer with experience in ETL/ELT, cloud data platforms, and model deployment. I’ve built
              ingestion pipelines (AWS &amp; Azure), implemented data validation and drift detection, and delivered real-time dashboards
              and ML APIs. I focus on reliability, observability, and business impact.
            </p>
          </div>

          {/* Right: photo card */}
          <div className="relative">
            <div className="rounded-2xl p-[2px] bg-gradient-to-br from-sky-500/40 to-emerald-400/40">
              <div className="rounded-2xl bg-black/40 backdrop-blur-sm p-2">
                <img
                  src="/assets/profile.png"
                  alt="Sebastian Gonzalez"
                  className="rounded-xl object-cover w-full h-[360px]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
