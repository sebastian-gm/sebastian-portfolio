import Typewriter from "@/components/Typewriter";
import { OrbitingCircles } from "@/components/OrbitingCircles";
import {
  SiApachespark,
  SiApacheairflow,
  SiDatabricks,
  SiDbt,
  SiMlflow,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiSnowflake,
  SiPython,
  SiMongodb,
  SiGit,
  SiLinux,
} from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const WORDS = [
  "Reliable data",
  "Simple systems",
  "Data contracts",
  "Observability",
  "Reliable pipelines",
  "Data quality",
  "MLOps in production",
  "Decision accuracy",
  "Artificial Intelligence",
  "Machine Learning",
  "LLMs",
  "MLOps",
  "Real-time Data",
];

export default function HeroSection() {
  // smaller / separated orbits
  const outer = [
    <SiApachespark key="spark" className="text-orange-500" />,
    <SiApacheairflow key="airflow" className="text-sky-400" />,
    <SiDatabricks key="databricks" className="text-rose-500" />,
    <SiDbt key="dbt" className="text-orange-400" />,
    <SiMlflow key="mlflow" className="text-sky-500" />,
    <SiDocker key="docker" className="text-blue-400" />,
    <SiKubernetes key="k8s" className="text-blue-400" />,
  ];

  const inner = [
    <SiAmazonaws key="aws" className="text-amber-400" />,
    <SiMicrosoftazure key="az" className="text-sky-500" />,
    <SiGooglecloud key="gcp" className="text-sky-300" />,
    <SiSnowflake key="snowflake" className="text-sky-300" />,
    <SiPython key="py" className="text-yellow-400" />,
    <SiMongodb key="mongo" className="text-emerald-400" />,
    <SiGit key="git" className="text-orange-500" />,
    <SiLinux key="linux" className="text-yellow-400" />,
  ];

  return (
    <section id="home" className="pt-28 md:pt-36 lg:pt-80 pb-24 md:pb-28 lg:pb-32 mb-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-10 items-center">
          {/* LEFT */}
          <div className="order-2 lg:order-1 pr-2 lg:pr-6">
            <h1 className="text-[clamp(48px,7vw,80px)] font-extrabold leading-[1.12] tracking-tight">
              Sebastian Gonzalez
            </h1>

            <div className="mt-6 text-[clamp(44px,6.5vw,72px)] font-extrabold leading-[1.26] pb-1 md:pb-2
             bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Data Engineer
            </div>
            
            

            
            <h2 className="mt-5 text-[clamp(22px,3.4vw,36px)] font-semibold flex items-baseline gap-3 whitespace-nowrap">
              <span>Passionate about</span>
              <Typewriter
                words={WORDS}
                className="whitespace-nowrap bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent"
                typingSpeedMs={60}
                deletingSpeedMs={35}
                holdMs={1200}
              />
            </h2>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground">
              I build dependable data platforms for analytics and machine learning. From raw data to production, with data contracts, tests, and observability so teams ship faster and sleep better.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="/assets/Sebastian_Resume.pdf"
                target="_blank"
                rel="noopener"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 text-slate-900 font-semibold shadow hover:opacity-95 transition"
              >
                View Resume
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
              >
                Contact Me
              </a>

              {/* Social */}
              <div className="flex items-center gap-3 sm:ml-3">
                <a
                  aria-label="GitHub"
                  href="https://github.com/sebastian-gm"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex h-12 w-12 rounded-full bg-white/5 border border-white/10 grid place-items-center hover:bg-white/10 transition"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/sebastian-sgm/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex h-12 w-12 rounded-full bg-white/5 border border-white/10 grid place-items-center hover:bg-white/10 transition"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT (orbits) */}
          <div className="order-1 lg:order-2 relative h-[360px] md:h-[430px] lg:h-[480px]">
            {/* soft glow, confined to the right column */}
            <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(320px_220px_at_68%_30%,rgba(56,189,248,0.16),transparent),radial-gradient(360px_240px_at_28%_78%,rgba(16,185,129,0.16),transparent)] pointer-events-none" />

            {/* Center the orbits */}
            <div className="orbit-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* OUTER ring (smaller radius, slightly smaller icons) */}
              <OrbitingCircles radius={160} iconSize={36} speed={34}>
                {outer}
              </OrbitingCircles>

              {/* INNER ring, clearly inside (more gap) */}
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
