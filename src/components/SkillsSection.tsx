import React, { useCallback } from "react";
import {
  SiPython,
  SiTableau,
  SiPowerbi,
  SiApachespark,
  SiSnowflake,
  SiApacheairflow,
  SiPandas,
  SiAmazonaws,
  SiMicrosoftazure,
  SiDatabricks,
  SiDbt,
  SiGit,
  SiDocker,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

type Brand = {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  brandHsl: string; // "H S L" (no hsl())
};

const BRANDS: Brand[] = [
  { label: "Python",        Icon: SiPython,         brandHsl: "48 96% 54%"  }, // yellow
  { label: "Power BI",      Icon: SiPowerbi,        brandHsl: "45 100% 50%" },
  { label: "Snowflake",     Icon: SiSnowflake,      brandHsl: "199 86% 64%" },
  { label: "Tableau",       Icon: SiTableau,        brandHsl: "202 86% 55%" },
  { label: "AWS",           Icon: SiAmazonaws,      brandHsl: "40 96% 55%"  },
  { label: "Azure",         Icon: SiMicrosoftazure, brandHsl: "201 96% 54%" },
  { label: "Databricks",    Icon: SiDatabricks,     brandHsl: "352 84% 60%" },
  { label: "dbt",           Icon: SiDbt,            brandHsl: "17 88% 59%"  },
  { label: "Git",           Icon: SiGit,            brandHsl: "14 90% 55%"  },
  { label: "Pandas",        Icon: SiPandas,         brandHsl: "266 58% 55%" },
  { label: "MongoDB",       Icon: SiMongodb,        brandHsl: "142 70% 45%" },
  { label: "SQL",           Icon: SiPostgresql,     brandHsl: "201 35% 60%" },
];

function TechCard({ label, Icon, brandHsl }: Brand) {
  // move beam center with the mouse
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);

  return (
    <div
      className="skill-card p-5 flex flex-col items-center gap-3 group"
      onMouseMove={onMove}
      style={{ ["--brand" as any]: brandHsl }}
    >
      <div className="w-12 h-12 rounded-xl grid place-items-center bg-white/5 shadow-inner">
        <Icon className="skill-icon text-2xl" />
      </div>
      <div className="font-medium">{label}</div>
      <div className="skill-meter mt-1 w-full">
        <span />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Skills &amp; Technologies</h2>
          <p className="mt-2 text-muted-foreground">
            Tools I use to turn raw data into <span className="text-gradient">insights</span>
          </p>
          <div className="mx-auto mt-4 h-1 w-40 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {BRANDS.map((b) => (
            <TechCard key={b.label} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}
