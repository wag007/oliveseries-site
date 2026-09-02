import React from "react";

export function NavBar({ items = [{ label: "About", href: "#" }, { label: "Directions", href: "#" }], style, ...rest }) {
  return (
    <nav style={{ height: 31, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", padding: "0 30px", boxSizing: "border-box", alignSelf: "stretch", ...style }} {...rest}>
      {items.map((it, i) => (
        <a key={i} href={it.href || "#"} onClick={it.onClick} style={{ textDecoration: "none", cursor: "pointer", fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 26, lineHeight: 1.2, letterSpacing: "-0.02em", textTransform: "uppercase", color: "var(--text-primary)", whiteSpace: "nowrap" }}>{it.label}</a>
      ))}
    </nav>
  );
}
