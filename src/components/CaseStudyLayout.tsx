import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { PiArrowLeft, PiArrowUpRight } from "react-icons/pi";
import Navigation from "./Navigation";
import Footer from "./Footer";
type Props = {
  title: string;
  category: string;
  intro: string;
  stack: string;
  repo: string;
  children: ReactNode;
};
export default function CaseStudyLayout({
  title,
  category,
  intro,
  stack,
  repo,
  children,
}: Props) {
  return (
    <>
      <Navigation />
      <main id="main" className="case-main page-width" tabIndex={-1}>
        <header className="case-hero">
          <Link to="/#projects" className="text-link">
            <PiArrowLeft aria-hidden="true" /> All selected work
          </Link>
          <p className="eyebrow">{category}</p>
          <h1>{title}</h1>
          <p className="case-intro">{intro}</p>
          <dl className="case-facts">
            <div>
              <dt>Context</dt>
              <dd>Independent portfolio project</dd>
            </div>
            <div>
              <dt>My contribution</dt>
              <dd>Solution design & implementation</dd>
            </div>
            <div>
              <dt>Core tools</dt>
              <dd>{stack}</dd>
            </div>
          </dl>
          <a
            className="button button-primary"
            href={repo}
            target="_blank"
            rel="noreferrer"
          >
            View repository <PiArrowUpRight aria-hidden="true" />
          </a>
        </header>
        <div className="case-body">{children}</div>
      </main>
      <Footer />
    </>
  );
}
