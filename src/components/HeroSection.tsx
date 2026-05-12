import Typewriter from "@/components/Typewriter";
import { OrbitingCircles } from "@/components/OrbitingCircles";
import {
  SiTableau,
  SiPowerbi,
  SiPostgresql,
  SiDatabricks,
  SiDbt,
  SiDocker,
  SiAmazonaws,
  SiMicrosoftazure,
  SiSnowflake,
  SiPython,
  SiMongodb,
  SiGit,
  SiLinux,
} from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const WORDS = [
  "Power BI semantic models",
  "AI-assisted analytics",
  "Azure data pipelines",
  "automation prototypes",
  "clear data products",
  "experiments with real impact",
];

function JupyterNotebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.7 8.4C7.2 6.55 9.48 5.42 12 5.42c2.58 0 4.9 1.18 6.4 3.08"
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinecap="round"
      />
      <path
        d="M18.3 15.55c-1.5 1.86-3.78 3-6.3 3-2.58 0-4.9-1.18-6.4-3.08"
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinecap="round"
      />
      <circle cx="19.1" cy="4.7" r="1.35" fill="currentColor" />
      <circle cx="4.9" cy="19.3" r="1.25" fill="currentColor" />
      <circle cx="4.7" cy="5.95" r="0.85" fill="currentColor" opacity="0.72" />
    </svg>
  );
}

export default function HeroSection() {
  const outer = [
    <SiTableau key="tableau" className="text-sky-500 dark:text-sky-400" />,
    <SiPowerbi key="pbi" className="text-yellow-400" />,
    <SiDatabricks key="databricks" className="text-rose-500" />,
    <SiDbt key="dbt" className="text-orange-500 dark:text-orange-400" />,
    <SiSnowflake key="snowflake" className="text-sky-500" />,
    <SiAmazonaws key="aws" className="text-amber-500 dark:text-amber-400" />,
  ];

  const inner = [
    <SiMicrosoftazure key="az" className="text-sky-500 dark:text-sky-400" />,
    <SiDocker key="docker" className="text-blue-500 dark:text-blue-400" />,
    <SiPython key="py" className="text-yellow-500 dark:text-yellow-400" />,
    <SiMongodb key="mongo" className="text-emerald-500 dark:text-emerald-400" />,
    <SiGit key="git" className="text-orange-500" />,
    <SiLinux key="linux" className="text-yellow-500 dark:text-yellow-400" />,
    <SiPostgresql key="pg" className="text-cyan-600 dark:text-cyan-400" />,
    <JupyterNotebookIcon key="jup" className="h-[1em] w-[1em] text-orange-500 dark:text-orange-400" />,
  ];

  return (
    <section id="home" className="overflow-hidden pt-24 md:pt-28 lg:pt-32 pb-20 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid min-w-0 lg:grid-cols-2 gap-x-20 gap-y-10 items-center">
          <div className="order-2 min-w-0 lg:order-1 pr-2 lg:pr-6">
            <p className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              BI Developer | Data Products | AI
            </p>

            <h1 className="text-[clamp(40px,12vw,76px)] font-extrabold leading-[1.08]">
              <span className="block">Sebastian</span>
              <span className="block">Gonzalez</span>
            </h1>

            <div className="mt-5 text-[clamp(31px,9vw,58px)] font-extrabold leading-[1.15] pb-1 md:pb-2 text-gradient">
              BI Developer / BI Engineer
            </div>

            <h2 className="mt-5 flex flex-col gap-2 text-[clamp(20px,3vw,32px)] font-semibold sm:flex-row sm:items-baseline">
              <span>Building</span>
              <Typewriter
                words={WORDS}
                className="text-gradient"
                typingSpeedMs={60}
                deletingSpeedMs={35}
                holdMs={1200}
              />
            </h2>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground">
              I like building useful things with data: Power BI experiences, Azure pipelines, automation, and AI-assisted
              workflows that make analysis feel faster, cleaner, and easier to trust.
            </p>

            <div className="mt-7 flex max-w-2xl flex-wrap gap-3">
              {["Microsoft BI", "Azure", "AI experiments", "Automation", "Data storytelling"].map((item) => (
                <span key={item} className="rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow hover:opacity-95 transition"
              >
                Explore Projects
              </a>

              <a
                href="/assets/Sebastian_Resume2026.pdf"
                target="_blank"
                rel="noopener"
                className="rounded-lg border border-border bg-card px-6 py-3.5 font-semibold hover:bg-muted transition"
              >
                View Resume
              </a>

              <div className="flex items-center gap-3 sm:ml-3">
                <a
                  aria-label="GitHub"
                  href="https://github.com/sebastian-gm"
                  target="_blank"
                  rel="noopener"
                  className="grid h-12 w-12 place-items-center rounded-lg border border-border bg-card hover:bg-muted transition"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/sebastian-sgm/"
                  target="_blank"
                  rel="noopener"
                  className="grid h-12 w-12 place-items-center rounded-lg border border-border bg-card hover:bg-muted transition"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 min-w-0 overflow-hidden lg:order-2 relative h-[360px] md:h-[430px] lg:h-[480px]">
            <div className="absolute inset-0 rounded-[28px] border border-border bg-card/70 shadow-lg pointer-events-none" />
            <div className="absolute inset-6 rounded-[20px] bg-[radial-gradient(320px_220px_at_68%_30%,rgba(30,96,104,0.12),transparent),radial-gradient(360px_240px_at_28%_78%,rgba(142,103,47,0.12),transparent)] pointer-events-none" />

            <div className="orbit-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <OrbitingCircles radius={160} iconSize={36} speed={34}>
                {outer}
              </OrbitingCircles>

              <OrbitingCircles radius={100} iconSize={30} speed={22} reverse>
                {inner}
              </OrbitingCircles>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
