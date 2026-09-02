import React from "react";

export function SectionLabel({ children, style, ...rest }) {
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: 10, height: 62, padding: "24px 0", boxSizing: "border-box", border: "1px solid var(--border-hairline)", ...style }}
      {...rest}
    >
      <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 12, lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--text-primary)" }}>{children}</span>
    </div>
  );
}
