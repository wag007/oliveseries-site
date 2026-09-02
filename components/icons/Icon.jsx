import React from "react";

/* Glyph paths transcribed verbatim from the .fig vectors.
   The set the source defines is exactly two marks: arrow-up-right and the close X. */
const GLYPHS = {
  "arrow-up-right": (
    <g>
      <path d="M0 20L20 0" />
      <path d="M0 0h20v20" />
    </g>
  ),
  close: (
    <g>
      <path d="M0 0L20 20" />
      <path d="M20 0L0 20" />
    </g>
  ),
};

export function Icon({ name = "arrow-up-right", size = 48, color = "currentColor", strokeWidth = 1, style, ...rest }) {
  const inner = Math.round(size * 0.4167);
  return (
    <span
      style={{ display: "inline-flex", width: size, height: size, alignItems: "center", justifyContent: "center", overflow: "hidden", color, flexShrink: 0, ...style }}
      {...rest}
    >
      <svg width={inner} height={inner} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={strokeWidth * (20 / inner)} vectorEffect="non-scaling-stroke" aria-hidden="true">
        {GLYPHS[name] || GLYPHS["arrow-up-right"]}
      </svg>
    </span>
  );
}
