import {
  SiApachespark,
  SiApachekafka,
  SiApacheairflow,
  SiDatabricks,
  SiDbt,
  SiMlflow,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiMicrosoftazure,
  SiPostgresql,
  SiSnowflake,
  SiPython,
  SiTerraform,
} from 'react-icons/si';
import { OrbitingCircles } from './OrbitingCircles';

const TextBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center justify-center h-9 w-auto px-2 rounded-full border border-white/20 text-xs font-semibold text-white/90 bg-background">
    {children}
  </span>
);

export function SkillsOrbit() {
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
    <SiAmazonaws key="aws" className="text-amber-400" />,
    <SiMicrosoftazure key="azure" className="text-sky-500" />,
    <SiPostgresql key="postgres" className="text-cyan-400" />,
    <SiSnowflake key="snowflake" className="text-sky-300" />,
    <SiTerraform key="terraform" className="text-violet-400" />,
    <SiPython key="python" className="text-yellow-400" />,
    <TextBadge key="sql">SQL</TextBadge>,
    <TextBadge key="delta">Δ Lake</TextBadge>,
  ];

  return (
    <div className="relative flex h-[330px] lg:h-[520px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <h2 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white/90 to-white/40 bg-clip-text text-center text-5xl lg:text-8xl font-semibold leading-none text-transparent">
        Skills
      </h2>

      {/* Faint orbit outlines */}
      <div aria-hidden className="absolute inset-0 grid place-items-center">
        <div className="h-64 w-64 lg:h-[420px] lg:w-[420px] rounded-full border border-white/10"></div>
        <div className="absolute h-44 w-44 lg:h-[300px] lg:w-[300px] rounded-full border border-white/10"></div>
      </div>

      {/* OUTER ring */}
      <OrbitingCircles
        className="border-none"
        radius={200}
        iconSize={40}
        speed={36}
      >
        {outerIcons}
      </OrbitingCircles>

      {/* INNER ring (reverse) */}
      <OrbitingCircles
        className="border-none"
        radius={130}
        iconSize={32}
        reverse
        speed={24}
      >
        {innerIcons}
      </OrbitingCircles>
    </div>
  );
}
