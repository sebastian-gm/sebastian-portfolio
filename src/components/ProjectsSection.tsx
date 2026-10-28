import { Link } from "react-router-dom";
import { PiArrowUpRight } from "react-icons/pi";
import VideoDemo from "./VideoDemo";
import ProjectIllustration from "./ProjectIllustration";
export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section page-width"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <div>
          <h2 id="work-title">A few things I’ve built.</h2>
        </div>
        <p>Open a project. See how I think and what I build.</p>
      </div>
      <article className="aclara-feature">
        <div className="aclara-copy">
          <p className="eyebrow">Applied AI / Banking</p>
          <h3>Aclara.</h3>
          <p className="project-lead">
            A clearer answer to a confusing charge.
          </p>
          <p>
            My banking AI prototype helps customers understand charges, start
            disputes and reach a person when they need one. In Spanish and
            Portuguese.
          </p>
          <p className="project-value">
            I built the conversation, the workflows and the evaluation behind
            it.
          </p>
          <Link to="/projects/aclara" className="button button-light">
            Explore the project <PiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className="aclara-media">
          <VideoDemo caseStudyHref="/projects/aclara" />
          <p className="media-note">
            Watch my hackathon pitch. The case study has the latest results.
          </p>
        </div>
      </article>
      <div className="project-pair">
        <article className="project-story">
          <ProjectIllustration kind="credit" />
          <p className="eyebrow">Applied AI / Finance</p>
          <h3>Credit policies, easier to find.</h3>
          <p>
            I built an Azure AI prototype that finds relevant credit policies
            and answers with a source you can check.
          </p>
          <Link className="text-link" to="/projects/credit-risk-ai-platform">
            Inside the platform <PiArrowUpRight aria-hidden="true" />
          </Link>
        </article>
        <article className="project-story">
          <ProjectIllustration kind="data" />
          <p className="eyebrow">Data engineering / Azure</p>
          <h3>From raw data to useful answers.</h3>
          <p>
            My commerce data pipeline cleans and checks raw records, then gets
            them ready for analysis.
          </p>
          <Link className="text-link" to="/projects/olist-commerce">
            Explore the pipeline <PiArrowUpRight aria-hidden="true" />
          </Link>
        </article>
      </div>
      <div className="work-more">
        <span>There’s more on my GitHub.</span>
        <a
          href="https://github.com/sebastian-gm"
          className="text-link"
          target="_blank"
          rel="noreferrer"
        >
          Find me on GitHub <PiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
