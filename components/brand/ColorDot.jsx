import React from "react";

export function ColorDot({ color = "var(--olive-black)", size = 103, label, style, ...rest }) {
  const dot = <div style={{ width: size, height: size, borderRadius: "50%", backgroundColor: color, flexShrink: 0, ...style }} {...rest} />;
  if (!label) return dot;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, alignItems: "flex-start" }}>
      {dot}
      <span style={{ fontFamily: "var(--font-label)", fontWeight: 500, fontSize: 12, lineHeight: 1.4, letterSpacing: "-0.01em", color: "var(--text-primary)" }}>{label}</span>
    </div>
  );
}
