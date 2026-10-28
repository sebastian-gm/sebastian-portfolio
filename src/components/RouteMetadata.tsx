import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const pages: Record<string, [string, string]> = {
  "/": [
    "Sebastian Gonzalez | AI, Automation & Data",
    "AI, automation, and data engineering with a business perspective. Experience in multinational operations, financial services, and fintech.",
  ],
  "/projects/aclara": [
    "Aclara Banking AI | Sebastian Gonzalez",
    "A banking-service prototype with Spanish and Portuguese interactions, scoped actions, human handoff, and transparent offline evaluation.",
  ],
  "/projects/olist-commerce": [
    "Olist Analytics Pipeline | Sebastian Gonzalez",
    "An independent Azure data-engineering project using public commerce data, Delta tables, quality checks, and analytics models.",
  ],
  "/projects/credit-risk-ai-platform": [
    "Credit Risk AI Platform | Sebastian Gonzalez",
    "A synthetic-data prototype for credit-policy retrieval, document extraction, and governance on Azure.",
  ],
  "/projects/networksecurity-phishing": [
    "Phishing Detection Pipeline | Sebastian Gonzalez",
    "A supporting machine-learning project exploring validation, training, and prediction serving.",
  ],
};
export default function RouteMetadata() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const [title, description] = pages[pathname] || [
      "Page not found | Sebastian Gonzalez",
      "Return to Sebastian Gonzalez’s portfolio.",
    ];
    document.title = title;
    for (const selector of [
      'meta[name="description"]',
      'meta[property="og:description"]',
      'meta[name="twitter:description"]',
    ])
      document.querySelector(selector)?.setAttribute("content", description);
    for (const selector of [
      'meta[property="og:title"]',
      'meta[name="twitter:title"]',
    ])
      document.querySelector(selector)?.setAttribute("content", title);
    const url = `https://www.sebastiangm.com${pathname}`;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", url);
    const frame = requestAnimationFrame(() => {
      if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
      else window.scrollTo({ top: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
