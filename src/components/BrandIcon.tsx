import React from "react";
import type { SimpleIcon } from "simple-icons";

export default function BrandIcon({
  icon,
  className = "",
  title,
}: {
  icon: SimpleIcon;       // e.g., siMicrosoftazure
  className?: string;     // Tailwind classes for color etc.
  title?: string;         // accessible label override
}) {
  return (
    <svg
      role="img"
      aria-label={title || icon.title}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"  // so Tailwind text-* colors work
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}
