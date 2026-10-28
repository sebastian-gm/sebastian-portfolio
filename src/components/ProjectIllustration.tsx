import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PiArrowCounterClockwise, PiArrowUpRight } from "react-icons/pi";
import { usePointerSurface } from "@/hooks/use-pointer-surface";

/** Bounded, replayable motion. The settled illustration is visible without animation. */
export default function ProjectIllustration({
  kind,
}: {
  kind: "credit" | "data";
}) {
  const surface = usePointerSurface<HTMLDivElement>();
  const { ref } = surface;
  const scene = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const replay = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setPlaying(true);
    // Keep the DOM stable so hover/focus never replaces a pressed link target.
    scene.current?.getAnimations({ subtree: true }).forEach((animation) => {
      animation.currentTime = 0;
      animation.play();
    });
  }, []);
  useEffect(() => {
    if (!ref.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          replay();
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, replay]);
  const label = kind === "credit" ? "policy retrieval" : "data pipeline";
  const projectName =
    kind === "credit" ? "Credit Risk AI Platform" : "Olist data pipeline";
  const href =
    kind === "credit"
      ? "/projects/credit-risk-ai-platform"
      : "/projects/olist-commerce";
  return (
    <div
      {...surface}
      className={`project-art ${kind}-art`}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") replay();
      }}
    >
      <Link
        to={href}
        className="project-visual-link"
        aria-label={`Open ${projectName} case study`}
        onFocus={replay}
      >
        <div className="project-art-motion">
          <div
            ref={scene}
            className={`illustration-scene ${playing ? "is-playing" : ""}`}
            aria-hidden="true"
          >
            {kind === "credit" ? (
              <div className="policy-scene">
                <div className="policy-page policy-page-back" />
                <div className="paper-document">
                  <span>Credit policy</span>
                  <div className="document-line" />
                  <div className="document-line short" />
                  <div className="document-excerpt">
                    <span /> <span /> <span />
                  </div>
                  <div className="document-source">
                    Source found <span>✓</span>
                  </div>
                </div>
                <div className="answer-slip">
                  <span>With the source attached</span>
                  <strong>An answer you can check.</strong>
                </div>
              </div>
            ) : (
              <div className="pipeline-scene">
                <div className="pipeline-source">
                  <span>Raw records</span>
                  <div className="source-records">
                    {Array.from({ length: 9 }, (_, i) => (
                      <i key={i} />
                    ))}
                  </div>
                </div>
                <div className="pipeline-channel">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="pipeline-filter">
                  <span>Clean & check</span>
                  <div className="filter-grid">
                    {Array.from({ length: 6 }, (_, i) => (
                      <i key={i} />
                    ))}
                  </div>
                </div>
                <div className="pipeline-channel">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="pipeline-result">
                  <span>Ready to use</span>
                  <div className="result-bars">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <span className="art-caption">
          {kind === "credit"
            ? "Credit policy retrieval"
            : "Olist data pipeline"}
        </span>
        <span className="visual-link-cue" aria-hidden="true">
          <PiArrowUpRight />
        </span>
      </Link>
      <button
        type="button"
        className="replay-motion"
        onClick={replay}
        aria-label={`Replay ${label} animation`}
      >
        <PiArrowCounterClockwise aria-hidden="true" />
        <span>Replay</span>
      </button>
    </div>
  );
}
