import React from "react";
import { OrbitingCircles } from "./OrbitingCircles";
import {
  SiApachespark,
  SiApachekafka,
  SiApacheairflow,
  SiDatabricks,
  SiDbt,
  SiMlflow,
  SiDocker,
  SiKubernetes,
  SiMicrosoftazure,
  SiAzuredevops,
  SiPostgresql,
  SiSnowflake,
  SiPython,
  SiTerraform,
  SiGooglecloud,
} from "react-icons/si";
import { DiAws } from "react-icons/di";

const TextBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center justify-center h-7 px-2 rounded-full border border-white/15 text-[11px] font-semibold text-white/80 bg-black/30">
    {children}
  </span>
);

export default function HeroSection() {
  const outerIcons = [
    <SiApachespark key="spark" className="text-orange-500" />,
    <SiApachekafka key="kafka" className="text-zinc-200" />,
    <SiApacheairflow key="airflow" className="text-sky-400" />,
    <SiDatabricks key="databricks" className="text-rose-500" />,
    <SiDbt key="dbt" className="text-orange-400" />,
    <SiMlflow key="mlflow" className="text-sky-500" />,
    <TextBadge key="ge">GE</TextBadge>,
    <TextBadge key="iceberg">Iceberg</TextBadge>,
    <SiDocker key="docker" className="text-blue-400" />,
    <SiKubernetes key="kubernetes" className="text-blue-400" />,
  ];

  const innerIcons = [
    <DiAws key="aws" className="text-amber-400" />,
    <SiMicrosoftazure key="azure" className="text-sky-500" />,
    <SiAzuredevops key="azdo" className="text-sky-400" />,
    <SiGooglecloud key="gcp" className="text-sky-400" />,
    <SiPostgresql key="postgres" className="text-cyan-400" />,
    <SiSnowflake key="snowflake" className="text-sky-300" />,
    <SiTerraform key="terraform" className="text-violet-400" />,
    <SiPython key="python" className="text-yellow-400" />,
    <TextBadge key="sql">SQL</TextBadge>,
    <TextBadge key="delta">Δ Lake</TextBadge>,
  ];

  

  return (
    <section id="home" className="py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left column: headline + CTAs */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Sebastian Gonzalez — <span className="text-gradient">Data Engineer</span>
          </h1>

          <p className="mt-3 font-medium text-gradient">
            Passionate about Artificial Intelligence
          </p>

          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            I design reliable data pipelines and production-grade MLOps—from ingestion to deployment—
            so teams can trust their data and ship faster.
          </p>

          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <li>• 5+ years in data</li>
            <li>• AWS &amp; Azure</li>
            <li>• ETL/ELT</li>
            <li>• Spark</li>
            <li>• Airflow</li>
            <li>• Databricks</li>
          </ul>

          <div className="mt-6 flex gap-4">
            <a
              href="/assets/Sebastian_Gonzalez_Resume.pdf"
              target="_blank"
              rel="noopener"
              className="btn-outline-glass px-5 py-3 rounded-xl"
            >
              View Resume
            </a>
            <a href="#contact" className="btn-hero px-5 py-3 rounded-xl">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right column: orbit animation instead of profile photo */}
        <div className="relative h-[330px] lg:h-[520px] w-full overflow-hidden rounded-2xl">
          {/* faint guides */}
          <div aria-hidden className="absolute inset-0 grid place-items-center">
            <div className="h-64 w-64 lg:h-[420px] lg:w-[420px] rounded-full border border-white/10" />
            <div className="absolute h-44 w-44 lg:h-[300px] lg:w-[300px] rounded-full border border-white/10" />
          </div>

          {/* OUTER (mobile + desktop) */}
          <OrbitingCircles className="lg:hidden" radius={128} iconSize={28} speed={30} offsetDeg={-70}>
            {outerIcons}
          </OrbitingCircles>
          <OrbitingCircles className="hidden lg:block" radius={210} iconSize={36} speed={36} offsetDeg={-70}>
            {outerIcons}
          </OrbitingCircles>

          {/* INNER (reverse) */}
          <OrbitingCircles className="lg:hidden" radius={88} iconSize={22} reverse speed={22} offsetDeg={15}>
            {innerIcons}
          </OrbitingCircles>
          <OrbitingCircles className="hidden lg:block" radius={150} iconSize={28} reverse speed={26} offsetDeg={15}>
            {innerIcons}
          </OrbitingCircles>

          {/* Title center (optional, like the screenshot) */}
          <div className="absolute inset-0 grid place-items-center pointer-events-none">
            <span className="bg-gradient-to-b from-white/90 to-white/40 bg-clip-text text-transparent text-5xl lg:text-7xl font-semibold">
              Skills
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
