import React from "react";

const TONE = {
  hard: { fontWeight: 400, fontSize: 60, lineHeight: 1.2, letterSpacing: "-0.01em" },
  soft: { fontWeight: 400, fontSize: 42, lineHeight: 1.3, letterSpacing: "-0.01em" },
};

export function Statement({ children, tone = "hard", color = "var(--text-primary)", align = "center", style, ...rest }) {
  return (
    <p style={{ margin: 0, fontFamily: "var(--font-body)", textAlign: align, color, ...TONE[tone], ...style }} {...rest}>
      {children}
    </p>
  );
}
