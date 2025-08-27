import React, { ReactNode, CSSProperties } from "react";

type Props = {
  radius?: number;        // px
  iconSize?: number;      // px
  speed?: number;         // seconds per revolution
  reverse?: boolean;
  offsetDeg?: number;     // where the first item starts (-90 = top)
  className?: string;
  children: ReactNode;
};

export function OrbitingCircles({
  radius = 210,
  iconSize = 32,
  speed = 28,
  reverse = false,
  offsetDeg = -90,
  className = "",
  children,
}: Props) {
  const kids = React.Children.toArray(children);
  if (kids.length === 0) return null;

  const size = radius * 2;

  const wrapperStyle: CSSProperties = {
    width: size,
    height: size,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };

  const orbitStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    ["--orbit-duration" as any]: `${speed}s`,
  };

  const offset = (offsetDeg * Math.PI) / 180;

  return (
    <div aria-hidden className={`absolute orbit-center ${className}`} style={wrapperStyle}>
      <div className={`orbit ${reverse ? "orbit--reverse" : ""}`} style={orbitStyle}>
        {kids.map((child, i) => {
          const theta = (i / kids.length) * Math.PI * 2 + offset;
          const x = radius + radius * Math.cos(theta);
          const y = radius + radius * Math.sin(theta);
          return (
            // SLOT: only positions & translates to circle
            <div
              key={i}
              className="absolute orbit__slot"
              style={{
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* INNER: only counter-rotates to keep icon upright */}
              <div
                className="orbit__inner"
                style={{ fontSize: iconSize, lineHeight: 1 }}
              >
                {child}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
