import React from "react";
import { Wordmark } from "../brand/Wordmark.jsx";

export function SiteFooter({ kicker, title = "Olive", legal, handle, handleHref = "#", style, ...rest }) {
  const base = { flexGrow: 1, fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 20, lineHeight: 1.2, letterSpacing: "-0.02em", textTransform: "uppercase", color: "var(--text-primary)" };
  return (
    <footer style={{ display: "flex", flexDirection: "column", gap: 40, alignSelf: "stretch", ...style }} {...rest}>
      <div style={{ display: "flex", flexDirection: "column", gap: 40, alignItems: "center", alignSelf: "stretch" }}>
        <span style={{ alignSelf: "stretch", fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 36, textAlign: "center", lineHeight: 1.1, letterSpacing: "-0.02em", textTransform: "uppercase", color: "var(--text-primary)" }}>{kicker}</span>
        <Wordmark variant="heavy" size="lg" style={{ alignSelf: "stretch" }}>{title}</Wordmark>
      </div>
      <div style={{ height: 24, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", alignSelf: "stretch" }}>
        <span style={base}>{legal}</span>
        <a href={handleHref} style={{ ...base, textAlign: "right", textDecoration: "underline" }}>{handle}</a>
      </div>
    </footer>
  );
}
