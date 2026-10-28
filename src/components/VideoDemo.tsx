import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PiPlayFill, PiArrowUpRight } from "react-icons/pi";
import { usePointerSurface } from "@/hooks/use-pointer-surface";
export default function VideoDemo({
  caseStudyHref,
}: {
  caseStudyHref?: string;
}) {
  const surface = usePointerSurface<HTMLDivElement>();
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  function play() {
    setStarted(true);
    const element = video.current;
    if (!element) return;
    // Do not request the video until the visitor chooses to watch it.
    element.src = "/media/aclara-pitch.mp4";
    element.focus();
    void element.play().catch(() => {
      /* Native controls allow another attempt. */
    });
  }
  return (
    <div className="video-demo">
      <div
        {...surface}
        className={`video-frame ${caseStudyHref && !started ? "video-project-preview" : ""}`}
      >
        <video
          ref={video}
          controls={started}
          preload="none"
          playsInline
          poster="/media/aclara-poster.png"
          aria-label="Aclara hackathon pitch, 2 minutes 24 seconds"
          tabIndex={started ? 0 : -1}
          onError={() => setFailed(true)}
        >
          <track
            kind="captions"
            src="/media/aclara-en.vtt"
            srcLang="en"
            label="English"
          />
        </video>
        {!started && caseStudyHref && (
          <Link
            to={caseStudyHref}
            className="video-case-link"
            aria-label="Open Aclara case study"
          >
            <span>
              View project <PiArrowUpRight aria-hidden="true" />
            </span>
          </Link>
        )}
        {!started && (
          <button
            className={`video-play ${caseStudyHref ? "video-play-compact" : ""}`}
            onClick={play}
            aria-label="Play Aclara pitch, 2 minutes 24 seconds"
          >
            <span className="play-circle">
              <PiPlayFill aria-hidden="true" />
            </span>
            <span>
              Watch the pitch <span className="video-time">2:24</span>
            </span>
          </button>
        )}
      </div>
      {failed && (
        <p role="status" className="text-sm mt-4">
          Video couldn’t load.{" "}
          <a
            className="text-link"
            href="https://youtu.be/sgtShebCbyM"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube <PiArrowUpRight />
          </a>
        </p>
      )}
    </div>
  );
}
