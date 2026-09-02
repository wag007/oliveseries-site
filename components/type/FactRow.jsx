import React from "react";

export function FactRow({ items = [], style, ...rest }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "flex-start", alignSelf: "stretch", ...style }} {...rest}>
      {items.map((it, i) => (
        <div key={i} style={{ flex: "1 1 0", minWidth: 0, height: 413.337, display: "flex", flexDirection: "column", gap: 30, justifyContent: "center", alignItems: "center" }}>
          <span style={{ alignSelf: "stretch", fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 14, textAlign: "center", lineHeight: 1.2, letterSpacing: "-0.01em", color: "var(--text-primary)" }}>{it.label}</span>
          <span style={{ alignSelf: "stretch", fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 36, textAlign: "center", lineHeight: 1.1, letterSpacing: "-0.02em", textTransform: "uppercase", color: "var(--text-primary)" }}>{it.value}</span>
        </div>
      ))}
    </div>
  );
}
