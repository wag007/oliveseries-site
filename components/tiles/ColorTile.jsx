import React from "react";

export function ColorTile({ children, color = "var(--olive-cream)", textColor = "var(--text-primary)", height = 400, style, ...rest }) {
  return (
    <div
      style={{ height, minWidth: 360, flexGrow: 1, overflow: "hidden", backgroundColor: color, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "21px 13px", boxSizing: "border-box", ...style }}
      {...rest}
    >
      <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 30, textAlign: "center", lineHeight: 1.2, letterSpacing: "-0.02em", textTransform: "uppercase", color: textColor }}>{children}</span>
    </div>
  );
}
