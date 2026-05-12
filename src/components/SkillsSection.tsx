import React, { useCallback } from "react";
import {
  SiPython,
  SiTableau,
  SiPowerbi,
  SiSnowflake,
  SiPandas,
  SiAmazonaws,
  SiMicrosoftazure,
  SiDatabricks,
  SiDbt,
  SiGit,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

type Brand = {
  label: string;
  detail: string;
  Icon: React.ComponentType<{ className?: string }>;
  brandHsl: string;
  level: string;
};

const BRANDS: Brand[] = [
  {
    label: "Power BI",
    detail: "Semantic models, DAX, Power Query, RLS",
    Icon: SiPowerbi,
    brandHsl: "45 100% 50%",
    level: "92%",
  },
  {
    label: "Azure",
    detail: "ADF, ADLS Gen2, Azure SQL, Functions",
    Icon: SiMicrosoftazure,
    brandHsl: "201 96% 54%",
    level: "86%",
  },
  {
    label: "SQL",
    detail: "Modeling, validation, reporting datasets",
    Icon: SiPostgresql,
    brandHsl: "201 35% 60%",
    level: "88%",
  },
  {
    label: "Python",
    detail: "Pandas, APIs, automation, analysis",
    Icon: SiPython,
    brandHsl: "48 96% 54%",
    level: "78%",
  },
  {
    label: "Databricks",
    detail: "Spark, Delta Lake, medallion pipelines",
    Icon: SiDatabricks,
    brandHsl: "352 84% 60%",
    level: "76%",
  },
  {
    label: "Tableau",
    detail: "Executive dashboards and risk KPIs",
    Icon: SiTableau,
    brandHsl: "202 86% 55%",
    level: "74%",
  },
  {
    label: "Snowflake",
    detail: "Cloud warehouse analytics patterns",
    Icon: SiSnowflake,
    brandHsl: "199 86% 64%",
    level: "70%",
  },
  {
    label: "AWS",
    detail: "S3 and deployment exposure",
    Icon: SiAmazonaws,
    brandHsl: "40 96% 55%",
    level: "64%",
  },
  {
    label: "dbt",
    detail: "Transformations and governed marts",
    Icon: SiDbt,
    brandHsl: "17 88% 59%",
    level: "68%",
  },
  {
    label: "Pandas",
    detail: "Data cleaning and validation workflows",
    Icon: SiPandas,
    brandHsl: "266 58% 55%",
    level: "78%",
  },
  {
    label: "MongoDB",
    detail: "Project ingestion and document data",
    Icon: SiMongodb,
    brandHsl: "142 70% 45%",
    level: "58%",
  },
  {
    label: "Git",
    detail: "Version control and CI/CD workflows",
    Icon: SiGit,
    brandHsl: "14 90% 55%",
    level: "82%",
  },
];

function TechCard({ label, detail, Icon, brandHsl, level }: Brand) {
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);

  const style = {
    "--brand": brandHsl,
    "--level": level,
  } as React.CSSProperties & Record<"--brand" | "--level", string>;

  return (
    <div
      className="skill-card group flex min-h-[156px] flex-col items-center justify-between gap-3 p-5 text-center"
      onMouseMove={onMove}
      style={style}
      tabIndex={0}
    >
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-lg bg-background/70 shadow-inner">
          <Icon className="skill-icon text-2xl" />
        </div>
        <div className="font-semibold">{label}</div>
        <p className="min-h-[34px] text-xs leading-snug text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100">
          {detail}
        </p>
      </div>
      <div className="skill-meter relative z-10 mt-1 w-full">
        <span />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold">Skills &amp; Technologies</h2>
          <p className="mt-3 text-muted-foreground">
            Microsoft BI and Azure first, with supporting analytics engineering tools.
          </p>
          <div className="mx-auto mt-4 h-1 w-40 rounded-full bg-gradient-accent" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {BRANDS.map((brand) => (
            <TechCard key={brand.label} {...brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
