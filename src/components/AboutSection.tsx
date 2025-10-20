// src/components/AboutSection.tsx
import React from "react";

const AboutSection = () => {
  const stats = [
    { value: "6+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "3", label: "Countries Studied", caption: "Chile • Spain • Canada" },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <header className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 mx-auto rounded-full mt-4" />
          <p className="mt-4 text-muted-foreground">
            Get to know the person behind the <span className="text-gradient">data</span>
          </p>
        </header>

        {/* Content */}
        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Left: copy */}
          <div className="md:col-span-7 space-y-6 reveal">
            <div className="card-glass rounded-xl p-6">
              <p className="font-semibold text-primary">
                I’m a Data & Business Intelligence Analyst who turns messy data into decision-ready insights.

              </p>
            </div>

            <p className="leading-relaxed text-foreground/90">
              I’m Sebastian, a Data & Business Intelligence Analyst with 6+ years turning complex financial and operational data into clear, reliable insights.
            </p>

            <p className="leading-relaxed text-foreground/90">
              I build executive dashboards and automated reporting pipelines that connect Snowflake, AWS S3, and Azure SQL / ADF to Tableau and Power BI, giving teams faster and more trustworthy data.
            </p>

            <p className="leading-relaxed text-foreground/90">
              My background in fintech and credit risk helps me bridge data engineering and business strategy, defining KPIs, optimizing data models, and delivering analytics that drive lending and portfolio decisions.
            </p>

             <p className="leading-relaxed text-foreground/90">
              I focus on making data accurate, accessible, and actionable, so leaders can move from questions to confident decisions in minutes.
            </p>
            

            {/* Stats */}
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {stats.map((s) => (
                <li key={s.label} className="card-glass rounded-xl p-4 text-center">
                  <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                  {"caption" in s && (
                    <div className="mt-1 text-xs text-muted-foreground/70">
                      {(s as any).caption}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: portrait */}
          <div className="md:col-span-5 reveal">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
              <img
                src="/profile.png"
                alt="Sebastian Gonzalez portrait"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
