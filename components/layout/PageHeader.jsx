import React from "react";
import { Wordmark } from "../brand/Wordmark.jsx";

export function PageHeader({ title = "Olive", tagline, handle, handleHref = "#", style, ...rest }) {
  return (
    <header style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center", alignSelf: "stretch", maxWidth: "var(--page-max)", ...style }} {...rest}>
      <Wordmark variant="bubble" size="xl" style={{ alignSelf: "stretch" }}>{title}</Wordmark>
      <div style={{ height: 17, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", padding: "0 30px", boxSizing: "border-box", alignSelf: "stretch" }}>
        <span style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: 14, lineHeight: 1.2, letterSpacing: "-0.01em", color: "var(--text-primary)" }}>{tagline}</span>
        <a href={handleHref} style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 14, lineHeight: 1.2, letterSpacing: "-0.01em", color: "var(--text-primary)", textDecoration: "underline" }}>{handle}</a>
      </div>
    </header>
  );
}
