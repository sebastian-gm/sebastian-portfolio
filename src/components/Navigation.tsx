import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { PiArrowUpRight, PiX } from "react-icons/pi";
const links = [
  ["Experience", "experience"],
  ["Selected work", "projects"],
  ["About me", "about"],
  ["Education", "education"],
];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {
    setActive("");
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );
    links.forEach(([, id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [pathname]);
  const href = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="nav-shell">
        <nav className="site-nav page-width" aria-label="Main navigation">
          <a
            href={href("home")}
            className="wordmark"
            aria-label="Sebastian Gonzalez, home"
          >
            SG
          </a>
          <div className="desktop-nav">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={href(id)}
                aria-current={active === id ? "location" : undefined}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <a
              className="nav-resume"
              href="/resumes/Sebastian_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume <PiArrowUpRight aria-hidden="true" />
            </a>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button className="menu-trigger" aria-label="Open navigation">
                  <span />
                  <span />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="menu-overlay" />
                <Dialog.Content
                  className="mobile-menu"
                  aria-describedby="menu-description"
                >
                  <Dialog.Title className="mobile-menu-title">
                    Sebastian Gonzalez
                  </Dialog.Title>
                  <Dialog.Description id="menu-description">
                    AI, automation & data.
                  </Dialog.Description>
                  <Dialog.Close asChild>
                    <button
                      className="icon-button menu-close"
                      aria-label="Close navigation"
                    >
                      <PiX />
                    </button>
                  </Dialog.Close>
                  <nav aria-label="Mobile navigation">
                    {[...links, ["Let’s connect", "contact"]].map(
                      ([label, id]) => (
                        <a
                          key={id}
                          href={href(id)}
                          onClick={() => setOpen(false)}
                        >
                          {label}
                          <PiArrowUpRight aria-hidden="true" />
                        </a>
                      ),
                    )}
                  </nav>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </nav>
      </header>
    </>
  );
}
