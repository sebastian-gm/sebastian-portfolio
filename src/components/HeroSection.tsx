import { PiArrowRight, PiArrowDownRight } from "react-icons/pi";

export default function HeroSection() {
  return (
    <section id="home" className="hero page-width" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-hello">Hey, I’m</p>
        <h1 id="hero-title">
          <span className="name-line">
            <span>Sebastian</span>
          </span>
          <span className="name-line">
            <span>Gonzalez</span>
          </span>
        </h1>
        <p className="hero-statement">
          AI, automation and data.
          <br />
          With the business in mind.
        </p>
        <p className="hero-description">
          I turn manual work into useful tools. From automation for a
          multinational company to AI for financial services, I connect the
          problem to the build.
        </p>
        <a href="#contact" className="button button-primary">
          Let’s build something <PiArrowRight aria-hidden="true" />
        </a>
        <a href="#experience" className="hero-scroll">
          Here’s what I do <PiArrowDownRight aria-hidden="true" />
        </a>
      </div>
      <figure className="hero-portrait">
        <div className="portrait-frame">
          <img
            src="/profile.png"
            alt="Sebastian Gonzalez"
            width="1122"
            height="1402"
            fetchPriority="high"
          />
        </div>
        <figcaption>
          Business mind.
          <br />
          Builder at heart.
        </figcaption>
      </figure>
      <div className="hero-context">
        <p>
          Experience across
          <br />
          <strong>teams and borders</strong>
        </p>
        <span>Multinational operations</span>
        <span>Finance & fintech</span>
        <span>Canada & Latin America</span>
      </div>
    </section>
  );
}
