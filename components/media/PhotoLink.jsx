import React from "react";

export function PhotoLink({ src, alt = "", label = "Link", href = "#", size = 180, style, ...rest }) {
  return (
    <a href={href} style={{ textDecoration: "none", width: size, display: "flex", flexDirection: "column", gap: 7, alignItems: "flex-start", ...style }} {...rest}>
      <div role="img" aria-label={alt} style={{ height: 154, alignSelf: "stretch", overflow: "hidden", background: `linear-gradient(var(--scrim-photo),var(--scrim-photo)), url(${src}) center / cover no-repeat` }} />
      <span style={{ fontFamily: "var(--font-label)", fontWeight: 500, fontSize: 12, lineHeight: 1.4, letterSpacing: "-0.01em", color: "var(--text-primary)" }}>{label}</span>
    </a>
  );
}
