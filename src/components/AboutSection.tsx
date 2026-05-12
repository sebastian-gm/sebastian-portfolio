// src/components/AboutSection.tsx
import React from "react";

type Stat = {
  value: string;
  label: string;
  caption?: string;
};

const AboutSection = () => {
  const stats: Stat[] = [
    { value: "BI", label: "Dashboards, models, and reporting products" },
    { value: "AI", label: "Experiments with automation and assisted analysis" },
    { value: "Cloud", label: "Azure-first pipelines and practical data workflows" },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <header className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-bold">About</h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-4" />
          <p className="mt-4 text-muted-foreground">
            Practical data work, automation, and AI curiosity
          </p>
        </header>

        {/* Content */}
        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Left: copy */}
          <div className="md:col-span-7 space-y-6 reveal">
            <div className="card-glass rounded-xl p-6">
              <p className="font-semibold text-primary">
                I enjoy building clean, useful data products: the kind of dashboards, pipelines, and small automations that make people ask better questions.

              </p>
            </div>

            <p className="leading-relaxed text-foreground/90">
              I’m Sebastian, a BI Developer / BI Engineer who likes the space where analytics, software, and business context meet. Most of my work lives around Power BI, SQL, Azure, Python, and automation.
            </p>

            <p className="leading-relaxed text-foreground/90">
              I’m also genuinely interested in AI: not as decoration, but as a way to speed up analysis, generate better workflows, improve documentation, and make data products more useful.
            </p>

            <p className="leading-relaxed text-foreground/90">
              My finance and credit-risk background still shows up in how I think: clear definitions, controls, risk, and business impact matter as much as the technical build.
            </p>

             <p className="leading-relaxed text-foreground/90">
              This site is a snapshot of what I like to build and where I’m heading: BI engineering, analytics automation, and AI-assisted data experiences.
            </p>
            

            {/* Stats */}
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {stats.map((s) => (
                <li key={s.label} className="card-glass rounded-xl p-4 text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-gradient">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                  {s.caption && (
                    <div className="mt-1 text-xs text-muted-foreground/70">
                      {s.caption}
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
                className="w-full h-[420px] object-cover object-[center_28%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
