import { useEffect, useRef, useState } from "react";
export default function AboutSection() {
  const statement = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    if (statement.current) observer.observe(statement.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-title"
    >
      <div className="page-width">
        <div className="about-heading">
          <h2 id="about-title">
            Finance taught me to ask why.
            <br />
            Engineering lets me build it.
          </h2>
        </div>
        <div className="about-layout">
          <div className="about-perspective">
            <p
              ref={statement}
              className={`principle ${visible ? "is-visible" : ""}`}
              aria-label="Understand the business. Build what moves it forward."
            >
              {["Understand the business.", "Build what moves it forward."].map(
                (line, row) => (
                  <span
                    className="principle-line"
                    key={line}
                    aria-hidden="true"
                  >
                    {line.split(" ").map((word, i) => (
                      <span
                        key={word}
                        style={{ transitionDelay: `${(row * 4 + i) * 90}ms` }}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </span>
                ),
              )}
            </p>
            <div className="international-note">
              <span>International perspective</span>
              <p>
                Professional experience in Canada and Latin America.
                <br />
                Education across Canada, Spain, and Chile.
              </p>
            </div>
          </div>
          <div className="about-copy">
            <p>
              I started in finance. Credit risk and lending taught me to ask
              what’s behind a number and what someone needs to do with it.
            </p>
            <p>
              That curiosity took me into data, automation and AI. I like being
              able to talk through a problem with a business team, then get into
              the code and build the solution.
            </p>
            <p>
              I’ve worked across Canada and Latin America, in English and
              Spanish. Different teams, different perspectives. It’s made me a
              better builder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
