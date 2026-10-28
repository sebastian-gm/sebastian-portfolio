import { useEffect, useRef, type PointerEvent } from "react";

/** Track a mouse once per frame without rerendering the surface. */
export function usePointerSurface<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const frame = useRef<number | null>(null);
  const position = useRef({ x: 0, y: 0 });

  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    },
    [],
  );

  function onPointerMove(event: PointerEvent<T>) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    position.current = { x: event.clientX, y: event.clientY };
    if (frame.current !== null) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = null;
      const element = ref.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = Math.max(
        0,
        Math.min(rect.width, position.current.x - rect.left),
      );
      const y = Math.max(
        0,
        Math.min(rect.height, position.current.y - rect.top),
      );
      element.style.setProperty("--pointer-x", `${x}px`);
      element.style.setProperty("--pointer-y", `${y}px`);
      element.style.setProperty(
        "--pointer-rotate-x",
        `${(0.5 - y / rect.height) * 7}deg`,
      );
      element.style.setProperty(
        "--pointer-rotate-y",
        `${(x / rect.width - 0.5) * 9}deg`,
      );
      element.style.setProperty(
        "--pointer-shift-x",
        `${(x / rect.width - 0.5) * 12}px`,
      );
      element.style.setProperty(
        "--pointer-shift-y",
        `${(y / rect.height - 0.5) * 8}px`,
      );
    });
  }

  function onPointerLeave() {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
    for (const property of [
      "x",
      "y",
      "rotate-x",
      "rotate-y",
      "shift-x",
      "shift-y",
    ]) {
      ref.current?.style.removeProperty(`--pointer-${property}`);
    }
  }

  return { ref, onPointerMove, onPointerLeave };
}
